import { get_active_logic } from "../../utils";

export const get_model = _get_model;
export const program_init = _program_init;
export const draw_loop_callback = _draw_loop_callback;
export const cleanup = _cleanup;


const { _get_active, _set_active } = get_active_logic();
export const set_active = _set_active.bind(null, _init);
export const get_active = _get_active;
export const add_data_to_buffer = _add_data_to_buffer;


function _init(scene_config) {
    //generate the coordinates
    const { scene_desc, objects_desc, canvas } = scene_config;
    const { geometry, objects } = scene_desc;
    const { fullscreen, width, height } = geometry || {};

    Object.keys(objects).forEach(obj_id => {
        const obj_conf = objects[obj_id];

        if (!obj_conf.quad) return;
        const { quad } = obj_conf,
            obj = objects_desc.find(o => o.id === obj_id);

        let w = (quad.fullscreen || fullscreen) ? canvas.width : (quad.width || width),
            h = (quad.fullscreen || fullscreen) ? canvas.height : (quad.height || height),
            aspect = h / w,
            half_asp = 0.5 * aspect;
        obj.coordinates_def = [
            [-0.5, -half_asp, 0.5],
            [0.5, -half_asp, 0.5],
            [-0.5, half_asp, 0.5],
            [-0.5, half_asp, 0.5],
            [0.5, -half_asp, 0.5],
            [0.5, half_asp, 0.5],
        ]
    });

    return scene_config;
}

function _add_data_to_buffer(data_conf) {
    const {
        coordinate_index,
        current_bytes_pos,
        buffer,
        littleEndian,
        obj_def,
    } = data_conf,
        data_map = [
            [0, 0],
            [1, 0],
            [0, 1],
            [0, 1],
            [1, 0],
            [1, 1]
        ],
        texcoord = data_map[coordinate_index];

    buffer.setUint16(current_bytes_pos + Uint16Array.BYTES_PER_ELEMENT * 0, texcoord[0] * 0xffff, littleEndian);
    buffer.setUint16(current_bytes_pos + Uint16Array.BYTES_PER_ELEMENT * 1, texcoord[1] * 0xffff, littleEndian);
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