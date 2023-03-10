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

function _program_init(scene_config) {
    return scene_config;
}

function _draw_loop_callback(object_config, scene_config) {
    const { lighting, gl } = scene_config;
    const { object_program, material } = object_config;
    const { ka, kd, ks } = material;
    const { ambient, number_of_lights, light_positions, light_colors, light_intensities, light_specular_exp } = lighting;

    //TODO use uniform block to minimize gl.uniform[...] calls
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