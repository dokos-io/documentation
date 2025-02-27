function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./BQ7EP6lx.js","./5JDjIti2.js","./entry.8lQfE3Ql.css","./BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as n,ak as f,D as m,ar as p,o as _,b as v,c as h,f as y,e as C,t as N,I as i,a4 as S,F as g,_ as k}from"./5JDjIti2.js";import{n as E}from"./BneCoJRQ.js";const M={__name:"Mermaid",setup(x){const r=n(null),o=n(!1),l=n(1),a=f(),u=m(()=>{var s,d;l.value;const t=(s=a.default)==null?void 0:s.call(a)[0];if(!t)return"";if(typeof t.children=="string")return t.children;const e=(d=t.children)==null?void 0:d.default()[0];return e.type!=="code"?"":typeof e.children=="string"?e.children:E(e.children)});async function c(){if(!r.value||r.value.querySelector("svg"))return;for(const e of r.value.childNodes)e.nodeType===Node.COMMENT_NODE&&r.value.removeChild(e);const{default:t}=await k(()=>import("./BQ7EP6lx.js").then(e=>e.b7),__vite__mapDeps([0,1,2,3]),import.meta.url);r.value.classList.add("mermaid"),o.value=!0,await t.run({nodes:[r.value]})}return p(()=>{l.value++}),_(()=>{c()}),(t,e)=>(v(),h(g,null,[y("",!0),C("pre",{ref_key:"el",ref:r,style:S({display:i(o)?"block":"none"}),class:"not-prose"},"    "+N(i(u))+`
  `,5)],64))}};export{M as default};
