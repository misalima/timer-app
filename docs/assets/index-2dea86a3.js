(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Wr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const K={},xt=[],Ae=()=>{},fs=()=>!1,cs=/^on[^a-z]/,Hn=e=>cs.test(e),Kr=e=>e.startsWith("onUpdate:"),te=Object.assign,Vr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},us=Object.prototype.hasOwnProperty,$=(e,t)=>us.call(e,t),R=Array.isArray,_t=e=>Bn(e)==="[object Map]",ji=e=>Bn(e)==="[object Set]",D=e=>typeof e=="function",ne=e=>typeof e=="string",Xr=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",zi=e=>q(e)&&D(e.then)&&D(e.catch),$i=Object.prototype.toString,Bn=e=>$i.call(e),ds=e=>Bn(e).slice(8,-1),Ui=e=>Bn(e)==="[object Object]",qr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ms=/-(\w)/g,Fe=Yn(e=>e.replace(ms,(t,n)=>n?n.toUpperCase():"")),ps=/\B([A-Z])/g,Tt=Yn(e=>e.replace(ps,"-$1").toLowerCase()),Wn=Yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Yn(e=>e?`on${Wn(e)}`:""),Wt=(e,t)=>!Object.is(e,t),Cn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},yr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ma;const xr=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?bs(r):Jr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(q(e))return e}}const hs=/;(?![^(]*\))/g,vs=/:([^]+)/,gs=/\/\*[^]*?\*\//g;function bs(e){const t={};return e.replace(gs,"").split(hs).forEach(n=>{if(n){const r=n.split(vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Se(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Se(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ys="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xs=Wr(ys);function Hi(e){return!!e||e===""}const _s=e=>ne(e)?e:e==null?"":R(e)||q(e)&&(e.toString===$i||!D(e.toString))?JSON.stringify(e,Bi,2):String(e),Bi=(e,t)=>t&&t.__v_isRef?Bi(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ji(t)?{[`Set(${t.size})`]:[...t.values()]}:q(t)&&!R(t)&&!Ui(t)?String(t):t;let xe;class ws{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ks(e,t=xe){t&&t.active&&t.effects.push(e)}function As(){return xe}const Gr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yi=e=>(e.w&Ge)>0,Wi=e=>(e.n&Ge)>0,Os=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},Es=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Yi(a)&&!Wi(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},_r=new WeakMap;let jt=0,Ge=1;const wr=30;let _e;const ct=Symbol(""),kr=Symbol("");class Zr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ks(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,qe=!0,Ge=1<<++jt,jt<=wr?Os(this):Fa(this),this.fn()}finally{jt<=wr&&Es(this),Ge=1<<--jt,_e=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Ki=[];function Nt(){Ki.push(qe),qe=!1}function Mt(){const e=Ki.pop();qe=e===void 0?!0:e}function me(e,t,n){if(qe&&_e){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Gr()),Vi(a)}}function Vi(e,t){let n=!1;jt<=wr?Wi(e)||(e.n|=Ge,n=!Yi(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function $e(e,t,n,r,a,i){const o=_r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?qr(n)&&s.push(o.get("length")):(s.push(o.get(ct)),_t(e)&&s.push(o.get(kr)));break;case"delete":R(e)||(s.push(o.get(ct)),_t(e)&&s.push(o.get(kr)));break;case"set":_t(e)&&s.push(o.get(ct));break}if(s.length===1)s[0]&&Ar(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ar(Gr(l))}}function Ar(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ra(r);for(const r of n)r.computed||Ra(r)}function Ra(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cs=Wr("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xr)),Ps=Qr(),Ss=Qr(!1,!0),Is=Qr(!0),La=Ts();function Ts(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=U(this)[t].apply(this,n);return Mt(),r}}),e}function Ns(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}function Qr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Xs:Qi:t?Zi:Gi).get(r))return r;const o=R(r);if(!e){if(o&&$(La,a))return Reflect.get(La,a,i);if(a==="hasOwnProperty")return Ns}const s=Reflect.get(r,a,i);return(Xr(a)?Xi.has(a):Cs(a))||(e||me(r,"get",a),t)?s:le(s)?o&&qr(a)?s:s.value:q(s)?e?eo(s):na(s):s}}const Ms=qi(),Fs=qi(!0);function qi(e=!1){return function(n,r,a,i){let o=n[r];if(Ct(o)&&le(o)&&!le(a))return!1;if(!e&&(!Fn(a)&&!Ct(a)&&(o=U(o),a=U(a)),!R(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=R(n)&&qr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Wt(a,o)&&$e(n,"set",r,a):$e(n,"add",r,a)),l}}function Rs(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function Ls(e,t){const n=Reflect.has(e,t);return(!Xr(t)||!Xi.has(t))&&me(e,"has",t),n}function Ds(e){return me(e,"iterate",R(e)?"length":ct),Reflect.ownKeys(e)}const Ji={get:Ps,set:Ms,deleteProperty:Rs,has:Ls,ownKeys:Ds},js={get:Is,set(e,t){return!0},deleteProperty(e,t){return!0}},zs=te({},Ji,{get:Ss,set:Fs}),ea=e=>e,Kn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Kn(a),s=r?ea:n?aa:Kt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function mn(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",ct),Reflect.get(e,"size",e)}function Da(e){e=U(e);const t=U(this);return Kn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function ja(e,t){t=U(t);const n=U(this),{has:r,get:a}=Kn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Wt(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function za(e){const t=U(this),{has:n,get:r}=Kn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&$e(t,"delete",e,void 0),i}function $a(){const e=U(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ea:e?aa:Kt;return!e&&me(s,"iterate",ct),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?ea:t?aa:Kt;return!t&&me(i,"iterate",l?kr:ct),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function $s(){const e={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:Da,set:ja,delete:za,clear:$a,forEach:pn(!1,!1)},t={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:Da,set:ja,delete:za,clear:$a,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[Us,Hs,Bs,Ys]=$s();function ta(e,t){const n=t?e?Ys:Bs:e?Hs:Us;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ws={get:ta(!1,!1)},Ks={get:ta(!1,!0)},Vs={get:ta(!0,!1)},Gi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,Xs=new WeakMap;function qs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Js(e){return e.__v_skip||!Object.isExtensible(e)?0:qs(ds(e))}function na(e){return Ct(e)?e:ra(e,!1,Ji,Ws,Gi)}function Gs(e){return ra(e,!1,zs,Ks,Zi)}function eo(e){return ra(e,!0,js,Vs,Qi)}function ra(e,t,n,r,a){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Js(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return Ct(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function Fn(e){return!!(e&&e.__v_isShallow)}function to(e){return wt(e)||Ct(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function no(e){return Mn(e,"__v_skip",!0),e}const Kt=e=>q(e)?na(e):e,aa=e=>q(e)?eo(e):e;function ro(e){qe&&_e&&(e=U(e),Vi(e.dep||(e.dep=Gr())))}function ao(e,t){e=U(e);const n=e.dep;n&&Ar(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function kt(e){return Zs(e,!1)}function Zs(e,t){return le(e)?e:new Qs(e,t)}class Qs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Kt(t)}get value(){return ro(this),this._value}set value(t){const n=this.__v_isShallow||Fn(t)||Ct(t);t=n?t:U(t),Wt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Kt(t),ao(this))}}function io(e){return le(e)?e.value:e}const el={get:(e,t,n)=>io(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function oo(e){return wt(e)?e:new Proxy(e,el)}class tl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zr(t,()=>{this._dirty||(this._dirty=!0,ao(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return ro(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function nl(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new tl(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Vn(i,t,n)}return a}function Oe(e,t,n,r){if(D(e)){const i=Je(e,t,n,r);return i&&zi(i)&&i.catch(o=>{Vn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Vn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}rl(e,n,a,r)}function rl(e,t,n,r=!0){console.error(e)}let Vt=!1,Or=!1;const se=[];let Ne=0;const At=[];let De=null,it=0;const so=Promise.resolve();let ia=null;function al(e){const t=ia||so;return e?t.then(this?e.bind(this):e):t}function il(e){let t=Ne+1,n=se.length;for(;t<n;){const r=t+n>>>1;Xt(se[r])<e?t=r+1:n=r}return t}function oa(e){(!se.length||!se.includes(e,Vt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?se.push(e):se.splice(il(e.id),0,e),lo())}function lo(){!Vt&&!Or&&(Or=!0,ia=so.then(co))}function ol(e){const t=se.indexOf(e);t>Ne&&se.splice(t,1)}function sl(e){R(e)?At.push(...e):(!De||!De.includes(e,e.allowRecurse?it+1:it))&&At.push(e),lo()}function Ua(e,t=Vt?Ne+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function fo(e){if(At.length){const t=[...new Set(At)];if(At.length=0,De){De.push(...t);return}for(De=t,De.sort((n,r)=>Xt(n)-Xt(r)),it=0;it<De.length;it++)De[it]();De=null,it=0}}const Xt=e=>e.id==null?1/0:e.id,ll=(e,t)=>{const n=Xt(e)-Xt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function co(e){Or=!1,Vt=!0,se.sort(ll);const t=Ae;try{for(Ne=0;Ne<se.length;Ne++){const n=se[Ne];n&&n.active!==!1&&Je(n,null,14)}}finally{Ne=0,se.length=0,fo(),Vt=!1,ia=null,(se.length||At.length)&&co()}}function fl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||K;h&&(a=n.map(_=>ne(_)?_.trim():_)),m&&(a=n.map(yr))}let s,l=r[s=lr(t)]||r[s=lr(Fe(t))];!l&&i&&(l=r[s=lr(Tt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function uo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const u=uo(c,t,!0);u&&(s=!0,te(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(q(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):te(o,i),q(e)&&r.set(e,o),o)}function Xn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Tt(t))||$(e,t))}let ge=null,qn=null;function Rn(e){const t=ge;return ge=e,qn=e&&e.type.__scopeId||null,t}function cl(e){qn=e}function ul(){qn=null}function dl(e,t=ge,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Za(-1);const i=Rn(t);let o;try{o=e(...a)}finally{Rn(i),r._d&&Za(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:_,ctx:F,inheritAttrs:I}=e;let j,k;const A=Rn(e);try{if(n.shapeFlag&4){const C=a||r;j=Te(u.call(C,C,m,i,_,h,F)),k=l}else{const C=t;j=Te(C.length>1?C(i,{attrs:l,slots:s,emit:c}):C(i,null)),k=t.props?l:ml(l)}}catch(C){Ht.length=0,Vn(C,e,1),j=ae(qt)}let M=j;if(k&&I!==!1){const C=Object.keys(k),{shapeFlag:H}=M;C.length&&H&7&&(o&&C.some(Kr)&&(k=pl(k,o)),M=Pt(M,k))}return n.dirs&&(M=Pt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),j=M,Rn(A),j}const ml=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},pl=(e,t)=>{const n={};for(const r in e)(!Kr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function hl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ha(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!Xn(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ha(r,o,c):!0:!!o;return!1}function Ha(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function vl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gl=e=>e.__isSuspense;function bl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):sl(e)}const vn={};function Ot(e,t,n){return mo(e,t,n)}function mo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){var s;const l=As()===((s=re)==null?void 0:s.scope)?re:null;let c,u=!1,m=!1;if(le(e)?(c=()=>e.value,u=Fn(e)):wt(e)?(c=()=>e,r=!0):R(e)?(m=!0,u=e.some(C=>wt(C)||Fn(C)),c=()=>e.map(C=>{if(le(C))return C.value;if(wt(C))return st(C);if(D(C))return Je(C,l,2)})):D(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Oe(e,l,3,[_])}:c=Ae,t&&r){const C=c;c=()=>st(C())}let h,_=C=>{h=A.onStop=()=>{Je(C,l,4)}},F;if(Gt)if(_=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const C=gf();F=C.__watcherHandles||(C.__watcherHandles=[])}else return Ae;let I=m?new Array(e.length).fill(vn):vn;const j=()=>{if(A.active)if(t){const C=A.run();(r||u||(m?C.some((H,ie)=>Wt(H,I[ie])):Wt(C,I)))&&(h&&h(),Oe(t,l,3,[C,I===vn?void 0:m&&I[0]===vn?[]:I,_]),I=C)}else A.run()};j.allowRecurse=!!t;let k;a==="sync"?k=j:a==="post"?k=()=>de(j,l&&l.suspense):(j.pre=!0,l&&(j.id=l.uid),k=()=>oa(j));const A=new Zr(c,k);t?n?j():I=A.run():a==="post"?de(A.run.bind(A),l&&l.suspense):A.run();const M=()=>{A.stop(),l&&l.scope&&Vr(l.scope.effects,A)};return F&&F.push(M),M}function yl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?po(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=re;St(this);const s=mo(a,i.bind(r),n);return o?St(o):ut(),s}function po(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function st(e,t){if(!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))st(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)st(e[n],t);else if(ji(e)||_t(e))e.forEach(n=>{st(n,t)});else if(Ui(e))for(const n in e)st(e[n],t);return e}function xl(e,t){const n=ge;if(n===null)return e;const r=er(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&st(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Nt(),Oe(l,n,8,[e.el,s,e,t]),Mt())}}function Jn(e,t){return D(e)?(()=>te({name:e.name},t,{setup:e}))():e}const Pn=e=>!!e.type.__asyncLoader,ho=e=>e.type.__isKeepAlive;function _l(e,t){vo(e,"a",t)}function wl(e,t){vo(e,"da",t)}function vo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ho(a.parent.vnode)&&kl(r,t,n,a),a=a.parent}}function kl(e,t,n,r){const a=Gn(t,e,r,!0);go(()=>{Vr(r[t],a)},n)}function Gn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Nt(),St(n);const s=Oe(t,n,e,o);return ut(),Mt(),s});return r?a.unshift(i):a.push(i),i}}const Ye=e=>(t,n=re)=>(!Gt||e==="sp")&&Gn(e,(...r)=>t(...r),n),Al=Ye("bm"),Ol=Ye("m"),El=Ye("bu"),Cl=Ye("u"),Pl=Ye("bum"),go=Ye("um"),Sl=Ye("sp"),Il=Ye("rtg"),Tl=Ye("rtc");function Nl(e,t=re){Gn("ec",e,t)}const bo="components";function yo(e,t){return Fl(bo,e,!0,t)||e}const Ml=Symbol.for("v-ndc");function Fl(e,t,n=!0,r=!1){const a=ge||re;if(a){const i=a.type;if(e===bo){const s=mf(i,!1);if(s&&(s===t||s===Fe(t)||s===Wn(Fe(t))))return i}const o=Ba(a[e]||i[e],t)||Ba(a.appContext[e],t);return!o&&r?i:o}}function Ba(e,t){return e&&(e[t]||e[Fe(t)]||e[Wn(Fe(t))])}const Er=e=>e?So(e)?er(e)||e.proxy:Er(e.parent):null,Ut=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$emit:e=>e.emit,$options:e=>sa(e),$forceUpdate:e=>e.f||(e.f=()=>oa(e.update)),$nextTick:e=>e.n||(e.n=al.bind(e.proxy)),$watch:e=>yl.bind(e)}),cr=(e,t)=>e!==K&&!e.__isScriptSetup&&$(e,t),Rl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(cr(r,t))return o[t]=1,r[t];if(a!==K&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==K&&$(n,t))return o[t]=4,n[t];Cr&&(o[t]=0)}}const u=Ut[t];let m,h;if(u)return t==="$attrs"&&me(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&$(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,$(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return cr(a,t)?(a[t]=n,!0):r!==K&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&$(e,o)||cr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Ut,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ya(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Cr=!0;function Ll(e){const t=sa(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&Wa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:_,updated:F,activated:I,deactivated:j,beforeDestroy:k,beforeUnmount:A,destroyed:M,unmounted:C,render:H,renderTracked:ie,renderTriggered:oe,errorCaptured:be,serverPrefetch:ve,expose:Re,inheritAttrs:Rt,components:sn,directives:ln,filters:ir}=t;if(c&&Dl(c,r,null),o)for(const J in o){const Y=o[J];D(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);q(J)&&(e.data=na(J))}if(Cr=!0,i)for(const J in i){const Y=i[J],tt=D(Y)?Y.bind(n,n):D(Y.get)?Y.get.bind(n,n):Ae,fn=!D(Y)&&D(Y.set)?Y.set.bind(n):Ae,nt=je({get:tt,set:fn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ee=>nt.value=Ee})}if(s)for(const J in s)xo(s[J],r,n,J);if(l){const J=D(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{Bl(Y,J[Y])})}u&&Wa(u,e,"c");function fe(J,Y){R(Y)?Y.forEach(tt=>J(tt.bind(n))):Y&&J(Y.bind(n))}if(fe(Al,m),fe(Ol,h),fe(El,_),fe(Cl,F),fe(_l,I),fe(wl,j),fe(Nl,be),fe(Tl,ie),fe(Il,oe),fe(Pl,A),fe(go,C),fe(Sl,ve),R(Re))if(Re.length){const J=e.exposed||(e.exposed={});Re.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:tt=>n[Y]=tt})})}else e.exposed||(e.exposed={});H&&e.render===Ae&&(e.render=H),Rt!=null&&(e.inheritAttrs=Rt),sn&&(e.components=sn),ln&&(e.directives=ln)}function Dl(e,t,n=Ae){R(e)&&(e=Pr(e));for(const r in e){const a=e[r];let i;q(a)?"default"in a?i=Sn(a.from||r,a.default,!0):i=Sn(a.from||r):i=Sn(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Wa(e,t,n){Oe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function xo(e,t,n,r){const a=r.includes(".")?po(n,r):()=>n[r];if(ne(e)){const i=t[e];D(i)&&Ot(a,i)}else if(D(e))Ot(a,e.bind(n));else if(q(e))if(R(e))e.forEach(i=>xo(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Ot(a,i,e)}}function sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Ln(l,c,o,!0)),Ln(l,t,o)),q(t)&&i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=jl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const jl={data:Ka,props:Va,emits:Va,methods:zt,computed:zt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:zt,directives:zt,watch:$l,provide:Ka,inject:zl};function Ka(e,t){return t?e?function(){return te(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function zl(e,t){return zt(Pr(e),Pr(t))}function Pr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function zt(e,t){return e?te(Object.create(null),e,t):t}function Va(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:te(Object.create(null),Ya(e),Ya(t??{})):t}function $l(e,t){if(!e)return t;if(!t)return e;const n=te(Object.create(null),e);for(const r in t)n[r]=ce(e[r],t[r]);return n}function _o(){return{app:null,config:{isNativeTag:fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ul=0;function Hl(e,t){return function(r,a=null){D(r)||(r=te({},r)),a!=null&&!q(a)&&(a=null);const i=_o(),o=new Set;let s=!1;const l=i.app={_uid:Ul++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...u)):D(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=ae(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,er(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Dn=l;try{return c()}finally{Dn=null}}};return l}}let Dn=null;function Bl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Sn(e,t,n=!1){const r=re||ge;if(r||Dn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}function Yl(e,t,n,r=!1){const a={},i={};Mn(i,Qn,1),e.propsDefaults=Object.create(null),wo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Gs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Wl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(Xn(e.emitsOptions,h))continue;const _=t[h];if(l)if($(i,h))_!==i[h]&&(i[h]=_,c=!0);else{const F=Fe(h);a[F]=Sr(l,s,F,_,e,!1)}else _!==i[h]&&(i[h]=_,c=!0)}}}else{wo(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!$(t,m)&&((u=Tt(m))===m||!$(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Sr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&$e(e,"set","$attrs")}function wo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(En(l))continue;const c=t[l];let u;a&&$(a,u=Fe(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Xn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||K;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Sr(a,l,m,c[m],e,!$(c,m))}}return o}function Sr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(St(a),r=c[n]=l.call(null,t),ut())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Tt(n))&&(r=!0))}return r}function ko(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const u=m=>{l=!0;const[h,_]=ko(m,t,!0);te(o,h),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return q(e)&&r.set(e,xt),xt;if(R(i))for(let u=0;u<i.length;u++){const m=Fe(i[u]);Xa(m)&&(o[m]=K)}else if(i)for(const u in i){const m=Fe(u);if(Xa(m)){const h=i[u],_=o[m]=R(h)||D(h)?{type:h}:te({},h);if(_){const F=Ga(Boolean,_.type),I=Ga(String,_.type);_[0]=F>-1,_[1]=I<0||F<I,(F>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return q(e)&&r.set(e,c),c}function Xa(e){return e[0]!=="$"}function qa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ja(e,t){return qa(e)===qa(t)}function Ga(e,t){return R(t)?t.findIndex(n=>Ja(n,e)):D(t)&&Ja(t,e)?0:-1}const Ao=e=>e[0]==="_"||e==="$stable",la=e=>R(e)?e.map(Te):[Te(e)],Kl=(e,t,n)=>{if(t._n)return t;const r=dl((...a)=>la(t(...a)),n);return r._c=!1,r},Oo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ao(a))continue;const i=e[a];if(D(i))t[a]=Kl(a,i,r);else if(i!=null){const o=la(i);t[a]=()=>o}}},Eo=(e,t)=>{const n=la(t);e.slots.default=()=>n},Vl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Mn(t,"_",n)):Oo(t,e.slots={})}else e.slots={},t&&Eo(e,t);Mn(e.slots,Qn,1)},Xl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(te(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Oo(t,a)),o=t}else t&&(Eo(e,t),o={default:1});if(i)for(const s in a)!Ao(s)&&!(s in o)&&delete a[s]};function Ir(e,t,n,r,a=!1){if(R(e)){e.forEach((h,_)=>Ir(h,t&&(R(t)?t[_]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?er(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(u[c]=null,$(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),D(l))Je(l,s,12,[o,u]);else{const h=ne(l),_=le(l);if(h||_){const F=()=>{if(e.f){const I=h?$(m,l)?m[l]:u[l]:l.value;a?R(I)&&Vr(I,i):R(I)?I.includes(i)||I.push(i):h?(u[l]=[i],$(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,de(F,n)):F()}}}const de=bl;function ql(e){return Jl(e)}function Jl(e,t){const n=xr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:_=Ae,insertStaticContent:F}=e,I=(f,d,p,g=null,v=null,x=null,O=!1,y=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Dt(f,d)&&(g=cn(f),Ee(f,v,x,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=d;switch(b){case Zn:j(f,d,p,g);break;case qt:k(f,d,p,g);break;case ur:f==null&&A(d,p,g,O);break;case Ie:sn(f,d,p,g,v,x,O,y,w);break;default:P&1?H(f,d,p,g,v,x,O,y,w):P&6?ln(f,d,p,g,v,x,O,y,w):(P&64||P&128)&&b.process(f,d,p,g,v,x,O,y,w,pt)}T!=null&&v&&Ir(T,f&&f.ref,x,d||f,!d)},j=(f,d,p,g)=>{if(f==null)r(d.el=s(d.children),p,g);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},k=(f,d,p,g)=>{f==null?r(d.el=l(d.children||""),p,g):d.el=f.el},A=(f,d,p,g)=>{[f.el,f.anchor]=F(f.children,d,p,g,f.el,f.anchor)},M=({el:f,anchor:d},p,g)=>{let v;for(;f&&f!==d;)v=h(f),r(f,p,g),f=v;r(d,p,g)},C=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},H=(f,d,p,g,v,x,O,y,w)=>{O=O||d.type==="svg",f==null?ie(d,p,g,v,x,O,y,w):ve(f,d,v,x,O,y,w)},ie=(f,d,p,g,v,x,O,y)=>{let w,b;const{type:T,props:P,shapeFlag:N,transition:L,dirs:z}=f;if(w=f.el=o(f.type,x,P&&P.is,P),N&8?u(w,f.children):N&16&&be(f.children,w,null,g,v,x&&T!=="foreignObject",O,y),z&&rt(f,null,g,"created"),oe(w,f,f.scopeId,O,g),P){for(const B in P)B!=="value"&&!En(B)&&i(w,B,null,P[B],x,f.children,g,v,Le);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Pe(b,g,f)}z&&rt(f,null,g,"beforeMount");const W=(!v||v&&!v.pendingBranch)&&L&&!L.persisted;W&&L.beforeEnter(w),r(w,d,p),((b=P&&P.onVnodeMounted)||W||z)&&de(()=>{b&&Pe(b,g,f),W&&L.enter(w),z&&rt(f,null,g,"mounted")},v)},oe=(f,d,p,g,v)=>{if(p&&_(f,p),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(v){let x=v.subTree;if(d===x){const O=v.vnode;oe(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},be=(f,d,p,g,v,x,O,y,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=y?Xe(f[b]):Te(f[b]);I(null,T,d,p,g,v,x,O,y)}},ve=(f,d,p,g,v,x,O)=>{const y=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=d;w|=f.patchFlag&16;const P=f.props||K,N=d.props||K;let L;p&&at(p,!1),(L=N.onVnodeBeforeUpdate)&&Pe(L,p,d,f),T&&rt(d,f,p,"beforeUpdate"),p&&at(p,!0);const z=v&&d.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,p,g,z,x):O||Y(f,d,y,null,p,g,z,x,!1),w>0){if(w&16)Rt(y,d,P,N,p,g,v);else if(w&2&&P.class!==N.class&&i(y,"class",null,N.class,v),w&4&&i(y,"style",P.style,N.style,v),w&8){const W=d.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],ye=P[Z],ht=N[Z];(ht!==ye||Z==="value")&&i(y,Z,ye,ht,v,f.children,p,g,Le)}}w&1&&f.children!==d.children&&u(y,d.children)}else!O&&b==null&&Rt(y,d,P,N,p,g,v);((L=N.onVnodeUpdated)||T)&&de(()=>{L&&Pe(L,p,d,f),T&&rt(d,f,p,"updated")},g)},Re=(f,d,p,g,v,x,O)=>{for(let y=0;y<d.length;y++){const w=f[y],b=d[y],T=w.el&&(w.type===Ie||!Dt(w,b)||w.shapeFlag&70)?m(w.el):p;I(w,b,T,null,g,v,x,O,!0)}},Rt=(f,d,p,g,v,x,O)=>{if(p!==g){if(p!==K)for(const y in p)!En(y)&&!(y in g)&&i(f,y,p[y],null,O,d.children,v,x,Le);for(const y in g){if(En(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,O,d.children,v,x,Le)}"value"in g&&i(f,"value",p.value,g.value)}},sn=(f,d,p,g,v,x,O,y,w)=>{const b=d.el=f?f.el:s(""),T=d.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:L}=d;L&&(y=y?y.concat(L):L),f==null?(r(b,p,g),r(T,p,g),be(d.children,p,T,v,x,O,y,w)):P>0&&P&64&&N&&f.dynamicChildren?(Re(f.dynamicChildren,N,p,v,x,O,y),(d.key!=null||v&&d===v.subTree)&&Co(f,d,!0)):Y(f,d,p,T,v,x,O,y,w)},ln=(f,d,p,g,v,x,O,y,w)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?v.ctx.activate(d,p,g,O,w):ir(d,p,g,v,x,O,w):Ca(f,d,w)},ir=(f,d,p,g,v,x,O)=>{const y=f.component=lf(f,g,v);if(ho(f)&&(y.ctx.renderer=pt),ff(y),y.asyncDep){if(v&&v.registerDep(y,fe),!f.el){const w=y.subTree=ae(qt);k(null,w,d,p)}return}fe(y,f,d,p,v,x,O)},Ca=(f,d,p)=>{const g=d.component=f.component;if(hl(f,d,p))if(g.asyncDep&&!g.asyncResolved){J(g,d,p);return}else g.next=d,ol(g.update),g.update();else d.el=f.el,g.vnode=d},fe=(f,d,p,g,v,x,O)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:N,parent:L,vnode:z}=f,W=T,B;at(f,!1),T?(T.el=z.el,J(f,T,O)):T=z,P&&Cn(P),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Pe(B,L,T,z),at(f,!0);const Z=fr(f),ye=f.subTree;f.subTree=Z,I(ye,Z,m(ye.el),cn(ye),f,v,x),T.el=Z.el,W===null&&vl(f,Z.el),N&&de(N,v),(B=T.props&&T.props.onVnodeUpdated)&&de(()=>Pe(B,L,T,z),v)}else{let T;const{el:P,props:N}=d,{bm:L,m:z,parent:W}=f,B=Pn(d);if(at(f,!1),L&&Cn(L),!B&&(T=N&&N.onVnodeBeforeMount)&&Pe(T,W,d),at(f,!0),P&&sr){const Z=()=>{f.subTree=fr(f),sr(P,f.subTree,f,v,null)};B?d.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=fr(f);I(null,Z,p,g,f,v,x),d.el=Z.el}if(z&&de(z,v),!B&&(T=N&&N.onVnodeMounted)){const Z=d;de(()=>Pe(T,W,Z),v)}(d.shapeFlag&256||W&&Pn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,v),f.isMounted=!0,d=p=g=null}},w=f.effect=new Zr(y,()=>oa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,at(f,!0),b()},J=(f,d,p)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,Wl(f,d.props,g,p),Xl(f,d.children,p),Nt(),Ua(),Mt()},Y=(f,d,p,g,v,x,O,y,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=d.children,{patchFlag:N,shapeFlag:L}=d;if(N>0){if(N&128){fn(b,P,p,g,v,x,O,y,w);return}else if(N&256){tt(b,P,p,g,v,x,O,y,w);return}}L&8?(T&16&&Le(b,v,x),P!==b&&u(p,P)):T&16?L&16?fn(b,P,p,g,v,x,O,y,w):Le(b,v,x,!0):(T&8&&u(p,""),L&16&&be(P,p,g,v,x,O,y,w))},tt=(f,d,p,g,v,x,O,y,w)=>{f=f||xt,d=d||xt;const b=f.length,T=d.length,P=Math.min(b,T);let N;for(N=0;N<P;N++){const L=d[N]=w?Xe(d[N]):Te(d[N]);I(f[N],L,p,null,v,x,O,y,w)}b>T?Le(f,v,x,!0,!1,P):be(d,p,g,v,x,O,y,w,P)},fn=(f,d,p,g,v,x,O,y,w)=>{let b=0;const T=d.length;let P=f.length-1,N=T-1;for(;b<=P&&b<=N;){const L=f[b],z=d[b]=w?Xe(d[b]):Te(d[b]);if(Dt(L,z))I(L,z,p,null,v,x,O,y,w);else break;b++}for(;b<=P&&b<=N;){const L=f[P],z=d[N]=w?Xe(d[N]):Te(d[N]);if(Dt(L,z))I(L,z,p,null,v,x,O,y,w);else break;P--,N--}if(b>P){if(b<=N){const L=N+1,z=L<T?d[L].el:g;for(;b<=N;)I(null,d[b]=w?Xe(d[b]):Te(d[b]),p,z,v,x,O,y,w),b++}}else if(b>N)for(;b<=P;)Ee(f[b],v,x,!0),b++;else{const L=b,z=b,W=new Map;for(b=z;b<=N;b++){const pe=d[b]=w?Xe(d[b]):Te(d[b]);pe.key!=null&&W.set(pe.key,b)}let B,Z=0;const ye=N-z+1;let ht=!1,Ia=0;const Lt=new Array(ye);for(b=0;b<ye;b++)Lt[b]=0;for(b=L;b<=P;b++){const pe=f[b];if(Z>=ye){Ee(pe,v,x,!0);continue}let Ce;if(pe.key!=null)Ce=W.get(pe.key);else for(B=z;B<=N;B++)if(Lt[B-z]===0&&Dt(pe,d[B])){Ce=B;break}Ce===void 0?Ee(pe,v,x,!0):(Lt[Ce-z]=b+1,Ce>=Ia?Ia=Ce:ht=!0,I(pe,d[Ce],p,null,v,x,O,y,w),Z++)}const Ta=ht?Gl(Lt):xt;for(B=Ta.length-1,b=ye-1;b>=0;b--){const pe=z+b,Ce=d[pe],Na=pe+1<T?d[pe+1].el:g;Lt[b]===0?I(null,Ce,p,Na,v,x,O,y,w):ht&&(B<0||b!==Ta[B]?nt(Ce,p,Na,2):B--)}}},nt=(f,d,p,g,v=null)=>{const{el:x,type:O,transition:y,children:w,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,d,p,g);return}if(b&128){f.suspense.move(d,p,g);return}if(b&64){O.move(f,d,p,pt);return}if(O===Ie){r(x,d,p);for(let P=0;P<w.length;P++)nt(w[P],d,p,g);r(f.anchor,d,p);return}if(O===ur){M(f,d,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,d,p),de(()=>y.enter(x),v);else{const{leave:P,delayLeave:N,afterLeave:L}=y,z=()=>r(x,d,p),W=()=>{P(x,()=>{z(),L&&L()})};N?N(x,z,W):W()}else r(x,d,p)},Ee=(f,d,p,g=!1,v=!1)=>{const{type:x,props:O,ref:y,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:N}=f;if(y!=null&&Ir(y,null,p,f,!0),T&256){d.ctx.deactivate(f);return}const L=T&1&&N,z=!Pn(f);let W;if(z&&(W=O&&O.onVnodeBeforeUnmount)&&Pe(W,d,f),T&6)ls(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}L&&rt(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,p,v,pt,g):b&&(x!==Ie||P>0&&P&64)?Le(b,d,p,!1,!0):(x===Ie&&P&384||!v&&T&16)&&Le(w,d,p),g&&Pa(f)}(z&&(W=O&&O.onVnodeUnmounted)||L)&&de(()=>{W&&Pe(W,d,f),L&&rt(f,null,d,"unmounted")},p)},Pa=f=>{const{type:d,el:p,anchor:g,transition:v}=f;if(d===Ie){ss(p,g);return}if(d===ur){C(f);return}const x=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:y}=v,w=()=>O(p,x);y?y(f.el,x,w):w()}else x()},ss=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},ls=(f,d,p)=>{const{bum:g,scope:v,update:x,subTree:O,um:y}=f;g&&Cn(g),v.stop(),x&&(x.active=!1,Ee(O,f,d,p)),y&&de(y,d),de(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Le=(f,d,p,g=!1,v=!1,x=0)=>{for(let O=x;O<f.length;O++)Ee(f[O],d,p,g,v)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Sa=(f,d,p)=>{f==null?d._vnode&&Ee(d._vnode,null,null,!0):I(d._vnode||null,f,d,null,null,null,p),Ua(),fo(),d._vnode=f},pt={p:I,um:Ee,m:nt,r:Pa,mt:ir,mc:be,pc:Y,pbc:Re,n:cn,o:e};let or,sr;return t&&([or,sr]=t(pt)),{render:Sa,hydrate:or,createApp:Hl(Sa,or)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Co(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||Co(o,s)),s.type===Zn&&(s.el=o.el)}}function Gl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Zl=e=>e.__isTeleport,Ie=Symbol.for("v-fgt"),Zn=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),ur=Symbol.for("v-stc"),Ht=[];let we=null;function fa(e=!1){Ht.push(we=e?null:[])}function Ql(){Ht.pop(),we=Ht[Ht.length-1]||null}let Jt=1;function Za(e){Jt+=e}function ef(e){return e.dynamicChildren=Jt>0?we||xt:null,Ql(),Jt>0&&we&&we.push(e),e}function ca(e,t,n,r,a,i){return ef(ee(e,t,n,r,a,i,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Po=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||le(e)||D(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Po(t),ref:t&&In(t),scopeId:qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ge};return s?(ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Jt>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const ae=tf;function tf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ml)&&(e=qt),Tr(e)){const s=Pt(e,t,!0);return n&&ua(s,n),Jt>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(pf(e)&&(e=e.__vccOpts),t){t=nf(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Se(s)),q(l)&&(to(l)&&!R(l)&&(l=te({},l)),t.style=Jr(l))}const o=ne(e)?1:gl(e)?128:Zl(e)?64:q(e)?4:D(e)?2:0;return ee(e,t,n,r,a,o,i,!0)}function nf(e){return e?to(e)||Qn in e?te({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?af(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Po(s),ref:t&&t.ref?n&&a?R(a)?a.concat(In(t)):[a,In(t)]:In(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function rf(e=" ",t=0){return ae(Zn,null,e,t)}function Te(e){return e==null||typeof e=="boolean"?ae(qt):R(e)?ae(Ie,null,e.slice()):typeof e=="object"?Xe(e):ae(Zn,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Qn in t)?t._ctx=ge:a===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),r&64?(n=16,t=[rf(t)]):n=8);e.children=t,e.shapeFlag|=n}function af(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Se([t.class,r.class]));else if(a==="style")t.style=Jr([t.style,r.style]);else if(Hn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Oe(e,t,7,[n,r])}const of=_o();let sf=0;function lf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||of,i={uid:sf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ko(r,a),emitsOptions:uo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=fl.bind(null,i),e.ce&&e.ce(i),i}let re=null,da,vt,Qa="__VUE_INSTANCE_SETTERS__";(vt=xr()[Qa])||(vt=xr()[Qa]=[]),vt.push(e=>re=e),da=e=>{vt.length>1?vt.forEach(t=>t(e)):vt[0](e)};const St=e=>{da(e),e.scope.on()},ut=()=>{re&&re.scope.off(),da(null)};function So(e){return e.vnode.shapeFlag&4}let Gt=!1;function ff(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=So(e);Yl(e,n,a,t),Vl(e,r);const i=a?cf(e,t):void 0;return Gt=!1,i}function cf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=no(new Proxy(e.ctx,Rl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?df(e):null;St(e),Nt();const i=Je(r,e,0,[e.props,a]);if(Mt(),ut(),zi(i)){if(i.then(ut,ut),t)return i.then(o=>{ei(e,o,t)}).catch(o=>{Vn(o,e,0)});e.asyncDep=i}else ei(e,i,t)}else Io(e,t)}function ei(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=oo(t)),Io(e,n)}let ti;function Io(e,t,n){const r=e.type;if(!e.render){if(!t&&ti&&!r.render){const a=r.template||sa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=te(te({isCustomElement:i,delimiters:s},o),l);r.render=ti(a,c)}}e.render=r.render||Ae}St(e),Nt(),Ll(e),Mt(),ut()}function uf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function df(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return uf(e)},slots:e.slots,emit:e.emit,expose:t}}function er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(oo(no(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ut)return Ut[n](e)},has(t,n){return n in t||n in Ut}}))}function mf(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function pf(e){return D(e)&&"__vccOpts"in e}const je=(e,t)=>nl(e,t,Gt);function hf(e,t,n){const r=arguments.length;return r===2?q(t)&&!R(t)?Tr(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),ae(e,t,n))}const vf=Symbol.for("v-scx"),gf=()=>Sn(vf),bf="3.3.4",yf="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,ni=ot&&ot.createElement("template"),xf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(yf,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ni.innerHTML=r?`<svg>${e}</svg>`:e;const s=ni.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function _f(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&Nr(r,i,"");for(const i in n)Nr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ri=/\s*!important$/;function Nr(e,t,n){if(R(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kf(e,t);ri.test(n)?e.setProperty(Tt(r),n.replace(ri,""),"important"):e[r]=n}}const ai=["Webkit","Moz","ms"],dr={};function kf(e,t){const n=dr[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return dr[t]=r;r=Wn(r);for(let a=0;a<ai.length;a++){const i=ai[a]+r;if(i in e)return dr[t]=i}return t}const ii="http://www.w3.org/1999/xlink";function Af(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ii,t.slice(6,t.length)):e.setAttributeNS(ii,t,n);else{const i=xs(t);n==null||i&&!Hi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Of(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Hi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function gt(e,t,n,r){e.addEventListener(t,n,r)}function Ef(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pf(t);if(r){const c=i[t]=Tf(r,a);gt(e,s,c,l)}else o&&(Ef(e,s,o,l),i[t]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(oi.test(e)){t={};let r;for(;r=e.match(oi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let mr=0;const Sf=Promise.resolve(),If=()=>mr||(Sf.then(()=>mr=0),mr=Date.now());function Tf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=If(),n}function Nf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const si=/^on[a-z]/,Mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?_f(e,r,a):t==="style"?wf(e,n,r):Hn(t)?Kr(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ff(e,t,r,a))?Of(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Af(e,t,r,a))};function Ff(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&ne(n)?!1:t in e}const li=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>Cn(t,n):t};function Rf(e){e.target.composing=!0}function fi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Lf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=li(a);const i=r||a.props&&a.props.type==="number";gt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=yr(s)),e._assign(s)}),n&&gt(e,"change",()=>{e.value=e.value.trim()}),t||(gt(e,"compositionstart",Rf),gt(e,"compositionend",fi),gt(e,"change",fi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=li(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&yr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Df=te({patchProp:Mf},xf);let ci;function jf(){return ci||(ci=ql(Df))}const zf=(...e)=>{const t=jf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=$f(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function $f(e){return ne(e)?document.querySelector(e):e}const Uf={class:"circle-container"},Hf={class:"circle"},Bf=Jn({__name:"TimeDisplay",props:{duration:{},isStarted:{type:Boolean}},emits:["timeDecrease"],setup(e,{emit:t}){const n=e,r=kt("00:00:00"),a=kt("fa-volume-high");let i,o=kt(!0);const s=je(()=>n.isStarted),l=je(()=>n.duration);let c=n.duration;const u=()=>{a.value==="fa-volume-high"?(a.value="fa-volume-mute",o.value=!1):(a.value="fa-volume-high",o.value=!0)},m=function(){console.log(c),i=setInterval(()=>{c<=0?clearInterval(i):(console.log(c),_(c-1),c--,o.value&&new Audio("./assets/tick.wav").play(),t("timeDecrease")),c==0&&(o.value?new Audio("./assets/time-up.wav").play():setTimeout(()=>{alert("Time is up!")},1e3))},1e3)},h=function(){clearInterval(i)};function _(F){let I,j,k;I=Math.floor(F/60/60),j=Math.floor(F/60-I*60),k=Math.floor(F%60);let A=I<10?"0"+I:I,M=j<10?"0"+j:j,C=k<10?"0"+k:k;r.value=`${A}:${M}:${C}`}return Ot(l,()=>{c=l.value,_(c)}),Ot(s,()=>{s.value?m():h()}),(F,I)=>{const j=yo("font-awesome-icon");return fa(),ca("div",Uf,[ee("div",Hf,[ee("h2",{class:Se({"clock-stopped":!s.value})},_s(r.value),3),ee("button",{onClick:u},[ae(j,{icon:`fa-solid ${a.value}`,size:"l"},null,8,["icon"])])])])}}});const ma=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Yf=ma(Bf,[["__scopeId","data-v-1d9efc4d"]]),Wf={class:"container"},Kf={class:"control-buttons"},Vf={class:"presets-buttons"},Xf=["disabled"],qf=["disabled"],Jf=["disabled"],Gf=["disabled"],Zf=Jn({__name:"Timer",setup(e){const t=kt("00:00:00"),n=kt(!1);let r=kt(0);function a(c){console.log(c);const u=parseInt(c.slice(0,2)),m=parseInt(c.slice(3,5)),_=parseInt(c.slice(6,8))+m*60+u*3600;_>=0&&_<36e4?(r.value=_,console.log(r.value)):alert("Invalid input! Enter a positive number")}function i(c){r.value+=c}function o(){n.value||r.value>0&&(console.log("toggle"),n.value=!0,t.value="00:00:00")}function s(){n.value&&(console.log("toggle"),n.value=!1)}function l(){r.value--,r.value==0&&(n.value=!1)}return(c,u)=>{const m=yo("font-awesome-icon");return fa(),ca("div",Wf,[ae(Yf,{onTimeDecrease:l,duration:io(r),"is-started":n.value},null,8,["duration","is-started"]),ee("div",Kf,[ee("button",{class:Se({disabled:n.value}),title:"Start",onClick:u[0]||(u[0]=h=>o())},[ae(m,{icon:"fa-solid fa-play",size:"xl"})],2),ee("button",{class:Se({disabled:!n.value}),title:"Pause/Stop",onClick:u[1]||(u[1]=h=>s())},[ae(m,{icon:"fa-solid fa-pause",size:"xl"})],2),ee("button",{title:"+10 Seconds",onClick:u[2]||(u[2]=h=>i(10))},[ae(m,{icon:"fa-solid fa-plus-circle",size:"xl"})])]),ee("div",Vf,[ee("button",{title:"Set Preset",class:Se({disabled:n.value}),disabled:n.value,onClick:u[3]||(u[3]=h=>a("01:00:00"))}," 1h ",10,Xf),ee("button",{title:"Set Preset",class:Se({disabled:n.value}),disabled:n.value,onClick:u[4]||(u[4]=h=>a("00:30:00"))}," 30min ",10,qf),ee("button",{title:"Set Preset",class:Se({disabled:n.value}),disabled:n.value,onClick:u[5]||(u[5]=h=>a("00:15:00"))}," 15min ",10,Jf)]),xl(ee("input",{type:"time",step:"2","onUpdate:modelValue":u[6]||(u[6]=h=>t.value=h)},null,512),[[Lf,t.value]]),ee("button",{class:Se([{disabled:n.value},"set-custom-btn"]),disabled:n.value,onClick:u[7]||(u[7]=h=>a(t.value))},"Set custom time",10,Gf)])}}});const Qf=ma(Zf,[["__scopeId","data-v-15654da3"]]),ec=e=>(cl("data-v-8e92dcd0"),e=e(),ul(),e),tc=ec(()=>ee("header",null,[ee("h1",null,"Timer App")],-1)),nc=Jn({__name:"App",setup(e){return(t,n)=>(fa(),ca(Ie,null,[tc,ee("main",null,[ae(Qf)])],64))}});const rc=ma(nc,[["__scopeId","data-v-8e92dcd0"]]);function ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ui(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function ac(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function di(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ic(e,t,n){return t&&di(e.prototype,t),n&&di(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e,t){return sc(e)||fc(e,t)||To(e,t)||uc()}function rn(e){return oc(e)||lc(e)||To(e)||cc()}function oc(e){if(Array.isArray(e))return Mr(e)}function sc(e){if(Array.isArray(e))return e}function lc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function To(e,t){if(e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mi=function(){},ha={},No={},Mo=null,Fo={mark:mi,measure:mi};try{typeof window<"u"&&(ha=window),typeof document<"u"&&(No=document),typeof MutationObserver<"u"&&(Mo=MutationObserver),typeof performance<"u"&&(Fo=performance)}catch{}var dc=ha.navigator||{},pi=dc.userAgent,hi=pi===void 0?"":pi,Ze=ha,X=No,vi=Mo,gn=Fo;Ze.document;var We=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Ro=~hi.indexOf("MSIE")||~hi.indexOf("Trident/"),bn,yn,xn,_n,wn,Ue="___FONT_AWESOME___",Fr=16,Lo="fa",Do="svg-inline--fa",dt="data-fa-i2svg",Rr="data-fa-pseudo-element",mc="data-fa-pseudo-element-pending",va="data-prefix",ga="data-icon",gi="fontawesome-i2svg",pc="async",hc=["HTML","HEAD","STYLE","SCRIPT"],jo=function(){try{return!0}catch{return!1}}(),V="classic",G="sharp",ba=[V,G];function an(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Zt=an((bn={},Q(bn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Q(bn,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),bn)),Qt=an((yn={},Q(yn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Q(yn,G,{solid:"fass",regular:"fasr",light:"fasl"}),yn)),en=an((xn={},Q(xn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Q(xn,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),xn)),vc=an((_n={},Q(_n,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Q(_n,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),_n)),gc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,zo="fa-layers-text",bc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yc=an((wn={},Q(wn,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Q(wn,G,{900:"fass",400:"fasr",300:"fasl"}),wn)),$o=[1,2,3,4,5,6,7,8,9,10],xc=$o.concat([11,12,13,14,15,16,17,18,19,20]),_c=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Qt[V]).map(tn.add.bind(tn));Object.keys(Qt[G]).map(tn.add.bind(tn));var wc=[].concat(ba,rn(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat($o.map(function(e){return"".concat(e,"x")})).concat(xc.map(function(e){return"w-".concat(e)})),Bt=Ze.FontAwesomeConfig||{};function kc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ac(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Oc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Oc.forEach(function(e){var t=pa(e,2),n=t[0],r=t[1],a=Ac(kc(n));a!=null&&(Bt[r]=a)})}var Uo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lo,replacementClass:Do,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var It=E(E({},Uo),Bt);It.autoReplaceSvg||(It.observeMutations=!1);var S={};Object.keys(Uo).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){It[e]=n,Yt.forEach(function(r){return r(S)})},get:function(){return It[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){It.cssPrefix=t,Yt.forEach(function(n){return n(S)})},get:function(){return It.cssPrefix}});Ze.FontAwesomeConfig=S;var Yt=[];function Ec(e){return Yt.push(e),function(){Yt.splice(Yt.indexOf(e),1)}}var Ve=Fr,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cc(e){if(!(!e||!We)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Pc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var e=12,t="";e-- >0;)t+=Pc[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ya(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ho(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ho(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function xa(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function Ic(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Tc(e){var t=e.transform,n=e.width,r=n===void 0?Fr:n,a=e.height,i=a===void 0?Fr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ro?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Nc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bo(){var e=Lo,t=Do,n=S.cssPrefix,r=S.replacementClass,a=Nc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var bi=!1;function pr(){S.autoAddCss&&!bi&&(Cc(Bo()),bi=!0)}var Mc={mixout:function(){return{dom:{css:Bo,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},He=Ze||{};He[Ue]||(He[Ue]={});He[Ue].styles||(He[Ue].styles={});He[Ue].hooks||(He[Ue].hooks={});He[Ue].shims||(He[Ue].shims=[]);var ke=He[Ue],Yo=[],Fc=function e(){X.removeEventListener("DOMContentLoaded",e),zn=1,Yo.map(function(t){return t()})},zn=!1;We&&(zn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),zn||X.addEventListener("DOMContentLoaded",Fc));function Rc(e){We&&(zn?setTimeout(e,0):Yo.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ho(e):"<".concat(t," ").concat(Sc(r),">").concat(i.map(on).join(""),"</").concat(t,">")}function yi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Lc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},hr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Lc(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function Dc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Lr(e){var t=Dc(e);return t.length===1?t[0].toString(16):null}function jc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function xi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=xi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,xi(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var kn,An,On,bt=ke.styles,zc=ke.shims,$c=(kn={},Q(kn,V,Object.values(en[V])),Q(kn,G,Object.values(en[G])),kn),_a=null,Wo={},Ko={},Vo={},Xo={},qo={},Uc=(An={},Q(An,V,Object.keys(Zt[V])),Q(An,G,Object.keys(Zt[G])),An);function Hc(e){return~wc.indexOf(e)}function Bc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Hc(a)?a:null}var Jo=function(){var t=function(i){return hr(bt,function(o,s,l){return o[l]=hr(s,i,{}),o},{})};Wo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ko=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in bt||S.autoFetchSvg,r=hr(zc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Vo=r.names,Xo=r.unicodes,_a=nr(S.styleDefault,{family:S.familyDefault})};Ec(function(e){_a=nr(e.styleDefault,{family:S.familyDefault})});Jo();function wa(e,t){return(Wo[e]||{})[t]}function Yc(e,t){return(Ko[e]||{})[t]}function ft(e,t){return(qo[e]||{})[t]}function Go(e){return Vo[e]||{prefix:null,iconName:null}}function Wc(e){var t=Xo[e],n=wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return _a}var ka=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Zt[r][e],i=Qt[r][e]||Qt[r][a],o=e in ke.styles?e:null;return i||o||null}var _i=(On={},Q(On,V,Object.keys(en[V])),Q(On,G,Object.keys(en[G])),On);function rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Q(t,V,"".concat(S.cssPrefix,"-").concat(V)),Q(t,G,"".concat(S.cssPrefix,"-").concat(G)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return _i[V].includes(c)}))&&(s=V),(e.includes(i[G])||e.some(function(c){return _i[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,u){var m=Bc(S.cssPrefix,u);if(bt[u]?(u=$c[s].includes(u)?vc[s][u]:u,o=u,c.prefix=u):Uc[s].indexOf(u)>-1?(o=u,c.prefix=nr(u,{family:s})):m?c.iconName=m:u!==S.replacementClass&&u!==i[V]&&u!==i[G]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?Go(c.iconName):{},_=ft(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||_||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!bt.far&&bt.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},ka());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(bt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var Kc=function(){function e(){ac(this,e),this.definitions={}}return ic(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Dr(s,o[s]);var l=en[V][s];l&&Dr(l,o[s]),Jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),wi=[],yt={},Et={},Vc=Object.keys(Et);function Xc(e,t){var n=t.mixoutsTo;return wi=e,yt={},Object.keys(Et).forEach(function(r){Vc.indexOf(r)===-1&&delete Et[r]}),wi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=yt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=yt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function zr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ft(n,t)||t,yi(Zo.definitions,n,t)||yi(ke.styles,n,t)}var Zo=new Kc,qc=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,mt("noAuto")},Jc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(mt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Rc(function(){Zc({autoReplaceSvgRoot:n}),mt("watch",t)})}},Gc={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(gc))){var a=rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ft(i,t)||t}}}},he={noAuto:qc,config:S,dom:Jc,parse:Gc,library:Zo,findIconDefinition:zr,toHtml:on},Zc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||S.autoFetchSvg)&&We&&S.autoReplaceSvg&&he.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Qc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=tr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function eu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,_=h===void 0?!1:h,F=r.found?r:n,I=F.width,j=F.height,k=a==="fak",A=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(j)})},C=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/j*16*.0625,"em")}:{};_&&(M.attributes[dt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||nn())},children:[l]}),delete M.attributes.title);var H=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},C),m.styles)}),ie=r.found&&n.found?Be("generateAbstractMask",H)||{children:[],attributes:{}}:Be("generateAbstractIcon",H)||{children:[],attributes:{}},oe=ie.children,be=ie.attributes;return H.children=oe,H.attributes=be,s?eu(H):Qc(H)}function ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[dt]="");var u=E({},o.styles);xa(a)&&(u.transform=Tc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=tr(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function tu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=ke.styles;function $r(e){var t=e[0],n=e[1],r=e.slice(4),a=pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var nu={found:!1,width:512,height:512};function ru(e,t){!jo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ur(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Go(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r($r(o))}ru(e,t),r(E(E({},nu),{},{icon:S.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var Ai=function(){},Hr=S.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:Ai,measure:Ai},$t='FA "6.4.0"',au=function(t){return Hr.mark("".concat($t," ").concat(t," begins")),function(){return Qo(t)}},Qo=function(t){Hr.mark("".concat($t," ").concat(t," ends")),Hr.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},Oa={begin:au,end:Qo},Tn=function(){};function Oi(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function iu(e){var t=e.getAttribute?e.getAttribute(va):null,n=e.getAttribute?e.getAttribute(ga):null;return t&&n}function ou(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function su(){if(S.autoReplaceSvg===!0)return Nn.replace;var e=Nn[S.autoReplaceSvg];return e||Nn.replace}function lu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function fu(e){return X.createElement(e)}function es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?lu:fu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(es(o,{ceFn:r}))}),a}function cu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(es(a),n)}),n.getAttribute(dt)===null&&S.keepOriginalSource){var r=X.createComment(cu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ya(n).indexOf(S.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=o}};function Ei(e){e()}function ts(e,t){var n=typeof t=="function"?t:Tn;if(e.length===0)n();else{var r=Ei;S.mutateApproach===pc&&(r=Ze.requestAnimationFrame||Ei),r(function(){var a=su(),i=Oa.begin("mutate");e.map(a),i(),n()})}}var Ea=!1;function ns(){Ea=!0}function Br(){Ea=!1}var $n=null;function Ci(e){if(vi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Tn:t,r=e.nodeCallback,a=r===void 0?Tn:r,i=e.pseudoElementsCallback,o=i===void 0?Tn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;$n=new vi(function(c){if(!Ea){var u=Qe();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Oi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Oi(m.target)&&~_c.indexOf(m.attributeName))if(m.attributeName==="class"&&iu(m.target)){var h=rr(ya(m.target)),_=h.prefix,F=h.iconName;m.target.setAttribute(va,_||u),F&&m.target.setAttribute(ga,F)}else ou(m.target)&&a(m.target)})}}),We&&$n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uu(){$n&&$n.disconnect()}function du(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function mu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=rr(ya(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Yc(a.prefix,e.innerText)||wa(a.prefix,Lr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function pu(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function hu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mu(e),r=n.iconName,a=n.prefix,i=n.rest,o=pu(e),s=jr("parseNodeAttributes",{},e),l=t.styleParser?du(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var vu=ke.styles;function rs(e){var t=S.autoReplaceSvg==="nest"?Pi(e,{styleParser:!1}):Pi(e);return~t.extra.classes.indexOf(zo)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var et=new Set;ba.map(function(e){et.add("fa-".concat(e))});Object.keys(Zt[V]).map(et.add.bind(et));Object.keys(Zt[G]).map(et.add.bind(et));et=rn(et);function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(gi,"-").concat(m))},a=function(m){return n.remove("".concat(gi,"-").concat(m))},i=S.autoFetchSvg?et:ba.map(function(u){return"fa-".concat(u)}).concat(Object.keys(vu));i.includes("fa")||i.push("fa");var o=[".".concat(zo,":not([").concat(dt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(dt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Oa.begin("onTree"),c=s.reduce(function(u,m){try{var h=rs(m);h&&u.push(h)}catch(_){jo||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){ts(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rs(e).then(function(n){n&&ts([n],t)})}function bu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var yu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,_=n.titleId,F=_===void 0?null:_,I=n.classes,j=I===void 0?[]:I,k=n.attributes,A=k===void 0?{}:k,M=n.styles,C=M===void 0?{}:M;if(t){var H=t.prefix,ie=t.iconName,oe=t.icon;return ar(E({type:"icon"},t),function(){return mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(h?A["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(F||nn()):(A["aria-hidden"]="true",A.focusable="false")),Aa({icons:{main:$r(oe),mask:l?$r(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ie,transform:E(E({},Me),a),symbol:o,title:h,maskId:u,titleId:F,extra:{attributes:A,styles:C,classes:j}})})}},xu={mixout:function(){return{icon:bu(yu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Si,n.nodeCallback=gu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Si(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(_,F){Promise.all([Ur(a,s),u.iconName?Ur(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var j=pa(I,2),k=j[0],A=j[1];_([n,Aa({icons:{main:k,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(a.style=l);var c;return xa(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},_u={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ar({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:o}]})}}}},wu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return ar({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),tu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},ku={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,_=h===void 0?{}:h;return ar({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),ki({content:n,transform:E(E({},Me),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(S.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ro){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Au=new RegExp('"',"ug"),Ii=[1105920,1112319];function Ou(e){var t=e.replace(Au,""),n=jc(t,0),r=n>=Ii[0]&&n<=Ii[1],a=t.length===2?t[0]===t[1]:!1;return{value:Lr(a?t[0]:t),isSecondary:r||a}}function Ti(e,t){var n="".concat(mc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(oe){return oe.getAttribute(Rr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(bc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?G:V,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[h][l[2].toLowerCase()]:yc[h][c],F=Ou(m),I=F.value,j=F.isSecondary,k=l[0].startsWith("FontAwesome"),A=wa(_,I),M=A;if(k){var C=Wc(I);C.iconName&&C.prefix&&(A=C.iconName,_=C.prefix)}if(A&&!j&&(!o||o.getAttribute(va)!==_||o.getAttribute(ga)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var H=hu(),ie=H.extra;ie.attributes[Rr]=t,Ur(A,_).then(function(oe){var be=Aa(E(E({},H),{},{icons:{main:oe,mask:ka()},prefix:_,iconName:M,extra:ie,watchable:!0})),ve=X.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=be.map(function(Re){return on(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Eu(e){return Promise.all([Ti(e,"::before"),Ti(e,"::after")])}function Cu(e){return e.parentNode!==document.head&&!~hc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ni(e){if(We)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(Cu).map(Eu),a=Oa.begin("searchPseudoElements");ns(),Promise.all(r).then(function(){a(),Br(),t()}).catch(function(){a(),Br(),n()})})}var Pu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ni,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;S.searchPseudoElements&&Ni(a)}}},Mi=!1,Su={mixout:function(){return{dom:{unwatch:function(){ns(),Mi=!0}}}},hooks:function(){return{bootstrap:function(){Ci(jr("mutationObserverCallbacks",{}))},noAuto:function(){uu()},watch:function(n){var r=n.observeMutationsRoot;Mi?Br():Ci(jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Iu={mixout:function(){return{parse:{transform:function(n){return Fi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Fi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Tu(e){return e.tag==="g"?e.children:[e]}var Nu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?rr(a.split(" ").map(function(o){return o.trim()})):ka();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,_=Ic({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:E(E({},gr),{},{fill:"white"})},I=u.children?{children:u.children.map(Ri)}:{},j={tag:"g",attributes:E({},_.inner),children:[Ri(E({tag:u.tag,attributes:E(E({},u.attributes),_.path)},I))]},k={tag:"g",attributes:E({},_.outer),children:[j]},A="mask-".concat(s||nn()),M="clip-".concat(s||nn()),C={tag:"mask",attributes:E(E({},gr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Tu(h)},C]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(A,")")},gr)}),{children:r,attributes:a}}}},Mu={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ru=[Mc,xu,_u,wu,ku,Pu,Su,Iu,Nu,Mu,Fu];Xc(Ru,{mixoutsTo:he});he.noAuto;he.config;var Lu=he.library;he.dom;var Yr=he.parse;he.findIconDefinition;he.toHtml;var Du=he.icon;he.layer;he.text;he.counter;function Li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Li(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ju(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function zu(e,t){if(e==null)return{};var n=ju(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};(function(e){(function(t){var n=function(k,A,M){if(!c(A)||m(A)||h(A)||_(A)||l(A))return A;var C,H=0,ie=0;if(u(A))for(C=[],ie=A.length;H<ie;H++)C.push(n(k,A[H],M));else{C={};for(var oe in A)Object.prototype.hasOwnProperty.call(A,oe)&&(C[k(oe,M)]=n(k,A[oe],M))}return C},r=function(k,A){A=A||{};var M=A.separator||"_",C=A.split||/(?=[A-Z])/;return k.split(C).join(M)},a=function(k){return F(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(A,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var A=a(k);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(k,A){return r(k,A).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},u=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},h=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},F=function(k){return k=k-0,k===k},I=function(k,A){var M=A&&"process"in A?A.process:A;return typeof M!="function"?k:function(C,H){return M(C,k,H)}},j={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,A){return n(I(a,A),k)},decamelizeKeys:function(k,A){return n(I(o,A),k,A)},pascalizeKeys:function(k,A){return n(I(i,A),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})($u)})(as);var Uu=as.exports,Hu=["class","style"];function Bu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Uu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Yu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return is(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Yu(u);break;case"style":l.style=Bu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=zu(n,Hu);return hf(e.tag,ze(ze(ze({},t),{},{class:a.class,style:ze(ze({},a.style),o)},a.attrs),s),r)}var os=!1;try{os=!0}catch{}function Wu(){if(!os&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Ku(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Di(e){if(e&&Un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yr.icon)return Yr.icon(e);if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Vu=Jn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=je(function(){return Di(t.icon)}),i=je(function(){return br("classes",Ku(t))}),o=je(function(){return br("transform",typeof t.transform=="string"?Yr.transform(t.transform):t.transform)}),s=je(function(){return br("mask",Di(t.mask))}),l=je(function(){return Du(a.value,ze(ze(ze(ze({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ot(l,function(u){if(!u)return Wu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=je(function(){return l.value?is(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Xu={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},qu={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Ju={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Gu={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Zu=Gu,Qu={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},ed=Qu;Lu.add(Ju,Xu,ed,qu,Zu);zf(rc).component("font-awesome-icon",Vu).mount("#app");
