//Set Vanilla Game Rules 
ServerEvents.loaded(event => {

  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("doTraderSpawning", false)
  event.server.gameRules.set("doPatrolSpawning", false)
  event.server.gameRules.set("doInsomnia", false)
  event.server.persistentData.gameRules = true
})

ItemEvents.rightClicked('techopolis:ultimine_scroll', event => {
  event.server.runCommandSilent(`execute as ${event.player.uuid} run attribute ${event.player.uuid} ftbultimine:max_blocks_modifier base set 63`)
  event.item.shrink(1)
  event.player.tell("现在我们可以一次性挖掘64个方块了！")
})