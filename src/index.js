import * as LMod from "./lighting";

const L = LMod.default;
const lighting = _flatten_logic_into(L);

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

export {
    lighting
};
export default {
    lighting
};