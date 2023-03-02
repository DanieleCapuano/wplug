import * as logic from './logic';
import * as config from './config.json';
import * as vert from './shaders/vert.glsl';
import * as frag from './shaders/frag.glsl';

//"logic" API functions are exposed in the default object
export default Object.assign({
    config,
    shaders: {
        vert, frag
    }
}, Object.keys(logic).reduce(
    (lo, l_key) => Object.assign(lo, {
        [l_key]: logic[l_key]
    })
));