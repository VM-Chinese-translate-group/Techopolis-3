---
navigation:
    title: Casting Multiblock Controller
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

# Casting Multiblock Controller

Casting now has mutliblocks. Can be used to create a custom sized multiblock structure for all your automation needs

# Getting Started

To get into creating the mutliblock you must have a Simple Casting setup to create the mutliblocks you need

# Multiblock Controller

The Multiblock Controller in the heart of Casting. This is where the melting of resources happens. The Multiblock Controller requires a Multiblock Fuel Tank inside the walls of the structure. The Controller uses a shared tank system meaning there is no limit to the types of fluid you can melt and store. The item and fluid capacity of the controller increases depending on the size of the Multiblock, up to 60 items and 1 million mb of fluid. The controller can also be filtered to only allow certain items into its slots

# Simple Multiblock Controller

Example of a small multiblock providing a single item slot and 1000mb fluid storage

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/casting/simple_multiblock_controller.nbt" />
</GameScene>

# Multiblock Controller Examples

This can be expanded to pretty much any size you want below is a couple of examples 

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/casting/advanced_multiblock_controller.nbt" />
</GameScene>

<GameScene zoom="2" interactive={true}>
  <ImportStructure src="../assets/structures/casting/complex_multiblock_controller.nbt" />
</GameScene>

# Multiblock Fuel Tanks

These power the multiblock and allow you to melt items in the controller

# Multiblock Solidifier

Same as the Simple Solidifier, provides fluid filtering to only process a certain fluid or un filtered to process anything it can

# Multiblock Coolant Tanks

Multiblock Coolant Tanks provide cooling for the Multiblock Solidifiers, these speed up Solidifiers

# Multiblock Valve

The Multiblock Valve is an input and output for fluids. Can be filtered to only allow certain fluids to be inserted and extracted from it. The Multiblock Valve can also be used to fill the controller with items. 

# Multiblock Mixer

Controlled alloying of fluids! The Multiblock Mixer can detect which alloys it can create from the stored fluids inside the Multiblock Controller. When a fluid is selected it will create as much of the alloy as it can!

# Multiblock Regulator

Adding these into the multiblock walls will allows the tank to be regulated. EG placing 3 Regulators in the walls will reserve tank space for the 3 fluids evenly. Having no regulators will retain normal behaviour
