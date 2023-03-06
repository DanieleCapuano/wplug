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

eval("!function (e, r) {\n   true ? module.exports = r() : 0;\n}(self, () => (() => {\n  \"use strict\";\n\n  var __webpack_modules__ = {\n      880: (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_356__) => {\n        __nested_webpack_require_356__.d(__webpack_exports__, {\n          $C: () => get_program_data,\n          ax: () => init_program,\n          fh: () => init_program_fbos\n        });\n        var _vertex_common__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_356__(961),\n          _uniforms_common__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_356__(286),\n          _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_356__(853),\n          _texture_common__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_356__(370);\n        const init_program = _init_program,\n          init_program_fbos = _init_program_fbos,\n          get_program_data = _get_program_data;\n        function _init_program(e, r) {\n          let t = {};\n          try {\n            let _ = [r.vertex_shader, r.fragment_shader].map(e => _decorate_source(e));\n            if (r.build_program) t = r.build_program(e, shaders);else {\n              let o = (0, _utils__WEBPACK_IMPORTED_MODULE_1__.jr)(e, _),\n                a = o.program,\n                n = o.shaders;\n              t = _init_program_fbos(Object.assign({\n                program: a,\n                shaders: n\n              }, _get_program_data(e, a)), e, r);\n            }\n          } catch (e) {\n            console.warn(\"PROGRAM ERROR FOR CURRENT PROGRAM\"), console.warn(e);\n          }\n          return r.add_program_configuration && (t = r.add_program_configuration(t, e, r)), t;\n        }\n        function _get_program_data(e, r) {\n          return {\n            vertex_data: (0, _vertex_common__WEBPACK_IMPORTED_MODULE_2__.D)(e, r),\n            uniforms: (0, _uniforms_common__WEBPACK_IMPORTED_MODULE_3__.r)(e, r),\n            start_time: performance.now()\n          };\n        }\n        function _init_program_fbos(e, r, t) {\n          const {\n            canvas: _,\n            framebuffers_n: o,\n            framebuffers_offset: a\n          } = t;\n          let n = o || 1,\n            i = a || 1;\n          return e.has_framebuffer = t.has_framebuffer, t.dont_create_base_texture || (e.base_texture = e.base_texture || _texture_common__WEBPACK_IMPORTED_MODULE_0__.K.init_texture(r, 0)), e.fbo_data = _texture_common__WEBPACK_IMPORTED_MODULE_0__.K.create_fbo_textures(e, r, n, i, _.clientWidth, _.clientHeight), e;\n        }\n        function _decorate_source(source) {\n          return eval(\"`\" + source + \"`\");\n        }\n      },\n      370: (e, r, t) => {\n        t.d(r, {\n          K: () => _\n        });\n        const _ = function () {\n          return {\n            init_texture: e,\n            draw_into_texture: r,\n            create_fbo_textures: function (t, _, o, a, n, i) {\n              let c = [];\n              for (var u = a = a || 0; u < o + a; ++u) {\n                var f = e(_, 0);\n                r(_, f, 0, null, n, i);\n                var s = _.createFramebuffer();\n                _.bindFramebuffer(_.FRAMEBUFFER, s);\n                var b = _.COLOR_ATTACHMENT0;\n                _.framebufferTexture2D(_.FRAMEBUFFER, b, _.TEXTURE_2D, f, 0), c[u] = {\n                  fbo: s,\n                  texture: f\n                };\n              }\n              return c;\n            },\n            set_framebuffer: function (e, r, t, _) {\n              e.bindFramebuffer(e.FRAMEBUFFER, r), e.viewport(0, 0, t, _);\n            },\n            get_fbo_texture: function (e, r) {\n              return e.fbo_data[r].texture;\n            },\n            get_fbo: function (e, r) {\n              return e.fbo_data[r].fbo;\n            }\n          };\n          function e(e, r) {\n            e.activeTexture(e.TEXTURE0 + (r || 0));\n            var t = e.createTexture();\n            return e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), t;\n          }\n          function r(e, r, t, _, o, a) {\n            e.activeTexture(e.TEXTURE0 + (t || 0)), e.bindTexture(e.TEXTURE_2D, r);\n            var n = e.RGBA,\n              i = e.RGBA,\n              c = e.UNSIGNED_BYTE,\n              u = _,\n              f = u ? [e.TEXTURE_2D, 0, n, i, c, u] : [e.TEXTURE_2D, 0, n, o, a, 0, i, c, u];\n            try {\n              e.texImage2D.apply(e, f);\n            } catch (e) {\n              console.warn(\"Error loading image\", _);\n            }\n          }\n        }();\n      },\n      286: (e, r, t) => {\n        t.d(r, {\n          r: () => o\n        });\n        var _ = t(853);\n        function o(e, r) {\n          let t = (0, _.Vh)(e, {\n            program: r\n          });\n          return Object.keys(t.uniforms).reduce((e, r) => (e[r] = {\n            get: () => t.uniforms[r].loc,\n            set: o.bind(null, t.uniforms[r])\n          }, e), {});\n          function o(e, r, t, _, o) {\n            r[\"uniform\" + _].apply(r, [].concat(e.loc, o));\n          }\n        }\n      },\n      853: (e, r, t) => {\n        t.d(r, {\n          B0: () => a,\n          HO: () => n,\n          Lo: () => c,\n          Vh: () => f,\n          c0: () => _,\n          jr: () => i,\n          kQ: () => o,\n          uX: () => u\n        });\n        const _ = function (e, r, t, _, o) {\n            var a = r,\n              n = r + _,\n              i = t,\n              c = t + o;\n            e.bufferData(e.ARRAY_BUFFER, new Float32Array([a, i, n, i, a, c, a, c, n, i, n, c]), e.STATIC_DRAW);\n          },\n          o = function (e, r, t, _, o, a) {\n            e.bindBuffer(e.ARRAY_BUFFER, r), e.enableVertexAttribArray(t), e.vertexAttribPointer(t, _, a || e.FLOAT, o || !1, 0, 0);\n          },\n          a = function (e, r, t, _) {\n            const o = _ || b,\n              a = e.createShader(t);\n            if (e.shaderSource(a, r), e.compileShader(a), !e.getShaderParameter(a, e.COMPILE_STATUS) && !e.isContextLost()) {\n              return o(\"*** Error compiling shader '\" + a + \"':\" + e.getShaderInfoLog(a)), e.deleteShader(a), null;\n            }\n            return a;\n          },\n          n = function (e, r, t, _, o) {\n            const a = o || b,\n              n = e.createProgram();\n            if (r.forEach(function (r) {\n              e.attachShader(n, r);\n            }), t && t.forEach(function (r, t) {\n              e.bindAttribLocation(n, _ ? _[t] : t, r);\n            }), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS) && !e.isContextLost()) {\n              return a(\"Error in program linking:\" + e.getProgramInfoLog(n)), e.deleteProgram(n), null;\n            }\n            return n;\n          },\n          i = function (e, r, t, _, o) {\n            const i = [];\n            for (let t = 0; t < r.length; ++t) i.push(a(e, r[t], e[s[t]], o));\n            return {\n              shaders: i,\n              program: n(e, i, t, _, o)\n            };\n          },\n          c = function (e, r) {\n            r = r || 1;\n            const t = e.clientWidth * r | 0,\n              _ = e.clientHeight * r | 0;\n            return (e.width !== t || e.height !== _) && (e.width = t, e.height = _, !0);\n          },\n          u = function (e, r, t, _) {\n            var o = m(r) || e.TRIANGLES,\n              a = m(t) || 0,\n              n = m(_) || 6;\n            e.drawArrays(o, a, n);\n          },\n          f = function (e, r) {\n            const t = r.program;\n            r.attributes = {}, r.uniforms = {};\n            const _ = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);\n            let o = r.attributes;\n            for (let r = 0; r < _; r++) {\n              const _ = e.getActiveAttrib(t, r);\n              o[_.name] = {\n                loc: e.getAttribLocation(t, _.name),\n                def: _\n              };\n            }\n            const a = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);\n            o = r.uniforms;\n            for (let r = 0; r < a; r++) {\n              const _ = e.getActiveUniform(t, r);\n              o[_.name] = {\n                loc: e.getUniformLocation(t, _.name),\n                def: _\n              };\n            }\n            return r;\n          },\n          s = [\"VERTEX_SHADER\", \"FRAGMENT_SHADER\"];\n        function b(e) {\n          window.top.console && (window.top.console.error ? window.top.console.error(e) : window.top.console.log && window.top.console.log(e));\n        }\n        function m(e) {\n          return null != e ? e : null;\n        }\n      },\n      961: (e, r, t) => {\n        t.d(r, {\n          D: () => o\n        });\n        var _ = t(853);\n        const o = function (e, r) {\n          let t = {};\n          return t.vao = e.createVertexArray(), e.bindVertexArray(t.vao), t.positionAttributeLocation = e.getAttribLocation(r, \"a_position\"), t.texCoodAttributeLocation = e.getAttribLocation(r, \"a_texCoord\"), t.pos_buffer = e.createBuffer(), t.coord_buffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t.pos_buffer), (0, _.c0)(e, 0, 0, e.canvas.clientWidth, e.canvas.clientHeight), (0, _.kQ)(e, t.pos_buffer, t.positionAttributeLocation, 2), e.bindBuffer(e.ARRAY_BUFFER, t.coord_buffer), (0, _.c0)(e, 0, 0, 1, 1), (0, _.kQ)(e, t.coord_buffer, t.texCoodAttributeLocation, 2, !0), e.bindVertexArray(null), t;\n        };\n      }\n    },\n    __webpack_module_cache__ = {};\n  function __nested_webpack_require_9589__(e) {\n    var r = __webpack_module_cache__[e];\n    if (void 0 !== r) return r.exports;\n    var t = __webpack_module_cache__[e] = {\n      exports: {}\n    };\n    return __webpack_modules__[e](t, t.exports, __nested_webpack_require_9589__), t.exports;\n  }\n  __nested_webpack_require_9589__.d = (e, r) => {\n    for (var t in r) __nested_webpack_require_9589__.o(r, t) && !__nested_webpack_require_9589__.o(e, t) && Object.defineProperty(e, t, {\n      enumerable: !0,\n      get: r[t]\n    });\n  }, __nested_webpack_require_9589__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), __nested_webpack_require_9589__.r = e => {\n    \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\n      value: \"Module\"\n    }), Object.defineProperty(e, \"__esModule\", {\n      value: !0\n    });\n  };\n  var __webpack_exports__ = {};\n  return (() => {\n    __nested_webpack_require_9589__.r(__webpack_exports__), __nested_webpack_require_9589__.d(__webpack_exports__, {\n      bind_attribute: () => _.kQ,\n      buffer_data: () => f,\n      createProgram: () => _.HO,\n      createProgramFromSources: () => _.jr,\n      create_program: () => a,\n      default: () => d,\n      draw_shapes: () => _.uX,\n      fill_position_buffer: () => c,\n      generate_attributes_from_config: () => i,\n      get_program_data: () => e.$C,\n      get_program_elements: () => _.Vh,\n      get_program_uniforms: () => t.r,\n      init_program: () => e.ax,\n      init_program_fbos: () => e.fh,\n      init_vao: () => n,\n      init_vertex_data: () => o.D,\n      loadShader: () => _.B0,\n      resizeCanvasToDisplaySize: () => _.Lo,\n      set_rectangle_coords: () => _.c0,\n      set_uniforms: () => s,\n      setup_indices: () => u,\n      texture_data: () => r.K\n    });\n    var e = __nested_webpack_require_9589__(880),\n      r = __nested_webpack_require_9589__(370),\n      t = __nested_webpack_require_9589__(286),\n      _ = __nested_webpack_require_9589__(853),\n      o = __nested_webpack_require_9589__(961);\n    const a = function (e, r, t) {\n        const _ = e.createProgram();\n        let o = b(e, r, e.VERTEX_SHADER);\n        e.attachShader(_, o);\n        let a = b(e, t, e.FRAGMENT_SHADER);\n        if (e.attachShader(_, a), e.linkProgram(_), !e.getProgramParameter(_, e.LINK_STATUS)) throw `Could not compile WebGL program. \\n\\n${e.getProgramInfoLog(_)}`;\n        return _;\n      },\n      n = function (e, r) {\n        const {\n            program: t,\n            attributes: _,\n            uniforms: o\n          } = r,\n          a = r.vao || e.createVertexArray();\n        e.bindVertexArray(a);\n        const n = e.createBuffer(),\n          i = e.ARRAY_BUFFER;\n        return e.bindBuffer(i, n), Object.keys(_).forEach(o => {\n          let a = _[o],\n            c = e.getAttribLocation(t, a.name);\n          e.vertexAttribPointer.apply(e, [c].concat(a.opts)), e.enableVertexAttribArray(c), Object.assign(r.attributes[a.name], {\n            location: c,\n            buffer: n,\n            buffer_bind: i\n          }, {\n            is_position: a.is_position\n          });\n        }), Object.keys(o).forEach(_ => {\n          Object.assign(r.uniforms[_], {\n            location: e.getUniformLocation(t, _)\n          });\n        }), e.bindVertexArray(null), e.bindBuffer(i, null), {\n          vao: a\n        };\n      },\n      i = function (e, r, t) {\n        return Object.assign(r, {\n          attributes: Object.keys(r.attributes).reduce((_, o) => {\n            let a = r.attributes[o],\n              n = a.opts;\n            return a.opts = [n.size || t || 3, e[n.data_type], n.normalized, n.stride, n.offset], Object.assign(_, {\n              [o]: a\n            });\n          }, {})\n        });\n      },\n      c = function (e, r, t) {\n        const {\n          attributes: _\n        } = r;\n        return Object.keys(_).filter(e => _[e].is_position).forEach(_ => {\n          m(e, {\n            [_]: t\n          }, r);\n        }), r;\n      },\n      u = function (e, r) {\n        const t = e.createBuffer();\n        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t);\n        const _ = r;\n        return e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(_), e.STATIC_DRAW), t;\n      },\n      f = m,\n      s = function (e, r, t) {\n        const {\n          program_info: _\n        } = t;\n        Object.keys(r).forEach(t => {\n          const o = _.uniforms[t],\n            {\n              opts: a,\n              location: n\n            } = o;\n          let i = r[t],\n            c = -1 === a.fn.indexOf(\"Matrix\") ? [n, i] : [n, !1, i];\n          e[\"uniform\" + a.fn].apply(e, c);\n        });\n      };\n    function b(e, r, t) {\n      const _ = e.createShader(t);\n      if (e.shaderSource(_, r), e.compileShader(_), !e.getShaderParameter(_, e.COMPILE_STATUS)) throw `Could not compile WebGL program. \\n\\n${e.getShaderInfoLog(_)}`;\n      return _;\n    }\n    function m(e, r, t) {\n      e.bindVertexArray(t.vao), Object.keys(r).forEach(_ => {\n        const {\n            buffer: o,\n            buffer_bind: a\n          } = t.attributes[_],\n          n = r[_];\n        e.bindBuffer(a, o), e.bufferData(a, n, e.STATIC_DRAW, 0), e.bindBuffer(a, null);\n      }), e.bindVertexArray(null);\n    }\n    const d = {\n      init_program: e.ax,\n      init_program_fbos: e.fh,\n      get_program_data: e.$C,\n      texture_data: r.K,\n      get_program_uniforms: t.r,\n      set_rectangle_coords: _.c0,\n      bind_attribute: _.kQ,\n      loadShader: _.B0,\n      createProgram: _.HO,\n      createProgramFromSources: _.jr,\n      resizeCanvasToDisplaySize: _.Lo,\n      draw_shapes: _.uX,\n      get_program_elements: _.Vh,\n      init_vertex_data: o.D,\n      create_program: a,\n      init_vao: n,\n      generate_attributes_from_config: i,\n      fill_position_buffer: c,\n      setup_indices: u,\n      buffer_data: f,\n      set_uniforms: s\n    };\n  })(), __webpack_exports__;\n})());\n\n//# sourceURL=webpack://wplug/./node_modules/wbase/dist/wbase.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"plugins\": () => (/* binding */ plugins)\n/* harmony export */ });\n/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ \"./src/plugins/index.js\");\n\nconst plugins_api = Object.keys(_plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).reduce((o, plug_key) => {\n  const def = _plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"][plug_key].default;\n  return Object.assign(o, {\n    [plug_key]: _flatten_logic_into(def)\n  });\n}, {});\nconst plugins = plugins_api;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);\n\n/////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////\n\nfunction _flatten_logic_into(main_o) {\n  return Object.keys(main_o).reduce((o, l_key) => {\n    let default_o = main_o[l_key].default,\n      logic = default_o.logic || {},\n      no_logic_o = Object.keys(default_o).filter(k => k !== 'logic').reduce(_flat_obj.bind(null, default_o), {}),\n      flat_o = Object.keys(logic).reduce(_flat_obj.bind(null, logic), no_logic_o);\n    return Object.assign(o, {\n      [l_key]: flat_o\n    });\n  }, {});\n}\nfunction _flat_obj(o_tobe_flat, o_dest, k) {\n  return Object.assign(o_dest, {\n    [k]: o_tobe_flat[k]\n  });\n}\n\n//# sourceURL=webpack://wplug/./src/index.js?");

/***/ }),

/***/ "./src/plugins/geom/index.js":
/*!***********************************!*\
  !*** ./src/plugins/geom/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad */ \"./src/plugins/geom/quad/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  quad: _quad__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/geom/index.js?");

/***/ }),

/***/ "./src/plugins/geom/quad/index.js":
/*!****************************************!*\
  !*** ./src/plugins/geom/quad/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/geom/quad/logic.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/plugins/geom/quad/config.json\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/geom/quad/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/geom/quad/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2))),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  }\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/index.js?");

/***/ }),

/***/ "./src/plugins/geom/quad/logic.js":
/*!****************************************!*\
  !*** ./src/plugins/geom/quad/logic.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanup\": () => (/* binding */ cleanup),\n/* harmony export */   \"draw_loop_callback\": () => (/* binding */ draw_loop_callback),\n/* harmony export */   \"get_active\": () => (/* binding */ get_active),\n/* harmony export */   \"get_model\": () => (/* binding */ get_model),\n/* harmony export */   \"set_active\": () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\nconst get_model = _get_model;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\nfunction _init(scene_config) {\n  //currently not used\n  return config;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _draw_loop_callback(obj, scene_config) {\n  return scene_config;\n}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/logic.js?");

/***/ }),

/***/ "./src/plugins/index.js":
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geom */ \"./src/plugins/geom/index.js\");\n/* harmony import */ var _lighting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lighting */ \"./src/plugins/lighting/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  geom: _geom__WEBPACK_IMPORTED_MODULE_0__,\n  lighting: _lighting__WEBPACK_IMPORTED_MODULE_1__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/index.js?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/index.js":
/*!***************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/lighting/blinn_phong/logic.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/plugins/lighting/blinn_phong/config.json\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/lighting/blinn_phong/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/lighting/blinn_phong/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2))),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  }\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/index.js?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/logic.js":
/*!***************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/logic.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanup\": () => (/* binding */ cleanup),\n/* harmony export */   \"draw_loop_callback\": () => (/* binding */ draw_loop_callback),\n/* harmony export */   \"get_active\": () => (/* binding */ get_active),\n/* harmony export */   \"get_model\": () => (/* binding */ get_model),\n/* harmony export */   \"set_active\": () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wbase */ \"./node_modules/wbase/dist/wbase.js\");\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wbase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\nconst get_model = _get_model;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\n\n///////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////\n\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  const {\n    scene_desc\n  } = scene_config;\n  const {\n    lighting\n  } = scene_desc;\n  if (!lighting) return {};\n  lighting.light_positions = lighting.lights.reduce((poss, l) => poss.concat(l.position), []);\n  lighting.light_colors = lighting.lights.reduce((cols, l) => cols.concat(l.color), []);\n  lighting.light_intensities = lighting.lights.reduce((ints, l) => ints.concat(l.intensity), []);\n  lighting.light_specular_exp = lighting.lights.reduce((exps, l) => exps.concat(l.specular_exp), []);\n  lighting.number_of_lights = lighting.lights.length;\n  return {\n    lighting\n  };\n}\nfunction _draw_loop_callback(object_config, scene_config) {\n  const {\n    lighting,\n    gl\n  } = scene_config;\n  const {\n    object_program\n  } = object_config;\n  (0,wbase__WEBPACK_IMPORTED_MODULE_0__.set_uniforms)(gl, {\n    u_ka: obj.material.ka,\n    u_kd: obj.material.kd,\n    u_ks: obj.material.ks,\n    u_nlights: lighting.number_of_lights,\n    u_ambient_color: lighting.ambient.color,\n    u_ambient_intensity: lighting.ambient.intensity,\n    u_light_positions: lighting.light_positions,\n    u_light_colors: lighting.light_colors,\n    u_light_intensities: lighting.light_intensities,\n    u_light_specular_exp: lighting.light_specular_exp\n  }, object_program);\n}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/logic.js?");

/***/ }),

/***/ "./src/plugins/lighting/index.js":
/*!***************************************!*\
  !*** ./src/plugins/lighting/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blinn_phong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blinn_phong */ \"./src/plugins/lighting/blinn_phong/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  blinn_phong: _blinn_phong__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/index.js?");

/***/ }),

/***/ "./src/plugins/utils.js":
/*!******************************!*\
  !*** ./src/plugins/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_active_logic\": () => (/* binding */ get_active_logic)\n/* harmony export */ });\nconst get_active_logic = _get_active_logic;\nfunction _get_active_logic() {\n  return (() => {\n    let __ACTIVE = false;\n    return {\n      _set_active,\n      _get_active\n    };\n    function _set_active(_init, active, config) {\n      __ACTIVE = !!active;\n      return _init(config);\n    }\n    function _get_active() {\n      return __ACTIVE;\n    }\n  })();\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/utils.js?");

/***/ }),

/***/ "./src/plugins/geom/quad/shaders/frag.glsl":
/*!*************************************************!*\
  !*** ./src/plugins/geom/quad/shaders/frag.glsl ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = \"//material for the square\\nuniform float u_ka, u_kd, u_ks;\\n\\n//max number of allowed lights\\nconst int MAX_LIGHTS_N = 8;\\nuniform vec3 u_ambient_color;\\nuniform float u_ambient_intensity;\\nuniform int u_nlights;\\n\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\nuniform vec3 u_light_colors[MAX_LIGHTS_N];\\nuniform float u_light_intensities[MAX_LIGHTS_N];\\nuniform float u_light_specular_exp[MAX_LIGHTS_N];\\n\\nin vec4 normal;\\nin vec3 light_dirs[MAX_LIGHTS_N];\\nin vec3 light_half_vects[MAX_LIGHTS_N];\\n\\nvec3 compute_lighting_frag(vec3 start_color) {\\n    vec3 color = start_color;\\n    vec3 n = normalize(normal.xyz);\\n    \\n    color += u_ka * u_ambient_color;\\n    \\n    for(int i = 0; i < u_nlights; i ++ ) {\\n        vec3 l = normalize(light_dirs[i]);\\n        vec3 h = normalize(light_half_vects[i]);\\n        float I = u_light_intensities[i];\\n        vec3 Lc = u_light_colors[i];\\n        \\n        color += (\\n            (u_kd * I*max(0.0, dot(n, l)) * Lc) +\\n            (u_ks * I*pow(max(0.0, dot(n, h)), u_light_specular_exp[i]) * Lc)\\n        );\\n    }\\n    \\n    return color;\\n}\"\n\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/geom/quad/shaders/vert.glsl":
/*!*************************************************!*\
  !*** ./src/plugins/geom/quad/shaders/vert.glsl ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = \"//we'll use as inspiration the approach described here\\n//https://stackoverflow.com/a/62630376\\n\\nin vec3 a_normal;\\n\\nconst int MAX_LIGHTS_N = 8;\\n\\nuniform vec3 u_light_positions[MAX_LIGHTS_N];\\nuniform int u_nlights;\\n\\nout vec4 normal;\\nout vec3 light_dirs[MAX_LIGHTS_N];\\nout vec3 light_half_vects[MAX_LIGHTS_N];\\n\\nint compute_lighting_vert(mat4 view_m, mat4 modelview_m) {\\n    vec4 view_pos = modelview_m * vec4(a_position, 1.0);\\n    \\n    for(int i = 0; i < u_nlights; i ++ ) {\\n        vec4 lpos = view_m * vec4(u_light_positions[i], 1.0);\\n        light_dirs[i] = normalize(lpos.xyz - view_pos.xyz);\\n        \\n        vec3 pos2eye = vec3(-view_pos.xyz);\\n        light_half_vects[i] = normalize(pos2eye + light_dirs[i]);\\n    }\\n    \\n    mat4 Mti = transpose(inverse(modelview_m));\\n    normal = (Mti * vec4(a_normal, 0.0));\\n    \\n    return 1;\\n}\"\n\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/shaders/vert.glsl?");

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

/***/ "./src/plugins/geom/quad/config.json":
/*!*******************************************!*\
  !*** ./src/plugins/geom/quad/config.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"attributes\":{},\"uniforms\":{\"u_nlights\":{\"name\":\"u_nlights\",\"opts\":{\"fn\":\"1i\"}},\"u_ka\":{\"name\":\"u_ka\",\"opts\":{\"fn\":\"1f\"}},\"u_kd\":{\"name\":\"u_kd\",\"opts\":{\"fn\":\"1f\"}},\"u_ks\":{\"name\":\"u_ks\",\"opts\":{\"fn\":\"1f\"}},\"u_ambient_color\":{\"name\":\"u_ambient_color\",\"opts\":{\"fn\":\"3fv\"}},\"u_ambient_intensity\":{\"name\":\"u_ambient_intensity\",\"opts\":{\"fn\":\"1f\"}},\"u_light_positions\":{\"name\":\"u_light_positions\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_colors\":{\"name\":\"u_light_colors\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_intensities\":{\"name\":\"u_light_intensities\",\"opts\":{\"fn\":\"1fv\"}},\"u_light_specular_exp\":{\"name\":\"u_light_specular_exp\",\"opts\":{\"fn\":\"1fv\"}}}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/geom/quad/config.json?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/config.json":
/*!******************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/config.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"attributes\":{},\"uniforms\":{\"u_nlights\":{\"name\":\"u_nlights\",\"opts\":{\"fn\":\"1i\"}},\"u_ka\":{\"name\":\"u_ka\",\"opts\":{\"fn\":\"1f\"}},\"u_kd\":{\"name\":\"u_kd\",\"opts\":{\"fn\":\"1f\"}},\"u_ks\":{\"name\":\"u_ks\",\"opts\":{\"fn\":\"1f\"}},\"u_ambient_color\":{\"name\":\"u_ambient_color\",\"opts\":{\"fn\":\"3fv\"}},\"u_ambient_intensity\":{\"name\":\"u_ambient_intensity\",\"opts\":{\"fn\":\"1f\"}},\"u_light_positions\":{\"name\":\"u_light_positions\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_colors\":{\"name\":\"u_light_colors\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_intensities\":{\"name\":\"u_light_intensities\",\"opts\":{\"fn\":\"1fv\"}},\"u_light_specular_exp\":{\"name\":\"u_light_specular_exp\",\"opts\":{\"fn\":\"1fv\"}}}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/config.json?");

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