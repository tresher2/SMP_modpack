// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')
StartupEvents.registry('item', event => {
    event.create('incomplete_throwable_hole_filler').displayName('Incomplete Hole filler').maxStackSize(32)
    event.create('incomplete_throwable_hole_filler_balanced').displayName('Incomplete filler - Choise').maxStackSize(32)
    event.create('incomplete_throwable_hole_filler_smart').displayName('Incomplete filler - Smart').maxStackSize(32)
    event.create('incomplete_throwable_hole_filler_water').displayName('Incomplete filler - Water').maxStackSize(32)
    event.create('incomplete_elite_mechanism_2').displayName('Incomplete weather item').maxStackSize(32)
})
ItemEvents.modification(event => {
  event.modify('create_sa:blazing_pickaxe', item => {
    item.maxDamage = 250
  })
  event.modify('create_sa:blazing_shovel', item => {
    item.maxDamage = 250
  })
  event.modify('create_sa:blazing_axe', item => {
    item.maxDamage = 250
  })
  event.modify('create_sa:blazing_cleaver', item => {
    item.maxDamage = 250
  })
  event.modify('supplementaries:rope', item => {
    item.burnTime = 200
  })
})