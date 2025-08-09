ServerEvents.recipes(event => {
    event.recipes.createMechanicalCrafting(Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:pistol_revolver_torque"}'), [
        'ABC',
        ' DE'
    ], {
        A: 'createimmersivetacz:gunbarrel',
        B: 'create:precision_mechanism',
        C: 'createimmersivetacz:firing_mechanism',
        D: 'createimmersivetacz:firing_mechanism',
        E: 'create:andesite_casing'
    })
})
