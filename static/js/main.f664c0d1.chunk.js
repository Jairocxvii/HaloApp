(this.webpackJsonphalo5app=this.webpackJsonphalo5app||[]).push([[0],{39:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(28),s=n.n(l),i=(n(39),n.p+"static/media/header2.c193a00f.png"),r=n(0);var o=function(){return Object(r.jsxs)("header",{className:"w-screen",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:i,className:"w-full object-contain",alt:"initial"})}),Object(r.jsx)("nav",{})]})};var d=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("li",{children:Object(r.jsx)("ul",{children:"Hola mundo"})})})};var j=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(d,{})})},b=n(10),m=n(9);var x,u=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){window.addEventListener("resize",(function(){var e=window.innerWidth;a(!(e>768))}))}),[]),Object(r.jsx)("div",{className:"flex flex-wrap ",children:Object(r.jsx)("div",{className:"w-full ",children:Object(r.jsx)("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-spartan",children:Object(r.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(r.jsxs)("div",{className:"w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start",children:[Object(r.jsx)("p",{className:"text-xl2 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-golden-spartan",children:"Halo Stats"}),Object(r.jsx)("button",{onClick:function(){a(!n)},className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none",type:"button",children:n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:"block relative w-6 h-px rounded-sm bg-yellow-200 hover:bg-yellow-500 mt-1"}),Object(r.jsx)("span",{className:"block relative w-6 h-px rounded-sm bg-yellow-200 hover:bg-yellow-500 mt-1"}),Object(r.jsx)("span",{className:"block relative w-6 h-px rounded-sm bg-yellow-200 hover:bg-yellow-500 mt-1"})]}):Object(r.jsx)("span",{className:"block relative  rounded-sm  text-yellow-500 ",children:" X "})})]}),Object(r.jsx)("div",{className:"flex items-center pl-6 md:flex-grow ".concat(n?"hidden":""," md:block  "),children:Object(r.jsxs)("ul",{className:"flex flex-col md:flex-row list-none mr-auto",children:[Object(r.jsx)("li",{className:" md:inline-block",children:Object(r.jsx)(m.b,{to:"#",className:"lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500",children:"Profile"})}),Object(r.jsx)("li",{className:" md:inline-block",children:Object(r.jsx)(m.b,{to:"#",className:"lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500",children:"Multiplayer"})}),Object(r.jsx)("li",{className:" md:inline-block",children:Object(r.jsx)(m.b,{to:"#",className:"lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500",children:"Stats"})}),Object(r.jsx)("li",{className:" md:inline-block",children:Object(r.jsx)(m.b,{to:"/campaing",className:"lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500",children:"Campaing"})}),Object(r.jsx)("li",{className:" md:inline-block",children:Object(r.jsx)(m.b,{to:"#",className:"lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500",children:"Games"})}),Object(r.jsx)("li",{className:" md:inline-block",children:Object(r.jsx)(m.b,{to:"#",className:"lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500",children:"About me"})})]})})]})})})})},p=function(e){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(u,{}),e.children,Object(r.jsx)(j,{})]})},h=n(3),O=n(30),g=n(31),f=n(32),v=n.n(f).a.create({baseURL:"https://www.haloapi.com/",headers:{"Content-type":"application/json","Ocp-Apim-Subscription-Key":"7deb6c7986144ceb893ec3041f0ef591"}}),y=new(function(){function e(){Object(O.a)(this,e)}return Object(g.a)(e,[{key:"getCampaignMissions",value:function(){return v.get("metadata/h5/metadata/campaign-missions")}},{key:"getEnemies",value:function(){return v.get("metadata/h5/metadata/enemies")}},{key:"getCommendations",value:function(){return v.get("metadata/h5/metadata/commendations")}},{key:"getMaps",value:function(){return v.get("metadata/h5/metadata/maps")}}]),e}()),w=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"w-full shadow-md rounded-md my-2",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{className:"h-1/2 ",src:e.imageUrl,alt:"imgcampaign"}),Object(r.jsxs)("h1",{className:"bg-gray-400 p-2",children:[e.name," ",e.missionNumber," ",e.type]}),Object(r.jsx)("p",{className:" p-2",children:e.description})]})})})};!function(e){e[e.primary=0]="primary",e[e.secondary=1]="secondary",e[e.success=2]="success",e[e.danger=3]="danger",e[e.warning=4]="warning",e[e.info=5]="info",e[e.light=6]="light",e[e.dark=7]="dark"}(x||(x={}));var N=n(34),k=n(33),T=function(e){var t=Object(c.useState)("red"),n=Object(b.a)(t,2),a=n[0],l=n[1];return Object(c.useEffect)((function(){switch(e.Type){case x.danger:default:l("red")}}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{role:"alert",children:[Object(r.jsxs)("div",{className:"bg-"+a+"-500 text-white font-bold rounded-t px-4 py-2 ",children:[e.Title,Object(r.jsx)("div",{className:"absolute top-0 bottom-0 right-0",children:Object(r.jsx)(k.a,{icon:N.a})})]}),Object(r.jsx)("div",{className:"border border-t-0 border-"+a+"-400 rounded-b bg-"+a+"-100 px-4 py-3 text-red-700",children:Object(r.jsx)("p",{children:e.description})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(null),s=Object(b.a)(l,2),i=s[0],o=s[1],d=Object(c.useState)({Title:"",description:"",Type:x.danger}),j=Object(b.a)(d,2),m=j[0],u=j[1],p=Object(c.useRef)(!1),h=function(e){e.preventDefault();var t=e.currentTarget.getAttribute("value");console.log(t),o(t)};return Object(c.useEffect)((function(){y.getCampaignMissions().then((function(e){a(e.data),p.current=!1})).catch((function(e){p.current=!0,u({Title:"Get Campaign Error",description:e.message,Type:x.danger})}))}),[]),Object(r.jsxs)("div",{className:"container  px-4",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:h,value:"BlueTeam",children:"Blue Team"}),Object(r.jsx)("button",{type:"button",onClick:h,value:"OsirisTeam",children:"Osiris Team"})]}),p?Object(r.jsx)(T,{Type:m.Type,Title:m.Title,description:m.description}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:n.filter((function(e){return null!==i?e.type===i:null!==e.type})).map((function(e){return Object(r.jsx)(w,{name:e.name,missionNumber:e.missionNumber,description:e.description,imageUrl:e.imageUrl,type:e.type,id:e.id})}))})]})};var S=function(){return Object(r.jsx)(m.a,{children:Object(r.jsx)(p,{children:Object(r.jsx)(h.c,{children:Object(r.jsx)(h.a,{exact:!0,path:"/campaing",component:C})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),l(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root")),F(console.log)}},[[64,1,2]]]);
//# sourceMappingURL=main.f664c0d1.chunk.js.map