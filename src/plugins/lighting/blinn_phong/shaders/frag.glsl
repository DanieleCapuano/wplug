/* <lighting.blinn_phong.frag> */

//max number of allowed lights
const int MAX_LIGHTS_N = 8;

layout (std140) uniform lighting_blinn_phong_UBO {
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

in vec4 normal;
in vec3 light_dirs[MAX_LIGHTS_N];
in vec3 light_half_vects[MAX_LIGHTS_N];

//<TOBE REMOVED>
float lint[3];
float lse[3];
vec3 ulc[3];
//</TOBE REMOVED>

vec3 compute_lighting_frag(vec3 start_color) {
    vec3 color = start_color;
    vec3 n = normalize(normal.xyz);
    
    //<TOBE REMOVED>
    lint[0] = 0.9;
    lint[1] = 0.6;
    lint[2] = 0.5;
    lse[0] = 200.0;
    lse[1] = 300.;
    lse[2] = 300.;
    ulc[0] = vec3(0.9, 0.4, 0.4);
    ulc[1] = vec3(0.2, 0.3, 0.9);
    ulc[2] = vec3(0.7, 0.3, 0.4);
    //</TOBE REMOVED>
    
    color += u_ka * u_ambient_color;
    
    for(int i = 0; i < int(u_nlights); i ++ ) {
        vec3 l = normalize(light_dirs[i]);
        vec3 h = normalize(light_half_vects[i]);
        
        //<TOBE ADDED>
        float I = u_light_intensities[i];
        //</TOBE ADDED>
        
        //<TOBE REMOVED>
        // float I = lint[i];
        //</TOBE REMOVED>
        
        //<TOBE ADDED>
        vec3 Lc = u_light_colors[i];
        //</TOBE ADDED>
        
        //<TOBE REMOVED>
        // vec3 Lc = ulc[i];
        //</TOBE REMOVED>
        
        color += (
            (u_kd * I*max(0.0, dot(n, l)) * Lc) +
            //<TOBE ADDED>
            (u_ks * I*pow(max(0.0, dot(n, h)), u_light_specular_exp[i]) * Lc)
            //</TOBE ADDED>
            
            //<TOBE REMOVED>
            // (u_ks * I*pow(max(0.0, dot(n, h)), lse[i]) * Lc)
            //</TOBE REMOVED>
        );
    }
    
    // vec3 c = vec3(u_ka, u_kd, u_ks);
    // return c;
    // return color;
    return u_light_colors[2];
}

/* </lighting.blinn_phong.frag> */