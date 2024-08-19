function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./B_TZPd8d.js","./BJ5wUR44.js","./entry.8lQfE3Ql.css","./BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as a,b8 as f,D as m,bc as p,o as _,b as v,c as h,f as y,e as C,t as E,E as c,al as N,F as S,_ as b}from"./BJ5wUR44.js";import{n as g}from"./BneCoJRQ.js";const D={__name:"Mermaid",setup(k){const r=a(null),o=a(!1),l=a(1),n=f(),i=m(()=>{var s,d;l.value;const t=(s=n.default)==null?void 0:s.call(n)[0];if(!t)return"";if(typeof t.children=="string")return t.children;const e=(d=t.children)==null?void 0:d.default()[0];return e.type!=="code"?"":typeof e.children=="string"?e.children:g(e.children)});async function u(){if(!r.value||r.value.querySelector("svg"))return;for(const e of r.value.childNodes)e.nodeType===Node.COMMENT_NODE&&r.value.removeChild(e);const{default:t}=await b(()=>import("./B_TZPd8d.js").then(e=>e.b7),__vite__mapDeps([0,1,2,3]),import.meta.url);r.value.classList.add("mermaid"),o.value=!0,await t.run({nodes:[r.value]})}return p(()=>{l.value++}),_(()=>{u()}),(t,e)=>(v(),h(S,null,[y("",!0),C("pre",{ref_key:"el",ref:r,style:N({display:c(o)?"block":"none"}),class:"not-prose"},"    "+E(c(i))+`
  `,5)],64))}};export{D as default};
