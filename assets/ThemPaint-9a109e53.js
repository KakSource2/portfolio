import{j as s,r as c,O as i}from"./index-5cdb3fd4.js";const l="_header_nb7si_5",d="_logo_nb7si_14",h="_nav__btns_nb7si_22",_="_language_nb7si_46",x="_dark_nb7si_50",a={header:l,logo:d,nav__btns:h,language:_,dark:x},u=({english:n,changeEnglish:e,dark:t,changeDark:o})=>s.jsxs("div",{className:a.header,children:[s.jsxs("h2",{className:a.logo,children:["Them",s.jsx("b",{children:"Paint"})]}),s.jsxs("div",{className:a.nav__btns,children:[s.jsx("button",{children:n?"Home":"Inicio"}),s.jsx("button",{children:n?"Services":"Servicios"}),s.jsx("button",{children:n?"Portfolio":"Portafolio"}),s.jsx("button",{children:n?"Contact us":"Contáctenos"})]}),s.jsx("button",{onClick:()=>e(),children:n?"Cambiar a Español":"Change to English"}),s.jsx("button",{className:a.dark,onClick:()=>o,children:t?"Change to Light":"Change to Dark"})]}),b=({english:n,dark:e})=>s.jsx("div",{className:"",children:n?"Footer":"Pie de página"}),j=()=>{const[n,e]=c.useState(!1),[t,o]=c.useState(!1);return s.jsxs("div",{className:"ThemPaint",children:[s.jsx(u,{english:n,changeEnglish:()=>e(r=>!r),dark:t,changeDark:()=>o(r=>!r)}),s.jsx(i,{context:{english:n,dark:t}}),s.jsx(b,{english:n,dark:t})]})};export{j as default};
