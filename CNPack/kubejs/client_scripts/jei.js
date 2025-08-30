RecipeViewerEvents.removeEntriesCompletely('item', event =>{
    event.remove('#techopolis:banned_items')
    event.remove('moderndynamics:lv_cable') 
    event.remove('moderndynamics:mv_cable') 
    event.remove('moderndynamics:hv_cable') 
    event.remove('moderndynamics:superconductor_cable') 
    event.remove('moderndynamics:ev_cable') 
    
})

RecipeViewerEvents.addEntries('item', event =>{

    event.add('strainers:nickel_ore_piece')
    event.add('strainers:lead_ore_piece')
    event.add('immersiveengineering:graphite_electrode[unbreakable={}]')
    event.add(['immersiveengineering:arc_furnace','immersiveengineering:crusher', 'immersiveengineering:sawmill', 'immersiveengineering:metal_press', 'immersiveengineering:lightning_rod', 'immersiveengineering:fermenter', 'immersiveengineering:excavator', 'immersiveengineering:diesel_generator', 'immersiveengineering:coke_oven', 'immersiveengineering:bottling_machine', 'immersiveengineering:advanced_blast_furnace', 'immersiveengineering:blast_furnace', 'immersiveengineering:auto_workbench', 'immersiveengineering:assembler', 'immersiveengineering:alloy_smelter', 'immersiveengineering:mixer', 'immersiveengineering:refinery', 'immersiveengineering:tank', 'immersiveengineering:silo', 'immersiveengineering:squeezer', 'immersiveengineering:radio_tower'])

})

ItemEvents.modifyTooltips(event => {

    event.add('modular_machinery_reborn:inputbus_reinforced',[
        Text.of('§4使用物品计量器来输入物品，否则物品将被吞掉')
    ])

})