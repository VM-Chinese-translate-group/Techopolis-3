---
navigation:
    title: Casting多方块结构控制器
    icon: 'casting:multiblock_controller'
    parent: mods.md
    position: 11
item_ids:
    - 'casting:multiblock_controller'
    - 'casting:multiblock_solidifier'
    - 'casting:multiblock_fuel_tank'
    - 'casting:multiblock_coolant_tank'
    - 'casting:multiblock_mixer'
    - 'casting:multiblock_valve'
    - 'casting:multiblock_regulator'


---

# Casting多方块结构控制器

模组Casting现在拥有了多方块结构。你可以用它来搭建自定义尺寸的多方块结构，以满足你所有的自动化需求。

# 入门指南

要开始搭建多方块结构，你必须先拥有一套简易铸造设备，用以制造多方块结构所需的方块。

# 多方块结构控制器

多方块结构控制器是Casting的核心，物品将在控制器内被熔化。要正常使用多方块结构控制器，你需要在结构的墙壁上放置以个多方块结构燃料储罐。控制器将共享储罐系统，这意味着你可以熔化和储存的流体种类没有限制。控制器的物品和流体容量会根据多方块结构的尺寸增加，最多可达60个物品槽和1,000,000mb的流体容量。控制器也可以设置过滤器，以只允许特定物品进入其槽位。

# 简易的多方块结构控制器

一个小型多方块结构的示例，提供一个物品槽和1000mb的流体存储空间。

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/casting/simple_multiblock_controller.nbt" />
</GameScene>

# 多方块结构控制器示例

你可以将它扩展到几乎任何你想要的尺寸，以下是几个示例。

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/casting/advanced_multiblock_controller.nbt" />
</GameScene>

<GameScene zoom="2" interactive={true}>
  <ImportStructure src="../assets/structures/casting/complex_multiblock_controller.nbt" />
</GameScene>

# 多方块结构燃料储罐

它们为多方块结构提供燃料，并允许你在控制器中熔化物品。

# 多方块结构固化器

与简易固化器功能相同，可以设置流体过滤器以只处理特定流体，或者不设置过滤器以处理任何它能处理的流体。

# 多方块结构冷却液储罐

多方块结构冷却液储罐为多方块固化器提供冷却，从而加速固化器的运作。

# 多方块结构阀

多方块结构阀是流体的输入和输出接口。可以设置过滤器，以只允许特定的流体从其输入或输出。多方块结构阀也可以用来向控制器中输入物品。

# 多方块结构混合器

实现可控的流体合金操作！多方块结构混合器可以检测多方块结构控制器内储存的流体，并判断可以制造出哪些合金。当选择一种合金后，它会尽其所能地制造该合金！

# 多方块结构调节器

将这些方块放置在多方块结构的墙壁上，可以对储罐进行调控。例如，在墙壁中放置3个调节器，会为3种不同的流体平均地预留储罐空间。不放置调节器则会保持默认行为。
