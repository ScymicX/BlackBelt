(function(){"use strict";function rt(a,t,e){return globalThis.__pinmameQuery?.(a,t,e)??0}function q(){return globalThis.__pinmameAudio?.()??new Float32Array}function Z(){return globalThis.__pinmameNvram?.()??new Uint8Array}var it=Object.freeze({__proto__:null,audio:q,nvram:Z,q:rt});function at(a,t){const e=F(a,p.__wbindgen_malloc,p.__wbindgen_realloc),n=h,r=Y(t,p.__wbindgen_malloc),i=h;p.addRom(e,n,r,i)}function st(a,t){const e=F(a,p.__wbindgen_malloc,p.__wbindgen_realloc),n=h,r=F(t,p.__wbindgen_malloc,p.__wbindgen_realloc),i=h;p.addScriptLibrary(e,n,r,i)}function lt(a,t){const e=Y(a,p.__wbindgen_malloc),n=h,r=p.bakeGi(e,n,t);if(r[2])throw P(r[1]);return P(r[0])}function ot(){return{__proto__:null,"./vpw_player_bg.js":{__proto__:null,__wbg_Error_408e67f47ca7b58b:function(t,e){return Error(S(t,e))},__wbg_Window_afcc911b2f9c92e2:function(t){return t.Window},__wbg_WorkerGlobalScope_5d19ebc889ff397e:function(t){return t.WorkerGlobalScope},__wbg___wbindgen_boolean_get_c9c83ebd41b34df3:function(t){const e=t,n=typeof e=="boolean"?e:void 0;return c(n)?16777215:n?1:0},__wbg___wbindgen_debug_string_a57024b9c6e4a48b:function(t,e){const n=X(e),r=F(n,p.__wbindgen_malloc,p.__wbindgen_realloc),i=h;y().setInt32(t+4,i,!0),y().setInt32(t+0,r,!0)},__wbg___wbindgen_is_falsy_b7464e97ddc1b7a4:function(t){return!t},__wbg___wbindgen_is_function_5e4570eb24ffa122:function(t){return typeof t=="function"},__wbg___wbindgen_is_null_7d13f41e1a2d5140:function(t){return t===null},__wbg___wbindgen_is_string_e6f02f0ea5f20a32:function(t){return typeof t=="string"},__wbg___wbindgen_is_undefined_6cff064c44e0d823:function(t){return t===void 0},__wbg___wbindgen_number_get_136b9679cab35cfb:function(t,e){const n=e,r=typeof n=="number"?n:void 0;y().setFloat64(t+8,c(r)?0:r,!0),y().setInt32(t+0,!c(r),!0)},__wbg___wbindgen_string_get_d154f1e671052120:function(t,e){const n=e,r=typeof n=="string"?n:void 0;var i=c(r)?0:F(r,p.__wbindgen_malloc,p.__wbindgen_realloc),s=h;y().setInt32(t+4,s,!0),y().setInt32(t+0,i,!0)},__wbg___wbindgen_throw_bb96b2010945f0bc:function(t,e){throw new Error(S(t,e))},__wbg__wbg_cb_unref_be22cc64ae6946a0:function(t){t._wbg_cb_unref()},__wbg_activeTexture_8e65ac2e8d488478:function(t,e){t.activeTexture(e>>>0)},__wbg_activeTexture_fd6262686afdbe2f:function(t,e){t.activeTexture(e>>>0)},__wbg_attachShader_26751604f00d1f1b:function(t,e,n){t.attachShader(e,n)},__wbg_attachShader_61baa58641ea664a:function(t,e,n){t.attachShader(e,n)},__wbg_audio_ad72de19fe332bd1:function(t){const e=q(),n=Ut(e,p.__wbindgen_malloc),r=h;y().setInt32(t+4,r,!0),y().setInt32(t+0,n,!0)},__wbg_beginQuery_444a51812fdbf958:function(t,e,n){t.beginQuery(e>>>0,n)},__wbg_beginRenderPass_aa22c432e793359a:function(){return u(function(t,e){return t.beginRenderPass(e)},arguments)},__wbg_bindAttribLocation_1e182a50e1556784:function(t,e,n,r,i){t.bindAttribLocation(e,n>>>0,S(r,i))},__wbg_bindAttribLocation_9cc5ab15df1d042d:function(t,e,n,r,i){t.bindAttribLocation(e,n>>>0,S(r,i))},__wbg_bindBufferRange_5a8d28ef662d8746:function(t,e,n,r,i,s){t.bindBufferRange(e>>>0,n>>>0,r,i,s)},__wbg_bindBuffer_1fb12d083d2a22af:function(t,e,n){t.bindBuffer(e>>>0,n)},__wbg_bindBuffer_31cb159ab5dc5ba7:function(t,e,n){t.bindBuffer(e>>>0,n)},__wbg_bindFramebuffer_32ce672324ce8a16:function(t,e,n){t.bindFramebuffer(e>>>0,n)},__wbg_bindFramebuffer_e620067056f9316f:function(t,e,n){t.bindFramebuffer(e>>>0,n)},__wbg_bindRenderbuffer_765cffe23b9c36f7:function(t,e,n){t.bindRenderbuffer(e>>>0,n)},__wbg_bindRenderbuffer_9b313332bd7aa049:function(t,e,n){t.bindRenderbuffer(e>>>0,n)},__wbg_bindSampler_28b0a4c34c6f96d4:function(t,e,n){t.bindSampler(e>>>0,n)},__wbg_bindTexture_4c54ffb64c33564f:function(t,e,n){t.bindTexture(e>>>0,n)},__wbg_bindTexture_6fe86367f6be8f59:function(t,e,n){t.bindTexture(e>>>0,n)},__wbg_bindVertexArrayOES_96a4898652eac0d8:function(t,e){t.bindVertexArrayOES(e)},__wbg_bindVertexArray_0185d931d681d806:function(t,e){t.bindVertexArray(e)},__wbg_blendColor_402572bc445d3ac3:function(t,e,n,r,i){t.blendColor(e,n,r,i)},__wbg_blendColor_af92968fedc595b1:function(t,e,n,r,i){t.blendColor(e,n,r,i)},__wbg_blendEquationSeparate_5ab35e46e7f48717:function(t,e,n){t.blendEquationSeparate(e>>>0,n>>>0)},__wbg_blendEquationSeparate_9ad084e8266b8e3c:function(t,e,n){t.blendEquationSeparate(e>>>0,n>>>0)},__wbg_blendEquation_4bab539169e7e865:function(t,e){t.blendEquation(e>>>0)},__wbg_blendEquation_502ed4c6af5bf8ee:function(t,e){t.blendEquation(e>>>0)},__wbg_blendFuncSeparate_2e4d259caaba517e:function(t,e,n,r,i){t.blendFuncSeparate(e>>>0,n>>>0,r>>>0,i>>>0)},__wbg_blendFuncSeparate_66688b15ecc6529c:function(t,e,n,r,i){t.blendFuncSeparate(e>>>0,n>>>0,r>>>0,i>>>0)},__wbg_blendFunc_b7f382e97db2fd5b:function(t,e,n){t.blendFunc(e>>>0,n>>>0)},__wbg_blendFunc_d908118bbb181928:function(t,e,n){t.blendFunc(e>>>0,n>>>0)},__wbg_blitFramebuffer_20b32de88a3097b1:function(t,e,n,r,i,s,l,o,m,d,w){t.blitFramebuffer(e,n,r,i,s,l,o,m,d>>>0,w>>>0)},__wbg_bufferData_1dd2939db2d88d82:function(t,e,n,r){t.bufferData(e>>>0,n,r>>>0)},__wbg_bufferData_69a44ade0864ba2b:function(t,e,n,r){t.bufferData(e>>>0,n,r>>>0)},__wbg_bufferData_6c10d3e07ec9a2a9:function(t,e,n,r){t.bufferData(e>>>0,n,r>>>0)},__wbg_bufferData_d359d1c797b8e8b7:function(t,e,n,r){t.bufferData(e>>>0,n,r>>>0)},__wbg_bufferSubData_4f6063d50303b61d:function(t,e,n,r){t.bufferSubData(e>>>0,n,r)},__wbg_bufferSubData_64b69f468a0d3048:function(t,e,n,r){t.bufferSubData(e>>>0,n,r)},__wbg_call_35dba3c747ad7521:function(){return u(function(t,e,n){return t.call(e,n)},arguments)},__wbg_clearBufferfv_ccbb43fb098f1912:function(t,e,n,r,i){t.clearBufferfv(e>>>0,n,v(r,i))},__wbg_clearBufferiv_8b1c68299632478f:function(t,e,n,r,i){t.clearBufferiv(e>>>0,n,T(r,i))},__wbg_clearBufferuiv_cd72147d09d432e8:function(t,e,n,r,i){t.clearBufferuiv(e>>>0,n,I(r,i))},__wbg_clearDepth_887000180cc9eb2e:function(t,e){t.clearDepth(e)},__wbg_clearDepth_c4897278afd894a9:function(t,e){t.clearDepth(e)},__wbg_clearStencil_3d39149452a2f872:function(t,e){t.clearStencil(e)},__wbg_clearStencil_96978923f9c6fb1f:function(t,e){t.clearStencil(e)},__wbg_clear_20f7614cd20df101:function(t,e){t.clear(e>>>0)},__wbg_clear_332f205d7e52df87:function(t,e){t.clear(e>>>0)},__wbg_clientHeight_834c029be3d903a7:function(t){return t.clientHeight},__wbg_clientWaitSync_8800b42d1c534e00:function(t,e,n,r){return t.clientWaitSync(e,n>>>0,r>>>0)},__wbg_clientWidth_ad03e8eb6c2b0c56:function(t){return t.clientWidth},__wbg_colorMask_5646450fe1f1b723:function(t,e,n,r,i){t.colorMask(e!==0,n!==0,r!==0,i!==0)},__wbg_colorMask_8fca508f44773327:function(t,e,n,r,i){t.colorMask(e!==0,n!==0,r!==0,i!==0)},__wbg_compileShader_4ede19e4fc1bebce:function(t,e){t.compileShader(e)},__wbg_compileShader_ac457ada9042f08e:function(t,e){t.compileShader(e)},__wbg_compressedTexSubImage2D_0968a85385b7c463:function(t,e,n,r,i,s,l,o,m,d){t.compressedTexSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m,d)},__wbg_compressedTexSubImage2D_45987d7f0210d36f:function(t,e,n,r,i,s,l,o,m){t.compressedTexSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m)},__wbg_compressedTexSubImage2D_a39446fce0a68ad9:function(t,e,n,r,i,s,l,o,m){t.compressedTexSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m)},__wbg_compressedTexSubImage3D_3da84908295b8ec3:function(t,e,n,r,i,s,l,o,m,d,w,C){t.compressedTexSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w,C)},__wbg_compressedTexSubImage3D_c0bc017057e3942a:function(t,e,n,r,i,s,l,o,m,d,w){t.compressedTexSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w)},__wbg_configure_0e4789c0f6b35c8e:function(){return u(function(t,e){t.configure(e)},arguments)},__wbg_copyBufferSubData_e5dc2aab90456f99:function(t,e,n,r,i,s){t.copyBufferSubData(e>>>0,n>>>0,r,i,s)},__wbg_copyTexSubImage2D_188da734d1c8aa07:function(t,e,n,r,i,s,l,o,m){t.copyTexSubImage2D(e>>>0,n,r,i,s,l,o,m)},__wbg_copyTexSubImage2D_84d99fa40fabace0:function(t,e,n,r,i,s,l,o,m){t.copyTexSubImage2D(e>>>0,n,r,i,s,l,o,m)},__wbg_copyTexSubImage3D_89064e67340a38b3:function(t,e,n,r,i,s,l,o,m,d){t.copyTexSubImage3D(e>>>0,n,r,i,s,l,o,m,d)},__wbg_createBindGroupLayout_49a7e2b3d076afcf:function(){return u(function(t,e){return t.createBindGroupLayout(e)},arguments)},__wbg_createBindGroup_655c6e6c0258530e:function(t,e){return t.createBindGroup(e)},__wbg_createBuffer_0726dd2ab09ea1d2:function(){return u(function(t,e){return t.createBuffer(e)},arguments)},__wbg_createBuffer_44b37c222efbd326:function(t){const e=t.createBuffer();return c(e)?0:b(e)},__wbg_createBuffer_af6c411fe2b091f8:function(t){const e=t.createBuffer();return c(e)?0:b(e)},__wbg_createCommandEncoder_ec1f40f0cb4d09df:function(t,e){return t.createCommandEncoder(e)},__wbg_createFramebuffer_4dc2fb6bd93463a5:function(t){const e=t.createFramebuffer();return c(e)?0:b(e)},__wbg_createFramebuffer_e6d8917bf9291c65:function(t){const e=t.createFramebuffer();return c(e)?0:b(e)},__wbg_createPipelineLayout_2c8cd4528b06c108:function(t,e){return t.createPipelineLayout(e)},__wbg_createProgram_2ebbd17565e0ede7:function(t){const e=t.createProgram();return c(e)?0:b(e)},__wbg_createProgram_81b37242eadef893:function(t){const e=t.createProgram();return c(e)?0:b(e)},__wbg_createQuery_5ef5edffbd3a678d:function(t){const e=t.createQuery();return c(e)?0:b(e)},__wbg_createRenderPipeline_cf98d4d699bfb03c:function(){return u(function(t,e){return t.createRenderPipeline(e)},arguments)},__wbg_createRenderbuffer_be624f81e06a0cfd:function(t){const e=t.createRenderbuffer();return c(e)?0:b(e)},__wbg_createRenderbuffer_cd2638d5dda9c277:function(t){const e=t.createRenderbuffer();return c(e)?0:b(e)},__wbg_createSampler_c8ffb3c8d565f704:function(t,e){return t.createSampler(e)},__wbg_createSampler_f1aedbf47c21745a:function(t){const e=t.createSampler();return c(e)?0:b(e)},__wbg_createShaderModule_2e44fc7677c6288b:function(t,e){return t.createShaderModule(e)},__wbg_createShader_9a8e5f335caac850:function(t,e){const n=t.createShader(e>>>0);return c(n)?0:b(n)},__wbg_createShader_f8638cf4c19a1d2d:function(t,e){const n=t.createShader(e>>>0);return c(n)?0:b(n)},__wbg_createTexture_1bac74c999b8a48e:function(){return u(function(t,e){return t.createTexture(e)},arguments)},__wbg_createTexture_42c791197006c64a:function(t){const e=t.createTexture();return c(e)?0:b(e)},__wbg_createTexture_c74740f68b5c2a93:function(t){const e=t.createTexture();return c(e)?0:b(e)},__wbg_createVertexArrayOES_f7e8c94194c4e075:function(t){const e=t.createVertexArrayOES();return c(e)?0:b(e)},__wbg_createVertexArray_abd18ded26b75653:function(t){const e=t.createVertexArray();return c(e)?0:b(e)},__wbg_createView_ceaf2f5881adbd34:function(){return u(function(t,e){return t.createView(e)},arguments)},__wbg_cullFace_053fc24c214cae86:function(t,e){t.cullFace(e>>>0)},__wbg_cullFace_94e1cd382e8b654f:function(t,e){t.cullFace(e>>>0)},__wbg_debug_3853dbaf0bca30f9:function(t){console.debug(t)},__wbg_deleteBuffer_42bd497a20b76d88:function(t,e){t.deleteBuffer(e)},__wbg_deleteBuffer_50f20219abee4d05:function(t,e){t.deleteBuffer(e)},__wbg_deleteFramebuffer_073235a01c2a0a28:function(t,e){t.deleteFramebuffer(e)},__wbg_deleteFramebuffer_07fcc16563d17920:function(t,e){t.deleteFramebuffer(e)},__wbg_deleteProgram_0191056307686073:function(t,e){t.deleteProgram(e)},__wbg_deleteProgram_ee7f1925cb856dc2:function(t,e){t.deleteProgram(e)},__wbg_deleteQuery_4624acbf9cbfc6e2:function(t,e){t.deleteQuery(e)},__wbg_deleteRenderbuffer_570117534d9608a1:function(t,e){t.deleteRenderbuffer(e)},__wbg_deleteRenderbuffer_ba4a805dfac20358:function(t,e){t.deleteRenderbuffer(e)},__wbg_deleteSampler_527e8d31f81669d9:function(t,e){t.deleteSampler(e)},__wbg_deleteShader_2558228a4ef7373e:function(t,e){t.deleteShader(e)},__wbg_deleteShader_413961eb94f5c67c:function(t,e){t.deleteShader(e)},__wbg_deleteSync_11f80510355180d6:function(t,e){t.deleteSync(e)},__wbg_deleteTexture_0ccd278d6db819ff:function(t,e){t.deleteTexture(e)},__wbg_deleteTexture_aadf9716c394d7be:function(t,e){t.deleteTexture(e)},__wbg_deleteVertexArrayOES_e43a9a425587d52b:function(t,e){t.deleteVertexArrayOES(e)},__wbg_deleteVertexArray_106030034355d246:function(t,e){t.deleteVertexArray(e)},__wbg_depthFunc_6c6f948417f5bde4:function(t,e){t.depthFunc(e>>>0)},__wbg_depthFunc_bb3152f635a60ff2:function(t,e){t.depthFunc(e>>>0)},__wbg_depthMask_4e0075e07739355b:function(t,e){t.depthMask(e!==0)},__wbg_depthMask_bdc57b9e64c6b4d8:function(t,e){t.depthMask(e!==0)},__wbg_depthRange_0acaf3031a92d51d:function(t,e,n){t.depthRange(e,n)},__wbg_depthRange_e2d0a59942d33efd:function(t,e,n){t.depthRange(e,n)},__wbg_description_02485704e69b1e7f:function(t,e){const n=e.description,r=F(n,p.__wbindgen_malloc,p.__wbindgen_realloc),i=h;y().setInt32(t+4,i,!0),y().setInt32(t+0,r,!0)},__wbg_destroy_fe937f756bf8df37:function(t){t.destroy()},__wbg_devicePixelRatio_e60a2d12bfd01f78:function(t){return t.devicePixelRatio},__wbg_disableVertexAttribArray_98752beca840c3da:function(t,e){t.disableVertexAttribArray(e>>>0)},__wbg_disableVertexAttribArray_aee51b7f1a8ef4cc:function(t,e){t.disableVertexAttribArray(e>>>0)},__wbg_disable_2ad210ba5315372a:function(t,e){t.disable(e>>>0)},__wbg_disable_bb1df5a6c75eaecd:function(t,e){t.disable(e>>>0)},__wbg_document_ac38448dbfd31a57:function(t){const e=t.document;return c(e)?0:b(e)},__wbg_drawArraysInstancedANGLE_cb3b87925641d5b9:function(t,e,n,r,i){t.drawArraysInstancedANGLE(e>>>0,n,r,i)},__wbg_drawArraysInstanced_45317b22bbf7ffe8:function(t,e,n,r,i){t.drawArraysInstanced(e>>>0,n,r,i)},__wbg_drawArrays_02c354e377984441:function(t,e,n,r){t.drawArrays(e>>>0,n,r)},__wbg_drawArrays_b2004a40c212065c:function(t,e,n,r){t.drawArrays(e>>>0,n,r)},__wbg_drawBuffersWEBGL_0b4935290cba977e:function(t,e){t.drawBuffersWEBGL(e)},__wbg_drawBuffers_f07f796e50bb0077:function(t,e){t.drawBuffers(e)},__wbg_drawElementsInstancedANGLE_8179cb41f5862831:function(t,e,n,r,i,s){t.drawElementsInstancedANGLE(e>>>0,n,r>>>0,i,s)},__wbg_drawElementsInstanced_07717eeb890435e9:function(t,e,n,r,i,s){t.drawElementsInstanced(e>>>0,n,r>>>0,i,s)},__wbg_drawIndexed_d31913e79d58fbac:function(t,e,n,r,i,s){t.drawIndexed(e>>>0,n>>>0,r>>>0,i,s>>>0)},__wbg_draw_6877f98847e1e36c:function(t,e,n,r,i){t.draw(e>>>0,n>>>0,r>>>0,i>>>0)},__wbg_enableVertexAttribArray_90f1a9f570379c36:function(t,e){t.enableVertexAttribArray(e>>>0)},__wbg_enableVertexAttribArray_b072ffcbe4f26e2b:function(t,e){t.enableVertexAttribArray(e>>>0)},__wbg_enable_17346ff3b2257cae:function(t,e){t.enable(e>>>0)},__wbg_enable_db1e433ea267f29b:function(t,e){t.enable(e>>>0)},__wbg_endQuery_0434371d408e59b7:function(t,e){t.endQuery(e>>>0)},__wbg_end_f99ebed53d4e198a:function(t){t.end()},__wbg_error_622f41c5c32a13db:function(t){return t.error},__wbg_error_757e9472f8410341:function(t,e){let n,r;try{n=t,r=e,console.error(S(t,e))}finally{p.__wbindgen_free(n,r,1)}},__wbg_error_dd408a7b3cb542dd:function(t){console.error(t)},__wbg_features_2b07a28fe18ad0ce:function(t){return t.features},__wbg_fenceSync_57ab30f550e5a5a2:function(t,e,n){const r=t.fenceSync(e>>>0,n>>>0);return c(r)?0:b(r)},__wbg_finish_4d91de5e927dd13f:function(t,e){return t.finish(e)},__wbg_finish_6e06b68ab68cd9f6:function(t){return t.finish()},__wbg_finish_81c066eb195fc8a9:function(t){t.finish()},__wbg_finish_94865fee5c90da6b:function(t){t.finish()},__wbg_flush_2a8fa6766a4f3ada:function(t){t.flush()},__wbg_flush_918ffb9cfebcbaab:function(t){t.flush()},__wbg_framebufferRenderbuffer_5736a8553be94035:function(t,e,n,r,i){t.framebufferRenderbuffer(e>>>0,n>>>0,r>>>0,i)},__wbg_framebufferRenderbuffer_e0c873b9f296443d:function(t,e,n,r,i){t.framebufferRenderbuffer(e>>>0,n>>>0,r>>>0,i)},__wbg_framebufferTexture2D_8584b49a205ffe5b:function(t,e,n,r,i,s){t.framebufferTexture2D(e>>>0,n>>>0,r>>>0,i,s)},__wbg_framebufferTexture2D_9abab99d6209666a:function(t,e,n,r,i,s){t.framebufferTexture2D(e>>>0,n>>>0,r>>>0,i,s)},__wbg_framebufferTextureLayer_e236352620170c5a:function(t,e,n,r,i,s){t.framebufferTextureLayer(e>>>0,n>>>0,r,i,s)},__wbg_framebufferTextureMultiviewOVR_9b89dd83134856d3:function(t,e,n,r,i,s,l){t.framebufferTextureMultiviewOVR(e>>>0,n>>>0,r,i,s,l)},__wbg_from_74f3d90e0ff11240:function(t){return Array.from(t)},__wbg_frontFace_188579d7bba462b1:function(t,e){t.frontFace(e>>>0)},__wbg_frontFace_19294c82ae89fa71:function(t,e){t.frontFace(e>>>0)},__wbg_getBufferSubData_d1d7ad69c40ea085:function(t,e,n,r){t.getBufferSubData(e>>>0,n,r)},__wbg_getContext_123ddade3a0fb2f5:function(){return u(function(t,e,n,r){const i=t.getContext(S(e,n),r);return c(i)?0:b(i)},arguments)},__wbg_getContext_53c8c42beb820370:function(){return u(function(t,e,n,r){const i=t.getContext(S(e,n),r);return c(i)?0:b(i)},arguments)},__wbg_getContext_71c33f14b63da593:function(){return u(function(t,e,n){const r=t.getContext(S(e,n));return c(r)?0:b(r)},arguments)},__wbg_getContext_c5236e0057b35024:function(){return u(function(t,e,n){const r=t.getContext(S(e,n));return c(r)?0:b(r)},arguments)},__wbg_getCurrentTexture_20714d1bd9051cab:function(){return u(function(t){return t.getCurrentTexture()},arguments)},__wbg_getElementById_1637d6969b003cda:function(t,e,n){const r=t.getElementById(S(e,n));return c(r)?0:b(r)},__wbg_getExtension_8e8c3be603d4f5ce:function(){return u(function(t,e,n){const r=t.getExtension(S(e,n));return c(r)?0:b(r)},arguments)},__wbg_getIndexedParameter_fa6cca29d50de787:function(){return u(function(t,e,n){return t.getIndexedParameter(e>>>0,n>>>0)},arguments)},__wbg_getMappedRange_d0bf3141224111b6:function(){return u(function(t,e,n){return t.getMappedRange(e,n)},arguments)},__wbg_getParameter_19325d4aa1b66856:function(){return u(function(t,e){return t.getParameter(e>>>0)},arguments)},__wbg_getParameter_7ddbe9f9606f6a80:function(){return u(function(t,e){return t.getParameter(e>>>0)},arguments)},__wbg_getPreferredCanvasFormat_8b57039d1801a506:function(t){const e=t.getPreferredCanvasFormat();return(_.indexOf(e)+1||102)-1},__wbg_getProgramInfoLog_50a07d12dddd0da6:function(t,e,n){const r=e.getProgramInfoLog(n);var i=c(r)?0:F(r,p.__wbindgen_malloc,p.__wbindgen_realloc),s=h;y().setInt32(t+4,s,!0),y().setInt32(t+0,i,!0)},__wbg_getProgramInfoLog_72665662cf78b5a2:function(t,e,n){const r=e.getProgramInfoLog(n);var i=c(r)?0:F(r,p.__wbindgen_malloc,p.__wbindgen_realloc),s=h;y().setInt32(t+4,s,!0),y().setInt32(t+0,i,!0)},__wbg_getProgramParameter_1f5cceb73030e823:function(t,e,n){return t.getProgramParameter(e,n>>>0)},__wbg_getProgramParameter_41e1ea6f52a71ba5:function(t,e,n){return t.getProgramParameter(e,n>>>0)},__wbg_getQueryParameter_fa2ce36cfdedc862:function(t,e,n){return t.getQueryParameter(e,n>>>0)},__wbg_getShaderInfoLog_337a0567e83283d1:function(t,e,n){const r=e.getShaderInfoLog(n);var i=c(r)?0:F(r,p.__wbindgen_malloc,p.__wbindgen_realloc),s=h;y().setInt32(t+4,s,!0),y().setInt32(t+0,i,!0)},__wbg_getShaderInfoLog_663a9b136ab42b32:function(t,e,n){const r=e.getShaderInfoLog(n);var i=c(r)?0:F(r,p.__wbindgen_malloc,p.__wbindgen_realloc),s=h;y().setInt32(t+4,s,!0),y().setInt32(t+0,i,!0)},__wbg_getShaderParameter_95d4ad40668ee798:function(t,e,n){return t.getShaderParameter(e,n>>>0)},__wbg_getShaderParameter_9e9aa18598294f3b:function(t,e,n){return t.getShaderParameter(e,n>>>0)},__wbg_getSupportedExtensions_63e3eaba880055c5:function(t){const e=t.getSupportedExtensions();return c(e)?0:b(e)},__wbg_getSupportedProfiles_7cd826b4eff5e8fc:function(t){const e=t.getSupportedProfiles();return c(e)?0:b(e)},__wbg_getSyncParameter_3eb3ecefa061c5ee:function(t,e,n){return t.getSyncParameter(e,n>>>0)},__wbg_getUniformBlockIndex_78264d4d94f8252d:function(t,e,n,r){return t.getUniformBlockIndex(e,S(n,r))},__wbg_getUniformLocation_11fd99fee70965dc:function(t,e,n,r){const i=t.getUniformLocation(e,S(n,r));return c(i)?0:b(i)},__wbg_getUniformLocation_c493d2f5f1a6213d:function(t,e,n,r){const i=t.getUniformLocation(e,S(n,r));return c(i)?0:b(i)},__wbg_get_36debceb6d43d7a1:function(t,e){const n=t[e>>>0];return c(n)?0:b(n)},__wbg_get_971a0c45d172643f:function(){return u(function(t,e){return Reflect.get(t,e)},arguments)},__wbg_get_unchecked_e20b893aeafc3fca:function(t,e){return t[e>>>0]},__wbg_gpu_2ccc250735d24a2a:function(t){return t.gpu},__wbg_has_0c97053e877f47cc:function(t,e,n){return t.has(S(e,n))},__wbg_height_e56f6fb197710e09:function(t){return t.height},__wbg_includes_a4b83ade703cb80b:function(t,e,n){return t.includes(e,n)},__wbg_info_726982aff9befe16:function(t){console.info(t)},__wbg_info_cf0d9a286850cd24:function(t){return t.info},__wbg_instanceof_GpuOutOfMemoryError_6429c750997f1c8d:function(t){let e;try{e=t instanceof GPUOutOfMemoryError}catch{e=!1}return e},__wbg_instanceof_GpuValidationError_75fa3611f065f4df:function(t){let e;try{e=t instanceof GPUValidationError}catch{e=!1}return e},__wbg_instanceof_HtmlCanvasElement_327e7f7530c72bbd:function(t){let e;try{e=t instanceof HTMLCanvasElement}catch{e=!1}return e},__wbg_instanceof_Performance_8338dc22fb86fd22:function(t){let e;try{e=t instanceof Performance}catch{e=!1}return e},__wbg_instanceof_WebGl2RenderingContext_e27143c72f888655:function(t){let e;try{e=t instanceof WebGL2RenderingContext}catch{e=!1}return e},__wbg_instanceof_Window_5625ff9937037a38:function(t){let e;try{e=t instanceof Window}catch{e=!1}return e},__wbg_invalidateFramebuffer_9a711eeb3940aba0:function(){return u(function(t,e,n){t.invalidateFramebuffer(e>>>0,n)},arguments)},__wbg_isConnected_6531166e09dcdfe3:function(t){return t.isConnected},__wbg_isFallbackAdapter_8ccb967428491dcb:function(t){return t.isFallbackAdapter},__wbg_is_86be747e88e872fb:function(t,e){return Object.is(t,e)},__wbg_label_7ed42f25f841996b:function(t,e){const n=e.label,r=F(n,p.__wbindgen_malloc,p.__wbindgen_realloc),i=h;y().setInt32(t+4,i,!0),y().setInt32(t+0,r,!0)},__wbg_length_36bd29c6848c2144:function(t){return t.length},__wbg_length_ecfa2c63d3d0d82c:function(t){return t.length},__wbg_limits_20c6f56636df7d38:function(t){return t.limits},__wbg_linkProgram_124252d16ea0ef40:function(t,e){t.linkProgram(e)},__wbg_linkProgram_dd3cfc19950a354c:function(t,e){t.linkProgram(e)},__wbg_mapAsync_52b01fa9e8f765fd:function(t,e,n,r){return t.mapAsync(e>>>0,n,r)},__wbg_matchMedia_0e2963d34f3ddd40:function(){return u(function(t,e,n){const r=t.matchMedia(S(e,n));return c(r)?0:b(r)},arguments)},__wbg_matches_72427e51457a4411:function(t){return t.matches},__wbg_maxBindGroupsPlusVertexBuffers_33e5006b23e20478:function(t){return t.maxBindGroupsPlusVertexBuffers},__wbg_maxBindGroups_f6d26f3a67826666:function(t){return t.maxBindGroups},__wbg_maxBindingsPerBindGroup_edab2e8dabbf6060:function(t){return t.maxBindingsPerBindGroup},__wbg_maxBufferSize_bbc69284c14aa7da:function(t){return t.maxBufferSize},__wbg_maxColorAttachmentBytesPerSample_63ebe4f81de2f34c:function(t){return t.maxColorAttachmentBytesPerSample},__wbg_maxColorAttachments_aed8c38beabf3a5c:function(t){return t.maxColorAttachments},__wbg_maxComputeInvocationsPerWorkgroup_2d964564c37f1c65:function(t){return t.maxComputeInvocationsPerWorkgroup},__wbg_maxComputeWorkgroupSizeX_a3e3206570da184f:function(t){return t.maxComputeWorkgroupSizeX},__wbg_maxComputeWorkgroupSizeY_dffa4a62244b7563:function(t){return t.maxComputeWorkgroupSizeY},__wbg_maxComputeWorkgroupSizeZ_976ebcb760f6d07d:function(t){return t.maxComputeWorkgroupSizeZ},__wbg_maxComputeWorkgroupStorageSize_2e8dbece6e532e2a:function(t){return t.maxComputeWorkgroupStorageSize},__wbg_maxComputeWorkgroupsPerDimension_bb7d36b4d20c80f4:function(t){return t.maxComputeWorkgroupsPerDimension},__wbg_maxDynamicStorageBuffersPerPipelineLayout_1ca859cb96a414e0:function(t){return t.maxDynamicStorageBuffersPerPipelineLayout},__wbg_maxDynamicUniformBuffersPerPipelineLayout_e968f2c8cd8f4d46:function(t){return t.maxDynamicUniformBuffersPerPipelineLayout},__wbg_maxInterStageShaderVariables_138ac882c4d6a3d3:function(t){return t.maxInterStageShaderVariables},__wbg_maxSampledTexturesPerShaderStage_bb3e6b2698321fa6:function(t){return t.maxSampledTexturesPerShaderStage},__wbg_maxSamplersPerShaderStage_98c00a1829fa414b:function(t){return t.maxSamplersPerShaderStage},__wbg_maxStorageBufferBindingSize_e500e31f479e669e:function(t){return t.maxStorageBufferBindingSize},__wbg_maxStorageBuffersPerShaderStage_eb663f6d7521b6a7:function(t){return t.maxStorageBuffersPerShaderStage},__wbg_maxStorageTexturesPerShaderStage_bb3ad93b53e618c0:function(t){return t.maxStorageTexturesPerShaderStage},__wbg_maxTextureArrayLayers_2a56d05fb261c99a:function(t){return t.maxTextureArrayLayers},__wbg_maxTextureDimension1D_84590c1d4770d319:function(t){return t.maxTextureDimension1D},__wbg_maxTextureDimension2D_7f2b5c8b2727e3fc:function(t){return t.maxTextureDimension2D},__wbg_maxTextureDimension3D_7f3babddf55c32a6:function(t){return t.maxTextureDimension3D},__wbg_maxUniformBufferBindingSize_d80a09e23c0b284c:function(t){return t.maxUniformBufferBindingSize},__wbg_maxUniformBuffersPerShaderStage_0b8b2de676fa740e:function(t){return t.maxUniformBuffersPerShaderStage},__wbg_maxVertexAttributes_a693dd921316649b:function(t){return t.maxVertexAttributes},__wbg_maxVertexBufferArrayStride_f256d91f281076cb:function(t){return t.maxVertexBufferArrayStride},__wbg_maxVertexBuffers_70ab564b25d5ac20:function(t){return t.maxVertexBuffers},__wbg_message_4ada57a3710f1502:function(t,e){const n=e.message,r=F(n,p.__wbindgen_malloc,p.__wbindgen_realloc),i=h;y().setInt32(t+4,i,!0),y().setInt32(t+0,r,!0)},__wbg_minStorageBufferOffsetAlignment_3248ed00dcdbf79f:function(t){return t.minStorageBufferOffsetAlignment},__wbg_minUniformBufferOffsetAlignment_3b9fa4caae03e903:function(t){return t.minUniformBufferOffsetAlignment},__wbg_navigator_6cfdd5fa246d910f:function(t){return t.navigator},__wbg_navigator_e5c345298a9609cd:function(t){return t.navigator},__wbg_new_116be93542d39019:function(){return new Array},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_652118cdee90118f:function(){return u(function(t,e){return new OffscreenCanvas(t>>>0,e>>>0)},arguments)},__wbg_new_ebe3e0f6837f0879:function(){return new Object},__wbg_new_from_slice_3eea173078478cfe:function(t,e){return new Uint8Array(k(t,e))},__wbg_new_typed_ad9b105a7be50737:function(){return new Object},__wbg_new_typed_cceaf62d8d95e9f2:function(t,e){try{var n={a:t,b:e},r=(s,l)=>{const o=n.a;n.a=0;try{return St(o,n.b,s,l)}finally{n.a=o}};return new Promise(r)}finally{n.a=0}},__wbg_new_with_byte_offset_and_length_ff6e927f8d72f0c3:function(t,e,n){return new Uint8Array(t,e>>>0,n>>>0)},__wbg_now_2283802bfbda617e:function(t){return t.now()},__wbg_now_8b265300afd5f2b9:function(){return Date.now()},__wbg_nvram_071f0c77fd7e04f7:function(t){const e=Z(),n=Y(e,p.__wbindgen_malloc),r=h;y().setInt32(t+4,r,!0),y().setInt32(t+0,n,!0)},__wbg_of_0c6464fa8d2aa86d:function(t){return Array.of(t)},__wbg_onSubmittedWorkDone_270d6b5a45520e79:function(t){return t.onSubmittedWorkDone()},__wbg_pixelStorei_11bdfb5bc6a39d28:function(t,e,n){t.pixelStorei(e>>>0,n)},__wbg_pixelStorei_86481a168d6e225e:function(t,e,n){t.pixelStorei(e>>>0,n)},__wbg_polygonOffset_2b8b141e8cc17c10:function(t,e,n){t.polygonOffset(e,n)},__wbg_polygonOffset_94b427c5130ab6c2:function(t,e,n){t.polygonOffset(e,n)},__wbg_prototypesetcall_de8e0d9553586985:function(t,e,n){Uint8Array.prototype.set.call(k(t,e),n)},__wbg_push_adb0107829f02d75:function(t,e){return t.push(e)},__wbg_queryCounterEXT_b0cddcdfb28830df:function(t,e,n){t.queryCounterEXT(e,n>>>0)},__wbg_querySelectorAll_9b6a612499ecb916:function(){return u(function(t,e,n){return t.querySelectorAll(S(e,n))},arguments)},__wbg_querySelector_2c472eddb417c6b3:function(){return u(function(t,e,n){const r=t.querySelector(S(e,n));return c(r)?0:b(r)},arguments)},__wbg_queueMicrotask_ac694eae12e92dfb:function(t){queueMicrotask(t)},__wbg_queueMicrotask_be5fe34a8f4cad4d:function(t){return t.queueMicrotask},__wbg_queue_adce34608fd0c893:function(t){return t.queue},__wbg_readBuffer_2de0b72ac08915c8:function(t,e){t.readBuffer(e>>>0)},__wbg_readPixels_0033d2834b498dda:function(){return u(function(t,e,n,r,i,s,l,o){t.readPixels(e,n,r,i,s>>>0,l>>>0,o)},arguments)},__wbg_readPixels_0e3230bf7a891882:function(){return u(function(t,e,n,r,i,s,l,o){t.readPixels(e,n,r,i,s>>>0,l>>>0,o)},arguments)},__wbg_readPixels_8f8bde9ee420ba35:function(){return u(function(t,e,n,r,i,s,l,o){t.readPixels(e,n,r,i,s>>>0,l>>>0,o)},arguments)},__wbg_renderbufferStorageMultisample_a9f65ef0cc53fb37:function(t,e,n,r,i,s){t.renderbufferStorageMultisample(e>>>0,n,r>>>0,i,s)},__wbg_renderbufferStorage_33c57e600b175bd6:function(t,e,n,r,i){t.renderbufferStorage(e>>>0,n>>>0,r,i)},__wbg_renderbufferStorage_3fb6d5a0f3e07d46:function(t,e,n,r,i){t.renderbufferStorage(e>>>0,n>>>0,r,i)},__wbg_requestAdapter_2e6718811c735a57:function(t,e){return t.requestAdapter(e)},__wbg_requestDevice_ab46d0519ea1cc34:function(t,e){return t.requestDevice(e)},__wbg_resolve_020f95d838c6ef25:function(t){return Promise.resolve(t)},__wbg_samplerParameterf_d7f38ba3194c43ba:function(t,e,n,r){t.samplerParameterf(e,n>>>0,r)},__wbg_samplerParameteri_3d8994d9967c6803:function(t,e,n,r){t.samplerParameteri(e,n>>>0,r)},__wbg_scissor_2f02706fbca6e98a:function(t,e,n,r,i){t.scissor(e,n,r,i)},__wbg_scissor_cdfb84de20f004b6:function(t,e,n,r,i){t.scissor(e,n,r,i)},__wbg_setBindGroup_268fd1714fff0ef5:function(){return u(function(t,e,n,r,i,s,l){t.setBindGroup(e>>>0,n,I(r,i),s,l>>>0)},arguments)},__wbg_setBindGroup_f0de6cb2c7dbfc2c:function(t,e,n){t.setBindGroup(e>>>0,n)},__wbg_setIndexBuffer_2531a9103450445e:function(t,e,n,r){t.setIndexBuffer(e,V[n],r)},__wbg_setIndexBuffer_7f3cf667b4d71566:function(t,e,n,r,i){t.setIndexBuffer(e,V[n],r,i)},__wbg_setPipeline_c41bf46790f27f9e:function(t,e){t.setPipeline(e)},__wbg_setScissorRect_42511fefb18b86ef:function(t,e,n,r,i){t.setScissorRect(e>>>0,n>>>0,r>>>0,i>>>0)},__wbg_setVertexBuffer_1e448859663dd400:function(t,e,n,r){t.setVertexBuffer(e>>>0,n,r)},__wbg_setVertexBuffer_7cf533d694e747f3:function(t,e,n,r,i){t.setVertexBuffer(e>>>0,n,r,i)},__wbg_setViewport_d9fc3eac343de7d0:function(t,e,n,r,i,s,l){t.setViewport(e,n,r,i,s,l)},__wbg_set_8155bb79a948541b:function(){return u(function(t,e,n){return Reflect.set(t,e,n)},arguments)},__wbg_set_862c439a342a8818:function(t,e,n){t.set(e,n>>>0)},__wbg_set_a_88262a42340d0b1c:function(t,e){t.a=e},__wbg_set_access_9a5092f05dc45fad:function(t,e){t.access=Et[e]},__wbg_set_address_mode_u_9e2695575a219e33:function(t,e){t.addressModeU=U[e]},__wbg_set_address_mode_v_f479b2e6cccbcac4:function(t,e){t.addressModeV=U[e]},__wbg_set_address_mode_w_46273e153230180d:function(t,e){t.addressModeW=U[e]},__wbg_set_alpha_bfd2df62e7bc581b:function(t,e){t.alpha=e},__wbg_set_alpha_mode_df805952892caa9c:function(t,e){t.alphaMode=vt[e]},__wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2:function(t,e){t.alphaToCoverageEnabled=e!==0},__wbg_set_array_layer_count_7312f0f31af94e7c:function(t,e){t.arrayLayerCount=e>>>0},__wbg_set_array_stride_f64_27ffaf4fffd74e61:function(t,e){t.arrayStride=e},__wbg_set_aspect_0d453bca3d012f02:function(t,e){t.aspect=tt[e]},__wbg_set_aspect_4962514fe99e68e6:function(t,e){t.aspect=tt[e]},__wbg_set_attributes_7537844a7e6dafdc:function(t,e,n){t.attributes=f(e,n)},__wbg_set_b_c47befe0af3261eb:function(t,e){t.b=e},__wbg_set_base_array_layer_f176bb9f1b37b342:function(t,e){t.baseArrayLayer=e>>>0},__wbg_set_base_mip_level_1df145d9f8db32a9:function(t,e){t.baseMipLevel=e>>>0},__wbg_set_beginning_of_pass_write_index_e9f5d016947893bd:function(t,e){t.beginningOfPassWriteIndex=e>>>0},__wbg_set_bind_group_layouts_5a9cfea401c020ab:function(t,e,n){t.bindGroupLayouts=f(e,n)},__wbg_set_binding_155b0440b4307793:function(t,e){t.binding=e>>>0},__wbg_set_binding_f74df3510792aba1:function(t,e){t.binding=e>>>0},__wbg_set_blend_7493c2066c3e9970:function(t,e){t.blend=e},__wbg_set_buffer_c3410572051920ba:function(t,e){t.buffer=e},__wbg_set_buffer_ef7f75306cf663ed:function(t,e){t.buffer=e},__wbg_set_buffers_7d0d8f507699e956:function(t,e,n){t.buffers=f(e,n)},__wbg_set_bytes_per_row_d69b88eee3929c07:function(t,e){t.bytesPerRow=e>>>0},__wbg_set_clear_value_gpu_color_dict_6211425789c76e59:function(t,e){t.clearValue=e},__wbg_set_code_b4f37f81f45b5b25:function(t,e,n){t.code=S(e,n)},__wbg_set_color_83aa977526e88cbb:function(t,e){t.color=e},__wbg_set_color_attachments_581fdb3310e4abfa:function(t,e,n){t.colorAttachments=f(e,n)},__wbg_set_compare_cd9b62cdb92eb580:function(t,e){t.compare=H[e]},__wbg_set_compare_f36b34abfaa08ccb:function(t,e){t.compare=H[e]},__wbg_set_count_069a4eac409bac55:function(t,e){t.count=e>>>0},__wbg_set_cull_mode_fc649853947a3d0c:function(t,e){t.cullMode=Ft[e]},__wbg_set_depth_bias_clamp_1c0d695df7f092e5:function(t,e){t.depthBiasClamp=e},__wbg_set_depth_bias_d7cd16096242a657:function(t,e){t.depthBias=e},__wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba:function(t,e){t.depthBiasSlopeScale=e},__wbg_set_depth_clear_value_beda3ec5b1a5c43a:function(t,e){t.depthClearValue=e},__wbg_set_depth_compare_0c8631eb2eae98e3:function(t,e){t.depthCompare=H[e]},__wbg_set_depth_fail_op_668155ae33d3c06f:function(t,e){t.depthFailOp=W[e]},__wbg_set_depth_load_op_511c513eab4e56a9:function(t,e){t.depthLoadOp=G[e]},__wbg_set_depth_or_array_layers_89371305ed0bd962:function(t,e){t.depthOrArrayLayers=e>>>0},__wbg_set_depth_read_only_7f41a74741c144ec:function(t,e){t.depthReadOnly=e!==0},__wbg_set_depth_stencil_97506c7bea4f53da:function(t,e){t.depthStencil=e},__wbg_set_depth_stencil_attachment_73b79e8b4e948222:function(t,e){t.depthStencilAttachment=e},__wbg_set_depth_store_op_c89f33b39b43361c:function(t,e){t.depthStoreOp=j[e]},__wbg_set_depth_write_enabled_ce89750042940350:function(t,e){t.depthWriteEnabled=e!==0},__wbg_set_device_e275d1d4f3c9eb74:function(t,e){t.device=e},__wbg_set_dimension_868eee80f4b90011:function(t,e){t.dimension=gt[e]},__wbg_set_dimension_e325282e613ca0a4:function(t,e){t.dimension=z[e]},__wbg_set_dst_factor_ec7407f19be1aff9:function(t,e){t.dstFactor=J[e]},__wbg_set_end_of_pass_write_index_0d546e46b86ea069:function(t,e){t.endOfPassWriteIndex=e>>>0},__wbg_set_entries_86a29dd6291c95e7:function(t,e,n){t.entries=f(e,n)},__wbg_set_entries_a12aca1e458b0456:function(t,e,n){t.entries=f(e,n)},__wbg_set_entry_point_207540f042015ce5:function(t,e,n){t.entryPoint=S(e,n)},__wbg_set_entry_point_e87e79251dd3144f:function(t,e,n){t.entryPoint=S(e,n)},__wbg_set_external_texture_386483d8dd82ab56:function(t,e){t.externalTexture=e},__wbg_set_fail_op_92f716dbc88b6973:function(t,e){t.failOp=W[e]},__wbg_set_format_1fcaa7d60546b490:function(t,e){t.format=_[e]},__wbg_set_format_2c1414a817c213f8:function(t,e){t.format=_[e]},__wbg_set_format_533f9ffa7eef563d:function(t,e){t.format=_[e]},__wbg_set_format_5d2f25cc93654ecc:function(t,e){t.format=kt[e]},__wbg_set_format_5ff53724ed6cedf2:function(t,e){t.format=_[e]},__wbg_set_format_815efd4dc4817bbb:function(t,e){t.format=_[e]},__wbg_set_format_e52bdcca880d2c8e:function(t,e){t.format=_[e]},__wbg_set_fragment_8b780f00a0b0e6f3:function(t,e){t.fragment=e},__wbg_set_front_face_28ffdf524eedce5b:function(t,e){t.frontFace=ft[e]},__wbg_set_g_5983abfc46e0cf4e:function(t,e){t.g=e},__wbg_set_has_dynamic_offset_62bc230bdb7c54d0:function(t,e){t.hasDynamicOffset=e!==0},__wbg_set_height_14335c4047cf9c1b:function(t,e){t.height=e>>>0},__wbg_set_height_ca39bd9597314f83:function(t,e){t.height=e>>>0},__wbg_set_height_d72f2b76484a44de:function(t,e){t.height=e>>>0},__wbg_set_label_08d9be3e4719c226:function(t,e,n){t.label=S(e,n)},__wbg_set_label_17eb9fe3a02f62b0:function(t,e,n){t.label=S(e,n)},__wbg_set_label_48e6b787d256f621:function(t,e,n){t.label=S(e,n)},__wbg_set_label_547d0d4aec39fbe9:function(t,e,n){t.label=S(e,n)},__wbg_set_label_5ee7427342869829:function(t,e,n){t.label=S(e,n)},__wbg_set_label_60ad96c811e0d109:function(t,e,n){t.label=S(e,n)},__wbg_set_label_72bb4f41ef0cb893:function(t,e,n){t.label=S(e,n)},__wbg_set_label_79387decda299036:function(t,e,n){t.label=S(e,n)},__wbg_set_label_9556af8b5cda3c9d:function(t,e,n){t.label=S(e,n)},__wbg_set_label_d010f237b26f2c55:function(t,e,n){t.label=S(e,n)},__wbg_set_label_e16e2dbe51349c7f:function(t,e,n){t.label=S(e,n)},__wbg_set_label_e3944e54881b8c50:function(t,e,n){t.label=S(e,n)},__wbg_set_label_e922700240417ab5:function(t,e,n){t.label=S(e,n)},__wbg_set_layout_50ab727f44b38f26:function(t,e){t.layout=e},__wbg_set_layout_913d53c17194c989:function(t,e){t.layout=e},__wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882:function(t,e){t.layout=yt[e]},__wbg_set_load_op_99661da6c4eab9b0:function(t,e){t.loadOp=G[e]},__wbg_set_lod_max_clamp_dd2d9f9f052f4f44:function(t,e){t.lodMaxClamp=e},__wbg_set_lod_min_clamp_6d20c97916baeb93:function(t,e){t.lodMinClamp=e},__wbg_set_mag_filter_b5adebc99cb938e1:function(t,e){t.magFilter=$[e]},__wbg_set_mapped_at_creation_81b586dc90a50347:function(t,e){t.mappedAtCreation=e!==0},__wbg_set_mask_70a8a59ce09e5997:function(t,e){t.mask=e>>>0},__wbg_set_max_anisotropy_2beada0e2db62c45:function(t,e){t.maxAnisotropy=e},__wbg_set_min_binding_size_f64_5005a6904cdf43da:function(t,e){t.minBindingSize=e},__wbg_set_min_filter_c72f17375e135f0a:function(t,e){t.minFilter=$[e]},__wbg_set_mip_level_count_534caaa7e68e68b8:function(t,e){t.mipLevelCount=e>>>0},__wbg_set_mip_level_count_776c8c218b65bc08:function(t,e){t.mipLevelCount=e>>>0},__wbg_set_mip_level_f7ac79e8c54f59ad:function(t,e){t.mipLevel=e>>>0},__wbg_set_mipmap_filter_5bf66195a3639700:function(t,e){t.mipmapFilter=Tt[e]},__wbg_set_mode_9990b3393ba469ae:function(t,e){t.mode=Ct[e]},__wbg_set_module_d0e2098713606cae:function(t,e){t.module=e},__wbg_set_module_f02e076ca7e7daf8:function(t,e){t.module=e},__wbg_set_multisample_37ddafe88b5cd466:function(t,e){t.multisample=e},__wbg_set_multisampled_7913fd7183272840:function(t,e){t.multisampled=e!==0},__wbg_set_offset_f64_28c24dc15000932e:function(t,e){t.offset=e},__wbg_set_offset_f64_89f0ce01a689839e:function(t,e){t.offset=e},__wbg_set_offset_f64_fa66068813376ca3:function(t,e){t.offset=e},__wbg_set_onuncapturederror_c8a77eb8695205a0:function(t,e){t.onuncapturederror=e},__wbg_set_operation_62ce44e1728c4047:function(t,e){t.operation=wt[e]},__wbg_set_origin_gpu_origin_3d_dict_631c04520718091f:function(t,e){t.origin=e},__wbg_set_pass_op_cf02fa088d6352a7:function(t,e){t.passOp=W[e]},__wbg_set_power_preference_8fdca0b7af640d49:function(t,e){t.powerPreference=_t[e]},__wbg_set_primitive_43c23761a55b4088:function(t,e){t.primitive=e},__wbg_set_query_set_41de86d2401aee04:function(t,e){t.querySet=e},__wbg_set_r_c6f4c68f4804d655:function(t,e){t.r=e},__wbg_set_required_features_1baf274a8669db60:function(t,e,n){t.requiredFeatures=f(e,n)},__wbg_set_required_limits_871ed33c68613dcb:function(t,e){t.requiredLimits=e},__wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96:function(t,e){t.resolveTarget=e},__wbg_set_resource_5ae7b5e67924f234:function(t,e){t.resource=e},__wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b:function(t,e){t.resource=e},__wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5:function(t,e){t.resource=e},__wbg_set_rows_per_image_59a813ac5006e10e:function(t,e){t.rowsPerImage=e>>>0},__wbg_set_sample_count_eb86a8b18545b54f:function(t,e){t.sampleCount=e>>>0},__wbg_set_sample_type_c32e1dfff94e63eb:function(t,e){t.sampleType=Pt[e]},__wbg_set_sampler_c0e1258543a33bce:function(t,e){t.sampler=e},__wbg_set_shader_location_7e1832a74f912217:function(t,e){t.shaderLocation=e>>>0},__wbg_set_size_f64_6bcd40704bf4cfdc:function(t,e){t.size=e},__wbg_set_size_f64_8b8f6bba5d678162:function(t,e){t.size=e},__wbg_set_size_gpu_extent_3d_dict_7e42e1c98fa36434:function(t,e){t.size=e},__wbg_set_src_factor_9bfe84af9b7b5cac:function(t,e){t.srcFactor=J[e]},__wbg_set_stencil_back_85b22f1db5b1940a:function(t,e){t.stencilBack=e},__wbg_set_stencil_clear_value_42be608809151e2a:function(t,e){t.stencilClearValue=e>>>0},__wbg_set_stencil_front_525526164a798a44:function(t,e){t.stencilFront=e},__wbg_set_stencil_load_op_31838c036993098a:function(t,e){t.stencilLoadOp=G[e]},__wbg_set_stencil_read_mask_5cc26495e8b3ae82:function(t,e){t.stencilReadMask=e>>>0},__wbg_set_stencil_read_only_bf1d0c1897e25c62:function(t,e){t.stencilReadOnly=e!==0},__wbg_set_stencil_store_op_e6be1cbc3a8fc210:function(t,e){t.stencilStoreOp=j[e]},__wbg_set_stencil_write_mask_d9cb40ec4b4bee5b:function(t,e){t.stencilWriteMask=e>>>0},__wbg_set_step_mode_a97bb24714da41a9:function(t,e){t.stepMode=Kt[e]},__wbg_set_storage_texture_939a097db4b18bd4:function(t,e){t.storageTexture=e},__wbg_set_store_op_b5fdf672436f13f3:function(t,e){t.storeOp=j[e]},__wbg_set_strip_index_format_9f787be6c5fc9e87:function(t,e){t.stripIndexFormat=V[e]},__wbg_set_targets_c38bd200c836d66f:function(t,e,n){t.targets=f(e,n)},__wbg_set_texture_1f64653a5d2d7b4d:function(t,e){t.texture=e},__wbg_set_texture_9dcedde1bb31eda6:function(t,e){t.texture=e},__wbg_set_timestamp_writes_98bed1a8bbc6682d:function(t,e){t.timestampWrites=e},__wbg_set_tone_mapping_b3464f1baa4cff92:function(t,e){t.toneMapping=e},__wbg_set_topology_da25f2cc5af203d2:function(t,e){t.topology=Dt[e]},__wbg_set_type_ccf8472d40abcddf:function(t,e){t.type=It[e]},__wbg_set_type_d09829f59932a0fc:function(t,e){t.type=ht[e]},__wbg_set_unclipped_depth_04524a2b44e1e3c1:function(t,e){t.unclippedDepth=e!==0},__wbg_set_usage_a137f82ca163b0a9:function(t,e){t.usage=e>>>0},__wbg_set_usage_b2a2935f37bf3d08:function(t,e){t.usage=e>>>0},__wbg_set_usage_ba5b0f8b333ab325:function(t,e){t.usage=e>>>0},__wbg_set_usage_ddd42599bbba7779:function(t,e){t.usage=e>>>0},__wbg_set_vertex_0be5d146f9ff6f36:function(t,e){t.vertex=e},__wbg_set_view_dimension_0df554032f1f3a85:function(t,e){t.viewDimension=z[e]},__wbg_set_view_dimension_4818d4c18ce5815e:function(t,e){t.viewDimension=z[e]},__wbg_set_view_formats_4347dc8363331086:function(t,e,n){t.viewFormats=f(e,n)},__wbg_set_view_formats_5797d2fff3c11808:function(t,e,n){t.viewFormats=f(e,n)},__wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9:function(t,e){t.view=e},__wbg_set_view_gpu_texture_view_c0f35f8857c25206:function(t,e){t.view=e},__wbg_set_visibility_9570b037224c4cc2:function(t,e){t.visibility=e>>>0},__wbg_set_width_36ef6630b22fc519:function(t,e){t.width=e>>>0},__wbg_set_width_661c95ea46b71eba:function(t,e){t.width=e>>>0},__wbg_set_width_9f685402c2cbee70:function(t,e){t.width=e>>>0},__wbg_set_write_mask_d45279e56abbfcb5:function(t,e){t.writeMask=e>>>0},__wbg_set_x_876d592971db129a:function(t,e){t.x=e>>>0},__wbg_set_y_2b1f5ac0dd5586a5:function(t,e){t.y=e>>>0},__wbg_set_z_ef005d82bc9d24e3:function(t,e){t.z=e>>>0},__wbg_shaderSource_7d3f360b4b626db7:function(t,e,n,r){t.shaderSource(e,S(n,r))},__wbg_shaderSource_dcba4cd3379b35bd:function(t,e,n,r){t.shaderSource(e,S(n,r))},__wbg_stack_3b0d974bbf31e44f:function(t,e){const n=e.stack,r=F(n,p.__wbindgen_malloc,p.__wbindgen_realloc),i=h;y().setInt32(t+4,i,!0),y().setInt32(t+0,r,!0)},__wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76:function(){const t=typeof globalThis>"u"?null:globalThis;return c(t)?0:b(t)},__wbg_static_accessor_GLOBAL_c7aea38d4de089bc:function(){const t=typeof global>"u"?null:global;return c(t)?0:b(t)},__wbg_static_accessor_SELF_42d4fae05e59267a:function(){const t=typeof self>"u"?null:self;return c(t)?0:b(t)},__wbg_static_accessor_WINDOW_e0db14a0eba6a812:function(){const t=typeof window>"u"?null:window;return c(t)?0:b(t)},__wbg_stencilFuncSeparate_1455ac65895207da:function(t,e,n,r,i){t.stencilFuncSeparate(e>>>0,n>>>0,r,i>>>0)},__wbg_stencilFuncSeparate_55627e589746e09f:function(t,e,n,r,i){t.stencilFuncSeparate(e>>>0,n>>>0,r,i>>>0)},__wbg_stencilMaskSeparate_85d929ff95496631:function(t,e,n){t.stencilMaskSeparate(e>>>0,n>>>0)},__wbg_stencilMaskSeparate_8e37bf59a93afc15:function(t,e,n){t.stencilMaskSeparate(e>>>0,n>>>0)},__wbg_stencilMask_020d2d7ea8e4f640:function(t,e){t.stencilMask(e>>>0)},__wbg_stencilMask_967f16a89bfd056a:function(t,e){t.stencilMask(e>>>0)},__wbg_stencilOpSeparate_1f45c75c83dad8d5:function(t,e,n,r,i){t.stencilOpSeparate(e>>>0,n>>>0,r>>>0,i>>>0)},__wbg_stencilOpSeparate_33a6764dd0ce6e24:function(t,e,n,r,i){t.stencilOpSeparate(e>>>0,n>>>0,r>>>0,i>>>0)},__wbg_subgroupMaxSize_1527c5f7a8fe91bb:function(t){return t.subgroupMaxSize},__wbg_subgroupMinSize_d6c5ad4bddc828e9:function(t){return t.subgroupMinSize},__wbg_submit_ce44115121cd166c:function(t,e,n){t.submit(f(e,n))},__wbg_texImage2D_053488112c3d702f:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texImage2D_2854247ff7d047a1:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texImage2D_44740302c934daf1:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texImage3D_d23f7d2f9e66b916:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w){t.texImage3D(e>>>0,n,r,i,s,l,o,m>>>0,d>>>0,w)},arguments)},__wbg_texImage3D_faae3ea3f2969ecc:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w){t.texImage3D(e>>>0,n,r,i,s,l,o,m>>>0,d>>>0,w)},arguments)},__wbg_texParameteri_2bc38aa8e9964d77:function(t,e,n,r){t.texParameteri(e>>>0,n>>>0,r)},__wbg_texParameteri_dd4f56c2acbbe859:function(t,e,n,r){t.texParameteri(e>>>0,n>>>0,r)},__wbg_texStorage2D_d473a12d49d7deee:function(t,e,n,r,i,s){t.texStorage2D(e>>>0,n,r>>>0,i,s)},__wbg_texStorage3D_3ceb25ba9ad4b7ac:function(t,e,n,r,i,s,l){t.texStorage3D(e>>>0,n,r>>>0,i,s,l)},__wbg_texSubImage2D_1b383b66dfe35010:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage2D_205cfbaea80e77e6:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage2D_606540d3e650e0bb:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage2D_62ae3d4b2700f7cd:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage2D_6eb05d8f455f99ba:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage2D_a035d2307e014a73:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage2D_ad5a64d8f68a2d0d:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage2D_cb9ad676165c5da5:function(){return u(function(t,e,n,r,i,s,l,o,m,d){t.texSubImage2D(e>>>0,n,r,i,s,l,o>>>0,m>>>0,d)},arguments)},__wbg_texSubImage3D_09e44c66b4ac6bc6:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w,C){t.texSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w>>>0,C)},arguments)},__wbg_texSubImage3D_16678785ac62fd6b:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w,C){t.texSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w>>>0,C)},arguments)},__wbg_texSubImage3D_3ee8764dfdcb6746:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w,C){t.texSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w>>>0,C)},arguments)},__wbg_texSubImage3D_53489be691cee78d:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w,C){t.texSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w>>>0,C)},arguments)},__wbg_texSubImage3D_73d365baf8dad003:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w,C){t.texSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w>>>0,C)},arguments)},__wbg_texSubImage3D_8a2331639ee1ee0e:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w,C){t.texSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w>>>0,C)},arguments)},__wbg_texSubImage3D_9b0bd9fd73d7bb1c:function(){return u(function(t,e,n,r,i,s,l,o,m,d,w,C){t.texSubImage3D(e>>>0,n,r,i,s,l,o,m,d>>>0,w>>>0,C)},arguments)},__wbg_then_7026b513a94278a8:function(t,e){return t.then(e)},__wbg_then_72819b8d4e081fb5:function(t,e,n){return t.then(e,n)},__wbg_unconfigure_0a07a0a40de8988d:function(t){t.unconfigure()},__wbg_uniform1f_e92095ce29c38424:function(t,e,n){t.uniform1f(e,n)},__wbg_uniform1f_e93503bc589b432d:function(t,e,n){t.uniform1f(e,n)},__wbg_uniform1i_235dff1d94e0df95:function(t,e,n){t.uniform1i(e,n)},__wbg_uniform1i_d5db9c3184abbd04:function(t,e,n){t.uniform1i(e,n)},__wbg_uniform1ui_8bbaaa1161bfd433:function(t,e,n){t.uniform1ui(e,n>>>0)},__wbg_uniform2fv_1443080aaf9c1077:function(t,e,n,r){t.uniform2fv(e,v(n,r))},__wbg_uniform2fv_b039f28911c30526:function(t,e,n,r){t.uniform2fv(e,v(n,r))},__wbg_uniform2iv_9648a06d054a25aa:function(t,e,n,r){t.uniform2iv(e,T(n,r))},__wbg_uniform2iv_e0496dc424dc25ec:function(t,e,n,r){t.uniform2iv(e,T(n,r))},__wbg_uniform2uiv_935dfb31f50dfbe3:function(t,e,n,r){t.uniform2uiv(e,I(n,r))},__wbg_uniform3fv_025760367cc4eed3:function(t,e,n,r){t.uniform3fv(e,v(n,r))},__wbg_uniform3fv_b985d45f54156d3b:function(t,e,n,r){t.uniform3fv(e,v(n,r))},__wbg_uniform3iv_193b7a0e1ae9ac9a:function(t,e,n,r){t.uniform3iv(e,T(n,r))},__wbg_uniform3iv_63e82687b07e66fc:function(t,e,n,r){t.uniform3iv(e,T(n,r))},__wbg_uniform3uiv_ccd86b78a5fb3077:function(t,e,n,r){t.uniform3uiv(e,I(n,r))},__wbg_uniform4f_61192d516e9bede4:function(t,e,n,r,i,s){t.uniform4f(e,n,r,i,s)},__wbg_uniform4f_d9bb623add5d2541:function(t,e,n,r,i,s){t.uniform4f(e,n,r,i,s)},__wbg_uniform4fv_c39527800fc76c8e:function(t,e,n,r){t.uniform4fv(e,v(n,r))},__wbg_uniform4fv_fcff56a650906708:function(t,e,n,r){t.uniform4fv(e,v(n,r))},__wbg_uniform4iv_197c2f54a8dfb5c2:function(t,e,n,r){t.uniform4iv(e,T(n,r))},__wbg_uniform4iv_9e6e36f0e1d1f84d:function(t,e,n,r){t.uniform4iv(e,T(n,r))},__wbg_uniform4uiv_73fc9e298d02c948:function(t,e,n,r){t.uniform4uiv(e,I(n,r))},__wbg_uniformBlockBinding_057177606c8b522f:function(t,e,n,r){t.uniformBlockBinding(e,n>>>0,r>>>0)},__wbg_uniformMatrix2fv_013723900a9cb65c:function(t,e,n,r,i){t.uniformMatrix2fv(e,n!==0,v(r,i))},__wbg_uniformMatrix2fv_fb61eccac67a8218:function(t,e,n,r,i){t.uniformMatrix2fv(e,n!==0,v(r,i))},__wbg_uniformMatrix2x3fv_de8b00219f47ffb4:function(t,e,n,r,i){t.uniformMatrix2x3fv(e,n!==0,v(r,i))},__wbg_uniformMatrix2x4fv_e659cc34e95fee5e:function(t,e,n,r,i){t.uniformMatrix2x4fv(e,n!==0,v(r,i))},__wbg_uniformMatrix3fv_3e548032fc28c3e2:function(t,e,n,r,i){t.uniformMatrix3fv(e,n!==0,v(r,i))},__wbg_uniformMatrix3fv_72ca83d3393e0364:function(t,e,n,r,i){t.uniformMatrix3fv(e,n!==0,v(r,i))},__wbg_uniformMatrix3x2fv_8598636e806d318d:function(t,e,n,r,i){t.uniformMatrix3x2fv(e,n!==0,v(r,i))},__wbg_uniformMatrix3x4fv_277fbf38db85e612:function(t,e,n,r,i){t.uniformMatrix3x4fv(e,n!==0,v(r,i))},__wbg_uniformMatrix4fv_20161efad644f822:function(t,e,n,r,i){t.uniformMatrix4fv(e,n!==0,v(r,i))},__wbg_uniformMatrix4fv_8689fd0481ac5ab4:function(t,e,n,r,i){t.uniformMatrix4fv(e,n!==0,v(r,i))},__wbg_uniformMatrix4x2fv_e91bd4e774f6266d:function(t,e,n,r,i){t.uniformMatrix4x2fv(e,n!==0,v(r,i))},__wbg_uniformMatrix4x3fv_a829c88dfd0c29d3:function(t,e,n,r,i){t.uniformMatrix4x3fv(e,n!==0,v(r,i))},__wbg_unmap_adaf93276fdf9aaf:function(t){t.unmap()},__wbg_useProgram_1c047de878f20b72:function(t,e){t.useProgram(e)},__wbg_useProgram_9edff145e073d3b1:function(t,e){t.useProgram(e)},__wbg_valueOf_a8a77b9f1e9bfd39:function(t){return t.valueOf()},__wbg_vertexAttribDivisorANGLE_581f060f68a0c850:function(t,e,n){t.vertexAttribDivisorANGLE(e>>>0,n>>>0)},__wbg_vertexAttribDivisor_f910af52b19ce382:function(t,e,n){t.vertexAttribDivisor(e>>>0,n>>>0)},__wbg_vertexAttribIPointer_54e6be6fa5e39567:function(t,e,n,r,i,s){t.vertexAttribIPointer(e>>>0,n,r>>>0,i,s)},__wbg_vertexAttribPointer_7bc186aca7721b90:function(t,e,n,r,i,s,l){t.vertexAttribPointer(e>>>0,n,r>>>0,i!==0,s,l)},__wbg_vertexAttribPointer_b0838f8618a8c446:function(t,e,n,r,i,s,l){t.vertexAttribPointer(e>>>0,n,r>>>0,i!==0,s,l)},__wbg_viewport_07bb1829f0fe2245:function(t,e,n,r,i){t.viewport(e,n,r,i)},__wbg_viewport_dfe81d333ce7be86:function(t,e,n,r,i){t.viewport(e,n,r,i)},__wbg_warn_917d7f727ab78481:function(t){console.warn(t)},__wbg_width_1952934caca67137:function(t){return t.width},__wbg_writeBuffer_8b5bd251a89198bc:function(){return u(function(t,e,n,r,i,s,l){t.writeBuffer(e,n,k(r,i),s,l)},arguments)},__wbg_writeTexture_53ba204c494b042c:function(){return u(function(t,e,n,r,i,s){t.writeTexture(e,k(n,r),i,s)},arguments)},__wbindgen_cast_0000000000000001:function(t,e){return g(t,e,mt)},__wbindgen_cast_0000000000000002:function(t,e){return g(t,e,bt)},__wbindgen_cast_0000000000000003:function(t,e){return g(t,e,ut)},__wbindgen_cast_0000000000000004:function(t,e){return g(t,e,pt)},__wbindgen_cast_0000000000000005:function(t,e){return g(t,e,dt)},__wbindgen_cast_0000000000000006:function(t,e){return g(t,e,ct)},__wbindgen_cast_0000000000000007:function(t){return t},__wbindgen_cast_0000000000000008:function(t,e){return v(t,e)},__wbindgen_cast_0000000000000009:function(t,e){return Lt(t,e)},__wbindgen_cast_000000000000000a:function(t,e){return T(t,e)},__wbindgen_cast_000000000000000b:function(t,e){return Nt(t,e)},__wbindgen_cast_000000000000000c:function(t,e){return Bt(t,e)},__wbindgen_cast_000000000000000d:function(t,e){return I(t,e)},__wbindgen_cast_000000000000000e:function(t,e){return k(t,e)},__wbindgen_cast_000000000000000f:function(t,e){return S(t,e)},__wbindgen_init_externref_table:function(){const t=p.__wbindgen_externrefs,e=t.grow(4);t.set(0,void 0),t.set(e+0,void 0),t.set(e+1,null),t.set(e+2,!0),t.set(e+3,!1)}},"./snippets/vpw-game-8ca7f57fdbbfbb8e/inline0.js":it}}function pt(a,t,e){p.wasm_bindgen_ac41cba2447cf9d8___convert__closures_____invoke___wgpu_c5ee626b6e3a4aee___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true_(a,t,e)}function mt(a,t,e){const n=p.wasm_bindgen_ac41cba2447cf9d8___convert__closures_____invoke___wasm_bindgen_ac41cba2447cf9d8___JsValue__core_f0fd674eaa06beef___result__Result_____wasm_bindgen_ac41cba2447cf9d8___JsError___true_(a,t,e);if(n[1])throw P(n[0])}function ut(a,t,e){const n=p.wasm_bindgen_ac41cba2447cf9d8___convert__closures_____invoke___wasm_bindgen_ac41cba2447cf9d8___sys__JsOption_wgpu_c5ee626b6e3a4aee___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_ac41cba2447cf9d8___JsError___true_(a,t,e);if(n[1])throw P(n[0])}function dt(a,t,e){const n=p.wasm_bindgen_ac41cba2447cf9d8___convert__closures_____invoke___wasm_bindgen_ac41cba2447cf9d8___sys__JsOption_wgpu_c5ee626b6e3a4aee___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_ac41cba2447cf9d8___JsError___true__4(a,t,e);if(n[1])throw P(n[0])}function ct(a,t,e){const n=p.wasm_bindgen_ac41cba2447cf9d8___convert__closures_____invoke___wasm_bindgen_ac41cba2447cf9d8___sys__JsOption_wgpu_c5ee626b6e3a4aee___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_ac41cba2447cf9d8___JsError___true__5(a,t,e);if(n[1])throw P(n[0])}function St(a,t,e,n){p.wasm_bindgen_ac41cba2447cf9d8___convert__closures_____invoke___js_sys_6553f8703197b563___Function_fn_wasm_bindgen_ac41cba2447cf9d8___JsValue_____wasm_bindgen_ac41cba2447cf9d8___sys__Undefined___js_sys_6553f8703197b563___Function_fn_wasm_bindgen_ac41cba2447cf9d8___JsValue_____wasm_bindgen_ac41cba2447cf9d8___sys__Undefined_______true_(a,t,e,n)}function bt(a,t,e){p.wasm_bindgen_ac41cba2447cf9d8___convert__closures_____invoke___f64______true_(a,t,e)}const U=["clamp-to-edge","repeat","mirror-repeat"],yt=["auto"],J=["zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha","src-alpha-saturated","constant","one-minus-constant","src1","one-minus-src1","src1-alpha","one-minus-src1-alpha"],wt=["add","subtract","reverse-subtract","min","max"],ht=["uniform","storage","read-only-storage"],vt=["opaque","premultiplied"],Ct=["standard","extended"],H=["never","less","equal","less-equal","greater","not-equal","greater-equal","always"],Ft=["none","front","back"],$=["nearest","linear"],ft=["ccw","cw"],V=["uint16","uint32"],G=["load","clear"],Tt=["nearest","linear"],_t=["low-power","high-performance"],Dt=["point-list","line-list","line-strip","triangle-list","triangle-strip"],It=["filtering","non-filtering","comparison"],W=["keep","zero","replace","invert","increment-clamp","decrement-clamp","increment-wrap","decrement-wrap"],Et=["write-only","read-only","read-write"],j=["store","discard"],tt=["all","stencil-only","depth-only"],gt=["1d","2d","3d"],_=["r8unorm","r8snorm","r8uint","r8sint","r16unorm","r16snorm","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32uint","r32sint","r32float","rg16unorm","rg16snorm","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb9e5ufloat","rgb10a2uint","rgb10a2unorm","rg11b10ufloat","rg32uint","rg32sint","rg32float","rgba16unorm","rgba16snorm","rgba16uint","rgba16sint","rgba16float","rgba32uint","rgba32sint","rgba32float","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb","etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm","astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"],Pt=["float","unfilterable-float","depth","sint","uint"],z=["1d","2d","2d-array","cube","cube-array","3d"],kt=["uint8","uint8x2","uint8x4","sint8","sint8x2","sint8x4","unorm8","unorm8x2","unorm8x4","snorm8","snorm8x2","snorm8x4","uint16","uint16x2","uint16x4","sint16","sint16x2","sint16x4","unorm16","unorm16x2","unorm16x4","snorm16","snorm16x2","snorm16x4","float16","float16x2","float16x4","float32","float32x2","float32x3","float32x4","uint32","uint32x2","uint32x3","uint32x4","sint32","sint32x2","sint32x3","sint32x4","unorm10-10-10-2","unorm8x4-bgra"],Kt=["vertex","instance"];typeof FinalizationRegistry>"u"||new FinalizationRegistry(a=>p.__wbg_loopstats_free(a,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(a=>p.__wbg_scenestats_free(a,1)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(a=>p.__wbg_tableinfo_free(a,1));function b(a){const t=p.__externref_table_alloc();return p.__wbindgen_externrefs.set(t,a),t}const et=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>p.__wbindgen_destroy_closure(a.a,a.b));function X(a){const t=typeof a;if(t=="number"||t=="boolean"||a==null)return`${a}`;if(t=="string")return`"${a}"`;if(t=="symbol"){const r=a.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=a.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(a)){const r=a.length;let i="[";r>0&&(i+=X(a[0]));for(let s=1;s<r;s++)i+=", "+X(a[s]);return i+="]",i}const e=/\[object ([^\]]+)\]/.exec(toString.call(a));let n;if(e&&e.length>1)n=e[1];else return toString.call(a);if(n=="Object")try{return"Object("+JSON.stringify(a)+")"}catch{return"Object"}return a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:n}function v(a,t){return a=a>>>0,nt().subarray(a/4,a/4+t)}function Lt(a,t){return a=a>>>0,xt().subarray(a/2,a/2+t)}function T(a,t){return a=a>>>0,Rt().subarray(a/4,a/4+t)}function Nt(a,t){return a=a>>>0,Ot().subarray(a/1,a/1+t)}function f(a,t){a=a>>>0;const e=y(),n=[];for(let r=a;r<a+4*t;r+=4)n.push(p.__wbindgen_externrefs.get(e.getUint32(r,!0)));return n}function Bt(a,t){return a=a>>>0,Mt().subarray(a/2,a/2+t)}function I(a,t){return a=a>>>0,At().subarray(a/4,a/4+t)}function k(a,t){return a=a>>>0,E().subarray(a/1,a/1+t)}let D=null;function y(){return(D===null||D.buffer.detached===!0||D.buffer.detached===void 0&&D.buffer!==p.memory.buffer)&&(D=new DataView(p.memory.buffer)),D}let K=null;function nt(){return(K===null||K.byteLength===0)&&(K=new Float32Array(p.memory.buffer)),K}let L=null;function xt(){return(L===null||L.byteLength===0)&&(L=new Int16Array(p.memory.buffer)),L}let N=null;function Rt(){return(N===null||N.byteLength===0)&&(N=new Int32Array(p.memory.buffer)),N}let B=null;function Ot(){return(B===null||B.byteLength===0)&&(B=new Int8Array(p.memory.buffer)),B}function S(a,t){return Vt(a>>>0,t)}let x=null;function Mt(){return(x===null||x.byteLength===0)&&(x=new Uint16Array(p.memory.buffer)),x}let R=null;function At(){return(R===null||R.byteLength===0)&&(R=new Uint32Array(p.memory.buffer)),R}let O=null;function E(){return(O===null||O.byteLength===0)&&(O=new Uint8Array(p.memory.buffer)),O}function u(a,t){try{return a.apply(this,t)}catch(e){const n=b(e);p.__wbindgen_exn_store(n)}}function c(a){return a==null}function g(a,t,e){const n={a,b:t,cnt:1},r=(...i)=>{n.cnt++;const s=n.a;n.a=0;try{return e(s,n.b,...i)}finally{n.a=s,r._wbg_cb_unref()}};return r._wbg_cb_unref=()=>{--n.cnt===0&&(p.__wbindgen_destroy_closure(n.a,n.b),n.a=0,et.unregister(n))},et.register(r,n,n),r}function Y(a,t){const e=t(a.length*1,1)>>>0;return E().set(a,e/1),h=a.length,e}function Ut(a,t){const e=t(a.length*4,4)>>>0;return nt().set(a,e/4),h=a.length,e}function F(a,t,e){if(e===void 0){const l=M.encode(a),o=t(l.length,1)>>>0;return E().subarray(o,o+l.length).set(l),h=l.length,o}let n=a.length,r=t(n,1)>>>0;const i=E();let s=0;for(;s<n;s++){const l=a.charCodeAt(s);if(l>127)break;i[r+s]=l}if(s!==n){s!==0&&(a=a.slice(s)),r=e(r,n,n=s+a.length*3,1)>>>0;const l=E().subarray(r+s,r+n),o=M.encodeInto(a,l);s+=o.written,r=e(r,n,s,1)>>>0}return h=s,r}function P(a){const t=p.__wbindgen_externrefs.get(a);return p.__externref_table_dealloc(a),t}let A=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});A.decode();const Ht=2146435072;let Q=0;function Vt(a,t){return Q+=t,Q>=Ht&&(A=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),A.decode(),Q=t),A.decode(E().subarray(a,a+t))}const M=new TextEncoder;"encodeInto"in M||(M.encodeInto=function(a,t){const e=M.encode(a);return t.set(e),{read:a.length,written:e.length}});let h=0,p;function Gt(a,t){return p=a.exports,D=null,K=null,L=null,N=null,B=null,x=null,R=null,O=null,p.__wbindgen_start(),p}async function Wt(a,t){if(typeof Response=="function"&&a instanceof Response){if(!a.ok)throw new Error(`failed to fetch Wasm: ${a.status} ${a.statusText} fetching '${a.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(a,t)}catch(r){if(e(a.type)&&a.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await a.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(a,t);return n instanceof WebAssembly.Instance?{instance:n,module:a}:n}function e(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}async function jt(a){if(p!==void 0)return p;a!==void 0&&(Object.getPrototypeOf(a)===Object.prototype?{module_or_path:a}=a:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),a===void 0&&(a=new URL("./vpw_player_bg-D70VzXs8.wasm",self.location.href));const t=ot();(typeof a=="string"||typeof Request=="function"&&a instanceof Request||typeof URL=="function"&&a instanceof URL)&&(a=fetch(a));const{instance:e,module:n}=await Wt(await a,t);return Gt(e)}var zt=new URL("./vpw_player_bg-D70VzXs8.wasm",self.location.href).href,Xt=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Bally 6803 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid   = 19\r
' Cabinet switches\r
Const swCPUDiag        = -7\r
Const swSoundDiag      = -6\r
Const swStartButton    =  6\r
Const swKP0            =  2\r
Const swKP1            = 11\r
Const swKP2            = 10\r
Const swKP3            =  9\r
Const swKP4            = 19\r
Const swKP5            = 18\r
Const swKP6            = 17\r
Const swKP7            = 27\r
Const swKP8            = 26\r
Const swKP9            = 25\r
Const swKPA            = 12\r
Const swKPB            = 20\r
Const swKPC            = 28\r
Const swKPEnter        =  1\r
Const swKPClear        =  3\r
Const swKPGame         =  4\r
Const swTilt           = 15\r
Const swSlamTilt       = 14\r
Const swCoin3          =  9\r
Const swCoin1          = 10\r
Const swCoin2          = 11\r
\r
Const swLRFlip         = 82\r
Const swLLFlip         = 84\r
Const swURFlip         = 81\r
Const swULFlip         = 83\r
\r
' Help Window\r
vpmSystemHelp = "Bally 6803 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keyCpuDiag)     & vbTab & "Test"             & vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keyCoinDoor)    & vbTab & "Open/Close Coin Door" & vbNewLine &_\r
  "KP 0-9"                   & vbTab & "Keypad 0-9"       & vbNewLine &_\r
  "KP / * -"                 & vbTab & "Keypad ABC"       & vbNewLine &_\r
  "KP Enter"                 & vbTab & "Keypad Enter"     & vbNewLine &_\r
  vpmKeyName(keyCancel)      & vbTab & "Keypad Kbd/Clr"   & vbNewLine &_\r
  vpmKeyName(keyKPGame)      & vbTab & "Keypad Game"      & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub Bally6803ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm  80, 0, "Option Menu"\r
		.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("Bally6803ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Private vpmCoinDoor : vpmCoinDoor = False\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyCoinDoor     If toggleKeyCoinDoor Then vpmCoinDoor = Not vpmCoinDoor Else vpmCoinDoor = Not inverseKeyCoinDoor\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = vpmCoinDoor\r
			Case 82              .Switch(swKP0)         = vpmCoinDoor\r
			Case 79              .Switch(swKP1)         = vpmCoinDoor\r
			Case 80              .Switch(swKP2)         = vpmCoinDoor\r
			Case 81              .Switch(swKP3)         = vpmCoinDoor\r
			Case 75              .Switch(swKP4)         = vpmCoinDoor\r
			Case 76              .Switch(swKP5)         = vpmCoinDoor\r
			Case 77              .Switch(swKP6)         = vpmCoinDoor\r
			Case 71              .Switch(swKP7)         = vpmCoinDoor\r
			Case 72              .Switch(swKP8)         = vpmCoinDoor\r
			Case 73              .Switch(swKP9)         = vpmCoinDoor\r
			Case 181             .Switch(swKPA)         = vpmCoinDoor\r
			Case 55              .Switch(swKPB)         = vpmCoinDoor\r
			Case 74              .Switch(swKPC)         = vpmCoinDoor\r
			Case keyKPEnter      .Switch(swKPEnter)     = vpmCoinDoor\r
			Case keyCancel       .Switch(swKPClear)     = vpmCoinDoor\r
			Case keyKPGame       .Switch(swKPGame)      = vpmCoinDoor\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyCoinDoor     If toggleKeyCoinDoor = False Then vpmCoinDoor = inverseKeyCoinDoor\r
			Case 82              .Switch(swKP0)         = False\r
			Case 79              .Switch(swKP1)         = False\r
			Case 80              .Switch(swKP2)         = False\r
			Case 81              .Switch(swKP3)         = False\r
			Case 75              .Switch(swKP4)         = False\r
			Case 76              .Switch(swKP5)         = False\r
			Case 77              .Switch(swKP6)         = False\r
			Case 71              .Switch(swKP7)         = False\r
			Case 72              .Switch(swKP8)         = False\r
			Case 73              .Switch(swKP9)         = False\r
			Case 181             .Switch(swKPA)         = False\r
			Case 55              .Switch(swKPB)         = False\r
			Case 74              .Switch(swKPC)         = False\r
			Case keyKPEnter      .Switch(swKPEnter)     = False\r
			Case keyCancel       .Switch(swKPClear)     = False\r
			Case keyKPGame       .Switch(swKPGame)      = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Yt=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Allied Leisure Data\r
'-------------------------\r
' Flipper Solenoid\r
'Const GameOnSolenoid = 19?\r
' Cabinet switches\r
Const swTilt         = 31\r
Const swBallRollTilt = 31\r
Const swStartButton  = 32\r
Const swSlamTilt     = 33\r
Const swCoin1        = 34\r
Const swCoin2        = 35\r
Const swCoin3        = 36\r
Const swCPUDiag      = 37\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
\r
' Help Window\r
vpmSystemHelp = "Allied Leisure keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"      & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic"\r
\r
' Dip Switch / Options Menu\r
Private Sub ALIDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 80, 60, "DIP Switches"\r
			.AddFrame 0, 0, 60, "Sound", 0,_\r
			  Array("DIP 1",&H00000001,"DIP 2",&H00000002)\r
			.AddFrame 0, 45, 60,"Game", 0,_\r
			  Array("DIP M8",&H00000100,"DIP M7",&H00000200,"DIP M6",&H00000400,"DIP M5",&H00000800,_\r
			        "DIP M4",&H00001000,"DIP M3",&H00002000,"DIP M2",&H00004000,"DIP M1",32768,_\r
			        "DIP D8",&H00010000,"DIP D7",&H00020000,"DIP D6",&H00040000,"DIP D5",&H00080000,_\r
			        "DIP D4",&H00100000,"DIP D3",&H00200000,"DIP D2",&H00400000,"DIP D1",&H00800000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips=GetRef("ALIDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Qt=`'Last Updated in VBS v3.36\r
\r
'Note: This VBS file is now obsolete as of VBS V3.18.  It is included in the VBS pack only for\r
'      backwards compatability with any existing tables that might be using it.\r
'      You should now use either Atari1(b).vbs (for Generation 1 Atari Tables)\r
'      or Atari2.vbs for Generation 2 Atari tables.\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Atari Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 16\r
' Cabinet switches\r
Const swSelfTest     =  0\r
Const swStartButton  =  2\r
Const swCoin1        =  3\r
Const swCoin2        =  4\r
Const swCPUDiag      =  7\r
Const swTilt         = 48\r
Const swLRFlip       = 81\r
Const swLLFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub atariShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("atariShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	On Error Resume Next\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
	On Error Goto 0\r
End Function\r
`,qt=`'Last Updated in VBS v3.36\r
' - 3.19 fixes the swLRFlip and swLLFlip switch numbers so the standard SolFlipper function can be used\r
\r
'This is for Atari Generation 1 games with Rotary switch\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Atari Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 16\r
' Cabinet switches\r
Const swSelfTest     =  0\r
Const swStartButton  =  3\r
Const swCoin1        =  1\r
Const swCoin2        =  2\r
Const swCPUDiag      =  7\r
Const swTilt         = 18\r
Const swSlamDoorHit  =  4\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"        & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub atariShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 300, "Atari generation 1 switches"\r
			.AddFrame 0, 0, 80, "DIP switches", 0,_\r
			  Array("SW1-1",&H00000800,"SW1-2",&H00000400,"SW1-3",&H00000200,"SW1-4",&H00000100,_\r
			        "SW1-5",32768,"SW1-6",&H00004000,"SW1-7",&H00002000,"SW1-8",&H00001000,_\r
			        "SW2-1",&H00000008,"SW2-2",&H00000004,"SW2-3",&H00000002,"SW2-4",&H00000001,_\r
			        "SW2-5",&H00000080,"SW2-6",&H00000040,"SW2-7",&H00000020,"SW2-8",&H00000010)\r
			.AddFrame 100, 0, 80, "Rotary switch", &H000F0000,_\r
			  Array("setting 0",0,"setting 1",&H00010000,"setting 2",&H00020000,"setting 3",&H00030000,_\r
			        "setting 4",&H00040000,"setting 5",&H00050000,"setting 6",&H00060000,"setting 7",&H00070000,_\r
			        "setting 8",&H00080000,"setting 9",&H00090000,"setting 10",&H000A0000,"setting 11",&H000B0000,_\r
			        "setting 12",&H000C0000,"setting 13",&H000D0000,"setting 14",&H000E0000,"setting 15",&H000F0000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("atariShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Zt=`'Last Updated in VBS v3.58\r
\r
'This is for Atari Generation 1 games with Rotary switch\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Atari Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 16\r
' Cabinet switches\r
Const swSelfTest     =  0\r
Const swStartButton  =  3\r
Const swCoin1        =  1\r
Const swCoin2        =  2\r
Const swCPUDiag      =  7\r
Const swTilt         = 18\r
Const swSlamDoorHit  =  4\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"        & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub atariShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 300, "Atari generation 1 switches"\r
			.AddFrame 0, 0, 80, "DIP switches", 0,_\r
			  Array("SW1-1",&H00000800,"SW1-2",&H00000400,"SW1-3",&H00000200,"SW1-4",&H00000100,_\r
			        "SW1-5",32768,"SW1-6",&H00004000,"SW1-7",&H00002000,"SW1-8",&H00001000,_\r
			        "SW2-1",&H00000008,"SW2-2",&H00000004,"SW2-3",&H00000002,"SW2-4",&H00000001,_\r
			        "SW2-5",&H00000080,"SW2-6",&H00000040,"SW2-7",&H00000020,"SW2-8",&H00000010)\r
			.AddFrame 100,0,80,"Rotary switch",&H000F0000,_\r
			  Array("setting 0",0,"setting 1",&H00010000,"setting 2",&H00020000,"setting 3",&H00030000,_\r
			        "setting 4",&H00040000,"setting 5",&H00050000,"setting 6",&H00060000,"setting 7",&H00070000,_\r
			        "setting 8",&H00080000,"setting 9",&H00090000,"setting 10",&H000A0000,"setting 11",&H000B0000,_\r
			        "setting 12",&H000C0000,"setting 13",&H000D0000,"setting 14",&H000E0000,"setting 15",&H000F0000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("atariShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  .Switch(swCoin1) = True: If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  .Switch(swCoin2) = True: If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case keyInsertCoin1  .Switch(swCoin1) = False\r
			Case keyInsertCoin3  .Switch(swCoin2) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Jt=`'Last Updated in VBS v3.36\r
\r
'First Added in VBS v3.18\r
\r
'This is for Atari Generation 2 games\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Atari Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 16\r
' Cabinet switches\r
Const swSelfTest     =  0\r
Const swStartButton  =  2\r
Const swCoin1        =  3\r
Const swCoin2        =  4\r
Const swCPUDiag      =  7\r
Const swTilt         = 48\r
Const swLRFlip       = 81\r
Const swLLFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub atariShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "Atari Generation 2"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("atariShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,$t=`\r
'======================================================================================\r
' This code may be freely distributed, but is not to be included with any profit-making\r
' software or product without the express permission from the scripting author, Steely.\r
'======================================================================================\r
'	 /			  /				 /				/			   /			  /		  '\r
'	/			<<<-->>>		/			   /			  /				 /		  '\r
'  /		 <<< ------- >@>   /			  /				 /				/		  '\r
' /		   <</	  Ball --- >@@/				 /				/			   /		  '\r
'/		  </	   - to --- >@@				/			   /			  /			  '\r
'		 </			- Ball - >@@		   /			  /				 /			  '\r
'		 </		   Collision >@@>		  /				 /				/			  '\r
'		 </		   - for ---- @@@		 /				/			   /			  '\r
'		 <</	 Visual ----- @@@		/			   /			  /				 /'\r
'		/<<<   Pinball ----- >@@>	   /			  /				 /				/ '\r
'	   /  <<< -------------- @@@> A	  /				 /				/			   /  '\r
'	  /	   <<<< ---------- >@@@> PinballKen			/			   /			  /	  '\r
'	 /		 <<<<< ----- >@@@> & Steely			   /			  /				 /	  '\r
'	/			<<<<->>@@> Production			  /				 /	Ver 1.1		/	  '\r
'  /			   /			  /				 /				/			   /	  '\r
'======================================================================================\r
' Many thanks go to Randy Davis and to all the multitudes of people who have\r
' contributed to VP over the years, keeping it alive!!! Enjoy, Steely & PK\r
'\r
' v1.1 Updated with code changes/additions by JimmyFingers and Koadic (file modified by Koadic)\r
'======================================================================================\r
'\r
\r
' To add B2B collision sounds to a VP9 table follow these few steps...\r
\r
' 1) Create a new timer in the VP playfield editor and name it ==> XYdata\r
'	 DO NOT ENABLE this timer, it automatically turns on/off when needed.\r
' 2) Import the ten provided collide*.wav files (0-9) with the sound manager.\r
'	 If you choose to use your own sound files, they must be named collide0.wav\r
'	 thru whatever number. Example: collide0.wav to collide7.wav (8 files)\r
' 3) Copy/paste the next few lines into your table script.\r
'	 NOTE: these five lines should be placed before any other table script but after the LoadVPM call.\r
'	 Set the quantites for tnopb and nosf.\r
'\r
' This "B2B.vbs" file must be placed in the same folder as the table.\r
'\r
'	Dim tnopb, nosf, B2BOn\r
'	tnopb = 4	' <<<<< SET to the "Total Number Of Possible Balls" in play at any one time\r
'	nosf = 10	' <<<<< SET to the "Number Of Sound Files" used / B2B collision volume levels\r
'	B2BOn = 2	' <<<<< 0=Off, 1=On, 2=AutoDetect\r
'\r
'	ExecuteGlobal GetTextFile("B2B.vbs")\r
'\r
'\r
' 4) For each and every kicker that creates and/or destroys balls you must add a command\r
'	 for ball identification... This is very important when adapting a table. If you get\r
'	 an error while playing during a multiball sequence, you may have missed adding code\r
'	 to a kicker's Hit or unHit event or the command code was not placed in the proper\r
'	 location. Also note that not all kickers create and destroy balls.\r
'\r
'	 First: Determine which kickers destroy balls and insert "ClearBallid" into the kicker's\r
'	 Hit sub. This must be placed before a ball is destroyed to clear the ball object ID.\r
'\r
'	 Example below:\r
'\r
'		Sub Kicker1_Hit() ClearBallid : AddBall me : End Sub		'AddBall - simulating a VPM command\r
'		Sub Kicker2_Hit() ClearBallid : Kicker2.DestroyBall : End Sub\r
'		Sub Drain_Hit()\r
'			PlaySound "drain"\r
'			ClearBallid\r
'			Drain.DestroyBall\r
'		End Sub\r
'\r
'	Second: For each kicker that creates balls, you need to replace Kicker.createball with "CreateBallid(Kicker)".\r
'	Alternatively, for VPM tables, you can instead call vpmCreateBall(Kicker) as the standard vpmCreateBall call is\r
'	replaced via this script. Balls generated by the core.vbs for troughs and the like will be created with an ID\r
'	automatically. If you want to create a custom sized ball with an ID, you can use CreateBallID2(Kicker, BallSize)\r
'\r
'______________________________________________________________________________________\r
'\r
'		================================================\r
'		======== Ball to Ball Collision Effects ========\r
'		================================================\r
'			A brief description of operation\r
'\r
' Features...\r
'\r
' * This code senses ball-to-ball proximity to determine a collision and then calculates\r
' the collision force (cForce) to select a varying sound level or volume.\r
'\r
' * Any number of sound levels/files can be used and set by the table author.\r
'\r
' * Any number of balls can be set by the author, however the quantity is limited by what\r
' the individual computer can handle. The majority of tables use only a few balls at\r
' one time, so hopefully this shouldn't be an issue for most people.\r
'\r
' To combat this, the XYdata_Timer interval is self regulating to help retain performance.\r
' There is also an auto-shutoff, "coff" collision off variable*, which is triggered by\r
' the timer interval if it should go too high (*changed to B2BOn).\r
'\r
' The main elements or commands used for this B2B collision sound effects are...\r
' 1) PlaySound("collide" & cForce)\r
'	This line selects and plays the proper wav file, combining "collide" with the\r
'	collision force for a variable sound level or volume. So the files are named...\r
'		"collide0", "collide1"... thru "collide9".\r
'\r
' 2) cForce = Cint((abs(TotalVel(cb1,id3)*Cos(cAngle-bAngle1))+abs(TotalVel(cb2,id3)*Cos(cAngle-bAngle2))))\r
'	There are more lines for the cForce calculations, but this main equation works by\r
'	taking the total velocity of each ball and multiplying it by the difference between\r
'	the collision angle and the angle of the traveling ball. In other words, a head on\r
'	collision and/or higher velocity produces a louder sound than a glancing blow.\r
'\r
' 3) XYdata_Timer...\r
'	This timer collects the balls' coordinates and velocities. It then determines\r
'	if two balls are close enough for a collision to occur.\r
'\r
' 4) Identifying the balls for reading the ball coordinates and velocities...\r
'	Unfortunately balls don't have scriptable hit events, so they must be identified\r
'	and set as an object whenever they are created. Balls then need to be marked as\r
'	inactive when one is destroyed. This is taken care of by the "CreateBallID" (and\r
'	vpmCreateBall via the core.vbs) and "ClearBallid" subs.\r
'\r
'=======================================================\r
' Detailed descriptions are given below within the code\r
'=======================================================\r
\r
Option Explicit\r
\r
ReDim CurrentBall(tnopb), ballStatus(tnopb)\r
XYdata.interval = 10			' Timer interval starts at 1 for the highest ball data sample rate\r
\r
Dim cnt\r
For cnt = 0 to ubound(ballStatus)	' Initialize/clear all ball stats, 1 = active, 0 = non-existant\r
	ballStatus(cnt) = 0\r
Next\r
\r
CheckB2B\r
\r
'****************************************\r
' B2B AutoDisable for XP x64 Added by Koadic\r
'****************************************\r
\r
Sub CheckB2B			' Added by Koadic for XP x64 handling\r
  Dim osver, cpuver, check\r
  On Error Resume Next\r
	For x = 0 to 1 : If B2BOn = x Then Exit Sub : End If : Next 'If B2BOn is set manually, then end routine\r
	Set check = CreateObject("WScript.Shell")\r
	osver = check.RegRead ("HKLM\\Software\\Microsoft\\Windows NT\\CurrentVersion\\CurrentVersion")\r
	cpuver = check.RegRead ("HKLM\\SYSTEM\\ControlSet001\\Control\\Session Manager\\Environment\\Processor_Architecture")\r
	If osver < 6 and cpuver = "AMD64" Then B2BOn = 0 Else B2BOn = 1 'If OS is XP and 64bit, then disable B2B\r
	If Err Then B2BOn = 1 'If there is an error in detecting either OS or x32/x64, then default to On\r
  On Error Goto 0\r
End Sub\r
\r
 '======================================================\r
' <<<<<<<<<<<<<< Ball Identification >>>>>>>>>>>>>>\r
'======================================================\r
'******************************\r
' Destruk's alternative vpmCreateBall for use with B2B Enabled tables\r
' Core.vbs calls vpmCreateBall when a ball is created from a ball stack\r
'******************************\r
If IsEmpty(Eval("vpmCreateBall"))=false Then Set vpmCreateBall = GetRef("B2BvpmCreateBall")	' Override the core.vbs and redefine vpmCreateBall\r
\r
Function B2BvpmCreateBall(aKicker)\r
	Dim bsize2:If IsEmpty(Eval("ballsize"))=true Then bsize2 = 25 Else bsize2 = ballsize/2\r
	For cnt = 1 to ubound(ballStatus)				' Loop through all possible ball IDs\r
		If ballStatus(cnt) = 0 Then					' If ball ID is available...\r
			If Not IsEmpty(vpmBallImage) Then		' Set ball object with the first available ID\r
				Set CurrentBall(cnt) = aKicker.Createsizedball(bsize2).Image\r
			Else\r
				Set CurrentBall(cnt) = aKicker.Createsizedball(bsize2)\r
			End If\r
			Set B2BvpmCreateBall = aKicker\r
			CurrentBall(cnt).uservalue = cnt		' Assign the ball's uservalue to it's new ID\r
			ballStatus(cnt) = 1						' Mark this ball status active\r
			ballStatus(0) = ballStatus(0)+1			' Increment ballStatus(0), the number of active balls\r
			If B2BOn > 0 Then						' If B2BOn is 0, it overrides auto-turn on collision detection\r
													' If more than one ball active, start collision detection process\r
				If ballStatus(0) > 1 and XYdata.enabled = False Then XYdata.enabled = True\r
			End If\r
			Exit For								' New ball ID assigned, exit loop\r
		End If\r
	Next\r
End Function\r
\r
' Use CreateBallID(kickername) to manually create a ball with a BallID\r
' Can also be used on nonVPM tables (EM or Custom)\r
\r
Sub CreateBallID(aKicker)\r
	Dim bsize2:If IsEmpty(Eval("ballsize"))=true Then bsize2 = 25 Else bsize2 = ballsize/2\r
	For cnt = 1 to ubound(ballStatus)				' Loop through all possible ball IDs\r
		If ballStatus(cnt) = 0 Then					' If ball ID is available...\r
			Set CurrentBall(cnt) = aKicker.Createsizedball(bsize2)		' Set ball object with the first available ID\r
			CurrentBall(cnt).uservalue = cnt		' Assign the ball's uservalue to it's new ID\r
			ballStatus(cnt) = 1						' Mark this ball status active\r
			ballStatus(0) = ballStatus(0)+1			' Increment ballStatus(0), the number of active balls\r
			If B2BOn > 0 Then						' If B2BOn is 0, it overrides auto-turn on collision detection\r
													' If more than one ball active, start collision detection process\r
				If ballStatus(0) > 1 and XYdata.enabled = False Then XYdata.enabled = True\r
			End If\r
			Exit For								' New ball ID assigned, exit loop\r
		End If\r
	Next\r
End Sub\r
\r
' Use CreateBallID2(kickername, ballsize) to manually create a custom sized ball with a BallID\r
' Can also be used on nonVPM tables (EM or Custom)\r
\r
Sub CreateBallID2(aKicker, bsize2)					' Use to manually create a ball with a BallID with a custom size\r
	For cnt = 1 to ubound(ballStatus)				' Loop through all possible ball IDs\r
		If ballStatus(cnt) = 0 Then					' If ball ID is available...\r
			Set CurrentBall(cnt) = aKicker.Createsizedball(bsize2/2)		' Set ball object with the first available ID\r
			CurrentBall(cnt).uservalue = cnt		' Assign the ball's uservalue to it's new ID\r
			ballStatus(cnt) = 1						' Mark this ball status active\r
			ballStatus(0) = ballStatus(0)+1			' Increment ballStatus(0), the number of active balls\r
			If B2BOn > 0 Then						' If B2BOn is 0, it overrides auto-turn on collision detection\r
													' If more than one ball active, start collision detection process\r
				If ballStatus(0) > 1 and XYdata.enabled = False Then XYdata.enabled = True\r
			End If\r
			Exit For								' New ball ID assigned, exit loop\r
		End If\r
	Next\r
End Sub\r
\r
'Call this sub from every kicker that destroys a ball, before the ball is destroyed.\r
\r
Sub ClearBallid\r
	Dim iball\r
	On Error Resume Next				' Error handling for debugging purposes\r
	iball = ActiveBall.uservalue		' Get the ball ID to be cleared\r
	If Err Then Msgbox Err.description & vbCrLf & iball\r
		ballStatus(iBall) = 0			' Clear the ball status\r
	ballStatus(0) = ballStatus(0)-1		' Subtract 1 ball from the # of balls in play\r
	On Error Goto 0\r
End Sub\r
\r
\r
'=====================================================\r
' <<<<<<<<<<<<<<<<< XYdata_Timer >>>>>>>>>>>>>>>>>\r
'=====================================================\r
' Ball data collection and B2B Collision detection.\r
\r
Dim cFactor\r
\r
Sub XYdata_Timer()\r
	Dim bDistance, xyTime, id, id2, id3, B1, B2\r
	ReDim baX(tnopb,4), baY(tnopb,4), bVx(tnopb,4), bVy(tnopb,4), TotalVel(tnopb,4)\r
	' xyTime... Timers will not loop or start over 'til it's code is finished executing. To maximize\r
	' performance, at the end of this timer, if the timer's interval is shorter than the individual\r
	' computer can handle this timer's interval will increment by 1 millisecond.\r
	xyTime = Timer+(XYdata.interval*.001)	' xyTime is the system timer plus the current interval time\r
	' Ball Data... When a collision occurs a ball's velocity is often less than it's velocity before the\r
	' collision, if not zero. So the ball data is sampled and saved for four timer cycles.\r
	If id2 >= 4 Then id2 = 0						' Loop four times and start over\r
	id2 = id2+1								' Increment the ball sampler ID\r
	For id = 1 to ubound(ballStatus)					' Loop once for each possible ball\r
		If ballStatus(id) = 1 Then								' If ball is active...\r
			baX(id,id2) = round(CurrentBall(id).x,2)			' Sample x-coord\r
			baY(id,id2) = round(CurrentBall(id).y,2)			' Sample y-coord\r
			baZ(id,id2) = round(CurrentBall(id).z,2)			' Sample z-coord\r
			bVx(id,id2) = round(CurrentBall(id).velx,2)			' Sample x-velocity\r
			bVy(id,id2) = round(CurrentBall(id).vely,2)			' Sample y-velocity\r
			TotalVel(id,id2) = (bVx(id,id2)^2 + bVy(id,id2)^2)	' Calculate total velocity\r
			If TotalVel(id,id2) > TotalVel(0,0) Then TotalVel(0,0) = int(TotalVel(id,id2))\r
		End If\r
	Next\r
	' Collision Detection Loop - check all possible ball combinations for a collision.\r
	' bDistance automatically sets the distance between two colliding balls. Zero milimeters between\r
	' balls would be perfect, but because of timing issues with ball velocity, fast-traveling balls\r
	' prevent a low setting from always working, so bDistance becomes more of a sensitivity setting,\r
	' which is automated with calculations using the balls' velocities.\r
	' Ball x/y-coords plus the bDistance determines B2B proximity and triggers a collision.\r
	id3 = id2 : B2 = 2 : B1 = 1						' Set up the counters for looping\r
	Do\r
		If ballStatus(B1) = 1 and ballStatus(B2) = 1 Then		' If both balls are active...\r
			bDistance = int((TotalVel(B1,id3)+TotalVel(B2,id3))^(1.04 * (CurrentBall(B1).radius + CurrentBall(B2).radius)/50))\r
			If ((baX(B1,id3) - baX(B2,id3))^2 + (baY(B1,id3) - baY(B2,id3))^2) < (2800 * ((CurrentBall(B1).radius + CurrentBall(B2).radius)/50)^2) + bDistance Then\r
				If ABS(baZ(B1,id3) - baZ(B2,id3)) < (CurrentBall(B1).radius + CurrentBall(B2).radius) Then collide B1,B2 : Exit Sub 'added z axis collision detection here\r
			End If\r
		End If\r
		B1 = B1+1							' Increment ball1\r
		If B1 >= ubound(ballStatus) Then Exit Do		' Exit loop if all ball combinations checked\r
		If B1 >= B2 then B1 = 1:B2 = B2+1				' If ball1 >= reset ball1 and increment ball2\r
	Loop\r
\r
	If ballStatus(0) <= 1 Then XYdata.enabled = False	' Turn off timer if one ball or less\r
\r
	If XYdata.interval >= 40 Then B2BOn = False : XYdata.enabled = False	' Auto-shut off\r
	If Timer > xyTime * 3 Then B2BOn = False : XYdata.enabled = False		' Auto-shut off\r
	If Timer > xyTime Then XYdata.interval = XYdata.interval+1				' Increment interval if needed\r
End Sub\r
\r
'=========================================================\r
' <<<<<<<<<<< Collide(ball id1, ball id2) >>>>>>>>>>>\r
'=========================================================\r
'Calculate the collision force and play sound accordingly.\r
Dim cTime\r
\r
Sub Collide(cb1,cb2)\r
	Dim avgBallx, cAngle, bAngle1, bAngle2, cForce\r
' The Collision Factor(cFactor) uses the maximum total ball velocity and automates the cForce calculation, maximizing the\r
' use of all sound files/volume levels. So all the available B2B sound levels are automatically used by adjusting to a\r
' player's style and the table's characteristics.\r
	If TotalVel(0,0)/1.8 > cFactor Then cFactor = int(TotalVel(0,0)/1.8)\r
' The following six lines limit repeated collisions if the balls are close together for any period of time\r
	avgBallx = (bvX(cb2,1)+bvX(cb2,2)+bvX(cb2,3)+bvX(cb2,4))/4\r
	If avgBallx < bvX(cb2,id2)+.1 and avgBallx > bvX(cb2,id2)-.1 Then\r
	If ABS(TotalVel(cb1,id2)-TotalVel(cb2,id2)) < .000005 Then Exit Sub\r
	End If\r
	If Timer < cTime Then Exit Sub\r
	cTime = Timer+.1				' Limits collisions to .1 seconds apart\r
' GetAngle(x-value, y-value, the angle name) calculates any x/y-coords or x/y-velocities and returns named angle in radians\r
	GetAngle baX(cb1,id3)-baX(cb2,id3), baY(cb1,id3)-baY(cb2,id3),cAngle	' Collision angle via x/y-coordinates\r
	id3 = id3 - 1 : If id3 = 0 Then id3 = 4	' Step back one xyData sampling for a good velocity reading\r
	GetAngle bVx(cb1,id3), bVy(cb1,id3), bAngle1	' ball 1 travel direction, via velocity\r
	GetAngle bVx(cb2,id3), bVy(cb2,id3), bAngle2	' ball 2 travel direction, via velocity\r
' The main cForce formula, calculating the strength of a collision\r
	cForce = Cint((abs(TotalVel(cb1,id3)*Cos(cAngle-bAngle1))+abs(TotalVel(cb2,id3)*Cos(cAngle-bAngle2))))\r
	If cForce < 4 Then Exit Sub				' Another collision limiter\r
	cForce = Cint(cForce/(cFactor/nosf))	' Divides up cForce for the proper sound selection.\r
	If cForce > nosf-1 Then cForce = nosf-1	' First sound file 0(zero) minus one from number of sound files\r
	PlaySound("collide" & cForce)			' Combines "collide" with the calculated sound level and play sound\r
End Sub\r
\r
'=================================================\r
' <<<<<<<< GetAngle(X, Y, Anglename) >>>>>>>>\r
'=================================================\r
' A repeated function which takes any set of coordinates or velocities and calculates an angle in radians.\r
\r
Sub GetAngle(Xin, Yin, wAngle)\r
	Dim rAngle,Radit\r
	Const Pi = 3.14159265358979\r
	If Sgn(Xin) = 0 Then\r
		If Sgn(Yin) = 1 Then rAngle = 3 * Pi/2 Else rAngle = Pi/2\r
		If Sgn(Yin) = 0 Then rAngle = 0\r
	Else\r
		rAngle = atn(-Yin/Xin)			' Calculates angle in radians before quadrant data\r
	End If\r
	If sgn(Xin) = -1 Then Radit = Pi Else Radit = 0\r
	If sgn(Xin) = 1 and sgn(Yin) = 1 Then Radit = 2 * Pi\r
	wAngle = round((Radit + rAngle),4)		' Calculates angle in radians with quadrant data\r
	'"wAngle = round((180/Pi) * (Radit + rAngle),4)" ' Will convert radian measurements to degrees - to be used in future\r
End Sub\r
`,te=`'THIS IS THE OLD VERSION, USE B2B.vbs INSTEAD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r
'\r
'======================================================================================\r
' This code may be freely distributed, but is not to be included with any profit-making\r
' software or product without the express permission from the scripting author, Steely.\r
'======================================================================================\r
'	 /			  /				 /				/			   /			  /		  '\r
'	/			<<<-->>>		/			   /			  /				 /		  '\r
'  /		 <<< ------- >@>   /			  /				 /				/		  '\r
' /		   <</	  Ball --- >@@/				 /				/			   /		  '\r
'/		  </	   - to --- >@@				/			   /			  /			  '\r
'		 </			- Ball - >@@		   /			  /				 /			  '\r
'		 </		   Collision >@@>		  /				 /				/			  '\r
'		 </		   - for ---- @@@		 /				/			   /			  '\r
'		 <</	 Visual ----- @@@		/			   /			  /				 /'\r
'		/<<<   Pinball ----- >@@>	   /			  /				 /				/ '\r
'	   /  <<< -------------- @@@> A	  /				 /				/			   /  '\r
'	  /	   <<<< ---------- >@@@> PinballKen			/			   /			  /	  '\r
'	 /		 <<<<< ----- >@@@> & Steely			   /			  /				 /	  '\r
'	/			<<<<->>@@> Production			  /				 /	Ver 1.0 beta/	  '\r
'  /			   /			  /				 /				/			   /	  '\r
'======================================================================================\r
' Many thanks go to Randy Davis and to all the multitudes of people who have\r
' contributed to VP over the years, keeping it alive!!! Enjoy, Steely & PK\r
'======================================================================================\r
'\r
' This code will currently only work with vp9 tables. It uses a kicker's\r
' UnHit event which is not available in vp8. Options for vp8 are being explored.\r
\r
' To add B2B collision sounds to a VP9 table follow these few steps...\r
\r
' 1) Create a new timer in the VP playfield editor and name it ==> XYdata\r
'	 DO NOT ENABLE this timer, it automatically turns on/off when needed.\r
' 2) Import the ten provided collide*.wav files (0-9) with the sound manager.\r
'	 If you choose to use your own sound files, they must be named collide0.wav\r
'	 thru whatever number. Example: collide0.wav to collide7.wav (8 files)\r
' 3) Copy/paste the next few lines into your table script.\r
'	 NOTE: these four lines should be placed before any other table script.\r
'	 Set the quantites for tnopb and nosf.\r
'\r
' This "B2Bcollision.vbs" file must be placed in the same folder as the table.\r
'\r
'Dim tnopb, nosf\r
'\r
'tnopb = 4	' <<<<< SET to the "Total Number Of Possible Balls" in play at any one time\r
'nosf = 10	' <<<<< SET to the "Number Of Sound Files" used / B2B collision volume levels\r
'\r
'ExecuteGlobal GetTextFile("B2Bcollision.vbs")\r
'\r
' The following allows this table to be run in VP9 or VP8\r
'Dim trig	' For a VP9 or VP8 option\r
'If VPBuildVersion = 902 Then\r
'	For Each trig in Newb\r
'		trig.enabled = False ' If VP9, turn off triggers and use kicker_UnHit events\r
'	Next\r
'End If\r
'\r
' 4) For each and every kicker that creates and/or destroys balls you must add a command\r
'	 for ball identification... This is very important when adapting a table. If you get\r
'	 an error while playing during a multiball sequence, you may have missed adding code\r
'	 to a kicker's Hit or unHit event or the command code was not placed in the proper\r
'	 location. Also note that not all kickers create and destroy balls.\r
'\r
'	 First: Determine which kickers destroy balls and insert "ClearBallid" into the kicker's\r
'	 Hit sub. This must be placed before a ball is destroyed to clear the ball object ID.\r
'\r
' Example below:\r
'\r
'Sub Kicker1_Hit() ClearBallid : AddBall me : End Sub	'AddBall - simulating a VPM command\r
'Sub Kicker2_Hit() ClearBallid : Kicker2.DestroyBall : End Sub\r
'Sub Drain_Hit()\r
'	PlaySound "drain"\r
'	ClearBallid\r
'	Drain.DestroyBall\r
'End Sub\r
'\r
'	Second: for each kicker that creates balls, you need to call"NewBallid".\r
'	Note: Two options below, "A" is for VP9, "B" is for VP8 or earlier versions.\r
'\r
'	A) VP9 kickers UnHit sub do not exist, create them "Sub kickername_UnHit"\r
'Sub Kicker1_UnHit() NewBallid : End Sub\r
'Sub Kicker2_UnHit() NewBallid : End Sub\r
'Sub Kicker3_UnHit() NewBallid : End Sub\r
'\r
'	B) VP8 kickers do not have UnHit events so create a trigger upon each kicker.\r
'Sub Newb_UnHit(index) NewBallid : End Sub	' Use a collection of the triggers.\r
'Sub TriggerK1_UnHit() NewBallid : End Sub	' Or individual subs for each trigger.\r
'Sub TriggerK2_UnHit() NewBallid : End Sub\r
'Sub TriggerK3_UnHit() NewBallid : End Sub\r
'\r
' Note: In VP9, if a kicker is disabled, its UnHit event will not work! You must create a trigger (at ' the kicker) and a "Sub trigger_UnHit" event to call the "NewBallid" command when a new ball is kicked.\r
'\r
'______________________________________________________________________________________\r
'\r
'		================================================\r
'		======== Ball to Ball Collision Effects ========\r
'		================================================\r
'			A brief description of operation\r
'\r
' Features...\r
'\r
' * This code senses ball-to-ball proximity to determine a collision and then calculates\r
' the collision force (cForce) to select a varying sound level or volume.\r
'\r
' * Any number of sound levels/files can be used and set by the table author.\r
'\r
' * Any number of balls can be set by the author, however the quantity is limited by what\r
' the individual computer can handle. The majority of tables use only a few balls at\r
' one time, so hopefully this shouldn't be an issue for most people.\r
'\r
' To combat this, the XYdata_Timer interval is self regulating to help retain performance.\r
' There is also an auto-shutoff, "coff" collision off variable, which is triggered by\r
' the timer interval if it should go too high.\r
'\r
' The main elements or commands used for this B2B collision sound effects are...\r
' 1) PlaySound("collide" & cForce)\r
'	This line selects and plays the proper wav file, combining "collide" with the\r
'	collision force for a variable sound level or volume. So the files are named...\r
'		"collide0", "collide1"... thru "collide9".\r
'\r
' 2) cForce = Cint((abs(TotalVel(cb1,id3)*Cos(cAngle-bAngle1))+abs(TotalVel(cb2,id3)*Cos(cAngle-bAngle2))))\r
'	There are more lines for the cForce calculations, but this main equation works by\r
'	taking the total velocity of each ball and multiplying it by the difference between\r
'	the collision angle and the angle of the traveling ball. In other words, a head on\r
'	collision and/or higher velocity produces a louder sound than a glancing blow.\r
'\r
' 3) XYdata_Timer...\r
'	This timer collects the balls' coordinates and velocities. It then determines\r
'	if two balls are close enough for a collision to occur.\r
'\r
' 4) Identifying the balls for reading the ball coordinates and velocities...\r
'	Unfortunately balls don't have scriptable hit events, so they must be identified\r
'	and set as an object whenever they are created. Balls then need to be marked as\r
'	inactive when one is destroyed. This is taken care of by the "NewBallID" and\r
'	"ClearBallid" subs.\r
'\r
'=======================================================\r
' Detailed descriptions are given below within the code\r
'=======================================================\r
\r
Option Explicit\r
\r
ReDim cball(tnopb), ballStatus(tnopb)\r
Dim iball, cnt, coff, errMessage\r
\r
XYdata.interval = 1			' Timer interval starts at 1 for the highest ball data sample rate\r
coff = False				' Collision off set to false\r
\r
For cnt = 0 to ubound(ballStatus)	' Initialize/clear all ball stats, 1 = active, 0 = non-existant\r
	ballStatus(cnt) = 0\r
Next\r
\r
'======================================================\r
' <<<<<<<<<<<<<< Ball Identification >>>>>>>>>>>>>>\r
'======================================================\r
' Call this sub from every kicker(or plunger) that creates a ball.\r
Sub NewBallID						' Assign new ball object and give it ID for tracking\r
	For cnt = 1 to ubound(ballStatus)	' Loop through all possible ball IDs\r
	If ballStatus(cnt) = 0 Then		' If ball ID is available...\r
	Set cball(cnt) = ActiveBall		' Set ball object with the first available ID\r
	cball(cnt).uservalue = cnt		' Assign the ball's uservalue to it's new ID\r
	ballStatus(cnt) = 1				' Mark this ball status active\r
	ballStatus(0) = ballStatus(0)+1 ' Increment ballStatus(0), the number of active balls\r
	If coff = False Then			' If collision off, overrides auto-turn on collision detection\r
									' If more than one ball active, start collision detection process\r
	If ballStatus(0) > 1 and XYdata.enabled = False Then XYdata.enabled = True\r
	End If\r
	Exit For					' New ball ID assigned, exit loop\r
	End If\r
	Next\r
'	Debugger					' For demo only, display stats\r
End Sub\r
\r
' Call this sub from every kicker that destroys a ball, before the ball is destroyed.\r
Sub ClearBallid\r
	On Error Resume Next				' Error handling for debugging purposes\r
	iball = ActiveBall.uservalue		' Get the ball ID to be cleared\r
	cball(iball).UserValue = 0			' Clear the ball ID\r
	If Err Then Msgbox Err.description & vbCrLf & iball\r
		ballStatus(iBall) = 0			' Clear the ball status\r
	ballStatus(0) = ballStatus(0)-1		' Subtract 1 ball from the # of balls in play\r
	On Error Goto 0\r
End Sub\r
\r
'=====================================================\r
' <<<<<<<<<<<<<<<<< XYdata_Timer >>>>>>>>>>>>>>>>>\r
'=====================================================\r
' Ball data collection and B2B Collision detection.\r
ReDim baX(tnopb,4), baY(tnopb,4), bVx(tnopb,4), bVy(tnopb,4), TotalVel(tnopb,4)\r
Dim cForce, bDistance, nosf, xyTime, cFactor, id, id2, id3, B1, B2\r
\r
Sub XYdata_Timer()\r
	' xyTime... Timers will not loop or start over 'til it's code is finished executing. To maximize\r
	' performance, at the end of this timer, if the timer's interval is shorter than the individual\r
	' computer can handle this timer's interval will increment by 1 millisecond.\r
	xyTime = Timer+(XYdata.interval*.001)	' xyTime is the system timer plus the current interval time\r
	' Ball Data... When a collision occurs a ball's velocity is often less than it's velocity before the\r
	' collision, if not zero. So the ball data is sampled and saved for four timer cycles.\r
	If id2 >= 4 Then id2 = 0						' Loop four times and start over\r
	id2 = id2+1										' Increment the ball sampler ID\r
	For id = 1 to ubound(ballStatus)				' Loop once for each possible ball\r
	If ballStatus(id) = 1 Then						' If ball is active...\r
		baX(id,id2) = round(cball(id).x,2)			' Sample x-coord\r
		baY(id,id2) = round(cball(id).y,2)			' Sample y-coord\r
		bVx(id,id2) = round(cball(id).velx,2)		' Sample x-velocity\r
		bVy(id,id2) = round(cball(id).vely,2)		' Sample y-velocity\r
		TotalVel(id,id2) = (bVx(id,id2)^2+bVy(id,id2)^2)		' Calculate total velocity\r
		If TotalVel(id,id2) > TotalVel(0,0) Then TotalVel(0,0) = int(TotalVel(id,id2))\r
	End If\r
	Next\r
	' Collision Detection Loop - check all possible ball combinations for a collision.\r
	' bDistance automatically sets the distance between two colliding balls. Zero milimeters between\r
	' balls would be perfect, but because of timing issues with ball velocity, fast-traveling balls\r
	' prevent a low setting from always working, so bDistance becomes more of a sensitivity setting,\r
	' which is automated with calculations using the balls' velocities.\r
	' Ball x/y-coords plus the bDistance determines B2B proximity and triggers a collision.\r
	id3 = id2 : B2 = 2 : B1 = 1						' Set up the counters for looping\r
	Do\r
	If ballStatus(B1) = 1 and ballStatus(B2) = 1 Then	' If both balls are active...\r
		bDistance = int((TotalVel(B1,id3)+TotalVel(B2,id3))^1.04)\r
		If ((baX(B1,id3)-baX(B2,id3))^2+(baY(B1,id3)-baY(B2,id3))^2)<2800+bDistance Then collide B1,B2 : Exit Sub\r
		End If\r
		B1 = B1+1							' Increment ball1\r
		If B1 >= ubound(ballStatus) Then Exit Do		' Exit loop if all ball combinations checked\r
		If B1 >= B2 then B1 = 1:B2 = B2+1				' If ball1 >= reset ball1 and increment ball2\r
	Loop\r
\r
	If ballStatus(0) <= 1 Then XYdata.enabled = False	' Turn off timer if one ball or less\r
\r
	If XYdata.interval >= 40 Then coff = True : XYdata.enabled = False	' Auto-shut off\r
	If Timer > xyTime * 3 Then coff = True : XYdata.enabled = False		' Auto-shut off\r
	If Timer > xyTime Then XYdata.interval = XYdata.interval+1			' Increment interval if needed\r
End Sub\r
\r
'=========================================================\r
' <<<<<<<<<<< Collide(ball id1, ball id2) >>>>>>>>>>>\r
'=========================================================\r
'Calculate the collision force and play sound accordingly.\r
Dim cTime, cb1,cb2, avgBallx, cAngle, bAngle1, bAngle2\r
\r
Sub Collide(cb1,cb2)\r
' The Collision Factor(cFactor) uses the maximum total ball velocity and automates the cForce calculation, maximizing the\r
' use of all sound files/volume levels. So all the available B2B sound levels are automatically used by adjusting to a\r
' player's style and the table's characteristics.\r
	If TotalVel(0,0)/1.8 > cFactor Then cFactor = int(TotalVel(0,0)/1.8)\r
' The following six lines limit repeated collisions if the balls are close together for any period of time\r
	avgBallx = (bvX(cb2,1)+bvX(cb2,2)+bvX(cb2,3)+bvX(cb2,4))/4\r
	If avgBallx < bvX(cb2,id2)+.1 and avgBallx > bvX(cb2,id2)-.1 Then\r
	If ABS(TotalVel(cb1,id2)-TotalVel(cb2,id2)) < .000005 Then Exit Sub\r
	End If\r
	If Timer < cTime Then Exit Sub\r
	cTime = Timer+.1				' Limits collisions to .1 seconds apart\r
' GetAngle(x-value, y-value, the angle name) calculates any x/y-coords or x/y-velocities and returns named angle in radians\r
	GetAngle baX(cb1,id3)-baX(cb2,id3), baY(cb1,id3)-baY(cb2,id3),cAngle	' Collision angle via x/y-coordinates\r
	id3 = id3 - 1 : If id3 = 0 Then id3 = 4	' Step back one xyData sampling for a good velocity reading\r
	GetAngle bVx(cb1,id3), bVy(cb1,id3), bAngle1	' ball 1 travel direction, via velocity\r
	GetAngle bVx(cb2,id3), bVy(cb2,id3), bAngle2	' ball 2 travel direction, via velocity\r
' The main cForce formula, calculating the strength of a collision\r
	cForce = Cint((abs(TotalVel(cb1,id3)*Cos(cAngle-bAngle1))+abs(TotalVel(cb2,id3)*Cos(cAngle-bAngle2))))\r
		If cForce < 4 Then Exit Sub			' Another collision limiter\r
	cForce = Cint((cForce)/(cFactor/nosf))	' Divides up cForce for the proper sound selection.\r
	If cForce > nosf-1 Then cForce = nosf-1	' First sound file 0(zero) minus one from number of sound files\r
	PlaySound("collide" & cForce)			' Combines "collide" with the calculated sound level and play sound\r
End Sub\r
\r
'=================================================\r
' <<<<<<<< GetAngle(X, Y, Anglename) >>>>>>>>\r
'=================================================\r
' A repeated function which takes any set of coordinates or velocities and calculates an angle in radians.\r
Dim Xin,Yin,rAngle,Radit,wAngle\r
Const Pi = 3.14159265358979\r
\r
Sub GetAngle(Xin, Yin, wAngle)\r
	If Sgn(Xin) = 0 Then\r
		If Sgn(Yin) = 1 Then rAngle = 3 * Pi/2 Else rAngle = Pi/2\r
		If Sgn(Yin) = 0 Then rAngle = 0\r
	Else\r
		rAngle = atn(-Yin/Xin)			' Calculates angle in radians before quadrant data\r
	End If\r
	If sgn(Xin) = -1 Then Radit = Pi Else Radit = 0\r
	If sgn(Xin) = 1 and sgn(Yin) = 1 Then Radit = 2 * Pi\r
	wAngle = round((Radit + rAngle),4)		' Calculates angle in radians with quadrant data\r
	'"wAngle = round((180/Pi) * (Radit + rAngle),4)" ' Will convert radian measurements to degrees - to be used in future\r
End Sub\r
`,ee=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Bally Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid   = 19\r
' Cabinet switches\r
Const swSelfTest       = -7\r
Const swCPUDiag        = -6\r
Const swSoundDiag      = -5\r
Const swTilt           =  7\r
Const swBallRollTilt   =  2\r
Const swSlamTilt       = 16\r
Const swCoin3          =  9\r
Const swCoin2          = 10\r
Const swCoin1          = 11\r
Const swStartButton    =  6\r
\r
Const swLRFlip         = 82\r
Const swLLFlip         = 84\r
Const swURFlip         = 81\r
Const swULFlip         = 83\r
\r
' Help Window\r
vpmSystemHelp = "Bally -17/-35 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"        & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic"   & vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub ballyShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame  0,0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("ballyShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ne=`'Last Updated in VBS v3.60\r
'BallyG for use with Granny and the Gators hybrid videogame/pinball\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Bally Data\r
'-------------------------\r
' Cabinet switches\r
Const swSelfTest       = -7\r
Const swCPUDiag        = -6\r
Const swSoundDiag      = -5\r
Const swTilt           =  7\r
Const swBallRollTilt   =  2\r
Const swSlamTilt       = 16\r
Const swCoin3          = 11\r
Const swCoin2          = 10\r
Const swCoin1          =  9\r
Const swStartButton    =  6\r
\r
Const swLRFlip         = 82\r
Const swLLFlip         = 84\r
\r
' Help Window\r
vpmSystemHelp = "Bally -17/-35 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"        & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic"   & vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub ballyShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame  0,0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("ballyShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		If keycode = RightFlipperKey Then .Switch(swLRFlip) = True\r
		If keycode = LeftFlipperKey  Then .Switch(swLLFlip) = True\r
		Select Case keycode\r
			Case keyInsertCoin1  .Switch(swCoin1) = 1 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  .Switch(swCoin2) = 1 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  .Switch(swCoin3) = 1 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		If keycode = RightFlipperKey Then .Switch(swLRFlip) = False\r
		If keycode = LeftFlipperKey  Then .Switch(swLLFlip) = False\r
		Select Case keycode\r
			Case keyInsertCoin1  .Switch(swCoin1) = 0\r
			Case keyInsertCoin2  .Switch(swCoin2) = 0\r
			Case keyInsertCoin3  .Switch(swCoin3) = 0\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,re=`'Last Updated in VBS v3.50\r
'Similar to gts3.vbs except for some switches\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' GTS3 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 32\r
' FrontDoor switches\r
Const swCoin1       = 00\r
Const swCoin2       = 01\r
Const swCoin3       = 02\r
' Cabinet switches\r
Const swStartButton = 03\r
Const swLeftAdvance = 04\r
Const swRightAdvance = 05\r
Const swLRFlip      = 141 '06\r
Const swLLFlip      = 143 '07\r
\r
Const swDiagnostic  = -8\r
Const swTilt        = -7\r
Const swSlamTilt    = -6\r
\r
' Help Window\r
vpmSystemHelp = "Class Of 1812 keys:" & vbNewLine &_\r
  vpmKeyName(StartGameKey)  & vbTab & "Start Game" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Left Coin Chute" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Right Coin Chute" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Center Coin Chute" & vbNewLine &_\r
  vpmKeyName(keySelfTest)     & vbTab & "Diagnostic"     & vbNewLine &_\r
  vpmKeyName(keyDown)  & vbTab & "Left Advance Button" & vbNewLine &_\r
  vpmKeyName(keyUp)  & vbTab & "Right Advance Button" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Options Menu (No Dips)\r
Private Sub Class1812ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm  80, 0, "Option Menu"\r
		.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("Class1812ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swDiagnostic)  = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyDown         .Switch(swLeftAdvance) = True\r
			Case keyUp           .Switch(swRightAdvance) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case keyDown         .Switch(swLeftAdvance) = False\r
			Case keyUp           .Switch(swRightAdvance) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swDiagnostic)  = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ie=`'*************************************************************************************\r
'Utilidades para ahorrar trabajo en las converciones de Future Pinball a VPX VER.1.1\r
'*************************************************************************************\r
Option Explicit\r
\r
Const FPVPXv = 1.02\r
\r
'*****************\r
' PARA LAS LUCES\r
'*****************\r
\r
Const BulbOn = "1"  'Luz encendida\r
Const BulbOff = "0" 'Luz Apagada\r
Const BulbBlink = "2" 'Luz intermitente\r
\r
'---------------------------------------------\r
' Algunas Variables\r
\r
Dim fpTilted:If IsEmpty(Eval("Tilted"))=true Then fpTilted=false Else fpTilted=Tilted 'Falta\r
\r
Dim nvCredits:If IsEmpty(Eval("Credits"))=true Then nvCredits=0 Else nvCredits=Credits 'Creditos\r
\r
Dim nvTotalGamesPlayed:If IsEmpty(Eval("TotalGamesPlayed"))=true Then nvTotalGamesPlayed=0 Else nvTotalGamesPlayed=TotalGamesPlayed 'Total de partidas Jugadas\r
\r
Dim nvScore:If IsEmpty(Eval("Score"))=true Then nvScore=Array(0,0,0,0) Else nvScore=Score 'Marcador\r
\r
Dim nvJackpot:If IsEmpty(Eval("Jackpot"))=true Then nvJackpot=0 Else nvJackpot=Jackpot 'Jackpot\r
`,ae=`'Last Updated in VBS v3.61\r
'-Added accounting reset switch (Inkochnito)\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' GamePlan Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 16\r
' Cabinet switches\r
Const swSelfTest     = 26\r
Const swCPUDiag      = -6\r
Const swSoundDiag    = -7\r
Const swTilt         =  8\r
Const swSlamTilt     =  3\r
Const swCoin3        =  6\r
Const swCoin2        =  5\r
Const swCoin1        =  7\r
Const swStartButton  =  2\r
Const swHiScoreReset =  1 'accounting reset\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 81\r
Const swULFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "GamePlan keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keyHiScoreReset)& vbTab & "accounting/high score reset" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"        & vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub gpShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame  0,0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("gpShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyHiScoreReset .Switch(swHiScoreReset)= True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyHiScoreReset .Switch(swHiScoreReset)= False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,se=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Hankin Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 19\r
' Cabinet switches\r
Const swSelfTest     = -7\r
Const swCPUDiag      = -4\r
Const swSoundDiag    = -3\r
Const swTilt         =  2\r
Const swBallRollTilt =  2\r
Const swSlamTilt     =  9\r
Const swCoin1        = 16\r
Const swStartButton  =  3\r
\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 81\r
Const swULFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Hankin keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"        & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic"   & vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub HankinShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 245, "DIP Switches"\r
			.AddFrame 0, 0, 95, "Credit/Coins", &H07,_\r
			  Array("1/1",&H00,"1/2",&H01,"1/3",&H02,"1/4",&H03,_\r
			        "1/1, 3/2",&H04,"1/2, 2/3",&H05,"2/3, 4/5",&H06,"2/5",&H07)\r
			.AddFrame 0, 132, 95, "High Score Award", &H60,_\r
			  Array("No award",&H00,"1 free game",&H20,"2 free games",&H40,"3 free games",&H60)\r
			.AddFrame 0, 209, 95, "Maximum Credits", &H60000,_\r
			  Array("5",&H000000,"10",&H20000,"15",&H40000,"20",&H60000)\r
\r
			.AddFrame 110, 0, 190, "Misc",0,_\r
			  Array("High score: Free Games/Extra Ball",&H00000008,_\r
			        "Match Feature",&H00000010,_\r
			        "Game Over Tune",&H00000080,_\r
			        "Coin Alarm Sound",&H00000100,_\r
			        "'4' Target memory",&H00000200,_\r
			        "Background Sound",&H00000400,_\r
			        "Coin Alarm",&H00004000,_\r
			        "3/5 Balls",32768,_\r
			        "Free Game Sound",&H00200000,_\r
			        "Coin Counter Reset",&H00400000,_\r
			        "Time Out Feature",&H00800000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("HankinShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin ' dupe of keyInsertCoin1 as only 2 coin slots\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin ' dto.\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin ' dto.\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,le=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' LTD System 4 Data\r
'-------------------------\r
' Cabinet switches\r
Const swSelfTest    = 9\r
Const swTilt        = 18\r
Const swCoin3       = 13\r
Const swCoin2       = 14\r
Const swStartButton = 17\r
Const swEnter       = 10\r
\r
Const swLRFlip      = 82\r
Const swLLFlip      = 84\r
\r
' Help Window\r
vpmSystemHelp = "LTD System 4 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyEnter) & vbTab & "Enter (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keySelfTest) & vbTab & "Self Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub LTDShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("LTDShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyEnter        .Switch(swEnter)       = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyEnter        .Switch(swEnter)       = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,oe=`'Last Updated in VBS v3.57\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' LTD System 3 Data\r
'-------------------------\r
' Cabinet switches\r
Const swSelfTest    = -1\r
Const swTilt        = 1\r
Const swCoin2       = -7\r
Const swStartButton = 30\r
\r
Const swLRFlip      = 82\r
Const swLLFlip      = 84\r
\r
' Help Window\r
vpmSystemHelp = "LTD System 3 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyEnter) & vbTab & "Enter (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keySelfTest) & vbTab & "Self Test"\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,pe=`'Last Updated in VBS v3.58\r
' Written by Wiesshund to run Haunted Hotel ROM, feel free to improve this\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' LTD System 4 Data\r
'-------------------------\r
' Cabinet switches\r
Const swSelfTest    = 9\r
Const swTilt        = -6\r
Const swCoin1       = 13\r
Const swCoin2       = 13\r
Const swStartButton = 14\r
Const swEnter       = 10\r
Const swDown        = 11\r
\r
Const swURFlip      = 3\r
Const swULFlip      = 4\r
Const swLRFlip      = 84\r
Const swLLFlip      = 82\r
\r
' Help Window\r
vpmSystemHelp = "LTD System 4 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyEnter) & vbTab & "Enter (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keySelfTest) & vbTab & "Self Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub LTDShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("LTDShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False\r
				If keycode = RightMagnaSave then \r
					.Switch(swURFlip) = True \r
					vpmKeyDown = False\r
				End If\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False\r
				If keycode = LeftMagnaSave Then\r
					.Switch(swULFlip) = True\r
					vpmKeyDown = False\r
				End If\r
			Case RightMagnaSave .Switch(swURFlip) = True : vpmKeyDown = False\r
			Case LeftMagnaSave  .Switch(swULFlip) = True : vpmKeyDown = False\r
			Case StagedLeftFlipperKey .Switch(swULFlip) = True : vpmKeyDown = False\r
			Case StagedRightFlipperKey .Switch(swURFlip) = True : vpmKeyDown = False\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyEnter        .Switch(swEnter)       = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False\r
				If keycode = RightMagnaSave then \r
					.Switch(swURFlip) = False \r
					vpmKeyUp = False\r
				End If\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False\r
				If keycode = LeftMagnaSave Then\r
					.Switch(swULFlip) = False\r
					vpmKeyUp = False\r
				End If\r
			Case RightMagnaSave .Switch(swURFlip) = False : vpmKeyUp = False\r
			Case LeftMagnaSave  .Switch(swULFlip) = False : vpmKeyUp = False\r
			Case StagedLeftFlipperKey .Switch(swULFlip) = False : vpmKeyUp = False\r
			Case StagedRightFlipperKey .Switch(swURFlip) = False : vpmKeyUp = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyEnter        .Switch(swEnter)       = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,me=`'Last Updated in VBS v3.58\r
' Written by Wiesshund to run Pecmen ROM, feel free to improve this\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' LTD System 4 Data\r
'-------------------------\r
' Cabinet switches\r
Const swSelfTest    = 9\r
Const swTilt        = -6\r
Const swCoin1       = 13\r
Const swCoin2       = 60\r
Const swStartButton = 14\r
Const swEnter       = 10\r
Const swDown        = 11\r
\r
Const swRFlip      = 1\r
Const swLFlip      = 2\r
Const swRflipHold = 84\r
Const swLflipHold = 82\r
' flippers not working, solenoids disengage and dont reliably fire\r
Const MazeDirection = 58 ' right flip\r
Const MazeMove = 57 ' left flip\r
\r
' Help Window\r
vpmSystemHelp = "LTD System 4 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyEnter) & vbTab & "Enter (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keySelfTest) & vbTab & "Self Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub LTDShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("LTDShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(MazeMove) = 1 : .Switch(swRFlip) = 1 : .Switch(swRflipHold) = 1 : vpmKeyDown = False '\r
			Case LeftFlipperKey  .Switch(MazeDirection) = 1 : .Switch(swLFlip) = 1 : .Switch(swLflipHold) = 1  : vpmKeyDown = False ' \r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyEnter        .Switch(swEnter)       = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(MazeMove) = 0 : .Switch(swRFlip) = 0 : .Switch(swRflipHold) = 0 : vpmKeyUp = False '\r
			Case LeftFlipperKey  .Switch(MazeDirection) = 0 : .Switch(swLFlip) = 0 : .Switch(swLflipHold) = 0 : vpmKeyUp = False '\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyEnter        .Switch(swEnter)       = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ue=`Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
' Cabinet switches\r
Const swCoin1  = 0\r
Const swCoin2  = 1\r
Const swCoin3  = 2\r
Const swCoin4  = 3\r
Const swCancel = 4\r
Const swDown   = 5\r
Const swUp     = 6\r
Const swEnter  = 7\r
Const swLLFlip = 9\r
Const swLRFlip = 11\r
Const swULFlip = 13\r
Const swURFlip = 15\r
\r
Private swStartButtonX,swCoinDoorX,swSlamTiltX\r
On Error Resume Next\r
If swStartButton = 34 Or Err Then swStartButtonX = 34 Else swStartButtonX = swStartButton\r
If swCoinDoor    = 22 Or Err Then swCoinDoorX    = 22 Else swCoinDoorX    = swCoinDoor\r
If swSlamTilt    = 21 Or Err Then swSlamTiltX    = 21 Else swSlamTiltX    = swSlamTilt\r
On Error Goto 0\r
\r
\r
' Help Window\r
vpmSystemHelp = "P-ROC PDb Keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1"     & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2"     & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3"     & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4)  & vbTab & "Insert Coin #4"     & vbNewLine &_\r
  vpmKeyName(keyCancel)       & vbTab & "Escape (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keyDown)         & vbTab & "Down (Coin Door)"   & vbNewLine &_\r
  vpmKeyName(keyUp)           & vbTab & "Up (Coin Door)"     & vbNewLine &_\r
  vpmKeyName(keyEnter)        & vbTab & "Enter (Coin Door)"  & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"          & vbNewLine &_\r
  vpmKeyName(keyCoinDoor)     & vbTab & "Open/Close Coin Door"\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	Dim swCopy\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin4'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    swCopy = swStartButtonX : .Switch(swCopy) = True\r
			Case keyCancel       swCopy = swCancel :       .Switch(swCopy) = True\r
			Case keyDown         swCopy = swDown :         .Switch(swCopy) = True\r
			Case keyUp           swCopy = swUp :           .Switch(swCopy) = True\r
			Case keyEnter        swCopy = swEnter :        .Switch(swCopy) = True\r
			Case keySlamDoorHit  swCopy = swSlamTiltX :    .Switch(swCopy) = True\r
			Case keyCoinDoor     swCopy = swCoinDoorX :    If toggleKeyCoinDoor Then .Switch(swCopy) = Not .Switch(swCopy) Else .Switch(swCopy) = Not inverseKeyCoinDoor\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	Dim swCopy\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case keyCancel       swCopy = swCancel :       .Switch(swCopy) = False\r
			Case keyDown         swCopy = swDown :         .Switch(swCopy) = False\r
			Case keyUp           swCopy = swUp :           .Switch(swCopy) = False\r
			Case keyEnter        swCopy = swEnter :        .Switch(swCopy) = False\r
			Case keySlamDoorHit  swCopy = swSlamTiltX :    .Switch(swCopy) = False\r
			Case StartGameKey    swCopy = swStartButtonX : .Switch(swCopy) = False\r
			Case keyCoinDoor     swCopy = swCoinDoorX :    If toggleKeyCoinDoor = False Then .Switch(swCopy) = inverseKeyCoinDoor\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,de=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Playmatic System 1 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 17\r
' Cabinet switches\r
Const swSelfTest     = 59 'enters diagnostics\r
Const swTilt         = 5  'playfield tilt switch\r
Const swSlamTilt     = 62 'clears all credits and resets machine\r
Const swCoin3        = 56 'defaults to 1 coin per credit\r
Const swCoin2        = 57 'defaults to 2 coins per credit\r
Const swCoin1        = 58 'defaults to 1 coin for 3 credits\r
Const swStartButton  = 7  'starts game\r
Const swReplay1      = 63 'Sets Replay Level 1 - hold down for 2 or 3 seconds to increment\r
Const swReplay2      = 64 'Sets Replay Level 2 - hold down for 2 or 3 seconds to increment\r
Const swReplay3      = 65 'Sets Replay Level 3 - hold down for 2 or 3 seconds to increment\r
\r
Const swLRFlip       = 102\r
Const swLLFlip       = 104\r
\r
' Help Window\r
vpmSystemHelp = "Playmatic System 1 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"      & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"      & vbNewLine &_\r
  vpmKeyName(keyDown)        & vbTab & "Replay Level 1" & vbNewLine &_\r
  vpmKeyName(keyUp)          & vbTab & "Replay Level 2" & vbNewLine &_\r
  vpmKeyName(keyEnter)       & vbTab & "Replay Level 3"\r
\r
' Dip Switch / Options Menu\r
Private Sub play1ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame  0,0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("play1ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyDown         .Switch(swReplay1)     = True\r
			Case keyUp           .Switch(swReplay2)     = True\r
			Case keyEnter        .Switch(swReplay3)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyDown         .Switch(swReplay1)     = False\r
			Case keyUp           .Switch(swReplay2)     = False\r
			Case keyEnter        .Switch(swReplay3)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ce=`'Last Updated in VBS v3.61\r
\r
'Playmatic System 2\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Playmatic System 2 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 8  'jittery\r
' Cabinet switches\r
Const swSelfTest     = 6  'enters software-setup\r
Const swTilt         = 7  'playfield tilt switch\r
'Const swSlamTilt    =    'clears all credits and resets machine\r
Const swCoin3        = 3  'defaults to 1 coin per credit\r
Const swCoin2        = 2  'defaults to 2 coins per credit\r
Const swCoin1        = 1  'defaults to 1 coin for 3 credits\r
Const swStartButton  = 4  'starts game\r
Const swLRFlip       = 102\r
Const swLLFlip       = 104\r
Const swURFlip       = 103\r
Const swULFlip       = 105\r
\r
' Help Window\r
vpmSystemHelp = "Playmatic System 2 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Adjustments"\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			'Case keyDown         .Switch(swReplay1)     = True\r
			'Case keyUp           .Switch(swReplay2)     = True\r
			'Case keyEnter        .Switch(swReplay3)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			'Case keyDown         .Switch(swReplay1)     = False\r
			'Case keyUp           .Switch(swReplay2)     = False\r
			'Case keyEnter        .Switch(swReplay3)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Se=`'Playmatic System 4\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Playmatic System 2 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 1\r
' Cabinet switches\r
Const swSelfTest     = 8 'test switch\r
Const swTilt         = 4 'playfield tilt switch\r
'Const swSlamTilt    =   'clears all credits and resets machine\r
Const swCoin3        = 3 'defaults to 1 coin per credit\r
Const swCoin2        = 2 'defaults to 2 coins per credit\r
Const swCoin1        = 1 'defaults to 1 coin for 3 credits\r
Const swStartButton  = 7 'starts game\r
'5=variacion de zona - variational zone\r
'6=reposo bola - resting ball, probably the ball trough switch\r
Const swLRFlip       = 102\r
Const swLLFlip       = 104\r
\r
' Help Window\r
vpmSystemHelp = "Playmatic System 2 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Adjustments"\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			'Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			'Case keyDown         .Switch(swReplay1)     = True\r
			'Case keyUp           .Switch(swReplay2)     = True\r
			'Case keyEnter        .Switch(swReplay3)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			'Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			'Case keyDown         .Switch(swReplay1)     = False\r
			'Case keyUp           .Switch(swReplay2)     = False\r
			'Case keyEnter        .Switch(swReplay3)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,be=`'*******************************************************************************************************************\r
\r
\r
'***UltraDMD_Options.vbs version 1.0***'\r
'\r
'by ninuzzu\r
'\r
'This script will load UltraDMD and bring a GUI to change some options on the fly.\r
'Use it for all your UDMD based original tables!\r
'\r
'--------\r
'USAGE\r
'--------\r
'Copy this script in your VP Scripts folder\r
'Add this code at the very beginning of your table script, so the table loads it:\r
'\r
'On Error Resume Next\r
'ExecuteGlobal GetTextFile("UltraDMD_Options.vbs")\r
'If Err Then MsgBox "Unable to open UltraDMD_Options.vbs. Ensure that it is placed in the Scripts folder"\r
'On Error Goto 0\r
'\r
'\r
'Now define the name for your table(this is NOT the table name you find in the Properties window of the VP Editor,\r
'this is a unique name and it's used to save the settings inside the VPReg.stg, and by the B2S aswell), e.g.:\r
'\r
'Const cGameName = "uefa_cl"\r
'\r
'Define the UltraDMD Project folder name (the folder that contains dmd assets, only the name, without the .UltraDMD)\r
'\r
'Const cAssetsFolder="ChampionsLeague"\r
'\r
'Add the default text color to use with your table (right click on UDMD window to get the color list). e.g.:\r
'\r
'Const cDefaultDMDColor = "PowderBlue"\r
'\r
'In order to initialize the options and load UltraDMD, add in table_init:\r
'\r
'InitUltraDMD cAssetsFolder,cGameName\r
'\r
'For example:\r
'\r
'Sub table1_init\r
'InitUltraDMD cAssetsFolder,cGameName\r
'....\r
'End Sub\r
'\r
'\r
'Lastly, on table exit, add\r
'\r
'ExitUltraDMD\r
'\r
'So the options will reset and DMD will close correctly when you exit the table:\r
'\r
'Sub table1_exit\r
'ExitUltraDMD\r
'....\r
'End Sub\r
'\r
'When you are ingame, you can open the options menu anytime with\r
'\r
'ShowDMDOptions cGameName\r
'\r
'Let's say you want to open it using the F6 key, you'll write (in the keydown sub):\r
'\r
'If keycode = 64 Then ShowDMDOptions cGameName\r
'\r
'--------\r
'INFO\r
'--------\r
'There are 4 options you can change in the GUI:\r
'1)The 1st option sets the DMD to render scenes in Full Color, valid only with ultradmd 1.4 and above\r
'2)The 2nd changes the DMD text color\r
'3)The 3rd changes the DMD size\r
'4)The 4th changes the DMD position\r
\r
\r
\r
\r
Option Explicit\r
\r
Dim UltraDMD,TableShowOptions,UDMDOptions,DMDOldColor,DMDOldFullColor\r
Dim optOpenAtStart,optUseFullColor,optDMDColorChange,optDMDColorType,optUDMDWidth,optUDMDHeight,optDMDPosX,optDMDPosY\r
\r
Const UltraDMD_VideoMode_Stretch=0, UltraDMD_VideoMode_Top = 1, UltraDMD_VideoMode_Middle = 2, UltraDMD_VideoMode_Bottom = 3\r
Const UltraDMD_Animation_FadeIn = 0, UltraDMD_Animation_FadeOut = 1, UltraDMD_Animation_ZoomIn = 2, UltraDMD_Animation_ZoomOut = 3\r
Const UltraDMD_Animation_ScrollOffLeft = 4, UltraDMD_Animation_ScrollOffRight = 5, UltraDMD_Animation_ScrollOnLeft = 6, UltraDMD_Animation_ScrollOnRight = 7,_\r
UltraDMD_Animation_ScrollOffUp = 8,UltraDMD_Animation_ScrollOffDown = 9,UltraDMD_Animation_ScrollOnUp = 10,UltraDMD_Animation_ScrollOnDown = 11,UltraDMD_Animation_None = 14\r
\r
'Function to initialize dmd options and load UltraDMD\r
Function InitUltraDMD(ProjectFolderName,TableOptName)\r
	UDMDoptions = LoadValue(TableOptName,"DMD Options")					'load saved dmd options\r
	If UDMDoptions = "" Then											'if no existing options\r
		UDMDoptions = 1*2^0 + 0*2^1 + 1*2^2								'set dmd options to default options\r
		GetDMDOptions(TableOptName)										'get DMD Options\r
		TableShowOptions = createInput("ULTRADMD Options",TableOptName)	'show the options menu\r
	Else\r
		GetDMDOptions(TableOptName)\r
		If optOpenAtStart=1 Then											'if Enable Next Start was selected\r
			UDMDoptions = UDMDoptions - 1									'clear setting to avoid future executions\r
			GetDMDOptions(TableOptName)										'get DMD Options\r
			TableShowOptions = createInput("ULTRADMD Options",TableOptName)	'show the options menu\r
		End If\r
	End If\r
	LoadUltraDMD ProjectFolderName,TableOptName\r
End Function\r
\r
'Function to initialize UltraDMD\r
Function LoadUltraDMD(ProjectFolderName,TableOptName)\r
	Set UltraDMD = CreateObject("UltraDMD.DMDObject")\r
	' A Major version change indicates the version is no longer backward compatible\r
	If Not UltraDMD.GetMajorVersion = 1 Then\r
		MsgBox "Incompatible Version of UltraDMD found."\r
		QuitPlayer:Exit Function\r
	End If\r
	'Check if UMD v1.4 is running\r
	If UltraDMD.GetMinorVersion<4 AND optUseFullColor=1 Then\r
		MsgBox "Full Color not supported. Please upgrade to UltraDMD v1.4" & VbCrLf & "Exiting so changes will take effect..."\r
		Dim WshShell:Set WshShell = CreateObject("WScript.Shell")\r
		WshShell.RegWrite "HKCU\\Software\\UltraDMD\\fullcolor","False","REG_SZ"\r
		SaveValue TableOptName, "DMD Options", 1\r
		QuitPlayer:Exit Function\r
	End If\r
	UltraDMD.Init\r
	'Sets the project folder and video stretch mode\r
	Dim fso,curDir\r
	Set fso = CreateObject("Scripting.FileSystemObject")\r
	curDir = fso.GetAbsolutePathName(".")\r
	UltraDMD.SetProjectFolder curDir & "\\"& ProjectFolderName &".UltraDMD"\r
	If NOT fso.FolderExists(curDir & "\\"& ProjectFolderName &".UltraDMD") Then\r
		MsgBox ProjectFolderName & ".UltraDMD" & " not found." & VbCrLf & "Please copy it in the same folder as this table" & VbCrLf & "DMD animations can't be shown!!"\r
	End If\r
	UltraDMD.SetVideoStretchMode UltraDMD_VideoMode_Middle\r
End Function\r
\r
 'Function to reset the DMD color settings and close UltraDMD on table exit\r
Function ExitUltraDMD\r
	On Error Resume Next\r
	If UltraDMD.IsRendering Then UltraDMD.CancelRendering\r
	If Err.Number<>0 Then UltraDMD = Null:Exit Function\r
	Dim WshShell:Set WshShell = CreateObject("WScript.Shell")\r
	WshShell.RegWrite "HKCU\\Software\\UltraDMD\\color",DMDOldColor,"REG_SZ"\r
	WshShell.RegWrite "HKCU\\Software\\UltraDMD\\fullcolor",DMDOldFullColor,"REG_SZ"\r
	UltraDMD = Null\r
End Function\r
\r
'Function to show the dmd options menu on screen\r
Function ShowDMDOptions(TableOptName)\r
	GetDMDOptions(TableOptName):TableShowOptions = createInput("ULTRADMD Options",TableOptName)\r
End Function\r
\r
 'Function to get the DMD options from both registry and \\User\\VPReg.stg\r
Function GetDMDOptions(TableOptName)\r
	Dim WshShell:Set WshShell = CreateObject("WScript.Shell")\r
	On Error Resume Next\r
	WshShell.RegRead ("HKCU\\Software\\UltraDMD\\")\r
	If Err.number <> 0 Then\r
		On Error Goto 0\r
		'Resetting to defaults\r
		WshShell.RegWrite "HKCU\\Software\\UltraDMD\\fullcolor","False","REG_SZ"\r
		WshShell.RegWrite "HKCU\\Software\\UltraDMD\\color","OrangeRed","REG_SZ"\r
		WshShell.RegWrite "HKCU\\Software\\UltraDMD\\hideVDMD","False","REG_SZ"\r
	End If\r
	Dim tmp:tmp=UDMDoptions\r
	optUseFullColor=Int(tmp/2^2)\r
	tmp=tmp mod 2^2\r
	optDMDColorChange=Int(tmp/2)\r
	tmp=tmp mod 2\r
	optOpenAtStart=Int(tmp)\r
	tmp=tmp mod 1\r
	On Error Resume Next\r
	'temporary save the previous color and full color settings\r
	DMDOldColor=WshShell.RegRead ("HKCU\\Software\\UltraDMD\\color")\r
	DMDOldFullColor=WshShell.RegRead ("HKCU\\Software\\UltraDMD\\fullcolor")\r
	If DMDOldFullColor="" Then DMDOldFullColor = "False"\r
	On Error Resume Next\r
	optUDMDWidth = WshShell.RegRead ("HKCU\\Software\\UltraDMD\\w")\r
	optUDMDHeight = WshShell.RegRead ("HKCU\\Software\\UltraDMD\\h")\r
	optDMDPosX = WshShell.RegRead ("HKCU\\Software\\UltraDMD\\x")\r
	optDMDPosY = WshShell.RegRead ("HKCU\\Software\\UltraDMD\\y")\r
	'if user changed the color, remember the value\r
	If optDMDColorChange=0 Then optDMDColorType=cDefaultDMDColor Else optDMDColorType = LoadValue (TableOptName, "DMD Color") End If\r
	If optUDMDWidth = "" Then optUDMDWidth = 512\r
	If optUDMDHeight = "" Then optUDMDHeight = 128\r
	If optDMDPosX = "" Then optDMDPosX = 20\r
	If optDMDPosY = "" Then optDMDPosY = 20\r
	If optUseFullColor=0 Then\r
		WshShell.RegWrite "HKCU\\Software\\UltraDMD\\fullcolor","False","REG_SZ"\r
	Else\r
		WshShell.RegWrite "HKCU\\Software\\UltraDMD\\fullcolor","True","REG_SZ"\r
	End If\r
	WshShell.RegWrite "HKCU\\Software\\UltraDMD\\color",optDMDColorType,"REG_SZ"\r
	WshShell.Terminate\r
End Function\r
\r
'Function to create a window in HTML\r
Function createInput(title,TableOptName)\r
Dim sHTMLCode, status, optWindow\r
	'Set the HTML code for the window\r
	sHTMLCode = _\r
	"<html>" &_\r
	"<head>" &_\r
	"<style>" &_\r
	".button{" &_\r
	"position:absolute;" &_\r
	"color: black; border: 2px solid #000000;" &_\r
	"left:200px;top:350px; height:40px; width=60px; font-size=18; cursor:pointer}" &_\r
	"</style>" &_\r
	"</head>" &_\r
	"<script language='VbScript'>" &_\r
	"sub UpdateOpt:If resizeDMD.Checked Then DMDWPos.disabled=false:DMDHPos.disabled=false Else DMDWPos.disabled=true:DMDHPos.disabled=true End If:" &_\r
	"If colorDMDSet.Checked Then dmdtxtcol.disabled=false Else dmdtxtcol.disabled=true End If:" &_\r
	"If posDMD.Checked Then DMDXPos.disabled=false:DMDYPos.disabled=false Else DMDXPos.disabled=true:DMDYPos.disabled=true End If:end sub" &_\r
	"<\/script>" &_\r
	"<table>" &_\r
	"<TD><font size='2'>Use Full Color DMD (only for UDMD v1.4 and above)</font><input type='checkbox' name='colorDMD'></TD>" &_\r
	"</table>" &_\r
	"</br>" &_\r
	"<table>" &_\r
	"<TD><font size='2'>Change DMD Text Color</font><input type='checkbox' name='colorDMDSet' Onclick='UpdateOpt'></TD>" &_\r
	"<TD>" &_\r
	"<font size='2'>Color:  </font>" &_\r
	"<SELECT NAME='dmdtxtcol' disabled>" &_\r
	"<OPTION value='AliceBlue'>AliceBlue" &_\r
	"<OPTION value='AntiqueWhite'>AntiqueWhite" &_\r
	"<OPTION value='Aqua'>Aqua" &_\r
	"<OPTION value='Aquamarine'>Aquamarine" &_\r
	"<OPTION value='Azure'>Azure" &_\r
	"<OPTION value='Beige'>Beige" &_\r
	"<OPTION value='Bisque'>Bisque" &_\r
	"<OPTION value='BlanchedAlmond'>BlanchedAlmond" &_\r
	"<OPTION value='Blue'>Blue" &_\r
	"<OPTION value='BlueViolet'>BlueViolet" &_\r
	"<OPTION value='Brown'>Brown" &_\r
	"<OPTION value='BurlyWood'>BurlyWood" &_\r
	"<OPTION value='CadetBlue'>CadetBlue" &_\r
	"<OPTION value='Chartreuse'>Chartreuse" &_\r
	"<OPTION value='Chocolate'>Chocolate" &_\r
	"<OPTION value='Coral'>Coral" &_\r
	"<OPTION value='CornflowerBlue'>CornflowerBlue" &_\r
	"<OPTION value='Cornsilk'>Cornsilk" &_\r
	"<OPTION value='Crimson'>Crimson" &_\r
	"<OPTION value='Cyan'>Cyan" &_\r
	"<OPTION value='DarkBlue'>DarkBlue" &_\r
	"<OPTION value='DarkCyan'>DarkCyan" &_\r
	"<OPTION value='DarkGoldenrod'>DarkGoldenrod" &_\r
	"<OPTION value='DarkGray'>DarkGray" &_\r
	"<OPTION value='DarkGreen'>DarkGreen" &_\r
	"<OPTION value='DarkKhaki'>DarkKhaki" &_\r
	"<OPTION value='DarkMagenta'>DarkMagenta" &_\r
	"<OPTION value='DarkOliveGreen'>DarkOliveGreen" &_\r
	"<OPTION value='DarkOrange'>DarkOrange" &_\r
	"<OPTION value='DarkOrchid'>DarkOrchid" &_\r
	"<OPTION value='DarkRed'>DarkRed" &_\r
	"<OPTION value='DarkSalmon'>DarkSalmon" &_\r
	"<OPTION value='DarkSeaGreen'>DarkSeaGreen" &_\r
	"<OPTION value='DarkSlateBlue'>DarkSlateBlue" &_\r
	"<OPTION value='DarkSlateGray'>DarkSlateGray" &_\r
	"<OPTION value='DarkTurquoise'>DarkTurquoise" &_\r
	"<OPTION value='DarkViolet'>DarkViolet" &_\r
	"<OPTION value='DeepPink'>DeepPink" &_\r
	"<OPTION value='DeepSkyBlue'>DeepSkyBlue" &_\r
	"<OPTION value='DimGray'>DimGray" &_\r
	"<OPTION value='DodgerBlue'>DodgerBlue" &_\r
	"<OPTION value='Firebrick'>Firebrick" &_\r
	"<OPTION value='FloralWhite'>FloralWhite" &_\r
	"<OPTION value='ForestGreen'>ForestGreen" &_\r
	"<OPTION value='Fuchsia'>Fuchsia" &_\r
	"<OPTION value='Gainsboro'>Gainsboro" &_\r
	"<OPTION value='GhostWhite'>GhostWhite" &_\r
	"<OPTION value='Gold'>Gold" &_\r
	"<OPTION value='Goldenrod'>Goldenrod" &_\r
	"<OPTION value='Gray'>Gray" &_\r
	"<OPTION value='Green'>Green" &_\r
	"<OPTION value='GreenYellow'>GreenYellow" &_\r
	"<OPTION value='Honeydew'>Honeydew" &_\r
	"<OPTION value='HotPink'>HotPink" &_\r
	"<OPTION value='IndianRed'>IndianRed" &_\r
	"<OPTION value='Indigo'>Indigo" &_\r
	"<OPTION value='Ivory'>Ivory" &_\r
	"<OPTION value='Khaki'>Khaki" &_\r
	"<OPTION value='Lavender'>Lavender" &_\r
	"<OPTION value='LavenderBlush'>LavenderBlush" &_\r
	"<OPTION value='LawnGreen'>LawnGreen" &_\r
	"<OPTION value='LemonChiffon'>LemonChiffon" &_\r
	"<OPTION value='LightBlue'>LightBlue" &_\r
	"<OPTION value='LightCoral'>LightCoral" &_\r
	"<OPTION value='LightCyan'>LightCyan" &_\r
	"<OPTION value='LightGoldenrodYellow'>LightGoldenrodYellow" &_\r
	"<OPTION value='LightGray'>LightGray" &_\r
	"<OPTION value='LightGreen'>LightGreen" &_\r
	"<OPTION value='LightPink'>LightPink" &_\r
	"<OPTION value='LightSalmon'>LightSalmon" &_\r
	"<OPTION value='LightSeaGreen'>LightSeaGreen" &_\r
	"<OPTION value='LightSkyBlue'>LightSkyBlue" &_\r
	"<OPTION value='LightSlateGray'>LightSlateGray" &_\r
	"<OPTION value='LightSteelBlue'>LightSteelBlue" &_\r
	"<OPTION value='LightYellow'>LightYellow" &_\r
	"<OPTION value='Lime'>Lime" &_\r
	"<OPTION value='LimeGreen'>LimeGreen" &_\r
	"<OPTION value='Linen'>Linen" &_\r
	"<OPTION value='Magenta'>Magenta" &_\r
	"<OPTION value='Maroon'>Maroon" &_\r
	"<OPTION value='MediumAquamarine'>MediumAquamarine" &_\r
	"<OPTION value='MediumBlue'>MediumBlue" &_\r
	"<OPTION value='MediumOrchid'>MediumOrchid" &_\r
	"<OPTION value='MediumPurple'>MediumPurple" &_\r
	"<OPTION value='MediumSeaGreen'>MediumSeaGreen" &_\r
	"<OPTION value='MediumSlateBlue'>MediumSlateBlue" &_\r
	"<OPTION value='MediumSpringGreen'>MediumSpringGreen" &_\r
	"<OPTION value='MediumTurquoise'>MediumTurquoise" &_\r
	"<OPTION value='MediumVioletRed'>MediumVioletRed" &_\r
	"<OPTION value='MidnightBlue'>MidnightBlue" &_\r
	"<OPTION value='MintCream'>MintCream" &_\r
	"<OPTION value='MistyRose'>MistyRose" &_\r
	"<OPTION value='Moccasin'>Moccasin" &_\r
	"<OPTION value='NavajoWhite'>NavajoWhite" &_\r
	"<OPTION value='Navy'>Navy" &_\r
	"<OPTION value='OldLace'>OldLace" &_\r
	"<OPTION value='Olive'>Olive" &_\r
	"<OPTION value='OliveDrab'>OliveDrab" &_\r
	"<OPTION value='Orange'>Orange" &_\r
	"<OPTION value='OrangeRed'>OrangeRed" &_\r
	"<OPTION value='Orchid'>Orchid" &_\r
	"<OPTION value='PaleGoldenrod'>PaleGoldenrod" &_\r
	"<OPTION value='PaleGreen'>PaleGreen" &_\r
	"<OPTION value='PaleTurquoise'>PaleTurquoise" &_\r
	"<OPTION value='PaleVioletRed'>PaleVioletRed" &_\r
	"<OPTION value='PapayaWhip'>PapayaWhip" &_\r
	"<OPTION value='PeachPuff'>PeachPuff" &_\r
	"<OPTION value='Peru'>Peru" &_\r
	"<OPTION value='Pink'>Pink" &_\r
	"<OPTION value='Plum'>Plum" &_\r
	"<OPTION value='PowderBlue'>PowderBlue" &_\r
	"<OPTION value='Purple'>Purple" &_\r
	"<OPTION value='Red'>Red" &_\r
	"<OPTION value='RosyBrown'>RosyBrown" &_\r
	"<OPTION value='RoyalBlue'>RoyalBlue" &_\r
	"<OPTION value='SaddleBrown'>SaddleBrown" &_\r
	"<OPTION value='Salmon'>Salmon" &_\r
	"<OPTION value='SandyBrown'>SandyBrown" &_\r
	"<OPTION value='SeaGreen'>SeaGreen" &_\r
	"<OPTION value='SeaShell'>SeaShell" &_\r
	"<OPTION value='Sienna'>Sienna" &_\r
	"<OPTION value='Silver'>Silver" &_\r
	"<OPTION value='SkyBlue'>SkyBlue" &_\r
	"<OPTION value='SlateBlue'>SlateBlue" &_\r
	"<OPTION value='SlateGray'>SlateGray" &_\r
	"<OPTION value='Snow'>Snow" &_\r
	"<OPTION value='SpringGreen'>SpringGreen" &_\r
	"<OPTION value='SteelBlue'>SteelBlue" &_\r
	"<OPTION value='Tan'>Tan" &_\r
	"<OPTION value='Teal'>Teal" &_\r
	"<OPTION value='Thistle'>Thistle" &_\r
	"<OPTION value='Tomato'>Tomato" &_\r
	"<OPTION value='Transparent'>Transparent" &_\r
	"<OPTION value='Turquoise'>Turquoise" &_\r
	"<OPTION value='Violet'>Violet" &_\r
	"<OPTION value='Wheat'>Wheat" &_\r
	"<OPTION value='White'>White" &_\r
	"<OPTION value='WhiteSmoke'>WhiteSmoke" &_\r
	"<OPTION value='Yellow'>Yellow" &_\r
	"<OPTION value='YellowGreen'>YellowGreen" &_\r
	"</SELECT>" &_\r
	"</table>" &_\r
	"</br>" &_\r
	"<table>" &_\r
	"<TD><font size='2'>Auto Resize DMD</font><input type='checkbox' name='resizeDMD' Onclick='UpdateOpt'></TD>" &_\r
	"<TD><font size='2'>DMD Width</font><input type='text' name='DMDWPos' size='10' disabled></TD>" &_\r
	"</tr>" &_\r
	"<TD></TD>" &_\r
	"<TD><font size='2'>DMD Height</font><input type='text' name='DMDHPos' size='10' disabled></TD>" &_\r
	"</table>" &_\r
	"</br>" &_\r
	"<table>" &_\r
	"<tr>" &_\r
	"<TD><font size='2'>Auto Position DMD</font><input type='checkbox' name='posDMD' Onclick='UpdateOpt'></TD>" &_\r
	"<TD><font size='2'>DMD X Position</font><input type='text' name='DMDXPos' size='10' disabled></TD>" &_\r
	"</tr>" &_\r
	"<TD></TD>" &_\r
	"<TD><font size='2'>DMD Y Position</font><input type='text' name='DMDYPos' size='10' disabled></TD>" &_\r
	"</table>" &_\r
	"</br>" &_\r
	"</br>" &_\r
	"<TD><font size='2'>Enable this menu on next start</font><input type='checkbox' name='enabledonstart'></TD>" &_\r
	"<td><input id=1 class='button' type='button' name='btnSubmit' value='OK' onClick='status=1'></td>" &_\r
	"</html>"\r
\r
	'Create the window we need\r
	Set optWindow = HTABox("lightgrey", 500, 450, 700, 250,TableOptName)\r
	'No host able to run the options window (standalone): skip the menu and keep the current options\r
	If optWindow Is Nothing Then Exit Function\r
with optWindow\r
	'Set window title\r
	.document.title = title\r
	'Fill the objects we need\r
	.document.write sHTMLCode\r
'	.msg.innerHTML = sHTMLCode\r
	.enabledonstart.Checked=optOpenAtStart\r
		.colorDMD.Checked=optUseFullColor\r
		.colorDMDSet.Checked=optDMDColorChange\r
		If .colorDMDSet.Checked Then .dmdtxtcol.disabled=false Else .dmdtxtcol.disabled=true End If\r
		.dmdtxtcol.Value=optDMDColorType\r
		.DMDWPos.Value=optUDMDWidth\r
		.DMDHPos.Value=optUDMDHeight\r
		.DMDXPos.Value=optDMDPosX\r
		.DMDYPos.Value=optDMDPosY\r
	'Put focus on the OK button\r
		.btnSubmit.focus\r
		'set the status to 0 (then we will check it in a loop)\r
		.status=0\r
\r
		'Check the status of the window\r
	Do\r
		On Error Resume Next\r
		status = .status\r
		'If the window is closed with the [X] button, there will be an error of access to it\r
		If Err.number <> 0 Then\r
			On Error Goto 0\r
			'In this case we leave the cycle\r
			Exit Do\r
		Else\r
			if status = 1 Then Exit Do\r
		End if\r
	Loop\r
\r
	'If the status is "1", then we write the filled values\r
	If status = 1 Then\r
		Dim WshShell\r
		Set WshShell = CreateObject("WScript.Shell")\r
		If .enabledonstart.Checked Then optOpenAtStart=1 Else optOpenAtStart=0\r
		If .colorDMD.Checked Then optUseFullColor=1 Else optUseFullColor=0\r
		If optUseFullColor=1 then\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\fullcolor", "True" ,"REG_SZ"\r
		Else\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\fullcolor", "False" ,"REG_SZ"\r
		End If\r
		If .colorDMDSet.Checked Then\r
			SaveValue TableOptName, "DMD Color", .dmdtxtcol.Value\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\color",.dmdtxtcol.Value,"REG_SZ"\r
		Else\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\color",cDefaultDMDColor,"REG_SZ"\r
		End If\r
		If StrComp(cDefaultDMDColor,WshShell.RegRead("HKCU\\Software\\UltraDMD\\color"),1)=0 Then optDMDColorChange=0 Else optDMDColorChange=1 End If\r
		If .resizeDMD.Checked Then\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\w",.DMDWPos.Value,"REG_DWORD"\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\h",.DMDHPos.Value,"REG_DWORD"\r
		End If\r
		If .posDMD.Checked Then\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\x",.DMDXPos.Value,"REG_DWORD"\r
			WshShell.RegWrite "HKCU\\Software\\UltraDMD\\y",.DMDYPos.Value,"REG_DWORD"\r
		End If\r
		UDMDoptions = optOpenAtStart*2^0 + optDMDColorChange*2^1 + optUseFullColor*2^2\r
		'msgbox "Enabled on Start: " & optOpenAtStart & VbCrLf &_\r
		'	  "Use Full color: " & optUseFullColor & VbCrLf &_\r
		'	  "Change DMD color: " & optDMDColorChange\r
		SaveValue TableOptName, "DMD Options", UDMDoptions\r
		WshShell.Terminate\r
	End If\r
	.close\r
	End With\r
End Function\r
\r
'Function to create an HTA application\r
Function HTABox(sBgColor, w, h, x, y, TableOptName)\r
Dim IE, HTA, nRnd, sCmd, objShell,objExec\r
\r
  randomize : nRnd = Int(1000000 * rnd)\r
  sCmd = "mshta.exe ""javascript:{new " _\r
	   & "ActiveXObject(""InternetExplorer.Application"")" _\r
	   & ".PutProperty('" & nRnd & "',window);" _\r
	   & "window.resizeTo(" & w & "," & h & ");" _\r
	   & "window.moveTo(" & x & "," & y & ")}"""\r
\r
  On Error Resume Next\r
  Set objShell = CreateObject("WScript.Shell")\r
  Set objExec = objShell.Exec (sCmd)\r
  If Err.Number <> 0 Then\r
    Err.Clear\r
    On Error Goto 0\r
    Set HTABox = Nothing\r
    Exit Function\r
  End If\r
  On Error Goto 0\r
\r
  do until objShell.AppActivate("javascript:{new "): On Error Resume Next:loop\r
\r
  For Each IE In CreateObject("Shell.Application").windows\r
	If IsObject(IE.GetProperty(nRnd)) Then\r
	  set HTABox = IE.GetProperty(nRnd)\r
	  IE.Quit\r
	  HTABox.document.title = "HTABox"\r
\r
	  HTABox.document.write _\r
			 "<HTA:Application contextMenu=no border=thin minimizebutton=no maximizebutton=no >" _\r
			 & "<body scroll='no' style='background-color:" _\r
			 & sBgColor & ";font:normal 10pt Arial;" _\r
			 & "border-Style:outset;border-Width:3px'>" _\r
			 & "<center><span id=msg>&nbsp;</span></center></body>"\r
	  Exit Function\r
	End If\r
  Next\r
\r
' In case of error\r
objExec.Terminate\r
SaveValue TableOptName, "DMD Options", 4\r
  MsgBox "There was an error with DMD Options window ! Options are set to defaults."\r
Set HTABox = Nothing\r
End Function\r
`,ye=`'Last Updated in VBS v3.62\r
\r
'Using direct mappings (key number) should be avoided, as these only work with US keyboards,\r
'do not support mapping to other input systems (joystick, VR controller, ...), can't be redefined easily,\r
'may conflict with existing or future input defaults, do not apply the user keyboard layout, and\r
'only cover a subset of the keyboard.\r
'\r
'Using the action mappings provided by VPX should always be favored (see VPXActionKey).\r
\r
'Key codes that can be used in the mappings below:\r
'0			11		L CONTROL		29\r
'1			2		LEFT ARROW		203\r
'2			3		L SHIFT			42\r
'3			4		L WIN			219\r
'4			5		M				50\r
'5			6		MINUS			12\r
'6			7		MULTIPLY		55\r
'7			8		N				49\r
'8			9		NUM LOCK		69\r
'9			10		NUMPAD 0		82\r
'A			30		NUMPAD 1		79\r
'ADD		78		NUMPAD 2		80\r
'APOSTROPHE 40		NUMPAD 3		81\r
'AT			145		NUMPAD 4		75\r
'AX			150		NUMPAD 5		76\r
'B			48		NUMPAD 6		77\r
'BACK		14		NUMPAD 7		71\r
'BACKSLASH	43		NUMPAD 8		72\r
'BACKSPACE	14		NUMPAD 9		73\r
'C			46		NUMPAD COMMA	179\r
'CALCULATOR 161		NUMPAD ENTER	156\r
'CAPS LOCK	58		NUMPAD EQUALS	141\r
'COLON		146		NUMPAD MINUS	74\r
'COMMA		51		NUMPAD PERIOD	83\r
'D			32		NUMPAD PLUS		78\r
'DECIMAL	83		NUMPAD SLASH	181\r
'DELETE		211		NUMPAD ASTERISK	55\r
'DIVIDE		181		O				24\r
'DOWN		208		P				25\r
'DOWN ARROW 208		PAUSE			197\r
'E			18		PERIOD			52\r
'END		207		PAGE DOWN		209\r
'EQUALS		13		PAGE UP			201\r
'ESCAPE		1		Q				16\r
'F			33		R				19\r
'F1			59		R ALT			184\r
'F2			60		R BRACKET		27\r
'F3			61		R CTRL			157\r
'F4			62		RETURN			28\r
'F5			63		RIGHT			205\r
'F6			64		RIGHT ARROW		205\r
'F7			65		R MENU			184\r
'F8			66		R SHIFT			54\r
'F9			67		R WIN			220\r
'F10		68		S				31\r
'F11		87		SCROLL			70\r
'F12		88		SEMICOLO		39\r
'F13		100		SLASH			53\r
'F14		101		SPACE			57\r
'F15		102		STOP			149\r
'G			34		T				20\r
'H			35		TAB				15\r
'HOME		199		U				22\r
'I			23		UNDERLINE		147\r
'INSERT		210		UP ARROW		200\r
'J			36		V				47\r
'K			37		W				17\r
'L			38		X				45\r
'L ALT		56		Y				21\r
'L BRACKET	26		Z				44\r
\r
Option Explicit\r
\r
'\r
' This is a list of standard keys used by *.vbs files\r
'\r
\r
' VBS based user interface\r
' (only for VPinMAME COM component, not needed for PinMAME plugin)\r
Const keyShowOpts	= 59                  '(F1)  Show options\r
Const keyShowKeys	= 60                  '(F2)  Show Keys\r
Dim keyReset: keyReset = VPXActionKey(19) '(F3)  Reset Emulation\r
Const keyFrame		= 62                  '(F4)  Toggle Window Lock (no operation if not usig VPinMAME)\r
Const keyDoubleSize	= 63                  '(F5)  Toggle displaysize (no operation if not usig VPinMAME)\r
Const keyShowDips	= 64                  '(F6)  Show Dip Switch / Options Menu\r
Const keyVPMVolume	= 88                  '(F12) Show input box to set VPM Volume (no operation if not usig VPinMAME)\r
\r
' Cabinet switches\r
Dim keyAddBall:		keyAddBall		= VPXActionKey(22) '(B)		Add extra ball\r
Dim keyBangBack:	keyBangBack		= VPXActionKey(13) '(T)		Bang Back\r
Dim keyInsertCoin1:	keyInsertCoin1	= VPXActionKey( 9) '(5)		Insert coin in slot 1\r
Dim keyInsertCoin2:	keyInsertCoin2	= VPXActionKey(10) '(4)		Insert coin in slot 2\r
Dim keyInsertCoin3:	keyInsertCoin3	= VPXActionKey(11) '(3)		Insert coin in slot 3\r
Dim keyInsertCoin4:	keyInsertCoin4	= VPXActionKey(12) '(6)		Insert coin in slot 4\r
Dim keySlamDoorHit:	keySlamDoorHit	= VPXActionKey(23) '(Home)	Slam Tilt\r
Dim keyCoinDoor:	keyCoinDoor		= VPXActionKey(24) '(End)	Opening/Closing Coin Door\r
Const toggleKeyCoinDoor	 = True		'If true then a key press/switch change will flip the state from on/off, if false then one will have the real coindoor behaviour (for cabinet setups with real coindoors)\r
Const inverseKeyCoinDoor = False	'If false then the coindoor switch behaves like a original coindoor (key pressed = closed, key not pressed = open), otherwise the switch is inverted (key pressed = open, key not pressed = closed)\r
\r
' Service switches\r
Dim keyCancel:			keyCancel			= VPXActionKey(25)	'(7)	Coin Door Cancel Button (WPC)\r
Dim keyDown:			keyDown				= VPXActionKey(26)	'(8)	Coin Door Down Button (WPC)\r
Dim keyUp:				keyUp				= VPXActionKey(27)	'(9)	Coin Door Up Button (WPC)\r
Dim keyEnter:			keyEnter			= VPXActionKey(28)	'(0)	Coin Door Enter Button (WPC)\r
Dim keyAdvance:			keyAdvance			= VPXActionKey(26)	'(8)	Coin Door Advance Button\r
Dim keyUpDown:			keyUpDown			= VPXActionKey(25)	'(7)	Coin Door Up/Down Button\r
Dim keyCPUDiag:			keyCPUDiag			= VPXActionKey(27)	'(9)	CPU Diagnostic Button\r
Dim keySoundDiag:		keySoundDiag		= VPXActionKey(28)	'(0)	Sound CPU Diagnostic Button\r
Dim keyMasterEnter:		keyMasterEnter		= VPXActionKey(30)	'(PgUp)	Master Enter\r
Dim keyHiScoreReset:	keyHiScoreReset		= VPXActionKey(29)	'(6)	Reset Hiscores\r
Dim keySelfTest:		keySelfTest			= VPXActionKey(25)	'(7)\r
Dim keyBlack:			keyBlack			= VPXActionKey(25)	'(7)	Sega/Data East/Stern\r
Dim keyGreen:			keyGreen			= VPXActionKey(26)	'(8)	Sega/Data East/Stern\r
Dim keyRed:				keyRed				= VPXActionKey(27)	'(9)	Sega/Data East/Stern\r
Dim keyConfigurations:	keyConfigurations	= VPXActionKey(31)	'(-)	Taito\r
Dim keyKPGame:			keyKPGame			= VPXActionKey(29)	'(6)	Bally 6803\r
Const keyKPEnter							= 156				'(NumpadEnter) see 6803.vbs for complete keypad\r
\r
' Optional keys\r
' These are not used nor handled by the vbs files\r
' They are only here to provide consistent keys for the games.\r
\r
Const keyUpperLeft	   = 30  '(A)	Upper Left Flipper button\r
Const keyUpperRight	   = 40  '(')	Upper Right Flipper button\r
Const keyFront		   = 3   '(2)	Front button (e.g. buy-in)\r
Const keyRules		   = 19  '(R)	Show rules\r
Const keyJoyUp		   = 200 '(Up arrow)\r
Const keyJoyDown	   = 208 '(Down arrow)\r
Const keyJoyLeft	   = 203 '(Left arrow)\r
Const keyJoyRight	   = 205 '(Right arrow)\r
Const keyFire1		   = 29  '(Left CTRL)\r
Const keyFire2		   = 184 '(Right Alt)\r
Const keyGameSpecific1 = 16  '(Q)\r
Const keyGameSpecific2 = 17  '(W)\r
Const keyGameSpecific3 = 18  '(E)\r
Const keyGameSpecific4 = 19  '(R)\r
\r
' Backward compatibility: Staged flippers needed the user to edit script files, adapting the 2 following variables.\r
' These are now managed in the application UI but some tables still expect these 2 variables to be defined. VPX simply mirrors the\r
' application settings (but does not dynamically update them: old tables will need to be restarted after adjusting)\r
Dim keyStagedFlipperL : keyStagedFlipperL = StagedLeftFlipperKey\r
Dim keyStagedFlipperR : keyStagedFlipperR = StagedRightFlipperKey\r
`,we=`'Last Updated in VBS v3.56\r
\r
'sw116 and sw118 are commonly used for UL and UR flippers(in most WPC pins),\r
'while in IJ (i think the only one that has it different?!) these are the ramp switches.\r
'Everytime you press the flipper keys those switches are "on", so one did use the cSingleLFlip variable to prevent that.\r
'Nowadays cSingleLFlip has been replaced by the separate StagedLeftFlipperKey.\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' WPC Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 31\r
'-----WPC flipper solenoid notes-----\r
'***These games will work perfectly:***\r
'WPC alphanumerics, T2, Gilligan's Island, Hurricane, Party Zone (pre-Addams Family DMD games)\r
\r
'***These games use rom-controlled flippers, but still have a usable flipper solenoid:***\r
'WPC Fliptronics & WPC Security (Addam's Family through Jack Bot / WHO dunnit)\r
'- (YMMV. Beware stuck balls under upper flippers. )\r
'- Some of these games may have solenoid jitter with solmodcallbacks enabled. If flippers die randomly, set the vpmFlips.InitDelay option.\r
'- STAGED FLIPPER NOTE: Some games (Red & Ted, probably others) use swapped around upper flipper solenoid numbers, some table script modification may be necessary!\r
\r
'***These games work only with VPM 3.1 and above:***\r
'WPC-95 Machines (Congo / Attack From Mars onwards)\r
\r
' Cabinet switches\r
Const swCoin1  = 1\r
Const swCoin2  = 2\r
Const swCoin3  = 3\r
Const swCoin4  = 4\r
Const swCancel = 5\r
Const swDown   = 6\r
Const swUp	   = 7\r
Const swEnter  = 8\r
\r
' Forgot these in earlier vbs files\r
Private swStartButtonX,swCoinDoorX,swSlamTiltX\r
On Error Resume Next\r
If swStartButton = 13 Or Err Then swStartButtonX = 13 Else swStartButtonX = swStartButton\r
If swCoinDoor	 = 22 Or Err Then swCoinDoorX	 = 22 Else swCoinDoorX	  = swCoinDoor\r
If swSlamTilt	 = 21 Or Err Then swSlamTiltX	 = 21 Else swSlamTiltX	  = swSlamTilt\r
On Error Goto 0\r
\r
Const swLRFlip = 112\r
Const swLLFlip = 114\r
Const swURFlip = 116\r
Const swULFlip = 118\r
\r
' Help Window\r
vpmSystemHelp = "Williams WPC keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4) & vbTab & "Insert Coin #4" & vbNewLine &_\r
  vpmKeyName(keyCancel) & vbTab & "Escape (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keyDown) & vbTab & "Down (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keyUp) & vbTab & "Up (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keyEnter) & vbTab & "Enter (Coin Door)" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt" & vbNewLine &_\r
  vpmKeyName(keyCoinDoor) & vbTab & "Open/Close Coin Door"\r
\r
' Dip Switch / Options Menu\r
Private Sub wpcShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 100, 240, "DIP Switches"\r
			.AddFrame 0,190, 80, "Misc", 0, Array("W20",&H04,"W19",&H08)\r
			.AddFrame 0, 0, 80, "Country", &Hf0,_\r
				Array("USA", &H00, "USA", &Hf0, "European", &Hd0,_\r
					  "Export", &Ha0, "Export Alt", &H80, "France", &Hb0,_\r
					  "France 1", &H10, "France 2", &H30, "France 3", &H90,_\r
					  "Germany", &H20, "Spain", &He0, "UK", &Hc0)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("wpcShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	Dim swCopy\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin4'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey	 swCopy = swStartButtonX : .Switch(swCopy) = True\r
			Case keyCancel		 swCopy = swCancel :	   .Switch(swCopy) = True\r
			Case keyDown		 swCopy = swDown :		   .Switch(swCopy) = True\r
			Case keyUp			 swCopy = swUp :		   .Switch(swCopy) = True\r
			Case keyEnter		 swCopy = swEnter :		   .Switch(swCopy) = True\r
			Case keySlamDoorHit	 swCopy = swSlamTiltX :	   .Switch(swCopy) = True\r
			Case keyCoinDoor	 swCopy = swCoinDoorX :	   If toggleKeyCoinDoor Then .Switch(swCopy) = Not .Switch(swCopy) Else .Switch(swCopy) = Not inverseKeyCoinDoor\r
			Case keyBangBack	 vpmNudge.DoMechTilt\r
			Case keyVPMVolume	 vpmVol\r
			Case Else			 vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	Dim swCopy\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case keyCancel		 swCopy = swCancel :	   .Switch(swCopy) = False\r
			Case keyDown		 swCopy = swDown :		   .Switch(swCopy) = False\r
			Case keyUp			 swCopy = swUp :		   .Switch(swCopy) = False\r
			Case keyEnter		 swCopy = swEnter :		   .Switch(swCopy) = False\r
			Case keySlamDoorHit	 swCopy = swSlamTiltX :	   .Switch(swCopy) = False\r
			Case StartGameKey	 swCopy = swStartButtonX : .Switch(swCopy) = False\r
			Case keyCoinDoor	 swCopy = swCoinDoorX :	   If toggleKeyCoinDoor = False Then .Switch(swCopy) = inverseKeyCoinDoor\r
			Case keyShowOpts	 .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys	 .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips	 If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall		 .Pause = True : vpmAddBall	 : .Pause = False\r
			Case keyReset		 .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame		 .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize	 .DoubleSize  = Not .DoubleSize\r
			Case Else			 vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,he=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Alvin G Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 27 'not 100% on this!\r
' Cabinet Switches\r
Const swCoin1       =  1\r
Const swCoin2       =  2\r
Const swCoin3       =  3\r
Const swCoin4       =  4\r
Const swSlamTilt    =  5\r
Const swDiagnostic  = -7\r
Const swExitDiag    = -6\r
Const swVolUp       = 15\r
Const swVolDn       = 16\r
Const swStartButton =  9\r
\r
Const swLRFlip      = 114\r
Const swLLFlip      = 116\r
Const swURFlip      = 115\r
Const swULFlip      = 117\r
\r
' Help Window\r
vpmSystemHelp = "Alvin G keys" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4)  & vbTab & "Insert Coin #4" & vbNewLine &_\r
  vpmKeyName(keyCancel)       & vbTab & "Enter"			 & vbNewLine &_\r
  vpmKeyName(keyDown)         & vbTab & "Exit"			 & vbNewLine &_\r
  vpmKeyName(keyUp)			  & vbTab & "Volume +"		 & vbNewLine &_\r
  vpmKeyName(keyEnter)        & vbTab & "Volume -"		 & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Options Menu (No Dips)\r
Private Sub AlvinGShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm  80, 0, "Option Menu"\r
		.AddLabel 0,0,250,20, "No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("AlvinGShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin4'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyCancel       .Switch(swDiagnostic)  = True\r
			Case keyDown         .Switch(swExitDiag)    = True\r
			Case keyUp           .Switch(swVolUp)       = True\r
			Case keyEnter        .Switch(swVolDn)       = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyCancel       .Switch(swDiagnostic)  = False\r
			Case keyDown         .Switch(swExitDiag)    = False\r
			Case keyUp           .Switch(swVolUp)       = False\r
			Case keyEnter        .Switch(swVolDn)       = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ve=`'Last Updated in VBS v3.50\r
'Similar to Play2.vbs, except for enabled keys down/up/enter\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Playmatic System 2 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 8\r
' Cabinet switches\r
Const swSelfTest     = 6 'enters software-setup\r
Const swTilt         = 7 'playfield tilt switch\r
'Const swSlamTilt    =   'clears all credits and resets machine\r
Const swCoin3        = 3 'defaults to 1 coin per credit\r
Const swCoin2        = 2 'defaults to 2 coins per credit\r
Const swCoin1        = 1 'defaults to 1 coin for 3 credits\r
Const swStartButton  = 4 'starts game\r
Const swLRFlip       = 102\r
Const swLLFlip       = 104\r
\r
' Help Window\r
vpmSystemHelp = "Playmatic System 2 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Adjustments"\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyDown         .Switch(swReplay1)     = True\r
			Case keyUp           .Switch(swReplay2)     = True\r
			Case keyEnter        .Switch(swReplay3)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyDown         .Switch(swReplay1)     = False\r
			Case keyUp           .Switch(swReplay2)     = False\r
			Case keyEnter        .Switch(swReplay3)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ce=`'			 ***************************************************\r
'		  *********************** B2S.VBS *************************\r
'	   ***************************************************************\r
'	***************************By Rosve 2011 ****************************\r
'***************************************************************************\r
'** Add this code to the table script to send data to an active backglass **\r
'***************************************************************************\r
' LaunchBackGlass name, true/false\r
' ResetB2SData startpos, endpos, value\r
' SetB2SData pos, value\r
' StepB2SData startpos, endpos, value, direction, steptime, stepsound\r
' b2sScore reel, stepvalue, player\r
' InitB2SScoring rp1_1, rp1_2, rp2_1, rp2_2, rp3_1, rp3_2, ror, rol\r
' SetB2SScoreSounds 100000, 10000, 1000, 100, 10, 1, RollOver\r
'\r
' b2s data value can be in the range of 0 to 254.\r
\r
Option Explicit\r
\r
Const B2SVersion = 3\r
Const B2SDataRange = 49\r
Dim B2SData(75)\r
'Dim b2sStepReady\r
Dim B2STemp, b2sSP,b2sEP,b2sV,b2sDIR,b2sSS\r
Dim objRegistry\r
Set objRegistry = CreateObject("Wscript.shell")\r
\r
Dim b2sregclean\r
For b2sregclean=0 to B2SDataRange\r
	WriteLed b2sregclean,0\r
Next\r
\r
'----- Launch a backglass.exe -----------------------------------\r
Sub LaunchBackGlass(ByVal exename, ByVal flag)\r
	If flag=True Then\r
		exename=exename+".exe"\r
		objRegistry.Run(exename)\r
	End If\r
End Sub\r
\r
'----- Set a range of B2S Datas to value ----------------------------\r
Sub ResetB2SData(ByVal StartPos,ByVal EndPos,ByVal Value)\r
	B2STemp=""\r
	If StartPos<0 Then StartPos=0\r
	If EndPos>B2SDataRange then EndPos=B2SDataRange\r
	Dim b2si\r
	For b2si=StartPos to EndPos\r
		B2SData(b2si)=Chr(Value+1)\r
	Next\r
	For b2si=0 to B2SDataRange\r
		B2STemp=B2STemp+B2SData(b2si)\r
	Next\r
	WriteReg(B2STemp)\r
End Sub\r
\r
'----- Set a B2S Data to a value (0-254) ---------------------\r
Sub SetB2SData(ByVal Pos,ByVal Value)\r
	B2SData(Pos)=Chr(Value+1)\r
	B2STemp=""\r
	Dim b2si\r
	For b2si=0 To B2SDataRange\r
		B2STemp=B2STemp+B2SData(b2si)\r
	Next\r
	WriteReg(B2STemp)\r
End Sub\r
\r
'------ Step B2S values up or down to a specified value ----------------\r
Sub StepB2SData (ByVal startpos,ByVal endpos,ByVal value,ByVal direction,ByVal steptime,ByVal stepsound)\r
	'b2sStepReady=0\r
	b2sSP=startpos\r
	b2sEP=endpos\r
	b2sV=value+1\r
	b2sDIR=direction\r
	b2sSS=stepsound\r
	B2Stimer.Interval=steptime\r
	B2Stimer.Enabled=True\r
End Sub\r
\r
Sub B2Stimer_Timer()\r
	Dim b2sNoChange\r
	b2sNoChange=1\r
	Dim b2si\r
	For b2si=b2sSP to b2sEP\r
		Select Case b2sDIR\r
		Case 0 'Step down to value\r
		  If Asc(B2SData(b2si)) > b2sV then\r
			B2SData(b2si)=Chr(Asc(B2SData(b2si))-1)\r
			b2sNoChange=0\r
		  End If\r
		Case 1 'Step up to value\r
		  If Asc(B2SData(b2si)) < b2sV then\r
			B2SData(b2si)=Chr(Asc(B2SData(b2si))+1)\r
			b2sNoChange=0\r
		  End If\r
		Case 2 'Step up/down to value\r
		  If Asc(B2SData(b2si)) > b2sV then\r
			B2SData(b2si)=Chr(Asc(B2SData(b2si))-1)\r
			b2sNoChange=0\r
		  End If\r
		  If Asc(B2SData(b2si)) < b2sV then\r
			B2SData(b2si)=Chr(Asc(B2SData(b2si))+1)\r
			b2sNoChange=0\r
		  End If\r
		End Select\r
	Next\r
	If b2sNoChange=1 Then\r
		'b2sStepReady=1\r
		B2Stimer.Enabled=False\r
	Else\r
		PlaySound b2sSS\r
		B2STemp=""\r
		For b2si=0 To B2SDataRange\r
			B2STemp=B2STemp+B2SData(b2si)\r
		Next\r
		WriteReg(B2STemp)\r
	End If\r
End Sub\r
\r
'----------- Send LED states to the Backglass --------------\r
Sub B2SUpdateLed ()\r
	On Error Resume Next\r
	Dim ChgLED, ii, jj, chg, stat\r
	ChgLED = Controller.ChangedLEDs(&H0000003f, &Hffffffff)\r
	If Not IsEmpty(ChgLED) Then\r
		For ii = 0 To UBound(ChgLED)\r
			chg = chgLED(ii, 1):stat = chgLED(ii, 2)\r
\r
		If chg>0 then WriteLed chgLED(ii, 0),stat\r
		Next\r
	End IF\r
End Sub\r
\r
'------ Read and Write to the B2S registry data ---------\r
Function WriteReg(ByVal Value)\r
	Dim Key\r
	Key = objRegistry.RegWrite("HKCU\\B2S\\B2SDATA",Value,"REG_SZ")\r
	WriteReg = Key\r
End Function\r
\r
Function ReadReg()\r
	Dim Key\r
	Key = objRegistry.RegRead("HKCU\\B2S\\B2SDATA")\r
	ReadReg = Key\r
End Function\r
\r
Function WriteLed(ByVal LedNo,ByVal Value)\r
	Dim Key\r
	Key = objRegistry.RegWrite("HKCU\\B2S\\B2SLED"+cstr(LedNo),Value,"REG_DWORD")\r
	WriteLED = Key\r
End Function\r
\r
\r
\r
'*************************\r
'******** Scoring ********\r
'*************************\r
\r
Dim b2sPlayer,b2sTilt,b2sRollOverReel,b2sRollOverLights\r
Dim b2sReplayLevels(4,2) 'Player,reel1/reel2 values\r
Dim b2sAddBall(4)		 'Replay flags to handle the order of replay levels\r
Dim b2sScoreSounds(7)\r
Dim ReelPulses(24,2)	 '(PulseQueue, ReelValue)\r
\r
\r
\r
Sub b2sScore (ByVal reel,ByVal pulses,ByVal player)\r
	Dim ri\r
	'Reel Array	 -->   ReelPulses(24,2)	 '(PulseQueue, ReelValue)\r
	ri=(player-1)*6+reel\r
	ReelPulses (ri,1)=ReelPulses (ri,1)+pulses\r
	b2sPlayer=player\r
 End Sub\r
\r
 Sub b2sScoreTimer_Timer()\r
	Dim i\r
	Dim ri\r
	If b2sPlayer>0 And b2sTilt<3 Then\r
		ri=(b2sPlayer-1)*6\r
		For i =6 to 1 Step -1\r
		  If ReelPulses (ri+i,1)>0 Then\r
			 PlaySound b2sScoreSounds(i)\r
			 ReelPulses (ri+i,1)=ReelPulses (ri+i,1)-1\r
			 ReelPulses (ri+i,2)=ReelPulses (ri+i,2)+1\r
			 If ReelPulses (ri+i,2)=10 Then\r
				If i=b2sRollOverReel Then\r
				   ' Overflow\r
				   ' This is where you turn on the rollover lights\r
					If b2sRollOverLights= TRUE Then SetB2SData b2sPlayer+23,1\r
					ReelPulses (ri+i,1)=0\r
					ReelPulses (ri+i,2)=0\r
					PlaySound b2sScoreSounds(7)\r
				Else\r
				   ReelPulses (ri+i-1,1)=ReelPulses (ri+i-1,1)+1\r
				   ReelPulses (ri+i,2)=0\r
				End If\r
			 End If\r
			 SetB2SData (ri+i-1), ReelPulses (ri+i,2)\r
			 'Check replay scores\r
			 If i=b2sRollOverReel+1 Then\r
				If ReelPulses (ri+b2sRollOverReel,2)=b2sReplayLevels(b2sAddBall(b2sPlayerPlayer)+1,1) Then\r
				   If ReelPulses (ri+b2sRollOverReel+1,2)=b2sReplayLevels(b2sAddBall(b2sPlayerPlayer)+1,2) Then\r
					  b2sAddBall(b2sPlayerPlayer)=b2sAddBall(b2sPlayerPlayer)+1\r
					  'Action replay level reached\r
					   ReplayAction 'This Sub must be present in the table script\r
					  '=====================\r
				   End If\r
				End If\r
			 End If\r
		  End If\r
		Next\r
	End If\r
 End Sub\r
\r
Sub InitB2SScoring (ByVal rp1_1,ByVal rp1_2,ByVal rp2_1,ByVal rp2_2,ByVal rp3_1,ByVal rp3_2,ByVal ror, ByVal rol)\r
	' This routine must be called before starting a new game\r
	Dim i\r
	b2sReplayLevels (1,1)=rp1_1\r
	b2sReplayLevels (1,2)=rp1_2\r
	b2sReplayLevels (2,1)=rp2_1\r
	b2sReplayLevels (2,2)=rp2_2\r
	b2sReplayLevels (3,1)=rp3_1\r
	b2sReplayLevels (3,2)=rp3_2\r
	b2sRollOverReel=ror\r
	b2sRollOverlights=rol\r
	b2sAddBall(1)=0\r
	b2sAddBall(2)=0\r
	b2sAddBall(3)=0\r
	b2sAddBall(4)=0\r
	For i = 0 To 24\r
		ReelPulses (i,1)=0\r
		ReelPulses (i,2)=0\r
	Next\r
End Sub\r
\r
Sub SetB2SScoreSounds(ByVal s1,ByVal s2,ByVal s3,ByVal s4,ByVal s5,ByVal s6,ByVal s7)\r
	b2sScoreSounds(1)=s1\r
	b2sScoreSounds(2)=s2\r
	b2sScoreSounds(3)=s3\r
	b2sScoreSounds(4)=s4\r
	b2sScoreSounds(5)=s5\r
	b2sScoreSounds(6)=s6\r
	b2sScoreSounds(7)=s7\r
End Sub\r
`,Fe=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Capcom Data\r
'-------------------------\r
Const swCoin1       = 01\r
Const swCoin2       = 02\r
Const swCoin3       = 03\r
Const swCoin4       = 04\r
Const swDiagnostic  = 08\r
Const swStartButton = 07\r
Const swTilt        = 10\r
Const swSlamTilt    = 09\r
Const swBuyIn       = 11\r
\r
Const swLRFlip      = 82\r
Const swLLFlip      = 84\r
Const swURFlip      = 81\r
Const swULFlip      = 83\r
\r
Const GameOnSolenoid = 51\r
\r
' Help window\r
vpmSystemHelp = "Capcom keys" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4)  & vbTab & "Insert Coin #4" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Options Menu (No Dips)\r
Private Sub CapcomShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm  80, 0, "Option Menu"\r
		.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("CapcomShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin4'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swDiagnostic)  = NOT .Switch(swDiagnostic)\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoNudge   0,6\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,fe=`'***Controller.vbs version 1.2***'\r
'\r
'by arngrim\r
'\r
'This script was written to have a generic way to define a controller, no matter if the table is EM or SS based.\r
'It will also try to load the B2S.Server and if it is not present (or forced off),\r
'just the standard VPinMAME.Controller is loaded for SS generation games, or no controller for EM ones.\r
'\r
'At the first launch of a table using Controller.vbs, it will write into the registry with these default values\r
'ForceDisableB2S= 0\r
'DOFContactors	= 2\r
'DOFKnocker		= 2\r
'DOFChimes		= 2\r
'DOFBell		= 2\r
'DOFGear		= 2\r
'DOFShaker		= 2\r
'DOFFlippers	= 2\r
'DOFTargets		= 2\r
'DOFDropTargets	= 2\r
'\r
'Note that the value can be 0,1 or 2 (0 enables only digital sound, 1 only DOF and 2 both)\r
'\r
'If B2S.Server is setup but one doesn't want to use it, one should change the registry entry for ForceDisableB2S to 1\r
'\r
'\r
'Table script usage:\r
'\r
'This needs to be added on top of the script on both SS and EM tables:\r
'\r
'  On Error Resume Next\r
'  ExecuteGlobal GetTextFile("Controller.vbs")\r
'  If Err Then MsgBox "Unable to open Controller.vbs. Ensure that it is in the Scripts folder of Visual Pinball."\r
'  On Error Goto 0\r
'\r
'In addition the name of the rom (or the fake rom name for EM tables) is needed, because we need it for B2S (and loading VPM):\r
'\r
'  cGameName = "rom_name"\r
'\r
'For SS tables, the traditional LoadVPM method must be -removed- from the script\r
'as it is fully integrated into this script (leave the actual call in the script, of course),\r
'so search for something like this in the table script and -comment out or delete-:\r
'\r
'  Sub LoadVPM(VPMver, VBSfile, VBSver)\r
'    On Error Resume Next\r
'    If ScriptEngineMajorVersion <5 Then MsgBox "VB Script Engine 5.0 or higher required"\r
'    ExecuteGlobal GetTextFile(VBSfile)\r
'    If Err Then MsgBox "Unable to open " & VBSfile & ". Ensure that it is in the Scripts folder of Visual Pinball. " & vbNewLine & Err.Description\r
'\r
'    Set Controller = CreateObject("B2S.Server")\r
'    'Set Controller = CreateObject("VPinMAME.Controller")\r
'\r
'    If Err Then MsgBox "Can't Load VPinMAME." & vbNewLine & Err.Description\r
'    If VPMver> "" Then If Controller.Version <VPMver Or Err Then MsgBox "VPinMAME ver " & VPMver & " required."\r
'    If VPinMAMEDriverVer <VBSver Or Err Then MsgBox VBSFile & " ver " & VBSver & " or higher required."\r
'    On Error Goto 0\r
'  End Sub\r
'\r
'For SS tables with bad/outdated support by B2S Server (unsupported solenoids, lamps) one can call:\r
'\r
'  LoadVPMALT\r
'\r
'For EM tables, in the table_init, call:\r
'\r
'  LoadEM\r
'\r
'For PROC tables, in the table_init, call:\r
'\r
'  LoadPROC\r
'\r
'Finally, all calls to the B2S.Server Controller properties must be surrounded by a B2SOn check, so for example:\r
'\r
'  If B2SOn Then Controller.B2SSetGameOver 1\r
'\r
'Or "If ... End If" for multiple script lines that feature the B2S.Server Controller properties, for example:\r
'\r
'  If B2SOn Then\r
'    Controller.B2SSetTilt 0\r
'    Controller.B2SSetCredits Credits\r
'    Controller.B2SSetGameOver 1\r
'  End If\r
'\r
'That's all :)\r
'\r
'\r
'Optionally, if one wants to add the automatic ability to mute sounds and switch to DOF calls instead\r
'(based on the toy configuration that is set at the first run of a table), one can use three variants:\r
'\r
'For SS tables:\r
'\r
'  PlaySound SoundFX("sound", DOF_toy_category)\r
'\r
'If the specific DOF_toy_category (knocker, chimes, etc) is set to 1 in the Controller.txt,\r
'it will not play the sound but play "" instead.\r
'\r
'For EM tables, usually DOF calls are scripted and directly linked with a sound, so SoundFX and DOF can be combined to one method:\r
'\r
'  PlaySound SoundFXDOF("sound", DOFevent, State, DOF_toy_category)\r
'\r
'If the specific DOF_toy_category (knocker, chimes, etc) is set to 1 in the Controller.txt,\r
'it will not play the sound but just trigger the DOF call instead.\r
'\r
'For pure DOF calls without any sound (lights for example), the DOF method can be used:\r
'\r
'  DOF(DOFevent, State)\r
'\r
'To selectively disable B2S for certain tables, use variable "B2SOff=True" (after ExecuteGlobal GetTextFile("controller.vbs"), but before LoadXXX)\r
'\r
\r
Option Explicit\r
\r
'Legacy (<10.7.4):\r
Const directory = "HKEY_CURRENT_USER\\SOFTWARE\\Visual Pinball\\Controller\\"\r
\r
Dim B2SController\r
Dim Controller\r
Const DOFContactors = 1\r
Const DOFKnocker = 2\r
Const DOFChimes = 3\r
Const DOFBell = 4\r
Const DOFGear = 5\r
Const DOFShaker = 6\r
Const DOFFlippers = 7\r
Const DOFTargets = 8\r
Const DOFDropTargets = 9\r
Const DOFOff = 0\r
Const DOFOn = 1\r
Const DOFPulse = 2\r
\r
Dim DOFeffects(9)\r
Dim B2SOn\r
Dim B2SOnALT\r
Dim B2SOff\r
B2SOff = False\r
\r
Sub LoadEM\r
	LoadController "EM", "0", "0", 0.0\r
End Sub\r
\r
Sub LoadPROC(VPMver, VBSfile, VBSver)\r
	LoadVBSFiles VBSfile\r
	LoadController "PROC", VPMver, VBSfile, VBSver\r
End Sub\r
\r
Sub LoadVPM(VPMver, VBSfile, VBSver)\r
	LoadVBSFiles VBSfile\r
	LoadController "VPM", VPMver, VBSfile, VBSver\r
End Sub\r
\r
'This is used for tables that need 2 controllers to be launched, one for VPM and the second one for B2S.Server\r
'Because B2S.Server can't handle certain solenoid or lamps, we use this workaround to communicate to B2S.Server and DOF\r
'By scripting the effects using DOFAlT and SoundFXDOFALT and B2SController\r
Sub LoadVPMALT(VPMver, VBSfile, VBSver)\r
	LoadVBSFiles VBSfile\r
	LoadController "VPMALT", VPMver, VBSfile, VBSver\r
End Sub\r
\r
Sub LoadVBSFiles(VBSfile)\r
	On Error Resume Next\r
	If ScriptEngineMajorVersion < 5 Then MsgBox "VB Script Engine 5.0 or higher required"\r
	ExecuteGlobal GetTextFile(VBSfile)\r
	If Err Then MsgBox "Unable to open " & VBSfile & ". Ensure that it is in the Scripts folder of Visual Pinball. " & vbNewLine & Err.Description\r
	InitializeOptions\r
End Sub\r
\r
Sub LoadVPinMAME(VPMver, VBSfile, VBSver)\r
	Err.Clear ' Clear any error that happened before and that we would report wrongly\r
	Set Controller = CreateObject("VPinMAME.Controller")\r
	If Err Then MsgBox "Can't load VPinMAME." & vbNewLine & Err.Description\r
	If VPMver > "" Then If Controller.Version < VPMver Or Err Then MsgBox "VPinMAME ver " & VPMver & " required."\r
	If VPinMAMEDriverVer < VBSver Or Err Then MsgBox VBSFile & " ver " & VBSver & " or higher required."\r
End Sub\r
\r
'Try to load b2s.server and if not possible, load VPinMAME.Controller instead.\r
'The user can put a value of 1 for ForceDisableB2S, which will force to load VPinMAME or no controller for EM tables.\r
'Also defines the array of toy categories that will either play the sound or trigger the DOF effect.\r
Sub LoadController(TableType, VPMver, VBSfile, VBSver)\r
	Dim DisableB2S\r
\r
	B2SOn = False\r
	B2SOnALT = False\r
	On Error Resume Next\r
\r
	If VPBuildVersion < 10704 Then\r
		DisableB2S = 0\r
		Dim objShell\r
		Set objShell = CreateObject("WScript.Shell")\r
		objShell.RegRead(directory & "ForceDisableB2S")\r
		If Err.number <> 0 Then\r
			Dim PopupMessage\r
			PopupMessage = "This version of Controller.vbs stores its settings in the registry. To adjust the values, you must use VP 10.2 to 10.7 and setup your configuration in the DOF section of the -Keys, Nudge and DOF- dialog of Visual Pinball."\r
			objShell.RegWrite directory & "ForceDisableB2S",0, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFContactors",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFKnocker",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFChimes",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFBell",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFGear",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFShaker",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFFlippers",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFTargets",2, "REG_DWORD"\r
			objShell.RegWrite directory & "DOFDropTargets",2, "REG_DWORD"\r
			MsgBox PopupMessage\r
		End If\r
		DisableB2S    = objShell.RegRead(directory & "ForceDisableB2S")\r
		DOFeffects(DOFContactors)  = objShell.RegRead(directory & "DOFContactors")\r
		DOFeffects(DOFKnocker)     = objShell.RegRead(directory & "DOFKnocker")\r
		DOFeffects(DOFChimes)      = objShell.RegRead(directory & "DOFChimes")\r
		DOFeffects(DOFBell)        = objShell.RegRead(directory & "DOFBell")\r
		DOFeffects(DOFGear)        = objShell.RegRead(directory & "DOFGear")\r
		DOFeffects(DOFShaker)      = objShell.RegRead(directory & "DOFShaker")\r
		DOFeffects(DOFFlippers)    = objShell.RegRead(directory & "DOFFlippers")\r
		DOFeffects(DOFTargets)     = objShell.RegRead(directory & "DOFTargets")\r
		DOFeffects(DOFDropTargets) = objShell.RegRead(directory & "DOFDropTargets")\r
		Set objShell  = nothing\r
	Else\r
		DisableB2S    = CInt(Setting("Controller", "ForceDisableB2S"))\r
		DOFeffects(DOFContactors)  = CInt(Setting("Controller", "DOFContactors"))\r
		DOFeffects(DOFKnocker)     = CInt(Setting("Controller", "DOFKnocker"))\r
		DOFeffects(DOFChimes)      = CInt(Setting("Controller", "DOFChimes"))\r
		DOFeffects(DOFBell)        = CInt(Setting("Controller", "DOFBell"))\r
		DOFeffects(DOFGear)        = CInt(Setting("Controller", "DOFGear"))\r
		DOFeffects(DOFShaker)      = CInt(Setting("Controller", "DOFShaker"))\r
		DOFeffects(DOFFlippers)    = CInt(Setting("Controller", "DOFFlippers"))\r
		DOFeffects(DOFTargets)     = CInt(Setting("Controller", "DOFTargets"))\r
		DOFeffects(DOFDropTargets) = CInt(Setting("Controller", "DOFDropTargets"))\r
		Err.Clear ' Clear any error that may have happened with missing/malformated settings\r
	End If\r
\r
	'deactivate B2S via table script\r
	if B2SOff then DisableB2S = 1\r
\r
	If TableType = "PROC" or TableType = "VPMALT" Then\r
		If TableType = "PROC" Then\r
			Set Controller = CreateObject("VPROC.Controller")\r
			If Err Then MsgBox "Can't load PROC"\r
		Else\r
			LoadVPinMAME VPMver, VBSfile, VBSver\r
		End If\r
		If DisableB2S = 0 Then\r
			On Error Resume Next\r
			If Controller is Nothing Then\r
				Err.Clear\r
			Else\r
				Set B2SController = CreateObject("B2S.Server")\r
				If B2SController is Nothing Then\r
					Err.Clear\r
				Else\r
					B2SController.B2SName = B2ScGameName\r
					B2SController.TableName = ActiveTable.FileName\r
					B2SController.Run()\r
					On Error Goto 0\r
					B2SOn = True\r
					B2SOnALT = True\r
				End If\r
			End If\r
		End If\r
	Else\r
		If DisableB2S = 0 Then\r
			On Error Resume Next\r
			Set Controller = CreateObject("B2S.Server")\r
			If Controller is Nothing Then\r
				Err.Clear\r
				If TableType = "VPM" Then\r
					LoadVPinMAME VPMver, VBSfile, VBSver\r
				End If\r
			Else\r
				Controller.B2SName = cGameName\r
				Controller.TableName = ActiveTable.FileName\r
				If TableType = "EM" Then\r
					Controller.Run()\r
				End If\r
				On Error Goto 0\r
				B2SOn = True\r
			End If\r
		Else\r
			If TableType = "VPM" Then\r
				LoadVPinMAME VPMver, VBSfile, VBSver\r
			End If\r
		End If\r
	End If\r
	' Check if controller supports syncing by an external clock (latest B2S and PinMame do)\r
	On Error Resume Next\r
		Err.Clear\r
		Controller.TimeFence = 0\r
		If Err Then HasTimeFence = False Else HasTimeFence = True\r
		Err.Clear\r
		IsPluginPinMAME = Controller.IsPlugin\r
		If Err Then IsPluginPinMAME = False\r
		Err.Clear\r
	On Error Goto 0\r
End sub\r
\r
'Additional DOF sound vs toy/effect helpers:\r
\r
'Mostly used for SS tables, returns the sound to be played or no sound,\r
'depending on the toy category that is set to play the sound or not.\r
'The trigger of the DOF Effect is set at the DOF method level\r
'because for SS tables we usually don't need to script the DOF calls.\r
'Just map the Solenoid, Switches and Lamps in the ini file directly.\r
Function SoundFX (Sound, Effect)\r
	If ((Effect = 0 And B2SOn) Or DOFeffects(Effect)=1) Then\r
		SoundFX = ""\r
	Else\r
		SoundFX = Sound\r
	End If\r
End Function\r
\r
'Mostly used for EM tables, because in EM there is most often a direct link\r
'between a sound and DOF Trigger, DOFevent is the ID reference of the DOF Call\r
'that is used in the DOF ini file and State defines if it pulses, goes on or off.\r
'Example based on the constants that must be present in the table script:\r
'SoundFXDOF("flipperup",101,DOFOn,contactors)\r
Function SoundFXDOF (Sound, DOFevent, State, Effect)\r
	If DOFeffects(Effect)=1 Then\r
		SoundFXDOF = ""\r
		DOF DOFevent, State\r
	ElseIf DOFeffects(Effect)=2 Then\r
		SoundFXDOF = Sound\r
		DOF DOFevent, State\r
	Else\r
		SoundFXDOF = Sound\r
	End If\r
End Function\r
\r
'Method used to communicate to B2SController instead of the usual Controller\r
Function SoundFXDOFALT (Sound, DOFevent, State, Effect)\r
	If DOFeffects(Effect)=1 Then\r
		SoundFXDOFALT = ""\r
		DOFALT DOFevent, State\r
	ElseIf DOFeffects(Effect)=2 Then\r
		SoundFXDOFALT = Sound\r
		DOFALT DOFevent, State\r
	Else\r
		SoundFXDOFALT = Sound\r
	End If\r
End Function\r
\r
'Pure method that makes it easier to call just a DOF Event.\r
'Example DOF 123, DOFOn\r
'Where 123 refers to E123 in a line in the DOF ini.\r
Sub DOF(DOFevent, State)\r
	If B2SOn Then\r
		If State = 2 Then\r
			Controller.B2SSetData DOFevent, 1:Controller.B2SSetData DOFevent, 0\r
		Else\r
			Controller.B2SSetData DOFevent, State\r
		End If\r
	End If\r
End Sub\r
\r
'If PROC or B2SController is used, we need to pass B2S events to the B2SController instead of the usual Controller\r
'Use this method to pass information to DOF instead of the Sub DOF\r
Sub DOFALT(DOFevent, State)\r
	If B2SOnALT Then\r
		If State = 2 Then\r
			B2SController.B2SSetData DOFevent, 1:B2SController.B2SSetData DOFevent, 0\r
		Else\r
			B2SController.B2SSetData DOFevent, State\r
		End If\r
	End If\r
End Sub\r
`,Te=`Option Explicit\r
\r
Const VPinMAMEDriverVer = 3.61\r
\r
'======================\r
' VPinMAME driver core\r
'======================\r
'\r
'see Scripts.txt for details on how to use this, plus the actual functions below for more help in its comments\r
\r
Dim Controller	 ' VPinMAME/B2S/etc Controller Object\r
Dim vpmTimer	 ' Timer Object\r
Dim vpmNudge	 ' Nudge handler Object\r
Dim Lights(260)	 ' Put all lamps in an array for easier handling\r
' If more than one lamp is connected, fill this with an array of each light\r
Dim vpmMultiLights() : ReDim vpmMultiLights(0)\r
Private gNextMechNo : gNextMechNo = 0 ' keep track of created mech handlers (would be nice with static members)\r
\r
' Callbacks\r
Dim SolCallback(68) ' Solenoids (parsed at Runtime)\r
Dim SolModCallback(68) ' Solenoid modulated callbacks (parsed at Runtime)\r
Dim SolCallbackRef(68) ' Parsed callbacks appended to script to avoid stutters caused by calling Execute\r
Dim SolModCallbackRef(68) ' Parsed callbacks appended to script to avoid stutters caused by calling Execute\r
Dim SolPrevState(68) ' When modulating solenoids are in use, needed to keep positive value levels from changing boolean state\r
Dim SolCallbackInitialized ' Late initialization of solenoid callback\r
Dim LampCallback	' Called after lamps are updated\r
Dim PDLedCallback	' Called after leds are updated\r
Dim GICallback		' Called for each changed GI String\r
Dim GICallback2		' Called for each changed GI String\r
Dim MotorCallback	' Called after solenoids are updated\r
Dim vpmCreateBall	' Called whenever a vpm class needs to create a ball\r
Dim BSize:If IsEmpty(Eval("BallSize"))=true Then BSize=25 Else BSize = BallSize/2\r
Dim BMass:If IsEmpty(Eval("BallMass"))=true Then BMass=1 Else BMass = BallMass\r
Dim UseDMD:If IsEmpty(Eval("UseVPMDMD"))=true Then UseDMD=false Else UseDMD = UseVPMDMD\r
Dim UseModSol:If IsEmpty(Eval("UseVPMModSol"))=true Then UseModSol=0 Else If UseVPMModSol=True Then UseModSol=1 Else UseModSol = UseVPMModSol ' True or 1 for legacy modulated solenoids (0..255 value), 2 for physical solenoids/lamps/GI/AlphaNumSegments (0..1 value)\r
Dim UseColoredDMD:If IsEmpty(Eval("UseVPMColoredDMD"))=true Then UseColoredDMD=false Else UseColoredDMD = UseVPMColoredDMD\r
Dim UseNVRAM:If IsEmpty(Eval("UseVPMNVRAM"))=true Then UseNVRAM=false Else UseNVRAM = UseVPMNVRAM\r
Dim NVRAMCallback\r
\r
Set GICallback = Nothing\r
Set GICallback2 = Nothing\r
SolCallbackInitialized = False\r
\r
' Game specific info\r
Dim ExtraKeyHelp ' Help string for game specific keys\r
Dim vpmShowDips  ' Show DIPs function\r
\r
' Check if VPX version offers FrameIndex property\r
Dim HasFrameIndex : HasFrameIndex = Not IsEmpty(Eval("FrameIndex"))\r
\r
' Check if VPX version offers PreciseGameTime property\r
Dim HasPreciseGameTime : HasPreciseGameTime = Not IsEmpty(Eval("PreciseGameTime"))\r
\r
' Does the controller support synchronization through time fence\r
Dim HasTimeFence : HasTimeFence = False\r
\r
' Are we using the plugin version of PinMAME\r
Dim IsPluginPinMAME : IsPluginPinMAME = False\r
\r
' If UsePdbLeds is not defined, then define and disable it to avoid constantly raising an error\r
If IsEmpty(Eval("UsePdbLeds"))=true Then ExecuteGlobal("Dim UsePdbLeds:UsePdbLeds=False")\r
\r
Private vpmVPVer : vpmVPVer = vpmCheckVPVer()\r
\r
Private Function PinMAMEInterval\r
	If vpmVPVer >= 10800 Then\r
		PinMAMEInterval = -2 ' VP10.8 introduced special controller-sync'ed timers (more than once a frame to limit latency, without affecting other -1 timers which should run only once per frame)\r
	ElseIf vpmVPVer >= 10200 Then\r
		PinMAMEInterval = -1 ' VP10.2 introduced special frame-sync'ed timers (run at least once per frame, can be 2 if DJRobX latency reduction code is used)\r
	ElseIf vpmVPVer >= 10000 Then\r
		PinMAMEInterval = 3  ' as old VP9 timers pretended to run at 1000Hz but actually did only a max of 100Hz (e.g. corresponding nowadays to interval=10), we do something inbetween for VP10+ by default\r
	Else\r
		PinMAMEInterval = 1\r
	End If\r
End Function\r
\r
Private Const conStackSw	= 8  ' Stack switches\r
Private Const conMaxBalls	= 13 ' Because of Apollo 13\r
Private Const conMaxTimers	= 50 ' Some tables want to generate a lot of timers\r
Private Const conTimerPulse	= 40 ' Timer runs at 25Hz\r
Private Const conFastTicks	= 4  ' Fast is 4 times per timer pulse\r
Private Const conMaxSwHit	= 5  ' Don't stack up more than 5 events for each switch\r
\r
' DEPRECATED Flipper constants:\r
Private Const conFlipRetStrength = 0.01  ' Flipper return strength\r
Private Const conFlipRetSpeed	 = 0.137 ' Flipper return speed\r
\r
Function CheckScript(file) 'Checks Tables and Scripts directories for specified vbs file, and if it exists, will load it.\r
	CheckScript = False\r
	On Error Resume Next\r
	Dim check:Set check = CreateObject("Scripting.FileSystemObject")\r
	If check.FileExists(file) Then ' file is directly specified with path\r
		CheckScript = True\r
	ElseIf check.FileExists(ScriptsDirectory & file) Then ' file is in main application Scripts directory (core scripts)\r
		CheckScript = True\r
	Else\r
		Dim TablesDirectory:TablesDirectory = Left(ActiveTable.FileName,InStrRev(ActiveTable.FileName,"\\",InStrRev(ActiveTable.FileName,"\\")-1))\r
		If check.FileExists(TablesDirectory & file) Then CheckScript = True ' file is in current table directory\r
	End If\r
	On Error Goto 0\r
End Function\r
\r
Function LoadScript(file) 'Checks Tables and Scripts directories for specified vbs file, and if it exists, will load it.\r
	LoadScript = False\r
	On Error Resume Next\r
	If CheckScript(file) Then ExecuteGlobal GetTextFile(file):LoadScript = True\r
	On Error Goto 0\r
End Function\r
\r
' Dictionary\r
' At one point, Microsoft had made Scripting.Dictionary "unsafe for scripting", but it's\r
' been a long time since that was true. So now, to maintain compatibility with all tables\r
' and scripts that use cvpmDictionary, this class is now a simple wrapper around Microsoft's\r
' more efficient implementation.\r
Class cvpmDictionary\r
	Private mDict\r
	Private Sub Class_Initialize : Set mDict = CreateObject("Scripting.Dictionary") : End Sub\r
\r
	' DEPRECATED: MS Dictionaries are not index-based. Use "Exists" method instead.\r
	Private Function FindKey(aKey)\r
		Dim ii, key : FindKey = -1\r
		If mDict.Count > 0 Then\r
			ii = 0\r
			For Each key In mDict.Keys\r
				If key = aKey Then FindKey = ii : Exit Function\r
			Next\r
		End If\r
	End Function\r
\r
	Public Property Get Count : Count = mDict.Count : End Property\r
\r
	Public Property Get Item(aKey)\r
		Item = Empty\r
		If mDict.Exists(aKey) Then\r
			If IsObject(mDict(aKey)) Then\r
				Set Item = mDict(aKey)\r
			Else\r
				Item = mDict(aKey)\r
			End If\r
		End If\r
	End Property\r
\r
	Public Property Let Item(aKey, aData)\r
		If IsObject(aData) Then\r
			Set mDict(aKey) = aData\r
		Else\r
			mDict(aKey) = aData\r
		End If\r
	End Property\r
\r
	Public Property Set Key(aKey)\r
		' This function is (and always has been) a no-op. Previous definition\r
		' just looked up aKey in the keys list, and if found, set the key to itself.\r
	End Property\r
\r
	Public Sub Add(aKey, aItem)\r
		If IsObject(aItem) Then\r
			Set mDict(aKey) = aItem\r
		Else\r
			mDict(aKey) = aItem\r
		End If\r
	End Sub\r
\r
	Public Sub Remove(aKey)		 : mDict.Remove(aKey)		   : End Sub\r
	Public Sub		RemoveAll	 : mDict.RemoveAll			   : End Sub\r
	Public Function Exists(aKey) : Exists = mDict.Exists(aKey) : End Function\r
	Public Function Items		 : Items  = mDict.Items		   : End Function\r
	Public Function Keys		 : Keys   = mDict.Keys		   : End Function\r
End Class\r
\r
'--------------------\r
'		Timer\r
'--------------------\r
Class cvpmTimer\r
	Private mNow, mTimers\r
	Private mQue0, mQue1, mQue2, mQue3, mQue4\r
	Private mSlowUpdates, mFastUpdates, mResets, mFastTimer\r
\r
	Private Sub Class_Initialize\r
		mNow = 0 : mTimers = 0\r
		ReDim mQue0(conMaxTimers)\r
		ReDim mQue1(conMaxTimers)\r
		ReDim mQue2(conMaxTimers)\r
		ReDim mQue3(conMaxTimers)\r
		ReDim mQue4(conMaxTimers)\r
		Set mSlowUpdates = New cvpmDictionary\r
		Set mFastUpdates = New cvpmDictionary\r
		Set mResets		 = New cvpmDictionary\r
	End Sub\r
\r
	Public Sub InitTimer(aTimerObj, aFast)\r
		If aFast Then\r
			Set mFastTimer = aTimerObj\r
			aTimerObj.TimerInterval = conTimerPulse \\ conFastTicks\r
			aTimerObj.TimerEnabled = False\r
			vpmBuildEvent aTimerObj, "Timer", "vpmTimer.FastUpdate"\r
		Else\r
			aTimerObj.Interval = conTimerPulse : aTimerObj.Enabled = True\r
			vpmBuildEvent aTimerObj, "Timer", "vpmTimer.Update"\r
		End If\r
	End Sub\r
\r
	Sub EnableUpdate(aClass, aFast, aEnabled)\r
		If aFast Then\r
			If aEnabled Then\r
				mFastUpdates.Add aClass, 0\r
			ElseIf mFastUpdates.Exists(aClass) Then\r
				mFastUpdates.Remove aClass\r
			End If\r
			If IsObject(mFastTimer) Then mFastTimer.TimerEnabled = mFastUpdates.Count > 0\r
		Else\r
			If aEnabled Then\r
				mSlowUpdates.Add aClass, 0\r
			ElseIf mSlowUpdates.Exists(aClass) Then\r
				mSlowUpdates.Remove aClass\r
			End If\r
		End If\r
	End Sub\r
\r
	Public Sub Reset\r
		Dim obj : For Each obj In mResets.Keys : obj.Reset : Next\r
	End Sub\r
\r
	Public Sub FastUpdate\r
		Dim obj : For Each obj In mFastUpdates.Keys : obj.Update : Next\r
	End Sub\r
\r
	Public Sub Update\r
		Dim ii, jj, sw, obj, mQuecopy\r
\r
		For Each obj In mSlowUpdates.Keys : obj.Update : Next\r
		If mTimers = 0 Then Exit Sub\r
		mNow = mNow + 1 : ii = 1\r
\r
		Do While ii <= mTimers\r
			If mQue0(ii) <= mNow Then\r
				If mQue1(ii)= 0 Then\r
					If isObject(mQue3(ii)) Then\r
						Call mQue3(ii)(mQue2(ii))\r
					ElseIf varType(mQue3(ii)) = vbString Then\r
						' Warning: calling Execute is a direct cause of stutters since it triggers OS security. We should avoid using it here\r
						If mQue3(ii) > "" Then Execute mQue3(ii) & " " & mQue2(ii) & " "\r
					End If\r
					mTimers = mTimers - 1\r
					For jj = ii To mTimers\r
						mQue0(jj) = mQue0(jj+1)\r
						mQue1(jj) = mQue1(jj+1)\r
						mQue2(jj) = mQue2(jj+1)\r
						If isObject(mQue3(jj+1)) Then\r
						   Set mQue3(jj) = mQue3(jj+1)\r
						Else\r
						   mQue3(jj) = mQue3(jj+1)\r
						End If\r
						mQue3(jj) = mQue3(jj+1)\r
						mQue4(jj) = mQue4(jj+1)\r
					Next\r
					ii = ii - 1\r
				ElseIf mQue1(ii) = 1 Then\r
					mQuecopy = mQue2(ii)\r
					Controller.Switch(mQuecopy) = False\r
					mQue0(ii) = mNow + mQue4(ii) : mQue1(ii) = 0\r
				Else '2\r
					mQuecopy = mQue2(ii)\r
					Controller.Switch(mQuecopy) = True\r
					mQue1(ii) = 1\r
				End If\r
			End If\r
			ii = ii + 1\r
		Loop\r
	End Sub\r
\r
	Public Sub AddResetObj(aObj) : mResets.Add aObj, 0 : End Sub\r
\r
	Public Sub PulseSw(aSwNo) : PulseSwitch aSwNo, 0, 0 : End Sub\r
\r
	Public Default Sub PulseSwitch(aSwNo, aDelay, aCallback)\r
		Dim ii, count, last\r
		count = 0\r
		For ii = 1 To mTimers\r
			If mQue1(ii) > 0 And mQue2(ii) = aSwNo Then count = count + 1 : last = ii\r
		Next\r
		If count >= conMaxSwHit Or mTimers = conMaxTimers Then Exit Sub\r
		mTimers = mTimers + 1\r
		mQue0(mTimers) = mNow\r
		mQue1(mTimers) = 2\r
		mQue2(mTimers) = aSwNo\r
		If isObject(aCallback) Then\r
			Set mQue3(mTimers) = aCallback\r
		Else\r
			mQue3(mTimers) = aCallback\r
		End If\r
		mQue4(mTimers) = aDelay \\ conTimerPulse\r
		If count Then mQue0(mTimers) = mQue0(last) + mQue1(last)\r
	End Sub\r
\r
	Public Sub AddTimer(aDelay, aCallback)\r
		If mTimers = conMaxTimers Then Exit Sub\r
		mTimers = mTimers + 1\r
		mQue0(mTimers) = mNow + aDelay \\ conTimerPulse\r
		mQue1(mTimers) = 0\r
		mQue2(mTimers) = 0\r
		If isObject(aCallback) Then\r
			Set mQue3(mTimers) = aCallback\r
		Else\r
			mQue3(mTimers) = aCallback\r
		End If\r
		mQue4(mTimers) = 0\r
	End Sub\r
\r
	Public Sub AddTimer2(aDelay, aCallback, aID)\r
		If mTimers = conMaxTimers Then Exit Sub\r
		mTimers = mTimers + 1\r
		mQue0(mTimers) = mNow + aDelay \\ conTimerPulse\r
		mQue1(mTimers) = 0\r
		mQue2(mTimers) = aID\r
		If isObject(aCallback) Then\r
			Set mQue3(mTimers) = aCallback\r
		Else\r
			mQue3(mTimers) = aCallback\r
		End If\r
		mQue4(mTimers) = 0\r
	End Sub\r
End Class\r
\r
'--------------------\r
'	  Trough\r
'--------------------\r
Class cvpmTrough\r
	' Takes over for older cvpmBallStack in "trough mode". Theory of operation:\r
	' A trough can hold up to N balls, and has N*2 "slots". A ball effectively takes\r
	' up two slots, so no two adjacent slots (0 and 1) can be occupied at the same time.\r
	' Switches are assigned to even slots only, which means that as balls move through\r
	' the trough, each switch is allowed to flip between open and closed.\r
	' Slot 0 is the exit, and can have additional balls "stacked" on it, simulating balls\r
	' falling onto the exit kicker instead of coming in from the entrance. Extra balls\r
	' can be queued up at the entrance, and will enter the trough only if there's room\r
	' for them.\r
\r
	Private mSlot(), mSw(), mEntrySw\r
	Private mBallsInEntry, mMaxBallsPerKick, mStackExitBalls\r
	Private mExitKicker, mExitDir, mExitForce, mDirVar, mForceVar\r
	Private mSounds\r
\r
	' If you want to see what the trough is doing internally, add a TextBox to your table\r
	' named "DebugBox" (recommend Courier New or FixedSys at a small font size) and set\r
	' this variable to true via .isDebug = True.\r
	Private mDebug\r
\r
	Private Sub Class_Initialize\r
		Dim ii\r
\r
		ReDim mSw(conMaxBalls), mSlot(conMaxBalls * 2)\r
		For ii = 0 to UBound(mSlot) : mSlot(ii) = 0 : Next ' All slots empty to start\r
		For ii = 0 to UBound(mSw)	: mSw(ii) = 0	: Next ' All switches unassigned to start.\r
		mEntrySw = 0\r
\r
		Set mExitKicker = Nothing\r
		mExitDir = 0 : mExitForce = 1 : mDirVar = 0 : mForceVar = 0\r
		mBallsInEntry = 0 : mMaxBallsPerKick = 1 : mStackExitBalls = 1\r
\r
		Set mSounds = New cvpmDictionary\r
\r
		mDebug = False\r
\r
		If Not IsObject(vpmTrough) Then Set vpmTrough = Me\r
	End Sub\r
\r
	Public Property Let IsTrough(aYes)\r
		If aYes Then\r
			Set vpmTrough = Me\r
		ElseIf Me Is vpmTrough Then\r
			Set vpmTrough = Nothing\r
		End If\r
	End Property\r
\r
	Public Property Get IsTrough\r
		IsTrough = (Me Is vpmTrough)\r
	End Property\r
\r
	' Initialization\r
\r
	Public Property Let isDebug(enabled) : mDebug = enabled : End Property\r
\r
	Public Property Let Size(aSize)\r
		Dim oldSize, newSize, ii\r
		oldSize = UBound(mSw)\r
		newSize = vpMax(1, aSize)\r
\r
		ReDim Preserve mSlot(newSize * 2)\r
		ReDim Preserve mSw(newSize)\r
		For ii = oldSize+1 To newSize : mSw(ii) = 0 : Next\r
		For ii = (oldSize*2) + 1 to (newSize*2) : mSlot(ii) = 0 : Next\r
	End Property\r
	Public Property Get Size : Size = UBound(mSw) : End Property\r
\r
	' Set EntrySw = 0 if you want balls to just fall into the trough automatically.\r
	' Set it to a real switch number to indicate that a ball is occupying an entry kicker.\r
	' The ROM in the controller is then responsible for kicking the ball into the trough.\r
	Public Property Let EntrySw(swNo) : mEntrySw = swNo : End Property\r
\r
	' Assign switches, starting from slot 0 and going to entrance.\r
	' This sub allows you to pass in as many switches as you wish.\r
	Public Sub InitSwitches(switchArray)\r
		If Not IsArray(switchArray) Then\r
			Err.Raise 17, "cvpmTrough.InitSwitches: Input must be an array."\r
		End If\r
\r
		Dim ii\r
		For ii = 0 to UBound(mSw)\r
			If ii > UBound(switchArray) Then\r
				mSw(ii) = 0\r
			Else\r
				mSw(ii) = switchArray(ii)\r
			End If\r
		Next\r
	End Sub\r
\r
	' Alternative: Assign a switch to a specific slot.\r
	Public Sub AddSw(slotNo, swNo)\r
		If slotNo < 0 OR slotNo > UBound(mSw) Then Exit Sub\r
		mSw(slotNo) = swNo\r
	End Sub\r
\r
	' MaxBallsPerKick: Kick up to N balls total per exit kick. Balls are only kicked from Slot 0.\r
	' StackExitBalls: Automatically stack up to N balls in Slot 0 regardless of where they came from.\r
\r
	' Example: Subway where exit kicker is on the same level as the trough and a ball can\r
	' come in from the exit: StackExitBalls = 1, MaxBallsPerKick = 2. If Slot 0 has 1\r
	' ball and Slot 1 is occupied, only one ball will be kicked. If Slot 0 has 2 or more\r
	' balls, it'll kick out 2 balls.\r
\r
	' Example: Twilight Zone Slot Kicker: Kicker is below trough, so if a ball is in the\r
	' exit chute, another ball can fall into the chute as well whether it came in from the\r
	' exit (Slot Machine) or any other entrance (Piano, Camera). In both cases, the kicker\r
	' will eject 2 balls at once. Set StackExitBalls = 2, maxBallsPerKick = 2 to simulate.\r
\r
	Public Property Let MaxBallsPerKick(n) : mMaxBallsPerKick = vpMax(1, n) : End Property\r
	Public Property Let StackExitBalls(n) : mStackExitBalls = vpMax(1, n) : End Property\r
\r
	Public Sub InitExit(aKicker, aDir, aForce)\r
		If TypeName(aKicker) <> "Kicker" Then\r
			Err.Raise 17, "cvpmTrough.InitExit: Cannot use object of type '" & TypeName(aKicker) & "'."\r
		End If\r
\r
		Set mExitKicker = aKicker\r
		mExitDir = aDir\r
		mExitForce = vpMax(1, aForce)\r
	End Sub\r
\r
	Public Sub InitExitVariance(aDirVar, aForceVar)\r
		mDirVar = aDirVar\r
		mForceVar = aForceVar\r
	End Sub\r
\r
	' Setup sounds\r
	Public Sub InitEntrySounds(addSound, entrySoundEmpty, entrySoundBall)\r
		mSounds.Item("add") = addSound\r
		mSounds.Item("entry") = entrySoundEmpty\r
		mSounds.Item("entryBall") = entrySoundBall\r
	End Sub\r
\r
	Public Sub InitExitSounds(exitSoundEmpty, exitSoundBall)\r
		mSounds.Item("exit") = exitSoundEmpty\r
		mSounds.Item("exitBall") = exitSoundBall\r
	End Sub\r
\r
	' Start trough with this many balls\r
	Public Property Let Balls(numBalls)\r
		Dim ii, ballsAdded\r
\r
		' First clear all slots.\r
		For ii = 0 to UBound(mSlot) : mSlot(ii) = 0 : Next\r
\r
		' Now put a ball in each even-numbered slot up to the number requested.\r
		' First, stack exit slot. (Note, we may get a negative number. vpMin/vpMax prevent that.)\r
		mSlot(0) = vpMax(0, vpMin(mStackExitBalls, numBalls))\r
		ballsAdded = mSlot(0)\r
\r
		' Fill remaining slots.\r
		For ii = 1 to vpMin(numBalls - mSlot(0), UBound(mSw))\r
			mSlot(ii*2) = 1\r
			ballsAdded = ballsAdded + 1\r
		Next\r
\r
		' If we asked to put more balls in the trough than it can handle, queue up the rest.\r
		mBallsInEntry = vpMax(0, numBalls-ballsAdded)\r
\r
		UpdateTroughSwitches\r
	End Property\r
\r
	Public Property Get Balls\r
		Balls = 0\r
		Dim ii : For ii = 0 to UBound(mSlot) : Balls = Balls + mSlot(ii) : Next\r
	End Property\r
\r
	Public Property Get BallsPending : BallsPending = mBallsInEntry : End Property\r
\r
	' Auto-generate events for any entry kickers (eg. outhole, TZ Camera and Piano, etc.)\r
	' Accepts a single kicker, an Array, or a Collection.\r
	Public Sub CreateEvents(aName, aKicker)\r
		Dim obj, tmp\r
		If Not vpmCheckEvent(aName, Me) Then Exit Sub\r
		vpmSetArray tmp, aKicker\r
		For Each obj In tmp\r
			If isObject(obj) Then\r
				vpmBuildEvent obj, "Hit", aName & ".AddBall Me"\r
			Else\r
				vpmBuildEvent mKicker, "Hit", aName & ".AddBall Me"\r
			End If\r
		Next\r
	End Sub\r
\r
	' VPM Update management\r
\r
	Private Property Let NeedUpdate(aEnabled) : vpmTimer.EnableUpdate Me, False, aEnabled : End Property\r
\r
	Public Sub Reset\r
		Dim mEntrySwcopy\r
		UpdateTroughSwitches\r
		If mEntrySw Then\r
			mEntrySwcopy = mEntrySw\r
			Controller.Switch(mEntrySwcopy) = (mBallsInEntry > 0)\r
		End If\r
	End Sub\r
\r
	Public Sub Update\r
		NeedUpdate = AdvanceBalls\r
		UpdateTroughSwitches\r
	End Sub\r
\r
	' Switch and slot management\r
\r
	Private Sub setSw(slotNo, enabled)\r
		Dim mSwcopy\r
		If mSw(slotNo) Then\r
			mSwcopy = mSw(slotNo)\r
			Controller.Switch(mSwcopy) = enabled\r
		End If\r
	End Sub\r
\r
	Private Sub UpdateTroughSwitches\r
		Dim ii, mSwcopy\r
		For ii = 0 to UBound(mSw)\r
			If mSw(ii) Then\r
				mSwcopy = mSw(ii)\r
				Controller.Switch(mSwcopy) = (mSlot(ii*2) > 0)\r
			End If\r
		Next\r
		If mDebug Then UpdateDebugBox\r
	End Sub\r
\r
	Private Sub UpdateDebugBox ' Requires a textbox named DebugBox\r
		Dim str, ii, mSwcopy\r
		str = "Entry: " & mBallsInEntry & " (sw" & mEntrySw & " = "\r
		If mEntrySw > 0 Then\r
			mSwcopy = mEntrySw\r
			str = str & Controller.Switch(mSwcopy)\r
		Else\r
			str = str & "n/a"\r
		End If\r
		str = str & ")" & vbNewLine\r
\r
		str = str & "["\r
		For ii = UBound(mSlot) To 0 Step -1 : str = str & mSlot(ii) : Next\r
		str = str & "]" & vbNewLine\r
\r
		str = str & "["\r
		For ii = UBound(mSlot) To 0 Step -1\r
			If ii Mod 2 = 0 Then\r
				If mSw(ii\\2) Then\r
					mSwcopy = mSw(ii\\2)\r
					If Controller.Switch(mSwcopy) Then\r
						str = str & "1"\r
					Else\r
						str = str & "0"\r
					End If\r
				Else\r
					str = str & "-"\r
				End If\r
			Else\r
				str = str & " "\r
			End If\r
		Next\r
		str = str & "]"\r
\r
		DebugBox.Text = str\r
	End Sub\r
\r
	Private Function AdvanceBalls\r
		Dim ii, canMove, maxSlot\r
		maxSlot = UBound(mSlot)\r
		AdvanceBalls = False\r
\r
		' Move balls through slots, one slot at a time.\r
		For ii = 0 to maxSlot\r
			If mSlot(ii) Then ' Ball in this slot.\r
				canMove = False\r
\r
				' Can this ball move? (Slot 0 = no)\r
				If ii = 0 Then\r
					' Slot 0 never moves (except when ejected)\r
					canMove = False\r
				ElseIf ii = 1 Then\r
					' Slot 1 automatically moves to Slot 0\r
					canMove = True\r
				ElseIf ii = 2 Then\r
					' Slot 2 moves if the number of balls in slot 0 is less than the stack target.\r
					canMove = (mSlot(0) < mStackExitBalls)\r
				Else\r
					' Only move if there is no ball in ii-1 or ii-2.\r
					canMove = (mSlot(ii-2) = 0) AND (mSlot(ii-1) = 0)\r
				End If\r
\r
				If canMove Then\r
					mSlot(ii) = mSlot(ii) - 1\r
					mSlot(ii-1) = mSlot(ii-1) + 1\r
					AdvanceBalls = True ' Mark balls as having moved.\r
				End If\r
			End If\r
		Next\r
\r
		' If balls are supposed to fall into the trough without going through a kicker,\r
		' see if any balls are pending and try to add one automatically if so.\r
		If mBallsInEntry > 0 AND mEntrySw <= 0 Then\r
			AdvanceBalls = AddBallAtEntrance OR AdvanceBalls\r
		End If\r
	End Function\r
\r
	' Ball management\r
\r
	Private Function AddBallAtEntrance\r
		Dim mSwcopy\r
		Dim maxSlot : maxSlot = UBound(mSlot)\r
		AddBallAtEntrance = False\r
\r
		' Only add a ball if there's room for it at the entrance.\r
		' If the trough is full (or the entrance is occupied), the ball will remain\r
		' in the entry queue. In a kicker-gated trough, the entry switch will remain\r
		' pressed down, usually resulting in the machine retrying the load. In a fall-in\r
		' trough, the ball will just remain queued until the entrance opens up.\r
		If mSlot(maxSlot) = 0 AND mSlot(maxSlot-1) = 0 Then\r
			mSlot(maxSlot) = 1\r
			mBallsInEntry = vpMax(0, mBallsInEntry - 1)\r
			If mBallsInEntry = 0 AND mEntrySw Then\r
				mSwcopy = mEntrySw\r
				Controller.Switch(mSwcopy) = False\r
			End If\r
			AddBallAtEntrance = True\r
		End If\r
	End Function\r
\r
	Public Sub AddBall(aKicker)\r
		Dim mSwcopy\r
		Dim addDone : addDone = False\r
		If IsObject(aKicker) Then\r
			aKicker.DestroyBall\r
			If aKicker Is mExitKicker Then\r
				' Ball fell in from exit. Stack it up on Slot 0.\r
				mSlot(0) = mSlot(0) + 1\r
				NeedUpdate = True\r
				UpdateTroughSwitches\r
				addDone = True\r
			End If\r
		End If\r
\r
		If Not addDone Then\r
			' Ball came in from entrance. Queue it up for entry.\r
			mBallsInEntry = mBallsInEntry + 1\r
		If mEntrySw > 0 Then\r
			mSwcopy = mEntrySw\r
			' Trough has an entry kicker. Ball will not enter trough\r
			' until the entry solenoid is fired.\r
			Controller.Switch(mSwcopy) = True\r
			End If\r
			NeedUpdate = True\r
		End If\r
		CorePlaySoundAt mSounds.Item("add"), aKicker\r
	End Sub\r
\r
	' Use solCallback(solNo) on the trough entry kicker solenoid.\r
	Public Sub solIn(aEnabled)\r
		If aEnabled Then\r
			If mBallsInEntry > 0 Then\r
				NeedUpdate = AddBallAtEntrance\r
				PlaySound mSounds.Item("entryBall")\r
			Else\r
				PlaySound mSounds.Item("entry")\r
			End If\r
		End If\r
	End Sub\r
	Public Sub EntrySol_On : solIn(true) : End Sub\r
\r
	' Use solCallback(solNo) on the trough exit kicker solenoid.\r
	Public Sub solOut(aEnabled)\r
		Dim iiBall, kDir, kForce, kBaseDir, ballsEjected\r
		ballsEjected = 0\r
\r
		If aEnabled Then\r
			For iiBall = 0 to (mMaxBallsPerKick - 1)\r
				kDir = (mExitDir + (Rnd - 0.5) * mDirVar)\r
				kForce = vpMax(1, mExitForce + (Rnd - 0.5) * mForceVar * (0.8 * iiBall)) ' Dampen force a bit on subsequent balls.\r
\r
				If mSlot(0) > 0 Then\r
					' Remove ball from this slot.\r
					mSlot(0) = mSlot(0) - 1\r
					If isObject(mExitKicker) Then\r
						vpmTimer.AddTimer ballsEjected*200, "vpmCreateBall(" & mExitKicker.Name & ").Kick " &_\r
							CInt(kDir) & "," & Replace(kForce,",",".") & ", 0 '"\r
					End If\r
\r
					ballsEjected = ballsEjected + 1\r
				End If\r
			Next\r
\r
			If ballsEjected > 0 Then\r
				CorePlaySoundAt mSounds.Item("exitBall"), mExitKicker\r
				UpdateTroughSwitches\r
				NeedUpdate = True\r
			Else\r
				CorePlaySoundAt mSounds.Item("exit"), mExitKicker\r
			End If\r
		End If\r
	End Sub\r
	Public Sub ExitSol_On : solOut(true) : End Sub\r
End Class\r
\r
'--------------------\r
'	  Saucer\r
'--------------------\r
Class cvpmSaucer\r
	' Takes over for older cvpmBallStack in "saucer mode".\r
\r
	Private mSw, mKicker, mExternalKicker\r
	Private mDir(1), mForce(1), mZForce(1), mDirVar, mForceVar\r
	Private mSounds\r
\r
	Private Sub Class_Initialize\r
		mSw = 0\r
\r
		mKicker = 0\r
		mExternalKicker = 0\r
		mDir(0) = 0 : mForce(0) = 1 : mZForce(0) = 0\r
		mDir(1) = 0 : mForce(1) = 1 : mZForce(1) = 0\r
		mDirVar = 0 : mForceVar = 0\r
\r
		Set mSounds = New cvpmDictionary\r
	End Sub\r
\r
	' Initialization\r
\r
	Public Sub InitKicker(aKicker, aSw, aDir, aForce, aZForce)\r
		If TypeName(aKicker) <> "Kicker" Then\r
			Err.Raise 17, "cvpmSaucer.InitKicker: Cannot use object of type '" & TypeName(aKicker) & "'."\r
		End If\r
\r
		Set mKicker = aKicker\r
		mSw = aSw\r
		mDir(0) = aDir\r
		mForce(0) = vpMax(1, aForce)\r
		mZForce(0) = vpMax(0, aZForce)\r
	End Sub\r
\r
	Public Sub InitExitVariance(aDirVar, aForceVar)\r
		mDirVar = aDirVar\r
		mForceVar = aForceVar\r
	End Sub\r
\r
	' Alternate kick params (simulates a saucer with two kickers)\r
	Public Sub InitAltKick(aDir, aForce, aZForce)\r
		mDir(1) = aDir\r
		mForce(1) = vpMax(1, aForce)\r
		mZForce(1) = vpMax(0, aZForce)\r
	End Sub\r
\r
	' Setup sounds\r
	Public Sub InitSounds(addSound, exitSoundEmpty, exitSoundBall)\r
		mSounds.Item("add") = addSound\r
		mSounds.Item("exit") = exitSoundEmpty\r
		mSounds.Item("exitBall") = exitSoundBall\r
	End Sub\r
\r
	' Generate hit event for the kicker(s) associated with this saucer.\r
	' Accepts a single kicker, an Array, or a Collection.\r
	Public Sub CreateEvents(aName, aKicker)\r
		Dim obj, tmp\r
		If Not vpmCheckEvent(aName, Me) Then Exit Sub\r
		vpmSetArray tmp, aKicker\r
		For Each obj In tmp\r
			If isObject(obj) Then\r
				vpmBuildEvent obj, "Hit", aName & ".AddBall Me"\r
			Else\r
				vpmBuildEvent mKicker, "Hit", aName & ".AddBall Me"\r
			End If\r
		Next\r
	End Sub\r
\r
	' Ball management\r
\r
	Public Sub AddBall(aKicker)\r
		Dim mSwcopy\r
		If isObject(aKicker) Then\r
			If aKicker Is mKicker Then\r
				mKicker.Enabled = False\r
				mExternalKicker = 0\r
			Else\r
				aKicker.Enabled = False\r
				Set mExternalKicker = aKicker\r
			End If\r
		Else\r
			mKicker.Enabled = False\r
			mExternalKicker = 0\r
		End If\r
\r
		If mSw Then\r
			mSwcopy = mSw\r
			Controller.Switch(mSwcopy) = True\r
		End If\r
		CorePlaySoundAt mSounds.Item("add"), mKicker\r
	End Sub\r
\r
	Public Property Get HasBall\r
		HasBall = False\r
		If IsObject(mExternalKicker) Then\r
			HasBall = True\r
		Else\r
			HasBall = Not mKicker.Enabled\r
		End If\r
	End Property\r
\r
	' SolCallback solNo, "mySaucer.solOut"\r
	Public Sub solOut(aEnabled) : If aEnabled Then KickOut 0 : End If : End Sub\r
	Public Sub ExitSol_On : KickOut 0 : End Sub\r
\r
	' SolCallback solNo, "mySaucer.solOutAlt"\r
	Public Sub solOutAlt(aEnabled) : If aEnabled Then KickOut 1 : End If : End Sub\r
	Public Sub ExitAltSol_On : KickOut 1 : End Sub\r
\r
	Private Sub KickOut(kickIndex)\r
		Dim mSwcopy\r
		If HasBall Then\r
			Dim kDir, kForce, kZForce\r
\r
			kDir = mDir(kickIndex) + (Rnd - 0.5)*mDirVar\r
			kForce = vpMax(1, mForce(kickIndex) + (Rnd - 0.5)*mForceVar)\r
			kZForce = mZForce(kickIndex)\r
\r
			If IsObject(mExternalKicker) Then\r
				' Transfer ball to internal kicker and remove relationship\r
				vpmCreateBall mKicker\r
				mExternalKicker.DestroyBall\r
				mExternalKicker.Enabled = True\r
			Else\r
				mKicker.Enabled = True\r
			End If\r
\r
			mKicker.Kick kDir, kForce, kZForce\r
			If mSw Then\r
				mSwcopy = mSw\r
				Controller.Switch(mSwcopy) = False\r
			End If\r
			CorePlaySoundAt mSounds.Item("exitBall"), mKicker\r
		Else\r
			CorePlaySoundAt mSounds.Item("exit"), mKicker\r
		End If\r
	End Sub\r
End Class\r
\r
'--------------------\r
'	  BallStack (DEPRECATED/LEGACY)\r
'	  Known issues:\r
'	  - Adding more balls than conMaxBalls will crash the script.\r
'	  - If there are more balls in trough than are ever used in a game (e.g. Bride of Pinbot),\r
'		one or more trough switches will be permanently stuck down and may result in a ROM test report.\r
'	  - Trough does not handle stacking balls at exit.\r
'	  - Saucer mode is essentially a hack on top of the trough logic.\r
'--------------------\r
Class cvpmBallStack\r
	Private mSw(), mEntrySw, mBalls, mBallIn, mBallPos(), mSaucer, mBallsMoving\r
	Private mInitKicker, mExitKicker, mExitDir, mExitForce\r
	Private mExitDir2, mExitForce2\r
	Private mEntrySnd, mEntrySndBall, mExitSnd, mExitSndBall, mAddSnd\r
	Private mSoundKicker\r
	Public KickZ, KickBalls, KickForceVar, KickAngleVar\r
\r
	Private Sub Class_Initialize\r
		ReDim mSw(conStackSw), mBallPos(conMaxBalls)\r
		mBallIn = 0 : mBalls = 0 : mExitKicker = 0 : mInitKicker = 0 : mBallsMoving = False\r
		KickBalls = 1 : mSaucer = False : mExitDir = 0 : mExitForce = 0\r
		mExitDir2 = 0 : mExitForce2 = 0 : KickZ = 0 : KickForceVar = 0 : KickAngleVar = 0\r
		mAddSnd = "ball_stack_add_default_snd"\r
		mEntrySnd = "ball_stack_entry_default_snd"\r
		mEntrySndBall = "ball_stack_entry_ball_default_snd"\r
		mExitSnd = "ball_stack_exit_default_snd"\r
		mExitSndBall = "ball_stack_exit_ball_default_snd"\r
		mSoundKicker = 0\r
		vpmTimer.AddResetObj Me\r
	End Sub\r
\r
	Private Property Let NeedUpdate(aEnabled) : vpmTimer.EnableUpdate Me, False, aEnabled : End Property\r
\r
	Private Function SetSw(aNo, aStatus)\r
		Dim mSwcopy\r
		SetSw = False\r
		If HasSw(aNo) Then\r
			mSwcopy = mSw(aNo)\r
			Controller.Switch(mSwcopy) = aStatus\r
			SetSw = True\r
		End If\r
	End Function\r
\r
	Private Function HasSw(aNo)\r
		HasSw = False : If aNo <= conStackSw Then If mSw(aNo) Then HasSw = True\r
	End Function\r
\r
	Public Sub Reset\r
		Dim mSwcopy\r
		Dim ii : If mBalls Then For ii = 1 to mBalls : SetSw mBallPos(ii), True : Next\r
		If mEntrySw And mBallIn > 0 Then\r
			mSwcopy = mEntrySw\r
			Controller.Switch(mSwcopy) = True\r
		End If\r
	End Sub\r
\r
	Public Sub Update\r
		Dim BallQue, ii, mSwcopy\r
		NeedUpdate = False : BallQue = 1\r
		For ii = 1 To mBalls\r
			If mBallpos(ii) > BallQue Then ' next slot available\r
				NeedUpdate = True\r
				If HasSw(mBallPos(ii)) Then ' has switch\r
					mSwcopy = mSw(mBallPos(ii))\r
					If Controller.Switch(mSwcopy) Then\r
						SetSw mBallPos(ii), False\r
					Else\r
						mBallPos(ii) = mBallPos(ii) - 1\r
						SetSw mBallPos(ii), True\r
					End If\r
				Else ' no switch. Move ball to first switch or occupied slot\r
					Do\r
						mBallPos(ii) = mBallPos(ii) - 1\r
					Loop Until SetSw(mBallPos(ii), True) Or mBallPos(ii) = BallQue\r
				End If\r
			End If\r
			BallQue = mBallPos(ii) + 1\r
		Next\r
	End Sub\r
\r
	Public Sub AddBall(aKicker)\r
		Dim mSwcopy\r
		If isObject(aKicker) Then\r
			If mSaucer Then\r
				If aKicker Is mExitKicker Then\r
					mExitKicker.Enabled = False : mInitKicker = 0\r
				Else\r
					aKicker.Enabled = False : Set mInitKicker = aKicker\r
				End If\r
			Else\r
				aKicker.DestroyBall\r
			End If\r
		ElseIf mSaucer Then\r
			mExitKicker.Enabled = False : mInitKicker = 0\r
		End If\r
		If mEntrySw Then\r
			mSwcopy = mEntrySw\r
			Controller.Switch(mSwcopy) = True : mBallIn = mBallIn + 1\r
		Else\r
			mBalls = mBalls + 1 : mBallPos(mBalls) = conStackSw + 1 : NeedUpdate = True\r
		End If\r
		CorePlaySoundAt mAddSnd, mSoundKicker\r
	End Sub\r
\r
	' A bug in the script engine forces the "End If" at the end\r
	Public Sub SolIn(aEnabled)	   : If aEnabled Then KickIn		: End If : End Sub\r
	Public Sub SolOut(aEnabled)	   : If aEnabled Then KickOut False : End If : End Sub\r
	Public Sub SolOutAlt(aEnabled) : If aEnabled Then KickOut True	: End If : End Sub\r
	Public Sub EntrySol_On	 : KickIn		 : End Sub\r
	Public Sub ExitSol_On	 : KickOut False : End Sub\r
	Public Sub ExitAltSol_On : KickOut True	 : End Sub\r
\r
	Private Sub KickIn\r
		Dim mSwcopy\r
		If mBallIn Then PlaySound mEntrySndBall Else PlaySound mEntrySnd : Exit Sub\r
		mBalls = mBalls + 1 : mBallIn = mBallIn - 1 : mBallPos(mBalls) = conStackSw + 1 : NeedUpdate = True\r
		If mEntrySw And mBallIn = 0 Then\r
			mSwcopy = mEntrySw\r
			Controller.Switch(mSwcopy) = False\r
		End If\r
	End Sub\r
\r
	Private Sub KickOut(aAltSol)\r
		Dim ii,jj, kForce, kDir, kBaseDir\r
		If mBalls Then\r
			CorePlaySoundAt mExitSndBall, mSoundKicker\r
		Else\r
			CorePlaySoundAt mExitSnd, mSoundKicker\r
			Exit Sub\r
		End If\r
		If aAltSol Then kForce = mExitForce2 : kBaseDir = mExitDir2 Else kForce = mExitForce : kBaseDir = mExitDir\r
		kForce = kForce + (Rnd - 0.5)*KickForceVar\r
		If mSaucer Then\r
			SetSw 1, False : mBalls = 0 : kDir = kBaseDir + (Rnd - 0.5)*KickAngleVar\r
			If isObject(mInitKicker) Then\r
				vpmCreateBall mExitKicker : mInitKicker.Destroyball : mInitKicker.Enabled = True\r
			Else\r
				mExitKicker.Enabled = True\r
			End If\r
			mExitKicker.Kick kDir, kForce, KickZ\r
		Else\r
			For ii = 1 To kickballs\r
				If mBalls = 0 Or mBallPos(1) <> ii Then Exit For ' No more balls\r
				For jj = 2 To mBalls ' Move balls in array\r
					mBallPos(jj-1) = mBallPos(jj)\r
				Next\r
				mBallPos(mBalls) = 0 : mBalls = mBalls - 1 : NeedUpdate = True\r
				SetSw ii, False\r
				If isObject(mExitKicker) Then\r
					If kForce < 1 Then kForce = 1\r
					kDir = kBaseDir + (Rnd - 0.5)*KickAngleVar\r
					vpmTimer.AddTimer 200*(ii-1), "vpmCreateBall(" & mExitKicker.Name & ").Kick " &_\r
					  CInt(kDir) & "," & Replace(kForce,",",".") & "," & Replace(KickZ,",",".") & " '"\r
				End If\r
				kForce = kForce * 0.8\r
			Next\r
		End If\r
	End Sub\r
\r
	Public Sub InitSaucer(aKicker, aSw, aDir, aPower)\r
		InitKick aKicker, aDir, aPower : mSaucer = True\r
		If aSw Then mSw(1) = aSw Else mSw(1) = aKicker.TimerInterval\r
	End Sub\r
\r
	Public Sub InitNoTrough(aKicker, aSw, aDir, aPower)\r
		InitKick aKicker, aDir, aPower : Balls = 1\r
		If aSw Then mSw(1) = aSw Else mSw(1) = aKicker.TimerInterval\r
		If Not IsObject(vpmTrough) Then Set vpmTrough = Me\r
	End Sub\r
\r
	Public Sub InitSw(aEntry, aSw1, aSw2, aSw3, aSw4, aSw5, aSw6, aSw7)\r
		mEntrySw = aEntry : mSw(1) = aSw1 : mSw(2) = aSw2 : mSw(3) = aSw3 : mSw(4) = aSw4\r
		mSw(5) = aSw5 : mSw(6) = aSw6 : mSw(7) = aSw7 : mSw(8) = 0\r
		If Not IsObject(vpmTrough) Then Set vpmTrough = Me\r
	End Sub\r
\r
	Public Sub InitSw8(aEntry, aSw1, aSw2, aSw3, aSw4, aSw5, aSw6, aSw7, aSw8)\r
		mEntrySw = aEntry : mSw(1) = aSw1 : mSw(2) = aSw2 : mSw(3) = aSw3 : mSw(4) = aSw4\r
		mSw(5) = aSw5 : mSw(6) = aSw6 : mSw(7) = aSw7 : mSw(8) = aSw8\r
		If Not IsObject(vpmTrough) Then Set vpmTrough = Me\r
	End Sub\r
\r
	Public Sub InitKick(aKicker, aDir, aForce)\r
		Set mExitKicker = aKicker : mExitDir = aDir : mExitForce = aForce\r
		Set mSoundKicker = aKicker\r
	End Sub\r
\r
	Public Sub CreateEvents(aName, aKicker)\r
		Dim obj, tmp\r
		If Not vpmCheckEvent(aName, Me) Then Exit Sub\r
		vpmSetArray tmp, aKicker\r
		For Each obj In tmp\r
			If isObject(obj) Then\r
				vpmBuildEvent obj, "Hit", aName & ".AddBall Me"\r
			Else\r
				vpmBuildEvent mExitKicker, "Hit", aName & ".AddBall Me"\r
			End If\r
		Next\r
	End Sub\r
\r
	Public Property Let IsTrough(aIsTrough)\r
		If aIsTrough Then\r
			Set vpmTrough = Me\r
		ElseIf IsObject(vpmTrough) Then\r
			If vpmTrough Is Me Then vpmTrough = 0\r
		End If\r
	End Property\r
\r
	Public Property Get IsTrough : IsTrough = vpmTrough Is Me : End Property\r
\r
	Public Sub InitAltKick(aDir, aForce)\r
		mExitDir2 = aDir : mExitForce2 = aForce\r
	End Sub\r
\r
	' Set up the sounds for ball entry\r
	' To disable the sounds, use InitEntrySnd("", "")\r
	Public Sub InitEntrySnd(aBall, aNoBall) : mEntrySndBall = aBall : mEntrySnd = aNoBall : End Sub\r
	' Set up the sounds for ball exit\r
	' To disable the sounds, use InitExitSnd("", "")\r
	Public Sub InitExitSnd(aBall, aNoBall)	: mExitSndBall = aBall	: mExitSnd = aNoBall  : End Sub\r
	' Set up the sound for ball addition\r
	' To disable the sound, use InitAddSnd("")\r
	Public Sub InitAddSnd(aSnd) : mAddSnd = aSnd : End Sub\r
\r
	Public Property Let Balls(aBalls)\r
		Dim ii\r
		For ii = 1 To conStackSw\r
			SetSw ii, False : mBallPos(ii) = conStackSw + 1\r
		Next\r
		If mSaucer And aBalls > 0 And mBalls = 0 Then vpmCreateBall mExitKicker\r
		mBalls = aBalls : NeedUpdate = True\r
	End Property\r
\r
	Public Default Property Get Balls : Balls = mBalls		   : End Property\r
	Public Property Get BallsPending  : BallsPending = mBallIn : End Property\r
\r
	' Obsolete stuff\r
	Public Sub SolEntry(aSnd1, aSnd2, aEnabled)\r
		If aEnabled Then mEntrySndBall = aSnd1 : mEntrySnd = aSnd2 : KickIn\r
	End Sub\r
	Public Sub SolExit(aSnd1, aSnd2, aEnabled)\r
		If aEnabled Then mExitSndBall = aSnd1 : mExitSnd = aSnd2 : KickOut False\r
	End Sub\r
	Public Sub InitProxy(aProxyPos, aSwNo) : End Sub\r
	Public TempBallColour, TempBallImage, BallColour\r
	Public Property Let BallImage(aImage) : vpmBallImage = aImage : End Property\r
End Class\r
\r
'--------------------\r
'		Nudge\r
'--------------------\r
class cvpmNudge\r
	Public TiltSwitch\r
\r
	Private Sub Class_Initialize : TiltSwitch = 0 : End Sub\r
\r
	' Handle tilt from keyboard event which is sent either from keyboard, or physical plumb, or VPX's emulated plumb\r
	Public Sub DoMechTilt()\r
		' Legacy core scripts would emulate it by doing a strong forward nudge and relying on a vbs plumb simulation.\r
		' People with physical plumb would then manually override this with custom script. There were also a few custom\r
		' heuristic plumb simulation scripts available. This is not needed anymore as we now have a plumb simulation\r
		' inside VPX physics engine (which will send the 'Tilt' key event), so just trigger the mechanical tilt.\r
		If TiltSwitch <> 0 Then vpmTimer.PulseSw TiltSwitch\r
	End Sub\r
\r
	' Handle keyboard nudge\r
	Public Sub DoNudge(ByVal aDir, ByVal aForce)\r
		aDir = aDir + (Rnd-0.5)*15*aForce : aForce = (0.6+Rnd*0.8)*aForce\r
		Nudge aDir, aForce\r
	End Sub\r
\r
	' Legacy public properties used to perform plumb simulation inside VBS scripting (kept to avoid breaking old tables which would access these)\r
	Public Property Let Sensitivity(aSens) : End Property\r
	Public Sub Update : End Sub\r
	Public Sub Reset : End Sub\r
\r
	' Simulation of devices wired through the GameOn solenoid (bumper, slings,... not really linked with nudging but shares the same class)\r
	Private mSlingBump, mForce\r
\r
	Public Property Let TiltObj(aSlingBump)\r
		Dim ii\r
		ReDim mForce(vpmSetArray(mSlingBump, aSlingBump))\r
		For ii = 0 To UBound(mForce)\r
			If TypeName(mSlingBump(ii)) = "Bumper" Then mForce(ii) = mSlingBump(ii).Threshold\r
			If vpmVPVer >= 9000 and TypeName(mSlingBump(ii)) = "Wall" Then mForce(ii) = mSlingBump(ii).SlingshotThreshold\r
		Next\r
	End Property\r
\r
	Public Sub SolGameOn(aEnabled)\r
		If IsEmpty(mForce) Then Exit Sub 'prevent errors if vpmNudge.TiltObj isn't set\r
		Dim obj, ii\r
		If aEnabled Then\r
			ii = 0\r
			For Each obj In mSlingBump\r
				If TypeName(obj) = "Bumper" Then obj.Threshold = mForce(ii)\r
				If vpmVPVer >= 9000 And TypeName(obj) = "Wall" Then obj.SlingshotThreshold = mForce(ii)\r
				ii = ii + 1\r
			Next\r
		Else\r
			For Each obj In mSlingBump\r
				If TypeName(obj) = "Bumper" Then obj.Threshold = 100\r
				If vpmVPVer >= 9000 And TypeName(obj) = "Wall" Then obj.SlingshotThreshold = 100\r
			Next\r
		End If\r
	End Sub\r
End Class\r
\r
'--------------------\r
'	 DropTarget\r
'--------------------\r
Class cvpmDropTarget\r
	Private mDropObj, mDropSw(), mDropSnd, mRaiseSnd, mSwAnyUp, mSwAllDn, mAllDn, mLink\r
\r
	Private Sub Class_Initialize\r
		mDropSnd = "drop_target_drop_default_snd"\r
		mRaiseSnd = "drop_target_raise_default_snd"\r
		mSwAnyUp = 0 : mSwAllDn = 0 : mAllDn = False : mLink = Empty\r
	End sub\r
\r
	Private Sub CheckAllDn(ByVal aStatus)\r
		Dim obj\r
		If Not IsEmpty(mLink) Then\r
			If aStatus Then\r
				For Each obj In mLink : aStatus = aStatus And obj.AllDown : Next\r
			End If\r
			For Each obj In mLink: obj.SetAllDn aStatus : Next\r
		End If\r
		SetAllDn aStatus\r
	End Sub\r
\r
	Public Sub SetAllDn(aStatus)\r
		Dim mSwcopy\r
		If mSwAllDn Then\r
			mSwcopy = mSwAllDn\r
			Controller.Switch(mSwcopy) = aStatus\r
		End If\r
		If mSwAnyUp Then\r
			mSwcopy = mSwAnyUp\r
			Controller.Switch(mSwcopy) = Not aStatus\r
		End If\r
	End Sub\r
\r
	Public Sub InitDrop(aWalls, aSw)\r
		Dim obj, obj2, ii\r
		' Fill in switch number\r
		On Error Resume Next : ReDim mDropSw(0)\r
		' Nothing asks InitDrop to read the switch numbers from the targets.\r
		If TypeName(aSw) = "Nothing" Then aSw = 0\r
		If IsArray(aSw) Then\r
			ReDim mDropSw(UBound(aSw))\r
			For ii = 0 To UBound(aSw) : mDropSw(ii) = aSw(ii) : Next\r
		ElseIf aSw = 0 Or Err Then\r
			On Error Goto 0\r
			If vpmIsArray(aWalls) Then\r
				ii = 0 : If IsArray(aWalls) Then ReDim mDropSw(UBound(aWalls)) Else ReDim mDropSw(aWalls.Count-1)\r
				For Each obj In aWalls\r
					If vpmIsArray(obj) Then\r
						For Each obj2 In obj\r
							If obj2.HasHitEvent Then mDropSw(ii) = obj2.TimerInterval : Exit For\r
						Next\r
					Else\r
						mDropSw(ii) = obj.TimerInterval\r
					End If\r
					ii = ii + 1\r
				Next\r
			Else\r
				mDropSw(0) = aWalls.TimerInterval\r
			End If\r
		Else\r
			mDropSw(0) = aSw\r
		End If\r
		' Copy walls\r
		vpmSetArray mDropObj, aWalls\r
	End Sub\r
\r
	Public Sub CreateEvents(aName)\r
		Dim ii, obj1, obj2\r
		If Not vpmCheckEvent(aName, Me) Then Exit Sub\r
		ii = 1\r
		For Each obj1 In mDropObj\r
			If vpmIsArray(obj1) Then\r
				For Each obj2 In obj1\r
					if TypeName(obj2) = "HitTarget" Then 'if object in array is a Target, use .Dropped\r
						vpmBuildEvent obj2, "Dropped", aName & ".Hit " & ii	'Droptarget_Dropped : DTbank.Hit 1 : End Sub\r
					else\r
						If obj2.HasHitEvent Then vpmBuildEvent obj2, "Hit", aName & ".Hit " & ii\r
					End If\r
				Next\r
			Else\r
				if TypeName(obj1) = "HitTarget" Then 'if object in array is a Target, use .Dropped\r
					vpmBuildEvent obj1, "Dropped", aName & ".Hit " & ii\r
				else\r
					vpmBuildEvent obj1, "Hit", aName & ".Hit " & ii\r
				End If\r
			End If\r
			ii = ii + 1\r
		Next\r
	End Sub\r
\r
	Public Property Let AnyUpSw(aSwAnyUp)\r
		Dim mSwcopy\r
		mSwAnyUp = aSwAnyUp\r
		mSwcopy = mSwAnyUp\r
		Controller.Switch(mSwcopy) = True\r
	End Property\r
	Public Property Let AllDownSw(aSwAllDn) : mSwAllDn = aSwAllDn : End Property\r
	Public Property Get AllDown : AllDown = mAllDn : End Property\r
	' Set up the sounds to use when dropping and raising the target\r
	' To disable the sounds, use InitSnd("", "")\r
	Public Sub InitSnd(aDrop, aRaise) : mDropSnd = aDrop : mRaiseSnd = aRaise : End Sub\r
	Public Property Let LinkedTo(aLink)\r
		If IsArray(aLink) Then mLink = aLink Else mLink = Array(aLink)\r
	End Property\r
\r
	Public Sub Hit(aNo)\r
		Dim ii, mSwcopy\r
\r
'		vpmSolWall mDropObj(aNo-1), mDropSnd, True\r
		If TypeName(mDropObj(aNo-1)) = "HitTarget" Then CorePlaySoundAt mDropSnd, mDropObj(aNo-1) Else PlaySound mDropSnd\r
		vpmSolWall mDropObj(aNo-1), False, True\r
\r
		mSwcopy = mDropSw(aNo-1)\r
		Controller.Switch(mSwcopy) = True\r
		For Each ii In mDropSw\r
			mSwcopy = ii\r
			If Not Controller.Switch(mSwcopy) Then Exit Sub\r
		Next\r
		mAllDn = True : CheckAllDn True\r
	End Sub\r
\r
	Public Sub SolHit(aNo, aEnabled) : If aEnabled Then Hit aNo : End If : End Sub\r
\r
	Public Sub SolUnhit(aNo, aEnabled)\r
		Dim mSwcopy\r
		Dim ii : If Not aEnabled Then Exit Sub\r
		If TypeName(mDropObj(aNo-1)) = "HitTarget" Then\r
			CorePlaySoundAt mRaiseSnd, mDropObj(aNo-1)\r
			vpmSolWall mDropObj(aNo-1), False, False\r
		Else\r
			PlaySound mRaiseSnd\r
		End If\r
		mSwcopy = mDropSw(aNo-1)\r
		Controller.Switch(mSwcopy) = False\r
		mAllDn = False : CheckAllDn False\r
	End Sub\r
\r
	Public Sub SolDropDown(aEnabled)\r
		Dim mSwcopy\r
		Dim ii : If Not aEnabled Then Exit Sub\r
		If TypeName(mDropObj(0)) = "HitTarget" Then CorePlaySoundAt mDropSnd, mDropObj(0) Else PlaySound mDropSnd\r
		For Each ii In mDropObj : vpmSolWall ii, False, True : Next\r
		For Each ii In mDropSw	: mSwcopy = ii : Controller.Switch(mSwcopy) = True : Next\r
		mAllDn = True : CheckAllDn True\r
	End Sub\r
\r
	Public Sub SolDropUp(aEnabled)\r
		Dim mSwcopy\r
		Dim ii : If Not aEnabled Then Exit Sub\r
		If TypeName(mDropObj(0)) = "HitTarget" Then CorePlaySoundAt mRaiseSnd, mDropObj(0) Else PlaySound mRaiseSnd\r
		For Each ii In mDropObj : vpmSolWall ii, False, False : Next\r
		For Each ii In mDropSw	: mSwcopy = ii : Controller.Switch(mSwcopy) = False : Next\r
		mAllDn = False : CheckAllDn False\r
	End Sub\r
\r
	Public Sub DropSol_On : SolDropUp True : End Sub\r
End Class\r
\r
'--------------------\r
'		Magnet\r
'--------------------\r
Class cvpmMagnet\r
	Private mEnabled, mBalls, mTrigger\r
	Public X, Y, Strength, Size, GrabCenter, Solenoid\r
\r
	Private Sub Class_Initialize\r
		Size = 1 : Strength = 0 : Solenoid = 0 : mEnabled = False\r
		Set mBalls = New cvpmDictionary\r
	End Sub\r
\r
	Private Property Let NeedUpdate(aEnabled) : vpmTimer.EnableUpdate Me, True, aEnabled : End Property\r
\r
	Public Sub InitMagnet(aTrigger, aStrength)\r
		Dim tmp\r
		If vpmIsArray(aTrigger) Then Set tmp = aTrigger(0) Else Set tmp = aTrigger\r
		X = tmp.X : Y = tmp.Y : Size = tmp.Radius : vpmTimer.InitTimer tmp, True\r
		If IsArray(aTrigger) Then mTrigger = aTrigger Else Set mTrigger = aTrigger\r
		Strength = aStrength : GrabCenter = aStrength > 14\r
	End Sub\r
\r
	Public Sub CreateEvents(aName)\r
		If vpmCheckEvent(aName, Me) Then\r
			vpmBuildEvent mTrigger, "Hit", aName & ".AddBall ActiveBall"\r
			vpmBuildEvent mTrigger, "UnHit", aName & ".RemoveBall ActiveBall"\r
		End If\r
	End Sub\r
\r
	Public Property Let MagnetOn(aEnabled) : mEnabled = aEnabled : End Property\r
	Public Property Get MagnetOn\r
		If Solenoid > 0 Then MagnetOn = Controller.Solenoid(Solenoid) Else MagnetOn = mEnabled\r
	End Property\r
\r
	Public Sub AddBall(aBall)\r
		With mBalls\r
			If .Exists(aBall) Then .Item(aBall) = .Item(aBall) + 1 Else .Add aBall, 1 : NeedUpdate = True\r
		End With\r
	End Sub\r
\r
	Public Sub RemoveBall(aBall)\r
		With mBalls\r
			If .Exists(aBall) Then .Item(aBall) = .Item(aBall) - 1 : If .Item(aBall) <= 0 Then .Remove aBall\r
			NeedUpdate = (.Count > 0)\r
		End With\r
	End Sub\r
\r
	Public Property Get Balls : Balls = mBalls.Keys : End Property\r
\r
	Public Sub Update\r
		Dim obj\r
		If MagnetOn Then\r
			On Error Resume Next\r
			For Each obj In mBalls.Keys\r
				If obj.X < 0 Or Err Then mBalls.Remove obj Else AttractBall obj\r
			Next\r
			On Error Goto 0\r
		End If\r
	End Sub\r
\r
	Public Sub AttractBall(aBall)\r
		Dim dX, dY, dist, force, ratio\r
		dX = aBall.X - X : dY = aBall.Y - Y : dist = Sqr(dX*dX + dY*dY)\r
		If dist > Size Or dist < 1 Then Exit Sub 'Just to be safe\r
		If GrabCenter And dist < 20 Then\r
			aBall.VelX = 0 : aBall.VelY = 0 : aBall.X = X : aBall.Y = Y\r
		Else\r
			ratio = dist / (1.5*Size)\r
			force = Strength * exp(-0.2/ratio)/(ratio*ratio*56) * 1.5\r
			aBall.VelX = (aBall.VelX - dX * force / dist) * 0.985\r
			aBall.VelY = (aBall.VelY - dY * force / dist) * 0.985\r
		End if\r
	End Sub\r
	' obsolete\r
	Public Property Let Range(aSize) : Size = aSize : End Property\r
	Public Property Get Range		 : Range = Size : End Property\r
End Class\r
\r
'--------------------\r
'	  Turntable\r
'--------------------\r
Class cvpmTurntable\r
	Private mX, mY, mSize, mTrigger, mBalls, mSpinUp, mSpinDown\r
	Private mMotorOn, mSpinCW\r
	Private mMaxSpeed, mTargetSpeed, mCurrentAccel\r
	Public Speed\r
\r
	Private Sub Class_Initialize\r
		Set mBalls = New cvpmDictionary\r
		mMotorOn = False : mSpinCW = True : Speed = 0 : mSpinUp = 10 : mSpinDown = 4\r
		AdjustTargets\r
	End Sub\r
\r
	Private Property Let NeedUpdate(aEnabled) : vpmTimer.EnableUpdate Me, True, aEnabled : End Property\r
\r
	Public Sub InitTurntable(aTrigger, aMaxSpeed)\r
		mX = aTrigger.X : mY = aTrigger.Y : mSize = aTrigger.Radius : vpmTimer.InitTimer aTrigger, True\r
		mMaxSpeed = aMaxSpeed : Set mTrigger = aTrigger\r
		AdjustTargets\r
	End Sub\r
\r
	Public Sub CreateEvents(aName)\r
		If vpmCheckEvent(aName, Me) Then\r
			vpmBuildEvent mTrigger, "Hit", aName & ".AddBall ActiveBall"\r
			vpmBuildEvent mTrigger, "UnHit", aName & ".RemoveBall ActiveBall"\r
		End If\r
	End Sub\r
\r
	Public Sub SolMotorState(aCW, aMotorOn)\r
		mSpinCW = aCW\r
		mMotorOn = aMotorOn\r
		AdjustTargets\r
	End Sub\r
\r
	Private Sub AdjustTargets\r
		If mMotorOn Then\r
			mTargetSpeed = MaxSpeed\r
			mCurrentAccel = SpinUp\r
			If Not mSpinCW Then mTargetSpeed = -MaxSpeed\r
		Else\r
			mTargetSpeed = 0\r
			mCurrentAccel = SpinDown\r
		End If\r
\r
		NeedUpdate = mBalls.Count Or SpinUp Or SpinDown\r
	End Sub\r
\r
	Public Property Let MaxSpeed(newSpeed) : mMaxSpeed = newSpeed : AdjustTargets : End Property\r
	Public Property Let SpinUp(newRate) : mSpinUp = newRate : AdjustTargets : End Property\r
	Public Property Let SpinDown(newRate) : mSpinDown = newRate : AdjustTargets : End Property\r
\r
	Public Property Get MaxSpeed : MaxSpeed = mMaxSpeed : End Property\r
	Public Property Get SpinUp : SpinUp = mSpinup : End Property\r
	Public Property Get SpinDown : SpinDown = mSpinDown : End Property\r
\r
	Public Property Let MotorOn(aEnabled) : SolMotorState mSpinCW, aEnabled : End Property\r
	Public Property Let SpinCW(aCW) : SolMotorState aCW, mMotorOn : End Property\r
\r
	Public Property Get MotorOn : MotorOn = mMotorOn : End Property\r
	Public Property Get SpinCW : SpinCW = mSpinCW : End Property\r
\r
	Public Sub AddBall(aBall)\r
		On Error Resume Next : mBalls.Add aBall,0 : NeedUpdate = True\r
	End Sub\r
	Public Sub RemoveBall(aBall)\r
		On Error Resume Next\r
		mBalls.Remove aBall : NeedUpdate = mBalls.Count Or SpinUp Or SpinDown\r
	End Sub\r
	Public Property Get Balls : Balls = mBalls.Keys : End Property\r
\r
	Public Sub Update\r
		If Speed > mTargetSpeed Then\r
			Speed = Speed - mCurrentAccel/100\r
			If Speed < mTargetSpeed Then Speed = mTargetSpeed : NeedUpdate = mBalls.Count\r
		ElseIf Speed < mTargetSpeed Then\r
			Speed = Speed + mCurrentAccel/100\r
			If Speed > mTargetSpeed Then Speed = mTargetSpeed : NeedUpdate = mBalls.Count\r
		End If\r
\r
		If Speed Then\r
			Dim obj\r
			On Error Resume Next\r
			For Each obj In mBalls.Keys\r
				If obj.X < 0 Or Err Then mBalls.Remove obj Else AffectBall obj\r
			Next\r
			On Error Goto 0\r
		End If\r
	End Sub\r
\r
	Public Sub AffectBall(aBall)\r
		Dim dX, dY, dist\r
		dX = aBall.X - mX : dY = aBall.Y - mY : dist = Sqr(dX*dX + dY*dY)\r
		If dist > mSize Or dist < 1 Or Speed = 0 Then Exit Sub\r
		aBall.VelX = aBall.VelX - (dY * Speed / 8000)\r
		aBall.VelY = aBall.VelY + (dX * Speed / 8000)\r
	End Sub\r
End Class\r
\r
'--------------------\r
'	  Mech\r
'--------------------\r
Const vpmMechLinear	   = &H00\r
Const vpmMechNonLinear = &H01\r
Const vpmMechCircle	   = &H00\r
Const vpmMechStopEnd   = &H02\r
Const vpmMechReverse   = &H04\r
Const vpmMechOneSol	   = &H00\r
Const vpmMechOneDirSol = &H10\r
Const vpmMechTwoDirSol = &H20\r
Const vpmMechStepSol   = &H40\r
Const vpmFourStepSol   = &H60\r
Const vpmMechSlow	   = &H00\r
Const vpmMechFast	   = &H80\r
Const vpmMechStepSw	   = &H00\r
Const vpmMechLengthSw  = &H100\r
\r
Class cvpmMech\r
	Public Sol1, Sol2, MType, Length, Steps, Acc, Ret\r
	Private mMechNo, mNextSw, mSw(), mLastPos, mLastSpeed, mCallback\r
\r
	Private Sub Class_Initialize\r
		ReDim mSw(10)\r
		gNextMechNo = gNextMechNo + 1 : mMechNo = gNextMechNo : mNextSw = 0 : mLastPos = 0 : mLastSpeed = 0\r
		MType = 0 : Length = 0 : Steps = 0 : Acc = 0 : Ret = 0 : vpmTimer.addResetObj Me\r
	End Sub\r
\r
	Public Sub AddSw(aSwNo, aStart, aEnd)\r
		mSw(mNextSw) = Array(aSwNo, aStart, aEnd, 0)\r
		mNextSw = mNextSw + 1\r
	End Sub\r
\r
	Public Sub AddPulseSwNew(aSwNo, aInterval, aStart, aEnd)\r
		If Controller.Version >= 01200000 Then\r
			mSw(mNextSw) = Array(aSwNo, aStart, aEnd, aInterval)\r
		Else\r
			mSw(mNextSw) = Array(aSwNo, -aInterval, aEnd - aStart + 1, 0)\r
		End If\r
		mNextSw = mNextSw + 1\r
	End Sub\r
\r
	Public Sub Start\r
		Dim sw, ii\r
		With Controller\r
			.Mech(1) = Sol1 : .Mech(2) = Sol2 : .Mech(3) = Length\r
			.Mech(4) = Steps : .Mech(5) = MType : .Mech(6) = Acc : .Mech(7) = Ret\r
			ii = 10\r
			For Each sw In mSw\r
				If IsArray(sw) Then\r
					.Mech(ii) = sw(0) : .Mech(ii+1) = sw(1)\r
					.Mech(ii+2) = sw(2) : .Mech(ii+3) = sw(3)\r
					ii = ii + 10\r
				End If\r
			Next\r
			.Mech(0) = mMechNo\r
		End With\r
		If IsObject(mCallback) Then mCallBack 0, 0, 0 : mLastPos = 0 : vpmTimer.EnableUpdate Me, False, True\r
	End Sub\r
\r
	Public Property Get Position : Position = Controller.GetMech(mMechNo) : End Property\r
	Public Property Get Speed	 : Speed = Controller.GetMech(-mMechNo)   : End Property\r
	Public Property Let Callback(aCallBack) : Set mCallback = aCallBack   : End Property\r
\r
	Public Sub Update\r
		Dim currPos, speed\r
		currPos = Controller.GetMech(mMechNo)\r
		speed = Controller.GetMech(-mMechNo)\r
		If currPos < 0 Or (mLastPos = currPos And mLastSpeed = speed) Then Exit Sub\r
		mCallBack currPos, speed, mLastPos : mLastPos = currPos : mLastSpeed = speed\r
	End Sub\r
\r
	Public Sub Reset : Start : End Sub\r
	' Obsolete\r
	Public Sub AddPulseSw(aSwNo, aInterval, aLength) : AddSw aSwNo, -aInterval, aLength : End Sub\r
End Class\r
\r
'--------------------\r
'	Captive Ball\r
'--------------------\r
Class cvpmCaptiveBall\r
	Private mBallKicked, mBallDir, mBallCos, mBallSin, mTrigHit\r
	Private mTrig, mWall, mKickers, mVelX, mVelY, mKickNo\r
	Public ForceTrans, MinForce, RestSwitch, NailedBalls\r
\r
	Private Sub Class_Initialize\r
		mBallKicked = False : ForceTrans = 0.5 : mTrigHit = False : MinForce = 3 : NailedBalls = 0\r
		vpmTimer.addResetObj Me\r
	End Sub\r
\r
	Public Sub InitCaptive(aTrig, aWall, aKickers, aBallDir)\r
		Set mTrig = aTrig : Set mWall = aWall\r
		mKickNo = vpmSetArray(mKickers, aKickers)\r
		mBallDir = aBallDir : mBallCos = Cos(aBallDir * (3.14159265358979/180)) : mBallSin = Sin(aBallDir * (3.14159265358979/180))\r
	End Sub\r
\r
	Public Sub Start\r
		Dim mSwcopy\r
		vpmCreateBall mKickers(mKickNo + (mKickNo <> NailedBalls))\r
		If RestSwitch Then\r
			mSwcopy = RestSwitch\r
			Controller.Switch(mSwcopy) = True\r
		End If\r
	End Sub\r
\r
	Public Sub TrigHit(aBall)\r
		mTrigHit = IsObject(aBall) : If mTrigHit Then mVelX = aBall.VelX : mVelY = aBall.VelY\r
	End Sub\r
\r
	Public Sub Reset\r
		Dim mSwcopy\r
		If RestSwitch Then\r
			mSwcopy = RestSwitch\r
			Controller.Switch(mSwcopy) = True\r
		End If\r
	End Sub\r
\r
	Public Sub BallHit(aBall)\r
		Dim dX, dY, force, mSwcopy\r
		If mBallKicked Then Exit Sub ' Ball is not here\r
		If mTrigHit Then mTrigHit = False Else mVelX = aBall.VelX : mVelY = aBall.VelY\r
		dX = aBall.X - mKickers(0).X : dY = aBall.Y - mKickers(0).Y\r
		force = -ForceTrans * (dY * mVelY + dX * mVelX) * (dY * mBallCos + dX * mBallSin) / (dX*dX + dY*dY)\r
		If force < 1 Then Exit Sub\r
		If force < MinForce Then force = MinForce\r
		If mKickNo <> NailedBalls Then\r
			vpmCreateBall mKickers(mKickNo)\r
			mKickers(mKickNo-1).DestroyBall\r
		End If\r
		mKickers(mKickNo).Kick mBallDir, force : mBallKicked = True\r
		If RestSwitch Then\r
			mSwcopy = RestSwitch\r
			Controller.Switch(mSwcopy) = False\r
		End If\r
	End Sub\r
\r
	Public Sub BallReturn(aKicker)\r
		Dim mSwcopy\r
		If mKickNo <> NailedBalls Then vpmCreateBall mKickers(mKickNo-1) : aKicker.DestroyBall\r
		mBallKicked = False\r
		If RestSwitch Then\r
			mSwcopy = RestSwitch\r
			Controller.Switch(mSwcopy) = True\r
		End If\r
	End Sub\r
\r
	Public Sub CreateEvents(aName)\r
		If vpmCheckEvent(aName, Me) Then\r
			If Not mTrig Is Nothing Then\r
				vpmBuildEvent mTrig, "Hit", aName & ".TrigHit ActiveBall"\r
				vpmBuildEvent mTrig, "UnHit", aName & ".TrigHit 0"\r
			End If\r
			vpmBuildEvent mWall, "Hit", aName & ".BallHit ActiveBall"\r
			vpmBuildEvent mKickers(mKickNo), "Hit", aName & ".BallReturn Me"\r
		End If\r
	End Sub\r
	' Obsolete\r
	Public BallImage, BallColour\r
End Class\r
\r
'--------------------\r
'	Visible Locks\r
'--------------------\r
Class cvpmVLock\r
	Private mTrig, mKick, mSw(), mSize, mBalls, mGateOpen, mRealForce, mBallSnd, mNoBallSnd\r
	Public ExitDir, ExitForce, KickForceVar\r
\r
	Private Sub Class_Initialize\r
		mBalls = 0 : ExitDir = 0 : ExitForce = 0 : KickForceVar = 0 : mGateOpen = False\r
		vpmTimer.addResetObj Me\r
	End Sub\r
\r
	Public Sub InitVLock(aTrig, aKick, aSw)\r
		Dim ii\r
		mSize = vpmSetArray(mTrig, aTrig)\r
		If vpmSetArray(mKick, aKick) <> mSize Then MsgBox "cvpmVLock: Unmatched kick+trig" : Exit Sub\r
		On Error Resume Next\r
		ReDim mSw(mSize)\r
		If IsArray(aSw) Then\r
			For ii = 0 To UBound(aSw) : mSw(ii) = aSw(ii) : Next\r
		ElseIf aSw = 0 Or Err Then\r
			For ii = 0 To mSize: mSw(ii) = mTrig(ii).TimerInterval : Next\r
		Else\r
			mSw(0) = aSw\r
		End If\r
	End Sub\r
\r
	Public Sub InitSnd(aBall, aNoBall) : mBallSnd = aBall : mNoBallSnd = aNoBall : End Sub\r
	Public Sub CreateEvents(aName)\r
		Dim ii\r
		If Not vpmCheckEvent(aName, Me) Then Exit Sub\r
		For ii = 0 To mSize\r
			vpmBuildEvent mTrig(ii), "Hit", aName & ".TrigHit ActiveBall," & ii+1\r
			vpmBuildEvent mTrig(ii), "Unhit", aName & ".TrigUnhit ActiveBall," & ii+1\r
			vpmBuildEvent mKick(ii), "Hit", aName & ".KickHit " & ii+1\r
		Next\r
	End Sub\r
\r
	Public Sub SolExit(aEnabled)\r
		Dim ii, mSwcopy\r
		mGateOpen = aEnabled\r
		If Not aEnabled Then Exit Sub\r
		If mBalls > 0 Then\r
			CorePlaySoundAt mBallSnd, mKick(0)\r
		Else\r
			CorePlaySoundAt mNoBallSnd, mKick(0)\r
			Exit Sub\r
		End If\r
		For ii = 0 To mBalls-1\r
			mKick(ii).Enabled = False\r
			If mSw(ii) Then\r
				mSwcopy = mSw(ii)\r
				Controller.Switch(mSwcopy) = False\r
			End If\r
		Next\r
		If ExitForce > 0 Then ' Up\r
			mRealForce = ExitForce + (Rnd - 0.5)*KickForceVar : mKick(mBalls-1).Kick ExitDir, mRealForce\r
		Else ' Down\r
			mKick(0).Kick 0, 0\r
		End If\r
	End Sub\r
\r
	Public Sub Reset\r
		Dim mSwcopy\r
		Dim ii : If mBalls = 0 Then Exit Sub\r
		For ii = 0 To mBalls-1\r
			If mSw(ii) Then\r
				mSwcopy = mSw(ii)\r
				Controller.Switch(mSwcopy) = True\r
			End If\r
		Next\r
	End Sub\r
\r
	Public Property Get Balls : Balls = mBalls : End Property\r
\r
	Public Property Let Balls(aBalls)\r
		Dim mSwcopy\r
		Dim ii : mBalls = aBalls\r
		For ii = 0 To mSize\r
			mSwcopy = mSw(ii)\r
			If ii >= aBalls Then\r
				mKick(ii).DestroyBall : If mSwcopy Then Controller.Switch(mSwcopy) = False\r
			Else\r
				vpmCreateBall mKick(ii) : If mSwcopy Then Controller.Switch(mSwcopy) = True\r
			End If\r
		Next\r
	End Property\r
\r
	Public Sub TrigHit(aBall, aNo)\r
		Dim mSwcopy\r
		aNo = aNo - 1\r
		If mSw(aNo) Then\r
			mSwcopy = mSw(aNo)\r
			Controller.Switch(mSwcopy) = True\r
		End If\r
		If aBall.VelY < -1 Then Exit Sub ' Allow small upwards speed\r
		If aNo = mSize Then mBalls = mBalls + 1\r
		If mBalls > aNo Then mKick(aNo).Enabled = Not mGateOpen\r
	End Sub\r
\r
	Public Sub TrigUnhit(aBall, aNo)\r
		Dim mSwcopy\r
		aNo = aNo - 1\r
		If mSw(aNo) Then\r
			mSwcopy = mSw(aNo)\r
			Controller.Switch(mSwcopy) = False\r
		End If\r
		If aBall.VelY > -1 Then\r
			If aNo = 0 Then mBalls = mBalls - 1\r
			If aNo < mSize Then mKick(aNo+1).Kick 0, 0\r
		Else\r
			If aNo = mSize Then mBalls = mBalls - 1\r
			If aNo > 0 Then mKick(aNo-1).Kick ExitDir, mRealForce\r
		End If\r
	End Sub\r
\r
	Public Sub KickHit(aNo) : mKick(aNo-1).Enabled = False : End Sub\r
End Class\r
\r
'--------------------\r
'	View Dips\r
'--------------------\r
Class cvpmDips\r
	Private mLWF, mChkCount, mOptCount, mItems0(), mItems1(), mItems2(), mItems3(), mItems4()\r
\r
	Private Sub Class_Initialize\r
		ReDim mItems0(100), mItems1(100), mItems2(100), mItems3(100), mItems4(100)\r
	End Sub\r
\r
	Private Sub addChkBox(aType, aLeft, aTop, aWidth, aNames)\r
		Dim ii, obj\r
		If Not isObject(mLWF) Then Exit Sub\r
		For ii = 0 To UBound(aNames) Step 2\r
			Set obj = mLWF.AddCtrl("chkBox", 10+aLeft, 5+aTop+ii*7, aWidth, 14, aNames(ii))\r
			mChkCount = mChkCount + 1\r
			mItems0(mChkCount+mOptCount) = aType\r
			Set mItems1(mChkCount+mOptCount) = obj\r
			mItems2(mChkCount+mOptCount) = mChkCount\r
			mItems3(mChkCount+mOptCount) = aNames(ii+1)\r
			mItems4(mChkCount+mOptCount) = aNames(ii+1)\r
		Next\r
	End Sub\r
\r
	Private Sub addOptBox(aType, aLeft, aTop, aWidth, aHeading, aMask, aNames)\r
		Dim ii, obj\r
		If Not isObject(mLWF) Then Exit Sub\r
		mLWF.AddCtrl "Frame", 10+aLeft, 5+aTop, 10+aWidth, 7*UBound(aNames)+25, aHeading\r
		If aMask Then\r
			For ii = 0 To UBound(aNames) Step 2\r
				Set obj = mLWF.AddCtrl("OptBtn", 10+aLeft+5, 5+aTop+ii*7+14, aWidth, 14, aNames(ii))\r
				mOptCount = mOptCount + 1\r
				mItems0(mChkCount+mOptCount) = aType+2\r
				Set mItems1(mChkCount+mOptCount) = obj\r
				mItems2(mChkCount+mOptCount) = mOptCount\r
				mItems3(mChkCount+mOptCount) = aNames(ii+1)\r
				mItems4(mChkCount+mOptCount) = aMask\r
			Next\r
		Else\r
			addChkBox aType, 5+aLeft, 15+aTop, aWidth, aNames\r
		End If\r
	End Sub\r
\r
	Public Sub addForm(ByVal aWidth, aHeight, aName)\r
		If aWidth < 80 Then aWidth = 80\r
		On Error Resume Next\r
		Set mLWF = CreateObject("VPinMAME.WSHDlg") : If Err Then Exit Sub\r
		With mLWF\r
			.x = -1 : .y = -1 ' : .w = aWidth : .h = aHeight+60\r
			.Title = aName : .AddCtrl "OKBtn", -1, -1, 70, 25, "&Ok"\r
		End With\r
		mChkCount = 0 : mOptCount = 0\r
	End Sub\r
\r
	Public Sub addChk(aLeft, aTop, aWidth, aNames)\r
		addChkBox 0, aLeft, aTop, aWidth, aNames\r
	End Sub\r
	Public Sub addChkExtra(aLeft, aTop, aWidth, aNames)\r
		addChkBox 1, aLeft, aTop, aWidth, aNames\r
	End Sub\r
	Public Sub addFrame(aLeft, aTop, aWidth, aHeading, aMask, aNames)\r
		addOptBox 0, aLeft, aTop, aWidth, aHeading, aMask, aNames\r
	End Sub\r
	Public Sub addFrameExtra(aLeft, aTop, aWidth, aHeading, aMask, aNames)\r
		addOptBox 1, aLeft, aTop, aWidth, aHeading, aMask, aNames\r
	End Sub\r
\r
	Public Sub addLabel(aLeft, aTop, aWidth, aHeight, aCaption)\r
		If Not isObject(mLWF) Then Exit Sub\r
		mLWF.AddCtrl "Label", 10+aLeft, 5+aTop, aWidth, aHeight, aCaption\r
	End Sub\r
\r
	Public Sub viewDips : viewDipsExtra 0 : End Sub\r
	Public Function viewDipsExtra(aExtra)\r
		Dim dips(1), ii, useDip\r
		If Not isObject(mLWF) Then Exit Function\r
		With Controller\r
			dips(0) = .Dip(0) + .Dip(1)*256 + .Dip(2)*65536 + (.Dip(3) And &H7f)*&H1000000\r
			If .Dip(3) And &H80 Then dips(0) = dips(0) Or &H80000000 'workaround for overflow error\r
		End With\r
		useDip = False : dips(1) = aExtra\r
		For ii = 1 To mChkCount + mOptCount\r
			mItems1(ii).Value = -((dips(mItems0(ii) And &H01) And mItems4(ii)) = mItems3(ii))\r
			If (mItems0(ii) And &H01) = 0 Then useDip = True\r
		Next\r
		If vpmVPVer >= 10800 Then ShowCursor = True\r
		mLWF.Show GetPlayerHWnd\r
		If vpmVPVer >= 10800 Then ShowCursor = False\r
		dips(0) = 0 : dips(1) = 0\r
		For ii = 1 To mChkCount + mOptCount\r
			If mItems1(ii).Value Then dips(mItems0(ii) And &H01) = dips(mItems0(ii) And &H01) Or mItems3(ii)\r
		Next\r
		If useDip Then\r
			With Controller\r
				.Dip(0) =  (dips(0) And 255)\r
				.Dip(1) = ((dips(0) And 65280)\\256) And 255\r
				.Dip(2) = ((dips(0) And &H00ff0000)\\65536) And 255\r
				.Dip(3) = ((dips(0) And &Hff000000)\\&H01000000) And 255\r
			End With\r
		End If\r
		viewDipsExtra = dips(1)\r
	End Function\r
End Class\r
\r
'--------------------\r
'	Impulse Plunger\r
'--------------------\r
Class cvpmImpulseP\r
	Private mEnabled, mBalls, mTrigger, mEntrySnd, mExitSnd, MExitSndBall\r
	Public X, Y, Strength, Res, Size, Solenoid, IMPowerOut, Time, mCount, Pull, IMPowerTrans, cFactor, Auto, RandomOut, SwitchNum, SwitchOn, BallOn\r
\r
	Private Sub Class_Initialize\r
		Size = 1 : Strength = 0 : Solenoid = 0 : Res = 1 : IMPowerOut = 0 : Time = 0 : mCount = 0 : mEnabled = False\r
		Pull = 0 : IMPowerTrans = 0 : Auto = False : RandomOut = 0 : SwitchOn = 0 : SwitchNum = 0 : BallOn = 0\r
		Set mBalls = New cvpmDictionary\r
	End Sub\r
\r
	Private Property Let NeedUpdate(aEnabled) : vpmTimer.EnableUpdate Me, True, aEnabled : End Property\r
\r
	Public Sub InitImpulseP(aTrigger, aStrength, aTime)\r
		Dim tmp\r
		If vpmIsArray(aTrigger) Then Set tmp = aTrigger(0) Else Set tmp = aTrigger\r
		X = tmp.X : Y = tmp.Y : Size = tmp.Radius : vpmTimer.InitTimer tmp, True\r
		If IsArray(aTrigger) Then mTrigger = aTrigger Else Set mTrigger = aTrigger\r
		Strength = aStrength\r
		Res = 500\r
		Time = aTime\r
		If aTime = 0 Then\r
			Auto = True\r
		Else\r
			cFactor = (Res / Time) / 100\r
			Auto = False\r
		End If\r
	End Sub\r
\r
	Public Sub CreateEvents(aName)\r
		If vpmCheckEvent(aName, Me) Then\r
			vpmBuildEvent mTrigger, "Hit", aName & ".AddBall ActiveBall"\r
			vpmBuildEvent mTrigger, "UnHit", aName & ".RemoveBall ActiveBall"\r
		End If\r
	End Sub\r
\r
\r
	Public Property Let PlungeOn(aEnabled) : mEnabled = aEnabled : End Property\r
	Public Property Get PlungeOn\r
		If Solenoid > 0 Then PlungeOn = Controller.Solenoid(Solenoid) Else PlungeOn = mEnabled\r
	End Property\r
\r
	Public Sub AddBall(aBall)\r
		Dim mSwcopy\r
		With mBalls\r
			If .Exists(aBall) Then .Item(aBall) = .Item(aBall) + 1 Else .Add aBall, 1 : NeedUpdate = True\r
		End With\r
		If SwitchOn = True Then\r
			mSwcopy = SwitchNum\r
			Controller.Switch(mSwcopy) = 1\r
		End If\r
		BallOn = 1\r
	End Sub\r
\r
	Public Sub RemoveBall(aBall)\r
		Dim mSwcopy\r
		With mBalls\r
			If .Exists(aBall) Then .Item(aBall) = .Item(aBall) - 1 : If .Item(aBall) <= 0 Then .Remove aBall\r
			NeedUpdate = (.Count > 0)\r
		End With\r
		If SwitchOn = True Then\r
			mSwcopy = SwitchNum\r
			Controller.Switch(mSwcopy) = 0\r
		End If\r
		BallOn = 0\r
	End Sub\r
\r
	Public Property Get Balls : Balls = mBalls.Keys : End Property\r
\r
	Public Sub Update\r
		Dim obj\r
		If pull = 1 and mCount < Res Then\r
			mCount = mCount + cFactor\r
			IMPowerTrans = mCount\r
			NeedUpdate = True\r
		Else\r
			IMPowerTrans = mCount\r
			NeedUpdate = False\r
		End If\r
		If PlungeOn Then\r
			On Error Resume Next\r
			For Each obj In mBalls.Keys\r
				If obj.X < 0 Or Err Then : mBalls.Remove obj : Else : PlungeBall obj : End If\r
			Next\r
			On Error Goto 0\r
		End If\r
	End Sub\r
\r
	Public Sub PlungeBall(aBall)\r
		aBall.VelY = IMPowerOut\r
	End Sub\r
\r
	Public Sub Random(aInput) ' Random Output Varience\r
		RandomOut = aInput\r
	End Sub\r
\r
	Public Sub Fire	' Resets System and Transfer Power Value\r
		If Auto = True Then\r
		IMPowerOut = -Strength + ((Rnd) * RandomOut)\r
		Else\r
		IMPowerOut = -Strength * (IMPowerTrans + ((Rnd-0.5) * cFactor * RandomOut)) / Res\r
		End If\r
		PlungeOn = True\r
		Update\r
		PlungeOn = False\r
		Pull = 0 : IMPowerOut = 0 : IMPowerTrans = 0 : mCount = 0\r
		If BallOn = 1 Then : PlaySound mExitSndBall : Else : PlaySound mExitSnd : End If\r
	End Sub\r
\r
	Public Sub AutoFire	' Auto-Fire Specific Call (so you don't have to change timing)\r
		IMPowerOut = -Strength + ((Rnd) * RandomOut)\r
		PlungeOn = True\r
		Update\r
		PlungeOn = False\r
		Pull = 0 : IMPowerOut = 0 : IMPowerTrans = 0 : mCount = 0\r
		If BallOn = 1 Then : PlaySound mExitSndBall : Else : PlaySound mExitSnd : End If\r
	End Sub\r
\r
	Public Sub Pullback ' Pull Plunger\r
		Pull = 0 : IMPowerOut = 0 : IMPowerTrans = 0 : mCount = 0 ' reinitialize to be sure\r
		Pull = 1 : NeedUpdate = True\r
		PlaySound mEntrySnd\r
	End Sub\r
\r
	Public Sub PullbackandRetract ' Pull Plunger and retract\r
		Pull = 0 : IMPowerOut = 0 : IMPowerTrans = 0 : mCount = 0 ' reinitialize to be sure\r
		Pull = 1 : NeedUpdate = True\r
		PlaySound mEntrySnd\r
	End Sub\r
\r
	Public Sub Switch(aSw)\r
		SwitchOn = True\r
		SwitchNum = aSw\r
	End Sub\r
\r
	Public Sub InitEntrySnd(aNoBall) : mEntrySnd = aNoBall : End Sub\r
	Public Sub InitExitSnd(aBall, aNoBall) : mExitSndBall = aBall : mExitSnd = aNoBall : End Sub\r
End Class\r
\r
Set vpmTimer = New cvpmTimer\r
Set vpmNudge = New cvpmNudge\r
\r
'-------------\r
'cvpmFlips (FastFlips) 2 Beta 1\r
'-------------\r
\r
'Redesigned to better support games from the solid-state flipper era, including previously unsupported games thanks to DJrobX and Stumblor!\r
'New Features:\r
'- Switches from script to rom control after a delay (100ms default, vpmflips.RomControlDelay)\r
'	-This works independently for each flipper, ex. the Thing Flip will not interfere even briefly with lower flippers\r
'- New Feature - vpmFlips.Enabled. vpmFlips.Enabled = True / False will enable / disable fastflips. (This does the same thing as vpmflipsSAM.RomControl)\r
'	-May be necessary to manually disable flippers for video mode on some games\r
'- New method to disable upper flippers without getting rom errors from the double action cab switches: call helper subs NoUpperLeftFlipper, NoUpperRightFlipper\r
'	-On SS games that reuse upper flipper COILS, call the appropriate helper subs from the table script: NoUpperLeftFlipper, NoUpperRightFlipper (for example AFM)\r
'	-On SS games that reuse upper flipper SWITCHES, you will still need the cSingleLFlip/cSingleRFlip lines!\r
'	-CSinglexFlip automatically disables flippers to retain legacy behavior\r
\r
'Todo\r
'test delay - works okay but a little weird if longer than romcontroldelay\r
'test more tables\r
'test Red & Ted with the left side flippers\r
'test region safety\r
\r
dim vpmFlips : set vpmFlips = New cvpmFlips2 : vpmFlips.Name = "vpmFlips"\r
\r
Sub NoUpperLeftFlipper() : vpmFlips.FlipperSolNumber(2) = 0 : End Sub\r
Sub NoUpperRightFlipper() : vpmFlips.FlipperSolNumber(3) = 0 : End Sub\r
\r
Function NullFunction(a) : End Function\r
\r
Class cvpmFlips2 'test fastflips switches to rom control after 100ms or so delay\r
	Public Name, Delay, TiltObjects, Sol, DebugOn\r
	Public LagCompensation 'flag for solenoid jitter (may not be a problem anymore) set private\r
\r
	Public FlipperSolNumber(3)	'Flipper Solenoid Number. By default these are set to use the Core constants. 0=left 1=right 2=Uleft 3=URight\r
	Public ButtonState(3)		'Key Flip State 'set private\r
	Public SolState(3)			'Rom Flip State	'set private\r
\r
	'Public SubL, SubUL, SubR, SubUR 'may restore these to reduce nested calls. For now the script is compressed a bit.\r
	Public FlipperSub(3)	'Set to the flipper subs by .init\r
	Public FlipperSubRef(3)	'Set to the flipper subs by .init\r
\r
	Public FlippersEnabled	'Flipper Circuit State (from the ROM)\r
	Public OnOff			'FastFlips Enabled. Separate from FlippersEnabled, which is the flipper circuit state	'private 'todo rename\r
\r
	Public FlipAt(3)		'Flip Time in gametime	'private\r
	Public RomControlDelay	'Delay after flipping that Rom Controlled Flips are accepted (default 100ms)\r
\r
	Public Initialized\r
\r
	Private Sub Class_Initialize()\r
		dim idx :for idx = 0 to 3 :FlipperSub(idx) = "NullFunction" : Set FlipperSubRef(idx) = Nothing: OnOff=True: ButtonState(idx)=0:SolState(idx)=0: Next\r
		Delay=0: FlippersEnabled=0: DebugOn=0 : LagCompensation=0 : Sol=0 : TiltObjects=1\r
		RomControlDelay = 100	'RomControlDelay MS between switching to rom controlled flippers\r
		FlipperSolNumber(0)=sLLFlipper :FlipperSolNumber(1)=sLRFlipper :FlipperSolNumber(2)=sULFlipper : FlipperSolNumber(3)=sURFlipper\r
		Initialized = False\r
	End Sub\r
\r
	Sub Init()	'called by vpmInit sub\r
		If Initialized Then\r
			MsgBox "Table script bug: cvpmFlips2.Init is called twice." & vblf & vblf & "Maybe 'vpmInit Me' is duplicated in the code ?"\r
			QuitPlayer 2 'CS_STOP_PLAY\r
		End If\r
		Initialized = True\r
\r
		On Error Resume Next 'If there's no usesolenoids variable present, exit\r
			call eval(UseSolenoids) : if err then exit Sub\r
		On Error Goto 0\r
		err.clear\r
\r
		'Set Solenoid\r
		On Error Resume Next\r
			'For some WPC games (IJ) that reuse upper flipper\r
			'switch numbers, and legacy fast flip code, disable\r
			'flippers if cSinglexFlip is set.\r
			If not cSingleLFlip Then\r
				if err.number = 0 then NoUpperLeftFlipper\r
			End If\r
			err.clear\r
			If not cSingleRFlip Then\r
				if err.number = 0 then NoUpperRightFlipper\r
			End If\r
			err.clear\r
		On Error Goto 0\r
\r
		If UseSolenoids >= 2 Then\r
			On Error Resume Next\r
				If UseSolenoids > 2 Then\r
					Solenoid = UseSolenoids\r
				Else\r
					err.clear\r
					if IsEmpty(GameOnSolenoid) or Err then msgbox "VPMflips error: " & err.description\r
					if err = 500 then 'Error 500 - Variable not defined\r
						msgbox "UseSolenoids = 2 error!" & vbnewline & vbnewline & "GameOnSolenoid is not defined!" & vbnewline & _\r
						"System may be incompatible (Check the compatibility list) or your system scripts may be out of date"\r
					End If\r
					Solenoid = GameOnSolenoid\r
				End If\r
			On Error Goto 0\r
\r
			'Set callbacks\r
			dim idx : for idx = 0 to 3\r
				If IsNumeric(FlipperSolNumber(idx)) then\r
					Callback(idx) = SolCallback(abs(FlipperSolNumber(idx)))\r
				end If\r
			Next\r
\r
			'dim str\r
			'for idx = 0 to 3 : str = str & "Callback" & idx & ":" & Callback(idx) &vbnewline : Next\r
			'str = "init successful" &vbnewline& _\r
			'	"Sol=" & Solenoid & " " & sol &vbnewline& str\r
			'msgbox str\r
			'vpmFlips.DebugTestInit = True 'removed debug stuff for the moment\r
		End If\r
	End Sub\r
\r
	'Index based callbacks...\r
	Public Property Let Callback(aIdx, ByVal aInput)\r
		if Not IsEmpty(aInput) then\r
			SolCallback(FlipperSolNumber(aIdx)) = name & ".RomFlip(" & aIdx & ")="\r
			SolCallbackInitialized = False\r
			FlipperSub(aIDX) = aInput 'hold old flipper subs\r
			Dim cbs: cbs = "Sub XXXFlipperSub_" & aIdx & "(state)" & vblf & aInput & " state" & vblf & "End Sub"\r
			ExecuteGlobal cbs\r
			Set FlipperSubRef(aIDX) = GetRef("XXXFlipperSub_" & aIdx)\r
		end if\r
	End Property\r
	Public Property Get Callback(aIdx) : CallBack = FlipperSub(aIDX) : End Property\r
\r
	Public Property Let Enabled(ByVal aEnabled) 'improving choreography\r
		aEnabled = cBool(aEnabled)\r
		if aEnabled <> OnOff then 'disregard redundant updates\r
			OnOff = aEnabled\r
			dim idx, cb\r
			If aEnabled then 'Switch to ROM solenoid states or button states immediately\r
				For idx = 0 To 3\r
					Set cb = FlipperSubRef(idx)\r
					If SolState(idx) <> ButtonState(idx) And FlippersEnabled And Not cb is Nothing Then cb ButtonState(idx)\r
				Next\r
			Else\r
				For idx = 0 To 3\r
					Set cb = FlipperSubRef(idx)\r
					If ButtonState(idx) <> SolState(idx) And Not cb is Nothing Then cb SolState(idx)\r
				Next\r
			End If\r
		end If\r
	End Property\r
	Public Property Get Enabled : Enabled = OnOff : End Property\r
\r
	Public Property Let Solenoid(aInput) : if isnumeric(aInput) then Sol = abs(aInput) : end if : End Property 'set solenoid\r
	Public Property Get Solenoid : Solenoid = sol : End Property\r
\r
	Public Property Let Flip(aIdx, ByVal aEnabled) 'Key Flip: Indexed base flip... may keep may not\r
		aEnabled = abs(aEnabled) 'True / False is not region safe with execute. Convert to 1 or 0 instead.\r
		ButtonState(aIdx) = aEnabled 'track flipper button states: the game-on sol flips immediately if the button is held down\r
		'debug.print "Key Flip " & aIdx &" @ " & gametime & " FF ON: " & OnOff & " Circuit On? " & FlippersEnabled\r
		Dim cb: Set cb = FlipperSubRef(aIdx)\r
		If OnOff and FlippersEnabled or DebugOn then\r
			If Not cb is Nothing Then cb aEnabled\r
			FlipAt(aIdx) = GameTime\r
		end If\r
	End Property\r
\r
	'call callbacks 'legacy\r
	Public Sub FlipL(aEnabled) : Flip(0)=aEnabled :End Sub : Public Sub FlipR(aEnabled) : Flip(1)=aEnabled :End Sub\r
	Public Sub FlipUL(aEnabled): Flip(2)=aEnabled :End Sub : Public Sub FlipUR(aEnabled): Flip(3)=aEnabled :End Sub\r
\r
	Public Property Let RomFlip(aIdx, ByVal aEnabled)\r
		aEnabled = abs(aEnabled)\r
		SolState(aIdx) = aEnabled\r
\r
		Dim cb: Set cb = FlipperSubRef(aIdx)\r
		If Not OnOff OR GameTime >= FlipAt(aIdx) + RomControlDelay And Not cb is Nothing Then\r
			cb aEnabled\r
			'tb.text = "Rom Flip " & aIdx & " state:" & aEnabled &vbnewline&_\r
			'GameTime & " >= " & FlipAt(aIdx) & "+" & RomControlDelay\r
			'debug.print "rom flip @ " & gametime & "solenoid:" & sol & ": " & FlippersEnabled\r
		end if\r
	End property\r
\r
	Public Sub TiltSol(ByVal aEnabled) 'Handle solenoid / Delay (if delayinit)\r
		aEnabled = cBool(aEnabled)\r
		If delay > 0 and not aEnabled then 'handle delay\r
			vpmtimer.addtimer Delay, Name & ".FireDelay" & "'"\r
			LagCompensation = 1\r
		else\r
			If Delay > 0 then LagCompensation = 0\r
			EnableFlippers(aEnabled)\r
		end If\r
	End Sub\r
\r
	Sub FireDelay() : If LagCompensation then EnableFlippers False End If : End Sub\r
\r
	Public Sub EnableFlippers(ByVal aEnabled) 'private\r
		aEnabled = abs(aEnabled) 'Might fix TMNT issue with vpmnudge.solgameon?\r
		dim idx, cb\r
		If aEnabled Then\r
			For idx = 0 to 3\r
				Set cb = FlipperSubRef(idx)\r
				If Not cb is Nothing Then cb ButtonState(idx)\r
			Next\r
		End If\r
		FlippersEnabled = aEnabled\r
		If TiltObjects then vpmnudge.solgameon aEnabled\r
		If Not aEnabled then\r
			For idx = 0 To 3\r
				Set cb = FlipperSubRef(idx)\r
				If Not cb is Nothing Then cb 0\r
			Next\r
		End If\r
	End Sub\r
\r
	'debug for finding sols\r
	Public Sub PrintSols() : Dim x, sols: sols=controller.solenoids: for x= 0 to uBound(sols) : if sols(x) then debug.print x & ":" & sols(x) end if : Next : End Sub\r
\r
End Class\r
\r
'---------------------------\r
' Check VP version running\r
'---------------------------\r
Private Function vpmCheckVPVer\r
	On Error Resume Next\r
	' a bug in VBS?: Err object is not cleared on Exit Function\r
	If VPBuildVersion < 0 Or Err Then vpmCheckVPVer = 5000 : Err.Clear : Exit Function\r
	If VPBuildVersion > 2806 and VPBuildVersion < 9999 Then\r
		vpmCheckVPVer = 6300\r
	ElseIf VPBuildVersion > 2721 and VPBuildVersion < 9999 Then\r
		vpmCheckVPVer = 6100\r
	ElseIf VPBuildVersion >= 920 and VPBuildVersion <= 999 Then\r
		vpmCheckVPVer = 9200\r
	ElseIf VPBuildVersion > 909 and VPBuildVersion <= 999 Then\r
		vpmCheckVPVer = 9100\r
	ElseIf VPBuildVersion >= 900 and VPBuildVersion <= 999 Then\r
		vpmCheckVPVer = 9000\r
	ElseIf VPBuildVersion >= 10000 Then\r
		vpmCheckVPVer = VPBuildVersion\r
	Else\r
		vpmCheckVPVer = 6000\r
	End If\r
End Function\r
\r
'--------------------\r
' Initialise timers\r
'--------------------\r
Sub PulseTimer_Init	  : vpmTimer.InitTimer Me, False : End Sub\r
Sub PinMAMETimer_Init : Me.Interval = PinMAMEInterval : Me.Enabled = True : End Sub\r
\r
'---------------------------------------------\r
' Init function called from Table_Init event\r
'---------------------------------------------\r
Public Sub vpmInit(aTable)\r
	If vpmVPVer >= 6000 Then\r
		On Error Resume Next\r
		If Not IsObject(GetRef(aTable.name & "_Paused")) Or Err Then Err.Clear : vpmBuildEvent aTable, "Paused", "Controller.Pause = True"\r
		If Not IsObject(GetRef(aTable.name & "_UnPaused")) Or Err Then Err.Clear : vpmBuildEvent aTable, "UnPaused", "Controller.Pause = False"\r
		If Not IsObject(GetRef(aTable.name & "_Exit")) Or Err Then Err.Clear : vpmBuildEvent aTable, "Exit", "Controller.Pause = False:Controller.Stop"\r
	End If\r
\r
	' FIXME PROC does not support Modulated solenoid and will fail\r
	If UseModSol Then\r
		If Controller.Version >= 03060000 Then\r
			Controller.SolMask(2)=UseModSol ' 1 for modulated solenoids or 2 for new physical lamps/GI/AlphaNumSegments/solenoids\r
		ElseIf Controller.Version >= 02080000 Then\r
			Controller.SolMask(2)=1 ' legacy smoothed solenoids\r
			UseModSol=1\r
		Else\r
			MsgBox "Modulated Flashers/Solenoids not supported with this Visual PinMAME version (2.8 or newer is required)"\r
			UseModSol=0\r
		End If\r
	End If\r
\r
	If HasTimeFence Then\r
		' Force emulation to be in sync with VPX (in turn it pauses it on startup until VPX is ready, this way both start together in sync)\r
		If PreciseGameTime > 0 Then Controller.TimeFence = PreciseGameTime Else Controller.TimeFence = 0.01\r
	End If\r
\r
	vpmFlips.Init\r
End Sub\r
\r
' Exit function called in Table_Exit event\r
Public Sub vpmExit : End Sub\r
'------------------------------------------------------\r
' All classes call this function to create a ball\r
' Assign vpmCreateBall if you want a custom function\r
'------------------------------------------------------\r
Private Function vpmDefCreateBall(aKicker)\r
	If Not IsEmpty(vpmBallImage) Then aKicker.Createball.Image = vpmBallImage Else aKicker.Createball : End If\r
	Set vpmDefCreateBall = aKicker\r
End Function\r
\r
Private Function vpmDefCreateBall2(aKicker)\r
	If Not IsEmpty(vpmBallImage) Then aKicker.Createsizedball(BSize).Image = vpmBallImage Else aKicker.Createsizedball(BSize) : End If\r
	Set vpmDefCreateBall2 = aKicker\r
End Function\r
\r
Private Function vpmDefCreateBall3(aKicker)\r
	If Not IsEmpty(vpmBallImage) Then\r
		aKicker.CreateSizedBallWithMass(BSize,BMass).Image = vpmBallImage\r
	Else\r
		aKicker.CreateSizedBallWithMass BSize,BMass 'for whatever reason it doesn't work if using ()\r
	End If\r
	Set vpmDefCreateBall3 = aKicker\r
End Function\r
\r
If vpmVPVer >= 10000 Then\r
	Set vpmCreateBall = GetRef("vpmDefCreateBall3")\r
ElseIf vpmVPVer >= 9100 Then\r
	Set vpmCreateBall = GetRef("vpmDefCreateBall2")\r
Else\r
	Set vpmCreateBall = GetRef("vpmDefCreateBall")\r
End If\r
\r
Private vpmTrough ' Default Trough. Used to clear up missing balls\r
\r
'-------------------\r
' Main Loop\r
'------------------\r
Private Const CHGNO = 0\r
Private Const CHGSTATE = 1\r
Private vpmTrueFalse : vpmTrueFalse = Array(" True", " False"," True")\r
\r
Sub InitSolCallbacks\r
	If SolCallbackInitialized Then Exit Sub\r
\r
	' Calling Execute can be a heavy operation depending on user setup as it seems that security programs like Microsoft Defender are triggered by this call\r
	' Therefore we add the callbacks to the script during vpmInit using ExecuteGlobal to prevent stutters during play\r
	Dim sol, cbs: cbs = ""\r
	For sol = 0 To UBound(SolCallback)\r
		Set SolCallbackRef(sol) = Nothing\r
		Set SolModCallbackRef(sol) = Nothing\r
		If SolCallback(sol) <> "" Then cbs = cbs & vblf & "Sub XXXSolCallback_" & sol & "(state)" & vblf & SolCallback(sol) & " state" & vblf & "End Sub"\r
		If SolModCallback(sol) <> "" Then cbs = cbs & vblf & "Sub XXXSolModCallback_" & sol & "(state)" & vblf & SolModCallback(sol) & " state" & vblf & "End Sub"\r
	Next\r
	If cbs <> "" Then ExecuteGlobal cbs\r
	For sol = 0 To UBound(SolCallback)\r
		If SolCallback(sol) <> "" Then Set SolCallbackRef(sol) = GetRef("XXXSolCallback_" & sol)\r
		If SolModCallback(sol) <> "" Then Set SolModCallbackRef(sol) = GetRef("XXXSolModCallback_" & sol)\r
	Next\r
\r
	SolCallbackInitialized = True\r
End Sub\r
\r
Sub vpmDoSolCallback(aNo, aEnabled)\r
	InitSolCallbacks\r
	Dim cb: Set cb = SolCallbackRef(aNo)\r
	If Not cb Is Nothing Then cb CBool(aEnabled)\r
End Sub\r
\r
Sub vpmDoLampUpdate(aNo, aEnabled)\r
	On Error Resume Next ' FIXME remove as hiding error is not really a good idea since this leads to sharing tables with invalid script\r
	Lights(aNo).State = Abs(aEnabled)\r
	On Error Goto 0\r
End Sub\r
\r
Dim LastPinMameVisualSync : LastPinMameVisualSync = 0\r
Sub PinMAMETimer_Timer\r
	Dim ChgLamp,ChgSol,ChgGI,ChgLed, ii, tmp, idx\r
	Dim DMDp\r
	Dim ChgNVRAM\r
\r
	' If the Controller supports it, we synchronize the emulation with VPX physics & events for very low latency between them\r
	If HasTimeFence Then\r
		If HasPreciseGameTime Then\r
			Controller.TimeFence = PreciseGameTime\r
		Else\r
			Controller.TimeFence = GameTime / 1000.0\r
		End If\r
	End If\r
\r
	' To limit the performance impact, lights are updated at most once per frame (or at most at 100Hz if FrameIndex is not available on older VP(X) versions)\r
	Dim UpdateVisual\r
	If HasFrameIndex Then\r
		UpdateVisual = (FrameIndex <> LastPinMameVisualSync)\r
		If UpdateVisual Then LastPinMameVisualSync = FrameIndex\r
	Else\r
		UpdateVisual = (GameTime - LastPinMameVisualSync > 10)\r
		If UpdateVisual Then LastPinMameVisualSync = GameTime\r
	End If\r
\r
	On Error Resume Next\r
		If UpdateVisual Then\r
			If Not IsPluginPinMAME Then\r
				If UseDMD Then\r
					DMDp = Controller.RawDmdPixels\r
					If Not IsEmpty(DMDp) Then\r
						DMDWidth = Controller.RawDmdWidth\r
						DMDHeight = Controller.RawDmdHeight\r
						DMDPixels = DMDp\r
					End If\r
				ElseIf UseColoredDMD Then\r
					DMDp = Controller.RawDmdColoredPixels\r
					If Not IsEmpty(DMDp) Then\r
						DMDWidth = Controller.RawDmdWidth\r
						DMDHeight = Controller.RawDmdHeight\r
						DMDColoredPixels = DMDp\r
					End If\r
				End If\r
			End If\r
			If UseLamps Then ChgLamp = Controller.ChangedLamps Else LampCallback\r
			If UsePdbLeds Then ChgLed = Controller.ChangedPDLeds Else PDLedCallback\r
			If (Not GICallback is Nothing) Or (Not GICallback2 is Nothing) Then ChgGI = Controller.ChangedGIStrings\r
		End If\r
		If UseNVRAM Then\r
			If isObject(NVRAMCallback) Then\r
				ChgNVRAM = Controller.ChangedNVRAM 'Controller.NVRAM would deliver everything of the NVRAM all the time as 1D array\r
				If(Not IsEmpty(ChgNVRAM)) Then NVRAMCallback ChgNVRAM\r
			End If\r
		End If\r
		If UseSolenoids Then ChgSol = Controller.ChangedSolenoids\r
		MotorCallback\r
	On Error Goto 0\r
\r
	Dim pwmScale: If UseModSol >= 2 Then pwmScale = 1.0 / 255.0 Else pwmScale = 1 ' User has activated physical output and expects a 0..1 value for solenoids/lamps/GI/AlphaNumSegments\r
\r
	If Not IsEmpty(ChgSol) Then\r
		InitSolCallbacks\r
		Dim cb, nsol, state, bstate\r
		For ii = 0 To UBound(ChgSol)\r
			nsol = ChgSol(ii, 0)\r
			state = ChgSol(ii, 1) * pwmScale\r
			bstate = CBool(state >= 0.5)\r
			If bstate <> SolPrevState(nsol) Then\r
				SolPrevState(nsol) = bstate\r
				Set cb = SolCallbackRef(nsol)\r
				If Not cb Is Nothing Then cb bstate\r
			End If\r
			If UseModSol >= 1 Then\r
				Set cb = SolModCallbackRef(nsol)\r
				If Not cb Is Nothing Then cb state\r
			End If\r
			If UseSolenoids > 1 Then If nsol = vpmFlips.Solenoid Then vpmFlips.TiltSol bstate\r
		Next\r
	End If\r
\r
	If Not IsEmpty(ChgLamp) Then\r
		On Error Resume Next\r
			For ii = 0 To UBound(ChgLamp)\r
				idx = ChgLamp(ii, 0)\r
				If IsArray(Lights(idx)) Then\r
					For Each tmp In Lights(idx) : tmp.State = ChgLamp(ii, 1) * pwmScale : Next\r
				Else\r
					Lights(idx).State = ChgLamp(ii, 1) * pwmScale\r
				End If\r
			Next\r
			For Each tmp In vpmMultiLights\r
				For ii = 1 To UBound(tmp) : tmp(ii).State = tmp(0).State : Next\r
			Next\r
			LampCallback\r
		On Error Goto 0\r
	End If\r
\r
	If Not IsEmpty(ChgGI) Then\r
		For ii = 0 To UBound(ChgGI)\r
			If Not GICallback is Nothing Then GICallback ChgGI(ii, 0), CBool((ChgGI(ii, 1) * pwmScale) >= 0.5)\r
			If Not GICallback2 is Nothing Then GICallback2 ChgGI(ii, 0), ChgGI(ii, 1) * pwmScale\r
		Next\r
	End If\r
\r
	If Not IsEmpty(ChgLed) Then\r
		On Error Resume Next\r
			For ii = 0 To UBound(ChgLed)\r
				Dim color,ledstate\r
				idx = ChgLed(ii, 0)\r
				color = ChgLed(ii, 1)\r
				if color = 0 Then ledstate = 0 : Else ledstate = 1: End If\r
				If IsArray(Lights(idx)) Then\r
					For Each tmp In Lights(idx) : tmp.Color = color : tmp.State = ledstate : Next\r
				Else\r
					Lights(idx).Color = color : Lights(idx).State = ledstate\r
				End If\r
			Next\r
			For Each tmp In vpmMultiLights\r
				For ii = 1 To UBound(tmp) : tmp(ii).Color = tmp(0).Color : tmp(ii).State = tmp(0).State : Next\r
			Next\r
			PDLedCallback\r
		On Error Goto 0\r
	End If\r
	'Me.Enabled = True 'this was supposed to be some kind of weird mutex, disable it\r
End Sub\r
\r
'\r
' Private helper functions\r
'\r
Private Sub vpmPlaySound(aEnabled, aSound)\r
	If VarType(aSound) = vbString Then\r
		If aEnabled Then StopSound aSound : PlaySound aSound\r
	ElseIf aSound Then\r
		If aEnabled Then PlaySound SSolenoidOn Else PlaySound SSolenoidOff\r
	End If\r
End Sub\r
\r
Private Sub vpmToggleObj(aObj, aEnabled)\r
	Dim mSwcopy\r
	Select Case TypeName(aObj)\r
		Case "Wall", "HitTarget"		   aObj.IsDropped = aEnabled\r
		Case "Bumper", "Light"			   aObj.State	  = Abs(aEnabled)\r
		Case "Kicker", "Trigger", "Timer"  aObj.Enabled	  = aEnabled\r
		Case "Gate"						   aObj.Open	  = aEnabled\r
		Case "Primitive", "Ramp", "Rubber", "Flasher" aObj.Visible = aEnabled\r
		Case "Integer"					   mSwcopy = aObj : Controller.Switch(mSwcopy) = aEnabled\r
		Case Else MsgBox "vpmToggleObj: Unhandled Object " & TypeName(aObj)\r
	End Select\r
End Sub\r
\r
Private Function vpmCheckEvent(aName, aObj)\r
	vpmCheckEvent = True\r
	On Error Resume Next\r
	If Not Eval(aName) Is aObj Or Err Then MsgBox "CreateEvents: Wrong name " & aName : vpmCheckEvent = False\r
End Function\r
\r
Private Sub vpmBuildEvent(aObj, aEvent, aTask)\r
	Dim obj, str\r
	str = "_" & aEvent & " : " & aTask & " : End Sub"\r
	If vpmIsArray(aObj) Then\r
		For Each obj In aObj : ExecuteGlobal "Sub " & obj.Name & str : Next\r
	Else\r
		ExecuteGlobal "Sub " & aObj.Name & str\r
	End If\r
End Sub\r
\r
Private Function vpmIsCollection(aObj)\r
	vpmIsCollection = TypeName(aObj) = "Collection" Or TypeName(aObj) = "ICollection"\r
End Function\r
Private Function vpmIsArray(aObj)\r
	vpmIsArray = IsArray(aObj) Or vpmIsCollection(aObj)\r
End Function\r
\r
Private Function vpmSetArray(aTo, aFrom)\r
	If IsArray(aFrom) Then\r
		aTo = aFrom : vpmSetArray = UBound(aFrom)\r
	ElseIf vpmIsCollection(aFrom) Then\r
		Set aTo = aFrom : vpmSetArray = aFrom.Count - 1\r
	Else\r
		aTo = Array(aFrom) : vpmSetArray = 0\r
	End If\r
End Function\r
\r
Sub vpmCreateEvents(aHitObjs)\r
	Dim obj\r
	For Each obj In aHitObjs\r
		Select Case TypeName(obj)\r
			Case "Trigger"\r
				vpmBuildEvent obj, "Hit", "Controller.Switch(" & Obj.TimerInterval & ") = True"\r
				vpmBuildEvent obj, "UnHit", "Controller.Switch(" & Obj.TimerInterval & ") = False"\r
			Case "Wall"\r
				If obj.HasHitEvent Then\r
					vpmBuildEvent obj, "Hit", "vpmTimer.PulseSw " & Obj.TimerInterval\r
				Else\r
					vpmBuildEvent obj, "SlingShot", "vpmTimer.PulseSw " & Obj.TimerInterval\r
				End If\r
			Case "Bumper", "Gate", "Primitive", "HitTarget", "Rubber"\r
				vpmBuildEvent obj, "Hit", "vpmTimer.PulseSw " & Obj.TimerInterval\r
			Case "Spinner"\r
				vpmBuildEvent obj, "Spin", "vpmTimer.PulseSw " & Obj.TimerInterval\r
		End Select\r
	Next\r
End Sub\r
\r
Sub vpmMapLights(aLights)\r
	Dim obj, str, ii, idx\r
	For Each obj In aLights\r
		idx = obj.TimerInterval\r
		If IsArray(Lights(idx)) Then\r
			str = "Lights(" & idx & ") = Array("\r
			For Each ii In Lights(idx) : str = str & ii.Name & "," : Next\r
			ExecuteGlobal str & obj.Name & ")"\r
		ElseIf IsObject(Lights(idx)) Then\r
			Lights(idx) = Array(Lights(idx),obj)\r
		Else\r
			Set Lights(idx) = obj\r
		End If\r
	Next\r
End Sub\r
\r
Function vpmMoveBall(aBall, aFromKick, aToKick)\r
	With aToKick.CreateBall\r
		If TypeName(aBall) = "IBall" Then\r
			.Color = aBall.Color : .Image = aBall.Image\r
			If vpmVPVer >= 6000 Then\r
				.FrontDecal = aBall.FrontDecal : .BackDecal = aBall.BackDecal\r
'				.UserValue = aBall.UserValue\r
			End If\r
		End If\r
	End With\r
	aFromKick.DestroyBall : Set vpmMoveBall = aToKick\r
End Function\r
\r
Sub vpmAddBall\r
	Dim Answer\r
	If IsObject(vpmTrough) Then\r
		If vpmVPVer >= 10800 Then ShowCursor = True\r
		Answer = MsgBox("Click YES to Add a ball to the Trough, NO Removes a ball from the Trough",vbYesNoCancel + vbQuestion + vbMsgBoxSetForeground)\r
		If vpmVPVer >= 10800 Then ShowCursor = False\r
		If Answer = vbYes Then vpmTrough.AddBall 0\r
		If Answer = vbNo Then vpmTrough.Balls=vpmTrough.Balls-1\r
	End If\r
End Sub\r
\r
'----------------------------\r
' Generic solenoid handlers\r
'----------------------------\r
' ----- Flippers ------\r
Sub vpmSolFlipper(aFlip1, aFlip2, aEnabled)\r
	Dim oldStrength, oldSpeed ' only for pre-VP10\r
	If aEnabled Then\r
		PlaySound SFlipperOn : aFlip1.RotateToEnd : If Not aFlip2 Is Nothing Then aFlip2.RotateToEnd\r
	Else\r
		PlaySound SFlipperOff\r
		If vpmVPVer < 10000 Then\r
			oldStrength = aFlip1.Strength : aFlip1.Strength = conFlipRetStrength\r
			oldSpeed = aFlip1.Speed : aFlip1.Speed = conFlipRetSpeed\r
		End If\r
		aFlip1.RotateToStart\r
		If vpmVPVer < 10000 Then\r
			aFlip1.Strength = oldStrength\r
			aFlip1.Speed = oldSpeed\r
		End If\r
		If Not aFlip2 Is Nothing Then\r
			If vpmVPVer < 10000 Then\r
				oldStrength = aFlip2.Strength : aFlip2.Strength = conFlipRetStrength\r
				oldSpeed = aFlip2.Speed : aFlip2.Speed = conFlipRetSpeed\r
			End If\r
			aFlip2.RotateToStart\r
			If vpmVPVer < 10000 Then\r
				aFlip2.Strength = oldStrength\r
				aFlip2.Speed = oldSpeed\r
			End If\r
		End If\r
	End If\r
End Sub\r
\r
' ----- Flippers With Speed Control ------\r
Sub vpmSolFlip2(aFlip1, aFlip2, aFlipSpeedUp, aFlipSpeedDn, aSnd, aEnabled) ' DEPRECATED, as VP10 does not feature speed on flippers anymore\r
	Dim oldStrength, oldSpeed\r
	If aEnabled Then\r
		If aSnd = true then : PlaySound SFlipperOn : End If\r
		If Not aFlipSpeedUp = 0 Then\r
			aFlip1.Speed = aFlipSpeedUp\r
			aFlip1.RotateToEnd\r
		Else\r
			aFlip1.RotateToEnd\r
		End If\r
		If Not aFlip2 Is Nothing Then\r
			If Not aFlipSpeedUp = 0 Then\r
				aFlip2.Speed = aFlipSpeedUp\r
				aFlip2.RotateToEnd\r
			Else\r
				aFlip2.RotateToEnd\r
			End If\r
		End If\r
	Else\r
		If aSnd = true then : PlaySound SFlipperOff : End If\r
		oldStrength = aFlip1.Strength\r
		aFlip1.Strength = conFlipRetStrength\r
		oldSpeed = aFlip1.Speed\r
		If Not aFlipSpeedDn = 0 Then\r
			aFlip1.Speed = aFlipSpeedDn\r
		Else\r
			aFlip1.Speed = conFlipRetSpeed\r
		End If\r
		aFlip1.RotateToStart : aFlip1.Strength = oldStrength : aFlip1.Speed = oldSpeed\r
		If Not aFlip2 Is Nothing Then\r
			oldStrength = aFlip2.Strength\r
			oldSpeed = aFlip2.Speed\r
			If Not aFlipSpeedDn = 0 Then\r
				aFlip2.Speed = aFlipSpeedDn\r
			Else\r
				aFlip2.Speed = conFlipRetSpeed\r
			End If\r
			aFlip2.Strength = conFlipRetStrength\r
			aFlip2.RotateToStart : aFlip2.Strength = oldStrength : aFlip2.Speed = oldSpeed\r
		End If\r
	End If\r
End Sub\r
\r
' ------ Diverters ------\r
Sub vpmSolDiverter(aDiv, aSound, aEnabled)\r
	If aEnabled Then aDiv.RotateToEnd : Else aDiv.RotateToStart\r
\r
'	vpmPlaySound aEnabled, aSound\r
\r
	If VarType(aSound) = vbString Then\r
		If aEnabled Then\r
			StopSound aSound\r
			CorePlaySoundAt aSound, aDiv\r
		End If\r
	ElseIf aSound Then\r
		If aEnabled Then\r
			CorePlaySoundAt SSolenoidOn, aDiv\r
		Else\r
			CorePlaySoundAt SSolenoidOff, aDiv\r
		End If\r
	End If\r
End sub\r
\r
' ------ Walls ------\r
Sub vpmSolWall(aWall, aSound, aEnabled)\r
	Dim obj\r
	If vpmIsArray(aWall) Then\r
		For Each obj In aWall : obj.IsDropped = aEnabled : Next\r
	Else\r
		aWall.IsDropped = aEnabled\r
	End If\r
	vpmPlaySound aEnabled, aSound\r
End Sub\r
\r
Sub vpmSolToggleWall(aWall1, aWall2, aSound, aEnabled)\r
	Dim obj\r
	If vpmIsArray(aWall1) Then\r
		For Each obj In aWall1 : obj.IsDropped = aEnabled : Next\r
	Else\r
		aWall1.IsDropped = aEnabled\r
	End If\r
	If vpmIsArray(aWall2) Then\r
		For Each obj In aWall2 : obj.IsDropped = Not aEnabled : Next\r
	Else\r
		aWall2.IsDropped = Not aEnabled\r
	End If\r
	vpmPlaySound aEnabled, aSound\r
End Sub\r
\r
' ------- Autoplunger ------\r
Sub vpmSolAutoPlunger(aPlung, aVar, aEnabled)\r
	Dim oldFire\r
	If aEnabled Then\r
		oldFire = aPlung.FireSpeed : aPlung.FireSpeed = oldFire * (100-aVar*(2*Rnd-1))/100\r
		PlaySound SSolenoidOn : aPlung.Fire : aPlung.FireSpeed = oldFire\r
	Else\r
		aPlung.Pullback\r
	End If\r
End Sub\r
\r
' --------Autoplunger with Specified Sound To Play ---------\r
Sub vpmSolAutoPlungeS(aPlung, aSound, aVar, aEnabled)\r
	Dim oldFire\r
	If aEnabled Then\r
		oldFire = aPlung.FireSpeed : aPlung.FireSpeed = oldFire * (100-aVar*(2*Rnd-1))/100\r
		PlaySound aSound : aPlung.Fire : aPlung.FireSpeed = oldFire\r
	Else\r
		aPlung.Pullback\r
	End If\r
End Sub\r
\r
' --------- Gate -----------\r
Sub vpmSolGate(aGate, aSound, aEnabled)\r
	Dim obj\r
	If vpmIsArray(aGate) Then\r
		For Each obj In aGate : obj.Open = aEnabled : Next\r
	Else\r
		aGate.Open = aEnabled\r
	End If\r
	vpmPlaySound aEnabled, aSound\r
End Sub\r
\r
' ------ Sound Only -------\r
Sub vpmSolSound(aSound, aEnabled)\r
	If aEnabled Then StopSound aSound : PlaySound aSound\r
End Sub\r
\r
' ------- Flashers --------\r
Sub vpmFlasher(aFlash, aEnabled)\r
	Dim obj\r
	If vpmIsArray(aFlash) Then\r
		For Each obj In aFlash : obj.State = Abs(aEnabled) : Next\r
	Else\r
		aFlash.State = Abs(aEnabled)\r
	End If\r
End Sub\r
\r
'---- Generic object toggle ----\r
Sub vpmSolToggleObj(aObj1, aObj2, aSound, aEnabled)\r
	Dim obj\r
	If vpmIsArray(aObj1) Then\r
		If IsArray(aObj1(0)) Then\r
			For Each obj In aObj1(0) : vpmToggleObj obj, aEnabled	  : Next\r
			For Each obj In aObj1(1) : vpmToggleObj obj, Not aEnabled : Next\r
		Else\r
			For Each obj In aObj1	 : vpmToggleObj obj, aEnabled	  : Next\r
		End If\r
	ElseIf Not aObj1 Is Nothing Then\r
		vpmToggleObj aObj1, aEnabled\r
	End If\r
	If vpmIsArray(aObj2) Then\r
		If IsArray(aObj2(0)) Then\r
			For Each obj In aObj2(0) : vpmToggleObj obj, Not aEnabled : Next\r
			For Each obj In aObj2(1) : vpmToggleObj obj, aEnabled	  : Next\r
		Else\r
			For Each obj In aObj2	 : vpmToggleObj obj, Not aEnabled : Next\r
		End If\r
	ElseIf Not aObj2 Is Nothing Then\r
		vpmToggleObj aObj2, Not aEnabled\r
	End If\r
	vpmPlaySound aEnabled, aSound\r
End Sub\r
\r
'\r
' Stubs to allow older games to still work\r
' These will be removed one day\r
'\r
Sub SolFlipper(f1,f2,e) : vpmSolFlipper f1,f2,e : End Sub\r
Sub SolDiverter(d,s,e) : vpmSolDiverter d,s,e : End Sub\r
Sub SolSound(s,e) : vpmSolSound s,e : End Sub\r
Sub Flasher(f,e) : vpmFlasher f,e : End Sub\r
Sub SolMagnet(m,e) : vpmSolMagnet m,e : End Sub\r
Sub SolAutoPlunger(p,e) : vpmSolAutoPlunger p,0,e : End Sub\r
Function KeyDownHandler(ByVal k) : KeyDownHandler = vpmKeyDown(k) : End Function\r
Function KeyUpHandler(ByVal k) : KeyUpHandler = vpmKeyUp(k) : End Function\r
Function KeyName(ByVal k) : KeyName = vpmKeyName(k) : End Function\r
Sub vpmSolMagnet(m,e) : m.Enabled = e : If Not e Then m.Kick 180,1 : End If : End Sub\r
Dim vpmBallImage : vpmBallImage = Empty ' Default ball properties\r
Dim vpmBallColour\r
\r
'-- Flipper solenoids (all games)\r
Const sLRFlipper = 46\r
Const sLLFlipper = 48\r
Const sURFlipper = 34\r
Const sULFlipper = 36\r
\r
' Convert keycode to readable string\r
Private keyNames1, keyNames2\r
keyNames1 = Array("Escape","1","2","3","4","5","6","7","8","9","0","Minus '-'",_\r
"Equals '='","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","[","]",_\r
"Enter","Left Ctrl","A","S","D","F","G","H","J","K","L",";","'","\`","Left Shift",_\r
"\\","Z","X","C","V","B","N","M",",",".","/","Right Shift","*","Left Menu","Space",_\r
"Caps Lock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","NumLock","ScrlLock",_\r
"Numpad 7","Numpad 8","Numpad 9","Numpad -","Numpad 4","Numpad 5","Numpad 6",_\r
"Numpad +","Numpad 1","Numpad 2","Numpad 3","Numpad 0","Numpad .","?","?","?",_\r
"F11","F12","F13","F14","F15")\r
keyNames2 = Array("Pause","?","Home","Up","PageUp","?","Left","?","Right","?",_\r
"End","Down","PageDown","Insert","Delete")\r
\r
Function vpmKeyName(ByVal aKeycode)\r
	If aKeyCode-1 <= UBound(keyNames1) Then\r
		vpmKeyName = keyNames1(aKeyCode-1)\r
	ElseIf aKeyCode >= 197 And aKeyCode <= 211 Then\r
		vpmKeyName = keyNames2(aKeyCode-197)\r
	ElseIf aKeyCode = 184 Then\r
		vpmKeyName = "R.Alt"\r
	Else\r
		vpmKeyName = "?"\r
	End If\r
End Function\r
\r
Private vpmSystemHelp\r
Private Sub vpmShowHelp\r
	' With the PinMAME plugin most listed keys do not apply (the VPM dialogs are gone and\r
	' action mapped keys cannot be resolved to a key name); the in-game UI shows the\r
	' actual key bindings instead. On standalone there also is no message box to show.\r
	If IsPluginPinMAME Then\r
		MsgBox "The key help is not available with the PinMAME plugin, the in-game UI shows the actual key bindings"\r
		Exit Sub\r
	End If\r
	Dim szKeyMsg\r
	szKeyMsg = "The following keys are defined: "				   & vbNewLine &_\r
			   "(American keyboard layout)"						   & vbNewLine &_\r
		vbNewLine & "Visual PinMAME keys:"						   & vbNewLine &_\r
		vpmKeyName(keyShowOpts)	  & vbTab & "Game options..."	   & vbNewLine &_\r
		vpmKeyName(keyShowKeys)	  & vbTab & "Keyboard settings..." & vbNewLine &_\r
		vpmKeyName(keyReset)	  & vbTab & "Reset emulation"	   & vbNewLine &_\r
		vpmKeyName(keyFrame)	  & vbTab & "Toggle Display lock"  & vbNewLine &_\r
		vpmKeyName(keyDoubleSize) & vbTab & "Toggle Display size"  & vbNewLine\r
	If IsObject(vpmShowDips) Then\r
		szKeyMsg = szKeyMsg & vpmKeyName(keyShowDips) & vbTab & "Show DIP Switch / Option Menu" & vbNewLine\r
	End If\r
	If IsObject(vpmTrough) Then\r
		szKeyMsg = szKeyMsg & vpmKeyName(keyAddBall) & vbTab & "Add / Remove Ball From Table" & vbNewLine\r
	End If\r
	szKeyMsg = szKeyMsg & vpmKeyName(keyBangBack) & vbTab & "Bang Back" & vbNewLine &_\r
		vbNewLine & vpmSystemHelp & vbNewLine\r
	If ExtraKeyHelp <> "" Then\r
		szKeyMsg = szKeyMsg & vbNewLine & "Game Specific keys:" &_\r
			vbNewLine & ExtraKeyHelp & vbNewLine\r
	End If\r
	szKeyMsg = szKeyMsg & vbNewLine & "Visual Pinball keys:"	 & vbNewLine &_\r
		vpmKeyName(LeftFlipperKey)	& vbTab & "Left Flipper"	 & vbNewLine &_\r
		vpmKeyName(RightFlipperKey) & vbTab & "Right Flipper"	 & vbNewLine &_\r
		vpmKeyName(LeftMagnaSave)	& vbTab & "Left Magna Save"	 & vbNewLine &_\r
		vpmKeyName(RightMagnaSave)	& vbTab & "Right Magna Save" & vbNewLine &_\r
		vpmKeyName(PlungerKey)		& vbTab & "Launch Ball"		 & vbNewLine &_\r
		vpmKeyName(StartGameKey)	& vbTab & "Start Button"	 & vbNewLine &_\r
		vpmKeyName(AddCreditKey)	& vbTab & "Insert Coin 1"	 & vbNewLine &_\r
		vpmKeyName(AddCreditKey2)	& vbTab & "Insert Coin 2"	 & vbNewLine &_\r
		vpmKeyName(ExitGame)		& vbTab & "Exit Game"		 & vbNewLine &_\r
		vpmKeyName(MechanicalTilt)	& vbTab & "Mechanical Tilt"	 & vbNewLine &_\r
		vpmKeyName(LeftTiltKey)		& vbTab & "Nudge from Left"	 & vbNewLine &_\r
		vpmKeyName(RightTiltKey)	& vbTab & "Nudge from Right" & vbNewLine &_\r
		vpmKeyName(CenterTiltKey)	& vbTab & "Nudge forward"	 & vbNewLine\r
	If vpmVPVer >= 10800 Then ShowCursor = True\r
	MsgBox szKeyMsg,vbOkOnly + vbMsgBoxSetForeground,"Keyboard Settings..."\r
	If vpmVPVer >= 10800 Then ShowCursor = False\r
End Sub\r
\r
Private Sub vpmShowOptions\r
	If vpmVPVer >= 10800 Then ShowCursor = True\r
	Controller.ShowOptsDialog GetPlayerHWnd\r
	If vpmVPVer >= 10800 Then ShowCursor = False\r
End Sub\r
\r
'added thanks to Koadic\r
Sub NVOffset(version) ' version 2 for dB2S compatibility\r
	' Relies on the classic VPinMAME registry configuration and nvram folder\r
	If IsPluginPinMAME Then\r
		MsgBox "NVOffset is not supported with the PinMAME plugin. Similar functionality can be achieved by putting the rom in pinmame/roms next to the table file."\r
		Exit Sub\r
	End If\r
	Dim check,nvcheck,v,vv,nvpath,rom\r
	Set check = CreateObject("Scripting.FileSystemObject")\r
	Set nvcheck = CreateObject("WScript.Shell")\r
	nvpath = nvcheck.RegRead("HKCU\\Software\\Freeware\\Visual PinMame\\globals\\nvram_directory") & "\\"\r
	If Controller.Version >= 03050000 Then\r
		rom = controller.ROMName\r
	Else\r
		rom = controller.GameName\r
	End If\r
	For v=1 to 32 'check up to 32 possible versions using same rom, it's overkill, but could be changed to a lower number (requested for 32 NFL variations)\r
		If check.FileExists(nvpath & rom & " v" & v & ".txt") Then vv=v : exit For : End If\r
		vv=0\r
	Next\r
	If vv=version or version = 0 Then\r
		Exit Sub\r
	ElseIf vv=0 Then\r
		check.CreateTextFile nvpath & rom & " v" & version & ".txt", True\r
		Exit Sub\r
	Else\r
		check.moveFile nvpath & rom & " v" & vv & ".txt", nvpath & rom & " v" & version & ".txt"\r
		If check.FileExists(nvpath & rom & ".nv") Then\r
			check.copyFile nvpath & rom & ".nv", nvpath & rom & " v" & vv & ".nv", True\r
		End If\r
		If check.FileExists(nvpath & rom & " v" & version & ".nv") Then\r
			check.copyFile nvpath & rom & " v" & version & ".nv", nvpath & rom & ".nv", True\r
		End If\r
	End If\r
End Sub\r
\r
Sub VPMVol\r
	' PinMAME plugin streams its sound through VPX, using VPX mixing and therefore volume settings\r
	if IsPluginPinMAME Then Exit Sub\r
	Dim VolPM,VolPMNew\r
	VolPM = Controller.Games(controller.GameName).Settings.Value("volume")\r
	VolPMNew = InputBox ("Enter desired VPinMAME Volume Level (-32 to 0)","VPinMAME Volume",VolPM)\r
	If VolPMNew = "" Then Exit Sub\r
	If VolPMNew <= 0 and VolPMNew >= -32 Then\r
		Controller.Games(controller.GameName).Settings.Value("volume")= round(VolPMNew)\r
		msgbox "The Visual PinMAME Global Volume is now set to " & round(VolPMNew) & "db." & VbNewLine & VbNewLine & "Please reset Visual PinMAME (F3) to apply."\r
	Else\r
		msgbox "Entered value is out of range. Entry must be in the range of negative 32 to 0." & VbNewLine & VbNewLine & "Visual PinMAME Global Volume will remain set at " & VolPM & "."\r
	End If\r
End Sub\r
\r
' Simple min/max functions\r
Function vpMin(a, b) : If a < b Then vpMin = a Else vpMin = b : End If : End Function\r
Function vpMax(a, b) : If a > b Then vpMax = a Else vpMax = b : End If : End Function\r
\r
LoadScript("ledcontrol.vbs"):Err.Clear	' Checks for existance of ledcontrol.vbs and loads it if found, if found but no ledwiz installed, clear error to allow loading of table\r
\r
LoadScript("GlobalPlugIn.vbs")			' Checks for existance of GlobalPlugIn.vbs and loads it if found, useful for adding\r
										' custom scripting that can be used for all tables instead of altering the core.vbs\r
\r
Dim swidth, sheight, VP8sound, VP9sound\r
swidth = 950\r
sheight = 2100\r
VP8sound = False\r
VP9sound = False\r
\r
On Error Resume Next\r
Err.Clear\r
If Version > 0 then\r
	If Version >= 10700 then 'no ActiveTable call until 10.7\r
		Dim soundtable\r
		Set soundtable = ActiveTable\r
		swidth = soundtable.Width\r
		sheight = soundtable.Height\r
	End If\r
	If Version < 10400 then 'no front/rear fade until 10.4\r
		VP9sound = True\r
	End If\r
End If\r
\r
If Err.Number <> 0 then\r
	If VPBuildVersion >= 920 and VPBuildVersion <= 999 then 'no pan parameter in PlaySound until 9.2\r
		VP9sound = True\r
	Else\r
		VP8sound = True\r
	End If\r
	swidth = 950\r
	sheight = 2100\r
	Err.Clear\r
End If\r
On Error Goto 0\r
\r
Private Function CoreAudioPan(xpar) 'calculates the audio pan of an table object using the actual table width or 950 for older versions\r
	If xpar < 0 then\r
		CoreAudioPan = -1.\r
	Else\r
		If xpar > swidth then\r
			CoreAudioPan = 1.\r
		Else\r
			CoreAudioPan = (xpar*2./swidth)-1.\r
		End If\r
	End If\r
End Function\r
\r
Private Function CoreAudioFade(ypar) 'calculates the audio fade of an table object using the actual table length or 2100 for older versions\r
	If ypar < 0 then\r
		CoreAudioFade = -1.\r
	Else\r
		If ypar > sheight then\r
			CoreAudioFade = 1.\r
		Else\r
			CoreAudioFade = (ypar*2./sheight)-1.\r
		End If\r
	End If\r
End Function\r
\r
Private Sub CorePlaySoundAt(soundName, at)\r
	If IsEmpty(soundName) Then Exit Sub\r
	If IsObject(at) Then\r
		If VP8sound then\r
			PlaySound soundName\r
		ElseIf VP9sound then\r
			PlaySound soundName, 1, 1, CoreAudioPan(at.x), 0\r
		Else\r
			PlaySound soundName, 1, 1, CoreAudioPan(at.x), 0, 0, False, False, CoreAudioFade(at.y)\r
		End If\r
	Else\r
		PlaySound soundName\r
	End If\r
End Sub\r
`,_e=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' DE Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 23\r
' Cabinet switches\r
Const swBlack        = -7\r
Const swGreen        = -6\r
Const swTilt         =  1\r
Const swBallRollTilt =  2\r
Const swStartButton  =  3\r
Const swCoin1        =  4\r
Const swCoin2        =  5\r
Const swCoin3        =  6\r
Const swSlamTilt     =  7\r
\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 86\r
Const swULFlip       = 88\r
\r
' Help Window\r
vpmSystemHelp = "Data East keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyBlack)        & vbTab & "Black button"   & vbNewLine &_\r
  vpmKeyName(keyGreen)        & vbTab & "Green button"   & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub deShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm  80, 0, "Option Menu"\r
		.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("deShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton)  = True\r
			Case keyGreen        .Switch(swGreen)        = Not .Switch(swGreen)\r
			Case keyBlack        .Switch(swBlack)        = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton)  = False\r
			Case keyBlack        .Switch(swBlack)        = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,De=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' DE Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 23\r
' Cabinet switches\r
Const swBlack        = -7\r
Const swGreen        = -6\r
Const swTilt         =  1\r
Const swBallRollTilt =  2\r
Const swStartButton  =  3\r
Const swCoin1        =  4\r
Const swCoin2        =  5\r
Const swCoin3        =  6\r
Const swSlamTilt     =  7\r
\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 81\r
Const swULFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Data East keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyBlack)        & vbTab & "Black button"   & vbNewLine &_\r
  vpmKeyName(keyGreen)        & vbTab & "Green button"   & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub de2ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm  80, 0, "Option Menu"\r
		.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("de2ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton)  = True\r
			Case keyGreen        .Switch(swGreen)        = True\r
			Case keyBlack        .Switch(swBlack)        = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton)  = False\r
			Case keyGreen        .Switch(swGreen)        = False\r
			Case keyBlack        .Switch(swBlack)        = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ie=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' GTS1 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 17\r
' Cabinet switches\r
Const swTest        = 00\r
Const swCoin1       = 01\r
Const swCoin2       = 02\r
Const swStartButton = 03\r
Const swTilt        = 04\r
Const swSlamTilt    = 76\r
Const swSwitch25    = 56\r
Const swLRFlip      = 82\r
Const swLLFlip      = 84\r
Const swURFlip      = 81\r
Const swULFlip      = 83\r
\r
' Help Window\r
vpmSystemHelp = "Gottlieb System 1 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keySelfTest)     & vbTab & "Test"           & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub GTS1ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 280, 245, "DIP Switches"\r
			.AddFrame  0,0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("GTS1ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin ' dupe of keyInsertCoin1 as only 2 coin slots\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin ' dto.\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swTest)        = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case keyCPUDiag      .Switch(swSwitch25)    = True\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swTest)        = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			case keyCPUDiag      .Switch(swSwitch25)    = False\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ee=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' GTS3 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 32\r
' FrontDoor switches\r
Const swCoin1       = 00\r
Const swCoin2       = 01\r
Const swCoin3       = 02\r
Const swCoin4       = 03\r
Const swDiagnostic  = -8\r
Const swTilt        = -7\r
Const swSlamTilt    = -6\r
\r
Const swLRFlip      = 141\r
Const swLLFlip      = 143\r
Const swURFlip      = 145\r
Const swULFlip      = 147\r
\r
\r
' Forgot these in earlier vbs files, some tables define it after loading this file, so delay initializations\r
Private swGTSInitialized, swStartButtonX : swGTSInitialized = False\r
\r
\r
' Help Window\r
vpmSystemHelp = "Gottlieb System 3 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4)  & vbTab & "Insert Coin #4" & vbNewLine &_\r
  vpmKeyName(keySelfTest)     & vbTab & "Diagnostic"     & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Options Menu (No Dips)\r
Private Sub gts3ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm  80, 0, "Option Menu"\r
		.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("gts3ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	If Not swGTSInitialized Then\r
		swGTSInitialized = True\r
		On Error Resume Next\r
		If swStartButton = 4 Or Err Then swStartButtonX = 4 Else swStartButtonX = swStartButton\r
		On Error Goto 0\r
	End If\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin4'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButtonX) = True\r
			Case keySelfTest     .Switch(swDiagnostic)  = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButtonX) = False\r
			Case keySelfTest     .Switch(swDiagnostic)  = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ge=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' IDSA  Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 10\r
' Cabinet switches\r
'Const swTilt        = 10 'ok V1\r
'Const swBallRollTilt= 10 'ok V1\r
Const swStartButton  = 7  'ok\r
'Const swSlamTilt    = 10 'ok V1\r
Const swCoin1        = 4  'ok\r
Const swCoin2        = 5  'ok\r
Const swCoin3        = 6  'ok\r
\r
Const swLRFlip       = 82 'ok\r
Const swLLFlip       = 84 'ok\r
\r
' Help Window\r
vpmSystemHelp = "IDSA keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub IDSADips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("IDSADips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
'			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
'			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Pe=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Inder Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 5\r
' Cabinet switches\r
Const swCoin1        = 51\r
Const swCoin2        = 50\r
Const swCoin3        = 50\r
Const swTilt         = 53\r
Const swStartButton  = 54\r
Const swSelfTest     = 57\r
Const swCPUDiag      = 56\r
Const swSoundDiag    = 55\r
Const swLRFlip       = 151\r
Const swLLFlip       = 153\r
Const swURFlip       = 152\r
Const swULFlip       = 154\r
\r
' Help Window\r
vpmSystemHelp = "Inder MPUx00 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Test function"    & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Bookkeep function"& vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Reset audits"\r
'  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub InderShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0,0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",32768,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("InderShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ke=`'Last Updated in VBS v3.59\r
'Similar to inder.vbs except for swCoin2-4\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Inder Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 5\r
' Cabinet switches\r
Const swCoin1        = 51\r
Const swCoin2        = 50\r
Const swCoin3        = 50\r
Const swCoin4        = 50\r
Const swTilt         = 53\r
Const swStartButton  = 54\r
Const swSelfTest     = 57\r
Const swCPUDiag      = 56\r
Const swSoundDiag    = 55\r
Const swLRFlip       = 151\r
Const swLLFlip       = 153\r
\r
' Help Window\r
vpmSystemHelp = "Inder MPUx00 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4) & vbTab & "Insert Coin #4"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Test function"    & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Bookkeep function"& vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Reset audits"\r
'  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub InderShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0,0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",32768,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("InderShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin4'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ke=`'Last Updated in VBS v3.59\r
'Similar to inder.vbs except for some cabinet switches and the coin switch handling\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Inder Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 9\r
' Cabinet switches\r
Const swCoin1        = 52\r
Const swCoin2        = 51\r
Const swCoin3        = 50\r
Const swTilt         = 56\r
Const swStartButton  = 53\r
'Const swSelfTest     = 57\r
'Const swCPUDiag      = 56\r
'Const swSoundDiag    = 55\r
Const swLRFlip       = 151\r
Const swLLFlip       = 153\r
\r
' Help Window\r
vpmSystemHelp = "Inder MPUx00 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Test function"    & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Bookkeep function"& vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Reset audits"\r
'  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub InderShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",32768,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("InderShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			'Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			'Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			'Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin1  .Switch(swCoin1) = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  .Switch(swCoin2) = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  .Switch(swCoin3) = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case keyInsertCoin1  .Switch(swCoin1) = False\r
			Case keyInsertCoin2  .Switch(swCoin2) = False\r
			Case keyInsertCoin3  .Switch(swCoin3) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Le=`'Last Updated in VBS v3.59\r
'Similar to inder.vbs except for some cabinet switches and the coin switch handling\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Inder Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 9\r
' Cabinet switches\r
Const swCoin1        = 52\r
Const swCoin2        = 51\r
Const swCoin3        = 50\r
Const swTilt         = 56\r
Const swStartButton  = 53\r
'Const swSelfTest     = 57\r
'Const swCPUDiag      = 56\r
'Const swSoundDiag    = 55\r
Const swLRFlip       = 151\r
Const swLLFlip       = 153\r
\r
' Help Window\r
vpmSystemHelp = "Inder MPUx00 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Test function"    & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Bookkeep function"& vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Reset audits"\r
'  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub InderShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("InderShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
\r
Sub ResetCoin\r
	With Controller\r
		.Switch(swCoin1) = True\r
		.Switch(swCoin2) = True\r
		.Switch(swCoin3) = True\r
		vpmTimer.AddTimer 750, "WaitCoin '"\r
	End With\r
End Sub\r
\r
Sub WaitCoin\r
	With Controller\r
		.Switch(swCoin1) = False\r
		.Switch(swCoin2) = False\r
		.Switch(swCoin3) = False\r
	End With\r
End Sub\r
\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			'Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			'Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			'Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin1  .Switch(swCoin1) = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin : vpmTimer.AddTimer 750, "WaitCoin '"\r
			Case keyInsertCoin2  .Switch(swCoin2) = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin : vpmTimer.AddTimer 750, "WaitCoin '"\r
			Case keyInsertCoin3  .Switch(swCoin3) = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin : vpmTimer.AddTimer 750, "WaitCoin '"\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			'Case keyInsertCoin1  .Switch(swCoin1) = False\r
			'Case keyInsertCoin2  .Switch(swCoin2) = False\r
			'Case keyInsertCoin3  .Switch(swCoin3) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset : ResetCoin\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ne=`'Last Updated in VBS v3.50\r
'Similar to Play4.vbs, except for swSelfTest switch missing\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Stargame Iron Balls\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 1\r
' Cabinet switches\r
Const swStartButton  = 7 'ok\r
Const swCoin1        = 1 'ok\r
Const swCoin2        = 2 'ok\r
Const swCoin3        = 3 'ok\r
Const swTilt         = 4 'ok\r
Const swBallRollTilt = 4 'ok\r
'Const swSlamTilt    = -4 'ok\r
\r
Const swLRFlip       = 102'ok\r
Const swLLFlip       = 104'ok\r
\r
' Help Window\r
vpmSystemHelp = "Iron Balls keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"\r
'  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) =True\r
'			Case keySlamDoorHit  .Switch(swSlamTilt)    =True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
'			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Be=`'Last Updated in VBS v3.58\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Joctronic Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 17\r
' Cabinet switches\r
Const swSelfTest     = 1\r
Const swTilt         = 86\r
Const swSlamTilt     = 86\r
Const swCoin3        = 85\r
Const swCoin2        = 82\r
Const swCoin1        = 81\r
Const swStartButton  = 84\r
\r
Const swLRFlip       = 87\r
Const swLLFlip       = 88\r
\r
' Help Window\r
vpmSystemHelp = "Joctronic keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"      & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub joctronicShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("joctronicShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,xe=`'Last Updated in VBS v3.36\r
\r
'First Added in VBS v3.20\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Peyper / Sonic Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 7\r
' Cabinet switches\r
Const swStartButton  = 29\r
Const swCoin1        = 26\r
Const swCoin2        = 27\r
Const swCoin3        = 28\r
Const swTilt         = 31\r
Const swSlamDoorHit  = 30\r
Const swLRFlip       = 81\r
Const swLLFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub juegosShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 300, "Juegos Populares switches"\r
			.AddFrame 0, 0, 80, "DIP switches",0,_\r
			  Array("Dip 0",&H00000800,"Dip 1",&H00000400,"Dip 2",&H00000200,"Dip 3",&H00000100,_\r
					"Dip 4",32768,     "Dip 5",&H00004000,"Dip 6",&H00002000,"Dip 7",&H00001000,_\r
					"Dip 8",&H00000008,"Dip 9",&H00000004,"Dip10",&H00000002,"Dip11",&H00000001,_\r
					"Dip12",&H00000080,"Dip13",&H00000040,"Dip14",&H00000020,"Dip15",&H00000010)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("juegosShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Re=`'Last Updated in VBS v3.36\r
\r
'First Added in VBS v3.20\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Peyper / Sonic Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 12\r
' Cabinet switches\r
Const swStartButton  = 48\r
Const swCoin1        = 2\r
Const swCoin2        = 3\r
Const swCoin3        = 4\r
Const swTilt         = 31\r
Const swSlamDoorHit  = 30\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub juegosShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 300, "Juegos Populares switches"\r
			.AddFrame 0, 0, 80, "DIP switches",0,_\r
			  Array("Dip 0",&H00000800,"Dip 1",&H00000400,"Dip 2",&H00000200,"Dip 3",&H00000100,_\r
					"Dip 4",32768,     "Dip 5",&H00004000,"Dip 6",&H00002000,"Dip 7",&H00001000,_\r
					"Dip 8",&H00000008,"Dip 9",&H00000004,"Dip10",&H00000002,"Dip11",&H00000001,_\r
					"Dip12",&H00000080,"Dip13",&H00000040,"Dip14",&H00000020,"Dip15",&H00000010)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("juegosShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Oe=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Jac Van Ham Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 17\r
' Cabinet switches\r
Const swSelfTest     =  1\r
Const swTilt         =  3\r
Const swSlamTilt     =  4\r
Const swCoin3        = -7\r
Const swCoin2        = -6\r
Const swCoin1        = -5\r
Const swStartButton  =  2\r
\r
Const swLRFlip       = 102\r
Const swLLFlip       = 104\r
\r
' Help Window\r
vpmSystemHelp = "Jac Van Ham keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"      & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub jvhShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("jvhShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Me=`'Last Updated in VBS v3.50\r
'Based on Peyper.vbs, but different switches\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Peyper / Sonic Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 17\r
' Cabinet switches\r
Const swStartButton  = 37 'ok\r
Const swCoin1        = 38 'ok\r
Const swCoin2        = 39 'ok\r
Const swCoin3        = 38 'avoid missing Coin Switch mappings\r
Const swTilt         = 36 'ok\r
'Const swSlamDoorHit  =\r
Const swLRFlip       = 82 'ok 34\r
Const swLLFlip       = 84 'ok 35\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub peyperShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 300, "Peyper / Sonic switches"\r
			.AddFrame 0, 0, 80, "DIP switches", 0,_\r
			  Array("Dip 0",&H00000800,"Dip 1",&H00000400,"Dip 2",&H00000200,"Dip 3",&H00000100,_\r
			        "Dip 4",32768,     "Dip 5",&H00004000,"Dip 6",&H00002000,"Dip 7",&H00001000,_\r
			        "Dip 8",&H00000008,"Dip 9",&H00000004,"Dip10",&H00000002,"Dip11",&H00000001,_\r
			        "Dip12",&H00000080,"Dip13",&H00000040,"Dip14",&H00000020,"Dip15",&H00000010)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("peyperShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ae=`'Last Updated in VBS v3.50\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' MAC Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 10\r
' Cabinet switches\r
Const swStartButton   = 1 'ok\r
Const swCoin1         = 2 'ok\r
Const swCoin2         = 3 'ok\r
Const swCoin3         = 2 'avoid missing Coin Switch mappings\r
Const swTilt          = 4 'ok\r
Const swBallRollTilt  = 4 'ok\r
Const swSlamTilt      = 5 'ok\r
\r
Const swLRFlip        = 82'ok\r
Const swLLFlip        = 84'ok\r
\r
' Help Window\r
vpmSystemHelp = "MAC Keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub MACDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips=GetRef("MACDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) =True\r
'			Case keySlamDoorHit  .Switch(swSlamTilt)    =True\r
			Case keyBangBack     vpmNudge.DoNudge   0,6\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
'			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ue=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Mr. Game Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid  = 25\r
' Cabinet switches\r
Const swAdvanceTest   =  0\r
Const swReturnTest    =  1\r
Const swCreditService =  3\r
Const swCoin1         =  4\r
Const swCoin2         =  5\r
Const swCoin3         =  6\r
Const swStartButton   =  9\r
\r
Const swLRFlip        = 81\r
Const swLLFlip        = 83\r
\r
' Help Window\r
vpmSystemHelp = "Mr. Game keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4) & vbTab & "Service Credit" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Advance Test"   & vbNewLine &_\r
  vpmKeyName(keyAdvance)     & vbTab & "Return Test"\r
\r
' Options Menu (No Dips)\r
Private Sub mrgameShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm  80, 0, "Option Menu"\r
			.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("mrgameShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  .Switch(swCoin1)  = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  .Switch(swCoin2)  = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  .Switch(swCoin3)  = True : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.PulseSw swCreditService : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     vpmTimer.PulseSw swAdvanceTest\r
			Case keyAdvance      vpmTimer.PulseSw swReturnTest\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case keyInsertCoin1  .Switch(swCoin1)  = False : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  .Switch(swCoin2)  = False : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  .Switch(swCoin3)  = False : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,He=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Nuova Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 19\r
' Cabinet switches\r
Const swCoin1        = 9\r
Const swCoin2        = 10\r
Const swCoin3        = 11\r
Const swTilt         = 7\r
Const swStartButton  = 6\r
Const swSlamTilt     = 16\r
Const swSelfTest     = -7 '55\r
Const swCPUDiag      = -6 '56\r
Const swSoundDiag    = 0 '57\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
\r
' Help Window\r
vpmSystemHelp = "Nuova keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"      & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub NuovaShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",32768,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("NuovaShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keySlamDoorHit  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swSlamTilt"\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ve=`'Last Updated in VBS v3.36\r
\r
'First Added in VBS v3.20\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Peyper / Sonic Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 17\r
' Cabinet switches\r
Const swStartButton  = -4\r
Const swCoin1        = -3\r
Const swCoin2        = -1\r
Const swCoin3        = -2\r
Const swTilt         = -5\r
Const swSlamDoorHit  = -6\r
Const swLRFlip       = 81\r
Const swLLFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub peyperShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 300,"Peyper / Sonic switches"\r
			.AddFrame 0, 0, 80, "DIP switches",0,_\r
			  Array("Dip 0",&H00000800,"Dip 1",&H00000400,"Dip 2",&H00000200,"Dip 3",&H00000100,_\r
			        "Dip 4",32768,     "Dip 5",&H00004000,"Dip 6",&H00002000,"Dip 7",&H00001000,_\r
			        "Dip 8",&H00000008,"Dip 9",&H00000004,"Dip10",&H00000002,"Dip11",&H00000001,_\r
			        "Dip12",&H00000080,"Dip13",&H00000040,"Dip14",&H00000020,"Dip15",&H00000010)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("peyperShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ge=`'Playbar for Cobra, working from PinMAME v3.7\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Nuova Data\r
'-------------------------\r
' Flipper Solenoid\r
'Const GameOnSolenoid = 19\r
' Cabinet switches\r
Const swCoin1        = 81\r
Const swCoin2        = 82\r
Const swCoin3        = 83\r
Const swTilt         = 84\r
Const swStartButton  = 87\r
'Const swSlamTilt     = 84\r
Const swSelfTest     = 85\r
Const swCPUDiag      = 86\r
Const swSoundDiag    = 0\r
Const swLRFlip       = 112\r
Const swLLFlip       = 114\r
\r
' Help Window\r
vpmSystemHelp = "Nuova keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"      & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu - not sure, if there are some DIPs on the Playbar machine...\r
Private Sub NuovaShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",32768,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("NuovaShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keySlamDoorHit  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swSlamTilt"\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,We=`'Last Updated in VBS v3.61\r
' Modified by Wiesshund to address the staged flips used in a few tables, such as Grand Lizard.\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' S11 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 23\r
' Cabinet switches\r
Const swAdvance      = -7\r
Const swUpDown       = -6\r
Const swCPUDiag      = -5\r
Const swSoundDiag    = -4\r
Const swTilt         =  1\r
Const swBallRollTilt =  2\r
Const swStartButton  =  3\r
Const swCoin3        =  4\r
Const swCoin2        =  5\r
Const swCoin1        =  6\r
Const swSlamTilt     =  7\r
Const swHiScoreReset =  8\r
\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 81\r
Const swULFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Williams System 9/11 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keyHiscoreReset) & vbTab & "Hiscore Reset"    & vbNewLine &_\r
  vpmKeyName(keyAdvance)      & vbTab & "Advance"          & vbNewLine &_\r
  vpmKeyName(keyUpDown)       & vbTab & "Up/Down"          & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)      & vbTab & "Cpu Diagnostic"   & vbNewLine &_\r
  vpmKeyName(keySoundDiag)    & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub s11ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 45, "DIP Switches"\r
			.AddChk  0,0,100, Array("Germany", &H0001)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("s11ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton)  = True\r
			Case keyUpDown       .Switch(swUpDown)       = Not .Switch(swUpDown)\r
			Case keyAdvance      .Switch(swAdvance)      = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)      = True\r
			Case keySoundDiag    .Switch(swSoundDiag)    = True\r
			Case keyHiscoreReset .Switch(swHiscoreReset) = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton)  = False\r
			Case keyAdvance      .Switch(swAdvance)      = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)      = False\r
			Case keySoundDiag    .Switch(swSoundDiag)    = False\r
			Case keyHiscoreReset .Switch(swHiscoreReset) = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,je=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' S4 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 23\r
' Cabinet switches\r
Const swAdvance      = -7\r
Const swUpDown       = -6\r
Const swCPUDiag      = -5\r
Const swSoundDiag    = -4 ' Seems to start sounds anyway when activated\r
Const swEnter        = -3 ' Incorrect & Unknown Currently\r
Const swTilt         =  1\r
Const swBallRollTilt =  2\r
Const swStartButton  =  3\r
Const swCoin3        =  4\r
Const swCoin2        =  5\r
Const swCoin1        =  6\r
Const swSlamTilt     =  7\r
Const swHiScoreReset =  8\r
\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 81\r
Const swULFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Williams System 3/4 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyHiscoreReset) & vbTab & "Hiscore Reset"  & vbNewLine &_\r
  vpmKeyName(keyAdvance)      & vbTab & "Advance"        & vbNewLine &_\r
  vpmKeyName(keyUpDown)       & vbTab & "Up/Down"        & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)      & vbTab & "Cpu Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub s4ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm  80, 290, "DIP Switches"\r
			.AddFrame  0, 0, 100,"Sound", 0,_\r
			  Array("Dip 1",&H00000001,"Synth Sound",&H00000002)\r
			.AddFrame  0,50, 100,"Function / Data", 0,_\r
				Array("DIP F8 (1)" ,&H00000100,"DIP F7 (2)",&H00000200,"DIP F6 (4)",&H00000400,"DIP F5 (8)",&H00000800,_\r
				      "DIP F4 (16)",&H00001000,"DIP F3",&H00002000,"DIP F2",&H00004000,"DIP F1",32768,_\r
				      "DIP D8",&H00010000,"DIP D7",&H00020000,"DIP D6",&H00040000,"DIP D5",&H00080000,_\r
				      "DIP D4",&H00100000,"DIP D3",&H00200000,"DIP D2",&H00400000,"DIP D1",&H00800000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("s4ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton)  = True\r
			Case keyUpDown       .Switch(swUpDown)       = Not .Switch(swUpDown)\r
			Case keyAdvance      .Switch(swAdvance)      = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)      = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = True\r
			Case keyHiscoreReset .Switch(swHiScoreReset) = True\r
			Case keyEnter        .Switch(swEnter)        = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton)  = False\r
			Case keyAdvance      .Switch(swAdvance)      = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)      = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = False\r
			Case keyHiscoreReset .Switch(swHiScoreReset) = False\r
			Case keyEnter        .Switch(swEnter)        = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ze=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' S6 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 23\r
' Cabinet switches\r
Const swAdvance      = -7\r
Const swUpDown       = -6\r
Const swCPUDiag      = -5\r
Const swSoundDiag    = -4\r
Const swMasterEnter  = -3\r
Const swTilt         =  1\r
Const swBallRollTilt =  2\r
Const swStartButton  =  3\r
Const swCoin3        =  4\r
Const swCoin2        =  5\r
Const swCoin1        =  6\r
Const swSlamTilt     =  7\r
Const swHiScoreReset =  8\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 81\r
Const swULFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Williams System 6 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keyHiscoreReset) & vbTab & "Hiscore Reset"    & vbNewLine &_\r
  vpmKeyName(keyAdvance)      & vbTab & "Advance"          & vbNewLine &_\r
  vpmKeyName(keyUpDown)       & vbTab & "Up/Down"          & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)      & vbTab & "Cpu Diagnostic"   & vbNewLine &_\r
  vpmKeyName(keySoundDiag)    & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keyMasterEnter)  & vbTab & "Master Enter"     & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub s6ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm  80, 290, "DIP Switches"\r
			.AddFrame 0, 0, 60, "Sound", 0,_\r
			  Array("DIP 1",&H00000001,"DIP 2",&H00000002)\r
			.AddFrame  0,45, 60,"Game", 0,_\r
				Array("DIP M8",&H00000100,"DIP M7",&H00000200,"DIP M6",&H00000400,"DIP M5",&H00000800,_\r
				      "DIP M4",&H00001000,"DIP M3",&H00002000,"DIP M2",&H00004000,"DIP M1",32768,_\r
				      "DIP D8",&H00010000,"DIP D7",&H00020000,"DIP D6",&H00040000,"DIP D5",&H00080000,_\r
				      "DIP D4",&H00100000,"DIP D3",&H00200000,"DIP D2",&H00400000,"DIP D1",&H00800000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("s6ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton)  = True\r
			Case keyUpDown       .Switch(swUpDown)       = Not .Switch(swUpDown)\r
			Case keyAdvance      .Switch(swAdvance)      = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)      = True\r
			Case keySoundDiag    .Switch(swSoundDiag)    = True\r
			Case keyMasterEnter  .Switch(swMasterEnter)  = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)     = True\r
			Case keyHiscoreReset .Switch(swHiScoreReset) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton)   = False\r
			Case keyAdvance      .Switch(swAdvance)       = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)       = False\r
			Case keySoundDiag    .Switch(swSoundDiag)     = False\r
			Case keyMasterEnter  .Switch(swMasterEnter)   = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)      = False\r
			Case keyHiscoreReset .Switch(swHiScoreReset)  = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Xe=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' S7 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 25\r
' Cabinet switches\r
Const swAdvance      = -7\r
Const swUpDown       = -6\r
Const swCPUDiag      = -5\r
Const swSoundDiag    = -4\r
Const swTilt         =  1\r
Const swBallRollTilt =  2\r
Const swStartButton  =  3\r
Const swCoin3        =  4\r
Const swCoin2        =  5\r
Const swCoin1        =  6\r
Const swSlamTilt     =  7\r
Const swHSReset      =  8\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 83\r
Const swULFlip       = 81\r
\r
' Help Window\r
vpmSystemHelp = "Williams System 7 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"      & vbNewLine &_\r
  vpmKeyName(keyAdvance)      & vbTab & "Advance"        & vbNewLine &_\r
  vpmKeyName(keyUpDown)       & vbTab & "Up/Down"        & vbNewLine &_\r
  vpmKeyName(keyMasterEnter)  & vbTab & "Master Enter"   & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)      & vbTab & "Cpu Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySoundDiag)    & vbTab & "Sound Diagnostic"\r
\r
' Dip Switch / Options Menu\r
Private Sub s7ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm  80, 60, "DIP Switches"\r
			.AddFrame 0, 0, 60, "Sound", 0,_\r
			   Array("DIP 1",&H00000001,"DIP 2",&H00000002)\r
			.AddFrame 0,45, 60,"Game", 0,_\r
			   Array("DIP M8",&H00000100,"DIP M7",&H00000200,"DIP M6",&H00000400,"DIP M5",&H00000800,_\r
			         "DIP M4",&H00001000,"DIP M3",&H00002000,"DIP M2",&H00004000,"DIP M1",32768,_\r
			         "DIP D8",&H00010000,"DIP D7",&H00020000,"DIP D6",&H00040000,"DIP D5",&H00080000,_\r
			         "DIP D4",&H00100000,"DIP D3",&H00200000,"DIP D2",&H00400000,"DIP D1",&H00800000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("s7ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyHiScoreReset .Switch(swHSReset)     = True\r
			Case keyUpDown       .Switch(swUpDown)      = Not .Switch(swUpDown)\r
			Case keyAdvance      .Switch(swAdvance)     = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyMasterEnter  .Switch(swMasterEnter) = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyHiScoreReset .Switch(swHSReset)     = False\r
			Case keyAdvance      .Switch(swAdvance)     = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyMasterEnter  .Switch(swMasterEnter) = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ye=`'Last Updated in VBS v3.58\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Williams S8 Data for Still Crazy\r
'-------------------------\r
' Cabinet switches\r
Const swAdvance     = -7\r
Const swUpDown      = -6\r
Const swCPUDiag     = -5\r
Const swSoundDiag   = -4\r
Const swTilt        =  1\r
Const swCoin1       =  2\r
Const swCoin2       =  2\r
Const swCoin3       =  2\r
Const swStartButton =  3\r
Const swLRFlip      = 82\r
Const swLLFlip      = 84\r
\r
' Help Window\r
vpmSystemHelp = "Williams System 7 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"      & vbNewLine &_\r
  vpmKeyName(keyAdvance)      & vbTab & "Advance"        & vbNewLine &_\r
  vpmKeyName(keyUpDown)       & vbTab & "Up/Down"        & vbNewLine &_\r
  vpmKeyName(keyMasterEnter)  & vbTab & "Master Enter"   & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)      & vbTab & "Cpu Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySoundDiag)    & vbTab & "Sound Diagnostic"\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyHiScoreReset .Switch(swHSReset)     = True\r
			Case keyUpDown       .Switch(swUpDown)      = Not .Switch(swUpDown)\r
			Case keyAdvance      .Switch(swAdvance)     = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keyMasterEnter  .Switch(swMasterEnter) = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyHiScoreReset .Switch(swHSReset)     = False\r
			Case keyAdvance      .Switch(swAdvance)     = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keyMasterEnter  .Switch(swMasterEnter) = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Qe=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Stern S.A.M. Data\r
'-------------------------\r
' Cabinet switches\r
Const swCancel		= -3\r
Const swDown		= -2\r
Const swUp			= -1\r
Const swEnter		=  0\r
Const swStartButton	= 16\r
Const swTilt		= -7\r
Const swSlamTilt	= -6\r
Const swCoin1		= 65\r
Const swCoin2		= 66\r
Const swCoin3		= 67\r
Const swLRFlip		= 82\r
Const swLLFlip		= 84\r
Const swURFlip		= 86\r
Const swULFlip		= 88\r
\r
'Const swTournamentButton = 15 'for all machines?\r
\r
' Help Window\r
vpmSystemHelp = "Stern S.A.M. keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyCancel)		 & vbTab & "Back"			& vbNewLine &_\r
  vpmKeyName(keyDown)		 & vbTab & "Minus"			& vbNewLine &_\r
  vpmKeyName(keyUp)			 & vbTab & "Plus"			& vbNewLine &_\r
  vpmKeyName(keyEnter)		 & vbTab & "Select"			& vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub segaShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 100, 240, "DIP Switches"\r
			.AddFrame 0, 0, 80, "Country", &H0f,_\r
			  Array("Austria",&H01, "Belgium", &H02, "Brazil",      &H0d,_\r
					"Canada", &H03, "France",  &H06, "Germany",     &H07,_\r
					"Italy",  &H08, "Japan",   &H09, "Netherlands", &H04,_\r
					"Norway", &H0a, "Sweden",  &H0b, "Switzerland", &H0c,_\r
					"UK",     &H05, "UK (New)",&H0e, "USA",         &H00)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("segaShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFFlipsSam.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : : vpmFFlipsSam.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyCancel       .Switch(swCancel)      = True\r
			Case keyDown         .Switch(swDown)        = True\r
			Case keyUp           .Switch(swUp)          = True\r
			Case keyEnter        .Switch(swEnter)       = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFFlipsSam.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFFlipsSam.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyCancel       .Switch(swCancel)      = False\r
			Case keyDown         .Switch(swDown)        = False\r
			Case keyUp           .Switch(swUp)          = False\r
			Case keyEnter        .Switch(swEnter)       = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
\r
' *********************************************************************\r
' *	   Fast flips for SAM\r
' *********************************************************************\r
\r
dim vpmFFlipsSAM : set vpmFFlipsSAM = New cvpmFFlipsSAM : vpmFFlipsSAM.Name = "vpmFFlipsSAM"\r
\r
'*************************************************\r
Sub InitVpmFFlipsSAM()\r
	' Virtually all SAM tables have left/right flippers at 10/15, but upper lfippers may be different.\r
	vpmFFlipsSAM.FlipperSolNumber(0) = 15\r
	vpmFFlipsSAM.FlipperSolNumber(1) = 16\r
	vpmFFlipsSAM.CallBackL = SolCallback(vpmFFlipsSAM.FlipperSolNumber(0))			'Lower Flippers\r
	vpmFFlipsSAM.CallBackR = SolCallback(vpmFFlipsSAM.FlipperSolNumber(1))\r
	if vpmFlips.FlipperSolNumber(2) <> 0 then vpmFFlipsSAM.CallbackUL=SolCallback(vpmFFlipsSAM.FlipperSolNumber(2)) Else vpmFFlipsSAM.FlipperSolNumber(2) = 0\r
	if vpmFlips.FlipperSolNumber(3) <> 0 then vpmFFlipsSAM.CallbackUR=SolCallback(vpmFFlipsSAM.FlipperSolNumber(3)) Else vpmFFlipsSAM.FlipperSolNumber(3) = 0\r
	'msgbox "~Debug-Active Flipper subs~" & vbnewline & vpmFFlipsSAM.SubL &vbnewline& vpmFFlipsSAM.SubR &vbnewline& vpmFFlipsSAM.SubUL &vbnewline& vpmFFlipsSAM.SubUR' &\r
End Sub\r
\r
\r
Class cvpmFFlipsSAM	'test fastflips with support for both Rom and Game-On Solenoid flipping\r
	Public TiltObjects, DebugOn, Name, Delay\r
	Public FlipperSub(3)	'Set to the flipper subs by .init\r
	Public FlipperSubRef(3)	'Set to the flipper subs by .init\r
	Public FlippersEnabled,  LagCompensation, ButtonState(3), Sol	'set private\r
	Public RomMode,	SolState(3)'set private\r
	Public FlipperSolNumber(3)	'0=left 1=right 2=Uleft 3=URight\r
\r
	Private Sub Class_Initialize()\r
		dim idx: For idx = 0 to 3\r
			ButtonState(idx) = False\r
			SolState(idx) = False\r
			FlipperSub(idx) = "NullFunction"\r
			Set FlipperSubRef(idx) = Nothing\r
		Next\r
		Delay=0: FlippersEnabled=1: DebugOn=0 : LagCompensation=0 : Sol=0 : TiltObjects=1: RomMode=True\r
		FlipperSolNumber(0)=sLLFlipper\r
		FlipperSolNumber(1)=sLRFlipper\r
		FlipperSolNumber(2)=sULFlipper\r
		FlipperSolNumber(3)=sURFlipper\r
		SolCallback(33)="vpmFFlipsSAM.RomControl = not"\r
		SolCallbackInitialized = False\r
	End Sub\r
\r
	'set callbacks\r
	Public Property Let CallBackL(ByVal aInput) : CallBack(0) = aInput: End Property\r
	Public Property Let CallBackR(ByVal aInput) : CallBack(1) = aInput: End Property\r
	Public Property Let CallBackUL(ByVal aInput) : CallBack(2) = aInput: End Property\r
	Public Property Let CallBackUR(ByVal aInput) : CallBack(3) = aInput: End Property\r
	Public Property Let CallBack(aIdx, ByVal aInput)\r
		If Not IsEmpty(aInput) Then\r
			FlipperSub(aIdx) = aInput\r
			SolCallback(FlipperSolNumber(aIdx)) = name & ".RomFlip(" & aIdx & ")="\r
			SolCallbackInitialized = False\r
			Dim cbs: cbs = "Sub XXXSAMFlipperSub_" & aIdx & "(state)" & vblf & aInput & " state" & vblf & "End Sub"\r
			ExecuteGlobal cbs\r
			Set FlipperSubRef(aIdx) = GetRef("XXXSAMFlipperSub_" & aIdx)\r
		End If\r
	End Property\r
\r
	Public Property Let RomFlip(idx, ByVal aEnabled)\r
		aEnabled = abs(aEnabled)\r
		SolState(idx) = aEnabled\r
		If Not RomMode then Exit Property\r
		Dim cb: Set cb = FlipperSubRef(idx)\r
		If Not cb is Nothing Then cb aEnabled\r
	End property\r
\r
	Public Property Let RomControl(ByVal aEnabled)	'todo improve choreography\r
		'MsgBox "Rom Control " & CStr(aEnabled)\r
		RomMode = aEnabled\r
		Dim idx, cb: For idx = 0 To 3\r
			Set cb = FlipperSubRef(idx)\r
			If aEnabled then					'Switch to ROM solenoid states or button states\r
				If Not cb is Nothing Then cb SolState(idx)\r
			Else\r
				If Not cb is Nothing Then cb ButtonState(idx)\r
			End If\r
		Next\r
	End Property\r
	Public Property Get RomControl : RomControl = RomMode : End Property\r
\r
	public DebugTestKeys, DebugTestInit	'orphaned (stripped out the debug stuff)\r
\r
	Public Property Let Solenoid(aInput) : if not IsEmpty(aInput) then Sol = aInput : end if : End Property	'set solenoid\r
	Public Property Get Solenoid : Solenoid = sol : End Property\r
\r
	'call callbacks\r
	Public Sub FlipL(ByVal aEnabled) : Flip 0, aEnabled : End Sub\r
	Public Sub FlipR(ByVal aEnabled) : Flip 1, aEnabled : End Sub\r
	Public Sub FlipUL(ByVal aEnabled) : Flip 2, aEnabled : End Sub\r
	Public Sub FlipUR(ByVal aEnabled) : Flip 3, aEnabled : End Sub\r
	Public Sub Flip(aIdx, ByVal aEnabled)\r
		aEnabled = abs(aEnabled)\r
		ButtonState(aIdx) = aEnabled\r
		If FlippersEnabled and Not Romcontrol or DebugOn then\r
			Dim cb: Set cb = FlipperSubRef(aIdx)\r
			If Not cb is Nothing Then cb aEnabled\r
		end If\r
	End Sub\r
\r
	Public Sub TiltSol(aEnabled)	'Handle solenoid / Delay (if delayinit)\r
		If delay > 0 and not aEnabled then	'handle delay\r
			vpmtimer.addtimer Delay, Name & ".FireDelay" & "'"\r
			LagCompensation = 1\r
		else\r
			If Delay > 0 then LagCompensation = 0\r
			EnableFlippers(aEnabled)\r
		end If\r
	End Sub\r
\r
	Sub FireDelay() : If LagCompensation then EnableFlippers 0 End If : End Sub\r
\r
	Public Sub EnableFlippers(ByVal aEnabled)	'private\r
		Dim idx, cb\r
		If aEnabled then\r
			For idx = 0 To 3\r
				Set cb = FlipperSubRef(idx)\r
				If Not cb is Nothing Then cb ButtonState(idx)\r
			Next\r
		End If\r
		FlippersEnabled = aEnabled\r
		If TiltObjects then vpmnudge.solgameon aEnabled\r
		If Not aEnabled then\r
			For idx = 0 To 3\r
				Set cb = FlipperSubRef(idx)\r
				If Not cb is Nothing Then cb False\r
			Next\r
		End If\r
	End Sub\r
End Class\r
`,qe=`'Last Updated in VBS v3.61\r
\r
' Note: use Sega2.vbs for Apollo13 or GoldenEye\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'----------------------------\r
' Sega / Stern Whitestar Data\r
'----------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 15\r
' Cabinet switches\r
Const swBlack         =  0 'DED 8\r
Const swGreen         = -1 'DED 7\r
Const swRed           = -2 'DED 6\r
Const swMemoryProtect = -3 'Coin door memory protect switch\r
Const swStartButton   = 54\r
Const swTilt          = 56\r
Const swSlamTilt      = 55\r
Const swCoin3         =  4\r
Const swCoin1         =  5\r
Const swCoin2         =  6\r
\r
Const swLRFlip        = 82\r
Const swLLFlip        = 84\r
Const swURFlip        = 81\r
Const swULFlip        = 83\r
\r
' Help Window\r
vpmSystemHelp = "Sega/Stern Whitestar keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyBlack)        & vbTab & "Black"          & vbNewLine &_\r
  vpmKeyName(keyGreen)        & vbTab & "Green"          & vbNewLine &_\r
  vpmKeyName(keyRed)          & vbTab & "Red"            & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"      & vbNewLine &_\r
  vpmKeyName(keyCoinDoor)     & vbTab & "Open/Close Coin Door"\r
\r
' Dip Switch / Options Menu\r
Private Sub segaShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 100, 240, "DIP Switches"\r
			.AddFrame 0, 0, 80, "Country", &H0f,_\r
			  Array("Austria",&H01, "Belgium", &H02, "Brazil",      &H0d,_\r
			        "Canada", &H03, "France",  &H06, "Germany",     &H07,_\r
			        "Italy",  &H08, "Japan",   &H09, "Netherlands", &H04,_\r
			        "Norway", &H0a, "Sweden",  &H0b, "Switzerland", &H0c,_\r
			        "UK",     &H05, "UK (New)",&H0e, "USA",         &H00)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("segaShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyBlack        .Switch(swBlack)       = True\r
			Case keyGreen        .Switch(swGreen)       = True\r
			Case keyRed          .Switch(swRed)         = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyCoinDoor     If toggleKeyCoinDoor Then .Switch(swMemoryProtect) = Not .Switch(swMemoryProtect) Else .Switch(swMemoryProtect) = Not inverseKeyCoinDoor\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyBlack        .Switch(swBlack)       = False\r
			Case keyGreen        .Switch(swGreen)       = False\r
			Case keyRed          .Switch(swRed)         = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyCoinDoor     If toggleKeyCoinDoor = False Then .Switch(swMemoryProtect) = inverseKeyCoinDoor\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Ze=`'Last Updated in VBS v3.56\r
\r
' GoldenEye and Apollo13 use different flipper techinques and switch locations than other Sega games.\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'----------------------------\r
' Apollo13 / GoldenEye Data\r
'----------------------------\r
' Cabinet switches\r
Const swBlack          =  0 'DED 8\r
Const swGreen          = -1 'DED 7\r
Const swRed            = -2 'DED 6\r
Const swMemoryProtect  = -3 'Coin door memory protect switch\r
Const swStartButton    = 3\r
Const swTilt           = 1\r
Const swSlamTilt       = 8\r
Const swCoin3          = 4\r
Const swCoin1          = 5\r
Const swCoin2          = 6\r
\r
Const swLRFlip         = 64\r
Const swLLFlip         = 63\r
\r
Const GameOnSolenoid = 48\r
'This game requires UseSolenoids = 2 for proper flipper activation\r
Const UseSolenoids = 2\r
\r
' Help Window\r
vpmSystemHelp = "Sega keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyBlack)        & vbTab & "Black"          & vbNewLine &_\r
  vpmKeyName(keyGreen)        & vbTab & "Green"          & vbNewLine &_\r
  vpmKeyName(keyRed)          & vbTab & "Red"            & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"      & vbNewLine &_\r
  vpmKeyName(keyCoinDoor)     & vbTab & "Open/Close Coin Door"\r
\r
' Dip Switch / Options Menu\r
Private Sub sega2ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 100, 240, "DIP Switches"\r
			.AddFrame 0, 0, 80, "Country", &H0f,_\r
			  Array("Austria",&H01, "Belgium", &H02, "Brazil",      &H0d,_\r
			        "Canada", &H03, "France",  &H06, "Germany",     &H07,_\r
			        "Italy",  &H08, "Japan",   &H09, "Netherlands", &H04,_\r
			        "Norway", &H0a, "Sweden",  &H0b, "Switzerland", &H0c,_\r
			        "UK",     &H05, "UK (New)",&H0e, "USA",         &H00)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("sega2ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyBlack        .Switch(swBlack)       = True\r
			Case keyGreen        .Switch(swGreen)       = True\r
			Case keyRed          .Switch(swRed)         = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyCoinDoor     If toggleKeyCoinDoor Then .Switch(swMemoryProtect) = Not .Switch(swMemoryProtect) Else .Switch(swMemoryProtect) = Not inverseKeyCoinDoor\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyBlack        .Switch(swBlack)       = False\r
			Case keyGreen        .Switch(swGreen)       = False\r
			Case keyRed          .Switch(swRed)         = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyCoinDoor     If toggleKeyCoinDoor = False Then .Switch(swMemoryProtect) = inverseKeyCoinDoor\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,Je=`'Last Updated in VBS v3.36\r
\r
'First Added in VBS v3.20\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Sleic Data\r
'-------------------------\r
' Flipper Solenoid\r
'Const GameOnSolenoid = ???\r
' Cabinet switches\r
Const swStartButton = 33\r
Const swCoin1       = 34\r
Const swCoin2       = 34\r
Const swCoin3       = 34\r
Const swTilt        = 35\r
Const swDiag        = 36\r
Const swLRFlip      = 81 '32\r
Const swLLFlip      = 83 '31\r
\r
' Help Window\r
vpmSystemHelp = "Sleic keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyCPUDiag) & vbTab & "Diagnostics"\r
\r
' Dip Switch / Options Menu\r
Private Sub SleicShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200,300,"Sleic switches"\r
			.AddFrame 0, 0, 80,"DIP switches", 0,_\r
			  Array("Dip 0",&H00000800,"Dip 1",&H00000400,"Dip 2",&H00000200,"Dip 3",&H00000100,_\r
			        "Dip 4",32768,     "Dip 5",&H00004000,"Dip 6",&H00002000,"Dip 7",&H00001000,_\r
			        "Dip 8",&H00000008,"Dip 9",&H00000004,"Dip10",&H00000002,"Dip11",&H00000001,_\r
			        "Dip12",&H00000080,"Dip13",&H00000040,"Dip14",&H00000020,"Dip15",&H00000010)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("SleicShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keyCPUDiag      .Switch(swDiag)        = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keyCPUDiag      .Switch(swDiag)        = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,$e=`'First added in VBS v3.60, based on peyper.vbs\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Peyper / Sonic Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 17\r
' Cabinet switches\r
Const swStartButton  = -4\r
Const swCoin1        = -3\r
Const swCoin2        = -1\r
Const swCoin3        = -2\r
Const swTilt         = -5\r
Const swSlamDoorHit  = -6\r
Const swLRFlip       = 81\r
Const swLLFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Atari keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub peyperShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 200, 300,"Peyper / Sonic switches"\r
			.AddFrame 0, 0, 80, "DIP switches",0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("peyperShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySlamDoorHit  .Switch(swSlamDoorHit) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,tn=`'Last Updated in VBS v3.61\r
'Same as inder.vbs except for switch numbering\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Spinball Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 25\r
' Cabinet switches\r
Const swCoin1        = 30\r
Const swCoin2        = 31\r
Const swCoin3        = 32\r
Const swTilt         = 33\r
Const swStartButton  = 34\r
Const swSelfTest     = 36\r
Const swCPUDiag      = 37\r
\r
Const swLRFlip       = 131\r
Const swLLFlip       = 133\r
Const swURFlip       = 132\r
Const swULFlip       = 134\r
\r
' Help Window\r
vpmSystemHelp = "Spinball MPUx00 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"      & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub InderShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",32768,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",&H00008000)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("InderShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,en=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Stern MPUx00 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 19\r
' Cabinet switches\r
Const swSelfTest     = -7\r
Const swCPUDiag      = -6\r
Const swSoundDiag    = -5\r
Const swTilt         = 7\r
Const swSlamTilt     = 8\r
Const swCoin3        = 3\r
Const swCoin2        = 2\r
Const swCoin1        = 1\r
Const swStartButton  = 6\r
Const swLRFlip       = 82\r
Const swLLFlip       = 84\r
Const swURFlip       = 81\r
Const swULFlip       = 83\r
\r
' Help Window\r
vpmSystemHelp = "Stern MPUx00 keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2"   & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3"   & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Self Test"        & vbNewLine &_\r
  vpmKeyName(keyCPUDiag)     & vbTab & "Cpu Diagnostic"   & vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Sound Diagnostic" & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub sternShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("sternShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swSelfTest)    = True\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = True\r
			Case keySoundDiag    .Switch(swSoundDiag)   = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swSelfTest)    = False\r
			Case keyCPUDiag      .Switch(swCPUDiag)     = False\r
			Case keySoundDiag    .Switch(swSoundDiag)   = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,nn=`'Last Updated in VBS v3.61\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' SYS80 Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 10\r
'Cabinet Switches\r
Const swTest        = 07\r
Const swCoin1       = 17\r
Const swCoin2       = 27\r
Const swCoin3       = 37\r
Const swStartButton = 47\r
Const swTilt        = 57\r
Const swSlamTilt    = -1\r
\r
Const swLRFlip      = 112\r
Const swLLFlip      = 114\r
Const swURFlip      = 113\r
Const swULFlip      = 115\r
\r
' Help Window\r
vpmSystemHelp = "Gottlieb System 80 keys" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1)  & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2)  & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3)  & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)     & vbTab & "Test"           & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit)  & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub Sys80ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 280, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800,_\r
			        "DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768)\r
			.AddFrame 80, 0, 60, "", 0,_\r
			  Array("DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000,_\r
			        "DIP 25",&H01000000,"DIP 26",&H02000000,"DIP 27",&H04000000,"DIP 28",&H08000000,_\r
			        "DIP 29",&H10000000,"DIP 30",&H20000000,"DIP 31",&H40000000,"DIP 32",&H80000000)\r
			.AddFrameExtra 160,0, 100, "Sound", 0,_\r
			  Array("SS Self Test", &H0001,_\r
			        "SS Background",&H0010,_\r
			        "SS Speech",    &H0020,_\r
			        "SS S2",        &H0002,_\r
			        "SS S7",        &H0040,_\r
			        "SS S8",        &H0080)\r
			.AddFrameExtra 175,110,70,"Attract Sound",&H000c,_\r
			  Array("Off",  &H0000,_\r
			        "10s",  &H0004,_\r
			        "2m",   &H0008,_\r
			        "4m",   &H000C)\r
		End With\r
	End If\r
	Dim extra : extra = Controller.Dip(4) + Controller.Dip(5)*256\r
	extra = vpmDips.ViewDipsExtra(extra)\r
	Controller.Dip(4) = extra And 255 : Controller.Dip(5) = (extra And 65280)\\256 And 255\r
End Sub\r
Set vpmShowDips = GetRef("Sys80ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swTest)        = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swTest)        = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,rn=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Taito Data\r
'-------------------------\r
' Flipper Solenoid\r
Const GameOnSolenoid = 18\r
' Cabinet switches\r
Const swCoin1          =   0\r
Const swStartButton    =  10\r
Const swSlamTilt       =  20\r
Const swService	       =  40\r
Const swCoinDoor       =  50\r
Const swBoxDoor	       =  60\r
Const swCoin2          =  70\r
Const swDiagnostics    =   7\r
Const swStatistics     =  17\r
Const swAdjustments    =  27\r
Const swConfigurations =  37\r
Const swEnter          =  47\r
Const swSoundDiag      =  57\r
\r
Private swStartButtonX,swCoinDoorX,swSlamTiltX\r
On Error Resume Next\r
If swStartButton = 10 Or Err Then swStartButtonX = 10 Else swStartButtonX = swStartButton\r
If swCoinDoor    = 50 Or Err Then swCoinDoorX    = 50 Else swCoinDoorX    = swCoinDoor\r
If swSlamTilt    = 20 Or Err Then swSlamTiltX    = 20 Else swSlamTiltX    = swSlamTilt\r
On Error Goto 0\r
\r
Const swLRFlip         = 99\r
Const swLLFlip         = 119\r
\r
' Help Window\r
vpmSystemHelp = "Taito keys:"& vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyHiScoreReset)& vbTab & "Statistics"     & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Service Menu"   & vbNewLine &_\r
  vpmKeyName(keyDown)        & vbTab & "Adjustments"    & vbNewLine &_\r
  vpmKeyName(KeyUp)          & vbTab & "Diagnostics"    & vbNewLine &_\r
  vpmKeyName(keyEnter)       & vbTab & "Enter"          & vbNewLine &_\r
  vpmKeyName(keyConfigurations) & vbTab & "Configurations" & vbNewLine &_\r
  vpmKeyName(keySoundDiag)   & vbTab & "Sound Diagnostics" & vbNewLine &_\r
  vpmKeyName(keyCoinDoor)    & vbTab & "Coin Door"      & vbNewLine &_\r
  vpmKeyName(keymasterenter) & vbTab & "Coin Box Door"\r
\r
Private Sub TaitoShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
		.AddForm 80, 0, "DIP Switches"\r
			.AddFrame  0,0, 180,"Dip Format in Adjust Mode ( |B| |A| )", 0,_\r
				Array("CH0  A(1)",&H1, "CH1  A(2)",&H2, "CH2  A(4)",&H4, "CH3  A(8)",&H8,_\r
				      "CH4  B(1)",&H10,"CH5  B(2)",&H20,"CH6  B(4)",&H40,"CH7  B(8)",&H80)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("TaitoShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL True\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR True\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True\r
			Case keyInsertCoin1  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton)   = True\r
			Case keyUp           .Switch(swDiagnostics)   = Not .Switch(swDiagnostics)\r
			Case keyHiScoreReset .Switch(swStatistics)    = Not .Switch(swStatistics)\r
			Case keySelfTest     .Switch(swService)       = Not .Switch(swService)\r
			Case keyDown         .Switch(swAdjustments)   = Not .Switch(swAdjustments)\r
			Case keyConfigurations .Switch(swConfigurations) = True\r
			Case keyEnter        .Switch(swEnter)         = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)      = True\r
			Case keyCoinDoor     If toggleKeyCoinDoor Then .Switch(swCoinDoor) = Not .Switch(swCoinDoor) Else .Switch(swCoinDoor) = Not inverseKeyCoinDoor\r
			Case keySoundDiag    .Switch(swSoundDiag)     = Not .Switch(swSoundDiag)\r
			Case keyMasterEnter  .Switch(swBoxDoor)       = Not .Switch(swBoxDoor)\r
			Case keyBangBack     vpmNudge.DoNudge   0,6\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False : if keycode = StagedLeftFlipperKey then vpmFlips.FlipUL False\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False : if keycode = StagedRightFlipperKey then vpmFlips.FlipUR False\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False\r
			Case StartGameKey    .Switch(swStartButton)   = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)      = False\r
			Case keyCoinDoor     If toggleKeyCoinDoor = False Then .Switch(swCoinDoor) = inverseKeyCoinDoor\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyConfigurations .Switch(swConfigurations) = False\r
			Case keyEnter        .Switch(swEnter)            = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,an=`'Last Updated in VBS v3.62\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Williams Phantom Haus\r
'-------------------------\r
' Cabinet switches\r
Const swCoin1       =  1\r
Const swCoin2       =  2\r
Const swCoin3       =  4\r
Const swStartButton = 28\r
Const swCancel      = 15\r
Const swDown        = 26\r
Const swUp          = 27\r
Const swEnter       = 14\r
Const swMenu        =  7\r
\r
' Keyboard Assignment\r
Dim CollectKey, swCollect, CollectKeyCaption\r
Dim LeftHoldKey, swLeftHold, LeftHoldKeyCaption\r
Dim MiddleHoldKey, swMiddleHold, MiddleHoldKeyCaption\r
Dim RightHoldKey, swRightHold, RightHoldKeyCaption\r
Dim LanguageKey, swLanguage, LanguageKeyCaption\r
Dim MultiplierKey, swMultiplier, MultiplierKeyCaption \r
Dim RedKey, swRed, RedKeyCaption\r
Dim BlueKey, swBlue, BlueKeyCaption\r
Dim SuperStartKey, swSuperStart, SuperStartKeyCaption\r
Dim TransferKey, swTransfer, TransferKeyCaption\r
Dim PayoutKey, swPayout, PayoutKeyCaption\r
\r
CollectKey           = 17\r
CollectKeyCaption    = "W"\r
swCollect            = 15\r
MultiplierKey        = 18\r
MultiplierKeyCaption = "E"\r
swMultiplier         = 25\r
SuperStartKey        = 19\r
SuperStartKeyCaption = "R"\r
swSuperStart         = 14\r
\r
LeftHoldKey          = 21\r
LeftHoldKeyCaption   = "Z"	'Maybe "Y" on an English keyboard\r
swLeftHold           = 16\r
MiddleHoldKey        = 22\r
MiddleHoldKeyCaption = "U"\r
swMiddleHold         = 17\r
RightHoldKey         = 23\r
RightHoldKeyCaption  = "I"\r
swRightHold          = 18\r
\r
RedKey               = 30\r
RedKeyCaption        = "A"\r
swRed                = 26\r
BlueKey              = 31\r
BlueKeyCaption       = "S"\r
swBlue               = 27\r
\r
LanguageKey          = 34\r
LanguageKeyCaption   = "G"\r
swLanguage           =  8\r
TransferKey          = 35\r
TransferKeyCaption   = "H"\r
swTransfer           = 22\r
\r
PayoutKey            = 45\r
PayoutKeyCaption     = "X"\r
swPayout             = 21\r
\r
' Help Window\r
vpmSystemHelp = "WMS Phantom Haus keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin 3" & vbNewLine &_\r
  vpmKeyName(keyCoinDoor) & vbTab & "Activate Menu - Hold key" & vbNewLine &_\r
  vpmKeyName(keyEnter) & vbTab & "Enter (Menu)" & vbNewLine &_\r
  vpmKeyName(keyDown) & vbTab & "Down (Menu)" & vbNewLine &_\r
  vpmKeyName(keyUp) & vbTab & "Up (Menu)" & vbNewLine &_\r
  vpmKeyName(keyCancel) & vbTab & "Escape (Menu)" & vbNewLine & vbNewLine &_\r
  "Gameplay:" & vbNewLine &_\r
  "Collect Button" & vbTab & vbTab & CollectKeyCaption & vbNewLine &_\r
  "Multiplier Button" & vbTab & vbTab & MultiplierKeyCaption  & vbNewLine &_\r
  "SuperStart Button" & vbTab & vbTab & SuperStartKeyCaption & vbNewLine &_\r
  "Left Hold Button" & vbTab & vbTab & LeftHoldKeyCaption & vbNewLine &_\r
  "Middle Hold Button" & vbTab & MiddleHoldKeyCaption & vbNewLine &_\r
  "Right Hold Button" & vbTab & vbTab & RightHoldKeyCaption & vbNewLine &_\r
  "Red Button" & vbTab & vbTab & RedKeyCaption & vbNewLine &_\r
  "Blue Button" & vbTab & vbTab & BlueKeyCaption & vbNewLine &_\r
  "Language Button" & vbTab & vbTab & LanguageKeyCaption & vbNewLine &_\r
  "Transfer Button" & vbTab & vbTab & TransferKeyCaption & vbNewLine &_\r
  "Payout Button" & vbTab & vbTab & PayoutKeyCaption\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case keyInsertCoin1	 vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin1'" : Playsound SCoin\r
			Case keyInsertCoin2	 vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin2'" : Playsound SCoin\r
			Case keyInsertCoin3	 vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCoin3'" : Playsound SCoin\r
			Case keyEnter		 vpmTimer.AddTimer 750,"vpmTimer.PulseSw swEnter'"\r
			Case keyDown		 vpmTimer.AddTimer 750,"vpmTimer.PulseSw swDown'"\r
			Case keyUp			 vpmTimer.AddTimer 750,"vpmTimer.PulseSw swUp'"\r
			Case keyCancel		 vpmTimer.AddTimer 750,"vpmTimer.PulseSw swCancel'"\r
			Case keyCoinDoor	 .Switch(swMenu) = True\r
			Case StartGameKey	 .Switch(swStartButton) = True\r
			Case keyVPMVolume	 vpmVol\r
			Case CollectKey		 .Switch(swCollect) = True\r
			Case LeftHoldKey	 .Switch(swLeftHold) = True\r
			Case MiddleHoldKey	 .Switch(swMiddleHold) = True\r
			Case RightHoldKey	 .Switch(swRightHold) = True\r
			Case LanguageKey	 .Switch(swLanguage) = True\r
			Case MultiplierKey	 .Switch(swMultiplier) = True\r
			Case RedKey			 .Switch(swRed) = True\r
			Case BlueKey		 .Switch(swBlue) = True\r
			Case SuperStartKey	 .Switch(swSuperStart) = True\r
			Case TransferKey	 .Switch(swTransfer) = True\r
			Case PayoutKey		 .Switch(swPayout) = True\r
			Case Else			 vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case StartGameKey	 .Switch(swStartButton) = False\r
			Case keyCoinDoor	 .Switch(swMenu) = False\r
			Case keyShowOpts	 .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys	 .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyReset		 .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame		 .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize	 .DoubleSize  = Not .DoubleSize\r
			Case CollectKey		 .Switch(swCollect) = False\r
			Case LeftHoldKey	 .Switch(swLeftHold) = False\r
			Case MiddleHoldKey	 .Switch(swMiddleHold) = False\r
			Case RightHoldKey	 .Switch(swRightHold) = False\r
			Case LanguageKey	 .Switch(swLanguage) = False\r
			Case MultiplierKey	 .Switch(swMultiplier) = False\r
			Case RedKey			 .Switch(swRed) = False\r
			Case BlueKey		 .Switch(swBlue) = False\r
			Case SuperStartKey	 .Switch(swSuperStart) = False\r
			Case TransferKey	 .Switch(swTransfer) = False\r
			Case PayoutKey		 .Switch(swPayout) = False\r
			Case Else			 vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,sn=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Zaccaria Data\r
'-------------------------\r
' Cabinet switches\r
Const swAdvanceTest   =  0\r
Const swReturnTest    =  1\r
Const swCreditService =  3\r
Const swCoin1         =  4\r
Const swCoin2         =  5\r
Const swCoin3         =  6\r
Const swStartButton   =  9\r
\r
Const swLRFlip        = 81\r
Const swLLFlip        = 83\r
\r
' Help Window\r
vpmSystemHelp = "Zaccaria keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4) & vbTab & "Service Credit" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Advance Test"   & vbNewLine &_\r
  vpmKeyName(keyAdvance)     & vbTab & "Return Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub zacShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 80, 0, "Option Menu"\r
			.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("zacShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False\r
			Case keyInsertCoin1  vpmTimer.PulseSw swCoin1 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.PulseSw swCoin2 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.PulseSw swCoin3 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.PulseSw swCreditService : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     .Switch(swAdvanceTest) = True\r
			Case keyAdvance      .Switch(swReturnTest)  = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     .Switch(swAdvanceTest) = False\r
			Case keyAdvance      .Switch(swReturnTest)  = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,ln=`'Last Updated in VBS v3.36\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Zaccaria Data\r
'-------------------------\r
' Cabinet switches\r
Const swProgEnable  = -2\r
Const swDiagnostics =  0\r
Const swSlamTilt    =  2\r
Const swCoin1       =  4\r
Const swCoin2       =  5\r
Const swCoin3       =  6\r
Const swStartButton =  3\r
\r
Const swLRFlip      = 81\r
Const swLLFlip      = 83\r
\r
' Help Window\r
vpmSystemHelp = "Zaccaria keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Diagnostics"\r
\r
' Dip Switch / Options Menu\r
Private Sub zac1ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm  80, 0, "Option Menu"\r
			.AddLabel 0,0,250,20,"No Options In This Table At This Time"\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("zac1ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False\r
			Case keyInsertCoin1  vpmTimer.PulseSw swCoin1 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.PulseSw swCoin2 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.PulseSw swCoin3 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    vpmTimer.PulseSw swStartButton\r
			Case keySelfTest     vpmTimer.PulseSw swDiagnostics\r
			Case keyDown         vpmTimer.PulseSw swProgEnable\r
			Case keySlamDoorHit  .Switch(swSlamTilt) = True\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt) = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,on=`'Last Updated in VBS v3.61\r
\r
'Zaccaria generation 2 machines only\r
\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Zaccaria Data\r
'-------------------------\r
' Cabinet switches\r
Const swAdvanceTest   =  0\r
Const swReturnTest    =  1\r
Const swSlamTilt      =  2\r
Const swCreditService =  3\r
Const swCoin1         =  4\r
Const swCoin2         =  5\r
Const swCoin3         =  6\r
Const swStartButton   =  9\r
Const swTilt          = 10\r
\r
Const swLRFlip        = 81\r
Const swLLFlip        = 83\r
Const swURFlip        = 82\r
Const swULFlip        = 84\r
\r
' Help Window\r
vpmSystemHelp = "Zaccaria keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin3) & vbTab & "Insert Coin #3" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin4) & vbTab & "Service Credit" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Advance Test"   & vbNewLine &_\r
  vpmKeyName(keyAdvance)     & vbTab & "Return Test"    & vbNewLine &_\r
  vpmKeyName(keySlamDoorHit) & vbTab & "Slam Tilt"\r
\r
' Dip Switch / Options Menu\r
Private Sub zac2ShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 245, "DIP Switches"\r
			.AddFrame 0, 0, 60,"", 0,Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("zac2ShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = True : vpmKeyDown = False : vpmFlips.FlipL True\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL True\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = True : vpmKeyDown = False : vpmFlips.FlipR True\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR True\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL True : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = True\r
			Case StagedRightFlipperKey vpmFlips.FlipUR True : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = True\r
			Case keyInsertCoin1  vpmTimer.PulseSw swCoin1 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.PulseSw swCoin2 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin3  vpmTimer.PulseSw swCoin3 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin4  vpmTimer.PulseSw swCreditService ': If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = True\r
			Case keySelfTest     vpmTimer.PulseSw swAdvanceTest\r
			Case keyAdvance      vpmTimer.PulseSw swReturnTest\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case LeftFlipperKey\r
				.Switch(swLLFlip) = False : vpmKeyUp = False : vpmFlips.FlipL False\r
				If keycode = StagedLeftFlipperKey Then ' as vbs will not evaluate the Case StagedLeftFlipperKey then, also handle it here\r
					vpmFlips.FlipUL False\r
					If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
				End If\r
			Case RightFlipperKey\r
				.Switch(swLRFlip) = False : vpmKeyUp = False : vpmFlips.FlipR False\r
				If keycode = StagedRightFlipperKey Then ' as vbs will not evaluate the Case StagedRightFlipperKey then, also handle it here\r
					vpmFlips.FlipUR False\r
					If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
				End If\r
			Case StagedLeftFlipperKey vpmFlips.FlipUL False : If vpmFlips.FlipperSolNumber(2) <> 0 Then .Switch(swULFlip) = False\r
			Case StagedRightFlipperKey vpmFlips.FlipUR False : If vpmFlips.FlipperSolNumber(3) <> 0 Then .Switch(swURFlip) = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySlamDoorHit  .Switch(swSlamTilt)    = False\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : BeginModal : .Run : vpmTimer.Reset : EndModal\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`,pn=`'Last Updated in VBS v3.36\r
\r
'Zaccaria Prototype machines only\r
Option Explicit\r
LoadCore\r
Private Sub LoadCore\r
	On Error Resume Next\r
	If VPBuildVersion < 0 Or Err Then\r
		Dim fso : Set fso = CreateObject("Scripting.FileSystemObject") : Err.Clear\r
		ExecuteGlobal fso.OpenTextFile("core.vbs", 1).ReadAll    : If Err Then MsgBox "Can't open ""core.vbs""" : Exit Sub\r
		ExecuteGlobal fso.OpenTextFile("VPMKeys.vbs", 1).ReadAll : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	Else\r
		ExecuteGlobal GetTextFile("core.vbs")    : If Err Then MsgBox "Can't open ""core.vbs"""    : Exit Sub\r
		ExecuteGlobal GetTextFile("VPMKeys.vbs") : If Err Then MsgBox "Can't open ""vpmkeys.vbs""" : Exit Sub\r
	End If\r
End Sub\r
\r
'-------------------------\r
' Zaccaria Data\r
'-------------------------\r
' Cabinet switches\r
Const swCoinDoor    = -6\r
Const swCoin1       =  1\r
Const swCoin2       =  2\r
Const swStartButton =  3\r
Const swTilt        =  4\r
\r
Const swLRFlip      = 82\r
Const swLLFlip      = 84\r
\r
' Help Window\r
vpmSystemHelp = "Zaccaria keys:" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin1) & vbTab & "Insert Coin #1" & vbNewLine &_\r
  vpmKeyName(keyInsertCoin2) & vbTab & "Insert Coin #2" & vbNewLine &_\r
  vpmKeyName(keySelfTest)    & vbTab & "Open Coin Door" & vbNewLine &_\r
  vpmKeyName(keyAdvance)     & vbTab & "Advance Test"\r
\r
' Dip Switch / Options Menu\r
Private Sub zacShowDips\r
	If Not IsObject(vpmDips) Then ' First time\r
		Set vpmDips = New cvpmDips\r
		With vpmDips\r
			.AddForm 150, 220, "DIP switches"\r
			.AddFrame 0, 0, 60, "", 0,_\r
			  Array("DIP  1",&H00000001,"DIP  2",&H00000002,"DIP  3",&H00000004,"DIP  4",&H00000008,_\r
			        "DIP  5",&H00000010,"DIP  6",&H00000020,"DIP  7",&H00000040,"DIP  8",&H00000080,_\r
			        "DIP  9",&H00000100,"DIP 10",&H00000200,"DIP 11",&H00000400,"DIP 12",&H00000800)\r
			.AddFrame 80,0, 60, "", 0,_\r
			  Array("DIP 13",&H00001000,"DIP 14",&H00002000,"DIP 15",&H00004000,"DIP 16",32768,_\r
			        "DIP 17",&H00010000,"DIP 18",&H00020000,"DIP 19",&H00040000,"DIP 20",&H00080000,_\r
			        "DIP 21",&H00100000,"DIP 22",&H00200000,"DIP 23",&H00400000,"DIP 24",&H00800000)\r
		End With\r
	End If\r
	vpmDips.ViewDips\r
End Sub\r
Set vpmShowDips = GetRef("zacShowDips")\r
Private vpmDips\r
\r
' Keyboard handlers\r
Function vpmKeyDown(ByVal keycode)\r
	vpmKeyDown = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = True : vpmKeyDown = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = True : vpmKeyDown = False\r
			Case keyInsertCoin1  vpmTimer.PulseSw swCoin1 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case keyInsertCoin2  vpmTimer.PulseSw swCoin2 : If Not IsEmpty(Eval("SCoin")) Then Playsound SCoin\r
			Case StartGameKey    .Switch(swStartButton) = True\r
			Case keySelfTest     If toggleKeyCoinDoor Then .Switch(swCoinDoor) = Not .Switch(swCoinDoor) Else .Switch(swCoinDoor) = Not inverseKeyCoinDoor\r
			Case keyAdvance      vpmTimer.PulseSw swTilt\r
			Case keyBangBack     vpmNudge.DoMechTilt\r
			Case keyVPMVolume    vpmVol\r
			Case Else            vpmKeyDown = False\r
		End Select\r
	End With\r
End Function\r
\r
Function vpmKeyUp(ByVal keycode)\r
	vpmKeyUp = True ' Assume we handle the key\r
	With Controller\r
		Select Case keycode\r
			Case RightFlipperKey .Switch(swLRFlip) = False : vpmKeyUp = False\r
			Case LeftFlipperKey  .Switch(swLLFlip) = False : vpmKeyUp = False\r
			Case StartGameKey    .Switch(swStartButton) = False\r
			Case keySelfTest     If toggleKeyCoinDoor = False Then .Switch(swCoinDoor) = inverseKeyCoinDoor\r
			Case keyShowOpts     .Pause = True : vpmShowOptions : .Pause = False\r
			Case keyShowKeys     .Pause = True : vpmShowHelp : .Pause = False\r
			Case keyAddBall      .Pause = True : vpmAddBall  : .Pause = False\r
			Case keyShowDips     If IsObject(vpmShowDips) Then .Pause = True : vpmShowDips : .Pause = False\r
			Case keyReset        .Stop : .Run : vpmTimer.Reset\r
			Case keyFrame        .LockDisplay = Not .LockDisplay\r
			Case keyDoubleSize   .DoubleSize  = Not .DoubleSize\r
			Case Else            vpmKeyUp = False\r
		End Select\r
	End With\r
End Function\r
`;const mn=Object.assign({"../scripts/6803.vbs":Xt,"../scripts/ALI.vbs":Yt,"../scripts/Atari.vbs":Qt,"../scripts/Atari1.vbs":qt,"../scripts/Atari1b.vbs":Zt,"../scripts/Atari2.vbs":Jt,"../scripts/B2B.vbs":$t,"../scripts/B2Bcollision.vbs":te,"../scripts/Bally.vbs":ee,"../scripts/BallyG.vbs":ne,"../scripts/Class1812.vbs":re,"../scripts/FPVPX.vbs":ie,"../scripts/GamePlan.vbs":ae,"../scripts/Hankin.vbs":se,"../scripts/LTD.vbs":le,"../scripts/LTD3.vbs":oe,"../scripts/LTD4a.vbs":pe,"../scripts/LTDPecmen.vbs":me,"../scripts/PDB.vbs":ue,"../scripts/Play1.vbs":de,"../scripts/Play2.vbs":ce,"../scripts/Play4.vbs":Se,"../scripts/UltraDMD_Options.vbs":be,"../scripts/VPMKeys.vbs":ye,"../scripts/WPC.vbs":we,"../scripts/alving.vbs":he,"../scripts/antar.vbs":ve,"../scripts/b2s.vbs":Ce,"../scripts/capcom.vbs":Fe,"../scripts/controller.vbs":fe,"../scripts/core.vbs":Te,"../scripts/de.vbs":_e,"../scripts/de2.vbs":De,"../scripts/gts1.vbs":Ie,"../scripts/gts3.vbs":Ee,"../scripts/idsa.vbs":ge,"../scripts/inder.vbs":Pe,"../scripts/inder_atleta.vbs":ke,"../scripts/inder_centaur.vbs":Ke,"../scripts/inder_skateboard.vbs":Le,"../scripts/ironballs.vbs":Ne,"../scripts/joctronic.vbs":Be,"../scripts/juegos.vbs":xe,"../scripts/juegos2.vbs":Re,"../scripts/jvh.vbs":Oe,"../scripts/lancelot.vbs":Me,"../scripts/mac.vbs":Ae,"../scripts/mrgame.vbs":Ue,"../scripts/nuova.vbs":He,"../scripts/peyper.vbs":Ve,"../scripts/playbar.vbs":Ge,"../scripts/s11.vbs":We,"../scripts/s4.vbs":je,"../scripts/s6.vbs":ze,"../scripts/s7.vbs":Xe,"../scripts/s8_StillCrazy.vbs":Ye,"../scripts/sam.vbs":Qe,"../scripts/sega.vbs":qe,"../scripts/sega2.vbs":Ze,"../scripts/sleic.vbs":Je,"../scripts/solarwars.vbs":$e,"../scripts/spinball.vbs":tn,"../scripts/stern.vbs":en,"../scripts/sys80.vbs":nn,"../scripts/taito.vbs":rn,"../scripts/wpc_ph.vbs":an,"../scripts/zac.vbs":sn,"../scripts/zac1.vbs":ln,"../scripts/zac2.vbs":on,"../scripts/zacproto.vbs":pn});function un(a){for(const[t,e]of Object.entries(mn))a(t.slice(t.lastIndexOf("/")+1),e)}let dn=null;const cn=30;self.onmessage=a=>{const{key:t,bytes:e,rom:n}=a.data;(async()=>{try{await(dn??=jt({module_or_path:zt})),un(st),n&&at(n.name,new Uint8Array(n.zip));const r=lt(new Uint8Array(e),n?cn:0);if(!r.layers||!r.data){self.postMessage({key:t,ok:!0,width:0,height:0,layers:0,data:new ArrayBuffer(0),groups:[]});return}const i={key:t,ok:!0,width:r.width??0,height:r.height??0,layers:r.layers,data:r.data.buffer,groups:r.groups??[]};self.postMessage(i,{transfer:[i.data]})}catch(r){self.postMessage({key:t,ok:!1,error:r instanceof Error?r.message:String(r)})}})()}})();
