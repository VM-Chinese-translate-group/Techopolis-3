---
navigation:
    title: 矿机
    parent: custom_machinery.md
    icon: 'techopolis:basic_miner'
    position: 49
item_ids:
  - 'techopolis:basic_miner'
  - 'techopolis:advanced_miner'
  - 'techopolis:elite_miner'
  - 'techopolis:ultimate_miner'
---

# 矿机

矿机可用于开采特定的资源。矿机分为不同的等级，每级都会提高矿机的产出量。

# 等级
- 基础 = x1
- 高级 = x2
- 精英 = x4
- 终极 = x8

*开采圆石时会在每一级的倍率上额外翻倍。

# 种类
矿机可生产以下资源：
<Row>
  <BlockImage id="minecraft:cobblestone"  scale="1.3" />
  <BlockImage id="minecraft:stone"  scale="1.3" />
  <BlockImage id="minecraft:gravel"  scale="1.3" />
  <BlockImage id="minecraft:sand"  scale="1.3" />
  <BlockImage id="minecraft:clay" scale="1.3" />
  <BlockImage id="techopolis:grout"  scale="1.3" />
</Row>

# 结构

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/modular_machinery/miner.nbt" />
</GameScene>

# 升级

在升级插槽中安装机器框架，可以加快这台机器的运行速度。

- 简易机器框架（默认时间的90%）
- 坚固机器框架 （默认时间的80%）
- 基础𬬸金机器框架 （默认时间的70%）
- 高级𬬸金机器框架 （默认时间的60%）
- 超维机器框架 （默认时间的50%）
- 精英𬬸金机器框架 （默认时间的40%）
- 终极𬬸金机器框架 （默认时间的30%）
- 地狱𬬸金机器框架 （默认时间的20%）
- 月球𬬸金机器框架 （默认时间的10%）
