export const get_lighting_conf = _get_lighting_conf;

function _get_lighting_conf(scene_desc) {
    const { lighting } = scene_desc;
    if (!lighting) return {};

    lighting.light_positions = lighting.lights.reduce((poss, l) => poss.concat(l.position), []);
    lighting.light_colors = lighting.lights.reduce((cols, l) => cols.concat(l.color), []);
    lighting.light_intensities = lighting.lights.reduce((ints, l) => ints.concat(l.intensity), []);
    lighting.light_specular_exp = lighting.lights.reduce((exps, l) => exps.concat(l.specular_exp), []);
    lighting.number_of_lights = lighting.lights.length;

    return { lighting };
}