---
navigation:
    title: Casting
    icon: 'casting:controller'
    parent: mods.md
    position: 10
item_ids:
    - 'casting:controller'

---

# Casting

模组Casting可用于将物品熔化成熔融态！

# 入门指南

首先，你需要焦黑砖和焦黑砖块。

<Row>
  <Recipe id="techopolis:redstone_from_ore_piece_smelting" />
  <Recipe id="techopolis:black_brick" />
  <Recipe id="casting:black_bricks" />
</Row>

# 熔化

控制器是Casting的核心，物品将在控制器内被熔化。你需要在控制器相邻格子放置一个储罐来存放燃料。控制器内部可存放最多4种流体产物。
<Row>
  <Recipe id="casting:controller" />
  <Recipe id="casting:tank" />
  <BlockImage id="casting:controller"  scale="3" />
  <BlockImage id="casting:tank"  scale="3" />
</Row>

# 固化

固化器用于将熔融的液体塑造成您所需的形状。要提高固化器的运作速度，可以在其相邻格子放置一个装有冷却液的储罐，水的冷却效果非常好。

<Row>
  <Recipe id="casting:solidifier" />
  <BlockImage id="casting:solidifier"  scale="3" />
</Row>

# 搬运流体

流体搬运器能用于在机器的GUI内对流体进行移动操作，但无法将流体注入到GUI的输出端。此外，它还可以用于向世界中的燃料罐抽取和注入流体。

<Row>
  <Recipe id="casting:fluid_mover" />
</Row>

# 模具

模具可用于在固化器中制造各种不同的资源，例如宝石、矿石粒、铸锭、粉末等等！

<Row>
  <ItemImage id="casting:ball_mold"  scale="3" />
  <ItemImage id="casting:gear_mold"  scale="3" />
  <ItemImage id="casting:plate_mold"  scale="3" />
  <ItemImage id="casting:ingot_mold"  scale="3" />
  <ItemImage id="casting:nugget_mold"  scale="3" />
  <ItemImage id="casting:rod_mold"  scale="3" />
  <ItemImage id="casting:gem_mold"  scale="3" />
  <ItemImage id="casting:gear_mold"  scale="3" />
  <ItemImage id="casting:dust_mold"  scale="3" />
</Row>

# 自动化

控制器会自动将液体排放至相邻的固化器和混合器中。
混合器会自动将液体排放至固化器中。

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/casting.nbt" />
</GameScene>
