import * as logic from './logic';
import * as config from './config.json';
import * as vert from './shaders/vert.glsl';
import * as frag from './shaders/frag.glsl';
import { get_config } from '../../utils';

/*
  fragment-shader-based partial derivatives approach 
  to implement antialiasing effects. It's basically a fragment-shader-only set of functions
  
  Took from "Procedural Textures in GLSL" by Stefan Gustavson
*/

export default Object.assign({
    logic,
    config: get_config.bind(null, config),
    shaders: {
        vert, frag
    }
});