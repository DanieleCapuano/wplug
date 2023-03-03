export const get_active_logic = _get_active_logic;

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