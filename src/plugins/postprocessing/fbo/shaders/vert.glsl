/* <postprocessing.fbo.vert> */

//we're not using a uniform block here since sampler2D type is not supported and then an ubo for a single float
//is not so useful :)
uniform int u_on_fbo;
uniform sampler2D u_tex;

//none needed here
void fbo_vert() {}

/* </postprocessing.fbo.vert> */