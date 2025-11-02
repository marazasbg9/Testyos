// presets.js
export const MaterialPresets = {
    PORTAL_BLUE: {
        color: new BABYLON.Color3(0.36, 0.8, 2),
        lerpValue: 0.22,
        PowNoise: 4.0,
        spTextNoiseV: 0.1,
        name: "portal_blue"
    },

    FIRE: {
        color: new BABYLON.Color3(2, 0.5, 0.1),
        lerpValue: 0.35,
        PowNoise: 3.0,
        TextNoiseScale: new BABYLON.Vector2(2.0, 1.0),
        name: "fire_effect"
    },

    ENERGY: {
        color: new BABYLON.Color3(0.1, 1.0, 0.3),
        lerpValue: 0.15,
        PowNoise: 5.0,
        spTextNoiseU: 0.05,
        name: "energy_field"
    }
};