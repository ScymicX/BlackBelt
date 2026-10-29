(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))p(y);new MutationObserver(y=>{for(const T of y)if(T.type==="childList")for(const K of T.addedNodes)K.tagName==="LINK"&&K.rel==="modulepreload"&&p(K)}).observe(document,{childList:!0,subtree:!0});function c(y){const T={};return y.integrity&&(T.integrity=y.integrity),y.referrerPolicy&&(T.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?T.credentials="include":y.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function p(y){if(y.ep)return;y.ep=!0;const T=c(y);fetch(y.href,T)}})();var ko={exports:{}},Rl={};var nd;function mh(){if(nd)return Rl;nd=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(p,y,T){var K=null;if(T!==void 0&&(K=""+T),y.key!==void 0&&(K=""+y.key),"key"in y){T={};for(var L in y)L!=="key"&&(T[L]=y[L])}else T=y;return y=T.ref,{$$typeof:s,type:p,key:K,ref:y!==void 0?y:null,props:T}}return Rl.Fragment=u,Rl.jsx=c,Rl.jsxs=c,Rl}var rd;function dh(){return rd||(rd=1,ko.exports=mh()),ko.exports}var N=dh(),Po={exports:{}},X={};var ld;function Sh(){if(ld)return X;ld=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),K=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),z=Symbol.iterator;function lt(S){return S===null||typeof S!="object"?null:(S=z&&S[z]||S["@@iterator"],typeof S=="function"?S:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,Ct={};function it(S,k,O){this.props=S,this.context=k,this.refs=Ct,this.updater=O||Z}it.prototype.isReactComponent={},it.prototype.setState=function(S,k){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,k,"setState")},it.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Et(){}Et.prototype=it.prototype;function Dt(S,k,O){this.props=S,this.context=k,this.refs=Ct,this.updater=O||Z}var dt=Dt.prototype=new Et;dt.constructor=Dt,U(dt,it.prototype),dt.isPureReactComponent=!0;var gt=Array.isArray;function Pt(){}var $={H:null,A:null,T:null,S:null},Vt=Object.prototype.hasOwnProperty;function be(S,k,O){var P=O.ref;return{$$typeof:s,type:S,key:k,ref:P!==void 0?P:null,props:O}}function oe(S,k){return be(S.type,k,S.props)}function $t(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function qt(S){var k={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(O){return k[O]})}var Ce=/\/+/g;function Ke(S,k){return typeof S=="object"&&S!==null&&S.key!=null?qt(""+S.key):k.toString(36)}function te(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Pt,Pt):(S.status="pending",S.then(function(k){S.status==="pending"&&(S.status="fulfilled",S.value=k)},function(k){S.status==="pending"&&(S.status="rejected",S.reason=k)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function D(S,k,O,P,A){var j=typeof S;(j==="undefined"||j==="boolean")&&(S=null);var W=!1;if(S===null)W=!0;else switch(j){case"bigint":case"string":case"number":W=!0;break;case"object":switch(S.$$typeof){case s:case u:W=!0;break;case B:return W=S._init,D(W(S._payload),k,O,P,A)}}if(W)return A=A(S),W=P===""?"."+Ke(S,0):P,gt(A)?(O="",W!=null&&(O=W.replace(Ce,"$&/")+"/"),D(A,k,O,"",function(Le){return Le})):A!=null&&($t(A)&&(A=oe(A,O+(A.key==null||S&&S.key===A.key?"":(""+A.key).replace(Ce,"$&/")+"/")+W)),k.push(A)),1;W=0;var Mt=P===""?".":P+":";if(gt(S))for(var St=0;St<S.length;St++)P=S[St],j=Mt+Ke(P,St),W+=D(P,k,O,j,A);else if(St=lt(S),typeof St=="function")for(S=St.call(S),St=0;!(P=S.next()).done;)P=P.value,j=Mt+Ke(P,St++),W+=D(P,k,O,j,A);else if(j==="object"){if(typeof S.then=="function")return D(te(S),k,O,P,A);throw k=String(S),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return W}function R(S,k,O){if(S==null)return S;var P=[],A=0;return D(S,P,"","",function(j){return k.call(O,j,A++)}),P}function G(S){if(S._status===-1){var k=S._result;k=k(),k.then(function(O){(S._status===0||S._status===-1)&&(S._status=1,S._result=O)},function(O){(S._status===0||S._status===-1)&&(S._status=2,S._result=O)}),S._status===-1&&(S._status=0,S._result=k)}if(S._status===1)return S._result.default;throw S._result}var ut=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},J={map:R,forEach:function(S,k,O){R(S,function(){k.apply(this,arguments)},O)},count:function(S){var k=0;return R(S,function(){k++}),k},toArray:function(S){return R(S,function(k){return k})||[]},only:function(S){if(!$t(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return X.Activity=x,X.Children=J,X.Component=it,X.Fragment=c,X.Profiler=y,X.PureComponent=Dt,X.StrictMode=p,X.Suspense=F,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,X.__COMPILER_RUNTIME={__proto__:null,c:function(S){return $.H.useMemoCache(S)}},X.cache=function(S){return function(){return S.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(S,k,O){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var P=U({},S.props),A=S.key;if(k!=null)for(j in k.key!==void 0&&(A=""+k.key),k)!Vt.call(k,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&k.ref===void 0||(P[j]=k[j]);var j=arguments.length-2;if(j===1)P.children=O;else if(1<j){for(var W=Array(j),Mt=0;Mt<j;Mt++)W[Mt]=arguments[Mt+2];P.children=W}return be(S.type,A,P)},X.createContext=function(S){return S={$$typeof:K,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:T,_context:S},S},X.createElement=function(S,k,O){var P,A={},j=null;if(k!=null)for(P in k.key!==void 0&&(j=""+k.key),k)Vt.call(k,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(A[P]=k[P]);var W=arguments.length-2;if(W===1)A.children=O;else if(1<W){for(var Mt=Array(W),St=0;St<W;St++)Mt[St]=arguments[St+2];A.children=Mt}if(S&&S.defaultProps)for(P in W=S.defaultProps,W)A[P]===void 0&&(A[P]=W[P]);return be(S,j,A)},X.createRef=function(){return{current:null}},X.forwardRef=function(S){return{$$typeof:L,render:S}},X.isValidElement=$t,X.lazy=function(S){return{$$typeof:B,_payload:{_status:-1,_result:S},_init:G}},X.memo=function(S,k){return{$$typeof:C,type:S,compare:k===void 0?null:k}},X.startTransition=function(S){var k=$.T,O={};$.T=O;try{var P=S(),A=$.S;A!==null&&A(O,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(Pt,ut)}catch(j){ut(j)}finally{k!==null&&O.types!==null&&(k.types=O.types),$.T=k}},X.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},X.use=function(S){return $.H.use(S)},X.useActionState=function(S,k,O){return $.H.useActionState(S,k,O)},X.useCallback=function(S,k){return $.H.useCallback(S,k)},X.useContext=function(S){return $.H.useContext(S)},X.useDebugValue=function(){},X.useDeferredValue=function(S,k){return $.H.useDeferredValue(S,k)},X.useEffect=function(S,k){return $.H.useEffect(S,k)},X.useEffectEvent=function(S){return $.H.useEffectEvent(S)},X.useId=function(){return $.H.useId()},X.useImperativeHandle=function(S,k,O){return $.H.useImperativeHandle(S,k,O)},X.useInsertionEffect=function(S,k){return $.H.useInsertionEffect(S,k)},X.useLayoutEffect=function(S,k){return $.H.useLayoutEffect(S,k)},X.useMemo=function(S,k){return $.H.useMemo(S,k)},X.useOptimistic=function(S,k){return $.H.useOptimistic(S,k)},X.useReducer=function(S,k,O){return $.H.useReducer(S,k,O)},X.useRef=function(S){return $.H.useRef(S)},X.useState=function(S){return $.H.useState(S)},X.useSyncExternalStore=function(S,k,O){return $.H.useSyncExternalStore(S,k,O)},X.useTransition=function(){return $.H.useTransition()},X.version="19.2.8",X}var ad;function Jo(){return ad||(ad=1,Po.exports=Sh()),Po.exports}var q=Jo(),No={exports:{}},Ol={},Ko={exports:{}},Lo={};var id;function hh(){return id||(id=1,(function(s){function u(D,R){var G=D.length;D.push(R);t:for(;0<G;){var ut=G-1>>>1,J=D[ut];if(0<y(J,R))D[ut]=R,D[G]=J,G=ut;else break t}}function c(D){return D.length===0?null:D[0]}function p(D){if(D.length===0)return null;var R=D[0],G=D.pop();if(G!==R){D[0]=G;t:for(var ut=0,J=D.length,S=J>>>1;ut<S;){var k=2*(ut+1)-1,O=D[k],P=k+1,A=D[P];if(0>y(O,G))P<J&&0>y(A,O)?(D[ut]=A,D[P]=G,ut=P):(D[ut]=O,D[k]=G,ut=k);else if(P<J&&0>y(A,G))D[ut]=A,D[P]=G,ut=P;else break t}}return R}function y(D,R){var G=D.sortIndex-R.sortIndex;return G!==0?G:D.id-R.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var T=performance;s.unstable_now=function(){return T.now()}}else{var K=Date,L=K.now();s.unstable_now=function(){return K.now()-L}}var F=[],C=[],B=1,x=null,z=3,lt=!1,Z=!1,U=!1,Ct=!1,it=typeof setTimeout=="function"?setTimeout:null,Et=typeof clearTimeout=="function"?clearTimeout:null,Dt=typeof setImmediate<"u"?setImmediate:null;function dt(D){for(var R=c(C);R!==null;){if(R.callback===null)p(C);else if(R.startTime<=D)p(C),R.sortIndex=R.expirationTime,u(F,R);else break;R=c(C)}}function gt(D){if(U=!1,dt(D),!Z)if(c(F)!==null)Z=!0,Pt||(Pt=!0,qt());else{var R=c(C);R!==null&&te(gt,R.startTime-D)}}var Pt=!1,$=-1,Vt=5,be=-1;function oe(){return Ct?!0:!(s.unstable_now()-be<Vt)}function $t(){if(Ct=!1,Pt){var D=s.unstable_now();be=D;var R=!0;try{t:{Z=!1,U&&(U=!1,Et($),$=-1),lt=!0;var G=z;try{e:{for(dt(D),x=c(F);x!==null&&!(x.expirationTime>D&&oe());){var ut=x.callback;if(typeof ut=="function"){x.callback=null,z=x.priorityLevel;var J=ut(x.expirationTime<=D);if(D=s.unstable_now(),typeof J=="function"){x.callback=J,dt(D),R=!0;break e}x===c(F)&&p(F),dt(D)}else p(F);x=c(F)}if(x!==null)R=!0;else{var S=c(C);S!==null&&te(gt,S.startTime-D),R=!1}}break t}finally{x=null,z=G,lt=!1}R=void 0}}finally{R?qt():Pt=!1}}}var qt;if(typeof Dt=="function")qt=function(){Dt($t)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Ke=Ce.port2;Ce.port1.onmessage=$t,qt=function(){Ke.postMessage(null)}}else qt=function(){it($t,0)};function te(D,R){$=it(function(){D(s.unstable_now())},R)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vt=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return z},s.unstable_next=function(D){switch(z){case 1:case 2:case 3:var R=3;break;default:R=z}var G=z;z=R;try{return D()}finally{z=G}},s.unstable_requestPaint=function(){Ct=!0},s.unstable_runWithPriority=function(D,R){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=z;z=D;try{return R()}finally{z=G}},s.unstable_scheduleCallback=function(D,R,G){var ut=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ut+G:ut):G=ut,D){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=G+J,D={id:B++,callback:R,priorityLevel:D,startTime:G,expirationTime:J,sortIndex:-1},G>ut?(D.sortIndex=G,u(C,D),c(F)===null&&D===c(C)&&(U?(Et($),$=-1):U=!0,te(gt,G-ut))):(D.sortIndex=J,u(F,D),Z||lt||(Z=!0,Pt||(Pt=!0,qt()))),D},s.unstable_shouldYield=oe,s.unstable_wrapCallback=function(D){var R=z;return function(){var G=z;z=R;try{return D.apply(this,arguments)}finally{z=G}}}})(Lo)),Lo}var sd;function yh(){return sd||(sd=1,Ko.exports=hh()),Ko.exports}var Bo={exports:{}},Zt={};var od;function vh(){if(od)return Zt;od=1;var s=Jo();function u(F){var C="https://react.dev/errors/"+F;if(1<arguments.length){C+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)C+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+F+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var p={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},y=Symbol.for("react.portal");function T(F,C,B){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:x==null?null:""+x,children:F,containerInfo:C,implementation:B}}var K=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(F,C){if(F==="font")return"";if(typeof C=="string")return C==="use-credentials"?C:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Zt.createPortal=function(F,C){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!C||C.nodeType!==1&&C.nodeType!==9&&C.nodeType!==11)throw Error(u(299));return T(F,C,null,B)},Zt.flushSync=function(F){var C=K.T,B=p.p;try{if(K.T=null,p.p=2,F)return F()}finally{K.T=C,p.p=B,p.d.f()}},Zt.preconnect=function(F,C){typeof F=="string"&&(C?(C=C.crossOrigin,C=typeof C=="string"?C==="use-credentials"?C:"":void 0):C=null,p.d.C(F,C))},Zt.prefetchDNS=function(F){typeof F=="string"&&p.d.D(F)},Zt.preinit=function(F,C){if(typeof F=="string"&&C&&typeof C.as=="string"){var B=C.as,x=L(B,C.crossOrigin),z=typeof C.integrity=="string"?C.integrity:void 0,lt=typeof C.fetchPriority=="string"?C.fetchPriority:void 0;B==="style"?p.d.S(F,typeof C.precedence=="string"?C.precedence:void 0,{crossOrigin:x,integrity:z,fetchPriority:lt}):B==="script"&&p.d.X(F,{crossOrigin:x,integrity:z,fetchPriority:lt,nonce:typeof C.nonce=="string"?C.nonce:void 0})}},Zt.preinitModule=function(F,C){if(typeof F=="string")if(typeof C=="object"&&C!==null){if(C.as==null||C.as==="script"){var B=L(C.as,C.crossOrigin);p.d.M(F,{crossOrigin:B,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0})}}else C==null&&p.d.M(F)},Zt.preload=function(F,C){if(typeof F=="string"&&typeof C=="object"&&C!==null&&typeof C.as=="string"){var B=C.as,x=L(B,C.crossOrigin);p.d.L(F,B,{crossOrigin:x,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0,type:typeof C.type=="string"?C.type:void 0,fetchPriority:typeof C.fetchPriority=="string"?C.fetchPriority:void 0,referrerPolicy:typeof C.referrerPolicy=="string"?C.referrerPolicy:void 0,imageSrcSet:typeof C.imageSrcSet=="string"?C.imageSrcSet:void 0,imageSizes:typeof C.imageSizes=="string"?C.imageSizes:void 0,media:typeof C.media=="string"?C.media:void 0})}},Zt.preloadModule=function(F,C){if(typeof F=="string")if(C){var B=L(C.as,C.crossOrigin);p.d.m(F,{as:typeof C.as=="string"&&C.as!=="script"?C.as:void 0,crossOrigin:B,integrity:typeof C.integrity=="string"?C.integrity:void 0})}else p.d.m(F)},Zt.requestFormReset=function(F){p.d.r(F)},Zt.unstable_batchedUpdates=function(F,C){return F(C)},Zt.useFormState=function(F,C,B){return K.H.useFormState(F,C,B)},Zt.useFormStatus=function(){return K.H.useHostTransitionStatus()},Zt.version="19.2.8",Zt}var pd;function fh(){if(pd)return Bo.exports;pd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Bo.exports=vh(),Bo.exports}var ud;function bh(){if(ud)return Ol;ud=1;var s=yh(),u=Jo(),c=fh();function p(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function T(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function F(t){if(T(t)!==t)throw Error(p(188))}function C(t){var e=t.alternate;if(!e){if(e=T(t),e===null)throw Error(p(188));return e!==t?null:t}for(var n=t,r=e;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return F(l),t;if(a===r)return F(l),e;a=a.sibling}throw Error(p(188))}if(n.return!==r.return)n=l,r=a;else{for(var i=!1,o=l.child;o;){if(o===n){i=!0,n=l,r=a;break}if(o===r){i=!0,r=l,n=a;break}o=o.sibling}if(!i){for(o=a.child;o;){if(o===n){i=!0,n=a,r=l;break}if(o===r){i=!0,r=a,n=l;break}o=o.sibling}if(!i)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?t:e}function B(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=B(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,z=Symbol.for("react.element"),lt=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),Et=Symbol.for("react.consumer"),Dt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),gt=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),$t=Symbol.iterator;function qt(t){return t===null||typeof t!="object"?null:(t=$t&&t[$t]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Symbol.for("react.client.reference");function Ke(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case it:return"Profiler";case Ct:return"StrictMode";case gt:return"Suspense";case Pt:return"SuspenseList";case be:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case Dt:return t.displayName||"Context";case Et:return(t._context.displayName||"Context")+".Consumer";case dt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Ke(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return Ke(t(e))}catch{}}return null}var te=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ut=[],J=-1;function S(t){return{current:t}}function k(t){0>J||(t.current=ut[J],ut[J]=null,J--)}function O(t,e){J++,ut[J]=t.current,t.current=e}var P=S(null),A=S(null),j=S(null),W=S(null);function Mt(t,e){switch(O(j,e),O(A,t),O(P,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Em(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Em(e),t=gm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(P),O(P,t)}function St(){k(P),k(A),k(j)}function Le(t){t.memoizedState!==null&&O(W,t);var e=P.current,n=gm(e,t.type);e!==n&&(O(A,t),O(P,n))}function Qt(t){A.current===t&&(k(P),k(A)),W.current===t&&(k(W),Nl._currentValue=G)}var pi,ep;function Bn(t){if(pi===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pi=e&&e[1]||"",ep=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pi+t+ep}var ui=!1;function ci(t,e){if(!t||ui)return"";ui=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(w){var b=w}Reflect.construct(t,[],I)}else{try{I.call()}catch(w){b=w}t.call(I.prototype)}}else{try{throw Error()}catch(w){b=w}(I=t())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(w){if(w&&b&&typeof w.stack=="string")return[w.stack,b.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),i=a[0],o=a[1];if(i&&o){var m=i.split(`
`),f=o.split(`
`);for(l=r=0;r<m.length&&!m[r].includes("DetermineComponentFrameRoot");)r++;for(;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;if(r===m.length||l===f.length)for(r=m.length-1,l=f.length-1;1<=r&&0<=l&&m[r]!==f[l];)l--;for(;1<=r&&0<=l;r--,l--)if(m[r]!==f[l]){if(r!==1||l!==1)do if(r--,l--,0>l||m[r]!==f[l]){var E=`
`+m[r].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=r&&0<=l);break}}}finally{ui=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Bn(n):""}function Gd(t,e){switch(t.tag){case 26:case 27:case 5:return Bn(t.type);case 16:return Bn("Lazy");case 13:return t.child!==e&&e!==null?Bn("Suspense Fallback"):Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 15:return ci(t.type,!1);case 11:return ci(t.type.render,!1);case 1:return ci(t.type,!0);case 31:return Bn("Activity");default:return""}}function np(t){try{var e="",n=null;do e+=Gd(t,n),n=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var mi=Object.prototype.hasOwnProperty,di=s.unstable_scheduleCallback,Si=s.unstable_cancelCallback,jd=s.unstable_shouldYield,zd=s.unstable_requestPaint,pe=s.unstable_now,Wd=s.unstable_getCurrentPriorityLevel,rp=s.unstable_ImmediatePriority,lp=s.unstable_UserBlockingPriority,Vl=s.unstable_NormalPriority,Xd=s.unstable_LowPriority,ap=s.unstable_IdlePriority,Yd=s.log,qd=s.unstable_setDisableYieldValue,Vr=null,ue=null;function an(t){if(typeof Yd=="function"&&qd(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(Vr,t)}catch{}}var ce=Math.clz32?Math.clz32:Jd,Qd=Math.log,Zd=Math.LN2;function Jd(t){return t>>>=0,t===0?32:31-(Qd(t)/Zd|0)|0}var Gl=256,jl=262144,zl=4194304;function Rn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wl(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var l=0,a=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var o=r&134217727;return o!==0?(r=o&~a,r!==0?l=Rn(r):(i&=o,i!==0?l=Rn(i):n||(n=o&~t,n!==0&&(l=Rn(n))))):(o=r&~a,o!==0?l=Rn(o):i!==0?l=Rn(i):n||(n=r&~t,n!==0&&(l=Rn(n)))),l===0?0:e!==0&&e!==l&&(e&a)===0&&(a=l&-l,n=e&-e,a>=n||a===32&&(n&4194048)!==0)?e:l}function Gr(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function $d(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ip(){var t=zl;return zl<<=1,(zl&62914560)===0&&(zl=4194304),t}function hi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function t0(t,e,n,r,l,a){var i=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,m=t.expirationTimes,f=t.hiddenUpdates;for(n=i&~n;0<n;){var E=31-ce(n),I=1<<E;o[E]=0,m[E]=-1;var b=f[E];if(b!==null)for(f[E]=null,E=0;E<b.length;E++){var w=b[E];w!==null&&(w.lane&=-536870913)}n&=~I}r!==0&&sp(t,r,0),a!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=a&~(i&~e))}function sp(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-ce(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&261930}function op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ce(n),l=1<<r;l&e|t[r]&e&&(t[r]|=e),n&=~l}}function pp(t,e){var n=e&-e;return n=(n&42)!==0?1:yi(n),(n&(t.suspendedLanes|e))!==0?0:n}function yi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function up(){var t=R.p;return t!==0?t:(t=window.event,t===void 0?32:qm(t.type))}function cp(t,e){var n=R.p;try{return R.p=t,e()}finally{R.p=n}}var sn=Math.random().toString(36).slice(2),Gt="__reactFiber$"+sn,ee="__reactProps$"+sn,nr="__reactContainer$"+sn,fi="__reactEvents$"+sn,e0="__reactListeners$"+sn,n0="__reactHandles$"+sn,mp="__reactResources$"+sn,zr="__reactMarker$"+sn;function bi(t){delete t[Gt],delete t[ee],delete t[fi],delete t[e0],delete t[n0]}function rr(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[Gt])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function lr(t){if(t=t[Gt]||t[nr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Wr(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(p(33))}function ar(t){var e=t[mp];return e||(e=t[mp]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function _t(t){t[zr]=!0}var dp=new Set,Sp={};function On(t,e){ir(t,e),ir(t+"Capture",e)}function ir(t,e){for(Sp[t]=e,t=0;t<e.length;t++)dp.add(e[t])}var r0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hp={},yp={};function l0(t){return mi.call(yp,t)?!0:mi.call(hp,t)?!1:r0.test(t)?yp[t]=!0:(hp[t]=!0,!1)}function Xl(t,e,n){if(l0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Yl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ue(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}function we(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a0(t,e,n){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(i){n=""+i,a.call(this,i)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ci(t){if(!t._valueTracker){var e=vp(t)?"checked":"value";t._valueTracker=a0(t,e,""+t[e])}}function fp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var i0=/[\n"\\]/g;function Fe(t){return t.replace(i0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wi(t,e,n,r,l,a,i,o){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+we(e)):t.value!==""+we(e)&&(t.value=""+we(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Fi(t,i,we(e)):n!=null?Fi(t,i,we(n)):r!=null&&t.removeAttribute("value"),l==null&&a!=null&&(t.defaultChecked=!!a),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+we(o):t.removeAttribute("name")}function bp(t,e,n,r,l,a,i,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),e!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||e!=null)){Ci(t);return}n=n!=null?""+we(n):"",e=e!=null?""+we(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=o?t.checked:!!r,t.defaultChecked=!!r,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Ci(t)}function Fi(t,e,n){e==="number"&&ql(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function sr(t,e,n,r){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&r&&(t[n].defaultSelected=!0)}else{for(n=""+we(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Cp(t,e,n){if(e!=null&&(e=""+we(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+we(n):""}function wp(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(p(92));if(te(r)){if(1<r.length)throw Error(p(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=we(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r),Ci(t)}function or(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fp(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||s0.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Tp(t,e,n){if(e!=null&&typeof e!="object")throw Error(p(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var l in e)r=e[l],e.hasOwnProperty(l)&&n[l]!==r&&Fp(t,l,r)}else for(var a in e)e.hasOwnProperty(a)&&Fp(t,a,e[a])}function Ti(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(t){return p0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function He(){}var Di=null;function Ei(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pr=null,ur=null;function Dp(t){var e=lr(t);if(e&&(t=e.stateNode)){var n=t[ee]||null;t:switch(t=e.stateNode,e.type){case"input":if(wi(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Fe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var l=r[ee]||null;if(!l)throw Error(p(90));wi(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&fp(r)}break t;case"textarea":Cp(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&sr(t,!!n.multiple,e,!1)}}}var gi=!1;function Ep(t,e,n){if(gi)return t(e,n);gi=!0;try{var r=t(e);return r}finally{if(gi=!1,(pr!==null||ur!==null)&&(Ma(),pr&&(e=pr,t=ur,ur=pr=null,Dp(e),t)))for(e=0;e<t.length;e++)Dp(t[e])}}function Xr(t,e){var n=t.stateNode;if(n===null)return null;var r=n[ee]||null;if(r===null)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(p(231,e,typeof n));return n}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=!1;if(Ve)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Ii=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Ii=!1}var on=null,ki=null,Zl=null;function gp(){if(Zl)return Zl;var t,e=ki,n=e.length,r,l="value"in on?on.value:on.textContent,a=l.length;for(t=0;t<n&&e[t]===l[t];t++);var i=n-t;for(r=1;r<=i&&e[n-r]===l[a-r];r++);return Zl=l.slice(t,1<r?1-r:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Ip(){return!1}function ne(t){function e(n,r,l,a,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$l:Ip,this.isPropagationStopped=Ip,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=ne(xn),qr=x({},xn,{view:0,detail:0}),u0=ne(qr),Pi,Ni,Qr,ea=x({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Li,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(Pi=t.screenX-Qr.screenX,Ni=t.screenY-Qr.screenY):Ni=Pi=0,Qr=t),Pi)},movementY:function(t){return"movementY"in t?t.movementY:Ni}}),kp=ne(ea),c0=x({},ea,{dataTransfer:0}),m0=ne(c0),d0=x({},qr,{relatedTarget:0}),Ki=ne(d0),S0=x({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=ne(S0),y0=x({},xn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v0=ne(y0),f0=x({},xn,{data:0}),Pp=ne(f0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=w0[t])?!!e[t]:!1}function Li(){return F0}var T0=x({},qr,{key:function(t){if(t.key){var e=b0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Li,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=ne(T0),E0=x({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=ne(E0),g0=x({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Li}),I0=ne(g0),k0=x({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=ne(k0),N0=x({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=ne(N0),L0=x({},xn,{newState:0,oldState:0}),B0=ne(L0),R0=[9,13,27,32],Bi=Ve&&"CompositionEvent"in window,Zr=null;Ve&&"documentMode"in document&&(Zr=document.documentMode);var O0=Ve&&"TextEvent"in window&&!Zr,Kp=Ve&&(!Bi||Zr&&8<Zr&&11>=Zr),Lp=" ",Bp=!1;function Rp(t,e){switch(t){case"keyup":return R0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function x0(t,e){switch(t){case"compositionend":return Op(e);case"keypress":return e.which!==32?null:(Bp=!0,Lp);case"textInput":return t=e.data,t===Lp&&Bp?null:t;default:return null}}function M0(t,e){if(cr)return t==="compositionend"||!Bi&&Rp(t,e)?(t=gp(),Zl=ki=on=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kp&&e.locale!=="ko"?null:e.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A0[t.type]:e==="textarea"}function Mp(t,e,n,r){pr?ur?ur.push(r):ur=[r]:pr=r,e=ja(e,"onChange"),0<e.length&&(n=new ta("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Jr=null,$r=null;function _0(t){bm(t,0)}function na(t){var e=Wr(t);if(fp(e))return t}function Ap(t,e){if(t==="change")return e}var _p=!1;if(Ve){var Ri;if(Ve){var Oi="oninput"in document;if(!Oi){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Oi=typeof Up.oninput=="function"}Ri=Oi}else Ri=!1;_p=Ri&&(!document.documentMode||9<document.documentMode)}function Hp(){Jr&&(Jr.detachEvent("onpropertychange",Vp),$r=Jr=null)}function Vp(t){if(t.propertyName==="value"&&na($r)){var e=[];Mp(e,$r,t,Ei(t)),Ep(_0,e)}}function U0(t,e,n){t==="focusin"?(Hp(),Jr=e,$r=n,Jr.attachEvent("onpropertychange",Vp)):t==="focusout"&&Hp()}function H0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return na($r)}function V0(t,e){if(t==="click")return na(e)}function G0(t,e){if(t==="input"||t==="change")return na(e)}function j0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var me=typeof Object.is=="function"?Object.is:j0;function tl(t,e){if(me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!mi.call(e,l)||!me(t[l],e[l]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,e){var n=Gp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Gp(n)}}function zp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ql(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function xi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var z0=Ve&&"documentMode"in document&&11>=document.documentMode,mr=null,Mi=null,el=null,Ai=!1;function Xp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ai||mr==null||mr!==ql(r)||(r=mr,"selectionStart"in r&&xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),el&&tl(el,r)||(el=r,r=ja(Mi,"onSelect"),0<r.length&&(e=new ta("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function Mn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dr={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionrun:Mn("Transition","TransitionRun"),transitionstart:Mn("Transition","TransitionStart"),transitioncancel:Mn("Transition","TransitionCancel"),transitionend:Mn("Transition","TransitionEnd")},_i={},Yp={};Ve&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function An(t){if(_i[t])return _i[t];if(!dr[t])return t;var e=dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yp)return _i[t]=e[n];return t}var qp=An("animationend"),Qp=An("animationiteration"),Zp=An("animationstart"),W0=An("transitionrun"),X0=An("transitionstart"),Y0=An("transitioncancel"),Jp=An("transitionend"),$p=new Map,Ui="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ui.push("scrollEnd");function Be(t,e){$p.set(t,e),On(e,[t])}var ra=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Te=[],Sr=0,Hi=0;function la(){for(var t=Sr,e=Hi=Sr=0;e<t;){var n=Te[e];Te[e++]=null;var r=Te[e];Te[e++]=null;var l=Te[e];Te[e++]=null;var a=Te[e];if(Te[e++]=null,r!==null&&l!==null){var i=r.pending;i===null?l.next=l:(l.next=i.next,i.next=l),r.pending=l}a!==0&&tu(n,l,a)}}function aa(t,e,n,r){Te[Sr++]=t,Te[Sr++]=e,Te[Sr++]=n,Te[Sr++]=r,Hi|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Vi(t,e,n,r){return aa(t,e,n,r),ia(t)}function _n(t,e){return aa(t,null,null,e),ia(t)}function tu(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var l=!1,a=t.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(l=!0)),t=a,a=a.return;return t.tag===3?(a=t.stateNode,l&&e!==null&&(l=31-ce(n),t=a.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=n|536870912),a):null}function ia(t){if(50<Tl)throw Tl=0,Zs=null,Error(p(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var hr={};function q0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,n,r){return new q0(t,e,n,r)}function Gi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ge(t,e){var n=t.alternate;return n===null?(n=de(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function eu(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function sa(t,e,n,r,l,a){var i=0;if(r=t,typeof t=="function")Gi(t)&&(i=1);else if(typeof t=="string")i=th(t,n,P.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case be:return t=de(31,n,e,l),t.elementType=be,t.lanes=a,t;case U:return Un(n.children,l,a,e);case Ct:i=8,l|=24;break;case it:return t=de(12,n,e,l|2),t.elementType=it,t.lanes=a,t;case gt:return t=de(13,n,e,l),t.elementType=gt,t.lanes=a,t;case Pt:return t=de(19,n,e,l),t.elementType=Pt,t.lanes=a,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dt:i=10;break t;case Et:i=9;break t;case dt:i=11;break t;case $:i=14;break t;case Vt:i=16,r=null;break t}i=29,n=Error(p(130,t===null?"null":typeof t,"")),r=null}return e=de(i,n,e,l),e.elementType=t,e.type=r,e.lanes=a,e}function Un(t,e,n,r){return t=de(7,t,r,e),t.lanes=n,t}function ji(t,e,n){return t=de(6,t,null,e),t.lanes=n,t}function nu(t){var e=de(18,null,null,0);return e.stateNode=t,e}function zi(t,e,n){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ru=new WeakMap;function De(t,e){if(typeof t=="object"&&t!==null){var n=ru.get(t);return n!==void 0?n:(e={value:t,source:e,stack:np(e)},ru.set(t,e),e)}return{value:t,source:e,stack:np(e)}}var yr=[],vr=0,oa=null,nl=0,Ee=[],ge=0,pn=null,xe=1,Me="";function je(t,e){yr[vr++]=nl,yr[vr++]=oa,oa=t,nl=e}function lu(t,e,n){Ee[ge++]=xe,Ee[ge++]=Me,Ee[ge++]=pn,pn=t;var r=xe;t=Me;var l=32-ce(r)-1;r&=~(1<<l),n+=1;var a=32-ce(e)+l;if(30<a){var i=l-l%5;a=(r&(1<<i)-1).toString(32),r>>=i,l-=i,xe=1<<32-ce(e)+l|n<<l|r,Me=a+t}else xe=1<<a|n<<l|r,Me=t}function Wi(t){t.return!==null&&(je(t,1),lu(t,1,0))}function Xi(t){for(;t===oa;)oa=yr[--vr],yr[vr]=null,nl=yr[--vr],yr[vr]=null;for(;t===pn;)pn=Ee[--ge],Ee[ge]=null,Me=Ee[--ge],Ee[ge]=null,xe=Ee[--ge],Ee[ge]=null}function au(t,e){Ee[ge++]=xe,Ee[ge++]=Me,Ee[ge++]=pn,xe=e.id,Me=e.overflow,pn=t}var jt=null,wt=null,at=!1,un=null,Ie=!1,Yi=Error(p(519));function cn(t){var e=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(De(e,t)),Yi}function iu(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[Gt]=t,e[ee]=r,n){case"dialog":et("cancel",e),et("close",e);break;case"iframe":case"object":case"embed":et("load",e);break;case"video":case"audio":for(n=0;n<El.length;n++)et(El[n],e);break;case"source":et("error",e);break;case"img":case"image":case"link":et("error",e),et("load",e);break;case"details":et("toggle",e);break;case"input":et("invalid",e),bp(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":et("invalid",e);break;case"textarea":et("invalid",e),wp(e,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||Tm(e.textContent,n)?(r.popover!=null&&(et("beforetoggle",e),et("toggle",e)),r.onScroll!=null&&et("scroll",e),r.onScrollEnd!=null&&et("scrollend",e),r.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||cn(t,!0)}function su(t){for(jt=t.return;jt;)switch(jt.tag){case 5:case 31:case 13:Ie=!1;return;case 27:case 3:Ie=!0;return;default:jt=jt.return}}function fr(t){if(t!==jt)return!1;if(!at)return su(t),at=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||mo(t.type,t.memoizedProps)),n=!n),n&&wt&&cn(t),su(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));wt=Lm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));wt=Lm(t)}else e===27?(e=wt,En(t.type)?(t=fo,fo=null,wt=t):wt=e):wt=jt?Pe(t.stateNode.nextSibling):null;return!0}function Hn(){wt=jt=null,at=!1}function qi(){var t=un;return t!==null&&(ie===null?ie=t:ie.push.apply(ie,t),un=null),t}function rl(t){un===null?un=[t]:un.push(t)}var Qi=S(null),Vn=null,ze=null;function mn(t,e,n){O(Qi,e._currentValue),e._currentValue=n}function We(t){t._currentValue=Qi.current,k(Qi)}function Zi(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e,n,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){var i=l.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=l;for(var m=0;m<e.length;m++)if(o.context===e[m]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Zi(a.return,n,t),r||(i=null);break t}a=o.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(p(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Zi(i,n,t),i=null}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function br(t,e,n,r){t=null;for(var l=e,a=!1;l!==null;){if(!a){if((l.flags&524288)!==0)a=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var o=l.type;me(l.pendingProps.value,i.value)||(t!==null?t.push(o):t=[o])}}else if(l===W.current){if(i=l.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Nl):t=[Nl])}l=l.return}t!==null&&Ji(e,t,n,r),e.flags|=262144}function pa(t){for(t=t.firstContext;t!==null;){if(!me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gn(t){Vn=t,ze=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zt(t){return ou(Vn,t)}function ua(t,e){return Vn===null&&Gn(t),ou(t,e)}function ou(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ze===null){if(t===null)throw Error(p(308));ze=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ze=ze.next=e;return n}var Q0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Z0=s.unstable_scheduleCallback,J0=s.unstable_NormalPriority,Lt={$$typeof:Dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new Q0,data:new Map,refCount:0}}function ll(t){t.refCount--,t.refCount===0&&Z0(J0,function(){t.controller.abort()})}var al=null,ts=0,Cr=0,wr=null;function $0(t,e){if(al===null){var n=al=[];ts=0,Cr=ro(),wr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return ts++,e.then(pu,pu),e}function pu(){if(--ts===0&&al!==null){wr!==null&&(wr.status="fulfilled");var t=al;al=null,Cr=0,wr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function tS(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var uu=D.S;D.S=function(t,e){Xc=pe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&$0(t,e),uu!==null&&uu(t,e)};var jn=S(null);function es(){var t=jn.current;return t!==null?t:ft.pooledCache}function ca(t,e){e===null?O(jn,jn.current):O(jn,e.pool)}function cu(){var t=es();return t===null?null:{parent:Lt._currentValue,pool:t}}var Fr=Error(p(460)),ns=Error(p(474)),ma=Error(p(542)),da={then:function(){}};function mu(t){return t=t.status,t==="fulfilled"||t==="rejected"}function du(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(He,He),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hu(t),t;default:if(typeof e.status=="string")e.then(He,He);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hu(t),t}throw Wn=e,Fr}}function zn(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wn=n,Fr):n}}var Wn=null;function Su(){if(Wn===null)throw Error(p(459));var t=Wn;return Wn=null,t}function hu(t){if(t===Fr||t===ma)throw Error(p(483))}var Tr=null,il=0;function Sa(t){var e=il;return il+=1,Tr===null&&(Tr=[]),du(Tr,t,e)}function sl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ha(t,e){throw e.$$typeof===z?Error(p(525)):(t=Object.prototype.toString.call(e),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function yu(t){function e(h,d){if(t){var v=h.deletions;v===null?(h.deletions=[d],h.flags|=16):v.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function l(h,d){return h=Ge(h,d),h.index=0,h.sibling=null,h}function a(h,d,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<d?(h.flags|=67108866,d):v):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function i(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function o(h,d,v,g){return d===null||d.tag!==6?(d=ji(v,h.mode,g),d.return=h,d):(d=l(d,v),d.return=h,d)}function m(h,d,v,g){var H=v.type;return H===U?E(h,d,v.props.children,g,v.key):d!==null&&(d.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Vt&&zn(H)===d.type)?(d=l(d,v.props),sl(d,v),d.return=h,d):(d=sa(v.type,v.key,v.props,null,h.mode,g),sl(d,v),d.return=h,d)}function f(h,d,v,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=zi(v,h.mode,g),d.return=h,d):(d=l(d,v.children||[]),d.return=h,d)}function E(h,d,v,g,H){return d===null||d.tag!==7?(d=Un(v,h.mode,g,H),d.return=h,d):(d=l(d,v),d.return=h,d)}function I(h,d,v){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=ji(""+d,h.mode,v),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case lt:return v=sa(d.type,d.key,d.props,null,h.mode,v),sl(v,d),v.return=h,v;case Z:return d=zi(d,h.mode,v),d.return=h,d;case Vt:return d=zn(d),I(h,d,v)}if(te(d)||qt(d))return d=Un(d,h.mode,v,null),d.return=h,d;if(typeof d.then=="function")return I(h,Sa(d),v);if(d.$$typeof===Dt)return I(h,ua(h,d),v);ha(h,d)}return null}function b(h,d,v,g){var H=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return H!==null?null:o(h,d,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lt:return v.key===H?m(h,d,v,g):null;case Z:return v.key===H?f(h,d,v,g):null;case Vt:return v=zn(v),b(h,d,v,g)}if(te(v)||qt(v))return H!==null?null:E(h,d,v,g,null);if(typeof v.then=="function")return b(h,d,Sa(v),g);if(v.$$typeof===Dt)return b(h,d,ua(h,v),g);ha(h,v)}return null}function w(h,d,v,g,H){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return h=h.get(v)||null,o(d,h,""+g,H);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lt:return h=h.get(g.key===null?v:g.key)||null,m(d,h,g,H);case Z:return h=h.get(g.key===null?v:g.key)||null,f(d,h,g,H);case Vt:return g=zn(g),w(h,d,v,g,H)}if(te(g)||qt(g))return h=h.get(v)||null,E(d,h,g,H,null);if(typeof g.then=="function")return w(h,d,v,Sa(g),H);if(g.$$typeof===Dt)return w(h,d,v,ua(d,g),H);ha(d,g)}return null}function M(h,d,v,g){for(var H=null,st=null,_=d,Q=d=0,rt=null;_!==null&&Q<v.length;Q++){_.index>Q?(rt=_,_=null):rt=_.sibling;var ot=b(h,_,v[Q],g);if(ot===null){_===null&&(_=rt);break}t&&_&&ot.alternate===null&&e(h,_),d=a(ot,d,Q),st===null?H=ot:st.sibling=ot,st=ot,_=rt}if(Q===v.length)return n(h,_),at&&je(h,Q),H;if(_===null){for(;Q<v.length;Q++)_=I(h,v[Q],g),_!==null&&(d=a(_,d,Q),st===null?H=_:st.sibling=_,st=_);return at&&je(h,Q),H}for(_=r(_);Q<v.length;Q++)rt=w(_,h,Q,v[Q],g),rt!==null&&(t&&rt.alternate!==null&&_.delete(rt.key===null?Q:rt.key),d=a(rt,d,Q),st===null?H=rt:st.sibling=rt,st=rt);return t&&_.forEach(function(Nn){return e(h,Nn)}),at&&je(h,Q),H}function V(h,d,v,g){if(v==null)throw Error(p(151));for(var H=null,st=null,_=d,Q=d=0,rt=null,ot=v.next();_!==null&&!ot.done;Q++,ot=v.next()){_.index>Q?(rt=_,_=null):rt=_.sibling;var Nn=b(h,_,ot.value,g);if(Nn===null){_===null&&(_=rt);break}t&&_&&Nn.alternate===null&&e(h,_),d=a(Nn,d,Q),st===null?H=Nn:st.sibling=Nn,st=Nn,_=rt}if(ot.done)return n(h,_),at&&je(h,Q),H;if(_===null){for(;!ot.done;Q++,ot=v.next())ot=I(h,ot.value,g),ot!==null&&(d=a(ot,d,Q),st===null?H=ot:st.sibling=ot,st=ot);return at&&je(h,Q),H}for(_=r(_);!ot.done;Q++,ot=v.next())ot=w(_,h,Q,ot.value,g),ot!==null&&(t&&ot.alternate!==null&&_.delete(ot.key===null?Q:ot.key),d=a(ot,d,Q),st===null?H=ot:st.sibling=ot,st=ot);return t&&_.forEach(function(ch){return e(h,ch)}),at&&je(h,Q),H}function vt(h,d,v,g){if(typeof v=="object"&&v!==null&&v.type===U&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case lt:t:{for(var H=v.key;d!==null;){if(d.key===H){if(H=v.type,H===U){if(d.tag===7){n(h,d.sibling),g=l(d,v.props.children),g.return=h,h=g;break t}}else if(d.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Vt&&zn(H)===d.type){n(h,d.sibling),g=l(d,v.props),sl(g,v),g.return=h,h=g;break t}n(h,d);break}else e(h,d);d=d.sibling}v.type===U?(g=Un(v.props.children,h.mode,g,v.key),g.return=h,h=g):(g=sa(v.type,v.key,v.props,null,h.mode,g),sl(g,v),g.return=h,h=g)}return i(h);case Z:t:{for(H=v.key;d!==null;){if(d.key===H)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(h,d.sibling),g=l(d,v.children||[]),g.return=h,h=g;break t}else{n(h,d);break}else e(h,d);d=d.sibling}g=zi(v,h.mode,g),g.return=h,h=g}return i(h);case Vt:return v=zn(v),vt(h,d,v,g)}if(te(v))return M(h,d,v,g);if(qt(v)){if(H=qt(v),typeof H!="function")throw Error(p(150));return v=H.call(v),V(h,d,v,g)}if(typeof v.then=="function")return vt(h,d,Sa(v),g);if(v.$$typeof===Dt)return vt(h,d,ua(h,v),g);ha(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,d!==null&&d.tag===6?(n(h,d.sibling),g=l(d,v),g.return=h,h=g):(n(h,d),g=ji(v,h.mode,g),g.return=h,h=g),i(h)):n(h,d)}return function(h,d,v,g){try{il=0;var H=vt(h,d,v,g);return Tr=null,H}catch(_){if(_===Fr||_===ma)throw _;var st=de(29,_,null,h.mode);return st.lanes=g,st.return=h,st}}}var Xn=yu(!0),vu=yu(!1),dn=!1;function rs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ls(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(pt&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=ia(t),tu(t,null,n),e}return aa(t,r,e,n),ia(t)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,op(t,n)}}function as(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?l=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?l=a=e:a=a.next=e}else l=a=e;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var is=!1;function pl(){if(is){var t=wr;if(t!==null)throw t}}function ul(t,e,n,r){is=!1;var l=t.updateQueue;dn=!1;var a=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var m=o,f=m.next;m.next=null,i===null?a=f:i.next=f,i=m;var E=t.alternate;E!==null&&(E=E.updateQueue,o=E.lastBaseUpdate,o!==i&&(o===null?E.firstBaseUpdate=f:o.next=f,E.lastBaseUpdate=m))}if(a!==null){var I=l.baseState;i=0,E=f=m=null,o=a;do{var b=o.lane&-536870913,w=b!==o.lane;if(w?(nt&b)===b:(r&b)===b){b!==0&&b===Cr&&(is=!0),E!==null&&(E=E.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var M=t,V=o;b=e;var vt=n;switch(V.tag){case 1:if(M=V.payload,typeof M=="function"){I=M.call(vt,I,b);break t}I=M;break t;case 3:M.flags=M.flags&-65537|128;case 0:if(M=V.payload,b=typeof M=="function"?M.call(vt,I,b):M,b==null)break t;I=x({},I,b);break t;case 2:dn=!0}}b=o.callback,b!==null&&(t.flags|=64,w&&(t.flags|=8192),w=l.callbacks,w===null?l.callbacks=[b]:w.push(b))}else w={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},E===null?(f=E=w,m=I):E=E.next=w,i|=b;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;w=o,o=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);E===null&&(m=I),l.baseState=m,l.firstBaseUpdate=f,l.lastBaseUpdate=E,a===null&&(l.shared.lanes=0),Cn|=i,t.lanes=i,t.memoizedState=I}}function fu(t,e){if(typeof t!="function")throw Error(p(191,t));t.call(e)}function bu(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)fu(n[t],e)}var Dr=S(null),ya=S(0);function Cu(t,e){t=en,O(ya,t),O(Dr,e),en=t|e.baseLanes}function ss(){O(ya,en),O(Dr,Dr.current)}function os(){en=ya.current,k(Dr),k(ya)}var Se=S(null),ke=null;function yn(t){var e=t.alternate;O(Nt,Nt.current&1),O(Se,t),ke===null&&(e===null||Dr.current!==null||e.memoizedState!==null)&&(ke=t)}function ps(t){O(Nt,Nt.current),O(Se,t),ke===null&&(ke=t)}function wu(t){t.tag===22?(O(Nt,Nt.current),O(Se,t),ke===null&&(ke=t)):vn()}function vn(){O(Nt,Nt.current),O(Se,Se.current)}function he(t){k(Se),ke===t&&(ke=null),k(Nt)}var Nt=S(0);function va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yo(n)||vo(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xe=0,Y=null,ht=null,Bt=null,fa=!1,Er=!1,Yn=!1,ba=0,cl=0,gr=null,eS=0;function It(){throw Error(p(321))}function us(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!me(t[n],e[n]))return!1;return!0}function cs(t,e,n,r,l,a){return Xe=a,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?lc:gs,Yn=!1,a=n(r,l),Yn=!1,Er&&(a=Tu(e,n,r,l)),Fu(t),a}function Fu(t){D.H=Sl;var e=ht!==null&&ht.next!==null;if(Xe=0,Bt=ht=Y=null,fa=!1,cl=0,gr=null,e)throw Error(p(300));t===null||Rt||(t=t.dependencies,t!==null&&pa(t)&&(Rt=!0))}function Tu(t,e,n,r){Y=t;var l=0;do{if(Er&&(gr=null),cl=0,Er=!1,25<=l)throw Error(p(301));if(l+=1,Bt=ht=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}D.H=ac,a=e(n,r)}while(Er);return a}function nS(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?ml(e):e,t=t.useState()[0],(ht!==null?ht.memoizedState:null)!==t&&(Y.flags|=1024),e}function ms(){var t=ba!==0;return ba=0,t}function ds(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ss(t){if(fa){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}fa=!1}Xe=0,Bt=ht=Y=null,Er=!1,cl=ba=0,gr=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Y.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Kt(){if(ht===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=Bt===null?Y.memoizedState:Bt.next;if(e!==null)Bt=e,ht=t;else{if(t===null)throw Y.alternate===null?Error(p(467)):Error(p(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Bt===null?Y.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ca(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(t){var e=cl;return cl+=1,gr===null&&(gr=[]),t=du(gr,t,e),e=Y,(Bt===null?e.memoizedState:Bt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?lc:gs),t}function wa(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ml(t);if(t.$$typeof===Dt)return zt(t)}throw Error(p(438,String(t)))}function hs(t){var e=null,n=Y.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=Y.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ca(),Y.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=oe;return e.index++,n}function Ye(t,e){return typeof e=="function"?e(t):e}function Fa(t){var e=Kt();return ys(e,ht,t)}function ys(t,e,n){var r=t.queue;if(r===null)throw Error(p(311));r.lastRenderedReducer=n;var l=t.baseQueue,a=r.pending;if(a!==null){if(l!==null){var i=l.next;l.next=a.next,a.next=i}e.baseQueue=l=a,r.pending=null}if(a=t.baseState,l===null)t.memoizedState=a;else{e=l.next;var o=i=null,m=null,f=e,E=!1;do{var I=f.lane&-536870913;if(I!==f.lane?(nt&I)===I:(Xe&I)===I){var b=f.revertLane;if(b===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),I===Cr&&(E=!0);else if((Xe&b)===b){f=f.next,b===Cr&&(E=!0);continue}else I={lane:0,revertLane:f.revertLane,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},m===null?(o=m=I,i=a):m=m.next=I,Y.lanes|=b,Cn|=b;I=f.action,Yn&&n(a,I),a=f.hasEagerState?f.eagerState:n(a,I)}else b={lane:I,revertLane:f.revertLane,gesture:f.gesture,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},m===null?(o=m=b,i=a):m=m.next=b,Y.lanes|=I,Cn|=I;f=f.next}while(f!==null&&f!==e);if(m===null?i=a:m.next=o,!me(a,t.memoizedState)&&(Rt=!0,E&&(n=wr,n!==null)))throw n;t.memoizedState=a,t.baseState=i,t.baseQueue=m,r.lastRenderedState=a}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function vs(t){var e=Kt(),n=e.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=t;var r=n.dispatch,l=n.pending,a=e.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do a=t(a,i.action),i=i.next;while(i!==l);me(a,e.memoizedState)||(Rt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function Du(t,e,n){var r=Y,l=Kt(),a=at;if(a){if(n===void 0)throw Error(p(407));n=n()}else n=e();var i=!me((ht||l).memoizedState,n);if(i&&(l.memoizedState=n,Rt=!0),l=l.queue,Cs(Iu.bind(null,r,l,t),[t]),l.getSnapshot!==e||i||Bt!==null&&Bt.memoizedState.tag&1){if(r.flags|=2048,Ir(9,{destroy:void 0},gu.bind(null,r,l,n,e),null),ft===null)throw Error(p(349));a||(Xe&127)!==0||Eu(r,e,n)}return n}function Eu(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Y.updateQueue,e===null?(e=Ca(),Y.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gu(t,e,n,r){e.value=n,e.getSnapshot=r,ku(e)&&Pu(t)}function Iu(t,e,n){return n(function(){ku(e)&&Pu(t)})}function ku(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!me(t,n)}catch{return!0}}function Pu(t){var e=_n(t,2);e!==null&&se(e,t,2)}function fs(t){var e=Jt();if(typeof t=="function"){var n=t;if(t=n(),Yn){an(!0);try{n()}finally{an(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:t},e}function Nu(t,e,n,r){return t.baseState=n,ys(t,ht,typeof r=="function"?r:Ye)}function rS(t,e,n,r,l){if(Ea(t))throw Error(p(485));if(t=e.action,t!==null){var a={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){a.listeners.push(i)}};D.T!==null?n(!0):a.isTransition=!1,r(a),n=e.pending,n===null?(a.next=e.pending=a,Ku(e,a)):(a.next=n.next,e.pending=n.next=a)}}function Ku(t,e){var n=e.action,r=e.payload,l=t.state;if(e.isTransition){var a=D.T,i={};D.T=i;try{var o=n(l,r),m=D.S;m!==null&&m(i,o),Lu(t,e,o)}catch(f){bs(t,e,f)}finally{a!==null&&i.types!==null&&(a.types=i.types),D.T=a}}else try{a=n(l,r),Lu(t,e,a)}catch(f){bs(t,e,f)}}function Lu(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Bu(t,e,r)},function(r){return bs(t,e,r)}):Bu(t,e,n)}function Bu(t,e,n){e.status="fulfilled",e.value=n,Ru(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Ku(t,n)))}function bs(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,Ru(e),e=e.next;while(e!==r)}t.action=null}function Ru(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ou(t,e){return e}function xu(t,e){if(at){var n=ft.formState;if(n!==null){t:{var r=Y;if(at){if(wt){e:{for(var l=wt,a=Ie;l.nodeType!==8;){if(!a){l=null;break e}if(l=Pe(l.nextSibling),l===null){l=null;break e}}a=l.data,l=a==="F!"||a==="F"?l:null}if(l){wt=Pe(l.nextSibling),r=l.data==="F!";break t}}cn(r)}r=!1}r&&(e=n[0])}}return n=Jt(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:e},n.queue=r,n=ec.bind(null,Y,r),r.dispatch=n,r=fs(!1),a=Es.bind(null,Y,!1,r.queue),r=Jt(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,n=rS.bind(null,Y,l,a,n),l.dispatch=n,r.memoizedState=t,[e,n,!1]}function Mu(t){var e=Kt();return Au(e,ht,t)}function Au(t,e,n){if(e=ys(t,e,Ou)[0],t=Fa(Ye)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=ml(e)}catch(i){throw i===Fr?ma:i}else r=e;e=Kt();var l=e.queue,a=l.dispatch;return n!==e.memoizedState&&(Y.flags|=2048,Ir(9,{destroy:void 0},lS.bind(null,l,n),null)),[r,a,t]}function lS(t,e){t.action=e}function _u(t){var e=Kt(),n=ht;if(n!==null)return Au(e,n,t);Kt(),e=e.memoizedState,n=Kt();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Ir(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=Y.updateQueue,e===null&&(e=Ca(),Y.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function Uu(){return Kt().memoizedState}function Ta(t,e,n,r){var l=Jt();Y.flags|=t,l.memoizedState=Ir(1|e,{destroy:void 0},n,r===void 0?null:r)}function Da(t,e,n,r){var l=Kt();r=r===void 0?null:r;var a=l.memoizedState.inst;ht!==null&&r!==null&&us(r,ht.memoizedState.deps)?l.memoizedState=Ir(e,a,n,r):(Y.flags|=t,l.memoizedState=Ir(1|e,a,n,r))}function Hu(t,e){Ta(8390656,8,t,e)}function Cs(t,e){Da(2048,8,t,e)}function aS(t){Y.flags|=4;var e=Y.updateQueue;if(e===null)e=Ca(),Y.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Vu(t){var e=Kt().memoizedState;return aS({ref:e,nextImpl:t}),function(){if((pt&2)!==0)throw Error(p(440));return e.impl.apply(void 0,arguments)}}function Gu(t,e){return Da(4,2,t,e)}function ju(t,e){return Da(4,4,t,e)}function zu(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wu(t,e,n){n=n!=null?n.concat([t]):null,Da(4,4,zu.bind(null,e,t),n)}function ws(){}function Xu(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&us(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yu(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&us(e,r[1]))return r[0];if(r=t(),Yn){an(!0);try{t()}finally{an(!1)}}return n.memoizedState=[r,e],r}function Fs(t,e,n){return n===void 0||(Xe&1073741824)!==0&&(nt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=qc(),Y.lanes|=t,Cn|=t,n)}function qu(t,e,n,r){return me(n,e)?n:Dr.current!==null?(t=Fs(t,n,r),me(t,e)||(Rt=!0),t):(Xe&42)===0||(Xe&1073741824)!==0&&(nt&261930)===0?(Rt=!0,t.memoizedState=n):(t=qc(),Y.lanes|=t,Cn|=t,e)}function Qu(t,e,n,r,l){var a=R.p;R.p=a!==0&&8>a?a:8;var i=D.T,o={};D.T=o,Es(t,!1,e,n);try{var m=l(),f=D.S;if(f!==null&&f(o,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var E=tS(m,r);dl(t,e,E,fe(t))}else dl(t,e,r,fe(t))}catch(I){dl(t,e,{then:function(){},status:"rejected",reason:I},fe())}finally{R.p=a,i!==null&&o.types!==null&&(i.types=o.types),D.T=i}}function iS(){}function Ts(t,e,n,r){if(t.tag!==5)throw Error(p(476));var l=Zu(t).queue;Qu(t,l,e,G,n===null?iS:function(){return Ju(t),n(r)})}function Zu(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:G},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ju(t){var e=Zu(t);e.next===null&&(e=t.alternate.memoizedState),dl(t,e.next.queue,{},fe())}function Ds(){return zt(Nl)}function $u(){return Kt().memoizedState}function tc(){return Kt().memoizedState}function sS(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=fe();t=Sn(n);var r=hn(e,t,n);r!==null&&(se(r,e,n),ol(r,e,n)),e={cache:$i()},t.payload=e;return}e=e.return}}function oS(t,e,n){var r=fe();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ea(t)?nc(e,n):(n=Vi(t,e,n,r),n!==null&&(se(n,t,r),rc(n,e,r)))}function ec(t,e,n){var r=fe();dl(t,e,n,r)}function dl(t,e,n,r){var l={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ea(t))nc(e,l);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var i=e.lastRenderedState,o=a(i,n);if(l.hasEagerState=!0,l.eagerState=o,me(o,i))return aa(t,e,l,0),ft===null&&la(),!1}catch{}if(n=Vi(t,e,l,r),n!==null)return se(n,t,r),rc(n,e,r),!0}return!1}function Es(t,e,n,r){if(r={lane:2,revertLane:ro(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ea(t)){if(e)throw Error(p(479))}else e=Vi(t,n,r,2),e!==null&&se(e,t,2)}function Ea(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function nc(t,e){Er=fa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rc(t,e,n){if((n&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,op(t,n)}}var Sl={readContext:zt,use:wa,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It,useHostTransitionStatus:It,useFormState:It,useActionState:It,useOptimistic:It,useMemoCache:It,useCacheRefresh:It};Sl.useEffectEvent=It;var lc={readContext:zt,use:wa,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Hu,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ta(4194308,4,zu.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){Ta(4,2,t,e)},useMemo:function(t,e){var n=Jt();e=e===void 0?null:e;var r=t();if(Yn){an(!0);try{t()}finally{an(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=Jt();if(n!==void 0){var l=n(e);if(Yn){an(!0);try{n(e)}finally{an(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=oS.bind(null,Y,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:function(t){t=fs(t);var e=t.queue,n=ec.bind(null,Y,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ws,useDeferredValue:function(t,e){var n=Jt();return Fs(n,t,e)},useTransition:function(){var t=fs(!1);return t=Qu.bind(null,Y,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=Y,l=Jt();if(at){if(n===void 0)throw Error(p(407));n=n()}else{if(n=e(),ft===null)throw Error(p(349));(nt&127)!==0||Eu(r,e,n)}l.memoizedState=n;var a={value:n,getSnapshot:e};return l.queue=a,Hu(Iu.bind(null,r,a,t),[t]),r.flags|=2048,Ir(9,{destroy:void 0},gu.bind(null,r,a,n,e),null),n},useId:function(){var t=Jt(),e=ft.identifierPrefix;if(at){var n=Me,r=xe;n=(r&~(1<<32-ce(r)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=eS++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Ds,useFormState:xu,useActionState:xu,useOptimistic:function(t){var e=Jt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Es.bind(null,Y,!0,n),n.dispatch=e,[t,e]},useMemoCache:hs,useCacheRefresh:function(){return Jt().memoizedState=sS.bind(null,Y)},useEffectEvent:function(t){var e=Jt(),n={impl:t};return e.memoizedState=n,function(){if((pt&2)!==0)throw Error(p(440));return n.impl.apply(void 0,arguments)}}},gs={readContext:zt,use:wa,useCallback:Xu,useContext:zt,useEffect:Cs,useImperativeHandle:Wu,useInsertionEffect:Gu,useLayoutEffect:ju,useMemo:Yu,useReducer:Fa,useRef:Uu,useState:function(){return Fa(Ye)},useDebugValue:ws,useDeferredValue:function(t,e){var n=Kt();return qu(n,ht.memoizedState,t,e)},useTransition:function(){var t=Fa(Ye)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:ml(t),e]},useSyncExternalStore:Du,useId:$u,useHostTransitionStatus:Ds,useFormState:Mu,useActionState:Mu,useOptimistic:function(t,e){var n=Kt();return Nu(n,ht,t,e)},useMemoCache:hs,useCacheRefresh:tc};gs.useEffectEvent=Vu;var ac={readContext:zt,use:wa,useCallback:Xu,useContext:zt,useEffect:Cs,useImperativeHandle:Wu,useInsertionEffect:Gu,useLayoutEffect:ju,useMemo:Yu,useReducer:vs,useRef:Uu,useState:function(){return vs(Ye)},useDebugValue:ws,useDeferredValue:function(t,e){var n=Kt();return ht===null?Fs(n,t,e):qu(n,ht.memoizedState,t,e)},useTransition:function(){var t=vs(Ye)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:ml(t),e]},useSyncExternalStore:Du,useId:$u,useHostTransitionStatus:Ds,useFormState:_u,useActionState:_u,useOptimistic:function(t,e){var n=Kt();return ht!==null?Nu(n,ht,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:hs,useCacheRefresh:tc};ac.useEffectEvent=Vu;function Is(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:x({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ks={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=fe(),l=Sn(r);l.payload=e,n!=null&&(l.callback=n),e=hn(t,l,r),e!==null&&(se(e,t,r),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=fe(),l=Sn(r);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=hn(t,l,r),e!==null&&(se(e,t,r),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fe(),r=Sn(n);r.tag=2,e!=null&&(r.callback=e),e=hn(t,r,n),e!==null&&(se(e,t,n),ol(e,t,n))}};function ic(t,e,n,r,l,a,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,i):e.prototype&&e.prototype.isPureReactComponent?!tl(n,r)||!tl(l,a):!0}function sc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ks.enqueueReplaceState(e,e.state,null)}function qn(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=x({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}function oc(t){ra(t)}function pc(t){console.error(t)}function uc(t){ra(t)}function ga(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function cc(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ps(t,e,n){return n=Sn(n),n.tag=3,n.payload={element:null},n.callback=function(){ga(t,e)},n}function mc(t){return t=Sn(t),t.tag=3,t}function dc(t,e,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var a=r.value;t.payload=function(){return l(a)},t.callback=function(){cc(e,n,r)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){cc(e,n,r),typeof l!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})})}function pS(t,e,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&br(e,n,l,!0),n=Se.current,n!==null){switch(n.tag){case 31:case 13:return ke===null?Aa():n.alternate===null&&kt===0&&(kt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===da?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),to(t,r,l)),!1;case 22:return n.flags|=65536,r===da?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),to(t,r,l)),!1}throw Error(p(435,n.tag))}return to(t,r,l),Aa(),!1}if(at)return e=Se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==Yi&&(t=Error(p(422),{cause:r}),rl(De(t,n)))):(r!==Yi&&(e=Error(p(423),{cause:r}),rl(De(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=De(r,n),l=Ps(t.stateNode,r,l),as(t,l),kt!==4&&(kt=2)),!1;var a=Error(p(520),{cause:r});if(a=De(a,n),Fl===null?Fl=[a]:Fl.push(a),kt!==4&&(kt=2),e===null)return!0;r=De(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Ps(n.stateNode,r,t),as(n,t),!1;case 1:if(e=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))))return n.flags|=65536,l&=-l,n.lanes|=l,l=mc(l),dc(l,t,n,r),as(n,l),!1}n=n.return}while(n!==null);return!1}var Ns=Error(p(461)),Rt=!1;function Wt(t,e,n,r){e.child=t===null?vu(e,null,n,r):Xn(e,t.child,n,r)}function Sc(t,e,n,r,l){n=n.render;var a=e.ref;if("ref"in r){var i={};for(var o in r)o!=="ref"&&(i[o]=r[o])}else i=r;return Gn(e),r=cs(t,e,n,i,a,l),o=ms(),t!==null&&!Rt?(ds(t,e,l),qe(t,e,l)):(at&&o&&Wi(e),e.flags|=1,Wt(t,e,r,l),e.child)}function hc(t,e,n,r,l){if(t===null){var a=n.type;return typeof a=="function"&&!Gi(a)&&a.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=a,yc(t,e,a,r,l)):(t=sa(n.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!As(t,l)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(i,r)&&t.ref===e.ref)return qe(t,e,l)}return e.flags|=1,t=Ge(a,r),t.ref=e.ref,t.return=e,e.child=t}function yc(t,e,n,r,l){if(t!==null){var a=t.memoizedProps;if(tl(a,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=a,As(t,l))(t.flags&131072)!==0&&(Rt=!0);else return e.lanes=t.lanes,qe(t,e,l)}return Ks(t,e,n,r,l)}function vc(t,e,n,r){var l=r.children,a=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~a}else r=0,e.child=null;return fc(t,e,a,n,r)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ca(e,a!==null?a.cachePool:null),a!==null?Cu(e,a):ss(),wu(e);else return r=e.lanes=536870912,fc(t,e,a!==null?a.baseLanes|n:n,n,r)}else a!==null?(ca(e,a.cachePool),Cu(e,a),vn(),e.memoizedState=null):(t!==null&&ca(e,null),ss(),vn());return Wt(t,e,l,n),e.child}function hl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function fc(t,e,n,r,l){var a=es();return a=a===null?null:{parent:Lt._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&ca(e,null),ss(),wu(e),t!==null&&br(t,e,r,!0),e.childLanes=l,null}function Ia(t,e){return e=Pa({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function bc(t,e,n){return Xn(e,t.child,null,n),t=Ia(e,e.pendingProps),t.flags|=2,he(e),e.memoizedState=null,t}function uS(t,e,n){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(at){if(r.mode==="hidden")return t=Ia(e,r),e.lanes=536870912,hl(null,t);if(ps(e),(t=wt)?(t=Km(t,Ie),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:pn!==null?{id:xe,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},n=nu(t),n.return=e,e.child=n,jt=e,wt=null)):t=null,t===null)throw cn(e);return e.lanes=536870912,null}return Ia(e,r)}var a=t.memoizedState;if(a!==null){var i=a.dehydrated;if(ps(e),l)if(e.flags&256)e.flags&=-257,e=bc(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(p(558));else if(Rt||br(t,e,n,!1),l=(n&t.childLanes)!==0,Rt||l){if(r=ft,r!==null&&(i=pp(r,n),i!==0&&i!==a.retryLane))throw a.retryLane=i,_n(t,i),se(r,t,i),Ns;Aa(),e=bc(t,e,n)}else t=a.treeContext,wt=Pe(i.nextSibling),jt=e,at=!0,un=null,Ie=!1,t!==null&&au(e,t),e=Ia(e,r),e.flags|=4096;return e}return t=Ge(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ka(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(p(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Ks(t,e,n,r,l){return Gn(e),n=cs(t,e,n,r,void 0,l),r=ms(),t!==null&&!Rt?(ds(t,e,l),qe(t,e,l)):(at&&r&&Wi(e),e.flags|=1,Wt(t,e,n,l),e.child)}function Cc(t,e,n,r,l,a){return Gn(e),e.updateQueue=null,n=Tu(e,r,n,l),Fu(t),r=ms(),t!==null&&!Rt?(ds(t,e,a),qe(t,e,a)):(at&&r&&Wi(e),e.flags|=1,Wt(t,e,n,a),e.child)}function wc(t,e,n,r,l){if(Gn(e),e.stateNode===null){var a=hr,i=n.contextType;typeof i=="object"&&i!==null&&(a=zt(i)),a=new n(r,a),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=ks,e.stateNode=a,a._reactInternals=e,a=e.stateNode,a.props=r,a.state=e.memoizedState,a.refs={},rs(e),i=n.contextType,a.context=typeof i=="object"&&i!==null?zt(i):hr,a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Is(e,n,i,r),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(i=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),i!==a.state&&ks.enqueueReplaceState(a,a.state,null),ul(e,r,a,l),pl(),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){a=e.stateNode;var o=e.memoizedProps,m=qn(n,o);a.props=m;var f=a.context,E=n.contextType;i=hr,typeof E=="object"&&E!==null&&(i=zt(E));var I=n.getDerivedStateFromProps;E=typeof I=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,E||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||f!==i)&&sc(e,a,r,i),dn=!1;var b=e.memoizedState;a.state=b,ul(e,r,a,l),pl(),f=e.memoizedState,o||b!==f||dn?(typeof I=="function"&&(Is(e,n,I,r),f=e.memoizedState),(m=dn||ic(e,n,m,r,b,f,i))?(E||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=f),a.props=r,a.state=f,a.context=i,r=m):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,ls(t,e),i=e.memoizedProps,E=qn(n,i),a.props=E,I=e.pendingProps,b=a.context,f=n.contextType,m=hr,typeof f=="object"&&f!==null&&(m=zt(f)),o=n.getDerivedStateFromProps,(f=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==I||b!==m)&&sc(e,a,r,m),dn=!1,b=e.memoizedState,a.state=b,ul(e,r,a,l),pl();var w=e.memoizedState;i!==I||b!==w||dn||t!==null&&t.dependencies!==null&&pa(t.dependencies)?(typeof o=="function"&&(Is(e,n,o,r),w=e.memoizedState),(E=dn||ic(e,n,E,r,b,w,m)||t!==null&&t.dependencies!==null&&pa(t.dependencies))?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,m),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,m)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),a.props=r,a.state=w,a.context=m,r=E):(typeof a.componentDidUpdate!="function"||i===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),r=!1)}return a=r,ka(t,e),r=(e.flags&128)!==0,a||r?(a=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:a.render(),e.flags|=1,t!==null&&r?(e.child=Xn(e,t.child,null,l),e.child=Xn(e,null,n,l)):Wt(t,e,n,l),e.memoizedState=a.state,t=e.child):t=qe(t,e,l),t}function Fc(t,e,n,r){return Hn(),e.flags|=256,Wt(t,e,n,r),e.child}var Ls={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bs(t){return{baseLanes:t,cachePool:cu()}}function Rs(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ve),t}function Tc(t,e,n){var r=e.pendingProps,l=!1,a=(e.flags&128)!==0,i;if((i=a)||(i=t!==null&&t.memoizedState===null?!1:(Nt.current&2)!==0),i&&(l=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(at){if(l?yn(e):vn(),(t=wt)?(t=Km(t,Ie),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:pn!==null?{id:xe,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},n=nu(t),n.return=e,e.child=n,jt=e,wt=null)):t=null,t===null)throw cn(e);return vo(t)?e.lanes=32:e.lanes=536870912,null}var o=r.children;return r=r.fallback,l?(vn(),l=e.mode,o=Pa({mode:"hidden",children:o},l),r=Un(r,l,n,null),o.return=e,r.return=e,o.sibling=r,e.child=o,r=e.child,r.memoizedState=Bs(n),r.childLanes=Rs(t,i,n),e.memoizedState=Ls,hl(null,r)):(yn(e),Os(e,o))}var m=t.memoizedState;if(m!==null&&(o=m.dehydrated,o!==null)){if(a)e.flags&256?(yn(e),e.flags&=-257,e=xs(t,e,n)):e.memoizedState!==null?(vn(),e.child=t.child,e.flags|=128,e=null):(vn(),o=r.fallback,l=e.mode,r=Pa({mode:"visible",children:r.children},l),o=Un(o,l,n,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,Xn(e,t.child,null,n),r=e.child,r.memoizedState=Bs(n),r.childLanes=Rs(t,i,n),e.memoizedState=Ls,e=hl(null,r));else if(yn(e),vo(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var f=i.dgst;i=f,r=Error(p(419)),r.stack="",r.digest=i,rl({value:r,source:null,stack:null}),e=xs(t,e,n)}else if(Rt||br(t,e,n,!1),i=(n&t.childLanes)!==0,Rt||i){if(i=ft,i!==null&&(r=pp(i,n),r!==0&&r!==m.retryLane))throw m.retryLane=r,_n(t,r),se(i,t,r),Ns;yo(o)||Aa(),e=xs(t,e,n)}else yo(o)?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,wt=Pe(o.nextSibling),jt=e,at=!0,un=null,Ie=!1,t!==null&&au(e,t),e=Os(e,r.children),e.flags|=4096);return e}return l?(vn(),o=r.fallback,l=e.mode,m=t.child,f=m.sibling,r=Ge(m,{mode:"hidden",children:r.children}),r.subtreeFlags=m.subtreeFlags&65011712,f!==null?o=Ge(f,o):(o=Un(o,l,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,hl(null,r),r=e.child,o=t.child.memoizedState,o===null?o=Bs(n):(l=o.cachePool,l!==null?(m=Lt._currentValue,l=l.parent!==m?{parent:m,pool:m}:l):l=cu(),o={baseLanes:o.baseLanes|n,cachePool:l}),r.memoizedState=o,r.childLanes=Rs(t,i,n),e.memoizedState=Ls,hl(t.child,r)):(yn(e),n=t.child,t=n.sibling,n=Ge(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n)}function Os(t,e){return e=Pa({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Pa(t,e){return t=de(22,t,null,e),t.lanes=0,t}function xs(t,e,n){return Xn(e,t.child,null,n),t=Os(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zi(t.return,e,n)}function Ms(t,e,n,r,l,a){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l,treeForkCount:a}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l,i.treeForkCount=a)}function Ec(t,e,n){var r=e.pendingProps,l=r.revealOrder,a=r.tail;r=r.children;var i=Nt.current,o=(i&2)!==0;if(o?(i=i&1|2,e.flags|=128):i&=1,O(Nt,i),Wt(t,e,r,n),r=at?nl:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dc(t,n,e);else if(t.tag===19)Dc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&va(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),Ms(e,!1,l,n,a,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&va(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Ms(e,!0,n,null,a,r);break;case"together":Ms(e,!1,null,null,void 0,r);break;default:e.memoizedState=null}return e.child}function qe(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(br(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(p(153));if(e.child!==null){for(t=e.child,n=Ge(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ge(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function As(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&pa(t)))}function cS(t,e,n){switch(e.tag){case 3:Mt(e,e.stateNode.containerInfo),mn(e,Lt,t.memoizedState.cache),Hn();break;case 27:case 5:Le(e);break;case 4:Mt(e,e.stateNode.containerInfo);break;case 10:mn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ps(e),null;break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(yn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Tc(t,e,n):(yn(e),t=qe(t,e,n),t!==null?t.sibling:null);yn(e);break;case 19:var l=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(br(t,e,n,!1),r=(n&e.childLanes)!==0),l){if(r)return Ec(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(Nt,Nt.current),r)break;return null;case 22:return e.lanes=0,vc(t,e,n,e.pendingProps);case 24:mn(e,Lt,t.memoizedState.cache)}return qe(t,e,n)}function gc(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Rt=!0;else{if(!As(t,n)&&(e.flags&128)===0)return Rt=!1,cS(t,e,n);Rt=(t.flags&131072)!==0}else Rt=!1,at&&(e.flags&1048576)!==0&&lu(e,nl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=zn(e.elementType),e.type=t,typeof t=="function")Gi(t)?(r=qn(t,r),e.tag=1,e=wc(null,e,t,r,n)):(e.tag=0,e=Ks(null,e,t,r,n));else{if(t!=null){var l=t.$$typeof;if(l===dt){e.tag=11,e=Sc(null,e,t,r,n);break t}else if(l===$){e.tag=14,e=hc(null,e,t,r,n);break t}}throw e=Ke(t)||t,Error(p(306,e,""))}}return e;case 0:return Ks(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,l=qn(r,e.pendingProps),wc(t,e,r,l,n);case 3:t:{if(Mt(e,e.stateNode.containerInfo),t===null)throw Error(p(387));r=e.pendingProps;var a=e.memoizedState;l=a.element,ls(t,e),ul(e,r,null,n);var i=e.memoizedState;if(r=i.cache,mn(e,Lt,r),r!==a.cache&&Ji(e,[Lt],n,!0),pl(),r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=Fc(t,e,r,n);break t}else if(r!==l){l=De(Error(p(424)),e),rl(l),e=Fc(t,e,r,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,wt=Pe(t.firstChild),jt=e,at=!0,un=null,Ie=!0,n=vu(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===l){e=qe(t,e,n);break t}Wt(t,e,r,n)}e=e.child}return e;case 26:return ka(t,e),t===null?(n=Mm(e.type,null,e.pendingProps,null))?e.memoizedState=n:at||(n=e.type,t=e.pendingProps,r=za(j.current).createElement(n),r[Gt]=e,r[ee]=t,Xt(r,n,t),_t(r),e.stateNode=r):e.memoizedState=Mm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Le(e),t===null&&at&&(r=e.stateNode=Rm(e.type,e.pendingProps,j.current),jt=e,Ie=!0,l=wt,En(e.type)?(fo=l,wt=Pe(r.firstChild)):wt=l),Wt(t,e,e.pendingProps.children,n),ka(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&at&&((l=r=wt)&&(r=HS(r,e.type,e.pendingProps,Ie),r!==null?(e.stateNode=r,jt=e,wt=Pe(r.firstChild),Ie=!1,l=!0):l=!1),l||cn(e)),Le(e),l=e.type,a=e.pendingProps,i=t!==null?t.memoizedProps:null,r=a.children,mo(l,a)?r=null:i!==null&&mo(l,i)&&(e.flags|=32),e.memoizedState!==null&&(l=cs(t,e,nS,null,null,n),Nl._currentValue=l),ka(t,e),Wt(t,e,r,n),e.child;case 6:return t===null&&at&&((t=n=wt)&&(n=VS(n,e.pendingProps,Ie),n!==null?(e.stateNode=n,jt=e,wt=null,t=!0):t=!1),t||cn(e)),null;case 13:return Tc(t,e,n);case 4:return Mt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xn(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return Sc(t,e,e.type,e.pendingProps,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,mn(e,e.type,r.value),Wt(t,e,r.children,n),e.child;case 9:return l=e.type._context,r=e.pendingProps.children,Gn(e),l=zt(l),r=r(l),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return hc(t,e,e.type,e.pendingProps,n);case 15:return yc(t,e,e.type,e.pendingProps,n);case 19:return Ec(t,e,n);case 31:return uS(t,e,n);case 22:return vc(t,e,n,e.pendingProps);case 24:return Gn(e),r=zt(Lt),t===null?(l=es(),l===null&&(l=ft,a=$i(),l.pooledCache=a,a.refCount++,a!==null&&(l.pooledCacheLanes|=n),l=a),e.memoizedState={parent:r,cache:l},rs(e),mn(e,Lt,l)):((t.lanes&n)!==0&&(ls(t,e),ul(e,null,null,n),pl()),l=t.memoizedState,a=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),mn(e,Lt,r)):(r=a.cache,mn(e,Lt,r),r!==l.cache&&Ji(e,[Lt],n,!0))),Wt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(p(156,e.tag))}function Qe(t){t.flags|=4}function _s(t,e,n,r,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if($c())t.flags|=8192;else throw Wn=da,ns}else t.flags&=-16777217}function Ic(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vm(e))if($c())t.flags|=8192;else throw Wn=da,ns}function Na(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ip():536870912,t.lanes|=e,Kr|=e)}function yl(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mS(t,e,n){var r=e.pendingProps;switch(Xi(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return Ft(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),We(Lt),St(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(fr(e)?Qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qi())),Ft(e),null;case 26:var l=e.type,a=e.memoizedState;return t===null?(Qe(e),a!==null?(Ft(e),Ic(e,a)):(Ft(e),_s(e,l,null,r,n))):a?a!==t.memoizedState?(Qe(e),Ft(e),Ic(e,a)):(Ft(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&Qe(e),Ft(e),_s(e,l,t,r,n)),null;case 27:if(Qt(e),n=j.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Qe(e);else{if(!r){if(e.stateNode===null)throw Error(p(166));return Ft(e),null}t=P.current,fr(e)?iu(e):(t=Rm(l,r,n),e.stateNode=t,Qe(e))}return Ft(e),null;case 5:if(Qt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Qe(e);else{if(!r){if(e.stateNode===null)throw Error(p(166));return Ft(e),null}if(a=P.current,fr(e))iu(e);else{var i=za(j.current);switch(a){case 1:a=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:a=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":a=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":a=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":a=i.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof r.is=="string"?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is=="string"?i.createElement(l,{is:r.is}):i.createElement(l)}}a[Gt]=e,a[ee]=r;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)a.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=a;t:switch(Xt(a,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Qe(e)}}return Ft(e),_s(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Qe(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(p(166));if(t=j.current,fr(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,l=jt,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Gt]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Tm(t.nodeValue,n)),t||cn(e,!0)}else t=za(t).createTextNode(r),t[Gt]=e,e.stateNode=t}return Ft(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(r=fr(e),n!==null){if(t===null){if(!r)throw Error(p(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[Gt]=e}else Hn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ft(e),t=!1}else n=qi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(p(558))}return Ft(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=fr(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(p(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));l[Gt]=e}else Hn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ft(e),l=!1}else l=qi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=n,e):(n=r!==null,t=t!==null&&t.memoizedState!==null,n&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==l&&(r.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Na(e,e.updateQueue),Ft(e),null);case 4:return St(),t===null&&so(e.stateNode.containerInfo),Ft(e),null;case 10:return We(e.type),Ft(e),null;case 19:if(k(Nt),r=e.memoizedState,r===null)return Ft(e),null;if(l=(e.flags&128)!==0,a=r.rendering,a===null)if(l)yl(r,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(a=va(t),a!==null){for(e.flags|=128,yl(r,!1),t=a.updateQueue,e.updateQueue=t,Na(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)eu(n,t),n=n.sibling;return O(Nt,Nt.current&1|2),at&&je(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&pe()>Oa&&(e.flags|=128,l=!0,yl(r,!1),e.lanes=4194304)}else{if(!l)if(t=va(a),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Na(e,t),yl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!at)return Ft(e),null}else 2*pe()-r.renderingStartTime>Oa&&n!==536870912&&(e.flags|=128,l=!0,yl(r,!1),e.lanes=4194304);r.isBackwards?(a.sibling=e.child,e.child=a):(t=r.last,t!==null?t.sibling=a:e.child=a,r.last=a)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=pe(),t.sibling=null,n=Nt.current,O(Nt,l?n&1|2:n&1),at&&je(e,r.treeForkCount),t):(Ft(e),null);case 22:case 23:return he(e),os(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(n&536870912)!==0&&(e.flags&128)===0&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),n=e.updateQueue,n!==null&&Na(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&k(jn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),We(Lt),Ft(e),null;case 25:return null;case 30:return null}throw Error(p(156,e.tag))}function dS(t,e){switch(Xi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return We(Lt),St(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Qt(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(p(340));Hn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(he(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(p(340));Hn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return k(Nt),null;case 4:return St(),null;case 10:return We(e.type),null;case 22:case 23:return he(e),os(),t!==null&&k(jn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return We(Lt),null;case 25:return null;default:return null}}function kc(t,e){switch(Xi(e),e.tag){case 3:We(Lt),St();break;case 26:case 27:case 5:Qt(e);break;case 4:St();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:k(Nt);break;case 10:We(e.type);break;case 22:case 23:he(e),os(),t!==null&&k(jn);break;case 24:We(Lt)}}function vl(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&t)===t){r=void 0;var a=n.create,i=n.inst;r=a(),i.destroy=r}n=n.next}while(n!==l)}}catch(o){mt(e,e.return,o)}}function fn(t,e,n){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var a=l.next;r=a;do{if((r.tag&t)===t){var i=r.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,l=e;var m=n,f=o;try{f()}catch(E){mt(l,m,E)}}}r=r.next}while(r!==a)}}catch(E){mt(e,e.return,E)}}function Pc(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{bu(e,n)}catch(r){mt(t,t.return,r)}}}function Nc(t,e,n){n.props=qn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){mt(t,e,r)}}function fl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(l){mt(t,e,l)}}function Ae(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){mt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){mt(t,e,l)}else n.current=null}function Kc(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break t;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){mt(t,t.return,l)}}function Us(t,e,n){try{var r=t.stateNode;OS(r,t.type,n,e),r[ee]=e}catch(l){mt(t,t.return,l)}}function Lc(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&En(t.type)||t.tag===4}function Hs(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Lc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&En(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vs(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=He));else if(r!==4&&(r===27&&En(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Vs(t,e,n),t=t.sibling;t!==null;)Vs(t,e,n),t=t.sibling}function Ka(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&En(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ka(t,e,n),t=t.sibling;t!==null;)Ka(t,e,n),t=t.sibling}function Bc(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Xt(e,r,n),e[Gt]=t,e[ee]=n}catch(a){mt(t,t.return,a)}}var Ze=!1,Ot=!1,Gs=!1,Rc=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function SS(t,e){if(t=t.containerInfo,uo=Ja,t=Wp(t),xi(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var i=0,o=-1,m=-1,f=0,E=0,I=t,b=null;e:for(;;){for(var w;I!==n||l!==0&&I.nodeType!==3||(o=i+l),I!==a||r!==0&&I.nodeType!==3||(m=i+r),I.nodeType===3&&(i+=I.nodeValue.length),(w=I.firstChild)!==null;)b=I,I=w;for(;;){if(I===t)break e;if(b===n&&++f===l&&(o=i),b===a&&++E===r&&(m=i),(w=I.nextSibling)!==null)break;I=b,b=I.parentNode}I=w}n=o===-1||m===-1?null:{start:o,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(co={focusedElem:t,selectionRange:n},Ja=!1,Ut=e;Ut!==null;)if(e=Ut,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ut=t;else for(;Ut!==null;){switch(e=Ut,a=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)l=t[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&a!==null){t=void 0,n=e,l=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var M=qn(n.type,l);t=r.getSnapshotBeforeUpdate(M,a),r.__reactInternalSnapshotBeforeUpdate=t}catch(V){mt(n,n.return,V)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ho(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ho(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(p(163))}if(t=e.sibling,t!==null){t.return=e.return,Ut=t;break}Ut=e.return}}function Oc(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:$e(t,n),r&4&&vl(5,n);break;case 1:if($e(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(i){mt(n,n.return,i)}else{var l=qn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){mt(n,n.return,i)}}r&64&&Pc(n),r&512&&fl(n,n.return);break;case 3:if($e(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{bu(t,e)}catch(i){mt(n,n.return,i)}}break;case 27:e===null&&r&4&&Bc(n);case 26:case 5:$e(t,n),e===null&&r&4&&Kc(n),r&512&&fl(n,n.return);break;case 12:$e(t,n);break;case 31:$e(t,n),r&4&&Ac(t,n);break;case 13:$e(t,n),r&4&&_c(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=TS.bind(null,n),GS(t,n))));break;case 22:if(r=n.memoizedState!==null||Ze,!r){e=e!==null&&e.memoizedState!==null||Ot,l=Ze;var a=Ot;Ze=r,(Ot=e)&&!a?tn(t,n,(n.subtreeFlags&8772)!==0):$e(t,n),Ze=l,Ot=a}break;case 30:break;default:$e(t,n)}}function xc(t){var e=t.alternate;e!==null&&(t.alternate=null,xc(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&bi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,re=!1;function Je(t,e,n){for(n=n.child;n!==null;)Mc(t,e,n),n=n.sibling}function Mc(t,e,n){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(Vr,n)}catch{}switch(n.tag){case 26:Ot||Ae(n,e),Je(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ot||Ae(n,e);var r=Tt,l=re;En(n.type)&&(Tt=n.stateNode,re=!1),Je(t,e,n),Il(n.stateNode),Tt=r,re=l;break;case 5:Ot||Ae(n,e);case 6:if(r=Tt,l=re,Tt=null,Je(t,e,n),Tt=r,re=l,Tt!==null)if(re)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(a){mt(n,e,a)}else try{Tt.removeChild(n.stateNode)}catch(a){mt(n,e,a)}break;case 18:Tt!==null&&(re?(t=Tt,Pm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),_r(t)):Pm(Tt,n.stateNode));break;case 4:r=Tt,l=re,Tt=n.stateNode.containerInfo,re=!0,Je(t,e,n),Tt=r,re=l;break;case 0:case 11:case 14:case 15:fn(2,n,e),Ot||fn(4,n,e),Je(t,e,n);break;case 1:Ot||(Ae(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Nc(n,e,r)),Je(t,e,n);break;case 21:Je(t,e,n);break;case 22:Ot=(r=Ot)||n.memoizedState!==null,Je(t,e,n),Ot=r;break;default:Je(t,e,n)}}function Ac(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_r(t)}catch(n){mt(e,e.return,n)}}}function _c(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_r(t)}catch(n){mt(e,e.return,n)}}function hS(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Rc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Rc),e;default:throw Error(p(435,t.tag))}}function La(t,e){var n=hS(t);e.forEach(function(r){if(!n.has(r)){n.add(r);var l=DS.bind(null,t,r);r.then(l,l)}})}function le(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r],a=t,i=e,o=i;t:for(;o!==null;){switch(o.tag){case 27:if(En(o.type)){Tt=o.stateNode,re=!1;break t}break;case 5:Tt=o.stateNode,re=!1;break t;case 3:case 4:Tt=o.stateNode.containerInfo,re=!0;break t}o=o.return}if(Tt===null)throw Error(p(160));Mc(a,i,l),Tt=null,re=!1,a=l.alternate,a!==null&&(a.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Uc(e,t),e=e.sibling}var Re=null;function Uc(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:le(e,t),ae(t),r&4&&(fn(3,t,t.return),vl(3,t),fn(5,t,t.return));break;case 1:le(e,t),ae(t),r&512&&(Ot||n===null||Ae(n,n.return)),r&64&&Ze&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var l=Re;if(le(e,t),ae(t),r&512&&(Ot||n===null||Ae(n,n.return)),r&4){var a=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){t:{r=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(r){case"title":a=l.getElementsByTagName("title")[0],(!a||a[zr]||a[Gt]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(r),l.head.insertBefore(a,l.querySelector("head > title"))),Xt(a,r,n),a[Gt]=t,_t(a),r=a;break t;case"link":var i=Um("link","href",l).get(r+(n.href||""));if(i){for(var o=0;o<i.length;o++)if(a=i[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(o,1);break e}}a=l.createElement(r),Xt(a,r,n),l.head.appendChild(a);break;case"meta":if(i=Um("meta","content",l).get(r+(n.content||""))){for(o=0;o<i.length;o++)if(a=i[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(o,1);break e}}a=l.createElement(r),Xt(a,r,n),l.head.appendChild(a);break;default:throw Error(p(468,r))}a[Gt]=t,_t(a),r=a}t.stateNode=r}else Hm(l,t.type,t.stateNode);else t.stateNode=_m(l,r,t.memoizedProps);else a!==r?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hm(l,t.type,t.stateNode):_m(l,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Us(t,t.memoizedProps,n.memoizedProps)}break;case 27:le(e,t),ae(t),r&512&&(Ot||n===null||Ae(n,n.return)),n!==null&&r&4&&Us(t,t.memoizedProps,n.memoizedProps);break;case 5:if(le(e,t),ae(t),r&512&&(Ot||n===null||Ae(n,n.return)),t.flags&32){l=t.stateNode;try{or(l,"")}catch(M){mt(t,t.return,M)}}r&4&&t.stateNode!=null&&(l=t.memoizedProps,Us(t,l,n!==null?n.memoizedProps:l)),r&1024&&(Gs=!0);break;case 6:if(le(e,t),ae(t),r&4){if(t.stateNode===null)throw Error(p(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(M){mt(t,t.return,M)}}break;case 3:if(Ya=null,l=Re,Re=Wa(e.containerInfo),le(e,t),Re=l,ae(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(e.containerInfo)}catch(M){mt(t,t.return,M)}Gs&&(Gs=!1,Hc(t));break;case 4:r=Re,Re=Wa(t.stateNode.containerInfo),le(e,t),ae(t),Re=r;break;case 12:le(e,t),ae(t);break;case 31:le(e,t),ae(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,La(t,r)));break;case 13:le(e,t),ae(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ra=pe()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,La(t,r)));break;case 22:l=t.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,f=Ze,E=Ot;if(Ze=f||l,Ot=E||m,le(e,t),Ot=E,Ze=f,ae(t),r&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||m||Ze||Ot||Qn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){m=n=e;try{if(a=m.stateNode,l)i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=m.stateNode;var I=m.memoizedProps.style,b=I!=null&&I.hasOwnProperty("display")?I.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(M){mt(m,m.return,M)}}}else if(e.tag===6){if(n===null){m=e;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(M){mt(m,m.return,M)}}}else if(e.tag===18){if(n===null){m=e;try{var w=m.stateNode;l?Nm(w,!0):Nm(m.stateNode,!1)}catch(M){mt(m,m.return,M)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,La(t,n))));break;case 19:le(e,t),ae(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,La(t,r)));break;case 30:break;case 21:break;default:le(e,t),ae(t)}}function ae(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(Lc(r)){n=r;break}r=r.return}if(n==null)throw Error(p(160));switch(n.tag){case 27:var l=n.stateNode,a=Hs(t);Ka(t,a,l);break;case 5:var i=n.stateNode;n.flags&32&&(or(i,""),n.flags&=-33);var o=Hs(t);Ka(t,o,i);break;case 3:case 4:var m=n.stateNode.containerInfo,f=Hs(t);Vs(t,f,m);break;default:throw Error(p(161))}}catch(E){mt(t,t.return,E)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hc(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Hc(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Oc(t,e.alternate,e),e=e.sibling}function Qn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:fn(4,e,e.return),Qn(e);break;case 1:Ae(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Nc(e,e.return,n),Qn(e);break;case 27:Il(e.stateNode);case 26:case 5:Ae(e,e.return),Qn(e);break;case 22:e.memoizedState===null&&Qn(e);break;case 30:Qn(e);break;default:Qn(e)}t=t.sibling}}function tn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,l=t,a=e,i=a.flags;switch(a.tag){case 0:case 11:case 15:tn(l,a,n),vl(4,a);break;case 1:if(tn(l,a,n),r=a,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(f){mt(r,r.return,f)}if(r=a,l=r.updateQueue,l!==null){var o=r.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)fu(m[l],o)}catch(f){mt(r,r.return,f)}}n&&i&64&&Pc(a),fl(a,a.return);break;case 27:Bc(a);case 26:case 5:tn(l,a,n),n&&r===null&&i&4&&Kc(a),fl(a,a.return);break;case 12:tn(l,a,n);break;case 31:tn(l,a,n),n&&i&4&&Ac(l,a);break;case 13:tn(l,a,n),n&&i&4&&_c(l,a);break;case 22:a.memoizedState===null&&tn(l,a,n),fl(a,a.return);break;case 30:break;default:tn(l,a,n)}e=e.sibling}}function js(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ll(n))}function zs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ll(t))}function Oe(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vc(t,e,n,r),e=e.sibling}function Vc(t,e,n,r){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Oe(t,e,n,r),l&2048&&vl(9,e);break;case 1:Oe(t,e,n,r);break;case 3:Oe(t,e,n,r),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ll(t)));break;case 12:if(l&2048){Oe(t,e,n,r),t=e.stateNode;try{var a=e.memoizedProps,i=a.id,o=a.onPostCommit;typeof o=="function"&&o(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){mt(e,e.return,m)}}else Oe(t,e,n,r);break;case 31:Oe(t,e,n,r);break;case 13:Oe(t,e,n,r);break;case 23:break;case 22:a=e.stateNode,i=e.alternate,e.memoizedState!==null?a._visibility&2?Oe(t,e,n,r):bl(t,e):a._visibility&2?Oe(t,e,n,r):(a._visibility|=2,kr(t,e,n,r,(e.subtreeFlags&10256)!==0||!1)),l&2048&&js(i,e);break;case 24:Oe(t,e,n,r),l&2048&&zs(e.alternate,e);break;default:Oe(t,e,n,r)}}function kr(t,e,n,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var a=t,i=e,o=n,m=r,f=i.flags;switch(i.tag){case 0:case 11:case 15:kr(a,i,o,m,l),vl(8,i);break;case 23:break;case 22:var E=i.stateNode;i.memoizedState!==null?E._visibility&2?kr(a,i,o,m,l):bl(a,i):(E._visibility|=2,kr(a,i,o,m,l)),l&&f&2048&&js(i.alternate,i);break;case 24:kr(a,i,o,m,l),l&&f&2048&&zs(i.alternate,i);break;default:kr(a,i,o,m,l)}e=e.sibling}}function bl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,l=r.flags;switch(r.tag){case 22:bl(n,r),l&2048&&js(r.alternate,r);break;case 24:bl(n,r),l&2048&&zs(r.alternate,r);break;default:bl(n,r)}e=e.sibling}}var Cl=8192;function Pr(t,e,n){if(t.subtreeFlags&Cl)for(t=t.child;t!==null;)Gc(t,e,n),t=t.sibling}function Gc(t,e,n){switch(t.tag){case 26:Pr(t,e,n),t.flags&Cl&&t.memoizedState!==null&&eh(n,Re,t.memoizedState,t.memoizedProps);break;case 5:Pr(t,e,n);break;case 3:case 4:var r=Re;Re=Wa(t.stateNode.containerInfo),Pr(t,e,n),Re=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Cl,Cl=16777216,Pr(t,e,n),Cl=r):Pr(t,e,n));break;default:Pr(t,e,n)}}function jc(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function wl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ut=r,Wc(r,t)}jc(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zc(t),t=t.sibling}function zc(t){switch(t.tag){case 0:case 11:case 15:wl(t),t.flags&2048&&fn(9,t,t.return);break;case 3:wl(t);break;case 12:wl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ba(t)):wl(t);break;default:wl(t)}}function Ba(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ut=r,Wc(r,t)}jc(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:fn(8,e,e.return),Ba(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Ba(e));break;default:Ba(e)}t=t.sibling}}function Wc(t,e){for(;Ut!==null;){var n=Ut;switch(n.tag){case 0:case 11:case 15:fn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ll(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ut=r;else t:for(n=t;Ut!==null;){r=Ut;var l=r.sibling,a=r.return;if(xc(r),r===n){Ut=null;break t}if(l!==null){l.return=a,Ut=l;break t}Ut=a}}}var yS={getCacheForType:function(t){var e=zt(Lt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return zt(Lt).controller.signal}},vS=typeof WeakMap=="function"?WeakMap:Map,pt=0,ft=null,tt=null,nt=0,ct=0,ye=null,bn=!1,Nr=!1,Ws=!1,en=0,kt=0,Cn=0,Zn=0,Xs=0,ve=0,Kr=0,Fl=null,ie=null,Ys=!1,Ra=0,Xc=0,Oa=1/0,xa=null,wn=null,At=0,Fn=null,Lr=null,nn=0,qs=0,Qs=null,Yc=null,Tl=0,Zs=null;function fe(){return(pt&2)!==0&&nt!==0?nt&-nt:D.T!==null?ro():up()}function qc(){if(ve===0)if((nt&536870912)===0||at){var t=jl;jl<<=1,(jl&3932160)===0&&(jl=262144),ve=t}else ve=536870912;return t=Se.current,t!==null&&(t.flags|=32),ve}function se(t,e,n){(t===ft&&(ct===2||ct===9)||t.cancelPendingCommit!==null)&&(Br(t,0),Tn(t,nt,ve,!1)),jr(t,n),((pt&2)===0||t!==ft)&&(t===ft&&((pt&2)===0&&(Zn|=n),kt===4&&Tn(t,nt,ve,!1)),_e(t))}function Qc(t,e,n){if((pt&6)!==0)throw Error(p(327));var r=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Gr(t,e),l=r?CS(t,e):$s(t,e,!0),a=r;do{if(l===0){Nr&&!r&&Tn(t,e,0,!1);break}else{if(n=t.current.alternate,a&&!fS(n)){l=$s(t,e,!1),a=!1;continue}if(l===2){if(a=e,t.errorRecoveryDisabledLanes&a)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var o=t;l=Fl;var m=o.current.memoizedState.isDehydrated;if(m&&(Br(o,i).flags|=256),i=$s(o,i,!1),i!==2){if(Ws&&!m){o.errorRecoveryDisabledLanes|=a,Zn|=a,l=4;break t}a=ie,ie=l,a!==null&&(ie===null?ie=a:ie.push.apply(ie,a))}l=i}if(a=!1,l!==2)continue}}if(l===1){Br(t,0),Tn(t,e,0,!0);break}t:{switch(r=t,a=l,a){case 0:case 1:throw Error(p(345));case 4:if((e&4194048)!==e)break;case 6:Tn(r,e,ve,!bn);break t;case 2:ie=null;break;case 3:case 5:break;default:throw Error(p(329))}if((e&62914560)===e&&(l=Ra+300-pe(),10<l)){if(Tn(r,e,ve,!bn),Wl(r,0,!0)!==0)break t;nn=e,r.timeoutHandle=Im(Zc.bind(null,r,n,ie,xa,Ys,e,ve,Zn,Kr,bn,a,"Throttled",-0,0),l);break t}Zc(r,n,ie,xa,Ys,e,ve,Zn,Kr,bn,a,null,-0,0)}}break}while(!0);_e(t)}function Zc(t,e,n,r,l,a,i,o,m,f,E,I,b,w){if(t.timeoutHandle=-1,I=e.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},Gc(e,a,I);var M=(a&62914560)===a?Ra-pe():(a&4194048)===a?Xc-pe():0;if(M=nh(I,M),M!==null){nn=a,t.cancelPendingCommit=M(am.bind(null,t,e,a,n,r,l,i,o,m,E,I,null,b,w)),Tn(t,a,i,!f);return}}am(t,e,a,n,r,l,i,o,m)}function fS(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!me(a(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tn(t,e,n,r){e&=~Xs,e&=~Zn,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var a=31-ce(l),i=1<<a;r[a]=-1,l&=~i}n!==0&&sp(t,n,e)}function Ma(){return(pt&6)===0?(Dl(0),!1):!0}function Js(){if(tt!==null){if(ct===0)var t=tt.return;else t=tt,ze=Vn=null,Ss(t),Tr=null,il=0,t=tt;for(;t!==null;)kc(t.alternate,t),t=t.return;tt=null}}function Br(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,AS(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),nn=0,Js(),ft=t,tt=n=Ge(t.current,null),nt=e,ct=0,ye=null,bn=!1,Nr=Gr(t,e),Ws=!1,Kr=ve=Xs=Zn=Cn=kt=0,ie=Fl=null,Ys=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var l=31-ce(r),a=1<<l;e|=t[l],r&=~a}return en=e,la(),n}function Jc(t,e){Y=null,D.H=Sl,e===Fr||e===ma?(e=Su(),ct=3):e===ns?(e=Su(),ct=4):ct=e===Ns?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ye=e,tt===null&&(kt=1,ga(t,De(e,t.current)))}function $c(){var t=Se.current;return t===null?!0:(nt&4194048)===nt?ke===null:(nt&62914560)===nt||(nt&536870912)!==0?t===ke:!1}function tm(){var t=D.H;return D.H=Sl,t===null?Sl:t}function em(){var t=D.A;return D.A=yS,t}function Aa(){kt=4,bn||(nt&4194048)!==nt&&Se.current!==null||(Nr=!0),(Cn&134217727)===0&&(Zn&134217727)===0||ft===null||Tn(ft,nt,ve,!1)}function $s(t,e,n){var r=pt;pt|=2;var l=tm(),a=em();(ft!==t||nt!==e)&&(xa=null,Br(t,e)),e=!1;var i=kt;t:do try{if(ct!==0&&tt!==null){var o=tt,m=ye;switch(ct){case 8:Js(),i=6;break t;case 3:case 2:case 9:case 6:Se.current===null&&(e=!0);var f=ct;if(ct=0,ye=null,Rr(t,o,m,f),n&&Nr){i=0;break t}break;default:f=ct,ct=0,ye=null,Rr(t,o,m,f)}}bS(),i=kt;break}catch(E){Jc(t,E)}while(!0);return e&&t.shellSuspendCounter++,ze=Vn=null,pt=r,D.H=l,D.A=a,tt===null&&(ft=null,nt=0,la()),i}function bS(){for(;tt!==null;)nm(tt)}function CS(t,e){var n=pt;pt|=2;var r=tm(),l=em();ft!==t||nt!==e?(xa=null,Oa=pe()+500,Br(t,e)):Nr=Gr(t,e);t:do try{if(ct!==0&&tt!==null){e=tt;var a=ye;e:switch(ct){case 1:ct=0,ye=null,Rr(t,e,a,1);break;case 2:case 9:if(mu(a)){ct=0,ye=null,rm(e);break}e=function(){ct!==2&&ct!==9||ft!==t||(ct=7),_e(t)},a.then(e,e);break t;case 3:ct=7;break t;case 4:ct=5;break t;case 7:mu(a)?(ct=0,ye=null,rm(e)):(ct=0,ye=null,Rr(t,e,a,7));break;case 5:var i=null;switch(tt.tag){case 26:i=tt.memoizedState;case 5:case 27:var o=tt;if(i?Vm(i):o.stateNode.complete){ct=0,ye=null;var m=o.sibling;if(m!==null)tt=m;else{var f=o.return;f!==null?(tt=f,_a(f)):tt=null}break e}}ct=0,ye=null,Rr(t,e,a,5);break;case 6:ct=0,ye=null,Rr(t,e,a,6);break;case 8:Js(),kt=6;break t;default:throw Error(p(462))}}wS();break}catch(E){Jc(t,E)}while(!0);return ze=Vn=null,D.H=r,D.A=l,pt=n,tt!==null?0:(ft=null,nt=0,la(),kt)}function wS(){for(;tt!==null&&!jd();)nm(tt)}function nm(t){var e=gc(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?_a(t):tt=e}function rm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Cc(n,e,e.pendingProps,e.type,void 0,nt);break;case 11:e=Cc(n,e,e.pendingProps,e.type.render,e.ref,nt);break;case 5:Ss(e);default:kc(n,e),e=tt=eu(e,en),e=gc(n,e,en)}t.memoizedProps=t.pendingProps,e===null?_a(t):tt=e}function Rr(t,e,n,r){ze=Vn=null,Ss(e),Tr=null,il=0;var l=e.return;try{if(pS(t,l,e,n,nt)){kt=1,ga(t,De(n,t.current)),tt=null;return}}catch(a){if(l!==null)throw tt=l,a;kt=1,ga(t,De(n,t.current)),tt=null;return}e.flags&32768?(at||r===1?t=!0:Nr||(nt&536870912)!==0?t=!1:(bn=t=!0,(r===2||r===9||r===3||r===6)&&(r=Se.current,r!==null&&r.tag===13&&(r.flags|=16384))),lm(e,t)):_a(e)}function _a(t){var e=t;do{if((e.flags&32768)!==0){lm(e,bn);return}t=e.return;var n=mS(e.alternate,e,en);if(n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);kt===0&&(kt=5)}function lm(t,e){do{var n=dS(t.alternate,t);if(n!==null){n.flags&=32767,tt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){tt=t;return}tt=t=n}while(t!==null);kt=6,tt=null}function am(t,e,n,r,l,a,i,o,m){t.cancelPendingCommit=null;do Ua();while(At!==0);if((pt&6)!==0)throw Error(p(327));if(e!==null){if(e===t.current)throw Error(p(177));if(a=e.lanes|e.childLanes,a|=Hi,t0(t,n,a,i,o,m),t===ft&&(tt=ft=null,nt=0),Lr=e,Fn=t,nn=n,qs=a,Qs=l,Yc=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ES(Vl,function(){return um(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=D.T,D.T=null,l=R.p,R.p=2,i=pt,pt|=4;try{SS(t,e,n)}finally{pt=i,R.p=l,D.T=r}}At=1,im(),sm(),om()}}function im(){if(At===1){At=0;var t=Fn,e=Lr,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var r=R.p;R.p=2;var l=pt;pt|=4;try{Uc(e,t);var a=co,i=Wp(t.containerInfo),o=a.focusedElem,m=a.selectionRange;if(i!==o&&o&&o.ownerDocument&&zp(o.ownerDocument.documentElement,o)){if(m!==null&&xi(o)){var f=m.start,E=m.end;if(E===void 0&&(E=f),"selectionStart"in o)o.selectionStart=f,o.selectionEnd=Math.min(E,o.value.length);else{var I=o.ownerDocument||document,b=I&&I.defaultView||window;if(b.getSelection){var w=b.getSelection(),M=o.textContent.length,V=Math.min(m.start,M),vt=m.end===void 0?V:Math.min(m.end,M);!w.extend&&V>vt&&(i=vt,vt=V,V=i);var h=jp(o,V),d=jp(o,vt);if(h&&d&&(w.rangeCount!==1||w.anchorNode!==h.node||w.anchorOffset!==h.offset||w.focusNode!==d.node||w.focusOffset!==d.offset)){var v=I.createRange();v.setStart(h.node,h.offset),w.removeAllRanges(),V>vt?(w.addRange(v),w.extend(d.node,d.offset)):(v.setEnd(d.node,d.offset),w.addRange(v))}}}}for(I=[],w=o;w=w.parentNode;)w.nodeType===1&&I.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<I.length;o++){var g=I[o];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Ja=!!uo,co=uo=null}finally{pt=l,R.p=r,D.T=n}}t.current=e,At=2}}function sm(){if(At===2){At=0;var t=Fn,e=Lr,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var r=R.p;R.p=2;var l=pt;pt|=4;try{Oc(t,e.alternate,e)}finally{pt=l,R.p=r,D.T=n}}At=3}}function om(){if(At===4||At===3){At=0,zd();var t=Fn,e=Lr,n=nn,r=Yc;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?At=5:(At=0,Lr=Fn=null,pm(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(wn=null),vi(n),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(Vr,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=D.T,l=R.p,R.p=2,D.T=null;try{for(var a=t.onRecoverableError,i=0;i<r.length;i++){var o=r[i];a(o.value,{componentStack:o.stack})}}finally{D.T=e,R.p=l}}(nn&3)!==0&&Ua(),_e(t),l=t.pendingLanes,(n&261930)!==0&&(l&42)!==0?t===Zs?Tl++:(Tl=0,Zs=t):Tl=0,Dl(0)}}function pm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ll(e)))}function Ua(){return im(),sm(),om(),um()}function um(){if(At!==5)return!1;var t=Fn,e=qs;qs=0;var n=vi(nn),r=D.T,l=R.p;try{R.p=32>n?32:n,D.T=null,n=Qs,Qs=null;var a=Fn,i=nn;if(At=0,Lr=Fn=null,nn=0,(pt&6)!==0)throw Error(p(331));var o=pt;if(pt|=4,zc(a.current),Vc(a,a.current,i,n),pt=o,Dl(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(Vr,a)}catch{}return!0}finally{R.p=l,D.T=r,pm(t,e)}}function cm(t,e,n){e=De(n,e),e=Ps(t.stateNode,e,2),t=hn(t,e,2),t!==null&&(jr(t,2),_e(t))}function mt(t,e,n){if(t.tag===3)cm(t,t,n);else for(;e!==null;){if(e.tag===3){cm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){t=De(n,t),n=mc(2),r=hn(e,n,2),r!==null&&(dc(n,r,e,t),jr(r,2),_e(r));break}}e=e.return}}function to(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vS;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(n)||(Ws=!0,l.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function FS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ft===t&&(nt&n)===n&&(kt===4||kt===3&&(nt&62914560)===nt&&300>pe()-Ra?(pt&2)===0&&Br(t,0):Xs|=n,Kr===nt&&(Kr=0)),_e(t)}function mm(t,e){e===0&&(e=ip()),t=_n(t,e),t!==null&&(jr(t,e),_e(t))}function TS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mm(t,n)}function DS(t,e){var n=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(p(314))}r!==null&&r.delete(e),mm(t,n)}function ES(t,e){return di(t,e)}var Ha=null,Or=null,eo=!1,Va=!1,no=!1,Dn=0;function _e(t){t!==Or&&t.next===null&&(Or===null?Ha=Or=t:Or=Or.next=t),Va=!0,eo||(eo=!0,IS())}function Dl(t,e){if(!no&&Va){no=!0;do for(var n=!1,r=Ha;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var a=0;else{var i=r.suspendedLanes,o=r.pingedLanes;a=(1<<31-ce(42|t)+1)-1,a&=l&~(i&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ym(r,a))}else a=nt,a=Wl(r,r===ft?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(a&3)===0||Gr(r,a)||(n=!0,ym(r,a));r=r.next}while(n);no=!1}}function gS(){dm()}function dm(){Va=eo=!1;var t=0;Dn!==0&&MS()&&(t=Dn);for(var e=pe(),n=null,r=Ha;r!==null;){var l=r.next,a=Sm(r,e);a===0?(r.next=null,n===null?Ha=l:n.next=l,l===null&&(Or=n)):(n=r,(t!==0||(a&3)!==0)&&(Va=!0)),r=l}At!==0&&At!==5||Dl(t),Dn!==0&&(Dn=0)}function Sm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var i=31-ce(a),o=1<<i,m=l[i];m===-1?((o&n)===0||(o&r)!==0)&&(l[i]=$d(o,e)):m<=e&&(t.expiredLanes|=o),a&=~o}if(e=ft,n=nt,n=Wl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(ct===2||ct===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Si(r),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Gr(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&Si(r),vi(n)){case 2:case 8:n=lp;break;case 32:n=Vl;break;case 268435456:n=ap;break;default:n=Vl}return r=hm.bind(null,t),n=di(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&Si(r),t.callbackPriority=2,t.callbackNode=null,2}function hm(t,e){if(At!==0&&At!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Ua()&&t.callbackNode!==n)return null;var r=nt;return r=Wl(t,t===ft?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Qc(t,r,e),Sm(t,pe()),t.callbackNode!=null&&t.callbackNode===n?hm.bind(null,t):null)}function ym(t,e){if(Ua())return null;Qc(t,e,!0)}function IS(){_S(function(){(pt&6)!==0?di(rp,gS):dm()})}function ro(){if(Dn===0){var t=Cr;t===0&&(t=Gl,Gl<<=1,(Gl&261888)===0&&(Gl=256)),Dn=t}return Dn}function vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ql(""+t)}function fm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function kS(t,e,n,r,l){if(e==="submit"&&n&&n.stateNode===l){var a=vm((l[ee]||null).action),i=r.submitter;i&&(e=(e=i[ee]||null)?vm(e.formAction):i.getAttribute("formAction"),e!==null&&(a=e,i=null));var o=new ta("action","action",null,r,l);t.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Dn!==0){var m=i?fm(l,i):new FormData(l);Ts(n,{pending:!0,data:m,method:l.method,action:a},null,m)}}else typeof a=="function"&&(o.preventDefault(),m=i?fm(l,i):new FormData(l),Ts(n,{pending:!0,data:m,method:l.method,action:a},a,m))},currentTarget:l}]})}}for(var lo=0;lo<Ui.length;lo++){var ao=Ui[lo],PS=ao.toLowerCase(),NS=ao[0].toUpperCase()+ao.slice(1);Be(PS,"on"+NS)}Be(qp,"onAnimationEnd"),Be(Qp,"onAnimationIteration"),Be(Zp,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(W0,"onTransitionRun"),Be(X0,"onTransitionStart"),Be(Y0,"onTransitionCancel"),Be(Jp,"onTransitionEnd"),ir("onMouseEnter",["mouseout","mouseover"]),ir("onMouseLeave",["mouseout","mouseover"]),ir("onPointerEnter",["pointerout","pointerover"]),ir("onPointerLeave",["pointerout","pointerover"]),On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),On("onBeforeInput",["compositionend","keypress","textInput","paste"]),On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function bm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],l=r.event;r=r.listeners;t:{var a=void 0;if(e)for(var i=r.length-1;0<=i;i--){var o=r[i],m=o.instance,f=o.currentTarget;if(o=o.listener,m!==a&&l.isPropagationStopped())break t;a=o,l.currentTarget=f;try{a(l)}catch(E){ra(E)}l.currentTarget=null,a=m}else for(i=0;i<r.length;i++){if(o=r[i],m=o.instance,f=o.currentTarget,o=o.listener,m!==a&&l.isPropagationStopped())break t;a=o,l.currentTarget=f;try{a(l)}catch(E){ra(E)}l.currentTarget=null,a=m}}}}function et(t,e){var n=e[fi];n===void 0&&(n=e[fi]=new Set);var r=t+"__bubble";n.has(r)||(Cm(e,t,2,!1),n.add(r))}function io(t,e,n){var r=0;e&&(r|=4),Cm(n,t,r,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[Ga]){t[Ga]=!0,dp.forEach(function(n){n!=="selectionchange"&&(KS.has(n)||io(n,!1,t),io(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,io("selectionchange",!1,e))}}function Cm(t,e,n,r){switch(qm(e)){case 2:var l=ah;break;case 8:l=ih;break;default:l=To}n=l.bind(null,e,n,t),l=void 0,!Ii||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function oo(t,e,n,r,l){var a=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===l)break;if(i===4)for(i=r.return;i!==null;){var m=i.tag;if((m===3||m===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;o!==null;){if(i=rr(o),i===null)return;if(m=i.tag,m===5||m===6||m===26||m===27){r=a=i;continue t}o=o.parentNode}}r=r.return}Ep(function(){var f=a,E=Ei(n),I=[];t:{var b=$p.get(t);if(b!==void 0){var w=ta,M=t;switch(t){case"keypress":if(Jl(n)===0)break t;case"keydown":case"keyup":w=D0;break;case"focusin":M="focus",w=Ki;break;case"focusout":M="blur",w=Ki;break;case"beforeblur":case"afterblur":w=Ki;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=I0;break;case qp:case Qp:case Zp:w=h0;break;case Jp:w=P0;break;case"scroll":case"scrollend":w=u0;break;case"wheel":w=K0;break;case"copy":case"cut":case"paste":w=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Np;break;case"toggle":case"beforetoggle":w=B0}var V=(e&4)!==0,vt=!V&&(t==="scroll"||t==="scrollend"),h=V?b!==null?b+"Capture":null:b;V=[];for(var d=f,v;d!==null;){var g=d;if(v=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||v===null||h===null||(g=Xr(d,h),g!=null&&V.push(gl(d,g,v))),vt)break;d=d.return}0<V.length&&(b=new w(b,M,null,n,E),I.push({event:b,listeners:V}))}}if((e&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",b&&n!==Di&&(M=n.relatedTarget||n.fromElement)&&(rr(M)||M[nr]))break t;if((w||b)&&(b=E.window===E?E:(b=E.ownerDocument)?b.defaultView||b.parentWindow:window,w?(M=n.relatedTarget||n.toElement,w=f,M=M?rr(M):null,M!==null&&(vt=T(M),V=M.tag,M!==vt||V!==5&&V!==27&&V!==6)&&(M=null)):(w=null,M=f),w!==M)){if(V=kp,g="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(V=Np,g="onPointerLeave",h="onPointerEnter",d="pointer"),vt=w==null?b:Wr(w),v=M==null?b:Wr(M),b=new V(g,d+"leave",w,n,E),b.target=vt,b.relatedTarget=v,g=null,rr(E)===f&&(V=new V(h,d+"enter",M,n,E),V.target=v,V.relatedTarget=vt,g=V),vt=g,w&&M)e:{for(V=LS,h=w,d=M,v=0,g=h;g;g=V(g))v++;g=0;for(var H=d;H;H=V(H))g++;for(;0<v-g;)h=V(h),v--;for(;0<g-v;)d=V(d),g--;for(;v--;){if(h===d||d!==null&&h===d.alternate){V=h;break e}h=V(h),d=V(d)}V=null}else V=null;w!==null&&wm(I,b,w,V,!1),M!==null&&vt!==null&&wm(I,vt,M,V,!0)}}t:{if(b=f?Wr(f):window,w=b.nodeName&&b.nodeName.toLowerCase(),w==="select"||w==="input"&&b.type==="file")var st=Ap;else if(xp(b))if(_p)st=G0;else{st=H0;var _=U0}else w=b.nodeName,!w||w.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?f&&Ti(f.elementType)&&(st=Ap):st=V0;if(st&&(st=st(t,f))){Mp(I,st,n,E);break t}_&&_(t,b,f),t==="focusout"&&f&&b.type==="number"&&f.memoizedProps.value!=null&&Fi(b,"number",b.value)}switch(_=f?Wr(f):window,t){case"focusin":(xp(_)||_.contentEditable==="true")&&(mr=_,Mi=f,el=null);break;case"focusout":el=Mi=mr=null;break;case"mousedown":Ai=!0;break;case"contextmenu":case"mouseup":case"dragend":Ai=!1,Xp(I,n,E);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":Xp(I,n,E)}var Q;if(Bi)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else cr?Rp(t,n)&&(rt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(rt="onCompositionStart");rt&&(Kp&&n.locale!=="ko"&&(cr||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&cr&&(Q=gp()):(on=E,ki="value"in on?on.value:on.textContent,cr=!0)),_=ja(f,rt),0<_.length&&(rt=new Pp(rt,t,null,n,E),I.push({event:rt,listeners:_}),Q?rt.data=Q:(Q=Op(n),Q!==null&&(rt.data=Q)))),(Q=O0?x0(t,n):M0(t,n))&&(rt=ja(f,"onBeforeInput"),0<rt.length&&(_=new Pp("onBeforeInput","beforeinput",null,n,E),I.push({event:_,listeners:rt}),_.data=Q)),kS(I,t,f,n,E)}bm(I,e)})}function gl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var l=t,a=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||a===null||(l=Xr(t,n),l!=null&&r.unshift(gl(t,l,a)),l=Xr(t,e),l!=null&&r.push(gl(t,l,a))),t.tag===3)return r;t=t.return}return[]}function LS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wm(t,e,n,r,l){for(var a=e._reactName,i=[];n!==null&&n!==r;){var o=n,m=o.alternate,f=o.stateNode;if(o=o.tag,m!==null&&m===r)break;o!==5&&o!==26&&o!==27||f===null||(m=f,l?(f=Xr(n,a),f!=null&&i.unshift(gl(n,f,m))):l||(f=Xr(n,a),f!=null&&i.push(gl(n,f,m)))),n=n.return}i.length!==0&&t.push({event:e,listeners:i})}var BS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(BS,`
`).replace(RS,"")}function Tm(t,e){return e=Fm(e),Fm(t)===e}function yt(t,e,n,r,l,a){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||or(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&or(t,""+r);break;case"className":Yl(t,"class",r);break;case"tabIndex":Yl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Yl(t,n,r);break;case"style":Tp(t,r,a);break;case"data":if(e!=="object"){Yl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=Ql(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(e!=="input"&&yt(t,e,"name",l.name,l,null),yt(t,e,"formEncType",l.formEncType,l,null),yt(t,e,"formMethod",l.formMethod,l,null),yt(t,e,"formTarget",l.formTarget,l,null)):(yt(t,e,"encType",l.encType,l,null),yt(t,e,"method",l.method,l,null),yt(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=Ql(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=He);break;case"onScroll":r!=null&&et("scroll",t);break;case"onScrollEnd":r!=null&&et("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(p(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(p(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=Ql(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":et("beforetoggle",t),et("toggle",t),Xl(t,"popover",r);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xl(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=o0.get(n)||n,Xl(t,n,r))}}function po(t,e,n,r,l,a){switch(n){case"style":Tp(t,r,a);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(p(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(p(60));t.innerHTML=n}}break;case"children":typeof r=="string"?or(t,r):(typeof r=="number"||typeof r=="bigint")&&or(t,""+r);break;case"onScroll":r!=null&&et("scroll",t);break;case"onScrollEnd":r!=null&&et("scrollend",t);break;case"onClick":r!=null&&(t.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sp.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),a=t[ee]||null,a=a!=null?a[n]:null,typeof a=="function"&&t.removeEventListener(e,a,l),typeof r=="function")){typeof a!="function"&&a!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,l);break t}n in t?t[n]=r:r===!0?t.setAttribute(n,""):Xl(t,n,r)}}}function Xt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":et("error",t),et("load",t);var r=!1,l=!1,a;for(a in n)if(n.hasOwnProperty(a)){var i=n[a];if(i!=null)switch(a){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:yt(t,e,a,i,n,null)}}l&&yt(t,e,"srcSet",n.srcSet,n,null),r&&yt(t,e,"src",n.src,n,null);return;case"input":et("invalid",t);var o=a=i=l=null,m=null,f=null;for(r in n)if(n.hasOwnProperty(r)){var E=n[r];if(E!=null)switch(r){case"name":l=E;break;case"type":i=E;break;case"checked":m=E;break;case"defaultChecked":f=E;break;case"value":a=E;break;case"defaultValue":o=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(p(137,e));break;default:yt(t,e,r,E,n,null)}}bp(t,a,o,m,f,i,l,!1);return;case"select":et("invalid",t),r=i=a=null;for(l in n)if(n.hasOwnProperty(l)&&(o=n[l],o!=null))switch(l){case"value":a=o;break;case"defaultValue":i=o;break;case"multiple":r=o;default:yt(t,e,l,o,n,null)}e=a,n=i,t.multiple=!!r,e!=null?sr(t,!!r,e,!1):n!=null&&sr(t,!!r,n,!0);return;case"textarea":et("invalid",t),a=l=r=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":r=o;break;case"defaultValue":l=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:yt(t,e,i,o,n,null)}wp(t,r,l,a);return;case"option":for(m in n)n.hasOwnProperty(m)&&(r=n[m],r!=null)&&(m==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":yt(t,e,m,r,n,null));return;case"dialog":et("beforetoggle",t),et("toggle",t),et("cancel",t),et("close",t);break;case"iframe":case"object":et("load",t);break;case"video":case"audio":for(r=0;r<El.length;r++)et(El[r],t);break;case"image":et("error",t),et("load",t);break;case"details":et("toggle",t);break;case"embed":case"source":case"link":et("error",t),et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in n)if(n.hasOwnProperty(f)&&(r=n[f],r!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:yt(t,e,f,r,n,null)}return;default:if(Ti(e)){for(E in n)n.hasOwnProperty(E)&&(r=n[E],r!==void 0&&po(t,e,E,r,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(r=n[o],r!=null&&yt(t,e,o,r,n,null))}function OS(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,a=null,i=null,o=null,m=null,f=null,E=null;for(w in n){var I=n[w];if(n.hasOwnProperty(w)&&I!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":m=I;default:r.hasOwnProperty(w)||yt(t,e,w,null,r,I)}}for(var b in r){var w=r[b];if(I=n[b],r.hasOwnProperty(b)&&(w!=null||I!=null))switch(b){case"type":a=w;break;case"name":l=w;break;case"checked":f=w;break;case"defaultChecked":E=w;break;case"value":i=w;break;case"defaultValue":o=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(p(137,e));break;default:w!==I&&yt(t,e,b,w,r,I)}}wi(t,i,o,m,f,E,a,l);return;case"select":w=i=o=b=null;for(a in n)if(m=n[a],n.hasOwnProperty(a)&&m!=null)switch(a){case"value":break;case"multiple":w=m;default:r.hasOwnProperty(a)||yt(t,e,a,null,r,m)}for(l in r)if(a=r[l],m=n[l],r.hasOwnProperty(l)&&(a!=null||m!=null))switch(l){case"value":b=a;break;case"defaultValue":o=a;break;case"multiple":i=a;default:a!==m&&yt(t,e,l,a,r,m)}e=o,n=i,r=w,b!=null?sr(t,!!n,b,!1):!!r!=!!n&&(e!=null?sr(t,!!n,e,!0):sr(t,!!n,n?[]:"",!1));return;case"textarea":w=b=null;for(o in n)if(l=n[o],n.hasOwnProperty(o)&&l!=null&&!r.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:yt(t,e,o,null,r,l)}for(i in r)if(l=r[i],a=n[i],r.hasOwnProperty(i)&&(l!=null||a!=null))switch(i){case"value":b=l;break;case"defaultValue":w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(p(91));break;default:l!==a&&yt(t,e,i,l,r,a)}Cp(t,b,w);return;case"option":for(var M in n)b=n[M],n.hasOwnProperty(M)&&b!=null&&!r.hasOwnProperty(M)&&(M==="selected"?t.selected=!1:yt(t,e,M,null,r,b));for(m in r)b=r[m],w=n[m],r.hasOwnProperty(m)&&b!==w&&(b!=null||w!=null)&&(m==="selected"?t.selected=b&&typeof b!="function"&&typeof b!="symbol":yt(t,e,m,b,r,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in n)b=n[V],n.hasOwnProperty(V)&&b!=null&&!r.hasOwnProperty(V)&&yt(t,e,V,null,r,b);for(f in r)if(b=r[f],w=n[f],r.hasOwnProperty(f)&&b!==w&&(b!=null||w!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,e));break;default:yt(t,e,f,b,r,w)}return;default:if(Ti(e)){for(var vt in n)b=n[vt],n.hasOwnProperty(vt)&&b!==void 0&&!r.hasOwnProperty(vt)&&po(t,e,vt,void 0,r,b);for(E in r)b=r[E],w=n[E],!r.hasOwnProperty(E)||b===w||b===void 0&&w===void 0||po(t,e,E,b,r,w);return}}for(var h in n)b=n[h],n.hasOwnProperty(h)&&b!=null&&!r.hasOwnProperty(h)&&yt(t,e,h,null,r,b);for(I in r)b=r[I],w=n[I],!r.hasOwnProperty(I)||b===w||b==null&&w==null||yt(t,e,I,b,r,w)}function Dm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var l=n[r],a=l.transferSize,i=l.initiatorType,o=l.duration;if(a&&o&&Dm(i)){for(i=0,o=l.responseEnd,r+=1;r<n.length;r++){var m=n[r],f=m.startTime;if(f>o)break;var E=m.transferSize,I=m.initiatorType;E&&Dm(I)&&(m=m.responseEnd,i+=E*(m<o?1:(o-f)/(m-f)))}if(--r,e+=8*(a+i)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var uo=null,co=null;function za(t){return t.nodeType===9?t:t.ownerDocument}function Em(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function mo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var So=null;function MS(){var t=window.event;return t&&t.type==="popstate"?t===So?!1:(So=t,!0):(So=null,!1)}var Im=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(t){return km.resolve(null).then(t).catch(US)}:Im;function US(t){setTimeout(function(){throw t})}function En(t){return t==="head"}function Pm(t,e){var n=e,r=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(r===0){t.removeChild(l),_r(e);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Il(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Il(n);for(var a=n.firstChild;a;){var i=a.nextSibling,o=a.nodeName;a[zr]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=i}}else n==="body"&&Il(t.ownerDocument.body);n=l}while(n);_r(e)}function Nm(t,e){var n=t;t=0;do{var r=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=r}while(n)}function ho(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ho(n),bi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function HS(t,e,n,r){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[zr])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var a=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=Pe(t.nextSibling),t===null)break}return null}function VS(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Pe(t.nextSibling),t===null))return null;return t}function Km(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Pe(t.nextSibling),t===null))return null;return t}function yo(t){return t.data==="$?"||t.data==="$~"}function vo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function GS(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var fo=null;function Lm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Pe(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Rm(t,e,n){switch(e=za(n),t){case"html":if(t=e.documentElement,!t)throw Error(p(452));return t;case"head":if(t=e.head,!t)throw Error(p(453));return t;case"body":if(t=e.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function Il(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);bi(t)}var Ne=new Map,Om=new Set;function Wa(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var rn=R.d;R.d={f:jS,r:zS,D:WS,C:XS,L:YS,m:qS,X:ZS,S:QS,M:JS};function jS(){var t=rn.f(),e=Ma();return t||e}function zS(t){var e=lr(t);e!==null&&e.tag===5&&e.type==="form"?Ju(e):rn.r(t)}var xr=typeof document>"u"?null:document;function xm(t,e,n){var r=xr;if(r&&typeof e=="string"&&e){var l=Fe(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Om.has(l)||(Om.add(l),t={rel:t,crossOrigin:n,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Xt(e,"link",t),_t(e),r.head.appendChild(e)))}}function WS(t){rn.D(t),xm("dns-prefetch",t,null)}function XS(t,e){rn.C(t,e),xm("preconnect",t,e)}function YS(t,e,n){rn.L(t,e,n);var r=xr;if(r&&t&&e){var l='link[rel="preload"][as="'+Fe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Fe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Fe(n.imageSizes)+'"]')):l+='[href="'+Fe(t)+'"]';var a=l;switch(e){case"style":a=Mr(t);break;case"script":a=Ar(t)}Ne.has(a)||(t=x({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ne.set(a,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(kl(a))||e==="script"&&r.querySelector(Pl(a))||(e=r.createElement("link"),Xt(e,"link",t),_t(e),r.head.appendChild(e)))}}function qS(t,e){rn.m(t,e);var n=xr;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Fe(r)+'"][href="'+Fe(t)+'"]',a=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ar(t)}if(!Ne.has(a)&&(t=x({rel:"modulepreload",href:t},e),Ne.set(a,t),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pl(a)))return}r=n.createElement("link"),Xt(r,"link",t),_t(r),n.head.appendChild(r)}}}function QS(t,e,n){rn.S(t,e,n);var r=xr;if(r&&t){var l=ar(r).hoistableStyles,a=Mr(t);e=e||"default";var i=l.get(a);if(!i){var o={loading:0,preload:null};if(i=r.querySelector(kl(a)))o.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ne.get(a))&&bo(t,n);var m=i=r.createElement("link");_t(m),Xt(m,"link",t),m._p=new Promise(function(f,E){m.onload=f,m.onerror=E}),m.addEventListener("load",function(){o.loading|=1}),m.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xa(i,e,r)}i={type:"stylesheet",instance:i,count:1,state:o},l.set(a,i)}}}function ZS(t,e){rn.X(t,e);var n=xr;if(n&&t){var r=ar(n).hoistableScripts,l=Ar(t),a=r.get(l);a||(a=n.querySelector(Pl(l)),a||(t=x({src:t,async:!0},e),(e=Ne.get(l))&&Co(t,e),a=n.createElement("script"),_t(a),Xt(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(l,a))}}function JS(t,e){rn.M(t,e);var n=xr;if(n&&t){var r=ar(n).hoistableScripts,l=Ar(t),a=r.get(l);a||(a=n.querySelector(Pl(l)),a||(t=x({src:t,async:!0,type:"module"},e),(e=Ne.get(l))&&Co(t,e),a=n.createElement("script"),_t(a),Xt(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(l,a))}}function Mm(t,e,n,r){var l=(l=j.current)?Wa(l):null;if(!l)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Mr(n.href),n=ar(l).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Mr(n.href);var a=ar(l).hoistableStyles,i=a.get(t);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,i),(a=l.querySelector(kl(t)))&&!a._p&&(i.instance=a,i.state.loading=5),Ne.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ne.set(t,n),a||$S(l,t,n,i.state))),e&&r===null)throw Error(p(528,""));return i}if(e&&r!==null)throw Error(p(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ar(n),n=ar(l).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function Mr(t){return'href="'+Fe(t)+'"'}function kl(t){return'link[rel="stylesheet"]['+t+"]"}function Am(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function $S(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Xt(e,"link",n),_t(e),t.head.appendChild(e))}function Ar(t){return'[src="'+Fe(t)+'"]'}function Pl(t){return"script[async]"+t}function _m(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Fe(n.href)+'"]');if(r)return e.instance=r,_t(r),r;var l=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),_t(r),Xt(r,"style",l),Xa(r,n.precedence,t),e.instance=r;case"stylesheet":l=Mr(n.href);var a=t.querySelector(kl(l));if(a)return e.state.loading|=4,e.instance=a,_t(a),a;r=Am(n),(l=Ne.get(l))&&bo(r,l),a=(t.ownerDocument||t).createElement("link"),_t(a);var i=a;return i._p=new Promise(function(o,m){i.onload=o,i.onerror=m}),Xt(a,"link",r),e.state.loading|=4,Xa(a,n.precedence,t),e.instance=a;case"script":return a=Ar(n.src),(l=t.querySelector(Pl(a)))?(e.instance=l,_t(l),l):(r=n,(l=Ne.get(a))&&(r=x({},n),Co(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),_t(l),Xt(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(p(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Xa(r,n.precedence,t));return e.instance}function Xa(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,a=l,i=0;i<r.length;i++){var o=r[i];if(o.dataset.precedence===e)a=o;else if(a!==l)break}a?a.parentNode.insertBefore(t,a.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function bo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Co(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ya=null;function Um(t,e,n){if(Ya===null){var r=new Map,l=Ya=new Map;l.set(n,r)}else l=Ya,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var a=n[l];if(!(a[zr]||a[Gt]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var i=a.getAttribute(e)||"";i=t+i;var o=r.get(i);o?o.push(a):r.set(i,[a])}}return r}function Hm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function th(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Vm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eh(t,e,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Mr(r.href),a=e.querySelector(kl(l));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=qa.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=a,_t(a);return}a=e.ownerDocument||e,r=Am(r),(l=Ne.get(l))&&bo(r,l),a=a.createElement("link"),_t(a);var i=a;i._p=new Promise(function(o,m){i.onload=o,i.onerror=m}),Xt(a,"link",r),n.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=qa.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var wo=0;function nh(t,e){return t.stylesheets&&t.count===0&&Za(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var r=setTimeout(function(){if(t.stylesheets&&Za(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4+e);0<t.imgBytes&&wo===0&&(wo=62500*xS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Za(t,t.stylesheets),t.unsuspend)){var a=t.unsuspend;t.unsuspend=null,a()}},(t.imgBytes>wo?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function qa(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Za(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Qa=null;function Za(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Qa=new Map,e.forEach(rh,t),Qa=null,qa.call(t))}function rh(t,e){if(!(e.state.loading&4)){var n=Qa.get(t);if(n)var r=n.get(null);else{n=new Map,Qa.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<l.length;a++){var i=l[a];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}l=e.instance,i=l.getAttribute("data-precedence"),a=n.get(i)||r,a===r&&n.set(null,l),n.set(i,l),this.count++,r=qa.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),a?a.parentNode.insertBefore(l,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Nl={$$typeof:Dt,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function lh(t,e,n,r,l,a,i,o,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.hiddenUpdates=hi(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Gm(t,e,n,r,l,a,i,o,m,f,E,I){return t=new lh(t,e,n,i,m,f,E,I,o),e=1,a===!0&&(e|=24),a=de(3,null,null,e),t.current=a,a.stateNode=t,e=$i(),e.refCount++,t.pooledCache=e,e.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:e},rs(a),t}function jm(t){return t?(t=hr,t):hr}function zm(t,e,n,r,l,a){l=jm(l),r.context===null?r.context=l:r.pendingContext=l,r=Sn(e),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=hn(t,r,e),n!==null&&(se(n,t,e),ol(n,t,e))}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fo(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function Xm(t){if(t.tag===13||t.tag===31){var e=_n(t,67108864);e!==null&&se(e,t,67108864),Fo(t,67108864)}}function Ym(t){if(t.tag===13||t.tag===31){var e=fe();e=yi(e);var n=_n(t,e);n!==null&&se(n,t,e),Fo(t,e)}}var Ja=!0;function ah(t,e,n,r){var l=D.T;D.T=null;var a=R.p;try{R.p=2,To(t,e,n,r)}finally{R.p=a,D.T=l}}function ih(t,e,n,r){var l=D.T;D.T=null;var a=R.p;try{R.p=8,To(t,e,n,r)}finally{R.p=a,D.T=l}}function To(t,e,n,r){if(Ja){var l=Do(r);if(l===null)oo(t,e,r,$a,n),Qm(t,r);else if(oh(l,t,e,n,r))r.stopPropagation();else if(Qm(t,r),e&4&&-1<sh.indexOf(t)){for(;l!==null;){var a=lr(l);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var i=Rn(a.pendingLanes);if(i!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var m=1<<31-ce(i);o.entanglements[1]|=m,i&=~m}_e(a),(pt&6)===0&&(Oa=pe()+500,Dl(0))}}break;case 31:case 13:o=_n(a,2),o!==null&&se(o,a,2),Ma(),Fo(a,2)}if(a=Do(r),a===null&&oo(t,e,r,$a,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else oo(t,e,r,null,n)}}function Do(t){return t=Ei(t),Eo(t)}var $a=null;function Eo(t){if($a=null,t=rr(t),t!==null){var e=T(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=K(e),t!==null)return t;t=null}else if(n===31){if(t=L(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return $a=t,null}function qm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wd()){case rp:return 2;case lp:return 8;case Vl:case Xd:return 32;case ap:return 268435456;default:return 32}default:return 32}}var go=!1,gn=null,In=null,kn=null,Kl=new Map,Ll=new Map,Pn=[],sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(t,e){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(e.pointerId)}}function Bl(t,e,n,r,l,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},e!==null&&(e=lr(e),e!==null&&Xm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function oh(t,e,n,r,l){switch(e){case"focusin":return gn=Bl(gn,t,e,n,r,l),!0;case"dragenter":return In=Bl(In,t,e,n,r,l),!0;case"mouseover":return kn=Bl(kn,t,e,n,r,l),!0;case"pointerover":var a=l.pointerId;return Kl.set(a,Bl(Kl.get(a)||null,t,e,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Ll.set(a,Bl(Ll.get(a)||null,t,e,n,r,l)),!0}return!1}function Zm(t){var e=rr(t.target);if(e!==null){var n=T(e);if(n!==null){if(e=n.tag,e===13){if(e=K(n),e!==null){t.blockedOn=e,cp(t.priority,function(){Ym(n)});return}}else if(e===31){if(e=L(n),e!==null){t.blockedOn=e,cp(t.priority,function(){Ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ti(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Do(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Di=r,n.target.dispatchEvent(r),Di=null}else return e=lr(n),e!==null&&Xm(e),t.blockedOn=n,!1;e.shift()}return!0}function Jm(t,e,n){ti(t)&&n.delete(e)}function ph(){go=!1,gn!==null&&ti(gn)&&(gn=null),In!==null&&ti(In)&&(In=null),kn!==null&&ti(kn)&&(kn=null),Kl.forEach(Jm),Ll.forEach(Jm)}function ei(t,e){t.blockedOn===e&&(t.blockedOn=null,go||(go=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ph)))}var ni=null;function $m(t){ni!==t&&(ni=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ni===t&&(ni=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Eo(r||n)===null)continue;break}var a=lr(n);a!==null&&(t.splice(e,3),e-=3,Ts(a,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function _r(t){function e(m){return ei(m,t)}gn!==null&&ei(gn,t),In!==null&&ei(In,t),kn!==null&&ei(kn,t),Kl.forEach(e),Ll.forEach(e);for(var n=0;n<Pn.length;n++){var r=Pn[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&Pn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],a=n[r+1],i=l[ee]||null;if(typeof a=="function")i||$m(n);else if(i){var o=null;if(a&&a.hasAttribute("formAction")){if(l=a,i=a[ee]||null)o=i.formAction;else if(Eo(l)!==null)continue}else o=i.action;typeof o=="function"?n[r+1]=o:(n.splice(r,3),r-=3),$m(n)}}}function td(){function t(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Io(t){this._internalRoot=t}ri.prototype.render=Io.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(p(409));var n=e.current,r=fe();zm(n,r,t,e,null,null)},ri.prototype.unmount=Io.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zm(t.current,2,null,t,null,null),Ma(),e[nr]=null}};function ri(t){this._internalRoot=t}ri.prototype.unstable_scheduleHydration=function(t){if(t){var e=up();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pn.length&&e!==0&&e<Pn[n].priority;n++);Pn.splice(n,0,t),n===0&&Zm(t)}};var ed=u.version;if(ed!=="19.2.8")throw Error(p(527,ed,"19.2.8"));R.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=C(e),t=t!==null?B(t):null,t=t===null?null:t.stateNode,t};var uh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Vr=li.inject(uh),ue=li}catch{}}return Ol.createRoot=function(t,e){if(!y(t))throw Error(p(299));var n=!1,r="",l=oc,a=pc,i=uc;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gm(t,1,!1,null,null,n,r,null,l,a,i,td),t[nr]=e.current,so(t),new Io(e)},Ol.hydrateRoot=function(t,e,n){if(!y(t))throw Error(p(299));var r=!1,l="",a=oc,i=pc,o=uc,m=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(m=n.formState)),e=Gm(t,1,!0,e,n??null,r,l,m,a,i,o,td),e.context=jm(null),n=e.current,r=fe(),r=yi(r),l=Sn(r),l.callback=null,hn(n,l,r),n=r,e.current.lanes=n,jr(e,n),_e(e),t[nr]=e.current,so(t),new ri(e)},Ol.version="19.2.8",Ol}var cd;function Ch(){if(cd)return No.exports;cd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),No.exports=bh(),No.exports}var wh=Ch();const Fh="modulepreload",Th=function(s,u){return new URL(s,u).href},md={},jo=function(u,c,p){let y=Promise.resolve();if(c&&c.length>0){let C=function(B){return Promise.all(B.map(x=>Promise.resolve(x).then(z=>({status:"fulfilled",value:z}),z=>({status:"rejected",reason:z}))))};const K=document.getElementsByTagName("link"),L=document.querySelector("meta[property=csp-nonce]"),F=L?.nonce||L?.getAttribute("nonce");y=C(c.map(B=>{if(B=Th(B,p),B in md)return;md[B]=!0;const x=B.endsWith(".css"),z=x?'[rel="stylesheet"]':"";if(p)for(let Z=K.length-1;Z>=0;Z--){const U=K[Z];if(U.href===B&&(!x||U.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${B}"]${z}`))return;const lt=document.createElement("link");if(lt.rel=x?"stylesheet":Fh,x||(lt.as="script"),lt.crossOrigin="",lt.href=B,F&&lt.setAttribute("nonce",F),document.head.appendChild(lt),x)return new Promise((Z,U)=>{lt.addEventListener("load",Z),lt.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${B}`)))})}))}function T(K){const L=new Event("vite:preloadError",{cancelable:!0});if(L.payload=K,window.dispatchEvent(L),!L.defaultPrevented)throw K}return y.then(K=>{for(const L of K||[])L.status==="rejected"&&T(L.reason);return u().catch(T)})};function Dh(s){const u=new Map;return(c,p)=>{if(c!==32&&c!==40){s(c,p);return}const y=u.get(c);if(p){y?.timer!==void 0&&clearTimeout(y.timer),u.set(c,{since:performance.now()}),s(c,1);return}if(!y){s(c,0);return}const T=Math.max(0,60-(performance.now()-y.since));if(y.timer!==void 0&&clearTimeout(y.timer),!T){u.delete(c),s(c,0);return}y.timer=setTimeout(()=>{u.delete(c),s(c,0)},T)}}let bt=null,dd=null,ai=!1,Ro=!0;async function Eh(s,u){if(!crossOriginIsolated)throw new Error("Black Belt vereist cross-origin isolation (COOP/COEP). Open de lokale server via localhost.");const c=new URL("./pinmame/pinmame_browser.mjs",self.location.origin).href,{default:p}=await import(c);bt=await p({print:console.debug,printErr:console.warn});for(const F of["roms","nvram","cfg","samples","hi"])bt.FS.mkdirTree("/pinmame/"+F);if(bt.FS.writeFile("/pinmame/roms/blackblt.zip",s),!u?.length){const F=await fetch(new URL("blackblt-factory.nv",c));if(!F.ok)throw new Error("Black Belt fabrieksinstellingen ontbreken.");u=new Uint8Array(await F.arrayBuffer())}bt.FS.writeFile("/pinmame/nvram/blackblt.nv",u);const y=bt._browser_start();if(y!==0)throw new Error(`PinMAME kon Black Belt niet starten (${y}).`);const T=performance.now()+2e4;for(;bt._browser_running()!==1;){if(performance.now()>T)throw new Error("Black Belt ROM start niet binnen 20 seconden.");await new Promise(F=>setTimeout(F,50))}const K=globalThis,L=Dh((F,C)=>bt?._browser_switch(F,C));K.__pinmameQuery=(F,C,B)=>{if(!bt)return 0;switch(F){case 0:return bt._browser_running();case 1:return bt._browser_lamp(C);case 2:return bt._browser_get_switch(C);case 3:return L(C,B),1;case 4:return bt._browser_solenoid(C);case 5:return bt._browser_raw_digit(C);case 7:return bt._browser_audio_produced();default:return 0}},K.__pinmameAudio=()=>{if(!bt)return new Float32Array;const F=bt._browser_audio()/4;return bt.HEAPF32.slice(F,F+bt._browser_audio_count())},K.__pinmameNvram=()=>{if(!bt)return new Uint8Array;const F=bt._browser_nvram();return bt.HEAPU8.slice(F,F+bt._browser_nvram_count())}}async function Oo(s,u){return s==="startPinmame"?(u[0]==="blackblt"?(dd??=Eh(u[1],u[2]),await dd,ai=!1,Ro=!0,bt?._browser_pause(0)):bt?._browser_pause(1),{value:void 0}):s==="pinmameDisplay"?{value:bt?Array.from({length:28},(c,p)=>bt._browser_digit(Math.floor(p/7),p%7)):[]}:(s==="setPaused"&&(ai=u[0]),s==="setVisible"&&(Ro=u[0]),s==="stopTable"&&(ai=!0),(s==="setPaused"||s==="setVisible"||s==="stopTable")&&bt?._browser_pause(ai||!Ro?1:0),null)}function gh(s){return new Worker(""+new URL("game.worker-Cbfj9ckg.js",import.meta.url).href,{name:s?.name})}function Ih(s){const u={meshes:s.meshes,vertices:s.vertices,triangles:s.triangles,textures:s.textures,drawCalls:s.drawCalls,drawCallsNaive:s.drawCallsNaive,parseMs:s.parseMs,extractMs:s.extractMs,uploadMs:s.uploadMs};return s.free(),u}function kh(s){const u={fps:s.fps,tps:s.physicsTicksPerSecond,balls:s.balls,tilt:s.tilt,warnings:s.warnings,tiltRisk:s.tiltRisk,handlerCalls:s.handlerCalls,romRunning:s.romRunning,romName:s.romName,soundBoard:s.soundBoard,soundRate:s.soundRate,qualityTier:s.qualityTier,notice:s.notice};return s.free(),u}const xo=640,xl=4/3,Mo=14;async function Ph(s){const u=Math.min(1,xo/s.width),c=Math.max(1,Math.round(s.width*u)),p=Math.max(1,Math.round(s.height*u)),T=new OffscreenCanvas(c,p).getContext("2d",{willReadFrequently:!0});if(!T)return null;T.drawImage(s,0,0,c,p);const K=Nh(T.getImageData(0,0,c,p).data,c,p);if(!K)return null;const L=Kh(K,c,p),F=new OffscreenCanvas(xo,Math.round(xo/xl)),C=F.getContext("2d");if(!C)return null;const B=s.width/c;C.drawImage(s,L.x*B,L.y*B,L.w*B,L.h*B,0,0,F.width,F.height);const x=await F.convertToBlob({type:"image/jpeg",quality:.82});return new Uint8Array(await x.arrayBuffer())}function Nh(s,u,c){let p=u,y=c,T=-1,K=-1;for(let L=0;L<c;L++)for(let F=0;F<u;F++){const C=(L*u+F)*4;(s[C]>Mo||s[C+1]>Mo||s[C+2]>Mo)&&(F<p&&(p=F),F>T&&(T=F),L<y&&(y=L),L>K&&(K=L))}return T<p||K<y?null:{x:p,y,w:T-p+1,h:K-y+1}}function Kh(s,u,c){const p=Math.round(Math.max(s.w,s.h)*.04);let y=Math.min(u,s.w+p*2),T=Math.min(c,s.h+p*2);y/T<xl&&(y=Math.min(u,Math.round(T*xl))),T=Math.min(c,Math.round(y/xl));const K=s.x+s.w/2,L=s.y+s.h/2;return{x:Math.max(0,Math.min(u-y,Math.round(K-y/2))),y:Math.max(0,Math.min(c-T,Math.round(L-T/2))),w:y,h:T}}let Sd=null;function Hl(){return Sd??=Lh(),Sd}function $o(){return new URLSearchParams(window.location.search).get("gpu")==="gl"}async function Lh(){const s=new URLSearchParams(window.location.search).get("host"),u="transferControlToOffscreen"in HTMLCanvasElement.prototype;if(s!=="main"&&u){const c=new gh,p=new Rh(c);try{if(await Bh(p.call("probe",[$o()]),8e3))return console.debug("[player] running in a worker"),Oh(p);console.debug("[player] no GPU in a worker here; using the main thread")}catch(y){console.warn("[player] worker probe failed; using the main thread:",y)}c.terminate()}return Mh()}function Bh(s,u){return new Promise((c,p)=>{const y=window.setTimeout(()=>p(new Error(`no answer in ${u} ms`)),u);s.then(T=>{window.clearTimeout(y),c(T)},T=>{window.clearTimeout(y),p(T instanceof Error?T:new Error(String(T)))})})}class Rh{constructor(u){this.worker=u,u.onmessage=c=>{const p=c.data;if(p.kind==="log"){console[p.level](p.message);return}if(p.kind==="plunger"){this.plunger=p.value;return}const y=this.pending.get(p.id);y&&(this.pending.delete(p.id),p.ok?y.resolve(p.value):y.reject(new Error(p.error??"the worker failed without saying why")))},u.onerror=c=>this.fail(c.message||"the worker crashed"),u.onmessageerror=()=>this.fail("a message to or from the worker could not be read")}worker;next=1;pending=new Map;plunger=null;fail(u){const c=[...this.pending.values()];this.pending.clear();for(const p of c)p.reject(new Error(u))}call(u,c=[],p=[]){const y=this.next++;return new Promise((T,K)=>{this.pending.set(y,{resolve:T,reject:K}),this.worker.postMessage({id:y,op:u,args:c},p)})}}function Oh(s){const u=new WeakSet;let c=null;const p=y=>{const T=Math.min(window.devicePixelRatio||1,2);return[Math.max(1,Math.round(y.clientWidth*T)),Math.max(1,Math.round(y.clientHeight*T))]};return{kind:"worker",call:(y,T,K)=>s.call(y,T,K),async start(y){const[T,K]=p(y);if(u.has(y))await s.call("resizeSurface",[T,K]),await s.call("setVisible",[!0]);else{const L=y.transferControlToOffscreen();u.add(y),await s.call("start",[{canvas:L,width:T,height:K,forceGl:$o()}],[L])}c?.disconnect(),c=new ResizeObserver(()=>{const[L,F]=p(y);s.call("resizeSurface",[L,F])}),c.observe(y)},setVisible(y){s.call("setVisible",[y])},attachAudio(y,T){s.call("audio",[{port:y,rate:T}],[y])},plungerPull:()=>s.plunger,holdPlunger(y){s.call("holdPlunger",[y])},releasePlunger(){s.call("releasePlunger",[])}}}let hd=null;function xh(){return hd??=(async()=>{const s=await jo(()=>import("./vpw_player-0DDbdEwo.js"),[],import.meta.url),u=(await jo(async()=>{const{default:c}=await import("./vpw_player_bg-B4Zbo1tP.js");return{default:c}},[],import.meta.url)).default;return await s.default({module_or_path:u}),s})(),hd}async function Mh(){$o()&&(globalThis.VPW_FORCE_WEBGL=!0);const s=await xh();let u=null;return{kind:"main",async call(c,p=[]){const y=await Oo(c,p);if(y)return y.value;if(c==="loadTable")return await new Promise(K=>setTimeout(K,0)),Ih(s.loadTable(p[0]));if(c==="loopStats"){const K=s.loopStats();return K?kh(K):null}if(c==="shoot")return!u||!s.shoot()?null:await Ph(u);const T=s[c];if(typeof T!="function")throw new Error(`the player has no export named '${c}'`);return T(...p)},start(c){return u=c,Oo("setVisible",[!0]),s.start(c.id)},setVisible(c){Oo("setVisible",[c])},attachAudio(){throw new Error("the main-thread player pumps its own audio")},plungerPull:()=>s.plungerPull()??null,holdPlunger:c=>s.holdPlunger(c),releasePlunger:()=>s.releasePlunger()}}const Ah=["M8 3H32","M35 6V25","M35 31V50","M8 53H32","M5 31V50","M5 6V25","M8 28H32","M39 52L37 57","M20 30V50","M20 6V25"];function _h(){const[s,u]=q.useState([]);return q.useEffect(()=>{let c=!1,p;async function y(){try{const T=await(await Hl()).call("pinmameDisplay");c||u(T)}catch(T){console.warn("[Black Belt display]",T)}c||(p=setTimeout(()=>{y()},60))}return y(),()=>{c=!0,clearTimeout(p)}},[]),N.jsx("div",{className:"blackbelt-score",role:"img","aria-label":"Black Belt: vier originele ROM-displays",children:Array.from({length:4},(c,p)=>N.jsx("div",{className:"blackbelt-window",children:Array.from({length:7},(y,T)=>N.jsx("svg",{viewBox:"0 0 44 61","aria-hidden":"true",children:Ah.map((K,L)=>N.jsx("path",{d:K,stroke:(s[p*7+T]??0)&1<<L?"#ff7949":"#291b17"},L))},T))},p))})}const oi=[{id:"leftFlipper",label:"Left flipper",code:"KeyZ",held:!0},{id:"rightFlipper",label:"Right flipper",code:"KeyM",held:!0},{id:"plunger",label:"Plunger",code:"Space",held:!0,hint:"Hold to draw it back, let go to shoot."},{id:"nudgeLeft",label:"Nudge left",code:"ArrowLeft",held:!1},{id:"nudgeRight",label:"Nudge right",code:"ArrowRight",held:!1},{id:"nudgeCenter",label:"Nudge forward",code:"ArrowUp",held:!1},{id:"coin",label:"Insert coin",code:"Digit5",held:!1},{id:"start",label:"Start",code:"Digit1",held:!1},{id:"newBall",label:"New ball",code:"Enter",held:!1,hint:"Puts a ball back in the lane and clears a tilt."}],Uh={leftFlipper:"KeyZ",rightFlipper:"KeyM",plunger:"Space",nudgeLeft:"ArrowLeft",nudgeRight:"ArrowRight",nudgeCenter:"ArrowUp",coin:"Digit5",start:"Digit1",newBall:"Enter"},Hh={leftFlipper:4,rightFlipper:5,plunger:0,nudgeLeft:14,nudgeRight:15,nudgeCenter:12,coin:8,start:9,newBall:3};function yd(s,u){return oi.find(c=>s[c.id]===u)}function Vh(s,u){return oi.find(c=>s[c.id]===u)}function Kd(s){const u={...Uh};if(s&&typeof s=="object")for(const c of oi){const p=s[c.id];typeof p=="string"&&p.length>0&&(u[c.id]=p)}return u}function Ld(s){const u={...Hh};if(s&&typeof s=="object")for(const c of oi){const p=s[c.id];p===null?u[c.id]=null:typeof p=="number"&&Number.isInteger(p)&&p>=0&&p<32&&(u[c.id]=p)}return u}const Bd="vpw.settings",Gh=1.2,si=["front","cabinet","overhead"],jh=["left","right"],zh=["top","bottom","hidden"],Wh=["table","bar"],Ao={blackBeltStrength:.85,volume:.7,flat:!1,adaptive:!0,camera:"front",environment:"bar",volumeMachine:1,volumeTable:1,keys:Kd(null),pad:Ld(null),scoreSide:"left",scoreDock:"top"};let Ur=Xh();const zo=new Set;function Xh(){try{const s=localStorage.getItem(Bd);if(!s)return{...Ao};const u=JSON.parse(s);return{...Ao,...Rd(u)}}catch{return{...Ao}}}function Rd(s){const u={};typeof s.blackBeltStrength=="number"&&Number.isFinite(s.blackBeltStrength)&&(u.blackBeltStrength=Math.min(1,Math.max(.6,s.blackBeltStrength))),typeof s.volume=="number"&&Number.isFinite(s.volume)&&(u.volume=Math.min(1,Math.max(0,s.volume))),si.includes(s.camera)&&(u.camera=s.camera),Wh.includes(s.environment)&&(u.environment=s.environment),typeof s.flat=="boolean"&&(u.flat=s.flat),typeof s.adaptive=="boolean"&&(u.adaptive=s.adaptive);for(const c of["volumeMachine","volumeTable"]){const p=s[c];typeof p=="number"&&Number.isFinite(p)&&(u[c]=Math.min(Gh,Math.max(0,p)))}return s.keys!==void 0&&(u.keys=Kd(s.keys)),s.pad!==void 0&&(u.pad=Ld(s.pad)),jh.includes(s.scoreSide)&&(u.scoreSide=s.scoreSide),zh.includes(s.scoreDock)&&(u.scoreDock=s.scoreDock),u}function Ht(){return Ur}function _o(s){Ur={...Ur,...Rd(s)};try{localStorage.setItem(Bd,JSON.stringify(Ur))}catch{}for(const u of zo)u(Ur);return Ur}function Od(s){return zo.add(s),()=>zo.delete(s)}const Yh=.1,qh=.25;class Qh{node;q=0;s=0;constructor(u){this.node=u,u.port.onmessage=c=>{this.q=c.data.queued,this.s=c.data.starved}}queued(){return this.q}starved(){return this.s}push(u){this.q+=u.length/2,this.node.port.postMessage(u,[u.buffer])}flush(){this.q=0,this.node.port.postMessage("flush")}stop(){this.node.port.postMessage("stop")}}class Zh{node;chunks=[];offset=0;frames=0;starvedCount=0;constructor(u){this.node=u.createScriptProcessor(1024,0,2),this.node.onaudioprocess=c=>{const p=c.outputBuffer.getChannelData(0),y=c.outputBuffer.getChannelData(1);let T=0;for(;T<p.length&&this.chunks.length>0;){const K=this.chunks[0];p[T]=K[this.offset*2],y[T]=K[this.offset*2+1],T+=1,this.offset+=1,this.offset*2>=K.length&&(this.chunks.shift(),this.offset=0)}this.frames=Math.max(0,this.frames-p.length),T<p.length&&(this.starvedCount+=p.length-T,p.fill(0,T),y.fill(0,T))}}queued(){return this.frames}starved(){return this.starvedCount}push(u){this.chunks.push(u),this.frames+=u.length/2}flush(){this.chunks=[],this.offset=0,this.frames=0}stop(){this.node.onaudioprocess=null}}class tp{context;sink;gain;host;workerPumps;rendering=!1;stopped=!1;constructor(u,c,p,y,T){this.context=u,this.sink=c,this.gain=p,this.host=y,this.workerPumps=T}static async create(){const u=await Hl(),c=await u.call("audioRate"),p=new AudioContext({sampleRate:c,latencyHint:"interactive"});let y,T=!1;if(p.audioWorklet){const L=(await jo(async()=>{const{default:C}=await import("./worklet-7lvWjBlN.js");return{default:C}},[],import.meta.url)).default;await p.audioWorklet.addModule(L);const F=new AudioWorkletNode(p,"playfield",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]});if(y=new Qh(F),u.kind==="worker"){const C=new MessageChannel;F.port.postMessage({port:C.port1},[C.port1]),u.attachAudio(C.port2,c),T=!0}}else console.warn("[audio] no AudioWorklet on this page (an insecure context?): falling back to a ScriptProcessorNode"),y=new Zh(p);const K=p.createGain();return y.node.connect(K).connect(p.destination),new tp(p,y,K,u,T)}get rate(){return this.context.sampleRate}get state(){return this.context.state}get pumpsHere(){return!this.workerPumps}get underruns(){return this.sink.starved()}async resume(){this.context.state!=="running"&&await this.context.resume()}setVolume(u){const c=this.context.currentTime;this.gain.gain.cancelScheduledValues(c),this.gain.gain.setTargetAtTime(Math.max(0,Math.min(1,u)),c,.02)}pump(){if(this.stopped||this.rendering||this.context.state!=="running")return;const u=this.rate*Yh,c=Math.min(Math.ceil(u-this.sink.queued()),Math.ceil(this.rate*qh));c<=0||(this.rendering=!0,this.host.call("renderAudio",[c]).then(p=>{this.rendering=!1,p.length!==0&&this.sink.push(p)}).catch(()=>{this.rendering=!1}))}flush(){this.sink.flush()}async close(){this.stopped||(this.stopped=!0,this.sink.stop(),this.sink.node.disconnect(),await this.context.close())}}let tr=null,$n=0,Wo=null;function Jh(){return tr??=tp.create().catch(s=>{throw tr=null,s}),tr}async function vd(){let s,u;try{[s,u]=await Promise.all([Jh(),Hl()])}catch(y){console.warn("[audio] no sound on this page:",y);return}try{await s.resume()}catch(y){console.warn("[audio] could not start:",y);return}if(s.setVolume(Ht().volume),u.call("setVolume",[1]),Wo??=Od(y=>s.setVolume(y.volume)),!s.pumpsHere||$n)return;let c=performance.now();const p=()=>{if(!tr){$n=0;return}const y=performance.now()-c,T=performance.now();s.pump();const K=performance.now()-T;K>8&&u.call("notePause",["audio pump",K]),y>34&&u.call("notePause",["nothing ran",y]),c=performance.now(),$n=requestAnimationFrame(p)};$n=requestAnimationFrame(p)}async function $h(){if($n&&(cancelAnimationFrame($n),$n=0),Wo?.(),Wo=null,!tr)return;const s=tr;tr=null;try{await(await s).close()}catch{}}const ty="vpinball-web",ey=4,Ml="tables",Xo="files",Yo="thumbs",qo="roms",Al="saves",_l="values",Ul="bakes";class ny extends Error{constructor(){super("This browser does not expose IndexedDB."),this.name="StorageUnavailable"}}function ry(){return typeof indexedDB<"u"}let fd=null;function ly(){return ry()?(fd??=new Promise((s,u)=>{const c=indexedDB.open(ty,ey);c.onupgradeneeded=()=>{const p=c.result;p.objectStoreNames.contains(Ml)||p.createObjectStore(Ml,{keyPath:"id"});for(const y of[Xo,Yo,qo,Al,Ul,_l])p.objectStoreNames.contains(y)||p.createObjectStore(y)},c.onsuccess=()=>s(c.result),c.onerror=()=>u(c.error??new Error("could not open the DB"))}),fd):Promise.reject(new ny)}function er(s){return new Promise((u,c)=>{s.onsuccess=()=>u(s.result),s.onerror=()=>c(s.error??new Error("the operation failed"))})}async function ln(s,u,c){const y=(await ly()).transaction(s,u),T=new Promise((L,F)=>{y.oncomplete=()=>L(),y.onabort=()=>F(y.error??new Error("transaction aborted")),y.onerror=()=>F(y.error??new Error("error in the transaction"))}),K=await c(y);return u!=="readonly"&&await T,K}async function ay(s){const u=await ln([Xo],"readonly",c=>er(c.objectStore(Xo).get(s)));if(!u)throw new Error(`table ${s} is not in the library`);return new Uint8Array(await u.arrayBuffer())}async function iy(s,u,c){const p=new Blob([u],{type:c});await ln([Ml,Yo],"readwrite",async y=>{const T=await er(y.objectStore(Ml).get(s));T&&(y.objectStore(Ml).put({...T,thumbMime:c}),y.objectStore(Yo).put(p,s))})}async function sy(s){try{const u=await ln([qo],"readonly",c=>er(c.objectStore(qo).get(s.toLowerCase())));return u?new Uint8Array(await u.arrayBuffer()):null}catch{return null}}async function oy(s){try{const u=await ln([Al],"readonly",c=>er(c.objectStore(Al).get(s.toLowerCase())));return u?new Uint8Array(await u.arrayBuffer()):null}catch{return null}}async function py(s){try{return await ln([_l],"readonly",c=>er(c.objectStore(_l).get(s)))??[]}catch{return[]}}async function uy(s,u){await ln([_l],"readwrite",async c=>{c.objectStore(_l).put(u,s)})}async function cy(s,u){await ln([Al],"readwrite",async c=>{c.objectStore(Al).put(new Blob([u]),s.toLowerCase())})}const xd=3;async function my(s){const u=await ln([Ul],"readonly",c=>er(c.objectStore(Ul).get(s)));return u&&u.version===xd?u:null}async function dy(s,u){await ln([Ul],"readwrite",c=>er(c.objectStore(Ul).put(u,s)))}const Sy=new Set(["Space","ArrowLeft","ArrowRight","ArrowUp"]);function hy(s){let u=null;Hl().then(U=>{u=U});const c=(U,Ct)=>{const it=yd(Ht().keys,U);if(!it){u?.call("pressKey",[U,Ct]);return}if(it.id==="newBall"){Ct&&u?.call("newBall");return}u?.call("pressKey",[it.code,Ct])},p=U=>{U.repeat||((Sy.has(U.code)||yd(Ht().keys,U.code))&&U.preventDefault(),c(U.code,!0))},y=U=>{c(U.code,!1)},T=()=>{u?.call("releaseAllKeys")};let K=!1,L=[0,0];const F=U=>{K=!0,L=[U.clientX,U.clientY]},C=()=>{K=!1},B=U=>{if(!K)return;const Ct=U.clientX-L[0],it=U.clientY-L[1];L=[U.clientX,U.clientY],u?.call("cameraOrbit",[Ct,it])},x=U=>{U.preventDefault(),u?.call("cameraZoom",[U.deltaY>0])},z=new Map;let lt=0;const Z=()=>{lt=requestAnimationFrame(Z);const Ct=(navigator.getGamepads?.()??[]).find(Et=>Et&&Et.connected);if(!Ct){z.size>0&&(z.clear(),u?.call("releaseAllKeys"));return}const it=Ht().pad;for(const[Et,Dt]of Ct.buttons.entries()){const dt=Dt.pressed||Dt.value>.5;if(dt===(z.get(Et)??!1))continue;z.set(Et,dt);const gt=Vh(it,Et);if(gt){if(gt.id==="newBall"){dt&&u?.call("newBall");continue}u?.call("pressKey",[gt.code,dt])}}};return lt=requestAnimationFrame(Z),window.addEventListener("keydown",p),window.addEventListener("keyup",y),window.addEventListener("blur",T),s.addEventListener("mousedown",F),s.addEventListener("mouseup",C),s.addEventListener("mouseleave",C),s.addEventListener("mousemove",B),s.addEventListener("wheel",x,{passive:!1}),()=>{cancelAnimationFrame(lt),window.removeEventListener("keydown",p),window.removeEventListener("keyup",y),window.removeEventListener("blur",T),s.removeEventListener("mousedown",F),s.removeEventListener("mouseup",C),s.removeEventListener("mouseleave",C),s.removeEventListener("mousemove",B),s.removeEventListener("wheel",x)}}function yy(s){return new Worker(""+new URL("bake.worker-BgowPunJ.js",import.meta.url).href,{name:s?.name})}const vy=`'Last Updated in VBS v3.61\r
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
`,fy=`'Last Updated in VBS v3.36\r
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
`,by=`'Last Updated in VBS v3.36\r
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
`,Cy=`'Last Updated in VBS v3.36\r
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
`,wy=`'Last Updated in VBS v3.58\r
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
`,Fy=`'Last Updated in VBS v3.36\r
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
`,Ty=`\r
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
`,Dy=`'THIS IS THE OLD VERSION, USE B2B.vbs INSTEAD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r
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
`,Ey=`'Last Updated in VBS v3.61\r
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
`,gy=`'Last Updated in VBS v3.60\r
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
`,Iy=`'Last Updated in VBS v3.50\r
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
`,ky=`'*************************************************************************************\r
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
`,Py=`'Last Updated in VBS v3.61\r
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
`,Ny=`'Last Updated in VBS v3.61\r
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
`,Ky=`'Last Updated in VBS v3.36\r
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
`,Ly=`'Last Updated in VBS v3.57\r
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
`,By=`'Last Updated in VBS v3.58\r
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
`,Ry=`'Last Updated in VBS v3.58\r
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
`,Oy=`Option Explicit\r
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
`,xy=`'Last Updated in VBS v3.36\r
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
`,My=`'Last Updated in VBS v3.61\r
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
`,Ay=`'Playmatic System 4\r
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
`,_y=`'*******************************************************************************************************************\r
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
`,Uy=`'Last Updated in VBS v3.62\r
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
`,Hy=`'Last Updated in VBS v3.56\r
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
`,Vy=`'Last Updated in VBS v3.61\r
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
`,Gy=`'Last Updated in VBS v3.50\r
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
`,jy=`'			 ***************************************************\r
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
`,zy=`'Last Updated in VBS v3.61\r
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
`,Wy=`'***Controller.vbs version 1.2***'\r
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
`,Xy=`Option Explicit\r
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
`,Yy=`'Last Updated in VBS v3.61\r
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
`,qy=`'Last Updated in VBS v3.61\r
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
`,Qy=`'Last Updated in VBS v3.61\r
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
`,Zy=`'Last Updated in VBS v3.61\r
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
`,Jy=`'Last Updated in VBS v3.36\r
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
`,$y=`'Last Updated in VBS v3.61\r
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
`,tv=`'Last Updated in VBS v3.59\r
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
`,ev=`'Last Updated in VBS v3.59\r
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
`,nv=`'Last Updated in VBS v3.59\r
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
`,rv=`'Last Updated in VBS v3.50\r
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
`,lv=`'Last Updated in VBS v3.58\r
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
`,av=`'Last Updated in VBS v3.36\r
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
`,iv=`'Last Updated in VBS v3.36\r
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
`,sv=`'Last Updated in VBS v3.36\r
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
`,ov=`'Last Updated in VBS v3.50\r
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
`,pv=`'Last Updated in VBS v3.50\r
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
`,uv=`'Last Updated in VBS v3.36\r
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
`,cv=`'Last Updated in VBS v3.36\r
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
`,mv=`'Last Updated in VBS v3.36\r
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
`,dv=`'Playbar for Cobra, working from PinMAME v3.7\r
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
`,Sv=`'Last Updated in VBS v3.61\r
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
`,hv=`'Last Updated in VBS v3.61\r
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
`,yv=`'Last Updated in VBS v3.61\r
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
`,vv=`'Last Updated in VBS v3.61\r
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
`,fv=`'Last Updated in VBS v3.58\r
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
`,bv=`'Last Updated in VBS v3.61\r
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
`,Cv=`'Last Updated in VBS v3.61\r
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
`,wv=`'Last Updated in VBS v3.56\r
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
`,Fv=`'Last Updated in VBS v3.36\r
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
`,Tv=`'First added in VBS v3.60, based on peyper.vbs\r
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
`,Dv=`'Last Updated in VBS v3.61\r
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
`,Ev=`'Last Updated in VBS v3.61\r
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
`,gv=`'Last Updated in VBS v3.61\r
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
`,Iv=`'Last Updated in VBS v3.36\r
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
`,kv=`'Last Updated in VBS v3.62\r
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
`,Pv=`'Last Updated in VBS v3.36\r
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
`,Nv=`'Last Updated in VBS v3.36\r
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
`,Kv=`'Last Updated in VBS v3.61\r
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
`,Lv=`'Last Updated in VBS v3.36\r
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
`,Bv=Object.assign({"../scripts/6803.vbs":vy,"../scripts/ALI.vbs":fy,"../scripts/Atari.vbs":by,"../scripts/Atari1.vbs":Cy,"../scripts/Atari1b.vbs":wy,"../scripts/Atari2.vbs":Fy,"../scripts/B2B.vbs":Ty,"../scripts/B2Bcollision.vbs":Dy,"../scripts/Bally.vbs":Ey,"../scripts/BallyG.vbs":gy,"../scripts/Class1812.vbs":Iy,"../scripts/FPVPX.vbs":ky,"../scripts/GamePlan.vbs":Py,"../scripts/Hankin.vbs":Ny,"../scripts/LTD.vbs":Ky,"../scripts/LTD3.vbs":Ly,"../scripts/LTD4a.vbs":By,"../scripts/LTDPecmen.vbs":Ry,"../scripts/PDB.vbs":Oy,"../scripts/Play1.vbs":xy,"../scripts/Play2.vbs":My,"../scripts/Play4.vbs":Ay,"../scripts/UltraDMD_Options.vbs":_y,"../scripts/VPMKeys.vbs":Uy,"../scripts/WPC.vbs":Hy,"../scripts/alving.vbs":Vy,"../scripts/antar.vbs":Gy,"../scripts/b2s.vbs":jy,"../scripts/capcom.vbs":zy,"../scripts/controller.vbs":Wy,"../scripts/core.vbs":Xy,"../scripts/de.vbs":Yy,"../scripts/de2.vbs":qy,"../scripts/gts1.vbs":Qy,"../scripts/gts3.vbs":Zy,"../scripts/idsa.vbs":Jy,"../scripts/inder.vbs":$y,"../scripts/inder_atleta.vbs":tv,"../scripts/inder_centaur.vbs":ev,"../scripts/inder_skateboard.vbs":nv,"../scripts/ironballs.vbs":rv,"../scripts/joctronic.vbs":lv,"../scripts/juegos.vbs":av,"../scripts/juegos2.vbs":iv,"../scripts/jvh.vbs":sv,"../scripts/lancelot.vbs":ov,"../scripts/mac.vbs":pv,"../scripts/mrgame.vbs":uv,"../scripts/nuova.vbs":cv,"../scripts/peyper.vbs":mv,"../scripts/playbar.vbs":dv,"../scripts/s11.vbs":Sv,"../scripts/s4.vbs":hv,"../scripts/s6.vbs":yv,"../scripts/s7.vbs":vv,"../scripts/s8_StillCrazy.vbs":fv,"../scripts/sam.vbs":bv,"../scripts/sega.vbs":Cv,"../scripts/sega2.vbs":wv,"../scripts/sleic.vbs":Fv,"../scripts/solarwars.vbs":Tv,"../scripts/spinball.vbs":Dv,"../scripts/stern.vbs":Ev,"../scripts/sys80.vbs":gv,"../scripts/taito.vbs":Iv,"../scripts/wpc_ph.vbs":kv,"../scripts/zac.vbs":Pv,"../scripts/zac1.vbs":Nv,"../scripts/zac2.vbs":Kv,"../scripts/zacproto.vbs":Lv});function Rv(s){for(const[u,c]of Object.entries(Bv))s(u.slice(u.lastIndexOf("/")+1),c)}let Md=null,Uo=null,Yt=null,Jn=null;function xt(){return Hl().then(s=>(Md=s,s))}async function Ov(){return(await xt()).call("shoot",[])}async function xv(s){if(await s.call("scriptLibraryCount")>0)return;const u=[];Rv((c,p)=>{u.push(s.call("addScriptLibrary",[c,p]))}),await Promise.all(u)}async function Mv(s,u){if(!u?.name){console.warn("[player] this table did not say which ROM it needs");return}const c=await Ad(u.name);if(!c){console.warn(`[player] the ROM "${u.name}" is not loaded; import ${u.name}.zip`);return}await s.call("addRom",[u.name,c]);const p=u.name==="blackblt"?"blackblt-pinmame-v1":u.name,y=await oy(p);y&&await s.call("restoreMachineState",[u.name,y]),await s.call("startPinmame",[u.name,c,y]),Qo=p}async function Ad(s){try{const u=await fetch(`./game/${s}.zip`);return u.ok?new Uint8Array(await u.arrayBuffer()):null}catch{return null}}let Qo=null;async function Av(){if(!Yt)return;const s=await xt();if(Jn){const c=await s.call("tableValues");c.length>0&&await uy(Jn.key.split("|")[0],c)}if(!Qo)return;const u=await s.call("machineState");u&&await cy(Qo,u)}let ii=null;function _v(){return ii||(ii=document.createElement("canvas"),ii.id="playfield"),ii}function Uv(s){Uo??=(async()=>{const c=await xt();return await xv(c),c})();const u=(bd??Promise.resolve()).then(async()=>(await Uo).start(s),async()=>(await Uo).start(s));return bd=u,Yt??=u,u}let bd=null;function Hv(){Md?.setVisible(!1)}function Vv(s,u,c){const p=`${s}|${c?.name??""}`;if(Jn?.key===p)return Jn.stats;const y=(async()=>{const T=await xt();await Mv(T,c);const K=performance.now(),L=await u(),F=performance.now()-K,C=L.byteLength;await T.call("restoreTableValues",[await py(s)]);const B=await T.call("loadTable",[L],[L.buffer]);return jv(s,u,c).catch(x=>{console.warn("[bake] the GI bake failed:",x),Ln("done")}),{...B,bytes:C,fetchMs:F}})();return Jn={key:p,stats:y},y.catch(()=>{Jn?.key===p&&(Jn=null)}),y}const Ho=new Set;let _d="idle";const Zo=new Set;function Ln(s){_d=s;for(const u of Zo)u(s)}function Gv(s){return Zo.add(s),s(_d),()=>{Zo.delete(s)}}async function jv(s,u,c){if(Ho.has(s))return;Ho.add(s);const p=await xt();Ln("reading");const y=B=>B.layers>0?p.call("applyGiBake",[B.width,B.height,B.layers,new Uint8Array(B.data),B.groups]).then(()=>console.debug(`[bake] GI lightmaps on: ${B.layers} groups`)):Promise.resolve(),T=await my(s);if(T){Ln("applying"),await y(T),Ln("done");return}const K=await u(),L=c?.name?await sy(c.name)??await Ad(c.name):null;Ln("tracing");const F=await new Promise((B,x)=>{const z=new yy;z.onmessage=U=>{z.terminate(),B(U.data)},z.onerror=U=>{z.terminate(),x(new Error(U.message||"the bake worker crashed"))};const lt={key:s,bytes:K.buffer,rom:c?.name&&L?{name:c.name,zip:L.buffer}:void 0},Z=[K.buffer];lt.rom&&Z.push(lt.rom.zip),z.postMessage(lt,Z)});if(!F.ok){console.warn("[bake] the trace failed:",F.error),Ho.delete(s),Ln("done");return}Ln("applying");const C={version:xd,width:F.width,height:F.height,layers:F.layers,data:F.data,groups:F.groups};await dy(s,C),await y(C),Ln("done")}async function zv(){return Yt?(await xt()).call("loopStats"):null}async function Hr(s,u){Yt&&await(await xt()).call("pressKey",[s,u])}async function Ud(){Yt&&await(await xt()).call("releaseAllKeys")}async function Cd(s){Yt&&await(await xt()).call("setCameraView",[s])}let Vo=null;async function wd(s){if(!Yt)return;const u=await xt();if(s==="table"){await u.call("setEnvironment",[new Uint8Array(0)]);return}Vo??=fetch("./env/bar.hdr").then(c=>{if(!c.ok)throw new Error(`the room's map answered ${c.status}`);return c.arrayBuffer()}).then(c=>new Uint8Array(c));try{const p=(await Vo).slice();await u.call("setEnvironment",[p],[p.buffer])?console.debug("[env] the room is on"):console.warn("[env] the player declined the room (no table yet, or the map did not decode)")}catch(c){Vo=null,console.warn("[env] the room did not load:",c)}}async function Fd(s){Yt&&await(await xt()).call("setFlat",[s])}async function Td(s){Yt&&await(await xt()).call("setAdaptive",[s])}async function Dd(s,u){if(!Yt)return;const c=await xt();await c.call("setMachineVolume",[s]),await c.call("setTableVolume",[u])}async function Wv(s){Yt&&await(await xt()).call("setPaused",[s])}async function Ed(s){Yt&&await(await xt()).call("setPhysicsStrength",[s])}function Xv(s){const u=si.indexOf(s);return si[(u+1)%si.length]}async function Yv(s,u,c=!1){if(!Yt)return null;const p=await(await xt()).call("displayImage",[s,u,c]);return p.length>0?p:null}async function qv(){if(!Yt)return null;const s=await(await xt()).call("playfieldRect");return s.length===4?[s[0],s[1],s[2],s[3]]:null}async function Qv(){if(!Yt)return null;const s=await(await xt()).call("backboxRect");return s.length===4?[s[0],s[1],s[2],s[3]]:null}const Hd=30;async function Zv(s){Yt&&await(await xt()).call("setTelemetry",[s])}async function Jv(s=Hd){if(!Yt)return null;const u=await xt(),c=new Date,p=await u.call("telemetryDump",[s,c.toISOString()]);if(!p)return null;const T=`telemetry-${c.toISOString().replace(/[:.]/g,"-").replace(/Z$/,"")}.json`,K=new Blob([p],{type:"application/json"}),L=URL.createObjectURL(K),F=document.createElement("a");F.href=L,F.download=T,F.click(),setTimeout(()=>URL.revokeObjectURL(L),6e4);let C=null;try{const B=await fetch(`/debug-telemetry/${encodeURIComponent(T)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:p});B.ok&&(C=(await B.text()).trim())}catch{}return{name:T,size:K.size,savedTo:C}}const gd=720,$v=220;function Vd(){const[s,u]=q.useState(()=>window.innerWidth<gd);return q.useEffect(()=>{const c=()=>u(window.innerWidth<gd);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),s}function tf(s,u,c){return s!=="overhead"||!u||c==="hidden"?null:c}const Kn={width:512,height:128};function ef({view:s,side:u,docked:c}){const p=q.useRef(null),y=q.useRef(null),T=Vd(),[K,L]=q.useState(!1),[F,C]=q.useState(!1),[B,x]=q.useState(null);q.useEffect(()=>{let Z=!0;const U=()=>{Qv().then(it=>{Z&&L(it!==null)}),s==="overhead"&&!c?qv().then(it=>{if(!Z)return;if(!it){x(null);return}const[Et,,Dt]=it,dt=Et+Dt,gt=u==="left"?Et:1-dt;if(gt*window.innerWidth<$v){x(null);return}x({centre:u==="left"?Et/2:(dt+1)/2,room:gt})}):x(null)};U();const Ct=window.setInterval(U,500);return()=>{Z=!1,window.clearInterval(Ct)}},[s,u,c]),q.useEffect(()=>{let Z=!0,U=!1;const Ct=window.setInterval(()=>{Yv(Kn.width,Kn.height,!U).then(it=>{!Z||!it||(U=!0,y.current=it,C(!0),z())})},100);return()=>{Z=!1,window.clearInterval(Ct)}},[]),q.useEffect(()=>{z()},[F,c,B!==null]);function z(){const Z=p.current?.getContext("2d");!Z||!y.current||Z.putImageData(new ImageData(new Uint8ClampedArray(y.current),Kn.width,Kn.height),0,0)}if(!F||K||T&&s==="overhead"&&!c)return null;if(c)return N.jsx("div",{className:"score-dock",children:N.jsx("canvas",{className:"score score-docked",ref:p,width:Kn.width,height:Kn.height,"aria-hidden":"true"})});const lt=B?{left:`${B.centre*100}%`,right:"auto",top:"50%",transform:"translate(-50%, -50%)",width:`min(calc(${B.room*100}vw - 4rem), 40rem)`}:void 0;return N.jsx("canvas",{className:"score",ref:p,width:Kn.width,height:Kn.height,style:lt,"aria-hidden":"true"})}function Go({code:s,label:u,className:c}){const p=q.useRef(null),[y,T]=q.useState(!1),K=L=>{p.current===L.pointerId&&(p.current=null,T(!1),Hr(s,!1))};return N.jsx("button",{className:`${c}${y?" held":""}`,"aria-label":u,onPointerDown:L=>{p.current===null&&(L.preventDefault(),p.current=L.pointerId,L.currentTarget.setPointerCapture(L.pointerId),T(!0),Hr(s,!0))},onPointerUp:K,onPointerCancel:K,onLostPointerCapture:K,onContextMenu:L=>L.preventDefault(),children:N.jsx("span",{children:u})})}function nf({showGuide:s}){const[u,c]=q.useState(!1);return q.useEffect(()=>{if(!s)return;c(!0);const p=window.setTimeout(()=>c(!1),5e3);return()=>window.clearTimeout(p)},[s]),q.useEffect(()=>()=>{Ud()},[]),N.jsxs("div",{className:`blackbelt-touch${u?" show-guide":""}`,"aria-label":"Touch controls",children:[N.jsx(Go,{code:"KeyZ",label:"Left flipper",className:"mobile-flipper mobile-left"}),N.jsx(Go,{code:"KeyM",label:"Right flipper",className:"mobile-flipper mobile-right"}),N.jsx(Go,{code:"Space",label:"Launch · hold and release",className:"mobile-launch"})]})}function rf(s){return s.tableName??s.fileName.replace(/\.vpx$/i,"")}const Id=[{id:"starting",label:"Starting graphics"},{id:"loading",label:"Preparing the table"},{id:"shooting",label:"Almost ready"}],kd={idle:"Baking the light",reading:"Baking the light",tracing:"Tracing the light",applying:"Hanging the light",done:"The light is baked"};function lf({table:s,title:u,source:c,rom:p,onExit:y}){const T=q.useRef(null),[K,L]=q.useState(null),[F,C]=q.useState("starting"),[B,x]=q.useState(null),[z,lt]=q.useState(null),[Z,U]=q.useState(null),[Ct,it]=q.useState(null),[Et,Dt]=q.useState(()=>Ht().camera),[dt,gt]=q.useState("loading"),[Pt,$]=q.useState("idle"),[Vt,be]=q.useState(()=>({side:Ht().scoreSide,dock:Ht().scoreDock})),[oe,$t]=q.useState(!1),[qt,Ce]=q.useState(!1);q.useEffect(()=>{if(dt!=="done")return;Ce(!0);const P=window.setTimeout(()=>Ce(!1),5e3);return()=>window.clearTimeout(P)},[dt]);const[Ke,te]=q.useState(!1),D=q.useRef(!1),[R,G]=q.useState(()=>Ht().blackBeltStrength),ut=Vd(),J=(s?.rom??p)?.name==="blackblt",S=J?null:tf(Et,ut,Vt.dock);q.useEffect(()=>Gv($),[]),q.useEffect(()=>{if(F!=="ready"){gt("loading");return}gt("blackout");const P=window.setTimeout(()=>gt("reveal"),600),A=window.setTimeout(()=>gt("done"),1600);return()=>{window.clearTimeout(P),window.clearTimeout(A)}},[F]),q.useEffect(()=>{const P=A=>it(()=>A.detail);return window.addEventListener("vpw-update",P),()=>window.removeEventListener("vpw-update",P)},[]);const k=c.kind==="library"?`db:${c.id}`:`url:${c.url}`;q.useEffect(()=>{let P=!0,A,j;const W=_v();T.current?.appendChild(W),(async()=>{try{if(await Uv(W),!P)return;j=hy(W),C("loading");const St=await Vv(k,()=>c.kind==="library"?ay(c.id):fetch(c.url).then(Qt=>{if(!Qt.ok)throw new Error(`Table download failed: ${Qt.status} ${Qt.statusText} (${c.url})`);return Qt.arrayBuffer()}).then(Qt=>new Uint8Array(Qt)),s?.rom??p);if(!P)return;console.debug("[player] loaded",St),await Zv(!0),(s?.rom??p)?.name==="blackblt"&&_o({camera:"front"}),await Cd(Ht().camera),wd(Ht().environment);const Le=new URLSearchParams(window.location.search).get("flat")==="1";if(Fd(Le||Ht().flat),Td(Ht().adaptive),Dd(Ht().volumeMachine,Ht().volumeTable),(s?.rom??p)?.name==="blackblt"&&await Ed(Ht().blackBeltStrength),C("shooting"),await af(s),!P)return;C("ready"),A=window.setInterval(()=>{zv().then(Qt=>{!P||!Qt||(x(Qt),Qt.notice&&lt(Qt.notice))})},250)}catch(St){console.error("[player] the load failed:",St);const Le=St instanceof Error?St.message:String(St);L(Le.includes("create the surface")?`${Le} — the browser refused a graphics context. Closing other tabs of this page, or restarting the browser, usually gives it back.`:Le)}})();const Mt=()=>{Av()};return document.addEventListener("visibilitychange",Mt),()=>{P=!1,document.removeEventListener("visibilitychange",Mt),Mt(),A!==void 0&&window.clearInterval(A),j?.(),Hv(),$h(),W.remove()}},[k]),q.useEffect(()=>{const P=j=>{if(vd(),j.key==="Escape"&&!j.repeat&&(Ce(!1),$t(W=>!W)),j.code==="KeyC"&&!j.repeat){if(Ht().flat){lt("The flat renderer holds the camera — switch to Full 3D in Settings to move it.");return}const W=J?Ht().camera==="overhead"?"front":"overhead":Xv(Ht().camera);_o({camera:W})}j.code==="KeyB"&&!j.repeat&&Jv().then(W=>{W&&(console.info("[telemetry]",W),U(W.savedTo??W.name),window.setTimeout(()=>U(null),4e3))})},A=()=>{vd()};return window.addEventListener("keydown",P),window.addEventListener("pointerdown",A),()=>{window.removeEventListener("keydown",P),window.removeEventListener("pointerdown",A)}},[y,J]),q.useEffect(()=>{F==="ready"&&(Wv(oe),oe&&Ud())},[oe,F]),q.useEffect(()=>Od(P=>{const A=J&&P.camera==="cabinet"?"overhead":P.camera;Dt(A),Cd(A),wd(P.environment),Fd(P.flat),Td(P.adaptive),Dd(P.volumeMachine,P.volumeTable),be({side:P.scoreSide,dock:P.scoreDock})}),[J]);const O=s?rf(s):u??"Table";return N.jsxs("div",{className:`player${J?" blackbelt-player":""}${S?` player-docked player-dock-${S}`:""}`,children:[N.jsx("div",{className:"player-stage",ref:T}),F==="ready"&&(J?N.jsx(_h,{}):N.jsx(ef,{view:Et,side:Vt.side,docked:S})),F==="ready"&&N.jsx(nf,{showGuide:dt==="done"}),F==="ready"&&N.jsx("button",{className:"free-play","aria-label":"Start a free game",title:"Start a free game",disabled:Ke||oe,onClick:()=>{D.current||(D.current=!0,te(!0),(async()=>{try{await Hr("Digit5",!0),await new Promise(P=>window.setTimeout(P,100)),await Hr("Digit5",!1),await new Promise(P=>window.setTimeout(P,1500)),await Hr("Digit1",!0),await new Promise(P=>window.setTimeout(P,100)),await Hr("Digit1",!1)}finally{D.current=!1,te(!1)}})())},children:N.jsx("img",{src:"./start-button.png",alt:"",draggable:!1})}),J&&F==="ready"&&dt==="done"&&qt&&!oe&&N.jsxs("div",{className:"keyboard-guide",role:"region","aria-label":"Keyboard controls",children:[N.jsx("button",{className:"keyboard-guide-close",onClick:()=>Ce(!1),"aria-label":"Close instructions",children:"×"}),N.jsx(Pd,{}),N.jsx("small",{children:"Press Esc to see these instructions again."})]}),N.jsxs("div",{className:"player-hud",children:[N.jsx("button",{className:"touch-exit",onClick:()=>$t(!0),"aria-label":`Pause ${O}`,children:N.jsx(sf,{})}),B&&(B.tilt||B.tps<900||B.fps<50)&&N.jsx(pf,{loop:B}),B&&!B.romRunning&&N.jsx(of,{wanted:s?.rom.name??p?.name??null}),z&&N.jsx("p",{className:"player-notice",children:z}),Ct&&N.jsx("button",{type:"button",className:"player-update",onClick:()=>{it(null),Ct()},children:"New version ready · tap to load it"}),F==="ready"&&Pt!=="idle"&&Pt!=="done"&&N.jsxs("span",{className:"player-bake",role:"status",children:[N.jsx("i",{className:"spinner","aria-hidden":"true"}),kd[Pt],"…"]}),Z&&N.jsxs("span",{className:"player-fps",children:["saved ",Hd,"s · ",Z]})]}),oe&&F==="ready"&&N.jsx("div",{className:"pause",role:"dialog","aria-modal":"true","aria-label":"Paused",children:N.jsxs("div",{className:"pause-panel",children:[N.jsx("span",{className:"pause-kicker",children:"Paused"}),N.jsx("h2",{className:"pause-title",children:O}),N.jsx("div",{className:"pause-actions",children:N.jsx("button",{className:"btn btn-primary",onClick:()=>$t(!1),autoFocus:!0,children:"Resume game"})}),J&&N.jsx("div",{className:"keyboard-guide-in-pause",children:N.jsx(Pd,{})}),J&&N.jsxs("label",{className:"blackbelt-strength",children:[N.jsxs("span",{children:["Ball strength and slope: ",Math.round(R*100),"%"]}),N.jsx("input",{type:"range",min:"60",max:"100",step:"5",value:Math.round(R*100),onChange:P=>{const A=Number(P.target.value)/100;G(A),_o({blackBeltStrength:A}),Ed(A)}}),N.jsx("small",{children:"100% uses the original table settings."})]}),N.jsx("p",{className:"pause-hint",children:"Press Esc to resume."})]})}),dt!=="done"&&!K&&N.jsx("div",{className:`intro intro-${dt}`,"aria-hidden":dt!=="loading",children:N.jsxs("div",{className:"intro-body",children:[N.jsx("span",{className:"intro-kicker",children:"Loading Black Belt"}),N.jsx("h2",{className:"intro-title",children:O}),N.jsxs("span",{className:"intro-lamps","aria-hidden":"true",children:[N.jsx("i",{}),N.jsx("i",{}),N.jsx("i",{}),N.jsx("i",{}),N.jsx("i",{})]}),N.jsxs("ol",{className:"intro-steps","aria-live":"polite",children:[Id.map((P,A)=>N.jsx(Nd,{label:P.label,state:F==="ready"||A<Id.findIndex(j=>j.id===F)?"done":P.id===F?"running":"waiting"},P.id)),N.jsx(Nd,{label:kd[Pt],state:Pt==="done"?"done":Pt==="idle"?"waiting":"running"})]})]})}),K&&N.jsx("div",{className:"player-status",children:N.jsx("p",{className:"notice notice-error",children:K})})]})}function Pd(){return N.jsxs("div",{className:"keyboard-instructions",children:[N.jsx("strong",{children:"How to play"}),N.jsxs("div",{children:[N.jsx("b",{children:"Start"}),N.jsx("span",{children:"Click the START button above the table"})]}),N.jsxs("div",{children:[N.jsx("b",{children:"Flippers"}),N.jsxs("span",{children:[N.jsx("kbd",{children:"Z"})," left · ",N.jsx("kbd",{children:"M"})," right"]})]}),N.jsxs("div",{children:[N.jsx("b",{children:"Plunger"}),N.jsxs("span",{children:["Hold and release ",N.jsx("kbd",{children:"Space"})]})]})]})}async function af(s){if(!(!s||s.thumbMime))try{const u=await Ov();u&&u.length>0&&await iy(s.id,u,"image/jpeg")}catch(u){console.warn("[player] the photograph for the shelf failed:",u)}}function Nd({label:s,state:u}){return N.jsxs("li",{className:`intro-step intro-step-${u}`,children:[N.jsx("span",{className:"intro-mark","aria-hidden":"true",children:u==="running"&&N.jsx("i",{className:"spinner"})}),N.jsx("span",{children:s})]})}function sf(){return N.jsxs("svg",{viewBox:"0 0 24 24",role:"presentation",focusable:"false",children:[N.jsx("path",{d:"M14 4 H6 a2 2 0 0 0 -2 2 v12 a2 2 0 0 0 2 2 h8",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),N.jsx("path",{d:"M18 15 L21 12 L18 9 M21 12 H10",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function of({wanted:s}){return N.jsxs("div",{className:"player-nomachine",role:"status",children:[N.jsx("strong",{children:"No machine"}),N.jsx("span",{children:"The table is running but its ROM is not, so a coin credits nothing and start starts nothing: the rules of the game live on the machine's board."}),s?N.jsxs("span",{children:["It asks for ",N.jsxs("code",{children:[s,".zip"]}),". Import it from Content — or it may be a machine this emulator cannot run yet."]}):N.jsx("span",{children:"This table did not say which ROM it needs."})]})}function pf({loop:s}){return N.jsxs("span",{className:"player-fps",children:[s.fps.toFixed(0)," fps · ",s.tps.toFixed(0)," Hz physics",s.qualityTier>0&&N.jsxs("span",{children:[" · Q",s.qualityTier]}),s.romRunning&&!s.soundBoard&&N.jsx("strong",{className:"player-quiet",children:" · no sound board"}),s.romRunning&&s.soundBoard&&N.jsxs("span",{children:[" · ",(s.soundRate/1e3).toFixed(1),"k sound"]}),s.tilt&&N.jsx("strong",{className:"player-tilt",children:" · TILT"})]})}function uf(){return N.jsx(lf,{table:null,title:"Black Belt",source:{kind:"url",url:"./game/black-belt.vpx"},rom:{status:"required",name:"blackblt",zip:"blackblt.zip",alternates:[]},onExit:()=>window.location.reload()})}wh.createRoot(document.getElementById("root")).render(N.jsx(q.StrictMode,{children:N.jsx(uf,{})}));
