/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wplug"] = factory();
	else
		root["wplug"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/wbase/dist/wbase.js":
/*!******************************************!*\
  !*** ./node_modules/wbase/dist/wbase.js ***!
  \******************************************/
/***/ ((module) => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (true) module.exports = factory();else {}\n})(self, () => {\n  return (/******/(() => {\n      // webpackBootstrap\n      /******/\n      \"use strict\";\n\n      /******/\n      var __webpack_modules__ = {\n        /***/\"./src/index.js\":\n        /*!**********************!*\\\n          !*** ./src/index.js ***!\n          \\**********************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"bind_attribute\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.bind_attribute),\\n/* harmony export */   \\\"buffer_data\\\": () => (/* reexport safe */ _wod__WEBPACK_IMPORTED_MODULE_5__.buffer_data),\\n/* harmony export */   \\\"createProgram\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createProgram),\\n/* harmony export */   \\\"createProgramFromSources\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.createProgramFromSources),\\n/* harmony export */   \\\"create_program\\\": () => (/* reexport safe */ _wod__WEBPACK_IMPORTED_MODULE_5__.create_program),\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__),\\n/* harmony export */   \\\"draw_shapes\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.draw_shapes),\\n/* harmony export */   \\\"fill_position_buffer\\\": () => (/* reexport safe */ _wod__WEBPACK_IMPORTED_MODULE_5__.fill_position_buffer),\\n/* harmony export */   \\\"generate_attributes_from_config\\\": () => (/* reexport safe */ _wod__WEBPACK_IMPORTED_MODULE_5__.generate_attributes_from_config),\\n/* harmony export */   \\\"get_program_data\\\": () => (/* reexport safe */ _program_def__WEBPACK_IMPORTED_MODULE_0__.get_program_data),\\n/* harmony export */   \\\"get_program_elements\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.get_program_elements),\\n/* harmony export */   \\\"get_program_uniforms\\\": () => (/* reexport safe */ _uniforms_common__WEBPACK_IMPORTED_MODULE_2__.get_program_uniforms),\\n/* harmony export */   \\\"init_program\\\": () => (/* reexport safe */ _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program),\\n/* harmony export */   \\\"init_program_fbos\\\": () => (/* reexport safe */ _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program_fbos),\\n/* harmony export */   \\\"init_vao\\\": () => (/* reexport safe */ _wod__WEBPACK_IMPORTED_MODULE_5__.init_vao),\\n/* harmony export */   \\\"init_vertex_data\\\": () => (/* reexport safe */ _vertex_common__WEBPACK_IMPORTED_MODULE_4__.init_vertex_data),\\n/* harmony export */   \\\"loadShader\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.loadShader),\\n/* harmony export */   \\\"resizeCanvasToDisplaySize\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.resizeCanvasToDisplaySize),\\n/* harmony export */   \\\"set_rectangle_coords\\\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.set_rectangle_coords),\\n/* harmony export */   \\\"set_uniforms\\\": () => (/* reexport safe */ _wod__WEBPACK_IMPORTED_MODULE_5__.set_uniforms),\\n/* harmony export */   \\\"setup_indices\\\": () => (/* reexport safe */ _wod__WEBPACK_IMPORTED_MODULE_5__.setup_indices),\\n/* harmony export */   \\\"texture_data\\\": () => (/* reexport safe */ _texture_common__WEBPACK_IMPORTED_MODULE_1__.textureData)\\n/* harmony export */ });\\n/* harmony import */ var _program_def__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program-def */ \\\"./src/program-def.js\\\");\\n/* harmony import */ var _texture_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texture-common */ \\\"./src/texture-common.js\\\");\\n/* harmony import */ var _uniforms_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniforms-common */ \\\"./src/uniforms-common.js\\\");\\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \\\"./src/utils.js\\\");\\n/* harmony import */ var _vertex_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertex-common */ \\\"./src/vertex-common.js\\\");\\n/* harmony import */ var _wod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wod */ \\\"./src/wod.js\\\");\\n\\n\\n\\n\\n\\n\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\\n  init_program: _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program,\\n  init_program_fbos: _program_def__WEBPACK_IMPORTED_MODULE_0__.init_program_fbos,\\n  get_program_data: _program_def__WEBPACK_IMPORTED_MODULE_0__.get_program_data,\\n  texture_data: _texture_common__WEBPACK_IMPORTED_MODULE_1__.textureData,\\n  get_program_uniforms: _uniforms_common__WEBPACK_IMPORTED_MODULE_2__.get_program_uniforms,\\n  set_rectangle_coords: _utils__WEBPACK_IMPORTED_MODULE_3__.set_rectangle_coords,\\n  bind_attribute: _utils__WEBPACK_IMPORTED_MODULE_3__.bind_attribute,\\n  loadShader: _utils__WEBPACK_IMPORTED_MODULE_3__.loadShader,\\n  createProgram: _utils__WEBPACK_IMPORTED_MODULE_3__.createProgram,\\n  createProgramFromSources: _utils__WEBPACK_IMPORTED_MODULE_3__.createProgramFromSources,\\n  resizeCanvasToDisplaySize: _utils__WEBPACK_IMPORTED_MODULE_3__.resizeCanvasToDisplaySize,\\n  draw_shapes: _utils__WEBPACK_IMPORTED_MODULE_3__.draw_shapes,\\n  get_program_elements: _utils__WEBPACK_IMPORTED_MODULE_3__.get_program_elements,\\n  init_vertex_data: _vertex_common__WEBPACK_IMPORTED_MODULE_4__.init_vertex_data,\\n  create_program: _wod__WEBPACK_IMPORTED_MODULE_5__.create_program,\\n  init_vao: _wod__WEBPACK_IMPORTED_MODULE_5__.init_vao,\\n  generate_attributes_from_config: _wod__WEBPACK_IMPORTED_MODULE_5__.generate_attributes_from_config,\\n  fill_position_buffer: _wod__WEBPACK_IMPORTED_MODULE_5__.fill_position_buffer,\\n  setup_indices: _wod__WEBPACK_IMPORTED_MODULE_5__.setup_indices,\\n  buffer_data: _wod__WEBPACK_IMPORTED_MODULE_5__.buffer_data,\\n  set_uniforms: _wod__WEBPACK_IMPORTED_MODULE_5__.set_uniforms\\n});\\n\\n//# sourceURL=webpack://wbase/./src/index.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/program-def.js\":\n        /*!****************************!*\\\n          !*** ./src/program-def.js ***!\n          \\****************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"get_program_data\\\": () => (/* binding */ get_program_data),\\n/* harmony export */   \\\"init_program\\\": () => (/* binding */ init_program),\\n/* harmony export */   \\\"init_program_fbos\\\": () => (/* binding */ init_program_fbos)\\n/* harmony export */ });\\n/* harmony import */ var _vertex_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertex-common */ \\\"./src/vertex-common.js\\\");\\n/* harmony import */ var _uniforms_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniforms-common */ \\\"./src/uniforms-common.js\\\");\\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \\\"./src/utils.js\\\");\\n/* harmony import */ var _texture_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture-common */ \\\"./src/texture-common.js\\\");\\n\\n\\n\\n\\nconst init_program = _init_program;\\nconst init_program_fbos = _init_program_fbos;\\nconst get_program_data = _get_program_data;\\nfunction _init_program(gl, opts) {\\n  let p_o = {};\\n  try {\\n    // setup GLSL program\\n    let shaders_src = [opts.vertex_shader, opts.fragment_shader].map(sh => _decorate_source(sh));\\n    if (opts.build_program) {\\n      p_o = opts.build_program(gl, shaders);\\n    } else {\\n      let\\n        ///////////////////////////////\\n        pands = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createProgramFromSources)(gl, shaders_src),\\n        program = pands.program,\\n        shaders = pands.shaders;\\n      p_o = _init_program_fbos(Object.assign({\\n        program,\\n        shaders\\n      }, _get_program_data(gl, program)), gl, opts);\\n    }\\n  } catch (e) {\\n    console.warn(\\\"PROGRAM ERROR FOR CURRENT PROGRAM\\\");\\n    console.warn(e);\\n  }\\n  if (opts.add_program_configuration) {\\n    p_o = opts.add_program_configuration(p_o, gl, opts);\\n  }\\n  return p_o;\\n}\\nfunction _get_program_data(gl, program) {\\n  let vertex_data = (0,_vertex_common__WEBPACK_IMPORTED_MODULE_0__.init_vertex_data)(gl, program),\\n    uniforms = (0,_uniforms_common__WEBPACK_IMPORTED_MODULE_1__.get_program_uniforms)(gl, program);\\n  return {\\n    vertex_data,\\n    uniforms,\\n    start_time: performance.now()\\n  };\\n}\\nfunction _init_program_fbos(current_program, gl, opts) {\\n  const {\\n    canvas,\\n    framebuffers_n,\\n    framebuffers_offset\\n  } = opts;\\n  let fbo_n = framebuffers_n || 1,\\n    fbo_offset = framebuffers_offset || 1;\\n  current_program.has_framebuffer = opts.has_framebuffer;\\n  if (!opts.dont_create_base_texture) {\\n    current_program.base_texture = current_program.base_texture || _texture_common__WEBPACK_IMPORTED_MODULE_3__.textureData.init_texture(gl, 0);\\n  }\\n  current_program.fbo_data = _texture_common__WEBPACK_IMPORTED_MODULE_3__.textureData.create_fbo_textures(current_program, gl, fbo_n, fbo_offset, canvas.clientWidth, canvas.clientHeight);\\n  return current_program;\\n}\\nfunction _decorate_source(source) {\\n  return eval(\\\"`\\\" + source + \\\"`\\\");\\n}\\n\\n//# sourceURL=webpack://wbase/./src/program-def.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/texture-common.js\":\n        /*!*******************************!*\\\n          !*** ./src/texture-common.js ***!\n          \\*******************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"textureData\\\": () => (/* binding */ textureData)\\n/* harmony export */ });\\nconst textureData = function () {\\n  return {\\n    init_texture: _init_texture,\\n    draw_into_texture: _drawImageIntoTexture,\\n    create_fbo_textures: _create_fbo_textures,\\n    set_framebuffer: _setFramebuffer,\\n    get_fbo_texture: _get_texture,\\n    get_fbo: _get_fbo\\n  };\\n  function _get_texture(program_obj, i) {\\n    return program_obj.fbo_data[i].texture;\\n  }\\n  function _get_fbo(program_obj, i) {\\n    return program_obj.fbo_data[i].fbo;\\n  }\\n  function _init_texture(gl, texture_unit) {\\n    // Create a texture.\\n    gl.activeTexture(gl.TEXTURE0 + (texture_unit || 0));\\n    var texture = gl.createTexture();\\n\\n    // Bind it to texture unit 0's 2D bind point\\n    gl.bindTexture(gl.TEXTURE_2D, texture);\\n\\n    // Set the parameters so we don't need mips and so we're not filtering\\n    // and we don't repeat at the edges.\\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\\n    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);\\n    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);\\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\\n    return texture;\\n  }\\n\\n  ///////////////////////////////////////\\n  // GET IMAGE FROM TEXTURE\\n\\n  function _drawImageIntoTexture(gl, texture, texture_unit, img_data, image_width, image_height) {\\n    gl.activeTexture(gl.TEXTURE0 + (texture_unit || 0));\\n    gl.bindTexture(gl.TEXTURE_2D, texture);\\n\\n    // Upload the image into the texture.\\n    var mipLevel = 0; // the largest mip\\n    var internalFormat = gl.RGBA; // format we want in the texture\\n    var border = 0; // must be 0\\n    var srcFormat = gl.RGBA; // format of data we are supplying\\n    var srcType = gl.UNSIGNED_BYTE; // type of data we are supplying\\n    var data = img_data; // no data = create a blank texture\\n    var args = data ? [gl.TEXTURE_2D, mipLevel, internalFormat, srcFormat, srcType, data] : [gl.TEXTURE_2D, mipLevel, internalFormat, image_width, image_height, border, srcFormat, srcType, data];\\n    try {\\n      gl.texImage2D.apply(gl, args);\\n    } catch (e) {\\n      console.warn(\\\"Error loading image\\\", img_data);\\n    }\\n  }\\n  function _create_fbo_textures(program_obj, gl, n, offset, image_width, image_height) {\\n    offset = offset || 0;\\n    let fbo_data = [];\\n    for (var ii = offset; ii < n + offset; ++ii) {\\n      var texture = _init_texture(gl, 0);\\n\\n      //init with blank images\\n      _drawImageIntoTexture(gl, texture, 0, null, image_width, image_height);\\n\\n      // Create a framebuffer\\n      var fbo = gl.createFramebuffer();\\n      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);\\n\\n      // Attach a texture to it.\\n      var attachmentPoint = gl.COLOR_ATTACHMENT0;\\n      gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, texture, 0);\\n      fbo_data[ii] = {\\n        fbo: fbo,\\n        texture: texture\\n      };\\n    }\\n    gl.bindFramebuffer(gl.FRAMEBUFFER, null);\\n    return fbo_data;\\n  }\\n  function _setFramebuffer(gl, fbo, width, height) {\\n    // make this the framebuffer we are rendering to.\\n    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);\\n\\n    // Tell WebGL how to convert from clip space to pixels\\n    gl.viewport(0, 0, width, height);\\n  }\\n}();\\n\\n\\n//# sourceURL=webpack://wbase/./src/texture-common.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/uniforms-common.js\":\n        /*!********************************!*\\\n          !*** ./src/uniforms-common.js ***!\n          \\********************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"get_program_uniforms\\\": () => (/* binding */ get_program_uniforms)\\n/* harmony export */ });\\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \\\"./src/utils.js\\\");\\n\\nfunction get_program_uniforms(gl, program) {\\n  let def_elems = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_program_elements)(gl, {\\n    program: program\\n  });\\n  return Object.keys(def_elems.uniforms).reduce((u_data, res_name) => {\\n    u_data[res_name] = {\\n      get: () => def_elems.uniforms[res_name].loc,\\n      set: _set_uniform.bind(null, def_elems.uniforms[res_name])\\n    };\\n    return u_data;\\n  }, {});\\n  function _set_uniform(uniform_obj, gl, program, type, data) {\\n    gl['uniform' + type].apply(gl, [].concat(uniform_obj.loc, data));\\n  }\\n}\\n\\n//# sourceURL=webpack://wbase/./src/uniforms-common.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/utils.js\":\n        /*!**********************!*\\\n          !*** ./src/utils.js ***!\n          \\**********************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"bind_attribute\\\": () => (/* binding */ bind_attribute),\\n/* harmony export */   \\\"createProgram\\\": () => (/* binding */ createProgram),\\n/* harmony export */   \\\"createProgramFromSources\\\": () => (/* binding */ createProgramFromSources),\\n/* harmony export */   \\\"draw_shapes\\\": () => (/* binding */ draw_shapes),\\n/* harmony export */   \\\"get_program_elements\\\": () => (/* binding */ get_program_elements),\\n/* harmony export */   \\\"loadShader\\\": () => (/* binding */ loadShader),\\n/* harmony export */   \\\"resizeCanvasToDisplaySize\\\": () => (/* binding */ resizeCanvasToDisplaySize),\\n/* harmony export */   \\\"set_rectangle_coords\\\": () => (/* binding */ set_rectangle_coords)\\n/* harmony export */ });\\n/*\\r\\n    inspired by http://webgl2fundamentals.org/webgl/lessons/webgl-boilerplate.html\\r\\n */\\n\\nconst set_rectangle_coords = _set_rectangle_coords;\\nconst bind_attribute = _bind_attribute;\\nconst loadShader = _loadShader;\\nconst createProgram = _createProgram;\\nconst createProgramFromSources = _createProgramFromSources;\\nconst resizeCanvasToDisplaySize = _resizeCanvasToDisplaySize;\\nconst draw_shapes = _draw_shapes;\\nconst get_program_elements = _get_program_elems;\\nconst defaultShaderType = [\\\"VERTEX_SHADER\\\", \\\"FRAGMENT_SHADER\\\"];\\n\\n/**\\r\\n   * Wrapped logging function.\\r\\n   * @param {string} msg The message to log.\\r\\n   */\\nfunction error(msg) {\\n  if (window.top.console) {\\n    if (window.top.console.error) {\\n      window.top.console.error(msg);\\n    } else if (window.top.console.log) {\\n      window.top.console.log(msg);\\n    }\\n  }\\n}\\n\\n/**\\r\\n * Error Callback\\r\\n * @callback ErrorCallback\\r\\n * @param {string} msg error message.\\r\\n */\\n\\n/*\\r\\n * Loads a shader.\\r\\n */\\nfunction _loadShader(gl, shaderSource, shaderType, opt_errorCallback) {\\n  const errFn = opt_errorCallback || error;\\n  // Create the shader object\\n  const shader = gl.createShader(shaderType);\\n\\n  // Load the shader source\\n  gl.shaderSource(shader, shaderSource);\\n\\n  // Compile the shader\\n  gl.compileShader(shader);\\n\\n  // Check the compile status\\n  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\\n  if (!compiled && !gl.isContextLost()) {\\n    // Something went wrong during compilation; get the error\\n    const lastError = gl.getShaderInfoLog(shader);\\n    errFn(\\\"*** Error compiling shader '\\\" + shader + \\\"':\\\" + lastError);\\n    gl.deleteShader(shader);\\n    return null;\\n  }\\n  return shader;\\n}\\n\\n/**\\r\\n * Creates a program, attaches shaders, binds attrib locations, links the\\r\\n * program and calls useProgram\\r\\n */\\nfunction _createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {\\n  const errFn = opt_errorCallback || error;\\n  const program = gl.createProgram();\\n  shaders.forEach(function (shader) {\\n    gl.attachShader(program, shader);\\n  });\\n  if (opt_attribs) {\\n    opt_attribs.forEach(function (attrib, ndx) {\\n      gl.bindAttribLocation(program, opt_locations ? opt_locations[ndx] : ndx, attrib);\\n    });\\n  }\\n  gl.linkProgram(program);\\n\\n  // Check the link status\\n  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);\\n  if (!linked && !gl.isContextLost()) {\\n    // something went wrong with the link\\n    const lastError = gl.getProgramInfoLog(program);\\n    errFn(\\\"Error in program linking:\\\" + lastError);\\n    gl.deleteProgram(program);\\n    return null;\\n  }\\n  return program;\\n}\\n\\n/**\\r\\n   * Creates a program from 2 sources.\\r\\n   */\\nfunction _createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {\\n  const shaders = [];\\n  for (let ii = 0; ii < shaderSources.length; ++ii) {\\n    shaders.push(loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback));\\n  }\\n  return {\\n    shaders,\\n    program: createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback)\\n  };\\n}\\n\\n/**\\r\\n * Resize a canvas to match the size its displayed.\\r\\n */\\nfunction _resizeCanvasToDisplaySize(canvas, multiplier) {\\n  multiplier = multiplier || 1;\\n  const width = canvas.clientWidth * multiplier | 0;\\n  const height = canvas.clientHeight * multiplier | 0;\\n  if (canvas.width !== width || canvas.height !== height) {\\n    canvas.width = width;\\n    canvas.height = height;\\n    return true;\\n  }\\n  return false;\\n}\\nfunction _set_rectangle_coords(gl, x, y, width, height) {\\n  var x1 = x;\\n  var x2 = x + width;\\n  var y1 = y;\\n  var y2 = y + height;\\n  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);\\n}\\nfunction _bind_attribute(gl, buffer, attribute, numComponents, normalize, type) {\\n  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\\n  gl.enableVertexAttribArray(attribute);\\n  gl.vertexAttribPointer(attribute, numComponents, type || gl.FLOAT, normalize || false, 0, 0);\\n}\\nfunction _draw_shapes(gl, primitive_type, _offset, _count) {\\n  // Draw the shape\\n  var primitiveType = _if_is_def(primitive_type) || gl.TRIANGLES;\\n  var offset = _if_is_def(_offset) || 0;\\n  var count = _if_is_def(_count) || 6;\\n  gl.drawArrays(primitiveType, offset, count);\\n}\\nfunction _get_program_elems(gl, p_obj) {\\n  const program = p_obj.program;\\n  p_obj.attributes = {};\\n  p_obj.uniforms = {};\\n  const numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);\\n  let p = p_obj.attributes;\\n  for (let i = 0; i < numAttributes; i++) {\\n    const attribute = gl.getActiveAttrib(program, i);\\n    p[attribute.name] = {\\n      loc: gl.getAttribLocation(program, attribute.name),\\n      def: attribute\\n    };\\n  }\\n  const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);\\n  p = p_obj.uniforms;\\n  for (let i = 0; i < numUniforms; i++) {\\n    const uniform = gl.getActiveUniform(program, i);\\n    p[uniform.name] = {\\n      loc: gl.getUniformLocation(program, uniform.name),\\n      def: uniform\\n    };\\n  }\\n  return p_obj;\\n}\\nfunction _if_is_def(o) {\\n  return o !== undefined && o !== null ? o : null;\\n}\\n\\n//# sourceURL=webpack://wbase/./src/utils.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/vertex-common.js\":\n        /*!******************************!*\\\n          !*** ./src/vertex-common.js ***!\n          \\******************************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"init_vertex_data\\\": () => (/* binding */ init_vertex_data)\\n/* harmony export */ });\\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \\\"./src/utils.js\\\");\\n\\nconst init_vertex_data = _init_vertex_data;\\n\\n//////////////////////////////////////////////////////////////\\n//////////////////////////////////////////////////////////////\\n//////////////////////////////////////////////////////////////\\n\\nfunction _init_vertex_data(gl, program) {\\n  let vertex_data = {};\\n  vertex_data.vao = gl.createVertexArray();\\n  gl.bindVertexArray(vertex_data.vao);\\n\\n  // look up where the vertex data needs to go.\\n  vertex_data.positionAttributeLocation = gl.getAttribLocation(program, \\\"a_position\\\");\\n  vertex_data.texCoodAttributeLocation = gl.getAttribLocation(program, \\\"a_texCoord\\\");\\n  vertex_data.pos_buffer = gl.createBuffer();\\n  vertex_data.coord_buffer = gl.createBuffer();\\n\\n  //bind buffers and write coordinates into them\\n\\n  ////////////////////////\\n  //positions\\n  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_data.pos_buffer);\\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.set_rectangle_coords)(gl, 0, 0, gl.canvas.clientWidth, gl.canvas.clientHeight);\\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.bind_attribute)(gl, vertex_data.pos_buffer, vertex_data.positionAttributeLocation, 2);\\n\\n  ////////////////////////\\n  //texture mapping coordinates\\n  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_data.coord_buffer);\\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.set_rectangle_coords)(gl, 0, 0, 1, 1);\\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.bind_attribute)(gl, vertex_data.coord_buffer, vertex_data.texCoodAttributeLocation, 2, true);\\n  gl.bindVertexArray(null);\\n  return vertex_data;\\n}\\n\\n//# sourceURL=webpack://wbase/./src/vertex-common.js?\");\n\n          /***/\n        },\n\n        /***/\"./src/wod.js\":\n        /*!********************!*\\\n          !*** ./src/wod.js ***!\n          \\********************/\n        /***/\n        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n          eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"buffer_data\\\": () => (/* binding */ buffer_data),\\n/* harmony export */   \\\"create_program\\\": () => (/* binding */ create_program),\\n/* harmony export */   \\\"fill_position_buffer\\\": () => (/* binding */ fill_position_buffer),\\n/* harmony export */   \\\"generate_attributes_from_config\\\": () => (/* binding */ generate_attributes_from_config),\\n/* harmony export */   \\\"init_vao\\\": () => (/* binding */ init_vao),\\n/* harmony export */   \\\"set_uniforms\\\": () => (/* binding */ set_uniforms),\\n/* harmony export */   \\\"setup_indices\\\": () => (/* binding */ setup_indices)\\n/* harmony export */ });\\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \\\"./src/utils.js\\\");\\n//a list of utilities for wod-based applications (to be merged)\\n\\n\\nconst create_program = _create_program;\\nconst init_vao = _init_vao;\\nconst generate_attributes_from_config = _generate_attributes_from_config;\\nconst fill_position_buffer = _fill_position_buffer;\\nconst setup_indices = _setup_indices;\\nconst buffer_data = _buffer_data;\\nconst set_uniforms = _set_uniforms;\\nfunction _create_program(gl, vert, frag) {\\n  // Attach pre-existing shaders\\n  let vertexShader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loadShader)(gl, vert, gl.VERTEX_SHADER);\\n  let fragmentShader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loadShader)(gl, frag, gl.FRAGMENT_SHADER);\\n  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createProgram)(gl, [vertexShader, fragmentShader]);\\n}\\nfunction _generate_attributes_from_config(gl, shad_data, coords_dim) {\\n  return Object.assign(shad_data, {\\n    attributes: Object.keys(shad_data.attributes).reduce((a_obj, attr_key) => {\\n      let\\n        ////////////////\\n        attr_def = shad_data.attributes[attr_key],\\n        opts = attr_def.opts;\\n      attr_def.opts = [opts.size || coords_dim || 3,\\n      //size\\n      gl[opts.data_type],\\n      //type\\n      opts.normalized,\\n      //normalized\\n      opts.stride,\\n      //stride\\n      opts.offset //offset\\n      ];\\n\\n      return Object.assign(a_obj, {\\n        [attr_key]: attr_def\\n      });\\n    }, {})\\n  });\\n}\\nfunction _fill_position_buffer(gl, program_info, data) {\\n  const {\\n    attributes\\n  } = program_info;\\n  Object.keys(attributes).filter(attr_key => attributes[attr_key].is_position).forEach(attr_name => {\\n    _buffer_data(gl, {\\n      [attr_name]: data //it usually contains normals as well\\n    }, program_info);\\n  });\\n  return program_info;\\n}\\nfunction _init_vao(gl, program_info) {\\n  const {\\n    program,\\n    attributes,\\n    uniforms\\n  } = program_info;\\n  const vao = program_info.vao || gl.createVertexArray();\\n  gl.useProgram(program);\\n  gl.bindVertexArray(vao);\\n  const buffer = gl.createBuffer(),\\n    buffer_bind = gl.ARRAY_BUFFER;\\n  gl.bindBuffer(buffer_bind, buffer);\\n  Object.keys(attributes).forEach(attr_name => {\\n    let attr_desc = attributes[attr_name];\\n    let location = gl.getAttribLocation(program, attr_desc.name);\\n    gl.vertexAttribPointer.apply(gl, [location].concat(attr_desc.opts));\\n    gl.enableVertexAttribArray(location);\\n    Object.assign(program_info.attributes[attr_desc.name], {\\n      location,\\n      buffer,\\n      buffer_bind\\n    }, {\\n      is_position: attr_desc.is_position\\n    });\\n  });\\n  Object.keys(uniforms).forEach(uniform_name => {\\n    Object.assign(program_info.uniforms[uniform_name], {\\n      location: gl.getUniformLocation(program, uniform_name)\\n    });\\n  });\\n  gl.bindVertexArray(null);\\n  gl.bindBuffer(buffer_bind, null);\\n  gl.useProgram(null);\\n  return {\\n    vao\\n  };\\n}\\nfunction _setup_indices(gl, indices_data) {\\n  const indexBuffer = gl.createBuffer();\\n  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);\\n\\n  // This array defines each face as two triangles, using the\\n  // indices into the vertex array to specify each triangle's\\n  // position.\\n\\n  const indices = indices_data;\\n\\n  // Now send the element array to GL\\n\\n  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);\\n  return indexBuffer;\\n}\\nfunction _buffer_data(gl, attrs_values, program_info) {\\n  gl.bindVertexArray(program_info.vao);\\n  Object.keys(attrs_values).forEach(attr_name => {\\n    const\\n      ///////////////////////\\n      {\\n        buffer,\\n        buffer_bind\\n      } = program_info.attributes[attr_name],\\n      val = attrs_values[attr_name];\\n    gl.bindBuffer(buffer_bind, buffer);\\n    gl.bufferData(buffer_bind, val, gl.STATIC_DRAW, 0);\\n    gl.bindBuffer(buffer_bind, null);\\n  });\\n  gl.bindVertexArray(null);\\n}\\nfunction _set_uniforms(gl, uniforms_values, object_info) {\\n  const {\\n    program_info\\n  } = object_info;\\n  // const { program } = program_info;\\n\\n  Object.keys(uniforms_values).forEach(uniform_name => {\\n    const\\n      /////////////////////////\\n      uniform_desc = program_info.uniforms[uniform_name],\\n      {\\n        opts,\\n        location\\n      } = uniform_desc;\\n    if (location === null) return;\\n    let val = uniforms_values[uniform_name],\\n      args = opts.fn.indexOf('Matrix') === -1 ? [location, val] : [location, false, val];\\n    gl['uniform' + opts.fn].apply(gl, args);\\n  });\\n}\\n\\n//# sourceURL=webpack://wbase/./src/wod.js?\");\n\n          /***/\n        }\n\n        /******/\n      };\n      /************************************************************************/\n      /******/ // The module cache\n      /******/\n      var __webpack_module_cache__ = {};\n      /******/\n      /******/ // The require function\n      /******/\n      function __nested_webpack_require_30068__(moduleId) {\n        /******/ // Check if module is in cache\n        /******/var cachedModule = __webpack_module_cache__[moduleId];\n        /******/\n        if (cachedModule !== undefined) {\n          /******/return cachedModule.exports;\n          /******/\n        }\n        /******/ // Create a new module (and put it into the cache)\n        /******/\n        var module = __webpack_module_cache__[moduleId] = {\n          /******/ // no module.id needed\n          /******/ // no module.loaded needed\n          /******/exports: {}\n          /******/\n        };\n        /******/\n        /******/ // Execute the module function\n        /******/\n        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_30068__);\n        /******/\n        /******/ // Return the exports of the module\n        /******/\n        return module.exports;\n        /******/\n      }\n      /******/\n      /************************************************************************/\n      /******/ /* webpack/runtime/define property getters */\n      /******/\n      (() => {\n        /******/ // define getter functions for harmony exports\n        /******/__nested_webpack_require_30068__.d = (exports, definition) => {\n          /******/for (var key in definition) {\n            /******/if (__nested_webpack_require_30068__.o(definition, key) && !__nested_webpack_require_30068__.o(exports, key)) {\n              /******/Object.defineProperty(exports, key, {\n                enumerable: true,\n                get: definition[key]\n              });\n              /******/\n            }\n            /******/\n          }\n          /******/\n        };\n        /******/\n      })();\n      /******/\n      /******/ /* webpack/runtime/hasOwnProperty shorthand */\n      /******/\n      (() => {\n        /******/__nested_webpack_require_30068__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);\n        /******/\n      })();\n      /******/\n      /******/ /* webpack/runtime/make namespace object */\n      /******/\n      (() => {\n        /******/ // define __esModule on exports\n        /******/__nested_webpack_require_30068__.r = exports => {\n          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n            /******/Object.defineProperty(exports, Symbol.toStringTag, {\n              value: 'Module'\n            });\n            /******/\n          }\n          /******/\n          Object.defineProperty(exports, '__esModule', {\n            value: true\n          });\n          /******/\n        };\n        /******/\n      })();\n      /******/\n      /************************************************************************/\n      /******/\n      /******/ // startup\n      /******/ // Load entry module and return exports\n      /******/ // This entry module can't be inlined because the eval devtool is used.\n      /******/\n      var __webpack_exports__ = __nested_webpack_require_30068__(\"./src/index.js\");\n      /******/\n      /******/\n      return __webpack_exports__;\n      /******/\n    })()\n  );\n});\n\n//# sourceURL=webpack://wplug/./node_modules/wbase/dist/wbase.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"plugins\": () => (/* binding */ plugins)\n/* harmony export */ });\n/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ \"./src/plugins/index.js\");\n\nconst plugins_api = Object.keys(_plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).reduce((o, plug_key) => {\n  const def = _plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"][plug_key].default;\n  return Object.assign(o, {\n    [plug_key]: _flatten_logic_into(def)\n  });\n}, {});\nconst plugins = plugins_api;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);\n\n/////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////\n\nfunction _flatten_logic_into(main_o) {\n  return Object.keys(main_o).reduce((o, l_key) => {\n    let default_o = main_o[l_key].default,\n      logic = default_o.logic || {},\n      no_logic_o = Object.keys(default_o).filter(k => k !== 'logic').reduce(_flat_obj.bind(null, default_o), {}),\n      flat_o = Object.keys(logic).reduce(_flat_obj.bind(null, logic), no_logic_o);\n    return Object.assign(o, {\n      [l_key]: flat_o\n    });\n  }, {});\n}\nfunction _flat_obj(o_tobe_flat, o_dest, k) {\n  return Object.assign(o_dest, {\n    [k]: o_tobe_flat[k]\n  });\n}\n\n//# sourceURL=webpack://wplug/./src/index.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/index.js":
/*!**********************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/antialiasing/fs_derivatives/logic.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/plugins/antialiasing/fs_derivatives/config.json\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/antialiasing/fs_derivatives/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/antialiasing/fs_derivatives/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\n\n\n\n\n/*\n  fragment-shader-based partial derivatives approach \n  to implement antialiasing effects. It's basically a fragment-shader-only set of functions\n  \n  Took from \"Procedural Textures in GLSL\" by Stefan Gustavson\n*/\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: _utils__WEBPACK_IMPORTED_MODULE_4__.get_config.bind(null, /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)))),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  }\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/index.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/logic.js":
/*!**********************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/logic.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanup\": () => (/* binding */ cleanup),\n/* harmony export */   \"draw_loop_callback\": () => (/* binding */ draw_loop_callback),\n/* harmony export */   \"get_active\": () => (/* binding */ get_active),\n/* harmony export */   \"get_model\": () => (/* binding */ get_model),\n/* harmony export */   \"program_init\": () => (/* binding */ program_init),\n/* harmony export */   \"set_active\": () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\n\n///////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////\n\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _program_init(scene_config) {\n  return scene_config;\n}\nfunction _draw_loop_callback(object_config, scene_config) {}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/logic.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/index.js":
/*!*******************************************!*\
  !*** ./src/plugins/antialiasing/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fs_derivatives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fs_derivatives */ \"./src/plugins/antialiasing/fs_derivatives/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fs_derivatives: _fs_derivatives__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/index.js?");

/***/ }),

/***/ "./src/plugins/index.js":
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lighting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lighting */ \"./src/plugins/lighting/index.js\");\n/* harmony import */ var _antialiasing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./antialiasing */ \"./src/plugins/antialiasing/index.js\");\n/* harmony import */ var _postprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postprocessing */ \"./src/plugins/postprocessing/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  lighting: _lighting__WEBPACK_IMPORTED_MODULE_0__,\n  antialiasing: _antialiasing__WEBPACK_IMPORTED_MODULE_1__,\n  postprocessing: _postprocessing__WEBPACK_IMPORTED_MODULE_2__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/index.js?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/index.js":
/*!***************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/lighting/blinn_phong/logic.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/plugins/lighting/blinn_phong/config.json\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/lighting/blinn_phong/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/lighting/blinn_phong/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: _utils__WEBPACK_IMPORTED_MODULE_4__.get_config.bind(null, /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)))),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  }\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/index.js?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/logic.js":
/*!***************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/logic.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanup\": () => (/* binding */ cleanup),\n/* harmony export */   \"draw_loop_callback\": () => (/* binding */ draw_loop_callback),\n/* harmony export */   \"get_active\": () => (/* binding */ get_active),\n/* harmony export */   \"get_model\": () => (/* binding */ get_model),\n/* harmony export */   \"program_init\": () => (/* binding */ program_init),\n/* harmony export */   \"set_active\": () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wbase */ \"./node_modules/wbase/dist/wbase.js\");\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wbase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\n\n///////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////\n\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  const {\n    scene_desc\n  } = scene_config;\n  const {\n    lighting\n  } = scene_desc;\n  if (!lighting) return {};\n  lighting.light_positions = lighting.lights.reduce((poss, l) => poss.concat(l.position), []);\n  lighting.light_colors = lighting.lights.reduce((cols, l) => cols.concat(l.color), []);\n  lighting.light_intensities = lighting.lights.reduce((ints, l) => ints.concat(l.intensity), []);\n  lighting.light_specular_exp = lighting.lights.reduce((exps, l) => exps.concat(l.specular_exp), []);\n  lighting.number_of_lights = lighting.lights.length;\n  return {\n    lighting\n  };\n}\nfunction _program_init(scene_config) {\n  return scene_config;\n}\nfunction _draw_loop_callback(object_config, scene_config) {\n  const {\n    lighting,\n    gl\n  } = scene_config;\n  const {\n    object_program,\n    material\n  } = object_config;\n  const {\n    ka,\n    kd,\n    ks\n  } = material;\n  const {\n    ambient,\n    number_of_lights,\n    light_positions,\n    light_colors,\n    light_intensities,\n    light_specular_exp\n  } = lighting;\n\n  //TODO use uniform block to minimize gl.uniform[...] calls\n  (0,wbase__WEBPACK_IMPORTED_MODULE_0__.set_uniforms)(gl, {\n    u_ka: ka,\n    u_kd: kd,\n    u_ks: ks,\n    u_nlights: number_of_lights,\n    u_ambient_color: ambient.color,\n    u_ambient_intensity: ambient.intensity,\n    u_light_positions: light_positions,\n    u_light_colors: light_colors,\n    u_light_intensities: light_intensities,\n    u_light_specular_exp: light_specular_exp\n  }, object_program);\n}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/logic.js?");

/***/ }),

/***/ "./src/plugins/lighting/index.js":
/*!***************************************!*\
  !*** ./src/plugins/lighting/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blinn_phong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blinn_phong */ \"./src/plugins/lighting/blinn_phong/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  blinn_phong: _blinn_phong__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/index.js?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/index.js":
/*!*************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/postprocessing/fbo/logic.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/plugins/postprocessing/fbo/config.json\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/postprocessing/fbo/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/postprocessing/fbo/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: _utils__WEBPACK_IMPORTED_MODULE_4__.get_config.bind(null, /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)))),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  }\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/index.js?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/logic.js":
/*!*************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/logic.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanup\": () => (/* binding */ cleanup),\n/* harmony export */   \"draw_loop_callback\": () => (/* binding */ draw_loop_callback),\n/* harmony export */   \"get_active\": () => (/* binding */ get_active),\n/* harmony export */   \"get_model\": () => (/* binding */ get_model),\n/* harmony export */   \"program_init\": () => (/* binding */ program_init),\n/* harmony export */   \"set_active\": () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wbase */ \"./node_modules/wbase/dist/wbase.js\");\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wbase__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\n\n///////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////\n\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _program_init(scene_config) {\n  const\n    //////////////////////////\n    {\n      gl,\n      canvas,\n      objects_to_draw,\n      scene_desc\n    } = scene_config,\n    {\n      postprocessing\n    } = scene_desc,\n    {\n      base_active_texture\n    } = postprocessing;\n  let texture_unit = gl.TEXTURE0 + (base_active_texture !== undefined ? base_active_texture : 0);\n  gl.activeTexture(texture_unit);\n  objects_to_draw.forEach(otd => {\n    const\n    ///////////////////////\n    {\n      object_program,\n      fbo\n    } = otd;\n    object_program.fbo_opts = Object.assign({}, postprocessing, fbo || {});\n    let opts = object_program.fbo_opts;\n\n    //function _init_program_fbos(current_program, gl, opts)\n    otd.object_program = (0,wbase__WEBPACK_IMPORTED_MODULE_1__.init_program_fbos)(object_program, gl, Object.assign({}, opts, {\n      canvas\n    }));\n  });\n  return scene_config;\n}\nfunction _draw_loop_callback(object_config, scene_config) {\n  const\n    ////////////////////////\n    {\n      gl,\n      canvas,\n      draw_fn\n    } = scene_config,\n    {\n      object_program\n    } = object_config,\n    {\n      fbo_opts,\n      base_texture\n    } = object_program,\n    {\n      has_framebuffer,\n      framebuffers_n,\n      framebuffers_offset\n    } = fbo_opts || {};\n  if (has_framebuffer === false) return scene_config;\n  if (base_texture) {\n    gl.bindTexture(gl.TEXTURE_2D, base_texture);\n  }\n  (0,wbase__WEBPACK_IMPORTED_MODULE_1__.set_uniforms)(gl, {\n    u_on_fbo: 1,\n    u_tex: 0\n  }, object_program);\n  for (var ii = framebuffers_offset; ii < framebuffers_n + framebuffers_offset; ++ii) {\n    // Setup to draw into one of the framebuffers.\n    wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.set_framebuffer(gl, wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo(object_program, ii), canvas.width, canvas.height);\n    draw_fn(object_config, scene_config);\n\n    // for the next draw, use as input texture (associated to gl.TEXTURE0) the texture we just rendered to.\n    gl.bindTexture(gl.TEXTURE_2D, wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo_texture(object_program, ii));\n  }\n  wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.set_framebuffer(gl, null, canvas.width, canvas.height);\n  (0,wbase__WEBPACK_IMPORTED_MODULE_1__.set_uniforms)(gl, {\n    u_on_fbo: -1\n  }, object_program);\n  return scene_config;\n}\nfunction _cleanup(scene_config) {\n  const\n  ////////////////////////\n  {\n    gl,\n    objects_to_draw\n  } = scene_config;\n  objects_to_draw.forEach(object_config => {\n    const {\n        object_program\n      } = object_config,\n      {\n        fbo_opts\n      } = object_program,\n      {\n        framebuffers_n,\n        framebuffers_offset\n      } = fbo_opts;\n    for (var ii = framebuffers_offset; ii < framebuffers_n + framebuffers_offset; ++ii) {\n      gl.deleteTexture(wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo_texture(object_program, ii));\n      gl.deleteFramebuffer(wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo(object_program, ii));\n    }\n    object_program.fbo_data = null;\n  });\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/logic.js?");

/***/ }),

/***/ "./src/plugins/postprocessing/index.js":
/*!*********************************************!*\
  !*** ./src/plugins/postprocessing/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fbo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fbo */ \"./src/plugins/postprocessing/fbo/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fbo: _fbo__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/index.js?");

/***/ }),

/***/ "./src/plugins/utils.js":
/*!******************************!*\
  !*** ./src/plugins/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_active_logic\": () => (/* binding */ get_active_logic),\n/* harmony export */   \"get_config\": () => (/* binding */ get_config)\n/* harmony export */ });\nconst get_active_logic = _get_active_logic;\nconst get_config = _get_config;\nfunction _get_active_logic() {\n  return (() => {\n    let __ACTIVE = false;\n    return {\n      _set_active,\n      _get_active\n    };\n    function _set_active(_init, active, config) {\n      __ACTIVE = !!active;\n      return _init(config);\n    }\n    function _get_active() {\n      return __ACTIVE;\n    }\n  })();\n}\nfunction _get_config(cfg_json) {\n  let json = cfg_json.default || cfg_json;\n  return JSON.parse(JSON.stringify(json));\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/utils.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/shaders/frag.glsl":
/*!*******************************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/shaders/frag.glsl ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = \"// ' threshold ' is constant , ' value ' is smoothly varying\\nfloat aastep(float threshold , float value) {\\n    float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));\\n    // GLSL ' s fwidth ( value ) is abs ( dFdx ( value ) ) + abs ( dFdy ( value ) )\\n    return smoothstep(threshold - afwidth , threshold + afwidth , value);\\n}\\n\\nvec2 aastep2d(float threshold , vec2 value) {\\n    vec2 afwidth = 0.7 * fwidth(value);\\n    return smoothstep(threshold - afwidth , threshold + afwidth , value);\\n}\\n\\n//value in this case is typically a color\\nvec3 aastep3d(float threshold , vec3 value) {\\n    vec3 afwidth = 0.7 * fwidth(value);\\n    return smoothstep(threshold - afwidth , threshold + afwidth , value);\\n}\"\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/shaders/vert.glsl":
/*!*******************************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/shaders/vert.glsl ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = \"//none needed here\\nvoid fs_derivatives_vert() {}\"\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/shaders/frag.glsl":
/*!************************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/shaders/frag.glsl ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = \"//material for the square\\nuniform float u_ka, u_kd, u_ks;\\n\\n//max number of allowed lights\\nconst int MAX_LIGHTS_N = 8;\\nuniform vec3 u_ambient_color;\\nuniform float u_ambient_intensity;\\nuniform int u_nlights;\\n\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\nuniform vec3 u_light_colors[MAX_LIGHTS_N];\\nuniform float u_light_intensities[MAX_LIGHTS_N];\\nuniform float u_light_specular_exp[MAX_LIGHTS_N];\\n\\nin vec4 normal;\\nin vec3 light_dirs[MAX_LIGHTS_N];\\nin vec3 light_half_vects[MAX_LIGHTS_N];\\n\\nvec3 compute_lighting_frag(vec3 start_color) {\\n    vec3 color = start_color;\\n    vec3 n = normalize(normal.xyz);\\n    \\n    color += u_ka * u_ambient_color;\\n    \\n    for(int i = 0; i < u_nlights; i ++ ) {\\n        vec3 l = normalize(light_dirs[i]);\\n        vec3 h = normalize(light_half_vects[i]);\\n        float I = u_light_intensities[i];\\n        vec3 Lc = u_light_colors[i];\\n        \\n        color += (\\n            (u_kd * I*max(0.0, dot(n, l)) * Lc) +\\n            (u_ks * I*pow(max(0.0, dot(n, h)), u_light_specular_exp[i]) * Lc)\\n        );\\n    }\\n    \\n    return color;\\n}\"\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/shaders/vert.glsl":
/*!************************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/shaders/vert.glsl ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = \"//we'll use as inspiration the approach described here\\n//https://stackoverflow.com/a/62630376\\n\\nin vec3 a_normal;\\n\\nconst int MAX_LIGHTS_N = 8;\\n\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\nuniform int u_nlights;\\n\\nout vec4 normal;\\nout vec3 light_dirs[MAX_LIGHTS_N];\\nout vec3 light_half_vects[MAX_LIGHTS_N];\\n\\nint compute_lighting_vert(mat4 view_m, mat4 modelview_m) {\\n    vec4 view_pos = modelview_m * vec4(a_position, 1.0);\\n    \\n    for(int i = 0; i < u_nlights; i ++ ) {\\n        vec4 lpos = view_m * vec4(u_light_positions[i], 1.0);\\n        light_dirs[i] = normalize(lpos.xyz - view_pos.xyz);\\n        \\n        vec3 pos2eye = vec3(-view_pos.xyz);\\n        light_half_vects[i] = normalize(pos2eye + light_dirs[i]);\\n    }\\n    \\n    mat4 Mti = transpose(inverse(modelview_m));\\n    normal = (Mti * vec4(a_normal, 0.0));\\n    \\n    return 1;\\n}\"\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/shaders/frag.glsl":
/*!**********************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/shaders/frag.glsl ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = \"uniform int u_on_fbo;\\nuniform sampler2D u_tex;\\n\"\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/shaders/vert.glsl":
/*!**********************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/shaders/vert.glsl ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = \"uniform int u_on_fbo;\\nuniform sampler2D u_tex;\\n\\n//none needed here\\nvoid fbo_vert() {}\"\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/config.json":
/*!*************************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/config.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"attributes\":{},\"uniforms\":{}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/config.json?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/config.json":
/*!******************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/config.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"attributes\":{},\"uniforms\":{\"u_nlights\":{\"name\":\"u_nlights\",\"opts\":{\"fn\":\"1i\"}},\"u_ka\":{\"name\":\"u_ka\",\"opts\":{\"fn\":\"1f\"}},\"u_kd\":{\"name\":\"u_kd\",\"opts\":{\"fn\":\"1f\"}},\"u_ks\":{\"name\":\"u_ks\",\"opts\":{\"fn\":\"1f\"}},\"u_ambient_color\":{\"name\":\"u_ambient_color\",\"opts\":{\"fn\":\"3fv\"}},\"u_ambient_intensity\":{\"name\":\"u_ambient_intensity\",\"opts\":{\"fn\":\"1f\"}},\"u_light_positions\":{\"name\":\"u_light_positions\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_colors\":{\"name\":\"u_light_colors\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_intensities\":{\"name\":\"u_light_intensities\",\"opts\":{\"fn\":\"1fv\"}},\"u_light_specular_exp\":{\"name\":\"u_light_specular_exp\",\"opts\":{\"fn\":\"1fv\"}}}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/config.json?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/config.json":
/*!****************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/config.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"attributes\":{},\"uniforms\":{\"u_on_fbo\":{\"name\":\"u_on_fbo\",\"opts\":{\"fn\":\"1i\"}},\"u_tex\":{\"name\":\"u_tex\",\"opts\":{\"fn\":\"1i\"}}}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/config.json?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});