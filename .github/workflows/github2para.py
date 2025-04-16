import asyncio
import os
import json
from pprint import pprint
from pathlib import Path
import re

import paratranz_client
from pydantic import ValidationError

import nbtlib
from nbtlib.tag import Compound, List, String, Int

configuration = paratranz_client.Configuration(host="https://paratranz.cn/api")
configuration.api_key["Token"] = os.environ["API_TOKEN"]


async def upload_file(path, file):
    async with paratranz_client.ApiClient(configuration) as api_client:
        api_instance = paratranz_client.FilesApi(api_client)
        project_id = int(os.environ["PROJECT_ID"])
        files_response = await api_instance.get_files(project_id)
        try:
            # 第一次创建文件
            api_response = await api_instance.create_file(
                project_id, file=file, path=path
            )
            pprint(api_response)
        except ValidationError:
            print(f"文件上传成功 {path}en_us.json")
        except Exception as e:
            # 如果文件已存在，说明需要更新
            try:
                msg = json.loads(e.__dict__.get("body"))["message"]
                # message 类似 "文件已存在 /xx/xx/en_us.json"
                filePath: str = msg.split(" ")[1]
            except:
                # 如果解析失败，直接抛出异常
                raise e
            for fileName in files_response:
                if fileName.name == filePath:
                    await api_instance.update_file(project_id, file_id=fileName.id, file=file)
                    print(f"文件已更新！文件路径为：{fileName.name}")


def get_filelist(dir):
    """
    获取所有 en_us.json 文件，用于上传 ParaTranz
    """
    filelist = []
    for root, _, files in os.walk(dir):
        for file in files:
            if file == "en_us.json":  # 只上传标准的 en_us.json
                filelist.append(os.path.join(root, file))
    return filelist


# ========== SNBT <-> JSON 互转工具函数 ==========

def nbt_to_json(nbt_data):
    """
    将 NBT 对象递归转换成 Python 内置的 dict / list / str / int 等
    """
    if isinstance(nbt_data, Compound):
        return {k: nbt_to_json(v) for k, v in nbt_data.items()}
    elif isinstance(nbt_data, List):
        return [nbt_to_json(item) for item in nbt_data]
    elif isinstance(nbt_data, String):
        return str(nbt_data)
    elif isinstance(nbt_data, Int):
        return int(nbt_data)
    else:
        return nbt_data  # 其他类型可根据实际需要做更多处理


def ftb_desc2normal_json(ftb_dict: dict) -> dict:
    """
    反向处理 para2github.py 中的 normal_json2_ftb_desc。
    即将形如 "quest.xxx.quest_desc" 对应的数组拆分成多行:
       quest.xxx.quest_desc => [ "行1", "行2", ...]
    拆成
       xxx.quest_desc0 => "行1"
       xxx.quest_desc1 => "行2"
       ...
    以便在 ParaTranz 中逐行翻译。
    """
    result = {}
    for key, value in ftb_dict.items():
        # 如果 key 中含有 .quest_desc，且对应 value 是列表，则拆分
        if key.endswith(".quest_desc") and isinstance(value, list):
            # 形如 quest.xxx.quest_desc
            # 取出中间的xxx作为 ID
            parts = key.split(".")
            if len(parts) >= 3:
                quest_id = parts[1]  # quest.xxx.quest_desc => 取第二段为xxx
                # 每一行拆分
                for idx, line in enumerate(value):
                    result[f"{quest_id}.quest_desc{idx}"] = line
            else:
                # 如果不符合预期格式，则原样保留
                result[key] = value
        else:
            # 其他 key 原样保留
            result[key] = value
    return result


def convert_snbt_to_json(snbt_path: str, json_path: str):
    """
    将给定的 SNBT 文件解析成 JSON 并写入 json_path。
    同时对 FTBQuests 的 desc 条目做拆分处理，方便 ParaTranz 逐行翻译。
    """
    if not os.path.exists(snbt_path):
        return False

    # 读取 SNBT 并解析为 NBT 对象
    with open(snbt_path, "r", encoding="utf-8") as f:
        snbt_content = f.read()
    nbt_data = nbtlib.parse_snbt(snbt_content)

    # 转成普通 Python dict
    raw_json = nbt_to_json(nbt_data)

    # 若需要按照 para2github.py 中的 normal_json2_ftb_desc 逻辑逆向拆分 desc:
    ftb_json = ftb_desc2normal_json(raw_json)

    # 最后写入 en_us.json
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(ftb_json, f, ensure_ascii=False, indent=4, separators=(",", ":"))
    return True


async def main():
    # 1. 如果存在 /Source/ftbquest/en_us.snbt，则转换成 en_us.json 以便后续上传
    snbt_file = Path("Source") / "ftbquest" / "en_us.snbt"
    json_file = Path("Source") / "ftbquest" / "en_us.json"

    converted = convert_snbt_to_json(str(snbt_file), str(json_file))
    if converted:
        print(f"已将 {snbt_file} 转换为 {json_file} ，等待上传至 ParaTranz。")

    # 2. 搜集所有 en_us.json 文件
    files = get_filelist("./Source")
    tasks = []

    # 3. 上传到 ParaTranz
    for file in files:
        # 以 Source 后的子路径（不含文件名）做 ParaTranz 的子目录
        # 例如 ./Source/ftbquest/en_us.json -> /ftbquest/
        path = (
            file.split("Source")[1]
            .replace("\\", "/")
            .replace(os.path.basename(file), "")
        )
        print(f"Uploading {file} to {path}")
        tasks.append(upload_file(path=path, file=file))

    await asyncio.gather(*tasks)


if __name__ == "__main__":
    asyncio.run(main())
