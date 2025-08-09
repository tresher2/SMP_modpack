ServerEvents.recipes(event => {
    event.shaped('tacz:target', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:iron_sheet',
        B: 'create:rose_quartz_lamp',
        C: 'quark:stripped_oak_post'
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
})
