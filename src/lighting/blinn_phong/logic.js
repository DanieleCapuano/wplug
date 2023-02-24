export const get_description_values = _get_desc;
export const set_uniforms_values = _set_uniforms_values;

function _get_desc(scene_desc) {
    const { lighting } = scene_desc;
    if (!lighting) return {};

    lighting.light_positions = lighting.lights.reduce((poss, l) => poss.concat(l.position), []);
    lighting.light_colors = lighting.lights.reduce((cols, l) => cols.concat(l.color), []);
    lighting.light_intensities = lighting.lights.reduce((ints, l) => ints.concat(l.intensity), []);
    lighting.light_specular_exp = lighting.lights.reduce((exps, l) => exps.concat(l.specular_exp), []);
    lighting.number_of_lights = lighting.lights.length;

    return { lighting };
}

function _set_uniforms_values(obj, scene_desc) {
    const { lighting } = scene_desc;
    return {
        u_ka: obj.material.ka,
        u_kd: obj.material.kd,
        u_ks: obj.material.ks,
        u_nlights: lighting.number_of_lights,
        u_ambient_color: lighting.ambient.color,
        u_ambient_intensity: lighting.ambient.intensity,
        u_light_positions: lighting.light_positions,
        u_light_colors: lighting.light_colors,
        u_light_intensities: lighting.light_intensities,
        u_light_specular_exp: lighting.light_specular_exp
    };
}