/* <lighting.blinn_phong.vert> */

//we'll use as inspiration the approach described here
//https://stackoverflow.com/a/62630376

in vec3 a_normal;

const int MAX_LIGHTS_N = 8;

uniform lighting_blinn_phong_UBO {
    //material for the object
    float u_ka;
    float u_kd;
    float u_ks;
    
    vec3 u_ambient_color;
    float u_ambient_intensity;
    
    float u_nlights;
    
    float u_light_intensities[MAX_LIGHTS_N];
    float u_light_specular_exp[MAX_LIGHTS_N];
    vec3 u_light_positions[MAX_LIGHTS_N];
    vec3 u_light_colors[MAX_LIGHTS_N];
};

out vec4 normal;
out vec3 light_dirs[MAX_LIGHTS_N];
out vec3 light_half_vects[MAX_LIGHTS_N];

//<TOBE REMOVED>
vec3 ulp[3];
//</TOBE REMOVED>

int compute_lighting_vert(mat4 view_m, mat4 modelview_m) {
    vec4 view_pos = modelview_m * vec4(a_position, 1.0);
    
    //<TOBE REMOVED>
    ulp[0] = vec3(60.5, 10., 50.);
    ulp[1] = vec3(-1.5, -0.0, 10.);
    ulp[2] = vec3(-50.5, 10., 10.);
    //</TOBE REMOVED>
    
    for(int i = 0; i < int(u_nlights); i ++ ) {
        //<TOBE ADDED>
        // vec4 lpos = view_m * vec4(u_light_positions[i], 1.0);
        //</TOBE ADDED>
        
        //<TOBE REMOVED>
        vec4 lpos = view_m * vec4(ulp[i], 1.0);
        //</TOBE REMOVED>
        
        light_dirs[i] = normalize(lpos.xyz - view_pos.xyz);
        
        vec3 pos2eye = vec3(-view_pos.xyz);
        light_half_vects[i] = normalize(pos2eye + light_dirs[i]);
    }
    
    mat4 Mti = transpose(inverse(modelview_m));
    normal = (Mti * vec4(a_normal, 0.0));
    
    return 1;
}

/* </lighting.blinn_phong.vert> */