// Custom Curios Related Events

const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

//Speed and Hunger Curio
PlayerEvents.tick(event => {

  if (event.server.getTickCount() % 20 != 0) return

  let optionalInventory = $CuriosApi.getCuriosInventory(event.player)

  if (event.level.dimension == "minecraft:overworld") {

    if (optionalInventory.isPresent()) {

      let curiosInventory = optionalInventory.get();
      let itemHandler = curiosInventory.getEquippedCurios();

      for (let i = 0; i < itemHandler.getSlots(); i++) {
        let stack = itemHandler.getStackInSlot(i);

        if (stack.getItem() == "techopolis:speed_1_curio") {
          event.player.potionEffects.add('minecraft:speed', 25, 1, false, false)
        }

        if (stack.getItem() == "techopolis:speed_2_curio") {
          event.player.potionEffects.add('minecraft:speed', 25, 2, false, false)
        }

        if (stack.getItem() == "techopolis:speed_3_curio") {
          event.player.potionEffects.add('minecraft:speed', 25, 3, false, false)
        }

        if (stack.getItem() == "techopolis:hunger_curio") {
          event.player.setSaturation(20)
          event.player.setFoodLevel(20)
        }
      }
    }
  }
})



//The Nether Heat Protection Curio
PlayerEvents.tick(event => {

  if (event.server.getTickCount() % 20 != 0) return;

  if (event.level.dimension == "minecraft:the_nether") {

    let optionalInventory = $CuriosApi.getCuriosInventory(event.player);

    if (optionalInventory.isPresent()) {

      let curiosInventory = optionalInventory.get();
      let itemHandler = curiosInventory.getEquippedCurios();
      let hasHeatProtectionCurio = false;
      let processedCurio = false;

      for (let i = 0; i < itemHandler.getSlots(); i++) {
        let stack = itemHandler.getStackInSlot(i);

        if (stack.getItem() == "techopolis:heat_protection_curio_1" && !processedCurio) {
          let maxDamage = stack.getMaxDamage();
          let currentDamage = stack.getDamageValue();
          if (currentDamage < maxDamage) {
            stack.setDamageValue(currentDamage + 20);
          } else {
            stack.setCount(0);
            event.player.tell("抗热饰品已损坏");
          }
          event.player.extinguish();
          hasHeatProtectionCurio = true;
          processedCurio = true;
        }

        else if (stack.getItem() == "techopolis:heat_protection_curio_2" && !processedCurio) {
          let maxDamage = stack.getMaxDamage();
          let currentDamage = stack.getDamageValue();
          if (currentDamage < maxDamage) {
            stack.setDamageValue(currentDamage + 20);
          } else {
            stack.setCount(0);
            event.player.tell("抗热饰品已损坏");
          }
          event.player.extinguish();
          hasHeatProtectionCurio = true;
          processedCurio = true;
        }

        else if (stack.getItem() == "techopolis:heat_protection_curio_3" && !processedCurio) {
          hasHeatProtectionCurio = true;
          processedCurio = true;
        }

        if (processedCurio) {
          break;
        }
      }

      if (!hasHeatProtectionCurio) {
        event.player.igniteForTicks(20);
      }
    }
  }

});

//Death to player on the moon

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
      console.info(`[Moon Check] Fired oxygen damage at ${player.username}.`);

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