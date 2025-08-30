Platform.getInfo('techopolis').name = 'Techopolis'

StartupEvents.registry("item", (event) => {

    event.create('techopolis:wooden_gear').tag('c:gears/wooden').tag('c:gears')
    event.create('techopolis:stone_gear').tag('c:gears/stone').tag('c:gears')
    event.create('techopolis:coal_gear').tag('c:gears/coal').tag('c:gears') 
    event.create('techopolis:stone_rod').tag('c:rods/stone').tag('c:rods')
    event.create('techopolis:glass_shard')
    event.create('techopolis:manufactured_osmium')
    event.create('techopolis:enriched_flint').texture('mekanism:item/enriched_tin').color(0x808080)
    event.create('techopolis:enriched_moon_dust').texture('mekanism:item/enriched_tin').color(0x4A4A4A)
    event.create('techopolis:burnt_redstone')
    event.create('techopolis:dimensional_dust')
    event.create('techopolis:raw_hop_graphite_dust').displayName('Raw HOP Graphite Dust')
    event.create('techopolis:purified_bio_fuel')
    event.create('techopolis:cyanite_nugget').tag('c:nuggets/cyanite').tag('c:nuggets')
    event.create('techopolis:cyanite_plate').tag('c:plates/cyanite').tag('c:plates')
    event.create('techopolis:desh_gear').tag('c:gears/desh').tag('c:gears')
    event.create('techopolis:ostrum_rod').tag('c:rods/ostrum').tag('c:rods')
    event.create('techopolis:neptunium_plate').tag('c:plates/neptunium').tag('c:plates')

    event.create('techopolis:fluid_recycling_coupon')
    event.create('techopolis:item_recycling_coupon')
    event.create('techopolis:infinite_me_storage_component').displayName('Infinite ME Storage Component')
    event.create('techopolis:super_empowered_crystal')
   
    event.create('techopolis:alien_prediction').displayName('Generalized Alien Prediction')
    event.create('techopolis:shooting_star_piece')
    event.create('techopolis:mogler_hide')
    event.create('techopolis:martian_claw')
    event.create('techopolis:pygro_nugget')
    event.create('techopolis:alien_ingot')
    event.create('techopolis:moon_curd')
    event.create('techopolis:turbine_coil_wire')

    event.create('techopolis:chorus_flower_harvester')
    event.create('techopolis:shulker_pearl')
    event.create('techopolis:dragon_slayer_5000').tooltip('一把用来斩杀末影龙的剑') 
    event.create('techopolis:shulker_plate') 

    event.create('techopolis:undefined_singularity')

    event.create('techopolis:weather_module_thunder')
    event.create('techopolis:weather_module_clear')
    event.create('techopolis:weather_module_rain')

    event.create('techopolis:the_ultimate_plate').tag('c:plates')
    event.create('techopolis:the_ultimate_gear').tag('c:gears')
    event.create('techopolis:the_ultimate_rod').tag('c:rod')
    event.create('techopolis:gigatronium_ingot').tag('c:ingots/gigatronium').tag('c:ingots')

    event.create('techopolis:pure_metallic_matter').tag('techopolis:pure_matter').tag('techopolis:metallic').texture('techopolis:item/metallic')
    event.create('techopolis:pure_nether_matter').tag('techopolis:pure_matter').tag('techopolis:nether').texture('techopolis:item/nether')
    event.create('techopolis:pure_organic_matter').tag('techopolis:pure_matter').tag('techopolis:organic').texture('techopolis:item/organic')
    event.create('techopolis:pure_ender_matter').tag('techopolis:pure_matter').tag('techopolis:ender').texture('techopolis:item/ender')
    event.create('techopolis:pure_precious_matter').tag('techopolis:pure_matter').tag('techopolis:precious').texture('techopolis:item/precious')
    event.create('techopolis:pure_quantum_matter').tag('techopolis:pure_matter').tag('techopolis:quantum').texture('techopolis:item/quantum')
    event.create('techopolis:pure_living_matter').tag('techopolis:pure_matter').tag('techopolis:living').texture('techopolis:item/living')
    event.create('techopolis:pure_earth_matter').tag('techopolis:pure_matter').tag('techopolis:earth').texture('techopolis:item/earth')
    
    event.create('techopolis:pure_matter_mold').tag('casting:molds')


    //Mod Mastery Books
    /*
    event.create('techopolis:mod_mastery_book')

    event.create('techopolis:mm_mekanism').tag('techopolis:mod_mastery_books').tooltip('Mastery of Mekanism').displayName('Mod Mastery: Mekanism')
    event.create('techopolis:mm_immersive_engineering').tag('techopolis:mod_mastery_books').tooltip('Mastery of Immersive Engineering').displayName('Mod Mastery: Immersive Engineering')
    event.create('techopolis:mm_casting').tag('techopolis:mod_mastery_books').tooltip('Mastery of Casting').displayName('Mod Mastery: Casting')
    event.create('techopolis:mm_stellaris').tag('techopolis:mod_mastery_books').tooltip('Mastery of Stellaris').displayName('Mod Mastery: Stellaris')
    event.create('techopolis:mm_actually_additions').tag('techopolis:mod_mastery_books').tooltip('Mastery of Actually Additions').displayName('Mod Mastery: Actually Additions')
    event.create('techopolis:mm_ae2').tag('techopolis:mod_mastery_books').tooltip('Mastery of Applied Energistics 2').displayName('Mod Mastery: Applied Energistics 2')
    event.create('techopolis:mm_extreme_reactors').tag('techopolis:mod_mastery_books').tooltip('Mastery of Extreme Reactors').displayName('Mod Mastery: Extreme Reactors')
    event.create('techopolis:mm_hnn').tag('techopolis:mod_mastery_books').tooltip('Mastery of Hostile Neural Networks').displayName('Mod Mastery: Hostile Neural Networks')
    event.create('techopolis:mm_replication').tag('techopolis:mod_mastery_books').tooltip('Mastery of Replication').displayName('Mod Mastery: Replication')
    event.create('techopolis:mm_extended_crafting').tag('techopolis:mod_mastery_books').tooltip('Mastery of Extended Crafting').displayName('Mod Mastery: Extended Crafting')
    event.create('techopolis:mm_compressed_blocks').tag('techopolis:mod_mastery_books').tooltip('Mastery of Compressed Blocks').displayName('Mod Mastery: Compressed Blocks')  
    */
    
    //Keys
    event.create("techopolis:ender_portal", 'roomopolis_key')
        .templateId("techopolis:portal_frame")
        .heightAdjustment(-3)
        .consumeKey(true)
        .frontAdjustment(-4)
        .tooltip("右击地面生成空的末地传送门框架")
        
    //Immersive Placers - moved to Placers mod
    /*
    event.create("techopolis:arc_furnace_placer", 'roomopolis_key').templateId("techopolis:arc_furnace")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(2).consumeKey(false).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:mixer_placer", 'roomopolis_key').templateId("techopolis:mixer")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(1).consumeKey(false).frontAdjustment(0).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:refinery_placer", 'roomopolis_key').templateId("techopolis:refinery")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(1).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:bottling_machine_placer", 'roomopolis_key').templateId("techopolis:bottling_machine")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(1).consumeKey(false).frontAdjustment(0).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:crusher_placer", 'roomopolis_key').templateId("techopolis:crusher")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(1).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:blast_furnace_placer", 'roomopolis_key').templateId("immersiveengineering:multiblocks/blast_furnace")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(1).consumeKey(false).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:improved_blast_furnace_placer", 'roomopolis_key').templateId("techopolis:improved_blast_furnace")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(2).consumeKey(false).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:metal_press_placer", 'roomopolis_key').templateId("immersiveengineering:multiblocks/metal_press")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(1).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:fermenter_placer", 'roomopolis_key').templateId("techopolis:fermenter")
        .keyBlock("techopolis:immersive_multiblock_controller").heightAdjustment(1).consumeKey(false).frontAdjustment(0).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")
    */

    //Miners
    event.create("techopolis:sand_miner", 'roomopolis_key').templateId("techopolis:sand_miner")
        .keyBlock("#techopolis:miners").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').displayName('Sand Miner Placer').texture("minecraft:item/paper")

    event.create("techopolis:gravel_miner", 'roomopolis_key').templateId("techopolis:gravel_miner")
        .keyBlock("#techopolis:miners").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').displayName('Gravel Miner Placer').texture("minecraft:item/paper")

    event.create("techopolis:clay_miner", 'roomopolis_key').templateId("techopolis:clay_miner")
        .keyBlock("#techopolis:miners").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').displayName('Clay Miner Placer').texture("minecraft:item/paper")

    event.create("techopolis:cobblestone_miner", 'roomopolis_key').templateId("techopolis:cobblestone_miner")
        .keyBlock("#techopolis:miners").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').displayName('Cobblestone Miner Placer').texture("minecraft:item/paper")

    event.create("techopolis:stone_miner", 'roomopolis_key').templateId("techopolis:stone_miner")
        .keyBlock("#techopolis:miners").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').displayName('Stone Miner Placer').texture("minecraft:item/paper")

    event.create("techopolis:grout_miner", 'roomopolis_key').templateId("techopolis:grout_miner")
        .keyBlock("#techopolis:miners").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').displayName('Grout Miner Placer').texture("minecraft:item/paper")

    //Technium Machines
    event.create("techopolis:basic_technium_machine_placer", 'roomopolis_key').templateId("techopolis:basic_technium_machine")
        .keyBlock("techopolis:basic_technium_machine").heightAdjustment(3).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")
    
    event.create("techopolis:advanced_technium_machine_placer", 'roomopolis_key').templateId("techopolis:advanced_technium_machine")
        .keyBlock("techopolis:advanced_technium_machine").heightAdjustment(3).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")
    
    event.create("techopolis:elite_technium_machine_placer", 'roomopolis_key').templateId("techopolis:elite_technium_machine")
        .keyBlock("techopolis:elite_technium_machine").heightAdjustment(3).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:ultimate_technium_machine_placer", 'roomopolis_key').templateId("techopolis:ultimate_technium_machine")
        .keyBlock("techopolis:ultimate_technium_machine").heightAdjustment(3).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:hellish_technium_machine_placer", 'roomopolis_key').templateId("techopolis:hellish_technium_machine")
        .keyBlock("techopolis:hellish_technium_machine").heightAdjustment(4).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:lunar_technium_machine_placer", 'roomopolis_key').templateId("techopolis:lunar_technium_machine")
        .keyBlock("techopolis:lunar_technium_machine").heightAdjustment(5).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:end_technium_machine_placer", 'roomopolis_key').templateId("techopolis:end_technium_machine")
        .keyBlock("techopolis:end_technium_machine").heightAdjustment(6).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    event.create("techopolis:final_technium_machine_placer", 'roomopolis_key').templateId("techopolis:final_technium_machine")
        .keyBlock("techopolis:final_technium_machine").heightAdjustment(6).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Alloy Kiln
    event.create("techopolis:alloy_kiln_placer", 'roomopolis_key').templateId("techopolis:alloy_kiln")
        .keyBlock("techopolis:alloy_kiln").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")
        
    //Dimensional Infuser
    event.create("techopolis:dimensional_infuser_placer", 'roomopolis_key').templateId("techopolis:dimensional_infuser")
        .keyBlock("techopolis:dimensional_infuser").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Dimensional Ore Extractor
    event.create("techopolis:dimensional_ore_extractor_placer", 'roomopolis_key').templateId("techopolis:dimensional_ore_extractor")
        .keyBlock("techopolis:dimensional_ore_extractor").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Reprocessor
    event.create("techopolis:reprocessor_placer", 'roomopolis_key').templateId("techopolis:reprocessor")
        .keyBlock("techopolis:reprocessor").heightAdjustment(3).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Nuclear Reactor
    event.create("techopolis:nuclear_reactor_placer", 'roomopolis_key').templateId("techopolis:nuclear_reactor")
        .keyBlock("techopolis:nuclear_reactor").heightAdjustment(5).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Moon Quarry
    event.create("techopolis:moon_quarry_placer", 'roomopolis_key').templateId("techopolis:moon_quarry")
        .keyBlock("techopolis:moon_quarry").heightAdjustment(4).consumeKey(false).frontAdjustment(-3).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Industrial Strainer
    event.create("techopolis:industrial_strainer_placer", 'roomopolis_key').templateId("techopolis:industrial_strainer")
        .keyBlock("techopolis:industrial_strainer").heightAdjustment(2).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Oil Pump
    event.create("techopolis:oil_pump_placer", 'roomopolis_key').templateId("techopolis:oil_pump")
        .keyBlock("techopolis:oil_pump").heightAdjustment(4).consumeKey(false).frontAdjustment(1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")    
    
    //Ancient Infuser
    event.create("techopolis:ancient_infuser_placer", 'roomopolis_key').templateId("techopolis:ancient_infuser")
        .keyBlock("techopolis:ancient_infuser").heightAdjustment(3).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Interdimensional Infuser
    event.create("techopolis:interdimensional_infuser_placer", 'roomopolis_key').templateId("techopolis:interdimensional_infuser")
        .keyBlock("techopolis:interdimensional_infuser").heightAdjustment(3).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")

    //Reactor 
    event.create("techopolis:simple_reactor_placer", 'roomopolis_key').templateId("techopolis:simple_reactor")
        .keyBlock("bigreactors:basic_reactorcontroller").heightAdjustment(1).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")    

    //Technium Compressor
    event.create("techopolis:technium_compressor_placer", 'roomopolis_key').templateId("techopolis:technium_compressor")
        .keyBlock("techopolis:technium_compressor").heightAdjustment(4).consumeKey(false).frontAdjustment(-1).removeDoor(false).blocksRequired(true).tag('techopolis:placers').texture("minecraft:item/paper")




        //probably not needed
    //event.create('techopolis:enriched_osmium').tag('mekanism:enriched').tag('mekanism:enriched/osmium')

    event.create('techopolis:unstable_matter')
    event.create('techopolis:drawer_core')
    event.create('techopolis:drawer_core_2')
    event.create('techopolis:drawer_core_4')
    event.create('techopolis:compacting_core')
    event.create('techopolis:toms_core')

    event.create('techopolis:elevator_teleportation_core')
    event.create('techopolis:ender_teleportation_core')
    event.create('techopolis:dimensional_teleportation_core')
    event.create('techopolis:wither_skeleton_bone')
    event.create('techopolis:simulation_pearl')
    event.create('techopolis:blazing_sawdust')
    event.create('techopolis:time_crystal')
    event.create('techopolis:heavy_duty_plating')
    event.create('techopolis:canned_food').food(food => food
        .nutrition(3)
        .saturation(0.6)
    ).tag('stellaris:space_food')

    event.create('techopolis:obsidiglow_ingot').tag('c:ingots/obsidiglow').tag('c:ingots')
    event.create('techopolis:cheesium_ingot').tag('c:ingots/cheesium').tag('c:ingots')
    event.create('techopolis:ostrum_ingot').tag('c:ingots/ostrum').tag('c:ingots')

   // event.create('techopolis:resourceful_shovel', 'shovel').tier('stone')

   //Curios
    event.create('techopolis:curio')
    event.create('techopolis:resource_curio').tag('curios:charm').tooltip('提供额外的掉落物，仅在空岛和超平坦模式有效')
    event.create('techopolis:hunger_curio').tag('curios:charm').tooltip('防止饥饿，仅限于主世界')
    event.create('techopolis:speed_1_curio').tag('curios:charm').tooltip('提供迅捷II效果，仅限于主世界').displayName('Advanced Speed Curio')
    event.create('techopolis:speed_2_curio').tag('curios:charm').tooltip('提供迅捷III效果，仅限于主世界').displayName('Elite Speed Curio')
    event.create('techopolis:speed_3_curio').tag('curios:charm').tooltip('提供迅捷IV效果，仅限于主世界').displayName('Ultimate Speed Curio')
    event.create('techopolis:heat_protection_curio_1').maxDamage(6000).tag('curios:charm').tag('techopolis:heat_protection_curio').tooltip('抵御下界的高温，一共持续5分钟')
    event.create('techopolis:heat_protection_curio_2').maxDamage(12000).tag('curios:charm').tag('techopolis:heat_protection_curio').tooltip('抵御下界的高温，一共持续10分钟')
    event.create('techopolis:heat_protection_curio_3').tag('curios:charm').tag('techopolis:heat_protection_curio').tooltip('抵御下界的高温，永久有效')

    //Rock Enricher Focuses
    event.create('techopolis:granite_focus')
    event.create('techopolis:andesite_focus')
    event.create('techopolis:diorite_focus')

    event.create('techopolis:iron_focus')
    event.create('techopolis:copper_focus')
    event.create('techopolis:tin_focus')
    event.create('techopolis:aluminum_focus')

    event.create('techopolis:silver_focus')
    event.create('techopolis:lead_focus')
    event.create('techopolis:nickel_focus')

    //Infinity Cells - Fluids
    event.create('techopolis:creosote_infinity_cell', 'custom_infinity_cell')
        .texture('techopolis:item/creosote_cell')
        .tag('techopolis:infinity_cells')
        .fluidType('immersiveengineering:creosote')
    
    event.create('techopolis:lava_infinity_cell', 'custom_infinity_cell')
        .texture('techopolis:item/lava_cell')
        .tag('techopolis:infinity_cells')
        .fluidType('minecraft:lava')

    //Infinity Cells - Items
    event.create('techopolis:sand_infinity_cell', 'custom_infinity_cell')
        .texture('techopolis:item/sand_cell')
        .tag('techopolis:infinity_cells')
        .itemType('minecraft:sand')

    event.create('techopolis:gravel_infinity_cell', 'custom_infinity_cell')
        .texture('techopolis:item/gravel_cell')
        .tag('techopolis:infinity_cells')
        .itemType('minecraft:gravel')

    event.create('techopolis:stone_infinity_cell', 'custom_infinity_cell')
        .texture('techopolis:item/stone_cell')
        .tag('techopolis:infinity_cells')
        .itemType('minecraft:stone')

    event.create('techopolis:clay_infinity_cell', 'custom_infinity_cell')
        .texture('techopolis:item/clay_cell')
        .tag('techopolis:infinity_cells')
        .itemType('minecraft:clay')

    event.create('techopolis:grout_infinity_cell', 'custom_infinity_cell')
        .texture('techopolis:item/grout_cell')
        .tag('techopolis:infinity_cells')
        .itemType('techopolis:grout')

    //Data Model Changes
    event.create('techopolis:passive_data_model')
    event.create('techopolis:hostile_data_model')
    event.create('techopolis:neutral_data_model')
    event.create('techopolis:nether_data_model')
    event.create('techopolis:alien_data_model')
    event.create('techopolis:ender_data_model')
    event.create('techopolis:boss_data_model')

    //Technium
    event.create('techopolis:basic_technium_nugget')
    event.create('techopolis:basic_technium_ingot')
    event.create('techopolis:advanced_technium_nugget')
    event.create('techopolis:advanced_technium_ingot')
    event.create('techopolis:elite_technium_nugget')
    event.create('techopolis:elite_technium_ingot')
    event.create('techopolis:ultimate_technium_nugget')
    event.create('techopolis:ultimate_technium_ingot')
    event.create('techopolis:hellish_technium_nugget')
    event.create('techopolis:hellish_technium_ingot')
    event.create('techopolis:lunar_technium_nugget')
    event.create('techopolis:lunar_technium_ingot')
    event.create('techopolis:end_technium_nugget')
    event.create('techopolis:end_technium_ingot')
    event.create('techopolis:final_technium_nugget')
    event.create('techopolis:final_technium_ingot')


    //Research
    event.create('techopolis:basic_research').tag('techopolis:research')
    event.create('techopolis:advanced_research').tag('techopolis:research')
    event.create('techopolis:elite_research').tag('techopolis:research')
    event.create('techopolis:ultimate_research').tag('techopolis:research')
    event.create('techopolis:hellish_research').tag('techopolis:research')

    //Event Items
    event.create('techopolis:simple_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:basic_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:advanced_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:elite_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:ultimate_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:hellish_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:lunar_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:end_easter_egg').tag('techopolis:easter_eggs')
    event.create('techopolis:easter_egg_shell')
    event.create('techopolis:easter_egg_mold')

    //Blueprints - Basic - WIP Textures

    //Blueprints - Basic
    event.create('techopolis:rock_enricher_blueprint').texture('techopolis:item/basic_blueprint_e').tooltip('可以用于制作岩石富集器').tag('techopolis:blueprints')
    event.create('techopolis:flight_block_blueprint').texture('techopolis:item/basic_blueprint_f').tooltip('可以用于制作飞行方块').tag('techopolis:blueprints')
    event.create('techopolis:auto_crafter_blueprint').texture('techopolis:item/basic_blueprint_c').tooltip('可以用于制作自动合成机').tag('techopolis:blueprints')
    event.create('techopolis:drawers_blueprint').texture('techopolis:item/basic_blueprint_d').tooltip('可以用于制作储物抽屉相关物品').tag('techopolis:blueprints')
    event.create('techopolis:drawer_controller_blueprint').texture('techopolis:item/basic_blueprint_dc').tooltip('可以用于制作抽屉控制器').tag('techopolis:blueprints')
    event.create('techopolis:toms_blueprint').texture('techopolis:item/basic_blueprint_t').tooltip('可以用于制作汤姆的简易存储相关物品').tag('techopolis:blueprints')
    event.create('techopolis:alloys_blueprint').texture('techopolis:item/basic_blueprint_a').tooltip('可以用于制作窑砖和高炉砖').tag('techopolis:blueprints')
    event.create('techopolis:automatic_alloy_kiln_blueprint').texture('techopolis:item/basic_blueprint_k').tooltip('可以用于制作自动合金窑多方块结构').tag('techopolis:blueprints')
    event.create('techopolis:obsidian_blueprint').texture('techopolis:item/basic_blueprint_o').tooltip('可以在自动合金窑中生产黑曜石').tag('techopolis:blueprints')
    event.create('techopolis:compressed_furnace_blueprint').texture('techopolis:item/basic_blueprint_b').tooltip('可以用于制作压缩熔炉').tag('techopolis:blueprints')
    event.create('techopolis:summoning_block_blueprint').texture('techopolis:item/basic_blueprint_summoning').tooltip('可以用于制作召唤方块').tag('techopolis:blueprints')
    event.create('techopolis:dye_base_blueprint').texture('techopolis:item/basic_blueprint_y').tooltip('可以用于制作染料基础，进而制作各种染料').tag('techopolis:blueprints')


    //Blueprints - Advanced - WIP Textures

    //Blueprints - Advanced 
    event.create('techopolis:manufactured_osmium_blueprint').texture('techopolis:item/advanced_blueprint_o').tooltip('可以用于制作人造锇').tag('techopolis:blueprints')
    event.create('techopolis:drawer_upgrades_blueprint').texture('techopolis:item/advanced_blueprint_du').tooltip('可以用于制造各种抽屉升级').tag('techopolis:blueprints')
    event.create('techopolis:drawer_compacting_blueprint').texture('techopolis:item/advanced_blueprint_dc').tooltip('可以用于制造各种压缩抽屉').tag('techopolis:blueprints')
    event.create('techopolis:fluid_recycling_blueprint').texture('techopolis:item/advanced_blueprint_f').tooltip('可以用于制造流体回收机').tag('techopolis:blueprints')
    event.create('techopolis:advanced_miners_blueprint').texture('techopolis:item/advanced_blueprint_m').tooltip('可以用于制造高级矿机').tag('techopolis:blueprints')
    event.create('techopolis:advanced_research_crafter_blueprint').texture('techopolis:item/advanced_blueprint_r').tooltip('可以用于制造高级研究工作台').tag('techopolis:blueprints')
    event.create('techopolis:item_recycling_blueprint').texture('techopolis:item/advanced_blueprint_i').tooltip('可以用于制造物品回收机').tag('techopolis:blueprints')
    event.create('techopolis:hunger_curio_blueprint').texture('techopolis:item/advanced_blueprint_h').tooltip('可以用于制造饥饿饰品').tag('techopolis:blueprints')
    event.create('techopolis:speed_1_curio_blueprint').texture('techopolis:item/advanced_blueprint_s1').tooltip('可以用于制造第一级的速度饰品').tag('techopolis:blueprints')

    //Blueprints - Elite - WIP Textures

    //Blueprints - Elite 
    event.create('techopolis:ender_storage_blueprint').texture('techopolis:item/elite_blueprint_ender').tooltip('可以用于制造末影箱子和末影蓄水槽').tag('techopolis:blueprints')
    event.create('techopolis:elevator_blueprint').texture('techopolis:item/elite_blueprint_e').tooltip('可以用于制造电梯').tag('techopolis:blueprints')
    event.create('techopolis:unstable_matter_blueprint').texture('techopolis:item/elite_blueprint_a').tooltip('可以用于制造包含不稳定物质的物质蓝图，进而在复制器中制造不稳定物质').tag('techopolis:blueprints')
    event.create('techopolis:ultimine_blueprint').texture('techopolis:item/elite_blueprint_u').tooltip('可以用于制造Miners Certificate').tag('techopolis:blueprints')
    event.create('techopolis:unbreakable_electrodes_blueprint').texture('techopolis:item/elite_blueprint_l').tooltip('可以用于制造无法破坏的石墨电极').tag('techopolis:blueprints')
    event.create('techopolis:speed_2_curio_blueprint').texture('techopolis:item/elite_blueprint_s2').tooltip('可以用于制造第二级的速度饰品').tag('techopolis:blueprints')
    event.create('techopolis:waystones_blueprint').texture('techopolis:item/elite_blueprint_w').tooltip('可以用于制造传送石').tag('techopolis:blueprints')
    event.create('techopolis:elite_miners_blueprint').texture('techopolis:item/elite_blueprint_m').tooltip('可以用于制造精英矿机').tag('techopolis:blueprints')
    event.create('techopolis:elite_research_crafter_blueprint').texture('techopolis:item/elite_blueprint_r').tooltip('可以用于制造精英研究工作台').tag('techopolis:blueprints')


    //Blueprints - Ultimate - WIP Textures
    event.create('techopolis:boss_data_model_blueprint').texture('techopolis:item/ultimate_blueprint_d').tooltip('可以用于制造Boss数据模型').tag('techopolis:blueprints')
    event.create('techopolis:time_in_a_bottle_blueprint').texture('techopolis:item/ultimate_blueprint_t').tooltip('可以用于制造时间水晶').tag('techopolis:blueprints')

    //Blueprints - Ultimate
    event.create('techopolis:infinity_cells_blueprint').texture('techopolis:item/ultimate_blueprint_i').tooltip('可以用于制造无限ME存储组件').tag('techopolis:blueprints')
    event.create('techopolis:speed_3_curio_blueprint').texture('techopolis:item/ultimate_blueprint_s3').tooltip('可以用于制造第三级的速度饰品').tag('techopolis:blueprints')
    event.create('techopolis:bigger_reactors_blueprint').texture('techopolis:item/ultimate_blueprint_b').tooltip('可以用于制造强化反应堆').tag('techopolis:blueprints')
    event.create('techopolis:ultimate_miners_blueprint').texture('techopolis:item/ultimate_blueprint_m').tooltip('可以用于制造终极矿机').tag('techopolis:blueprints')
    event.create('techopolis:ultimate_research_crafter_blueprint').texture('techopolis:item/ultimate_blueprint_r').tooltip('可以用于制造终极研究工作台').tag('techopolis:blueprints')
    event.create('techopolis:wireless_charging_blueprint').texture('techopolis:item/ultimate_blueprint_w').tooltip('可以用于制造无线充能台').tag('techopolis:blueprints')


    //Ore Processing

    function createOreProcessing(type, color) {
        event.create(`techopolis:${type}_crystal`).tag(`c:crystals/${type}`).tag(`c:crystals`).texture(`mekanism:item/crystal_tin`).color(color)
        event.create(`techopolis:${type}_shard`).tag(`c:shards/${type}`).tag(`c:shards`).texture(`mekanism:item/shard_tin`).color(color)
        event.create(`techopolis:${type}_clump`).tag(`c:clumps/${type}`).tag(`c:clumps`).texture(`mekanism:item/clump_tin`).color(color)
        event.create(`techopolis:dirty_${type}_dust`).tag(`c:dirty_dusts/${type}`).tag(`c:dirty_dusts`).texture(`mekanism:item/dirty_dust_tin`).color(color)
        event.create(`techopolis:${type}_dust`).tag(`c:dusts/${type}`).tag(`c:dusts`).texture(`mekanism:item/dust_tin`).color(color)
    }

    createOreProcessing('coal', 0x252525)
    createOreProcessing('iron', 0xD5AA87)
    createOreProcessing('gold', 0xF5E556)
    createOreProcessing('copper', 0xCA7B59)
    createOreProcessing('tin', 0xCDCDE0)
    createOreProcessing('diamond', 0x5BFCFF)
    createOreProcessing('emerald', 0x4BD254)
    createOreProcessing('redstone', 0xCB1E0F)
    createOreProcessing('lapis', 0x3A6EE4)
    createOreProcessing('aluminum', 0xD6E5EC)
    createOreProcessing('lead', 0x788ABE)
    createOreProcessing('nickel', 0xD9D5BE)
    createOreProcessing('osmium', 0xAEC5D0)
    createOreProcessing('platinum', 0xACAACD)
    createOreProcessing('silver', 0xE7ECF4)
    createOreProcessing('uranium', 0x97E282)
    createOreProcessing('zinc', 0xCEDDE4)
    createOreProcessing('ender', 0x007F78)
    createOreProcessing('replica', 0x1F232D)
    createOreProcessing('black_quartz', 0x35404E)
    createOreProcessing('quartz', 0xEBE7E3)
    createOreProcessing('cheesium', 0xEA7514)
    createOreProcessing('ostrum', 0x261F1F)
    createOreProcessing('desh', 0xB4563B)
    createOreProcessing('neptunium', 0x7B8888)
    createOreProcessing('iridium', 0xD1CCC6)
    createOreProcessing('anglesite', 0xF2C545)

})

ItemEvents.modification(event => {
    event.modify('hostilenetworks:blank_data_model', item => {
      item.maxStackSize = 64
    })
})