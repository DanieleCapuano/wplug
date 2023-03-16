import { get_active_logic } from "../../utils";
import { init_program_fbos, texture_data, set_uniforms } from "wbase";

export const get_model = _get_model;
export const program_init = _program_init;
export const draw_loop_callback = _draw_loop_callback;
export const cleanup = _cleanup;

const { _get_active, _set_active } = get_active_logic();
export const set_active = _set_active.bind(null, _init);
export const get_active = _get_active;


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

function _init(scene_config) {
    //currently not used
    return scene_config;
}

function _get_model(scene_config) {
    return {};
}

function _program_init(scene_config) {
    const //////////////////////////
        { gl, canvas, objects_to_draw, scene_desc } = scene_config,
        { postprocessing } = scene_desc,
        fbo_conf = (postprocessing || []).find(cfg => cfg.id === 'fbo'),
        { base_active_texture } = fbo_conf;

    let texture_unit = gl.TEXTURE0 + ((base_active_texture !== undefined) ? base_active_texture : 0)
    gl.activeTexture(texture_unit);

    objects_to_draw.forEach(otd => {
        const ///////////////////////
            { object_program, fbo } = otd;

        object_program.fbo_opts = Object.assign({}, postprocessing, fbo || {});
        let opts = object_program.fbo_opts;

        //function _init_program_fbos(current_program, gl, opts)
        otd.object_program = init_program_fbos(object_program, gl, Object.assign({}, opts, { canvas }));
    });

    return scene_config;
}

function _draw_loop_callback(object_config, scene_config) {
    const ////////////////////////
        { gl, canvas, draw_fn } = scene_config,
        { object_program } = object_config,
        { fbo_opts, base_texture } = object_program,
        { has_framebuffer, framebuffers_n, framebuffers_offset } = (fbo_opts || {});

    if (has_framebuffer === false) return scene_config;

    if (base_texture) {
        gl.bindTexture(gl.TEXTURE_2D, base_texture);
    }

    set_uniforms(gl, {
        u_on_fbo: 1,
        u_tex: 0,
    }, object_program);

    for (var ii = framebuffers_offset; ii < framebuffers_n + framebuffers_offset; ++ii) {
        // Setup to draw into one of the framebuffers.
        texture_data.set_framebuffer(
            gl,
            texture_data.get_fbo(object_program, ii),
            canvas.width, canvas.height
        );

        draw_fn(object_config, scene_config);

        // for the next draw, use as input texture (associated to gl.TEXTURE0) the texture we just rendered to.
        gl.bindTexture(gl.TEXTURE_2D, texture_data.get_fbo_texture(object_program, ii));
    }

    texture_data.set_framebuffer(gl, null, canvas.width, canvas.height);
    set_uniforms(gl, { u_on_fbo: -1 }, object_program);

    return scene_config;
}

function _cleanup(scene_config) {
    const ////////////////////////
        { gl, objects_to_draw } = scene_config;

    objects_to_draw.forEach(object_config => {
        const { object_program } = object_config,
            { fbo_opts } = object_program,
            { framebuffers_n, framebuffers_offset } = fbo_opts;

        for (var ii = framebuffers_offset; ii < framebuffers_n + framebuffers_offset; ++ii) {
            gl.deleteTexture(texture_data.get_fbo_texture(object_program, ii));
            gl.deleteFramebuffer(texture_data.get_fbo(object_program, ii));
        }
        object_program.fbo_data = null;
    });

    return scene_config;
}