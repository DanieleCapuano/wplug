import { get_active_logic } from "../../utils";

export const get_description_values = _get_desc;
export const set_uniforms_values = _set_uniforms_values;

const { _get_active, _set_active } = get_active_logic();
export const set_active = _set_active.bind(null, _init);
export const get_active = _get_active;


function _init(config) {
    //currently not used
    return config;
}

function _get_desc(scene_desc) {
    return {};
}

function _set_uniforms_values(obj, scene_desc) {
    return {};
}