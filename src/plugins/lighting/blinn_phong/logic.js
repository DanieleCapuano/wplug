import { set_uniforms } from 'wbase';
import { get_active_logic } from "../../utils";

export const get_model = _get_model;
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
    const { scene_desc } = scene_config;
    const { lighting } = scene_desc;
    if (!lighting) return {};

    lighting.light_positions = lighting.lights.reduce((poss, l) => poss.concat(l.position), []);
    lighting.light_colors = lighting.lights.reduce((cols, l) => cols.concat(l.color), []);
    lighting.light_intensities = lighting.lights.reduce((ints, l) => ints.concat(l.intensity), []);
    lighting.light_specular_exp = lighting.lights.reduce((exps, l) => exps.concat(l.specular_exp), []);
    lighting.number_of_lights = lighting.lights.length;

    return { lighting };
}

function _draw_loop_callback(object_config, scene_config) {
    const { lighting, gl } = scene_config;
    const { object_program } = object_config;

    set_uniforms(gl, {
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
    }, object_program);
}

function _cleanup(scene_config) {
    return scene_config;
}