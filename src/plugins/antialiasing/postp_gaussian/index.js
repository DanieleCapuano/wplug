import * as logic from './logic';
import * as config from './config.json';
import * as vert from './shaders/vert.glsl';
import * as frag from './shaders/frag.glsl';
import { get_config } from '../../utils';

export default Object.assign({
    logic,
    config: get_config.bind(null, config),
    shaders: {
        vert, frag
    },
    requires: {
        postprocessing: {
            id: "fbo",
            framebuffers_n: 1,
            framebuffers_offset: 1,
            base_active_texture: 0
        }
    }
});