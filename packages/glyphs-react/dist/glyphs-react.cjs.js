"use strict";const i=require("react"),l=e=>e?Object.keys(e).reduce((t,r)=>{const s=r.split("-").map((n,o)=>o!==0?n.charAt(0).toUpperCase()+n.substring(1):n).join("");return t[s]=e[r],t},{}):{},g=e=>parseFloat(e)*(typeof getComputedStyle=="function"?parseFloat(getComputedStyle(document.documentElement).fontSize):16),y=e=>(e.slice(-1)==="x"?g(e.slice(0,e.length-1)):parseInt(e))+"px",h=({icon:e,size:t="1.5x",width:r,height:s,fill:n,stroke:o,...m})=>{const u=y(t);return i.createElement("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:r??u,height:s??u,...m},e.svgPathData.map((c,p)=>i.createElement(c.name,{...l(c.attributes),key:p},c.children.map((a,d)=>i.createElement(a.name,{...l(a.attributes),key:d*2})))))};module.exports=h;
