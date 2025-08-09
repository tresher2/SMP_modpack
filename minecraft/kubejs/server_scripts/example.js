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
        E: 'createimmersivetacz:gun_trigger'
    })

    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:rifle_assult_crane"}'), [
        'BBCD ',
        'GGAFS',
        '  TE '
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
})
