import{r as i,j as n}from"./index-fd71d09f.js";import{s as x}from"./styled-components.browser.esm-8e4a8ba6.js";const k=x.div`
  position: relative;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.background};
  background-image: ${e=>e.backgroundImage};
  background-position: ${e=>e.backgroundPosition};
  background-size: ${e=>e.backgroundSize};

  .config {
    position: absolute;
    top: 10px;
  }

  main {
    display: grid;
    justify-items: center;
    gap: 1rem;

    .clock {
      font-size: 6rem;
    }
  }
`,f="/assets/abandoned-1-c91429c7.jpg",v="/assets/abandoned-2-b10f3b24.jpg",y="/assets/abandoned-3-89902649.jpg",C="/assets/abandoned-4-468ece34.jpg",S="/assets/abandoned-5-369738df.jpg",$="/assets/abandoned-6-c348dd82.jpg",z=[{id:1,name:"Buildings",img:f},{id:2,name:"Desert to City",img:v},{id:3,name:"Desert House",img:S},{id:4,name:"Train tracks",img:y},{id:5,name:"House",img:C},{id:6,name:"House 2",img:$}],c={abandoned:z};let s=new Date;const I=()=>{const[e,r]=i.useState(),[g,l]=i.useState();i.useEffect(()=>{console.log(e)},[e]);let t=s.getHours(),o=s.getMinutes(),u=s.getDate(),b=s.getMonth(),m=s.getFullYear();const h=d=>{if(d.target.value==="Abandoned"){const j=a=>{r({backgroundImage:`url("${c.abandoned[parseInt(a.target.value)-1].img}")`,backgroundPosition:"center",backgroundSize:"cover"})};let p=n.jsx("select",{onChange:a=>j(a),children:c.abandoned.map(a=>n.jsx("option",{value:a.id,children:a.name},a.id))});l(p)}};return n.jsxs(k,{background:e==null?void 0:e.background,backgroundImage:e==null?void 0:e.backgroundImage,backgroundSize:e==null?void 0:e.backgroundSize,backgroundPosition:e==null?void 0:e.backgroundPosition,children:[n.jsxs("div",{className:"config",children:[n.jsxs("select",{onChange:d=>h(d),children:[n.jsx("option",{children:"Abandoned"}),n.jsx("option",{children:"2"}),n.jsx("option",{children:"3"})]}),g]}),n.jsxs("main",{children:[n.jsxs("div",{className:"clock",children:[t<10?`0${t}`:t,":",o<10?`0${o}`:o]}),n.jsxs("div",{className:"date",children:[u,"/",b,"/",m]})]})]})};export{I as default};
