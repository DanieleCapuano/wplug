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

eval("!function (e, r) {\n   true ? module.exports = r() : 0;\n}(self, () => (() => {\n  \"use strict\";\n\n  var __webpack_modules__ = {\n      880: (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_356__) => {\n        __nested_webpack_require_356__.d(__nested_webpack_exports__, {\n          $C: () => get_program_data,\n          ax: () => init_program,\n          fh: () => init_program_fbos\n        });\n        var _vertex_common__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_356__(961),\n          _uniforms_common__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_356__(286),\n          _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_356__(853),\n          _texture_common__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_356__(370);\n        const init_program = _init_program,\n          init_program_fbos = _init_program_fbos,\n          get_program_data = _get_program_data;\n        function _init_program(e, r) {\n          let t = {};\n          try {\n            let _ = [r.vertex_shader, r.fragment_shader].map(e => _decorate_source(e));\n            if (r.build_program) t = r.build_program(e, shaders);else {\n              let o = (0, _utils__WEBPACK_IMPORTED_MODULE_1__.jr)(e, _),\n                n = o.program,\n                a = o.shaders;\n              t = _init_program_fbos(Object.assign({\n                program: n,\n                shaders: a\n              }, _get_program_data(e, n)), e, r);\n            }\n          } catch (e) {\n            console.warn(\"PROGRAM ERROR FOR CURRENT PROGRAM\"), console.warn(e);\n          }\n          return r.add_program_configuration && (t = r.add_program_configuration(t, e, r)), t;\n        }\n        function _get_program_data(e, r) {\n          return {\n            vertex_data: (0, _vertex_common__WEBPACK_IMPORTED_MODULE_2__.D)(e, r),\n            uniforms: (0, _uniforms_common__WEBPACK_IMPORTED_MODULE_3__.r)(e, r),\n            start_time: performance.now()\n          };\n        }\n        function _init_program_fbos(e, r, t) {\n          const {\n            canvas: _,\n            framebuffers_n: o,\n            framebuffers_offset: n\n          } = t;\n          let a = o || 1,\n            i = n || 1;\n          return e.has_framebuffer = t.has_framebuffer, t.dont_create_base_texture || (e.base_texture = e.base_texture || _texture_common__WEBPACK_IMPORTED_MODULE_0__.K.init_texture(r, 0)), e.fbo_data = _texture_common__WEBPACK_IMPORTED_MODULE_0__.K.create_fbo_textures(e, r, a, i, _.clientWidth, _.clientHeight), e;\n        }\n        function _decorate_source(source) {\n          return eval(\"`\" + source + \"`\");\n        }\n      },\n      370: (e, r, t) => {\n        t.d(r, {\n          K: () => _\n        });\n        const _ = function () {\n          return {\n            init_texture: e,\n            draw_into_texture: r,\n            create_fbo_textures: function (t, _, o, n, a, i) {\n              let u = [];\n              for (var f = n = n || 0; f < o + n; ++f) {\n                var c = e(_, 0);\n                r(_, c, 0, null, a, i);\n                var s = _.createFramebuffer();\n                _.bindFramebuffer(_.FRAMEBUFFER, s);\n                var b = _.COLOR_ATTACHMENT0;\n                _.framebufferTexture2D(_.FRAMEBUFFER, b, _.TEXTURE_2D, c, 0), u[f] = {\n                  fbo: s,\n                  texture: c\n                };\n              }\n              return _.bindFramebuffer(_.FRAMEBUFFER, null), u;\n            },\n            set_framebuffer: function (e, r, t, _) {\n              e.bindFramebuffer(e.FRAMEBUFFER, r), e.viewport(0, 0, t, _);\n            },\n            get_fbo_texture: function (e, r) {\n              return (((e || {}).fbo_data || [])[r] || {}).texture;\n            },\n            get_fbo: function (e, r) {\n              return (((e || {}).fbo_data || [])[r] || {}).fbo;\n            }\n          };\n          function e(e, r) {\n            e.activeTexture(e.TEXTURE0 + (r || 0));\n            var t = e.createTexture();\n            return e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), t;\n          }\n          function r(e, r, t, _, o, n) {\n            e.activeTexture(e.TEXTURE0 + (t || 0)), e.bindTexture(e.TEXTURE_2D, r);\n            var a = e.RGBA,\n              i = e.RGBA,\n              u = e.UNSIGNED_BYTE,\n              f = _,\n              c = f ? [e.TEXTURE_2D, 0, a, i, u, f] : [e.TEXTURE_2D, 0, a, o, n, 0, i, u, f];\n            try {\n              e.texImage2D.apply(e, c);\n            } catch (e) {\n              console.warn(\"Error loading image\", _);\n            }\n          }\n        }();\n      },\n      286: (e, r, t) => {\n        t.d(r, {\n          r: () => o\n        });\n        var _ = t(853);\n        function o(e, r) {\n          let t = (0, _.Vh)(e, {\n            program: r\n          });\n          return Object.keys(t.uniforms).reduce((e, r) => (e[r] = {\n            get: () => t.uniforms[r].loc,\n            set: o.bind(null, t.uniforms[r])\n          }, e), {});\n          function o(e, r, t, _, o) {\n            r[\"uniform\" + _].apply(r, [].concat(e.loc, o));\n          }\n        }\n      },\n      853: (e, r, t) => {\n        t.d(r, {\n          B0: () => n,\n          HO: () => a,\n          Lo: () => u,\n          VU: () => s,\n          Vh: () => c,\n          c0: () => _,\n          jr: () => i,\n          kQ: () => o,\n          uX: () => f\n        });\n        const _ = function (e, r, t, _, o) {\n            var n = r,\n              a = r + _,\n              i = t,\n              u = t + o;\n            e.bufferData(e.ARRAY_BUFFER, new Float32Array([n, i, a, i, n, u, n, u, a, i, a, u]), e.STATIC_DRAW);\n          },\n          o = function (e, r, t, _, o, n) {\n            e.bindBuffer(e.ARRAY_BUFFER, r), e.enableVertexAttribArray(t), e.vertexAttribPointer(t, _, n || e.FLOAT, o || !1, 0, 0);\n          },\n          n = function (e, r, t, _) {\n            const o = _ || E,\n              n = e.createShader(t);\n            return e.shaderSource(n, r), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS) || e.isContextLost() ? n : (o(\"*** Error compiling shader '\" + n + \"':\" + e.getShaderInfoLog(n)), e.deleteShader(n), null);\n          },\n          a = function (e, r, t, _, o) {\n            const n = o || E,\n              a = e.createProgram();\n            return r.forEach(function (r) {\n              e.attachShader(a, r);\n            }), t && t.forEach(function (r, t) {\n              e.bindAttribLocation(a, _ ? _[t] : t, r);\n            }), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) || e.isContextLost() ? a : (n(\"Error in program linking:\" + e.getProgramInfoLog(a)), e.deleteProgram(a), null);\n          },\n          i = function (e, r, t, _, o) {\n            const i = [];\n            for (let t = 0; t < r.length; ++t) i.push(n(e, r[t], e[b[t]], o));\n            return {\n              shaders: i,\n              program: a(e, i, t, _, o)\n            };\n          },\n          u = function (e, r) {\n            r = r || 1;\n            const t = e.clientWidth * r | 0,\n              _ = e.clientHeight * r | 0;\n            return (e.width !== t || e.height !== _) && (e.width = t, e.height = _, !0);\n          },\n          f = function (e, r, t, _) {\n            var o = l(r) || e.TRIANGLES,\n              n = l(t) || 0,\n              a = l(_) || 6;\n            e.drawArrays(o, n, a);\n          },\n          c = function (e, r) {\n            const t = r.program;\n            r.attributes = {}, r.uniforms = {};\n            const _ = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);\n            let o = r.attributes;\n            for (let r = 0; r < _; r++) {\n              const _ = e.getActiveAttrib(t, r);\n              o[_.name] = {\n                loc: e.getAttribLocation(t, _.name),\n                def: _\n              };\n            }\n            const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);\n            o = r.uniforms;\n            for (let r = 0; r < n; r++) {\n              const _ = e.getActiveUniform(t, r);\n              o[_.name] = {\n                loc: e.getUniformLocation(t, _.name),\n                def: _\n              };\n            }\n            return r;\n          },\n          s = function () {\n            let e = new Uint32Array([287454020]),\n              r = new Uint8Array(e.buffer);\n            return 68 === r[0] || (r[0], !1);\n          },\n          b = [\"VERTEX_SHADER\", \"FRAGMENT_SHADER\"];\n        function E(e) {\n          window.top.console && (window.top.console.error ? window.top.console.error(e) : window.top.console.log && window.top.console.log(e));\n        }\n        function l(e) {\n          return null != e ? e : null;\n        }\n      },\n      961: (e, r, t) => {\n        t.d(r, {\n          D: () => o\n        });\n        var _ = t(853);\n        const o = function (e, r) {\n          let t = {};\n          return t.vao = e.createVertexArray(), e.bindVertexArray(t.vao), t.positionAttributeLocation = e.getAttribLocation(r, \"a_position\"), t.texCoodAttributeLocation = e.getAttribLocation(r, \"a_texCoord\"), t.pos_buffer = e.createBuffer(), t.coord_buffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t.pos_buffer), (0, _.c0)(e, 0, 0, e.canvas.clientWidth, e.canvas.clientHeight), (0, _.kQ)(e, t.pos_buffer, t.positionAttributeLocation, 2), e.bindBuffer(e.ARRAY_BUFFER, t.coord_buffer), (0, _.c0)(e, 0, 0, 1, 1), (0, _.kQ)(e, t.coord_buffer, t.texCoodAttributeLocation, 2, !0), e.bindVertexArray(null), t;\n        };\n      }\n    },\n    __webpack_module_cache__ = {};\n  function __nested_webpack_require_9779__(e) {\n    var r = __webpack_module_cache__[e];\n    if (void 0 !== r) return r.exports;\n    var t = __webpack_module_cache__[e] = {\n      exports: {}\n    };\n    return __webpack_modules__[e](t, t.exports, __nested_webpack_require_9779__), t.exports;\n  }\n  __nested_webpack_require_9779__.d = (e, r) => {\n    for (var t in r) __nested_webpack_require_9779__.o(r, t) && !__nested_webpack_require_9779__.o(e, t) && Object.defineProperty(e, t, {\n      enumerable: !0,\n      get: r[t]\n    });\n  }, __nested_webpack_require_9779__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), __nested_webpack_require_9779__.r = e => {\n    \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\n      value: \"Module\"\n    }), Object.defineProperty(e, \"__esModule\", {\n      value: !0\n    });\n  };\n  var __nested_webpack_exports__ = {};\n  return (() => {\n    __nested_webpack_require_9779__.r(__nested_webpack_exports__), __nested_webpack_require_9779__.d(__nested_webpack_exports__, {\n      bind_attribute: () => _.kQ,\n      buffer_data: () => p,\n      createProgram: () => _.HO,\n      createProgramFromSources: () => _.jr,\n      create_program: () => b,\n      default: () => A,\n      draw_shapes: () => _.uX,\n      fill_position_buffer: () => d,\n      generate_attributes_from_config: () => l,\n      get_program_data: () => e.$C,\n      get_program_elements: () => _.Vh,\n      get_program_uniforms: () => t.r,\n      get_ubo: () => n,\n      get_uniforms_in_ubo: () => a,\n      init_program: () => e.ax,\n      init_program_fbos: () => e.fh,\n      init_vao: () => E,\n      init_vertex_data: () => o.D,\n      isSystemLittleEndian: () => _.VU,\n      loadShader: () => _.B0,\n      resizeCanvasToDisplaySize: () => _.Lo,\n      set_rectangle_coords: () => _.c0,\n      set_uniforms: () => g,\n      set_unique_ubo_in_program: () => i,\n      setup_indices: () => m,\n      texture_data: () => r.K,\n      update_ubo_buffer: () => u\n    });\n    var e = __nested_webpack_require_9779__(880),\n      r = __nested_webpack_require_9779__(370),\n      t = __nested_webpack_require_9779__(286),\n      _ = __nested_webpack_require_9779__(853),\n      o = __nested_webpack_require_9779__(961);\n    const n = function (e, r, t, _) {\n        const o = e.getUniformBlockIndex(r, t),\n          n = e.getActiveUniformBlockParameter(r, o, e.UNIFORM_BLOCK_DATA_SIZE),\n          a = e.createBuffer();\n        e.bindBuffer(e.UNIFORM_BUFFER, a), e.bufferData(e.UNIFORM_BUFFER, n, e.DYNAMIC_DRAW);\n        const u = {\n          uboIndex: o,\n          uboBuffer: a,\n          blockSize: n,\n          uboUniqueBind: _\n        };\n        return void 0 !== _ && (e.bindBufferBase(e.UNIFORM_BUFFER, _, a), i(e, r, u)), e.bindBuffer(e.UNIFORM_BUFFER, null), u;\n      },\n      a = function (e, r, t) {\n        const {\n            uboIndex: _,\n            uboBuffer: o,\n            uboUniqueBind: n,\n            ubo_variable_names: a\n          } = t,\n          i = e.getUniformIndices(r, a),\n          u = e.getActiveUniforms(r, i, e.UNIFORM_TYPE),\n          f = e.getActiveUniforms(r, i, e.UNIFORM_OFFSET),\n          c = e.getActiveUniforms(r, i, e.UNIFORM_SIZE),\n          s = e.getActiveUniforms(r, i, e.UNIFORM_ARRAY_STRIDE);\n        return Object.assign(t, {\n          ubo_variable_info: a.reduce((e, r, t) => Object.assign(e, {\n            [r]: {\n              index: i[t],\n              type: u[t],\n              size: c[t],\n              offset: f[t],\n              stride: s[t]\n            }\n          }), {})\n        });\n      },\n      i = function (e, r, t) {\n        const {\n          uboIndex: _,\n          uboUniqueBind: o\n        } = t;\n        e.uniformBlockBinding(r, _, o);\n      },\n      u = function (e, r, t, _) {\n        const {\n          uboBuffer: o,\n          ubo_variable_info: n,\n          blockSize: a\n        } = r;\n        e.bindBuffer(e.UNIFORM_BUFFER, o);\n        const i = function (e, r, t, _, o) {\n          const n = new ArrayBuffer(r),\n            a = new DataView(n),\n            i = Object.keys(t);\n          for (let r = 0; r < i.length; r++) {\n            const n = i[r],\n              u = t[n],\n              b = o[n].opts,\n              E = _[n],\n              l = E.buffer || Array.isArray(E) ? E : [E],\n              d = c[b.fn],\n              m = u.type === e.FLOAT_VEC2 || u.type === e.INT_VEC2 ? 2 : u.type === e.FLOAT_VEC3 || u.type === e.INT_VEC3 ? 3 : 1,\n              p = s[b.fn];\n            if (0 === u.stride) for (let e = 0; e < l.length; e++) {\n              const r = u.offset + e * d;\n              a[p](r, l[e], f);\n            } else {\n              let e = 0;\n              for (let r = 0; r < l.length; r += m) {\n                const t = u.offset + e * u.stride;\n                for (let e = 0; e < m; e++) a[p](t + d * e, l[r + e], f);\n                e++;\n              }\n            }\n          }\n          return a;\n        }(e, a, n, t, _);\n        e.bufferSubData(e.UNIFORM_BUFFER, 0, i, 0, i.length), e.bindBuffer(e.UNIFORM_BUFFER, null);\n      },\n      f = (0, _.VU)(),\n      c = {\n        \"1i\": Int16Array.BYTES_PER_ELEMENT,\n        \"1iv\": Int16Array.BYTES_PER_ELEMENT,\n        \"2iv\": Int16Array.BYTES_PER_ELEMENT,\n        \"3iv\": Int16Array.BYTES_PER_ELEMENT,\n        \"1f\": Float32Array.BYTES_PER_ELEMENT,\n        \"1fv\": Float32Array.BYTES_PER_ELEMENT,\n        \"2fv\": Float32Array.BYTES_PER_ELEMENT,\n        \"3fv\": Float32Array.BYTES_PER_ELEMENT,\n        Matrix2fv: Float32Array.BYTES_PER_ELEMENT,\n        Matrix3fv: Float32Array.BYTES_PER_ELEMENT,\n        Matrix4fv: Float32Array.BYTES_PER_ELEMENT\n      },\n      s = {\n        \"1i\": \"setInt16\",\n        \"1iv\": \"setInt16\",\n        \"2iv\": \"setInt16\",\n        \"3iv\": \"setInt16\",\n        \"1f\": \"setFloat32\",\n        \"1fv\": \"setFloat32\",\n        \"2fv\": \"setFloat32\",\n        \"3fv\": \"setFloat32\",\n        Matrix2fv: \"setFloat32\",\n        Matrix3fv: \"setFloat32\",\n        Matrix4fv: \"setFloat32\"\n      },\n      b = function (e, r, t) {\n        let o = (0, _.B0)(e, r, e.VERTEX_SHADER),\n          n = (0, _.B0)(e, t, e.FRAGMENT_SHADER);\n        return (0, _.HO)(e, [o, n]);\n      },\n      E = function (e, r) {\n        const {\n            program: t,\n            attributes: _,\n            uniforms: o\n          } = r,\n          i = r.vao || e.createVertexArray();\n        e.useProgram(t), e.bindVertexArray(i);\n        const u = e.createBuffer(),\n          f = e.ARRAY_BUFFER;\n        return e.bindBuffer(f, u), Object.keys(_).forEach(o => {\n          let n = _[o],\n            a = e.getAttribLocation(t, n.name);\n          e.vertexAttribPointer.apply(e, [a].concat(n.opts)), e.enableVertexAttribArray(a), Object.assign(r.attributes[n.name], {\n            location: a,\n            buffer: u,\n            buffer_bind: f\n          }, {\n            is_position: n.is_position\n          });\n        }), Object.keys(o).forEach(_ => {\n          r.uniforms[_].ubo || Object.assign(r.uniforms[_], {\n            location: e.getUniformLocation(t, _)\n          });\n        }), r = function (e, r) {\n          const {\n              program: t,\n              uniforms: _,\n              program_index: o\n            } = r,\n            i = Object.keys(Object.keys(_).reduce((e, r) => Object.assign(e, _[r].ubo ? {\n              [_[r].ubo]: !0\n            } : {}), {})).length;\n          let u = 0;\n          const f = Object.keys(_).reduce((r, a) => {\n            if (_[a].ubo) {\n              const f = _[a].ubo;\n              if (r[f]) r[f].ubo_variable_names.push(a);else {\n                let _ = n(e, t, f, u + i * o);\n                _.ubo_variable_names = [a], r[f] = _, u++;\n              }\n            }\n            return r;\n          }, {});\n          return Object.keys(f).forEach(_ => {\n            r.ubos = r.ubos || {}, r.ubos[_] = a(e, t, f[_]);\n          }), r;\n        }(e, r), e.bindVertexArray(null), e.bindBuffer(f, null), e.useProgram(null), {\n          vao: i\n        };\n      },\n      l = function (e, r, t, _) {\n        return Object.assign(r, t, {\n          attributes: Object.keys(t.attributes).reduce((r, o) => {\n            let n = t.attributes[o],\n              a = n.opts;\n            return n.opts = [a.size || _ || 3, e[a.data_type], a.normalized, a.stride, a.offset], Object.assign(r, {\n              [o]: n\n            });\n          }, {})\n        });\n      },\n      d = function (e, r, t) {\n        const {\n          attributes: _\n        } = r;\n        return Object.keys(_).filter(e => _[e].is_position).forEach(_ => {\n          R(e, {\n            [_]: t\n          }, r);\n        }), r;\n      },\n      m = function (e, r) {\n        const t = e.createBuffer();\n        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t);\n        const _ = r;\n        return e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(_), e.STATIC_DRAW), t;\n      },\n      p = R,\n      g = function (e, r, t) {\n        const {\n            program_info: _\n          } = t,\n          {\n            ubos: o,\n            uniforms: n\n          } = _;\n        let a = [];\n        Object.keys(r).forEach(t => {\n          if (-1 !== a.indexOf(t)) return;\n          let i = !1;\n          if (Object.keys(o || {}).forEach(_ => {\n            -1 !== o[_].ubo_variable_names.indexOf(t) && (u(e, o[_], r, n), i = !0, a = a.concat(o[_].ubo_variable_names));\n          }), !i) {\n            const o = _.uniforms[t],\n              {\n                opts: n,\n                location: a\n              } = o;\n            if (null === a) return;\n            let i = r[t],\n              u = -1 === n.fn.indexOf(\"Matrix\") ? [a, i] : [a, !1, i];\n            e[\"uniform\" + n.fn].apply(e, u);\n          }\n        });\n      };\n    function R(e, r, t) {\n      e.bindVertexArray(t.vao), Object.keys(r).forEach(_ => {\n        const {\n            buffer: o,\n            buffer_bind: n\n          } = t.attributes[_],\n          a = r[_];\n        e.bindBuffer(n, o), e.bufferData(n, a, e.STATIC_DRAW, 0), e.bindBuffer(n, null);\n      }), e.bindVertexArray(null);\n    }\n    const A = {\n      init_program: e.ax,\n      init_program_fbos: e.fh,\n      get_program_data: e.$C,\n      texture_data: r.K,\n      get_program_uniforms: t.r,\n      set_rectangle_coords: _.c0,\n      bind_attribute: _.kQ,\n      loadShader: _.B0,\n      createProgram: _.HO,\n      createProgramFromSources: _.jr,\n      resizeCanvasToDisplaySize: _.Lo,\n      draw_shapes: _.uX,\n      get_program_elements: _.Vh,\n      isSystemLittleEndian: _.VU,\n      init_vertex_data: o.D,\n      create_program: b,\n      init_vao: E,\n      generate_attributes_from_config: l,\n      fill_position_buffer: d,\n      setup_indices: m,\n      buffer_data: p,\n      set_uniforms: g,\n      get_ubo: n,\n      get_uniforms_in_ubo: a,\n      set_unique_ubo_in_program: i,\n      update_ubo_buffer: u\n    };\n  })(), __nested_webpack_exports__;\n})());\n\n//# sourceURL=webpack://wplug/./node_modules/wbase/dist/wbase.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   plugins: () => (/* binding */ plugins)\n/* harmony export */ });\n/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ \"./src/plugins/index.js\");\n\nconst plugins_api = Object.keys(_plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).reduce((o, plug_key) => {\n  const def = _plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"][plug_key].default;\n  return Object.assign(o, {\n    [plug_key]: _flatten_logic_into(def)\n  });\n}, {});\nconst plugins = plugins_api;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);\n\n/////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////\n\nfunction _flatten_logic_into(main_o) {\n  return Object.keys(main_o).reduce((o, l_key) => {\n    let default_o = main_o[l_key].default,\n      logic = default_o.logic || {},\n      no_logic_o = Object.keys(default_o).filter(k => k !== 'logic').reduce(_flat_obj.bind(null, default_o), {}),\n      flat_o = Object.keys(logic).reduce(_flat_obj.bind(null, logic), no_logic_o);\n    return Object.assign(o, {\n      [l_key]: flat_o\n    });\n  }, {});\n}\nfunction _flat_obj(o_tobe_flat, o_dest, k) {\n  return Object.assign(o_dest, {\n    [k]: o_tobe_flat[k]\n  });\n}\n\n//# sourceURL=webpack://wplug/./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanup: () => (/* binding */ cleanup),\n/* harmony export */   draw_loop_callback: () => (/* binding */ draw_loop_callback),\n/* harmony export */   get_active: () => (/* binding */ get_active),\n/* harmony export */   get_model: () => (/* binding */ get_model),\n/* harmony export */   program_init: () => (/* binding */ program_init),\n/* harmony export */   set_active: () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\n\n///////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////\n\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _program_init(scene_config) {\n  return scene_config;\n}\nfunction _draw_loop_callback(object_config, scene_config) {}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/logic.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/index.js":
/*!*******************************************!*\
  !*** ./src/plugins/antialiasing/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fs_derivatives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fs_derivatives */ \"./src/plugins/antialiasing/fs_derivatives/index.js\");\n/* harmony import */ var _postp_gaussian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postp_gaussian */ \"./src/plugins/antialiasing/postp_gaussian/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fs_derivatives: _fs_derivatives__WEBPACK_IMPORTED_MODULE_0__,\n  postp_gaussian: _postp_gaussian__WEBPACK_IMPORTED_MODULE_1__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/index.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/postp_gaussian/index.js":
/*!**********************************************************!*\
  !*** ./src/plugins/antialiasing/postp_gaussian/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/antialiasing/postp_gaussian/logic.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/plugins/antialiasing/postp_gaussian/config.json\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/antialiasing/postp_gaussian/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/antialiasing/postp_gaussian/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: _utils__WEBPACK_IMPORTED_MODULE_4__.get_config.bind(null, /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)))),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  },\n  requires: {\n    postprocessing: {\n      id: \"fbo\",\n      framebuffers_n: 1,\n      framebuffers_offset: 1,\n      base_active_texture: 0\n    }\n  }\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/postp_gaussian/index.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/postp_gaussian/logic.js":
/*!**********************************************************!*\
  !*** ./src/plugins/antialiasing/postp_gaussian/logic.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanup: () => (/* binding */ cleanup),\n/* harmony export */   draw_loop_callback: () => (/* binding */ draw_loop_callback),\n/* harmony export */   get_active: () => (/* binding */ get_active),\n/* harmony export */   get_model: () => (/* binding */ get_model),\n/* harmony export */   program_init: () => (/* binding */ program_init),\n/* harmony export */   set_active: () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _program_init(scene_config) {\n  return scene_config;\n}\nfunction _draw_loop_callback(obj, scene_config) {\n  return scene_config;\n}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/postp_gaussian/logic.js?");

/***/ }),

/***/ "./src/plugins/base/index.js":
/*!***********************************!*\
  !*** ./src/plugins/base/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/plugins/base/model/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  model: _model__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/base/index.js?");

/***/ }),

/***/ "./src/plugins/base/model/index.js":
/*!*****************************************!*\
  !*** ./src/plugins/base/model/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/base/model/logic.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.json */ \"./src/plugins/base/model/config.json\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/base/model/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/base/model/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: _utils__WEBPACK_IMPORTED_MODULE_4__.get_config.bind(null, /*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)))),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  },\n  is_base: true\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/base/model/index.js?");

/***/ }),

/***/ "./src/plugins/base/model/logic.js":
/*!*****************************************!*\
  !*** ./src/plugins/base/model/logic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanup: () => (/* binding */ cleanup),\n/* harmony export */   draw_loop_callback: () => (/* binding */ draw_loop_callback),\n/* harmony export */   get_active: () => (/* binding */ get_active),\n/* harmony export */   get_model: () => (/* binding */ get_model),\n/* harmony export */   program_init: () => (/* binding */ program_init),\n/* harmony export */   set_active: () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _program_init(scene_config) {\n  return scene_config;\n}\nfunction _draw_loop_callback(obj, scene_config) {\n  return scene_config;\n}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/base/model/logic.js?");

/***/ }),

/***/ "./src/plugins/geometry/index.js":
/*!***************************************!*\
  !*** ./src/plugins/geometry/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad */ \"./src/plugins/geometry/quad/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  quad: _quad__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/geometry/index.js?");

/***/ }),

/***/ "./src/plugins/geometry/quad/config.js":
/*!*********************************************!*\
  !*** ./src/plugins/geometry/quad/config.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config_getter: () => (/* binding */ config_getter)\n/* harmony export */ });\nfunction config_getter(shad_data) {\n  //change the stride to all attributes to include the texcood attribute\n  Object.keys((shad_data || {}).attributes || {}).forEach(sd_key => {\n    shad_data.attributes[sd_key].opts.stride = 20;\n  });\n  return {\n    \"attributes\": {\n      \"a_texcoord\": {\n        \"name\": \"a_texcoord\",\n        \"opts\": {\n          \"size\": 2,\n          \"data_type\": \"UNSIGNED_SHORT\",\n          \"normalized\": true,\n          \"stride\": 20,\n          \"offset\": 16\n        }\n      }\n    },\n    \"uniforms\": {}\n  };\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/geometry/quad/config.js?");

/***/ }),

/***/ "./src/plugins/geometry/quad/index.js":
/*!********************************************!*\
  !*** ./src/plugins/geometry/quad/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/plugins/geometry/quad/logic.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/plugins/geometry/quad/config.js\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/plugins/geometry/quad/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/plugins/geometry/quad/shaders/frag.glsl\");\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({\n  logic: _logic__WEBPACK_IMPORTED_MODULE_0__,\n  config: _utils__WEBPACK_IMPORTED_MODULE_4__.get_config.bind(null, _config__WEBPACK_IMPORTED_MODULE_1__.config_getter),\n  shaders: {\n    vert: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__,\n    frag: _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_3__\n  }\n}));\n\n//# sourceURL=webpack://wplug/./src/plugins/geometry/quad/index.js?");

/***/ }),

/***/ "./src/plugins/geometry/quad/logic.js":
/*!********************************************!*\
  !*** ./src/plugins/geometry/quad/logic.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add_data_to_buffer: () => (/* binding */ add_data_to_buffer),\n/* harmony export */   cleanup: () => (/* binding */ cleanup),\n/* harmony export */   draw_loop_callback: () => (/* binding */ draw_loop_callback),\n/* harmony export */   get_active: () => (/* binding */ get_active),\n/* harmony export */   get_model: () => (/* binding */ get_model),\n/* harmony export */   program_init: () => (/* binding */ program_init),\n/* harmony export */   set_active: () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\nconst add_data_to_buffer = _add_data_to_buffer;\nfunction _init(scene_config) {\n  //generate the coordinates\n  const {\n    scene_desc,\n    objects_desc,\n    canvas\n  } = scene_config;\n  const {\n    geometry,\n    objects\n  } = scene_desc;\n  const {\n    fullscreen,\n    width,\n    height\n  } = geometry || {};\n  Object.keys(objects).forEach(obj_id => {\n    const obj_conf = objects[obj_id];\n    if (!obj_conf.quad) return;\n    const {\n        quad\n      } = obj_conf,\n      obj = objects_desc.find(o => o.id === obj_id);\n    let w = quad.fullscreen || fullscreen ? canvas.width : quad.width || width,\n      h = quad.fullscreen || fullscreen ? canvas.height : quad.height || height,\n      aspect = h / w,\n      half_asp = 0.5 * aspect;\n    obj.coordinates_def = obj.coordinates_def || [[-0.5, -half_asp, 0.5], [0.5, -half_asp, 0.5], [-0.5, half_asp, 0.5], [0.5, half_asp, 0.5]];\n    obj.indices = obj.indices || [0, 1, 2, 2, 1, 3];\n  });\n  return scene_config;\n}\nfunction _add_data_to_buffer(data_conf) {\n  const {\n      coordinate_index,\n      current_bytes_pos,\n      buffer,\n      littleEndian\n    } = data_conf,\n    data_map = [[0, 0], [1, 0], [0, 1], [1, 1]],\n    texcoord = data_map[coordinate_index] || [0, 0];\n  buffer.setUint16(current_bytes_pos + Uint16Array.BYTES_PER_ELEMENT * 0, texcoord[0] * 0xffff, littleEndian);\n  buffer.setUint16(current_bytes_pos + Uint16Array.BYTES_PER_ELEMENT * 1, texcoord[1] * 0xffff, littleEndian);\n  return data_conf;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _program_init(scene_config) {\n  return scene_config;\n}\nfunction _draw_loop_callback(obj, scene_config) {\n  return scene_config;\n}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/geometry/quad/logic.js?");

/***/ }),

/***/ "./src/plugins/index.js":
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lighting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lighting */ \"./src/plugins/lighting/index.js\");\n/* harmony import */ var _antialiasing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./antialiasing */ \"./src/plugins/antialiasing/index.js\");\n/* harmony import */ var _postprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postprocessing */ \"./src/plugins/postprocessing/index.js\");\n/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geometry */ \"./src/plugins/geometry/index.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ \"./src/plugins/base/index.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  lighting: _lighting__WEBPACK_IMPORTED_MODULE_0__,\n  antialiasing: _antialiasing__WEBPACK_IMPORTED_MODULE_1__,\n  postprocessing: _postprocessing__WEBPACK_IMPORTED_MODULE_2__,\n  geometry: _geometry__WEBPACK_IMPORTED_MODULE_3__,\n  base: _base__WEBPACK_IMPORTED_MODULE_4__\n});\n\n//# sourceURL=webpack://wplug/./src/plugins/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanup: () => (/* binding */ cleanup),\n/* harmony export */   draw_loop_callback: () => (/* binding */ draw_loop_callback),\n/* harmony export */   get_active: () => (/* binding */ get_active),\n/* harmony export */   get_model: () => (/* binding */ get_model),\n/* harmony export */   program_init: () => (/* binding */ program_init),\n/* harmony export */   set_active: () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wbase */ \"./node_modules/wbase/dist/wbase.js\");\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wbase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\n\n///////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////\n\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  const {\n    scene_desc\n  } = scene_config;\n  const {\n    lighting\n  } = scene_desc;\n  const lid = (lighting || []).findIndex(l => l.id === 'blinn_phong');\n  if (lid === -1) return {};\n  lighting[lid].light_positions = lighting[lid].lights.reduce((poss, l) => poss.concat(l.position), []);\n  lighting[lid].light_colors = lighting[lid].lights.reduce((cols, l) => cols.concat(l.color), []);\n  lighting[lid].light_intensities = lighting[lid].lights.reduce((ints, l) => ints.concat(l.intensity), []);\n  lighting[lid].light_specular_exp = lighting[lid].lights.reduce((exps, l) => exps.concat(l.specular_exp), []);\n  lighting[lid].number_of_lights = lighting[lid].lights.length;\n  return {\n    lighting\n  };\n}\nfunction _program_init(scene_config) {\n  return scene_config;\n}\nfunction _draw_loop_callback(object_config, scene_config) {\n  Object.assign(scene_config.scene_desc, _get_model(scene_config)); //update the lighting model to allow lighting changes during time\n  const {\n    gl,\n    scene_desc\n  } = scene_config;\n  const {\n    lighting\n  } = scene_desc;\n  const lighting_conf = (lighting || []).find(l => l.id === 'blinn_phong');\n  const {\n    object_program,\n    material\n  } = object_config;\n  const {\n    ka,\n    kd,\n    ks\n  } = material;\n  const {\n    ambient,\n    number_of_lights,\n    light_positions,\n    light_colors,\n    light_intensities,\n    light_specular_exp\n  } = lighting_conf;\n  (0,wbase__WEBPACK_IMPORTED_MODULE_0__.set_uniforms)(gl, {\n    u_ka: ka,\n    u_kd: kd,\n    u_ks: ks,\n    u_nlights: number_of_lights,\n    u_ambient_color: ambient.color,\n    u_ambient_intensity: ambient.intensity,\n    u_light_positions: light_positions,\n    u_light_colors: light_colors,\n    u_light_intensities: light_intensities,\n    u_light_specular_exp: light_specular_exp\n  }, object_program);\n}\nfunction _cleanup(scene_config) {\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/logic.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanup: () => (/* binding */ cleanup),\n/* harmony export */   draw_loop_callback: () => (/* binding */ draw_loop_callback),\n/* harmony export */   get_active: () => (/* binding */ get_active),\n/* harmony export */   get_model: () => (/* binding */ get_model),\n/* harmony export */   program_init: () => (/* binding */ program_init),\n/* harmony export */   set_active: () => (/* binding */ set_active)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/plugins/utils.js\");\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wbase */ \"./node_modules/wbase/dist/wbase.js\");\n/* harmony import */ var wbase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wbase__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst get_model = _get_model;\nconst program_init = _program_init;\nconst draw_loop_callback = _draw_loop_callback;\nconst cleanup = _cleanup;\nconst {\n  _get_active,\n  _set_active\n} = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.get_active_logic)();\nconst set_active = _set_active.bind(null, _init);\nconst get_active = _get_active;\n\n///////////////////////////////////////////////////////////\n///////////////////////////////////////////////////////////\n\nfunction _init(scene_config) {\n  //currently not used\n  return scene_config;\n}\nfunction _get_model(scene_config) {\n  return {};\n}\nfunction _program_init(scene_config) {\n  const\n    //////////////////////////\n    {\n      gl,\n      canvas,\n      objects_to_draw,\n      scene_desc\n    } = scene_config,\n    {\n      postprocessing\n    } = scene_desc,\n    fbo_conf = (postprocessing || []).find(cfg => cfg.id === 'fbo'),\n    {\n      base_active_texture\n    } = fbo_conf;\n  let texture_unit = gl.TEXTURE0 + (base_active_texture !== undefined ? base_active_texture : 0);\n  gl.activeTexture(texture_unit);\n  objects_to_draw.forEach(otd => {\n    const\n    ///////////////////////\n    {\n      object_program,\n      fbo\n    } = otd;\n    object_program.fbo_opts = Object.assign({}, fbo_conf, fbo || {});\n    let opts = object_program.fbo_opts;\n\n    //function _init_program_fbos(current_program, gl, opts)\n    otd.object_program = (0,wbase__WEBPACK_IMPORTED_MODULE_1__.init_program_fbos)(object_program, gl, Object.assign({}, opts, {\n      canvas\n    }));\n  });\n  return scene_config;\n}\nfunction _draw_loop_callback(object_config, scene_config) {\n  const\n    ////////////////////////\n    {\n      gl,\n      canvas,\n      draw_fn\n    } = scene_config,\n    {\n      object_program\n    } = object_config,\n    {\n      fbo_opts,\n      base_texture\n    } = object_program,\n    {\n      has_framebuffer,\n      framebuffers_n,\n      framebuffers_offset\n    } = fbo_opts || {};\n  if (has_framebuffer === false) return scene_config;\n  if (base_texture) {\n    gl.bindTexture(gl.TEXTURE_2D, base_texture);\n  }\n  (0,wbase__WEBPACK_IMPORTED_MODULE_1__.set_uniforms)(gl, {\n    u_on_fbo: 1,\n    u_tex: 0\n  }, object_program);\n  for (var ii = framebuffers_offset; ii < framebuffers_n + framebuffers_offset; ++ii) {\n    // Setup to draw into one of the framebuffers.\n    wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.set_framebuffer(gl, wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo(object_program, ii), canvas.width, canvas.height);\n    draw_fn(object_config, scene_config);\n\n    // for the next draw, use as input texture (associated to gl.TEXTURE0) the texture we just rendered to.\n    gl.bindTexture(gl.TEXTURE_2D, wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo_texture(object_program, ii));\n  }\n  wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.set_framebuffer(gl, null, canvas.width, canvas.height);\n  (0,wbase__WEBPACK_IMPORTED_MODULE_1__.set_uniforms)(gl, {\n    u_on_fbo: -1\n  }, object_program);\n  return scene_config;\n}\nfunction _cleanup(scene_config) {\n  const\n  ////////////////////////\n  {\n    gl,\n    objects_to_draw\n  } = scene_config;\n  objects_to_draw.forEach(object_config => {\n    const {\n        object_program\n      } = object_config,\n      {\n        fbo_opts\n      } = object_program,\n      {\n        framebuffers_n,\n        framebuffers_offset\n      } = fbo_opts;\n    for (var ii = framebuffers_offset; ii < framebuffers_n + framebuffers_offset; ++ii) {\n      gl.deleteTexture(wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo_texture(object_program, ii));\n      gl.deleteFramebuffer(wbase__WEBPACK_IMPORTED_MODULE_1__.texture_data.get_fbo(object_program, ii));\n    }\n    object_program.fbo_data = null;\n  });\n  return scene_config;\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/logic.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get_active_logic: () => (/* binding */ get_active_logic),\n/* harmony export */   get_config: () => (/* binding */ get_config)\n/* harmony export */ });\nconst get_active_logic = _get_active_logic;\nconst get_config = _get_config;\nfunction _get_active_logic() {\n  return (() => {\n    let __ACTIVE = false;\n    return {\n      _set_active,\n      _get_active\n    };\n    function _set_active(_init, active, config) {\n      __ACTIVE = !!active;\n      return __ACTIVE ? _init(config) : config;\n    }\n    function _get_active() {\n      return __ACTIVE;\n    }\n  })();\n}\nfunction _get_config(cfg_getter_or_json, opts) {\n  const json = typeof cfg_getter_or_json === 'function' ? cfg_getter_or_json(opts) : cfg_getter_or_json.default || cfg_getter_or_json;\n  return JSON.parse(JSON.stringify(json));\n}\n\n//# sourceURL=webpack://wplug/./src/plugins/utils.js?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/shaders/frag.glsl":
/*!*******************************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/shaders/frag.glsl ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <antialiasing.fs_derivatives.frag> */\\n\\n// ' threshold ' is constant , ' value ' is smoothly varying\\nfloat aastep(float threshold , float value) {\\n    float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));\\n    // GLSL ' s fwidth ( value ) is abs ( dFdx ( value ) ) + abs ( dFdy ( value ) )\\n    return smoothstep(threshold - afwidth , threshold + afwidth , value);\\n}\\n\\nvec2 aastep2d(float threshold , vec2 value) {\\n    vec2 afwidth = 0.7 * fwidth(value);\\n    return smoothstep(threshold - afwidth , threshold + afwidth , value);\\n}\\n\\n//value in this case is typically a color\\nvec3 aastep3d(float threshold , vec3 value) {\\n    vec3 afwidth = 0.7 * fwidth(value);\\n    return smoothstep(threshold - afwidth , threshold + afwidth , value);\\n}\\n\\n/* </antialiasing.fs_derivatives.frag> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/shaders/vert.glsl":
/*!*******************************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/shaders/vert.glsl ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <antialiasing.fs_derivatives.vert> */\\n\\nvoid fs_derivatives_vert() {}\\n\\n/* </antialiasing.fs_derivatives.vert> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/antialiasing/postp_gaussian/shaders/frag.glsl":
/*!*******************************************************************!*\
  !*** ./src/plugins/antialiasing/postp_gaussian/shaders/frag.glsl ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <antialiasing.postp_gaussian.frag> */\\n\\n//from postprocessing.fbo we expect:\\n//uniform int u_on_fbo;\\n//uniform sampler2D u_tex;\\n\\nvec3 postp_gaussian_frag(vec3 base_color, vec2 texcoord, float resolution_dim, float divider) {\\n    vec3 col = base_color;\\n    \\n    float div = divider == 0. ? 16.0 : divider;\\n    float gaussian_kernel[9] = float[9](\\n        1.0 / div, 2.0 / div, 1.0 / div,\\n        2.0 / div, 4.0 / div, 2.0 / div,\\n        1.0 / div, 2.0 / div, 1.0 / div\\n    );\\n    \\n    float offset = 1.0 / max(resolution_dim, 0.01);\\n    vec2 offsets[9] = vec2[9](\\n        vec2(-offset, offset), // top-left\\n        vec2(0.0, offset), // top-center\\n        vec2(offset, offset), // top-right\\n        vec2(-offset, 0.0), // center-left\\n        vec2(0.0, 0.0), // center-center\\n        vec2(offset, 0.0), // center-right\\n        vec2(-offset, - offset), // bottom-left\\n        vec2(0.0, - offset), // bottom-center\\n        vec2(offset, - offset)// bottom-right\\n    );\\n    \\n    if (float(u_on_fbo) != 1.) {\\n        //we'll blur\\n        for(int i = 0; i < 9; i ++ ) {\\n            vec3 sample_tex = vec3(texture(u_tex, texcoord + offsets[i]));\\n            col += sample_tex * gaussian_kernel[i];\\n        }\\n    }\\n    return col;\\n}\\n\\n/* </antialiasing.postp_gaussian.frag> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/postp_gaussian/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/antialiasing/postp_gaussian/shaders/vert.glsl":
/*!*******************************************************************!*\
  !*** ./src/plugins/antialiasing/postp_gaussian/shaders/vert.glsl ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <antialiasing.postp_gaussian.vert> */\\n\\nvoid postp_gaussian_vert() {}\\n\\n/* </antialiasing.postp_gaussian.vert> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/postp_gaussian/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/base/model/shaders/frag.glsl":
/*!**************************************************!*\
  !*** ./src/plugins/base/model/shaders/frag.glsl ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <base.model.frag> */\\n\\n//Base-config Uniform Buffer Object\\nlayout(std140)uniform base_model_UBO {\\n    mat4 u_model;\\n    mat4 u_view;\\n    mat4 u_projection;\\n    float u_time;\\n    vec2 u_resolution;\\n    vec2 u_mmin_resolution;\\n    vec2 u_mmax_resolution;\\n    int u_should_remap_resolution;\\n};\\n\\nvec2 remap_resolution_in_01(vec2 fragCoord) {\\n    vec2 mp = fragCoord;\\n    if (u_should_remap_resolution == 1) {\\n        vec2 fc = fragCoord;\\n        vec2 c = u_mmin_resolution;\\n        vec2 d = u_mmax_resolution;\\n        \\n        fc = fc - c;        //from fc in [c, d] to ==> fc in [0, d - c]\\n        fc = fc / (d - c);  //from fc in [0, d - c] to ==> fc in [0, 1]\\n        mp = fc;\\n    }\\n    \\n    return mp;\\n}\\n\\nvec2 remap_resolution(vec2 fragCoord) {\\n    vec2 mp = fragCoord;\\n    if (u_should_remap_resolution == 1) {\\n        /*\\n        * hypothesis: fragCoord.xy in [[0, 0], [u_resolution.x, u_resolution.y]]\\n        * we want to map it in [[u_mmin_resolution.x, u_mmin_resolution.y], [u_max_resolution.x, u_mmax_resolution.y]]\\n        *\\n        * algorithm:\\n        * x in [a, b] ==> we want to find x' s.t. x' in [c, d]\\n        * ==> x - a                                 //in [0, b - a]\\n        * ==> (x - a) / (b - a)                     //in [0, 1]\\n        * ==> ((x - a) * (d - c)) / (b - a)         //in [0, (d - c)]\\n        * ==> c + (((x - a) * (d - c)) / (b - a))   //in [c, d]\\n        */\\n        vec2 fc = fragCoord;\\n        vec2 a = vec2(0.0);\\n        vec2 b = u_resolution;\\n        vec2 c = u_mmin_resolution;\\n        vec2 d = u_mmax_resolution;\\n        \\n        fc = fc - a;\\n        fc = fc / (b - a);\\n        fc = fc * (d - c);\\n        fc = fc + c;\\n        mp = fc;\\n    }\\n    \\n    return mp;\\n}\\n/* <//base.model.frag> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/base/model/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/base/model/shaders/vert.glsl":
/*!**************************************************!*\
  !*** ./src/plugins/base/model/shaders/vert.glsl ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <base.model.vert> */\\n\\n//Base-config Uniform Buffer Object\\nlayout(std140)uniform base_model_UBO {\\n    mat4 u_model;\\n    mat4 u_view;\\n    mat4 u_projection;\\n    float u_time;\\n    vec2 u_resolution;\\n    vec2 u_mmin_resolution;\\n    vec2 u_mmax_resolution;\\n    int u_should_remap_resolution;\\n};\\n\\nin vec3 a_position;\\nin vec3 a_normal;\\n\\nout vec4 normal;\\n\\n/* <//base.model.vert> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/base/model/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/geometry/quad/shaders/frag.glsl":
/*!*****************************************************!*\
  !*** ./src/plugins/geometry/quad/shaders/frag.glsl ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <geometry.quad.frag> */\\n\\nin vec2 texcoord;\\n\\nvoid geometry_quad_frag() {}\\n\\n/* <//geometry.quad.frag> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/geometry/quad/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/geometry/quad/shaders/vert.glsl":
/*!*****************************************************!*\
  !*** ./src/plugins/geometry/quad/shaders/vert.glsl ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <geometry.quad.vert> */\\n\\nin vec2 a_texcoord;\\nout vec2 texcoord;\\n\\nvoid geometry_quad_vert() {\\n    texcoord = a_texcoord;\\n}\\n\\n/* <//geometry.quad.vert> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/geometry/quad/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/shaders/frag.glsl":
/*!************************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/shaders/frag.glsl ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <lighting.blinn_phong.frag> */\\n\\n//max number of allowed lights\\nconst int MAX_LIGHTS_N = 8;\\n\\nlayout (std140) uniform lighting_blinn_phong_UBO {\\n    //material for the object\\n    float u_ka;\\n    float u_kd;\\n    float u_ks;\\n    \\n    vec3 u_ambient_color;\\n    float u_ambient_intensity;\\n    \\n    int u_nlights;\\n    \\n    float u_light_intensities[MAX_LIGHTS_N];\\n    float u_light_specular_exp[MAX_LIGHTS_N];\\n    vec3 u_light_positions[MAX_LIGHTS_N];\\n    vec3 u_light_colors[MAX_LIGHTS_N];\\n};\\n\\nin vec4 normal;\\nin vec3 light_dirs[MAX_LIGHTS_N];\\nin vec3 light_half_vects[MAX_LIGHTS_N];\\n\\nvec3 compute_lighting_frag(vec3 start_color) {\\n    vec3 color = start_color;\\n    vec3 n = normalize(normal.xyz);\\n    \\n    color += u_ka * u_ambient_color;\\n    \\n    for(int i = 0; i < int(u_nlights); i ++ ) {\\n        vec3 l = normalize(light_dirs[i]);\\n        vec3 h = normalize(light_half_vects[i]);\\n        float I = u_light_intensities[i];\\n        vec3 Lc = u_light_colors[i];\\n        \\n        color += (\\n            (u_kd * I*max(0.0, dot(n, l)) * Lc) +\\n            (u_ks * I*pow(max(0.0, dot(n, h)), u_light_specular_exp[i]) * Lc)\\n        );\\n    }\\n    \\n    return color;\\n}\\n\\n/* </lighting.blinn_phong.frag> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/shaders/vert.glsl":
/*!************************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/shaders/vert.glsl ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <lighting.blinn_phong.vert> */\\n\\n//we'll use as inspiration the approach described here\\n//https://stackoverflow.com/a/62630376\\n\\nconst int MAX_LIGHTS_N = 8;\\n\\nlayout (std140) uniform lighting_blinn_phong_UBO {\\n    //material for the object\\n    float u_ka;\\n    float u_kd;\\n    float u_ks;\\n    \\n    vec3 u_ambient_color;\\n    float u_ambient_intensity;\\n    \\n    int u_nlights;\\n    \\n    float u_light_intensities[MAX_LIGHTS_N];\\n    float u_light_specular_exp[MAX_LIGHTS_N];\\n    vec3 u_light_positions[MAX_LIGHTS_N];\\n    vec3 u_light_colors[MAX_LIGHTS_N];\\n};\\n\\nout vec3 light_dirs[MAX_LIGHTS_N];\\nout vec3 light_half_vects[MAX_LIGHTS_N];\\n\\nint compute_lighting_vert(mat4 view_m, mat4 modelview_m) {\\n    vec4 view_pos = modelview_m * vec4(a_position, 1.0);\\n    \\n    for(int i = 0; i < int(u_nlights); i ++ ) {\\n        vec4 lpos = view_m * vec4(u_light_positions[i], 1.0);\\n        \\n        light_dirs[i] = normalize(lpos.xyz - view_pos.xyz);\\n        \\n        vec3 pos2eye = vec3(-view_pos.xyz);\\n        light_half_vects[i] = normalize(pos2eye + light_dirs[i]);\\n    }\\n    \\n    mat4 Mti = transpose(inverse(modelview_m));\\n    \\n    //normal and a_normal from \\\"base.model\\\"\\n    normal = (Mti * vec4(a_normal, 0.0));\\n    \\n    return 1;\\n}\\n\\n/* </lighting.blinn_phong.vert> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/shaders/frag.glsl":
/*!**********************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/shaders/frag.glsl ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <postprocessing.fbo.frag> */\\n\\n//we're not using a uniform block here since sampler2D type is not supported and then an ubo for a single float\\n//is not so useful :)\\nuniform int u_on_fbo;\\nuniform sampler2D u_tex;\\n\\n/* </postprocessing.fbo.frag> */\\n\"\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/shaders/frag.glsl?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/shaders/vert.glsl":
/*!**********************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/shaders/vert.glsl ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = \"/* <postprocessing.fbo.vert> */\\n\\n//we're not using a uniform block here since sampler2D type is not supported and then an ubo for a single float\\n//is not so useful :)\\nuniform int u_on_fbo;\\nuniform sampler2D u_tex;\\n\\n//none needed here\\nvoid fbo_vert() {}\\n\\n/* </postprocessing.fbo.vert> */\"\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/shaders/vert.glsl?");

/***/ }),

/***/ "./src/plugins/antialiasing/fs_derivatives/config.json":
/*!*************************************************************!*\
  !*** ./src/plugins/antialiasing/fs_derivatives/config.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"attributes\":{},\"uniforms\":{}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/fs_derivatives/config.json?");

/***/ }),

/***/ "./src/plugins/antialiasing/postp_gaussian/config.json":
/*!*************************************************************!*\
  !*** ./src/plugins/antialiasing/postp_gaussian/config.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"attributes\":{},\"uniforms\":{}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/antialiasing/postp_gaussian/config.json?");

/***/ }),

/***/ "./src/plugins/base/model/config.json":
/*!********************************************!*\
  !*** ./src/plugins/base/model/config.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"attributes\":{\"a_position\":{\"name\":\"a_position\",\"is_position\":true,\"opts\":{\"size\":3,\"data_type\":\"FLOAT\",\"normalized\":false,\"stride\":16,\"offset\":0}},\"a_normal\":{\"name\":\"a_normal\",\"is_normals\":true,\"opts\":{\"size\":4,\"data_type\":\"BYTE\",\"normalized\":true,\"stride\":16,\"offset\":12}}},\"uniforms\":{\"u_time\":{\"name\":\"u_time\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"1f\"}},\"u_model\":{\"name\":\"u_model\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"Matrix4fv\"}},\"u_view\":{\"name\":\"u_view\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"Matrix4fv\"}},\"u_projection\":{\"name\":\"u_projection\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"Matrix4fv\"}},\"u_resolution\":{\"name\":\"u_resolution\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"2fv\"}},\"u_mmin_resolution\":{\"name\":\"u_mmin_resolution\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"2fv\"}},\"u_mmax_resolution\":{\"name\":\"u_mmax_resolution\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"2fv\"}},\"u_should_remap_resolution\":{\"name\":\"u_should_remap_resolution\",\"ubo\":\"base_model_UBO\",\"opts\":{\"fn\":\"1i\"}}}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/base/model/config.json?");

/***/ }),

/***/ "./src/plugins/lighting/blinn_phong/config.json":
/*!******************************************************!*\
  !*** ./src/plugins/lighting/blinn_phong/config.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"attributes\":{},\"uniforms\":{\"u_nlights\":{\"name\":\"u_nlights\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"1i\"}},\"u_ka\":{\"name\":\"u_ka\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"1f\"}},\"u_kd\":{\"name\":\"u_kd\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"1f\"}},\"u_ks\":{\"name\":\"u_ks\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"1f\"}},\"u_ambient_color\":{\"name\":\"u_ambient_color\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"3fv\"}},\"u_ambient_intensity\":{\"name\":\"u_ambient_intensity\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"1f\"}},\"u_light_positions\":{\"name\":\"u_light_positions\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_colors\":{\"name\":\"u_light_colors\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"3fv\"}},\"u_light_intensities\":{\"name\":\"u_light_intensities\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"1fv\"}},\"u_light_specular_exp\":{\"name\":\"u_light_specular_exp\",\"ubo\":\"lighting_blinn_phong_UBO\",\"opts\":{\"fn\":\"1fv\"}}}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/lighting/blinn_phong/config.json?");

/***/ }),

/***/ "./src/plugins/postprocessing/fbo/config.json":
/*!****************************************************!*\
  !*** ./src/plugins/postprocessing/fbo/config.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"attributes\":{},\"uniforms\":{\"u_on_fbo\":{\"name\":\"u_on_fbo\",\"opts\":{\"fn\":\"1i\"}},\"u_tex\":{\"name\":\"u_tex\",\"opts\":{\"fn\":\"1i\"}}}}');\n\n//# sourceURL=webpack://wplug/./src/plugins/postprocessing/fbo/config.json?");

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