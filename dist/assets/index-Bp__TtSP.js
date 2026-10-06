var Xv=Object.defineProperty;var Yv=(r,e,n)=>e in r?Xv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var $e=(r,e,n)=>Yv(r,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Xm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xu={exports:{}},No={},_u={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function qv(){if(Rp)return vt;Rp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(w){return w===null||typeof w!="object"?null:(w=y&&w[y]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(w,j,ve){this.props=w,this.context=j,this.refs=b,this.updater=ve||M}S.prototype.isReactComponent={},S.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(w,j,ve){this.props=w,this.context=j,this.refs=b,this.updater=ve||M}var P=L.prototype=new v;P.constructor=L,E(P,S.prototype),P.isPureReactComponent=!0;var C=Array.isArray,Y=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function V(w,j,ve){var X,Z={},le=null,ie=null;if(j!=null)for(X in j.ref!==void 0&&(ie=j.ref),j.key!==void 0&&(le=""+j.key),j)Y.call(j,X)&&!O.hasOwnProperty(X)&&(Z[X]=j[X]);var pe=arguments.length-2;if(pe===1)Z.children=ve;else if(1<pe){for(var Te=Array(pe),Le=0;Le<pe;Le++)Te[Le]=arguments[Le+2];Z.children=Te}if(w&&w.defaultProps)for(X in pe=w.defaultProps,pe)Z[X]===void 0&&(Z[X]=pe[X]);return{$$typeof:r,type:w,key:le,ref:ie,props:Z,_owner:k.current}}function D(w,j){return{$$typeof:r,type:w.type,key:j,ref:w.ref,props:w.props,_owner:w._owner}}function R(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function B(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ve){return j[ve]})}var ae=/\/+/g;function ne(w,j){return typeof w=="object"&&w!==null&&w.key!=null?B(""+w.key):j.toString(36)}function he(w,j,ve,X,Z){var le=typeof w;(le==="undefined"||le==="boolean")&&(w=null);var ie=!1;if(w===null)ie=!0;else switch(le){case"string":case"number":ie=!0;break;case"object":switch(w.$$typeof){case r:case e:ie=!0}}if(ie)return ie=w,Z=Z(ie),w=X===""?"."+ne(ie,0):X,C(Z)?(ve="",w!=null&&(ve=w.replace(ae,"$&/")+"/"),he(Z,j,ve,"",function(Le){return Le})):Z!=null&&(R(Z)&&(Z=D(Z,ve+(!Z.key||ie&&ie.key===Z.key?"":(""+Z.key).replace(ae,"$&/")+"/")+w)),j.push(Z)),1;if(ie=0,X=X===""?".":X+":",C(w))for(var pe=0;pe<w.length;pe++){le=w[pe];var Te=X+ne(le,pe);ie+=he(le,j,ve,Te,Z)}else if(Te=x(w),typeof Te=="function")for(w=Te.call(w),pe=0;!(le=w.next()).done;)le=le.value,Te=X+ne(le,pe++),ie+=he(le,j,ve,Te,Z);else if(le==="object")throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ie}function ge(w,j,ve){if(w==null)return w;var X=[],Z=0;return he(w,X,"","",function(le){return j.call(ve,le,Z++)}),X}function ue(w){if(w._status===-1){var j=w._result;j=j(),j.then(function(ve){(w._status===0||w._status===-1)&&(w._status=1,w._result=ve)},function(ve){(w._status===0||w._status===-1)&&(w._status=2,w._result=ve)}),w._status===-1&&(w._status=0,w._result=j)}if(w._status===1)return w._result.default;throw w._result}var fe={current:null},G={transition:null},de={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:G,ReactCurrentOwner:k};function I(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ge,forEach:function(w,j,ve){ge(w,function(){j.apply(this,arguments)},ve)},count:function(w){var j=0;return ge(w,function(){j++}),j},toArray:function(w){return ge(w,function(j){return j})||[]},only:function(w){if(!R(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},vt.Component=S,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=L,vt.StrictMode=s,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,vt.act=I,vt.cloneElement=function(w,j,ve){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=E({},w.props),Z=w.key,le=w.ref,ie=w._owner;if(j!=null){if(j.ref!==void 0&&(le=j.ref,ie=k.current),j.key!==void 0&&(Z=""+j.key),w.type&&w.type.defaultProps)var pe=w.type.defaultProps;for(Te in j)Y.call(j,Te)&&!O.hasOwnProperty(Te)&&(X[Te]=j[Te]===void 0&&pe!==void 0?pe[Te]:j[Te])}var Te=arguments.length-2;if(Te===1)X.children=ve;else if(1<Te){pe=Array(Te);for(var Le=0;Le<Te;Le++)pe[Le]=arguments[Le+2];X.children=pe}return{$$typeof:r,type:w.type,key:Z,ref:le,props:X,_owner:ie}},vt.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:c,_context:w},w.Consumer=w},vt.createElement=V,vt.createFactory=function(w){var j=V.bind(null,w);return j.type=w,j},vt.createRef=function(){return{current:null}},vt.forwardRef=function(w){return{$$typeof:d,render:w}},vt.isValidElement=R,vt.lazy=function(w){return{$$typeof:_,_payload:{_status:-1,_result:w},_init:ue}},vt.memo=function(w,j){return{$$typeof:g,type:w,compare:j===void 0?null:j}},vt.startTransition=function(w){var j=G.transition;G.transition={};try{w()}finally{G.transition=j}},vt.unstable_act=I,vt.useCallback=function(w,j){return fe.current.useCallback(w,j)},vt.useContext=function(w){return fe.current.useContext(w)},vt.useDebugValue=function(){},vt.useDeferredValue=function(w){return fe.current.useDeferredValue(w)},vt.useEffect=function(w,j){return fe.current.useEffect(w,j)},vt.useId=function(){return fe.current.useId()},vt.useImperativeHandle=function(w,j,ve){return fe.current.useImperativeHandle(w,j,ve)},vt.useInsertionEffect=function(w,j){return fe.current.useInsertionEffect(w,j)},vt.useLayoutEffect=function(w,j){return fe.current.useLayoutEffect(w,j)},vt.useMemo=function(w,j){return fe.current.useMemo(w,j)},vt.useReducer=function(w,j,ve){return fe.current.useReducer(w,j,ve)},vt.useRef=function(w){return fe.current.useRef(w)},vt.useState=function(w){return fe.current.useState(w)},vt.useSyncExternalStore=function(w,j,ve){return fe.current.useSyncExternalStore(w,j,ve)},vt.useTransition=function(){return fe.current.useTransition()},vt.version="18.3.1",vt}var Np;function jd(){return Np||(Np=1,_u.exports=qv()),_u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function $v(){if(Pp)return No;Pp=1;var r=jd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,g){var _,y={},x=null,M=null;g!==void 0&&(x=""+g),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)s.call(h,_)&&!c.hasOwnProperty(_)&&(y[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:M,props:y,_owner:a.current}}return No.Fragment=n,No.jsx=u,No.jsxs=u,No}var Lp;function Kv(){return Lp||(Lp=1,xu.exports=$v()),xu.exports}var m=Kv(),dt=jd();const Ym=Xm(dt);var el={},yu={exports:{}},Nn={},Su={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function Zv(){return Dp||(Dp=1,(function(r){function e(G,de){var I=G.length;G.push(de);e:for(;0<I;){var w=I-1>>>1,j=G[w];if(0<a(j,de))G[w]=de,G[I]=j,I=w;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var de=G[0],I=G.pop();if(I!==de){G[0]=I;e:for(var w=0,j=G.length,ve=j>>>1;w<ve;){var X=2*(w+1)-1,Z=G[X],le=X+1,ie=G[le];if(0>a(Z,I))le<j&&0>a(ie,Z)?(G[w]=ie,G[le]=I,w=le):(G[w]=Z,G[X]=I,w=X);else if(le<j&&0>a(ie,I))G[w]=ie,G[le]=I,w=le;else break e}}return de}function a(G,de){var I=G.sortIndex-de.sortIndex;return I!==0?I:G.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],g=[],_=1,y=null,x=3,M=!1,E=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(G){for(var de=n(g);de!==null;){if(de.callback===null)s(g);else if(de.startTime<=G)s(g),de.sortIndex=de.expirationTime,e(h,de);else break;de=n(g)}}function C(G){if(b=!1,P(G),!E)if(n(h)!==null)E=!0,ue(Y);else{var de=n(g);de!==null&&fe(C,de.startTime-G)}}function Y(G,de){E=!1,b&&(b=!1,v(V),V=-1),M=!0;var I=x;try{for(P(de),y=n(h);y!==null&&(!(y.expirationTime>de)||G&&!B());){var w=y.callback;if(typeof w=="function"){y.callback=null,x=y.priorityLevel;var j=w(y.expirationTime<=de);de=r.unstable_now(),typeof j=="function"?y.callback=j:y===n(h)&&s(h),P(de)}else s(h);y=n(h)}if(y!==null)var ve=!0;else{var X=n(g);X!==null&&fe(C,X.startTime-de),ve=!1}return ve}finally{y=null,x=I,M=!1}}var k=!1,O=null,V=-1,D=5,R=-1;function B(){return!(r.unstable_now()-R<D)}function ae(){if(O!==null){var G=r.unstable_now();R=G;var de=!0;try{de=O(!0,G)}finally{de?ne():(k=!1,O=null)}}else k=!1}var ne;if(typeof L=="function")ne=function(){L(ae)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ge=he.port2;he.port1.onmessage=ae,ne=function(){ge.postMessage(null)}}else ne=function(){S(ae,0)};function ue(G){O=G,k||(k=!0,ne())}function fe(G,de){V=S(function(){G(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,ue(Y))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return n(h)},r.unstable_next=function(G){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var I=x;x=de;try{return G()}finally{x=I}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,de){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var I=x;x=G;try{return de()}finally{x=I}},r.unstable_scheduleCallback=function(G,de,I){var w=r.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?w+I:w):I=w,G){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=I+j,G={id:_++,callback:de,priorityLevel:G,startTime:I,expirationTime:j,sortIndex:-1},I>w?(G.sortIndex=I,e(g,G),n(h)===null&&G===n(g)&&(b?(v(V),V=-1):b=!0,fe(C,I-w))):(G.sortIndex=j,e(h,G),E||M||(E=!0,ue(Y))),G},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(G){var de=x;return function(){var I=x;x=de;try{return G.apply(this,arguments)}finally{x=I}}}})(Mu)),Mu}var Ip;function Jv(){return Ip||(Ip=1,Su.exports=Zv()),Su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function Qv(){if(Up)return Nn;Up=1;var r=jd(),e=Jv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return h.call(y,t)?!0:h.call(_,t)?!1:g.test(t)?y[t]=!0:(_[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,l,f,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,L);S[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,L);S[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,L);S[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,l)&&(o=null),l||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),G=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var I=Object.assign,w;function j(t){if(w===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+t}var ve=!1;function X(t,i){if(!t||ve)return"";ve=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),p=l.stack.split(`
`),T=f.length-1,F=p.length-1;1<=T&&0<=F&&f[T]!==p[F];)F--;for(;1<=T&&0<=F;T--,F--)if(f[T]!==p[F]){if(T!==1||F!==1)do if(T--,F--,0>F||f[T]!==p[F]){var H=`
`+f[T].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=T&&0<=F);break}}}finally{ve=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?j(t):""}function Z(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case k:return"Portal";case D:return"Profiler";case V:return"StrictMode";case ne:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ge:return i=t.displayName||null,i!==null?i:le(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return le(t(i))}catch{}}return null}function ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Te(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(t){var i=Te(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){l=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Je(t){t._valueTracker||(t._valueTracker=Le(t))}function Ke(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Te(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function z(t,i){var o=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Rt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function it(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function nt(t,i){it(t,i);var o=pe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?xt(t,i.type,o):i.hasOwnProperty("defaultValue")&&xt(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ve(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function xt(t,i,o){(i!=="number"||lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ke=Array.isArray;function U(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function A(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function te(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ke(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:pe(o)}}function _e(t,i){var o=pe(i.value),l=pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function rt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var Be=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ct(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ne=null,ce=null,xe=null;function Ie(t){if(t=mo(t)){if(typeof Ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ma(i),Ne(t.stateNode,t.type,i))}}function De(t){ce?xe?xe.push(t):xe=[t]:ce=t}function ut(){if(ce){var t=ce,i=xe;if(xe=ce=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function Ft(t,i){return t(i)}function $t(){}var St=!1;function wn(t,i,o){if(St)return t(i,o);St=!0;try{return Ft(t,i,o)}finally{St=!1,(ce!==null||xe!==null)&&($t(),ut())}}function vn(t,i){var o=t.stateNode;if(o===null)return null;var l=ma(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ts=!1;if(d)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{ts=!1}function wi(t,i,o,l,f,p,T,F,H){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(Me){this.onError(Me)}}var Ei=!1,Tr=null,br=!1,Yi=null,$o={onError:function(t){Ei=!0,Tr=t}};function ns(t,i,o,l,f,p,T,F,H){Ei=!1,Tr=null,wi.apply($o,arguments)}function Ko(t,i,o,l,f,p,T,F,H){if(ns.apply(this,arguments),Ei){if(Ei){var re=Tr;Ei=!1,Tr=null}else throw Error(n(198));br||(br=!0,Yi=re)}}function mi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Zo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Jo(t){if(mi(t)!==t)throw Error(n(188))}function Bl(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return Jo(f),t;if(p===l)return Jo(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=p;else{for(var T=!1,F=f.child;F;){if(F===o){T=!0,o=f,l=p;break}if(F===l){T=!0,l=f,o=p;break}F=F.sibling}if(!T){for(F=p.child;F;){if(F===o){T=!0,o=p,l=f;break}if(F===l){T=!0,l=p,o=f;break}F=F.sibling}if(!T)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function N(t){return t=Bl(t),t!==null?$(t):null}function $(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=$(t);if(i!==null)return i;t=t.sibling}return null}var se=e.unstable_scheduleCallback,oe=e.unstable_cancelCallback,K=e.unstable_shouldYield,Ce=e.unstable_requestPaint,be=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,je=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Ct=null,_t=null;function ln(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ct,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Tt,Ze=Math.log,ti=Math.LN2;function Tt(t){return t>>>=0,t===0?32:31-(Ze(t)/ti|0)|0}var cn=64,ni=4194304;function Kt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,p=t.pingedLanes,T=o&268435455;if(T!==0){var F=T&~f;F!==0?l=Kt(F):(p&=T,p!==0&&(l=Kt(p)))}else T=o&~f,T!==0?l=Kt(T):p!==0&&(l=Kt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ht(i),f=1<<o,l|=t[o],i&=~f;return l}function It(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-ht(p),F=1<<T,H=f[T];H===-1?((F&o)===0||(F&l)!==0)&&(f[T]=It(F,i)):H<=i&&(t.expiredLanes|=F),p&=~F}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xn(){var t=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),t}function Vn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function En(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ht(i),t[i]=o}function Qo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ht(o),p=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~p}}function Hl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ht(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var Lt=0;function af(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var lf,Vl,cf,uf,df,Gl=!1,ea=[],qi=null,$i=null,Ki=null,Js=new Map,Qs=new Map,Zi=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function eo(t,i,o,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=mo(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function m0(t,i,o,l,f){switch(i){case"focusin":return qi=eo(qi,t,i,o,l,f),!0;case"dragenter":return $i=eo($i,t,i,o,l,f),!0;case"mouseover":return Ki=eo(Ki,t,i,o,l,f),!0;case"pointerover":var p=f.pointerId;return Js.set(p,eo(Js.get(p)||null,t,i,o,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Qs.set(p,eo(Qs.get(p)||null,t,i,o,l,f)),!0}return!1}function hf(t){var i=Ar(t.target);if(i!==null){var o=mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Zo(o),i!==null){t.blockedOn=i,df(t.priority,function(){cf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Nt=l,o.target.dispatchEvent(l),Nt=null}else return i=mo(o),i!==null&&Vl(i),t.blockedOn=o,!1;i.shift()}return!0}function pf(t,i,o){ta(t)&&o.delete(i)}function g0(){Gl=!1,qi!==null&&ta(qi)&&(qi=null),$i!==null&&ta($i)&&($i=null),Ki!==null&&ta(Ki)&&(Ki=null),Js.forEach(pf),Qs.forEach(pf)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,g0)))}function no(t){function i(f){return to(f,t)}if(0<ea.length){to(ea[0],t);for(var o=1;o<ea.length;o++){var l=ea[o];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&to(qi,t),$i!==null&&to($i,t),Ki!==null&&to(Ki,t),Js.forEach(i),Qs.forEach(i),o=0;o<Zi.length;o++)l=Zi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)hf(o),o.blockedOn===null&&Zi.shift()}var is=C.ReactCurrentBatchConfig,na=!0;function v0(t,i,o,l){var f=Lt,p=is.transition;is.transition=null;try{Lt=1,jl(t,i,o,l)}finally{Lt=f,is.transition=p}}function x0(t,i,o,l){var f=Lt,p=is.transition;is.transition=null;try{Lt=4,jl(t,i,o,l)}finally{Lt=f,is.transition=p}}function jl(t,i,o,l){if(na){var f=Wl(t,i,o,l);if(f===null)lc(t,i,l,ia,o),ff(t,l);else if(m0(f,t,i,o,l))l.stopPropagation();else if(ff(t,l),i&4&&-1<p0.indexOf(t)){for(;f!==null;){var p=mo(f);if(p!==null&&lf(p),p=Wl(t,i,o,l),p===null&&lc(t,i,l,ia,o),p===f)break;f=p}f!==null&&l.stopPropagation()}else lc(t,i,l,null,o)}}var ia=null;function Wl(t,i,o,l){if(ia=null,t=q(l),t=Ar(t),t!==null)if(i=mi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Zo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ia=t,null}function mf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case je:return 1;case st:return 4;case at:case Ye:return 16;case yt:return 536870912;default:return 16}default:return 16}}var Ji=null,Xl=null,ra=null;function gf(){if(ra)return ra;var t,i=Xl,o=i.length,l,f="value"in Ji?Ji.value:Ji.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var T=o-t;for(l=1;l<=T&&i[o-l]===f[p-l];l++);return ra=f.slice(t,1<l?1-l:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function vf(){return!1}function Un(t){function i(o,l,f,p,T){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(o=t[F],this[F]=o?o(p):p[F]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?oa:vf,this.isPropagationStopped=vf,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Un(rs),io=I({},rs,{view:0,detail:0}),_0=Un(io),ql,$l,ro,aa=I({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(ql=t.screenX-ro.screenX,$l=t.screenY-ro.screenY):$l=ql=0,ro=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),xf=Un(aa),y0=I({},aa,{dataTransfer:0}),S0=Un(y0),M0=I({},io,{relatedTarget:0}),Kl=Un(M0),w0=I({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=Un(w0),T0=I({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b0=Un(T0),A0=I({},rs,{data:0}),_f=Un(A0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=N0[t])?!!i[t]:!1}function Zl(){return P0}var L0=I({},io,{key:function(t){if(t.key){var i=C0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=Un(L0),I0=I({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=Un(I0),U0=I({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),F0=Un(U0),k0=I({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=Un(k0),z0=I({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=Un(z0),H0=[9,13,27,32],Jl=d&&"CompositionEvent"in window,so=null;d&&"documentMode"in document&&(so=document.documentMode);var V0=d&&"TextEvent"in window&&!so,Sf=d&&(!Jl||so&&8<so&&11>=so),Mf=" ",wf=!1;function Ef(t,i){switch(t){case"keyup":return H0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function G0(t,i){switch(t){case"compositionend":return Tf(i);case"keypress":return i.which!==32?null:(wf=!0,Mf);case"textInput":return t=i.data,t===Mf&&wf?null:t;default:return null}}function j0(t,i){if(ss)return t==="compositionend"||!Jl&&Ef(t,i)?(t=gf(),ra=Xl=Ji=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sf&&i.locale!=="ko"?null:i.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!W0[t.type]:i==="textarea"}function Af(t,i,o,l){De(l),i=fa(i,"onChange"),0<i.length&&(o=new Yl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var oo=null,ao=null;function X0(t){Wf(t,0)}function la(t){var i=us(t);if(Ke(i))return t}function Y0(t,i){if(t==="change")return i}var Cf=!1;if(d){var Ql;if(d){var ec="oninput"in document;if(!ec){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),ec=typeof Rf.oninput=="function"}Ql=ec}else Ql=!1;Cf=Ql&&(!document.documentMode||9<document.documentMode)}function Nf(){oo&&(oo.detachEvent("onpropertychange",Pf),ao=oo=null)}function Pf(t){if(t.propertyName==="value"&&la(ao)){var i=[];Af(i,ao,t,q(t)),wn(X0,i)}}function q0(t,i,o){t==="focusin"?(Nf(),oo=i,ao=o,oo.attachEvent("onpropertychange",Pf)):t==="focusout"&&Nf()}function $0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(ao)}function K0(t,i){if(t==="click")return la(i)}function Z0(t,i){if(t==="input"||t==="change")return la(i)}function J0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:J0;function lo(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!h.call(i,f)||!ii(t[f],i[f]))return!1}return!0}function Lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Df(t,i){var o=Lf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lf(o)}}function If(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?If(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=lt(t.document)}return i}function tc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Q0(t){var i=Uf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&If(o.ownerDocument.documentElement,o)){if(l!==null&&tc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!t.extend&&p>l&&(f=l,l=p,p=f),f=Df(o,p);var T=Df(o,l);f&&T&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ev=d&&"documentMode"in document&&11>=document.documentMode,os=null,nc=null,co=null,ic=!1;function Ff(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ic||os==null||os!==lt(l)||(l=os,"selectionStart"in l&&tc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),co&&lo(co,l)||(co=l,l=fa(nc,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=os)))}function ca(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},rc={},kf={};d&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ua(t){if(rc[t])return rc[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in kf)return rc[t]=i[o];return t}var Of=ua("animationend"),zf=ua("animationiteration"),Bf=ua("animationstart"),Hf=ua("transitionend"),Vf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Vf.set(t,i),c(i,[t])}for(var sc=0;sc<Gf.length;sc++){var oc=Gf[sc],tv=oc.toLowerCase(),nv=oc[0].toUpperCase()+oc.slice(1);Qi(tv,"on"+nv)}Qi(Of,"onAnimationEnd"),Qi(zf,"onAnimationIteration"),Qi(Bf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Hf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function jf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ko(l,i,void 0,t),t.currentTarget=null}function Wf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var T=l.length-1;0<=T;T--){var F=l[T],H=F.instance,re=F.currentTarget;if(F=F.listener,H!==p&&f.isPropagationStopped())break e;jf(f,F,re),p=H}else for(T=0;T<l.length;T++){if(F=l[T],H=F.instance,re=F.currentTarget,F=F.listener,H!==p&&f.isPropagationStopped())break e;jf(f,F,re),p=H}}}if(br)throw t=Yi,br=!1,Yi=null,t}function kt(t,i){var o=i[pc];o===void 0&&(o=i[pc]=new Set);var l=t+"__bubble";o.has(l)||(Xf(i,t,2,!1),o.add(l))}function ac(t,i,o){var l=0;i&&(l|=4),Xf(o,t,l,i)}var da="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[da]){t[da]=!0,s.forEach(function(o){o!=="selectionchange"&&(iv.has(o)||ac(o,!1,t),ac(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[da]||(i[da]=!0,ac("selectionchange",!1,i))}}function Xf(t,i,o,l){switch(mf(i)){case 1:var f=v0;break;case 4:f=x0;break;default:f=jl}o=f.bind(null,i,o,t),f=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function lc(t,i,o,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var F=l.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(T===4)for(T=l.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;T=T.return}for(;F!==null;){if(T=Ar(F),T===null)return;if(H=T.tag,H===5||H===6){l=p=T;continue e}F=F.parentNode}}l=l.return}wn(function(){var re=p,Me=q(o),Ee=[];e:{var Se=Vf.get(t);if(Se!==void 0){var Fe=Yl,He=t;switch(t){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":Fe=D0;break;case"focusin":He="focus",Fe=Kl;break;case"focusout":He="blur",Fe=Kl;break;case"beforeblur":case"afterblur":Fe=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=F0;break;case Of:case zf:case Bf:Fe=E0;break;case Hf:Fe=O0;break;case"scroll":Fe=_0;break;case"wheel":Fe=B0;break;case"copy":case"cut":case"paste":Fe=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=yf}var We=(i&4)!==0,Gt=!We&&t==="scroll",J=We?Se!==null?Se+"Capture":null:Se;We=[];for(var W=re,ee;W!==null;){ee=W;var Ae=ee.stateNode;if(ee.tag===5&&Ae!==null&&(ee=Ae,J!==null&&(Ae=vn(W,J),Ae!=null&&We.push(ho(W,Ae,ee)))),Gt)break;W=W.return}0<We.length&&(Se=new Fe(Se,He,null,o,Me),Ee.push({event:Se,listeners:We}))}}if((i&7)===0){e:{if(Se=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",Se&&o!==Nt&&(He=o.relatedTarget||o.fromElement)&&(Ar(He)||He[bi]))break e;if((Fe||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Fe?(He=o.relatedTarget||o.toElement,Fe=re,He=He?Ar(He):null,He!==null&&(Gt=mi(He),He!==Gt||He.tag!==5&&He.tag!==6)&&(He=null)):(Fe=null,He=re),Fe!==He)){if(We=xf,Ae="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(We=yf,Ae="onPointerLeave",J="onPointerEnter",W="pointer"),Gt=Fe==null?Se:us(Fe),ee=He==null?Se:us(He),Se=new We(Ae,W+"leave",Fe,o,Me),Se.target=Gt,Se.relatedTarget=ee,Ae=null,Ar(Me)===re&&(We=new We(J,W+"enter",He,o,Me),We.target=ee,We.relatedTarget=Gt,Ae=We),Gt=Ae,Fe&&He)t:{for(We=Fe,J=He,W=0,ee=We;ee;ee=ls(ee))W++;for(ee=0,Ae=J;Ae;Ae=ls(Ae))ee++;for(;0<W-ee;)We=ls(We),W--;for(;0<ee-W;)J=ls(J),ee--;for(;W--;){if(We===J||J!==null&&We===J.alternate)break t;We=ls(We),J=ls(J)}We=null}else We=null;Fe!==null&&Yf(Ee,Se,Fe,We,!1),He!==null&&Gt!==null&&Yf(Ee,Gt,He,We,!0)}}e:{if(Se=re?us(re):window,Fe=Se.nodeName&&Se.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&Se.type==="file")var qe=Y0;else if(bf(Se))if(Cf)qe=Z0;else{qe=$0;var et=q0}else(Fe=Se.nodeName)&&Fe.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(qe=K0);if(qe&&(qe=qe(t,re))){Af(Ee,qe,o,Me);break e}et&&et(t,Se,re),t==="focusout"&&(et=Se._wrapperState)&&et.controlled&&Se.type==="number"&&xt(Se,"number",Se.value)}switch(et=re?us(re):window,t){case"focusin":(bf(et)||et.contentEditable==="true")&&(os=et,nc=re,co=null);break;case"focusout":co=nc=os=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Ff(Ee,o,Me);break;case"selectionchange":if(ev)break;case"keydown":case"keyup":Ff(Ee,o,Me)}var tt;if(Jl)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ss?Ef(t,o)&&(ot="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(Sf&&o.locale!=="ko"&&(ss||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ss&&(tt=gf()):(Ji=Me,Xl="value"in Ji?Ji.value:Ji.textContent,ss=!0)),et=fa(re,ot),0<et.length&&(ot=new _f(ot,t,null,o,Me),Ee.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=Tf(o),tt!==null&&(ot.data=tt)))),(tt=V0?G0(t,o):j0(t,o))&&(re=fa(re,"onBeforeInput"),0<re.length&&(Me=new _f("onBeforeInput","beforeinput",null,o,Me),Ee.push({event:Me,listeners:re}),Me.data=tt))}Wf(Ee,i)})}function ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fa(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=vn(t,o),p!=null&&l.unshift(ho(t,p,f)),p=vn(t,i),p!=null&&l.push(ho(t,p,f))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yf(t,i,o,l,f){for(var p=i._reactName,T=[];o!==null&&o!==l;){var F=o,H=F.alternate,re=F.stateNode;if(H!==null&&H===l)break;F.tag===5&&re!==null&&(F=re,f?(H=vn(o,p),H!=null&&T.unshift(ho(o,H,F))):f||(H=vn(o,p),H!=null&&T.push(ho(o,H,F)))),o=o.return}T.length!==0&&t.push({event:i,listeners:T})}var rv=/\r\n?/g,sv=/\u0000|\uFFFD/g;function qf(t){return(typeof t=="string"?t:""+t).replace(rv,`
`).replace(sv,"")}function ha(t,i,o){if(i=qf(i),qf(t)!==i&&o)throw Error(n(425))}function pa(){}var cc=null,uc=null;function dc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(lv)}:fc;function lv(t){setTimeout(function(){throw t})}function hc(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),no(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);no(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),vi="__reactFiber$"+cs,po="__reactProps$"+cs,bi="__reactContainer$"+cs,pc="__reactEvents$"+cs,cv="__reactListeners$"+cs,uv="__reactHandles$"+cs;function Ar(t){var i=t[vi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[bi]||o[vi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Kf(t);t!==null;){if(o=t[vi])return o;t=Kf(t)}return i}t=o,o=t.parentNode}return null}function mo(t){return t=t[vi]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ma(t){return t[po]||null}var mc=[],ds=-1;function tr(t){return{current:t}}function Ot(t){0>ds||(t.current=mc[ds],mc[ds]=null,ds--)}function Ut(t,i){ds++,mc[ds]=t.current,t.current=i}var nr={},un=tr(nr),Tn=tr(!1),Cr=nr;function fs(t,i){var o=t.type.contextTypes;if(!o)return nr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function bn(t){return t=t.childContextTypes,t!=null}function ga(){Ot(Tn),Ot(un)}function Zf(t,i,o){if(un.current!==nr)throw Error(n(168));Ut(un,i),Ut(Tn,o)}function Jf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ie(t)||"Unknown",f));return I({},o,l)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Cr=un.current,Ut(un,t),Ut(Tn,Tn.current),!0}function Qf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Jf(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,Ot(Tn),Ot(un),Ut(un,t)):Ot(Tn),Ut(Tn,o)}var Ai=null,xa=!1,gc=!1;function eh(t){Ai===null?Ai=[t]:Ai.push(t)}function dv(t){xa=!0,eh(t)}function ir(){if(!gc&&Ai!==null){gc=!0;var t=0,i=Lt;try{var o=Ai;for(Lt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ai=null,xa=!1}catch(f){throw Ai!==null&&(Ai=Ai.slice(t+1)),se(je,ir),f}finally{Lt=i,gc=!1}}return null}var hs=[],ps=0,_a=null,ya=0,Gn=[],jn=0,Rr=null,Ci=1,Ri="";function Nr(t,i){hs[ps++]=ya,hs[ps++]=_a,_a=t,ya=i}function th(t,i,o){Gn[jn++]=Ci,Gn[jn++]=Ri,Gn[jn++]=Rr,Rr=t;var l=Ci;t=Ri;var f=32-ht(l)-1;l&=~(1<<f),o+=1;var p=32-ht(i)+f;if(30<p){var T=f-f%5;p=(l&(1<<T)-1).toString(32),l>>=T,f-=T,Ci=1<<32-ht(i)+f|o<<f|l,Ri=p+t}else Ci=1<<p|o<<f|l,Ri=t}function vc(t){t.return!==null&&(Nr(t,1),th(t,1,0))}function xc(t){for(;t===_a;)_a=hs[--ps],hs[ps]=null,ya=hs[--ps],hs[ps]=null;for(;t===Rr;)Rr=Gn[--jn],Gn[jn]=null,Ri=Gn[--jn],Gn[jn]=null,Ci=Gn[--jn],Gn[jn]=null}var Fn=null,kn=null,zt=!1,ri=null;function nh(t,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function ih(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,kn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Fn=t,kn=null,!0):!1;default:return!1}}function _c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yc(t){if(zt){var i=kn;if(i){var o=i;if(!ih(t,i)){if(_c(t))throw Error(n(418));i=er(o.nextSibling);var l=Fn;i&&ih(t,i)?nh(l,o):(t.flags=t.flags&-4097|2,zt=!1,Fn=t)}}else{if(_c(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,Fn=t}}}function rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Sa(t){if(t!==Fn)return!1;if(!zt)return rh(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!dc(t.type,t.memoizedProps)),i&&(i=kn)){if(_c(t))throw sh(),Error(n(418));for(;i;)nh(t,i),i=er(i.nextSibling)}if(rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=Fn?er(t.stateNode.nextSibling):null;return!0}function sh(){for(var t=kn;t;)t=er(t.nextSibling)}function ms(){kn=Fn=null,zt=!1}function Sc(t){ri===null?ri=[t]:ri.push(t)}var fv=C.ReactCurrentBatchConfig;function go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var F=f.refs;T===null?delete F[p]:F[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function oh(t){var i=t._init;return i(t._payload)}function ah(t){function i(J,W){if(t){var ee=J.deletions;ee===null?(J.deletions=[W],J.flags|=16):ee.push(W)}}function o(J,W){if(!t)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function l(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function f(J,W){return J=dr(J,W),J.index=0,J.sibling=null,J}function p(J,W,ee){return J.index=ee,t?(ee=J.alternate,ee!==null?(ee=ee.index,ee<W?(J.flags|=2,W):ee):(J.flags|=2,W)):(J.flags|=1048576,W)}function T(J){return t&&J.alternate===null&&(J.flags|=2),J}function F(J,W,ee,Ae){return W===null||W.tag!==6?(W=fu(ee,J.mode,Ae),W.return=J,W):(W=f(W,ee),W.return=J,W)}function H(J,W,ee,Ae){var qe=ee.type;return qe===O?Me(J,W,ee.props.children,Ae,ee.key):W!==null&&(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ue&&oh(qe)===W.type)?(Ae=f(W,ee.props),Ae.ref=go(J,W,ee),Ae.return=J,Ae):(Ae=Xa(ee.type,ee.key,ee.props,null,J.mode,Ae),Ae.ref=go(J,W,ee),Ae.return=J,Ae)}function re(J,W,ee,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=hu(ee,J.mode,Ae),W.return=J,W):(W=f(W,ee.children||[]),W.return=J,W)}function Me(J,W,ee,Ae,qe){return W===null||W.tag!==7?(W=Or(ee,J.mode,Ae,qe),W.return=J,W):(W=f(W,ee),W.return=J,W)}function Ee(J,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=fu(""+W,J.mode,ee),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case Y:return ee=Xa(W.type,W.key,W.props,null,J.mode,ee),ee.ref=go(J,null,W),ee.return=J,ee;case k:return W=hu(W,J.mode,ee),W.return=J,W;case ue:var Ae=W._init;return Ee(J,Ae(W._payload),ee)}if(ke(W)||de(W))return W=Or(W,J.mode,ee,null),W.return=J,W;Ma(J,W)}return null}function Se(J,W,ee,Ae){var qe=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return qe!==null?null:F(J,W,""+ee,Ae);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Y:return ee.key===qe?H(J,W,ee,Ae):null;case k:return ee.key===qe?re(J,W,ee,Ae):null;case ue:return qe=ee._init,Se(J,W,qe(ee._payload),Ae)}if(ke(ee)||de(ee))return qe!==null?null:Me(J,W,ee,Ae,null);Ma(J,ee)}return null}function Fe(J,W,ee,Ae,qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return J=J.get(ee)||null,F(W,J,""+Ae,qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case Y:return J=J.get(Ae.key===null?ee:Ae.key)||null,H(W,J,Ae,qe);case k:return J=J.get(Ae.key===null?ee:Ae.key)||null,re(W,J,Ae,qe);case ue:var et=Ae._init;return Fe(J,W,ee,et(Ae._payload),qe)}if(ke(Ae)||de(Ae))return J=J.get(ee)||null,Me(W,J,Ae,qe,null);Ma(W,Ae)}return null}function He(J,W,ee,Ae){for(var qe=null,et=null,tt=W,ot=W=0,rn=null;tt!==null&&ot<ee.length;ot++){tt.index>ot?(rn=tt,tt=null):rn=tt.sibling;var bt=Se(J,tt,ee[ot],Ae);if(bt===null){tt===null&&(tt=rn);break}t&&tt&&bt.alternate===null&&i(J,tt),W=p(bt,W,ot),et===null?qe=bt:et.sibling=bt,et=bt,tt=rn}if(ot===ee.length)return o(J,tt),zt&&Nr(J,ot),qe;if(tt===null){for(;ot<ee.length;ot++)tt=Ee(J,ee[ot],Ae),tt!==null&&(W=p(tt,W,ot),et===null?qe=tt:et.sibling=tt,et=tt);return zt&&Nr(J,ot),qe}for(tt=l(J,tt);ot<ee.length;ot++)rn=Fe(tt,J,ot,ee[ot],Ae),rn!==null&&(t&&rn.alternate!==null&&tt.delete(rn.key===null?ot:rn.key),W=p(rn,W,ot),et===null?qe=rn:et.sibling=rn,et=rn);return t&&tt.forEach(function(fr){return i(J,fr)}),zt&&Nr(J,ot),qe}function We(J,W,ee,Ae){var qe=de(ee);if(typeof qe!="function")throw Error(n(150));if(ee=qe.call(ee),ee==null)throw Error(n(151));for(var et=qe=null,tt=W,ot=W=0,rn=null,bt=ee.next();tt!==null&&!bt.done;ot++,bt=ee.next()){tt.index>ot?(rn=tt,tt=null):rn=tt.sibling;var fr=Se(J,tt,bt.value,Ae);if(fr===null){tt===null&&(tt=rn);break}t&&tt&&fr.alternate===null&&i(J,tt),W=p(fr,W,ot),et===null?qe=fr:et.sibling=fr,et=fr,tt=rn}if(bt.done)return o(J,tt),zt&&Nr(J,ot),qe;if(tt===null){for(;!bt.done;ot++,bt=ee.next())bt=Ee(J,bt.value,Ae),bt!==null&&(W=p(bt,W,ot),et===null?qe=bt:et.sibling=bt,et=bt);return zt&&Nr(J,ot),qe}for(tt=l(J,tt);!bt.done;ot++,bt=ee.next())bt=Fe(tt,J,ot,bt.value,Ae),bt!==null&&(t&&bt.alternate!==null&&tt.delete(bt.key===null?ot:bt.key),W=p(bt,W,ot),et===null?qe=bt:et.sibling=bt,et=bt);return t&&tt.forEach(function(Wv){return i(J,Wv)}),zt&&Nr(J,ot),qe}function Gt(J,W,ee,Ae){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Y:e:{for(var qe=ee.key,et=W;et!==null;){if(et.key===qe){if(qe=ee.type,qe===O){if(et.tag===7){o(J,et.sibling),W=f(et,ee.props.children),W.return=J,J=W;break e}}else if(et.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ue&&oh(qe)===et.type){o(J,et.sibling),W=f(et,ee.props),W.ref=go(J,et,ee),W.return=J,J=W;break e}o(J,et);break}else i(J,et);et=et.sibling}ee.type===O?(W=Or(ee.props.children,J.mode,Ae,ee.key),W.return=J,J=W):(Ae=Xa(ee.type,ee.key,ee.props,null,J.mode,Ae),Ae.ref=go(J,W,ee),Ae.return=J,J=Ae)}return T(J);case k:e:{for(et=ee.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){o(J,W.sibling),W=f(W,ee.children||[]),W.return=J,J=W;break e}else{o(J,W);break}else i(J,W);W=W.sibling}W=hu(ee,J.mode,Ae),W.return=J,J=W}return T(J);case ue:return et=ee._init,Gt(J,W,et(ee._payload),Ae)}if(ke(ee))return He(J,W,ee,Ae);if(de(ee))return We(J,W,ee,Ae);Ma(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(o(J,W.sibling),W=f(W,ee),W.return=J,J=W):(o(J,W),W=fu(ee,J.mode,Ae),W.return=J,J=W),T(J)):o(J,W)}return Gt}var gs=ah(!0),lh=ah(!1),wa=tr(null),Ea=null,vs=null,Mc=null;function wc(){Mc=vs=Ea=null}function Ec(t){var i=wa.current;Ot(wa),t._currentValue=i}function Tc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function xs(t,i){Ea=t,Mc=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(Mc!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Ea===null)throw Error(n(308));vs=t,Ea.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Pr=null;function bc(t){Pr===null?Pr=[t]:Pr.push(t)}function ch(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,bc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ni(t,l)}function Ni(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function Ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ni(t,o)}return f=l.interleaved,f===null?(i.next=i,bc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ni(t,o)}function Ta(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Hl(t,o)}}function dh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=T:p=p.next=T,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,l){var f=t.updateQueue;rr=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var H=F,re=H.next;H.next=null,T===null?p=re:T.next=re,T=H;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==T&&(F===null?Me.firstBaseUpdate=re:F.next=re,Me.lastBaseUpdate=H))}if(p!==null){var Ee=f.baseState;T=0,Me=re=H=null,F=p;do{var Se=F.lane,Fe=F.eventTime;if((l&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Fe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var He=t,We=F;switch(Se=i,Fe=o,We.tag){case 1:if(He=We.payload,typeof He=="function"){Ee=He.call(Fe,Ee,Se);break e}Ee=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,Se=typeof He=="function"?He.call(Fe,Ee,Se):He,Se==null)break e;Ee=I({},Ee,Se);break e;case 2:rr=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,Se=f.effects,Se===null?f.effects=[F]:Se.push(F))}else Fe={eventTime:Fe,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(re=Me=Fe,H=Ee):Me=Me.next=Fe,T|=Se;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Me===null&&(H=Ee),f.baseState=H,f.firstBaseUpdate=re,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Ir|=T,t.lanes=T,t.memoizedState=Ee}}function fh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var vo={},xi=tr(vo),xo=tr(vo),_o=tr(vo);function Lr(t){if(t===vo)throw Error(n(174));return t}function Cc(t,i){switch(Ut(_o,i),Ut(xo,t),Ut(xi,vo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}Ot(xi),Ut(xi,i)}function _s(){Ot(xi),Ot(xo),Ot(_o)}function hh(t){Lr(_o.current);var i=Lr(xi.current),o=Ge(i,t.type);i!==o&&(Ut(xo,t),Ut(xi,o))}function Rc(t){xo.current===t&&(Ot(xi),Ot(xo))}var Bt=tr(0);function Aa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Pc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Ca=C.ReactCurrentDispatcher,Lc=C.ReactCurrentBatchConfig,Dr=0,Ht=null,Zt=null,tn=null,Ra=!1,yo=!1,So=0,hv=0;function dn(){throw Error(n(321))}function Dc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ii(t[o],i[o]))return!1;return!0}function Ic(t,i,o,l,f,p){if(Dr=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?vv:xv,t=o(l,f),yo){p=0;do{if(yo=!1,So=0,25<=p)throw Error(n(301));p+=1,tn=Zt=null,i.updateQueue=null,Ca.current=_v,t=o(l,f)}while(yo)}if(Ca.current=La,i=Zt!==null&&Zt.next!==null,Dr=0,tn=Zt=Ht=null,Ra=!1,i)throw Error(n(300));return t}function Uc(){var t=So!==0;return So=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function Xn(){if(Zt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function Mo(t,i){return typeof i=="function"?i(t):i}function Fc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Zt,f=l.baseQueue,p=o.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}l.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,l=l.baseState;var F=T=null,H=null,re=p;do{var Me=re.lane;if((Dr&Me)===Me)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var Ee={lane:Me,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(F=H=Ee,T=l):H=H.next=Ee,Ht.lanes|=Me,Ir|=Me}re=re.next}while(re!==null&&re!==p);H===null?T=l:H.next=F,ii(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=T,i.baseQueue=H,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do p=f.lane,Ht.lanes|=p,Ir|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function kc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do p=t(p,T.action),T=T.next;while(T!==f);ii(p,i.memoizedState)||(An=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function ph(){}function mh(t,i){var o=Ht,l=Xn(),f=i(),p=!ii(l.memoizedState,f);if(p&&(l.memoizedState=f,An=!0),l=l.queue,Oc(xh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,wo(9,vh.bind(null,o,l,f,i),void 0,null),nn===null)throw Error(n(349));(Dr&30)!==0||gh(o,i,f)}return f}function gh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function vh(t,i,o,l){i.value=o,i.getSnapshot=l,_h(i)&&yh(t)}function xh(t,i,o){return o(function(){_h(i)&&yh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ii(t,o)}catch{return!0}}function yh(t){var i=Ni(t,1);i!==null&&li(i,t,1,-1)}function Sh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=gv.bind(null,Ht,t),[i.memoizedState,t]}function wo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Mh(){return Xn().memoizedState}function Na(t,i,o,l){var f=_i();Ht.flags|=t,f.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function Pa(t,i,o,l){var f=Xn();l=l===void 0?null:l;var p=void 0;if(Zt!==null){var T=Zt.memoizedState;if(p=T.destroy,l!==null&&Dc(l,T.deps)){f.memoizedState=wo(i,o,p,l);return}}Ht.flags|=t,f.memoizedState=wo(1|i,o,p,l)}function wh(t,i){return Na(8390656,8,t,i)}function Oc(t,i){return Pa(2048,8,t,i)}function Eh(t,i){return Pa(4,2,t,i)}function Th(t,i){return Pa(4,4,t,i)}function bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ah(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4,4,bh.bind(null,i,t),o)}function zc(){}function Ch(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Dc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Rh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Dc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Nh(t,i,o){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=o):(ii(o,i)||(o=xn(),Ht.lanes|=o,Ir|=o,t.baseState=!0),i)}function pv(t,i){var o=Lt;Lt=o!==0&&4>o?o:4,t(!0);var l=Lc.transition;Lc.transition={};try{t(!1),i()}finally{Lt=o,Lc.transition=l}}function Ph(){return Xn().memoizedState}function mv(t,i,o){var l=cr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Lh(t))Dh(i,o);else if(o=ch(t,i,o,l),o!==null){var f=yn();li(o,t,l,f),Ih(o,i,l)}}function gv(t,i,o){var l=cr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lh(t))Dh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,F=p(T,o);if(f.hasEagerState=!0,f.eagerState=F,ii(F,T)){var H=i.interleaved;H===null?(f.next=f,bc(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=ch(t,i,f,l),o!==null&&(f=yn(),li(o,t,l,f),Ih(o,i,l))}}function Lh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Dh(t,i){yo=Ra=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Ih(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Hl(t,o)}}var La={readContext:Wn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},vv={readContext:Wn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:wh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Na(4194308,4,bh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Na(4194308,4,t,i)},useInsertionEffect:function(t,i){return Na(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=mv.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Sh,useDebugValue:zc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Sh(!1),i=t[0];return t=pv.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ht,f=_i();if(zt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(Dr&30)!==0||gh(l,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,wh(xh.bind(null,l,p,t),[t]),l.flags|=2048,wo(9,vh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=nn.identifierPrefix;if(zt){var o=Ri,l=Ci;o=(l&~(1<<32-ht(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=So++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=hv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},xv={readContext:Wn,useCallback:Ch,useContext:Wn,useEffect:Oc,useImperativeHandle:Ah,useInsertionEffect:Eh,useLayoutEffect:Th,useMemo:Rh,useReducer:Fc,useRef:Mh,useState:function(){return Fc(Mo)},useDebugValue:zc,useDeferredValue:function(t){var i=Xn();return Nh(i,Zt.memoizedState,t)},useTransition:function(){var t=Fc(Mo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Ph,unstable_isNewReconciler:!1},_v={readContext:Wn,useCallback:Ch,useContext:Wn,useEffect:Oc,useImperativeHandle:Ah,useInsertionEffect:Eh,useLayoutEffect:Th,useMemo:Rh,useReducer:kc,useRef:Mh,useState:function(){return kc(Mo)},useDebugValue:zc,useDeferredValue:function(t){var i=Xn();return Zt===null?i.memoizedState=t:Nh(i,Zt.memoizedState,t)},useTransition:function(){var t=kc(Mo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Ph,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=I({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Bc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:I({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Da={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=yn(),f=cr(t),p=Pi(l,f);p.payload=i,o!=null&&(p.callback=o),i=sr(t,p,f),i!==null&&(li(i,t,f,l),Ta(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=yn(),f=cr(t),p=Pi(l,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=sr(t,p,f),i!==null&&(li(i,t,f,l),Ta(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=yn(),l=cr(t),f=Pi(o,l);f.tag=2,i!=null&&(f.callback=i),i=sr(t,f,l),i!==null&&(li(i,t,l,o),Ta(i,t,l))}};function Uh(t,i,o,l,f,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,T):i.prototype&&i.prototype.isPureReactComponent?!lo(o,l)||!lo(f,p):!0}function Fh(t,i,o){var l=!1,f=nr,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(f=bn(i)?Cr:un.current,l=i.contextTypes,p=(l=l!=null)?fs(t,f):nr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function kh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Da.enqueueReplaceState(i,i.state,null)}function Hc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Ac(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Wn(p):(p=bn(i)?Cr:un.current,f.context=fs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Bc(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Da.enqueueReplaceState(f,f.state,null),ba(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",l=i;do o+=Z(l),l=l.return;while(l);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Vc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Gc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var yv=typeof WeakMap=="function"?WeakMap:Map;function Oh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ba||(Ba=!0,ru=l),Gc(t,i)},o}function zh(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Gc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Gc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function Bh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new yv;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=Iv.bind(null,t,i,o),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Vh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Sv=C.ReactCurrentOwner,An=!1;function _n(t,i,o,l){i.child=t===null?lh(i,null,o,l):gs(i,t.child,o,l)}function Gh(t,i,o,l,f){o=o.render;var p=i.ref;return xs(i,f),l=Ic(t,i,o,l,p,f),o=Uc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(zt&&o&&vc(i),i.flags|=1,_n(t,i,l,f),i.child)}function jh(t,i,o,l,f){if(t===null){var p=o.type;return typeof p=="function"&&!du(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Wh(t,i,p,l,f)):(t=Xa(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var T=p.memoizedProps;if(o=o.compare,o=o!==null?o:lo,o(T,l)&&t.ref===i.ref)return Li(t,i,f)}return i.flags|=1,t=dr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Wh(t,i,o,l,f){if(t!==null){var p=t.memoizedProps;if(lo(p,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Li(t,i,f)}return jc(t,i,o,l,f)}function Xh(t,i,o){var l=i.pendingProps,f=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ms,On),On|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ms,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Ut(Ms,On),On|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Ut(Ms,On),On|=l;return _n(t,i,f,o),i.child}function Yh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function jc(t,i,o,l,f){var p=bn(o)?Cr:un.current;return p=fs(i,p),xs(i,f),o=Ic(t,i,o,l,p,f),l=Uc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(zt&&l&&vc(i),i.flags|=1,_n(t,i,o,f),i.child)}function qh(t,i,o,l,f){if(bn(o)){var p=!0;va(i)}else p=!1;if(xs(i,f),i.stateNode===null)Ua(t,i),Fh(i,o,l),Hc(i,o,l,f),l=!0;else if(t===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var H=T.context,re=o.contextType;typeof re=="object"&&re!==null?re=Wn(re):(re=bn(o)?Cr:un.current,re=fs(i,re));var Me=o.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==l||H!==re)&&kh(i,T,l,re),rr=!1;var Se=i.memoizedState;T.state=Se,ba(i,l,T,f),H=i.memoizedState,F!==l||Se!==H||Tn.current||rr?(typeof Me=="function"&&(Bc(i,o,Me,l),H=i.memoizedState),(F=rr||Uh(i,o,F,l,Se,H,re))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),T.props=l,T.state=H,T.context=re,l=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{T=i.stateNode,uh(t,i),F=i.memoizedProps,re=i.type===i.elementType?F:si(i.type,F),T.props=re,Ee=i.pendingProps,Se=T.context,H=o.contextType,typeof H=="object"&&H!==null?H=Wn(H):(H=bn(o)?Cr:un.current,H=fs(i,H));var Fe=o.getDerivedStateFromProps;(Me=typeof Fe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Ee||Se!==H)&&kh(i,T,l,H),rr=!1,Se=i.memoizedState,T.state=Se,ba(i,l,T,f);var He=i.memoizedState;F!==Ee||Se!==He||Tn.current||rr?(typeof Fe=="function"&&(Bc(i,o,Fe,l),He=i.memoizedState),(re=rr||Uh(i,o,re,l,Se,He,H)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,He,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,He,H)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),T.props=l,T.state=He,T.context=H,l=re):(typeof T.componentDidUpdate!="function"||F===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),l=!1)}return Wc(t,i,o,l,p,f)}function Wc(t,i,o,l,f,p){Yh(t,i);var T=(i.flags&128)!==0;if(!l&&!T)return f&&Qf(i,o,!1),Li(t,i,p);l=i.stateNode,Sv.current=i;var F=T&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&T?(i.child=gs(i,t.child,null,p),i.child=gs(i,null,F,p)):_n(t,i,F,p),i.memoizedState=l.state,f&&Qf(i,o,!0),i.child}function $h(t){var i=t.stateNode;i.pendingContext?Zf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Zf(t,i.context,!1),Cc(t,i.containerInfo)}function Kh(t,i,o,l,f){return ms(),Sc(f),i.flags|=256,_n(t,i,o,l),i.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zh(t,i,o){var l=i.pendingProps,f=Bt.current,p=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=t!==null&&t.memoizedState===null?!1:(f&2)!==0),F?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ut(Bt,f&1),t===null)return yc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=l.children,t=l.fallback,p?(l=i.mode,p=i.child,T={mode:"hidden",children:T},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=Ya(T,l,0,null),t=Or(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Yc(o),i.memoizedState=Xc,t):qc(i,T));if(f=t.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return Mv(t,i,T,l,F,f,o);if(p){p=l.fallback,T=i.mode,f=t.child,F=f.sibling;var H={mode:"hidden",children:l.children};return(T&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=dr(f,H),l.subtreeFlags=f.subtreeFlags&14680064),F!==null?p=dr(F,p):(p=Or(p,T,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,T=t.child.memoizedState,T=T===null?Yc(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~o,i.memoizedState=Xc,l}return p=t.child,t=p.sibling,l=dr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function qc(t,i){return i=Ya({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ia(t,i,o,l){return l!==null&&Sc(l),gs(i,t.child,null,o),t=qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Mv(t,i,o,l,f,p,T){if(o)return i.flags&256?(i.flags&=-257,l=Vc(Error(n(422))),Ia(t,i,T,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=Ya({mode:"visible",children:l.children},f,0,null),p=Or(p,f,T,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,T),i.child.memoizedState=Yc(T),i.memoizedState=Xc,p);if((i.mode&1)===0)return Ia(t,i,T,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var F=l.dgst;return l=F,p=Error(n(419)),l=Vc(p,l,void 0),Ia(t,i,T,l)}if(F=(T&t.childLanes)!==0,An||F){if(l=nn,l!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|T))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ni(t,f),li(l,t,f,-1))}return uu(),l=Vc(Error(n(421))),Ia(t,i,T,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Uv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,kn=er(f.nextSibling),Fn=i,zt=!0,ri=null,t!==null&&(Gn[jn++]=Ci,Gn[jn++]=Ri,Gn[jn++]=Rr,Ci=t.id,Ri=t.overflow,Rr=i),i=qc(i,l.children),i.flags|=4096,i)}function Jh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tc(t.return,i,o)}function $c(t,i,o,l,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=f)}function Qh(t,i,o){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(_n(t,i,l.children,o),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,o,i);else if(t.tag===19)Jh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Aa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),$c(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Aa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}$c(i,!0,o,null,p);break;case"together":$c(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ua(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function wv(t,i,o){switch(i.tag){case 3:$h(i),ms();break;case 5:hh(i);break;case 1:bn(i.type)&&va(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ut(wa,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Zh(t,i,o):(Ut(Bt,Bt.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Ut(Bt,Bt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Qh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Xh(t,i,o)}return Li(t,i,o)}var ep,Kc,tp,np;ep=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Kc=function(){},tp=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Lr(xi.current);var p=null;switch(o){case"input":f=z(t,f),l=z(t,l),p=[];break;case"select":f=I({},f,{value:void 0}),l=I({},l,{value:void 0}),p=[];break;case"textarea":f=A(t,f),l=A(t,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=pa)}gt(o,l);var T;o=null;for(re in f)if(!l.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var F=f[re];for(T in F)F.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?p||(p=[]):(p=p||[]).push(re,null));for(re in l){var H=l[re];if(F=f!=null?f[re]:void 0,l.hasOwnProperty(re)&&H!==F&&(H!=null||F!=null))if(re==="style")if(F){for(T in F)!F.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in H)H.hasOwnProperty(T)&&F[T]!==H[T]&&(o||(o={}),o[T]=H[T])}else o||(p||(p=[]),p.push(re,o)),o=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(p=p||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&kt("scroll",t),p||F===H||(p=[])):(p=p||[]).push(re,H))}o&&(p=p||[]).push("style",o);var re=p;(i.updateQueue=re)&&(i.flags|=4)}},np=function(t,i,o,l){o!==l&&(i.flags|=4)};function Eo(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function Ev(t,i,o){var l=i.pendingProps;switch(xc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return bn(i.type)&&ga(),fn(i),null;case 3:return l=i.stateNode,_s(),Ot(Tn),Ot(un),Pc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(au(ri),ri=null))),Kc(t,i),fn(i),null;case 5:Rc(i);var f=Lr(_o.current);if(o=i.type,t!==null&&i.stateNode!=null)tp(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Lr(xi.current),Sa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[vi]=i,l[po]=p,t=(i.mode&1)!==0,o){case"dialog":kt("cancel",l),kt("close",l);break;case"iframe":case"object":case"embed":kt("load",l);break;case"video":case"audio":for(f=0;f<uo.length;f++)kt(uo[f],l);break;case"source":kt("error",l);break;case"img":case"image":case"link":kt("error",l),kt("load",l);break;case"details":kt("toggle",l);break;case"input":Rt(l,p),kt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},kt("invalid",l);break;case"textarea":te(l,p),kt("invalid",l)}gt(o,p),f=null;for(var T in p)if(p.hasOwnProperty(T)){var F=p[T];T==="children"?typeof F=="string"?l.textContent!==F&&(p.suppressHydrationWarning!==!0&&ha(l.textContent,F,t),f=["children",F]):typeof F=="number"&&l.textContent!==""+F&&(p.suppressHydrationWarning!==!0&&ha(l.textContent,F,t),f=["children",""+F]):a.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&kt("scroll",l)}switch(o){case"input":Je(l),Ve(l,p,!0);break;case"textarea":Je(l),ye(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=pa)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=T.createElement(o,{is:l.is}):(t=T.createElement(o),o==="select"&&(T=t,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):t=T.createElementNS(t,o),t[vi]=i,t[po]=l,ep(t,i,!1,!1),i.stateNode=t;e:{switch(T=ct(o,l),o){case"dialog":kt("cancel",t),kt("close",t),f=l;break;case"iframe":case"object":case"embed":kt("load",t),f=l;break;case"video":case"audio":for(f=0;f<uo.length;f++)kt(uo[f],t);f=l;break;case"source":kt("error",t),f=l;break;case"img":case"image":case"link":kt("error",t),kt("load",t),f=l;break;case"details":kt("toggle",t),f=l;break;case"input":Rt(t,l),f=z(t,l),kt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=I({},l,{value:void 0}),kt("invalid",t);break;case"textarea":te(t,l),f=A(t,l),kt("invalid",t);break;default:f=l}gt(o,f),F=f;for(p in F)if(F.hasOwnProperty(p)){var H=F[p];p==="style"?rt(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ue(t,H)):p==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ft(t,H):typeof H=="number"&&ft(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&kt("scroll",t):H!=null&&P(t,p,H,T))}switch(o){case"input":Je(t),Ve(t,l,!1);break;case"textarea":Je(t),ye(t);break;case"option":l.value!=null&&t.setAttribute("value",""+pe(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?U(t,!!l.multiple,p,!1):l.defaultValue!=null&&U(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=pa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)np(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Lr(_o.current),Lr(xi.current),Sa(i)){if(l=i.stateNode,o=i.memoizedProps,l[vi]=i,(p=l.nodeValue!==o)&&(t=Fn,t!==null))switch(t.tag){case 3:ha(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[vi]=i,i.stateNode=l}return fn(i),null;case 13:if(Ot(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sh(),ms(),i.flags|=98560,p=!1;else if(p=Sa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[vi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),p=!1}else ri!==null&&(au(ri),ri=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Jt===0&&(Jt=3):uu())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return _s(),Kc(t,i),t===null&&fo(i.stateNode.containerInfo),fn(i),null;case 10:return Ec(i.type._context),fn(i),null;case 17:return bn(i.type)&&ga(),fn(i),null;case 19:if(Ot(Bt),p=i.memoizedState,p===null)return fn(i),null;if(l=(i.flags&128)!==0,T=p.rendering,T===null)if(l)Eo(p,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Aa(t),T!==null){for(i.flags|=128,Eo(p,!1),l=T.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ut(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&be()>ws&&(i.flags|=128,l=!0,Eo(p,!1),i.lanes=4194304)}else{if(!l)if(t=Aa(T),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Eo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!zt)return fn(i),null}else 2*be()-p.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,l=!0,Eo(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(o=p.last,o!==null?o.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=be(),i.sibling=null,o=Bt.current,Ut(Bt,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return cu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Tv(t,i){switch(xc(i),i.tag){case 1:return bn(i.type)&&ga(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Ot(Tn),Ot(un),Pc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Rc(i),null;case 13:if(Ot(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Bt),null;case 4:return _s(),null;case 10:return Ec(i.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Fa=!1,hn=!1,bv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Vt(t,i,l)}else o.current=null}function Zc(t,i,o){try{o()}catch(l){Vt(t,i,l)}}var ip=!1;function Av(t,i){if(cc=na,t=Uf(),tc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var T=0,F=-1,H=-1,re=0,Me=0,Ee=t,Se=null;t:for(;;){for(var Fe;Ee!==o||f!==0&&Ee.nodeType!==3||(F=T+f),Ee!==p||l!==0&&Ee.nodeType!==3||(H=T+l),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Fe=Ee.firstChild)!==null;)Se=Ee,Ee=Fe;for(;;){if(Ee===t)break t;if(Se===o&&++re===f&&(F=T),Se===p&&++Me===l&&(H=T),(Fe=Ee.nextSibling)!==null)break;Ee=Se,Se=Ee.parentNode}Ee=Fe}o=F===-1||H===-1?null:{start:F,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(uc={focusedElem:t,selectionRange:o},na=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,Gt=He.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?We:si(i.type,We),Gt);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Vt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=ip,ip=!1,He}function To(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Zc(i,o,p)}f=f.next}while(f!==l)}}function ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Jc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function rp(t){var i=t.alternate;i!==null&&(t.alternate=null,rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[vi],delete i[po],delete i[pc],delete i[cv],delete i[uv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sp(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pa));else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,o),t=t.sibling;t!==null;)Qc(t,i,o),t=t.sibling}function eu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(eu(t,i,o),t=t.sibling;t!==null;)eu(t,i,o),t=t.sibling}var on=null,oi=!1;function or(t,i,o){for(o=o.child;o!==null;)ap(t,i,o),o=o.sibling}function ap(t,i,o){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ct,o)}catch{}switch(o.tag){case 5:hn||Ss(o,i);case 6:var l=on,f=oi;on=null,or(t,i,o),on=l,oi=f,on!==null&&(oi?(t=on,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):on.removeChild(o.stateNode));break;case 18:on!==null&&(oi?(t=on,o=o.stateNode,t.nodeType===8?hc(t.parentNode,o):t.nodeType===1&&hc(t,o),no(t)):hc(on,o.stateNode));break;case 4:l=on,f=oi,on=o.stateNode.containerInfo,oi=!0,or(t,i,o),on=l,oi=f;break;case 0:case 11:case 14:case 15:if(!hn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&Zc(o,i,T),f=f.next}while(f!==l)}or(t,i,o);break;case 1:if(!hn&&(Ss(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(F){Vt(o,i,F)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(hn=(l=hn)||o.memoizedState!==null,or(t,i,o),hn=l):or(t,i,o);break;default:or(t,i,o)}}function lp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new bv),i.forEach(function(l){var f=Fv.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ai(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var p=t,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:on=F.stateNode,oi=!1;break e;case 3:on=F.stateNode.containerInfo,oi=!0;break e;case 4:on=F.stateNode.containerInfo,oi=!0;break e}F=F.return}if(on===null)throw Error(n(160));ap(p,T,f),on=null,oi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(re){Vt(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,t),i=i.sibling}function cp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ai(i,t),yi(t),l&4){try{To(3,t,t.return),ka(3,t)}catch(We){Vt(t,t.return,We)}try{To(5,t,t.return)}catch(We){Vt(t,t.return,We)}}break;case 1:ai(i,t),yi(t),l&512&&o!==null&&Ss(o,o.return);break;case 5:if(ai(i,t),yi(t),l&512&&o!==null&&Ss(o,o.return),t.flags&32){var f=t.stateNode;try{ft(f,"")}catch(We){Vt(t,t.return,We)}}if(l&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,T=o!==null?o.memoizedProps:p,F=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{F==="input"&&p.type==="radio"&&p.name!=null&&it(f,p),ct(F,T);var re=ct(F,p);for(T=0;T<H.length;T+=2){var Me=H[T],Ee=H[T+1];Me==="style"?rt(f,Ee):Me==="dangerouslySetInnerHTML"?Ue(f,Ee):Me==="children"?ft(f,Ee):P(f,Me,Ee,re)}switch(F){case"input":nt(f,p);break;case"textarea":_e(f,p);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Fe=p.value;Fe!=null?U(f,!!p.multiple,Fe,!1):Se!==!!p.multiple&&(p.defaultValue!=null?U(f,!!p.multiple,p.defaultValue,!0):U(f,!!p.multiple,p.multiple?[]:"",!1))}f[po]=p}catch(We){Vt(t,t.return,We)}}break;case 6:if(ai(i,t),yi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(We){Vt(t,t.return,We)}}break;case 3:if(ai(i,t),yi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(We){Vt(t,t.return,We)}break;case 4:ai(i,t),yi(t);break;case 13:ai(i,t),yi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(iu=be())),l&4&&lp(t);break;case 22:if(Me=o!==null&&o.memoizedState!==null,t.mode&1?(hn=(re=hn)||Me,ai(i,t),hn=re):ai(i,t),yi(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!Me&&(t.mode&1)!==0)for(ze=t,Me=t.child;Me!==null;){for(Ee=ze=Me;ze!==null;){switch(Se=ze,Fe=Se.child,Se.tag){case 0:case 11:case 14:case 15:To(4,Se,Se.return);break;case 1:Ss(Se,Se.return);var He=Se.stateNode;if(typeof He.componentWillUnmount=="function"){l=Se,o=Se.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(We){Vt(l,o,We)}}break;case 5:Ss(Se,Se.return);break;case 22:if(Se.memoizedState!==null){fp(Ee);continue}}Fe!==null?(Fe.return=Se,ze=Fe):fp(Ee)}Me=Me.sibling}e:for(Me=null,Ee=t;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{f=Ee.stateNode,re?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(F=Ee.stateNode,H=Ee.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Qe("display",T))}catch(We){Vt(t,t.return,We)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(We){Vt(t,t.return,We)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ai(i,t),yi(t),l&4&&lp(t);break;case 21:break;default:ai(i,t),yi(t)}}function yi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(sp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ft(f,""),l.flags&=-33);var p=op(t);eu(t,p,f);break;case 3:case 4:var T=l.stateNode.containerInfo,F=op(t);Qc(t,F,T);break;default:throw Error(n(161))}}catch(H){Vt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Cv(t,i,o){ze=t,up(t)}function up(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var f=ze,p=f.child;if(f.tag===22&&l){var T=f.memoizedState!==null||Fa;if(!T){var F=f.alternate,H=F!==null&&F.memoizedState!==null||hn;F=Fa;var re=hn;if(Fa=T,(hn=H)&&!re)for(ze=f;ze!==null;)T=ze,H=T.child,T.tag===22&&T.memoizedState!==null?hp(f):H!==null?(H.return=T,ze=H):hp(f);for(;p!==null;)ze=p,up(p),p=p.sibling;ze=f,Fa=F,hn=re}dp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ze=p):dp(t)}}function dp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||ka(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:si(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&fh(i,p,l);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}fh(i,T,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Me=re.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&no(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Jc(i)}catch(Se){Vt(i,i.return,Se)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function fp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function hp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ka(4,i)}catch(H){Vt(i,o,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(H){Vt(i,f,H)}}var p=i.return;try{Jc(i)}catch(H){Vt(i,p,H)}break;case 5:var T=i.return;try{Jc(i)}catch(H){Vt(i,T,H)}}}catch(H){Vt(i,i.return,H)}if(i===t){ze=null;break}var F=i.sibling;if(F!==null){F.return=i.return,ze=F;break}ze=i.return}}var Rv=Math.ceil,Oa=C.ReactCurrentDispatcher,tu=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,Mt=0,nn=null,Yt=null,an=0,On=0,Ms=tr(0),Jt=0,bo=null,Ir=0,za=0,nu=0,Ao=null,Cn=null,iu=0,ws=1/0,Di=null,Ba=!1,ru=null,ar=null,Ha=!1,lr=null,Va=0,Co=0,su=null,Ga=-1,ja=0;function yn(){return(Mt&6)!==0?be():Ga!==-1?Ga:Ga=be()}function cr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&an!==0?an&-an:fv.transition!==null?(ja===0&&(ja=xn()),ja):(t=Lt,t!==0||(t=window.event,t=t===void 0?16:mf(t.type)),t)}function li(t,i,o,l){if(50<Co)throw Co=0,su=null,Error(n(185));En(t,o,l),((Mt&2)===0||t!==nn)&&(t===nn&&((Mt&2)===0&&(za|=o),Jt===4&&ur(t,an)),Rn(t,l),o===1&&Mt===0&&(i.mode&1)===0&&(ws=be()+500,xa&&ir()))}function Rn(t,i){var o=t.callbackNode;Hn(t,i);var l=gi(t,t===nn?an:0);if(l===0)o!==null&&oe(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&oe(o),i===1)t.tag===0?dv(mp.bind(null,t)):eh(mp.bind(null,t)),av(function(){(Mt&6)===0&&ir()}),o=null;else{switch(af(l)){case 1:o=je;break;case 4:o=st;break;case 16:o=at;break;case 536870912:o=yt;break;default:o=at}o=wp(o,pp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function pp(t,i){if(Ga=-1,ja=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var l=gi(t,t===nn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Wa(t,l);else{i=l;var f=Mt;Mt|=2;var p=vp();(nn!==t||an!==i)&&(Di=null,ws=be()+500,Fr(t,i));do try{Lv();break}catch(F){gp(t,F)}while(!0);wc(),Oa.current=p,Mt=f,Yt!==null?i=0:(nn=null,an=0,i=Jt)}if(i!==0){if(i===2&&(f=Ti(t),f!==0&&(l=f,i=ou(t,f))),i===1)throw o=bo,Fr(t,0),ur(t,l),Rn(t,be()),o;if(i===6)ur(t,l);else{if(f=t.current.alternate,(l&30)===0&&!Nv(f)&&(i=Wa(t,l),i===2&&(p=Ti(t),p!==0&&(l=p,i=ou(t,p))),i===1))throw o=bo,Fr(t,0),ur(t,l),Rn(t,be()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Cn,Di);break;case 3:if(ur(t,l),(l&130023424)===l&&(i=iu+500-be(),10<i)){if(gi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=fc(kr.bind(null,t,Cn,Di),i);break}kr(t,Cn,Di);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var T=31-ht(l);p=1<<T,T=i[T],T>f&&(f=T),l&=~p}if(l=f,l=be()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Rv(l/1960))-l,10<l){t.timeoutHandle=fc(kr.bind(null,t,Cn,Di),l);break}kr(t,Cn,Di);break;case 5:kr(t,Cn,Di);break;default:throw Error(n(329))}}}return Rn(t,be()),t.callbackNode===o?pp.bind(null,t):null}function ou(t,i){var o=Ao;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Wa(t,i),t!==2&&(i=Cn,Cn=o,i!==null&&au(i)),t}function au(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function Nv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],p=f.getSnapshot;f=f.value;try{if(!ii(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~nu,i&=~za,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ht(i),l=1<<o;t[o]=-1,i&=~l}}function mp(t){if((Mt&6)!==0)throw Error(n(327));Es();var i=gi(t,0);if((i&1)===0)return Rn(t,be()),null;var o=Wa(t,i);if(t.tag!==0&&o===2){var l=Ti(t);l!==0&&(i=l,o=ou(t,l))}if(o===1)throw o=bo,Fr(t,0),ur(t,i),Rn(t,be()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Cn,Di),Rn(t,be()),null}function lu(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(ws=be()+500,xa&&ir())}}function Ur(t){lr!==null&&lr.tag===0&&(Mt&6)===0&&Es();var i=Mt;Mt|=1;var o=Yn.transition,l=Lt;try{if(Yn.transition=null,Lt=1,t)return t()}finally{Lt=l,Yn.transition=o,Mt=i,(Mt&6)===0&&ir()}}function cu(){On=Ms.current,Ot(Ms)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,ov(o)),Yt!==null)for(o=Yt.return;o!==null;){var l=o;switch(xc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ga();break;case 3:_s(),Ot(Tn),Ot(un),Pc();break;case 5:Rc(l);break;case 4:_s();break;case 13:Ot(Bt);break;case 19:Ot(Bt);break;case 10:Ec(l.type._context);break;case 22:case 23:cu()}o=o.return}if(nn=t,Yt=t=dr(t.current,null),an=On=i,Jt=0,bo=null,nu=za=Ir=0,Cn=Ao=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,p=o.pending;if(p!==null){var T=p.next;p.next=f,l.next=T}o.pending=l}Pr=null}return t}function gp(t,i){do{var o=Yt;try{if(wc(),Ca.current=La,Ra){for(var l=Ht.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ra=!1}if(Dr=0,tn=Zt=Ht=null,yo=!1,So=0,tu.current=null,o===null||o.return===null){Jt=1,bo=i,Yt=null;break}e:{var p=t,T=o.return,F=o,H=i;if(i=an,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,Me=F,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Fe=Hh(T);if(Fe!==null){Fe.flags&=-257,Vh(Fe,T,F,p,i),Fe.mode&1&&Bh(p,re,i),i=Fe,H=re;var He=i.updateQueue;if(He===null){var We=new Set;We.add(H),i.updateQueue=We}else He.add(H);break e}else{if((i&1)===0){Bh(p,re,i),uu();break e}H=Error(n(426))}}else if(zt&&F.mode&1){var Gt=Hh(T);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Vh(Gt,T,F,p,i),Sc(ys(H,F));break e}}p=H=ys(H,F),Jt!==4&&(Jt=2),Ao===null?Ao=[p]:Ao.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var J=Oh(p,H,i);dh(p,J);break e;case 1:F=H;var W=p.type,ee=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(ar===null||!ar.has(ee)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=zh(p,F,i);dh(p,Ae);break e}}p=p.return}while(p!==null)}_p(o)}catch(qe){i=qe,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function vp(){var t=Oa.current;return Oa.current=La,t===null?La:t}function uu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),nn===null||(Ir&268435455)===0&&(za&268435455)===0||ur(nn,an)}function Wa(t,i){var o=Mt;Mt|=2;var l=vp();(nn!==t||an!==i)&&(Di=null,Fr(t,i));do try{Pv();break}catch(f){gp(t,f)}while(!0);if(wc(),Mt=o,Oa.current=l,Yt!==null)throw Error(n(261));return nn=null,an=0,Jt}function Pv(){for(;Yt!==null;)xp(Yt)}function Lv(){for(;Yt!==null&&!K();)xp(Yt)}function xp(t){var i=Mp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?_p(t):Yt=i,tu.current=null}function _p(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Ev(o,i,On),o!==null){Yt=o;return}}else{if(o=Tv(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Jt===0&&(Jt=5)}function kr(t,i,o){var l=Lt,f=Yn.transition;try{Yn.transition=null,Lt=1,Dv(t,i,o,l)}finally{Yn.transition=f,Lt=l}return null}function Dv(t,i,o,l){do Es();while(lr!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Qo(t,p),t===nn&&(Yt=nn=null,an=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ha||(Ha=!0,wp(at,function(){return Es(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var T=Lt;Lt=1;var F=Mt;Mt|=4,tu.current=null,Av(t,o),cp(o,t),Q0(uc),na=!!cc,uc=cc=null,t.current=o,Cv(o),Ce(),Mt=F,Lt=T,Yn.transition=p}else t.current=o;if(Ha&&(Ha=!1,lr=t,Va=f),p=t.pendingLanes,p===0&&(ar=null),ln(o.stateNode),Rn(t,be()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ba)throw Ba=!1,t=ru,ru=null,t;return(Va&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===su?Co++:(Co=0,su=t):Co=0,ir(),null}function Es(){if(lr!==null){var t=af(Va),i=Yn.transition,o=Lt;try{if(Yn.transition=null,Lt=16>t?16:t,lr===null)var l=!1;else{if(t=lr,lr=null,Va=0,(Mt&6)!==0)throw Error(n(331));var f=Mt;for(Mt|=4,ze=t.current;ze!==null;){var p=ze,T=p.child;if((ze.flags&16)!==0){var F=p.deletions;if(F!==null){for(var H=0;H<F.length;H++){var re=F[H];for(ze=re;ze!==null;){var Me=ze;switch(Me.tag){case 0:case 11:case 15:To(8,Me,p)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,ze=Ee;else for(;ze!==null;){Me=ze;var Se=Me.sibling,Fe=Me.return;if(rp(Me),Me===re){ze=null;break}if(Se!==null){Se.return=Fe,ze=Se;break}ze=Fe}}}var He=p.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var Gt=We.sibling;We.sibling=null,We=Gt}while(We!==null)}}ze=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,ze=T;else e:for(;ze!==null;){if(p=ze,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:To(9,p,p.return)}var J=p.sibling;if(J!==null){J.return=p.return,ze=J;break e}ze=p.return}}var W=t.current;for(ze=W;ze!==null;){T=ze;var ee=T.child;if((T.subtreeFlags&2064)!==0&&ee!==null)ee.return=T,ze=ee;else e:for(T=W;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ka(9,F)}}catch(qe){Vt(F,F.return,qe)}if(F===T){ze=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,ze=Ae;break e}ze=F.return}}if(Mt=f,ir(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ct,t)}catch{}l=!0}return l}finally{Lt=o,Yn.transition=i}}return!1}function yp(t,i,o){i=ys(o,i),i=Oh(t,i,1),t=sr(t,i,1),i=yn(),t!==null&&(En(t,1,i),Rn(t,i))}function Vt(t,i,o){if(t.tag===3)yp(t,t,o);else for(;i!==null;){if(i.tag===3){yp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=ys(o,t),t=zh(i,t,1),i=sr(i,t,1),t=yn(),i!==null&&(En(i,1,t),Rn(i,t));break}}i=i.return}}function Iv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(an&o)===o&&(Jt===4||Jt===3&&(an&130023424)===an&&500>be()-iu?Fr(t,0):nu|=o),Rn(t,i)}function Sp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var o=yn();t=Ni(t,i),t!==null&&(En(t,i,o),Rn(t,o))}function Uv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Sp(t,o)}function Fv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Sp(t,o)}var Mp;Mp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return An=!1,wv(t,i,o);An=(t.flags&131072)!==0}else An=!1,zt&&(i.flags&1048576)!==0&&th(i,ya,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ua(t,i),t=i.pendingProps;var f=fs(i,un.current);xs(i,o),f=Ic(null,i,l,t,f,o);var p=Uc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(l)?(p=!0,va(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ac(i),f.updater=Da,i.stateNode=f,f._reactInternals=i,Hc(i,l,t,o),i=Wc(null,i,l,!0,p,o)):(i.tag=0,zt&&p&&vc(i),_n(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ua(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=Ov(l),t=si(l,t),f){case 0:i=jc(null,i,l,t,o);break e;case 1:i=qh(null,i,l,t,o);break e;case 11:i=Gh(null,i,l,t,o);break e;case 14:i=jh(null,i,l,si(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),jc(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),qh(t,i,l,f,o);case 3:e:{if($h(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,f=p.element,uh(t,i),ba(i,l,null,o);var T=i.memoizedState;if(l=T.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ys(Error(n(423)),i),i=Kh(t,i,l,o,f);break e}else if(l!==f){f=ys(Error(n(424)),i),i=Kh(t,i,l,o,f);break e}else for(kn=er(i.stateNode.containerInfo.firstChild),Fn=i,zt=!0,ri=null,o=lh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),l===f){i=Li(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return hh(i),t===null&&yc(i),l=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,T=f.children,dc(l,f)?T=null:p!==null&&dc(l,p)&&(i.flags|=32),Yh(t,i),_n(t,i,T,o),i.child;case 6:return t===null&&yc(i),null;case 13:return Zh(t,i,o);case 4:return Cc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Gh(t,i,l,f,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,T=f.value,Ut(wa,l._currentValue),l._currentValue=T,p!==null)if(ii(p.value,T)){if(p.children===f.children&&!Tn.current){i=Li(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var F=p.dependencies;if(F!==null){T=p.child;for(var H=F.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Pi(-1,o&-o),H.tag=2;var re=p.updateQueue;if(re!==null){re=re.shared;var Me=re.pending;Me===null?H.next=H:(H.next=Me.next,Me.next=H),re.pending=H}}p.lanes|=o,H=p.alternate,H!==null&&(H.lanes|=o),Tc(p.return,o,i),F.lanes|=o;break}H=H.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=o,F=T.alternate,F!==null&&(F.lanes|=o),Tc(T,o,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}_n(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,xs(i,o),f=Wn(f),l=l(f),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,f=si(l,i.pendingProps),f=si(l.type,f),jh(t,i,l,f,o);case 15:return Wh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Ua(t,i),i.tag=1,bn(l)?(t=!0,va(i)):t=!1,xs(i,o),Fh(i,l,f),Hc(i,l,f,o),Wc(null,i,l,!0,t,o);case 19:return Qh(t,i,o);case 22:return Xh(t,i,o)}throw Error(n(156,i.tag))};function wp(t,i){return se(t,i)}function kv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,o,l){return new kv(t,i,o,l)}function du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ov(t){if(typeof t=="function")return du(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===ge)return 14}return 2}function dr(t,i){var o=t.alternate;return o===null?(o=qn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Xa(t,i,o,l,f,p){var T=2;if(l=t,typeof t=="function")du(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case O:return Or(o.children,f,p,i);case V:T=8,f|=8;break;case D:return t=qn(12,o,i,f|2),t.elementType=D,t.lanes=p,t;case ne:return t=qn(13,o,i,f),t.elementType=ne,t.lanes=p,t;case he:return t=qn(19,o,i,f),t.elementType=he,t.lanes=p,t;case fe:return Ya(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:T=10;break e;case B:T=9;break e;case ae:T=11;break e;case ge:T=14;break e;case ue:T=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(T,o,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function Or(t,i,o,l){return t=qn(7,t,l,i),t.lanes=o,t}function Ya(t,i,o,l){return t=qn(22,t,l,i),t.elementType=fe,t.lanes=o,t.stateNode={isHidden:!1},t}function fu(t,i,o){return t=qn(6,t,null,i),t.lanes=o,t}function hu(t,i,o){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function zv(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function pu(t,i,o,l,f,p,T,F,H){return t=new zv(t,i,o,F,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(p),t}function Bv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Ep(t){if(!t)return nr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return Jf(t,o,i)}return i}function Tp(t,i,o,l,f,p,T,F,H){return t=pu(o,l,!0,t,f,p,T,F,H),t.context=Ep(null),o=t.current,l=yn(),f=cr(o),p=Pi(l,f),p.callback=i??null,sr(o,p,f),t.current.lanes=f,En(t,f,l),Rn(t,l),t}function qa(t,i,o,l){var f=i.current,p=yn(),T=cr(f);return o=Ep(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,T),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=sr(f,i,T),t!==null&&(li(t,f,T,p),Ta(t,f,T)),T}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function mu(t,i){bp(t,i),(t=t.alternate)&&bp(t,i)}function Hv(){return null}var Ap=typeof reportError=="function"?reportError:function(t){console.error(t)};function gu(t){this._internalRoot=t}Ka.prototype.render=gu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qa(t,i,null,null)},Ka.prototype.unmount=gu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){qa(null,t,null,null)}),i[bi]=null}};function Ka(t){this._internalRoot=t}Ka.prototype.unstable_scheduleHydration=function(t){if(t){var i=uf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&hf(t)}};function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function Vv(t,i,o,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var re=$a(T);p.call(re)}}var T=Tp(i,l,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=T,t[bi]=T.current,fo(t.nodeType===8?t.parentNode:t),Ur(),T}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var F=l;l=function(){var re=$a(H);F.call(re)}}var H=pu(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=H,t[bi]=H.current,fo(t.nodeType===8?t.parentNode:t),Ur(function(){qa(i,H,o,l)}),H}function Ja(t,i,o,l,f){var p=o._reactRootContainer;if(p){var T=p;if(typeof f=="function"){var F=f;f=function(){var H=$a(T);F.call(H)}}qa(i,T,t,f)}else T=Vv(o,i,t,f,l);return $a(T)}lf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Kt(i.pendingLanes);o!==0&&(Hl(i,o|1),Rn(i,be()),(Mt&6)===0&&(ws=be()+500,ir()))}break;case 13:Ur(function(){var l=Ni(t,1);if(l!==null){var f=yn();li(l,t,1,f)}}),mu(t,1)}},Vl=function(t){if(t.tag===13){var i=Ni(t,134217728);if(i!==null){var o=yn();li(i,t,134217728,o)}mu(t,134217728)}},cf=function(t){if(t.tag===13){var i=cr(t),o=Ni(t,i);if(o!==null){var l=yn();li(o,t,i,l)}mu(t,i)}},uf=function(){return Lt},df=function(t,i){var o=Lt;try{return Lt=t,i()}finally{Lt=o}},Ne=function(t,i,o){switch(i){case"input":if(nt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=ma(l);if(!f)throw Error(n(90));Ke(l),nt(l,f)}}}break;case"textarea":_e(t,o);break;case"select":i=o.value,i!=null&&U(t,!!o.multiple,i,!1)}},Ft=lu,$t=Ur;var Gv={usingClientEntryPoint:!1,Events:[mo,us,ma,De,ut,lu]},Ro={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jv={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||Hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Ct=Qa.inject(jv),_t=Qa}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gv,Nn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(i))throw Error(n(200));return Bv(t,i,null,o)},Nn.createRoot=function(t,i){if(!vu(t))throw Error(n(299));var o=!1,l="",f=Ap;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=pu(t,1,!1,null,null,o,!1,l,f),t[bi]=i.current,fo(t.nodeType===8?t.parentNode:t),new gu(i)},Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=N(i),t=t===null?null:t.stateNode,t},Nn.flushSync=function(t){return Ur(t)},Nn.hydrate=function(t,i,o){if(!Za(i))throw Error(n(200));return Ja(null,t,i,!0,o)},Nn.hydrateRoot=function(t,i,o){if(!vu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,p="",T=Ap;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Tp(i,null,t,1,o??null,f,!1,p,T),t[bi]=i.current,fo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Ka(i)},Nn.render=function(t,i,o){if(!Za(i))throw Error(n(200));return Ja(null,t,i,!1,o)},Nn.unmountComponentAtNode=function(t){if(!Za(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){Ja(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1},Nn.unstable_batchedUpdates=lu,Nn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Za(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ja(t,i,o,!1,l)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Fp;function ex(){if(Fp)return yu.exports;Fp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yu.exports=Qv(),yu.exports}var kp;function tx(){if(kp)return el;kp=1;var r=ex();return el.createRoot=r.createRoot,el.hydrateRoot=r.hydrateRoot,el}var nx=tx();const ix=Xm(nx);var Op="1.3.26";function qm(r,e,n){return Math.max(r,Math.min(e,n))}function rx(r,e,n){return(1-n)*r+n*e}function sx(r,e,n,s){return rx(r,e,1-Math.exp(-n*s))}function ox(r,e){return(r%e+e)%e}var ax=class{constructor(){$e(this,"isRunning",!1);$e(this,"value",0);$e(this,"from",0);$e(this,"to",0);$e(this,"currentTime",0);$e(this,"lerp");$e(this,"duration");$e(this,"easing");$e(this,"onUpdate")}advance(r){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const s=qm(0,this.currentTime/this.duration,1);e=s>=1;const a=e?1:this.easing(s);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=sx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:n,duration:s,easing:a,onStart:c,onUpdate:u}){this.from=this.value=r,this.to=e,this.lerp=n,this.duration=s,this.easing=a,this.currentTime=0,this.isRunning=!0,c==null||c(),this.onUpdate=u}};function lx(r,e){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>{n=void 0,r.apply(this,s)},e)}}var cx=class{constructor(r,e,{autoResize:n=!0,debounce:s=250}={}){$e(this,"width",0);$e(this,"height",0);$e(this,"scrollHeight",0);$e(this,"scrollWidth",0);$e(this,"debouncedResize");$e(this,"wrapperResizeObserver");$e(this,"contentResizeObserver");$e(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});$e(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});$e(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,n&&(this.debouncedResize=lx(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$m=class{constructor(){$e(this,"events",{})}emit(r,...e){var s;const n=this.events[r]||[];for(let a=0,c=n.length;a<c;a++)(s=n[a])==null||s.call(n,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(s=>e!==s)}}off(r,e){var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(s=>e!==s)}destroy(){this.events={}}};const ux=100/6,hr={passive:!1};function zp(r,e){return r===1?ux:r===2?e:1}var dx=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){$e(this,"touchStart",{x:0,y:0});$e(this,"lastDelta",{x:0,y:0});$e(this,"window",{width:0,height:0});$e(this,"emitter",new $m);$e(this,"onTouchStart",r=>{const{clientX:e,clientY:n}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});$e(this,"onTouchMove",r=>{const{clientX:e,clientY:n}=r.targetTouches?r.targetTouches[0]:r,s=-(e-this.touchStart.x)*this.options.touchMultiplier,a=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:s,y:a},this.emitter.emit("scroll",{deltaX:s,deltaY:a,event:r})});$e(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});$e(this,"onWheel",r=>{let{deltaX:e,deltaY:n,deltaMode:s}=r;const a=zp(s,this.window.width),c=zp(s,this.window.height);e*=a,n*=c,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:r})});$e(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hr),this.element.addEventListener("touchstart",this.onTouchStart,hr),this.element.addEventListener("touchmove",this.onTouchMove,hr),this.element.addEventListener("touchend",this.onTouchEnd,hr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,hr),this.element.removeEventListener("touchstart",this.onTouchStart,hr),this.element.removeEventListener("touchmove",this.onTouchMove,hr),this.element.removeEventListener("touchend",this.onTouchEnd,hr)}};const Bp=r=>Math.min(1,1.001-2**(-10*r));var fx=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:n=r,smoothWheel:s=!0,syncTouch:a=!1,syncTouchLerp:c=.075,touchInertiaExponent:u=1.7,duration:d,easing:h,lerp:g=.1,infinite:_=!1,orientation:y="vertical",gestureOrientation:x=y==="horizontal"?"both":"vertical",touchMultiplier:M=1,wheelMultiplier:E=1,autoResize:b=!0,prevent:S,virtualScroll:v,overscroll:L=!0,autoRaf:P=!1,anchors:C=!1,autoToggle:Y=!1,allowNestedScroll:k=!1,__experimental__naiveDimensions:O=!1,naiveDimensions:V=O,stopInertiaOnNavigate:D=!1,respectReducedMotion:R=!0}={}){$e(this,"_isScrolling",!1);$e(this,"_isStopped",!1);$e(this,"_isLocked",!1);$e(this,"_preventNextNativeScrollEvent",!1);$e(this,"_resetVelocityTimeout",null);$e(this,"_rafId",null);$e(this,"_isDraggingSelection",!1);$e(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));$e(this,"isTouching");$e(this,"isIos");$e(this,"time",0);$e(this,"userData",{});$e(this,"lastVelocity",0);$e(this,"velocity",0);$e(this,"direction",0);$e(this,"options");$e(this,"targetScroll");$e(this,"animatedScroll");$e(this,"animate",new ax);$e(this,"emitter",new $m);$e(this,"dimensions");$e(this,"virtualScroll");$e(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});$e(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});$e(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});$e(this,"onClick",r=>{const e=r.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),n=new URL(window.location.href);if(this.options.anchors){const s=e.find(a=>n.host===a.host&&n.pathname===a.pathname&&a.hash);if(s){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(s.hash);this.scrollTo(c,a);return}}if(this.options.stopInertiaOnNavigate&&e.some(s=>n.host===s.host&&n.pathname!==s.pathname)){this.reset();return}});$e(this,"onPointerDown",r=>{r.button===1&&this.reset()});$e(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:n,event:s}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const a=s.type.includes("touch"),c=s.type.includes("wheel");if(a&&this.isIos&&(s.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(s)),this._isDraggingSelection)){s.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=s.type==="touchstart"||s.type==="touchmove";const u=e===0&&n===0;if(this.options.syncTouch&&a&&s.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||d)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const g=this.options.prevent,_=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(h.find(E=>{var b,S,v,L,P;return E instanceof HTMLElement&&(typeof g=="function"&&(g==null?void 0:g(E))||((b=E.hasAttribute)==null?void 0:b.call(E,"data-lenis-prevent"))||_==="vertical"&&((S=E.hasAttribute)==null?void 0:S.call(E,"data-lenis-prevent-vertical"))||_==="horizontal"&&((v=E.hasAttribute)==null?void 0:v.call(E,"data-lenis-prevent-horizontal"))||a&&((L=E.hasAttribute)==null?void 0:L.call(E,"data-lenis-prevent-touch"))||c&&((P=E.hasAttribute)==null?void 0:P.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){s.cancelable&&s.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let y=n;this.options.gestureOrientation==="both"?y=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(y=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(s.lenisStopPropagation=!0),s.cancelable&&s.preventDefault();const x=a&&this.options.syncTouch,M=a&&s.type==="touchend";M&&(y=Math.sign(y)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+y,{programmatic:!1,...x?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});$e(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});$e(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Op,window.lenis||(window.lenis={}),window.lenis.version=Op,y==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof d=="number"&&typeof h!="function"?h=Bp:typeof h=="function"&&typeof d!="number"&&(d=1),this.options={wrapper:r,content:e,eventsTarget:n,smoothWheel:s,syncTouch:a,syncTouchLerp:c,touchInertiaExponent:u,duration:d,easing:h,lerp:g,infinite:_,gestureOrientation:x,orientation:y,touchMultiplier:M,wheelMultiplier:E,autoResize:b,prevent:S,virtualScroll:v,overscroll:L,autoRaf:P,anchors:C,autoToggle:Y,allowNestedScroll:k,naiveDimensions:V,stopInertiaOnNavigate:D,respectReducedMotion:R},this.dimensions=new cx(r,e,{autoResize:b}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new dx(n,{touchMultiplier:M,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=r.targetTouches[0]??r.changedTouches[0];if(!n)return!1;const s=e.getRangeAt(0).getClientRects();if(s.length===0)return!1;const a=s[0],c=s[s.length-1],u=40,d=Math.hypot(n.clientX-a.left,n.clientY-a.top)<=u,h=Math.hypot(n.clientX-c.right,n.clientY-c.bottom)<=u;return d||h}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:n=!1,lock:s=!1,programmatic:a=!0,lerp:c=a?this.options.lerp:void 0,duration:u=a?this.options.duration:void 0,easing:d=a?this.options.easing:void 0,onStart:h,onComplete:g,force:_=!1,userData:y}={}){if(this.prefersReducedMotion&&(a?n=!0:(c=1,u=void 0,d=void 0)),(this.isStopped||this.isLocked)&&!_)return;let x=r,M=e;if(typeof x=="string"&&["top","left","start","#"].includes(x))x=0;else if(typeof x=="string"&&["bottom","right","end"].includes(x))x=this.limit;else{let E=null;if(typeof x=="string"?(E=x.startsWith("#")?document.getElementById(x.slice(1)):document.querySelector(x),E||(x==="#top"?x=0:console.warn("Lenis: Target not found",x))):x instanceof HTMLElement&&(x!=null&&x.nodeType)&&(E=x),E){if(this.options.wrapper!==window){const C=this.rootElement.getBoundingClientRect();M-=this.isHorizontal?C.left:C.top}const b=E.getBoundingClientRect(),S=getComputedStyle(E),v=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),L=getComputedStyle(this.rootElement),P=this.isHorizontal?Number.parseFloat(L.scrollPaddingLeft):Number.parseFloat(L.scrollPaddingTop);x=(this.isHorizontal?b.left:b.top)+this.animatedScroll-(Number.isNaN(v)?0:v)-(Number.isNaN(P)?0:P)}}if(typeof x=="number"){if(x+=M,this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;const E=x-this.animatedScroll;E>this.limit/2?x-=this.limit:E<-this.limit/2&&(x+=this.limit)}}else x=qm(0,x,this.limit);if(x===this.targetScroll){h==null||h(this),g==null||g(this);return}if(this.userData=y??{},n){this.animatedScroll=this.targetScroll=x,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),g==null||g(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=x),typeof u=="number"&&typeof d!="function"?d=Bp:typeof d=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,x,{duration:u,easing:d,lerp:c,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",h==null||h(this)},onUpdate:(E,b)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),a&&(this.targetScroll=E),b||this.emit(),b&&(this.reset(),this.emit(),g==null||g(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:n}){const s=Date.now();r._lenis||(r._lenis={});const a=r._lenis;let c,u,d,h,g,_,y,x,M,E;if(s-(a.time??0)>2e3){a.time=Date.now();const k=window.getComputedStyle(r);if(a.computedStyle=k,c=["auto","overlay","scroll"].includes(k.overflowX),u=["auto","overlay","scroll"].includes(k.overflowY),g=["auto"].includes(k.overscrollBehaviorX),_=["auto"].includes(k.overscrollBehaviorY),a.hasOverflowX=c,a.hasOverflowY=u,!(c||u))return!1;y=r.scrollWidth,x=r.scrollHeight,M=r.clientWidth,E=r.clientHeight,d=y>M,h=x>E,a.isScrollableX=d,a.isScrollableY=h,a.scrollWidth=y,a.scrollHeight=x,a.clientWidth=M,a.clientHeight=E,a.hasOverscrollBehaviorX=g,a.hasOverscrollBehaviorY=_}else d=a.isScrollableX,h=a.isScrollableY,c=a.hasOverflowX,u=a.hasOverflowY,y=a.scrollWidth,x=a.scrollHeight,M=a.clientWidth,E=a.clientHeight,g=a.hasOverscrollBehaviorX,_=a.hasOverscrollBehaviorY;if(!(c&&d||u&&h))return!1;const b=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let S,v,L,P,C,Y;if(b==="horizontal")S=Math.round(r.scrollLeft),v=y-M,L=e,P=c,C=d,Y=g;else if(b==="vertical")S=Math.round(r.scrollTop),v=x-E,L=n,P=u,C=h,Y=_;else return!1;return!Y&&(S>=v||S<=0)?!0:(L>0?S<v:S>0)&&P&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ox(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const hx=()=>{const[r,e]=dt.useState(!1),[n,s]=dt.useState(!1),[a,c]=dt.useState(!1),[u,d]=dt.useState(""),h=dt.useRef(null),g=dt.useRef(null),_=dt.useRef({x:-100,y:-100}),y=dt.useRef({x:-100,y:-100});return dt.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;e(!0);const x=v=>{_.current={x:v.clientX,y:v.clientY},h.current&&(h.current.style.transform=`translate3d(${v.clientX}px, ${v.clientY}px, 0)`);const P=v.target.closest("button, a, input, textarea, [data-cursor], .interactive-card");if(P){s(!0);const C=P.getAttribute("data-cursor");d(C||"")}else s(!1),d("")},M=()=>c(!0),E=()=>c(!1);window.addEventListener("mousemove",x,{passive:!0}),window.addEventListener("mousedown",M),window.addEventListener("mouseup",E);let b;const S=()=>{y.current.x+=(_.current.x-y.current.x)*.18,y.current.y+=(_.current.y-y.current.y)*.18,g.current&&(g.current.style.transform=`translate3d(${y.current.x}px, ${y.current.y}px, 0)`),b=requestAnimationFrame(S)};return b=requestAnimationFrame(S),()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mousedown",M),window.removeEventListener("mouseup",E),cancelAnimationFrame(b)}},[]),r?m.jsxs(m.Fragment,{children:[m.jsx("div",{ref:h,className:"fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 pointer-events-none z-[9999] transition-transform duration-75 shadow-[0_0_12px_#00f0ff]"}),m.jsx("div",{ref:g,className:`fixed top-0 left-0 pointer-events-none z-[9998] transition-[width,height,background-color,border-color,margin,opacity] duration-200 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${n?"w-14 h-14 -ml-7 -mt-7 bg-cyan-500/10 border border-cyan-400/60 backdrop-blur-[1px] shadow-[0_0_25px_rgba(0,240,255,0.35)]":a?"w-8 h-8 -ml-4 -mt-4 bg-white/20 border border-white/40":"w-9 h-9 -ml-[18px] -mt-[18px] border border-cyan-400/30"} rounded-full`,children:u&&m.jsx("span",{className:"text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-300 select-none",children:u})})]}):null},px=({onFinish:r})=>{const[e,n]=dt.useState(0),[s,a]=dt.useState(!1);return dt.useEffect(()=>{let c=0;const u=setInterval(()=>{c+=12;const h=Math.min(100,c);n(h),h>=100&&(clearInterval(u),setTimeout(()=>{a(!0),setTimeout(()=>{r()},300)},150))},35),d=setTimeout(()=>{a(!0),setTimeout(r,200)},1200);return()=>{clearInterval(u),clearTimeout(d)}},[r]),m.jsxs("div",{onClick:r,className:`fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-500 ease-in-out cursor-pointer ${s?"opacity-0 pointer-events-none scale-105":"opacity-100"}`,children:[m.jsx("div",{className:"absolute w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"}),m.jsxs("div",{className:"relative mb-8 text-center",children:[m.jsx("div",{className:"w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-cyan-400/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(0,240,255,0.2)]",children:m.jsx("span",{className:"font-display font-extrabold text-3xl tracking-tighter bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"VS"})}),m.jsx("h1",{className:"mt-4 font-display font-bold text-sm tracking-[0.3em] uppercase text-white/80",children:"Vishesh Singh"}),m.jsx("p",{className:"mt-1 font-mono text-[11px] tracking-wider text-cyan-400/70",children:"FULL STACK DEVELOPER"})]}),m.jsxs("div",{className:"w-64 max-w-[80vw] relative",children:[m.jsx("div",{className:"h-[2px] w-full bg-white/10 rounded-full overflow-hidden",children:m.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-white transition-all duration-75 ease-out shadow-[0_0_15px_#00f0ff]",style:{width:`${e}%`}})}),m.jsxs("div",{className:"flex justify-between items-center mt-3 font-mono text-[10px] text-white/40",children:[m.jsxs("span",{className:"tracking-widest flex items-center gap-1.5",children:[m.jsx("span",{className:"inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),"WORKSPACE"]}),m.jsxs("span",{className:"text-cyan-300 font-semibold",children:[e,"%"]})]})]})]})};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function gx(r,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:mx(r),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=r=>{let e="",n=!1;for(const s of r){if(s==="-"||s==="_"||s<=" "){n=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=n?s.toUpperCase():s,n=!1}return e};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=r=>{const e=vx(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function wu(r){return r!=null}function _x(r,e={}){var x,M;const n=e.attributeNames??{},s=E=>n[E]??E,a=r.size??r.width??zr.width,c=r.size??r.height??zr.height,u=((x=r.aliases)==null?void 0:x.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],d=[...r.name?[`lucide-${r.name}`]:[],...u],h=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],g=e.includeDefaultClasses===!1?ed(...h):ed("lucide",...d,...h),_=e.absoluteStrokeWidth?Number(e.strokeWidth??zr["stroke-width"])*Number(r.size??r.width??zr.width)/Number(e.size??e.width??zr.width):e.strokeWidth??zr["stroke-width"];return["svg",{...Object.entries(zr).reduce((E,[b,S])=>(E[s(b)]=S,E),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&wu(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&wu(e.width)&&{[s("width")]:e.width},..."height"in e&&wu(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:_,...g&&{[s("class")]:g},[s("viewBox")]:`0 0 ${a} ${c}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},r.node.map(E=>{const[b,S,v]=E,L=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...S}:S;return v?[b,L,v]:[b,L]})]}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yx(r,e={}){return _x(r,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Mx=dt.createContext({}),wx=()=>dt.useContext(Mx),Ex=dt.forwardRef(({color:r,size:e,width:n,height:s,strokeWidth:a,absoluteStrokeWidth:c,nonScalingStroke:u,className:d="",children:h,iconNode:g=[],icon:_={node:g,aliases:[],size:24},...y},x)=>{const{size:M=24,strokeWidth:E=2,absoluteStrokeWidth:b=!1,nonScalingStroke:S=!1,color:v="currentColor",className:L=""}=wx()??{},P=!!h||Sx(y),[C,Y,k=[]]=yx(_,{color:r??v,width:n??e??M,height:s??e??M,strokeWidth:a??E,absoluteStrokeWidth:c??b,nonScalingStroke:u??S,className:ed(L,d),hasA11yProp:P,attributes:y});return dt.createElement(C,{ref:x,...Y},[...k.map(([O,V])=>dt.createElement(O,V)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Et(r,e=[],n=[]){const s=typeof r=="string"?gx(r,e,n):r,a=dt.forwardRef(({className:c,...u},d)=>dt.createElement(Ex,{ref:d,icon:s,className:c,...u}));return s.name&&(a.displayName=xx(s.name)),a}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};Km.node;const Tx=Et(Km);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};Zm.node;const bx=Et(Zm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};Jm.node;const Dl=Et(Jm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};Qm.node;const Ax=Et(Qm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"binary",size:24,node:[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]};eg.node;const Cx=Et(eg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};tg.node;const Rx=Et(tg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};ng.node;const Nx=Et(ng);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};ig.node;const rg=Et(ig);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};sg.node;const Px=Et(sg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};og.node;const Lx=Et(og);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};ag.node;const lg=Et(ag);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"coffee",size:24,node:[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]};cg.node;const Dx=Et(cg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};ug.node;const Ix=Et(ug);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};dg.node;const Ux=Et(dg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};fg.node;const Fx=Et(fg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};hg.node;const kx=Et(hg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};pg.node;const Wd=Et(pg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};mg.node;const Ox=Et(mg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};gg.node;const El=Et(gg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};vg.node;const zx=Et(vg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};xg.node;const Bx=Et(xg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};_g.node;const Xd=Et(_g);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};yg.node;const Hx=Et(yg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Sg.node;const Vx=Et(Sg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};Mg.node;const Gx=Et(Mg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};wg.node;const Hp=Et(wg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"panels-top-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],aliases:["layout"]};Eg.node;const jx=Et(Eg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Tg.node;const bg=Et(Tg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Ag.node;const Cg=Et(Ag);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Rg.node;const es=Et(Rg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Ng.node;const Il=Et(Ng);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Pg.node;const Lg=Et(Pg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Dg.node;const Wx=Et(Dg),jt={name:"Vishesh Singh",primaryTitle:"Full Stack Web Developer",secondaryTitles:["Full Stack Web Developer","Frontend Engineer","Backend Developer","Java Developer","Software Engineer","Problem Solver"],status:"Open to Internships, Projects & Opportunities",profile:"B.Tech Computer Science & Engineering Student",email:"visheshsingh.dev@gmail.com",github:"https://github.com/vishesh-singh",linkedin:"https://linkedin.com/in/vishesh-singh",heroTagline:"I BUILD DIGITAL EXPERIENCES THAT LOOK BEAUTIFUL AND WORK BEAUTIFULLY.",heroBio:"I build modern, scalable and interactive digital experiences with clean code, thoughtful design and modern web technologies.",aboutText:["I'm Vishesh Singh, a Computer Science & Engineering student (Class of 2029) and aspiring Full Stack Web Developer.","I enjoy building practical software, learning modern technologies and turning ideas into real-world digital products. My core focus spans modern web development, backend architectures, Java programming, and algorithmic problem solving."],interests:["Web Development","Software Engineering","Java","JavaScript","React","Backend Development","Data Structures & Algorithms","Artificial Intelligence","Problem Solving"]},Vp={frontend:[{name:"React",badge:"Core",icon:"React",description:"Component-based architecture, hooks, state management, and modern UI patterns."},{name:"JavaScript (ES6+)",badge:"Core",icon:"FileCode",description:"Modern ES6+ syntax, asynchronous programming, DOM APIs, and closures."},{name:"Tailwind CSS",badge:"Core",icon:"Palette",description:"Utility-first design systems, responsive layouts, and glassmorphism styling."},{name:"HTML5",badge:"Core",icon:"Layout",description:"Semantic markup, modern web standards, and accessibility."},{name:"CSS3",badge:"Core",icon:"Paintbrush",description:"Flexbox, CSS Grid, custom properties, and smooth animations."}],backend:[{name:"Node.js",badge:"Core",icon:"Server",description:"Event-driven runtime for server-side logic and asynchronous services."},{name:"Express.js",badge:"Core",icon:"Cpu",description:"RESTful API routing, middleware integration, and request handling."},{name:"REST APIs",badge:"Core",icon:"Network",description:"Designing structured JSON API endpoints and CRUD workflows."}],programming:[{name:"Java",badge:"Core",icon:"Coffee",description:"Object-oriented programming, collections, core data structures, and algorithms."},{name:"C",badge:"Foundation",icon:"Binary",description:"Procedural programming fundamentals, memory management, and pointers."},{name:"Python",badge:"Proficient",icon:"Terminal",description:"Applied scripting, computer vision prototypes, and machine learning pipelines."}],database:[{name:"MySQL",badge:"Proficient",icon:"Database",description:"Relational database schema design, queries, and table relationships."},{name:"MongoDB",badge:"Proficient",icon:"HardDrive",description:"NoSQL document storage, schemas, and database operations."}],tools:[{name:"Git",badge:"Essential",icon:"GitBranch",description:"Distributed version control, branching, commits, and repository management."},{name:"GitHub",badge:"Essential",icon:"Github",description:"Remote repository hosting, collaboration, and code publishing."},{name:"VS Code",badge:"Essential",icon:"Code",description:"Primary development environment and productivity extensions."},{name:"Postman",badge:"Proficient",icon:"Send",description:"API testing, endpoint verification, and request debugging."}],other:[{name:"Three.js",badge:"Creative",icon:"Box",description:"Interactive 3D canvas visuals, particle systems, and web graphics."},{name:"GSAP",badge:"Creative",icon:"Zap",description:"High-performance animations, timelines, and scroll interactions."},{name:"AI Tools",badge:"Applied",icon:"Sparkles",description:"Leveraging modern AI tools and developer utilities to enhance productivity."}]},Gp=[{id:"center",label:"FULL STACK",group:"core",radius:50,x:0,y:0,color:"#00f0ff"},{id:"fe",label:"Frontend",group:"frontend",radius:36,x:-140,y:-70,color:"#38bdf8",items:["React","JavaScript","Tailwind CSS","HTML5","CSS3"]},{id:"be",label:"Backend",group:"backend",radius:36,x:140,y:-70,color:"#60a5fa",items:["Node.js","Express.js","REST APIs"]},{id:"prog",label:"Programming",group:"programming",radius:36,x:-150,y:70,color:"#f59e0b",items:["Java","C","Python"]},{id:"db",label:"Database",group:"database",radius:36,x:150,y:70,color:"#10b981",items:["MySQL","MongoDB"]},{id:"tools",label:"Tools",group:"tools",radius:34,x:0,y:130,color:"#a855f7",items:["Git","GitHub","VS Code","Postman"]},{id:"creative",label:"Creative & AI",group:"creative",radius:34,x:0,y:-130,color:"#ec4899",items:["Three.js","GSAP","AI Tools"]}],Xx=[{id:"har-system",title:"Human Activity Recognition System",category:"AI & Computer Vision",description:"An AI-based human activity recognition prototype designed to identify activities using computer vision and machine learning techniques.",longDescription:"Developed an AI prototype utilizing computer vision and deep learning techniques to recognize and classify human physical activities from video data.",technologies:["Python","OpenCV","PyTorch","Computer Vision","Machine Learning"],githubUrl:"https://github.com/vishesh-singh/human-activity-recognition",liveDemoUrl:"https://github.com/vishesh-singh/human-activity-recognition",badge:"AI Prototype",accent:"from-cyan-500 to-blue-600"},{id:"dsa-in-java",title:"DSA in Java",category:"Data Structures & Algorithms",description:"A structured collection of Data Structures and Algorithms implementations written in Java.",longDescription:"Comprehensive implementations of core Data Structures and Algorithms in Java, focusing on clean object-oriented design and optimal time and space complexity.",technologies:["Java","DSA","Algorithms","OOP","Problem Solving"],githubUrl:"https://github.com/vishesh-singh/dsa-in-java",liveDemoUrl:"https://github.com/vishesh-singh/dsa-in-java",badge:"Problem Solving",accent:"from-amber-500 to-orange-600"},{id:"cinematic-portfolio",title:"Developer Portfolio",category:"Interactive Web Development",description:"A cinematic interactive personal portfolio website built with modern frontend technologies.",longDescription:"Personal digital portfolio engineered with React, Three.js hardware-accelerated 3D visuals, Lenis smooth scrolling, and Tailwind CSS glassmorphism.",technologies:["React","JavaScript","Three.js","GSAP","Tailwind CSS"],githubUrl:"https://github.com/vishesh-singh/my-portfolio",liveDemoUrl:"#",badge:"Live Portfolio",accent:"from-blue-500 to-cyan-400"}],Yx=[{id:"01",title:"FULL STACK WEB APPS",description:"Developing responsive web applications connecting modern user interfaces with scalable backend APIs and database operations.",features:["Single Page Applications","State Management","Component Reusability","Full Stack Integration"],icon:"Layers"},{id:"02",title:"INTERACTIVE FRONTEND",description:"Building responsive, modern user interfaces with clean CSS, reactive React components, and subtle interactive animations.",features:["Modern React & Tailwind","Responsive Layouts","Interactive UI Elements","Clean Design Hierarchy"],icon:"Monitor"},{id:"03",title:"BACKEND & APIs",description:"Designing RESTful APIs and server architectures using Node.js, Express, and structured data storage with MySQL and MongoDB.",features:["RESTful Routing","API Endpoint Testing","Database Integration","Middleware & Controllers"],icon:"Server"},{id:"04",title:"MODERN DIGITAL EXPERIENCES",description:"Crafting digital experiences with attention to detail, performance, smooth navigation, and modern developer aesthetics.",features:["Minimal Dark Design","Three.js Graphics","Smooth Scrolling","Clean Code Standards"],icon:"Sparkles"}],qx=[{step:"01",title:"DISCOVER",subtitle:"Understand the problem",description:"Understand the requirements, user goals, and technical scope before writing code."},{step:"02",title:"PLAN",subtitle:"Design architecture and user experience",description:"Outline the project architecture, data flow, component hierarchy, and design direction."},{step:"03",title:"BUILD",subtitle:"Write clean and scalable code",description:"Implement features step-by-step using modern frameworks, reusable components, and clean coding standards."},{step:"04",title:"TEST",subtitle:"Improve reliability and performance",description:"Test functionality, verify responsiveness across screen sizes, and debug edge cases."},{step:"05",title:"DEPLOY",subtitle:"Ship the product",description:"Deploy the application to production hosting platforms with version control."},{step:"06",title:"IMPROVE",subtitle:"Continuously iterate",description:"Review user feedback, optimize code, and continuously enhance functionality and performance."}],$x=[{year:"2025 - 2029",type:"Education",title:"B.Tech in Computer Science & Engineering",institution:"University / College",description:"Pursuing undergraduate degree in Computer Science & Engineering. Building strong fundamentals in Core Computing, Algorithms, and Software Engineering.",highlights:["Data Structures & Algorithms","Full Stack Web Development","Object-Oriented Programming"]},{year:"Current",type:"Projects",title:"Practical Software & Prototyping",institution:"Independent Development",description:"Building real-world projects including the Human Activity Recognition System, DSA in Java repository, and interactive web applications.",highlights:["Python & PyTorch","Java Algorithmic Implementations","React & Modern Web"]},{year:"Continuous",type:"Learning",title:"Problem Solving & Core CS Fundamentals",institution:"Technical Practice",description:"Consistently practicing algorithms, object-oriented concepts in Java, and exploring modern full stack development tools.",highlights:["Core Java","Data Structures","Web Technologies"]}],Po={degree:"B.Tech in Computer Science & Engineering",branch:"Computer Science & Engineering",expectedGraduation:"2029",focusAreas:["Object-Oriented Programming (Java)","Data Structures & Algorithms","Full Stack Web Development","Database Management Systems (MySQL, MongoDB)","Computer Networks & Operating Systems","Artificial Intelligence & Machine Learning Basics"]},Kx=[{id:"ach-1",category:"Academic",title:"B.Tech CSE (Class of 2029)",detail:"Enrolled in Bachelor of Technology in Computer Science & Engineering.",tag:"Education"},{id:"ach-2",category:"Technical Project",title:"Human Activity Recognition",detail:"Built an AI prototype applying computer vision and deep learning techniques.",tag:"AI Project"},{id:"ach-3",category:"Core Programming",title:"DSA in Java Implementation",detail:"Developed a structured repository of core data structures and algorithms in Java.",tag:"Problem Solving"},{id:"ach-4",category:"Upcoming / Editable",title:"Hackathons & Certifications",detail:"Ready to document upcoming hackathons, competition results, and certifications.",tag:"Future Milestone"}],jp={username:"vishesh-singh",pinnedRepositories:[{name:"human-activity-recognition",description:"An AI-based human activity recognition prototype designed to identify activities using computer vision and machine learning techniques.",language:"Python",languageColor:"#3572A5"},{name:"dsa-in-java",description:"A structured collection of Data Structures and Algorithms implementations written in Java.",language:"Java",languageColor:"#b07219"},{name:"developer-portfolio",description:"A cinematic interactive personal portfolio website built with modern frontend technologies.",language:"JavaScript",languageColor:"#f1e05a"}]},Wp=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Journey",href:"#journey"},{label:"Contact",href:"#contact"}],Zx=()=>{const[r,e]=dt.useState(!1),[n,s]=dt.useState("home"),[a,c]=dt.useState(!1);dt.useEffect(()=>{const d=()=>{e(window.scrollY>30);const h=["home","about","skills","projects","journey","contact"];for(const g of h){const _=document.getElementById(g);if(_){const y=_.getBoundingClientRect();if(y.top<=200&&y.bottom>=200){s(g);break}}}};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]);const u=(d,h)=>{d.preventDefault(),c(!1);const g=h.replace("#",""),_=document.getElementById(g);_&&_.scrollIntoView({behavior:"smooth"})};return m.jsxs(m.Fragment,{children:[m.jsx("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${r?"py-3":"py-5"}`,children:m.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:m.jsxs("nav",{className:`flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-300 ${r?"bg-[#09090d]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.4)]":"bg-transparent border border-transparent"}`,children:[m.jsxs("a",{href:"#home",onClick:d=>u(d,"#home"),className:"flex items-center gap-3 group","data-cursor":"HOME",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-cyan-400/30 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",children:m.jsx("span",{className:"font-display font-extrabold text-sm tracking-tighter bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"VS"})}),m.jsxs("div",{className:"flex flex-col",children:[m.jsx("span",{className:"font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors",children:jt.name}),m.jsx("span",{className:"font-mono text-[10px] text-white/40 tracking-wider",children:"FULL STACK ENG"})]})]}),m.jsx("div",{className:"hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06] backdrop-blur-md",children:Wp.map(d=>{const h=n===d.href.replace("#","");return m.jsxs("a",{href:d.href,onClick:g=>u(g,d.href),"data-cursor":"GO",className:`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${h?"text-cyan-300 font-semibold":"text-white/60 hover:text-white hover:bg-white/[0.04]"}`,children:[h&&m.jsx("span",{className:"absolute inset-0 bg-cyan-500/10 rounded-full border border-cyan-400/30 shadow-[0_0_12px_rgba(0,240,255,0.2)] -z-10"}),d.label]},d.label)})}),m.jsx("div",{className:"hidden md:flex items-center gap-3",children:m.jsxs("a",{href:"#contact",onClick:d=>u(d,"#contact"),"data-cursor":"CHAT",className:"btn-ripple relative group px-4 py-2 rounded-xl text-xs font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center gap-1.5",children:[m.jsx("span",{children:"Let's Connect"}),m.jsx(Dl,{className:"w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})}),m.jsx("div",{className:"flex md:hidden items-center gap-2",children:m.jsx("button",{onClick:()=>c(!a),className:"p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:text-cyan-300 focus:outline-none","aria-label":"Toggle navigation menu",children:a?m.jsx(Lg,{className:"w-5 h-5"}):m.jsx(Vx,{className:"w-5 h-5"})})})]})})}),m.jsx("div",{className:`fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-center px-6 ${a?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,children:m.jsxs("div",{className:"flex flex-col gap-4 text-center",children:[m.jsx("div",{className:"w-12 h-12 mx-auto mb-2 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center",children:m.jsx(Il,{className:"w-6 h-6 text-cyan-400"})}),m.jsx("p",{className:"font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4",children:"Navigation Menu"}),Wp.map(d=>m.jsx("a",{href:d.href,onClick:h=>u(h,d.href),className:"font-display text-2xl font-semibold text-white/80 hover:text-cyan-300 transition-colors py-2",children:d.label},d.label)),m.jsx("div",{className:"pt-6 border-t border-white/10 mt-4 flex flex-col gap-3",children:m.jsx("a",{href:"#contact",onClick:d=>u(d,"#contact"),className:"py-3 px-6 rounded-xl bg-cyan-400 text-black font-semibold text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)]",children:"Get In Touch"})})]})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="170",Jx=0,Xp=1,Qx=2,Ig=1,e_=2,zi=3,wr=0,Dn=1,Bi=2,Sr=0,Bs=1,td=2,Yp=3,qp=4,t_=5,qr=100,n_=101,i_=102,r_=103,s_=104,o_=200,a_=201,l_=202,c_=203,nd=204,id=205,u_=206,d_=207,f_=208,h_=209,p_=210,m_=211,g_=212,v_=213,x_=214,rd=0,sd=1,od=2,Gs=3,ad=4,ld=5,cd=6,ud=7,Ug=0,__=1,y_=2,Mr=0,S_=1,M_=2,w_=3,E_=4,T_=5,b_=6,A_=7,Fg=300,js=301,Ws=302,dd=303,fd=304,Ul=306,hd=1e3,Kr=1001,pd=1002,pi=1003,C_=1004,tl=1005,Mi=1006,Eu=1007,Zr=1008,ji=1009,kg=1010,Og=1011,Ho=1012,qd=1013,Jr=1014,Hi=1015,Vo=1016,$d=1017,Kd=1018,Xs=1020,zg=35902,Bg=1021,Hg=1022,hi=1023,Vg=1024,Gg=1025,Hs=1026,Ys=1027,jg=1028,Zd=1029,Wg=1030,Jd=1031,Qd=1033,Tl=33776,bl=33777,Al=33778,Cl=33779,md=35840,gd=35841,vd=35842,xd=35843,_d=36196,yd=37492,Sd=37496,Md=37808,wd=37809,Ed=37810,Td=37811,bd=37812,Ad=37813,Cd=37814,Rd=37815,Nd=37816,Pd=37817,Ld=37818,Dd=37819,Id=37820,Ud=37821,Rl=36492,Fd=36494,kd=36495,Xg=36283,Od=36284,zd=36285,Bd=36286,R_=3200,N_=3201,P_=0,L_=1,yr="",Kn="srgb",$s="srgb-linear",Fl="linear",Dt="srgb",Ts=7680,$p=519,D_=512,I_=513,U_=514,Yg=515,F_=516,k_=517,O_=518,z_=519,Kp=35044,Zp="300 es",Vi=2e3,Pl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=Math.PI/180,Hd=180/Math.PI;function Go(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]).toLowerCase()}function Ln(r,e,n){return Math.max(e,Math.min(n,r))}function B_(r,e){return(r%e+e)%e}function bu(r,e,n){return(1-n)*r+n*e}function Lo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*s-u*a+e.x,this.y=c*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,n,s,a,c,u,d,h,g){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,c,u,d,h,g)}set(e,n,s,a,c,u,d,h,g){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=c,_[5]=h,_[6]=s,_[7]=u,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,c=this.elements,u=s[0],d=s[3],h=s[6],g=s[1],_=s[4],y=s[7],x=s[2],M=s[5],E=s[8],b=a[0],S=a[3],v=a[6],L=a[1],P=a[4],C=a[7],Y=a[2],k=a[5],O=a[8];return c[0]=u*b+d*L+h*Y,c[3]=u*S+d*P+h*k,c[6]=u*v+d*C+h*O,c[1]=g*b+_*L+y*Y,c[4]=g*S+_*P+y*k,c[7]=g*v+_*C+y*O,c[2]=x*b+M*L+E*Y,c[5]=x*S+M*P+E*k,c[8]=x*v+M*C+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],u=e[4],d=e[5],h=e[6],g=e[7],_=e[8];return n*u*_-n*d*g-s*c*_+s*d*h+a*c*g-a*u*h}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],u=e[4],d=e[5],h=e[6],g=e[7],_=e[8],y=_*u-d*g,x=d*h-_*c,M=g*c-u*h,E=n*y+s*x+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=y*b,e[1]=(a*g-_*s)*b,e[2]=(d*s-a*u)*b,e[3]=x*b,e[4]=(_*n-a*h)*b,e[5]=(a*c-d*n)*b,e[6]=M*b,e[7]=(s*h-g*n)*b,e[8]=(u*n-s*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,c,u,d){const h=Math.cos(c),g=Math.sin(c);return this.set(s*h,s*g,-s*(h*u+g*d)+u+e,-a*g,a*h,-a*(-g*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new pt;function qg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ll(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function H_(){const r=Ll("canvas");return r.style.display="block",r}const Jp={};function ko(r){r in Jp||(Jp[r]=!0,console.warn(r))}function V_(r,e,n){return new Promise(function(s,a){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}function G_(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function j_(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(r,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Dt&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Dt&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Fl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,n){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Qp=[.64,.33,.3,.6,.15,.06],em=[.2126,.7152,.0722],tm=[.3127,.329],nm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[$s]:{primaries:Qp,whitePoint:tm,transfer:Fl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:em,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:Qp,whitePoint:tm,transfer:Dt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:em,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let bs;class W_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Ll("canvas")),bs.width=e.width,bs.height=e.height;const s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Gi(c[u]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Gi(n[s]/255)*255):n[s]=Gi(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X_=0;class $g{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Go(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?c.push(Cu(a[u].image)):c.push(Cu(a[u]))}else c=Cu(a);s.url=c}return n||(e.images[this.uuid]=s),s}}function Cu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?W_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y_=0;class Mn extends Ks{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,s=Kr,a=Kr,c=Mi,u=Zr,d=hi,h=ji,g=Mn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Go(),this.name="",this.source=new $g(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Fg;Mn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,s=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,c;const h=e.elements,g=h[0],_=h[4],y=h[8],x=h[1],M=h[5],E=h[9],b=h[2],S=h[6],v=h[10];if(Math.abs(_-x)<.01&&Math.abs(y-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+b)<.1&&Math.abs(E+S)<.1&&Math.abs(g+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(g+1)/2,C=(M+1)/2,Y=(v+1)/2,k=(_+x)/4,O=(y+b)/4,V=(E+S)/4;return P>C&&P>Y?P<.01?(s=0,a=.707106781,c=.707106781):(s=Math.sqrt(P),a=k/s,c=O/s):C>Y?C<.01?(s=.707106781,a=0,c=.707106781):(a=Math.sqrt(C),s=k/a,c=V/a):Y<.01?(s=.707106781,a=.707106781,c=0):(c=Math.sqrt(Y),s=O/c,a=V/c),this.set(s,a,c,n),this}let L=Math.sqrt((S-E)*(S-E)+(y-b)*(y-b)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(y-b)/L,this.z=(x-_)/L,this.w=Math.acos((g+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends Ks{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Mn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $g(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends q_{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class Kg extends Mn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends Mn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,c,u,d){let h=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];const x=c[u+0],M=c[u+1],E=c[u+2],b=c[u+3];if(d===0){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=E,e[n+3]=b;return}if(y!==b||h!==x||g!==M||_!==E){let S=1-d;const v=h*x+g*M+_*E+y*b,L=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const Y=Math.sqrt(P),k=Math.atan2(Y,v*L);S=Math.sin(S*k)/Y,d=Math.sin(d*k)/Y}const C=d*L;if(h=h*S+x*C,g=g*S+M*C,_=_*S+E*C,y=y*S+b*C,S===1-d){const Y=1/Math.sqrt(h*h+g*g+_*_+y*y);h*=Y,g*=Y,_*=Y,y*=Y}}e[n]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,s,a,c,u){const d=s[a],h=s[a+1],g=s[a+2],_=s[a+3],y=c[u],x=c[u+1],M=c[u+2],E=c[u+3];return e[n]=d*E+_*y+h*M-g*x,e[n+1]=h*E+_*x+g*y-d*M,e[n+2]=g*E+_*M+d*x-h*y,e[n+3]=_*E-d*y-h*x-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,c=e._z,u=e._order,d=Math.cos,h=Math.sin,g=d(s/2),_=d(a/2),y=d(c/2),x=h(s/2),M=h(a/2),E=h(c/2);switch(u){case"XYZ":this._x=x*_*y+g*M*E,this._y=g*M*y-x*_*E,this._z=g*_*E+x*M*y,this._w=g*_*y-x*M*E;break;case"YXZ":this._x=x*_*y+g*M*E,this._y=g*M*y-x*_*E,this._z=g*_*E-x*M*y,this._w=g*_*y+x*M*E;break;case"ZXY":this._x=x*_*y-g*M*E,this._y=g*M*y+x*_*E,this._z=g*_*E+x*M*y,this._w=g*_*y-x*M*E;break;case"ZYX":this._x=x*_*y-g*M*E,this._y=g*M*y+x*_*E,this._z=g*_*E-x*M*y,this._w=g*_*y+x*M*E;break;case"YZX":this._x=x*_*y+g*M*E,this._y=g*M*y+x*_*E,this._z=g*_*E-x*M*y,this._w=g*_*y-x*M*E;break;case"XZY":this._x=x*_*y-g*M*E,this._y=g*M*y-x*_*E,this._z=g*_*E+x*M*y,this._w=g*_*y+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],c=n[8],u=n[1],d=n[5],h=n[9],g=n[2],_=n[6],y=n[10],x=s+d+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-h)*M,this._y=(c-g)*M,this._z=(u-a)*M}else if(s>d&&s>y){const M=2*Math.sqrt(1+s-d-y);this._w=(_-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(c+g)/M}else if(d>y){const M=2*Math.sqrt(1+d-s-y);this._w=(c-g)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+y-s-d);this._w=(u-a)/M,this._x=(c+g)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,c=e._z,u=e._w,d=n._x,h=n._y,g=n._z,_=n._w;return this._x=s*_+u*d+a*g-c*h,this._y=a*_+u*h+c*d-s*g,this._z=c*_+u*g+s*h-a*d,this._w=u*_-s*d-a*h-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,a=this._y,c=this._z,u=this._w;let d=u*e._w+s*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=a,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*s+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(h),_=Math.atan2(g,d),y=Math.sin((1-n)*_)/g,x=Math.sin(n*_)/g;return this._w=u*y+this._w*x,this._x=s*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*a,this.y=c[1]*n+c[4]*s+c[7]*a,this.z=c[2]*n+c[5]*s+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*s+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,c=e.x,u=e.y,d=e.z,h=e.w,g=2*(u*a-d*s),_=2*(d*n-c*a),y=2*(c*s-u*n);return this.x=n+h*g+u*y-d*_,this.y=s+h*_+d*g-c*y,this.z=a+h*y+c*_-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*a,this.y=c[1]*n+c[5]*s+c[9]*a,this.z=c[2]*n+c[6]*s+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,c=e.z,u=n.x,d=n.y,h=n.z;return this.x=a*h-c*d,this.y=c*u-s*h,this.z=s*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new Q,rm=new jo;class Wo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(c,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),nl.copy(s.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),il.subVectors(this.max,Do),As.subVectors(e.a,Do),Cs.subVectors(e.b,Do),Rs.subVectors(e.c,Do),pr.subVectors(Cs,As),mr.subVectors(Rs,Cs),Br.subVectors(As,Rs);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Br.z,Br.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Br.z,0,-Br.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Br.y,Br.x,0];return!Nu(n,As,Cs,Rs,il)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,As,Cs,Rs,il))?!1:(rl.crossVectors(pr,mr),n=[rl.x,rl.y,rl.z],Nu(n,As,Cs,Rs,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ci=new Q,nl=new Wo,As=new Q,Cs=new Q,Rs=new Q,pr=new Q,mr=new Q,Br=new Q,Do=new Q,il=new Q,rl=new Q,Hr=new Q;function Nu(r,e,n,s,a){for(let c=0,u=r.length-3;c<=u;c+=3){Hr.fromArray(r,c);const d=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),g=n.dot(Hr),_=s.dot(Hr);if(Math.max(-Math.max(h,g,_),Math.min(h,g,_))>d)return!1}return!0}const K_=new Wo,Io=new Q,Pu=new Q;class kl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):K_.setFromPoints(e).getCenter(s);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(Io,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Pu)),this.expandByPoint(Io.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new Q,Lu=new Q,sl=new Q,gr=new Q,Du=new Q,ol=new Q,Iu=new Q;class Zg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){Lu.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Lu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(sl),d=gr.dot(this.direction),h=-gr.dot(sl),g=gr.lengthSq(),_=Math.abs(1-u*u);let y,x,M,E;if(_>0)if(y=u*h-d,x=u*d-h,E=c*_,y>=0)if(x>=-E)if(x<=E){const b=1/_;y*=b,x*=b,M=y*(y+u*x+2*d)+x*(u*y+x+2*h)+g}else x=c,y=Math.max(0,-(u*x+d)),M=-y*y+x*(x+2*h)+g;else x=-c,y=Math.max(0,-(u*x+d)),M=-y*y+x*(x+2*h)+g;else x<=-E?(y=Math.max(0,-(-u*c+d)),x=y>0?-c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+g):x<=E?(y=0,x=Math.min(Math.max(-c,-h),c),M=x*(x+2*h)+g):(y=Math.max(0,-(u*c+d)),x=y>0?c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+g);else x=u>0?-c:c,y=Math.max(0,-(u*x+d)),M=-y*y+x*(x+2*h)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Lu).addScaledVector(sl,x),M}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const s=Ui.dot(this.direction),a=Ui.dot(Ui)-s*s,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,c,u,d,h;const g=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return g>=0?(s=(e.min.x-x.x)*g,a=(e.max.x-x.x)*g):(s=(e.max.x-x.x)*g,a=(e.min.x-x.x)*g),_>=0?(c=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),s>u||c>a||((c>s||isNaN(s))&&(s=c),(u<a||isNaN(a))&&(a=u),y>=0?(d=(e.min.z-x.z)*y,h=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,h=(e.min.z-x.z)*y),s>h||d>a)||((d>s||s!==s)&&(s=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,s,a,c){Du.subVectors(n,e),ol.subVectors(s,e),Iu.crossVectors(Du,ol);let u=this.direction.dot(Iu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;gr.subVectors(this.origin,e);const h=d*this.direction.dot(ol.crossVectors(gr,ol));if(h<0)return null;const g=d*this.direction.dot(Du.cross(gr));if(g<0||h+g>u)return null;const _=-d*gr.dot(Iu);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,s,a,c,u,d,h,g,_,y,x,M,E,b,S){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,c,u,d,h,g,_,y,x,M,E,b,S)}set(e,n,s,a,c,u,d,h,g,_,y,x,M,E,b,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=a,v[1]=c,v[5]=u,v[9]=d,v[13]=h,v[2]=g,v[6]=_,v[10]=y,v[14]=x,v[3]=M,v[7]=E,v[11]=b,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,c=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(a),g=Math.sin(a),_=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=u*_,M=u*y,E=d*_,b=d*y;n[0]=h*_,n[4]=-h*y,n[8]=g,n[1]=M+E*g,n[5]=x-b*g,n[9]=-d*h,n[2]=b-x*g,n[6]=E+M*g,n[10]=u*h}else if(e.order==="YXZ"){const x=h*_,M=h*y,E=g*_,b=g*y;n[0]=x+b*d,n[4]=E*d-M,n[8]=u*g,n[1]=u*y,n[5]=u*_,n[9]=-d,n[2]=M*d-E,n[6]=b+x*d,n[10]=u*h}else if(e.order==="ZXY"){const x=h*_,M=h*y,E=g*_,b=g*y;n[0]=x-b*d,n[4]=-u*y,n[8]=E+M*d,n[1]=M+E*d,n[5]=u*_,n[9]=b-x*d,n[2]=-u*g,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const x=u*_,M=u*y,E=d*_,b=d*y;n[0]=h*_,n[4]=E*g-M,n[8]=x*g+b,n[1]=h*y,n[5]=b*g+x,n[9]=M*g-E,n[2]=-g,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*g,E=d*h,b=d*g;n[0]=h*_,n[4]=b-x*y,n[8]=E*y+M,n[1]=y,n[5]=u*_,n[9]=-d*_,n[2]=-g*_,n[6]=M*y+E,n[10]=x-b*y}else if(e.order==="XZY"){const x=u*h,M=u*g,E=d*h,b=d*g;n[0]=h*_,n[4]=-y,n[8]=g*_,n[1]=x*y+b,n[5]=u*_,n[9]=M*y-E,n[2]=E*y-M,n[6]=d*_,n[10]=b*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,J_)}lookAt(e,n,s){const a=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),vr.crossVectors(s,zn),vr.lengthSq()===0&&(Math.abs(s.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),vr.crossVectors(s,zn)),vr.normalize(),al.crossVectors(zn,vr),a[0]=vr.x,a[4]=al.x,a[8]=zn.x,a[1]=vr.y,a[5]=al.y,a[9]=zn.y,a[2]=vr.z,a[6]=al.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,c=this.elements,u=s[0],d=s[4],h=s[8],g=s[12],_=s[1],y=s[5],x=s[9],M=s[13],E=s[2],b=s[6],S=s[10],v=s[14],L=s[3],P=s[7],C=s[11],Y=s[15],k=a[0],O=a[4],V=a[8],D=a[12],R=a[1],B=a[5],ae=a[9],ne=a[13],he=a[2],ge=a[6],ue=a[10],fe=a[14],G=a[3],de=a[7],I=a[11],w=a[15];return c[0]=u*k+d*R+h*he+g*G,c[4]=u*O+d*B+h*ge+g*de,c[8]=u*V+d*ae+h*ue+g*I,c[12]=u*D+d*ne+h*fe+g*w,c[1]=_*k+y*R+x*he+M*G,c[5]=_*O+y*B+x*ge+M*de,c[9]=_*V+y*ae+x*ue+M*I,c[13]=_*D+y*ne+x*fe+M*w,c[2]=E*k+b*R+S*he+v*G,c[6]=E*O+b*B+S*ge+v*de,c[10]=E*V+b*ae+S*ue+v*I,c[14]=E*D+b*ne+S*fe+v*w,c[3]=L*k+P*R+C*he+Y*G,c[7]=L*O+P*B+C*ge+Y*de,c[11]=L*V+P*ae+C*ue+Y*I,c[15]=L*D+P*ne+C*fe+Y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],c=e[12],u=e[1],d=e[5],h=e[9],g=e[13],_=e[2],y=e[6],x=e[10],M=e[14],E=e[3],b=e[7],S=e[11],v=e[15];return E*(+c*h*y-a*g*y-c*d*x+s*g*x+a*d*M-s*h*M)+b*(+n*h*M-n*g*x+c*u*x-a*u*M+a*g*_-c*h*_)+S*(+n*g*y-n*d*M-c*u*y+s*u*M+c*d*_-s*g*_)+v*(-a*d*_-n*h*y+n*d*x+a*u*y-s*u*x+s*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],u=e[4],d=e[5],h=e[6],g=e[7],_=e[8],y=e[9],x=e[10],M=e[11],E=e[12],b=e[13],S=e[14],v=e[15],L=y*S*g-b*x*g+b*h*M-d*S*M-y*h*v+d*x*v,P=E*x*g-_*S*g-E*h*M+u*S*M+_*h*v-u*x*v,C=_*b*g-E*y*g+E*d*M-u*b*M-_*d*v+u*y*v,Y=E*y*h-_*b*h-E*d*x+u*b*x+_*d*S-u*y*S,k=n*L+s*P+a*C+c*Y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=L*O,e[1]=(b*x*c-y*S*c-b*a*M+s*S*M+y*a*v-s*x*v)*O,e[2]=(d*S*c-b*h*c+b*a*g-s*S*g-d*a*v+s*h*v)*O,e[3]=(y*h*c-d*x*c-y*a*g+s*x*g+d*a*M-s*h*M)*O,e[4]=P*O,e[5]=(_*S*c-E*x*c+E*a*M-n*S*M-_*a*v+n*x*v)*O,e[6]=(E*h*c-u*S*c-E*a*g+n*S*g+u*a*v-n*h*v)*O,e[7]=(u*x*c-_*h*c+_*a*g-n*x*g-u*a*M+n*h*M)*O,e[8]=C*O,e[9]=(E*y*c-_*b*c-E*s*M+n*b*M+_*s*v-n*y*v)*O,e[10]=(u*b*c-E*d*c+E*s*g-n*b*g-u*s*v+n*d*v)*O,e[11]=(_*d*c-u*y*c-_*s*g+n*y*g+u*s*M-n*d*M)*O,e[12]=Y*O,e[13]=(_*b*a-E*y*a+E*s*x-n*b*x-_*s*S+n*y*S)*O,e[14]=(E*d*a-u*b*a-E*s*h+n*b*h+u*s*S-n*d*S)*O,e[15]=(u*y*a-_*d*a+_*s*h-n*y*h-u*s*x+n*d*x)*O,this}scale(e){const n=this.elements,s=e.x,a=e.y,c=e.z;return n[0]*=s,n[4]*=a,n[8]*=c,n[1]*=s,n[5]*=a,n[9]*=c,n[2]*=s,n[6]*=a,n[10]*=c,n[3]*=s,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),c=1-s,u=e.x,d=e.y,h=e.z,g=c*u,_=c*d;return this.set(g*u+s,g*d-a*h,g*h+a*d,0,g*d+a*h,_*d+s,_*h-a*u,0,g*h-a*d,_*h+a*u,c*h*h+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,c,u){return this.set(1,s,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,c=n._x,u=n._y,d=n._z,h=n._w,g=c+c,_=u+u,y=d+d,x=c*g,M=c*_,E=c*y,b=u*_,S=u*y,v=d*y,L=h*g,P=h*_,C=h*y,Y=s.x,k=s.y,O=s.z;return a[0]=(1-(b+v))*Y,a[1]=(M+C)*Y,a[2]=(E-P)*Y,a[3]=0,a[4]=(M-C)*k,a[5]=(1-(x+v))*k,a[6]=(S+L)*k,a[7]=0,a[8]=(E+P)*O,a[9]=(S-L)*O,a[10]=(1-(x+b))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;let c=Ns.set(a[0],a[1],a[2]).length();const u=Ns.set(a[4],a[5],a[6]).length(),d=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const g=1/c,_=1/u,y=1/d;return ui.elements[0]*=g,ui.elements[1]*=g,ui.elements[2]*=g,ui.elements[4]*=_,ui.elements[5]*=_,ui.elements[6]*=_,ui.elements[8]*=y,ui.elements[9]*=y,ui.elements[10]*=y,n.setFromRotationMatrix(ui),s.x=c,s.y=u,s.z=d,this}makePerspective(e,n,s,a,c,u,d=Vi){const h=this.elements,g=2*c/(n-e),_=2*c/(s-a),y=(n+e)/(n-e),x=(s+a)/(s-a);let M,E;if(d===Vi)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(d===Pl)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,s,a,c,u,d=Vi){const h=this.elements,g=1/(n-e),_=1/(s-a),y=1/(u-c),x=(n+e)*g,M=(s+a)*_;let E,b;if(d===Vi)E=(u+c)*y,b=-2*y;else if(d===Pl)E=c*y,b=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=b,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const Ns=new Q,ui=new Xt,Z_=new Q(0,0,0),J_=new Q(1,1,1),vr=new Q,al=new Q,zn=new Q,sm=new Xt,om=new jo;class Wi{constructor(e=0,n=0,s=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,c=a[0],u=a[4],d=a[8],h=a[1],g=a[5],_=a[9],y=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Ln(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Jg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q_=0;const am=new Q,Ps=new jo,Fi=new Xt,ll=new Q,Uo=new Q,ey=new Q,ty=new jo,lm=new Q(1,0,0),cm=new Q(0,1,0),um=new Q(0,0,1),dm={type:"added"},ny={type:"removed"},Ls={type:"childadded",child:null},Uu={type:"childremoved",child:null};class In extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Q,n=new Wi,s=new jo,a=new Q(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new pt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?ll.copy(e):ll.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Uo,ll,this.up):Fi.lookAt(ll,Uo,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ny),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let g=0,_=h.length;g<_;g++){const y=h[g];c(e.shapes,y)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,g=this.material.length;h<g;h++)d.push(c(e.materials,this.material[h]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(c(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),g=u(e.textures),_=u(e.images),y=u(e.shapes),x=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),g.length>0&&(s.textures=g),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=a,s;function u(d){const h=[];for(const g in d){const _=d[g];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}In.DEFAULT_UP=new Q(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new Q,ki=new Q,Fu=new Q,Oi=new Q,Ds=new Q,Is=new Q,fm=new Q,ku=new Q,Ou=new Q,zu=new Q,Bu=new Wt,Hu=new Wt,Vu=new Wt;class fi{constructor(e=new Q,n=new Q,s=new Q){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),di.subVectors(e,n),a.cross(di);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,s,a,c){di.subVectors(a,n),ki.subVectors(s,n),Fu.subVectors(e,n);const u=di.dot(di),d=di.dot(ki),h=di.dot(Fu),g=ki.dot(ki),_=ki.dot(Fu),y=u*g-d*d;if(y===0)return c.set(0,0,0),null;const x=1/y,M=(g*h-d*_)*x,E=(u*_-d*h)*x;return c.set(1-M-E,E,M)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,s,a,c,u,d,h){return this.getBarycoord(e,n,s,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Oi.x),h.addScaledVector(u,Oi.y),h.addScaledVector(d,Oi.z),h)}static getInterpolatedAttribute(e,n,s,a,c,u){return Bu.setScalar(0),Hu.setScalar(0),Vu.setScalar(0),Bu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,s),Vu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Bu,c.x),u.addScaledVector(Hu,c.y),u.addScaledVector(Vu,c.z),u}static isFrontFacing(e,n,s,a){return di.subVectors(s,n),ki.subVectors(e,n),di.cross(ki).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),di.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,c){return fi.getInterpolation(e,this.a,this.b,this.c,n,s,a,c)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,c=this.c;let u,d;Ds.subVectors(a,s),Is.subVectors(c,s),ku.subVectors(e,s);const h=Ds.dot(ku),g=Is.dot(ku);if(h<=0&&g<=0)return n.copy(s);Ou.subVectors(e,a);const _=Ds.dot(Ou),y=Is.dot(Ou);if(_>=0&&y<=_)return n.copy(a);const x=h*y-_*g;if(x<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(s).addScaledVector(Ds,u);zu.subVectors(e,c);const M=Ds.dot(zu),E=Is.dot(zu);if(E>=0&&M<=E)return n.copy(c);const b=M*g-h*E;if(b<=0&&g>=0&&E<=0)return d=g/(g-E),n.copy(s).addScaledVector(Is,d);const S=_*E-M*y;if(S<=0&&y-_>=0&&M-E>=0)return fm.subVectors(c,a),d=(y-_)/(y-_+(M-E)),n.copy(a).addScaledVector(fm,d);const v=1/(S+b+x);return u=b*v,d=x*v,n.copy(s).addScaledVector(Ds,u).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Gu(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class At{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,s,a=wt.workingColorSpace){return this.r=e,this.g=n,this.b=s,wt.toWorkingColorSpace(this,a),this}setHSL(e,n,s,a=wt.workingColorSpace){if(e=B_(e,1),n=Ln(n,0,1),s=Ln(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Gu(u,c,e+1/3),this.g=Gu(u,c,e),this.b=Gu(u,c,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const s=Qg[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return wt.fromWorkingColorSpace(mn.copy(this),e),Math.round(Ln(mn.r*255,0,255))*65536+Math.round(Ln(mn.g*255,0,255))*256+Math.round(Ln(mn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(mn.copy(this),n);const s=mn.r,a=mn.g,c=mn.b,u=Math.max(s,a,c),d=Math.min(s,a,c);let h,g;const _=(d+u)/2;if(d===u)h=0,g=0;else{const y=u-d;switch(g=_<=.5?y/(u+d):y/(2-u-d),u){case s:h=(a-c)/y+(a<c?6:0);break;case a:h=(c-s)/y+2;break;case c:h=(s-a)/y+4;break}h/=6}return e.h=h,e.s=g,e.l=_,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Kn){wt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,s=mn.g,a=mn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(cl);const s=bu(xr.h,cl.h,n),a=bu(xr.s,cl.s,n),c=bu(xr.l,cl.l,n);return this.setHSL(s,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*a,this.g=c[1]*n+c[4]*s+c[7]*a,this.b=c[2]*n+c[5]*s+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new At;At.NAMES=Qg;let iy=0;class Xo extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Go(),this.name="",this.blending=Bs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(s.blending=this.blending),this.side!==wr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==nd&&(s.blendSrc=this.blendSrc),this.blendDst!==id&&(s.blendDst=this.blendDst),this.blendEquation!==qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(c){const u=[];for(const d in c){const h=c[d];delete h.metadata,u.push(h)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let c=0;c!==a;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bo extends Xo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Q,ul=new Pt;class Qn{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=Kp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Lo(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Pn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),s=Pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),s=Pn(s,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),s=Pn(s,this.array),a=Pn(a,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class e0 extends Qn{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class t0 extends Qn{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class gn extends Qn{constructor(e,n,s){super(new Float32Array(e),n,s)}}let ry=0;const $n=new Xt,ju=new In,Us=new Q,Bn=new Wo,Fo=new Wo,sn=new Q;class ei extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?t0:e0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,s){return $n.makeTranslation(e,n,s),this.applyMatrix4($n),this}scale(e,n,s){return $n.makeScale(e,n,s),this.applyMatrix4($n),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(s,3))}else{for(let s=0,a=n.count;s<a;s++){const c=e[s];n.setXYZ(s,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const c=n[s];Bn.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(Bn.min,Fo.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,Fo.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(Fo.min),Bn.expandByPoint(Fo.max))}Bn.getCenter(s);let a=0;for(let c=0,u=e.count;c<u;c++)sn.fromBufferAttribute(e,c),a=Math.max(a,s.distanceToSquared(sn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],h=this.morphTargetsRelative;for(let g=0,_=d.count;g<_;g++)sn.fromBufferAttribute(d,g),h&&(Us.fromBufferAttribute(e,g),sn.add(Us)),a=Math.max(a,s.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let V=0;V<s.count;V++)d[V]=new Q,h[V]=new Q;const g=new Q,_=new Q,y=new Q,x=new Pt,M=new Pt,E=new Pt,b=new Q,S=new Q;function v(V,D,R){g.fromBufferAttribute(s,V),_.fromBufferAttribute(s,D),y.fromBufferAttribute(s,R),x.fromBufferAttribute(c,V),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),_.sub(g),y.sub(g),M.sub(x),E.sub(x);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(B),S.copy(y).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(B),d[V].add(b),d[D].add(b),d[R].add(b),h[V].add(S),h[D].add(S),h[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,D=L.length;V<D;++V){const R=L[V],B=R.start,ae=R.count;for(let ne=B,he=B+ae;ne<he;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const P=new Q,C=new Q,Y=new Q,k=new Q;function O(V){Y.fromBufferAttribute(a,V),k.copy(Y);const D=d[V];P.copy(D),P.sub(Y.multiplyScalar(Y.dot(D))).normalize(),C.crossVectors(k,D);const B=C.dot(h[V])<0?-1:1;u.setXYZW(V,P.x,P.y,P.z,B)}for(let V=0,D=L.length;V<D;++V){const R=L[V],B=R.start,ae=R.count;for(let ne=B,he=B+ae;ne<he;ne+=3)O(e.getX(ne+0)),O(e.getX(ne+1)),O(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const a=new Q,c=new Q,u=new Q,d=new Q,h=new Q,g=new Q,_=new Q,y=new Q;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),b=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),_.subVectors(u,c),y.subVectors(a,c),_.cross(y),d.fromBufferAttribute(s,E),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),d.add(_),h.add(_),g.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(S,g.x,g.y,g.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,c),y.subVectors(a,c),_.cross(y),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,h){const g=d.array,_=d.itemSize,y=d.normalized,x=new g.constructor(h.length*_);let M=0,E=0;for(let b=0,S=h.length;b<S;b++){d.isInterleavedBufferAttribute?M=h[b]*d.data.stride+d.offset:M=h[b]*_;for(let v=0;v<_;v++)x[E++]=g[M++]}return new Qn(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,s=this.index.array,a=this.attributes;for(const d in a){const h=a[d],g=e(h,s);n.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const h=[],g=c[d];for(let _=0,y=g.length;_<y;_++){const x=g[_],M=e(x,s);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const g=u[d];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const h in s){const g=s[h];e.data.attributes[h]=g.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],_=[];for(let y=0,x=g.length;y<x;y++){const M=g[y];_.push(M.toJSON(e.data))}_.length>0&&(a[h]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const a=e.attributes;for(const g in a){const _=a[g];this.setAttribute(g,_.clone(n))}const c=e.morphAttributes;for(const g in c){const _=[],y=c[g];for(let x=0,M=y.length;x<M;x++)_.push(y[x].clone(n));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,_=u.length;g<_;g++){const y=u[g];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Xt,Vr=new Zg,dl=new kl,pm=new Q,fl=new Q,hl=new Q,pl=new Q,Wu=new Q,ml=new Q,mm=new Q,gl=new Q;class Jn extends In{constructor(e=new ei,n=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){ml.set(0,0,0);for(let h=0,g=c.length;h<g;h++){const _=d[h],y=c[h];_!==0&&(Wu.fromBufferAttribute(y,e),u?ml.addScaledVector(Wu,_):ml.addScaledVector(Wu.sub(n),_))}n.add(ml)}return n}raycast(e,n){const s=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dl.copy(s.boundingSphere),dl.applyMatrix4(c),Vr.copy(e.ray).recast(e.near),!(dl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(dl,pm)===null||Vr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(c).invert(),Vr.copy(e.ray).applyMatrix4(hm),!(s.boundingBox!==null&&Vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,s){let a;const c=this.geometry,u=this.material,d=c.index,h=c.attributes.position,g=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=u[S.materialIndex],L=Math.max(S.start,M.start),P=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=L,Y=P;C<Y;C+=3){const k=d.getX(C),O=d.getX(C+1),V=d.getX(C+2);a=vl(this,v,e,s,g,_,y,k,O,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const L=d.getX(S),P=d.getX(S+1),C=d.getX(S+2);a=vl(this,u,e,s,g,_,y,L,P,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=u[S.materialIndex],L=Math.max(S.start,M.start),P=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let C=L,Y=P;C<Y;C+=3){const k=C,O=C+1,V=C+2;a=vl(this,v,e,s,g,_,y,k,O,V),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const L=S,P=S+1,C=S+2;a=vl(this,u,e,s,g,_,y,L,P,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function sy(r,e,n,s,a,c,u,d){let h;if(e.side===Dn?h=s.intersectTriangle(u,c,a,!0,d):h=s.intersectTriangle(a,c,u,e.side===wr,d),h===null)return null;gl.copy(d),gl.applyMatrix4(r.matrixWorld);const g=n.ray.origin.distanceTo(gl);return g<n.near||g>n.far?null:{distance:g,point:gl.clone(),object:r}}function vl(r,e,n,s,a,c,u,d,h,g){r.getVertexPosition(d,fl),r.getVertexPosition(h,hl),r.getVertexPosition(g,pl);const _=sy(r,e,n,s,fl,hl,pl,mm);if(_){const y=new Q;fi.getBarycoord(mm,fl,hl,pl,y),a&&(_.uv=fi.getInterpolatedAttribute(a,d,h,g,y,new Pt)),c&&(_.uv1=fi.getInterpolatedAttribute(c,d,h,g,y,new Pt)),u&&(_.normal=fi.getInterpolatedAttribute(u,d,h,g,y,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:g,normal:new Q,materialIndex:0};fi.getNormal(fl,hl,pl,x.normal),_.face=x,_.barycoord=y}return _}class Yo extends ei{constructor(e=1,n=1,s=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:c,depthSegments:u};const d=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const h=[],g=[],_=[],y=[];let x=0,M=0;E("z","y","x",-1,-1,s,n,e,u,c,0),E("z","y","x",1,-1,s,n,-e,u,c,1),E("x","z","y",1,1,e,s,n,a,u,2),E("x","z","y",1,-1,e,s,-n,a,u,3),E("x","y","z",1,-1,e,n,s,a,c,4),E("x","y","z",-1,-1,e,n,-s,a,c,5),this.setIndex(h),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(y,2));function E(b,S,v,L,P,C,Y,k,O,V,D){const R=C/O,B=Y/V,ae=C/2,ne=Y/2,he=k/2,ge=O+1,ue=V+1;let fe=0,G=0;const de=new Q;for(let I=0;I<ue;I++){const w=I*B-ne;for(let j=0;j<ge;j++){const ve=j*R-ae;de[b]=ve*L,de[S]=w*P,de[v]=he,g.push(de.x,de.y,de.z),de[b]=0,de[S]=0,de[v]=k>0?1:-1,_.push(de.x,de.y,de.z),y.push(j/O),y.push(1-I/V),fe+=1}}for(let I=0;I<V;I++)for(let w=0;w<O;w++){const j=x+w+ge*I,ve=x+w+ge*(I+1),X=x+(w+1)+ge*(I+1),Z=x+(w+1)+ge*I;h.push(j,ve,Z),h.push(ve,X,Z),G+=6}d.addGroup(M,G,D),M+=G,x+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone():Array.isArray(a)?e[n][s]=a.slice():e[n][s]=a}}return e}function Sn(r){const e={};for(let n=0;n<r.length;n++){const s=qs(r[n]);for(const a in s)e[a]=s[a]}return e}function oy(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function n0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const ay={clone:qs,merge:Sn};var ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Xo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class i0 extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new Q,gm=new Pt,vm=new Pt;class Zn extends i0{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,gm,vm),n.subVectors(vm,gm)}setViewOffset(e,n,s,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tu*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,g=u.fullHeight;c+=u.offsetX*a/h,n-=u.offsetY*s/g,a*=u.width/h,s*=u.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,ks=1;class uy extends In{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Fs,ks,e,n);a.layers=this.layers,this.add(a);const c=new Zn(Fs,ks,e,n);c.layers=this.layers,this.add(c);const u=new Zn(Fs,ks,e,n);u.layers=this.layers,this.add(u);const d=new Zn(Fs,ks,e,n);d.layers=this.layers,this.add(d);const h=new Zn(Fs,ks,e,n);h.layers=this.layers,this.add(h);const g=new Zn(Fs,ks,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,c,u,d,h]=n;for(const g of n)this.remove(g);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Pl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,h,g,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(n,c),e.setRenderTarget(s,1,a),e.render(n,u),e.setRenderTarget(s,2,a),e.render(n,d),e.setRenderTarget(s,3,a),e.render(n,h),e.setRenderTarget(s,4,a),e.render(n,g),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,a),e.render(n,_),e.setRenderTarget(y,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class r0 extends Mn{constructor(e,n,s,a,c,u,d,h,g,_){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,s,a,c,u,d,h,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dy extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new r0(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Yo(5,5,5),c=new Er({name:"CubemapFromEquirect",uniforms:qs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:Sr});c.uniforms.tEquirect.value=n;const u=new Jn(a,c),d=n.minFilter;return n.minFilter===Zr&&(n.minFilter=Mi),new uy(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,s,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,a);e.setRenderTarget(c)}}const Xu=new Q,fy=new Q,hy=new pt;class Xr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=Xu.subVectors(s,n).cross(fy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(Xu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||hy.getNormalMatrix(e),a=this.coplanarPoint(Xu).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new kl,xl=new Q;class s0{constructor(e=new Xr,n=new Xr,s=new Xr,a=new Xr,c=new Xr,u=new Xr){this.planes=[e,n,s,a,c,u]}set(e,n,s,a,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(s),d[3].copy(a),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=Vi){const s=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],g=a[4],_=a[5],y=a[6],x=a[7],M=a[8],E=a[9],b=a[10],S=a[11],v=a[12],L=a[13],P=a[14],C=a[15];if(s[0].setComponents(h-c,x-g,S-M,C-v).normalize(),s[1].setComponents(h+c,x+g,S+M,C+v).normalize(),s[2].setComponents(h+u,x+_,S+E,C+L).normalize(),s[3].setComponents(h-u,x-_,S-E,C-L).normalize(),s[4].setComponents(h-d,x-y,S-b,C-P).normalize(),n===Vi)s[5].setComponents(h+d,x+y,S+b,C+P).normalize();else if(n===Pl)s[5].setComponents(d,y,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(xl.x=a.normal.x>0?e.max.x:e.min.x,xl.y=a.normal.y>0?e.max.y:e.min.y,xl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o0(){let r=null,e=!1,n=null,s=null;function a(c,u){n(c,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function py(r){const e=new WeakMap;function n(d,h){const g=d.array,_=d.usage,y=g.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,g,_),d.onUploadCallback();let M;if(g instanceof Float32Array)M=r.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=r.SHORT;else if(g instanceof Uint32Array)M=r.UNSIGNED_INT;else if(g instanceof Int32Array)M=r.INT;else if(g instanceof Int8Array)M=r.BYTE;else if(g instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:y}}function s(d,h,g){const _=h.array,y=h.updateRanges;if(r.bindBuffer(g,d),y.length===0)r.bufferSubData(g,0,_);else{y.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<y.length;M++){const E=y[x],b=y[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,y[x]=b)}y.length=x+1;for(let M=0,E=y.length;M<E;M++){const b=y[M];r.bufferSubData(g,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,n(d,h));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,h),g.version=d.version}}return{get:a,remove:c,update:u}}class Ol extends ei{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const c=e/2,u=n/2,d=Math.floor(s),h=Math.floor(a),g=d+1,_=h+1,y=e/d,x=n/h,M=[],E=[],b=[],S=[];for(let v=0;v<_;v++){const L=v*x-u;for(let P=0;P<g;P++){const C=P*y-c;E.push(C,-L,0),b.push(0,0,1),S.push(P/d),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<d;L++){const P=L+g*v,C=L+g*(v+1),Y=L+1+g*(v+1),k=L+1+g*v;M.push(P,C,k),M.push(C,Y,k)}this.setIndex(M),this.setAttribute("position",new gn(E,3)),this.setAttribute("normal",new gn(b,3)),this.setAttribute("uv",new gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
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
#endif`,vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sy=`#ifdef USE_AOMAP
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
#endif`,My=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nS=`#ifdef USE_GRADIENTMAP
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
}`,iS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,aS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,lS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,hS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ES=`#if defined( USE_POINTS_UV )
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
#endif`,TS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kS=`#ifdef USE_NORMALMAP
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
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,QS=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,eM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,nM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iM=`#ifdef USE_SKINNING
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
#endif`,rM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cM=`#ifdef USE_TRANSMISSION
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mM=`uniform sampler2D t2D;
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`#include <common>
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
}`,SM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MM=`#define DISTANCE
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
}`,wM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`uniform float scale;
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
}`,AM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,RM=`uniform vec3 diffuse;
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
}`,NM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,LM=`#define MATCAP
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
}`,DM=`#define MATCAP
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
}`,IM=`#define NORMAL
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
}`,UM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FM=`#define PHONG
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
}`,kM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,OM=`#define STANDARD
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
}`,zM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,BM=`#define TOON
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
}`,HM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,VM=`uniform float size;
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
}`,GM=`uniform vec3 diffuse;
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
}`,jM=`#include <common>
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
}`,WM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,XM=`uniform float rotation;
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
}`,YM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:vy,alphamap_pars_fragment:xy,alphatest_fragment:_y,alphatest_pars_fragment:yy,aomap_fragment:Sy,aomap_pars_fragment:My,batching_pars_vertex:wy,batching_vertex:Ey,begin_vertex:Ty,beginnormal_vertex:by,bsdfs:Ay,iridescence_fragment:Cy,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Ny,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Dy,color_fragment:Iy,color_pars_fragment:Uy,color_pars_vertex:Fy,color_vertex:ky,common:Oy,cube_uv_reflection_fragment:zy,defaultnormal_vertex:By,displacementmap_pars_vertex:Hy,displacementmap_vertex:Vy,emissivemap_fragment:Gy,emissivemap_pars_fragment:jy,colorspace_fragment:Wy,colorspace_pars_fragment:Xy,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:$y,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:aS,envmap_vertex:Zy,fog_vertex:Jy,fog_pars_vertex:Qy,fog_fragment:eS,fog_pars_fragment:tS,gradientmap_pars_fragment:nS,lightmap_pars_fragment:iS,lights_lambert_fragment:rS,lights_lambert_pars_fragment:sS,lights_pars_begin:oS,lights_toon_fragment:lS,lights_toon_pars_fragment:cS,lights_phong_fragment:uS,lights_phong_pars_fragment:dS,lights_physical_fragment:fS,lights_physical_pars_fragment:hS,lights_fragment_begin:pS,lights_fragment_maps:mS,lights_fragment_end:gS,logdepthbuf_fragment:vS,logdepthbuf_pars_fragment:xS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:yS,map_fragment:SS,map_pars_fragment:MS,map_particle_fragment:wS,map_particle_pars_fragment:ES,metalnessmap_fragment:TS,metalnessmap_pars_fragment:bS,morphinstance_vertex:AS,morphcolor_vertex:CS,morphnormal_vertex:RS,morphtarget_pars_vertex:NS,morphtarget_vertex:PS,normal_fragment_begin:LS,normal_fragment_maps:DS,normal_pars_fragment:IS,normal_pars_vertex:US,normal_vertex:FS,normalmap_pars_fragment:kS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:zS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:HS,opaque_fragment:VS,packing:GS,premultiplied_alpha_fragment:jS,project_vertex:WS,dithering_fragment:XS,dithering_pars_fragment:YS,roughnessmap_fragment:qS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:KS,shadowmap_pars_vertex:ZS,shadowmap_vertex:JS,shadowmask_pars_fragment:QS,skinbase_vertex:eM,skinning_pars_vertex:tM,skinning_vertex:nM,skinnormal_vertex:iM,specularmap_fragment:rM,specularmap_pars_fragment:sM,tonemapping_fragment:oM,tonemapping_pars_fragment:aM,transmission_fragment:lM,transmission_pars_fragment:cM,uv_pars_fragment:uM,uv_pars_vertex:dM,uv_vertex:fM,worldpos_vertex:hM,background_vert:pM,background_frag:mM,backgroundCube_vert:gM,backgroundCube_frag:vM,cube_vert:xM,cube_frag:_M,depth_vert:yM,depth_frag:SM,distanceRGBA_vert:MM,distanceRGBA_frag:wM,equirect_vert:EM,equirect_frag:TM,linedashed_vert:bM,linedashed_frag:AM,meshbasic_vert:CM,meshbasic_frag:RM,meshlambert_vert:NM,meshlambert_frag:PM,meshmatcap_vert:LM,meshmatcap_frag:DM,meshnormal_vert:IM,meshnormal_frag:UM,meshphong_vert:FM,meshphong_frag:kM,meshphysical_vert:OM,meshphysical_frag:zM,meshtoon_vert:BM,meshtoon_frag:HM,points_vert:VM,points_frag:GM,shadow_vert:jM,shadow_frag:WM,sprite_vert:XM,sprite_frag:YM},Pe={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Si={basic:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Sn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Sn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Sn([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Sn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Sn([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Sn([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Sn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Sn([Pe.lights,Pe.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Si.physical={uniforms:Sn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const _l={r:0,b:0,g:0},jr=new Wi,qM=new Xt;function $M(r,e,n,s,a,c,u){const d=new At(0);let h=c===!0?0:1,g,_,y=null,x=0,M=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function b(L){let P=!1;const C=E(L);C===null?v(d,h):C&&C.isColor&&(v(C,1),P=!0);const Y=r.xr.getEnvironmentBlendMode();Y==="additive"?s.buffers.color.setClear(0,0,0,1,u):Y==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,P){const C=E(P);C&&(C.isCubeTexture||C.mapping===Ul)?(_===void 0&&(_=new Jn(new Yo(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:qs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),jr.copy(P.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(jr)),_.material.toneMapped=wt.getTransfer(C.colorSpace)!==Dt,(y!==C||x!==C.version||M!==r.toneMapping)&&(_.material.needsUpdate=!0,y=C,x=C.version,M=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(g===void 0&&(g=new Jn(new Ol(2,2),new Er({name:"BackgroundMaterial",uniforms:qs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=C,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.toneMapped=wt.getTransfer(C.colorSpace)!==Dt,C.matrixAutoUpdate===!0&&C.updateMatrix(),g.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||x!==C.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,y=C,x=C.version,M=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null))}function v(L,P){L.getRGB(_l,n0(r)),s.buffers.color.setClear(_l.r,_l.g,_l.b,P,u)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),h=P,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(d,h)},render:b,addToRenderList:S}}function KM(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let c=a,u=!1;function d(R,B,ae,ne,he){let ge=!1;const ue=y(ne,ae,B);c!==ue&&(c=ue,g(c.object)),ge=M(R,ne,ae,he),ge&&E(R,ne,ae,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,C(R,B,ae,ne),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function h(){return r.createVertexArray()}function g(R){return r.bindVertexArray(R)}function _(R){return r.deleteVertexArray(R)}function y(R,B,ae){const ne=ae.wireframe===!0;let he=s[R.id];he===void 0&&(he={},s[R.id]=he);let ge=he[B.id];ge===void 0&&(ge={},he[B.id]=ge);let ue=ge[ne];return ue===void 0&&(ue=x(h()),ge[ne]=ue),ue}function x(R){const B=[],ae=[],ne=[];for(let he=0;he<n;he++)B[he]=0,ae[he]=0,ne[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:ne,object:R,attributes:{},index:null}}function M(R,B,ae,ne){const he=c.attributes,ge=B.attributes;let ue=0;const fe=ae.getAttributes();for(const G in fe)if(fe[G].location>=0){const I=he[G];let w=ge[G];if(w===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(w=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(w=R.instanceColor)),I===void 0||I.attribute!==w||w&&I.data!==w.data)return!0;ue++}return c.attributesNum!==ue||c.index!==ne}function E(R,B,ae,ne){const he={},ge=B.attributes;let ue=0;const fe=ae.getAttributes();for(const G in fe)if(fe[G].location>=0){let I=ge[G];I===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(I=R.instanceColor));const w={};w.attribute=I,I&&I.data&&(w.data=I.data),he[G]=w,ue++}c.attributes=he,c.attributesNum=ue,c.index=ne}function b(){const R=c.newAttributes;for(let B=0,ae=R.length;B<ae;B++)R[B]=0}function S(R){v(R,0)}function v(R,B){const ae=c.newAttributes,ne=c.enabledAttributes,he=c.attributeDivisors;ae[R]=1,ne[R]===0&&(r.enableVertexAttribArray(R),ne[R]=1),he[R]!==B&&(r.vertexAttribDivisor(R,B),he[R]=B)}function L(){const R=c.newAttributes,B=c.enabledAttributes;for(let ae=0,ne=B.length;ae<ne;ae++)B[ae]!==R[ae]&&(r.disableVertexAttribArray(ae),B[ae]=0)}function P(R,B,ae,ne,he,ge,ue){ue===!0?r.vertexAttribIPointer(R,B,ae,he,ge):r.vertexAttribPointer(R,B,ae,ne,he,ge)}function C(R,B,ae,ne){b();const he=ne.attributes,ge=ae.getAttributes(),ue=B.defaultAttributeValues;for(const fe in ge){const G=ge[fe];if(G.location>=0){let de=he[fe];if(de===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const I=de.normalized,w=de.itemSize,j=e.get(de);if(j===void 0)continue;const ve=j.buffer,X=j.type,Z=j.bytesPerElement,le=X===r.INT||X===r.UNSIGNED_INT||de.gpuType===qd;if(de.isInterleavedBufferAttribute){const ie=de.data,pe=ie.stride,Te=de.offset;if(ie.isInstancedInterleavedBuffer){for(let Le=0;Le<G.locationSize;Le++)v(G.location+Le,ie.meshPerAttribute);R.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<G.locationSize;Le++)S(G.location+Le);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Le=0;Le<G.locationSize;Le++)P(G.location+Le,w/G.locationSize,X,I,pe*Z,(Te+w/G.locationSize*Le)*Z,le)}else{if(de.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)v(G.location+ie,de.meshPerAttribute);R.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ie=0;ie<G.locationSize;ie++)S(G.location+ie);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let ie=0;ie<G.locationSize;ie++)P(G.location+ie,w/G.locationSize,X,I,w*Z,w/G.locationSize*ie*Z,le)}}else if(ue!==void 0){const I=ue[fe];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(G.location,I);break;case 3:r.vertexAttrib3fv(G.location,I);break;case 4:r.vertexAttrib4fv(G.location,I);break;default:r.vertexAttrib1fv(G.location,I)}}}}L()}function Y(){V();for(const R in s){const B=s[R];for(const ae in B){const ne=B[ae];for(const he in ne)_(ne[he].object),delete ne[he];delete B[ae]}delete s[R]}}function k(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const ae in B){const ne=B[ae];for(const he in ne)_(ne[he].object),delete ne[he];delete B[ae]}delete s[R.id]}function O(R){for(const B in s){const ae=s[B];if(ae[R.id]===void 0)continue;const ne=ae[R.id];for(const he in ne)_(ne[he].object),delete ne[he];delete ae[R.id]}}function V(){D(),u=!0,c!==a&&(c=a,g(c.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:Y,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:L}}function ZM(r,e,n){let s;function a(g){s=g}function c(g,_){r.drawArrays(s,g,_),n.update(_,s,1)}function u(g,_,y){y!==0&&(r.drawArraysInstanced(s,g,_,y),n.update(_,s,y))}function d(g,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,_,0,y);let M=0;for(let E=0;E<y;E++)M+=_[E];n.update(M,s,1)}function h(g,_,y,x){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<g.length;E++)u(g[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,_,0,x,0,y);let E=0;for(let b=0;b<y;b++)E+=_[b]*x[b];n.update(E,s,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function JM(r,e,n,s){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==hi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const V=O===Vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ji&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!V)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const _=h(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),Y=E>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:Y,maxSamples:k}}function QM(r){const e=this;let n=null,s=0,a=!1,c=!1;const u=new Xr,d=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||s!==0||a;return a=x,s=y.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,M){const E=y.clippingPlanes,b=y.clipIntersection,S=y.clipShadows,v=r.get(y);if(!a||E===null||E.length===0||c&&!S)c?_(null):g();else{const L=c?0:s,P=L*4;let C=v.clippingState||null;h.value=C,C=_(E,x,P,M);for(let Y=0;Y!==P;++Y)C[Y]=n[Y];v.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(y,x,M,E){const b=y!==null?y.length:0;let S=null;if(b!==0){if(S=h.value,E!==!0||S===null){const v=M+b*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let P=0,C=M;P!==b;++P,C+=4)u.copy(y[P]).applyMatrix4(L,d),u.normal.toArray(S,C),S[C+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function ew(r){let e=new WeakMap;function n(u,d){return d===dd?u.mapping=js:d===fd&&(u.mapping=Ws),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===dd||d===fd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const g=new dy(h.height);return g.fromEquirectangularTexture(r,u),e.set(u,g),u.addEventListener("dispose",a),n(g.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class tw extends i0{constructor(e=-1,n=1,s=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=s-e,u=s+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,xm=[.125,.215,.35,.446,.526,.582],$r=20,Yu=new tw,_m=new At;let qu=null,$u=0,Ku=0,Zu=!1;const Yr=(1+Math.sqrt(5))/2,Os=1/Yr,ym=[new Q(-Yr,Os,0),new Q(Yr,Os,0),new Q(-Os,0,Yr),new Q(Os,0,Yr),new Q(0,Yr,-Os),new Q(0,Yr,Os),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,a=100){qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,$u,Ku),this._renderer.xr.enabled=Zu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Vo,format:hi,colorSpace:$s,depthBuffer:!1},a=Mm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nw(c)),this._blurMaterial=iw(c,e,n)}return a}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,Yu)}_sceneToCubeUV(e,n,s,a){const d=new Zn(90,1,n,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(_m),_.toneMapping=Mr,_.autoClear=!1;const M=new Bo({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),E=new Jn(new Yo,M);let b=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,b=!0):(M.color.copy(_m),b=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(d.up.set(0,h[v],0),d.lookAt(g[v],0,0)):L===1?(d.up.set(0,0,h[v]),d.lookAt(0,g[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,g[v]));const P=this._cubeSize;yl(a,L*P,v>2?P:0,P,P),_.setRenderTarget(a),b&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=S}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===js||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const h=this._cubeSize;yl(n,0,0,3*h,2*h),s.setRenderTarget(n),s.render(u,Yu)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=ym[(a-c-1)%ym.length];this._blur(e,c-1,c,u,d)}n.autoClear=s}_blur(e,n,s,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,a,"latitudinal",c),this._halfBlur(u,e,s,s,a,"longitudinal",c)}_halfBlur(e,n,s,a,c,u,d){const h=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new Jn(this._lodPlanes[a],g),x=g.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*$r-1),b=c/E,S=isFinite(c)?1+Math.floor(_*b):$r;S>$r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${$r}`);const v=[];let L=0;for(let O=0;O<$r;++O){const V=O/b,D=Math.exp(-V*V/2);v.push(D),O===0?L+=D:O<S&&(L+=2*D)}for(let O=0;O<v.length;O++)v[O]=v[O]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=E,x.mipInt.value=P-s;const C=this._sizeLods[a],Y=3*C*(a>P-zs?a-P+zs:0),k=4*(this._cubeSize-C);yl(n,Y,k,3*C,2*C),h.setRenderTarget(n),h.render(y,Yu)}}function nw(r){const e=[],n=[],s=[];let a=r;const c=r-zs+1+xm.length;for(let u=0;u<c;u++){const d=Math.pow(2,a);n.push(d);let h=1/d;u>r-zs?h=xm[u-r+zs-1]:u===0&&(h=0),s.push(h);const g=1/(d-2),_=-g,y=1+g,x=[_,_,y,_,y,y,_,_,y,y,_,y],M=6,E=6,b=3,S=2,v=1,L=new Float32Array(b*E*M),P=new Float32Array(S*E*M),C=new Float32Array(v*E*M);for(let k=0;k<M;k++){const O=k%3*2/3-1,V=k>2?0:-1,D=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];L.set(D,b*E*k),P.set(x,S*E*k);const R=[k,k,k,k,k,k];C.set(R,v*E*k)}const Y=new ei;Y.setAttribute("position",new Qn(L,b)),Y.setAttribute("uv",new Qn(P,S)),Y.setAttribute("faceIndex",new Qn(C,v)),e.push(Y),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function Mm(r,e,n){const s=new Qr(r,e,n);return s.texture.mapping=Ul,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yl(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function iw(r,e,n){const s=new Float32Array($r),a=new Q(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function wm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Em(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function rw(r){let e=new WeakMap,n=null;function s(d){if(d&&d.isTexture){const h=d.mapping,g=h===dd||h===fd,_=h===js||h===Ws;if(g||_){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Sm(r)),y=g?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const M=d.image;return g&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new Sm(r)),y=g?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",c),y.texture):null}}}return d}function a(d){let h=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function sw(r){const e={};function n(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&ko("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function ow(r,e,n,s){const a={},c=new WeakMap;function u(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const b=x.morphAttributes[E];for(let S=0,v=b.length;S<v;S++)e.remove(b[S])}x.removeEventListener("dispose",u),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function h(y){const x=y.attributes;for(const E in x)e.update(x[E],r.ARRAY_BUFFER);const M=y.morphAttributes;for(const E in M){const b=M[E];for(let S=0,v=b.length;S<v;S++)e.update(b[S],r.ARRAY_BUFFER)}}function g(y){const x=[],M=y.index,E=y.attributes.position;let b=0;if(M!==null){const L=M.array;b=M.version;for(let P=0,C=L.length;P<C;P+=3){const Y=L[P+0],k=L[P+1],O=L[P+2];x.push(Y,k,k,O,O,Y)}}else if(E!==void 0){const L=E.array;b=E.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const Y=P+0,k=P+1,O=P+2;x.push(Y,k,k,O,O,Y)}}else return;const S=new(qg(x)?t0:e0)(x,1);S.version=b;const v=c.get(y);v&&e.remove(v),c.set(y,S)}function _(y){const x=c.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&g(y)}else g(y);return c.get(y)}return{get:d,update:h,getWireframeAttribute:_}}function aw(r,e,n){let s;function a(x){s=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function h(x,M){r.drawElements(s,M,c,x*u),n.update(M,s,1)}function g(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*u,E),n.update(M,s,E))}function _(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];n.update(S,s,1)}function y(x,M,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)g(x[v]/u,M[v],b[v]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,b,0,E);let v=0;for(let L=0;L<E;L++)v+=M[L]*b[L];n.update(v,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function lw(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function cw(r,e,n){const s=new WeakMap,a=new Wt;function c(u,d,h){const g=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==y){let R=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let Y=d.attributes.position.count*C,k=1;Y>e.maxTextureSize&&(k=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const O=new Float32Array(Y*k*4*y),V=new Kg(O,Y,k,y);V.type=Hi,V.needsUpdate=!0;const D=C*4;for(let B=0;B<y;B++){const ae=v[B],ne=L[B],he=P[B],ge=Y*k*4*B;for(let ue=0;ue<ae.count;ue++){const fe=ue*D;E===!0&&(a.fromBufferAttribute(ae,ue),O[ge+fe+0]=a.x,O[ge+fe+1]=a.y,O[ge+fe+2]=a.z,O[ge+fe+3]=0),b===!0&&(a.fromBufferAttribute(ne,ue),O[ge+fe+4]=a.x,O[ge+fe+5]=a.y,O[ge+fe+6]=a.z,O[ge+fe+7]=0),S===!0&&(a.fromBufferAttribute(he,ue),O[ge+fe+8]=a.x,O[ge+fe+9]=a.y,O[ge+fe+10]=a.z,O[ge+fe+11]=he.itemSize===4?a.w:1)}}x={count:y,texture:V,size:new Pt(Y,k)},s.set(d,x),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<g.length;S++)E+=g[S];const b=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",g)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function uw(r,e,n,s){let a=new WeakMap;function c(h){const g=s.render.frame,_=h.geometry,y=e.get(h,_);if(a.get(y)!==g&&(e.update(y),a.set(y,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==g&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return y}function u(){a=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:u}}class a0 extends Mn{constructor(e,n,s,a,c,u,d,h,g,_=Hs){if(_!==Hs&&_!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Hs&&(s=Jr),s===void 0&&_===Ys&&(s=Xs),super(null,a,c,u,d,h,_,s,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:pi,this.minFilter=h!==void 0?h:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const l0=new Mn,Tm=new a0(1,1),c0=new Kg,u0=new $_,d0=new r0,bm=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),Nm=new Float32Array(4);function Zs(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let c=bm[a];if(c===void 0&&(c=new Float32Array(a),bm[a]=c),e!==0){s.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Qt(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function en(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function zl(r,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function dw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function fw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;r.uniform2fv(this.addr,e),en(n,e)}}function hw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;r.uniform3fv(this.addr,e),en(n,e)}}function pw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;r.uniform4fv(this.addr,e),en(n,e)}}function mw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Qt(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Qt(n,s))return;Nm.set(s),r.uniformMatrix2fv(this.addr,!1,Nm),en(n,s)}}function gw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Qt(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Qt(n,s))return;Rm.set(s),r.uniformMatrix3fv(this.addr,!1,Rm),en(n,s)}}function vw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Qt(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Qt(n,s))return;Cm.set(s),r.uniformMatrix4fv(this.addr,!1,Cm),en(n,s)}}function xw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function _w(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;r.uniform2iv(this.addr,e),en(n,e)}}function yw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;r.uniform3iv(this.addr,e),en(n,e)}}function Sw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;r.uniform4iv(this.addr,e),en(n,e)}}function Mw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function ww(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;r.uniform2uiv(this.addr,e),en(n,e)}}function Ew(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;r.uniform3uiv(this.addr,e),en(n,e)}}function Tw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;r.uniform4uiv(this.addr,e),en(n,e)}}function bw(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let c;this.type===r.SAMPLER_2D_SHADOW?(Tm.compareFunction=Yg,c=Tm):c=l0,n.setTexture2D(e||c,a)}function Aw(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||u0,a)}function Cw(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||d0,a)}function Rw(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||c0,a)}function Nw(r){switch(r){case 5126:return dw;case 35664:return fw;case 35665:return hw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return xw;case 35667:case 35671:return _w;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return ww;case 36295:return Ew;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Rw}}function Pw(r,e){r.uniform1fv(this.addr,e)}function Lw(r,e){const n=Zs(e,this.size,2);r.uniform2fv(this.addr,n)}function Dw(r,e){const n=Zs(e,this.size,3);r.uniform3fv(this.addr,n)}function Iw(r,e){const n=Zs(e,this.size,4);r.uniform4fv(this.addr,n)}function Uw(r,e){const n=Zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function Fw(r,e){const n=Zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function kw(r,e){const n=Zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Ow(r,e){r.uniform1iv(this.addr,e)}function zw(r,e){r.uniform2iv(this.addr,e)}function Bw(r,e){r.uniform3iv(this.addr,e)}function Hw(r,e){r.uniform4iv(this.addr,e)}function Vw(r,e){r.uniform1uiv(this.addr,e)}function Gw(r,e){r.uniform2uiv(this.addr,e)}function jw(r,e){r.uniform3uiv(this.addr,e)}function Ww(r,e){r.uniform4uiv(this.addr,e)}function Xw(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);Qt(s,c)||(r.uniform1iv(this.addr,c),en(s,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||l0,c[u])}function Yw(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);Qt(s,c)||(r.uniform1iv(this.addr,c),en(s,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||u0,c[u])}function qw(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);Qt(s,c)||(r.uniform1iv(this.addr,c),en(s,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||d0,c[u])}function $w(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);Qt(s,c)||(r.uniform1iv(this.addr,c),en(s,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||c0,c[u])}function Kw(r){switch(r){case 5126:return Pw;case 35664:return Lw;case 35665:return Dw;case 35666:return Iw;case 35674:return Uw;case 35675:return Fw;case 35676:return kw;case 5124:case 35670:return Ow;case 35667:case 35671:return zw;case 35668:case 35672:return Bw;case 35669:case 35673:return Hw;case 5125:return Vw;case 36294:return Gw;case 36295:return jw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return $w}}class Zw{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=Nw(n.type)}}class Jw{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Kw(n.type)}}class Qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const d=a[c];d.setValue(e,n[d.id],s)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function Pm(r,e){r.seq.push(e),r.map[e.id]=e}function e1(r,e,n){const s=r.name,a=s.length;for(Ju.lastIndex=0;;){const c=Ju.exec(s),u=Ju.lastIndex;let d=c[1];const h=c[2]==="]",g=c[3];if(h&&(d=d|0),g===void 0||g==="["&&u+2===a){Pm(n,g===void 0?new Zw(d,r,e):new Jw(d,r,e));break}else{let y=n.map[d];y===void 0&&(y=new Qw(d),Pm(n,y)),n=y}}}class Nl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);e1(c,u,this)}}setValue(e,n,s,a){const c=this.map[n];c!==void 0&&c.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let c=0,u=n.length;c!==u;++c){const d=n[c],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&s.push(u)}return s}}function Lm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const t1=37297;let n1=0;function i1(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return s.join(`
`)}const Dm=new pt;function r1(r){wt._getMatrix(Dm,wt.workingColorSpace,r);const e=`mat3( ${Dm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(r)){case Fl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Im(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+i1(r.getShaderSource(e),u)}else return a}function s1(r,e){const n=r1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function o1(r,e){let n;switch(e){case S_:n="Linear";break;case M_:n="Reinhard";break;case w_:n="Cineon";break;case E_:n="ACESFilmic";break;case b_:n="AgX";break;case A_:n="Neutral";break;case T_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new Q;function a1(){wt.getLuminanceCoefficients(Sl);const r=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function c1(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function u1(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const c=r.getActiveAttrib(e,a),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Oo(r){return r!==""}function Um(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(r){return r.replace(d1,h1)}const f1=new Map;function h1(r,e){let n=mt[e];if(n===void 0){const s=f1.get(e);if(s!==void 0)n=mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(r){return r.replace(p1,m1)}function m1(r,e,n,s){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Om(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function g1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ig?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function v1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case js:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function x1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function _1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ug:e="ENVMAP_BLENDING_MULTIPLY";break;case __:e="ENVMAP_BLENDING_MIX";break;case y_:e="ENVMAP_BLENDING_ADD";break}return e}function y1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function S1(r,e,n,s){const a=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=g1(n),g=v1(n),_=x1(n),y=_1(n),x=y1(n),M=l1(n),E=c1(c),b=a.createProgram();let S,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),v.length>0&&(v+=`
`)):(S=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),v=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?mt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?o1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,s1("linearToOutputTexel",n.outputColorSpace),a1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),u=Vd(u),u=Um(u,n),u=Fm(u,n),d=Vd(d),d=Um(d,n),d=Fm(d,n),u=km(u),d=km(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=L+S+u,C=L+v+d,Y=Lm(a,a.VERTEX_SHADER,P),k=Lm(a,a.FRAGMENT_SHADER,C);a.attachShader(b,Y),a.attachShader(b,k),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function O(B){if(r.debug.checkShaderErrors){const ae=a.getProgramInfoLog(b).trim(),ne=a.getShaderInfoLog(Y).trim(),he=a.getShaderInfoLog(k).trim();let ge=!0,ue=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ge=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,b,Y,k);else{const fe=Im(a,Y,"vertex"),G=Im(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+fe+`
`+G)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ne===""||he==="")&&(ue=!1);ue&&(B.diagnostics={runnable:ge,programLog:ae,vertexShader:{log:ne,prefix:S},fragmentShader:{log:he,prefix:v}})}a.deleteShader(Y),a.deleteShader(k),V=new Nl(a,b),D=u1(a,b)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(b,t1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=n1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=Y,this.fragmentShader=k,this}let M1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new E1(e),n.set(e,s)),s}}class E1{constructor(e){this.id=M1++,this.code=e,this.usedTimes=0}}function T1(r,e,n,s,a,c,u){const d=new Jg,h=new w1,g=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return g.add(D),D===0?"uv":`uv${D}`}function S(D,R,B,ae,ne){const he=ae.fog,ge=ne.geometry,ue=D.isMeshStandardMaterial?ae.environment:null,fe=(D.isMeshStandardMaterial?n:e).get(D.envMap||ue),G=fe&&fe.mapping===Ul?fe.image.height:null,de=E[D.type];D.precision!==null&&(M=a.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const I=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,w=I!==void 0?I.length:0;let j=0;ge.morphAttributes.position!==void 0&&(j=1),ge.morphAttributes.normal!==void 0&&(j=2),ge.morphAttributes.color!==void 0&&(j=3);let ve,X,Z,le;if(de){const St=Si[de];ve=St.vertexShader,X=St.fragmentShader}else ve=D.vertexShader,X=D.fragmentShader,h.update(D),Z=h.getVertexShaderID(D),le=h.getFragmentShaderID(D);const ie=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Te=ne.isInstancedMesh===!0,Le=ne.isBatchedMesh===!0,Je=!!D.map,Ke=!!D.matcap,lt=!!fe,z=!!D.aoMap,Rt=!!D.lightMap,it=!!D.bumpMap,nt=!!D.normalMap,Ve=!!D.displacementMap,xt=!!D.emissiveMap,ke=!!D.metalnessMap,U=!!D.roughnessMap,A=D.anisotropy>0,te=D.clearcoat>0,_e=D.dispersion>0,ye=D.iridescence>0,me=D.sheen>0,Ge=D.transmission>0,Re=A&&!!D.anisotropyMap,Ue=te&&!!D.clearcoatMap,ft=te&&!!D.clearcoatNormalMap,we=te&&!!D.clearcoatRoughnessMap,Oe=ye&&!!D.iridescenceMap,Qe=ye&&!!D.iridescenceThicknessMap,rt=me&&!!D.sheenColorMap,Be=me&&!!D.sheenRoughnessMap,gt=!!D.specularMap,ct=!!D.specularColorMap,Nt=!!D.specularIntensityMap,q=Ge&&!!D.transmissionMap,Ne=Ge&&!!D.thicknessMap,ce=!!D.gradientMap,xe=!!D.alphaMap,Ie=D.alphaTest>0,De=!!D.alphaHash,ut=!!D.extensions;let Ft=Mr;D.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const $t={shaderID:de,shaderType:D.type,shaderName:D.name,vertexShader:ve,fragmentShader:X,defines:D.defines,customVertexShaderID:Z,customFragmentShaderID:le,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Le,batchingColor:Le&&ne._colorsTexture!==null,instancing:Te,instancingColor:Te&&ne.instanceColor!==null,instancingMorph:Te&&ne.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$s,alphaToCoverage:!!D.alphaToCoverage,map:Je,matcap:Ke,envMap:lt,envMapMode:lt&&fe.mapping,envMapCubeUVHeight:G,aoMap:z,lightMap:Rt,bumpMap:it,normalMap:nt,displacementMap:x&&Ve,emissiveMap:xt,normalMapObjectSpace:nt&&D.normalMapType===L_,normalMapTangentSpace:nt&&D.normalMapType===P_,metalnessMap:ke,roughnessMap:U,anisotropy:A,anisotropyMap:Re,clearcoat:te,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ye,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:me,sheenColorMap:rt,sheenRoughnessMap:Be,specularMap:gt,specularColorMap:ct,specularIntensityMap:Nt,transmission:Ge,transmissionMap:q,thicknessMap:Ne,gradientMap:ce,opaque:D.transparent===!1&&D.blending===Bs&&D.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ie,alphaHash:De,combine:D.combine,mapUv:Je&&b(D.map.channel),aoMapUv:z&&b(D.aoMap.channel),lightMapUv:Rt&&b(D.lightMap.channel),bumpMapUv:it&&b(D.bumpMap.channel),normalMapUv:nt&&b(D.normalMap.channel),displacementMapUv:Ve&&b(D.displacementMap.channel),emissiveMapUv:xt&&b(D.emissiveMap.channel),metalnessMapUv:ke&&b(D.metalnessMap.channel),roughnessMapUv:U&&b(D.roughnessMap.channel),anisotropyMapUv:Re&&b(D.anisotropyMap.channel),clearcoatMapUv:Ue&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:ft&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(D.sheenRoughnessMap.channel),specularMapUv:gt&&b(D.specularMap.channel),specularColorMapUv:ct&&b(D.specularColorMap.channel),specularIntensityMapUv:Nt&&b(D.specularIntensityMap.channel),transmissionMapUv:q&&b(D.transmissionMap.channel),thicknessMapUv:Ne&&b(D.thicknessMap.channel),alphaMapUv:xe&&b(D.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(nt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ge.attributes.uv&&(Je||xe),fog:!!he,useFog:D.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:pe,skinning:ne.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:j,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Je&&D.map.isVideoTexture===!0&&wt.getTransfer(D.map.colorSpace)===Dt,decodeVideoTextureEmissive:xt&&D.emissiveMap.isVideoTexture===!0&&wt.getTransfer(D.emissiveMap.colorSpace)===Dt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Bi,flipSided:D.side===Dn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ut&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&D.extensions.multiDraw===!0||Le)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return $t.vertexUv1s=g.has(1),$t.vertexUv2s=g.has(2),$t.vertexUv3s=g.has(3),g.clear(),$t}function v(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)R.push(B),R.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(L(R,D),P(R,D),R.push(r.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function L(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function P(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const R=E[D.type];let B;if(R){const ae=Si[R];B=ay.clone(ae.uniforms)}else B=D.uniforms;return B}function Y(D,R){let B;for(let ae=0,ne=_.length;ae<ne;ae++){const he=_[ae];if(he.cacheKey===R){B=he,++B.usedTimes;break}}return B===void 0&&(B=new S1(r,R,D,c),_.push(B)),B}function k(D){if(--D.usedTimes===0){const R=_.indexOf(D);_[R]=_[_.length-1],_.pop(),D.destroy()}}function O(D){h.remove(D)}function V(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:C,acquireProgram:Y,releaseProgram:k,releaseShaderCache:O,programs:_,dispose:V}}function b1(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function a(u,d,h){r.get(u)[d]=h}function c(){r=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:c}}function A1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bm(){const r=[];let e=0;const n=[],s=[],a=[];function c(){e=0,n.length=0,s.length=0,a.length=0}function u(y,x,M,E,b,S){let v=r[e];return v===void 0?(v={id:y.id,object:y,geometry:x,material:M,groupOrder:E,renderOrder:y.renderOrder,z:b,group:S},r[e]=v):(v.id=y.id,v.object=y,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=y.renderOrder,v.z=b,v.group=S),e++,v}function d(y,x,M,E,b,S){const v=u(y,x,M,E,b,S);M.transmission>0?s.push(v):M.transparent===!0?a.push(v):n.push(v)}function h(y,x,M,E,b,S){const v=u(y,x,M,E,b,S);M.transmission>0?s.unshift(v):M.transparent===!0?a.unshift(v):n.unshift(v)}function g(y,x){n.length>1&&n.sort(y||A1),s.length>1&&s.sort(x||zm),a.length>1&&a.sort(x||zm)}function _(){for(let y=e,x=r.length;y<x;y++){const M=r[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:a,init:c,push:d,unshift:h,finish:_,sort:g}}function C1(){let r=new WeakMap;function e(s,a){const c=r.get(s);let u;return c===void 0?(u=new Bm,r.set(s,[u])):a>=c.length?(u=new Bm,c.push(u)):u=c[a],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function R1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new At};break;case"SpotLight":n={position:new Q,direction:new Q,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=n,n}}}function N1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let P1=0;function L1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function D1(r){const e=new R1,n=N1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new Q);const a=new Q,c=new Xt,u=new Xt;function d(g){let _=0,y=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,b=0,S=0,v=0,L=0,P=0,C=0,Y=0,k=0,O=0;g.sort(L1);for(let D=0,R=g.length;D<R;D++){const B=g[D],ae=B.color,ne=B.intensity,he=B.distance,ge=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ae.r*ne,y+=ae.g*ne,x+=ae.b*ne;else if(B.isLightProbe){for(let ue=0;ue<9;ue++)s.probe[ue].addScaledVector(B.sh.coefficients[ue],ne);O++}else if(B.isDirectionalLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const fe=B.shadow,G=n.get(B);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,s.directionalShadow[M]=G,s.directionalShadowMap[M]=ge,s.directionalShadowMatrix[M]=B.shadow.matrix,L++}s.directional[M]=ue,M++}else if(B.isSpotLight){const ue=e.get(B);ue.position.setFromMatrixPosition(B.matrixWorld),ue.color.copy(ae).multiplyScalar(ne),ue.distance=he,ue.coneCos=Math.cos(B.angle),ue.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ue.decay=B.decay,s.spot[b]=ue;const fe=B.shadow;if(B.map&&(s.spotLightMap[Y]=B.map,Y++,fe.updateMatrices(B),B.castShadow&&k++),s.spotLightMatrix[b]=fe.matrix,B.castShadow){const G=n.get(B);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,s.spotShadow[b]=G,s.spotShadowMap[b]=ge,C++}b++}else if(B.isRectAreaLight){const ue=e.get(B);ue.color.copy(ae).multiplyScalar(ne),ue.halfWidth.set(B.width*.5,0,0),ue.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=ue,S++}else if(B.isPointLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),ue.distance=B.distance,ue.decay=B.decay,B.castShadow){const fe=B.shadow,G=n.get(B);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,G.shadowCameraNear=fe.camera.near,G.shadowCameraFar=fe.camera.far,s.pointShadow[E]=G,s.pointShadowMap[E]=ge,s.pointShadowMatrix[E]=B.shadow.matrix,P++}s.point[E]=ue,E++}else if(B.isHemisphereLight){const ue=e.get(B);ue.skyColor.copy(B.color).multiplyScalar(ne),ue.groundColor.copy(B.groundColor).multiplyScalar(ne),s.hemi[v]=ue,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==M||V.pointLength!==E||V.spotLength!==b||V.rectAreaLength!==S||V.hemiLength!==v||V.numDirectionalShadows!==L||V.numPointShadows!==P||V.numSpotShadows!==C||V.numSpotMaps!==Y||V.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+Y-k,s.spotLightMap.length=Y,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=O,V.directionalLength=M,V.pointLength=E,V.spotLength=b,V.rectAreaLength=S,V.hemiLength=v,V.numDirectionalShadows=L,V.numPointShadows=P,V.numSpotShadows=C,V.numSpotMaps=Y,V.numLightProbes=O,s.version=P1++)}function h(g,_){let y=0,x=0,M=0,E=0,b=0;const S=_.matrixWorldInverse;for(let v=0,L=g.length;v<L;v++){const P=g[v];if(P.isDirectionalLight){const C=s.directional[y];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(P.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),u.identity(),c.copy(P.matrixWorld),c.premultiply(S),u.extractRotation(c),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),x++}else if(P.isHemisphereLight){const C=s.hemi[b];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(S),b++}}}return{setup:d,setupView:h,state:s}}function Hm(r){const e=new D1(r),n=[],s=[];function a(_){g.camera=_,n.length=0,s.length=0}function c(_){n.push(_)}function u(_){s.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const g={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function I1(r){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let d;return u===void 0?(d=new Hm(r),e.set(a,[d])):c>=u.length?(d=new Hm(r),u.push(d)):d=u[c],d}function s(){e=new WeakMap}return{get:n,dispose:s}}class U1 extends Xo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=R_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F1 extends Xo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const k1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z1(r,e,n){let s=new s0;const a=new Pt,c=new Pt,u=new Wt,d=new U1({depthPacking:N_}),h=new F1,g={},_=n.maxTextureSize,y={[wr]:Dn,[Dn]:wr,[Bi]:Bi},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:k1,fragmentShader:O1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ei;E.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Jn(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ig;let v=this.type;this.render=function(k,O,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const D=r.getRenderTarget(),R=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),ae=r.state;ae.setBlending(Sr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ne=v!==zi&&this.type===zi,he=v===zi&&this.type!==zi;for(let ge=0,ue=k.length;ge<ue;ge++){const fe=k[ge],G=fe.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const de=G.getFrameExtents();if(a.multiply(de),c.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/de.x),a.x=c.x*de.x,G.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/de.y),a.y=c.y*de.y,G.mapSize.y=c.y)),G.map===null||ne===!0||he===!0){const w=this.type!==zi?{minFilter:pi,magFilter:pi}:{};G.map!==null&&G.map.dispose(),G.map=new Qr(a.x,a.y,w),G.map.texture.name=fe.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const I=G.getViewportCount();for(let w=0;w<I;w++){const j=G.getViewport(w);u.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),ae.viewport(u),G.updateMatrices(fe,w),s=G.getFrustum(),C(O,V,G.camera,fe,this.type)}G.isPointLightShadow!==!0&&this.type===zi&&L(G,V),G.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(D,R,B)};function L(k,O){const V=e.update(b);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Qr(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(O,null,V,x,b,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(O,null,V,M,b,null)}function P(k,O,V,D){let R=null;const B=V.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)R=B;else if(R=V.isPointLight===!0?h:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ae=R.uuid,ne=O.uuid;let he=g[ae];he===void 0&&(he={},g[ae]=he);let ge=he[ne];ge===void 0&&(ge=R.clone(),he[ne]=ge,O.addEventListener("dispose",Y)),R=ge}if(R.visible=O.visible,R.wireframe=O.wireframe,D===zi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:y[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=r.properties.get(R);ae.light=V}return R}function C(k,O,V,D,R){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===zi)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,k.matrixWorld);const ne=e.update(k),he=k.material;if(Array.isArray(he)){const ge=ne.groups;for(let ue=0,fe=ge.length;ue<fe;ue++){const G=ge[ue],de=he[G.materialIndex];if(de&&de.visible){const I=P(k,de,D,R);k.onBeforeShadow(r,k,O,V,ne,I,G),r.renderBufferDirect(V,null,ne,I,k,G),k.onAfterShadow(r,k,O,V,ne,I,G)}}}else if(he.visible){const ge=P(k,he,D,R);k.onBeforeShadow(r,k,O,V,ne,ge,null),r.renderBufferDirect(V,null,ne,ge,k,null),k.onAfterShadow(r,k,O,V,ne,ge,null)}}const ae=k.children;for(let ne=0,he=ae.length;ne<he;ne++)C(ae[ne],O,V,D,R)}function Y(k){k.target.removeEventListener("dispose",Y);for(const V in g){const D=g[V],R=k.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const B1={[rd]:sd,[od]:cd,[ad]:ud,[Gs]:ld,[sd]:rd,[cd]:od,[ud]:ad,[ld]:Gs};function H1(r,e){function n(){let q=!1;const Ne=new Wt;let ce=null;const xe=new Wt(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!q&&(r.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){q=Ie},setClear:function(Ie,De,ut,Ft,$t){$t===!0&&(Ie*=Ft,De*=Ft,ut*=Ft),Ne.set(Ie,De,ut,Ft),xe.equals(Ne)===!1&&(r.clearColor(Ie,De,ut,Ft),xe.copy(Ne))},reset:function(){q=!1,ce=null,xe.set(-1,0,0,0)}}}function s(){let q=!1,Ne=!1,ce=null,xe=null,Ie=null;return{setReversed:function(De){if(Ne!==De){const ut=e.get("EXT_clip_control");Ne?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ie;Ie=null,this.setClear(Ft)}Ne=De},getReversed:function(){return Ne},setTest:function(De){De?ie(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(De){ce!==De&&!q&&(r.depthMask(De),ce=De)},setFunc:function(De){if(Ne&&(De=B1[De]),xe!==De){switch(De){case rd:r.depthFunc(r.NEVER);break;case sd:r.depthFunc(r.ALWAYS);break;case od:r.depthFunc(r.LESS);break;case Gs:r.depthFunc(r.LEQUAL);break;case ad:r.depthFunc(r.EQUAL);break;case ld:r.depthFunc(r.GEQUAL);break;case cd:r.depthFunc(r.GREATER);break;case ud:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=De}},setLocked:function(De){q=De},setClear:function(De){Ie!==De&&(Ne&&(De=1-De),r.clearDepth(De),Ie=De)},reset:function(){q=!1,ce=null,xe=null,Ie=null,Ne=!1}}}function a(){let q=!1,Ne=null,ce=null,xe=null,Ie=null,De=null,ut=null,Ft=null,$t=null;return{setTest:function(St){q||(St?ie(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(St){Ne!==St&&!q&&(r.stencilMask(St),Ne=St)},setFunc:function(St,wn,vn){(ce!==St||xe!==wn||Ie!==vn)&&(r.stencilFunc(St,wn,vn),ce=St,xe=wn,Ie=vn)},setOp:function(St,wn,vn){(De!==St||ut!==wn||Ft!==vn)&&(r.stencilOp(St,wn,vn),De=St,ut=wn,Ft=vn)},setLocked:function(St){q=St},setClear:function(St){$t!==St&&(r.clearStencil(St),$t=St)},reset:function(){q=!1,Ne=null,ce=null,xe=null,Ie=null,De=null,ut=null,Ft=null,$t=null}}}const c=new n,u=new s,d=new a,h=new WeakMap,g=new WeakMap;let _={},y={},x=new WeakMap,M=[],E=null,b=!1,S=null,v=null,L=null,P=null,C=null,Y=null,k=null,O=new At(0,0,0),V=0,D=!1,R=null,B=null,ae=null,ne=null,he=null;const ge=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,fe=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(G)[1]),ue=fe>=1):G.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ue=fe>=2);let de=null,I={};const w=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ve=new Wt().fromArray(w),X=new Wt().fromArray(j);function Z(q,Ne,ce,xe){const Ie=new Uint8Array(4),De=r.createTexture();r.bindTexture(q,De),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<ce;ut++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Ne+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return De}const le={};le[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ie(r.DEPTH_TEST),u.setFunc(Gs),it(!1),nt(Xp),ie(r.CULL_FACE),z(Sr);function ie(q){_[q]!==!0&&(r.enable(q),_[q]=!0)}function pe(q){_[q]!==!1&&(r.disable(q),_[q]=!1)}function Te(q,Ne){return y[q]!==Ne?(r.bindFramebuffer(q,Ne),y[q]=Ne,q===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=Ne),q===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(q,Ne){let ce=M,xe=!1;if(q){ce=x.get(Ne),ce===void 0&&(ce=[],x.set(Ne,ce));const Ie=q.textures;if(ce.length!==Ie.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let De=0,ut=Ie.length;De<ut;De++)ce[De]=r.COLOR_ATTACHMENT0+De;ce.length=Ie.length,xe=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,xe=!0);xe&&r.drawBuffers(ce)}function Je(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const Ke={[qr]:r.FUNC_ADD,[n_]:r.FUNC_SUBTRACT,[i_]:r.FUNC_REVERSE_SUBTRACT};Ke[r_]=r.MIN,Ke[s_]=r.MAX;const lt={[o_]:r.ZERO,[a_]:r.ONE,[l_]:r.SRC_COLOR,[nd]:r.SRC_ALPHA,[p_]:r.SRC_ALPHA_SATURATE,[f_]:r.DST_COLOR,[u_]:r.DST_ALPHA,[c_]:r.ONE_MINUS_SRC_COLOR,[id]:r.ONE_MINUS_SRC_ALPHA,[h_]:r.ONE_MINUS_DST_COLOR,[d_]:r.ONE_MINUS_DST_ALPHA,[m_]:r.CONSTANT_COLOR,[g_]:r.ONE_MINUS_CONSTANT_COLOR,[v_]:r.CONSTANT_ALPHA,[x_]:r.ONE_MINUS_CONSTANT_ALPHA};function z(q,Ne,ce,xe,Ie,De,ut,Ft,$t,St){if(q===Sr){b===!0&&(pe(r.BLEND),b=!1);return}if(b===!1&&(ie(r.BLEND),b=!0),q!==t_){if(q!==S||St!==D){if((v!==qr||C!==qr)&&(r.blendEquation(r.FUNC_ADD),v=qr,C=qr),St)switch(q){case Bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case td:r.blendFunc(r.ONE,r.ONE);break;case Yp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case td:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,P=null,Y=null,k=null,O.set(0,0,0),V=0,S=q,D=St}return}Ie=Ie||Ne,De=De||ce,ut=ut||xe,(Ne!==v||Ie!==C)&&(r.blendEquationSeparate(Ke[Ne],Ke[Ie]),v=Ne,C=Ie),(ce!==L||xe!==P||De!==Y||ut!==k)&&(r.blendFuncSeparate(lt[ce],lt[xe],lt[De],lt[ut]),L=ce,P=xe,Y=De,k=ut),(Ft.equals(O)===!1||$t!==V)&&(r.blendColor(Ft.r,Ft.g,Ft.b,$t),O.copy(Ft),V=$t),S=q,D=!1}function Rt(q,Ne){q.side===Bi?pe(r.CULL_FACE):ie(r.CULL_FACE);let ce=q.side===Dn;Ne&&(ce=!ce),it(ce),q.blending===Bs&&q.transparent===!1?z(Sr):z(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const xe=q.stencilWrite;d.setTest(xe),xe&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),xt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(q){R!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),R=q)}function nt(q){q!==Jx?(ie(r.CULL_FACE),q!==B&&(q===Xp?r.cullFace(r.BACK):q===Qx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),B=q}function Ve(q){q!==ae&&(ue&&r.lineWidth(q),ae=q)}function xt(q,Ne,ce){q?(ie(r.POLYGON_OFFSET_FILL),(ne!==Ne||he!==ce)&&(r.polygonOffset(Ne,ce),ne=Ne,he=ce)):pe(r.POLYGON_OFFSET_FILL)}function ke(q){q?ie(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function U(q){q===void 0&&(q=r.TEXTURE0+ge-1),de!==q&&(r.activeTexture(q),de=q)}function A(q,Ne,ce){ce===void 0&&(de===null?ce=r.TEXTURE0+ge-1:ce=de);let xe=I[ce];xe===void 0&&(xe={type:void 0,texture:void 0},I[ce]=xe),(xe.type!==q||xe.texture!==Ne)&&(de!==ce&&(r.activeTexture(ce),de=ce),r.bindTexture(q,Ne||le[q]),xe.type=q,xe.texture=Ne)}function te(){const q=I[de];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{r.texImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{r.texImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(q){ve.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),ve.copy(q))}function Be(q){X.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),X.copy(q))}function gt(q,Ne){let ce=g.get(Ne);ce===void 0&&(ce=new WeakMap,g.set(Ne,ce));let xe=ce.get(q);xe===void 0&&(xe=r.getUniformBlockIndex(Ne,q.name),ce.set(q,xe))}function ct(q,Ne){const xe=g.get(Ne).get(q);h.get(Ne)!==xe&&(r.uniformBlockBinding(Ne,xe,q.__bindingPointIndex),h.set(Ne,xe))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},de=null,I={},y={},x=new WeakMap,M=[],E=null,b=!1,S=null,v=null,L=null,P=null,C=null,Y=null,k=null,O=new At(0,0,0),V=0,D=!1,R=null,B=null,ae=null,ne=null,he=null,ve.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ie,disable:pe,bindFramebuffer:Te,drawBuffers:Le,useProgram:Je,setBlending:z,setMaterial:Rt,setFlipSided:it,setCullFace:nt,setLineWidth:Ve,setPolygonOffset:xt,setScissorTest:ke,activeTexture:U,bindTexture:A,unbindTexture:te,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:gt,uniformBlockBinding:ct,texStorage2D:ft,texStorage3D:we,texSubImage2D:me,texSubImage3D:Ge,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:rt,viewport:Be,reset:Nt}}function Vm(r,e,n,s){const a=V1(s);switch(n){case Bg:return r*e;case Vg:return r*e;case Gg:return r*e*2;case jg:return r*e/a.components*a.byteLength;case Zd:return r*e/a.components*a.byteLength;case Wg:return r*e*2/a.components*a.byteLength;case Jd:return r*e*2/a.components*a.byteLength;case Hg:return r*e*3/a.components*a.byteLength;case hi:return r*e*4/a.components*a.byteLength;case Qd:return r*e*4/a.components*a.byteLength;case Tl:case bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gd:case xd:return Math.max(r,16)*Math.max(e,8)/4;case md:case vd:return Math.max(r,8)*Math.max(e,8)/2;case _d:case yd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Fd:case kd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xg:case Od:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function V1(r){switch(r){case ji:case kg:return{byteLength:1,components:1};case Ho:case Og:case Vo:return{byteLength:2,components:1};case $d:case Kd:return{byteLength:2,components:4};case Jr:case qd:case Hi:return{byteLength:4,components:1};case zg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function G1(r,e,n,s,a,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Pt,_=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return M?new OffscreenCanvas(U,A):Ll("canvas")}function b(U,A,te){let _e=1;const ye=ke(U);if((ye.width>te||ye.height>te)&&(_e=te/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const me=Math.floor(_e*ye.width),Ge=Math.floor(_e*ye.height);y===void 0&&(y=E(me,Ge));const Re=A?E(me,Ge):y;return Re.width=me,Re.height=Ge,Re.getContext("2d").drawImage(U,0,0,me,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+Ge+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){r.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(U,A,te,_e,ye=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me=A;if(A===r.RED&&(te===r.FLOAT&&(me=r.R32F),te===r.HALF_FLOAT&&(me=r.R16F),te===r.UNSIGNED_BYTE&&(me=r.R8)),A===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(me=r.R8UI),te===r.UNSIGNED_SHORT&&(me=r.R16UI),te===r.UNSIGNED_INT&&(me=r.R32UI),te===r.BYTE&&(me=r.R8I),te===r.SHORT&&(me=r.R16I),te===r.INT&&(me=r.R32I)),A===r.RG&&(te===r.FLOAT&&(me=r.RG32F),te===r.HALF_FLOAT&&(me=r.RG16F),te===r.UNSIGNED_BYTE&&(me=r.RG8)),A===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(me=r.RG8UI),te===r.UNSIGNED_SHORT&&(me=r.RG16UI),te===r.UNSIGNED_INT&&(me=r.RG32UI),te===r.BYTE&&(me=r.RG8I),te===r.SHORT&&(me=r.RG16I),te===r.INT&&(me=r.RG32I)),A===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(me=r.RGB8UI),te===r.UNSIGNED_SHORT&&(me=r.RGB16UI),te===r.UNSIGNED_INT&&(me=r.RGB32UI),te===r.BYTE&&(me=r.RGB8I),te===r.SHORT&&(me=r.RGB16I),te===r.INT&&(me=r.RGB32I)),A===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),te===r.UNSIGNED_INT&&(me=r.RGBA32UI),te===r.BYTE&&(me=r.RGBA8I),te===r.SHORT&&(me=r.RGBA16I),te===r.INT&&(me=r.RGBA32I)),A===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),A===r.RGBA){const Ge=ye?Fl:wt.getTransfer(_e);te===r.FLOAT&&(me=r.RGBA32F),te===r.HALF_FLOAT&&(me=r.RGBA16F),te===r.UNSIGNED_BYTE&&(me=Ge===Dt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function C(U,A){let te;return U?A===null||A===Jr||A===Xs?te=r.DEPTH24_STENCIL8:A===Hi?te=r.DEPTH32F_STENCIL8:A===Ho&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Jr||A===Xs?te=r.DEPTH_COMPONENT24:A===Hi?te=r.DEPTH_COMPONENT32F:A===Ho&&(te=r.DEPTH_COMPONENT16),te}function Y(U,A){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==pi&&U.minFilter!==Mi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function k(U){const A=U.target;A.removeEventListener("dispose",k),V(A),A.isVideoTexture&&_.delete(A)}function O(U){const A=U.target;A.removeEventListener("dispose",O),R(A)}function V(U){const A=s.get(U);if(A.__webglInit===void 0)return;const te=U.source,_e=x.get(te);if(_e){const ye=_e[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(U),Object.keys(_e).length===0&&x.delete(te)}s.remove(U)}function D(U){const A=s.get(U);r.deleteTexture(A.__webglTexture);const te=U.source,_e=x.get(te);delete _e[A.__cacheKey],u.memory.textures--}function R(U){const A=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let ye=0;ye<A.__webglFramebuffer[_e].length;ye++)r.deleteFramebuffer(A.__webglFramebuffer[_e][ye]);else r.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)r.deleteFramebuffer(A.__webglFramebuffer[_e]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=U.textures;for(let _e=0,ye=te.length;_e<ye;_e++){const me=s.get(te[_e]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),u.memory.textures--),s.remove(te[_e])}s.remove(U)}let B=0;function ae(){B=0}function ne(){const U=B;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),B+=1,U}function he(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function ge(U,A){const te=s.get(U);if(U.isVideoTexture&&Ve(U),U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){const _e=U.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(te,U,A);return}}n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+A)}function ue(U,A){const te=s.get(U);if(U.version>0&&te.__version!==U.version){X(te,U,A);return}n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+A)}function fe(U,A){const te=s.get(U);if(U.version>0&&te.__version!==U.version){X(te,U,A);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+A)}function G(U,A){const te=s.get(U);if(U.version>0&&te.__version!==U.version){Z(te,U,A);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+A)}const de={[hd]:r.REPEAT,[Kr]:r.CLAMP_TO_EDGE,[pd]:r.MIRRORED_REPEAT},I={[pi]:r.NEAREST,[C_]:r.NEAREST_MIPMAP_NEAREST,[tl]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[Eu]:r.LINEAR_MIPMAP_NEAREST,[Zr]:r.LINEAR_MIPMAP_LINEAR},w={[D_]:r.NEVER,[z_]:r.ALWAYS,[I_]:r.LESS,[Yg]:r.LEQUAL,[U_]:r.EQUAL,[O_]:r.GEQUAL,[F_]:r.GREATER,[k_]:r.NOTEQUAL};function j(U,A){if(A.type===Hi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Mi||A.magFilter===Eu||A.magFilter===tl||A.magFilter===Zr||A.minFilter===Mi||A.minFilter===Eu||A.minFilter===tl||A.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,de[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,de[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,de[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,I[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,I[A.minFilter]),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,w[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===pi||A.minFilter!==tl&&A.minFilter!==Zr||A.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function ve(U,A){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",k));const _e=A.source;let ye=x.get(_e);ye===void 0&&(ye={},x.set(_e,ye));const me=he(A);if(me!==U.__cacheKey){ye[me]===void 0&&(ye[me]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,te=!0),ye[me].usedTimes++;const Ge=ye[U.__cacheKey];Ge!==void 0&&(ye[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&D(A)),U.__cacheKey=me,U.__webglTexture=ye[me].texture}return te}function X(U,A,te){let _e=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=r.TEXTURE_3D);const ye=ve(U,A),me=A.source;n.bindTexture(_e,U.__webglTexture,r.TEXTURE0+te);const Ge=s.get(me);if(me.version!==Ge.__version||ye===!0){n.activeTexture(r.TEXTURE0+te);const Re=wt.getPrimaries(wt.workingColorSpace),Ue=A.colorSpace===yr?null:wt.getPrimaries(A.colorSpace),ft=A.colorSpace===yr||Re===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let we=b(A.image,!1,a.maxTextureSize);we=xt(A,we);const Oe=c.convert(A.format,A.colorSpace),Qe=c.convert(A.type);let rt=P(A.internalFormat,Oe,Qe,A.colorSpace,A.isVideoTexture);j(_e,A);let Be;const gt=A.mipmaps,ct=A.isVideoTexture!==!0,Nt=Ge.__version===void 0||ye===!0,q=me.dataReady,Ne=Y(A,we);if(A.isDepthTexture)rt=C(A.format===Ys,A.type),Nt&&(ct?n.texStorage2D(r.TEXTURE_2D,1,rt,we.width,we.height):n.texImage2D(r.TEXTURE_2D,0,rt,we.width,we.height,0,Oe,Qe,null));else if(A.isDataTexture)if(gt.length>0){ct&&Nt&&n.texStorage2D(r.TEXTURE_2D,Ne,rt,gt[0].width,gt[0].height);for(let ce=0,xe=gt.length;ce<xe;ce++)Be=gt[ce],ct?q&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,Be.width,Be.height,Oe,Qe,Be.data):n.texImage2D(r.TEXTURE_2D,ce,rt,Be.width,Be.height,0,Oe,Qe,Be.data);A.generateMipmaps=!1}else ct?(Nt&&n.texStorage2D(r.TEXTURE_2D,Ne,rt,we.width,we.height),q&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,Oe,Qe,we.data)):n.texImage2D(r.TEXTURE_2D,0,rt,we.width,we.height,0,Oe,Qe,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,rt,gt[0].width,gt[0].height,we.depth);for(let ce=0,xe=gt.length;ce<xe;ce++)if(Be=gt[ce],A.format!==hi)if(Oe!==null)if(ct){if(q)if(A.layerUpdates.size>0){const Ie=Vm(Be.width,Be.height,A.format,A.type);for(const De of A.layerUpdates){const ut=Be.data.subarray(De*Ie/Be.data.BYTES_PER_ELEMENT,(De+1)*Ie/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,De,Be.width,Be.height,1,Oe,ut)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,we.depth,Oe,Be.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,rt,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?q&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,we.depth,Oe,Qe,Be.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ce,rt,Be.width,Be.height,we.depth,0,Oe,Qe,Be.data)}else{ct&&Nt&&n.texStorage2D(r.TEXTURE_2D,Ne,rt,gt[0].width,gt[0].height);for(let ce=0,xe=gt.length;ce<xe;ce++)Be=gt[ce],A.format!==hi?Oe!==null?ct?q&&n.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(r.TEXTURE_2D,ce,rt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?q&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,Be.width,Be.height,Oe,Qe,Be.data):n.texImage2D(r.TEXTURE_2D,ce,rt,Be.width,Be.height,0,Oe,Qe,Be.data)}else if(A.isDataArrayTexture)if(ct){if(Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,rt,we.width,we.height,we.depth),q)if(A.layerUpdates.size>0){const ce=Vm(we.width,we.height,A.format,A.type);for(const xe of A.layerUpdates){const Ie=we.data.subarray(xe*ce/we.data.BYTES_PER_ELEMENT,(xe+1)*ce/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,we.width,we.height,1,Oe,Qe,Ie)}A.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Oe,Qe,we.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,rt,we.width,we.height,we.depth,0,Oe,Qe,we.data);else if(A.isData3DTexture)ct?(Nt&&n.texStorage3D(r.TEXTURE_3D,Ne,rt,we.width,we.height,we.depth),q&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Oe,Qe,we.data)):n.texImage3D(r.TEXTURE_3D,0,rt,we.width,we.height,we.depth,0,Oe,Qe,we.data);else if(A.isFramebufferTexture){if(Nt)if(ct)n.texStorage2D(r.TEXTURE_2D,Ne,rt,we.width,we.height);else{let ce=we.width,xe=we.height;for(let Ie=0;Ie<Ne;Ie++)n.texImage2D(r.TEXTURE_2D,Ie,rt,ce,xe,0,Oe,Qe,null),ce>>=1,xe>>=1}}else if(gt.length>0){if(ct&&Nt){const ce=ke(gt[0]);n.texStorage2D(r.TEXTURE_2D,Ne,rt,ce.width,ce.height)}for(let ce=0,xe=gt.length;ce<xe;ce++)Be=gt[ce],ct?q&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,Oe,Qe,Be):n.texImage2D(r.TEXTURE_2D,ce,rt,Oe,Qe,Be);A.generateMipmaps=!1}else if(ct){if(Nt){const ce=ke(we);n.texStorage2D(r.TEXTURE_2D,Ne,rt,ce.width,ce.height)}q&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Qe,we)}else n.texImage2D(r.TEXTURE_2D,0,rt,Oe,Qe,we);S(A)&&v(_e),Ge.__version=me.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Z(U,A,te){if(A.image.length!==6)return;const _e=ve(U,A),ye=A.source;n.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+te);const me=s.get(ye);if(ye.version!==me.__version||_e===!0){n.activeTexture(r.TEXTURE0+te);const Ge=wt.getPrimaries(wt.workingColorSpace),Re=A.colorSpace===yr?null:wt.getPrimaries(A.colorSpace),Ue=A.colorSpace===yr||Ge===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let xe=0;xe<6;xe++)!ft&&!we?Oe[xe]=b(A.image[xe],!0,a.maxCubemapSize):Oe[xe]=we?A.image[xe].image:A.image[xe],Oe[xe]=xt(A,Oe[xe]);const Qe=Oe[0],rt=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),gt=P(A.internalFormat,rt,Be,A.colorSpace),ct=A.isVideoTexture!==!0,Nt=me.__version===void 0||_e===!0,q=ye.dataReady;let Ne=Y(A,Qe);j(r.TEXTURE_CUBE_MAP,A);let ce;if(ft){ct&&Nt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,gt,Qe.width,Qe.height);for(let xe=0;xe<6;xe++){ce=Oe[xe].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){const De=ce[Ie];A.format!==hi?rt!==null?ct?q&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,De.width,De.height,rt,De.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,gt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?q&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,De.width,De.height,rt,Be,De.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,gt,De.width,De.height,0,rt,Be,De.data)}}}else{if(ce=A.mipmaps,ct&&Nt){ce.length>0&&Ne++;const xe=ke(Oe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,gt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(we){ct?q&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe[xe].width,Oe[xe].height,rt,Be,Oe[xe].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,gt,Oe[xe].width,Oe[xe].height,0,rt,Be,Oe[xe].data);for(let Ie=0;Ie<ce.length;Ie++){const ut=ce[Ie].image[xe].image;ct?q&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,ut.width,ut.height,rt,Be,ut.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,gt,ut.width,ut.height,0,rt,Be,ut.data)}}else{ct?q&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,rt,Be,Oe[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,gt,rt,Be,Oe[xe]);for(let Ie=0;Ie<ce.length;Ie++){const De=ce[Ie];ct?q&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,rt,Be,De.image[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,gt,rt,Be,De.image[xe])}}}S(A)&&v(r.TEXTURE_CUBE_MAP),me.__version=ye.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function le(U,A,te,_e,ye,me){const Ge=c.convert(te.format,te.colorSpace),Re=c.convert(te.type),Ue=P(te.internalFormat,Ge,Re,te.colorSpace),ft=s.get(A),we=s.get(te);if(we.__renderTarget=A,!ft.__hasExternalTextures){const Oe=Math.max(1,A.width>>me),Qe=Math.max(1,A.height>>me);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?n.texImage3D(ye,me,Ue,Oe,Qe,A.depth,0,Ge,Re,null):n.texImage2D(ye,me,Ue,Oe,Qe,0,Ge,Re,null)}n.bindFramebuffer(r.FRAMEBUFFER,U),nt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ye,we.__webglTexture,0,it(A)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,ye,we.__webglTexture,me),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(U,A,te){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer){const _e=A.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,me=C(A.stencilBuffer,ye),Ge=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=it(A);nt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,me,A.width,A.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,me,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,me,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,U)}else{const _e=A.textures;for(let ye=0;ye<_e.length;ye++){const me=_e[ye],Ge=c.convert(me.format,me.colorSpace),Re=c.convert(me.type),Ue=P(me.internalFormat,Ge,Re,me.colorSpace),ft=it(A);te&&nt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,Ue,A.width,A.height):nt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,Ue,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(A.depthTexture);_e.__renderTarget=A,(!_e.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ge(A.depthTexture,0);const ye=_e.__webglTexture,me=it(A);if(A.depthTexture.format===Hs)nt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(A.depthTexture.format===Ys)nt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Te(U){const A=s.get(U),te=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const _e=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=_e}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");pe(A.__webglFramebuffer,U)}else if(te){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=r.createRenderbuffer(),ie(A.__webglDepthbuffer[_e],U,!1);else{const ye=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,me)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),ie(A.__webglDepthbuffer,U,!1);else{const _e=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ye)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(U,A,te){const _e=s.get(U);A!==void 0&&le(_e.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Te(U)}function Je(U){const A=U.texture,te=s.get(U),_e=s.get(A);U.addEventListener("dispose",O);const ye=U.textures,me=U.isWebGLCubeRenderTarget===!0,Ge=ye.length>1;if(Ge||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=A.version,u.memory.textures++),me){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)te.__webglFramebuffer[Re][Ue]=r.createFramebuffer()}else te.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)te.__webglFramebuffer[Re]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Re=0,Ue=ye.length;Re<Ue;Re++){const ft=s.get(ye[Re]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),u.memory.textures++)}if(U.samples>0&&nt(U)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const Ue=ye[Re];te.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const ft=c.convert(Ue.format,Ue.colorSpace),we=c.convert(Ue.type),Oe=P(Ue.internalFormat,ft,we,Ue.colorSpace,U.isXRRenderTarget===!0),Qe=it(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Oe,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(te.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){n.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),j(r.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)le(te.__webglFramebuffer[Re][Ue],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else le(te.__webglFramebuffer[Re],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(A)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Re=0,Ue=ye.length;Re<Ue;Re++){const ft=ye[Re],we=s.get(ft);n.bindTexture(r.TEXTURE_2D,we.__webglTexture),j(r.TEXTURE_2D,ft),le(te.__webglFramebuffer,U,ft,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),S(ft)&&v(r.TEXTURE_2D)}n.unbindTexture()}else{let Re=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Re,_e.__webglTexture),j(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)le(te.__webglFramebuffer[Ue],U,A,r.COLOR_ATTACHMENT0,Re,Ue);else le(te.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,Re,0);S(A)&&v(Re),n.unbindTexture()}U.depthBuffer&&Te(U)}function Ke(U){const A=U.textures;for(let te=0,_e=A.length;te<_e;te++){const ye=A[te];if(S(ye)){const me=L(U),Ge=s.get(ye).__webglTexture;n.bindTexture(me,Ge),v(me),n.unbindTexture()}}}const lt=[],z=[];function Rt(U){if(U.samples>0){if(nt(U)===!1){const A=U.textures,te=U.width,_e=U.height;let ye=r.COLOR_BUFFER_BIT;const me=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(U),Re=A.length>1;if(Re)for(let Ue=0;Ue<A.length;Ue++)n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=s.get(A[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,te,_e,0,0,te,_e,ye,r.NEAREST),h===!0&&(lt.length=0,z.length=0,lt.push(r.COLOR_ATTACHMENT0+Ue),U.depthBuffer&&U.resolveDepthBuffer===!1&&(lt.push(me),z.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<A.length;Ue++){n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=s.get(A[Ue]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,ft,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const A=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function it(U){return Math.min(a.maxSamples,U.samples)}function nt(U){const A=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ve(U){const A=u.render.frame;_.get(U)!==A&&(_.set(U,A),U.update())}function xt(U,A){const te=U.colorSpace,_e=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==$s&&te!==yr&&(wt.getTransfer(te)===Dt?(_e!==hi||ye!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function ke(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=ne,this.resetTextureUnits=ae,this.setTexture2D=ge,this.setTexture2DArray=ue,this.setTexture3D=fe,this.setTextureCube=G,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=le,this.useMultisampledRTT=nt}function j1(r,e){function n(s,a=yr){let c;const u=wt.getTransfer(a);if(s===ji)return r.UNSIGNED_BYTE;if(s===$d)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===zg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===kg)return r.BYTE;if(s===Og)return r.SHORT;if(s===Ho)return r.UNSIGNED_SHORT;if(s===qd)return r.INT;if(s===Jr)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===Vo)return r.HALF_FLOAT;if(s===Bg)return r.ALPHA;if(s===Hg)return r.RGB;if(s===hi)return r.RGBA;if(s===Vg)return r.LUMINANCE;if(s===Gg)return r.LUMINANCE_ALPHA;if(s===Hs)return r.DEPTH_COMPONENT;if(s===Ys)return r.DEPTH_STENCIL;if(s===jg)return r.RED;if(s===Zd)return r.RED_INTEGER;if(s===Wg)return r.RG;if(s===Jd)return r.RG_INTEGER;if(s===Qd)return r.RGBA_INTEGER;if(s===Tl||s===bl||s===Al||s===Cl)if(u===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Tl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Tl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Al)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===md||s===gd||s===vd||s===xd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d||s===yd||s===Sd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_d||s===yd)return u===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Sd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Md||s===wd||s===Ed||s===Td||s===bd||s===Ad||s===Cd||s===Rd||s===Nd||s===Pd||s===Ld||s===Dd||s===Id||s===Ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Md)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ed)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Td)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ad)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ld)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Id)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ud)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rl||s===Fd||s===kd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Rl)return u===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xg||s===Od||s===zd||s===Bd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Rl)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xs?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}class W1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X1={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,c=null,u=null;const d=this._targetRay,h=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const b of e.hand.values()){const S=n.getJointPose(b,s),v=this._getHandJoint(g,b);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=g.joints["index-finger-tip"],y=g.joints["thumb-tip"],x=_.position.distanceTo(y.position),M=.02,E=.005;g.inputState.pinching&&x>M+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=M-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(X1)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new zo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
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

}`;class $1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,s){if(this.texture===null){const a=new Mn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=s.depthNear||n.depthFar!=s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Er({vertexShader:Y1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Ol(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K1 extends Ks{constructor(e,n){super();const s=this;let a=null,c=1,u=null,d="local-floor",h=1,g=null,_=null,y=null,x=null,M=null,E=null;const b=new $1,S=n.getContextAttributes();let v=null,L=null;const P=[],C=[],Y=new Pt;let k=null;const O=new Zn;O.viewport=new Wt;const V=new Zn;V.viewport=new Wt;const D=[O,V],R=new W1;let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=P[X];return Z===void 0&&(Z=new Qu,P[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=P[X];return Z===void 0&&(Z=new Qu,P[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=P[X];return Z===void 0&&(Z=new Qu,P[X]=Z),Z.getHandSpace()};function ne(X){const Z=C.indexOf(X.inputSource);if(Z===-1)return;const le=P[Z];le!==void 0&&(le.update(X.inputSource,X.frame,g||u),le.dispatchEvent({type:X.type,data:X.inputSource}))}function he(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",he),a.removeEventListener("inputsourceschange",ge);for(let X=0;X<P.length;X++){const Z=C[X];Z!==null&&(C[X]=null,P[X].disconnect(Z))}B=null,ae=null,b.reset(),e.setRenderTarget(v),M=null,x=null,y=null,a=null,L=null,ve.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(Y.width,Y.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(X){g=X},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",he),a.addEventListener("inputsourceschange",ge),S.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const Z={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,Z),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Qr(M.framebufferWidth,M.framebufferHeight,{format:hi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let Z=null,le=null,ie=null;S.depth&&(ie=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=S.stencil?Ys:Hs,le=S.stencil?Xs:Jr);const pe={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(pe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Qr(x.textureWidth,x.textureHeight,{format:hi,type:ji,depthTexture:new a0(x.textureWidth,x.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),g=null,u=await a.requestReferenceSpace(d),ve.setContext(a),ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ge(X){for(let Z=0;Z<X.removed.length;Z++){const le=X.removed[Z],ie=C.indexOf(le);ie>=0&&(C[ie]=null,P[ie].disconnect(le))}for(let Z=0;Z<X.added.length;Z++){const le=X.added[Z];let ie=C.indexOf(le);if(ie===-1){for(let Te=0;Te<P.length;Te++)if(Te>=C.length){C.push(le),ie=Te;break}else if(C[Te]===null){C[Te]=le,ie=Te;break}if(ie===-1)break}const pe=P[ie];pe&&pe.connect(le)}}const ue=new Q,fe=new Q;function G(X,Z,le){ue.setFromMatrixPosition(Z.matrixWorld),fe.setFromMatrixPosition(le.matrixWorld);const ie=ue.distanceTo(fe),pe=Z.projectionMatrix.elements,Te=le.projectionMatrix.elements,Le=pe[14]/(pe[10]-1),Je=pe[14]/(pe[10]+1),Ke=(pe[9]+1)/pe[5],lt=(pe[9]-1)/pe[5],z=(pe[8]-1)/pe[0],Rt=(Te[8]+1)/Te[0],it=Le*z,nt=Le*Rt,Ve=ie/(-z+Rt),xt=Ve*-z;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(Ve),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pe[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ke=Le+Ve,U=Je+Ve,A=it-xt,te=nt+(ie-xt),_e=Ke*Je/U*ke,ye=lt*Je/U*ke;X.projectionMatrix.makePerspective(A,te,_e,ye,ke,U),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function de(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let Z=X.near,le=X.far;b.texture!==null&&(b.depthNear>0&&(Z=b.depthNear),b.depthFar>0&&(le=b.depthFar)),R.near=V.near=O.near=Z,R.far=V.far=O.far=le,(B!==R.near||ae!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,ae=R.far),O.layers.mask=X.layers.mask|2,V.layers.mask=X.layers.mask|4,R.layers.mask=O.layers.mask|V.layers.mask;const ie=X.parent,pe=R.cameras;de(R,ie);for(let Te=0;Te<pe.length;Te++)de(pe[Te],ie);pe.length===2?G(R,O,V):R.projectionMatrix.copy(O.projectionMatrix),I(X,R,ie)};function I(X,Z,le){le===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(X){h=X,x!==null&&(x.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let w=null;function j(X,Z){if(_=Z.getViewerPose(g||u),E=Z,_!==null){const le=_.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let ie=!1;le.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let Te=0;Te<le.length;Te++){const Le=le[Te];let Je=null;if(M!==null)Je=M.getViewport(Le);else{const lt=y.getViewSubImage(x,Le);Je=lt.viewport,Te===0&&(e.setRenderTargetTextures(L,lt.colorTexture,x.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(L))}let Ke=D[Te];Ke===void 0&&(Ke=new Zn,Ke.layers.enable(Te),Ke.viewport=new Wt,D[Te]=Ke),Ke.matrix.fromArray(Le.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Le.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Je.x,Je.y,Je.width,Je.height),Te===0&&(R.matrix.copy(Ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push(Ke)}const pe=a.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const Te=y.getDepthInformation(le[0]);Te&&Te.isValid&&Te.texture&&b.init(e,Te,a.renderState)}}for(let le=0;le<P.length;le++){const ie=C[le],pe=P[le];ie!==null&&pe!==void 0&&pe.update(ie,Z,g||u)}w&&w(X,Z),Z.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Z}),E=null}const ve=new o0;ve.setAnimationLoop(j),this.setAnimationLoop=function(X){w=X},this.dispose=function(){}}}const Wr=new Wi,Z1=new Xt;function J1(r,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,n0(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function a(S,v,L,P,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),y(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,C)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),b(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?h(S,v,L,P):v.isSpriteMaterial?g(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Dn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Dn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),P=L.envMap,C=L.envMapRotation;P&&(S.envMap.value=P,Wr.copy(C),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),S.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(Wr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,L,P){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=P*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function y(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Dn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function b(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function Q1(r,e,n,s){let a={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,P){const C=P.program;s.uniformBlockBinding(L,C)}function g(L,P){let C=a[L.id];C===void 0&&(E(L),C=_(L),a[L.id]=C,L.addEventListener("dispose",S));const Y=P.program;s.updateUBOMapping(L,Y);const k=e.render.frame;c[L.id]!==k&&(x(L),c[L.id]=k)}function _(L){const P=y();L.__bindingPointIndex=P;const C=r.createBuffer(),Y=L.__size,k=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,Y,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,C),C}function y(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const P=a[L.id],C=L.uniforms,Y=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let k=0,O=C.length;k<O;k++){const V=Array.isArray(C[k])?C[k]:[C[k]];for(let D=0,R=V.length;D<R;D++){const B=V[D];if(M(B,k,D,Y)===!0){const ae=B.__offset,ne=Array.isArray(B.value)?B.value:[B.value];let he=0;for(let ge=0;ge<ne.length;ge++){const ue=ne[ge],fe=b(ue);typeof ue=="number"||typeof ue=="boolean"?(B.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,ae+he,B.__data)):ue.isMatrix3?(B.__data[0]=ue.elements[0],B.__data[1]=ue.elements[1],B.__data[2]=ue.elements[2],B.__data[3]=0,B.__data[4]=ue.elements[3],B.__data[5]=ue.elements[4],B.__data[6]=ue.elements[5],B.__data[7]=0,B.__data[8]=ue.elements[6],B.__data[9]=ue.elements[7],B.__data[10]=ue.elements[8],B.__data[11]=0):(ue.toArray(B.__data,he),he+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ae,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(L,P,C,Y){const k=L.value,O=P+"_"+C;if(Y[O]===void 0)return typeof k=="number"||typeof k=="boolean"?Y[O]=k:Y[O]=k.clone(),!0;{const V=Y[O];if(typeof k=="number"||typeof k=="boolean"){if(V!==k)return Y[O]=k,!0}else if(V.equals(k)===!1)return V.copy(k),!0}return!1}function E(L){const P=L.uniforms;let C=0;const Y=16;for(let O=0,V=P.length;O<V;O++){const D=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,B=D.length;R<B;R++){const ae=D[R],ne=Array.isArray(ae.value)?ae.value:[ae.value];for(let he=0,ge=ne.length;he<ge;he++){const ue=ne[he],fe=b(ue),G=C%Y,de=G%fe.boundary,I=G+de;C+=de,I!==0&&Y-I<fe.storage&&(C+=Y-I),ae.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=C,C+=fe.storage}}}const k=C%Y;return k>0&&(C+=Y-k),L.__size=C,L.__cache={},this}function b(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function S(L){const P=L.target;P.removeEventListener("dispose",S);const C=u.indexOf(P.__bindingPointIndex);u.splice(C,1),r.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function v(){for(const L in a)r.deleteBuffer(a[L]);u=[],a={},c={}}return{bind:h,update:g,dispose:v}}class eE{constructor(e={}){const{canvas:n=H_(),context:s=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,v=null;const L=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mr,this.toneMappingExposure=1;const C=this;let Y=!1,k=0,O=0,V=null,D=-1,R=null;const B=new Wt,ae=new Wt;let ne=null;const he=new At(0);let ge=0,ue=n.width,fe=n.height,G=1,de=null,I=null;const w=new Wt(0,0,ue,fe),j=new Wt(0,0,ue,fe);let ve=!1;const X=new s0;let Z=!1,le=!1;const ie=new Xt,pe=new Xt,Te=new Q,Le=new Wt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function lt(){return V===null?G:1}let z=s;function Rt(N,$){return n.getContext(N,$)}try{const N={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",De,!1),z===null){const $="webgl2";if(z=Rt($,N),z===null)throw Rt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let it,nt,Ve,xt,ke,U,A,te,_e,ye,me,Ge,Re,Ue,ft,we,Oe,Qe,rt,Be,gt,ct,Nt,q;function Ne(){it=new sw(z),it.init(),ct=new j1(z,it),nt=new JM(z,it,e,ct),Ve=new H1(z,it),nt.reverseDepthBuffer&&x&&Ve.buffers.depth.setReversed(!0),xt=new lw(z),ke=new b1,U=new G1(z,it,Ve,ke,nt,ct,xt),A=new ew(C),te=new rw(C),_e=new py(z),Nt=new KM(z,_e),ye=new ow(z,_e,xt,Nt),me=new uw(z,ye,_e,xt),rt=new cw(z,nt,U),we=new QM(ke),Ge=new T1(C,A,te,it,nt,Nt,we),Re=new J1(C,ke),Ue=new C1,ft=new I1(it),Qe=new $M(C,A,te,Ve,me,M,h),Oe=new z1(C,me,nt),q=new Q1(z,xt,nt,Ve),Be=new ZM(z,it,xt),gt=new aw(z,it,xt),xt.programs=Ge.programs,C.capabilities=nt,C.extensions=it,C.properties=ke,C.renderLists=Ue,C.shadowMap=Oe,C.state=Ve,C.info=xt}Ne();const ce=new K1(C,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const N=it.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=it.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(N){N!==void 0&&(G=N,this.setSize(ue,fe,!1))},this.getSize=function(N){return N.set(ue,fe)},this.setSize=function(N,$,se=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=N,fe=$,n.width=Math.floor(N*G),n.height=Math.floor($*G),se===!0&&(n.style.width=N+"px",n.style.height=$+"px"),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(ue*G,fe*G).floor()},this.setDrawingBufferSize=function(N,$,se){ue=N,fe=$,G=se,n.width=Math.floor(N*se),n.height=Math.floor($*se),this.setViewport(0,0,N,$)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(w)},this.setViewport=function(N,$,se,oe){N.isVector4?w.set(N.x,N.y,N.z,N.w):w.set(N,$,se,oe),Ve.viewport(B.copy(w).multiplyScalar(G).round())},this.getScissor=function(N){return N.copy(j)},this.setScissor=function(N,$,se,oe){N.isVector4?j.set(N.x,N.y,N.z,N.w):j.set(N,$,se,oe),Ve.scissor(ae.copy(j).multiplyScalar(G).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(N){Ve.setScissorTest(ve=N)},this.setOpaqueSort=function(N){de=N},this.setTransparentSort=function(N){I=N},this.getClearColor=function(N){return N.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(N=!0,$=!0,se=!0){let oe=0;if(N){let K=!1;if(V!==null){const Ce=V.texture.format;K=Ce===Qd||Ce===Jd||Ce===Zd}if(K){const Ce=V.texture.type,be=Ce===ji||Ce===Jr||Ce===Ho||Ce===Xs||Ce===$d||Ce===Kd,Xe=Qe.getClearColor(),je=Qe.getClearAlpha(),st=Xe.r,at=Xe.g,Ye=Xe.b;be?(E[0]=st,E[1]=at,E[2]=Ye,E[3]=je,z.clearBufferuiv(z.COLOR,0,E)):(b[0]=st,b[1]=at,b[2]=Ye,b[3]=je,z.clearBufferiv(z.COLOR,0,b))}else oe|=z.COLOR_BUFFER_BIT}$&&(oe|=z.DEPTH_BUFFER_BIT),se&&(oe|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Ue.dispose(),ft.dispose(),ke.dispose(),A.dispose(),te.dispose(),me.dispose(),Nt.dispose(),q.dispose(),Ge.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ts),ce.removeEventListener("sessionend",Xi),wi.stop()};function xe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const N=xt.autoReset,$=Oe.enabled,se=Oe.autoUpdate,oe=Oe.needsUpdate,K=Oe.type;Ne(),xt.autoReset=N,Oe.enabled=$,Oe.autoUpdate=se,Oe.needsUpdate=oe,Oe.type=K}function De(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ut(N){const $=N.target;$.removeEventListener("dispose",ut),Ft($)}function Ft(N){$t(N),ke.remove(N)}function $t(N){const $=ke.get(N).programs;$!==void 0&&($.forEach(function(se){Ge.releaseProgram(se)}),N.isShaderMaterial&&Ge.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,se,oe,K,Ce){$===null&&($=Je);const be=K.isMesh&&K.matrixWorld.determinant()<0,Xe=Zo(N,$,se,oe,K);Ve.setMaterial(oe,be);let je=se.index,st=1;if(oe.wireframe===!0){if(je=ye.getWireframeAttribute(se),je===void 0)return;st=2}const at=se.drawRange,Ye=se.attributes.position;let yt=at.start*st,Ct=(at.start+at.count)*st;Ce!==null&&(yt=Math.max(yt,Ce.start*st),Ct=Math.min(Ct,(Ce.start+Ce.count)*st)),je!==null?(yt=Math.max(yt,0),Ct=Math.min(Ct,je.count)):Ye!=null&&(yt=Math.max(yt,0),Ct=Math.min(Ct,Ye.count));const _t=Ct-yt;if(_t<0||_t===1/0)return;Nt.setup(K,oe,Xe,se,je);let ln,ht=Be;if(je!==null&&(ln=_e.get(je),ht=gt,ht.setIndex(ln)),K.isMesh)oe.wireframe===!0?(Ve.setLineWidth(oe.wireframeLinewidth*lt()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(K.isLine){let Ze=oe.linewidth;Ze===void 0&&(Ze=1),Ve.setLineWidth(Ze*lt()),K.isLineSegments?ht.setMode(z.LINES):K.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else K.isPoints?ht.setMode(z.POINTS):K.isSprite&&ht.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ht.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ht.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ze=K._multiDrawStarts,ti=K._multiDrawCounts,Tt=K._multiDrawCount,cn=je?_e.get(je).bytesPerElement:1,ni=ke.get(oe).currentProgram.getUniforms();for(let Kt=0;Kt<Tt;Kt++)ni.setValue(z,"_gl_DrawID",Kt),ht.render(Ze[Kt]/cn,ti[Kt])}else if(K.isInstancedMesh)ht.renderInstances(yt,_t,K.count);else if(se.isInstancedBufferGeometry){const Ze=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ti=Math.min(se.instanceCount,Ze);ht.renderInstances(yt,_t,ti)}else ht.render(yt,_t)};function St(N,$,se){N.transparent===!0&&N.side===Bi&&N.forceSinglePass===!1?(N.side=Dn,N.needsUpdate=!0,ns(N,$,se),N.side=wr,N.needsUpdate=!0,ns(N,$,se),N.side=Bi):ns(N,$,se)}this.compile=function(N,$,se=null){se===null&&(se=N),v=ft.get(se),v.init($),P.push(v),se.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),N!==se&&N.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const oe=new Set;return N.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let be=0;be<Ce.length;be++){const Xe=Ce[be];St(Xe,se,K),oe.add(Xe)}else St(Ce,se,K),oe.add(Ce)}),P.pop(),v=null,oe},this.compileAsync=function(N,$,se=null){const oe=this.compile(N,$,se);return new Promise(K=>{function Ce(){if(oe.forEach(function(be){ke.get(be).currentProgram.isReady()&&oe.delete(be)}),oe.size===0){K(N);return}setTimeout(Ce,10)}it.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let wn=null;function vn(N){wn&&wn(N)}function ts(){wi.stop()}function Xi(){wi.start()}const wi=new o0;wi.setAnimationLoop(vn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(N){wn=N,ce.setAnimationLoop(N),N===null?wi.stop():wi.start()},ce.addEventListener("sessionstart",ts),ce.addEventListener("sessionend",Xi),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera($),$=ce.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,$,V),v=ft.get(N,P.length),v.init($),P.push(v),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X.setFromProjectionMatrix(pe),le=this.localClippingEnabled,Z=we.init(this.clippingPlanes,le),S=Ue.get(N,L.length),S.init(),L.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Ce=C.xr.getDepthSensingMesh();Ce!==null&&Ei(Ce,$,-1/0,C.sortObjects)}Ei(N,$,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(de,I),Ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ke&&Qe.addToRenderList(S,N),this.info.render.frame++,Z===!0&&we.beginShadows();const se=v.state.shadowsArray;Oe.render(se,N,$),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=S.opaque,K=S.transmissive;if(v.setupLights(),$.isArrayCamera){const Ce=$.cameras;if(K.length>0)for(let be=0,Xe=Ce.length;be<Xe;be++){const je=Ce[be];br(oe,K,N,je)}Ke&&Qe.render(N);for(let be=0,Xe=Ce.length;be<Xe;be++){const je=Ce[be];Tr(S,N,je,je.viewport)}}else K.length>0&&br(oe,K,N,$),Ke&&Qe.render(N),Tr(S,N,$);V!==null&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),N.isScene===!0&&N.onAfterRender(C,N,$),Nt.resetDefaultState(),D=-1,R=null,P.pop(),P.length>0?(v=P[P.length-1],Z===!0&&we.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ei(N,$,se,oe){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)se=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||X.intersectsSprite(N)){oe&&Le.setFromMatrixPosition(N.matrixWorld).applyMatrix4(pe);const be=me.update(N),Xe=N.material;Xe.visible&&S.push(N,be,Xe,se,Le.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||X.intersectsObject(N))){const be=me.update(N),Xe=N.material;if(oe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Le.copy(N.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Le.copy(be.boundingSphere.center)),Le.applyMatrix4(N.matrixWorld).applyMatrix4(pe)),Array.isArray(Xe)){const je=be.groups;for(let st=0,at=je.length;st<at;st++){const Ye=je[st],yt=Xe[Ye.materialIndex];yt&&yt.visible&&S.push(N,be,yt,se,Le.z,Ye)}}else Xe.visible&&S.push(N,be,Xe,se,Le.z,null)}}const Ce=N.children;for(let be=0,Xe=Ce.length;be<Xe;be++)Ei(Ce[be],$,se,oe)}function Tr(N,$,se,oe){const K=N.opaque,Ce=N.transmissive,be=N.transparent;v.setupLightsView(se),Z===!0&&we.setGlobalState(C.clippingPlanes,se),oe&&Ve.viewport(B.copy(oe)),K.length>0&&Yi(K,$,se),Ce.length>0&&Yi(Ce,$,se),be.length>0&&Yi(be,$,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function br(N,$,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[oe.id]===void 0&&(v.state.transmissionRenderTarget[oe.id]=new Qr(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Vo:ji,minFilter:Zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ce=v.state.transmissionRenderTarget[oe.id],be=oe.viewport||B;Ce.setSize(be.z,be.w);const Xe=C.getRenderTarget();C.setRenderTarget(Ce),C.getClearColor(he),ge=C.getClearAlpha(),ge<1&&C.setClearColor(16777215,.5),C.clear(),Ke&&Qe.render(se);const je=C.toneMapping;C.toneMapping=Mr;const st=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),v.setupLightsView(oe),Z===!0&&we.setGlobalState(C.clippingPlanes,oe),Yi(N,se,oe),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),it.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ye=0,yt=$.length;Ye<yt;Ye++){const Ct=$[Ye],_t=Ct.object,ln=Ct.geometry,ht=Ct.material,Ze=Ct.group;if(ht.side===Bi&&_t.layers.test(oe.layers)){const ti=ht.side;ht.side=Dn,ht.needsUpdate=!0,$o(_t,se,oe,ln,ht,Ze),ht.side=ti,ht.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}C.setRenderTarget(Xe),C.setClearColor(he,ge),st!==void 0&&(oe.viewport=st),C.toneMapping=je}function Yi(N,$,se){const oe=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Ce=N.length;K<Ce;K++){const be=N[K],Xe=be.object,je=be.geometry,st=oe===null?be.material:oe,at=be.group;Xe.layers.test(se.layers)&&$o(Xe,$,se,je,st,at)}}function $o(N,$,se,oe,K,Ce){N.onBeforeRender(C,$,se,oe,K,Ce),N.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),K.onBeforeRender(C,$,se,oe,N,Ce),K.transparent===!0&&K.side===Bi&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,C.renderBufferDirect(se,$,oe,K,N,Ce),K.side=wr,K.needsUpdate=!0,C.renderBufferDirect(se,$,oe,K,N,Ce),K.side=Bi):C.renderBufferDirect(se,$,oe,K,N,Ce),N.onAfterRender(C,$,se,oe,K,Ce)}function ns(N,$,se){$.isScene!==!0&&($=Je);const oe=ke.get(N),K=v.state.lights,Ce=v.state.shadowsArray,be=K.state.version,Xe=Ge.getParameters(N,K.state,Ce,$,se),je=Ge.getProgramCacheKey(Xe);let st=oe.programs;oe.environment=N.isMeshStandardMaterial?$.environment:null,oe.fog=$.fog,oe.envMap=(N.isMeshStandardMaterial?te:A).get(N.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,st===void 0&&(N.addEventListener("dispose",ut),st=new Map,oe.programs=st);let at=st.get(je);if(at!==void 0){if(oe.currentProgram===at&&oe.lightsStateVersion===be)return mi(N,Xe),at}else Xe.uniforms=Ge.getUniforms(N),N.onBeforeCompile(Xe,C),at=Ge.acquireProgram(Xe,je),st.set(je,at),oe.uniforms=Xe.uniforms;const Ye=oe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ye.clippingPlanes=we.uniform),mi(N,Xe),oe.needsLights=Bl(N),oe.lightsStateVersion=be,oe.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),oe.currentProgram=at,oe.uniformsList=null,at}function Ko(N){if(N.uniformsList===null){const $=N.currentProgram.getUniforms();N.uniformsList=Nl.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function mi(N,$){const se=ke.get(N);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Zo(N,$,se,oe,K){$.isScene!==!0&&($=Je),U.resetTextureUnits();const Ce=$.fog,be=oe.isMeshStandardMaterial?$.environment:null,Xe=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:$s,je=(oe.isMeshStandardMaterial?te:A).get(oe.envMap||be),st=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ye=!!se.morphAttributes.position,yt=!!se.morphAttributes.normal,Ct=!!se.morphAttributes.color;let _t=Mr;oe.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_t=C.toneMapping);const ln=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ht=ln!==void 0?ln.length:0,Ze=ke.get(oe),ti=v.state.lights;if(Z===!0&&(le===!0||N!==R)){const xn=N===R&&oe.id===D;we.setState(oe,N,xn)}let Tt=!1;oe.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ti.state.version||Ze.outputColorSpace!==Xe||K.isBatchedMesh&&Ze.batching===!1||!K.isBatchedMesh&&Ze.batching===!0||K.isBatchedMesh&&Ze.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ze.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ze.instancing===!1||!K.isInstancedMesh&&Ze.instancing===!0||K.isSkinnedMesh&&Ze.skinning===!1||!K.isSkinnedMesh&&Ze.skinning===!0||K.isInstancedMesh&&Ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ze.instancingMorph===!1&&K.morphTexture!==null||Ze.envMap!==je||oe.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==we.numPlanes||Ze.numIntersection!==we.numIntersection)||Ze.vertexAlphas!==st||Ze.vertexTangents!==at||Ze.morphTargets!==Ye||Ze.morphNormals!==yt||Ze.morphColors!==Ct||Ze.toneMapping!==_t||Ze.morphTargetsCount!==ht)&&(Tt=!0):(Tt=!0,Ze.__version=oe.version);let cn=Ze.currentProgram;Tt===!0&&(cn=ns(oe,$,K));let ni=!1,Kt=!1,gi=!1;const It=cn.getUniforms(),Hn=Ze.uniforms;if(Ve.useProgram(cn.program)&&(ni=!0,Kt=!0,gi=!0),oe.id!==D&&(D=oe.id,Kt=!0),ni||R!==N){Ve.buffers.depth.getReversed()?(ie.copy(N.projectionMatrix),G_(ie),j_(ie),It.setValue(z,"projectionMatrix",ie)):It.setValue(z,"projectionMatrix",N.projectionMatrix),It.setValue(z,"viewMatrix",N.matrixWorldInverse);const Vn=It.map.cameraPosition;Vn!==void 0&&Vn.setValue(z,Te.setFromMatrixPosition(N.matrixWorld)),nt.logarithmicDepthBuffer&&It.setValue(z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&It.setValue(z,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,Kt=!0,gi=!0)}if(K.isSkinnedMesh){It.setOptional(z,K,"bindMatrix"),It.setOptional(z,K,"bindMatrixInverse");const xn=K.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),It.setValue(z,"boneTexture",xn.boneTexture,U))}K.isBatchedMesh&&(It.setOptional(z,K,"batchingTexture"),It.setValue(z,"batchingTexture",K._matricesTexture,U),It.setOptional(z,K,"batchingIdTexture"),It.setValue(z,"batchingIdTexture",K._indirectTexture,U),It.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&It.setValue(z,"batchingColorTexture",K._colorsTexture,U));const Ti=se.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&rt.update(K,se,cn),(Kt||Ze.receiveShadow!==K.receiveShadow)&&(Ze.receiveShadow=K.receiveShadow,It.setValue(z,"receiveShadow",K.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Hn.envMap.value=je,Hn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&$.environment!==null&&(Hn.envMapIntensity.value=$.environmentIntensity),Kt&&(It.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ze.needsLights&&Jo(Hn,gi),Ce&&oe.fog===!0&&Re.refreshFogUniforms(Hn,Ce),Re.refreshMaterialUniforms(Hn,oe,G,fe,v.state.transmissionRenderTarget[N.id]),Nl.upload(z,Ko(Ze),Hn,U)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Nl.upload(z,Ko(Ze),Hn,U),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&It.setValue(z,"center",K.center),It.setValue(z,"modelViewMatrix",K.modelViewMatrix),It.setValue(z,"normalMatrix",K.normalMatrix),It.setValue(z,"modelMatrix",K.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const xn=oe.uniformsGroups;for(let Vn=0,En=xn.length;Vn<En;Vn++){const Qo=xn[Vn];q.update(Qo,cn),q.bind(Qo,cn)}}return cn}function Jo(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Bl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(N,$,se){ke.get(N.texture).__webglTexture=$,ke.get(N.depthTexture).__webglTexture=se;const oe=ke.get(N);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,$){const se=ke.get(N);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,se=0){V=N,k=$,O=se;let oe=!0,K=null,Ce=!1,be=!1;if(N){const je=ke.get(N);if(je.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(z.FRAMEBUFFER,null),oe=!1;else if(je.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(je.__hasExternalTextures)U.rebindTextures(N,ke.get(N.texture).__webglTexture,ke.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ye=N.depthTexture;if(je.__boundDepthTexture!==Ye){if(Ye!==null&&ke.has(Ye)&&(N.width!==Ye.image.width||N.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}const st=N.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(be=!0);const at=ke.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(at[$])?K=at[$][se]:K=at[$],Ce=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?K=ke.get(N).__webglMultisampledFramebuffer:Array.isArray(at)?K=at[se]:K=at,B.copy(N.viewport),ae.copy(N.scissor),ne=N.scissorTest}else B.copy(w).multiplyScalar(G).floor(),ae.copy(j).multiplyScalar(G).floor(),ne=ve;if(Ve.bindFramebuffer(z.FRAMEBUFFER,K)&&oe&&Ve.drawBuffers(N,K),Ve.viewport(B),Ve.scissor(ae),Ve.setScissorTest(ne),Ce){const je=ke.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,se)}else if(be){const je=ke.get(N.texture),st=$||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.__webglTexture,se||0,st)}D=-1},this.readRenderTargetPixels=function(N,$,se,oe,K,Ce,be){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&be!==void 0&&(Xe=Xe[be]),Xe){Ve.bindFramebuffer(z.FRAMEBUFFER,Xe);try{const je=N.texture,st=je.format,at=je.type;if(!nt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-oe&&se>=0&&se<=N.height-K&&z.readPixels($,se,oe,K,ct.convert(st),ct.convert(at),Ce)}finally{const je=V!==null?ke.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(N,$,se,oe,K,Ce,be){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&be!==void 0&&(Xe=Xe[be]),Xe){const je=N.texture,st=je.format,at=je.type;if(!nt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=N.width-oe&&se>=0&&se<=N.height-K){Ve.bindFramebuffer(z.FRAMEBUFFER,Xe);const Ye=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ye),z.bufferData(z.PIXEL_PACK_BUFFER,Ce.byteLength,z.STREAM_READ),z.readPixels($,se,oe,K,ct.convert(st),ct.convert(at),0);const yt=V!==null?ke.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,yt);const Ct=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await V_(z,Ct,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ye),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ce),z.deleteBuffer(Ye),z.deleteSync(Ct),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,$=null,se=0){N.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,N=arguments[1]);const oe=Math.pow(2,-se),K=Math.floor(N.image.width*oe),Ce=Math.floor(N.image.height*oe),be=$!==null?$.x:0,Xe=$!==null?$.y:0;U.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,be,Xe,K,Ce),Ve.unbindTexture()},this.copyTextureToTexture=function(N,$,se=null,oe=null,K=0){N.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,N=arguments[1],$=arguments[2],K=arguments[3]||0,se=null);let Ce,be,Xe,je,st,at,Ye,yt,Ct;const _t=N.isCompressedTexture?N.mipmaps[K]:N.image;se!==null?(Ce=se.max.x-se.min.x,be=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,je=se.min.x,st=se.min.y,at=se.isBox3?se.min.z:0):(Ce=_t.width,be=_t.height,Xe=_t.depth||1,je=0,st=0,at=0),oe!==null?(Ye=oe.x,yt=oe.y,Ct=oe.z):(Ye=0,yt=0,Ct=0);const ln=ct.convert($.format),ht=ct.convert($.type);let Ze;$.isData3DTexture?(U.setTexture3D($,0),Ze=z.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(U.setTexture2DArray($,0),Ze=z.TEXTURE_2D_ARRAY):(U.setTexture2D($,0),Ze=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const ti=z.getParameter(z.UNPACK_ROW_LENGTH),Tt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),cn=z.getParameter(z.UNPACK_SKIP_PIXELS),ni=z.getParameter(z.UNPACK_SKIP_ROWS),Kt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,je),z.pixelStorei(z.UNPACK_SKIP_ROWS,st),z.pixelStorei(z.UNPACK_SKIP_IMAGES,at);const gi=N.isDataArrayTexture||N.isData3DTexture,It=$.isDataArrayTexture||$.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const Hn=ke.get(N),Ti=ke.get($),xn=ke.get(Hn.__renderTarget),Vn=ke.get(Ti.__renderTarget);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<Xe;En++)gi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(N).__webglTexture,K,at+En),N.isDepthTexture?(It&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get($).__webglTexture,K,Ct+En),z.blitFramebuffer(je,st,Ce,be,Ye,yt,Ce,be,z.DEPTH_BUFFER_BIT,z.NEAREST)):It?z.copyTexSubImage3D(Ze,K,Ye,yt,Ct+En,je,st,Ce,be):z.copyTexSubImage2D(Ze,K,Ye,yt,Ct+En,je,st,Ce,be);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else It?N.isDataTexture||N.isData3DTexture?z.texSubImage3D(Ze,K,Ye,yt,Ct,Ce,be,Xe,ln,ht,_t.data):$.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,K,Ye,yt,Ct,Ce,be,Xe,ln,_t.data):z.texSubImage3D(Ze,K,Ye,yt,Ct,Ce,be,Xe,ln,ht,_t):N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,K,Ye,yt,Ce,be,ln,ht,_t.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,K,Ye,yt,_t.width,_t.height,ln,_t.data):z.texSubImage2D(z.TEXTURE_2D,K,Ye,yt,Ce,be,ln,ht,_t);z.pixelStorei(z.UNPACK_ROW_LENGTH,ti),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,cn),z.pixelStorei(z.UNPACK_SKIP_ROWS,ni),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Kt),K===0&&$.generateMipmaps&&z.generateMipmap(Ze),Ve.unbindTexture()},this.copyTextureToTexture3D=function(N,$,se=null,oe=null,K=0){return N.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,N=arguments[2],$=arguments[3],K=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,$,se,oe,K)},this.initRenderTarget=function(N){ke.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),Ve.unbindTexture()},this.resetState=function(){k=0,O=0,V=null,Ve.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}class tE extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class f0 extends Xo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Xt,Gd=new Zg,Ml=new kl,wl=new Q;class nE extends In{constructor(e=new ei,n=new f0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const s=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ml.copy(s.boundingSphere),Ml.applyMatrix4(a),Ml.radius+=c,e.ray.intersectsSphere(Ml)===!1)return;Gm.copy(a).invert(),Gd.copy(e.ray).applyMatrix4(Gm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,g=s.index,y=s.attributes.position;if(g!==null){const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=x,b=M;E<b;E++){const S=g.getX(E);wl.fromBufferAttribute(y,S),jm(wl,S,h,a,e,n,this)}}else{const x=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let E=x,b=M;E<b;E++)wl.fromBufferAttribute(y,E),jm(wl,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function jm(r,e,n,s,a,c,u){const d=Gd.distanceSqToPoint(r);if(d<n){const h=new Q;Gd.closestPointToPoint(r,h),h.applyMatrix4(s);const g=a.ray.origin.distanceTo(h);if(g<a.near||g>a.far)return;c.push({distance:g,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class iE extends Mn{constructor(e,n,s,a,c,u,d,h,g){super(e,n,s,a,c,u,d,h,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tf extends ei{constructor(e=[],n=[],s=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:s,detail:a};const c=[],u=[];d(a),g(s),_(),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(c.slice(),3)),this.setAttribute("uv",new gn(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const P=new Q,C=new Q,Y=new Q;for(let k=0;k<n.length;k+=3)M(n[k+0],P),M(n[k+1],C),M(n[k+2],Y),h(P,C,Y,L)}function h(L,P,C,Y){const k=Y+1,O=[];for(let V=0;V<=k;V++){O[V]=[];const D=L.clone().lerp(C,V/k),R=P.clone().lerp(C,V/k),B=k-V;for(let ae=0;ae<=B;ae++)ae===0&&V===k?O[V][ae]=D:O[V][ae]=D.clone().lerp(R,ae/B)}for(let V=0;V<k;V++)for(let D=0;D<2*(k-V)-1;D++){const R=Math.floor(D/2);D%2===0?(x(O[V][R+1]),x(O[V+1][R]),x(O[V][R])):(x(O[V][R+1]),x(O[V+1][R+1]),x(O[V+1][R]))}}function g(L){const P=new Q;for(let C=0;C<c.length;C+=3)P.x=c[C+0],P.y=c[C+1],P.z=c[C+2],P.normalize().multiplyScalar(L),c[C+0]=P.x,c[C+1]=P.y,c[C+2]=P.z}function _(){const L=new Q;for(let P=0;P<c.length;P+=3){L.x=c[P+0],L.y=c[P+1],L.z=c[P+2];const C=S(L)/2/Math.PI+.5,Y=v(L)/Math.PI+.5;u.push(C,1-Y)}E(),y()}function y(){for(let L=0;L<u.length;L+=6){const P=u[L+0],C=u[L+2],Y=u[L+4],k=Math.max(P,C,Y),O=Math.min(P,C,Y);k>.9&&O<.1&&(P<.2&&(u[L+0]+=1),C<.2&&(u[L+2]+=1),Y<.2&&(u[L+4]+=1))}}function x(L){c.push(L.x,L.y,L.z)}function M(L,P){const C=L*3;P.x=e[C+0],P.y=e[C+1],P.z=e[C+2]}function E(){const L=new Q,P=new Q,C=new Q,Y=new Q,k=new Pt,O=new Pt,V=new Pt;for(let D=0,R=0;D<c.length;D+=9,R+=6){L.set(c[D+0],c[D+1],c[D+2]),P.set(c[D+3],c[D+4],c[D+5]),C.set(c[D+6],c[D+7],c[D+8]),k.set(u[R+0],u[R+1]),O.set(u[R+2],u[R+3]),V.set(u[R+4],u[R+5]),Y.copy(L).add(P).add(C).divideScalar(3);const B=S(Y);b(k,R+0,L,B),b(O,R+2,P,B),b(V,R+4,C,B)}}function b(L,P,C,Y){Y<0&&L.x===1&&(u[P]=L.x-1),C.x===0&&C.z===0&&(u[P]=Y/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.vertices,e.indices,e.radius,e.details)}}class nf extends tf{constructor(e=1,n=0){const s=(1+Math.sqrt(5))/2,a=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new nf(e.radius,e.detail)}}class rf extends ei{constructor(e=1,n=32,s=16,a=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:a,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const h=Math.min(u+d,Math.PI);let g=0;const _=[],y=new Q,x=new Q,M=[],E=[],b=[],S=[];for(let v=0;v<=s;v++){const L=[],P=v/s;let C=0;v===0&&u===0?C=.5/n:v===s&&h===Math.PI&&(C=-.5/n);for(let Y=0;Y<=n;Y++){const k=Y/n;y.x=-e*Math.cos(a+k*c)*Math.sin(u+P*d),y.y=e*Math.cos(u+P*d),y.z=e*Math.sin(a+k*c)*Math.sin(u+P*d),E.push(y.x,y.y,y.z),x.copy(y).normalize(),b.push(x.x,x.y,x.z),S.push(k+C,1-P),L.push(g++)}_.push(L)}for(let v=0;v<s;v++)for(let L=0;L<n;L++){const P=_[v][L+1],C=_[v][L],Y=_[v+1][L],k=_[v+1][L+1];(v!==0||u>0)&&M.push(P,C,k),(v!==s-1||h<Math.PI)&&M.push(C,Y,k)}this.setIndex(M),this.setAttribute("position",new gn(E,3)),this.setAttribute("normal",new gn(b,3)),this.setAttribute("uv",new gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sf extends ei{constructor(e=1,n=.4,s=64,a=8,c=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:s,radialSegments:a,p:c,q:u},s=Math.floor(s),a=Math.floor(a);const d=[],h=[],g=[],_=[],y=new Q,x=new Q,M=new Q,E=new Q,b=new Q,S=new Q,v=new Q;for(let P=0;P<=s;++P){const C=P/s*c*Math.PI*2;L(C,c,u,e,M),L(C+.01,c,u,e,E),S.subVectors(E,M),v.addVectors(E,M),b.crossVectors(S,v),v.crossVectors(b,S),b.normalize(),v.normalize();for(let Y=0;Y<=a;++Y){const k=Y/a*Math.PI*2,O=-n*Math.cos(k),V=n*Math.sin(k);y.x=M.x+(O*v.x+V*b.x),y.y=M.y+(O*v.y+V*b.y),y.z=M.z+(O*v.z+V*b.z),h.push(y.x,y.y,y.z),x.subVectors(y,M).normalize(),g.push(x.x,x.y,x.z),_.push(P/s),_.push(Y/a)}}for(let P=1;P<=s;P++)for(let C=1;C<=a;C++){const Y=(a+1)*(P-1)+(C-1),k=(a+1)*P+(C-1),O=(a+1)*P+C,V=(a+1)*(P-1)+C;d.push(Y,k,V),d.push(k,O,V)}this.setIndex(d),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(_,2));function L(P,C,Y,k,O){const V=Math.cos(P),D=Math.sin(P),R=Y/C*P,B=Math.cos(R);O.x=k*(2+B)*.5*V,O.y=k*(2+B)*D*.5,O.z=k*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class rE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Wm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Wm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);const sE=()=>{const r=dt.useRef(null),[e,n]=dt.useState(!0);return dt.useEffect(()=>{const s=r.current;if(!s)return;let a=null,c=null,u=null,d=null,h=null,g=null,_=null,y=null,x=null,M=null,E=null,b=null,S=null;try{const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches;c=new tE,u=new Zn(60,window.innerWidth/window.innerHeight,.1,1e3),u.position.z=25,a=new eE({alpha:!0,antialias:window.devicePixelRatio<2,powerPreference:"high-performance"}),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.appendChild(a.domElement);const L=new zo;c.add(L);const P=window.innerWidth<768?300:700;h=new ei;const C=new Float32Array(P*3),Y=new Float32Array(P*3),k=new At(61695),O=new At(26367),V=new At(9647082);for(let Z=0;Z<P;Z++){const le=Z*3;C[le]=(Math.random()-.5)*60,C[le+1]=(Math.random()-.5)*60,C[le+2]=(Math.random()-.5)*50;const ie=Math.random(),pe=ie<.6?k:ie<.85?O:V;Y[le]=pe.r,Y[le+1]=pe.g,Y[le+2]=pe.b}h.setAttribute("position",new Qn(C,3)),h.setAttribute("color",new Qn(Y,3));const D=document.createElement("canvas");D.width=32,D.height=32;const R=D.getContext("2d");if(R){const Z=R.createRadialGradient(16,16,0,16,16,16);Z.addColorStop(0,"rgba(255,255,255,1)"),Z.addColorStop(.3,"rgba(0,240,255,0.7)"),Z.addColorStop(1,"rgba(0,0,0,0)"),R.fillStyle=Z,R.fillRect(0,0,32,32)}_=new iE(D),g=new f0({size:.35,map:_,vertexColors:!0,transparent:!0,opacity:.7,blending:td,depthWrite:!1});const B=new nE(h,g);L.add(B),y=new nf(7,1),x=new Bo({color:26367,wireframe:!0,transparent:!0,opacity:.08});const ae=new Jn(y,x);ae.position.set(12,-2,-5),L.add(ae),M=new rf(3.5,16,16),E=new Bo({color:61695,wireframe:!0,transparent:!0,opacity:.05});const ne=new Jn(M,E);ne.position.set(-14,8,-8),L.add(ne),b=new sf(4.5,.4,64,12),S=new Bo({color:9647082,wireframe:!0,transparent:!0,opacity:.04});const he=new Jn(b,S);he.position.set(-10,-12,-10),L.add(he);let ge=0,ue=0,fe=0,G=0;const de=Z=>{ge=(Z.clientX/window.innerWidth-.5)*2,ue=-(Z.clientY/window.innerHeight-.5)*2};let I=window.scrollY;const w=()=>{I=window.scrollY};window.addEventListener("mousemove",de,{passive:!0}),window.addEventListener("scroll",w,{passive:!0});const j=()=>{!u||!a||(u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",j);const ve=new rE,X=()=>{d=requestAnimationFrame(X);const Z=ve.getElapsedTime();v||(fe+=(ge-fe)*.05,G+=(ue-G)*.05,L.rotation.y=fe*.15+Z*.02,L.rotation.x=-G*.15,ae.rotation.x=Z*.06,ae.rotation.y=Z*.08,ne.rotation.y=Z*.05,he.rotation.x=Z*.04,he.rotation.z=Z*.03,B.rotation.y=Z*.015,L.position.y=I*.005%15),a.render(c,u)};return X(),()=>{if(d&&cancelAnimationFrame(d),window.removeEventListener("mousemove",de),window.removeEventListener("scroll",w),window.removeEventListener("resize",j),s&&a&&a.domElement)try{s.removeChild(a.domElement)}catch{}h&&h.dispose(),g&&g.dispose(),_&&_.dispose(),y&&y.dispose(),x&&x.dispose(),M&&M.dispose(),E&&E.dispose(),b&&b.dispose(),S&&S.dispose(),a&&a.dispose()}}catch(v){console.warn("Three.js initialization safely bypassed:",v),n(!1)}},[]),m.jsx("div",{ref:r,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60","aria-hidden":"true",children:!e&&m.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.12),rgba(255,255,255,0))]"})})},oE=()=>{const[r,e]=dt.useState(0),[n,s]=dt.useState(!1);dt.useEffect(()=>{const c=()=>{const u=document.documentElement.scrollHeight-window.innerHeight;if(u>0){const d=window.scrollY/u*100;e(d),s(window.scrollY>400)}};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]);const a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none",children:m.jsx("div",{className:"h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_12px_#00f0ff]",style:{width:`${r}%`}})}),m.jsx("button",{onClick:a,"aria-label":"Scroll to top","data-cursor":"TOP",className:`fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-surface-100/80 hover:bg-surface-50 border border-white/10 hover:border-cyan-400/50 text-white/70 hover:text-cyan-300 backdrop-blur-md transition-all duration-300 shadow-xl group ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:m.jsx(Ax,{className:"w-4 h-4 transition-transform group-hover:-translate-y-0.5"})})]})},aE=()=>{const[r,e]=dt.useState(0),[n,s]=dt.useState({x:0,y:0}),a=dt.useRef(null);dt.useEffect(()=>{const g=setInterval(()=>{e(_=>(_+1)%jt.secondaryTitles.length)},2800);return()=>clearInterval(g)},[]);const c=g=>{if(!a.current)return;const{left:_,top:y,width:x,height:M}=a.current.getBoundingClientRect(),E=(g.clientX-_)/x-.5,b=(g.clientY-y)/M-.5;s({x:E,y:b})},u=g=>{var _;g.preventDefault(),(_=document.getElementById("projects"))==null||_.scrollIntoView({behavior:"smooth"})},d=g=>{var _;g.preventDefault(),(_=document.getElementById("contact"))==null||_.scrollIntoView({behavior:"smooth"})},h=g=>{g.preventDefault();const _=document.createElement("a");_.href="#",_.setAttribute("download","Vishesh_Singh_Resume.pdf"),alert("Vishesh Singh's resume is currently configured for direct download. You can also view full qualifications in the Journey & Education sections below, or connect via Email/LinkedIn!")};return m.jsxs("section",{id:"home",ref:a,onMouseMove:c,className:"relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden",children:[m.jsx("div",{className:"absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"}),m.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"}),m.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none"}),m.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"}),m.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10",children:m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]",children:[m.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-center text-left",children:[m.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 w-fit shadow-[0_0_15px_rgba(0,240,255,0.1)]",children:[m.jsxs("span",{className:"relative flex h-2 w-2",children:[m.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),m.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-400"})]}),m.jsx("span",{className:"font-mono text-xs text-white/70 tracking-wide uppercase",children:jt.status})]}),m.jsxs("p",{className:"font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-2 flex items-center gap-2",children:[m.jsx(Il,{className:"w-4 h-4 inline-block text-cyan-400"}),"HI, I'M"]}),m.jsxs("h1",{className:"font-display font-extrabold text-5xl sm:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-4",children:["VISHESH",m.jsx("br",{}),m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"SINGH"})]}),m.jsx("div",{className:"h-10 sm:h-12 overflow-hidden mb-6 flex items-center",children:m.jsxs("div",{className:"font-mono text-base sm:text-xl md:text-2xl font-bold tracking-wider text-cyan-300 flex items-center gap-2 animate-[fadeInUp_0.5s_ease-out]",children:[m.jsx("span",{className:"text-white/40",children:">"}),m.jsx("span",{className:"border-b-2 border-cyan-400/60 pb-0.5",children:jt.secondaryTitles[r]}),m.jsx("span",{className:"w-2 h-5 bg-cyan-400 inline-block animate-pulse ml-1"})]},r)}),m.jsx("p",{className:"font-display font-semibold text-lg sm:text-xl text-white/90 tracking-tight leading-snug mb-3",children:jt.heroTagline}),m.jsx("p",{className:"text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mb-8",children:jt.heroBio}),m.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[m.jsxs("a",{href:"#projects",onClick:u,"data-cursor":"WORK",className:"btn-ripple px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center gap-2 group",children:[m.jsx("span",{children:"VIEW MY WORK"}),m.jsx(bx,{className:"w-4 h-4 transition-transform group-hover:translate-y-0.5"})]}),m.jsxs("a",{href:"#contact",onClick:d,"data-cursor":"CONTACT",className:"btn-ripple px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-md flex items-center gap-2 group",children:[m.jsx("span",{children:"CONTACT ME"}),m.jsx(Dl,{className:"w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400"})]}),m.jsxs("button",{onClick:h,"data-cursor":"RESUME",className:"px-4 py-3.5 rounded-xl text-xs font-mono font-medium text-white/50 hover:text-cyan-300 transition-colors flex items-center gap-2 hover:bg-white/[0.02]",title:"Download Resume",children:[m.jsx(kx,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"RESUME"})]})]}),m.jsxs("div",{className:"mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2 text-white/40 font-mono text-xs",children:[m.jsx("span",{className:"text-white/30 mr-1",children:"TECH STACK:"}),["React","Node.js","Java","Three.js","MongoDB","Tailwind"].map(g=>m.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] hover:border-cyan-400/30 hover:text-cyan-300 transition-colors",children:g},g))]})]}),m.jsxs("div",{className:"lg:col-span-5 relative flex items-center justify-center",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-purple-600/10 rounded-3xl blur-2xl transform scale-95 pointer-events-none"}),m.jsxs("div",{className:"relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-transform duration-300 ease-out",style:{transform:`perspective(1000px) rotateY(${n.x*6}deg) rotateX(${-n.y*6}deg)`},children:[m.jsxs("div",{className:"relative rounded-[22px] overflow-hidden bg-[#0d0d12]",children:[m.jsx("img",{src:"/images/hero.png",alt:"Vishesh Singh - Full Stack Web Developer",className:"w-full h-auto object-cover object-top select-none transition-transform duration-700 hover:scale-105",loading:"eager"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent pointer-events-none"}),m.jsx("div",{className:"absolute inset-0 border border-cyan-400/20 rounded-[22px] pointer-events-none"})]}),m.jsxs("div",{className:"absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 p-3 sm:p-4 rounded-2xl glass-panel shadow-[0_15px_30px_rgba(0,0,0,0.6)] border border-cyan-400/30 backdrop-blur-xl transition-transform duration-300 hidden sm:block",style:{transform:`translate3d(${-n.x*12}px, ${-n.y*12}px, 0)`},children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2 pb-1.5 border-b border-white/[0.08]",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-red-400/80"}),m.jsx("span",{className:"w-2 h-2 rounded-full bg-yellow-400/80"}),m.jsx("span",{className:"w-2 h-2 rounded-full bg-green-400/80"}),m.jsx("span",{className:"font-mono text-[10px] text-white/40 ml-1",children:"developer.js"})]}),m.jsxs("div",{className:"font-mono text-[11px] leading-relaxed text-cyan-300",children:[m.jsx("span",{className:"text-purple-400",children:"const"})," developer = {",m.jsx("br",{}),"  name: ",m.jsx("span",{className:"text-emerald-400",children:"'Vishesh'"}),",",m.jsx("br",{}),"  role: ",m.jsx("span",{className:"text-cyan-400",children:"'Full Stack'"}),",",m.jsx("br",{}),"  craft: ",m.jsx("span",{className:"text-yellow-300",children:"'Modern Web'"}),m.jsx("br",{}),"};"]})]}),m.jsxs("div",{className:"absolute top-6 -right-3 sm:-right-5 px-3 py-2 rounded-xl glass-panel border border-white/10 shadow-xl backdrop-blur-xl flex items-center gap-2.5",style:{transform:`translate3d(${n.x*10}px, ${n.y*10}px, 0)`},children:[m.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400",children:m.jsx(es,{className:"w-3.5 h-3.5"})}),m.jsxs("div",{children:[m.jsx("div",{className:"font-mono text-[9px] uppercase tracking-wider text-white/50",children:"ARCHITECT"}),m.jsx("div",{className:"font-display font-bold text-xs text-white",children:"Production Ready"})]})]})]})]})]})}),m.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity",children:[m.jsx("span",{className:"font-mono text-[9px] uppercase tracking-[0.2em] text-white",children:"SCROLL"}),m.jsx("div",{className:"w-4 h-7 rounded-full border border-white/20 flex justify-center pt-1",children:m.jsx("div",{className:"w-1 h-1.5 rounded-full bg-cyan-400 animate-bounce"})})]})]})},lE=()=>m.jsxs("section",{id:"about",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-start mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"01 // PROFILE"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["ABOUT ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"ME"})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"Merging computer science discipline with high-craft digital execution."})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",children:[m.jsxs("div",{className:"lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group",children:[m.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400",children:m.jsx(Il,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-display font-bold text-lg text-white",children:"Vishesh Singh"}),m.jsx("p",{className:"font-mono text-xs text-cyan-400",children:jt.profile})]})]}),m.jsx("span",{className:"font-mono text-[11px] text-white/40 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]",children:"EST. 2026"})]}),m.jsx("div",{className:"space-y-4 text-white/70 text-sm sm:text-base leading-relaxed",children:jt.aboutText.map((r,e)=>m.jsx("p",{children:r},e))}),m.jsxs("div",{className:"mt-8 p-4 rounded-2xl bg-black/50 border border-white/[0.06] font-mono text-xs text-white/80",children:[m.jsx("div",{className:"text-white/40 mb-1",children:"// engineering core principles"}),m.jsxs("div",{className:"text-cyan-300",children:[m.jsx("span",{className:"text-purple-400",children:"const"})," mindset = [",m.jsx("span",{className:"text-emerald-300",children:'"Scalable Architecture"'}),",",m.jsx("span",{className:"text-emerald-300",children:'"Pixel Precision"'}),",",m.jsx("span",{className:"text-emerald-300",children:'"Algorithmic Rigor"'}),"];"]})]})]}),m.jsxs("div",{className:"mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),m.jsx("span",{className:"font-mono text-xs text-white/60",children:"Actively building & contributing"})]}),m.jsxs("a",{href:"#contact",className:"font-mono text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/link",children:[m.jsx("span",{children:"Initiate collaboration"}),m.jsx(Dl,{className:"w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"})]})]})]}),m.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-6",children:[m.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[m.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400",children:m.jsx(Xd,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("h4",{className:"font-display font-bold text-base text-white",children:"Current Academic Focus"}),m.jsx("p",{className:"font-mono text-xs text-white/40",children:"B.Tech Computer Science"})]})]}),m.jsx("p",{className:"text-xs sm:text-sm text-white/60 leading-relaxed mb-4",children:"Deepening mastery across full-stack JavaScript frameworks, backend microservices in Node.js, and object-oriented systems engineering with Java."}),m.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06] font-mono text-xs text-white/70",children:[m.jsxs("div",{className:"p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]",children:[m.jsx("span",{className:"text-cyan-400 block text-[10px] uppercase",children:"Primary"}),"Full Stack"]}),m.jsxs("div",{className:"p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]",children:[m.jsx("span",{className:"text-purple-400 block text-[10px] uppercase",children:"Foundation"}),"Java & DSA"]})]})]}),m.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex-1",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[m.jsx("div",{className:"w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400",children:m.jsx(es,{className:"w-4 h-4"})}),m.jsx("h4",{className:"font-display font-bold text-base text-white",children:"Core Interests & Domains"})]}),m.jsx("div",{className:"flex flex-wrap gap-2",children:jt.interests.map(r=>m.jsx("span",{className:"px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-cyan-400/40 text-xs text-white/80 hover:text-cyan-300 font-medium transition-all duration-200 cursor-default",children:r},r))})]})]})]})]})]}),cE=()=>{var s,a,c;const[r,e]=dt.useState(null);Gp.find(u=>u.id==="center");const n=Gp.filter(u=>u.id!=="center");return m.jsxs("div",{className:"relative w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 bg-radial-gradient-hero opacity-30 pointer-events-none"}),m.jsxs("div",{className:"text-center mb-8 relative z-10",children:[m.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-cyan-400",children:"SYSTEM ARCHITECTURE // INTERACTIVE NODES"}),m.jsx("h3",{className:"font-display font-bold text-2xl text-white mt-1",children:"Full Stack Ecosystem Map"}),m.jsx("p",{className:"text-xs text-white/50 max-w-md mx-auto mt-1",children:"Hover or tap any cluster to inspect connected technologies and integration flow."})]}),m.jsx("div",{className:"relative w-full aspect-[16/10] max-h-[500px] flex items-center justify-center",children:m.jsxs("svg",{viewBox:"-250 -180 500 360",className:"w-full h-full overflow-visible select-none",children:[m.jsxs("defs",{children:[m.jsxs("filter",{id:"glow-filter",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[m.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),m.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),m.jsxs("linearGradient",{id:"line-cyan",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[m.jsx("stop",{offset:"0%",stopColor:"#00f0ff",stopOpacity:"0.8"}),m.jsx("stop",{offset:"100%",stopColor:"#0066ff",stopOpacity:"0.2"})]})]}),n.map(u=>{const d=r===u.id||r==="center";return m.jsxs("g",{children:[m.jsx("line",{x1:0,y1:0,x2:u.x,y2:u.y,stroke:d?u.color:"rgba(255, 255, 255, 0.12)",strokeWidth:d?2.5:1,strokeDasharray:d?"none":"4 4",className:"transition-all duration-300"}),m.jsx("circle",{r:d?3:2,fill:u.color,opacity:.8,children:m.jsx("animateMotion",{path:`M 0,0 L ${u.x},${u.y}`,dur:"3s",repeatCount:"indefinite"})})]},`link-${u.id}`)}),m.jsxs("g",{className:"cursor-pointer group",onMouseEnter:()=>e("center"),onMouseLeave:()=>e(null),children:[m.jsx("circle",{cx:0,cy:0,r:46,fill:"rgba(0, 240, 255, 0.08)",className:"animate-pulse"}),m.jsx("circle",{cx:0,cy:0,r:38,fill:"#09090f",stroke:"#00f0ff",strokeWidth:2,filter:"url(#glow-filter)",className:"transition-transform duration-300 group-hover:scale-110"}),m.jsx("text",{x:0,y:-4,textAnchor:"middle",className:"fill-white font-display font-extrabold text-[11px] tracking-wider select-none pointer-events-none",children:"FULL"}),m.jsx("text",{x:0,y:10,textAnchor:"middle",className:"fill-cyan-300 font-display font-extrabold text-[11px] tracking-wider select-none pointer-events-none",children:"STACK"})]}),n.map(u=>{const d=r===u.id;return m.jsxs("g",{transform:`translate(${u.x}, ${u.y})`,className:"cursor-pointer group transition-all duration-300",onMouseEnter:()=>e(u.id),onMouseLeave:()=>e(null),onClick:()=>e(r===u.id?null:u.id),children:[d&&m.jsx("circle",{cx:0,cy:0,r:u.radius+6,fill:"none",stroke:u.color,strokeWidth:1.5,opacity:.6,className:"animate-ping"}),m.jsx("circle",{cx:0,cy:0,r:u.radius,fill:"#0e0e14",stroke:d?u.color:"rgba(255, 255, 255, 0.15)",strokeWidth:d?2:1,className:"transition-all duration-300 group-hover:scale-105"}),m.jsx("text",{cx:0,cy:0,textAnchor:"middle",dominantBaseline:"middle",className:"fill-white font-mono text-[10px] font-semibold select-none pointer-events-none",style:{fill:d?u.color:"#ffffff"},children:u.label})]},u.id)})]})}),m.jsxs("div",{className:"mt-4 pt-4 border-t border-white/[0.08] min-h-[4rem] flex flex-wrap items-center justify-between gap-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"font-mono text-xs text-white/40 uppercase",children:"Selected Module:"}),m.jsx("span",{className:"font-display font-bold text-sm text-cyan-300",children:r?((s=n.find(u=>u.id===r))==null?void 0:s.label)||"Full Stack Core":"Hover over any node"})]}),m.jsxs("div",{className:"flex flex-wrap gap-2",children:[r&&((c=(a=n.find(u=>u.id===r))==null?void 0:a.items)==null?void 0:c.map(u=>m.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/[0.05] border border-cyan-400/30 text-white text-xs font-mono",children:u},u))),!r&&m.jsx("span",{className:"text-xs text-white/30 font-mono",children:"[ 6 Integrated Technology Clusters ]"})]})]})]})},uE={React:Xd,FileCode:Ox,Palette:Hp,Layout:jx,Paintbrush:Hp,Server:Cg,Cpu:Ux,Network:El,Coffee:Dx,Binary:Cx,Terminal:Il,Database:Fx,HardDrive:Bx,GitBranch:El,Github:El,Code:lg,Send:bg,Box:Rx,Zap:Wx,Sparkles:es},dE=[{id:"all",label:"All Tech"},{id:"frontend",label:"Frontend"},{id:"backend",label:"Backend"},{id:"programming",label:"Programming"},{id:"database",label:"Database"},{id:"tools",label:"Tools"},{id:"other",label:"Other & AI"}],fE=()=>{const[r,e]=dt.useState("all"),s=r==="all"?Object.entries(Vp).flatMap(([a,c])=>c.map(u=>({...u,category:a}))):(Vp[r]||[]).map(a=>({...a,category:r}));return m.jsxs("section",{id:"skills",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"02 // CAPABILITIES"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["TECH ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"STACK"})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"A battle-tested repertoire of modern tools, languages, and frameworks."})]}),m.jsx(cE,{}),m.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 my-12",children:dE.map(a=>m.jsx("button",{onClick:()=>e(a.id),"data-cursor":"FILTER",className:`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${r===a.id?"bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(0,240,255,0.4)]":"bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"}`,children:a.label},a.id))}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:s.map(a=>{const c=uE[a.icon]||lg;return m.jsxs("div",{"data-cursor":"TECH",className:"interactive-card glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.07] flex flex-col justify-between group transition-all duration-300",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-start justify-between mb-4",children:[m.jsx("div",{className:"w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300",children:m.jsx(c,{className:"w-6 h-6"})}),m.jsx("span",{className:"font-mono text-[10px] uppercase tracking-wider text-white/30 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/[0.04]",children:a.category})]}),m.jsx("h3",{className:"font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors",children:a.name}),m.jsx("p",{className:"text-xs text-white/50 leading-relaxed mt-2 mb-4",children:a.description})]}),m.jsxs("div",{className:"pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]",children:[m.jsxs("span",{className:"text-white/40",children:["Category: ",a.category]}),m.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold",children:a.badge})]})]},a.name)})})]})]})},qo=({className:r="w-5 h-5",...e})=>m.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,...e,children:[m.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),m.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),h0=({className:r="w-5 h-5",...e})=>m.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,...e,children:[m.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),m.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),m.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),hE=({project:r,onClose:e})=>r?m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]",children:m.jsxs("div",{className:"relative w-full max-w-2xl bg-[#0b0b10] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:[m.jsx("button",{onClick:e,className:"absolute top-6 right-6 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white/60 hover:text-white transition-colors","aria-label":"Close modal",children:m.jsx(Lg,{className:"w-5 h-5"})}),m.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[m.jsx("span",{className:"font-mono text-xs uppercase text-cyan-400 tracking-wider",children:r.category}),m.jsx("span",{className:"text-white/20",children:"•"}),m.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 font-mono text-[10px] text-cyan-300",children:r.badge})]}),m.jsx("h3",{className:"font-display font-extrabold text-2xl sm:text-3xl text-white mb-4",children:r.title}),m.jsx("p",{className:"text-white/70 text-sm sm:text-base leading-relaxed mb-6",children:r.longDescription||r.description}),r.stats&&m.jsx("div",{className:"grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6",children:Object.entries(r.stats).map(([n,s])=>m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"font-mono text-[10px] uppercase text-white/40 tracking-wider",children:n}),m.jsx("div",{className:"font-display font-bold text-sm sm:text-base text-cyan-300 mt-0.5",children:s})]},n))}),m.jsxs("div",{className:"mb-8",children:[m.jsx("h4",{className:"font-mono text-xs uppercase tracking-wider text-white/40 mb-3",children:"Integrated Tech Stack"}),m.jsx("div",{className:"flex flex-wrap gap-2",children:r.technologies.map(n=>m.jsx("span",{className:"px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/90",children:n},n))})]}),m.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]",children:[m.jsxs("a",{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 py-3 px-5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all",children:[m.jsx(qo,{className:"w-4 h-4 text-white"}),m.jsx("span",{children:"View Source on GitHub"})]}),m.jsxs("a",{href:r.liveDemoUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 py-3 px-5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all",children:[m.jsx(Wd,{className:"w-4 h-4"}),m.jsx("span",{children:"Launch Live Demo"})]})]})]})}):null,pE=()=>{const[r,e]=dt.useState(null);return m.jsxs("section",{id:"projects",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-start mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"03 // SELECTED WORK"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["FEATURED ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"PROJECTS"})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"A curated showcase of applications, algorithmic systems, and engineering experiments."})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",children:Xx.map((n,s)=>m.jsxs("div",{"data-cursor":"VIEW",onClick:()=>e(n),className:"group relative rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 border border-white/10 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:border-cyan-400/40",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"relative w-full h-52 sm:h-60 rounded-2xl bg-gradient-to-br from-[#12121c] via-[#0d0d12] to-[#08080c] border border-white/10 overflow-hidden mb-6 flex flex-col justify-between p-4 group-hover:border-cyan-400/30 transition-colors",children:[m.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"}),m.jsx("div",{className:`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${n.accent} opacity-15 blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity`}),m.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500/70"}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/70"}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-green-500/70"}),m.jsxs("span",{className:"font-mono text-[10px] text-white/30 ml-2",children:[n.id,".app"]})]}),m.jsx("span",{className:"px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-cyan-300",children:n.badge})]}),m.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center py-4",children:[m.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300",children:s===0?m.jsx(Tx,{className:"w-8 h-8 text-cyan-400"}):s===1?m.jsx(Lx,{className:"w-8 h-8 text-amber-400"}):m.jsx(es,{className:"w-8 h-8 text-blue-400"})}),m.jsx("span",{className:"font-mono text-[11px] text-white/50 mt-2",children:n.category})]}),m.jsxs("div",{className:"relative z-10 flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/[0.06]",children:[m.jsx("span",{children:"DEPLOYED // STABLE"}),m.jsx("span",{className:"text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1",children:"Inspect Specs →"})]})]}),m.jsxs("h3",{className:"font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-3 flex items-center justify-between",children:[m.jsx("span",{children:n.title}),m.jsx(Dl,{className:"w-5 h-5 text-white/30 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]}),m.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-6",children:n.description})]}),m.jsxs("div",{children:[m.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:n.technologies.map(a=>m.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/70",children:a},a))}),m.jsxs("div",{className:"flex items-center gap-3 pt-4 border-t border-white/[0.06]",children:[m.jsxs("a",{href:n.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:a=>a.stopPropagation(),"data-cursor":"CODE",className:"flex-1 py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all",children:[m.jsx(qo,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Source Code"})]}),m.jsxs("a",{href:n.liveDemoUrl,target:"_blank",rel:"noopener noreferrer",onClick:a=>a.stopPropagation(),"data-cursor":"DEMO",className:"flex-1 py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all",children:[m.jsx(Wd,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Live Demo"})]})]})]})]},n.id))})]}),r&&m.jsx(hE,{project:r,onClose:()=>e(null)})]})},mE=()=>m.jsxs("section",{id:"journey",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"04 // PATHWAY"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["MY ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"JOURNEY"})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"Academic milestones, technical development, and persistent problem solving."})]}),m.jsxs("div",{className:"glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 mb-20 relative overflow-hidden",children:[m.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[m.jsxs("div",{className:"lg:col-span-4 flex flex-col items-start",children:[m.jsx("div",{className:"w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_20px_rgba(0,240,255,0.2)]",children:m.jsx(zx,{className:"w-7 h-7"})}),m.jsx("span",{className:"font-mono text-xs uppercase text-cyan-400 tracking-wider mb-1",children:"CURRENT ACADEMIC STATUS"}),m.jsx("h3",{className:"font-display font-bold text-2xl text-white mb-2",children:Po.degree}),m.jsx("p",{className:"text-sm font-semibold text-white/80 mb-1",children:Po.branch}),m.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-white/40 mt-1",children:[m.jsx(Nx,{className:"w-3.5 h-3.5"}),m.jsxs("span",{children:["Graduation ~ ",Po.expectedGraduation]})]})]}),m.jsxs("div",{className:"lg:col-span-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8",children:[m.jsx("h4",{className:"font-mono text-xs uppercase tracking-wider text-white/40 mb-3",children:"Key Academic Specializations & Focus"}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6",children:Po.focusAreas.map(r=>m.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-white/70",children:[m.jsx(Px,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}),m.jsx("span",{children:r})]},r))}),m.jsx("div",{className:"flex flex-wrap gap-2 text-[11px] font-mono text-cyan-300/80",children:(Po.academicHighlights||[]).map(r=>m.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-cyan-500/5 border border-cyan-500/20",children:["⚡ ",r]},r))})]})]})]}),m.jsxs("div",{className:"relative max-w-4xl mx-auto mb-24",children:[m.jsx("div",{className:"absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500/30 shadow-[0_0_10px_#00f0ff]"}),m.jsx("div",{className:"space-y-12",children:$x.map((r,e)=>{const n=e%2===0;return m.jsxs("div",{className:`relative flex flex-col sm:flex-row items-start ${n?"sm:flex-row-reverse":""}`,children:[m.jsx("div",{className:"absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_#00f0ff]",children:m.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"})}),m.jsx("div",{className:"hidden sm:block sm:w-1/2"}),m.jsx("div",{className:"ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full",children:m.jsxs("div",{className:"glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 relative",children:[m.jsxs("div",{className:"flex items-center justify-between mb-2",children:[m.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase text-cyan-300",children:r.type}),m.jsx("span",{className:"font-mono text-xs text-white/40",children:r.year})]}),m.jsx("h4",{className:"font-display font-bold text-lg text-white mb-1",children:r.title}),m.jsx("p",{className:"font-mono text-xs text-cyan-400/80 mb-3",children:r.institution}),m.jsx("p",{className:"text-xs sm:text-sm text-white/60 leading-relaxed mb-4",children:r.description}),m.jsx("div",{className:"flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]",children:r.highlights.map(s=>m.jsxs("span",{className:"px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-white/50",children:["#",s]},s))})]})})]},r.title)})})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"text-center mb-10",children:[m.jsx("h3",{className:"font-display font-bold text-2xl text-white",children:"Milestones & Focus Areas"}),m.jsx("p",{className:"font-mono text-xs text-white/40 mt-1",children:"Key academic and technical milestones across projects and computer science fundamentals."})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:Kx.map(r=>m.jsxs("div",{className:"glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-colors text-left",children:[m.jsxs("div",{children:[m.jsx("div",{className:"flex items-center justify-between mb-3",children:m.jsx("span",{className:"font-mono text-[10px] uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20",children:r.tag})}),m.jsx("h4",{className:"font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-2",children:r.title}),m.jsx("p",{className:"text-xs text-white/60 leading-relaxed",children:r.detail})]}),m.jsx("div",{className:"mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-white/40",children:r.category})]},r.id))})]})]})]}),gE=()=>m.jsxs("section",{id:"github",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-start mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"05 // OPEN SOURCE"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["GITHUB ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"ACTIVITY"})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"Public repositories, version-controlled architectures, and ongoing projects."})]}),m.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 mb-10",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-6",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white shadow-lg",children:m.jsx(qo,{className:"w-7 h-7"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-display font-bold text-xl text-white flex items-center gap-2",children:m.jsxs("span",{children:["@",jp.username]})}),m.jsx("p",{className:"font-mono text-xs text-cyan-400 mt-0.5",children:"Full Stack Web Developer • CSE Student"})]})]}),m.jsxs("a",{href:jt.github,target:"_blank",rel:"noopener noreferrer","data-cursor":"GITHUB",className:"px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] group",children:[m.jsx("span",{children:"VIEW GITHUB PROFILE"}),m.jsx(Wd,{className:"w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]}),m.jsxs("div",{className:"mt-8 pt-6 border-t border-white/[0.08]",children:[m.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-white/50 mb-3",children:[m.jsx("span",{children:"Primary Tech Stack Languages"}),m.jsx("span",{children:"Java • Python • JavaScript"})]}),m.jsxs("div",{className:"h-2 w-full rounded-full overflow-hidden flex bg-white/[0.05]",children:[m.jsx("div",{className:"h-full bg-amber-500 w-[40%]",title:"Java"}),m.jsx("div",{className:"h-full bg-cyan-400 w-[35%]",title:"JavaScript"}),m.jsx("div",{className:"h-full bg-blue-600 w-[20%]",title:"Python"}),m.jsx("div",{className:"h-full bg-purple-500 w-[5%]",title:"HTML/CSS"})]}),m.jsxs("div",{className:"flex flex-wrap items-center gap-5 mt-4 text-xs font-mono text-white/70",children:[m.jsxs("span",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"})," Java (DSA & OOP)"]}),m.jsxs("span",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"})," JavaScript & React (Full Stack Web)"]}),m.jsxs("span",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-blue-600"})," Python (AI & Machine Learning)"]})]})]})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:jp.pinnedRepositories.map(r=>m.jsxs("a",{href:`${jt.github}/${r.name}`,target:"_blank",rel:"noopener noreferrer","data-cursor":"REPO",className:"glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-3",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(El,{className:"w-4 h-4 text-cyan-400"}),m.jsx("span",{className:"font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors",children:r.name})]}),m.jsx("span",{className:"px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-white/40",children:"Public"})]}),m.jsx("p",{className:"text-xs text-white/60 leading-relaxed mb-4",children:r.description})]}),m.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-white/60",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:r.languageColor}}),m.jsx("span",{children:r.language})]}),m.jsx("span",{className:"text-cyan-400 text-[11px] group-hover:translate-x-1 transition-transform flex items-center gap-1",children:"Explore →"})]})]},r.name))})]})]}),vE={Layers:Xd,Monitor:Gx,Server:Cg,Sparkles:es},xE=()=>m.jsxs("section",{id:"services",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-start mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"06 // SPECIALIZATIONS"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["WHAT I ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"BUILD"})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"Engineering digital solutions with end-to-end precision and modern aesthetics."})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Yx.map(r=>{const e=vE[r.icon]||es;return m.jsxs("div",{"data-cursor":"OFFER",className:"glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden",children:[m.jsx("span",{className:"absolute top-6 right-8 font-display font-black text-6xl text-white/[0.03] group-hover:text-cyan-400/[0.08] transition-colors select-none pointer-events-none",children:r.id}),m.jsxs("div",{children:[m.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 mb-6",children:m.jsx(e,{className:"w-7 h-7"})}),m.jsxs("span",{className:"font-mono text-xs uppercase text-cyan-400 tracking-wider",children:["MODULE // ",r.id]}),m.jsx("h3",{className:"font-display font-bold text-2xl text-white mt-1 mb-3 group-hover:text-cyan-300 transition-colors",children:r.title}),m.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-6",children:r.description})]}),m.jsx("div",{className:"pt-6 border-t border-white/[0.08]",children:m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:r.features.map(n=>m.jsxs("div",{className:"flex items-center gap-2 text-xs text-white/70",children:[m.jsx(rg,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}),m.jsx("span",{children:n})]},n))})})]},r.id)})})]})]}),_E=()=>m.jsxs("section",{id:"process",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"07 // METHODOLOGY"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["DEVELOPMENT ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"PROCESS"})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"A methodical six-phase approach transforming complex technical requirements into refined software."})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative",children:qx.map((r,e)=>m.jsxs("div",{"data-cursor":"STEP",className:"glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-6",children:[m.jsxs("span",{className:"font-mono font-bold text-xs text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20",children:["STAGE ",r.step]}),m.jsxs("span",{className:"font-display font-black text-2xl text-white/20 group-hover:text-cyan-400/60 transition-colors",children:["0",e+1]})]}),m.jsx("h3",{className:"font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-1",children:r.title}),m.jsx("p",{className:"font-mono text-xs text-white/40 mb-4",children:r.subtitle}),m.jsx("p",{className:"text-white/60 text-xs sm:text-sm leading-relaxed",children:r.description})]}),m.jsxs("div",{className:"mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between",children:[m.jsxs("span",{className:"font-mono text-[10px] text-white/30 uppercase",children:["Phase ",e+1," of 6"]}),m.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:scale-125 transition-all"})]})]},r.step))})]})]});var of={};(function r(e,n,s,a){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),w=I.getContext("2d");w.fillRect(0,0,1,1);var j=I.transferToImageBitmap();w.createPattern(j,"no-repeat")}catch{return!1}return!0})();function h(){}function g(I){var w=n.exports.Promise,j=w!==void 0?w:e.Promise;return typeof j=="function"?new j(I):(I(h,h),null)}var _=(function(I,w){return{transform:function(j){if(I)return j;if(w.has(j))return w.get(j);var ve=new OffscreenCanvas(j.width,j.height),X=ve.getContext("2d");return X.drawImage(j,0,0),w.set(j,ve),ve},clear:function(){w.clear()}}})(d,new Map),y=(function(){var I=Math.floor(16.666666666666668),w,j,ve={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(Z){var le=Math.random();return ve[le]=requestAnimationFrame(function ie(pe){X===pe||X+I-1<pe?(X=pe,delete ve[le],Z()):ve[le]=requestAnimationFrame(ie)}),le},j=function(Z){ve[Z]&&cancelAnimationFrame(ve[Z])}):(w=function(Z){return setTimeout(Z,I)},j=function(Z){return clearTimeout(Z)}),{frame:w,cancel:j}})(),x=(function(){var I,w,j={};function ve(X){function Z(le,ie){X.postMessage({options:le||{},callback:ie})}X.init=function(ie){var pe=ie.transferControlToOffscreen();X.postMessage({canvas:pe},[pe])},X.fire=function(ie,pe,Te){if(w)return Z(ie,null),w;var Le=Math.random().toString(36).slice(2);return w=g(function(Je){function Ke(lt){lt.data.callback===Le&&(delete j[Le],X.removeEventListener("message",Ke),w=null,_.clear(),Te(),Je())}X.addEventListener("message",Ke),Z(ie,Le),j[Le]=Ke.bind(null,{data:{callback:Le}})}),w},X.reset=function(){X.postMessage({reset:!0});for(var ie in j)j[ie](),delete j[ie]}}return function(){if(I)return I;if(!s&&c){var X=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([X])))}catch(Z){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Z),null}ve(I)}return I}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(I,w){return w?w(I):I}function b(I){return I!=null}function S(I,w,j){return E(I&&b(I[w])?I[w]:M[w],j)}function v(I){return I<0?0:Math.floor(I)}function L(I,w){return Math.floor(Math.random()*(w-I))+I}function P(I){return parseInt(I,16)}function C(I){return I.map(Y)}function Y(I){var w=String(I).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:P(w.substring(0,2)),g:P(w.substring(2,4)),b:P(w.substring(4,6))}}function k(I){var w=S(I,"origin",Object);return w.x=S(w,"x",Number),w.y=S(w,"y",Number),w}function O(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function V(I){var w=I.getBoundingClientRect();I.width=w.width,I.height=w.height}function D(I){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=I,w}function R(I,w,j,ve,X,Z,le,ie,pe){I.save(),I.translate(w,j),I.rotate(Z),I.scale(ve,X),I.arc(0,0,1,le,ie,pe),I.restore()}function B(I){var w=I.angle*(Math.PI/180),j=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-w+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function ae(I,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var j=w.tick++/w.totalTicks,ve=w.x+w.random*w.tiltCos,X=w.y+w.random*w.tiltSin,Z=w.wobbleX+w.random*w.tiltCos,le=w.wobbleY+w.random*w.tiltSin;if(I.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-j)+")",I.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))I.fill(fe(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(Z-ve)*.1,Math.abs(le-X)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var ie=Math.PI/10*w.wobble,pe=Math.abs(Z-ve)*.1,Te=Math.abs(le-X)*.1,Le=w.shape.bitmap.width*w.scalar,Je=w.shape.bitmap.height*w.scalar,Ke=new DOMMatrix([Math.cos(ie)*pe,Math.sin(ie)*pe,-Math.sin(ie)*Te,Math.cos(ie)*Te,w.x,w.y]);Ke.multiplySelf(new DOMMatrix(w.shape.matrix));var lt=I.createPattern(_.transform(w.shape.bitmap),"no-repeat");lt.setTransform(Ke),I.globalAlpha=1-j,I.fillStyle=lt,I.fillRect(w.x-Le/2,w.y-Je/2,Le,Je),I.globalAlpha=1}else if(w.shape==="circle")I.ellipse?I.ellipse(w.x,w.y,Math.abs(Z-ve)*w.ovalScalar,Math.abs(le-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):R(I,w.x,w.y,Math.abs(Z-ve)*w.ovalScalar,Math.abs(le-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var z=Math.PI/2*3,Rt=4*w.scalar,it=8*w.scalar,nt=w.x,Ve=w.y,xt=5,ke=Math.PI/xt;xt--;)nt=w.x+Math.cos(z)*it,Ve=w.y+Math.sin(z)*it,I.lineTo(nt,Ve),z+=ke,nt=w.x+Math.cos(z)*Rt,Ve=w.y+Math.sin(z)*Rt,I.lineTo(nt,Ve),z+=ke;else I.moveTo(Math.floor(w.x),Math.floor(w.y)),I.lineTo(Math.floor(w.wobbleX),Math.floor(X)),I.lineTo(Math.floor(Z),Math.floor(le)),I.lineTo(Math.floor(ve),Math.floor(w.wobbleY));return I.closePath(),I.fill(),w.tick<w.totalTicks}function ne(I,w,j,ve,X){var Z=w.slice(),le=I.getContext("2d"),ie,pe,Te=g(function(Le){function Je(){ie=pe=null,le.clearRect(0,0,ve.width,ve.height),_.clear(),X(),Le()}function Ke(){s&&!(ve.width===a.width&&ve.height===a.height)&&(ve.width=I.width=a.width,ve.height=I.height=a.height),!ve.width&&!ve.height&&(j(I),ve.width=I.width,ve.height=I.height),le.clearRect(0,0,ve.width,ve.height),Z=Z.filter(function(lt){return ae(le,lt)}),Z.length?ie=y.frame(Ke):Je()}ie=y.frame(Ke),pe=Je});return{addFettis:function(Le){return Z=Z.concat(Le),Te},canvas:I,promise:Te,reset:function(){ie&&y.cancel(ie),pe&&pe()}}}function he(I,w){var j=!I,ve=!!S(w||{},"resize"),X=!1,Z=S(w,"disableForReducedMotion",Boolean),le=c&&!!S(w||{},"useWorker"),ie=le?x():null,pe=j?O:V,Te=I&&ie?!!I.__confetti_initialized:!1,Le=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Je;function Ke(z,Rt,it){for(var nt=S(z,"particleCount",v),Ve=S(z,"angle",Number),xt=S(z,"spread",Number),ke=S(z,"startVelocity",Number),U=S(z,"decay",Number),A=S(z,"gravity",Number),te=S(z,"drift",Number),_e=S(z,"colors",C),ye=S(z,"ticks",Number),me=S(z,"shapes"),Ge=S(z,"scalar"),Re=!!S(z,"flat"),Ue=k(z),ft=nt,we=[],Oe=I.width*Ue.x,Qe=I.height*Ue.y;ft--;)we.push(B({x:Oe,y:Qe,angle:Ve,spread:xt,startVelocity:ke,color:_e[ft%_e.length],shape:me[L(0,me.length)],ticks:ye,decay:U,gravity:A,drift:te,scalar:Ge,flat:Re}));return Je?Je.addFettis(we):(Je=ne(I,we,pe,Rt,it),Je.promise)}function lt(z){var Rt=Z||S(z,"disableForReducedMotion",Boolean),it=S(z,"zIndex",Number);if(Rt&&Le)return g(function(ke){ke()});j&&Je?I=Je.canvas:j&&!I&&(I=D(it),document.body.appendChild(I)),ve&&!Te&&pe(I);var nt={width:I.width,height:I.height};ie&&!Te&&ie.init(I),Te=!0,ie&&(I.__confetti_initialized=!0);function Ve(){if(ie){var ke={getBoundingClientRect:function(){if(!j)return I.getBoundingClientRect()}};pe(ke),ie.postMessage({resize:{width:ke.width,height:ke.height}});return}nt.width=nt.height=null}function xt(){Je=null,ve&&(X=!1,e.removeEventListener("resize",Ve)),j&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,Te=!1)}return ve&&!X&&(X=!0,e.addEventListener("resize",Ve,!1)),ie?ie.fire(z,nt,xt):Ke(z,nt,xt)}return lt.reset=function(){ie&&ie.reset(),Je&&Je.reset()},lt}var ge;function ue(){return ge||(ge=he(null,{useWorker:!0,resize:!0})),ge}function fe(I,w,j,ve,X,Z,le){var ie=new Path2D(I),pe=new Path2D;pe.addPath(ie,new DOMMatrix(w));var Te=new Path2D;return Te.addPath(pe,new DOMMatrix([Math.cos(le)*X,Math.sin(le)*X,-Math.sin(le)*Z,Math.cos(le)*Z,j,ve])),Te}function G(I){if(!u)throw new Error("path confetti are not supported in this browser");var w,j;typeof I=="string"?w=I:(w=I.path,j=I.matrix);var ve=new Path2D(w),X=document.createElement("canvas"),Z=X.getContext("2d");if(!j){for(var le=1e3,ie=le,pe=le,Te=0,Le=0,Je,Ke,lt=0;lt<le;lt+=2)for(var z=0;z<le;z+=2)Z.isPointInPath(ve,lt,z,"nonzero")&&(ie=Math.min(ie,lt),pe=Math.min(pe,z),Te=Math.max(Te,lt),Le=Math.max(Le,z));Je=Te-ie,Ke=Le-pe;var Rt=10,it=Math.min(Rt/Je,Rt/Ke);j=[it,0,0,it,-Math.round(Je/2+ie)*it,-Math.round(Ke/2+pe)*it]}return{type:"path",path:w,matrix:j}}function de(I){var w,j=1,ve="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?w=I:(w=I.text,j="scalar"in I?I.scalar:j,X="fontFamily"in I?I.fontFamily:X,ve="color"in I?I.color:ve);var Z=10*j,le=""+Z+"px "+X,ie=new OffscreenCanvas(Z,Z),pe=ie.getContext("2d");pe.font=le;var Te=pe.measureText(w),Le=Math.ceil(Te.actualBoundingBoxRight+Te.actualBoundingBoxLeft),Je=Math.ceil(Te.actualBoundingBoxAscent+Te.actualBoundingBoxDescent),Ke=2,lt=Te.actualBoundingBoxLeft+Ke,z=Te.actualBoundingBoxAscent+Ke;Le+=Ke+Ke,Je+=Ke+Ke,ie=new OffscreenCanvas(Le,Je),pe=ie.getContext("2d"),pe.font=le,pe.fillStyle=ve,pe.fillText(w,lt,z);var Rt=1/j;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[Rt,0,0,Rt,-Le*Rt/2,-Je*Rt/2]}}n.exports=function(){return ue().apply(this,arguments)},n.exports.reset=function(){ue().reset()},n.exports.create=he,n.exports.shapeFromPath=G,n.exports.shapeFromText=de})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),of,!1);const yE=of.exports;of.exports.create;const SE=()=>{const[r,e]=dt.useState({name:"",email:"",message:""}),[n,s]=dt.useState({}),[a,c]=dt.useState(!1),[u,d]=dt.useState(!1),h=()=>{const y={};return r.name.trim()||(y.name="Please provide your name"),r.email.trim()?/\S+@\S+\.\S+/.test(r.email)||(y.email="Please enter a valid email address"):y.email="Please provide your email address",(!r.message.trim()||r.message.length<10)&&(y.message="Please write a message (at least 10 characters)"),s(y),Object.keys(y).length===0},g=y=>{if(y.preventDefault(),!h())return;yE({particleCount:80,spread:70,origin:{y:.7},colors:["#00f0ff","#0066ff","#ffffff"]}),d(!0);const x=encodeURIComponent(`Collaboration Inquiry from ${r.name}`),M=encodeURIComponent(`Hi Vishesh,

${r.message}

Best regards,
${r.name} (${r.email})`),E=`mailto:${jt.email}?subject=${x}&body=${M}`;setTimeout(()=>{window.location.href=E},1200)},_=()=>{navigator.clipboard.writeText(jt.email),c(!0),setTimeout(()=>c(!1),2500)};return m.jsxs("section",{id:"contact",className:"relative py-28 overflow-hidden",children:[m.jsx("div",{className:"absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[m.jsxs("div",{className:"flex flex-col items-start mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"08 // GET IN TOUCH"]}),m.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:["LET'S BUILD ",m.jsx("span",{className:"bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent",children:"SOMETHING GREAT."})]}),m.jsx("p",{className:"font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl",children:"Have an idea, project or opportunity? Let's turn it into something meaningful."})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[m.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-6",children:[m.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden",children:[m.jsx("span",{className:"font-mono text-xs uppercase text-cyan-400 tracking-wider",children:"DIRECT INBOX"}),m.jsx("h3",{className:"font-display font-bold text-xl text-white mt-1 mb-2",children:"Say Hello"}),m.jsx("p",{className:"text-xs text-white/50 leading-relaxed mb-6",children:"Feel free to email me directly regarding full-time roles, freelance architectures, or engineering collaborations."}),m.jsxs("div",{className:"flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white/90",children:[m.jsx("span",{className:"truncate mr-2 text-cyan-300",children:jt.email}),m.jsx("button",{onClick:_,"data-cursor":"COPY",className:"p-2 rounded-xl bg-white/[0.05] hover:bg-cyan-400 hover:text-black transition-all shrink-0 text-white/70",title:"Copy email to clipboard",children:a?m.jsx(rg,{className:"w-4 h-4 text-emerald-400"}):m.jsx(Ix,{className:"w-4 h-4"})})]}),a&&m.jsx("p",{className:"font-mono text-[11px] text-emerald-400 mt-2 flex items-center gap-1",children:"✓ Copied to clipboard! Ready to paste into your mail app."})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs("a",{href:jt.github,target:"_blank",rel:"noopener noreferrer","data-cursor":"GITHUB",className:"glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group transition-all",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all mb-4",children:m.jsx(qo,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsx("span",{className:"font-mono text-[10px] uppercase text-white/40 block",children:"Profile"}),m.jsx("span",{className:"font-display font-bold text-sm text-white group-hover:text-cyan-300",children:"GitHub"})]})]}),m.jsxs("a",{href:jt.linkedin,target:"_blank",rel:"noopener noreferrer","data-cursor":"LINKEDIN",className:"glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group transition-all",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all mb-4",children:m.jsx(h0,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsx("span",{className:"font-mono text-[10px] uppercase text-white/40 block",children:"Connect"}),m.jsx("span",{className:"font-display font-bold text-sm text-white group-hover:text-cyan-300",children:"LinkedIn"})]})]})]}),m.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3",children:[m.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),m.jsxs("div",{className:"font-mono text-xs text-white/60",children:["Average response latency: ",m.jsx("span",{className:"text-white font-medium",children:"< 24 hours"})]})]})]}),m.jsx("div",{className:"lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative",children:u?m.jsxs("div",{className:"text-center py-12 animate-[fadeIn_0.5s_ease-out]",children:[m.jsx("div",{className:"w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mx-auto mb-4 shadow-[0_0_30px_rgba(0,240,255,0.3)]",children:m.jsx(es,{className:"w-8 h-8"})}),m.jsx("h3",{className:"font-display font-bold text-2xl text-white mb-2",children:"Message Initialized!"}),m.jsx("p",{className:"text-sm text-white/60 max-w-md mx-auto mb-6",children:"Thank you for reaching out. Your default email client is being triggered to send your note directly to Vishesh."}),m.jsx("button",{onClick:()=>d(!1),className:"px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-mono text-cyan-300 border border-white/10",children:"Send Another Message"})]}):m.jsxs("form",{onSubmit:g,className:"space-y-6",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block font-mono text-xs uppercase tracking-wider text-white/50 mb-2",children:"Your Name *"}),m.jsx("input",{type:"text",value:r.name,onChange:y=>e({...r,name:y.target.value}),placeholder:"e.g. Alex Morgan",className:`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/20 focus:outline-none transition-all ${n.name?"border-red-500/60 focus:border-red-500":"border-white/10 focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)]"}`}),n.name&&m.jsx("p",{className:"font-mono text-[11px] text-red-400 mt-1",children:n.name})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block font-mono text-xs uppercase tracking-wider text-white/50 mb-2",children:"Email Address *"}),m.jsx("input",{type:"email",value:r.email,onChange:y=>e({...r,email:y.target.value}),placeholder:"e.g. alex@company.com",className:`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/20 focus:outline-none transition-all ${n.email?"border-red-500/60 focus:border-red-500":"border-white/10 focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)]"}`}),n.email&&m.jsx("p",{className:"font-mono text-[11px] text-red-400 mt-1",children:n.email})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block font-mono text-xs uppercase tracking-wider text-white/50 mb-2",children:"Message Details *"}),m.jsx("textarea",{rows:5,value:r.message,onChange:y=>e({...r,message:y.target.value}),placeholder:"Tell me about your project, idea, or timeline...",className:`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/20 focus:outline-none transition-all resize-none ${n.message?"border-red-500/60 focus:border-red-500":"border-white/10 focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)]"}`}),n.message&&m.jsx("p",{className:"font-mono text-[11px] text-red-400 mt-1",children:n.message})]}),m.jsxs("button",{type:"submit","data-cursor":"SEND",className:"btn-ripple w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center justify-center gap-2 group",children:[m.jsx("span",{children:"SEND MESSAGE"}),m.jsx(bg,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})]})})]})]})]})},ME=()=>{const r=(e,n)=>{var s;e.preventDefault(),(s=document.getElementById(n))==null||s.scrollIntoView({behavior:"smooth"})};return m.jsxs("footer",{className:"relative bg-[#050505] pt-12 pb-16 overflow-hidden",children:[m.jsx("div",{className:"w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-12 shadow-[0_0_15px_#00f0ff]"}),m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[m.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]",children:[m.jsxs("div",{className:"flex flex-col items-center md:items-start text-center md:text-left",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[m.jsx("div",{className:"w-8 h-8 rounded-xl bg-white/[0.05] border border-cyan-400/30 flex items-center justify-center font-display font-extrabold text-xs text-cyan-300",children:"VS"}),m.jsx("span",{className:"font-display font-bold text-lg text-white",children:jt.name})]}),m.jsx("p",{className:"font-mono text-xs text-white/50",children:jt.primaryTitle})]}),m.jsx("div",{className:"flex flex-wrap justify-center gap-6 font-mono text-xs text-white/60",children:["home","about","skills","projects","journey","contact"].map(e=>m.jsx("a",{href:`#${e}`,onClick:n=>r(n,e),className:"hover:text-cyan-300 transition-colors uppercase tracking-wider",children:e},e))}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("a",{href:jt.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white/70 hover:text-cyan-300 transition-all",children:m.jsx(qo,{className:"w-4 h-4"})}),m.jsx("a",{href:jt.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white/70 hover:text-cyan-300 transition-all",children:m.jsx(h0,{className:"w-4 h-4"})}),m.jsx("a",{href:`mailto:${jt.email}`,"aria-label":"Email",className:"p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white/70 hover:text-cyan-300 transition-all",children:m.jsx(Hx,{className:"w-4 h-4"})})]})]}),m.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4",children:[m.jsx("p",{children:"© 2026 Vishesh Singh. All rights reserved."}),m.jsxs("p",{className:"flex items-center gap-1.5 text-[11px]",children:["Designed & engineered with ",m.jsx("span",{className:"text-cyan-400",children:"React"}),", ",m.jsx("span",{className:"text-cyan-400",children:"Three.js"})," & ",m.jsx("span",{className:"text-cyan-400",children:"Tailwind"})]})]})]})]})};function wE(){const[r,e]=dt.useState(!1);return dt.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=new fx({duration:1.2,easing:u=>Math.min(1,1.001-Math.pow(2,-10*u)),smoothWheel:!0,touchMultiplier:1.5});let a;function c(u){s.raf(u),a=requestAnimationFrame(c)}return a=requestAnimationFrame(c),()=>{cancelAnimationFrame(a),s.destroy()}},[]),m.jsxs("div",{className:"relative min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300",children:[r&&m.jsx(px,{onFinish:()=>e(!1)}),m.jsx(hx,{}),m.jsx(sE,{}),m.jsx(oE,{}),m.jsx(Zx,{}),m.jsxs("main",{className:"relative z-10 flex flex-col",children:[m.jsx(aE,{}),m.jsx(lE,{}),m.jsx(fE,{}),m.jsx(pE,{}),m.jsx(mE,{}),m.jsx(gE,{}),m.jsx(xE,{}),m.jsx(_E,{}),m.jsx(SE,{})]}),m.jsx(ME,{})]})}class EE extends Ym.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Portfolio ErrorBoundary caught:",e,n)}render(){var e;return this.state.hasError?m.jsxs("div",{style:{backgroundColor:"#050505",color:"#fff",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",fontFamily:"monospace"},children:[m.jsx("h2",{style:{color:"#00f0ff",marginBottom:"1rem"},children:"Vishesh Singh Portfolio // System Recovery"}),m.jsx("p",{style:{color:"rgba(255,255,255,0.7)",maxWidth:"600px",textAlign:"center",marginBottom:"1.5rem"},children:((e=this.state.error)==null?void 0:e.message)||"A runtime exception occurred."}),m.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"0.75rem 1.5rem",backgroundColor:"#00f0ff",color:"#000",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"},children:"Reload Portfolio"})]}):this.props.children}}ix.createRoot(document.getElementById("root")).render(m.jsx(Ym.StrictMode,{children:m.jsx(EE,{children:m.jsx(wE,{})})}));
