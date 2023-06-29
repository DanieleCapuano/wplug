/* <base.model.vert> */

//Base-config Uniform Buffer Object
layout(std140)uniform base_model_UBO {
    mat4 u_model;
    mat4 u_view;
    mat4 u_projection;
    float u_time;
    vec2 u_resolution;
};

in vec3 a_position;
in vec3 a_normal;

out vec4 normal;

/* <//base.model.vert> */