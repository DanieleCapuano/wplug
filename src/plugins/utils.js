export const get_active_logic = _get_active_logic;
export const get_config = _get_config;

function _get_active_logic() {
    return (() => {
        let __ACTIVE = false;
        return { _set_active, _get_active };

        function _set_active(_init, active, config) {
            __ACTIVE = !!active;
            return _init(config);
        }
        function _get_active() {
            return __ACTIVE;
        }
    })();
}

function _get_config(cfg_json) {
    let json = cfg_json.default || cfg_json;
    return JSON.parse(JSON.stringify(json));
}