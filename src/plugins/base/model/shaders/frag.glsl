/* <base.model.frag> */

//Base-config Uniform Buffer Object
layout(std140)uniform base_model_UBO {
    mat4 u_model;
    mat4 u_view;
    mat4 u_projection;
    float u_time;
    vec2 u_resolution;
};
/* <//base.model.frag> */