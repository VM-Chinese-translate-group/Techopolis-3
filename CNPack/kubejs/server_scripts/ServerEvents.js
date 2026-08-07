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

//Death to player on the moon with 30 second grace
PlayerEvents.tick(event => {
  if (event.server.getTickCount() % 20 != 0) return;

  const player = event.player;

  if (!player.isAlive() || player.isCreative() || player.isSpectator()) {
    if (player.persistentData.contains('moonDeathTimer')) {
      player.persistentData.remove('moonDeathTimer');
    }
    return;
  }

  if (event.level.dimension == "stellaris:moon") {
    const head = player.getHeadArmorItem().id;
    const chest = player.getChestArmorItem().id;
    const legs = player.getLegsArmorItem().id;
    const feet = player.getFeetArmorItem().id;

    const hasSpaceSuit =
      head == 'stellaris:space_suit_helmet' &&
      chest == 'stellaris:space_suit_chestplate' &&
      legs == 'stellaris:space_suit_leggings' &&
      feet == 'stellaris:space_suit_boots';

    const hasJetSuit =
      head == 'stellaris:jet_suit_helmet' &&
      chest == 'stellaris:jet_suit_chestplate' &&
      legs == 'stellaris:jet_suit_leggings' &&
      feet == 'stellaris:jet_suit_boots';

    if (hasSpaceSuit || hasJetSuit) {
      if (player.persistentData.contains('moonDeathTimer')) {
        player.persistentData.remove('moonDeathTimer');
        player.displayClientMessage(Text.translate("message.stellaris.suit_safe").green(), true);
      }
      return;
    }

    if (!player.persistentData.contains('moonDeathTimer')) {
      player.persistentData.putInt('moonDeathTimer', 30);
    }

    let timeLeft = player.persistentData.getInt('moonDeathTimer');

    if (timeLeft <= 0) {
      event.server.runCommandSilent(`damage ${player.username} 1000 stellaris:oxygen`);

    } else {
      player.displayClientMessage(Text.translate("message.stellaris.no_suit_warning", timeLeft).red(), true);
      player.persistentData.putInt('moonDeathTimer', timeLeft - 1);
    }

  } else {
    if (player.persistentData.contains('moonDeathTimer')) {
      player.persistentData.remove('moonDeathTimer');
    }
  }
});

/*
PlayerEvents.tick(event => {

  if (event.server.getTickCount() % 20 != 0) return;

  if (event.player.isCreative()) return;
  if (event.player.isSpectator()) return;

  if (event.level.dimension == "stellaris:moon") {
    if (event.player.getFeetArmorItem().getItem() == 'stellaris:space_suit_boots' && event.player.getLegsArmorItem().getItem() == 'stellaris:space_suit_leggings' && event.player.getChestArmorItem().getItem() == 'stellaris:space_suit_chestplate' && event.player.getHeadArmorItem().getItem() == 'stellaris:space_suit_helmet') {
      return;
    }
    if (event.player.getFeetArmorItem().getItem() == 'stellaris:jet_suit_boots' && event.player.getLegsArmorItem().getItem() == 'stellaris:jet_suit_leggings' && event.player.getChestArmorItem().getItem() == 'stellaris:jet_suit_chestplate' && event.player.getHeadArmorItem().getItem() == 'stellaris:jet_suit_helmet') {
      return;
    }
    else {
      event.player.kill();
    }
  }
})
*/