var p=Object.defineProperty;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(i,t,n)=>t in i?p(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,a=(i,t)=>{for(var n in t||(t={}))b.call(t,n)&&h(i,n,t[n]);if(l)for(var n of l(t))v.call(t,n)&&h(i,n,t[n]);return i};(function(i,t){typeof exports=="object"&&typeof module!="undefined"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(i=typeof globalThis!="undefined"?globalThis:i||self,t(i.DPIcon={}))})(this,function(i){"use strict";class t{constructor(){this.store={}}add(e){this.store[e.name]=e}addRange(e){e.forEach(r=>{this.store[r.name]=r})}has(e){return!!this.store[e]}get(e){return this.has(e)?this.store[e]:(console.warn(`Unable to find icon : ${e}`),null)}}var n=new t,f={functional:!0,props:{icon:{type:String,default:""},size:{type:String,default:"1.5x"}},render(s,{props:e,data:r}){var d;let o=n.get(e.icon);if(!o)return s("span");let u=e.size.slice(-1)==="x"?e.size.slice(0,e.size.length-1)+"rem":parseInt(e.size)+"px",g={width:r.attrs.width||u,height:r.attrs.height||u};return s("svg",{attrs:a({viewBox:"0 0 24 24"},g)},[s("path",{attrs:a({d:`${o.svgPathData}`},(d=o.attributes)!=null?d:{})})])}};const c={install(s){s.component("dp-icon",f)}};i.Library=n,i.default=c,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
