import { set_uniforms } from 'wbase';
import { get_active_logic } from "../../utils";

export const get_model = _get_model;
export const program_init = _program_init;
export const draw_loop_callback = _draw_loop_callback;
export const cleanup = _cleanup;

const { _get_active, _set_active } = get_active_logic();
export const set_active = _set_active.bind(null, _init);
export const get_active = _get_active;


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

function _init(scene_config) {
    //currently not used
    return scene_config;
}

function _get_model(scene_config) {
    //TODO review using utils/conf_overwrite_for_obj() function to overwrite scene-based conf to object-specific ones
    //this way object-specific lighting overwrites could be defined!

    const { scene_desc } = scene_config;
    const { lighting } = scene_desc;
    const lid = (lighting || []).findIndex(l => l.id === 'blinn_phong');

    if (lid === -1) return {};

    lighting[lid].light_positions = lighting[lid].lights.reduce((poss, l) => poss.concat(l.position), []);
    lighting[lid].light_colors = lighting[lid].lights.reduce((cols, l) => cols.concat(l.color), []);
    lighting[lid].light_intensities = lighting[lid].lights.reduce((ints, l) => ints.concat(l.intensity), []);
    lighting[lid].light_specular_exp = lighting[lid].lights.reduce((exps, l) => exps.concat(l.specular_exp), []);
    lighting[lid].number_of_lights = lighting[lid].lights.length;

    return { lighting };
}

function _program_init(scene_config) {
    return scene_config;
}

function _draw_loop_callback(object_config, scene_config) {
    Object.assign(scene_config.scene_desc, _get_model(scene_config));   //update the lighting model to allow lighting changes during time
    const { gl, scene_desc } = scene_config;
    const { lighting } = scene_desc;
    const lighting_conf = (lighting || []).find(l => l.id === 'blinn_phong');
    const { object_program, material } = object_config;
    const { ka, kd, ks } = material;
    const { ambient, number_of_lights, light_positions, light_colors, light_intensities, light_specular_exp } = lighting_conf;

    set_uniforms(gl, {
        u_ka: ka,
        u_kd: kd,
        u_ks: ks,
        u_nlights: number_of_lights,
        u_ambient_color: ambient.color,
        u_ambient_intensity: ambient.intensity,
        u_light_positions: light_positions,
        u_light_colors: light_colors,
        u_light_intensities: light_intensities,
        u_light_specular_exp: light_specular_exp
    }, object_program);
}

function _cleanup(scene_config) {
    return scene_config;
}