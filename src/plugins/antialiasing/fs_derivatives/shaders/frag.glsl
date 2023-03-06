// ' threshold ' is constant , ' value ' is smoothly varying
float aastep(float threshold , float value) {
    float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));
    // GLSL ' s fwidth ( value ) is abs ( dFdx ( value ) ) + abs ( dFdy ( value ) )
    return smoothstep(threshold - afwidth , threshold + afwidth , value);
}

vec2 aastep2d(float threshold , vec2 value) {
    vec2 afwidth = 0.7 * fwidth(value);
    return smoothstep(threshold - afwidth , threshold + afwidth , value);
}

//value in this case is typically a color
vec3 aastep3d(float threshold , vec3 value) {
    vec3 afwidth = 0.7 * fwidth(value);
    return smoothstep(threshold - afwidth , threshold + afwidth , value);
}