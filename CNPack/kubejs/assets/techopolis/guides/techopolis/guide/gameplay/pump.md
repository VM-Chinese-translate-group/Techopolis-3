---
navigation:
    title: Fluid Collection
    icon: 'minecraft:water_bucket'
    parent: gameplay.md
item_ids:
    - 'immersiveengineering:fluid_pump'
    - 'immersiveengineering:fluid_pump'
    - 'mekanism:electric_pump'
    - 'techopolis:ambient_water_collector'
---

# Water Collector

A simple Water Collector creates 1mb of Water per tick


<Recipe id="techopolis:ambient_water_collector" />


# Immersive Engineering Pump

The next tier of water generation is the Immersive Engineering Pump. This can be used to collect other fluids as well as water if theres a infinite source of water this will just keep pumping

<Recipe id="immersiveengineering:crafting/fluid_pump" />

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/pump.nbt" />
</GameScene>

# Mekanism Electric Pump

The next tier of water generation is the Mekanism Electric Pump. This can be used to collect other fluids as well as water if theres a infinite source of water this will just keep pumping. Can be improved with mekanism speed upgrades to produce a lot of water

<Recipe id="mekanism:electric_pump" />

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/pump_2.nbt" />
</GameScene>
