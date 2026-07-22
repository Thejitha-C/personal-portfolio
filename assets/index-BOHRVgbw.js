(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gd={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function gS(){if(ix)return Io;ix=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var ax;function xS(){return ax||(ax=1,gd.exports=gS()),gd.exports}var T=xS(),xd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function vS(){if(sx)return ut;sx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=g&&M[g]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,S={};function y(M,F,le){this.props=M,this.context=F,this.refs=S,this.updater=le||w}y.prototype.isReactComponent={},y.prototype.setState=function(M,F){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,F,"setState")},y.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function U(){}U.prototype=y.prototype;function I(M,F,le){this.props=M,this.context=F,this.refs=S,this.updater=le||w}var N=I.prototype=new U;N.constructor=I,D(N,y.prototype),N.isPureReactComponent=!0;var B=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function O(M,F,le){var _e=le.ref;return{$$typeof:r,type:M,key:F,ref:_e!==void 0?_e:null,props:le}}function W(M,F){return O(M.type,F,M.props)}function X(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function q(M){var F={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(le){return F[le]})}var pe=/\/+/g;function ve(M,F){return typeof M=="object"&&M!==null&&M.key!=null?q(""+M.key):F.toString(36)}function J(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(L,L):(M.status="pending",M.then(function(F){M.status==="pending"&&(M.status="fulfilled",M.value=F)},function(F){M.status==="pending"&&(M.status="rejected",M.reason=F)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function H(M,F,le,_e,Te){var Z=typeof M;(Z==="undefined"||Z==="boolean")&&(M=null);var se=!1;if(M===null)se=!0;else switch(Z){case"bigint":case"string":case"number":se=!0;break;case"object":switch(M.$$typeof){case r:case e:se=!0;break;case x:return se=M._init,H(se(M._payload),F,le,_e,Te)}}if(se)return Te=Te(M),se=_e===""?"."+ve(M,0):_e,B(Te)?(le="",se!=null&&(le=se.replace(pe,"$&/")+"/"),H(Te,F,le,"",function(He){return He})):Te!=null&&(X(Te)&&(Te=W(Te,le+(Te.key==null||M&&M.key===Te.key?"":(""+Te.key).replace(pe,"$&/")+"/")+se)),F.push(Te)),1;se=0;var de=_e===""?".":_e+":";if(B(M))for(var we=0;we<M.length;we++)_e=M[we],Z=de+ve(_e,we),se+=H(_e,F,le,Z,Te);else if(we=b(M),typeof we=="function")for(M=we.call(M),we=0;!(_e=M.next()).done;)_e=_e.value,Z=de+ve(_e,we++),se+=H(_e,F,le,Z,Te);else if(Z==="object"){if(typeof M.then=="function")return H(J(M),F,le,_e,Te);throw F=String(M),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return se}function V(M,F,le){if(M==null)return M;var _e=[],Te=0;return H(M,_e,"","",function(Z){return F.call(le,Z,Te++)}),_e}function ne(M){if(M._status===-1){var F=M._result;F=F(),F.then(function(le){(M._status===0||M._status===-1)&&(M._status=1,M._result=le)},function(le){(M._status===0||M._status===-1)&&(M._status=2,M._result=le)}),M._status===-1&&(M._status=0,M._result=F)}if(M._status===1)return M._result.default;throw M._result}var ye=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},G={map:V,forEach:function(M,F,le){V(M,function(){F.apply(this,arguments)},le)},count:function(M){var F=0;return V(M,function(){F++}),F},toArray:function(M){return V(M,function(F){return F})||[]},only:function(M){if(!X(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return ut.Activity=v,ut.Children=G,ut.Component=y,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=I,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ut.__COMPILER_RUNTIME={__proto__:null,c:function(M){return z.H.useMemoCache(M)}},ut.cache=function(M){return function(){return M.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(M,F,le){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var _e=D({},M.props),Te=M.key;if(F!=null)for(Z in F.key!==void 0&&(Te=""+F.key),F)!A.call(F,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&F.ref===void 0||(_e[Z]=F[Z]);var Z=arguments.length-2;if(Z===1)_e.children=le;else if(1<Z){for(var se=Array(Z),de=0;de<Z;de++)se[de]=arguments[de+2];_e.children=se}return O(M.type,Te,_e)},ut.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},ut.createElement=function(M,F,le){var _e,Te={},Z=null;if(F!=null)for(_e in F.key!==void 0&&(Z=""+F.key),F)A.call(F,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Te[_e]=F[_e]);var se=arguments.length-2;if(se===1)Te.children=le;else if(1<se){for(var de=Array(se),we=0;we<se;we++)de[we]=arguments[we+2];Te.children=de}if(M&&M.defaultProps)for(_e in se=M.defaultProps,se)Te[_e]===void 0&&(Te[_e]=se[_e]);return O(M,Z,Te)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(M){return{$$typeof:p,render:M}},ut.isValidElement=X,ut.lazy=function(M){return{$$typeof:x,_payload:{_status:-1,_result:M},_init:ne}},ut.memo=function(M,F){return{$$typeof:h,type:M,compare:F===void 0?null:F}},ut.startTransition=function(M){var F=z.T,le={};z.T=le;try{var _e=M(),Te=z.S;Te!==null&&Te(le,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(L,ye)}catch(Z){ye(Z)}finally{F!==null&&le.types!==null&&(F.types=le.types),z.T=F}},ut.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ut.use=function(M){return z.H.use(M)},ut.useActionState=function(M,F,le){return z.H.useActionState(M,F,le)},ut.useCallback=function(M,F){return z.H.useCallback(M,F)},ut.useContext=function(M){return z.H.useContext(M)},ut.useDebugValue=function(){},ut.useDeferredValue=function(M,F){return z.H.useDeferredValue(M,F)},ut.useEffect=function(M,F){return z.H.useEffect(M,F)},ut.useEffectEvent=function(M){return z.H.useEffectEvent(M)},ut.useId=function(){return z.H.useId()},ut.useImperativeHandle=function(M,F,le){return z.H.useImperativeHandle(M,F,le)},ut.useInsertionEffect=function(M,F){return z.H.useInsertionEffect(M,F)},ut.useLayoutEffect=function(M,F){return z.H.useLayoutEffect(M,F)},ut.useMemo=function(M,F){return z.H.useMemo(M,F)},ut.useOptimistic=function(M,F){return z.H.useOptimistic(M,F)},ut.useReducer=function(M,F,le){return z.H.useReducer(M,F,le)},ut.useRef=function(M){return z.H.useRef(M)},ut.useState=function(M){return z.H.useState(M)},ut.useSyncExternalStore=function(M,F,le){return z.H.useSyncExternalStore(M,F,le)},ut.useTransition=function(){return z.H.useTransition()},ut.version="19.2.8",ut}var rx;function ep(){return rx||(rx=1,xd.exports=vS()),xd.exports}var at=ep(),vd={exports:{}},zo={},_d={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function _S(){return ox||(ox=1,(function(r){function e(H,V){var ne=H.length;H.push(V);e:for(;0<ne;){var ye=ne-1>>>1,G=H[ye];if(0<l(G,V))H[ye]=V,H[ne]=G,ne=ye;else break e}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var V=H[0],ne=H.pop();if(ne!==V){H[0]=ne;e:for(var ye=0,G=H.length,M=G>>>1;ye<M;){var F=2*(ye+1)-1,le=H[F],_e=F+1,Te=H[_e];if(0>l(le,ne))_e<G&&0>l(Te,le)?(H[ye]=Te,H[_e]=ne,ye=_e):(H[ye]=le,H[F]=ne,ye=F);else if(_e<G&&0>l(Te,ne))H[ye]=Te,H[_e]=ne,ye=_e;else break e}}return V}function l(H,V){var ne=H.sortIndex-V.sortIndex;return ne!==0?ne:H.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,v=null,g=3,b=!1,w=!1,D=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(H){for(var V=i(h);V!==null;){if(V.callback===null)s(h);else if(V.startTime<=H)s(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(h)}}function B(H){if(D=!1,N(H),!w)if(i(m)!==null)w=!0,L||(L=!0,q());else{var V=i(h);V!==null&&J(B,V.startTime-H)}}var L=!1,z=-1,A=5,O=-1;function W(){return S?!0:!(r.unstable_now()-O<A)}function X(){if(S=!1,L){var H=r.unstable_now();O=H;var V=!0;try{e:{w=!1,D&&(D=!1,U(z),z=-1),b=!0;var ne=g;try{t:{for(N(H),v=i(m);v!==null&&!(v.expirationTime>H&&W());){var ye=v.callback;if(typeof ye=="function"){v.callback=null,g=v.priorityLevel;var G=ye(v.expirationTime<=H);if(H=r.unstable_now(),typeof G=="function"){v.callback=G,N(H),V=!0;break t}v===i(m)&&s(m),N(H)}else s(m);v=i(m)}if(v!==null)V=!0;else{var M=i(h);M!==null&&J(B,M.startTime-H),V=!1}}break e}finally{v=null,g=ne,b=!1}V=void 0}}finally{V?q():L=!1}}}var q;if(typeof I=="function")q=function(){I(X)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ve=pe.port2;pe.port1.onmessage=X,q=function(){ve.postMessage(null)}}else q=function(){y(X,0)};function J(H,V){z=y(function(){H(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(H){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var ne=g;g=V;try{return H()}finally{g=ne}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(H,V){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=g;g=H;try{return V()}finally{g=ne}},r.unstable_scheduleCallback=function(H,V,ne){var ye=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ye+ne:ye):ne=ye,H){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ne+G,H={id:x++,callback:V,priorityLevel:H,startTime:ne,expirationTime:G,sortIndex:-1},ne>ye?(H.sortIndex=ne,e(h,H),i(m)===null&&H===i(h)&&(D?(U(z),z=-1):D=!0,J(B,ne-ye))):(H.sortIndex=G,e(m,H),w||b||(w=!0,L||(L=!0,q()))),H},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(H){var V=g;return function(){var ne=g;g=V;try{return H.apply(this,arguments)}finally{g=ne}}}})(yd)),yd}var lx;function yS(){return lx||(lx=1,_d.exports=_S()),_d.exports}var Sd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx;function SS(){if(cx)return On;cx=1;var r=ep();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},On.flushSync=function(m){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=x,s.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:b}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.8",On}var ux;function MS(){if(ux)return Sd.exports;ux=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=SS(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function bS(){if(fx)return zo;fx=1;var r=yS(),e=ep(),i=MS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),I=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case B:return"Suspense";case L:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case I:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var J=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ye=[],G=-1;function M(t){return{current:t}}function F(t){0>G||(t.current=ye[G],ye[G]=null,G--)}function le(t,n){G++,ye[G]=t.current,t.current=n}var _e=M(null),Te=M(null),Z=M(null),se=M(null);function de(t,n){switch(le(Z,n),le(Te,t),le(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ag(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ag(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(_e),le(_e,t)}function we(){F(_e),F(Te),F(Z)}function He(t){t.memoizedState!==null&&le(se,t);var n=_e.current,a=wg(n,t.type);n!==a&&(le(Te,t),le(_e,a))}function Le(t){Te.current===t&&(F(_e),F(Te)),se.current===t&&(F(se),Uo._currentValue=ne)}var lt,Je;function ke(t){if(lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",Je=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+t+Je}var st=!1;function rt(t,n){if(!t||st)return"";st=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(he){var fe=he}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(he){fe=he}t.call(Ee.prototype)}}else{try{throw Error()}catch(he){fe=he}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(he){if(he&&fe&&typeof he.stack=="string")return[he.stack,fe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var k=_.split(`
`),ae=R.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ae.length)for(o=k.length-1,u=ae.length-1;1<=o&&0<=u&&k[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ae[u]){var Se=`
`+k[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{st=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ke(a):""}function Ct(t,n){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return t.child!==n&&n!==null?ke("Suspense Fallback"):ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return rt(t.type,!1);case 11:return rt(t.type.render,!1);case 1:return rt(t.type,!0);case 31:return ke("Activity");default:return""}}function Dt(t){try{var n="",a=null;do n+=Ct(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Bt=Object.prototype.hasOwnProperty,Ut=r.unstable_scheduleCallback,qt=r.unstable_cancelCallback,nn=r.unstable_shouldYield,K=r.unstable_requestPaint,It=r.unstable_now,Nt=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,ee=r.unstable_NormalPriority,ce=r.unstable_LowPriority,me=r.unstable_IdlePriority,Ce=r.log,Ue=r.unstable_setDisableYieldValue,ge=null,xe=null;function Ne(t){if(typeof Ce=="function"&&Ue(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(ge,t)}catch{}}var Ge=Math.clz32?Math.clz32:$e,Ie=Math.log,Oe=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Ie(t)/Oe|0)|0}var et=256,ct=262144,Y=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Re(o):(_&=R,_!==0?u=Re(_):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~f,R!==0?u=Re(R):_!==0?u=Re(_):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Ze(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,k=t.expirationTimes,ae=t.hiddenUpdates;for(a=_&~a;0<a;){var Se=31-Ge(a),Ee=1<<Se;R[Se]=0,k[Se]=-1;var fe=ae[Se];if(fe!==null)for(ae[Se]=null,Se=0;Se<fe.length;Se++){var he=fe[Se];he!==null&&(he.lane&=-536870913)}a&=~Ee}o!==0&&Ht(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ht(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ei(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ti(t,n){var a=n&-n;return a=(a&42)!==0?1:Wr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Wr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qr(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:Kg(t.type))}function Xs(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var Ii=Math.random().toString(36).slice(2),hn="__reactFiber$"+Ii,wn="__reactProps$"+Ii,kn="__reactContainer$"+Ii,fs="__reactEvents$"+Ii,al="__reactListeners$"+Ii,sl="__reactHandles$"+Ii,ds="__reactResources$"+Ii,wa="__reactMarker$"+Ii;function Ca(t){delete t[hn],delete t[wn],delete t[fs],delete t[al],delete t[sl]}function Qi(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[kn]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Og(t);t!==null;){if(a=t[hn])return a;t=Og(t)}return n}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[hn]||t[kn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ra(t){var n=t[ds];return n||(n=t[ds]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(t){t[wa]=!0}var rl=new Set,C={};function Q(t,n){ue(t,n),ue(t+"Capture",n)}function ue(t,n){for(C[t]=n,t=0;t<n.length;t++)rl.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},ze={};function Xe(t){return Bt.call(ze,t)?!0:Bt.call(oe,t)?!1:re.test(t)?ze[t]=!0:(oe[t]=!0,!1)}function Pe(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Lt(t){if(!t._valueTracker){var n=ht(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ht(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gt=/[\n"\\]/g;function Vt(t){return t.replace(Gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?vt(t,_,tt(n)):a!=null?vt(t,_,tt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+tt(R):t.removeAttribute("name")}function Ln(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Lt(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Lt(t)}function vt(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ni(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function Ti(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Lt(t)}function ii(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||kt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ai(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function Ft(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Na=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ps(t){return Na.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var du=null;function hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ws=null,js=null;function Tp(t){var n=Ji(t);if(n&&(t=n.stateNode)){var a=t[wn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[wn]||null;if(!u)throw Error(s(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&sn(o)}break e;case"textarea":ni(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&yn(t,!!a.multiple,n,!1)}}}var pu=!1;function Ap(t,n,a){if(pu)return t(n,a);pu=!0;try{var o=t(n);return o}finally{if(pu=!1,(Ws!==null||js!==null)&&(ql(),Ws&&(n=Ws,t=js,js=Ws=null,Tp(n),t)))for(n=0;n<t.length;n++)Tp(t[n])}}function Yr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(ea)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{mu=!1}var Da=null,gu=null,ol=null;function wp(){if(ol)return ol;var t,n=gu,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function Cp(){return!1}function Xn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:Cp,this.isPropagationStopped=Cp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Xn(ms),Kr=v({},ms,{view:0,detail:0}),p_=Xn(Kr),xu,vu,Qr,fl=v({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(xu=t.screenX-Qr.screenX,vu=t.screenY-Qr.screenY):vu=xu=0,Qr=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),Rp=Xn(fl),m_=v({},fl,{dataTransfer:0}),g_=Xn(m_),x_=v({},Kr,{relatedTarget:0}),_u=Xn(x_),v_=v({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),__=Xn(v_),y_=v({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),S_=Xn(y_),M_=v({},ms,{data:0}),Np=Xn(M_),b_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=T_[t])?!!n[t]:!1}function yu(){return A_}var w_=v({},Kr,{key:function(t){if(t.key){var n=b_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C_=Xn(w_),R_=v({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Xn(R_),N_=v({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),D_=Xn(N_),U_=v({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),L_=Xn(U_),O_=v({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P_=Xn(O_),I_=v({},ms,{newState:0,oldState:0}),z_=Xn(I_),B_=[9,13,27,32],Su=ea&&"CompositionEvent"in window,Jr=null;ea&&"documentMode"in document&&(Jr=document.documentMode);var F_=ea&&"TextEvent"in window&&!Jr,Up=ea&&(!Su||Jr&&8<Jr&&11>=Jr),Lp=" ",Op=!1;function Pp(t,n){switch(t){case"keyup":return B_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function H_(t,n){switch(t){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Op=!0,Lp);case"textInput":return t=n.data,t===Lp&&Op?null:t;default:return null}}function G_(t,n){if(qs)return t==="compositionend"||!Su&&Pp(t,n)?(t=wp(),ol=gu=Da=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!V_[t.type]:n==="textarea"}function Bp(t,n,a,o){Ws?js?js.push(o):js=[o]:Ws=o,n=ec(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var $r=null,eo=null;function k_(t){yg(t,0)}function dl(t){var n=hs(t);if(sn(n))return t}function Fp(t,n){if(t==="change")return n}var Hp=!1;if(ea){var Mu;if(ea){var bu="oninput"in document;if(!bu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),bu=typeof Gp.oninput=="function"}Mu=bu}else Mu=!1;Hp=Mu&&(!document.documentMode||9<document.documentMode)}function Vp(){$r&&($r.detachEvent("onpropertychange",kp),eo=$r=null)}function kp(t){if(t.propertyName==="value"&&dl(eo)){var n=[];Bp(n,eo,t,hu(t)),Ap(k_,n)}}function X_(t,n,a){t==="focusin"?(Vp(),$r=n,eo=a,$r.attachEvent("onpropertychange",kp)):t==="focusout"&&Vp()}function W_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(eo)}function j_(t,n){if(t==="click")return dl(n)}function q_(t,n){if(t==="input"||t==="change")return dl(n)}function Y_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:Y_;function to(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bt.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,n){var a=Xp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function Eu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Z_=ea&&"documentMode"in document&&11>=document.documentMode,Ys=null,Tu=null,no=null,Au=!1;function Yp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Ys==null||Ys!==Qt(o)||(o=Ys,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=ec(Tu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ys)))}function gs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zs={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},wu={},Zp={};ea&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function xs(t){if(wu[t])return wu[t];if(!Zs[t])return t;var n=Zs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return wu[t]=n[a];return t}var Kp=xs("animationend"),Qp=xs("animationiteration"),Jp=xs("animationstart"),K_=xs("transitionrun"),Q_=xs("transitionstart"),J_=xs("transitioncancel"),$p=xs("transitionend"),em=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function wi(t,n){em.set(t,n),Q(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],Ks=0,Ru=0;function pl(){for(var t=Ks,n=Ru=Ks=0;n<t;){var a=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var f=mi[n];if(mi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&tm(a,u,f)}}function ml(t,n,a,o){mi[Ks++]=t,mi[Ks++]=n,mi[Ks++]=a,mi[Ks++]=o,Ru|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Nu(t,n,a,o){return ml(t,n,a,o),gl(t)}function vs(t,n){return ml(t,null,null,n),gl(t)}function tm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ge(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function gl(t){if(50<To)throw To=0,Hf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qs={};function $_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,n,a,o){return new $_(t,n,a,o)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=si(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Du(t)&&(_=1);else if(typeof t=="string")_=aS(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=si(31,a,n,u),t.elementType=O,t.lanes=f,t;case D:return _s(a.children,u,f,n);case S:_=8,u|=24;break;case y:return t=si(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case B:return t=si(13,a,n,u),t.elementType=B,t.lanes=f,t;case L:return t=si(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:_=10;break e;case U:_=9;break e;case N:_=11;break e;case z:_=14;break e;case A:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=si(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function _s(t,n,a,o){return t=si(7,t,o,n),t.lanes=a,t}function Uu(t,n,a){return t=si(6,t,null,n),t.lanes=a,t}function im(t){var n=si(18,null,null,0);return n.stateNode=t,n}function Lu(t,n,a){return n=si(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var am=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=am.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Dt(n)},am.set(t,n),n)}return{value:t,source:n,stack:Dt(n)}}var Js=[],$s=0,vl=null,io=0,xi=[],vi=0,Ua=null,Bi=1,Fi="";function na(t,n){Js[$s++]=io,Js[$s++]=vl,vl=t,io=n}function sm(t,n,a){xi[vi++]=Bi,xi[vi++]=Fi,xi[vi++]=Ua,Ua=t;var o=Bi;t=Fi;var u=32-Ge(o)-1;o&=~(1<<u),a+=1;var f=32-Ge(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Bi=1<<32-Ge(n)+u|a<<u|o,Fi=f+t}else Bi=1<<f|a<<u|o,Fi=t}function Ou(t){t.return!==null&&(na(t,1),sm(t,1,0))}function Pu(t){for(;t===vl;)vl=Js[--$s],Js[$s]=null,io=Js[--$s],Js[$s]=null;for(;t===Ua;)Ua=xi[--vi],xi[vi]=null,Fi=xi[--vi],xi[vi]=null,Bi=xi[--vi],xi[vi]=null}function rm(t,n){xi[vi++]=Bi,xi[vi++]=Fi,xi[vi++]=Ua,Bi=n.id,Fi=n.overflow,Ua=t}var Cn=null,$t=null,bt=!1,La=null,_i=!1,Iu=Error(s(519));function Oa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(gi(n,t)),Iu}function om(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[wn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)yt(wo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Ti(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Eg(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Oa(t,!0)}function lm(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function er(t){if(t!==Cn)return!1;if(!bt)return lm(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||td(t.type,t.memoizedProps)),a=!a),a&&$t&&Oa(t),lm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Lg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Lg(t)}else n===27?(n=$t,Ya(t.type)?(t=rd,rd=null,$t=t):$t=n):$t=Cn?Si(t.stateNode.nextSibling):null;return!0}function ys(){$t=Cn=null,bt=!1}function zu(){var t=La;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),La=null),t}function ao(t){La===null?La=[t]:La.push(t)}var Bu=M(null),Ss=null,ia=null;function Pa(t,n,a){le(Bu,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=Bu.current,F(Bu)}function Fu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Hu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var k=0;k<n.length;k++)if(R.context===n[k]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Fu(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Fu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function tr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ai(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===se.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&Hu(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ms(t){Ss=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return cm(Ss,t)}function yl(t,n){return Ss===null&&Ms(t),cm(t,n)}function cm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(s(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var ey=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ty=r.unstable_scheduleCallback,ny=r.unstable_NormalPriority,mn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new ey,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&ty(ny,function(){t.controller.abort()})}var ro=null,Vu=0,nr=0,ir=null;function iy(t,n){if(ro===null){var a=ro=[];Vu=0,nr=jf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(um,um),n}function um(){if(--Vu===0&&ro!==null){ir!==null&&(ir.status="fulfilled");var t=ro;ro=null,nr=0,ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ay(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=H.S;H.S=function(t,n){Y0=It(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&iy(t,n),fm!==null&&fm(t,n)};var bs=M(null);function ku(){var t=bs.current;return t!==null?t:Jt.pooledCache}function Sl(t,n){n===null?le(bs,bs.current):le(bs,n.pool)}function dm(){var t=ku();return t===null?null:{parent:mn._currentValue,pool:t}}var ar=Error(s(460)),Xu=Error(s(474)),Ml=Error(s(542)),bl={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t}throw Ts=n,ar}}function Es(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,ar):a}}var Ts=null;function mm(){if(Ts===null)throw Error(s(459));var t=Ts;return Ts=null,t}function gm(t){if(t===ar||t===Ml)throw Error(s(483))}var sr=null,oo=0;function El(t){var n=oo;return oo+=1,sr===null&&(sr=[]),pm(sr,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xm(t){function n($,j){if(t){var ie=$.deletions;ie===null?($.deletions=[j],$.flags|=16):ie.push(j)}}function a($,j){if(!t)return null;for(;j!==null;)n($,j),j=j.sibling;return null}function o($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=ta($,j),$.index=0,$.sibling=null,$}function f($,j,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<j?($.flags|=67108866,j):ie):($.flags|=67108866,j)):($.flags|=1048576,j)}function _($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,j,ie,be){return j===null||j.tag!==6?(j=Uu(ie,$.mode,be),j.return=$,j):(j=u(j,ie),j.return=$,j)}function k($,j,ie,be){var nt=ie.type;return nt===D?Se($,j,ie.props.children,be,ie.key):j!==null&&(j.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&Es(nt)===j.type)?(j=u(j,ie.props),lo(j,ie),j.return=$,j):(j=xl(ie.type,ie.key,ie.props,null,$.mode,be),lo(j,ie),j.return=$,j)}function ae($,j,ie,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Lu(ie,$.mode,be),j.return=$,j):(j=u(j,ie.children||[]),j.return=$,j)}function Se($,j,ie,be,nt){return j===null||j.tag!==7?(j=_s(ie,$.mode,be,nt),j.return=$,j):(j=u(j,ie),j.return=$,j)}function Ee($,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Uu(""+j,$.mode,ie),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return ie=xl(j.type,j.key,j.props,null,$.mode,ie),lo(ie,j),ie.return=$,ie;case w:return j=Lu(j,$.mode,ie),j.return=$,j;case A:return j=Es(j),Ee($,j,ie)}if(J(j)||q(j))return j=_s(j,$.mode,ie,null),j.return=$,j;if(typeof j.then=="function")return Ee($,El(j),ie);if(j.$$typeof===I)return Ee($,yl($,j),ie);Tl($,j)}return null}function fe($,j,ie,be){var nt=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return nt!==null?null:R($,j,""+ie,be);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case b:return ie.key===nt?k($,j,ie,be):null;case w:return ie.key===nt?ae($,j,ie,be):null;case A:return ie=Es(ie),fe($,j,ie,be)}if(J(ie)||q(ie))return nt!==null?null:Se($,j,ie,be,null);if(typeof ie.then=="function")return fe($,j,El(ie),be);if(ie.$$typeof===I)return fe($,j,yl($,ie),be);Tl($,ie)}return null}function he($,j,ie,be,nt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return $=$.get(ie)||null,R(j,$,""+be,nt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case b:return $=$.get(be.key===null?ie:be.key)||null,k(j,$,be,nt);case w:return $=$.get(be.key===null?ie:be.key)||null,ae(j,$,be,nt);case A:return be=Es(be),he($,j,ie,be,nt)}if(J(be)||q(be))return $=$.get(ie)||null,Se(j,$,be,nt,null);if(typeof be.then=="function")return he($,j,ie,El(be),nt);if(be.$$typeof===I)return he($,j,ie,yl(j,be),nt);Tl(j,be)}return null}function Ye($,j,ie,be){for(var nt=null,Ot=null,Ke=j,mt=j=0,Mt=null;Ke!==null&&mt<ie.length;mt++){Ke.index>mt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Pt=fe($,Ke,ie[mt],be);if(Pt===null){Ke===null&&(Ke=Mt);break}t&&Ke&&Pt.alternate===null&&n($,Ke),j=f(Pt,j,mt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt,Ke=Mt}if(mt===ie.length)return a($,Ke),bt&&na($,mt),nt;if(Ke===null){for(;mt<ie.length;mt++)Ke=Ee($,ie[mt],be),Ke!==null&&(j=f(Ke,j,mt),Ot===null?nt=Ke:Ot.sibling=Ke,Ot=Ke);return bt&&na($,mt),nt}for(Ke=o(Ke);mt<ie.length;mt++)Mt=he(Ke,$,mt,ie[mt],be),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?mt:Mt.key),j=f(Mt,j,mt),Ot===null?nt=Mt:Ot.sibling=Mt,Ot=Mt);return t&&Ke.forEach(function($a){return n($,$a)}),bt&&na($,mt),nt}function it($,j,ie,be){if(ie==null)throw Error(s(151));for(var nt=null,Ot=null,Ke=j,mt=j=0,Mt=null,Pt=ie.next();Ke!==null&&!Pt.done;mt++,Pt=ie.next()){Ke.index>mt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var $a=fe($,Ke,Pt.value,be);if($a===null){Ke===null&&(Ke=Mt);break}t&&Ke&&$a.alternate===null&&n($,Ke),j=f($a,j,mt),Ot===null?nt=$a:Ot.sibling=$a,Ot=$a,Ke=Mt}if(Pt.done)return a($,Ke),bt&&na($,mt),nt;if(Ke===null){for(;!Pt.done;mt++,Pt=ie.next())Pt=Ee($,Pt.value,be),Pt!==null&&(j=f(Pt,j,mt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return bt&&na($,mt),nt}for(Ke=o(Ke);!Pt.done;mt++,Pt=ie.next())Pt=he(Ke,$,mt,Pt.value,be),Pt!==null&&(t&&Pt.alternate!==null&&Ke.delete(Pt.key===null?mt:Pt.key),j=f(Pt,j,mt),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&Ke.forEach(function(mS){return n($,mS)}),bt&&na($,mt),nt}function Kt($,j,ie,be){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case b:e:{for(var nt=ie.key;j!==null;){if(j.key===nt){if(nt=ie.type,nt===D){if(j.tag===7){a($,j.sibling),be=u(j,ie.props.children),be.return=$,$=be;break e}}else if(j.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&Es(nt)===j.type){a($,j.sibling),be=u(j,ie.props),lo(be,ie),be.return=$,$=be;break e}a($,j);break}else n($,j);j=j.sibling}ie.type===D?(be=_s(ie.props.children,$.mode,be,ie.key),be.return=$,$=be):(be=xl(ie.type,ie.key,ie.props,null,$.mode,be),lo(be,ie),be.return=$,$=be)}return _($);case w:e:{for(nt=ie.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a($,j.sibling),be=u(j,ie.children||[]),be.return=$,$=be;break e}else{a($,j);break}else n($,j);j=j.sibling}be=Lu(ie,$.mode,be),be.return=$,$=be}return _($);case A:return ie=Es(ie),Kt($,j,ie,be)}if(J(ie))return Ye($,j,ie,be);if(q(ie)){if(nt=q(ie),typeof nt!="function")throw Error(s(150));return ie=nt.call(ie),it($,j,ie,be)}if(typeof ie.then=="function")return Kt($,j,El(ie),be);if(ie.$$typeof===I)return Kt($,j,yl($,ie),be);Tl($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,j!==null&&j.tag===6?(a($,j.sibling),be=u(j,ie),be.return=$,$=be):(a($,j),be=Uu(ie,$.mode,be),be.return=$,$=be),_($)):a($,j)}return function($,j,ie,be){try{oo=0;var nt=Kt($,j,ie,be);return sr=null,nt}catch(Ke){if(Ke===ar||Ke===Ml)throw Ke;var Ot=si(29,Ke,null,$.mode);return Ot.lanes=be,Ot.return=$,Ot}finally{}}}var As=xm(!0),vm=xm(!1),Ia=!1;function Wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(t),tm(t,null,a),n}return ml(t,o,n,a),gl(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ei(t,a)}}function qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Yu=!1;function uo(){if(Yu){var t=ir;if(t!==null)throw t}}function fo(t,n,a,o){Yu=!1;var u=t.updateQueue;Ia=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var k=R,ae=k.next;k.next=null,_===null?f=ae:_.next=ae,_=k;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,R=Se.lastBaseUpdate,R!==_&&(R===null?Se.firstBaseUpdate=ae:R.next=ae,Se.lastBaseUpdate=k))}if(f!==null){var Ee=u.baseState;_=0,Se=ae=k=null,R=f;do{var fe=R.lane&-536870913,he=fe!==R.lane;if(he?(St&fe)===fe:(o&fe)===fe){fe!==0&&fe===nr&&(Yu=!0),Se!==null&&(Se=Se.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ye=t,it=R;fe=n;var Kt=a;switch(it.tag){case 1:if(Ye=it.payload,typeof Ye=="function"){Ee=Ye.call(Kt,Ee,fe);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=it.payload,fe=typeof Ye=="function"?Ye.call(Kt,Ee,fe):Ye,fe==null)break e;Ee=v({},Ee,fe);break e;case 2:Ia=!0}}fe=R.callback,fe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[fe]:he.push(fe))}else he={lane:fe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Se===null?(ae=Se=he,k=Ee):Se=Se.next=he,_|=fe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;he=R,R=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);Se===null&&(k=Ee),u.baseState=k,u.firstBaseUpdate=ae,u.lastBaseUpdate=Se,f===null&&(u.shared.lanes=0),ka|=_,t.lanes=_,t.memoizedState=Ee}}function _m(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ym(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_m(a[t],n)}var rr=M(null),Al=M(0);function Sm(t,n){t=ha,le(Al,t),le(rr,n),ha=t|n.baseLanes}function Zu(){le(Al,ha),le(rr,rr.current)}function Ku(){ha=Al.current,F(rr),F(Al)}var ri=M(null),yi=null;function Fa(t){var n=t.alternate;le(fn,fn.current&1),le(ri,t),yi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(yi=t)}function Qu(t){le(fn,fn.current),le(ri,t),yi===null&&(yi=t)}function Mm(t){t.tag===22?(le(fn,fn.current),le(ri,t),yi===null&&(yi=t)):Ha()}function Ha(){le(fn,fn.current),le(ri,ri.current)}function oi(t){F(ri),yi===t&&(yi=null),F(fn)}var fn=M(0);function wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ad(a)||sd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,pt=null,Yt=null,gn=null,Cl=!1,or=!1,ws=!1,Rl=0,ho=0,lr=null,sy=0;function cn(){throw Error(s(321))}function Ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function $u(t,n,a,o,u,f){return sa=f,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?s0:mf,ws=!1,f=a(o,u),ws=!1,or&&(f=Em(n,a,o,u)),bm(t),f}function bm(t){H.H=go;var n=Yt!==null&&Yt.next!==null;if(sa=0,gn=Yt=pt=null,Cl=!1,ho=0,lr=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&_l(t)&&(xn=!0))}function Em(t,n,a,o){pt=t;var u=0;do{if(or&&(lr=null),ho=0,or=!1,25<=u)throw Error(s(301));if(u+=1,gn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=r0,f=n(a,o)}while(or);return f}function ry(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(pt.flags|=1024),n}function ef(){var t=Rl!==0;return Rl=0,t}function tf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function nf(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}sa=0,gn=Yt=pt=null,or=!1,ho=Rl=0,lr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?pt.memoizedState=gn=t:gn=gn.next=t,gn}function dn(){if(Yt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=gn===null?pt.memoizedState:gn.next;if(n!==null)gn=n,Yt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},gn===null?pt.memoizedState=gn=t:gn=gn.next=t}return gn}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,lr===null&&(lr=[]),t=pm(lr,t,n),n=pt,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?s0:mf),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===I)return Rn(t)}throw Error(s(438,String(t)))}function af(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=W;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=dn();return sf(n,Yt,t)}function sf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,k=null,ae=n,Se=!1;do{var Ee=ae.lane&-536870913;if(Ee!==ae.lane?(St&Ee)===Ee:(sa&Ee)===Ee){var fe=ae.revertLane;if(fe===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ee===nr&&(Se=!0);else if((sa&fe)===fe){ae=ae.next,fe===nr&&(Se=!0);continue}else Ee={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},k===null?(R=k=Ee,_=f):k=k.next=Ee,pt.lanes|=fe,ka|=fe;Ee=ae.action,ws&&a(f,Ee),f=ae.hasEagerState?ae.eagerState:a(f,Ee)}else fe={lane:Ee,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},k===null?(R=k=fe,_=f):k=k.next=fe,pt.lanes|=Ee,ka|=Ee;ae=ae.next}while(ae!==null&&ae!==n);if(k===null?_=f:k.next=R,!ai(f,t.memoizedState)&&(xn=!0,Se&&(a=ir,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=k,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function rf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ai(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Tm(t,n,a){var o=pt,u=dn(),f=bt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ai((Yt||u).memoizedState,a);if(_&&(u.memoizedState=a,xn=!0),u=u.queue,cf(Cm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),Jt===null)throw Error(s(349));f||(sa&127)!==0||Am(o,n,a)}return a}function Am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Nl(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wm(t,n,a,o){n.value=a,n.getSnapshot=o,Rm(n)&&Nm(t)}function Cm(t,n,a){return a(function(){Rm(n)&&Nm(t)})}function Rm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function Nm(t){var n=vs(t,2);n!==null&&Zn(n,t,2)}function of(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),ws){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function Dm(t,n,a,o){return t.baseState=a,sf(t,Yt,typeof o=="function"?o:ra)}function oy(t,n,a,o,u){if(Pl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};H.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Um(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=H.T,_={};H.T=_;try{var R=a(u,o),k=H.S;k!==null&&k(_,R),Lm(t,n,R)}catch(ae){lf(t,n,ae)}finally{f!==null&&_.types!==null&&(f.types=_.types),H.T=f}}else try{f=a(u,o),Lm(t,n,f)}catch(ae){lf(t,n,ae)}}function Lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(t,n,o)},function(o){return lf(t,n,o)}):Om(t,n,a)}function Om(t,n,a){n.status="fulfilled",n.value=a,Pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Um(t,a)))}function lf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}t.action=null}function Pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function zm(t,n){if(bt){var a=Jt.formState;if(a!==null){e:{var o=pt;if(bt){if($t){t:{for(var u=$t,f=_i;u.nodeType!==8;){if(!f){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=Si(u.nextSibling),o=u.data==="F!";break e}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=n0.bind(null,pt,o),o.dispatch=a,o=of(!1),f=pf.bind(null,pt,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=oy.bind(null,pt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Bm(t){var n=dn();return Fm(n,Yt,t)}function Fm(t,n,a){if(n=sf(t,n,Im)[0],t=Ul(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(_){throw _===ar?Ml:_}else o=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,cr(9,{destroy:void 0},ly.bind(null,u,a),null)),[o,f,t]}function ly(t,n){t.action=n}function Hm(t){var n=dn(),a=Yt;if(a!==null)return Fm(n,a,t);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Nl(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Gm(){return dn().memoizedState}function Ll(t,n,a,o){var u=Gn();pt.flags|=t,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ol(t,n,a,o){var u=dn();o=o===void 0?null:o;var f=u.memoizedState.inst;Yt!==null&&o!==null&&Ju(o,Yt.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(pt.flags|=t,u.memoizedState=cr(1|n,f,a,o))}function Vm(t,n){Ll(8390656,8,t,n)}function cf(t,n){Ol(2048,8,t,n)}function cy(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Nl(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function km(t){var n=dn().memoizedState;return cy({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xm(t,n){return Ol(4,2,t,n)}function Wm(t,n){return Ol(4,4,t,n)}function jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qm(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,jm.bind(null,n,t),a)}function uf(){}function Ym(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Zm(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=t(),ws){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o}function ff(t,n,a){return a===void 0||(sa&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=K0(),pt.lanes|=t,ka|=t,a)}function Km(t,n,a,o){return ai(a,n)?a:rr.current!==null?(t=ff(t,a,o),ai(t,n)||(xn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(St&261930)===0?(xn=!0,t.memoizedState=a):(t=K0(),pt.lanes|=t,ka|=t,n)}function Qm(t,n,a,o,u){var f=V.p;V.p=f!==0&&8>f?f:8;var _=H.T,R={};H.T=R,pf(t,!1,n,a);try{var k=u(),ae=H.S;if(ae!==null&&ae(R,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Se=ay(k,o);mo(t,n,Se,ui(t))}else mo(t,n,o,ui(t))}catch(Ee){mo(t,n,{then:function(){},status:"rejected",reason:Ee},ui())}finally{V.p=f,_!==null&&R.types!==null&&(_.types=R.types),H.T=_}}function uy(){}function df(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Jm(t).queue;Qm(t,u,n,ne,a===null?uy:function(){return $m(t),a(o)})}function Jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $m(t){var n=Jm(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},ui())}function hf(){return Rn(Uo)}function e0(){return dn().memoizedState}function t0(){return dn().memoizedState}function fy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=za(a);var o=Ba(n,t,a);o!==null&&(Zn(o,n,a),co(o,n,a)),n={cache:Gu()},t.payload=n;return}n=n.return}}function dy(t,n,a){var o=ui();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?i0(n,a):(a=Nu(t,n,a,o),a!==null&&(Zn(a,t,o),a0(a,n,o)))}function n0(t,n,a){var o=ui();mo(t,n,a,o)}function mo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))i0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ai(R,_))return ml(t,n,u,0),Jt===null&&pl(),!1}catch{}finally{}if(a=Nu(t,n,u,o),a!==null)return Zn(a,t,o),a0(a,n,o),!0}return!1}function pf(t,n,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(s(479))}else n=Nu(t,a,o,2),n!==null&&Zn(n,t,2)}function Pl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function i0(t,n){or=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function a0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ei(t,a)}}var go={readContext:Rn,use:Dl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};go.useEffectEvent=cn;var s0={readContext:Rn,use:Dl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(ws){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(ws){Ne(!0);try{a(n)}finally{Ne(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=dy.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=of(t);var n=t.queue,a=n0.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(t,n){var a=Gn();return ff(a,t,n)},useTransition:function(){var t=of(!1);return t=Qm.bind(null,pt,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Gn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Jt===null)throw Error(s(349));(St&127)!==0||Am(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Vm(Cm.bind(null,o,f,t),[t]),o.flags|=2048,cr(9,{destroy:void 0},wm.bind(null,o,f,a,n),null),a},useId:function(){var t=Gn(),n=Jt.identifierPrefix;if(bt){var a=Fi,o=Bi;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:hf,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:af,useCacheRefresh:function(){return Gn().memoizedState=fy.bind(null,pt)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:Rn,use:Dl,useCallback:Ym,useContext:Rn,useEffect:cf,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:Ul,useRef:Gm,useState:function(){return Ul(ra)},useDebugValue:uf,useDeferredValue:function(t,n){var a=dn();return Km(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Ul(ra)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:Tm,useId:e0,useHostTransitionStatus:hf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,n){var a=dn();return Dm(a,Yt,t,n)},useMemoCache:af,useCacheRefresh:t0};mf.useEffectEvent=km;var r0={readContext:Rn,use:Dl,useCallback:Ym,useContext:Rn,useEffect:cf,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:rf,useRef:Gm,useState:function(){return rf(ra)},useDebugValue:uf,useDeferredValue:function(t,n){var a=dn();return Yt===null?ff(a,t,n):Km(a,Yt.memoizedState,t,n)},useTransition:function(){var t=rf(ra)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:Tm,useId:e0,useHostTransitionStatus:hf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=dn();return Yt!==null?Dm(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:t0};r0.useEffectEvent=km;function gf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ui(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Zn(n,t,o),co(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ui(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Zn(n,t,o),co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(Zn(n,t,a),co(n,t,a))}};function o0(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,f):!0}function l0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Cs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function c0(t){hl(t)}function u0(t){console.error(t)}function f0(t){hl(t)}function Il(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function d0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(t,n)},a}function h0(t){return t=za(t),t.tag=3,t}function p0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){d0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){d0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function hy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&tr(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?Yl():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(t,o,u)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(t,o,u)),!1}throw Error(s(435,a.tag))}return kf(t,o,u),Yl(),!1}if(bt)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Iu&&(t=Error(s(422),{cause:o}),ao(gi(t,a)))):(o!==Iu&&(n=Error(s(423),{cause:o}),ao(gi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,a),u=vf(t.stateNode,o,u),qu(t,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:o});if(f=gi(f,a),Eo===null?Eo=[f]:Eo.push(f),un!==4&&(un=2),n===null)return!0;o=gi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=vf(a.stateNode,o,t),qu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xa===null||!Xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=h0(u),p0(u,t,a,o),qu(a,u),!1}a=a.return}while(a!==null);return!1}var _f=Error(s(461)),xn=!1;function Nn(t,n,a,o){n.child=t===null?vm(n,null,a,o):As(n,t.child,a,o)}function m0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ms(n),o=$u(t,n,a,_,f,u),R=ef(),t!==null&&!xn?(tf(t,n,u),oa(t,n,u)):(bt&&R&&Ou(n),n.flags|=1,Nn(t,n,o,u),n.child)}function g0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,x0(t,n,f,o,u)):(t=xl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!wf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(_,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(f,o),t.ref=n.ref,t.return=n,n.child=t}function x0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(to(f,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=f,wf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return yf(t,n,a,o,u)}function v0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return _0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?Sm(n,f):Zu(),Mm(n);else return o=n.lanes=536870912,_0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sl(n,f.cachePool),Sm(n,f),Ha(),n.memoizedState=null):(t!==null&&Sl(n,null),Zu(),Ha());return Nn(t,n,u,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _0(t,n,a,o,u){var f=ku();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sl(n,null),Zu(),Mm(n),t!==null&&tr(t,n,o,!0),n.childLanes=u,null}function zl(t,n){return n=Fl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function y0(t,n,a){return As(n,t.child,null,a),t=zl(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function py(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=zl(n,o),n.lanes=536870912,xo(null,t);if(Qu(n),(t=$t)?(t=Ug(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Cn=n,$t=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return zl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=y0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||tr(t,n,a,!1),u=(a&t.childLanes)!==0,xn||u){if(o=Jt,o!==null&&(_=ti(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,vs(t,_),Zn(o,t,_),_f;Yl(),n=y0(t,n,a)}else t=f.treeContext,$t=Si(_.nextSibling),Cn=n,bt=!0,La=null,_i=!1,t!==null&&rm(n,t),n=zl(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function yf(t,n,a,o,u){return Ms(n),a=$u(t,n,a,o,void 0,u),o=ef(),t!==null&&!xn?(tf(t,n,u),oa(t,n,u)):(bt&&o&&Ou(n),n.flags|=1,Nn(t,n,a,u),n.child)}function S0(t,n,a,o,u,f){return Ms(n),n.updateQueue=null,a=Em(n,o,a,u),bm(t),o=ef(),t!==null&&!xn?(tf(t,n,f),oa(t,n,f)):(bt&&o&&Ou(n),n.flags|=1,Nn(t,n,a,f),n.child)}function M0(t,n,a,o,u){if(Ms(n),n.stateNode===null){var f=Qs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Rn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Rn(_):Qs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(gf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&xf.enqueueReplaceState(f,f.state,null),fo(n,o,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,k=Cs(a,R);f.props=k;var ae=f.context,Se=a.contextType;_=Qs,typeof Se=="object"&&Se!==null&&(_=Rn(Se));var Ee=a.getDerivedStateFromProps;Se=typeof Ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Se||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ae!==_)&&l0(n,f,o,_),Ia=!1;var fe=n.memoizedState;f.state=fe,fo(n,o,f,u),uo(),ae=n.memoizedState,R||fe!==ae||Ia?(typeof Ee=="function"&&(gf(n,a,Ee,o),ae=n.memoizedState),(k=Ia||o0(n,a,k,o,fe,ae,_))?(Se||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=_,o=k):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ju(t,n),_=n.memoizedProps,Se=Cs(a,_),f.props=Se,Ee=n.pendingProps,fe=f.context,ae=a.contextType,k=Qs,typeof ae=="object"&&ae!==null&&(k=Rn(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ee||fe!==k)&&l0(n,f,o,k),Ia=!1,fe=n.memoizedState,f.state=fe,fo(n,o,f,u),uo();var he=n.memoizedState;_!==Ee||fe!==he||Ia||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof R=="function"&&(gf(n,a,R,o),he=n.memoizedState),(Se=Ia||o0(n,a,Se,o,fe,he,k)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,he,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,he,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),f.props=o,f.state=he,f.context=k,o=Se):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=As(n,t.child,null,u),n.child=As(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=oa(t,n,u),t}function b0(t,n,a,o){return ys(),n.flags|=256,Nn(t,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:dm()}}function bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function E0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Fa(n):Ha(),(t=$t)?(t=Ug(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Cn=n,$t=null)):t=null,t===null)throw Oa(n);return sd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ha(),u=n.mode,R=Fl({mode:"hidden",children:R},u),o=_s(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Mf(a),o.childLanes=bf(t,_,a),n.memoizedState=Sf,xo(null,o)):(Fa(n),Ef(n,R))}var k=t.memoizedState;if(k!==null&&(R=k.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=Tf(t,n,a)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,n=null):(Ha(),R=o.fallback,u=n.mode,o=Fl({mode:"visible",children:o.children},u),R=_s(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,As(n,t.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=bf(t,_,a),n.memoizedState=Sf,n=xo(null,o));else if(Fa(n),sd(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ae=_.dgst;_=ae,o=Error(s(419)),o.stack="",o.digest=_,ao({value:o,source:null,stack:null}),n=Tf(t,n,a)}else if(xn||tr(t,n,a,!1),_=(a&t.childLanes)!==0,xn||_){if(_=Jt,_!==null&&(o=ti(_,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,vs(t,o),Zn(_,t,o),_f;ad(R)||Yl(),n=Tf(t,n,a)}else ad(R)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,$t=Si(R.nextSibling),Cn=n,bt=!0,La=null,_i=!1,t!==null&&rm(n,t),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Ha(),R=o.fallback,u=n.mode,k=t.child,ae=k.sibling,o=ta(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ae!==null?R=ta(ae,R):(R=_s(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,xo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Mf(a):(u=R.cachePool,u!==null?(k=mn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=dm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=bf(t,_,a),n.memoizedState=Sf,xo(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Ef(t,n){return n=Fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fl(t,n){return t=si(22,t,null,n),t.lanes=0,t}function Tf(t,n,a){return As(n,t.child,null,a),t=Ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function T0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Fu(t.return,n,a)}function Af(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function A0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=fn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,le(fn,_),Nn(t,n,o,a),o=bt?io:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,a,n);else if(t.tag===19)T0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&wl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&wl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Af(n,!0,a,null,f,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(tr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function my(t,n,a){switch(n.tag){case 3:de(n,n.stateNode.containerInfo),Pa(n,mn,t.memoizedState.cache),ys();break;case 27:case 5:He(n);break;case 4:de(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?E0(t,n,a):(Fa(n),t=oa(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(tr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return A0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),le(fn,fn.current),o)break;return null;case 22:return n.lanes=0,v0(t,n,a,n.pendingProps);case 24:Pa(n,mn,t.memoizedState.cache)}return oa(t,n,a)}function w0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!wf(t,a)&&(n.flags&128)===0)return xn=!1,my(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,bt&&(n.flags&1048576)!==0&&sm(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Es(n.elementType),n.type=t,typeof t=="function")Du(t)?(o=Cs(t,o),n.tag=1,n=M0(null,n,t,o,a)):(n.tag=0,n=yf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=m0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=g0(null,n,t,o,a);break e}}throw n=ve(t)||t,Error(s(306,n,""))}}return n;case 0:return yf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cs(o,n.pendingProps),M0(t,n,o,u,a);case 3:e:{if(de(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ju(t,n),fo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Pa(n,mn,o),o!==f.cache&&Hu(n,[mn],a,!0),uo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=b0(t,n,o,a);break e}else if(o!==u){u=gi(Error(s(424)),n),ao(u),n=b0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Si(t.firstChild),Cn=n,bt=!0,La=null,_i=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=oa(t,n,a);break e}Nn(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=tc(Z.current).createElement(a),o[hn]=n,o[wn]=t,Dn(o,a,t),pn(o),n.stateNode=o):n.memoizedState=Bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&bt&&(o=n.stateNode=Pg(n.type,n.pendingProps,Z.current),Cn=n,_i=!0,u=$t,Ya(n.type)?(rd=u,$t=Si(o.firstChild)):$t=u),Nn(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=$t)&&(o=Wy(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Cn=n,$t=Si(o.firstChild),_i=!1,u=!0):u=!1),u||Oa(n)),He(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,td(u,f)?o=null:_!==null&&td(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(t,n,ry,null,null,a),Uo._currentValue=u),Bl(t,n),Nn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=$t)&&(a=jy(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,$t=null,t=!0):t=!1),t||Oa(n)),null;case 13:return E0(t,n,a);case 4:return de(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=As(n,null,o,a):Nn(t,n,o,a),n.child;case 11:return m0(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),Nn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=Rn(u),o=o(u),n.flags|=1,Nn(t,n,o,a),n.child;case 14:return g0(t,n,n.type,n.pendingProps,a);case 15:return x0(t,n,n.type,n.pendingProps,a);case 19:return A0(t,n,a);case 31:return py(t,n,a);case 22:return v0(t,n,a,n.pendingProps);case 24:return Ms(n),o=Rn(mn),t===null?(u=ku(),u===null&&(u=Jt,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Wu(n),Pa(n,mn,u)):((t.lanes&a)!==0&&(ju(t,n),fo(n,null,null,a),uo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,mn,o)):(o=f.cache,Pa(n,mn,o),o!==u.cache&&Hu(n,[mn],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(t){t.flags|=4}function Cf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(eg())t.flags|=8192;else throw Ts=bl,Xu}else t.flags&=-16777217}function C0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kg(n))if(eg())t.flags|=8192;else throw Ts=bl,Xu}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,hr|=n)}function vo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function gy(t,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(mn),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(er(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(la(n),f!==null?(en(n),C0(n,f)):(en(n),Cf(n,u,null,o,a))):f?f!==t.memoizedState?(la(n),en(n),C0(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),en(n),Cf(n,u,t,o,a)),null;case 27:if(Le(n),a=Z.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=_e.current,er(n)?om(n):(t=Pg(u,o,a),n.stateNode=t,la(n))}return en(n),null;case 5:if(Le(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(f=_e.current,er(n))om(n);else{var _=tc(Z.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[hn]=n,f[wn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return en(n),Cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Z.current,er(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Eg(t.nodeValue,a)),t||Oa(n,!0)}else t=tc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=er(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[hn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=er(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),en(n),null);case 4:return we(),t===null&&Kf(n.stateNode.containerInfo),en(n),null;case 10:return aa(n.type),en(n),null;case 19:if(F(fn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)vo(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=wl(t),f!==null){for(n.flags|=128,vo(o,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return le(fn,fn.current&1|2),bt&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&It()>Wl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(t=wl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return en(n),null}else 2*It()-o.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=It(),t.sibling=null,a=fn.current,le(fn,u?a&1|2:a&1),bt&&na(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return oi(n),Ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&F(bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(mn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function xy(t,n){switch(Pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(mn),we(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return F(fn),null;case 4:return we(),null;case 10:return aa(n.type),null;case 22:case 23:return oi(n),Ku(),t!==null&&F(bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(mn),null;case 25:return null;default:return null}}function R0(t,n){switch(Pu(n),n.tag){case 3:aa(mn),we();break;case 26:case 27:case 5:Le(n);break;case 4:we();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:F(fn);break;case 10:aa(n.type);break;case 22:case 23:oi(n),Ku(),t!==null&&F(bs);break;case 24:aa(mn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var k=a,ae=R;try{ae()}catch(Se){Wt(u,k,Se)}}}o=o.next}while(o!==f)}}catch(Se){Wt(n,n.return,Se)}}function N0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ym(n,a)}catch(o){Wt(t,t.return,o)}}}function D0(t,n,a){a.props=Cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function Hi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function U0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function Rf(t,n,a){try{var o=t.stateNode;Fy(o,t.type,a,n),o[wn]=n}catch(u){Wt(t,t.return,u)}}function L0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Df(t,n,a),t=t.sibling;t!==null;)Df(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function O0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[hn]=t,n[wn]=a}catch(f){Wt(t,t.return,f)}}var ca=!1,vn=!1,Uf=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function vy(t,n){if(t=t.containerInfo,$f=lc,t=qp(t),Eu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,k=-1,ae=0,Se=0,Ee=t,fe=null;t:for(;;){for(var he;Ee!==a||u!==0&&Ee.nodeType!==3||(R=_+u),Ee!==f||o!==0&&Ee.nodeType!==3||(k=_+o),Ee.nodeType===3&&(_+=Ee.nodeValue.length),(he=Ee.firstChild)!==null;)fe=Ee,Ee=he;for(;;){if(Ee===t)break t;if(fe===a&&++ae===u&&(R=_),fe===f&&++Se===o&&(k=_),(he=Ee.nextSibling)!==null)break;Ee=fe,fe=Ee.parentNode}Ee=he}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ed={focusedElem:t,selectionRange:a},lc=!1,Tn=n;Tn!==null;)if(n=Tn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Tn=t;else for(;Tn!==null;){switch(n=Tn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ye=Cs(a.type,u);t=o.getSnapshotBeforeUpdate(Ye,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Wt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)id(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Tn=t;break}Tn=n.return}}function I0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&_o(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Wt(a,a.return,_)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Wt(a,a.return,_)}}o&64&&N0(a),o&512&&yo(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(t,n)}catch(_){Wt(a,a.return,_)}}break;case 27:n===null&&o&4&&O0(a);case 26:case 5:fa(t,a),n===null&&o&4&&U0(a),o&512&&yo(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&F0(t,a);break;case 13:fa(t,a),o&4&&H0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wy.bind(null,a),qy(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||vn,u=ca;var f=vn;ca=o,(vn=n)&&!f?da(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,vn=f}break;case 30:break;default:fa(t,a)}}function z0(t){var n=t.alternate;n!==null&&(t.alternate=null,z0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ca(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Wn=!1;function ua(t,n,a){for(a=a.child;a!==null;)B0(t,n,a),a=a.sibling}function B0(t,n,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:vn||Hi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||Hi(a,n);var o=on,u=Wn;Ya(a.type)&&(on=a.stateNode,Wn=!1),ua(t,n,a),Ro(a.stateNode),on=o,Wn=u;break;case 5:vn||Hi(a,n);case 6:if(o=on,u=Wn,on=null,ua(t,n,a),on=o,Wn=u,on!==null)if(Wn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:on!==null&&(Wn?(t=on,Ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Sr(t)):Ng(on,a.stateNode));break;case 4:o=on,u=Wn,on=a.stateNode.containerInfo,Wn=!0,ua(t,n,a),on=o,Wn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),vn||Ga(4,a,n),ua(t,n,a);break;case 1:vn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&D0(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ua(t,n,a),vn=o;break;default:ua(t,n,a)}}function F0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Sr(t)}catch(a){Wt(n,n.return,a)}}}function H0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Sr(t)}catch(a){Wt(n,n.return,a)}}function _y(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new P0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new P0),n;default:throw Error(s(435,t.tag))}}function Vl(t,n){var a=_y(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Cy.bind(null,t,o);o.then(u,u)}})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Ya(R.type)){on=R.stateNode,Wn=!1;break e}break;case 5:on=R.stateNode,Wn=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,Wn=!0;break e}R=R.return}if(on===null)throw Error(s(160));B0(f,_,u),on=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)G0(n,t),n=n.sibling}var Ci=null;function G0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),qn(t),o&4&&(Ga(3,t,t.return),_o(3,t),Ga(5,t,t.return));break;case 1:jn(n,t),qn(t),o&512&&(vn||a===null||Hi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(jn(n,t),qn(t),o&512&&(vn||a===null||Hi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wa]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[hn]=t,pn(f),o=f;break e;case"link":var _=Gg("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Gg("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[hn]=t,pn(f),o=f}t.stateNode=o}else Vg(u,t.type,t.stateNode);else t.stateNode=Hg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Vg(u,t.type,t.stateNode):Hg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),qn(t),o&512&&(vn||a===null||Hi(a,a.return)),a!==null&&o&4&&Rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),qn(t),o&512&&(vn||a===null||Hi(a,a.return)),t.flags&32){u=t.stateNode;try{ii(u,"")}catch(Ye){Wt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Rf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(jn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ye){Wt(t,t.return,Ye)}}break;case 3:if(ac=null,u=Ci,Ci=nc(n.containerInfo),jn(n,t),Ci=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(Ye){Wt(t,t.return,Ye)}Uf&&(Uf=!1,V0(t));break;case 4:o=Ci,Ci=nc(t.stateNode.containerInfo),jn(n,t),qn(t),Ci=o;break;case 12:jn(n,t),qn(t);break;case 31:jn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 13:jn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=It()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ae=ca,Se=vn;if(ca=ae||u,vn=Se||k,jn(n,t),vn=Se,ca=ae,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ca||vn||Rs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(f=k.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=k.stateNode;var Ee=k.memoizedProps.style,fe=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Ye){Wt(k,k.return,Ye)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Ye){Wt(k,k.return,Ye)}}}else if(n.tag===18){if(a===null){k=n;try{var he=k.stateNode;u?Dg(he,!0):Dg(k.stateNode,!1)}catch(Ye){Wt(k,k.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vl(t,a))));break;case 19:jn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 30:break;case 21:break;default:jn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(L0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Nf(t);Gl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ii(_,""),a.flags&=-33);var R=Nf(t);Gl(t,R,_);break;case 3:case 4:var k=a.stateNode.containerInfo,ae=Nf(t);Df(t,ae,k);break;default:throw Error(s(161))}}catch(Se){Wt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function V0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;V0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(t,n.alternate,n),n=n.sibling}function Rs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Rs(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&D0(n,n.return,a),Rs(n);break;case 27:Ro(n.stateNode);case 26:case 5:Hi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),_o(4,f);break;case 1:if(da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Wt(o,o.return,ae)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)_m(k[u],R)}catch(ae){Wt(o,o.return,ae)}}a&&_&64&&N0(f),yo(f,f.return);break;case 27:O0(f);case 26:case 5:da(u,f,a),a&&o===null&&_&4&&U0(f),yo(f,f.return);break;case 12:da(u,f,a);break;case 31:da(u,f,a),a&&_&4&&F0(u,f);break;case 13:da(u,f,a),a&&_&4&&H0(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),yo(f,f.return);break;case 30:break;default:da(u,f,a)}n=n.sibling}}function Lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)k0(t,n,a,o),n=n.sibling}function k0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Ri(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Wt(n,n.return,k)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,o):So(t,n):f._visibility&2?Ri(t,n,a,o):(f._visibility|=2,ur(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(_,n);break;case 24:Ri(t,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ri(t,n,a,o)}}function ur(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,k=o,ae=_.flags;switch(_.tag){case 0:case 11:case 15:ur(f,_,R,k,u),_o(8,_);break;case 23:break;case 22:var Se=_.stateNode;_.memoizedState!==null?Se._visibility&2?ur(f,_,R,k,u):So(f,_):(Se._visibility|=2,ur(f,_,R,k,u)),u&&ae&2048&&Lf(_.alternate,_);break;case 24:ur(f,_,R,k,u),u&&ae&2048&&Of(_.alternate,_);break;default:ur(f,_,R,k,u)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&Lf(o.alternate,o);break;case 24:So(a,o),u&2048&&Of(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function fr(t,n,a){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)X0(t,n,a),t=t.sibling}function X0(t,n,a){switch(t.tag){case 26:fr(t,n,a),t.flags&Mo&&t.memoizedState!==null&&sS(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:fr(t,n,a);break;case 3:case 4:var o=Ci;Ci=nc(t.stateNode.containerInfo),fr(t,n,a),Ci=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,fr(t,n,a),Mo=o):fr(t,n,a));break;default:fr(t,n,a)}}function W0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,q0(o,t)}W0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)j0(t),t=t.sibling}function j0(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kl(t)):bo(t);break;default:bo(t)}}function kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,q0(o,t)}W0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}t=t.sibling}}function q0(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else e:for(a=t;Tn!==null;){o=Tn;var u=o.sibling,f=o.return;if(z0(o),o===a){Tn=null;break e}if(u!==null){u.return=f,Tn=u;break e}Tn=f}}}var yy={getCacheForType:function(t){var n=Rn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(mn).controller.signal}},Sy=typeof WeakMap=="function"?WeakMap:Map,zt=0,Jt=null,_t=null,St=0,Xt=0,li=null,Va=!1,dr=!1,Pf=!1,ha=0,un=0,ka=0,Ns=0,If=0,ci=0,hr=0,Eo=null,Yn=null,zf=!1,Xl=0,Y0=0,Wl=1/0,jl=null,Xa=null,Sn=0,Wa=null,pr=null,pa=0,Bf=0,Ff=null,Z0=null,To=0,Hf=null;function ui(){return(zt&2)!==0&&St!==0?St&-St:H.T!==null?jf():qr()}function K0(){if(ci===0)if((St&536870912)===0||bt){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),ci=t}else ci=536870912;return t=ri.current,t!==null&&(t.flags|=32),ci}function Zn(t,n,a){(t===Jt&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(mr(t,0),ja(t,St,ci,!1)),We(t,a),((zt&2)===0||t!==Jt)&&(t===Jt&&((zt&2)===0&&(Ns|=a),un===4&&ja(t,St,ci,!1)),Gi(t))}function Q0(t,n,a){if((zt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=o?Ey(t,n):Vf(t,n,!0),f=o;do{if(u===0){dr&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!My(a)){u=Vf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Eo;var k=R.current.memoizedState.isDehydrated;if(k&&(mr(R,_).flags|=256),_=Vf(R,_,!1),_!==2){if(Pf&&!k){R.errorRecoveryDisabledLanes|=f,Ns|=f,u=4;break e}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){mr(t,0),ja(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,ci,!Va);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xl+300-It(),10<u)){if(ja(o,n,ci,!Va),Me(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=Cg(J0.bind(null,o,a,Yn,jl,zf,n,ci,Ns,hr,Va,f,"Throttled",-0,0),u);break e}J0(o,a,Yn,jl,zf,n,ci,Ns,hr,Va,f,null,-0,0)}}break}while(!0);Gi(t)}function J0(t,n,a,o,u,f,_,R,k,ae,Se,Ee,fe,he){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},X0(n,f,Ee);var Ye=(f&62914560)===f?Xl-It():(f&4194048)===f?Y0-It():0;if(Ye=rS(Ee,Ye),Ye!==null){pa=f,t.cancelPendingCommit=Ye(rg.bind(null,t,n,f,a,o,u,_,R,k,Se,Ee,null,fe,he)),ja(t,f,_,!ae);return}}rg(t,n,f,a,o,u,_,R,k)}function My(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ai(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~If,n&=~Ns,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ge(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Ht(t,a,n)}function ql(){return(zt&6)===0?(Ao(0),!1):!0}function Gf(){if(_t!==null){if(Xt===0)var t=_t.return;else t=_t,ia=Ss=null,nf(t),sr=null,oo=0,t=_t;for(;t!==null;)R0(t.alternate,t),t=t.return;_t=null}}function mr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Vy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,Gf(),Jt=t,_t=a=ta(t.current,null),St=n,Xt=0,li=null,Va=!1,dr=De(t,n),Pf=!1,hr=ci=If=Ns=ka=un=0,Yn=Eo=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ge(o),f=1<<u;n|=t[u],o&=~f}return ha=n,pl(),a}function $0(t,n){pt=null,H.H=go,n===ar||n===Ml?(n=mm(),Xt=3):n===Xu?(n=mm(),Xt=4):Xt=n===_f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,_t===null&&(un=1,Il(t,gi(n,t.current)))}function eg(){var t=ri.current;return t===null?!0:(St&4194048)===St?yi===null:(St&62914560)===St||(St&536870912)!==0?t===yi:!1}function tg(){var t=H.H;return H.H=go,t===null?go:t}function ng(){var t=H.A;return H.A=yy,t}function Yl(){un=4,Va||(St&4194048)!==St&&ri.current!==null||(dr=!0),(ka&134217727)===0&&(Ns&134217727)===0||Jt===null||ja(Jt,St,ci,!1)}function Vf(t,n,a){var o=zt;zt|=2;var u=tg(),f=ng();(Jt!==t||St!==n)&&(jl=null,mr(t,n)),n=!1;var _=un;e:do try{if(Xt!==0&&_t!==null){var R=_t,k=li;switch(Xt){case 8:Gf(),_=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var ae=Xt;if(Xt=0,li=null,gr(t,R,k,ae),a&&dr){_=0;break e}break;default:ae=Xt,Xt=0,li=null,gr(t,R,k,ae)}}by(),_=un;break}catch(Se){$0(t,Se)}while(!0);return n&&t.shellSuspendCounter++,ia=Ss=null,zt=o,H.H=u,H.A=f,_t===null&&(Jt=null,St=0,pl()),_}function by(){for(;_t!==null;)ig(_t)}function Ey(t,n){var a=zt;zt|=2;var o=tg(),u=ng();Jt!==t||St!==n?(jl=null,Wl=It()+500,mr(t,n)):dr=De(t,n);e:do try{if(Xt!==0&&_t!==null){n=_t;var f=li;t:switch(Xt){case 1:Xt=0,li=null,gr(t,n,f,1);break;case 2:case 9:if(hm(f)){Xt=0,li=null,ag(n);break}n=function(){Xt!==2&&Xt!==9||Jt!==t||(Xt=7),Gi(t)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:hm(f)?(Xt=0,li=null,ag(n)):(Xt=0,li=null,gr(t,n,f,7));break;case 5:var _=null;switch(_t.tag){case 26:_=_t.memoizedState;case 5:case 27:var R=_t;if(_?kg(_):R.stateNode.complete){Xt=0,li=null;var k=R.sibling;if(k!==null)_t=k;else{var ae=R.return;ae!==null?(_t=ae,Zl(ae)):_t=null}break t}}Xt=0,li=null,gr(t,n,f,5);break;case 6:Xt=0,li=null,gr(t,n,f,6);break;case 8:Gf(),un=6;break e;default:throw Error(s(462))}}Ty();break}catch(Se){$0(t,Se)}while(!0);return ia=Ss=null,H.H=o,H.A=u,zt=a,_t!==null?0:(Jt=null,St=0,pl(),un)}function Ty(){for(;_t!==null&&!nn();)ig(_t)}function ig(t){var n=w0(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?Zl(t):_t=n}function ag(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=S0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=S0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:nf(n);default:R0(a,n),n=_t=nm(n,ha),n=w0(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?Zl(t):_t=n}function gr(t,n,a,o){ia=Ss=null,nf(n),sr=null,oo=0;var u=n.return;try{if(hy(t,u,n,a,St)){un=1,Il(t,gi(a,t.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;un=1,Il(t,gi(a,t.current)),_t=null;return}n.flags&32768?(bt||o===1?t=!0:dr||(St&536870912)!==0?t=!1:(Va=t=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),sg(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){sg(n,Va);return}t=n.return;var a=gy(n.alternate,n,ha);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);un===0&&(un=5)}function sg(t,n){do{var a=xy(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);un=6,_t=null}function rg(t,n,a,o,u,f,_,R,k){t.cancelPendingCommit=null;do Kl();while(Sn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ru,an(t,a,f,_,R,k),t===Jt&&(_t=Jt=null,St=0),pr=n,Wa=t,pa=a,Bf=f,Ff=u,Z0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ry(ee,function(){return fg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=V.p,V.p=2,_=zt,zt|=4;try{vy(t,n,a)}finally{zt=_,V.p=u,H.T=o}}Sn=1,og(),lg(),cg()}}function og(){if(Sn===1){Sn=0;var t=Wa,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=V.p;V.p=2;var u=zt;zt|=4;try{G0(n,t);var f=ed,_=qp(t.containerInfo),R=f.focusedElem,k=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&jp(R.ownerDocument.documentElement,R)){if(k!==null&&Eu(R)){var ae=k.start,Se=k.end;if(Se===void 0&&(Se=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(Se,R.value.length);else{var Ee=R.ownerDocument||document,fe=Ee&&Ee.defaultView||window;if(fe.getSelection){var he=fe.getSelection(),Ye=R.textContent.length,it=Math.min(k.start,Ye),Kt=k.end===void 0?it:Math.min(k.end,Ye);!he.extend&&it>Kt&&(_=Kt,Kt=it,it=_);var $=Wp(R,it),j=Wp(R,Kt);if($&&j&&(he.rangeCount!==1||he.anchorNode!==$.node||he.anchorOffset!==$.offset||he.focusNode!==j.node||he.focusOffset!==j.offset)){var ie=Ee.createRange();ie.setStart($.node,$.offset),he.removeAllRanges(),it>Kt?(he.addRange(ie),he.extend(j.node,j.offset)):(ie.setEnd(j.node,j.offset),he.addRange(ie))}}}}for(Ee=[],he=R;he=he.parentNode;)he.nodeType===1&&Ee.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var be=Ee[R];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}lc=!!$f,ed=$f=null}finally{zt=u,V.p=o,H.T=a}}t.current=n,Sn=2}}function lg(){if(Sn===2){Sn=0;var t=Wa,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=V.p;V.p=2;var u=zt;zt|=4;try{I0(t,n.alternate,n)}finally{zt=u,V.p=o,H.T=a}}Sn=3}}function cg(){if(Sn===4||Sn===3){Sn=0,K();var t=Wa,n=pr,a=pa,o=Z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,pr=Wa=null,ug(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),jr(a),n=n.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=V.p,V.p=2,H.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{H.T=n,V.p=u}}(pa&3)!==0&&Kl(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Hf?To++:(To=0,Hf=t):To=0,Ao(0)}}function ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function Kl(){return og(),lg(),cg(),fg()}function fg(){if(Sn!==5)return!1;var t=Wa,n=Bf;Bf=0;var a=jr(pa),o=H.T,u=V.p;try{V.p=32>a?32:a,H.T=null,a=Ff,Ff=null;var f=Wa,_=pa;if(Sn=0,pr=Wa=null,pa=0,(zt&6)!==0)throw Error(s(331));var R=zt;if(zt|=4,j0(f.current),k0(f,f.current,_,a),zt=R,Ao(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(ge,f)}catch{}return!0}finally{V.p=u,H.T=o,ug(t,n)}}function dg(t,n,a){n=gi(a,n),n=vf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(We(t,2),Gi(t))}function Wt(t,n,a){if(t.tag===3)dg(t,t,a);else for(;n!==null;){if(n.tag===3){dg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=gi(a,t),a=h0(2),o=Ba(n,a,2),o!==null&&(p0(a,o,n,t),We(o,2),Gi(o));break}}n=n.return}}function kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Sy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),t=Ay.bind(null,t,n,a),n.then(t,t))}function Ay(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(St&a)===a&&(un===4||un===3&&(St&62914560)===St&&300>It()-Xl?(zt&2)===0&&mr(t,0):If|=a,hr===St&&(hr=0)),Gi(t)}function hg(t,n){n===0&&(n=Ae()),t=vs(t,n),t!==null&&(We(t,n),Gi(t))}function wy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hg(t,a)}function Cy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),hg(t,a)}function Ry(t,n){return Ut(t,n)}var Ql=null,xr=null,Xf=!1,Jl=!1,Wf=!1,qa=0;function Gi(t){t!==xr&&t.next===null&&(xr===null?Ql=xr=t:xr=xr.next=t),Jl=!0,Xf||(Xf=!0,Dy())}function Ao(t,n){if(!Wf&&Jl){Wf=!0;do for(var a=!1,o=Ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ge(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,xg(o,f))}else f=St,f=Me(o,o===Jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,xg(o,f));o=o.next}while(a);Wf=!1}}function Ny(){pg()}function pg(){Jl=Xf=!1;var t=0;qa!==0&&Gy()&&(t=qa);for(var n=It(),a=null,o=Ql;o!==null;){var u=o.next,f=mg(o,n);f===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(xr=a)):(a=o,(t!==0||(f&3)!==0)&&(Jl=!0)),o=u}Sn!==0&&Sn!==5||Ao(t),qa!==0&&(qa=0)}function mg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Ge(f),R=1<<_,k=u[_];k===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Fe(R,n)):k<=n&&(t.expiredLanes|=R),f&=~R}if(n=Jt,a=St,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&qt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&qt(o),jr(a)){case 2:case 8:a=E;break;case 32:a=ee;break;case 268435456:a=me;break;default:a=ee}return o=gg.bind(null,t),a=Ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&qt(o),t.callbackPriority=2,t.callbackNode=null,2}function gg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var o=St;return o=Me(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Q0(t,o,n),mg(t,It()),t.callbackNode!=null&&t.callbackNode===a?gg.bind(null,t):null)}function xg(t,n){if(Kl())return null;Q0(t,n,!0)}function Dy(){ky(function(){(zt&6)!==0?Ut(P,Ny):pg()})}function jf(){if(qa===0){var t=nr;t===0&&(t=et,et<<=1,(et&261888)===0&&(et=256)),qa=t}return qa}function vg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ps(""+t)}function _g(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Uy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=vg((u[wn]||null).action),_=o.submitter;_&&(n=(n=_[wn]||null)?vg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new ul("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var k=_?_g(u,_):new FormData(u);df(a,{pending:!0,data:k,method:u.method,action:f},null,k)}}else typeof f=="function"&&(R.preventDefault(),k=_?_g(u,_):new FormData(u),df(a,{pending:!0,data:k,method:u.method,action:f},f,k))},currentTarget:u}]})}}for(var qf=0;qf<Cu.length;qf++){var Yf=Cu[qf],Ly=Yf.toLowerCase(),Oy=Yf[0].toUpperCase()+Yf.slice(1);wi(Ly,"on"+Oy)}wi(Kp,"onAnimationEnd"),wi(Qp,"onAnimationIteration"),wi(Jp,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(K_,"onTransitionRun"),wi(Q_,"onTransitionStart"),wi(J_,"onTransitionCancel"),wi($p,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function yg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],k=R.instance,ae=R.currentTarget;if(R=R.listener,k!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(Se){hl(Se)}u.currentTarget=null,f=k}else for(_=0;_<o.length;_++){if(R=o[_],k=R.instance,ae=R.currentTarget,R=R.listener,k!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(Se){hl(Se)}u.currentTarget=null,f=k}}}}function yt(t,n){var a=n[fs];a===void 0&&(a=n[fs]=new Set);var o=t+"__bubble";a.has(o)||(Sg(n,t,2,!1),a.add(o))}function Zf(t,n,a){var o=0;n&&(o|=4),Sg(a,t,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Kf(t){if(!t[$l]){t[$l]=!0,rl.forEach(function(a){a!=="selectionchange"&&(Py.has(a)||Zf(a,!1,t),Zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,Zf("selectionchange",!1,n))}}function Sg(t,n,a,o){switch(Kg(n)){case 2:var u=cS;break;case 8:u=uS;break;default:u=fd}a=u.bind(null,n,a,t),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Qf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var k=_.tag;if((k===3||k===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Qi(R),_===null)return;if(k=_.tag,k===5||k===6||k===26||k===27){o=f=_;continue e}R=R.parentNode}}o=o.return}Ap(function(){var ae=f,Se=hu(a),Ee=[];e:{var fe=em.get(t);if(fe!==void 0){var he=ul,Ye=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":he=C_;break;case"focusin":Ye="focus",he=_u;break;case"focusout":Ye="blur",he=_u;break;case"beforeblur":case"afterblur":he=_u;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=g_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=D_;break;case Kp:case Qp:case Jp:he=__;break;case $p:he=L_;break;case"scroll":case"scrollend":he=p_;break;case"wheel":he=P_;break;case"copy":case"cut":case"paste":he=S_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Dp;break;case"toggle":case"beforetoggle":he=z_}var it=(n&4)!==0,Kt=!it&&(t==="scroll"||t==="scrollend"),$=it?fe!==null?fe+"Capture":null:fe;it=[];for(var j=ae,ie;j!==null;){var be=j;if(ie=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||ie===null||$===null||(be=Yr(j,$),be!=null&&it.push(Co(j,be,ie))),Kt)break;j=j.return}0<it.length&&(fe=new he(fe,Ye,null,a,Se),Ee.push({event:fe,listeners:it}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",fe&&a!==du&&(Ye=a.relatedTarget||a.fromElement)&&(Qi(Ye)||Ye[kn]))break e;if((he||fe)&&(fe=Se.window===Se?Se:(fe=Se.ownerDocument)?fe.defaultView||fe.parentWindow:window,he?(Ye=a.relatedTarget||a.toElement,he=ae,Ye=Ye?Qi(Ye):null,Ye!==null&&(Kt=c(Ye),it=Ye.tag,Ye!==Kt||it!==5&&it!==27&&it!==6)&&(Ye=null)):(he=null,Ye=ae),he!==Ye)){if(it=Rp,be="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(it=Dp,be="onPointerLeave",$="onPointerEnter",j="pointer"),Kt=he==null?fe:hs(he),ie=Ye==null?fe:hs(Ye),fe=new it(be,j+"leave",he,a,Se),fe.target=Kt,fe.relatedTarget=ie,be=null,Qi(Se)===ae&&(it=new it($,j+"enter",Ye,a,Se),it.target=ie,it.relatedTarget=Kt,be=it),Kt=be,he&&Ye)t:{for(it=Iy,$=he,j=Ye,ie=0,be=$;be;be=it(be))ie++;be=0;for(var nt=j;nt;nt=it(nt))be++;for(;0<ie-be;)$=it($),ie--;for(;0<be-ie;)j=it(j),be--;for(;ie--;){if($===j||j!==null&&$===j.alternate){it=$;break t}$=it($),j=it(j)}it=null}else it=null;he!==null&&Mg(Ee,fe,he,it,!1),Ye!==null&&Kt!==null&&Mg(Ee,Kt,Ye,it,!0)}}e:{if(fe=ae?hs(ae):window,he=fe.nodeName&&fe.nodeName.toLowerCase(),he==="select"||he==="input"&&fe.type==="file")var Ot=Fp;else if(zp(fe))if(Hp)Ot=q_;else{Ot=W_;var Ke=X_}else he=fe.nodeName,!he||he.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?ae&&Ft(ae.elementType)&&(Ot=Fp):Ot=j_;if(Ot&&(Ot=Ot(t,ae))){Bp(Ee,Ot,a,Se);break e}Ke&&Ke(t,fe,ae),t==="focusout"&&ae&&fe.type==="number"&&ae.memoizedProps.value!=null&&vt(fe,"number",fe.value)}switch(Ke=ae?hs(ae):window,t){case"focusin":(zp(Ke)||Ke.contentEditable==="true")&&(Ys=Ke,Tu=ae,no=null);break;case"focusout":no=Tu=Ys=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Yp(Ee,a,Se);break;case"selectionchange":if(Z_)break;case"keydown":case"keyup":Yp(Ee,a,Se)}var mt;if(Su)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else qs?Pp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Up&&a.locale!=="ko"&&(qs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&qs&&(mt=wp()):(Da=Se,gu="value"in Da?Da.value:Da.textContent,qs=!0)),Ke=ec(ae,Mt),0<Ke.length&&(Mt=new Np(Mt,t,null,a,Se),Ee.push({event:Mt,listeners:Ke}),mt?Mt.data=mt:(mt=Ip(a),mt!==null&&(Mt.data=mt)))),(mt=F_?H_(t,a):G_(t,a))&&(Mt=ec(ae,"onBeforeInput"),0<Mt.length&&(Ke=new Np("onBeforeInput","beforeinput",null,a,Se),Ee.push({event:Ke,listeners:Mt}),Ke.data=mt)),Uy(Ee,t,ae,a,Se)}yg(Ee,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(t,a),u!=null&&o.unshift(Co(t,u,f)),u=Yr(t,n),u!=null&&o.push(Co(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Iy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mg(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,k=R.alternate,ae=R.stateNode;if(R=R.tag,k!==null&&k===o)break;R!==5&&R!==26&&R!==27||ae===null||(k=ae,u?(ae=Yr(a,f),ae!=null&&_.unshift(Co(a,ae,k))):u||(ae=Yr(a,f),ae!=null&&_.push(Co(a,ae,k)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var zy=/\r\n?/g,By=/\u0000|\uFFFD/g;function bg(t){return(typeof t=="string"?t:""+t).replace(zy,`
`).replace(By,"")}function Eg(t,n){return n=bg(n),bg(t)===n}function Zt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ii(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ii(t,""+o);break;case"className":qe(t,"class",o);break;case"tabIndex":qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,a,o);break;case"style":Ai(t,o,f);break;case"data":if(n!=="object"){qe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ps(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ps(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ps(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Pe(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,Pe(t,a,o))}}function Jf(t,n,a,o,u,f){switch(a){case"style":Ai(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ii(t,o):(typeof o=="number"||typeof o=="bigint")&&ii(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[wn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Pe(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,f,_,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var R=f=_=u=null,k=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var Se=a[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":_=Se;break;case"checked":k=Se;break;case"defaultChecked":ae=Se;break;case"value":f=Se;break;case"defaultValue":R=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,n));break;default:Zt(t,n,o,Se,a,null)}}Ln(t,f,R,k,ae,_,u,!1);return;case"select":yt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Zt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?yn(t,!!o,n,!1):a!=null&&yn(t,!!o,a,!0);return;case"textarea":yt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Zt(t,n,_,R,a,null)}Ti(t,o,u,f);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,k,o,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)yt(wo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,ae,o,a,null)}return;default:if(Ft(n)){for(Se in a)a.hasOwnProperty(Se)&&(o=a[Se],o!==void 0&&Jf(t,n,Se,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Zt(t,n,R,o,a,null))}function Fy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,k=null,ae=null,Se=null;for(he in a){var Ee=a[he];if(a.hasOwnProperty(he)&&Ee!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":k=Ee;default:o.hasOwnProperty(he)||Zt(t,n,he,null,o,Ee)}}for(var fe in o){var he=o[fe];if(Ee=a[fe],o.hasOwnProperty(fe)&&(he!=null||Ee!=null))switch(fe){case"type":f=he;break;case"name":u=he;break;case"checked":ae=he;break;case"defaultChecked":Se=he;break;case"value":_=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==Ee&&Zt(t,n,fe,he,o,Ee)}}Ve(t,_,R,k,ae,Se,f,u);return;case"select":he=_=R=fe=null;for(f in a)if(k=a[f],a.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":he=k;default:o.hasOwnProperty(f)||Zt(t,n,f,null,o,k)}for(u in o)if(f=o[u],k=a[u],o.hasOwnProperty(u)&&(f!=null||k!=null))switch(u){case"value":fe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==k&&Zt(t,n,u,f,o,k)}n=R,a=_,o=he,fe!=null?yn(t,!!a,fe,!1):!!o!=!!a&&(n!=null?yn(t,!!a,n,!0):yn(t,!!a,a?[]:"",!1));return;case"textarea":he=fe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":fe=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Zt(t,n,_,u,o,f)}ni(t,fe,he);return;case"option":for(var Ye in a)if(fe=a[Ye],a.hasOwnProperty(Ye)&&fe!=null&&!o.hasOwnProperty(Ye))switch(Ye){case"selected":t.selected=!1;break;default:Zt(t,n,Ye,null,o,fe)}for(k in o)if(fe=o[k],he=a[k],o.hasOwnProperty(k)&&fe!==he&&(fe!=null||he!=null))switch(k){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Zt(t,n,k,fe,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)fe=a[it],a.hasOwnProperty(it)&&fe!=null&&!o.hasOwnProperty(it)&&Zt(t,n,it,null,o,fe);for(ae in o)if(fe=o[ae],he=a[ae],o.hasOwnProperty(ae)&&fe!==he&&(fe!=null||he!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Zt(t,n,ae,fe,o,he)}return;default:if(Ft(n)){for(var Kt in a)fe=a[Kt],a.hasOwnProperty(Kt)&&fe!==void 0&&!o.hasOwnProperty(Kt)&&Jf(t,n,Kt,void 0,o,fe);for(Se in o)fe=o[Se],he=a[Se],!o.hasOwnProperty(Se)||fe===he||fe===void 0&&he===void 0||Jf(t,n,Se,fe,o,he);return}}for(var $ in a)fe=a[$],a.hasOwnProperty($)&&fe!=null&&!o.hasOwnProperty($)&&Zt(t,n,$,null,o,fe);for(Ee in o)fe=o[Ee],he=a[Ee],!o.hasOwnProperty(Ee)||fe===he||fe==null&&he==null||Zt(t,n,Ee,fe,o,he)}function Tg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&Tg(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],ae=k.startTime;if(ae>R)break;var Se=k.transferSize,Ee=k.initiatorType;Se&&Tg(Ee)&&(k=k.responseEnd,_+=Se*(k<R?1:(R-ae)/(k-ae)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $f=null,ed=null;function tc(t){return t.nodeType===9?t:t.ownerDocument}function Ag(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function td(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nd=null;function Gy(){var t=window.event;return t&&t.type==="popstate"?t===nd?!1:(nd=t,!0):(nd=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(t){return Rg.resolve(null).then(t).catch(Xy)}:Cg;function Xy(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function Ng(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Sr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[wa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);Sr(n)}function Dg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function id(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),Ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Wy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function jy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function Ug(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function ad(t){return t.data==="$?"||t.data==="$~"}function sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var rd=null;function Lg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Og(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Pg(t,n,a){switch(n=tc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ca(t)}var Mi=new Map,Ig=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=V.d;V.d={f:Yy,r:Zy,D:Ky,C:Qy,L:Jy,m:$y,X:tS,S:eS,M:nS};function Yy(){var t=ma.f(),n=ql();return t||n}function Zy(t){var n=Ji(t);n!==null&&n.tag===5&&n.type==="form"?$m(n):ma.r(t)}var vr=typeof document>"u"?null:document;function zg(t,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),pn(n),o.head.appendChild(n)))}}function Ky(t){ma.D(t),zg("dns-prefetch",t,null)}function Qy(t,n){ma.C(t,n),zg("preconnect",t,n)}function Jy(t,n,a){ma.L(t,n,a);var o=vr;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var f=u;switch(n){case"style":f=_r(t);break;case"script":f=yr(t)}Mi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),Dn(n,"link",t),pn(n),o.head.appendChild(n)))}}function $y(t,n){ma.m(t,n);var a=vr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yr(t)}if(!Mi.has(f)&&(t=v({rel:"modulepreload",href:t},n),Mi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}o=a.createElement("link"),Dn(o,"link",t),pn(o),a.head.appendChild(o)}}}function eS(t,n,a){ma.S(t,n,a);var o=vr;if(o&&t){var u=Ra(o).hoistableStyles,f=_r(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(No(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(f))&&od(t,a);var k=_=o.createElement("link");pn(k),Dn(k,"link",t),k._p=new Promise(function(ae,Se){k.onload=ae,k.onerror=Se}),k.addEventListener("load",function(){R.loading|=1}),k.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ic(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function tS(t,n){ma.X(t,n);var a=vr;if(a&&t){var o=Ra(a).hoistableScripts,u=yr(t),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(t=v({src:t,async:!0},n),(n=Mi.get(u))&&ld(t,n),f=a.createElement("script"),pn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function nS(t,n){ma.M(t,n);var a=vr;if(a&&t){var o=Ra(a).hoistableScripts,u=yr(t),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&ld(t,n),f=a.createElement("script"),pn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Bg(t,n,a,o){var u=(u=Z.current)?nc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_r(a.href);var f=Ra(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(No(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),f||iS(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function _r(t){return'href="'+Vt(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function Fg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),pn(n),t.head.appendChild(n))}function yr(t){return'[src="'+Vt(t)+'"]'}function Do(t){return"script[async]"+t}function Hg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,pn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),pn(o),Dn(o,"style",u),ic(o,a.precedence,t),n.instance=o;case"stylesheet":u=_r(a.href);var f=t.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,pn(f),f;o=Fg(a),(u=Mi.get(u))&&od(o,u),f=(t.ownerDocument||t).createElement("link"),pn(f);var _=f;return _._p=new Promise(function(R,k){_.onload=R,_.onerror=k}),Dn(f,"link",o),n.state.loading|=4,ic(f,a.precedence,t),n.instance=f;case"script":return f=yr(a.src),(u=t.querySelector(Do(f)))?(n.instance=u,pn(u),u):(o=a,(u=Mi.get(f))&&(o=v({},a),ld(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),pn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,t));return n.instance}function ic(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function Gg(t,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[wa]||f[hn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function Vg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function aS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,pn(f);return}f=n.ownerDocument||n,o=Fg(o),(u=Mi.get(u))&&od(o,u),f=f.createElement("link"),pn(f);var _=f;_._p=new Promise(function(R,k){_.onload=R,_.onerror=k}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var cd=0;function rS(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&cd===0&&(cd=62500*Hy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>cd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,n.forEach(oS,t),rc=null,sc.call(t))}function oS(t,n){if(!(n.state.loading&4)){var a=rc.get(t);if(a)var o=a.get(null);else{a=new Map,rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:I,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function lS(t,n,a,o,u,f,_,R,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Xg(t,n,a,o,u,f,_,R,k,ae,Se,Ee){return t=new lS(t,n,a,_,k,ae,Se,Ee,R),n=1,f===!0&&(n|=24),f=si(3,null,null,n),t.current=f,f.stateNode=t,n=Gu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Wu(f),t}function Wg(t){return t?(t=Qs,t):Qs}function jg(t,n,a,o,u,f){u=Wg(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(t,o,n),a!==null&&(Zn(a,t,n),co(a,t,n))}function qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ud(t,n){qg(t,n),(t=t.alternate)&&qg(t,n)}function Yg(t){if(t.tag===13||t.tag===31){var n=vs(t,67108864);n!==null&&Zn(n,t,67108864),ud(t,67108864)}}function Zg(t){if(t.tag===13||t.tag===31){var n=ui();n=Wr(n);var a=vs(t,n);a!==null&&Zn(a,t,n),ud(t,n)}}var lc=!0;function cS(t,n,a,o){var u=H.T;H.T=null;var f=V.p;try{V.p=2,fd(t,n,a,o)}finally{V.p=f,H.T=u}}function uS(t,n,a,o){var u=H.T;H.T=null;var f=V.p;try{V.p=8,fd(t,n,a,o)}finally{V.p=f,H.T=u}}function fd(t,n,a,o){if(lc){var u=dd(o);if(u===null)Qf(t,n,o,cc,a),Qg(t,o);else if(dS(u,t,n,a,o))o.stopPropagation();else if(Qg(t,o),n&4&&-1<fS.indexOf(t)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Re(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var k=1<<31-Ge(_);R.entanglements[1]|=k,_&=~k}Gi(f),(zt&6)===0&&(Wl=It()+500,Ao(0))}}break;case 31:case 13:R=vs(f,2),R!==null&&Zn(R,f,2),ql(),ud(f,2)}if(f=dd(o),f===null&&Qf(t,n,o,cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Qf(t,n,o,null,a)}}function dd(t){return t=hu(t),hd(t)}var cc=null;function hd(t){if(cc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function Kg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case P:return 2;case E:return 8;case ee:case ce:return 32;case me:return 268435456;default:return 32}default:return 32}}var pd=!1,Za=null,Ka=null,Qa=null,Lo=new Map,Oo=new Map,Ja=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qg(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&Yg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function dS(t,n,a,o,u){switch(n){case"focusin":return Za=Po(Za,t,n,a,o,u),!0;case"dragenter":return Ka=Po(Ka,t,n,a,o,u),!0;case"mouseover":return Qa=Po(Qa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,Po(Lo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,t,n,a,o,u)),!0}return!1}function Jg(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){Zg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){Zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);du=o,a.target.dispatchEvent(o),du=null}else return n=Ji(a),n!==null&&Yg(n),t.blockedOn=a,!1;n.shift()}return!0}function $g(t,n,a){uc(t)&&a.delete(n)}function hS(){pd=!1,Za!==null&&uc(Za)&&(Za=null),Ka!==null&&uc(Ka)&&(Ka=null),Qa!==null&&uc(Qa)&&(Qa=null),Lo.forEach($g),Oo.forEach($g)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,pd||(pd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hS)))}var dc=null;function ex(t){dc!==t&&(dc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(hd(o||a)===null)continue;break}var f=Ji(a);f!==null&&(t.splice(n,3),n-=3,df(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Sr(t){function n(k){return fc(k,t)}Za!==null&&fc(Za,t),Ka!==null&&fc(Ka,t),Qa!==null&&fc(Qa,t),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Jg(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[wn]||null;if(typeof f=="function")_||ex(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[wn]||null)R=_.formAction;else if(hd(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),ex(a)}}}function tx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function md(t){this._internalRoot=t}hc.prototype.render=md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ui();jg(a,o,t,n,null,null)},hc.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;jg(t.current,2,null,t,null,null),ql(),n[kn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&Jg(t)}};var nx=e.version;if(nx!=="19.2.8")throw Error(s(527,nx,"19.2.8"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var pS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ge=pc.inject(pS),xe=pc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=c0,f=u0,_=f0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Xg(t,1,!1,null,null,a,o,null,u,f,_,tx),t[kn]=n.current,Kf(t),new md(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=c0,_=u0,R=f0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Xg(t,1,!0,n,a??null,o,u,k,f,_,R,tx),n.context=Wg(null),a=n.current,o=ui(),o=Wr(o),u=za(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,We(n,a),Gi(n),t[kn]=n.current,Kf(t),new hc(n)},zo.version="19.2.8",zo}var dx;function ES(){if(dx)return vd.exports;dx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vd.exports=bS(),vd.exports}var TS=ES();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="185",AS=0,hx=1,wS=2,Gc=1,CS=2,jo=3,ls=0,Jn=1,Sa=2,ba=0,Ir=1,ah=2,px=3,mx=4,RS=5,Is=100,NS=101,DS=102,US=103,LS=104,OS=200,PS=201,IS=202,zS=203,sh=204,rh=205,BS=206,FS=207,HS=208,GS=209,VS=210,kS=211,XS=212,WS=213,jS=214,oh=0,lh=1,ch=2,Fr=3,uh=4,fh=5,dh=6,hh=7,_v=0,qS=1,YS=2,qi=0,yv=1,Sv=2,Mv=3,bv=4,Ev=5,Tv=6,Av=7,wv=300,Hs=301,Hr=302,Md=303,bd=304,nu=306,ph=1e3,Ma=1001,mh=1002,Un=1003,ZS=1004,mc=1005,zn=1006,Ed=1007,Bs=1008,hi=1009,Cv=1010,Rv=1011,Zo=1012,np=1013,Zi=1014,Wi=1015,Ta=1016,ip=1017,ap=1018,Ko=1020,Nv=35902,Dv=35899,Uv=1021,Lv=1022,Oi=1023,Aa=1026,Fs=1027,Ov=1028,sp=1029,Gs=1030,rp=1031,op=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,gh=35840,xh=35841,vh=35842,_h=35843,yh=36196,Sh=37492,Mh=37496,bh=37488,Eh=37489,qc=37490,Th=37491,Ah=37808,wh=37809,Ch=37810,Rh=37811,Nh=37812,Dh=37813,Uh=37814,Lh=37815,Oh=37816,Ph=37817,Ih=37818,zh=37819,Bh=37820,Fh=37821,Hh=36492,Gh=36494,Vh=36495,kh=36283,Xh=36284,Yc=36285,Wh=36286,KS=3200,jh=0,QS=1,rs="",Ei="srgb",Zc="srgb-linear",Kc="linear",jt="srgb",Mr=7680,gx=519,JS=512,$S=513,eM=514,lp=515,tM=516,nM=517,cp=518,iM=519,xx=35044,vx="300 es",ji=2e3,Qo=2001;function aM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sM(){const r=Qc("canvas");return r.style.display="block",r}const _x={};function yx(...r){const e="THREE."+r.shift();console.log(e,...r)}function Pv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ot(...r){r=Pv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Rt(...r){r=Pv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function zr(...r){const e=r.join(" ");e in _x||(_x[e]=!0,ot(...r))}function rM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const oM={[oh]:lh,[ch]:dh,[uh]:hh,[Fr]:fh,[lh]:oh,[dh]:ch,[hh]:uh,[fh]:Fr};class Vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,qh=180/Math.PI;function $o(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function lM(r,e){return(r%e+e)%e}function Ad(r,e,i){return(1-i)*r+i*e}function Bo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yp=class yp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yp.prototype.isVector2=!0;let xt=yp;class kr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],x=s[l+2],v=s[l+3],g=c[d+0],b=c[d+1],w=c[d+2],D=c[d+3];if(v!==D||m!==g||h!==b||x!==w){let S=m*g+h*b+x*w+v*D;S<0&&(g=-g,b=-b,w=-w,D=-D,S=-S);let y=1-p;if(S<.9995){const U=Math.acos(S),I=Math.sin(U);y=Math.sin(y*U)/I,p=Math.sin(p*U)/I,m=m*y+g*p,h=h*y+b*p,x=x*y+w*p,v=v*y+D*p}else{m=m*y+g*p,h=h*y+b*p,x=x*y+w*p,v=v*y+D*p;const U=1/Math.sqrt(m*m+h*h+x*x+v*v);m*=U,h*=U,x*=U,v*=U}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],v=c[d],g=c[d+1],b=c[d+2],w=c[d+3];return e[i]=p*w+x*v+m*b-h*g,e[i+1]=m*w+x*g+h*v-p*b,e[i+2]=h*w+x*b+p*g-m*v,e[i+3]=x*w-p*v-m*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),v=p(c/2),g=m(s/2),b=m(l/2),w=m(c/2);switch(d){case"XYZ":this._x=g*x*v+h*b*w,this._y=h*b*v-g*x*w,this._z=h*x*w+g*b*v,this._w=h*x*v-g*b*w;break;case"YXZ":this._x=g*x*v+h*b*w,this._y=h*b*v-g*x*w,this._z=h*x*w-g*b*v,this._w=h*x*v+g*b*w;break;case"ZXY":this._x=g*x*v-h*b*w,this._y=h*b*v+g*x*w,this._z=h*x*w+g*b*v,this._w=h*x*v-g*b*w;break;case"ZYX":this._x=g*x*v-h*b*w,this._y=h*b*v+g*x*w,this._z=h*x*w-g*b*v,this._w=h*x*v+g*b*w;break;case"YZX":this._x=g*x*v+h*b*w,this._y=h*b*v+g*x*w,this._z=h*x*w-g*b*v,this._w=h*x*v-g*b*w;break;case"XZY":this._x=g*x*v-h*b*w,this._y=h*b*v-g*x*w,this._z=h*x*w+g*b*v,this._w=h*x*v+g*b*w;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],v=i[10],g=s+p+v;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(s>p&&s>v){const b=2*Math.sqrt(1+s-p-v);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>v){const b=2*Math.sqrt(1+p-s-v);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+v-s-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-s*h,this._z=c*x+d*h+s*m-l*p,this._w=d*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sp=class Sp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Sx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Sx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),x=2*(p*i-c*l),v=2*(c*s-d*i);return this.x=i+m*h+d*v-p*x,this.y=s+m*x+p*h-c*v,this.z=l+m*v+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sp.prototype.isVector3=!0;let te=Sp;const wd=new te,Sx=new kr,Mp=class Mp{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],x=s[4],v=s[7],g=s[2],b=s[5],w=s[8],D=l[0],S=l[3],y=l[6],U=l[1],I=l[4],N=l[7],B=l[2],L=l[5],z=l[8];return c[0]=d*D+p*U+m*B,c[3]=d*S+p*I+m*L,c[6]=d*y+p*N+m*z,c[1]=h*D+x*U+v*B,c[4]=h*S+x*I+v*L,c[7]=h*y+x*N+v*z,c[2]=g*D+b*U+w*B,c[5]=g*S+b*I+w*L,c[8]=g*y+b*N+w*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-s*c*x+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=x*d-p*h,g=p*m-x*c,b=h*c-d*m,w=i*v+s*g+l*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/w;return e[0]=v*D,e[1]=(l*h-x*s)*D,e[2]=(p*s-l*d)*D,e[3]=g*D,e[4]=(x*i-l*m)*D,e[5]=(l*c-p*i)*D,e[6]=b*D,e[7]=(s*m-h*i)*D,e[8]=(d*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cd.makeScale(e,i)),this}rotate(e){return zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cd.makeRotation(-e)),this}translate(e,i){return zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mp.prototype.isMatrix3=!0;let ft=Mp;const Cd=new ft,Mx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cM(){const r={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===jt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(l.r=Br(l.r),l.g=Br(l.g),l.b=Br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zc]:{primaries:e,whitePoint:s,transfer:Kc,toXYZ:Mx,fromXYZ:bx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:Mx,fromXYZ:bx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),r}const Et=cM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class uM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{br===void 0&&(br=Qc("canvas")),br.width=e.width,br.height=e.height;const l=br.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=br}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ea(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fM=0;class up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Rd(l[d].image)):c.push(Rd(l[d]))}else c=Rd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Rd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?uM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let dM=0;const Nd=new te;class Bn extends Vs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Ma,l=Ma,c=zn,d=Bs,p=Oi,m=hi,h=Bn.DEFAULT_ANISOTROPY,x=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=$o(),this.name="",this.source=new up(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=wv;Bn.DEFAULT_ANISOTROPY=1;const bp=class bp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],x=m[4],v=m[8],g=m[1],b=m[5],w=m[9],D=m[2],S=m[6],y=m[10];if(Math.abs(x-g)<.01&&Math.abs(v-D)<.01&&Math.abs(w-S)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+D)<.1&&Math.abs(w+S)<.1&&Math.abs(h+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,N=(b+1)/2,B=(y+1)/2,L=(x+g)/4,z=(v+D)/4,A=(w+S)/4;return I>N&&I>B?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=L/s,c=z/s):N>B?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=L/l,c=A/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=z/c,l=A/c),this.set(s,l,c,i),this}let U=Math.sqrt((S-w)*(S-w)+(v-D)*(v-D)+(g-x)*(g-x));return Math.abs(U)<.001&&(U=1),this.x=(S-w)/U,this.y=(v-D)/U,this.z=(g-x)/U,this.w=Math.acos((h+b+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bp.prototype.isVector4=!0;let ln=bp;class hM extends Vs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Bn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new up(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends hM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Iv extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tu=class tu{constructor(e,i,s,l,c,d,p,m,h,x,v,g,b,w,D,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,x,v,g,b,w,D,S)}set(e,i,s,l,c,d,p,m,h,x,v,g,b,w,D,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=p,y[13]=m,y[2]=h,y[6]=x,y[10]=v,y[14]=g,y[3]=b,y[7]=w,y[11]=D,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Er.setFromMatrixColumn(e,0).length(),c=1/Er.setFromMatrixColumn(e,1).length(),d=1/Er.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=d*x,b=d*v,w=p*x,D=p*v;i[0]=m*x,i[4]=-m*v,i[8]=h,i[1]=b+w*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=w+b*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*x,b=m*v,w=h*x,D=h*v;i[0]=g+D*p,i[4]=w*p-b,i[8]=d*h,i[1]=d*v,i[5]=d*x,i[9]=-p,i[2]=b*p-w,i[6]=D+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*x,b=m*v,w=h*x,D=h*v;i[0]=g-D*p,i[4]=-d*v,i[8]=w+b*p,i[1]=b+w*p,i[5]=d*x,i[9]=D-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*x,b=d*v,w=p*x,D=p*v;i[0]=m*x,i[4]=w*h-b,i[8]=g*h+D,i[1]=m*v,i[5]=D*h+g,i[9]=b*h-w,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,b=d*h,w=p*m,D=p*h;i[0]=m*x,i[4]=D-g*v,i[8]=w*v+b,i[1]=v,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=b*v+w,i[10]=g-D*v}else if(e.order==="XZY"){const g=d*m,b=d*h,w=p*m,D=p*h;i[0]=m*x,i[4]=-v,i[8]=h*x,i[1]=g*v+D,i[5]=d*x,i[9]=b*v-w,i[2]=w*v-b,i[6]=p*x,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mM,e,gM)}lookAt(e,i,s){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),es.crossVectors(s,fi),es.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),es.crossVectors(s,fi)),es.normalize(),gc.crossVectors(fi,es),l[0]=es.x,l[4]=gc.x,l[8]=fi.x,l[1]=es.y,l[5]=gc.y,l[9]=fi.y,l[2]=es.z,l[6]=gc.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],x=s[1],v=s[5],g=s[9],b=s[13],w=s[2],D=s[6],S=s[10],y=s[14],U=s[3],I=s[7],N=s[11],B=s[15],L=l[0],z=l[4],A=l[8],O=l[12],W=l[1],X=l[5],q=l[9],pe=l[13],ve=l[2],J=l[6],H=l[10],V=l[14],ne=l[3],ye=l[7],G=l[11],M=l[15];return c[0]=d*L+p*W+m*ve+h*ne,c[4]=d*z+p*X+m*J+h*ye,c[8]=d*A+p*q+m*H+h*G,c[12]=d*O+p*pe+m*V+h*M,c[1]=x*L+v*W+g*ve+b*ne,c[5]=x*z+v*X+g*J+b*ye,c[9]=x*A+v*q+g*H+b*G,c[13]=x*O+v*pe+g*V+b*M,c[2]=w*L+D*W+S*ve+y*ne,c[6]=w*z+D*X+S*J+y*ye,c[10]=w*A+D*q+S*H+y*G,c[14]=w*O+D*pe+S*V+y*M,c[3]=U*L+I*W+N*ve+B*ne,c[7]=U*z+I*X+N*J+B*ye,c[11]=U*A+I*q+N*H+B*G,c[15]=U*O+I*pe+N*V+B*M,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],v=e[6],g=e[10],b=e[14],w=e[3],D=e[7],S=e[11],y=e[15],U=m*b-h*g,I=p*b-h*v,N=p*g-m*v,B=d*b-h*x,L=d*g-m*x,z=d*v-p*x;return i*(D*U-S*I+y*N)-s*(w*U-S*B+y*L)+l*(w*I-D*B+y*z)-c*(w*N-D*L+S*z)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],x=e[10];return i*(d*x-p*h)-s*(c*x-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=e[9],g=e[10],b=e[11],w=e[12],D=e[13],S=e[14],y=e[15],U=i*p-s*d,I=i*m-l*d,N=i*h-c*d,B=s*m-l*p,L=s*h-c*p,z=l*h-c*m,A=x*D-v*w,O=x*S-g*w,W=x*y-b*w,X=v*S-g*D,q=v*y-b*D,pe=g*y-b*S,ve=U*pe-I*q+N*X+B*W-L*O+z*A;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ve;return e[0]=(p*pe-m*q+h*X)*J,e[1]=(l*q-s*pe-c*X)*J,e[2]=(D*z-S*L+y*B)*J,e[3]=(g*L-v*z-b*B)*J,e[4]=(m*W-d*pe-h*O)*J,e[5]=(i*pe-l*W+c*O)*J,e[6]=(S*N-w*z-y*I)*J,e[7]=(x*z-g*N+b*I)*J,e[8]=(d*q-p*W+h*A)*J,e[9]=(s*W-i*q-c*A)*J,e[10]=(w*L-D*N+y*U)*J,e[11]=(v*N-x*L-b*U)*J,e[12]=(p*O-d*X-m*A)*J,e[13]=(i*X-s*O+l*A)*J,e[14]=(D*I-w*B-S*U)*J,e[15]=(x*B-v*I+g*U)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,x=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,v=p+p,g=c*h,b=c*x,w=c*v,D=d*x,S=d*v,y=p*v,U=m*h,I=m*x,N=m*v,B=s.x,L=s.y,z=s.z;return l[0]=(1-(D+y))*B,l[1]=(b+N)*B,l[2]=(w-I)*B,l[3]=0,l[4]=(b-N)*L,l[5]=(1-(g+y))*L,l[6]=(S+U)*L,l[7]=0,l[8]=(w+I)*z,l[9]=(S-U)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Er.set(l[0],l[1],l[2]).length();const p=Er.set(l[4],l[5],l[6]).length(),m=Er.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ni.copy(this);const h=1/d,x=1/p,v=1/m;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,i.setFromRotationMatrix(Ni),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=ji,m=!1){const h=this.elements,x=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),b=(s+l)/(s-l);let w,D;if(m)w=c/(d-c),D=d*c/(d-c);else if(p===ji)w=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===Qo)w=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=ji,m=!1){const h=this.elements,x=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),b=-(s+l)/(s-l);let w,D;if(m)w=1/(d-c),D=d/(d-c);else if(p===ji)w=-2/(d-c),D=-(d+c)/(d-c);else if(p===Qo)w=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=w,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};tu.prototype.isMatrix4=!0;let tn=tu;const Er=new te,Ni=new tn,mM=new te(0,0,0),gM=new te(1,1,1),es=new te,gc=new te,fi=new te,Ex=new tn,Tx=new kr;class cs{constructor(e=0,i=0,s=0,l=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],v=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ex.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ex,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Tx.setFromEuler(this),this.setFromQuaternion(Tx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";let fp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xM=0;const Ax=new te,Tr=new kr,ga=new tn,xc=new te,Fo=new te,vM=new te,_M=new kr,wx=new te(1,0,0),Cx=new te(0,1,0),Rx=new te(0,0,1),Nx={type:"added"},yM={type:"removed"},Ar={type:"childadded",child:null},Dd={type:"childremoved",child:null};class Fn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new te,i=new cs,s=new kr,l=new te(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ft}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Tr.setFromAxisAngle(e,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,i){return Tr.setFromAxisAngle(e,i),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(wx,e)}rotateY(e){return this.rotateOnAxis(Cx,e)}rotateZ(e){return this.rotateOnAxis(Rx,e)}translateOnAxis(e,i){return Ax.copy(e).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(wx,e)}translateY(e){return this.translateOnAxis(Cx,e)}translateZ(e){return this.translateOnAxis(Rx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?xc.copy(e):xc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Fo,xc,this.up):ga.lookAt(xc,Fo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Tr.setFromRotationMatrix(ga),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nx),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(yM),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nx),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,vM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,_M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),v=d(e.shapes),g=d(e.skeletons),b=d(e.animations),w=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),b.length>0&&(s.animations=b),w.length>0&&(s.nodes=w)}return s.object=l,s;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new te(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qo extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const D of e.hand.values()){const S=i.getJointPose(D,s),y=this._getHandJoint(h,D);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=x.position.distanceTo(v.position),b=.02,w=.005;h.inputState.pinching&&g>b+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new qo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Ld(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class At{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=s,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Et.workingColorSpace){if(e=lM(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ld(d,c,e+1/3),this.g=Ld(d,c,e),this.b=Ld(d,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const s=zv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return Et.workingToColorSpace(In.copy(this),e),Math.round(Tt(In.r*255,0,255))*65536+Math.round(Tt(In.g*255,0,255))*256+Math.round(Tt(In.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=x<=.5?v/(d+p):v/(2-d-p),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ei){Et.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+i,ts.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ts),e.getHSL(vc);const s=Ad(ts.h,vc.h,i),l=Ad(ts.s,vc.s,i),c=Ad(ts.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new At;At.NAMES=zv;class Bv extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new te,xa=new te,Od=new te,va=new te,wr=new te,Cr=new te,Dx=new te,Pd=new te,Id=new te,zd=new te,Bd=new ln,Fd=new ln,Hd=new ln;class Li{constructor(e=new te,i=new te,s=new te){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Di.subVectors(l,i),xa.subVectors(s,i),Od.subVectors(e,i);const d=Di.dot(Di),p=Di.dot(xa),m=Di.dot(Od),h=xa.dot(xa),x=xa.dot(Od),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,b=(h*m-p*x)*g,w=(d*x-p*m)*g;return c.set(1-b-w,w,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(d,va.y),m.addScaledVector(p,va.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Bd.setScalar(0),Fd.setScalar(0),Hd.setScalar(0),Bd.fromBufferAttribute(e,i),Fd.fromBufferAttribute(e,s),Hd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Bd,c.x),d.addScaledVector(Fd,c.y),d.addScaledVector(Hd,c.z),d}static isFrontFacing(e,i,s,l){return Di.subVectors(s,i),xa.subVectors(e,i),Di.cross(xa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Di.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;wr.subVectors(l,s),Cr.subVectors(c,s),Pd.subVectors(e,s);const m=wr.dot(Pd),h=Cr.dot(Pd);if(m<=0&&h<=0)return i.copy(s);Id.subVectors(e,l);const x=wr.dot(Id),v=Cr.dot(Id);if(x>=0&&v<=x)return i.copy(l);const g=m*v-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(wr,d);zd.subVectors(e,c);const b=wr.dot(zd),w=Cr.dot(zd);if(w>=0&&b<=w)return i.copy(c);const D=b*h-m*w;if(D<=0&&h>=0&&w<=0)return p=h/(h-w),i.copy(s).addScaledVector(Cr,p);const S=x*w-b*v;if(S<=0&&v-x>=0&&b-w>=0)return Dx.subVectors(c,l),p=(v-x)/(v-x+(b-w)),i.copy(l).addScaledVector(Dx,p);const y=1/(S+D+g);return d=D*y,p=g*y,i.copy(s).addScaledVector(wr,d).addScaledVector(Cr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class el{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),yc.subVectors(this.max,Ho),Rr.subVectors(e.a,Ho),Nr.subVectors(e.b,Ho),Dr.subVectors(e.c,Ho),ns.subVectors(Nr,Rr),is.subVectors(Dr,Nr),Ds.subVectors(Rr,Dr);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ds.z,Ds.y,ns.z,0,-ns.x,is.z,0,-is.x,Ds.z,0,-Ds.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ds.y,Ds.x,0];return!Gd(i,Rr,Nr,Dr,yc)||(i=[1,0,0,0,1,0,0,0,1],!Gd(i,Rr,Nr,Dr,yc))?!1:(Sc.crossVectors(ns,is),i=[Sc.x,Sc.y,Sc.z],Gd(i,Rr,Nr,Dr,yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new te,new te,new te,new te,new te,new te,new te,new te],Ui=new te,_c=new el,Rr=new te,Nr=new te,Dr=new te,ns=new te,is=new te,Ds=new te,Ho=new te,yc=new te,Sc=new te,Us=new te;function Gd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Us.fromArray(r,c);const p=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=e.dot(Us),h=i.dot(Us),x=s.dot(Us);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const _n=new te,Mc=new xt;let MM=0;class Pi extends Vs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=xx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fv extends Pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Hv extends Pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Mn extends Pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const bM=new el,Go=new te,Vd=new te;class tl{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):bM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Vd)),this.expandByPoint(Go.copy(e.center).sub(Vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let EM=0;const bi=new tn,kd=new Fn,Ur=new te,di=new el,Vo=new el,An=new te;class Hn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aM(e)?Hv:Fv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Mn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Vo.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(di.min,Vo.min),di.expandByPoint(An),An.addVectors(di.max,Vo.max),di.expandByPoint(An)):(di.expandByPoint(Vo.min),di.expandByPoint(Vo.max))}di.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)An.fromBufferAttribute(p,h),m&&(Ur.fromBufferAttribute(e,h),An.add(Ur)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Pi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new te,m[A]=new te;const h=new te,x=new te,v=new te,g=new xt,b=new xt,w=new xt,D=new te,S=new te;function y(A,O,W){h.fromBufferAttribute(s,A),x.fromBufferAttribute(s,O),v.fromBufferAttribute(s,W),g.fromBufferAttribute(c,A),b.fromBufferAttribute(c,O),w.fromBufferAttribute(c,W),x.sub(h),v.sub(h),b.sub(g),w.sub(g);const X=1/(b.x*w.y-w.x*b.y);isFinite(X)&&(D.copy(x).multiplyScalar(w.y).addScaledVector(v,-b.y).multiplyScalar(X),S.copy(v).multiplyScalar(b.x).addScaledVector(x,-w.x).multiplyScalar(X),p[A].add(D),p[O].add(D),p[W].add(D),m[A].add(S),m[O].add(S),m[W].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let A=0,O=U.length;A<O;++A){const W=U[A],X=W.start,q=W.count;for(let pe=X,ve=X+q;pe<ve;pe+=3)y(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const I=new te,N=new te,B=new te,L=new te;function z(A){B.fromBufferAttribute(l,A),L.copy(B);const O=p[A];I.copy(O),I.sub(B.multiplyScalar(B.dot(O))).normalize(),N.crossVectors(L,O);const X=N.dot(m[A])<0?-1:1;d.setXYZW(A,I.x,I.y,I.z,X)}for(let A=0,O=U.length;A<O;++A){const W=U[A],X=W.start,q=W.count;for(let pe=X,ve=X+q;pe<ve;pe+=3)z(e.getX(pe+0)),z(e.getX(pe+1)),z(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,b=s.count;g<b;g++)s.setXYZ(g,0,0,0);const l=new te,c=new te,d=new te,p=new te,m=new te,h=new te,x=new te,v=new te;if(e)for(let g=0,b=e.count;g<b;g+=3){const w=e.getX(g+0),D=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),x.subVectors(d,c),v.subVectors(l,c),x.cross(v),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,D),h.fromBufferAttribute(s,S),p.add(x),m.add(x),h.add(x),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),v.subVectors(l,c),x.cross(v),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,v=p.normalized,g=new h.constructor(m.length*x);let b=0,w=0;for(let D=0,S=m.length;D<S;D++){p.isInterleavedBufferAttribute?b=m[D]*p.data.stride+p.offset:b=m[D]*x;for(let y=0;y<x;y++)g[w++]=h[b++]}return new Pi(g,x,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,v=h.length;x<v;x++){const g=h[x],b=e(g,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let v=0,g=h.length;v<g;v++){const b=h[v];x.push(b.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],v=c[h];for(let g=0,b=v.length;g<b;g++)x.push(v[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TM=0;class ks extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ir,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sh&&(s.blendSrc=this.blendSrc),this.blendDst!==rh&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new xt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new te,Xd=new te,bc=new te,as=new te,Wd=new te,Ec=new te,jd=new te;class iu{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Xd.copy(e).add(i).multiplyScalar(.5),bc.copy(i).sub(e).normalize(),as.copy(this.origin).sub(Xd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(bc),p=as.dot(this.direction),m=-as.dot(bc),h=as.lengthSq(),x=Math.abs(1-d*d);let v,g,b,w;if(x>0)if(v=d*m-p,g=d*p-m,w=c*x,v>=0)if(g>=-w)if(g<=w){const D=1/x;v*=D,g*=D,b=v*(v+d*g+2*p)+g*(d*v+g+2*m)+h}else g=c,v=Math.max(0,-(d*g+p)),b=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(d*g+p)),b=-v*v+g*(g+2*m)+h;else g<=-w?(v=Math.max(0,-(-d*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),b=-v*v+g*(g+2*m)+h):g<=w?(v=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(v=Math.max(0,-(d*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),b=-v*v+g*(g+2*m)+h);else g=d>0?-c:c,v=Math.max(0,-(d*g+p)),b=-v*v+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Xd).addScaledVector(bc,g),b}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){Wd.subVectors(i,e),Ec.subVectors(s,e),jd.crossVectors(Wd,Ec);let d=this.direction.dot(jd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;as.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(as,Ec));if(m<0)return null;const h=p*this.direction.dot(Wd.cross(as));if(h<0||m+h>d)return null;const x=-p*as.dot(jd);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jo extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=_v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ux=new tn,Ls=new iu,Tc=new tl,Lx=new te,Ac=new te,wc=new te,Cc=new te,qd=new te,Rc=new te,Ox=new te,Nc=new te;class $n extends Fn{constructor(e=new Hn,i=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Rc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],v=c[m];x!==0&&(qd.fromBufferAttribute(v,e),d?Rc.addScaledVector(qd,x):Rc.addScaledVector(qd.sub(i),x))}i.add(Rc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(c),Ls.copy(e.ray).recast(e.near),!(Tc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Tc,Lx)===null||Ls.origin.distanceToSquared(Lx)>(e.far-e.near)**2))&&(Ux.copy(c).invert(),Ls.copy(e.ray).applyMatrix4(Ux),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ls)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let w=0,D=g.length;w<D;w++){const S=g[w],y=d[S.materialIndex],U=Math.max(S.start,b.start),I=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let N=U,B=I;N<B;N+=3){const L=p.getX(N),z=p.getX(N+1),A=p.getX(N+2);l=Dc(this,y,e,s,h,x,v,L,z,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const w=Math.max(0,b.start),D=Math.min(p.count,b.start+b.count);for(let S=w,y=D;S<y;S+=3){const U=p.getX(S),I=p.getX(S+1),N=p.getX(S+2);l=Dc(this,d,e,s,h,x,v,U,I,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let w=0,D=g.length;w<D;w++){const S=g[w],y=d[S.materialIndex],U=Math.max(S.start,b.start),I=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let N=U,B=I;N<B;N+=3){const L=N,z=N+1,A=N+2;l=Dc(this,y,e,s,h,x,v,L,z,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const w=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count);for(let S=w,y=D;S<y;S+=3){const U=S,I=S+1,N=S+2;l=Dc(this,d,e,s,h,x,v,U,I,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function AM(r,e,i,s,l,c,d,p){let m;if(e.side===Jn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===ls,p),m===null)return null;Nc.copy(p),Nc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Nc);return h<i.near||h>i.far?null:{distance:h,point:Nc.clone(),object:r}}function Dc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Ac),r.getVertexPosition(m,wc),r.getVertexPosition(h,Cc);const x=AM(r,e,i,s,Ac,wc,Cc,Ox);if(x){const v=new te;Li.getBarycoord(Ox,Ac,wc,Cc,v),l&&(x.uv=Li.getInterpolatedAttribute(l,p,m,h,v,new xt)),c&&(x.uv1=Li.getInterpolatedAttribute(c,p,m,h,v,new xt)),d&&(x.normal=Li.getInterpolatedAttribute(d,p,m,h,v,new te),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new te,materialIndex:0};Li.getNormal(Ac,wc,Cc,g.normal),x.face=g,x.barycoord=v}return x}class wM extends Bn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Un,x=Un,v,g){super(null,d,p,m,h,x,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new te,CM=new te,RM=new ft;class Ps{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Yd.subVectors(s,i).cross(CM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Yd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||RM.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new tl,NM=new xt(.5,.5),Uc=new te;class dp{constructor(e=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,d=new Ps){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ji,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],v=c[5],g=c[6],b=c[7],w=c[8],D=c[9],S=c[10],y=c[11],U=c[12],I=c[13],N=c[14],B=c[15];if(l[0].setComponents(h-d,b-x,y-w,B-U).normalize(),l[1].setComponents(h+d,b+x,y+w,B+U).normalize(),l[2].setComponents(h+p,b+v,y+D,B+I).normalize(),l[3].setComponents(h-p,b-v,y-D,B-I).normalize(),s)l[4].setComponents(m,g,S,N).normalize(),l[5].setComponents(h-m,b-g,y-S,B-N).normalize();else if(l[4].setComponents(h-m,b-g,y-S,B-N).normalize(),i===ji)l[5].setComponents(h+m,b+g,y+S,B+N).normalize();else if(i===Qo)l[5].setComponents(m,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const i=NM.distanceTo(e.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gv extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new te,$c=new te,Px=new tn,ko=new iu,Lc=new tl,Zd=new te,Ix=new te;class DM extends Fn{constructor(e=new Hn,i=new Gv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo($c);e.setAttribute("lineDistance",new Mn(s,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,e.ray.intersectsSphere(Lc)===!1)return;Px.copy(l).invert(),ko.copy(e.ray).applyMatrix4(Px);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,g=s.attributes.position;if(x!==null){const b=Math.max(0,d.start),w=Math.min(x.count,d.start+d.count);for(let D=b,S=w-1;D<S;D+=h){const y=x.getX(D),U=x.getX(D+1),I=Oc(this,e,ko,m,y,U,D);I&&i.push(I)}if(this.isLineLoop){const D=x.getX(w-1),S=x.getX(b),y=Oc(this,e,ko,m,D,S,w-1);y&&i.push(y)}}else{const b=Math.max(0,d.start),w=Math.min(g.count,d.start+d.count);for(let D=b,S=w-1;D<S;D+=h){const y=Oc(this,e,ko,m,D,D+1,D);y&&i.push(y)}if(this.isLineLoop){const D=Oc(this,e,ko,m,w-1,b,w-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Oc(r,e,i,s,l,c,d){const p=r.geometry.attributes.position;if(Jc.fromBufferAttribute(p,l),$c.fromBufferAttribute(p,c),i.distanceSqToSegment(Jc,$c,Zd,Ix)>s)return;Zd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Zd);if(!(h<e.near||h>e.far))return{distance:h,point:Ix.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}class Vv extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zx=new tn,Yh=new iu,Pc=new tl,Ic=new te;class UM extends Fn{constructor(e=new Hn,i=new Vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;zx.copy(l).invert(),Yh.copy(e.ray).applyMatrix4(zx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,v=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),b=Math.min(h.count,d.start+d.count);for(let w=g,D=b;w<D;w++){const S=h.getX(w);Ic.fromBufferAttribute(v,S),Bx(Ic,S,m,l,e,i,this)}}else{const g=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let w=g,D=b;w<D;w++)Ic.fromBufferAttribute(v,w),Bx(Ic,w,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Bx(r,e,i,s,l,c,d){const p=Yh.distanceSqToPoint(r);if(p<i){const m=new te;Yh.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class kv extends Bn{constructor(e=[],i=Hs,s,l,c,d,p,m,h,x){super(e,i,s,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LM extends Bn{constructor(e,i,s,l,c,d,p,m,h){super(e,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gr extends Bn{constructor(e,i,s=Zi,l,c,d,p=Un,m=Un,h,x=Aa,v=1){if(x!==Aa&&x!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,d,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class OM extends Gr{constructor(e,i=Zi,s=Hs,l,c,d=Un,p=Un,m,h=Aa){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nl extends Hn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],v=[];let g=0,b=0;w("z","y","x",-1,-1,s,i,e,d,c,0),w("z","y","x",1,-1,s,i,-e,d,c,1),w("x","z","y",1,1,e,s,i,l,d,2),w("x","z","y",1,-1,e,s,-i,l,d,3),w("x","y","z",1,-1,e,i,s,l,c,4),w("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(v,2));function w(D,S,y,U,I,N,B,L,z,A,O){const W=N/z,X=B/A,q=N/2,pe=B/2,ve=L/2,J=z+1,H=A+1;let V=0,ne=0;const ye=new te;for(let G=0;G<H;G++){const M=G*X-pe;for(let F=0;F<J;F++){const le=F*W-q;ye[D]=le*U,ye[S]=M*I,ye[y]=ve,h.push(ye.x,ye.y,ye.z),ye[D]=0,ye[S]=0,ye[y]=L>0?1:-1,x.push(ye.x,ye.y,ye.z),v.push(F/z),v.push(1-G/A),V+=1}}for(let G=0;G<A;G++)for(let M=0;M<z;M++){const F=g+M+J*G,le=g+M+J*(G+1),_e=g+(M+1)+J*(G+1),Te=g+(M+1)+J*G;m.push(F,le,Te),m.push(le,_e,Te),ne+=6}p.addGroup(b,ne,O),b+=ne,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class au extends Hn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];p(l),h(s),x(),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(c.slice(),3)),this.setAttribute("uv",new Mn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(U){const I=new te,N=new te,B=new te;for(let L=0;L<i.length;L+=3)b(i[L+0],I),b(i[L+1],N),b(i[L+2],B),m(I,N,B,U)}function m(U,I,N,B){const L=B+1,z=[];for(let A=0;A<=L;A++){z[A]=[];const O=U.clone().lerp(N,A/L),W=I.clone().lerp(N,A/L),X=L-A;for(let q=0;q<=X;q++)q===0&&A===L?z[A][q]=O:z[A][q]=O.clone().lerp(W,q/X)}for(let A=0;A<L;A++)for(let O=0;O<2*(L-A)-1;O++){const W=Math.floor(O/2);O%2===0?(g(z[A][W+1]),g(z[A+1][W]),g(z[A][W])):(g(z[A][W+1]),g(z[A+1][W+1]),g(z[A+1][W]))}}function h(U){const I=new te;for(let N=0;N<c.length;N+=3)I.x=c[N+0],I.y=c[N+1],I.z=c[N+2],I.normalize().multiplyScalar(U),c[N+0]=I.x,c[N+1]=I.y,c[N+2]=I.z}function x(){const U=new te;for(let I=0;I<c.length;I+=3){U.x=c[I+0],U.y=c[I+1],U.z=c[I+2];const N=S(U)/2/Math.PI+.5,B=y(U)/Math.PI+.5;d.push(N,1-B)}w(),v()}function v(){for(let U=0;U<d.length;U+=6){const I=d[U+0],N=d[U+2],B=d[U+4],L=Math.max(I,N,B),z=Math.min(I,N,B);L>.9&&z<.1&&(I<.2&&(d[U+0]+=1),N<.2&&(d[U+2]+=1),B<.2&&(d[U+4]+=1))}}function g(U){c.push(U.x,U.y,U.z)}function b(U,I){const N=U*3;I.x=e[N+0],I.y=e[N+1],I.z=e[N+2]}function w(){const U=new te,I=new te,N=new te,B=new te,L=new xt,z=new xt,A=new xt;for(let O=0,W=0;O<c.length;O+=9,W+=6){U.set(c[O+0],c[O+1],c[O+2]),I.set(c[O+3],c[O+4],c[O+5]),N.set(c[O+6],c[O+7],c[O+8]),L.set(d[W+0],d[W+1]),z.set(d[W+2],d[W+3]),A.set(d[W+4],d[W+5]),B.copy(U).add(I).add(N).divideScalar(3);const X=S(B);D(L,W+0,U,X),D(z,W+2,I,X),D(A,W+4,N,X)}}function D(U,I,N,B){B<0&&U.x===1&&(d[I]=U.x-1),N.x===0&&N.z===0&&(d[I]=B/2/Math.PI+.5)}function S(U){return Math.atan2(U.z,-U.x)}function y(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.vertices,e.indices,e.radius,e.detail)}}class hp extends au{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,d,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new hp(e.radius,e.detail)}}class eu extends au{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new eu(e.radius,e.detail)}}class su extends Hn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,v=e/p,g=i/m,b=[],w=[],D=[],S=[];for(let y=0;y<x;y++){const U=y*g-d;for(let I=0;I<h;I++){const N=I*v-c;w.push(N,-U,0),D.push(0,0,1),S.push(I/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let U=0;U<p;U++){const I=U+h*y,N=U+h*(y+1),B=U+1+h*(y+1),L=U+1+h*y;b.push(I,N,L),b.push(N,B,L)}this.setIndex(b),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(D,3)),this.setAttribute("uv",new Mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}class pp extends Hn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const x=[],v=new te,g=new te,b=[],w=[],D=[],S=[];for(let y=0;y<=s;y++){const U=[],I=y/s,N=d+I*p,B=e*Math.cos(N),L=Math.sqrt(e*e-B*B);let z=0;y===0&&d===0?z=.5/i:y===s&&m===Math.PI&&(z=-.5/i);for(let A=0;A<=i;A++){const O=A/i,W=l+O*c;v.x=-L*Math.cos(W),v.y=B,v.z=L*Math.sin(W),w.push(v.x,v.y,v.z),g.copy(v).normalize(),D.push(g.x,g.y,g.z),S.push(O+z,1-I),U.push(h++)}x.push(U)}for(let y=0;y<s;y++)for(let U=0;U<i;U++){const I=x[y][U+1],N=x[y][U],B=x[y+1][U],L=x[y+1][U+1];(y!==0||d>0)&&b.push(I,N,L),(y!==s-1||m<Math.PI)&&b.push(N,B,L)}this.setIndex(b),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(D,3)),this.setAttribute("uv",new Mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mp extends Hn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],x=[],v=[],g=new te,b=new te,w=new te;for(let D=0;D<=s;D++){const S=d+D/s*p;for(let y=0;y<=l;y++){const U=y/l*c;b.x=(e+i*Math.cos(S))*Math.cos(U),b.y=(e+i*Math.cos(S))*Math.sin(U),b.z=i*Math.sin(S),h.push(b.x,b.y,b.z),g.x=e*Math.cos(U),g.y=e*Math.sin(U),w.subVectors(b,g).normalize(),x.push(w.x,w.y,w.z),v.push(y/l),v.push(D/s)}}for(let D=1;D<=s;D++)for(let S=1;S<=l;S++){const y=(l+1)*D+S-1,U=(l+1)*(D-1)+S-1,I=(l+1)*(D-1)+S,N=(l+1)*D+S;m.push(y,U,N),m.push(U,I,N)}this.setIndex(m),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Vr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Fx(l))l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Fx(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Vn(r){const e={};for(let i=0;i<r.length;i++){const s=Vr(r[i]);for(const l in s)e[l]=s[l]}return e}function Fx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function PM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Wv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const IM={clone:Vr,merge:Vn};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=PM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new At().setHex(l.value);break;case"v2":this.uniforms[s].value=new xt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new te().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ft().fromArray(l.value);break;case"m4":this.uniforms[s].value=new tn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class FM extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jv extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HM extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qv extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Kd=new tn,Hx=new te,Gx=new te;class VM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dp,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Hx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hx),Gx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Gx),i.updateMatrixWorld(),Kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Qo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zc=new te,Bc=new kr,Vi=new te;class Yv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Bc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Bc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(zc,Bc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Bc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new te,Vx=new xt,kx=new xt;class Qn extends Yv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,Vx,kx),i.subVectors(kx,Vx)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Td*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kM extends VM{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Zh extends qv{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new kM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Zv extends Yv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Kv extends qv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Lr=-90,Or=1;class XM extends Fn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qn(Lr,Or,e,i);l.layers=this.layers,this.add(l);const c=new Qn(Lr,Or,e,i);c.layers=this.layers,this.add(c);const d=new Qn(Lr,Or,e,i);d.layers=this.layers,this.add(d);const p=new Qn(Lr,Or,e,i);p.layers=this.layers,this.add(p);const m=new Qn(Lr,Or,e,i);m.layers=this.layers,this.add(m);const h=new Qn(Lr,Or,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Qo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,g,b),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class WM extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xx=new tn;class jM{constructor(e,i,s=0,l=1/0){this.ray=new iu(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Rt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Xx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xx),this}intersectObject(e,i=!0,s=[]){return Kh(e,this,s,i),s.sort(Wx),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Kh(e[l],this,s,i);return s.sort(Wx),s}}function Wx(r,e){return r.distance-e.distance}function Kh(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let d=0,p=c.length;d<p;d++)Kh(c[d],e,i,!0)}}let qM=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}};const Ep=class Ep{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Ep.prototype.isMatrix2=!0;let jx=Ep;function qx(r,e,i,s){const l=YM(s);switch(i){case Uv:return r*e;case Ov:return r*e/l.components*l.byteLength;case sp:return r*e/l.components*l.byteLength;case Gs:return r*e*2/l.components*l.byteLength;case rp:return r*e*2/l.components*l.byteLength;case Lv:return r*e*3/l.components*l.byteLength;case Oi:return r*e*4/l.components*l.byteLength;case op:return r*e*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xh:case _h:return Math.max(r,16)*Math.max(e,8)/4;case gh:case vh:return Math.max(r,8)*Math.max(e,8)/2;case yh:case Sh:case bh:case Eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mh:case qc:case Th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Hh:case Gh:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kh:case Xh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yc:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YM(r){switch(r){case hi:case Cv:return{byteLength:1,components:1};case Zo:case Rv:case Ta:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case Zi:case np:case Wi:return{byteLength:4,components:1};case Nv:case Dv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ZM(r){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,v=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,x),p.onUploadCallback();let b;if(h instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=r.SHORT;else if(h instanceof Uint32Array)b=r.UNSIGNED_INT;else if(h instanceof Int32Array)b=r.INT;else if(h instanceof Int8Array)b=r.BYTE;else if(h instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const x=m.array,v=m.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,x);else{v.sort((b,w)=>b.start-w.start);let g=0;for(let b=1;b<v.length;b++){const w=v[g],D=v[b];D.start<=w.start+w.count+1?w.count=Math.max(w.count,D.start+D.count-w.start):(++g,v[g]=D)}v.length=g+1;for(let b=0,w=v.length;b<w;b++){const D=v[b];r.bufferSubData(h,D.start*x.BYTES_PER_ELEMENT,x,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ub=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:KM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:$M,alphatest_fragment:eb,alphatest_pars_fragment:tb,aomap_fragment:nb,aomap_pars_fragment:ib,batching_pars_vertex:ab,batching_vertex:sb,begin_vertex:rb,beginnormal_vertex:ob,bsdfs:lb,iridescence_fragment:cb,bumpmap_pars_fragment:ub,clipping_planes_fragment:fb,clipping_planes_pars_fragment:db,clipping_planes_pars_vertex:hb,clipping_planes_vertex:pb,color_fragment:mb,color_pars_fragment:gb,color_pars_vertex:xb,color_vertex:vb,common:_b,cube_uv_reflection_fragment:yb,defaultnormal_vertex:Sb,displacementmap_pars_vertex:Mb,displacementmap_vertex:bb,emissivemap_fragment:Eb,emissivemap_pars_fragment:Tb,colorspace_fragment:Ab,colorspace_pars_fragment:wb,envmap_fragment:Cb,envmap_common_pars_fragment:Rb,envmap_pars_fragment:Nb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Vb,envmap_vertex:Ub,fog_vertex:Lb,fog_pars_vertex:Ob,fog_fragment:Pb,fog_pars_fragment:Ib,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Bb,lights_lambert_fragment:Fb,lights_lambert_pars_fragment:Hb,lights_pars_begin:Gb,lights_toon_fragment:kb,lights_toon_pars_fragment:Xb,lights_phong_fragment:Wb,lights_phong_pars_fragment:jb,lights_physical_fragment:qb,lights_physical_pars_fragment:Yb,lights_fragment_begin:Zb,lights_fragment_maps:Kb,lights_fragment_end:Qb,lightprobes_pars_fragment:Jb,logdepthbuf_fragment:$b,logdepthbuf_pars_fragment:e1,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:n1,map_fragment:i1,map_pars_fragment:a1,map_particle_fragment:s1,map_particle_pars_fragment:r1,metalnessmap_fragment:o1,metalnessmap_pars_fragment:l1,morphinstance_vertex:c1,morphcolor_vertex:u1,morphnormal_vertex:f1,morphtarget_pars_vertex:d1,morphtarget_vertex:h1,normal_fragment_begin:p1,normal_fragment_maps:m1,normal_pars_fragment:g1,normal_pars_vertex:x1,normal_vertex:v1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:b1,opaque_fragment:E1,packing:T1,premultiplied_alpha_fragment:A1,project_vertex:w1,dithering_fragment:C1,dithering_pars_fragment:R1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:U1,shadowmap_pars_vertex:L1,shadowmap_vertex:O1,shadowmask_pars_fragment:P1,skinbase_vertex:I1,skinning_pars_vertex:z1,skinning_vertex:B1,skinnormal_vertex:F1,specularmap_fragment:H1,specularmap_pars_fragment:G1,tonemapping_fragment:V1,tonemapping_pars_fragment:k1,transmission_fragment:X1,transmission_pars_fragment:W1,uv_pars_fragment:j1,uv_pars_vertex:q1,uv_vertex:Y1,worldpos_vertex:Z1,background_vert:K1,background_frag:Q1,backgroundCube_vert:J1,backgroundCube_frag:$1,cube_vert:eE,cube_frag:tE,depth_vert:nE,depth_frag:iE,distance_vert:aE,distance_frag:sE,equirect_vert:rE,equirect_frag:oE,linedashed_vert:lE,linedashed_frag:cE,meshbasic_vert:uE,meshbasic_frag:fE,meshlambert_vert:dE,meshlambert_frag:hE,meshmatcap_vert:pE,meshmatcap_frag:mE,meshnormal_vert:gE,meshnormal_frag:xE,meshphong_vert:vE,meshphong_frag:_E,meshphysical_vert:yE,meshphysical_frag:SE,meshtoon_vert:ME,meshtoon_frag:bE,points_vert:EE,points_frag:TE,shadow_vert:AE,shadow_frag:wE,sprite_vert:CE,sprite_frag:RE},Be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Vn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Vn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Vn([Be.points,Be.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Vn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Vn([Be.common,Be.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Vn([Be.sprite,Be.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Vn([Be.common,Be.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Vn([Be.lights,Be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Fc={r:0,b:0,g:0},NE=new tn,Jv=new ft;Jv.set(-1,0,0,0,1,0,0,0,1);function DE(r,e,i,s,l,c){const d=new At(0);let p=l===!0?0:1,m,h,x=null,v=0,g=null;function b(U){let I=U.isScene===!0?U.background:null;if(I&&I.isTexture){const N=U.backgroundBlurriness>0;I=e.get(I,N)}return I}function w(U){let I=!1;const N=b(U);N===null?S(d,p):N&&N.isColor&&(S(N,1),I=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(U,I){const N=b(I);N&&(N.isCubeTexture||N.mapping===nu)?(h===void 0&&(h=new $n(new nl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Vr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=N,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(NE.makeRotationFromEuler(I.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Jv),h.material.toneMapped=Et.getTransfer(N.colorSpace)!==jt,(x!==N||v!==N.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,x=N,v=N.version,g=r.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new $n(new su(2,2),new Ki({name:"BackgroundMaterial",uniforms:Vr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Et.getTransfer(N.colorSpace)!==jt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||v!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=N,v=N.version,g=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function S(U,I){U.getRGB(Fc,Wv(r)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,I,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,I=1){d.set(U),p=I,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,S(d,p)},render:w,addToRenderList:D,dispose:y}}function UE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(X,q,pe,ve,J){let H=!1;const V=v(X,ve,pe,q);c!==V&&(c=V,h(c.object)),H=b(X,ve,pe,J),H&&w(X,ve,pe,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(H||d)&&(d=!1,N(X,q,pe,ve),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function h(X){return r.bindVertexArray(X)}function x(X){return r.deleteVertexArray(X)}function v(X,q,pe,ve){const J=ve.wireframe===!0;let H=s[q.id];H===void 0&&(H={},s[q.id]=H);const V=X.isInstancedMesh===!0?X.id:0;let ne=H[V];ne===void 0&&(ne={},H[V]=ne);let ye=ne[pe.id];ye===void 0&&(ye={},ne[pe.id]=ye);let G=ye[J];return G===void 0&&(G=g(m()),ye[J]=G),G}function g(X){const q=[],pe=[],ve=[];for(let J=0;J<i;J++)q[J]=0,pe[J]=0,ve[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:pe,attributeDivisors:ve,object:X,attributes:{},index:null}}function b(X,q,pe,ve){const J=c.attributes,H=q.attributes;let V=0;const ne=pe.getAttributes();for(const ye in ne)if(ne[ye].location>=0){const M=J[ye];let F=H[ye];if(F===void 0&&(ye==="instanceMatrix"&&X.instanceMatrix&&(F=X.instanceMatrix),ye==="instanceColor"&&X.instanceColor&&(F=X.instanceColor)),M===void 0||M.attribute!==F||F&&M.data!==F.data)return!0;V++}return c.attributesNum!==V||c.index!==ve}function w(X,q,pe,ve){const J={},H=q.attributes;let V=0;const ne=pe.getAttributes();for(const ye in ne)if(ne[ye].location>=0){let M=H[ye];M===void 0&&(ye==="instanceMatrix"&&X.instanceMatrix&&(M=X.instanceMatrix),ye==="instanceColor"&&X.instanceColor&&(M=X.instanceColor));const F={};F.attribute=M,M&&M.data&&(F.data=M.data),J[ye]=F,V++}c.attributes=J,c.attributesNum=V,c.index=ve}function D(){const X=c.newAttributes;for(let q=0,pe=X.length;q<pe;q++)X[q]=0}function S(X){y(X,0)}function y(X,q){const pe=c.newAttributes,ve=c.enabledAttributes,J=c.attributeDivisors;pe[X]=1,ve[X]===0&&(r.enableVertexAttribArray(X),ve[X]=1),J[X]!==q&&(r.vertexAttribDivisor(X,q),J[X]=q)}function U(){const X=c.newAttributes,q=c.enabledAttributes;for(let pe=0,ve=q.length;pe<ve;pe++)q[pe]!==X[pe]&&(r.disableVertexAttribArray(pe),q[pe]=0)}function I(X,q,pe,ve,J,H,V){V===!0?r.vertexAttribIPointer(X,q,pe,J,H):r.vertexAttribPointer(X,q,pe,ve,J,H)}function N(X,q,pe,ve){D();const J=ve.attributes,H=pe.getAttributes(),V=q.defaultAttributeValues;for(const ne in H){const ye=H[ne];if(ye.location>=0){let G=J[ne];if(G===void 0&&(ne==="instanceMatrix"&&X.instanceMatrix&&(G=X.instanceMatrix),ne==="instanceColor"&&X.instanceColor&&(G=X.instanceColor)),G!==void 0){const M=G.normalized,F=G.itemSize,le=e.get(G);if(le===void 0)continue;const _e=le.buffer,Te=le.type,Z=le.bytesPerElement,se=Te===r.INT||Te===r.UNSIGNED_INT||G.gpuType===np;if(G.isInterleavedBufferAttribute){const de=G.data,we=de.stride,He=G.offset;if(de.isInstancedInterleavedBuffer){for(let Le=0;Le<ye.locationSize;Le++)y(ye.location+Le,de.meshPerAttribute);X.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Le=0;Le<ye.locationSize;Le++)S(ye.location+Le);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Le=0;Le<ye.locationSize;Le++)I(ye.location+Le,F/ye.locationSize,Te,M,we*Z,(He+F/ye.locationSize*Le)*Z,se)}else{if(G.isInstancedBufferAttribute){for(let de=0;de<ye.locationSize;de++)y(ye.location+de,G.meshPerAttribute);X.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let de=0;de<ye.locationSize;de++)S(ye.location+de);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let de=0;de<ye.locationSize;de++)I(ye.location+de,F/ye.locationSize,Te,M,F*Z,F/ye.locationSize*de*Z,se)}}else if(V!==void 0){const M=V[ne];if(M!==void 0)switch(M.length){case 2:r.vertexAttrib2fv(ye.location,M);break;case 3:r.vertexAttrib3fv(ye.location,M);break;case 4:r.vertexAttrib4fv(ye.location,M);break;default:r.vertexAttrib1fv(ye.location,M)}}}}U()}function B(){O();for(const X in s){const q=s[X];for(const pe in q){const ve=q[pe];for(const J in ve){const H=ve[J];for(const V in H)x(H[V].object),delete H[V];delete ve[J]}}delete s[X]}}function L(X){if(s[X.id]===void 0)return;const q=s[X.id];for(const pe in q){const ve=q[pe];for(const J in ve){const H=ve[J];for(const V in H)x(H[V].object),delete H[V];delete ve[J]}}delete s[X.id]}function z(X){for(const q in s){const pe=s[q];for(const ve in pe){const J=pe[ve];if(J[X.id]===void 0)continue;const H=J[X.id];for(const V in H)x(H[V].object),delete H[V];delete J[X.id]}}}function A(X){for(const q in s){const pe=s[q],ve=X.isInstancedMesh===!0?X.id:0,J=pe[ve];if(J!==void 0){for(const H in J){const V=J[H];for(const ne in V)x(V[ne].object),delete V[ne];delete J[H]}delete pe[ve],Object.keys(pe).length===0&&delete s[q]}}}function O(){W(),d=!0,c!==l&&(c=l,h(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:W,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:S,disableUnusedAttributes:U}}function LE(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,x){x!==0&&(r.drawArraysInstanced(s,m,h,x),i.update(h,s,x))}function p(m,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,x);let g=0;for(let b=0;b<x;b++)g+=h[b];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function OE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Oi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const A=z===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==hi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Wi&&!A)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(ot("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:w,maxTextureSize:D,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:N,maxSamples:B,samples:L}}function PE(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ps,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const b=v.length!==0||g||s!==0||l;return l=g,s=v.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=x(v,g,0)},this.setState=function(v,g,b){const w=v.clippingPlanes,D=v.clipIntersection,S=v.clipShadows,y=r.get(v);if(!l||w===null||w.length===0||c&&!S)c?x(null):h();else{const U=c?0:s,I=U*4;let N=y.clippingState||null;m.value=N,N=x(w,g,I,b);for(let B=0;B!==I;++B)N[B]=i[B];y.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,g,b,w){const D=v!==null?v.length:0;let S=null;if(D!==0){if(S=m.value,w!==!0||S===null){const y=b+D*4,U=g.matrixWorldInverse;p.getNormalMatrix(U),(S===null||S.length<y)&&(S=new Float32Array(y));for(let I=0,N=b;I!==D;++I,N+=4)d.copy(v[I]).applyMatrix4(U,p),d.normal.toArray(S,N),S[N+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,S}}const os=4,Yx=[.125,.215,.35,.446,.526,.582],zs=20,IE=256,Xo=new Zv,Zx=new At;let Qd=null,Jd=0,$d=0,eh=!1;const zE=new te;class Kx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=zE}=c;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=eh,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hs||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ta,format:Oi,colorSpace:Zc,depthBuffer:!1},l=Qx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BE(c)),this._blurMaterial=HE(c,e,i),this._ggxMaterial=FE(c,e,i)}return l}_compileMaterial(e){const i=new $n(new Hn,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,s,l,c){const m=new Qn(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,b=v.toneMapping;v.getClearColor(Zx),v.toneMapping=qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new nl,new Jo({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,S=D.material;let y=!1;const U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,y=!0):(S.color.copy(Zx),y=!0);for(let I=0;I<6;I++){const N=I%3;N===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[I],c.y,c.z)):N===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[I]));const B=this._cubeSize;Pr(l,N*B,I>2?B:0,B,B),v.setRenderTarget(l),y&&v.render(D,m),v.render(e,m)}v.toneMapping=b,v.autoClear=g,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Hs||e.mapping===Hr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$x()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jx());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Xo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),g=0+h*1.25,b=v*g,{_lodMax:w}=this,D=this._sizeLods[s],S=3*D*(s>w-os?s-w+os:0),y=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=w-i,Pr(c,S,y,3*D,2*D),l.setRenderTarget(c),l.render(p,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=w-s,Pr(e,S,y,3*D,2*D),l.setRenderTarget(e),l.render(p,Xo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,b=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*zs-1),D=c/w,S=isFinite(c)?1+Math.floor(x*D):zs;S>zs&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zs}`);const y=[];let U=0;for(let z=0;z<zs;++z){const A=z/D,O=Math.exp(-A*A/2);y.push(O),z===0?U+=O:z<S&&(U+=2*O)}for(let z=0;z<y.length;z++)y[z]=y[z]/U;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=w,g.mipInt.value=I-s;const N=this._sizeLods[l],B=3*N*(l>I-os?l-I+os:0),L=4*(this._cubeSize-N);Pr(i,B,L,3*N,2*N),m.setRenderTarget(i),m.render(v,Xo)}}function BE(r){const e=[],i=[],s=[];let l=r;const c=r-os+1+Yx.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-os?m=Yx[d-r+os-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,v=1+h,g=[x,x,v,x,v,v,x,x,v,v,x,v],b=6,w=6,D=3,S=2,y=1,U=new Float32Array(D*w*b),I=new Float32Array(S*w*b),N=new Float32Array(y*w*b);for(let L=0;L<b;L++){const z=L%3*2/3-1,A=L>2?0:-1,O=[z,A,0,z+2/3,A,0,z+2/3,A+1,0,z,A,0,z+2/3,A+1,0,z,A+1,0];U.set(O,D*w*L),I.set(g,S*w*L);const W=[L,L,L,L,L,L];N.set(W,y*w*L)}const B=new Hn;B.setAttribute("position",new Pi(U,D)),B.setAttribute("uv",new Pi(I,S)),B.setAttribute("faceIndex",new Pi(N,y)),s.push(new $n(B,null)),l>os&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Qx(r,e,i){const s=new Yi(r,e,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function FE(r,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function HE(r,e,i){const s=new Float32Array(zs),l=new te(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function Jx(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function $x(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $v extends Yi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new kv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new nl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:ba});c.uniforms.tEquirect.value=i;const d=new $n(l,c),p=i.minFilter;return i.minFilter===Bs&&(i.minFilter=zn),new XM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function GE(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===Md||b===bd)if(e.has(g)){const w=e.get(g).texture;return p(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const D=new $v(w.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,w=b===Md||b===bd,D=b===Hs||b===Hr;if(w||D){let S=i.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new Kx(r)),S=w?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const U=g.image;return w&&U&&U.height>0||D&&U&&m(U)?(s===null&&(s=new Kx(r)),S=w?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",x),S.texture):null}}}return g}function p(g,b){return b===Md?g.mapping=Hs:b===bd&&(g.mapping=Hr),g}function m(g){let b=0;const w=6;for(let D=0;D<w;D++)g[D]!==void 0&&b++;return b===w}function h(g){const b=g.target;b.removeEventListener("dispose",h);const w=e.get(b);w!==void 0&&(e.delete(b),w.dispose())}function x(g){const b=g.target;b.removeEventListener("dispose",x);const w=i.get(b);w!==void 0&&(i.delete(b),w.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function VE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&zr("WebGLRenderer: "+s+" extension not supported."),l}}}function kE(r,e,i,s){const l={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const b in g)e.update(g[b],r.ARRAY_BUFFER)}function h(v){const g=[],b=v.index,w=v.attributes.position;let D=0;if(w===void 0)return;if(b!==null){const U=b.array;D=b.version;for(let I=0,N=U.length;I<N;I+=3){const B=U[I+0],L=U[I+1],z=U[I+2];g.push(B,L,L,z,z,B)}}else{const U=w.array;D=w.version;for(let I=0,N=U.length/3-1;I<N;I+=3){const B=I+0,L=I+1,z=I+2;g.push(B,L,L,z,z,B)}}const S=new(w.count>=65535?Hv:Fv)(g,1);S.version=D;const y=c.get(v);y&&e.remove(y),c.set(v,S)}function x(v){const g=c.get(v);if(g){const b=v.index;b!==null&&g.version<b.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:x}}function XE(r,e,i){let s;function l(v){s=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*d),i.update(g,s,1)}function h(v,g,b){b!==0&&(r.drawElementsInstanced(s,g,c,v*d,b),i.update(g,s,b))}function x(v,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,b);let D=0;for(let S=0;S<b;S++)D+=g[S];i.update(D,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x}function WE(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function jE(r,e,i){const s=new WeakMap,l=new ln;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let W=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",W)};var b=W;g!==void 0&&g.texture.dispose();const w=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let N=0;w===!0&&(N=1),D===!0&&(N=2),S===!0&&(N=3);let B=p.attributes.position.count*N,L=1;B>e.maxTextureSize&&(L=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*L*4*v),A=new Iv(z,B,L,v);A.type=Wi,A.needsUpdate=!0;const O=N*4;for(let X=0;X<v;X++){const q=y[X],pe=U[X],ve=I[X],J=B*L*4*X;for(let H=0;H<q.count;H++){const V=H*O;w===!0&&(l.fromBufferAttribute(q,H),z[J+V+0]=l.x,z[J+V+1]=l.y,z[J+V+2]=l.z,z[J+V+3]=0),D===!0&&(l.fromBufferAttribute(pe,H),z[J+V+4]=l.x,z[J+V+5]=l.y,z[J+V+6]=l.z,z[J+V+7]=0),S===!0&&(l.fromBufferAttribute(ve,H),z[J+V+8]=l.x,z[J+V+9]=l.y,z[J+V+10]=l.z,z[J+V+11]=ve.itemSize===4?l.w:1)}}g={count:v,texture:A,size:new xt(B,L)},s.set(p,g),p.addEventListener("dispose",W)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let w=0;for(let S=0;S<h.length;S++)w+=h[S];const D=p.morphTargetsRelative?1:1-w;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function qE(r,e,i,s,l){let c=new WeakMap;function d(h){const x=l.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==x&&(b.update(),c.set(b,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const YE={[yv]:"LINEAR_TONE_MAPPING",[Sv]:"REINHARD_TONE_MAPPING",[Mv]:"CINEON_TONE_MAPPING",[bv]:"ACES_FILMIC_TONE_MAPPING",[Tv]:"AGX_TONE_MAPPING",[Av]:"NEUTRAL_TONE_MAPPING",[Ev]:"CUSTOM_TONE_MAPPING"};function ZE(r,e,i,s,l,c){const d=new Yi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Gr(e,i):void 0}),p=new Yi(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),m=new Hn;m.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const h=new FM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new $n(m,h),v=new Zv(-1,1,1,-1,0,1);let g=null,b=null,w=!1,D,S=null,y=[],U=!1;this.setSize=function(I,N){d.setSize(I,N),p.setSize(I,N);for(let B=0;B<y.length;B++){const L=y[B];L.setSize&&L.setSize(I,N)}},this.setEffects=function(I){y=I,U=y.length>0&&y[0].isRenderPass===!0;const N=d.width,B=d.height;for(let L=0;L<y.length;L++){const z=y[L];z.setSize&&z.setSize(N,B)}},this.begin=function(I,N){if(w||I.toneMapping===qi&&y.length===0)return!1;if(S=N,N!==null){const B=N.width,L=N.height;(d.width!==B||d.height!==L)&&this.setSize(B,L)}return U===!1&&I.setRenderTarget(d),D=I.toneMapping,I.toneMapping=qi,!0},this.hasRenderPass=function(){return U},this.end=function(I,N){I.toneMapping=D,w=!0;let B=d,L=p;for(let z=0;z<y.length;z++){const A=y[z];if(A.enabled!==!1&&(A.render(I,L,B,N),A.needsSwap!==!1)){const O=B;B=L,L=O}}if(g!==I.outputColorSpace||b!==I.toneMapping){g=I.outputColorSpace,b=I.toneMapping,h.defines={},Et.getTransfer(g)===jt&&(h.defines.SRGB_TRANSFER="");const z=YE[b];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=B.texture,I.setRenderTarget(S),I.render(x,v),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const e_=new Bn,Qh=new Gr(1,1),t_=new Iv,n_=new pM,i_=new kv,ev=[],tv=[],nv=new Float32Array(16),iv=new Float32Array(9),av=new Float32Array(4);function Xr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function bn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function En(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function ou(r,e){let i=tv[e];i===void 0&&(i=new Int32Array(e),tv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function KE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function QE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;r.uniform2fv(this.addr,e),En(i,e)}}function JE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(bn(i,e))return;r.uniform3fv(this.addr,e),En(i,e)}}function $E(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;r.uniform4fv(this.addr,e),En(i,e)}}function eT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(bn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(bn(i,s))return;av.set(s),r.uniformMatrix2fv(this.addr,!1,av),En(i,s)}}function tT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(bn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(bn(i,s))return;iv.set(s),r.uniformMatrix3fv(this.addr,!1,iv),En(i,s)}}function nT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(bn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(bn(i,s))return;nv.set(s),r.uniformMatrix4fv(this.addr,!1,nv),En(i,s)}}function iT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function aT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;r.uniform2iv(this.addr,e),En(i,e)}}function sT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(bn(i,e))return;r.uniform3iv(this.addr,e),En(i,e)}}function rT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;r.uniform4iv(this.addr,e),En(i,e)}}function oT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function lT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;r.uniform2uiv(this.addr,e),En(i,e)}}function cT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(bn(i,e))return;r.uniform3uiv(this.addr,e),En(i,e)}}function uT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;r.uniform4uiv(this.addr,e),En(i,e)}}function fT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Qh.compareFunction=i.isReversedDepthBuffer()?cp:lp,c=Qh):c=e_,i.setTexture2D(e||c,l)}function dT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||n_,l)}function hT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||i_,l)}function pT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||t_,l)}function mT(r){switch(r){case 5126:return KE;case 35664:return QE;case 35665:return JE;case 35666:return $E;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return sT;case 35669:case 35673:return rT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(r,e){r.uniform1fv(this.addr,e)}function xT(r,e){const i=Xr(e,this.size,2);r.uniform2fv(this.addr,i)}function vT(r,e){const i=Xr(e,this.size,3);r.uniform3fv(this.addr,i)}function _T(r,e){const i=Xr(e,this.size,4);r.uniform4fv(this.addr,i)}function yT(r,e){const i=Xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ST(r,e){const i=Xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function MT(r,e){const i=Xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function bT(r,e){r.uniform1iv(this.addr,e)}function ET(r,e){r.uniform2iv(this.addr,e)}function TT(r,e){r.uniform3iv(this.addr,e)}function AT(r,e){r.uniform4iv(this.addr,e)}function wT(r,e){r.uniform1uiv(this.addr,e)}function CT(r,e){r.uniform2uiv(this.addr,e)}function RT(r,e){r.uniform3uiv(this.addr,e)}function NT(r,e){r.uniform4uiv(this.addr,e)}function DT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Qh:d=e_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function UT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||n_,c[d])}function LT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||i_,c[d])}function OT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||t_,c[d])}function PT(r){switch(r){case 5126:return gT;case 35664:return xT;case 35665:return vT;case 35666:return _T;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return bT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return wT;case 36294:return CT;case 36295:return RT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return OT}}class IT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mT(i.type)}}class zT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PT(i.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const th=/(\w+)(\])?(\[|\.)?/g;function sv(r,e){r.seq.push(e),r.map[e.id]=e}function FT(r,e,i){const s=r.name,l=s.length;for(th.lastIndex=0;;){const c=th.exec(s),d=th.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){sv(i,h===void 0?new IT(p,r,e):new zT(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new BT(p),sv(i,v)),i=v}}}class jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);FT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function rv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const HT=37297;let GT=0;function VT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const ov=new ft;function kT(r){Et._getMatrix(ov,Et.workingColorSpace,r);const e=`mat3( ${ov.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(r)){case Kc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function lv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+VT(r.getShaderSource(e),p)}else return c}function XT(r,e){const i=kT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WT={[yv]:"Linear",[Sv]:"Reinhard",[Mv]:"Cineon",[bv]:"ACESFilmic",[Tv]:"AgX",[Av]:"Neutral",[Ev]:"Custom"};function jT(r,e){const i=WT[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new te;function qT(){Et.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function ZT(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function KT(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function Yo(r){return r!==""}function cv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(r){return r.replace(QT,$T)}const JT=new Map;function $T(r,e){let i=gt[e];if(i===void 0){const s=JT.get(e);if(s!==void 0)i=gt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jh(i)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(r){return r.replace(eA,tA)}function tA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function dv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nA={[Gc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function iA(r){return nA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aA={[Hs]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function sA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[Hr]:"ENVMAP_MODE_REFRACTION"};function oA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lA={[_v]:"ENVMAP_BLENDING_MULTIPLY",[qS]:"ENVMAP_BLENDING_MIX",[YS]:"ENVMAP_BLENDING_ADD"};function cA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lA[r.combine]||"ENVMAP_BLENDING_NONE"}function uA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fA(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=iA(i),h=sA(i),x=oA(i),v=cA(i),g=uA(i),b=YT(i),w=ZT(c),D=l.createProgram();let S,y,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Yo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Yo).join(`
`),y.length>0&&(y+=`
`)):(S=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),y=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?gt.tonemapping_pars_fragment:"",i.toneMapping!==qi?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=Jh(d),d=cv(d,i),d=uv(d,i),p=Jh(p),p=cv(p,i),p=uv(p,i),d=fv(d),p=fv(p),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=U+S+d,N=U+y+p,B=rv(l,l.VERTEX_SHADER,I),L=rv(l,l.FRAGMENT_SHADER,N);l.attachShader(D,B),l.attachShader(D,L),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(X){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(D)||"",pe=l.getShaderInfoLog(B)||"",ve=l.getShaderInfoLog(L)||"",J=q.trim(),H=pe.trim(),V=ve.trim();let ne=!0,ye=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,B,L);else{const G=lv(l,B,"vertex"),M=lv(l,L,"fragment");Rt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+J+`
`+G+`
`+M)}else J!==""?ot("WebGLProgram: Program Info Log:",J):(H===""||V==="")&&(ye=!1);ye&&(X.diagnostics={runnable:ne,programLog:J,vertexShader:{log:H,prefix:S},fragmentShader:{log:V,prefix:y}})}l.deleteShader(B),l.deleteShader(L),A=new jc(l,D),O=KT(l,D)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(D,HT)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=L,this}let dA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new pA(e),i.set(e,s)),s}}class pA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function mA(r){return r===Gs||r===qc||r===Yc}function gA(r,e,i,s,l,c){const d=new fp,p=new hA,m=new Set,h=[],x=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return m.add(A),A===0?"uv":`uv${A}`}function D(A,O,W,X,q,pe){const ve=X.fog,J=q.geometry,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,V=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ne=e.get(A.envMap||H,V),ye=ne&&ne.mapping===nu?ne.image.height:null,G=b[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const M=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,F=M!==void 0?M.length:0;let le=0;J.morphAttributes.position!==void 0&&(le=1),J.morphAttributes.normal!==void 0&&(le=2),J.morphAttributes.color!==void 0&&(le=3);let _e,Te,Z,se;if(G){const We=Xi[G];_e=We.vertexShader,Te=We.fragmentShader}else{_e=A.vertexShader,Te=A.fragmentShader;const We=p.getVertexShaderStage(A),an=p.getFragmentShaderStage(A);p.update(A,We,an),Z=We.id,se=an.id}const de=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),He=q.isInstancedMesh===!0,Le=q.isBatchedMesh===!0,lt=!!A.map,Je=!!A.matcap,ke=!!ne,st=!!A.aoMap,rt=!!A.lightMap,Ct=!!A.bumpMap&&A.wireframe===!1,Dt=!!A.normalMap,Bt=!!A.displacementMap,Ut=!!A.emissiveMap,qt=!!A.metalnessMap,nn=!!A.roughnessMap,K=A.anisotropy>0,It=A.clearcoat>0,Nt=A.dispersion>0,P=A.iridescence>0,E=A.sheen>0,ee=A.transmission>0,ce=K&&!!A.anisotropyMap,me=It&&!!A.clearcoatMap,Ce=It&&!!A.clearcoatNormalMap,Ue=It&&!!A.clearcoatRoughnessMap,ge=P&&!!A.iridescenceMap,xe=P&&!!A.iridescenceThicknessMap,Ne=E&&!!A.sheenColorMap,Ge=E&&!!A.sheenRoughnessMap,Ie=!!A.specularMap,Oe=!!A.specularColorMap,$e=!!A.specularIntensityMap,et=ee&&!!A.transmissionMap,ct=ee&&!!A.thicknessMap,Y=!!A.gradientMap,Re=!!A.alphaMap,Me=A.alphaTest>0,De=!!A.alphaHash,Fe=!!A.extensions;let Ae=qi;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const Ze={shaderID:G,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:Te,defines:A.defines,customVertexShaderID:Z,customFragmentShaderID:se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Le,batchingColor:Le&&q._colorsTexture!==null,instancing:He,instancingColor:He&&q.instanceColor!==null,instancingMorph:He&&q.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:lt,matcap:Je,envMap:ke,envMapMode:ke&&ne.mapping,envMapCubeUVHeight:ye,aoMap:st,lightMap:rt,bumpMap:Ct,normalMap:Dt,displacementMap:Bt,emissiveMap:Ut,normalMapObjectSpace:Dt&&A.normalMapType===QS,normalMapTangentSpace:Dt&&A.normalMapType===jh,packedNormalMap:Dt&&A.normalMapType===jh&&mA(A.normalMap.format),metalnessMap:qt,roughnessMap:nn,anisotropy:K,anisotropyMap:ce,clearcoat:It,clearcoatMap:me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ue,dispersion:Nt,iridescence:P,iridescenceMap:ge,iridescenceThicknessMap:xe,sheen:E,sheenColorMap:Ne,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:$e,transmission:ee,transmissionMap:et,thicknessMap:ct,gradientMap:Y,opaque:A.transparent===!1&&A.blending===Ir&&A.alphaToCoverage===!1,alphaMap:Re,alphaTest:Me,alphaHash:De,combine:A.combine,mapUv:lt&&w(A.map.channel),aoMapUv:st&&w(A.aoMap.channel),lightMapUv:rt&&w(A.lightMap.channel),bumpMapUv:Ct&&w(A.bumpMap.channel),normalMapUv:Dt&&w(A.normalMap.channel),displacementMapUv:Bt&&w(A.displacementMap.channel),emissiveMapUv:Ut&&w(A.emissiveMap.channel),metalnessMapUv:qt&&w(A.metalnessMap.channel),roughnessMapUv:nn&&w(A.roughnessMap.channel),anisotropyMapUv:ce&&w(A.anisotropyMap.channel),clearcoatMapUv:me&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(A.sheenRoughnessMap.channel),specularMapUv:Ie&&w(A.specularMap.channel),specularColorMapUv:Oe&&w(A.specularColorMap.channel),specularIntensityMapUv:$e&&w(A.specularIntensityMap.channel),transmissionMapUv:et&&w(A.transmissionMap.channel),thicknessMapUv:ct&&w(A.thicknessMap.channel),alphaMapUv:Re&&w(A.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Dt||K),vertexNormals:!!J.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(lt||Re),fog:!!ve,useFog:A.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||J.attributes.normal===void 0&&Dt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:le,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:lt&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===jt,decodeVideoTextureEmissive:Ut&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sa,flipSided:A.side===Jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Fe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&A.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function S(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const W in A.defines)O.push(W),O.push(A.defines[W]);return A.isRawShaderMaterial===!1&&(y(O,A),U(O,A),O.push(r.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function y(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.anisotropyMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.numLightProbes),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function U(A,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),A.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),A.push(d.mask)}function I(A){const O=b[A.type];let W;if(O){const X=Xi[O];W=IM.clone(X.uniforms)}else W=A.uniforms;return W}function N(A,O){let W=x.get(O);return W!==void 0?++W.usedTimes:(W=new fA(r,O,A,l),h.push(W),x.set(O,W)),W}function B(A){if(--A.usedTimes===0){const O=h.indexOf(A);h[O]=h[h.length-1],h.pop(),x.delete(A.cacheKey),A.destroy()}}function L(A){p.remove(A)}function z(){p.dispose()}return{getParameters:D,getProgramCacheKey:S,getUniforms:I,acquireProgram:N,releaseProgram:B,releaseShaderCache:L,programs:h,dispose:z}}function xA(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function vA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function hv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,w,D,S,y){let U=r[e];return U===void 0?(U={id:g.id,object:g,geometry:b,material:w,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:S,group:y},r[e]=U):(U.id=g.id,U.object=g,U.geometry=b,U.material=w,U.materialVariant=d(g),U.groupOrder=D,U.renderOrder=g.renderOrder,U.z=S,U.group=y),e++,U}function m(g,b,w,D,S,y){const U=p(g,b,w,D,S,y);w.transmission>0?s.push(U):w.transparent===!0?l.push(U):i.push(U)}function h(g,b,w,D,S,y){const U=p(g,b,w,D,S,y);w.transmission>0?s.unshift(U):w.transparent===!0?l.unshift(U):i.unshift(U)}function x(g,b,w){i.length>1&&i.sort(g||vA),s.length>1&&s.sort(b||hv),l.length>1&&l.sort(b||hv),w&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let g=e,b=r.length;g<b;g++){const w=r[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:x}}function _A(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new pv,r.set(s,[d])):l>=c.length?(d=new pv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function yA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new At};break;case"SpotLight":i={position:new te,direction:new te,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=i,i}}}function SA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let MA=0;function bA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function EA(r){const e=new yA,i=SA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new te);const l=new te,c=new tn,d=new tn;function p(h){let x=0,v=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let b=0,w=0,D=0,S=0,y=0,U=0,I=0,N=0,B=0,L=0,z=0;h.sort(bA);for(let O=0,W=h.length;O<W;O++){const X=h[O],q=X.color,pe=X.intensity,ve=X.distance;let J=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Gs?J=X.shadow.map.texture:J=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)x+=q.r*pe,v+=q.g*pe,g+=q.b*pe;else if(X.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(X.sh.coefficients[H],pe);z++}else if(X.isDirectionalLight){const H=e.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const V=X.shadow,ne=i.get(X);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,s.directionalShadow[b]=ne,s.directionalShadowMap[b]=J,s.directionalShadowMatrix[b]=X.shadow.matrix,U++}s.directional[b]=H,b++}else if(X.isSpotLight){const H=e.get(X);H.position.setFromMatrixPosition(X.matrixWorld),H.color.copy(q).multiplyScalar(pe),H.distance=ve,H.coneCos=Math.cos(X.angle),H.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),H.decay=X.decay,s.spot[D]=H;const V=X.shadow;if(X.map&&(s.spotLightMap[B]=X.map,B++,V.updateMatrices(X),X.castShadow&&L++),s.spotLightMatrix[D]=V.matrix,X.castShadow){const ne=i.get(X);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,s.spotShadow[D]=ne,s.spotShadowMap[D]=J,N++}D++}else if(X.isRectAreaLight){const H=e.get(X);H.color.copy(q).multiplyScalar(pe),H.halfWidth.set(X.width*.5,0,0),H.halfHeight.set(0,X.height*.5,0),s.rectArea[S]=H,S++}else if(X.isPointLight){const H=e.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),H.distance=X.distance,H.decay=X.decay,X.castShadow){const V=X.shadow,ne=i.get(X);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,ne.shadowCameraNear=V.camera.near,ne.shadowCameraFar=V.camera.far,s.pointShadow[w]=ne,s.pointShadowMap[w]=J,s.pointShadowMatrix[w]=X.shadow.matrix,I++}s.point[w]=H,w++}else if(X.isHemisphereLight){const H=e.get(X);H.skyColor.copy(X.color).multiplyScalar(pe),H.groundColor.copy(X.groundColor).multiplyScalar(pe),s.hemi[y]=H,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==b||A.pointLength!==w||A.spotLength!==D||A.rectAreaLength!==S||A.hemiLength!==y||A.numDirectionalShadows!==U||A.numPointShadows!==I||A.numSpotShadows!==N||A.numSpotMaps!==B||A.numLightProbes!==z)&&(s.directional.length=b,s.spot.length=D,s.rectArea.length=S,s.point.length=w,s.hemi.length=y,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=N+B-L,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,A.directionalLength=b,A.pointLength=w,A.spotLength=D,A.rectAreaLength=S,A.hemiLength=y,A.numDirectionalShadows=U,A.numPointShadows=I,A.numSpotShadows=N,A.numSpotMaps=B,A.numLightProbes=z,s.version=MA++)}function m(h,x){let v=0,g=0,b=0,w=0,D=0;const S=x.matrixWorldInverse;for(let y=0,U=h.length;y<U;y++){const I=h[y];if(I.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),v++}else if(I.isSpotLight){const N=s.spot[b];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),b++}else if(I.isRectAreaLight){const N=s.rectArea[w];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(I.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(I.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const N=s.hemi[D];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(S),D++}}}return{setup:p,setupView:m,state:s}}function mv(r){const e=new EA(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function x(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:x,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function TA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new mv(r),e.set(l,[p])):c>=d.length?(p=new mv(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CA=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],RA=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],gv=new tn,Wo=new te,nh=new te;function NA(r,e,i){let s=new dp;const l=new xt,c=new xt,d=new ln,p=new HM,m=new GM,h={},x=i.maxTextureSize,v={[ls]:Jn,[Jn]:ls,[Sa]:Sa},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:AA,fragmentShader:wA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const w=new Hn;w.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new $n(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let y=this.type;this.render=function(L,z,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===CS&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gc);const O=r.getRenderTarget(),W=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),q=r.state;q.setBlending(ba),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const pe=y!==this.type;pe&&z.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(J=>J.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,J=L.length;ve<J;ve++){const H=L[ve],V=H.shadow;if(V===void 0){ot("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const ne=V.getFrameExtents();l.multiply(ne),c.copy(V.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ne.x),l.x=c.x*ne.x,V.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ne.y),l.y=c.y*ne.y,V.mapSize.y=c.y));const ye=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ye,V.map===null||pe===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===jo){if(H.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Yi(l.x,l.y,{format:Gs,type:Ta,minFilter:zn,magFilter:zn,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new Gr(l.x,l.y,Wi),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=Aa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un}else H.isPointLight?(V.map=new $v(l.x),V.map.depthTexture=new OM(l.x,Zi)):(V.map=new Yi(l.x,l.y),V.map.depthTexture=new Gr(l.x,l.y,Zi)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=Aa,this.type===Gc?(V.map.depthTexture.compareFunction=ye?cp:lp,V.map.depthTexture.minFilter=zn,V.map.depthTexture.magFilter=zn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un);V.camera.updateProjectionMatrix()}const G=V.map.isWebGLCubeRenderTarget?6:1;for(let M=0;M<G;M++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,M),r.clear();else{M===0&&(r.setRenderTarget(V.map),r.clear());const F=V.getViewport(M);d.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),q.viewport(d)}if(H.isPointLight){const F=V.camera,le=V.matrix,_e=H.distance||F.far;_e!==F.far&&(F.far=_e,F.updateProjectionMatrix()),Wo.setFromMatrixPosition(H.matrixWorld),F.position.copy(Wo),nh.copy(F.position),nh.add(CA[M]),F.up.copy(RA[M]),F.lookAt(nh),F.updateMatrixWorld(),le.makeTranslation(-Wo.x,-Wo.y,-Wo.z),gv.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V._frustum.setFromProjectionMatrix(gv,F.coordinateSystem,F.reversedDepth)}else V.updateMatrices(H);s=V.getFrustum(),N(z,A,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===jo&&U(V,A),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(O,W,X)};function U(L,z){const A=e.update(D);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yi(l.x,l.y,{format:Gs,type:Ta})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(z,null,A,g,D,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value=L.mapSize,b.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(z,null,A,b,D,null)}function I(L,z,A,O){let W=null;const X=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(X!==void 0)W=X;else if(W=A.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=W.uuid,pe=z.uuid;let ve=h[q];ve===void 0&&(ve={},h[q]=ve);let J=ve[pe];J===void 0&&(J=W.clone(),ve[pe]=J,z.addEventListener("dispose",B)),W=J}if(W.visible=z.visible,W.wireframe=z.wireframe,O===jo?W.side=z.shadowSide!==null?z.shadowSide:z.side:W.side=z.shadowSide!==null?z.shadowSide:v[z.side],W.alphaMap=z.alphaMap,W.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,W.map=z.map,W.clipShadows=z.clipShadows,W.clippingPlanes=z.clippingPlanes,W.clipIntersection=z.clipIntersection,W.displacementMap=z.displacementMap,W.displacementScale=z.displacementScale,W.displacementBias=z.displacementBias,W.wireframeLinewidth=z.wireframeLinewidth,W.linewidth=z.linewidth,A.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const q=r.properties.get(W);q.light=A}return W}function N(L,z,A,O,W){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&W===jo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const pe=e.update(L),ve=L.material;if(Array.isArray(ve)){const J=pe.groups;for(let H=0,V=J.length;H<V;H++){const ne=J[H],ye=ve[ne.materialIndex];if(ye&&ye.visible){const G=I(L,ye,O,W);L.onBeforeShadow(r,L,z,A,pe,G,ne),r.renderBufferDirect(A,null,pe,G,L,ne),L.onAfterShadow(r,L,z,A,pe,G,ne)}}}else if(ve.visible){const J=I(L,ve,O,W);L.onBeforeShadow(r,L,z,A,pe,J,null),r.renderBufferDirect(A,null,pe,J,L,null),L.onAfterShadow(r,L,z,A,pe,J,null)}}const q=L.children;for(let pe=0,ve=q.length;pe<ve;pe++)N(q[pe],z,A,O,W)}function B(L){L.target.removeEventListener("dispose",B);for(const A in h){const O=h[A],W=L.target.uuid;W in O&&(O[W].dispose(),delete O[W])}}}function DA(r,e){function i(){let Y=!1;const Re=new ln;let Me=null;const De=new ln(0,0,0,0);return{setMask:function(Fe){Me!==Fe&&!Y&&(r.colorMask(Fe,Fe,Fe,Fe),Me=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Ae,Ze,We,an){an===!0&&(Fe*=We,Ae*=We,Ze*=We),Re.set(Fe,Ae,Ze,We),De.equals(Re)===!1&&(r.clearColor(Fe,Ae,Ze,We),De.copy(Re))},reset:function(){Y=!1,Me=null,De.set(-1,0,0,0)}}}function s(){let Y=!1,Re=!1,Me=null,De=null,Fe=null;return{setReversed:function(Ae){if(Re!==Ae){const Ze=e.get("EXT_clip_control");Ae?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Re=Ae;const We=Fe;Fe=null,this.setClear(We)}},getReversed:function(){return Re},setTest:function(Ae){Ae?de(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Ae){Me!==Ae&&!Y&&(r.depthMask(Ae),Me=Ae)},setFunc:function(Ae){if(Re&&(Ae=oM[Ae]),De!==Ae){switch(Ae){case oh:r.depthFunc(r.NEVER);break;case lh:r.depthFunc(r.ALWAYS);break;case ch:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case uh:r.depthFunc(r.EQUAL);break;case fh:r.depthFunc(r.GEQUAL);break;case dh:r.depthFunc(r.GREATER);break;case hh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=Ae}},setLocked:function(Ae){Y=Ae},setClear:function(Ae){Fe!==Ae&&(Fe=Ae,Re&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){Y=!1,Me=null,De=null,Fe=null,Re=!1}}}function l(){let Y=!1,Re=null,Me=null,De=null,Fe=null,Ae=null,Ze=null,We=null,an=null;return{setTest:function(Ht){Y||(Ht?de(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Ht){Re!==Ht&&!Y&&(r.stencilMask(Ht),Re=Ht)},setFunc:function(Ht,ei,ti){(Me!==Ht||De!==ei||Fe!==ti)&&(r.stencilFunc(Ht,ei,ti),Me=Ht,De=ei,Fe=ti)},setOp:function(Ht,ei,ti){(Ae!==Ht||Ze!==ei||We!==ti)&&(r.stencilOp(Ht,ei,ti),Ae=Ht,Ze=ei,We=ti)},setLocked:function(Ht){Y=Ht},setClear:function(Ht){an!==Ht&&(r.clearStencil(Ht),an=Ht)},reset:function(){Y=!1,Re=null,Me=null,De=null,Fe=null,Ae=null,Ze=null,We=null,an=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},v={},g={},b=new WeakMap,w=[],D=null,S=!1,y=null,U=null,I=null,N=null,B=null,L=null,z=null,A=new At(0,0,0),O=0,W=!1,X=null,q=null,pe=null,ve=null,J=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const ye=r.getParameter(r.VERSION);ye.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ye)[1]),V=ne>=1):ye.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ye)[1]),V=ne>=2);let G=null,M={};const F=r.getParameter(r.SCISSOR_BOX),le=r.getParameter(r.VIEWPORT),_e=new ln().fromArray(F),Te=new ln().fromArray(le);function Z(Y,Re,Me,De){const Fe=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(Y,Ae),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<Me;Ze++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Re+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Ae}const se={};se[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),de(r.DEPTH_TEST),d.setFunc(Fr),Ct(!1),Dt(hx),de(r.CULL_FACE),st(ba);function de(Y){x[Y]!==!0&&(r.enable(Y),x[Y]=!0)}function we(Y){x[Y]!==!1&&(r.disable(Y),x[Y]=!1)}function He(Y,Re){return g[Y]!==Re?(r.bindFramebuffer(Y,Re),g[Y]=Re,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Le(Y,Re){let Me=w,De=!1;if(Y){Me=b.get(Re),Me===void 0&&(Me=[],b.set(Re,Me));const Fe=Y.textures;if(Me.length!==Fe.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Ze=Fe.length;Ae<Ze;Ae++)Me[Ae]=r.COLOR_ATTACHMENT0+Ae;Me.length=Fe.length,De=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,De=!0);De&&r.drawBuffers(Me)}function lt(Y){return D!==Y?(r.useProgram(Y),D=Y,!0):!1}const Je={[Is]:r.FUNC_ADD,[NS]:r.FUNC_SUBTRACT,[DS]:r.FUNC_REVERSE_SUBTRACT};Je[US]=r.MIN,Je[LS]=r.MAX;const ke={[OS]:r.ZERO,[PS]:r.ONE,[IS]:r.SRC_COLOR,[sh]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[HS]:r.DST_COLOR,[BS]:r.DST_ALPHA,[zS]:r.ONE_MINUS_SRC_COLOR,[rh]:r.ONE_MINUS_SRC_ALPHA,[GS]:r.ONE_MINUS_DST_COLOR,[FS]:r.ONE_MINUS_DST_ALPHA,[kS]:r.CONSTANT_COLOR,[XS]:r.ONE_MINUS_CONSTANT_COLOR,[WS]:r.CONSTANT_ALPHA,[jS]:r.ONE_MINUS_CONSTANT_ALPHA};function st(Y,Re,Me,De,Fe,Ae,Ze,We,an,Ht){if(Y===ba){S===!0&&(we(r.BLEND),S=!1);return}if(S===!1&&(de(r.BLEND),S=!0),Y!==RS){if(Y!==y||Ht!==W){if((U!==Is||B!==Is)&&(r.blendEquation(r.FUNC_ADD),U=Is,B=Is),Ht)switch(Y){case Ir:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ah:r.blendFunc(r.ONE,r.ONE);break;case px:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ah:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case px:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mx:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",Y);break}I=null,N=null,L=null,z=null,A.set(0,0,0),O=0,y=Y,W=Ht}return}Fe=Fe||Re,Ae=Ae||Me,Ze=Ze||De,(Re!==U||Fe!==B)&&(r.blendEquationSeparate(Je[Re],Je[Fe]),U=Re,B=Fe),(Me!==I||De!==N||Ae!==L||Ze!==z)&&(r.blendFuncSeparate(ke[Me],ke[De],ke[Ae],ke[Ze]),I=Me,N=De,L=Ae,z=Ze),(We.equals(A)===!1||an!==O)&&(r.blendColor(We.r,We.g,We.b,an),A.copy(We),O=an),y=Y,W=!1}function rt(Y,Re){Y.side===Sa?we(r.CULL_FACE):de(r.CULL_FACE);let Me=Y.side===Jn;Re&&(Me=!Me),Ct(Me),Y.blending===Ir&&Y.transparent===!1?st(ba):st(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const De=Y.stencilWrite;p.setTest(De),De&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ut(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(Y){X!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),X=Y)}function Dt(Y){Y!==AS?(de(r.CULL_FACE),Y!==q&&(Y===hx?r.cullFace(r.BACK):Y===wS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),q=Y}function Bt(Y){Y!==pe&&(V&&r.lineWidth(Y),pe=Y)}function Ut(Y,Re,Me){Y?(de(r.POLYGON_OFFSET_FILL),(ve!==Re||J!==Me)&&(ve=Re,J=Me,d.getReversed()&&(Re=-Re),r.polygonOffset(Re,Me))):we(r.POLYGON_OFFSET_FILL)}function qt(Y){Y?de(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function nn(Y){Y===void 0&&(Y=r.TEXTURE0+H-1),G!==Y&&(r.activeTexture(Y),G=Y)}function K(Y,Re,Me){Me===void 0&&(G===null?Me=r.TEXTURE0+H-1:Me=G);let De=M[Me];De===void 0&&(De={type:void 0,texture:void 0},M[Me]=De),(De.type!==Y||De.texture!==Re)&&(G!==Me&&(r.activeTexture(Me),G=Me),r.bindTexture(Y,Re||se[Y]),De.type=Y,De.texture=Re)}function It(){const Y=M[G];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Nt(){try{r.compressedTexImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function E(){try{r.texSubImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function ee(){try{r.texSubImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function me(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function Ce(){try{r.texStorage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function Ue(){try{r.texStorage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function ge(){try{r.texImage2D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function xe(){try{r.texImage3D(...arguments)}catch(Y){Rt("WebGLState:",Y)}}function Ne(Y){return v[Y]!==void 0?v[Y]:r.getParameter(Y)}function Ge(Y,Re){v[Y]!==Re&&(r.pixelStorei(Y,Re),v[Y]=Re)}function Ie(Y){_e.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function Oe(Y){Te.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Te.copy(Y))}function $e(Y,Re){let Me=h.get(Re);Me===void 0&&(Me=new WeakMap,h.set(Re,Me));let De=Me.get(Y);De===void 0&&(De=r.getUniformBlockIndex(Re,Y.name),Me.set(Y,De))}function et(Y,Re){const De=h.get(Re).get(Y);m.get(Re)!==De&&(r.uniformBlockBinding(Re,De,Y.__bindingPointIndex),m.set(Re,De))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},v={},G=null,M={},g={},b=new WeakMap,w=[],D=null,S=!1,y=null,U=null,I=null,N=null,B=null,L=null,z=null,A=new At(0,0,0),O=0,W=!1,X=null,q=null,pe=null,ve=null,J=null,_e.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:de,disable:we,bindFramebuffer:He,drawBuffers:Le,useProgram:lt,setBlending:st,setMaterial:rt,setFlipSided:Ct,setCullFace:Dt,setLineWidth:Bt,setPolygonOffset:Ut,setScissorTest:qt,activeTexture:nn,bindTexture:K,unbindTexture:It,compressedTexImage2D:Nt,compressedTexImage3D:P,texImage2D:ge,texImage3D:xe,pixelStorei:Ge,getParameter:Ne,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Ie,viewport:Oe,reset:ct}}function UA(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xt,x=new WeakMap,v=new Set;let g;const b=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,E){return w?new OffscreenCanvas(P,E):Qc("canvas")}function S(P,E,ee){let ce=1;const me=Nt(P);if((me.width>ee||me.height>ee)&&(ce=ee/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ce=Math.floor(ce*me.width),Ue=Math.floor(ce*me.height);g===void 0&&(g=D(Ce,Ue));const ge=E?D(Ce,Ue):g;return ge.width=Ce,ge.height=Ue,ge.getContext("2d").drawImage(P,0,0,Ce,Ue),ot("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ce+"x"+Ue+")."),ge}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function y(P){return P.generateMipmaps}function U(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,E,ee,ce,me,Ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ue;ce&&(Ue=e.get("EXT_texture_norm16"),Ue||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===r.RED&&(ee===r.FLOAT&&(ge=r.R32F),ee===r.HALF_FLOAT&&(ge=r.R16F),ee===r.UNSIGNED_BYTE&&(ge=r.R8),ee===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),ee===r.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),E===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.R8UI),ee===r.UNSIGNED_SHORT&&(ge=r.R16UI),ee===r.UNSIGNED_INT&&(ge=r.R32UI),ee===r.BYTE&&(ge=r.R8I),ee===r.SHORT&&(ge=r.R16I),ee===r.INT&&(ge=r.R32I)),E===r.RG&&(ee===r.FLOAT&&(ge=r.RG32F),ee===r.HALF_FLOAT&&(ge=r.RG16F),ee===r.UNSIGNED_BYTE&&(ge=r.RG8),ee===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),ee===r.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.RG8UI),ee===r.UNSIGNED_SHORT&&(ge=r.RG16UI),ee===r.UNSIGNED_INT&&(ge=r.RG32UI),ee===r.BYTE&&(ge=r.RG8I),ee===r.SHORT&&(ge=r.RG16I),ee===r.INT&&(ge=r.RG32I)),E===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(ge=r.RGB16UI),ee===r.UNSIGNED_INT&&(ge=r.RGB32UI),ee===r.BYTE&&(ge=r.RGB8I),ee===r.SHORT&&(ge=r.RGB16I),ee===r.INT&&(ge=r.RGB32I)),E===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(ge=r.RGBA16UI),ee===r.UNSIGNED_INT&&(ge=r.RGBA32UI),ee===r.BYTE&&(ge=r.RGBA8I),ee===r.SHORT&&(ge=r.RGBA16I),ee===r.INT&&(ge=r.RGBA32I)),E===r.RGB&&(ee===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),ee===r.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),ee===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),ee===r.UNSIGNED_INT_10F_11F_11F_REV&&(ge=r.R11F_G11F_B10F)),E===r.RGBA){const xe=Ce?Kc:Et.getTransfer(me);ee===r.FLOAT&&(ge=r.RGBA32F),ee===r.HALF_FLOAT&&(ge=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(ge=xe===jt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),ee===r.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),ee===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function B(P,E){let ee;return P?E===null||E===Zi||E===Ko?ee=r.DEPTH24_STENCIL8:E===Wi?ee=r.DEPTH32F_STENCIL8:E===Zo&&(ee=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===Ko?ee=r.DEPTH_COMPONENT24:E===Wi?ee=r.DEPTH_COMPONENT32F:E===Zo&&(ee=r.DEPTH_COMPONENT16),ee}function L(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),O(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&v.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),X(E)}function O(P){const E=s.get(P);if(E.__webglInit===void 0)return;const ee=P.source,ce=b.get(ee);if(ce){const me=ce[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&W(P),Object.keys(ce).length===0&&b.delete(ee)}s.remove(P)}function W(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const ee=P.source,ce=b.get(ee);delete ce[E.__cacheKey],d.memory.textures--}function X(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let me=0;me<E.__webglFramebuffer[ce].length;me++)r.deleteFramebuffer(E.__webglFramebuffer[ce][me]);else r.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)r.deleteFramebuffer(E.__webglFramebuffer[ce]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=P.textures;for(let ce=0,me=ee.length;ce<me;ce++){const Ce=s.get(ee[ce]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),d.memory.textures--),s.remove(ee[ce])}s.remove(P)}let q=0;function pe(){q=0}function ve(){return q}function J(P){q=P}function H(){const P=q;return P>=l.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),q+=1,P}function V(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ne(P,E){const ee=s.get(P);if(P.isVideoTexture&&K(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ee.__version!==P.version){const ce=P.image;if(ce===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{we(ee,P,E);return}}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+E)}function ye(P,E){const ee=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){we(ee,P,E);return}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+E)}function G(P,E){const ee=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){we(ee,P,E);return}i.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+E)}function M(P,E){const ee=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&ee.__version!==P.version){He(ee,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+E)}const F={[ph]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[mh]:r.MIRRORED_REPEAT},le={[Un]:r.NEAREST,[ZS]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[Ed]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},_e={[JS]:r.NEVER,[iM]:r.ALWAYS,[$S]:r.LESS,[lp]:r.LEQUAL,[eM]:r.EQUAL,[cp]:r.GEQUAL,[tM]:r.GREATER,[nM]:r.NOTEQUAL};function Te(P,E){if(E.type===Wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Ed||E.magFilter===mc||E.magFilter===Bs||E.minFilter===zn||E.minFilter===Ed||E.minFilter===mc||E.minFilter===Bs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,F[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,F[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,F[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,le[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,le[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==mc&&E.minFilter!==Bs||E.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Z(P,E){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const ce=E.source;let me=b.get(ce);me===void 0&&(me={},b.set(ce,me));const Ce=V(E);if(Ce!==P.__cacheKey){me[Ce]===void 0&&(me[Ce]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),me[Ce].usedTimes++;const Ue=me[P.__cacheKey];Ue!==void 0&&(me[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&W(E)),P.__cacheKey=Ce,P.__webglTexture=me[Ce].texture}return ee}function se(P,E,ee){return Math.floor(Math.floor(P/ee)/E)}function de(P,E,ee,ce){const Ce=P.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,ee,ce,E.data);else{Ce.sort((Ge,Ie)=>Ge.start-Ie.start);let Ue=0;for(let Ge=1;Ge<Ce.length;Ge++){const Ie=Ce[Ue],Oe=Ce[Ge],$e=Ie.start+Ie.count,et=se(Oe.start,E.width,4),ct=se(Ie.start,E.width,4);Oe.start<=$e+1&&et===ct&&se(Oe.start+Oe.count-1,E.width,4)===et?Ie.count=Math.max(Ie.count,Oe.start+Oe.count-Ie.start):(++Ue,Ce[Ue]=Oe)}Ce.length=Ue+1;const ge=i.getParameter(r.UNPACK_ROW_LENGTH),xe=i.getParameter(r.UNPACK_SKIP_PIXELS),Ne=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,Ie=Ce.length;Ge<Ie;Ge++){const Oe=Ce[Ge],$e=Math.floor(Oe.start/4),et=Math.ceil(Oe.count/4),ct=$e%E.width,Y=Math.floor($e/E.width),Re=et,Me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,ct,Y,Re,Me,ee,ce,E.data)}P.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ge),i.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function we(P,E,ee){let ce=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=r.TEXTURE_3D);const me=Z(P,E),Ce=E.source;i.bindTexture(ce,P.__webglTexture,r.TEXTURE0+ee);const Ue=s.get(Ce);if(Ce.version!==Ue.__version||me===!0){if(i.activeTexture(r.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Me=Et.getPrimaries(Et.workingColorSpace),De=E.colorSpace===rs?null:Et.getPrimaries(E.colorSpace),Fe=E.colorSpace===rs||Me===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=S(E.image,!1,l.maxTextureSize);xe=It(E,xe);const Ne=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let Ie=N(E.internalFormat,Ne,Ge,E.normalized,E.colorSpace,E.isVideoTexture);Te(ce,E);let Oe;const $e=E.mipmaps,et=E.isVideoTexture!==!0,ct=Ue.__version===void 0||me===!0,Y=Ce.dataReady,Re=L(E,xe);if(E.isDepthTexture)Ie=B(E.format===Fs,E.type),ct&&(et?i.texStorage2D(r.TEXTURE_2D,1,Ie,xe.width,xe.height):i.texImage2D(r.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Ne,Ge,null));else if(E.isDataTexture)if($e.length>0){et&&ct&&i.texStorage2D(r.TEXTURE_2D,Re,Ie,$e[0].width,$e[0].height);for(let Me=0,De=$e.length;Me<De;Me++)Oe=$e[Me],et?Y&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ne,Ge,Oe.data):i.texImage2D(r.TEXTURE_2D,Me,Ie,Oe.width,Oe.height,0,Ne,Ge,Oe.data);E.generateMipmaps=!1}else et?(ct&&i.texStorage2D(r.TEXTURE_2D,Re,Ie,xe.width,xe.height),Y&&de(E,xe,Ne,Ge)):i.texImage2D(r.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Ne,Ge,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ie,$e[0].width,$e[0].height,xe.depth);for(let Me=0,De=$e.length;Me<De;Me++)if(Oe=$e[Me],E.format!==Oi)if(Ne!==null)if(et){if(Y)if(E.layerUpdates.size>0){const Fe=qx(Oe.width,Oe.height,E.format,E.type);for(const Ae of E.layerUpdates){const Ze=Oe.data.subarray(Ae*Fe/Oe.data.BYTES_PER_ELEMENT,(Ae+1)*Fe/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,Ae,Oe.width,Oe.height,1,Ne,Ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,xe.depth,Ne,Oe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Ie,Oe.width,Oe.height,xe.depth,0,Oe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,xe.depth,Ne,Ge,Oe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Ie,Oe.width,Oe.height,xe.depth,0,Ne,Ge,Oe.data)}else{et&&ct&&i.texStorage2D(r.TEXTURE_2D,Re,Ie,$e[0].width,$e[0].height);for(let Me=0,De=$e.length;Me<De;Me++)Oe=$e[Me],E.format!==Oi?Ne!==null?et?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ne,Oe.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Ie,Oe.width,Oe.height,0,Oe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Y&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ne,Ge,Oe.data):i.texImage2D(r.TEXTURE_2D,Me,Ie,Oe.width,Oe.height,0,Ne,Ge,Oe.data)}else if(E.isDataArrayTexture)if(et){if(ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ie,xe.width,xe.height,xe.depth),Y)if(E.layerUpdates.size>0){const Me=qx(xe.width,xe.height,E.format,E.type);for(const De of E.layerUpdates){const Fe=xe.data.subarray(De*Me/xe.data.BYTES_PER_ELEMENT,(De+1)*Me/xe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,De,xe.width,xe.height,1,Ne,Ge,Fe)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Ge,xe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,xe.width,xe.height,xe.depth,0,Ne,Ge,xe.data);else if(E.isData3DTexture)et?(ct&&i.texStorage3D(r.TEXTURE_3D,Re,Ie,xe.width,xe.height,xe.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Ge,xe.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,xe.width,xe.height,xe.depth,0,Ne,Ge,xe.data);else if(E.isFramebufferTexture){if(ct)if(et)i.texStorage2D(r.TEXTURE_2D,Re,Ie,xe.width,xe.height);else{let Me=xe.width,De=xe.height;for(let Fe=0;Fe<Re;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Ie,Me,De,0,Ne,Ge,null),Me>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),xe.parentNode!==Me){Me.appendChild(xe),v.add(E),Me.onpaint=De=>{const Fe=De.changedElements;for(const Ae of v)Fe.includes(Ae.image)&&(Ae.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,xe);else{const Fe=r.RGBA,Ae=r.RGBA,Ze=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Fe,Ae,Ze,xe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&ct){const Me=Nt($e[0]);i.texStorage2D(r.TEXTURE_2D,Re,Ie,Me.width,Me.height)}for(let Me=0,De=$e.length;Me<De;Me++)Oe=$e[Me],et?Y&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ne,Ge,Oe):i.texImage2D(r.TEXTURE_2D,Me,Ie,Ne,Ge,Oe);E.generateMipmaps=!1}else if(et){if(ct){const Me=Nt(xe);i.texStorage2D(r.TEXTURE_2D,Re,Ie,Me.width,Me.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ge,xe)}else i.texImage2D(r.TEXTURE_2D,0,Ie,Ne,Ge,xe);y(E)&&U(ce),Ue.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function He(P,E,ee){if(E.image.length!==6)return;const ce=Z(P,E),me=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+ee);const Ce=s.get(me);if(me.version!==Ce.__version||ce===!0){i.activeTexture(r.TEXTURE0+ee);const Ue=Et.getPrimaries(Et.workingColorSpace),ge=E.colorSpace===rs?null:Et.getPrimaries(E.colorSpace),xe=E.colorSpace===rs||Ue===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let Ae=0;Ae<6;Ae++)!Ne&&!Ge?Ie[Ae]=S(E.image[Ae],!0,l.maxCubemapSize):Ie[Ae]=Ge?E.image[Ae].image:E.image[Ae],Ie[Ae]=It(E,Ie[Ae]);const Oe=Ie[0],$e=c.convert(E.format,E.colorSpace),et=c.convert(E.type),ct=N(E.internalFormat,$e,et,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,Re=Ce.__version===void 0||ce===!0,Me=me.dataReady;let De=L(E,Oe);Te(r.TEXTURE_CUBE_MAP,E);let Fe;if(Ne){Y&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,De,ct,Oe.width,Oe.height);for(let Ae=0;Ae<6;Ae++){Fe=Ie[Ae].mipmaps;for(let Ze=0;Ze<Fe.length;Ze++){const We=Fe[Ze];E.format!==Oi?$e!==null?Y?Me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,We.width,We.height,$e,We.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,ct,We.width,We.height,0,We.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,We.width,We.height,$e,et,We.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,ct,We.width,We.height,0,$e,et,We.data)}}}else{if(Fe=E.mipmaps,Y&&Re){Fe.length>0&&De++;const Ae=Nt(Ie[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,De,ct,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ge){Y?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ie[Ae].width,Ie[Ae].height,$e,et,Ie[Ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ct,Ie[Ae].width,Ie[Ae].height,0,$e,et,Ie[Ae].data);for(let Ze=0;Ze<Fe.length;Ze++){const an=Fe[Ze].image[Ae].image;Y?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,an.width,an.height,$e,et,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,ct,an.width,an.height,0,$e,et,an.data)}}else{Y?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,$e,et,Ie[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ct,$e,et,Ie[Ae]);for(let Ze=0;Ze<Fe.length;Ze++){const We=Fe[Ze];Y?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,$e,et,We.image[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,ct,$e,et,We.image[Ae])}}}y(E)&&U(r.TEXTURE_CUBE_MAP),Ce.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Le(P,E,ee,ce,me,Ce){const Ue=c.convert(ee.format,ee.colorSpace),ge=c.convert(ee.type),xe=N(ee.internalFormat,Ue,ge,ee.normalized,ee.colorSpace),Ne=s.get(E),Ge=s.get(ee);if(Ge.__renderTarget=E,!Ne.__hasExternalTextures){const Ie=Math.max(1,E.width>>Ce),Oe=Math.max(1,E.height>>Ce);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?i.texImage3D(me,Ce,xe,Ie,Oe,E.depth,0,Ue,ge,null):i.texImage2D(me,Ce,xe,Ie,Oe,0,Ue,ge,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),nn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,me,Ge.__webglTexture,0,qt(E)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,me,Ge.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(P,E,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const ce=E.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,Ce=B(E.stencilBuffer,me),Ue=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;nn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(E),Ce,E.width,E.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(E),Ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,P)}else{const ce=E.textures;for(let me=0;me<ce.length;me++){const Ce=ce[me],Ue=c.convert(Ce.format,Ce.colorSpace),ge=c.convert(Ce.type),xe=N(Ce.internalFormat,Ue,ge,Ce.normalized,Ce.colorSpace);nn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(E),xe,E.width,E.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(E),xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Je(P,E,ee){const ce=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=s.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),me.__webglTexture===void 0){me.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),Te(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ne=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let Ie;E.depthTexture.format===Aa?Ie=r.DEPTH_COMPONENT24:E.depthTexture.format===Fs&&(Ie=r.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ie,E.width,E.height,0,Ne,Ge,null)}}else ne(E.depthTexture,0);const Ce=me.__webglTexture,Ue=qt(E),ge=ce?r.TEXTURE_CUBE_MAP_POSITIVE_X+ee:r.TEXTURE_2D,xe=E.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)nn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,ge,Ce,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,xe,ge,Ce,0);else if(E.depthTexture.format===Fs)nn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,ge,Ce,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,xe,ge,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(P){const E=s.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ce=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ce}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let ce=0;ce<6;ce++)Je(E.__webglFramebuffer[ce],P,ce);else{const ce=P.texture.mipmaps;ce&&ce.length>0?Je(E.__webglFramebuffer[0],P,0):Je(E.__webglFramebuffer,P,0)}else if(ee){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=r.createRenderbuffer(),lt(E.__webglDepthbuffer[ce],P,!1);else{const me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,Ce)}}else{const ce=P.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),lt(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function st(P,E,ee){const ce=s.get(P);E!==void 0&&Le(ce.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ke(P)}function rt(P){const E=P.texture,ee=s.get(P),ce=s.get(E);P.addEventListener("dispose",A);const me=P.textures,Ce=P.isWebGLCubeRenderTarget===!0,Ue=me.length>1;if(Ue||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=E.version,d.memory.textures++),Ce){ee.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[ge]=[];for(let xe=0;xe<E.mipmaps.length;xe++)ee.__webglFramebuffer[ge][xe]=r.createFramebuffer()}else ee.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)ee.__webglFramebuffer[ge]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let ge=0,xe=me.length;ge<xe;ge++){const Ne=s.get(me[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&nn(P)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const xe=me[ge];ee.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[ge]);const Ne=c.convert(xe.format,xe.colorSpace),Ge=c.convert(xe.type),Ie=N(xe.internalFormat,Ne,Ge,xe.normalized,xe.colorSpace,P.isXRRenderTarget===!0),Oe=qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Ie,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(ee.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),Te(r.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Le(ee.__webglFramebuffer[ge][xe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Le(ee.__webglFramebuffer[ge],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(E)&&U(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ge=0,xe=me.length;ge<xe;ge++){const Ne=me[ge],Ge=s.get(Ne);let Ie=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ie=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ie,Ge.__webglTexture),Te(Ie,Ne),Le(ee.__webglFramebuffer,P,Ne,r.COLOR_ATTACHMENT0+ge,Ie,0),y(Ne)&&U(Ie)}i.unbindTexture()}else{let ge=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ge,ce.__webglTexture),Te(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Le(ee.__webglFramebuffer[xe],P,E,r.COLOR_ATTACHMENT0,ge,xe);else Le(ee.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ge,0);y(E)&&U(ge),i.unbindTexture()}P.depthBuffer&&ke(P)}function Ct(P){const E=P.textures;for(let ee=0,ce=E.length;ee<ce;ee++){const me=E[ee];if(y(me)){const Ce=I(P),Ue=s.get(me).__webglTexture;i.bindTexture(Ce,Ue),U(Ce),i.unbindTexture()}}}const Dt=[],Bt=[];function Ut(P){if(P.samples>0){if(nn(P)===!1){const E=P.textures,ee=P.width,ce=P.height;let me=r.COLOR_BUFFER_BIT;const Ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=s.get(P),ge=E.length>1;if(ge)for(let Ne=0;Ne<E.length;Ne++)i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const xe=P.texture.mipmaps;xe&&xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const Ge=s.get(E[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,me,r.NEAREST),m===!0&&(Dt.length=0,Bt.length=0,Dt.push(r.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Dt.push(Ce),Bt.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<E.length;Ne++){i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const Ge=s.get(E[Ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,Ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function qt(P){return Math.min(l.maxSamples,P.samples)}function nn(P){const E=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(P){const E=d.render.frame;x.get(P)!==E&&(x.set(P,E),P.update())}function It(P,E){const ee=P.colorSpace,ce=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==Zc&&ee!==rs&&(Et.getTransfer(ee)===jt?(ce!==Oi||me!==hi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",ee)),E}function Nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=pe,this.getTextureUnits=ve,this.setTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=ye,this.setTexture3D=G,this.setTextureCube=M,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function LA(r,e){function i(s,l=rs){let c;const d=Et.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===ip)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Nv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Dv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Cv)return r.BYTE;if(s===Rv)return r.SHORT;if(s===Zo)return r.UNSIGNED_SHORT;if(s===np)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===Uv)return r.ALPHA;if(s===Lv)return r.RGB;if(s===Oi)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===Ov)return r.RED;if(s===sp)return r.RED_INTEGER;if(s===Gs)return r.RG;if(s===rp)return r.RG_INTEGER;if(s===op)return r.RGBA_INTEGER;if(s===Vc||s===kc||s===Xc||s===Wc)if(d===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gh||s===xh||s===vh||s===_h)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yh||s===Sh||s===Mh||s===bh||s===Eh||s===qc||s===Th)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===yh||s===Sh)return d===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Mh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===bh)return c.COMPRESSED_R11_EAC;if(s===Eh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===qc)return c.COMPRESSED_RG11_EAC;if(s===Th)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ah||s===wh||s===Ch||s===Rh||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===Ph||s===Ih||s===zh||s===Bh||s===Fh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ah)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ch)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ih)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hh||s===Gh||s===Vh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Hh)return d===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kh||s===Xh||s===Yc||s===Wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===kh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Xh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Xv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ki({vertexShader:OA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends Vs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,v=null,g=null,b=null,w=null;const D=typeof XRWebGLBinding<"u",S=new IA,y={},U=i.getContextAttributes();let I=null,N=null;const B=[],L=[],z=new xt;let A=null;const O=new Qn;O.viewport=new ln;const W=new Qn;W.viewport=new ln;const X=[O,W],q=new WM;let pe=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=B[Z];return se===void 0&&(se=new Ud,B[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=B[Z];return se===void 0&&(se=new Ud,B[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=B[Z];return se===void 0&&(se=new Ud,B[Z]=se),se.getHandSpace()};function J(Z){const se=L.indexOf(Z.inputSource);if(se===-1)return;const de=B[se];de!==void 0&&(de.update(Z.inputSource,Z.frame,h||d),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",V);for(let Z=0;Z<B.length;Z++){const se=L[Z];se!==null&&(L[Z]=null,B[Z].disconnect(se))}pe=null,ve=null,S.reset();for(const Z in y)delete y[Z];e.setRenderTarget(I),b=null,g=null,v=null,l=null,N=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",H),l.addEventListener("inputsourceschange",V),U.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,we=null,He=null;U.depth&&(He=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,de=U.stencil?Fs:Aa,we=U.stencil?Ko:Zi);const Le={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Le),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Yi(g.textureWidth,g.textureHeight,{format:Oi,type:hi,depthTexture:new Gr(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const de={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,de),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new Yi(b.framebufferWidth,b.framebufferHeight,{format:Oi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Te.setContext(l),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(Z){for(let se=0;se<Z.removed.length;se++){const de=Z.removed[se],we=L.indexOf(de);we>=0&&(L[we]=null,B[we].disconnect(de))}for(let se=0;se<Z.added.length;se++){const de=Z.added[se];let we=L.indexOf(de);if(we===-1){for(let Le=0;Le<B.length;Le++)if(Le>=L.length){L.push(de),we=Le;break}else if(L[Le]===null){L[Le]=de,we=Le;break}if(we===-1)break}const He=B[we];He&&He.connect(de)}}const ne=new te,ye=new te;function G(Z,se,de){ne.setFromMatrixPosition(se.matrixWorld),ye.setFromMatrixPosition(de.matrixWorld);const we=ne.distanceTo(ye),He=se.projectionMatrix.elements,Le=de.projectionMatrix.elements,lt=He[14]/(He[10]-1),Je=He[14]/(He[10]+1),ke=(He[9]+1)/He[5],st=(He[9]-1)/He[5],rt=(He[8]-1)/He[0],Ct=(Le[8]+1)/Le[0],Dt=lt*rt,Bt=lt*Ct,Ut=we/(-rt+Ct),qt=Ut*-rt;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qt),Z.translateZ(Ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),He[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const nn=lt+Ut,K=Je+Ut,It=Dt-qt,Nt=Bt+(we-qt),P=ke*Je/K*nn,E=st*Je/K*nn;Z.projectionMatrix.makePerspective(It,Nt,P,E,nn,K),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function M(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let se=Z.near,de=Z.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(de=S.depthFar)),q.near=W.near=O.near=se,q.far=W.far=O.far=de,(pe!==q.near||ve!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),pe=q.near,ve=q.far),q.layers.mask=Z.layers.mask|6,O.layers.mask=q.layers.mask&-5,W.layers.mask=q.layers.mask&-3;const we=Z.parent,He=q.cameras;M(q,we);for(let Le=0;Le<He.length;Le++)M(He[Le],we);He.length===2?G(q,O,W):q.projectionMatrix.copy(O.projectionMatrix),F(Z,q,we)};function F(Z,se,de){de===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(Z){return y[Z]};let le=null;function _e(Z,se){if(x=se.getViewerPose(h||d),w=se,x!==null){const de=x.views;b!==null&&(e.setRenderTargetFramebuffer(N,b.framebuffer),e.setRenderTarget(N));let we=!1;de.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let Je=0;Je<de.length;Je++){const ke=de[Je];let st=null;if(b!==null)st=b.getViewport(ke);else{const Ct=v.getViewSubImage(g,ke);st=Ct.viewport,Je===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(N))}let rt=X[Je];rt===void 0&&(rt=new Qn,rt.layers.enable(Je),rt.viewport=new ln,X[Je]=rt),rt.matrix.fromArray(ke.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ke.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(st.x,st.y,st.width,st.height),Je===0&&(q.matrix.copy(rt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(rt)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const Je=v.getDepthInformation(de[0]);Je&&Je.isValid&&Je.texture&&S.init(Je,l.renderState)}if(He&&He.includes("camera-access")&&D){e.state.unbindTexture(),v=s.getBinding();for(let Je=0;Je<de.length;Je++){const ke=de[Je].camera;if(ke){let st=y[ke];st||(st=new Xv,y[ke]=st);const rt=v.getCameraImage(ke);st.sourceTexture=rt}}}}for(let de=0;de<B.length;de++){const we=L[de],He=B[de];we!==null&&He!==void 0&&He.update(we,se,h||d)}le&&le(Z,se),se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:se}),w=null}const Te=new Qv;Te.setAnimationLoop(_e),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}}const BA=new tn,a_=new ft;a_.set(-1,0,0,0,1,0,0,0,1);function FA(r,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,Wv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,U,I,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),v(S,y)):y.isMeshPhongMaterial?(c(S,y),x(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&b(S,y,N)):y.isMeshMatcapMaterial?(c(S,y),w(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),D(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,U,I):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const U=e.get(y),I=U.envMap,N=U.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(N)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(a_),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,U,I){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*U,S.scale.value=I*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function x(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function b(S,y,U){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,y){y.matcap&&(S.matcap.value=y.matcap)}function D(S,y){const U=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function HA(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,B){const L=B.program;s.uniformBlockBinding(N,L)}function h(N,B){let L=l[N.id];L===void 0&&(S(N),L=x(N),l[N.id]=L,N.addEventListener("dispose",U));const z=B.program;s.updateUBOMapping(N,z);const A=e.render.frame;c[N.id]!==A&&(g(N),c[N.id]=A)}function x(N){const B=v();N.__bindingPointIndex=B;const L=r.createBuffer(),z=N.__size,A=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,z,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,B,L),L}function v(){for(let N=0;N<p;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const B=l[N.id],L=N.uniforms,z=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,B);for(let A=0,O=L.length;A<O;A++){const W=L[A];if(Array.isArray(W))for(let X=0,q=W.length;X<q;X++)b(W[X],A,X,z);else b(W,A,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(N,B,L,z){if(D(N,B,L,z)===!0){const A=N.__offset,O=N.value;if(Array.isArray(O)){let W=0;for(let X=0;X<O.length;X++){const q=O[X],pe=y(q);w(q,N.__data,W),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(W+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(O,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,N.__data)}}function w(N,B,L){typeof N=="number"||typeof N=="boolean"?B[0]=N:N.isMatrix3?(B[0]=N.elements[0],B[1]=N.elements[1],B[2]=N.elements[2],B[3]=0,B[4]=N.elements[3],B[5]=N.elements[4],B[6]=N.elements[5],B[7]=0,B[8]=N.elements[6],B[9]=N.elements[7],B[10]=N.elements[8],B[11]=0):ArrayBuffer.isView(N)?B.set(new N.constructor(N.buffer,N.byteOffset,B.length)):N.toArray(B,L)}function D(N,B,L,z){const A=N.value,O=B+"_"+L;if(z[O]===void 0)return typeof A=="number"||typeof A=="boolean"?z[O]=A:ArrayBuffer.isView(A)?z[O]=A.slice():z[O]=A.clone(),!0;{const W=z[O];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return z[O]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(W.equals(A)===!1)return W.copy(A),!0}}return!1}function S(N){const B=N.uniforms;let L=0;const z=16;for(let O=0,W=B.length;O<W;O++){const X=Array.isArray(B[O])?B[O]:[B[O]];for(let q=0,pe=X.length;q<pe;q++){const ve=X[q],J=Array.isArray(ve.value)?ve.value:[ve.value];for(let H=0,V=J.length;H<V;H++){const ne=J[H],ye=y(ne),G=L%z,M=G%ye.boundary,F=G+M;L+=M,F!==0&&z-F<ye.storage&&(L+=z-F),ve.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=L,L+=ye.storage}}}const A=L%z;return A>0&&(L+=z-A),N.__size=L,N.__cache={},this}function y(N){const B={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(B.boundary=4,B.storage=4):N.isVector2?(B.boundary=8,B.storage=8):N.isVector3||N.isColor?(B.boundary=16,B.storage=12):N.isVector4?(B.boundary=16,B.storage=16):N.isMatrix3?(B.boundary=48,B.storage=48):N.isMatrix4?(B.boundary=64,B.storage=64):N.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(B.boundary=16,B.storage=N.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",N),B}function U(N){const B=N.target;B.removeEventListener("dispose",U);const L=d.indexOf(B.__bindingPointIndex);d.splice(L,1),r.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function I(){for(const N in l)r.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:h,dispose:I}}const GA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function VA(){return ki===null&&(ki=new wM(GA,16,16,Gs,Ta),ki.name="DFG_LUT",ki.minFilter=zn,ki.magFilter=zn,ki.wrapS=Ma,ki.wrapT=Ma,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class s_{constructor(e={}){const{canvas:i=sM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:b=hi}=e;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=d;const D=b,S=new Set([op,rp,sp]),y=new Set([hi,Zi,Zo,Ko,ip,ap]),U=new Uint32Array(4),I=new Int32Array(4),N=new te;let B=null,L=null;const z=[],A=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let X=!1,q=null,pe=null,ve=null,J=null;this._outputColorSpace=Ei;let H=0,V=0,ne=null,ye=-1,G=null;const M=new ln,F=new ln;let le=null;const _e=new At(0);let Te=0,Z=i.width,se=i.height,de=1,we=null,He=null;const Le=new ln(0,0,Z,se),lt=new ln(0,0,Z,se);let Je=!1;const ke=new dp;let st=!1,rt=!1;const Ct=new tn,Dt=new te,Bt=new ln,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function nn(){return ne===null?de:1}let K=s;function It(C,Q){return i.getContext(C,Q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",an,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",ei,!1),K===null){const Q="webgl2";if(K=It(Q,C),K===null)throw It(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Rt("WebGLRenderer: "+C.message),C}let Nt,P,E,ee,ce,me,Ce,Ue,ge,xe,Ne,Ge,Ie,Oe,$e,et,ct,Y,Re,Me,De,Fe,Ae;function Ze(){Nt=new VE(K),Nt.init(),De=new LA(K,Nt),P=new OE(K,Nt,e,De),E=new DA(K,Nt),P.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),pe=K.createFramebuffer(),ve=K.createFramebuffer(),J=K.createFramebuffer(),ee=new WE(K),ce=new xA,me=new UA(K,Nt,E,ce,P,De,ee),Ce=new GE(W),Ue=new ZM(K),Fe=new UE(K,Ue),ge=new kE(K,Ue,ee,Fe),xe=new qE(K,ge,Ue,Fe,ee),Y=new jE(K,P,me),$e=new PE(ce),Ne=new gA(W,Ce,Nt,P,Fe,$e),Ge=new FA(W,ce),Ie=new _A,Oe=new TA(Nt),ct=new DE(W,Ce,E,xe,w,m),et=new NA(W,xe,P),Ae=new HA(K,ee,P,E),Re=new LE(K,Nt,ee),Me=new XE(K,Nt,ee),ee.programs=Ne.programs,W.capabilities=P,W.extensions=Nt,W.properties=ce,W.renderLists=Ie,W.shadowMap=et,W.state=E,W.info=ee}Ze(),D!==hi&&(O=new ZE(D,i.width,i.height,p,l,c));const We=new zA(W,K);this.xr=We,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(Z,se,!1))},this.getSize=function(C){return C.set(Z,se)},this.setSize=function(C,Q,ue=!0){if(We.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,se=Q,i.width=Math.floor(C*de),i.height=Math.floor(Q*de),ue===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(Z*de,se*de).floor()},this.setDrawingBufferSize=function(C,Q,ue){Z=C,se=Q,de=ue,i.width=Math.floor(C*ue),i.height=Math.floor(Q*ue),this.setViewport(0,0,C,Q)},this.setEffects=function(C){if(D===hi){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Q=0;Q<C.length;Q++)if(C[Q].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(Le)},this.setViewport=function(C,Q,ue,re){C.isVector4?Le.set(C.x,C.y,C.z,C.w):Le.set(C,Q,ue,re),E.viewport(M.copy(Le).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(lt)},this.setScissor=function(C,Q,ue,re){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,Q,ue,re),E.scissor(F.copy(lt).multiplyScalar(de).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(C){E.setScissorTest(Je=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){He=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,ue=!0){let re=0;if(C){let oe=!1;if(ne!==null){const ze=ne.texture.format;oe=S.has(ze)}if(oe){const ze=ne.texture.type,Xe=y.has(ze),Pe=ct.getClearColor(),qe=ct.getClearAlpha(),je=Pe.r,tt=Pe.g,ht=Pe.b;Xe?(U[0]=je,U[1]=tt,U[2]=ht,U[3]=qe,K.clearBufferuiv(K.COLOR,0,U)):(I[0]=je,I[1]=tt,I[2]=ht,I[3]=qe,K.clearBufferiv(K.COLOR,0,I))}else re|=K.COLOR_BUFFER_BIT}Q&&(re|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&K.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){i.removeEventListener("webglcontextlost",an,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),ct.dispose(),Ie.dispose(),Oe.dispose(),ce.dispose(),Ce.dispose(),xe.dispose(),Fe.dispose(),Ae.dispose(),Ne.dispose(),We.dispose(),We.removeEventListener("sessionstart",hn),We.removeEventListener("sessionend",wn),kn.stop()};function an(C){C.preventDefault(),yx("WebGLRenderer: Context Lost."),X=!0}function Ht(){yx("WebGLRenderer: Context Restored."),X=!1;const C=ee.autoReset,Q=et.enabled,ue=et.autoUpdate,re=et.needsUpdate,oe=et.type;Ze(),ee.autoReset=C,et.enabled=Q,et.autoUpdate=ue,et.needsUpdate=re,et.type=oe}function ei(C){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ti(C){const Q=C.target;Q.removeEventListener("dispose",ti),Wr(Q)}function Wr(C){jr(C),ce.remove(C)}function jr(C){const Q=ce.get(C).programs;Q!==void 0&&(Q.forEach(function(ue){Ne.releaseProgram(ue)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ue,re,oe,ze){Q===null&&(Q=Ut);const Xe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Pe=Ra(C,Q,ue,re,oe);E.setMaterial(re,Xe);let qe=ue.index,je=1;if(re.wireframe===!0){if(qe=ge.getWireframeAttribute(ue),qe===void 0)return;je=2}const tt=ue.drawRange,ht=ue.attributes.position;let Qe=tt.start*je,Lt=(tt.start+tt.count)*je;ze!==null&&(Qe=Math.max(Qe,ze.start*je),Lt=Math.min(Lt,(ze.start+ze.count)*je)),qe!==null?(Qe=Math.max(Qe,0),Lt=Math.min(Lt,qe.count)):ht!=null&&(Qe=Math.max(Qe,0),Lt=Math.min(Lt,ht.count));const sn=Lt-Qe;if(sn<0||sn===1/0)return;Fe.setup(oe,re,Pe,ue,qe);let Qt,Gt=Re;if(qe!==null&&(Qt=Ue.get(qe),Gt=Me,Gt.setIndex(Qt)),oe.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*nn()),Gt.setMode(K.LINES)):Gt.setMode(K.TRIANGLES);else if(oe.isLine){let Vt=re.linewidth;Vt===void 0&&(Vt=1),E.setLineWidth(Vt*nn()),oe.isLineSegments?Gt.setMode(K.LINES):oe.isLineLoop?Gt.setMode(K.LINE_LOOP):Gt.setMode(K.LINE_STRIP)}else oe.isPoints?Gt.setMode(K.POINTS):oe.isSprite&&Gt.setMode(K.TRIANGLES);if(oe.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Vt=oe._multiDrawStarts,Ve=oe._multiDrawCounts,Ln=oe._multiDrawCount,vt=qe?Ue.get(qe).bytesPerElement:1,yn=ce.get(re).currentProgram.getUniforms();for(let ni=0;ni<Ln;ni++)yn.setValue(K,"_gl_DrawID",ni),Gt.render(Vt[ni]/vt,Ve[ni])}else if(oe.isInstancedMesh)Gt.renderInstances(Qe,sn,oe.count);else if(ue.isInstancedBufferGeometry){const Vt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ve=Math.min(ue.instanceCount,Vt);Gt.renderInstances(Qe,sn,Ve)}else Gt.render(Qe,sn)};function qr(C,Q,ue){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,Ca(C,Q,ue),C.side=ls,C.needsUpdate=!0,Ca(C,Q,ue),C.side=Sa):Ca(C,Q,ue)}this.compile=function(C,Q,ue=null){ue===null&&(ue=C),L=Oe.get(ue),L.init(Q),A.push(L),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),C!==ue&&C.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),L.setupLights();const re=new Set;return C.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const ze=oe.material;if(ze)if(Array.isArray(ze))for(let Xe=0;Xe<ze.length;Xe++){const Pe=ze[Xe];qr(Pe,ue,oe),re.add(Pe)}else qr(ze,ue,oe),re.add(ze)}),L=A.pop(),re},this.compileAsync=function(C,Q,ue=null){const re=this.compile(C,Q,ue);return new Promise(oe=>{function ze(){if(re.forEach(function(Xe){ce.get(Xe).currentProgram.isReady()&&re.delete(Xe)}),re.size===0){oe(C);return}setTimeout(ze,10)}Nt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Xs=null;function Ii(C){Xs&&Xs(C)}function hn(){kn.stop()}function wn(){kn.start()}const kn=new Qv;kn.setAnimationLoop(Ii),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){Xs=C,We.setAnimationLoop(C),C===null?kn.stop():kn.start()},We.addEventListener("sessionstart",hn),We.addEventListener("sessionend",wn),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;q!==null&&q.renderStart(C,Q);const ue=We.enabled===!0&&We.isPresenting===!0,re=O!==null&&(ne===null||ue)&&O.begin(W,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Q),Q=We.getCamera()),C.isScene===!0&&C.onBeforeRender(W,C,Q,ne),L=Oe.get(C,A.length),L.init(Q),L.state.textureUnits=me.getTextureUnits(),A.push(L),Ct.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ke.setFromProjectionMatrix(Ct,ji,Q.reversedDepth),rt=this.localClippingEnabled,st=$e.init(this.clippingPlanes,rt),B=Ie.get(C,z.length),B.init(),z.push(B),We.enabled===!0&&We.isPresenting===!0){const Xe=W.xr.getDepthSensingMesh();Xe!==null&&fs(Xe,Q,-1/0,W.sortObjects)}fs(C,Q,0,W.sortObjects),B.finish(),W.sortObjects===!0&&B.sort(we,He,Q.reversedDepth),qt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,qt&&ct.addToRenderList(B,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&$e.beginShadows();const oe=L.state.shadowsArray;if(et.render(oe,C,Q),st===!0&&$e.endShadows(),(re&&O.hasRenderPass())===!1){const Xe=B.opaque,Pe=B.transmissive;if(L.setupLights(),Q.isArrayCamera){const qe=Q.cameras;if(Pe.length>0)for(let je=0,tt=qe.length;je<tt;je++){const ht=qe[je];sl(Xe,Pe,C,ht)}qt&&ct.render(C);for(let je=0,tt=qe.length;je<tt;je++){const ht=qe[je];al(B,C,ht,ht.viewport)}}else Pe.length>0&&sl(Xe,Pe,C,Q),qt&&ct.render(C),al(B,C,Q)}ne!==null&&V===0&&(me.updateMultisampleRenderTarget(ne),me.updateRenderTargetMipmap(ne)),re&&O.end(W),C.isScene===!0&&C.onAfterRender(W,C,Q),Fe.resetDefaultState(),ye=-1,G=null,A.pop(),A.length>0?(L=A[A.length-1],me.setTextureUnits(L.state.textureUnits),st===!0&&$e.setGlobalState(W.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?B=z[z.length-1]:B=null,q!==null&&q.renderEnd()};function fs(C,Q,ue,re){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){re&&Bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const Xe=xe.update(C),Pe=C.material;Pe.visible&&B.push(C,Xe,Pe,ue,Bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Xe=xe.update(C),Pe=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Bt.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Bt.copy(Xe.boundingSphere.center)),Bt.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pe)){const qe=Xe.groups;for(let je=0,tt=qe.length;je<tt;je++){const ht=qe[je],Qe=Pe[ht.materialIndex];Qe&&Qe.visible&&B.push(C,Xe,Qe,ue,Bt.z,ht)}}else Pe.visible&&B.push(C,Xe,Pe,ue,Bt.z,null)}}const ze=C.children;for(let Xe=0,Pe=ze.length;Xe<Pe;Xe++)fs(ze[Xe],Q,ue,re)}function al(C,Q,ue,re){const{opaque:oe,transmissive:ze,transparent:Xe}=C;L.setupLightsView(ue),st===!0&&$e.setGlobalState(W.clippingPlanes,ue),re&&E.viewport(M.copy(re)),oe.length>0&&ds(oe,Q,ue),ze.length>0&&ds(ze,Q,ue),Xe.length>0&&ds(Xe,Q,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function sl(C,Q,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[re.id]===void 0){const Qe=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[re.id]=new Yi(1,1,{generateMipmaps:!0,type:Qe?Ta:hi,minFilter:Bs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const ze=L.state.transmissionRenderTarget[re.id],Xe=re.viewport||M;ze.setSize(Xe.z*W.transmissionResolutionScale,Xe.w*W.transmissionResolutionScale);const Pe=W.getRenderTarget(),qe=W.getActiveCubeFace(),je=W.getActiveMipmapLevel();W.setRenderTarget(ze),W.getClearColor(_e),Te=W.getClearAlpha(),Te<1&&W.setClearColor(16777215,.5),W.clear(),qt&&ct.render(ue);const tt=W.toneMapping;W.toneMapping=qi;const ht=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),L.setupLightsView(re),st===!0&&$e.setGlobalState(W.clippingPlanes,re),ds(C,ue,re),me.updateMultisampleRenderTarget(ze),me.updateRenderTargetMipmap(ze),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Lt=0,sn=Q.length;Lt<sn;Lt++){const Qt=Q[Lt],{object:Gt,geometry:Vt,material:Ve,group:Ln}=Qt;if(Ve.side===Sa&&Gt.layers.test(re.layers)){const vt=Ve.side;Ve.side=Jn,Ve.needsUpdate=!0,wa(Gt,ue,re,Vt,Ve,Ln),Ve.side=vt,Ve.needsUpdate=!0,Qe=!0}}Qe===!0&&(me.updateMultisampleRenderTarget(ze),me.updateRenderTargetMipmap(ze))}W.setRenderTarget(Pe,qe,je),W.setClearColor(_e,Te),ht!==void 0&&(re.viewport=ht),W.toneMapping=tt}function ds(C,Q,ue){const re=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,ze=C.length;oe<ze;oe++){const Xe=C[oe],{object:Pe,geometry:qe,group:je}=Xe;let tt=Xe.material;tt.allowOverride===!0&&re!==null&&(tt=re),Pe.layers.test(ue.layers)&&wa(Pe,Q,ue,qe,tt,je)}}function wa(C,Q,ue,re,oe,ze){C.onBeforeRender(W,Q,ue,re,oe,ze),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(W,Q,ue,re,C,ze),oe.transparent===!0&&oe.side===Sa&&oe.forceSinglePass===!1?(oe.side=Jn,oe.needsUpdate=!0,W.renderBufferDirect(ue,Q,re,oe,C,ze),oe.side=ls,oe.needsUpdate=!0,W.renderBufferDirect(ue,Q,re,oe,C,ze),oe.side=Sa):W.renderBufferDirect(ue,Q,re,oe,C,ze),C.onAfterRender(W,Q,ue,re,oe,ze)}function Ca(C,Q,ue){Q.isScene!==!0&&(Q=Ut);const re=ce.get(C),oe=L.state.lights,ze=L.state.shadowsArray,Xe=oe.state.version,Pe=Ne.getParameters(C,oe.state,ze,Q,ue,L.state.lightProbeGridArray),qe=Ne.getProgramCacheKey(Pe);let je=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Q.environment:null,re.fog=Q.fog;const tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=Ce.get(C.envMap||re.environment,tt),re.envMapRotation=re.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",ti),je=new Map,re.programs=je);let ht=je.get(qe);if(ht!==void 0){if(re.currentProgram===ht&&re.lightsStateVersion===Xe)return Ji(C,Pe),ht}else Pe.uniforms=Ne.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,ue,Pe),C.onBeforeCompile(Pe,W),ht=Ne.acquireProgram(Pe,qe),je.set(qe,ht),re.uniforms=Pe.uniforms;const Qe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=$e.uniform),Ji(C,Pe),re.needsLights=rl(C),re.lightsStateVersion=Xe,re.needsLights&&(Qe.ambientLightColor.value=oe.state.ambient,Qe.lightProbe.value=oe.state.probe,Qe.directionalLights.value=oe.state.directional,Qe.directionalLightShadows.value=oe.state.directionalShadow,Qe.spotLights.value=oe.state.spot,Qe.spotLightShadows.value=oe.state.spotShadow,Qe.rectAreaLights.value=oe.state.rectArea,Qe.ltc_1.value=oe.state.rectAreaLTC1,Qe.ltc_2.value=oe.state.rectAreaLTC2,Qe.pointLights.value=oe.state.point,Qe.pointLightShadows.value=oe.state.pointShadow,Qe.hemisphereLights.value=oe.state.hemi,Qe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Qe.spotLightMatrix.value=oe.state.spotLightMatrix,Qe.spotLightMap.value=oe.state.spotLightMap,Qe.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.lightProbeGrid=L.state.lightProbeGridArray.length>0,re.currentProgram=ht,re.uniformsList=null,ht}function Qi(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function Ji(C,Q){const ue=ce.get(C);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function hs(C,Q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;N.setFromMatrixPosition(Q.matrixWorld);for(let ue=0,re=C.length;ue<re;ue++){const oe=C[ue];if(oe.texture!==null&&oe.boundingBox.containsPoint(N))return oe}return null}function Ra(C,Q,ue,re,oe){Q.isScene!==!0&&(Q=Ut),me.resetTextureUnits();const ze=Q.fog,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?Q.environment:null,Pe=ne===null?W.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Et.workingColorSpace,qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,je=Ce.get(re.envMap||Xe,qe),tt=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ht=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Qe=!!ue.morphAttributes.position,Lt=!!ue.morphAttributes.normal,sn=!!ue.morphAttributes.color;let Qt=qi;re.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Qt=W.toneMapping);const Gt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,Ve=ce.get(re),Ln=L.state.lights;if(st===!0&&(rt===!0||C!==G)){const Ft=C===G&&re.id===ye;$e.setState(re,C,Ft)}let vt=!1;re.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ln.state.version||Ve.outputColorSpace!==Pe||oe.isBatchedMesh&&Ve.batching===!1||!oe.isBatchedMesh&&Ve.batching===!0||oe.isBatchedMesh&&Ve.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ve.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ve.instancing===!1||!oe.isInstancedMesh&&Ve.instancing===!0||oe.isSkinnedMesh&&Ve.skinning===!1||!oe.isSkinnedMesh&&Ve.skinning===!0||oe.isInstancedMesh&&Ve.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ve.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ve.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ve.instancingMorph===!1&&oe.morphTexture!==null||Ve.envMap!==je||re.fog===!0&&Ve.fog!==ze||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==$e.numPlanes||Ve.numIntersection!==$e.numIntersection)||Ve.vertexAlphas!==tt||Ve.vertexTangents!==ht||Ve.morphTargets!==Qe||Ve.morphNormals!==Lt||Ve.morphColors!==sn||Ve.toneMapping!==Qt||Ve.morphTargetsCount!==Vt||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ve.__version=re.version);let yn=Ve.currentProgram;vt===!0&&(yn=Ca(re,Q,oe),q&&re.isNodeMaterial&&q.onUpdateProgram(re,yn,Ve));let ni=!1,Ti=!1,ii=!1;const kt=yn.getUniforms(),rn=Ve.uniforms;if(E.useProgram(yn.program)&&(ni=!0,Ti=!0,ii=!0),re.id!==ye&&(ye=re.id,Ti=!0),Ve.needsLights){const Ft=hs(L.state.lightProbeGridArray,oe);Ve.lightProbeGrid!==Ft&&(Ve.lightProbeGrid=Ft,Ti=!0)}if(ni||G!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),kt.setValue(K,"projectionMatrix",C.projectionMatrix),kt.setValue(K,"viewMatrix",C.matrixWorldInverse);const zi=kt.map.cameraPosition;zi!==void 0&&zi.setValue(K,Dt.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&kt.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&kt.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Ti=!0,ii=!0)}if(Ve.needsLights&&(Ln.state.directionalShadowMap.length>0&&kt.setValue(K,"directionalShadowMap",Ln.state.directionalShadowMap,me),Ln.state.spotShadowMap.length>0&&kt.setValue(K,"spotShadowMap",Ln.state.spotShadowMap,me),Ln.state.pointShadowMap.length>0&&kt.setValue(K,"pointShadowMap",Ln.state.pointShadowMap,me)),oe.isSkinnedMesh){kt.setOptional(K,oe,"bindMatrix"),kt.setOptional(K,oe,"bindMatrixInverse");const Ft=oe.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),kt.setValue(K,"boneTexture",Ft.boneTexture,me))}oe.isBatchedMesh&&(kt.setOptional(K,oe,"batchingTexture"),kt.setValue(K,"batchingTexture",oe._matricesTexture,me),kt.setOptional(K,oe,"batchingIdTexture"),kt.setValue(K,"batchingIdTexture",oe._indirectTexture,me),kt.setOptional(K,oe,"batchingColorTexture"),oe._colorsTexture!==null&&kt.setValue(K,"batchingColorTexture",oe._colorsTexture,me));const Ai=ue.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Y.update(oe,ue,yn),(Ti||Ve.receiveShadow!==oe.receiveShadow)&&(Ve.receiveShadow=oe.receiveShadow,kt.setValue(K,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&Q.environment!==null&&(rn.envMapIntensity.value=Q.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=VA()),Ti){if(kt.setValue(K,"toneMappingExposure",W.toneMappingExposure),Ve.needsLights&&pn(rn,ii),ze&&re.fog===!0&&Ge.refreshFogUniforms(rn,ze),Ge.refreshMaterialUniforms(rn,re,de,se,L.state.transmissionRenderTarget[C.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ft=Ve.lightProbeGrid;rn.probesSH.value=Ft.texture,rn.probesMin.value.copy(Ft.boundingBox.min),rn.probesMax.value.copy(Ft.boundingBox.max),rn.probesResolution.value.copy(Ft.resolution)}jc.upload(K,Qi(Ve),rn,me)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(jc.upload(K,Qi(Ve),rn,me),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&kt.setValue(K,"center",oe.center),kt.setValue(K,"modelViewMatrix",oe.modelViewMatrix),kt.setValue(K,"normalMatrix",oe.normalMatrix),kt.setValue(K,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){const Ft=re.uniformsGroups;for(let zi=0,Na=Ft.length;zi<Na;zi++){const ps=Ft[zi];Ae.update(ps,yn),Ae.bind(ps,yn)}}return yn}function pn(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function rl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,Q,ue){const re=ce.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=Q,ce.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const ue=ce.get(C);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(C,Q=0,ue=0){ne=C,H=Q,V=ue;let re=null,oe=!1,ze=!1;if(C){const Pe=ce.get(C);if(Pe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(K.FRAMEBUFFER,Pe.__webglFramebuffer),M.copy(C.viewport),F.copy(C.scissor),le=C.scissorTest,E.viewport(M),E.scissor(F),E.setScissorTest(le),ye=-1;return}else if(Pe.__webglFramebuffer===void 0)me.setupRenderTarget(C);else if(Pe.__hasExternalTextures)me.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Pe.__boundDepthTexture!==tt){if(tt!==null&&ce.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(C)}}const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);const je=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(je[Q])?re=je[Q][ue]:re=je[Q],oe=!0):C.samples>0&&me.useMultisampledRTT(C)===!1?re=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(je)?re=je[ue]:re=je,M.copy(C.viewport),F.copy(C.scissor),le=C.scissorTest}else M.copy(Le).multiplyScalar(de).floor(),F.copy(lt).multiplyScalar(de).floor(),le=Je;if(ue!==0&&(re=pe),E.bindFramebuffer(K.FRAMEBUFFER,re)&&E.drawBuffers(C,re),E.viewport(M),E.scissor(F),E.setScissorTest(le),oe){const Pe=ce.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe.__webglTexture,ue)}else if(ze){const Pe=Q;for(let qe=0;qe<C.textures.length;qe++){const je=ce.get(C.textures[qe]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+qe,je.__webglTexture,ue,Pe)}}else if(C!==null&&ue!==0){const Pe=ce.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Pe.__webglTexture,ue)}ye=-1},this.readRenderTargetPixels=function(C,Q,ue,re,oe,ze,Xe,Pe=0){if(!(C&&C.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){E.bindFramebuffer(K.FRAMEBUFFER,qe);try{const je=C.textures[Pe],tt=je.format,ht=je.type;if(C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Pe),!P.textureFormatReadable(tt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ht)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-re&&ue>=0&&ue<=C.height-oe&&K.readPixels(Q,ue,re,oe,De.convert(tt),De.convert(ht),ze)}finally{const je=ne!==null?ce.get(ne).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ue,re,oe,ze,Xe,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(Q>=0&&Q<=C.width-re&&ue>=0&&ue<=C.height-oe){E.bindFramebuffer(K.FRAMEBUFFER,qe);const je=C.textures[Pe],tt=je.format,ht=je.type;if(C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Pe),!P.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Qe),K.bufferData(K.PIXEL_PACK_BUFFER,ze.byteLength,K.STREAM_READ),K.readPixels(Q,ue,re,oe,De.convert(tt),De.convert(ht),0);const Lt=ne!==null?ce.get(ne).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,Lt);const sn=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await rM(K,sn,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Qe),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,ze),K.deleteBuffer(Qe),K.deleteSync(sn),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,ue=0){const re=Math.pow(2,-ue),oe=Math.floor(C.image.width*re),ze=Math.floor(C.image.height*re),Xe=Q!==null?Q.x:0,Pe=Q!==null?Q.y:0;me.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,ue,0,0,Xe,Pe,oe,ze),E.unbindTexture()},this.copyTextureToTexture=function(C,Q,ue=null,re=null,oe=0,ze=0){let Xe,Pe,qe,je,tt,ht,Qe,Lt,sn;const Qt=C.isCompressedTexture?C.mipmaps[ze]:C.image;if(ue!==null)Xe=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,je=ue.min.x,tt=ue.min.y,ht=ue.isBox3?ue.min.z:0;else{const rn=Math.pow(2,-oe);Xe=Math.floor(Qt.width*rn),Pe=Math.floor(Qt.height*rn),C.isDataArrayTexture?qe=Qt.depth:C.isData3DTexture?qe=Math.floor(Qt.depth*rn):qe=1,je=0,tt=0,ht=0}re!==null?(Qe=re.x,Lt=re.y,sn=re.z):(Qe=0,Lt=0,sn=0);const Gt=De.convert(Q.format),Vt=De.convert(Q.type);let Ve;Q.isData3DTexture?(me.setTexture3D(Q,0),Ve=K.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(me.setTexture2DArray(Q,0),Ve=K.TEXTURE_2D_ARRAY):(me.setTexture2D(Q,0),Ve=K.TEXTURE_2D),E.activeTexture(K.TEXTURE0),E.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Q.flipY),E.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),E.pixelStorei(K.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ln=E.getParameter(K.UNPACK_ROW_LENGTH),vt=E.getParameter(K.UNPACK_IMAGE_HEIGHT),yn=E.getParameter(K.UNPACK_SKIP_PIXELS),ni=E.getParameter(K.UNPACK_SKIP_ROWS),Ti=E.getParameter(K.UNPACK_SKIP_IMAGES);E.pixelStorei(K.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(K.UNPACK_SKIP_PIXELS,je),E.pixelStorei(K.UNPACK_SKIP_ROWS,tt),E.pixelStorei(K.UNPACK_SKIP_IMAGES,ht);const ii=C.isDataArrayTexture||C.isData3DTexture,kt=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const rn=ce.get(C),Ai=ce.get(Q),Ft=ce.get(rn.__renderTarget),zi=ce.get(Ai.__renderTarget);E.bindFramebuffer(K.READ_FRAMEBUFFER,Ft.__webglFramebuffer),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Na=0;Na<qe;Na++)ii&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,oe,ht+Na),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ce.get(Q).__webglTexture,ze,sn+Na)),K.blitFramebuffer(je,tt,Xe,Pe,Qe,Lt,Xe,Pe,K.DEPTH_BUFFER_BIT,K.NEAREST);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(oe!==0||C.isRenderTargetTexture||ce.has(C)){const rn=ce.get(C),Ai=ce.get(Q);E.bindFramebuffer(K.READ_FRAMEBUFFER,ve),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,J);for(let Ft=0;Ft<qe;Ft++)ii?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rn.__webglTexture,oe,ht+Ft):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,rn.__webglTexture,oe),kt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ai.__webglTexture,ze,sn+Ft):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ai.__webglTexture,ze),oe!==0?K.blitFramebuffer(je,tt,Xe,Pe,Qe,Lt,Xe,Pe,K.COLOR_BUFFER_BIT,K.NEAREST):kt?K.copyTexSubImage3D(Ve,ze,Qe,Lt,sn+Ft,je,tt,Xe,Pe):K.copyTexSubImage2D(Ve,ze,Qe,Lt,je,tt,Xe,Pe);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else kt?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(Ve,ze,Qe,Lt,sn,Xe,Pe,qe,Gt,Vt,Qt.data):Q.isCompressedArrayTexture?K.compressedTexSubImage3D(Ve,ze,Qe,Lt,sn,Xe,Pe,qe,Gt,Qt.data):K.texSubImage3D(Ve,ze,Qe,Lt,sn,Xe,Pe,qe,Gt,Vt,Qt):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ze,Qe,Lt,Xe,Pe,Gt,Vt,Qt.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ze,Qe,Lt,Qt.width,Qt.height,Gt,Qt.data):K.texSubImage2D(K.TEXTURE_2D,ze,Qe,Lt,Xe,Pe,Gt,Vt,Qt);E.pixelStorei(K.UNPACK_ROW_LENGTH,Ln),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,vt),E.pixelStorei(K.UNPACK_SKIP_PIXELS,yn),E.pixelStorei(K.UNPACK_SKIP_ROWS,ni),E.pixelStorei(K.UNPACK_SKIP_IMAGES,Ti),ze===0&&Q.generateMipmaps&&K.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&me.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?me.setTextureCube(C,0):C.isData3DTexture?me.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?me.setTexture2DArray(C,0):me.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){H=0,V=0,ne=null,E.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const kA=({theme:r})=>{const e=at.useRef(null);return at.useEffect(()=>{const i=e.current;if(!i)return;const s=new Bv,l=new Qn(60,i.clientWidth/i.clientHeight,.1,1e3);l.position.z=15;const c=new s_({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setSize(i.clientWidth,i.clientHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(c.domElement);let p=(F=>{switch(F){case"cyberpunk":return{primary:62463,secondary:16711765,bgParticle:57855};case"matrix":return{primary:65382,secondary:13073,bgParticle:65416};case"neon-violet":return{primary:11032055,secondary:15485081,bgParticle:12616956};case"deep-cosmos":return{primary:3718648,secondary:16096779,bgParticle:6333946};default:return{primary:62463,secondary:16711765,bgParticle:57855}}})(r);const m=new eu(4,2),h=new jv({color:p.primary,wireframe:!0,roughness:.1,metalness:.8,transparent:!0,opacity:.7}),x=new $n(m,h);s.add(x);const v=new eu(2.2,1),g=new Jo({color:p.secondary,wireframe:!0,transparent:!0,opacity:.4}),b=new $n(v,g);s.add(b);const w=new mp(7,.08,16,100),D=new Jo({color:p.primary,transparent:!0,opacity:.5}),S=new $n(w,D);S.rotation.x=Math.PI/3,s.add(S);const y=1800,U=new Float32Array(y*3),I=new Float32Array(y);for(let F=0;F<y;F++)U[F*3]=(Math.random()-.5)*60,U[F*3+1]=(Math.random()-.5)*60,U[F*3+2]=(Math.random()-.5)*60,I[F]=Math.random()*.12+.02;const N=new Hn;N.setAttribute("position",new Pi(U,3));const B=document.createElement("canvas");B.width=16,B.height=16;const L=B.getContext("2d");if(L){const F=L.createRadialGradient(8,8,0,8,8,8);F.addColorStop(0,"rgba(255,255,255,1)"),F.addColorStop(.5,"rgba(255,255,255,0.4)"),F.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=F,L.fillRect(0,0,16,16)}const z=new LM(B),A=new Vv({color:p.bgParticle,size:.35,map:z,transparent:!0,opacity:.75,blending:ah,depthWrite:!1}),O=new UM(N,A);s.add(O);const W=new Kv(16777215,.8);s.add(W);const X=new Zh(p.primary,3,50);X.position.set(10,10,10),s.add(X);const q=new Zh(p.secondary,3,50);q.position.set(-10,-10,-10),s.add(q);let pe=0,ve=0,J=0;const H=F=>{const le=window.innerWidth/2,_e=window.innerHeight/2;pe=(F.clientX-le)*.001,ve=(F.clientY-_e)*.001},V=()=>{J=window.scrollY};window.addEventListener("mousemove",H),window.addEventListener("scroll",V);const ne=()=>{i&&(l.aspect=i.clientWidth/i.clientHeight,l.updateProjectionMatrix(),c.setSize(i.clientWidth,i.clientHeight))};window.addEventListener("resize",ne);let ye,G=new qM;const M=()=>{ye=requestAnimationFrame(M);const F=G.getElapsedTime();l.position.x+=(pe*5-l.position.x)*.05,l.position.y+=(-ve*5-l.position.y)*.05,l.lookAt(s.position),x.rotation.x=F*.15+J*5e-4,x.rotation.y=F*.2+J*8e-4,b.rotation.x=-F*.25,b.rotation.y=-F*.3,S.rotation.z=F*.1,S.rotation.y=F*.15,O.rotation.y=F*.03,O.rotation.x=Math.sin(F*.02)*.1,c.render(s,l)};return M(),()=>{cancelAnimationFrame(ye),window.removeEventListener("mousemove",H),window.removeEventListener("scroll",V),window.removeEventListener("resize",ne),i&&c.domElement&&i.removeChild(c.domElement),m.dispose(),h.dispose(),v.dispose(),g.dispose(),w.dispose(),D.dispose(),N.dispose(),A.dispose(),c.dispose()}},[r]),T.jsx("div",{ref:e,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",style:{opacity:.85}})},XA=()=>{const[r,e]=at.useState({x:-100,y:-100}),[i,s]=at.useState({x:-100,y:-100}),[l,c]=at.useState(!1),[d,p]=at.useState(!1);return at.useEffect(()=>{const m=x=>{e({x:x.clientX,y:x.clientY}),d||p(!0);const v=x.target;v&&(v.tagName==="BUTTON"||v.tagName==="A"||v.tagName==="INPUT"||v.closest("button")||v.closest("a")||v.classList.contains("cursor-pointer"))?c(!0):c(!1)},h=()=>p(!1);return window.addEventListener("mousemove",m),document.addEventListener("mouseleave",h),()=>{window.removeEventListener("mousemove",m),document.removeEventListener("mouseleave",h)}},[d]),at.useEffect(()=>{let m;const h=()=>{s(x=>({x:x.x+(r.x-x.x)*.2,y:x.y+(r.y-x.y)*.2})),m=requestAnimationFrame(h)};return m=requestAnimationFrame(h),()=>cancelAnimationFrame(m)},[r]),d?T.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block",children:[T.jsx("div",{className:"fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_12px_#00f3ff]",style:{transform:`translate3d(${r.x}px, ${r.y}px, 0) scale(${l?2:1})`}}),T.jsx("div",{className:`fixed top-0 left-0 rounded-full border border-cyan-400/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${l?"w-12 h-12 bg-cyan-500/10 border-cyan-400 scale-125":"w-8 h-8 scale-100"}`,style:{transform:`translate3d(${i.x}px, ${i.y}px, 0)`}})]}):null};class WA{constructor(){this.ctx=null,this.enabled=!0}initCtx(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}playHover(){if(this.enabled)try{if(this.initCtx(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.05),i.gain.setValueAtTime(.015,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playClick(){if(this.enabled)try{if(this.initCtx(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.08),i.gain.setValueAtTime(.04,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playSuccess(){if(this.enabled)try{if(this.initCtx(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,l)=>{if(!this.ctx)return;const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(s,e+l*.06),d.gain.setValueAtTime(.03,e+l*.06),d.gain.exponentialRampToValueAtTime(.001,e+l*.06+.15),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.06),c.stop(e+l*.06+.15)})}catch{}}}const dt=new WA;/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),xv=r=>{const e=qA(r);return e.charAt(0).toUpperCase()+e.slice(1)},r_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),YA=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=at.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>at.createElement("svg",{ref:m,...ZA,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:r_("lucide",l),...!c&&!YA(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,x])=>at.createElement(h,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(r,e)=>{const i=at.forwardRef(({className:s,...l},c)=>at.createElement(KA,{ref:c,iconNode:e,className:r_(`lucide-${jA(xv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=xv(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],vv=wt("arrow-right",QA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],$A=wt("arrow-up",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],t2=wt("bot",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],i2=wt("box",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],s2=wt("boxes",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],lu=wt("briefcase",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],l2=wt("calendar",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],u2=wt("check",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],o_=wt("circle-check",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],h2=wt("clock",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],cu=wt("code-xml",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],g2=wt("command",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],v2=wt("copy",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],uu=wt("cpu",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],l_=wt("external-link",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],M2=wt("eye",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],fu=wt("github",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],T2=wt("graduation-cap",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],w2=wt("layers",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],R2=wt("layout-grid",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],c_=wt("linkedin",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],gp=wt("mail",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],u_=wt("map-pin",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],O2=wt("message-square",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],I2=wt("palette",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],B2=wt("play",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],f_=wt("refresh-cw",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],d_=wt("search",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],h_=wt("send",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],us=wt("sparkles",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],il=wt("terminal",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xp=wt("user",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],j2=wt("volume-2",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Y2=wt("volume-x",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vp=wt("x",Z2),K2=({theme:r,onThemeChange:e,onOpenCommandPalette:i,onOpenAIChat:s})=>{const[l,c]=at.useState(!1),[d,p]=at.useState("hero"),[m,h]=at.useState(!0),[x,v]=at.useState(!1);at.useEffect(()=>{const D=()=>{c(window.scrollY>40);const S=["hero","skills","projects","experience","playground","contact"];for(const y of S){const U=document.getElementById(y);if(U){const I=U.getBoundingClientRect();if(I.top<=200&&I.bottom>=200){p(y);break}}}};return window.addEventListener("scroll",D),()=>window.removeEventListener("scroll",D)},[]);const g=()=>{const D=!m;h(D),dt.setEnabled(D),D&&dt.playSuccess()},b=[{id:"hero",label:"Overview",icon:xp},{id:"skills",label:"3D Skills",icon:uu},{id:"projects",label:"Showcase",icon:lu},{id:"experience",label:"Journey",icon:il},{id:"playground",label:"3D Sandbox",icon:cu},{id:"contact",label:"Contact",icon:gp}],w=[{id:"cyberpunk",name:"Cyberpunk Neon",colorBg:"bg-cyan-500"},{id:"matrix",name:"Matrix Green",colorBg:"bg-emerald-500"},{id:"neon-violet",name:"Neon Purple",colorBg:"bg-purple-500"},{id:"deep-cosmos",name:"Deep Cosmos",colorBg:"bg-amber-500"}];return T.jsx("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${l?"py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl":"py-5 bg-transparent"}`,children:T.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between",children:[T.jsxs("a",{href:"#hero",onClick:()=>dt.playClick(),className:"flex items-center gap-3 group",children:[T.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300",children:T.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-cyan-400 font-extrabold text-lg font-mono",children:"TC"})}),T.jsxs("div",{children:[T.jsx("span",{className:"text-white font-bold tracking-tight text-lg group-hover:text-cyan-400 transition-colors",children:"Thejitha C"}),T.jsx("span",{className:"hidden sm:block text-[11px] font-mono text-cyan-400/80 tracking-widest uppercase",children:"3D Web Architect"})]})]}),T.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-lg",children:b.map(D=>{const S=D.icon,y=d===D.id;return T.jsxs("a",{href:`#${D.id}`,onClick:()=>dt.playClick(),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${y?"bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20":"text-slate-300 hover:text-white hover:bg-slate-800/60"}`,children:[T.jsx(S,{className:"w-3.5 h-3.5"}),D.label]},D.id)})}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsxs("button",{onClick:()=>{dt.playClick(),i()},className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-mono transition",title:"Open Quick Command Palette (Cmd+K)",children:[T.jsx(g2,{className:"w-3.5 h-3.5 text-cyan-400"}),T.jsx("span",{children:"Cmd+K"})]}),T.jsx("button",{onClick:g,className:"p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition",title:m?"Mute SFX":"Enable SFX",children:m?T.jsx(j2,{className:"w-4 h-4 text-cyan-400"}):T.jsx(Y2,{className:"w-4 h-4 text-slate-500"})}),T.jsxs("div",{className:"relative",children:[T.jsx("button",{onClick:()=>{dt.playClick(),v(!x)},className:"p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition flex items-center gap-1",title:"Change Theme Mode",children:T.jsx(I2,{className:"w-4 h-4 text-cyan-400"})}),x&&T.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-200",children:[T.jsx("div",{className:"text-[10px] font-mono text-slate-400 px-2 py-1 uppercase tracking-wider",children:"Color Archetype"}),w.map(D=>T.jsxs("button",{onClick:()=>{dt.playClick(),e(D.id),v(!1)},className:`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition ${r===D.id?"bg-slate-800 text-cyan-400":"text-slate-300 hover:bg-slate-800/50"}`,children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${D.colorBg}`}),D.name]}),r===D.id&&T.jsx("span",{className:"text-cyan-400 font-bold",children:"✓"})]},D.id))]})]}),T.jsxs("button",{onClick:()=>{dt.playClick(),s()},className:"flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-105",children:[T.jsx(us,{className:"w-3.5 h-3.5 animate-spin",style:{animationDuration:"4s"}}),T.jsx("span",{children:"AI Thejitha"})]})]})]})})},pi={name:"Thejitha Chanupathi",subHeading:"Bridging the gap between technology and business operations to drive online sales growth and operational efficiency.",location:"Thalawathugoda, Sri Lanka",email:"chanupathi30@gmail.com",github:"https://github.com/thejitha-c",linkedin:"https://www.linkedin.com/in/thejitha-chanupathi",stats:[{label:"E-Commerce Platforms",value:"3+"},{label:"Web Projects",value:"15+"},{label:"Years Experience",value:"4+"},{label:"Customer Satisfaction",value:"99%"}]},Q2=[{id:"eteon-corporate-site",title:"Eteon Solutions Corporate Website",shortDesc:"Corporate website development to expand online footprint and product visibility.",fullDesc:"Built and currently maintain the official company website using WordPress, Elementor, and custom CSS to optimize the user interface and drive online sales.",category:"Full-Stack",tags:["WordPress","Elementor","CSS","PHP"],image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",githubUrl:"",liveUrl:"",featured:!0,highlights:["Expanded the company online footprint and product visibility","Optimized user interface to drive direct online sales","Fully responsive design built with Elementor"]},{id:"orchi-flora",title:"Orchi-Flora Project",shortDesc:"Developed an automated temperature analysis system tailored for optimal orchid growth.",fullDesc:"An agricultural technology solution designed to monitor and automate environmental conditions. The system ensures the precise temperature thresholds required for optimal orchid cultivation are maintained automatically.",category:"AI & Tools",tags:["Automation","System Design","Hardware","Data Analysis"],image:"https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&w=1000&q=80",githubUrl:"",liveUrl:"",featured:!0,highlights:["Automated temperature tracking and adjustments","Hardware and software integration for real-time monitoring","Improved crop yield through precise environmental control"]},{id:"bis-optimization",title:"Business Systems Optimization",shortDesc:"Designed and proposed systemic workflow improvements for a construction company.",fullDesc:"Analyzed existing operational bottlenecks within a construction firm and architected comprehensive workflow improvements using modern Business Information Systems principles.",category:"Full-Stack",tags:["Business Analysis","Workflow Optimization","Systems Design"],image:"https://images.unsplash.com/photo-1504307651254-35680f356f27?auto=format&fit=crop&w=1000&q=80",githubUrl:"",liveUrl:"",featured:!1,highlights:["Identified critical bottlenecks in daily operations","Designed systemic improvements to reduce reporting overhead","Proposed scalable IT infrastructure solutions"]},{id:"digital-product-launches",title:"Digital Product Launches",shortDesc:"Executed e-commerce process improvements across various IT product lines.",fullDesc:"Managed the end-to-end digital presentation and product data quality for multiple new IT product line launches. Collaborated seamlessly with digital teams to execute high-impact promotional campaigns.",category:"Frontend",tags:["E-Commerce","Content Management","Digital Marketing"],image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",githubUrl:"",liveUrl:"",featured:!1,highlights:["Ensured high data accuracy and brand consistency","Aligned internal stakeholders for rapid deployment","Enhanced the customer journey via improved categorization"]}],$h=[{title:"Web & Software Development",skills:[{name:"WordPress & Elementor",level:95,iconName:"Globe",description:"Custom theme building, site maintenance & visual builders",yearsOfExp:"3+ yrs"},{name:"HTML5 & Custom CSS",level:90,iconName:"Code",description:"Semantic markup and responsive front-end styling",yearsOfExp:"3+ yrs"},{name:"PHP & Java",level:80,iconName:"FileCode",description:"Backend logic, server-side scripting & application dev",yearsOfExp:"2+ yrs"},{name:"MySQL",level:85,iconName:"Database",description:"Relational database management and optimization",yearsOfExp:"2+ yrs"}]},{title:"E-Commerce & Digital Marketing",skills:[{name:"Marketplace Management",level:95,iconName:"ShoppingCart",description:"Kapruka, Big Deals, Daraz operations & vendor coordination",yearsOfExp:"4+ yrs"},{name:"Digital Marketing",level:90,iconName:"TrendingUp",description:"Targeted promotional campaigns & online sales growth",yearsOfExp:"3+ yrs"},{name:"Content Management",level:92,iconName:"Layout",description:"Product listing optimization & data accuracy",yearsOfExp:"3+ yrs"},{name:"Business Development",level:88,iconName:"Briefcase",description:"Pricing strategies, workflow optimization & reporting",yearsOfExp:"3+ yrs"}]},{title:"IT & Hardware Systems",skills:[{name:"IT Hardware",level:85,iconName:"Cpu",description:"Hardware handling, diagnostics & maintenance",yearsOfExp:"3+ yrs"},{name:"Troubleshooting",level:90,iconName:"Tool",description:"Technical problem solving & systems support",yearsOfExp:"4+ yrs"},{name:"CCTV Systems",level:80,iconName:"Camera",description:"Security system installation & digital monitoring",yearsOfExp:"2+ yrs"},{name:"Microsoft Office",level:95,iconName:"FileText",description:"Advanced reporting, data analysis & documentation",yearsOfExp:"5+ yrs"}]}],J2=[{id:"exp-1",role:"Business Development Executive",company:"Eteon Solutions",period:"2025 - Present",location:"Sri Lanka",type:"Work",description:["Manage end-to-end e-commerce operations across multiple high-traffic marketplaces, including Kapruka, Big Deals, and Daraz.","Develop and maintain the official company website using WordPress, Elementor, and custom CSS to optimize the user interface and drive online sales.","Direct product listings, competitive pricing strategies, and marketplace performance to maximize online visibility and conversion rates.","Streamline vendor coordination and internal processes, significantly improving order turnaround times.","Execute targeted promotional and digital marketing campaigns that contribute to measurable revenue growth."],technologies:["WordPress","Elementor","E-Commerce","Digital Marketing"]},{id:"exp-2",role:"Junior Content Management Officer",company:"Abans PLC",period:"2022 - 2024",location:"Sri Lanka",type:"Work",description:["Managed and optimized product content across multiple digital platforms, ensuring data accuracy and brand consistency.","Collaborated seamlessly with digital teams to successfully launch new IT product lines, product updates, and high-impact promotional campaigns.","Enhanced the customer journey by improving product categorization, digital presentation, and online data accessibility.","Supported dynamic e-commerce workflows by aligning internal stakeholders and maintaining rigorous product data quality standards."],technologies:["Content Management","Product Launches","Data Accuracy"]},{id:"exp-3",role:"Intern - Business Operations",company:"Infinite Business Ventures",period:"2021 - 2022",location:"Sri Lanka",type:"Work",description:["Assisted with core business operations, IT product handling, and critical administrative tasks.","Supported project reporting and internal coordination, directly contributing to smoother day-to-day workflows."],technologies:["Business Operations","IT Hardware","Reporting"]},{id:"edu-1",role:"BSc (Hons) Business Information Systems",company:"Cardiff Metropolitan University",period:"2026 - 2027 (Reading)",location:"Sri Lanka / UK",type:"Education",description:["Currently reading for a Bachelor of Science with Honors in Business Information Systems.","Focusing on the intersection of business strategy and IT infrastructure."],technologies:["Business Strategy","Information Systems"]},{id:"edu-2",role:"HND in Computing and Software Engineering",company:"Cardiff Metropolitan University",period:"2023 - 2026",location:"Sri Lanka / UK",type:"Education",description:["Completed Higher National Diploma in Computing and Software Engineering.","Gained foundational knowledge in software development, databases, and system architecture."],technologies:["Software Engineering","Databases","System Architecture"]}],ih=[],$2=({onOpenAIChat:r})=>{const[e,i]=at.useState(0),s=["Creative 3D Web Architect","Full-Stack Software Engineer","WebGL & Shader Developer","React & Next.js Specialist"];return at.useEffect(()=>{const l=setInterval(()=>{i(c=>(c+1)%s.length)},2800);return()=>clearInterval(l)},[s.length]),T.jsx("section",{id:"hero",className:"relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden",children:T.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[T.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start space-y-6",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-xl backdrop-blur-md",children:[T.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),T.jsx("span",{children:"AVAILABLE FOR INNOVATIVE PROJECTS & ROLES"})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none",children:["Hi, I'm ",T.jsx("br",{}),T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500",children:"Thejitha C"})]}),T.jsx("div",{className:"h-10 flex items-center",children:T.jsxs("div",{className:"text-xl sm:text-2xl font-mono text-cyan-300/90 flex items-center gap-2",children:[T.jsx("span",{className:"text-slate-500",children:">"}),T.jsx("span",{className:"border-b-2 border-cyan-400 pb-0.5 animate-pulse",children:s[e]})]})})]}),T.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed",children:pi.subHeading}),T.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[T.jsxs("a",{href:"#projects",onClick:()=>dt.playClick(),className:"group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105",children:[T.jsx("span",{children:"Explore 3D Work"}),T.jsx(vv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),T.jsxs("button",{onClick:()=>{dt.playClick(),r()},className:"flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-cyan-500/40 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-cyan-400",children:[T.jsx(us,{className:"w-4 h-4 text-cyan-400"}),T.jsx("span",{children:"Ask AI Representative"})]}),T.jsx("a",{href:pi.github,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition",title:"GitHub Profile",children:T.jsx(fu,{className:"w-5 h-5"})}),T.jsx("a",{href:pi.linkedin,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition",title:"LinkedIn Profile",children:T.jsx(c_,{className:"w-5 h-5"})})]}),T.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 w-full border-t border-slate-800/80",children:pi.stats.map((l,c)=>T.jsxs("div",{className:"bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60 backdrop-blur-sm",children:[T.jsx("span",{className:"text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 block",children:l.value}),T.jsx("span",{className:"text-xs text-slate-400 font-medium",children:l.label})]},c))})]}),T.jsx("div",{className:"lg:col-span-5 w-full",children:T.jsxs("div",{className:"relative rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-5 shadow-2xl backdrop-blur-xl",children:[T.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500/80"}),T.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500/80"}),T.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500/80"}),T.jsx("span",{className:"text-xs font-mono text-slate-400 ml-2",children:"thejitha.config.ts"})]}),T.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30",children:[T.jsx(uu,{className:"w-3 h-3 animate-spin"}),"WebGL Active"]})]}),T.jsxs("div",{className:"font-mono text-xs text-slate-300 space-y-2 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800",children:[T.jsx("p",{className:"text-slate-500",children:"// Developer Profile Initializer"}),T.jsxs("p",{children:[T.jsx("span",{className:"text-purple-400",children:"const"})," developer = {"]}),T.jsxs("p",{className:"pl-4",children:["name: ",T.jsxs("span",{className:"text-emerald-300",children:['"',pi.name,'"']}),","]}),T.jsxs("p",{className:"pl-4",children:["role: ",T.jsx("span",{className:"text-emerald-300",children:'"Full Stack & 3D Engineer"'}),","]}),T.jsxs("p",{className:"pl-4",children:["specialties: [",T.jsx("span",{className:"text-cyan-300",children:'"React"'}),", ",T.jsx("span",{className:"text-cyan-300",children:'"Three.js"'}),", ",T.jsx("span",{className:"text-cyan-300",children:'"TypeScript"'}),"],"]}),T.jsxs("p",{className:"pl-4",children:["status: ",T.jsx("span",{className:"text-amber-300",children:'"Ready for high-impact innovation"'})]}),T.jsx("p",{children:"};"}),T.jsxs("div",{className:"pt-2 text-cyan-400 flex items-center gap-1.5",children:[T.jsx(il,{className:"w-3.5 h-3.5 text-emerald-400"}),T.jsx("span",{children:"> thejitha.render3DCanvas(developer);"})]})]}),T.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400",children:[T.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400",children:[T.jsx(s2,{className:"w-3.5 h-3.5"})," 60 FPS WebGL Engine"]}),T.jsxs("a",{href:"#playground",onClick:()=>dt.playClick(),className:"text-cyan-400 hover:underline flex items-center gap-1",children:[T.jsx("span",{children:"Launch Sandbox"}),T.jsx(vv,{className:"w-3 h-3"})]})]})]})})]})})},e3=()=>{const r=at.useRef(null),[e,i]=at.useState(null);return at.useEffect(()=>{const s=r.current;if(!s)return;const l=$h.flatMap(q=>q.skills),c=new Bv,d=new Qn(50,s.clientWidth/s.clientHeight,.1,1e3);d.position.z=12;const p=new s_({alpha:!0,antialias:!0});p.setSize(s.clientWidth,s.clientHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.appendChild(p.domElement);const m=new qo;c.add(m);const h=new hp(3.5,0),x=new jv({color:62463,wireframe:!0,roughness:.1,metalness:.9,transparent:!0,opacity:.5}),v=new $n(h,x);m.add(v);const g=[],b=5.5;l.forEach((q,pe)=>{const ve=Math.acos(-1+2*pe/l.length),J=Math.sqrt(l.length*Math.PI)*ve,H=b*Math.cos(J)*Math.sin(ve),V=b*Math.sin(J)*Math.sin(ve),ne=b*Math.cos(ve),ye=new pp(.35,16,16),G=new Jo({color:q.level>90?62463:11032055}),M=new $n(ye,G);M.position.set(H,V,ne),M.userData={skill:q},m.add(M),g.push(M);const F=new Hn().setFromPoints([new te(0,0,0),new te(H,V,ne)]),le=new Gv({color:3359061,transparent:!0,opacity:.4}),_e=new DM(F,le);m.add(_e)});const w=new Kv(16777215,1);c.add(w);const D=new Zh(62463,2,50);D.position.set(10,10,10),c.add(D);let S=!1,y={x:0,y:0};const U=new jM,I=new xt,N=q=>{S=!0,y={x:q.clientX,y:q.clientY}},B=q=>{if(S){const J={x:q.clientX-y.x,y:q.clientY-y.y};m.rotation.y+=J.x*.008,m.rotation.x+=J.y*.008,y={x:q.clientX,y:q.clientY}}const pe=s.getBoundingClientRect();I.x=(q.clientX-pe.left)/s.clientWidth*2-1,I.y=-((q.clientY-pe.top)/s.clientHeight)*2+1,U.setFromCamera(I,d),U.intersectObjects(g).length>0?(s.style.cursor="pointer",dt.playHover()):S||(s.style.cursor="grab")},L=()=>{S=!1},z=q=>{const pe=s.getBoundingClientRect();I.x=(q.clientX-pe.left)/s.clientWidth*2-1,I.y=-((q.clientY-pe.top)/s.clientHeight)*2+1,U.setFromCamera(I,d);const ve=U.intersectObjects(g);if(ve.length>0){const H=ve[0].object.userData.skill;H&&(i(H),dt.playClick())}},A=p.domElement;A.addEventListener("mousedown",N),window.addEventListener("mousemove",B),window.addEventListener("mouseup",L),A.addEventListener("click",z);const O=()=>{s&&(d.aspect=s.clientWidth/s.clientHeight,d.updateProjectionMatrix(),p.setSize(s.clientWidth,s.clientHeight))};window.addEventListener("resize",O);let W;const X=()=>{W=requestAnimationFrame(X),S||(m.rotation.y+=.005,m.rotation.x+=.002),p.render(c,d)};return X(),()=>{cancelAnimationFrame(W),A.removeEventListener("mousedown",N),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",L),A.removeEventListener("click",z),window.removeEventListener("resize",O),s&&p.domElement&&s.removeChild(p.domElement),h.dispose(),x.dispose(),p.dispose()}},[]),T.jsxs("div",{className:"relative w-full h-[450px] flex flex-col items-center justify-center bg-slate-950/60 rounded-2xl border border-cyan-500/20 backdrop-blur-md overflow-hidden shadow-2xl",children:[T.jsx("div",{ref:r,className:"w-full h-full cursor-grab active:cursor-grabbing"}),T.jsxs("div",{className:"absolute top-4 left-4 z-10 pointer-events-none text-xs tracking-wider uppercase text-cyan-400/80 bg-slate-900/80 px-3 py-1.5 rounded-full border border-cyan-500/30 flex items-center gap-2",children:[T.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),"Interactive 3D Tech Polyhedron (Drag to Rotate, Click Nodes)"]}),e&&T.jsxs("div",{className:"absolute bottom-4 left-4 right-4 z-20 bg-slate-900/95 border border-cyan-500/40 p-4 rounded-xl shadow-2xl backdrop-blur-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("h4",{className:"text-lg font-bold text-white",children:e.name}),T.jsx("span",{className:"text-xs bg-cyan-950 text-cyan-300 font-mono px-2 py-0.5 rounded border border-cyan-500/30",children:e.yearsOfExp})]}),T.jsx("p",{className:"text-sm text-slate-300 mt-1",children:e.description})]}),T.jsxs("div",{className:"flex items-center gap-4 w-full md:w-auto justify-between md:justify-end",children:[T.jsxs("div",{className:"text-right",children:[T.jsx("span",{className:"text-xs text-slate-400 block font-mono",children:"Mastery"}),T.jsxs("span",{className:"text-sm font-bold text-cyan-400",children:[e.level,"%"]})]}),T.jsx("button",{onClick:()=>i(null),className:"text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition",children:"Close"})]})]})]})},t3=()=>{const[r,e]=at.useState("3d"),[i,s]=at.useState(""),[l,c]=at.useState("All"),d=["All",...$h.map(m=>m.title)],p=$h.map(m=>{const h=m.skills.filter(x=>x.name.toLowerCase().includes(i.toLowerCase())||x.description.toLowerCase().includes(i.toLowerCase()));return{...m,skills:h}}).filter(m=>l!=="All"&&m.title!==l?!1:m.skills.length>0);return T.jsxs("section",{id:"skills",className:"py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6",children:[T.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3",children:[T.jsx(uu,{className:"w-3.5 h-3.5"}),T.jsx("span",{children:"CORE COMPETENCIES & TECH STACK"})]}),T.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:["Technical Mastery & ",T.jsx("span",{className:"text-cyan-400",children:"3D Skills"})]}),T.jsx("p",{className:"text-slate-400 mt-2 max-w-2xl text-sm sm:text-base",children:"Engineered with modern tools, clean architectures, and cutting-edge 3D WebGL frameworks."})]}),T.jsxs("div",{className:"flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800",children:[T.jsxs("button",{onClick:()=>{dt.playClick(),e("3d")},className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${r==="3d"?"bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20":"text-slate-400 hover:text-white"}`,children:[T.jsx(i2,{className:"w-4 h-4"}),T.jsx("span",{children:"3D Interactive Polyhedron"})]}),T.jsxs("button",{onClick:()=>{dt.playClick(),e("grid")},className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${r==="grid"?"bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20":"text-slate-400 hover:text-white"}`,children:[T.jsx(R2,{className:"w-4 h-4"}),T.jsx("span",{children:"Categorized Grid"})]})]})]}),r==="3d"&&T.jsxs("div",{className:"space-y-6",children:[T.jsx(e3,{}),T.jsx("div",{className:"text-center text-xs text-slate-400 font-mono",children:"💡 Tip: Click on any 3D node sphere to inspect skill mastery level & experience metrics."})]}),r==="grid"&&T.jsxs("div",{className:"space-y-8",children:[T.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-md",children:[T.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full sm:w-auto",children:d.map((m,h)=>T.jsx("button",{onClick:()=>{dt.playClick(),c(m)},className:`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${l===m?"bg-cyan-500 text-slate-950 font-bold":"bg-slate-800/80 text-slate-300 hover:bg-slate-700"}`,children:m},h))}),T.jsxs("div",{className:"relative w-full sm:w-64",children:[T.jsx(d_,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),T.jsx("input",{type:"text",placeholder:"Search skills (e.g. Three.js)...",value:i,onChange:m=>s(m.target.value),className:"w-full bg-slate-950 border border-slate-800 text-xs text-white pl-9 pr-4 py-2 rounded-xl focus:outline-none focus:border-cyan-500"})]})]}),T.jsx("div",{className:"space-y-8",children:p.map((m,h)=>T.jsxs("div",{className:"space-y-4",children:[T.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2",children:[T.jsx(w2,{className:"w-4 h-4 text-cyan-400"}),m.title]}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:m.skills.map((x,v)=>T.jsxs("div",{onMouseEnter:()=>dt.playHover(),className:"group bg-slate-900/80 p-4 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 shadow-md hover:shadow-cyan-500/10 flex flex-col justify-between",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between mb-2",children:[T.jsx("span",{className:"font-bold text-white group-hover:text-cyan-400 transition",children:x.name}),T.jsx("span",{className:"text-xs bg-slate-800 text-slate-300 font-mono px-2 py-0.5 rounded border border-slate-700",children:x.yearsOfExp})]}),T.jsx("p",{className:"text-xs text-slate-400 mb-4 leading-relaxed",children:x.description})]}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex justify-between text-xs font-mono mb-1 text-slate-400",children:[T.jsx("span",{children:"Proficiency"}),T.jsxs("span",{className:"text-cyan-400 font-bold",children:[x.level,"%"]})]}),T.jsx("div",{className:"w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800",children:T.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full transition-all duration-1000",style:{width:`${x.level}%`}})})]})]},v))})]},h))})]})]})},n3=({project:r,onOpenDemo:e})=>{const i=at.useRef(null),[s,l]=at.useState(0),[c,d]=at.useState(0),[p,m]=at.useState({x:50,y:50,opacity:0}),h=v=>{if(!i.current)return;const g=i.current.getBoundingClientRect(),b=v.clientX-g.left,w=v.clientY-g.top,D=g.width/2,S=g.height/2,y=-((w-S)/S)*12,U=(b-D)/D*12;l(y),d(U),m({x:b/g.width*100,y:w/g.height*100,opacity:.35})},x=()=>{l(0),d(0),m(v=>({...v,opacity:0}))};return T.jsxs("div",{ref:i,onMouseMove:h,onMouseLeave:x,onMouseEnter:()=>dt.playHover(),className:"group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-5 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer overflow-hidden flex flex-col justify-between",style:{transformStyle:"preserve-3d",transform:`perspective(1000px) rotateX(${s}deg) rotateY(${c}deg)`},children:[T.jsx("div",{className:"pointer-events-none absolute inset-0 transition-opacity duration-300 z-30 rounded-2xl",style:{background:`radial-gradient(circle at ${p.x}% ${p.y}%, rgba(255,255,255,${p.opacity}), transparent 60%)`}}),T.jsxs("div",{className:"relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition",children:[T.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"}),r.featured&&T.jsxs("div",{className:"absolute top-3 left-3 bg-cyan-950/90 text-cyan-400 border border-cyan-500/40 px-2.5 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 backdrop-blur-md z-20",children:[T.jsx(us,{className:"w-3.5 h-3.5 animate-pulse"}),"FEATURED 3D"]}),T.jsx("div",{className:"absolute top-3 right-3 bg-slate-900/90 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md z-20",children:r.category})]}),T.jsxs("div",{className:"flex-1 flex flex-col justify-between",style:{transform:"translateZ(20px)"},children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 flex items-center justify-between",children:r.title}),T.jsx("p",{className:"text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed",children:r.shortDesc})]}),T.jsx("div",{className:"flex flex-wrap gap-1.5 my-4",children:r.tags.map((v,g)=>T.jsxs("span",{className:"text-xs bg-slate-800/80 text-cyan-300/90 px-2.5 py-1 rounded-md border border-slate-700/80 font-mono",children:["#",v]},g))}),T.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-slate-800/80",children:[T.jsxs("button",{onClick:v=>{v.stopPropagation(),dt.playClick(),e(r)},className:"flex items-center gap-1.5 text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 px-3.5 py-2 rounded-lg border border-cyan-500/30 transition-all duration-200",children:[T.jsx(M2,{className:"w-3.5 h-3.5"}),"Interactive Demo"]}),T.jsxs("div",{className:"flex items-center gap-2",children:[r.githubUrl&&T.jsx("a",{href:r.githubUrl,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition",title:"View Code on GitHub",children:T.jsx(fu,{className:"w-4 h-4"})}),r.liveUrl&&T.jsx("a",{href:r.liveUrl,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition",title:"Open Live Portfolio",children:T.jsx(l_,{className:"w-4 h-4"})})]})]})]})]})},i3=()=>{const[r,e]=at.useState("All"),[i,s]=at.useState(null),l=["All","3D & WebGL","Full-Stack","Frontend","AI & Tools"],c=Q2.filter(d=>r==="All"?!0:d.category===r);return T.jsxs("section",{id:"projects",className:"py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6",children:[T.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3",children:[T.jsx(lu,{className:"w-3.5 h-3.5"}),T.jsx("span",{children:"PORTFOLIO SHOWCASE"})]}),T.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:["Featured ",T.jsx("span",{className:"text-cyan-400",children:"3D & Web Projects"})]}),T.jsx("p",{className:"text-slate-400 mt-2 max-w-2xl text-sm sm:text-base",children:"Every project built with rigorous engineering standards, high visual Polish, and interactive performance."})]}),T.jsx("div",{className:"flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800",children:l.map(d=>T.jsx("button",{onClick:()=>{dt.playClick(),e(d)},className:`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${r===d?"bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:d},d))})]}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:c.map(d=>T.jsx(n3,{project:d,onOpenDemo:p=>s(p)},d.id))}),i&&T.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300",children:T.jsxs("div",{className:"relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[T.jsxs("div",{className:"flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("div",{className:"p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30",children:T.jsx(us,{className:"w-5 h-5"})}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-xl font-bold text-white",children:i.title}),T.jsx("span",{className:"text-xs text-cyan-400 font-mono",children:i.category})]})]}),T.jsx("button",{onClick:()=>{dt.playClick(),s(null)},className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",children:T.jsx(vp,{className:"w-5 h-5"})})]}),T.jsxs("div",{className:"p-6 overflow-y-auto space-y-6",children:[T.jsxs("div",{className:"relative h-64 sm:h-80 rounded-xl overflow-hidden bg-slate-950 border border-slate-800",children:[T.jsx("img",{src:i.image,alt:i.title,className:"w-full h-full object-cover"}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"}),T.jsx("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between",children:T.jsx("div",{className:"flex items-center gap-2",children:i.tags.map((d,p)=>T.jsxs("span",{className:"text-xs bg-slate-900/90 text-cyan-300 px-2.5 py-1 rounded border border-cyan-500/30 font-mono",children:["#",d]},p))})})]}),T.jsxs("div",{children:[T.jsx("h4",{className:"text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2",children:"Project Overview"}),T.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:i.fullDesc})]}),T.jsxs("div",{children:[T.jsx("h4",{className:"text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3",children:"Engineering Achievements"}),T.jsx("ul",{className:"space-y-2",children:i.highlights.map((d,p)=>T.jsxs("li",{className:"flex items-start gap-2.5 text-sm text-slate-300",children:[T.jsx(o_,{className:"w-4 h-4 text-cyan-400 mt-0.5 shrink-0"}),T.jsx("span",{children:d})]},p))})]}),i.demoSnippet&&T.jsxs("div",{children:[T.jsxs("h4",{className:"text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5",children:[T.jsx(cu,{className:"w-4 h-4"})," Code Architecture Snippet"]}),T.jsx("pre",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-emerald-400 font-mono overflow-x-auto",children:T.jsx("code",{children:i.demoSnippet})})]})]}),T.jsxs("div",{className:"p-5 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4",children:[T.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Author: Thejitha C • Web & 3D Engineer"}),T.jsxs("div",{className:"flex items-center gap-3",children:[i.githubUrl&&T.jsxs("a",{href:i.githubUrl,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition",children:[T.jsx(fu,{className:"w-4 h-4"}),T.jsx("span",{children:"GitHub Code"})]}),i.liveUrl&&T.jsxs("a",{href:i.liveUrl,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition",children:[T.jsx(l_,{className:"w-4 h-4"}),T.jsx("span",{children:"Launch Live App"})]})]})]})]})})]})},a3=()=>T.jsxs("section",{id:"experience",className:"py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6",children:[T.jsxs("div",{className:"mb-16 text-center md:text-left",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3",children:[T.jsx(il,{className:"w-3.5 h-3.5"}),T.jsx("span",{children:"CAREER & EDUCATION MILESTONES"})]}),T.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:["Professional ",T.jsx("span",{className:"text-cyan-400",children:"Journey"})]}),T.jsx("p",{className:"text-slate-400 mt-2 max-w-2xl text-sm sm:text-base",children:"Proven track record delivering robust web engineering, technical leadership, and creative solutions."})]}),T.jsx("div",{className:"relative pl-6 md:pl-10 border-l-2 border-slate-800 space-y-12",children:J2.map((r,e)=>T.jsxs("div",{onMouseEnter:()=>dt.playHover(),className:"relative group",children:[T.jsx("div",{className:"absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_#00f3ff]",children:T.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"})}),T.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 group-hover:border-cyan-500/40 transition-all duration-300 shadow-xl backdrop-blur-md",children:[T.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[r.type==="Work"?T.jsx(lu,{className:"w-4 h-4 text-cyan-400"}):T.jsx(T2,{className:"w-4 h-4 text-purple-400"}),T.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-400 transition",children:r.role})]}),T.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-slate-400",children:[T.jsxs("span",{className:"flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800",children:[T.jsx(l2,{className:"w-3.5 h-3.5 text-cyan-400"}),r.period]}),T.jsxs("span",{className:"flex items-center gap-1",children:[T.jsx(u_,{className:"w-3.5 h-3.5 text-slate-500"}),r.location]})]})]}),T.jsx("div",{className:"text-sm font-semibold text-cyan-300/90 mb-4 font-mono",children:r.company}),T.jsx("ul",{className:"space-y-2 mb-5",children:r.description.map((i,s)=>T.jsxs("li",{className:"flex items-start gap-2 text-sm text-slate-300 leading-relaxed",children:[T.jsx(o_,{className:"w-4 h-4 text-cyan-400 mt-0.5 shrink-0"}),T.jsx("span",{children:i})]},s))}),T.jsx("div",{className:"flex flex-wrap gap-2 pt-3 border-t border-slate-800/80",children:r.technologies.map((i,s)=>T.jsxs("span",{className:"text-xs bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800 font-mono",children:["#",i]},s))})]})]},r.id))})]}),s3=()=>{const[r,e]=at.useState(ih[0]),[i,s]=at.useState(ih[0].code),[l,c]=at.useState([]),[d,p]=at.useState(!1),m=()=>{dt.playClick(),p(!0),c(["[System] Executing snippet in Web Sandbox worker..."]),setTimeout(()=>{try{const h=[],x={log:(...g)=>h.push(g.map(b=>typeof b=="object"?JSON.stringify(b):String(b)).join(" ")),error:(...g)=>h.push(`[ERROR] ${g.join(" ")}`),warn:(...g)=>h.push(`[WARN] ${g.join(" ")}`)};new Function("console",i)(x),h.length===0&&h.push("Execution finished successfully with no printed output."),c(g=>[...g,...h,"[System] Sandbox process completed with code 0."]),dt.playSuccess()}catch(h){c(x=>[...x,`[Runtime Exception] ${h.message}`])}finally{p(!1)}},400)};return T.jsxs("section",{id:"playground",className:"py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6",children:[T.jsxs("div",{className:"mb-12",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3",children:[T.jsx(cu,{className:"w-3.5 h-3.5"}),T.jsx("span",{children:"INTERACTIVE SANDBOX ENVIRONMENT"})]}),T.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:["3D & JavaScript ",T.jsx("span",{className:"text-cyan-400",children:"Playground"})]}),T.jsx("p",{className:"text-slate-400 mt-2 max-w-2xl text-sm sm:text-base",children:"Test real-time code logic, tweak 3D vector parameters, and execute live algorithms right inside the browser."})]}),T.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12",children:[T.jsxs("div",{className:"lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between",children:[T.jsxs("div",{children:[T.jsx("div",{className:"flex items-center gap-2 mb-4 overflow-x-auto pb-2",children:ih.map(h=>T.jsx("button",{onClick:()=>{dt.playClick(),e(h),s(h.code),c([])},className:`px-3.5 py-1.5 rounded-lg text-xs font-mono transition whitespace-nowrap ${r.id===h.id?"bg-cyan-500 text-slate-950 font-bold":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:h.title},h.id))}),T.jsx("p",{className:"text-xs text-slate-400 mb-3",children:r.description}),T.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:T.jsx("textarea",{value:i,onChange:h=>s(h.target.value),rows:12,className:"w-full bg-transparent p-4 font-mono text-xs text-emerald-400 focus:outline-none resize-none leading-relaxed",spellCheck:!1})})]}),T.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[T.jsxs("span",{className:"text-xs font-mono text-slate-500",children:["Language: ",T.jsx("span",{className:"text-cyan-400",children:r.language})]}),T.jsxs("button",{onClick:m,disabled:d,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition hover:scale-105 disabled:opacity-50",children:[d?T.jsx(f_,{className:"w-4 h-4 animate-spin"}):T.jsx(B2,{className:"w-4 h-4 fill-slate-950"}),T.jsx("span",{children:"Run Code Snippet"})]})]})]}),T.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-6 flex flex-col justify-between font-mono text-xs",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-slate-400",children:[T.jsxs("span",{className:"flex items-center gap-2",children:[T.jsx(il,{className:"w-4 h-4 text-emerald-400"})," Console Terminal Output"]}),T.jsx("button",{onClick:()=>c([]),className:"text-[11px] hover:text-white text-slate-500 transition",children:"Clear"})]}),T.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto",children:l.length===0?T.jsx("p",{className:"text-slate-600 italic",children:'Press "Run Code Snippet" to view real-time output console messages.'}):l.map((h,x)=>T.jsx("div",{className:`leading-relaxed ${h.startsWith("[ERROR]")?"text-rose-400":h.startsWith("[System]")?"text-cyan-400":"text-slate-300"}`,children:h},x))})]}),T.jsxs("div",{className:"pt-4 border-t border-slate-900 text-[11px] text-slate-500 flex items-center justify-between",children:[T.jsx("span",{children:"Status: Ready"}),T.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[T.jsx(us,{className:"w-3 h-3"})," Isolated Worker Sandbox"]})]})]})]})]})};var _p={};(function r(e,i,s,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",p=(function(){if(!e.OffscreenCanvas)return!1;try{var G=new OffscreenCanvas(1,1),M=G.getContext("2d");M.fillRect(0,0,1,1);var F=G.transferToImageBitmap();M.createPattern(F,"no-repeat")}catch{return!1}return!0})();function m(){}function h(G){var M=i.exports.Promise,F=M!==void 0?M:e.Promise;return typeof F=="function"?new F(G):(G(m,m),null)}var x=(function(G,M){return{transform:function(F){if(G)return F;if(M.has(F))return M.get(F);var le=new OffscreenCanvas(F.width,F.height),_e=le.getContext("2d");return _e.drawImage(F,0,0),M.set(F,le),le},clear:function(){M.clear()}}})(p,new Map),v=(function(){var G=Math.floor(16.666666666666668),M,F,le={},_e=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(Te){var Z=Math.random();return le[Z]=requestAnimationFrame(function se(de){_e===de||_e+G-1<de?(_e=de,delete le[Z],Te()):le[Z]=requestAnimationFrame(se)}),Z},F=function(Te){le[Te]&&cancelAnimationFrame(le[Te])}):(M=function(Te){return setTimeout(Te,G)},F=function(Te){return clearTimeout(Te)}),{frame:M,cancel:F}})(),g=(function(){var G,M,F={};function le(_e){function Te(Z,se){_e.postMessage({options:Z||{},callback:se})}_e.init=function(se){var de=se.transferControlToOffscreen();_e.postMessage({canvas:de},[de])},_e.fire=function(se,de,we){if(M)return Te(se,null),M;var He=Math.random().toString(36).slice(2);return M=h(function(Le){function lt(Je){Je.data.callback===He&&(delete F[He],_e.removeEventListener("message",lt),M=null,x.clear(),we(),Le())}_e.addEventListener("message",lt),Te(se,He),F[He]=lt.bind(null,{data:{callback:He}})}),M},_e.reset=function(){_e.postMessage({reset:!0});for(var se in F)F[se](),delete F[se]}}return function(){if(G)return G;if(!s&&c){var _e=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{G=new Worker(URL.createObjectURL(new Blob([_e])))}catch(Te){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Te),null}le(G)}return G}})(),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(G,M){return M?M(G):G}function D(G){return G!=null}function S(G,M,F){return w(G&&D(G[M])?G[M]:b[M],F)}function y(G){return G<0?0:Math.floor(G)}function U(G,M){return Math.floor(Math.random()*(M-G))+G}function I(G){return parseInt(G,16)}function N(G){return G.map(B)}function B(G){var M=String(G).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:I(M.substring(0,2)),g:I(M.substring(2,4)),b:I(M.substring(4,6))}}function L(G){var M=S(G,"origin",Object);return M.x=S(M,"x",Number),M.y=S(M,"y",Number),M}function z(G){G.width=document.documentElement.clientWidth,G.height=document.documentElement.clientHeight}function A(G){var M=G.getBoundingClientRect();G.width=M.width,G.height=M.height}function O(G){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=G,M}function W(G,M,F,le,_e,Te,Z,se,de){G.save(),G.translate(M,F),G.rotate(Te),G.scale(le,_e),G.arc(0,0,1,Z,se,de),G.restore()}function X(G){var M=G.angle*(Math.PI/180),F=G.spread*(Math.PI/180);return{x:G.x,y:G.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:G.startVelocity*.5+Math.random()*G.startVelocity,angle2D:-M+(.5*F-Math.random()*F),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:G.color,shape:G.shape,tick:0,totalTicks:G.ticks,decay:G.decay,drift:G.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:G.gravity*3,ovalScalar:.6,scalar:G.scalar,flat:G.flat}}function q(G,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var F=M.tick++/M.totalTicks,le=M.x+M.random*M.tiltCos,_e=M.y+M.random*M.tiltSin,Te=M.wobbleX+M.random*M.tiltCos,Z=M.wobbleY+M.random*M.tiltSin;if(G.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-F)+")",G.beginPath(),d&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))G.fill(V(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(Te-le)*.1,Math.abs(Z-_e)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var se=Math.PI/10*M.wobble,de=Math.abs(Te-le)*.1,we=Math.abs(Z-_e)*.1,He=M.shape.bitmap.width*M.scalar,Le=M.shape.bitmap.height*M.scalar,lt=new DOMMatrix([Math.cos(se)*de,Math.sin(se)*de,-Math.sin(se)*we,Math.cos(se)*we,M.x,M.y]);lt.multiplySelf(new DOMMatrix(M.shape.matrix));var Je=G.createPattern(x.transform(M.shape.bitmap),"no-repeat");Je.setTransform(lt),G.globalAlpha=1-F,G.fillStyle=Je,G.fillRect(M.x-He/2,M.y-Le/2,He,Le),G.globalAlpha=1}else if(M.shape==="circle")G.ellipse?G.ellipse(M.x,M.y,Math.abs(Te-le)*M.ovalScalar,Math.abs(Z-_e)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):W(G,M.x,M.y,Math.abs(Te-le)*M.ovalScalar,Math.abs(Z-_e)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var ke=Math.PI/2*3,st=4*M.scalar,rt=8*M.scalar,Ct=M.x,Dt=M.y,Bt=5,Ut=Math.PI/Bt;Bt--;)Ct=M.x+Math.cos(ke)*rt,Dt=M.y+Math.sin(ke)*rt,G.lineTo(Ct,Dt),ke+=Ut,Ct=M.x+Math.cos(ke)*st,Dt=M.y+Math.sin(ke)*st,G.lineTo(Ct,Dt),ke+=Ut;else G.moveTo(Math.floor(M.x),Math.floor(M.y)),G.lineTo(Math.floor(M.wobbleX),Math.floor(_e)),G.lineTo(Math.floor(Te),Math.floor(Z)),G.lineTo(Math.floor(le),Math.floor(M.wobbleY));return G.closePath(),G.fill(),M.tick<M.totalTicks}function pe(G,M,F,le,_e){var Te=M.slice(),Z=G.getContext("2d"),se,de,we=h(function(He){function Le(){se=de=null,Z.clearRect(0,0,le.width,le.height),x.clear(),_e(),He()}function lt(){s&&!(le.width===l.width&&le.height===l.height)&&(le.width=G.width=l.width,le.height=G.height=l.height),!le.width&&!le.height&&(F(G),le.width=G.width,le.height=G.height),Z.clearRect(0,0,le.width,le.height),Te=Te.filter(function(Je){return q(Z,Je)}),Te.length?se=v.frame(lt):Le()}se=v.frame(lt),de=Le});return{addFettis:function(He){return Te=Te.concat(He),we},canvas:G,promise:we,reset:function(){se&&v.cancel(se),de&&de()}}}function ve(G,M){var F=!G,le=!!S(M||{},"resize"),_e=!1,Te=S(M,"disableForReducedMotion",Boolean),Z=c&&!!S(M||{},"useWorker"),se=Z?g():null,de=F?z:A,we=G&&se?!!G.__confetti_initialized:!1,He=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Le;function lt(ke,st,rt){for(var Ct=S(ke,"particleCount",y),Dt=S(ke,"angle",Number),Bt=S(ke,"spread",Number),Ut=S(ke,"startVelocity",Number),qt=S(ke,"decay",Number),nn=S(ke,"gravity",Number),K=S(ke,"drift",Number),It=S(ke,"colors",N),Nt=S(ke,"ticks",Number),P=S(ke,"shapes"),E=S(ke,"scalar"),ee=!!S(ke,"flat"),ce=L(ke),me=Ct,Ce=[],Ue=G.width*ce.x,ge=G.height*ce.y;me--;)Ce.push(X({x:Ue,y:ge,angle:Dt,spread:Bt,startVelocity:Ut,color:It[me%It.length],shape:P[U(0,P.length)],ticks:Nt,decay:qt,gravity:nn,drift:K,scalar:E,flat:ee}));return Le?Le.addFettis(Ce):(Le=pe(G,Ce,de,st,rt),Le.promise)}function Je(ke){var st=Te||S(ke,"disableForReducedMotion",Boolean),rt=S(ke,"zIndex",Number);if(st&&He)return h(function(Ut){Ut()});F&&Le?G=Le.canvas:F&&!G&&(G=O(rt),document.body.appendChild(G)),le&&!we&&de(G);var Ct={width:G.width,height:G.height};se&&!we&&se.init(G),we=!0,se&&(G.__confetti_initialized=!0);function Dt(){if(se){var Ut={getBoundingClientRect:function(){if(!F)return G.getBoundingClientRect()}};de(Ut),se.postMessage({resize:{width:Ut.width,height:Ut.height}});return}Ct.width=Ct.height=null}function Bt(){Le=null,le&&(_e=!1,e.removeEventListener("resize",Dt)),F&&G&&(document.body.contains(G)&&document.body.removeChild(G),G=null,we=!1)}return le&&!_e&&(_e=!0,e.addEventListener("resize",Dt,!1)),se?se.fire(ke,Ct,Bt):lt(ke,Ct,Bt)}return Je.reset=function(){se&&se.reset(),Le&&Le.reset()},Je}var J;function H(){return J||(J=ve(null,{useWorker:!0,resize:!0})),J}function V(G,M,F,le,_e,Te,Z){var se=new Path2D(G),de=new Path2D;de.addPath(se,new DOMMatrix(M));var we=new Path2D;return we.addPath(de,new DOMMatrix([Math.cos(Z)*_e,Math.sin(Z)*_e,-Math.sin(Z)*Te,Math.cos(Z)*Te,F,le])),we}function ne(G){if(!d)throw new Error("path confetti are not supported in this browser");var M,F;typeof G=="string"?M=G:(M=G.path,F=G.matrix);var le=new Path2D(M),_e=document.createElement("canvas"),Te=_e.getContext("2d");if(!F){for(var Z=1e3,se=Z,de=Z,we=0,He=0,Le,lt,Je=0;Je<Z;Je+=2)for(var ke=0;ke<Z;ke+=2)Te.isPointInPath(le,Je,ke,"nonzero")&&(se=Math.min(se,Je),de=Math.min(de,ke),we=Math.max(we,Je),He=Math.max(He,ke));Le=we-se,lt=He-de;var st=10,rt=Math.min(st/Le,st/lt);F=[rt,0,0,rt,-Math.round(Le/2+se)*rt,-Math.round(lt/2+de)*rt]}return{type:"path",path:M,matrix:F}}function ye(G){var M,F=1,le="#000000",_e='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof G=="string"?M=G:(M=G.text,F="scalar"in G?G.scalar:F,_e="fontFamily"in G?G.fontFamily:_e,le="color"in G?G.color:le);var Te=10*F,Z=""+Te+"px "+_e,se=new OffscreenCanvas(Te,Te),de=se.getContext("2d");de.font=Z;var we=de.measureText(M),He=Math.ceil(we.actualBoundingBoxRight+we.actualBoundingBoxLeft),Le=Math.ceil(we.actualBoundingBoxAscent+we.actualBoundingBoxDescent),lt=2,Je=we.actualBoundingBoxLeft+lt,ke=we.actualBoundingBoxAscent+lt;He+=lt+lt,Le+=lt+lt,se=new OffscreenCanvas(He,Le),de=se.getContext("2d"),de.font=Z,de.fillStyle=le,de.fillText(M,Je,ke);var st=1/F;return{type:"bitmap",bitmap:se.transferToImageBitmap(),matrix:[st,0,0,st,-He*st/2,-Le*st/2]}}i.exports=function(){return H().apply(this,arguments)},i.exports.reset=function(){H().reset()},i.exports.create=ve,i.exports.shapeFromPath=ne,i.exports.shapeFromText=ye})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),_p,!1);const r3=_p.exports;_p.exports.create;const o3=()=>{const[r,e]=at.useState(!1),[i,s]=at.useState({name:"",email:"",message:""}),[l,c]=at.useState(!1),[d,p]=at.useState(!1),m=()=>{dt.playClick(),navigator.clipboard.writeText(pi.email),e(!0),setTimeout(()=>e(!1),2e3)},h=x=>{x.preventDefault(),!(!i.name||!i.email||!i.message)&&(dt.playClick(),c(!0),setTimeout(()=>{c(!1),p(!0),dt.playSuccess(),r3({particleCount:100,spread:70,origin:{y:.6},colors:["#00f3ff","#a855f7","#10b981","#3b82f6"]}),s({name:"",email:"",message:""}),setTimeout(()=>p(!1),4e3)},600))};return T.jsxs("section",{id:"contact",className:"py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6",children:[T.jsxs("div",{className:"mb-12 text-center md:text-left",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3",children:[T.jsx(gp,{className:"w-3.5 h-3.5"}),T.jsx("span",{children:"INITIATE COLLABORATION"})]}),T.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:["Let's Build Something ",T.jsx("span",{className:"text-cyan-400",children:"Extraordinary"})]}),T.jsx("p",{className:"text-slate-400 mt-2 max-w-2xl text-sm sm:text-base",children:"Have an exciting 3D web concept, full-stack project, or engineering role? Send a message directly to get started."})]}),T.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[T.jsx("div",{className:"lg:col-span-5 space-y-6",children:T.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 shadow-xl backdrop-blur-md space-y-6",children:[T.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[T.jsx(us,{className:"w-4 h-4 text-cyan-400"})," Direct Channels"]}),T.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between",children:[T.jsxs("div",{className:"overflow-hidden mr-2",children:[T.jsx("span",{className:"text-xs text-slate-500 font-mono block",children:"Primary Email"}),T.jsx("span",{className:"text-sm font-bold text-cyan-400 font-mono truncate block",children:pi.email})]}),T.jsx("button",{onClick:m,className:"p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition shrink-0",title:"Copy Email Address",children:r?T.jsx(u2,{className:"w-4 h-4 text-emerald-400"}):T.jsx(v2,{className:"w-4 h-4"})})]}),T.jsxs("div",{className:"space-y-3 pt-2 text-xs font-mono text-slate-300 border-t border-slate-800",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("span",{className:"flex items-center gap-2 text-slate-400",children:[T.jsx(u_,{className:"w-4 h-4 text-cyan-400"})," Location:"]}),T.jsx("span",{className:"font-bold text-white",children:pi.location})]}),T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("span",{className:"flex items-center gap-2 text-slate-400",children:[T.jsx(h2,{className:"w-4 h-4 text-emerald-400"})," Availability:"]}),T.jsx("span",{className:"text-emerald-400 font-bold",children:"Open for Full-time & Remote"})]})]}),T.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center gap-3",children:[T.jsxs("a",{href:pi.github,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition",children:[T.jsx(fu,{className:"w-4 h-4"})," GitHub"]}),T.jsxs("a",{href:pi.linkedin,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition",children:[T.jsx(c_,{className:"w-4 h-4"})," LinkedIn"]})]})]})}),T.jsx("div",{className:"lg:col-span-7",children:T.jsxs("form",{onSubmit:h,className:"bg-slate-900/90 p-8 rounded-2xl border border-cyan-500/30 shadow-2xl backdrop-blur-xl space-y-5",children:[T.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[T.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[T.jsx(O2,{className:"w-4 h-4 text-cyan-400"})," Send a Direct Message"]}),T.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Secure Transmission"})]}),d&&T.jsx("div",{className:"p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono animate-in fade-in",children:"✓ Message dispatched successfully! Thejitha will get back to you shortly."}),T.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[T.jsxs("div",{children:[T.jsx("label",{className:"text-xs font-mono text-slate-400 mb-1 block",children:"Your Name"}),T.jsx("input",{type:"text",required:!0,value:i.name,onChange:x=>s({...i,name:x.target.value}),placeholder:"e.g. Alex Mercer",className:"w-full bg-slate-950 border border-slate-800 text-xs text-white px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 transition"})]}),T.jsxs("div",{children:[T.jsx("label",{className:"text-xs font-mono text-slate-400 mb-1 block",children:"Email Address"}),T.jsx("input",{type:"email",required:!0,value:i.email,onChange:x=>s({...i,email:x.target.value}),placeholder:"alex@company.com",className:"w-full bg-slate-950 border border-slate-800 text-xs text-white px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 transition"})]})]}),T.jsxs("div",{children:[T.jsx("label",{className:"text-xs font-mono text-slate-400 mb-1 block",children:"Project / Message Details"}),T.jsx("textarea",{required:!0,rows:5,value:i.message,onChange:x=>s({...i,message:x.target.value}),placeholder:"Tell me about your project goals, scope, timeline, or open role...",className:"w-full bg-slate-950 border border-slate-800 text-xs text-white px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 transition resize-none"})]}),T.jsxs("button",{type:"submit",disabled:l,className:"w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02] disabled:opacity-50",children:[T.jsx(h_,{className:"w-4 h-4"}),T.jsx("span",{children:l?"Transmitting Message...":"Transmit Message"})]})]})})]})]})},l3=()=>{const r=()=>{dt.playClick(),window.scrollTo({top:0,behavior:"smooth"})};return T.jsx("footer",{className:"relative z-10 border-t border-slate-800 bg-slate-950 py-12",children:T.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6",children:[T.jsxs("div",{className:"space-y-2 text-center md:text-left",children:[T.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-2",children:[T.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),T.jsx("span",{className:"text-xs font-mono text-slate-300 font-bold",children:"Thejitha C • 3D Web & Full-Stack Architect"})]}),T.jsx("p",{className:"text-xs text-slate-500 font-mono",children:"Crafted with React 19, Three.js, WebGL, TypeScript, Tailwind CSS, & Gemini AI"})]}),T.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-slate-400",children:[T.jsx("a",{href:pi.github,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"hover:text-cyan-400 transition",children:"GitHub"}),T.jsx("span",{children:"•"}),T.jsx("a",{href:pi.linkedin,target:"_blank",rel:"noreferrer",onClick:()=>dt.playClick(),className:"hover:text-cyan-400 transition",children:"LinkedIn"}),T.jsx("span",{children:"•"}),T.jsx("a",{href:`mailto:${pi.email}`,onClick:()=>dt.playClick(),className:"hover:text-cyan-400 transition",children:"Email"})]}),T.jsxs("button",{onClick:r,className:"group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 font-mono text-xs transition shadow-lg",title:"Return to top of page",children:[T.jsx("span",{children:"Top"}),T.jsx($A,{className:"w-4 h-4 group-hover:-translate-y-1 transition-transform"})]})]})})},c3=({isOpen:r,onClose:e,onOpenAIChat:i})=>{const[s,l]=at.useState("");if(at.useEffect(()=>{const p=m=>{(m.metaKey||m.ctrlKey)&&m.key==="k"&&(m.preventDefault(),dt.playClick(),r&&e()),m.key==="Escape"&&r&&e()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r,e]),!r)return null;const d=[{id:"hero",label:"Go to Overview / Hero",icon:xp,href:"#hero"},{id:"skills",label:"Go to 3D Skills Polyhedron",icon:uu,href:"#skills"},{id:"projects",label:"Go to Featured Projects Showcase",icon:lu,href:"#projects"},{id:"experience",label:"Go to Career & Education Timeline",icon:il,href:"#experience"},{id:"playground",label:"Launch Interactive 3D Sandbox",icon:cu,href:"#playground"},{id:"contact",label:"Contact Thejitha Directly",icon:gp,href:"#contact"},{id:"ai",label:"Open Gemini AI Representative Chat",icon:us,action:i}].filter(p=>p.label.toLowerCase().includes(s.toLowerCase()));return T.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200",children:T.jsxs("div",{className:"relative w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden",children:[T.jsxs("div",{className:"flex items-center p-4 border-b border-slate-800 bg-slate-950",children:[T.jsx(d_,{className:"w-4 h-4 text-cyan-400 mr-3 shrink-0"}),T.jsx("input",{type:"text",autoFocus:!0,placeholder:"Type a command or section name...",value:s,onChange:p=>l(p.target.value),className:"w-full bg-transparent text-sm text-white focus:outline-none font-mono"}),T.jsx("button",{onClick:()=>{dt.playClick(),e()},className:"p-1 text-slate-500 hover:text-white transition",children:T.jsx(vp,{className:"w-4 h-4"})})]}),T.jsx("div",{className:"p-2 max-h-80 overflow-y-auto space-y-1",children:d.length===0?T.jsx("div",{className:"p-4 text-xs text-slate-500 text-center font-mono",children:"No matching commands found."}):d.map(p=>{const m=p.icon;return T.jsxs("button",{onClick:()=>{dt.playClick(),e(),p.action?p.action():p.href&&(window.location.href=p.href)},className:"w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-xs text-slate-200 hover:text-cyan-400 font-mono transition",children:[T.jsx(m,{className:"w-4 h-4 text-cyan-400 shrink-0"}),T.jsx("span",{children:p.label})]},p.id)})}),T.jsxs("div",{className:"p-3 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-500 font-mono flex items-center justify-between",children:[T.jsx("span",{children:"Use ↑ ↓ to navigate"}),T.jsx("span",{children:"Press ESC to close"})]})]})})},u3=({isOpen:r,onClose:e})=>{const[i,s]=at.useState([{id:"1",sender:"assistant",text:"Hello! I am Thejitha C's virtual AI Representative powered by Gemini. Ask me anything about Thejitha's tech stack, 3D WebGL projects, availability, or experience!",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[l,c]=at.useState(""),[d,p]=at.useState(!1),m=at.useRef(null),h=["What is Thejitha's core tech stack?","Is Thejitha available for remote roles?","Tell me about the Nexus 3D Cyber Deck project.","How does Thejitha optimize 3D WebGL scenes?"];if(at.useEffect(()=>{var v;(v=m.current)==null||v.scrollIntoView({behavior:"smooth"})},[i]),!r)return null;const x=async v=>{const g=v||l;if(!g.trim()||d)return;dt.playClick();const b={id:Date.now().toString(),sender:"user",text:g,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(w=>[...w,b]),v||c(""),p(!0);try{const S=(await(await fetch("https://thejitha-ai-api.onrender.com/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:g,history:i.map(U=>({sender:U.sender,text:U.text}))})})).json()).reply||"I am glad to help! Feel free to ask more questions or reach out directly to Thejitha at thejithadev@gmail.com.",y={id:(Date.now()+1).toString(),sender:"assistant",text:S,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(U=>[...U,y]),dt.playSuccess()}catch{s(D=>[...D,{id:(Date.now()+1).toString(),sender:"assistant",text:"I encountered a minor network issue. You can reach Thejitha directly at thejithadev@gmail.com!",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])}finally{p(!1)}};return T.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300",children:T.jsxs("div",{className:"relative w-full max-w-2xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]",children:[T.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("div",{className:"p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20",children:T.jsx(us,{className:"w-5 h-5 animate-pulse"})}),T.jsxs("div",{children:[T.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:["AI Thejitha C ",T.jsx("span",{className:"text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30",children:"Gemini AI"})]}),T.jsx("span",{className:"text-xs text-slate-400",children:"Ask about work, projects, 3D experience, or rates"})]})]}),T.jsx("button",{onClick:()=>{dt.playClick(),e()},className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",children:T.jsx(vp,{className:"w-5 h-5"})})]}),T.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-4",children:[i.map(v=>T.jsxs("div",{className:`flex gap-3 ${v.sender==="user"?"justify-end":"justify-start"}`,children:[v.sender==="assistant"&&T.jsx("div",{className:"w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-1",children:T.jsx(t2,{className:"w-4 h-4"})}),T.jsxs("div",{className:`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${v.sender==="user"?"bg-cyan-500 text-slate-950 font-medium rounded-tr-none":"bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-tl-none"}`,children:[T.jsx("p",{className:"whitespace-pre-wrap",children:v.text}),T.jsx("span",{className:"text-[10px] opacity-60 block mt-1 text-right font-mono",children:v.timestamp})]}),v.sender==="user"&&T.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1",children:T.jsx(xp,{className:"w-4 h-4"})})]},v.id)),d&&T.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 bg-slate-950 p-3 rounded-xl border border-slate-800 w-fit",children:[T.jsx(f_,{className:"w-3.5 h-3.5 animate-spin"}),T.jsx("span",{children:"AI Representative is typing response..."})]}),T.jsx("div",{ref:m})]}),T.jsxs("div",{className:"px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center gap-2 overflow-x-auto",children:[T.jsx("span",{className:"text-[10px] font-mono text-slate-500 shrink-0 uppercase tracking-wider",children:"Quick Prompts:"}),h.map((v,g)=>T.jsx("button",{onClick:()=>x(v),className:"text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 px-3 py-1 rounded-full border border-slate-800 whitespace-nowrap transition",children:v},g))]}),T.jsxs("div",{className:"p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2",children:[T.jsx("input",{type:"text",value:l,onChange:v=>c(v.target.value),onKeyDown:v=>v.key==="Enter"&&x(),placeholder:"Type your message to AI Thejitha...",className:"flex-1 bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500"}),T.jsx("button",{onClick:()=>x(),disabled:!l.trim()||d,className:"p-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-bold transition disabled:opacity-50",children:T.jsx(h_,{className:"w-4 h-4"})})]})]})})};function f3(){const[r,e]=at.useState("cyberpunk"),[i,s]=at.useState(!1),[l,c]=at.useState(!1),d=p=>{switch(p){case"cyberpunk":return"bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950";case"matrix":return"bg-slate-950 text-emerald-100 selection:bg-emerald-500 selection:text-slate-950";case"neon-violet":return"bg-slate-950 text-purple-100 selection:bg-purple-500 selection:text-slate-950";case"deep-cosmos":return"bg-slate-950 text-sky-100 selection:bg-sky-500 selection:text-slate-950";default:return"bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950"}};return T.jsxs("div",{className:`min-h-screen relative font-sans antialiased overflow-x-hidden ${d(r)}`,children:[T.jsx(XA,{}),T.jsx(kA,{theme:r}),T.jsx(K2,{theme:r,onThemeChange:p=>e(p),onOpenCommandPalette:()=>s(!0),onOpenAIChat:()=>c(!0)}),T.jsxs("main",{className:"relative z-10",children:[T.jsx($2,{onOpenAIChat:()=>c(!0)}),T.jsx(t3,{}),T.jsx(i3,{}),T.jsx(a3,{}),T.jsx(s3,{}),T.jsx(o3,{})]}),T.jsx(l3,{}),T.jsx(c3,{isOpen:i,onClose:()=>s(!1),onOpenAIChat:()=>c(!0)}),T.jsx(u3,{isOpen:l,onClose:()=>c(!1)})]})}TS.createRoot(document.getElementById("root")).render(T.jsx(at.StrictMode,{children:T.jsx(f3,{})}));
