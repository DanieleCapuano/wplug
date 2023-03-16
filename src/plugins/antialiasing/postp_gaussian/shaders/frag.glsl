/* <antialiasing.postp_gaussian.frag> */

//from postprocessing.fbo we expect:
//uniform int u_on_fbo;
//uniform sampler2D u_tex;
vec3 postp_gaussian_frag(float resolution_dim, vec2 texcoord) {
    vec3 col = vec3(0.0);
    
    const float div = 16.0;
    float gaussian_kernel[9] = float[9](
        1.0 / div, 2.0 / div, 1.0 / div,
        2.0 / div, 4.0 / div, 2.0 / div,
        1.0 / div, 2.0 / div, 1.0 / div
    );
    
    float offset = 1.0 / max(resolution_dim, 1.);
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
    
    if (u_on_fbo != 1) {
        //we'll blur
        for(int i = 0; i < 9; i ++ ) {
            vec3 sample_tex = vec3(texture(u_tex, clamp(texcoord + offsets[i], vec2(0.0), vec2(1.0))));
            col += sample_tex * gaussian_kernel[i];
        }
    }
    
    return col;
}

/* </antialiasing.postp_gaussian.frag> */