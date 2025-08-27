---
navigation:
    title: 流体收集
    icon: 'minecraft:water_bucket'
    parent: gameplay.md
item_ids:
    - 'immersiveengineering:fluid_pump'
    - 'immersiveengineering:fluid_pump'
    - 'mekanism:electric_pump'
    - 'techopolis:ambient_water_collector'
---

# 环境集水器

环境集水器每刻可以产出1mB的水。


<Recipe id="techopolis:ambient_water_collector" />


# 沉浸工程的流体泵

下一级的产水机器是沉浸工程的流体泵。除了水之外，流体泵还能泵取其他流体。如果泵取处是无限水的话，流体泵将会持续泵入。

<Recipe id="immersiveengineering:crafting/fluid_pump" />

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/pump.nbt" />
</GameScene>

# 通用机械的电动泵

下一级的产水机器是通用机械的电动泵。除了水之外，电动泵还能泵取其他流体。如果泵取处是无限水的话，电动泵将会持续泵入。可通过通用机械的速度升级来大幅提高产水量。

<Recipe id="mekanism:electric_pump" />

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/pump_2.nbt" />
</GameScene>
