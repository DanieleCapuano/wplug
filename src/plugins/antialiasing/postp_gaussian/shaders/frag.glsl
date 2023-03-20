/* <antialiasing.postp_gaussian.frag> */

//from postprocessing.fbo we expect:
//uniform int u_on_fbo;
//uniform sampler2D u_tex;
vec3 postp_gaussian_frag(vec3 base_color, vec2 texcoord, float resolution_dim, float divider) {
    vec3 col = base_color;
    
    float div = divider == 0. ? 16.0 : divider;
    float gaussian_kernel[9] = float[9](
        1.0 / div, 2.0 / div, 1.0 / div,
        2.0 / div, 4.0 / div, 2.0 / div,
        1.0 / div, 2.0 / div, 1.0 / div
    );
    
    float offset = 1.0 / max(resolution_dim, 0.01);
    vec2 offsets[9] = vec2[9](
        vec2(-offset, offset), // top-left
        vec2(0.0, offset), // top-center
        vec2(offset, offset), // top-right
        vec2(-offset, 0.0), // center-left
        vec2(0.0, 0.0), // center-center
        vec2(offset, 0.0), // center-right
        vec2(-offset, - offset), // bottom-left
        vec2(0.0, - offset), // bottom-center
        vec2(offset, - offset)// bottom-right
    );
    
    if (float(u_on_fbo) != 1.) {
        //we'll blur
        for(int i = 0; i < 9; i ++ ) {
            vec3 sample_tex = vec3(texture(u_tex, texcoord + offsets[i]));
            col += sample_tex * gaussian_kernel[i];
        }
    }
    return col;
}

/* </antialiasing.postp_gaussian.frag> */