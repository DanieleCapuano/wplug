/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../dist/wplug.js":
/*!************************!*\
  !*** ../dist/wplug.js ***!
  \************************/
/***/ ((module) => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (true) module.exports = factory();else {}\n})(self, () => {\n  return (/******/(() => {\n      // webpackBootstrap\n      /******/\n      var __webpack_modules__ = {\n        /***/\"./src/index.js\":\n        /*!**********************!*\\\n          !*** ./src/index.js ***!\n          \\**********************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__),\\n/* harmony export */   \\\"plugins\\\": () => (/* binding */ plugins)\\n/* harmony export */ });\\n/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ \\\"./src/plugins/index.js\\\");\\n\\nconst plugins_api = Object.keys(_plugins__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]).reduce((o, plug_key) => {\\n  const def = _plugins__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"][plug_key].default;\\n  return Object.assign(o, {\\n    [plug_key]: _flatten_logic_into(def)\\n  });\\n}, {});\\nconst plugins = plugins_api;\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);\\n\\n/////////////////////////////////////////////////////////////////////////\\n/////////////////////////////////////////////////////////////////////////\\n\\nfunction _flatten_logic_into(main_o) {\\n  return Object.keys(main_o).reduce((o, l_key) => {\\n    let default_o = main_o[l_key].default,\\n      logic = default_o.logic || {},\\n      no_logic_o = Object.keys(default_o).filter(k => k !== 'logic').reduce(_flat_obj.bind(null, default_o), {}),\\n      flat_o = Object.keys(logic).reduce(_flat_obj.bind(null, logic), no_logic_o);\\n    return Object.assign(o, {\\n      [l_key]: flat_o\\n    });\\n  }, {});\\n}\\nfunction _flat_obj(o_tobe_flat, o_dest, k) {\\n  return Object.assign(o_dest, {\\n    [k]: o_tobe_flat[k]\\n  });\\n}\\n\\n//# sourceURL=webpack://wplug/./src/index.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/geom/index.js\":\n        /*!***********************************!*\\\n          !*** ./src/plugins/geom/index.js ***!\n          \\***********************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad */ \\\"./src/plugins/geom/quad/index.js\\\");\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\\n  quad: _quad__WEBPACK_IMPORTED_MODULE_0__\\n});\\n\\n//# sourceURL=webpack://wplug/./src/plugins/geom/index.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/geom/quad/index.js\":\n        /*!****************************************!*\\\n          !*** ./src/plugins/geom/quad/index.js ***!\n          \\****************************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\\n__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \\\"./src/plugins/geom/quad/logic.js\\\");\\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \\\"./src/plugins/geom/quad/config.json\\\");\\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \\\"./src/plugins/geom/quad/shaders/vert.glsl\\\");\\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \\\"./src/plugins/geom/quad/shaders/frag.glsl\\\");\\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\\n\\n\\n\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\\n  config: /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2))),\\n  shaders: {\\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\\n  }\\n}));\\n\\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/index.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/geom/quad/logic.js\":\n        /*!****************************************!*\\\n          !*** ./src/plugins/geom/quad/logic.js ***!\n          \\****************************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"get_active\\\": () => (/* binding */ get_active),\\n/* harmony export */   \\\"get_description_values\\\": () => (/* binding */ get_description_values),\\n/* harmony export */   \\\"set_active\\\": () => (/* binding */ set_active),\\n/* harmony export */   \\\"set_uniforms_values\\\": () => (/* binding */ set_uniforms_values)\\n/* harmony export */ });\\nconst get_description_values = _get_desc;\\nconst set_uniforms_values = _set_uniforms_values;\\nconst set_active = _set_active;\\nconst get_active = _get_active;\\nlet __ACTIVE = false;\\nfunction _set_active(active, config) {\\n  __ACTIVE = !!active;\\n  return _init(config);\\n}\\nfunction _get_active() {\\n  return __ACTIVE;\\n}\\nfunction _init(config) {\\n  //currently not used\\n  return config;\\n}\\nfunction _get_desc(scene_desc) {\\n  const {\\n    lighting\\n  } = scene_desc;\\n  if (!lighting) return {};\\n  lighting.light_positions = lighting.lights.reduce((poss, l) => poss.concat(l.position), []);\\n  lighting.light_colors = lighting.lights.reduce((cols, l) => cols.concat(l.color), []);\\n  lighting.light_intensities = lighting.lights.reduce((ints, l) => ints.concat(l.intensity), []);\\n  lighting.light_specular_exp = lighting.lights.reduce((exps, l) => exps.concat(l.specular_exp), []);\\n  lighting.number_of_lights = lighting.lights.length;\\n  return {\\n    lighting\\n  };\\n}\\nfunction _set_uniforms_values(obj, scene_desc) {\\n  const {\\n    lighting\\n  } = scene_desc;\\n  return {\\n    u_ka: obj.material.ka,\\n    u_kd: obj.material.kd,\\n    u_ks: obj.material.ks,\\n    u_nlights: lighting.number_of_lights,\\n    u_ambient_color: lighting.ambient.color,\\n    u_ambient_intensity: lighting.ambient.intensity,\\n    u_light_positions: lighting.light_positions,\\n    u_light_colors: lighting.light_colors,\\n    u_light_intensities: lighting.light_intensities,\\n    u_light_specular_exp: lighting.light_specular_exp\\n  };\\n}\\n\\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/logic.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/index.js\":\n        /*!******************************!*\\\n          !*** ./src/plugins/index.js ***!\n          \\******************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geom */ \\\"./src/plugins/geom/index.js\\\");\\n/* harmony import */ var _lighting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lighting */ \\\"./src/plugins/lighting/index.js\\\");\\n\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\\n  geom: _geom__WEBPACK_IMPORTED_MODULE_0__,\\n  lighting: _lighting__WEBPACK_IMPORTED_MODULE_1__\\n});\\n\\n//# sourceURL=webpack://wplug/./src/plugins/index.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/lighting/blinn_phong/index.js\":\n        /*!***************************************************!*\\\n          !*** ./src/plugins/lighting/blinn_phong/index.js ***!\n          \\***************************************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\\n__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \\\"./src/plugins/lighting/blinn_phong/logic.js\\\");\\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \\\"./src/plugins/lighting/blinn_phong/config.json\\\");\\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \\\"./src/plugins/lighting/blinn_phong/shaders/vert.glsl\\\");\\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \\\"./src/plugins/lighting/blinn_phong/shaders/frag.glsl\\\");\\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\\n\\n\\n\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\\n  config: /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2))),\\n  shaders: {\\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\\n  }\\n}));\\n\\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/index.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/lighting/blinn_phong/logic.js\":\n        /*!***************************************************!*\\\n          !*** ./src/plugins/lighting/blinn_phong/logic.js ***!\n          \\***************************************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"get_active\\\": () => (/* binding */ get_active),\\n/* harmony export */   \\\"get_description_values\\\": () => (/* binding */ get_description_values),\\n/* harmony export */   \\\"set_active\\\": () => (/* binding */ set_active),\\n/* harmony export */   \\\"set_uniforms_values\\\": () => (/* binding */ set_uniforms_values)\\n/* harmony export */ });\\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \\\"./src/plugins/utils.js\\\");\\n\\nconst get_description_values = _get_desc;\\nconst set_uniforms_values = _set_uniforms_values;\\nconst {\\n  _get_active,\\n  _set_active\\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\\nconst set_active = _set_active.bind(null, _init);\\nconst get_active = _get_active;\\n\\n///////////////////////////////////////////////////////////\\n///////////////////////////////////////////////////////////\\n\\nfunction _init(config) {\\n  //currently not used\\n  return config;\\n}\\nfunction _get_desc(scene_desc) {\\n  const {\\n    lighting\\n  } = scene_desc;\\n  if (!lighting) return {};\\n  lighting.light_positions = lighting.lights.reduce((poss, l) => poss.concat(l.position), []);\\n  lighting.light_colors = lighting.lights.reduce((cols, l) => cols.concat(l.color), []);\\n  lighting.light_intensities = lighting.lights.reduce((ints, l) => ints.concat(l.intensity), []);\\n  lighting.light_specular_exp = lighting.lights.reduce((exps, l) => exps.concat(l.specular_exp), []);\\n  lighting.number_of_lights = lighting.lights.length;\\n  return {\\n    lighting\\n  };\\n}\\nfunction _set_uniforms_values(obj, scene_desc) {\\n  const {\\n    lighting\\n  } = scene_desc;\\n  return {\\n    u_ka: obj.material.ka,\\n    u_kd: obj.material.kd,\\n    u_ks: obj.material.ks,\\n    u_nlights: lighting.number_of_lights,\\n    u_ambient_color: lighting.ambient.color,\\n    u_ambient_intensity: lighting.ambient.intensity,\\n    u_light_positions: lighting.light_positions,\\n    u_light_colors: lighting.light_colors,\\n    u_light_intensities: lighting.light_intensities,\\n    u_light_specular_exp: lighting.light_specular_exp\\n  };\\n}\\n\\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/logic.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/lighting/index.js\":\n        /*!***************************************!*\\\n          !*** ./src/plugins/lighting/index.js ***!\n          \\***************************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _blinn_phong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blinn_phong */ \\\"./src/plugins/lighting/blinn_phong/index.js\\\");\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\\n  blinn_phong: _blinn_phong__WEBPACK_IMPORTED_MODULE_0__\\n});\\n\\n//# sourceURL=webpack://wplug/./src/plugins/lighting/index.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/utils.js\":\n        /*!******************************!*\\\n          !*** ./src/plugins/utils.js ***!\n          \\******************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          \"use strict\";\n\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"get_active_logic\\\": () => (/* binding */ get_active_logic)\\n/* harmony export */ });\\nconst get_active_logic = _get_active_logic;\\nfunction _get_active_logic() {\\n  return (() => {\\n    let __ACTIVE = false;\\n    return {\\n      _set_active,\\n      _get_active\\n    };\\n    function _set_active(_init, active, config) {\\n      __ACTIVE = !!active;\\n      return _init(config);\\n    }\\n    function _get_active() {\\n      return __ACTIVE;\\n    }\\n  })();\\n}\\n\\n//# sourceURL=webpack://wplug/./src/plugins/utils.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/geom/quad/shaders/frag.glsl\":\n        /*!*************************************************!*\\\n          !*** ./src/plugins/geom/quad/shaders/frag.glsl ***!\n          \\*************************************************/\n        /***/\n        module => {\n          eval(\"module.exports = \\\"//material for the square\\\\nuniform float u_ka, u_kd, u_ks;\\\\n\\\\n//max number of allowed lights\\\\nconst int MAX_LIGHTS_N = 8;\\\\nuniform vec3 u_ambient_color;\\\\nuniform float u_ambient_intensity;\\\\nuniform int u_nlights;\\\\n\\\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\\\nuniform vec3 u_light_colors[MAX_LIGHTS_N];\\\\nuniform float u_light_intensities[MAX_LIGHTS_N];\\\\nuniform float u_light_specular_exp[MAX_LIGHTS_N];\\\\n\\\\nin vec4 normal;\\\\nin vec3 light_dirs[MAX_LIGHTS_N];\\\\nin vec3 light_half_vects[MAX_LIGHTS_N];\\\\n\\\\nvec3 compute_lighting_frag(vec3 start_color) {\\\\n    vec3 color = start_color;\\\\n    vec3 n = normalize(normal.xyz);\\\\n    \\\\n    color += u_ka * u_ambient_color;\\\\n    \\\\n    for(int i = 0; i < u_nlights; i ++ ) {\\\\n        vec3 l = normalize(light_dirs[i]);\\\\n        vec3 h = normalize(light_half_vects[i]);\\\\n        float I = u_light_intensities[i];\\\\n        vec3 Lc = u_light_colors[i];\\\\n        \\\\n        color += (\\\\n            (u_kd * I*max(0.0, dot(n, l)) * Lc) +\\\\n            (u_ks * I*pow(max(0.0, dot(n, h)), u_light_specular_exp[i]) * Lc)\\\\n        );\\\\n    }\\\\n    \\\\n    return color;\\\\n}\\\"\\n\\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/shaders/frag.glsl?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/geom/quad/shaders/vert.glsl\":\n        /*!*************************************************!*\\\n          !*** ./src/plugins/geom/quad/shaders/vert.glsl ***!\n          \\*************************************************/\n        /***/\n        module => {\n          eval(\"module.exports = \\\"//we'll use as inspiration the approach described here\\\\n//https://stackoverflow.com/a/62630376\\\\n\\\\nin vec3 a_normal;\\\\n\\\\nconst int MAX_LIGHTS_N = 8;\\\\n\\\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\\\nuniform int u_nlights;\\\\n\\\\nout vec4 normal;\\\\nout vec3 light_dirs[MAX_LIGHTS_N];\\\\nout vec3 light_half_vects[MAX_LIGHTS_N];\\\\n\\\\nint compute_lighting_vert(mat4 view_m, mat4 modelview_m) {\\\\n    vec4 view_pos = modelview_m * vec4(a_position, 1.0);\\\\n    \\\\n    for(int i = 0; i < u_nlights; i ++ ) {\\\\n        vec4 lpos = view_m * vec4(u_light_positions[i], 1.0);\\\\n        light_dirs[i] = normalize(lpos.xyz - view_pos.xyz);\\\\n        \\\\n        vec3 pos2eye = vec3(-view_pos.xyz);\\\\n        light_half_vects[i] = normalize(pos2eye + light_dirs[i]);\\\\n    }\\\\n    \\\\n    mat4 Mti = transpose(inverse(modelview_m));\\\\n    normal = (Mti * vec4(a_normal, 0.0));\\\\n    \\\\n    return 1;\\\\n}\\\"\\n\\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/shaders/vert.glsl?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/lighting/blinn_phong/shaders/frag.glsl\":\n        /*!************************************************************!*\\\n          !*** ./src/plugins/lighting/blinn_phong/shaders/frag.glsl ***!\n          \\************************************************************/\n        /***/\n        module => {\n          eval(\"module.exports = \\\"//material for the square\\\\nuniform float u_ka, u_kd, u_ks;\\\\n\\\\n//max number of allowed lights\\\\nconst int MAX_LIGHTS_N = 8;\\\\nuniform vec3 u_ambient_color;\\\\nuniform float u_ambient_intensity;\\\\nuniform int u_nlights;\\\\n\\\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\\\nuniform vec3 u_light_colors[MAX_LIGHTS_N];\\\\nuniform float u_light_intensities[MAX_LIGHTS_N];\\\\nuniform float u_light_specular_exp[MAX_LIGHTS_N];\\\\n\\\\nin vec4 normal;\\\\nin vec3 light_dirs[MAX_LIGHTS_N];\\\\nin vec3 light_half_vects[MAX_LIGHTS_N];\\\\n\\\\nvec3 compute_lighting_frag(vec3 start_color) {\\\\n    vec3 color = start_color;\\\\n    vec3 n = normalize(normal.xyz);\\\\n    \\\\n    color += u_ka * u_ambient_color;\\\\n    \\\\n    for(int i = 0; i < u_nlights; i ++ ) {\\\\n        vec3 l = normalize(light_dirs[i]);\\\\n        vec3 h = normalize(light_half_vects[i]);\\\\n        float I = u_light_intensities[i];\\\\n        vec3 Lc = u_light_colors[i];\\\\n        \\\\n        color += (\\\\n            (u_kd * I*max(0.0, dot(n, l)) * Lc) +\\\\n            (u_ks * I*pow(max(0.0, dot(n, h)), u_light_specular_exp[i]) * Lc)\\\\n        );\\\\n    }\\\\n    \\\\n    return color;\\\\n}\\\"\\n\\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/shaders/frag.glsl?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/lighting/blinn_phong/shaders/vert.glsl\":\n        /*!************************************************************!*\\\n          !*** ./src/plugins/lighting/blinn_phong/shaders/vert.glsl ***!\n          \\************************************************************/\n        /***/\n        module => {\n          eval(\"module.exports = \\\"//we'll use as inspiration the approach described here\\\\n//https://stackoverflow.com/a/62630376\\\\n\\\\nin vec3 a_normal;\\\\n\\\\nconst int MAX_LIGHTS_N = 8;\\\\n\\\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\\\nuniform int u_nlights;\\\\n\\\\nout vec4 normal;\\\\nout vec3 light_dirs[MAX_LIGHTS_N];\\\\nout vec3 light_half_vects[MAX_LIGHTS_N];\\\\n\\\\nint compute_lighting_vert(mat4 view_m, mat4 modelview_m) {\\\\n    vec4 view_pos = modelview_m * vec4(a_position, 1.0);\\\\n    \\\\n    for(int i = 0; i < u_nlights; i ++ ) {\\\\n        vec4 lpos = view_m * vec4(u_light_positions[i], 1.0);\\\\n        light_dirs[i] = normalize(lpos.xyz - view_pos.xyz);\\\\n        \\\\n        vec3 pos2eye = vec3(-view_pos.xyz);\\\\n        light_half_vects[i] = normalize(pos2eye + light_dirs[i]);\\\\n    }\\\\n    \\\\n    mat4 Mti = transpose(inverse(modelview_m));\\\\n    normal = (Mti * vec4(a_normal, 0.0));\\\\n    \\\\n    return 1;\\\\n}\\\"\\n\\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/shaders/vert.glsl?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/geom/quad/config.json\":\n        /*!*******************************************!*\\\n          !*** ./src/plugins/geom/quad/config.json ***!\n          \\*******************************************/\n        /***/\n        module => {\n          \"use strict\";\n\n          eval(\"module.exports = JSON.parse('{\\\"attributes\\\":{},\\\"uniforms\\\":{\\\"u_nlights\\\":{\\\"name\\\":\\\"u_nlights\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1i\\\"}},\\\"u_ka\\\":{\\\"name\\\":\\\"u_ka\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_kd\\\":{\\\"name\\\":\\\"u_kd\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_ks\\\":{\\\"name\\\":\\\"u_ks\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_ambient_color\\\":{\\\"name\\\":\\\"u_ambient_color\\\",\\\"opts\\\":{\\\"fn\\\":\\\"3fv\\\"}},\\\"u_ambient_intensity\\\":{\\\"name\\\":\\\"u_ambient_intensity\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_light_positions\\\":{\\\"name\\\":\\\"u_light_positions\\\",\\\"opts\\\":{\\\"fn\\\":\\\"3fv\\\"}},\\\"u_light_colors\\\":{\\\"name\\\":\\\"u_light_colors\\\",\\\"opts\\\":{\\\"fn\\\":\\\"3fv\\\"}},\\\"u_light_intensities\\\":{\\\"name\\\":\\\"u_light_intensities\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1fv\\\"}},\\\"u_light_specular_exp\\\":{\\\"name\\\":\\\"u_light_specular_exp\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1fv\\\"}}}}');\\n\\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/config.json?\");\n\n          /***/\n        },\n\n        /***/\"./src/plugins/lighting/blinn_phong/config.json\":\n        /*!******************************************************!*\\\n          !*** ./src/plugins/lighting/blinn_phong/config.json ***!\n          \\******************************************************/\n        /***/\n        module => {\n          \"use strict\";\n\n          eval(\"module.exports = JSON.parse('{\\\"attributes\\\":{},\\\"uniforms\\\":{\\\"u_nlights\\\":{\\\"name\\\":\\\"u_nlights\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1i\\\"}},\\\"u_ka\\\":{\\\"name\\\":\\\"u_ka\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_kd\\\":{\\\"name\\\":\\\"u_kd\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_ks\\\":{\\\"name\\\":\\\"u_ks\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_ambient_color\\\":{\\\"name\\\":\\\"u_ambient_color\\\",\\\"opts\\\":{\\\"fn\\\":\\\"3fv\\\"}},\\\"u_ambient_intensity\\\":{\\\"name\\\":\\\"u_ambient_intensity\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1f\\\"}},\\\"u_light_positions\\\":{\\\"name\\\":\\\"u_light_positions\\\",\\\"opts\\\":{\\\"fn\\\":\\\"3fv\\\"}},\\\"u_light_colors\\\":{\\\"name\\\":\\\"u_light_colors\\\",\\\"opts\\\":{\\\"fn\\\":\\\"3fv\\\"}},\\\"u_light_intensities\\\":{\\\"name\\\":\\\"u_light_intensities\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1fv\\\"}},\\\"u_light_specular_exp\\\":{\\\"name\\\":\\\"u_light_specular_exp\\\",\\\"opts\\\":{\\\"fn\\\":\\\"1fv\\\"}}}}');\\n\\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/config.json?\");\n\n          /***/\n        }\n\n        /******/\n      };\n      /************************************************************************/\n      /******/ // The module cache\n      /******/\n      var __webpack_module_cache__ = {};\n      /******/\n      /******/ // The require function\n      /******/\n      function __nested_webpack_require_24937__(moduleId) {\n        /******/ // Check if module is in cache\n        /******/var cachedModule = __webpack_module_cache__[moduleId];\n        /******/\n        if (cachedModule !== undefined) {\n          /******/return cachedModule.exports;\n          /******/\n        }\n        /******/ // Create a new module (and put it into the cache)\n        /******/\n        var module = __webpack_module_cache__[moduleId] = {\n          /******/ // no module.id needed\n          /******/ // no module.loaded needed\n          /******/exports: {}\n          /******/\n        };\n        /******/\n        /******/ // Execute the module function\n        /******/\n        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24937__);\n        /******/\n        /******/ // Return the exports of the module\n        /******/\n        return module.exports;\n        /******/\n      }\n      /******/\n      /************************************************************************/\n      /******/ /* webpack/runtime/compat get default export */\n      /******/\n      (() => {\n        /******/ // getDefaultExport function for compatibility with non-harmony modules\n        /******/__nested_webpack_require_24937__.n = module => {\n          /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;\n          /******/\n          __nested_webpack_require_24937__.d(getter, {\n            a: getter\n          });\n          /******/\n          return getter;\n          /******/\n        };\n        /******/\n      })();\n      /******/\n      /******/ /* webpack/runtime/create fake namespace object */\n      /******/\n      (() => {\n        /******/var getProto = Object.getPrototypeOf ? obj => Object.getPrototypeOf(obj) : obj => obj.__proto__;\n        /******/\n        var leafPrototypes;\n        /******/ // create a fake namespace object\n        /******/ // mode & 1: value is a module id, require it\n        /******/ // mode & 2: merge all properties of value into the ns\n        /******/ // mode & 4: return value when already ns object\n        /******/ // mode & 16: return value when it's Promise-like\n        /******/ // mode & 8|1: behave like require\n        /******/\n        __nested_webpack_require_24937__.t = function (value, mode) {\n          /******/if (mode & 1) value = this(value);\n          /******/\n          if (mode & 8) return value;\n          /******/\n          if (typeof value === 'object' && value) {\n            /******/if (mode & 4 && value.__esModule) return value;\n            /******/\n            if (mode & 16 && typeof value.then === 'function') return value;\n            /******/\n          }\n          /******/\n          var ns = Object.create(null);\n          /******/\n          __nested_webpack_require_24937__.r(ns);\n          /******/\n          var def = {};\n          /******/\n          leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];\n          /******/\n          for (var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {\n            /******/Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);\n            /******/\n          }\n          /******/\n          def['default'] = () => value;\n          /******/\n          __nested_webpack_require_24937__.d(ns, def);\n          /******/\n          return ns;\n          /******/\n        };\n        /******/\n      })();\n      /******/\n      /******/ /* webpack/runtime/define property getters */\n      /******/\n      (() => {\n        /******/ // define getter functions for harmony exports\n        /******/__nested_webpack_require_24937__.d = (exports, definition) => {\n          /******/for (var key in definition) {\n            /******/if (__nested_webpack_require_24937__.o(definition, key) && !__nested_webpack_require_24937__.o(exports, key)) {\n              /******/Object.defineProperty(exports, key, {\n                enumerable: true,\n                get: definition[key]\n              });\n              /******/\n            }\n            /******/\n          }\n          /******/\n        };\n        /******/\n      })();\n      /******/\n      /******/ /* webpack/runtime/hasOwnProperty shorthand */\n      /******/\n      (() => {\n        /******/__nested_webpack_require_24937__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);\n        /******/\n      })();\n      /******/\n      /******/ /* webpack/runtime/make namespace object */\n      /******/\n      (() => {\n        /******/ // define __esModule on exports\n        /******/__nested_webpack_require_24937__.r = exports => {\n          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n            /******/Object.defineProperty(exports, Symbol.toStringTag, {\n              value: 'Module'\n            });\n            /******/\n          }\n          /******/\n          Object.defineProperty(exports, '__esModule', {\n            value: true\n          });\n          /******/\n        };\n        /******/\n      })();\n      /******/\n      /************************************************************************/\n      /******/\n      /******/ // startup\n      /******/ // Load entry module and return exports\n      /******/ // This entry module can't be inlined because the eval devtool is used.\n      /******/\n      var __webpack_exports__ = __nested_webpack_require_24937__(\"./src/index.js\");\n      /******/\n      /******/\n      return __webpack_exports__;\n      /******/\n    })()\n  );\n});\n\n//# sourceURL=webpack://wplug-test/../dist/wplug.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wplug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wplug */ \"../dist/wplug.js\");\n/* harmony import */ var wplug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wplug__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.info(\"PLUGINS DEF\", wplug__WEBPACK_IMPORTED_MODULE_0__.plugins);\n\n//# sourceURL=webpack://wplug-test/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;