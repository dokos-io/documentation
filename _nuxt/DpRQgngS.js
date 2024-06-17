function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CLhO07Fu.js","./DCsJw4pm.js","./entry.8lQfE3Ql.css","./BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b3 as n,r as o,o as u,b as d,c as i,j as l,aj as c,al as _,E as f,_ as m}from"./DCsJw4pm.js";const y={__name:"Mermaid",setup(p){n();const e=o(null),t=o(!1);async function s(){if(!e.value||e.value.querySelector("svg"))return;for(const a of e.value.childNodes)a.nodeType===Node.COMMENT_NODE&&e.value.removeChild(a);const{default:r}=await m(()=>import("./CLhO07Fu.js").then(a=>a.b7),__vite__mapDeps([0,1,2,3]),import.meta.url);e.value.classList.add("mermaid"),t.value=!0,await r.run({nodes:[e.value]})}return u(()=>{s()}),(r,a)=>(d(),i("pre",{ref_key:"el",ref:e,style:_({display:f(t)?"block":"none"})},[l("    "),c(r.$slots,"default"),l(`
  `)],4))}};export{y as default};
