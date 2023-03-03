import { default as plugins_source } from "./plugins";

const plugins_api = Object.keys(plugins_source).reduce((o, plug_key) => {
    const def = plugins_source[plug_key].default;
    return Object.assign(o, {
        [plug_key]: _flatten_logic_into(def)
    });
}, {});

export const plugins = plugins_api;
export default plugins;


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function _flatten_logic_into(main_o) {
    return Object.keys(main_o).reduce((o, l_key) => {
        let default_o = main_o[l_key].default,
            logic = default_o.logic || {},
            no_logic_o = Object.keys(default_o)
                .filter(k => k !== 'logic')
                .reduce(_flat_obj.bind(null, default_o), {}),
            flat_o = Object.keys(logic)
                .reduce(_flat_obj.bind(null, logic), no_logic_o);

        return Object.assign(o, {
            [l_key]: flat_o
        });
    }, {});
}

function _flat_obj(o_tobe_flat, o_dest, k) {
    return Object.assign(o_dest, { [k]: o_tobe_flat[k] });
}