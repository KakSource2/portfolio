import{j as e,r as n,b as p}from"./index-5cdb3fd4.js";const v=({number:i})=>e.jsx("span",{children:i}),b="/assets/dice-6f69715a.png",N="/assets/broom-cb695b9a.png";let g=()=>{const[i,l]=n.useState(!1),[c,o]=n.useState(0),[r,a]=n.useState([]),d=p(),[u,h]=n.useState(6);let t,m=()=>{l(!0),setTimeout(()=>{l(!1)},500),t=Math.floor(Math.random()*u+1),o(t),r.length>=30?a(s=>(s.shift(),[...s,t])):a(s=>[...s,t])},x=s=>{h(s.target.value)};return e.jsx("div",{className:"DiceSimulator",children:e.jsxs("main",{children:[e.jsx("div",{className:"selection",children:e.jsxs("div",{children:[e.jsx("h5",{children:d?"Faces number":"Número de caras"}),e.jsxs("select",{onChange:s=>x(s),children:[e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"4",children:"4"}),e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"6",children:"6"}),e.jsx("option",{value:"7",children:"7"}),e.jsx("option",{value:"8",children:"8"}),e.jsx("option",{value:"9",children:"9"}),e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"12",children:"12"}),e.jsx("option",{value:"20",children:"20"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]})]})}),e.jsx("button",{className:i?"diceAnim dice":"dice",onClick:()=>m(),children:e.jsx("img",{src:b})}),e.jsx("div",{className:"number",children:e.jsx("p",{children:c})}),e.jsxs("div",{className:"history",children:[e.jsx("button",{onClick:()=>a([]),children:e.jsx("img",{src:N})}),e.jsx("div",{className:"last-numbers-generated",children:r.map((s,j)=>e.jsx(v,{number:s},j))})]})]})})};export{g as default};
