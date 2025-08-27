---
navigation:
    title: 通用机械
    icon: 'mekanism:alloy_infused'
    parent: mods.md
    position: 20
---

# 通用机械

提供了各种不同的机器和技术，以供进阶发展。

# 热力蒸馏塔

这个多方块结构可以用来生产盐水以及一些其他有用的流体。结构越高，能储存的流体就越多。阀门可用于输入热量、输入流体和输出流体。

<Row>
  <Recipe id="mekanism:thermal_evaporation/block" />
  <Recipe id="mekanism:thermal_evaporation/controller" />
  <Recipe id="mekanism:thermal_evaporation/valve" />
</Row>

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/thermo_tower.nbt" />
</GameScene>
