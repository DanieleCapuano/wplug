import { get_active_logic } from "../../utils";

export const get_model = _get_model;
export const draw_loop_fn = _draw_loop_fn;
export const cleanup = _cleanup;


const { _get_active, _set_active } = get_active_logic();
export const set_active = _set_active.bind(null, _init);
export const get_active = _get_active;


function _init(config) {
    //currently not used
    return config;
}

function _get_model(config) {
    return {};
}

function _draw_loop_fn(obj, scene_desc) {
    return {};
}

function _cleanup(config) {
    return {};
}