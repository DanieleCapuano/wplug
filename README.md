# wplug - plugins for WOD (webgl2-objects-drawer)
A simple library of plugins for WOD.


## To build

1. npm i
2. npm run build (or npm run build-watch)
3. npm run test 
(this will build and run the test website, otherwise npm run build-test or npm run build-test-watch to build the test only)

## Currently implemented plugins
* **lighting**
  * *blinn_phong*: implements two shaders' functions which can be called from shaders
    * int compute_lighting_vert(mat4 view_m, mat4 modelview_m) //available in vertex shader
    * vec3 compute_lighting_frag(vec3 start_color)             //available in fragment shader
* **antialiasing**
  * *fs_derivatives*: fragment-shader-only, partial-derivatives-based antialiasing implementation, took from "Procedural Textures in GLSL" by Stefan Gustavson. Available functions in fragment shader:
    * float aastep(float threshold , float value)   //' threshold ' is constant , ' value ' is smoothly varying
    * vec2 aastep2d(float threshold , vec2 value)   //uses 2d values
    * vec3 aastep3d(float threshold , vec3 value)   //value in this case is typically a color