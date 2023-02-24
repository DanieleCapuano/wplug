import * as LMod from "./lighting";

const L = LMod.default;
const lighting = Object.keys(L).reduce((o, l_key) => Object.assign(o, {
    [l_key]: L[l_key].default
}), {});

export {
    lighting
};
export default {
    lighting
};