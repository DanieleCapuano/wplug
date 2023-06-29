/* <lighting.blinn_phong.vert> */

//we'll use as inspiration the approach described here
//https://stackoverflow.com/a/62630376

in vec3 a_normal;

const int MAX_LIGHTS_N = 8;

layout (std140) uniform lighting_blinn_phong_UBO {
    //material for the object
    float u_ka;
    float u_kd;
    float u_ks;
    
    vec3 u_ambient_color;
    float u_ambient_intensity;
    
    int u_nlights;
    
    float u_light_intensities[MAX_LIGHTS_N];
    float u_light_specular_exp[MAX_LIGHTS_N];
    vec3 u_light_positions[MAX_LIGHTS_N];
    vec3 u_light_colors[MAX_LIGHTS_N];
};

out vec4 normal;
out vec3 light_dirs[MAX_LIGHTS_N];
out vec3 light_half_vects[MAX_LIGHTS_N];

int compute_lighting_vert(mat4 view_m, mat4 modelview_m) {
    vec4 view_pos = modelview_m * vec4(a_position, 1.0);
    
    for(int i = 0; i < int(u_nlights); i ++ ) {
        vec4 lpos = view_m * vec4(u_light_positions[i], 1.0);
        
        light_dirs[i] = normalize(lpos.xyz - view_pos.xyz);
        
        vec3 pos2eye = vec3(-view_pos.xyz);
        light_half_vects[i] = normalize(pos2eye + light_dirs[i]);
    }
    
    mat4 Mti = transpose(inverse(modelview_m));
    normal = (Mti * vec4(a_normal, 0.0));
    
    return 1;
}

/* </lighting.blinn_phong.vert> */