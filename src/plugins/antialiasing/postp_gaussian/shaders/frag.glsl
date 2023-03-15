
const float div = 16.0;
float gaussian_kernel[9] = float[9](
    1.0 / div, 2.0 / div, 1.0 / div,
    2.0 / div, 4.0 / div, 2.0 / div,
    1.0 / div, 2.0 / div, 1.0 / div
);

//from postprocessing.fbo we expect:
//uniform int u_on_fbo;
//uniform sampler2D u_tex;
vec3 postp_gaussian_frag(vec3 tex, float resolution_dim, vec2 texcoord) {
    vec3 col = vec3(0.0);
    float offset = 1.0 / resolution_dim;
    
    vec2 offsets[9] = vec2[9](
        vec2(-offset, offset), // top-left
        vec2(0.0f, offset), // top-center
        vec2(offset, offset), // top-right
        vec2(-offset, 0.0f), // center-left
        vec2(0.0f, 0.0f), // center-center
        vec2(offset, 0.0f), // center-right
        vec2(-offset, - offset), // bottom-left
        vec2(0.0f, - offset), // bottom-center
        vec2(offset, - offset)// bottom-right
    );
    
    if (float(u_on_fbo) == 1.0) {
        //we'll blur
        for(int i = 0; i < 9; i ++ ) {
            vec3 sample_tex = vec3(texture(u_tex, texcoord + offsets[i]));
            col += sample_tex * gaussian_kernel[i];
        }
    }
    
    return col;
}