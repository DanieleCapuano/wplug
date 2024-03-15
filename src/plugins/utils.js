export const get_active_logic = _get_active_logic;
export const get_config = _get_config;
export const conf_overwrite_for_obj = _conf_overwrite_for_obj;

function _get_active_logic() {
    return (() => {
        let __ACTIVE = false;
        return { _set_active, _get_active };

        function _set_active(_init, active, config) {
            __ACTIVE = !!active;
            return __ACTIVE ? _init(config) : config;
        }
        function _get_active() {
            return __ACTIVE;
        }
    })();
}

function _get_config(cfg_getter_or_json, opts) {
    const json = typeof cfg_getter_or_json === 'function' ?
        cfg_getter_or_json(opts) :
        (cfg_getter_or_json.default || cfg_getter_or_json);
    return JSON.parse(JSON.stringify(json));
}

//this allows plugins' confs defines at scene level to have object-based overwrites
function _conf_overwrite_for_obj(scene_config, obj_to_draw, plug_type, plug_id, additional_overwrites) {
    const /////////////////
        _get_conf_o = (cont) => {
            const /////////
                conf = cont[plug_type] || [],
                conf_a = Array.isArray(conf) ? conf : [conf];
            return conf_a.find(cfg_o => cfg_o.id === plug_id) || {};
        },
        { scene_desc } = scene_config,
        { objects } = scene_desc,
        o_keys = Object.keys(objects),
        obj_desc = objects[o_keys.find(ok => ok === obj_to_draw.id)],
        scene_plug_conf = _get_conf_o(scene_config),
        obj_plug_conf = _get_conf_o(obj_to_draw),
        obj_desc_plug_conf = _get_conf_o(obj_desc);

    let o = Object.assign(scene_plug_conf, obj_plug_conf, obj_desc_plug_conf);
    return (additional_overwrites || []).reduce((cfg, ovwt) => Object.assign(cfg, ovwt), o);
}