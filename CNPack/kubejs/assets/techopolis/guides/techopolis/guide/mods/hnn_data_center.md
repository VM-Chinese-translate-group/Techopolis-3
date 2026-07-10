---
navigation:
    title: 敌对神经网络
    icon: 'hostilenetworks:data_center'
    parent: mods.md
    position: 60
item_ids:
    - 'hostilenetworks:data_center'
    - 'minecraft:crying_obsidian'
    - 'minecraft:black_stained_glass'
    - 'connectedglass:clear_glass_black'
    - 'hostilenetworks:data_center_io_port'

---

# 敌对神经网络

敌对神经网络让你能通过训练数据模型来模拟怪物掉落物，而无需生成传统的怪物实体，也无需建造占用大量服务器资源的刷怪场。

# 数据中心

数据中心是模拟技术的巅峰之作，它能同时运行多达25个自我意识数据模型。右击一个数据模型即可选择其输出的掉落物；随后，每个启用的插槽都会消耗能量和一件输入物品，以此直接生成所选产物，从而跳过预测产物阶段并直接将其存入共享输出缓冲区。

### 结构搭建

要建造这个7x7x7的多方块结构，需先搭建一个中空外壳。其底部地板全部采用**哭泣的黑曜石**，墙壁和顶部则由**黑色染色玻璃**或**通透黑色染色玻璃**构成。数据中心控制器需要替换底部墙壁中的恰好一个方块。

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/hnn/data_center.nbt" />
</GameScene>

### IO端口与运行

IO端口是与该多方块结构进行交互必不可少的部件，它可以替换外壳墙壁或顶部的任意方块。

*   **切换模式：** 右击IO端口，可在**能量**、**模型**、**输入**和**输出**模式之间循环切换。
*   **功能：** 
    *   **能量：** 接收能量以运行模拟。
    *   **模型/输入/输出：** 暴露对应的内部物品插槽，允许你导入数据模型、输入物品以及提取生成的掉落物。