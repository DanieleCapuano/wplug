import { get_active_logic } from "../../utils";

export const get_model = _get_model;
export const program_init = _program_init;
export const draw_loop_callback = _draw_loop_callback;
export const cleanup = _cleanup;


const { _get_active, _set_active } = get_active_logic();
export const set_active = _set_active.bind(null, _init);
export const get_active = _get_active;


function _init(scene_config) {
    //currently not used
    return config;
}

function _get_model(scene_config) {
    return {};
}

function _program_init(scene_config) {
    return scene_config;
}

function _draw_loop_callback(obj, scene_config) {
    return scene_config;
}

function _cleanup(scene_config) {
    return scene_config;
}