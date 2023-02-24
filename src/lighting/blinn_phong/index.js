import * as logic from './logic';
import * as config from './config.json';
import * as vert from './shaders/vert.glsl';
import * as frag from './shaders/frag.glsl';

export default {
    logic,
    config,
    shaders: {
        vert, frag
    }
};