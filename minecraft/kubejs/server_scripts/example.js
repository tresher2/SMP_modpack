ServerEvents.recipes(event => {
    event.remove({ type: 'tacz:gun_smith_table_crafting' })
    event.remove({ type: 'create:mechanical_crafting', mod: 'createimmersivetacz' })
    event.remove({ output: 'tacz:target' })
    event.remove({ output: 'exposure:developed_black_and_white_film', type: 'exposure:film_developing' })
    event.remove({ output: 'exposure:developed_color_film', type: 'exposure:film_developing' })
    event.remove({ output: 'createimmersivetacz:40mmhe_casing' })
    event.remove({ input: 'createimmersivetacz:40mmhe_casing' })
    event.remove({ output: 'createimmersivetacz:gernade_casing' })
    event.remove({ input: 'createimmersivetacz:gernade_casing' })
    event.remove({ mod: 'hole_filler_mod' })
    event.remove({ mod: 'weather2', not: { type: "create:sequenced_assembly"} })


    event.recipes.createMechanicalCrafting(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_standard"}'), [
        'ABC'
    ], {
        A: 'minecraft:glass_pane',
        B: 'minecraft:dried_kelp',
        C: 'create:brass_sheet'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_medium_distance"}'), [
        'ABCBC'
    ], {
        A: 'minecraft:glass_pane',
        C: 'create:brass_sheet',
        B: 'minecraft:dried_kelp'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_1"}'), [
        'A A',
        'CBC',
        'A A'
    ], {
        A: 'create:andesite_alloy',
        C: 'create:andesite_alloy_block',
        B: '#create:toolboxes'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_2"}'), [
        'A A',
        'BDB',
        'BCB',
        'A A'
    ], {
        A: 'create:copper_sheet',
        B: '#create:toolboxes',
        D: 'createaddition:diamond_grit',
        C: 'create:super_glue'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_3"}'), [
        'C C',
        'BYB',
        'AFA',
        'BYB',
        'C C'
    ], {
        A: 'create:brass_block',
        B: '#create:toolboxes',
        F: 'create:cardboard',
        Y: 'createdeco:netherite_sheet',
        C: 'create:brass_sheet'
    })

    event.shaped('tacz:target', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:iron_sheet',
        B: 'create:rose_quartz_lamp',
        C: 'quark:stripped_oak_post'
    })
    event.replaceInput(
        { mod: 'sophisticatedbackpacks' }, // Arg 1: the filter
        '#forge:chests/wooden',            // Arg 2: the item to replace
        '#create:toolboxes'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
        { output: 'sophisticatedbackpacks:upgrade_base' }, // Arg 1: the filter
        '#forge:ingots/iron',            // Arg 2: the item to replace
        '#forge:plates/iron'         // Arg 3: the item to replace it with
    )

    event.recipes.createMechanicalCrafting(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:scope_telephoto"}'), [
        'ABBA'
    ], {
        A: 'create:brass_sheet',
        B: 'create_optical:mirror'
    })
    event.recipes.createMechanicalCrafting('createimmersivetacz:firing_mechanism', [
        'ABC',
        ' DE'
    ], {
        A: 'minecraft:flint_and_steel',
        B: 'create:deployer',
        C: 'create:large_cogwheel',
        D: 'create:cogwheel',
        E: 'create:rotation_speed_controller'
    })
    event.recipes.createMechanicalCrafting('createimmersivetacz:gun_trigger', [
        'ABA',
        ' C '
    ], {
        A: 'create:brass_sheet',
        B: 'create:precision_mechanism',
        C: 'create:analog_lever'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_brass_retractor"}'), [
        'AA'
    ], {
        A: 'create:brass_sheet'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:pistol_revolver_torque"}'), [
        'ABC',
        ' DE'
    ], {
        A: 'createimmersivetacz:gunbarrel',
        B: 'create:precision_mechanism',
        C: 'createimmersivetacz:firing_mechanism',
        D: 'createimmersivetacz:gun_trigger',
        E: 'create:andesite_casing'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:pistol_auto_stress"}'), [
        '  H ',
        'ABCD',
        '  EF'
    ], {
        A: 'createimmersivetacz:gunbarrel',
        B: 'create:brass_block',
        C: 'createimmersivetacz:firing_mechanism',
        H: 'create:precision_mechanism',
        D: 'create:sequenced_gearshift',
        E: 'createimmersivetacz:gun_trigger',
        F: 'create:brass_casing'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:rifle_assult_crane"}'), [
        'BBCD ',
        'GGAFS',
        ' LTE '
    ], {
        G: 'createimmersivetacz:gunbarrel',
        F: 'createimmersivetacz:firing_mechanism',
        T: 'createimmersivetacz:gun_trigger',
        S: 'create:shaft',
        A: 'tfmg:steel_mechanism',
        L: 'minecraft:leather',
        B: 'create:brass_sheet',
        C: 'create:sturdy_sheet',
        D: 'create:electron_tube',
        E: 'create:andesite_casing'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:sniper_semi_clockwork"}'), [
        'BBC  ',
        'GGAFS',
        'DLTE '
    ], {
        G: 'createimmersivetacz:gunbarrel',
        F: 'create:copper_backtank',
        T: 'createimmersivetacz:gun_trigger',
        S: 'create:shaft',
        A: 'tfmg:steel_mechanism',
        L: 'createimmersivetacz:firing_mechanism',
        B: 'create:sturdy_sheet',
        C: 'create:copper_sheet',
        D: 'create:electron_tube',
        E: 'create:brass_casing'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:shotgun_db_stone"}'), [
        'GGAC',
        'GGTS'
    ], {
        G: 'createimmersivetacz:gunbarrel',
        T: 'createimmersivetacz:gun_trigger',
        S: '#forge:stripped_logs',
        C: 'create:brass_sheet',
        A: 'tfmg:steel_mechanism'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:shotgun_pump_bearing"}'), [
        'GGAFS',
        '  T S'
    ], {
        G: 'createimmersivetacz:gunbarrel',
        F: 'createimmersivetacz:firing_mechanism',
        T: 'createimmersivetacz:gun_trigger',
        S: '#forge:stripped_logs',
        A: 'tfmg:steel_mechanism'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:smg_auto_crank"}'), [
        'BBBC ',
        'GGFAS',
        ' LTE '
    ], {
        G: 'createimmersivetacz:gunbarrel',
        F: 'createimmersivetacz:firing_mechanism',
        T: 'createimmersivetacz:gun_trigger',
        S: 'create:shaft',
        A: 'create:precision_mechanism',
        L: 'create:steam_engine',
        B: 'create:brass_sheet',
        C: 'create:sturdy_sheet',
        E: 'create:andesite_casing'
    })
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:mg_platemag_flywheel"}'), [
        ' CCDD  ',
        'EGAAFPS',
        'EYFCTU '
    ], {
        G: 'createimmersivetacz:gunbarrel',
        F: 'createimmersivetacz:firing_mechanism',
        T: 'createimmersivetacz:gun_trigger',
        S: 'create:shaft',
        A: 'tfmg:steel_mechanism',
        C: 'create:sturdy_sheet',
        Y: 'create:steam_engine',
        F: 'create:flywheel',
        U: 'create:andesite_casing',
        P: 'create:industrial_iron_block',
        D: 'create:copper_backtank',
        E: 'create:iron_sheet'
    })
    event.recipes.createMechanicalCrafting('createimmersivetacz:gunbarrel', [
        'AAAA',
        '    ',
        'AAAA'
    ], {
        A: 'createdeco:industrial_iron_sheet'
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
        A: 'minecraft:stone',
        B: 'minecraft:iron_ingot:
    })
})
