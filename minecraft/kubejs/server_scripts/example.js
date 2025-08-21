ServerEvents.recipes(event => {
    event.remove({ output: 'exposure:developed_black_and_white_film', type: 'exposure:film_developing' })
    event.remove({ output: 'exposure:developed_color_film', type: 'exposure:film_developing' })
    event.remove({ mod: 'hole_filler_mod' })
    event.remove({ mod: 'weather2', not: { type: "create:sequenced_assembly"} })
    event.remove({ output: 'minecraft:lodestone' })
    event.remove({ output: 'create_sa:copper_jetpack_chestplate' })
    event.remove({ output: 'create_sa:copper_exoskeleton_chestplate' })
    event.remove({ output: 'create_sa:brass_jetpack_chestplate' })
    event.remove({ output: 'create_sa:slime_helmet' })
    event.remove({ output: 'create_sa:slime_boots' })
    event.remove({ output: 'minecraft:campfire' })
    event.remove({ output: 'naturescompass:naturescompass' })
    event.remove({ output: 'supplementaries:rope' })

    event.shaped('naturescompass:naturescompass', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#minecraft:saplings',
        B: 'weather2:weather_item',
        C: 'minecraft:compass'
    })
    event.shaped('4x supplementaries:rope', [
        'A ',
        'A '
    ], {
        A: 'supplementaries:flax'
    })
    event.shapeless(
      Item.of('supplementaries:rope', 1),
      [
        'farmersdelight:rope'
      ]
    )
    event.shapeless(
      Item.of('farmersdelight:rope', 1),
      [
        'supplementaries:rope'
      ]
    )
    event.shaped('minecraft:campfire', [
        ' S ',
        'SSS',
        'WWW'
    ], {
        W: '#minecraft:logs',
        S: 'minecraft:stick'
    })
    event.shaped('create_sa:slime_boots', [
        'E E',
        'L L',
        'S S'
    ], {
        E: 'minecraft:echo_shard',
        L: 'alexsmobs:banana_slug_slime',
        S: 'minecraft:slime_block'
    })
    event.shaped('create_sa:slime_helmet', [
        'SSS',
        'L L',
        'E E'
    ], {
        E: 'minecraft:echo_shard',
        L: 'alexsmobs:banana_slug_slime',
        S: 'minecraft:slime_block'
    })
    
    event.shaped('weather2:anemometer', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: 'create:iron_sheet',
        B: 'create:andesite_alloy',
        C: 'create:shaft'
    })
    event.shaped('weather2:wind_vane', [
        'A',
        'B',
        'C'
    ], {
        A: 'supplementaries:wind_vane',
        B: 'create:iron_sheet',
        C: 'weather2:anemometer'
    })
    event.shaped('weather2:wind_turbine', [
        'ABA',
        'ACA',
        ' D '
    ], {
        A: 'create:iron_sheet',
        B: 'weather2:anemometer',
        D: 'createaddition:alternator',
        C: 'weather2:weather_item'
    })

    event.recipes.create.mixing('minecraft:tuff', ['2x minecraft:flint', 'minecraft:diorite', Fluid.lava(100)])
    event.recipes.create.compacting('minecraft:cobbled_deepslate', ['4x minecraft:cobblestone', Fluid.lava(100)]).heated()
    event.shaped('minecraft:lodestone', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:chiseled_stone_bricks',
        B: 'minecraft:iron_ingot'
    })
    event.recipes.createMechanicalCrafting('create_sa:copper_jetpack_chestplate', [
        'CAC',
        'CBC',
        'DED'
    ], {
        A: 'create:cogwheel',
        B: 'create_sa:hydraulic_engine',
        C: 'create:copper_sheet',
        D: 'create:copper_backtank',
        E: 'create:andesite_alloy'
    })
    event.recipes.createMechanicalCrafting('create_sa:copper_exoskeleton_chestplate', [
        'CAC',
        'DBD',
        'FEF'
    ], {
        A: 'create:cogwheel',
        B: 'create_sa:hydraulic_engine',
        C: 'create:copper_sheet',
        D: 'create:fluid_tank',
        F: 'minecraft:copper_block',
        E: 'createdeco:andesite_sheet'
    })
    event.recipes.createMechanicalCrafting('create_sa:brass_jetpack_chestplate', [
        ' GGGGGGG ',
        'GJ  G  JG',
        'G   G   G',
        'G ABRBA G',
        'GGCEDECGG',
        'G  BFB  G',
        'G   G   G',
        'GJ  G  JG',
        ' GGGGGGG '
    ], {
        A: 'create:cogwheel',
        B: 'create:brass_ingot',
        C: 'create:encased_fan',
        D: 'create_sa:steam_engine',
        E: 'create:sturdy_sheet',
        G: 'alexsmobs:mimicream',
        F: 'createdeco:andesite_sheet',
        J: 'create:wand_of_symmetry',
        R:  'tfmg:steel_mechanism'
    })
})
