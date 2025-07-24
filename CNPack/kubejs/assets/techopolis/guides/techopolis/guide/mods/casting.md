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

Casting is a mod that allows you to melt down items into there molten varients!

# Getting Started

First you need Black Brick and Black Bricks

<Row>
  <Recipe id="techopolis:redstone_from_ore_piece_smelting" />
  <Recipe id="techopolis:black_brick" />
  <Recipe id="casting:black_bricks" />
</Row>

# Melting

The Controller in the heart of Casting. This is where the melting of resources happens. The Controller requires a Fuel Tank adjacent to it to melt items. The Controller can store up to 4 different unique fluids inside.

<Row>
  <Recipe id="casting:controller" />
  <Recipe id="casting:tank" />
  <BlockImage id="casting:controller"  scale="3" />
  <BlockImage id="casting:tank"  scale="3" />
</Row>

# Solidifer

The Solidifier allows molten fluids to me molded into whatever items you need. The Solidifiers speed can be increased by placing a Fuel Tank with cooler fluids inside it, Water works very well.

<Row>
  <Recipe id="casting:solidifier" />
  <BlockImage id="casting:solidifier"  scale="3" />
</Row>

# Fluid Mover

The fluid mover allows you to move fluids around from inside a machines GUI. The Fluid Mover cannot place fluids into the output of a GUI. It can also be used in world on Fuel Tanks to extract and insert fluids

<Row>
  <Recipe id="casting:fluid_mover" />
</Row>

# Molds

Molds are used in the Solidifier to create various different resources including; gems, nugget, ingots, dust and more!

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

# Automation

The Controller will automatically eject its fluids to adjacent Solidifers and Mixers.
The Mixers will automatically eject its fluids into the Solidifer

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/casting.nbt" />
</GameScene>
