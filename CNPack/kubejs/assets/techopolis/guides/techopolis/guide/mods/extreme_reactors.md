---
navigation:
    title: 极限反应堆
    icon: 'bigreactors:basic_reactorcontroller'
    parent: mods.md
    position: 50
item_ids:
    - 'bigreactors:basic_reactorcontroller'
    - 'techopolis:basic_technium_turbine_coil'
    - 'techopolis:advanced_technium_turbine_coil'
    - 'techopolis:elite_technium_turbine_coil'
    - 'techopolis:ultimate_technium_turbine_coil' 
    - 'techopolis:final_technium_turbine_coil'
    - 'techopolis:end_technium_turbine_coil'
    - 'techopolis:lunar_technium_turbine_coil'
    - 'techopolis:hellish_technium_turbine_coil'
    - 'bigreactors:reinforced_turbinecontroller'
    - 'alltheores:uranium_ingot'
    - 'bigreactors:blutonium_ingot'
    - 'bigreactors:cyanite_ingot'
    - 'bigreactors:magentite_ingot'

---

# 极限反应堆

极限反应堆是一个允许你建造大型能量生产反应堆以及其他多方块结构的模组。

# 基础反应堆

基础反应堆的最大尺寸是3x3x3*。它可以使用铀或蓝钚来产生能量。结构内的空隙也可以放置额外的方块来冷却反应堆并提高反应堆效率**。搭建基础反应堆需要一个反应堆控制器（基础）、一个反应堆固体访问端口（基础）和一个反应堆主动FE能量端口（基础）。这些方块也可以用来替换下方结构图中的玻璃。

*译注：实测最小尺寸为3x3x3（多方块结构的棱、顶角由反应堆外壳搭建，结构其余外表面由反应堆外壳或反应堆玻璃或功能方块搭建）。

**译注：内部空隙只可放置上下贯通的反应堆燃料棒（最底层替换为反应堆外壳，最顶层替换为反应堆控制棒）来增加反应物容量和反应速率，而非冷却反应堆提高效率。

<Row>
  <Recipe id="bigreactors:reactor/basic/casing" />
  <Recipe id="bigreactors:reactor/basic/controller_ingots_uranium" />
</Row>
<Row>
  <Recipe id="bigreactors:reactor/basic/solidaccessport" />
  <Recipe id="bigreactors:reactor/basic/activetap_fe" />
</Row>

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/basic_reactor.nbt" />
</GameScene>

# 废料

使用铀运行反应堆会产生青氰废料，而使用蓝钚则会产生玫磁废料。

# 流化器

消耗能量来将物品转化为流体。

<Row>
  <Recipe id="bigreactors:fluidizer/casing" />
  <Recipe id="bigreactors:fluidizer/controller" />
</Row>
<Row>
  <Recipe id="bigreactors:fluidizer/powerport" />
  <Recipe id="bigreactors:fluidizer/fluidinjector" />
</Row>

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/fluidizer.nbt" />
</GameScene>

# 强化反应堆

这种反应堆的尺寸要大得多，可以用来产生巨量能量。这类反应堆需要通过大型反应堆研究来解锁。

# 涡轮机

涡轮机利用蒸汽和线圈来产生大量能量。在反应堆上安装反应堆主动流体端口并为其注水，就可以在反应堆中制造蒸汽。

<GameScene zoom="2" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/turbine.nbt" />
</GameScene>