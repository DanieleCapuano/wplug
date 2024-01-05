/* <base.model.frag> */

//Base-config Uniform Buffer Object
layout(std140)uniform base_model_UBO {
    mat4 u_model;
    mat4 u_view;
    mat4 u_projection;
    float u_time;
    vec2 u_resolution;
    vec2 u_mmin_resolution;
    vec2 u_mmax_resolution;
    int u_should_remap_resolution;
};

vec2 remap_resolution_in_01(vec2 fragCoord) {
    vec2 mp = fragCoord;
    if (u_should_remap_resolution == 1) {
        vec2 fc = fragCoord;
        vec2 c = u_mmin_resolution;
        vec2 d = u_mmax_resolution;
        
        fc = fc - c;        //from fc in [c, d] to ==> fc in [0, d - c]
        fc = fc / (d - c);  //from fc in [0, d - c] to ==> fc in [0, 1]
        mp = fc;
    }
    
    return mp;
}

vec2 remap_resolution(vec2 fragCoord) {
    vec2 mp = fragCoord;
    if (u_should_remap_resolution == 1) {
        /*
        * hypothesis: fragCoord.xy in [[0, 0], [u_resolution.x, u_resolution.y]]
        * we want to map it in [[u_mmin_resolution.x, u_mmin_resolution.y], [u_max_resolution.x, u_mmax_resolution.y]]
        *
        * algorithm:
        * x in [a, b] ==> we want to find x' s.t. x' in [c, d]
        * ==> x - a                                 //in [0, b - a]
        * ==> (x - a) / (b - a)                     //in [0, 1]
        * ==> ((x - a) * (d - c)) / (b - a)         //in [0, (d - c)]
        * ==> c + (((x - a) * (d - c)) / (b - a))   //in [c, d]
        */
        vec2 fc = fragCoord;
        vec2 a = vec2(0.0);
        vec2 b = u_resolution;
        vec2 c = u_mmin_resolution;
        vec2 d = u_mmax_resolution;
        
        fc = fc - a;
        fc = fc / (b - a);
        fc = fc * (d - c);
        fc = fc + c;
        mp = fc;
    }
    
    return mp;
}
/* <//base.model.frag> */