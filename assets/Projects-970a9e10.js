import{c as p,f as k,j as t,L as u,r as _,O as v}from"./index-5cdb3fd4.js";import{p as h}from"./projects-a2030df1.js";const b="_header_st6g2_1",$="_logo_st6g2_13",N="_config_btns_st6g2_71",i={header:b,logo:$,config_btns:N,"challenge-header":"_challenge-header_st6g2_99","config-btns":"_config-btns_st6g2_117","next-challenge":"_next-challenge_st6g2_183"},C="/assets/logo-kak-e43a913d.png",w=({changeLocale:s,english:n,dark:c,changeDark:d})=>{const r=p(),l=k(),x=e=>{h.find(o=>{const{es:a,en:g}=o.name;if(a===e.target.value||g===e.target.value)return r(o.link)})},m=()=>{let e=h.filter(o=>!o.wip);e.find((o,a)=>{if(l.pathname===o.link)return a+1===e.length?r(e[0].link):r(e[a+1].link)})},j=()=>{let e=h.find(o=>o.link===l.pathname);if(e){if(n)return e==null?void 0:e.name.en;if(!n)return e==null?void 0:e.name.es}};return t.jsxs("header",{className:i.header,children:[t.jsx(u,{className:c?i.logo:`${i.logo} ${i.light}`,to:"/",children:t.jsx("img",{src:C})}),t.jsx(u,{to:`${window.location.origin}/`,children:n?"Back to Portfolio":"Volver al Portafolio"}),t.jsxs("span",{className:"select",children:[n?"Select challenge":"Seleccionar desafío",t.jsx("select",{defaultValue:j(),onChange:e=>x(e),children:h.map((e,o)=>{const{en:a,es:g}=e.name;if(!e.wip)return t.jsx("option",{value:n?`${a}`:`${g}`,children:n?a:g},o)})})]}),t.jsxs("div",{className:i.config_btns,children:[t.jsx("button",{className:"next-challenge",onClick:m,children:n?"Next challenge":"Siguiente desafío"}),t.jsx("button",{onClick:s,children:n?"Español":"English"}),t.jsx("button",{onClick:()=>d(),children:c?"Light mode":"Dark mode"})]})]})},E="_footer_la9ls_1",f={footer:E},L=({english:s,dark:n})=>t.jsx("div",{className:n?f.footer:`${f.footer} ${f.light}`,children:s?"Just contract me already? !":"¡Contráteme de una vez!"}),y=()=>{const[s,n]=_.useState(!1),[c,d]=_.useState(!1),r=()=>{n(l=>!l)};return t.jsxs("div",{children:[t.jsx(w,{english:s,changeLocale:r,dark:c,changeDark:()=>d(l=>!l)}),t.jsx(v,{context:{english:s,dark:c}}),t.jsx(L,{english:s,dark:c})]})};export{y as default};
