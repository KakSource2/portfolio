import{r as l,j as e}from"./index-5cdb3fd4.js";import{s as t}from"./styled-components.browser.esm-97573312.js";const n=t.main`
  display: grid;
  justify-items: center;
  margin-inline: 5vw;
`,c=t.h2`
  text-align: center;
`,o=t.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  width: 100%;
  height: 100%;
`,m=t.div`
  width: 100%;
  border: 1px solid black;
`,p=()=>{const[s,r]=l.useState("start"),d=()=>{let a=[{id:1,style:{}},{id:2,style:{}},{id:3,style:{}},{id:4,style:{}},{id:5,style:{}},{id:6,style:{}},{id:7,style:{}},{id:8,style:{}},{id:9,style:{}},{id:10,style:{}}];return e.jsxs(n,{children:[e.jsxs(c,{children:["Score: ",123]}),e.jsx(o,{children:a.map(i=>e.jsx(m,{children:i.id},i.id))})]})};return e.jsxs("div",{className:"Box__Clicker",children:[s==="start"&&e.jsx("div",{className:"start",children:e.jsx("button",{onClick:()=>r("game"),children:"START"})}),s==="game"&&d()]})};export{p as default};
