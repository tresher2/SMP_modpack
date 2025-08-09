ServerEvents.recipes(event => {
    event.recipes.createMechanicalCrafting('tacz:modern_kinetic_gun'), [
        'ABC',
        ' DE',], {
        A: 'createimmersivetacz:gunbarrel',
        B: 'create:precision_mechanism',
        C: 'createimmersivetacz:firing_mechanism',
        D: 'createimmersivetacz:firing_mechanism',
        E: 'create:andesite_casing'
    })
})
