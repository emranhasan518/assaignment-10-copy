(this["webpackJsonpreact-project3"]=this["webpackJsonpreact-project3"]||[]).push([[0],{75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(33),r=c.n(i),a=(c(75),c(20)),j=c(16),o=(c(76),c(77),c(2)),l=function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsxs)("div",{className:"about-child",children:[Object(o.jsx)("h2",{className:"text-primary",children:"About Us"}),Object(o.jsx)("p",{children:"Popular Diagnostic center is one of the leading Health Care survices of Bangladesh. We have branches About All over in the country"})]}),Object(o.jsxs)("div",{className:"about-child",children:[Object(o.jsx)("h2",{className:"text-primary",children:"About Our Doctor"}),Object(o.jsx)("p",{children:"We have the most Expert Doctor all over the country, Our Doctor is well educated from most valuable Medical university in the world, we have the most experenced doctor"})]}),Object(o.jsxs)("div",{className:"about-child",children:[Object(o.jsx)("h2",{className:"text-primary",children:"Our Services"}),Object(o.jsx)("p",{children:"We Giving consulting and diagonostic service all over the country by our many of branch, we sell all authentic medicine came from abroad in our farmacy "})]})]})},b=c(11),d=function(){var e,t,c,s,i,r=Object(j.g)().serviceId,a=Object(n.useState)([]),l=Object(b.a)(a,2),d=l[0],h=l[1];Object(n.useEffect)((function(){fetch("/doctor.json").then((function(e){return e.json()})).then((function(e){return h(e)}))}),[]);var u=d.filter((function(e){return e.id==r}));return Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{className:"col-lg-12 col-sm-12",children:Object(o.jsxs)("div",{className:"details my-5 mx-5 justify-content-center",children:[Object(o.jsx)("h2",{className:"text-primary",children:null===(e=u[0])||void 0===e?void 0:e.name}),Object(o.jsx)("h3",{children:Object(o.jsx)("img",{style:{width:"40%",borderRadius:"10px"},src:null===(t=u[0])||void 0===t?void 0:t.img})}),Object(o.jsxs)("h2",{className:"text-danger",children:["Consultant: ",null===(c=u[0])||void 0===c?void 0:c.consultantSector]}),Object(o.jsxs)("h3",{children:["Consulting Fee: ",null===(s=u[0])||void 0===s?void 0:s.appointmentCost]}),Object(o.jsx)("p",{children:null===(i=u[0])||void 0===i?void 0:i.Description})]})})})})},h=c.p+"static/media/contact.5f92650e.jpg",u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"text-primary",children:"Contact Us "}),Object(o.jsx)("img",{className:"my-5",style:{width:"75%"},src:h,alt:""})]})},O=c(99),x=(c(83),c.p+"static/media/banner1.0aa02c06.jpg"),m=c.p+"static/media/banner2.3df2497d.jpg",p=c.p+"static/media/banner3.2fc5c288.jpg",g=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(O.a,{children:[Object(o.jsxs)(O.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100 image",src:x,alt:"First slide"}),Object(o.jsxs)(O.a.Caption,{children:[Object(o.jsx)("h3",{children:"First slide label"}),Object(o.jsx)("p",{children:"system and to lead partners in global health responses."})]})]}),Object(o.jsxs)(O.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100 image",src:m,alt:"Second slide"}),Object(o.jsxs)(O.a.Caption,{children:[Object(o.jsx)("h3",{children:"Second slide label"}),Object(o.jsx)("p",{children:"WHO's primary role is to direct international health within the United Nations' "})]})]}),Object(o.jsxs)(O.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100 image",src:p,alt:"Third slide"}),Object(o.jsxs)(O.a.Caption,{children:[Object(o.jsx)("h3",{children:"Third slide label"}),Object(o.jsx)("p",{children:"system and to lead partners in global health responses."})]})]})]})})},f=(c(84),function(e){var t=e.consultant,c=t.id,n=t.name,s=t.consultantSector,i=t.appointmentCost,r=t.img,j=t.Description;return Object(o.jsxs)("div",{className:"consultant pb-3",children:[Object(o.jsx)("img",{src:r,alt:""}),Object(o.jsxs)("h4",{children:["Doctor's id: 10",c]}),Object(o.jsx)("h3",{className:"text-primary",children:n}),Object(o.jsxs)("h4",{children:["Consulting Sector: ",s]}),Object(o.jsxs)("h5",{children:["Appointment Fee: ",i]}),Object(o.jsx)("p",{className:"px-3",children:j}),Object(o.jsx)(a.b,{to:"/appointment/".concat(c),children:Object(o.jsx)("button",{className:"btn btn-warning",children:"Book Appointment"})})]})}),v=(c(85),function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("doctor.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"text-danger mt-4",children:"Consultants Information"}),Object(o.jsx)("div",{className:"consultants",children:c.map((function(e){return Object(o.jsx)(f,{consultant:e},e.id)}))})]})}),y=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(g,{}),Object(o.jsx)(v,{})]})},N=c(51),w=c(69),C={apiKey:"AIzaSyBM8Gbuhw4GR-Gl-bQon4FGm-gIUtiTwBU",authDomain:"popular-diagnostic-center.firebaseapp.com",projectId:"popular-diagnostic-center",storageBucket:"popular-diagnostic-center.appspot.com",messagingSenderId:"1010596775772",appId:"1:1010596775772:web:e289521d48290a9b922399"};(function(){Object(w.a)(C)})();var S=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!0),r=Object(b.a)(i,2),a=r[0],j=r[1],o=Object(N.b)();Object(n.useEffect)((function(){var e=Object(N.c)(o,(function(e){s(e||{}),j(!1)}));return function(){return e}}),[]);return{user:c,isLoading:a,signInUsingGoogle:function(){j(!0);var e=new N.a;Object(N.d)(o,e).then((function(e){s(e.user)})).finally((function(){return j(!1)}))},logOut:function(){j(!0),Object(N.e)(o).then((function(){})).finally((function(){return j(!1)}))}}},k=Object(n.createContext)(),I=function(e){var t=e.children,c=S();return Object(o.jsx)(k.Provider,{value:c,children:t})},F=function(){return Object(n.useContext)(k)},A=(c(87),function(){var e=F().signInUsingGoogle;return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("h2",{children:"Please Log in "}),Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"email",placeholder:"Enter your email"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",placeholder:"Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"my-2",type:"submit",value:"Submit"}),Object(o.jsx)("br",{})]}),Object(o.jsx)("button",{onClick:e,className:"btn btn-warning",children:"Google Sign in"}),Object(o.jsx)("br",{}),Object(o.jsx)(a.b,{to:"/register",children:"New User?"})]})}),L=c(6),P=c(9),D=c(94),G=["children"],B=function(e){var t=e.children,c=Object(P.a)(e,G),n=F(),s=n.user;return n.isLoading?Object(o.jsx)(D.a,{animation:"grow",variant:"warning"}):Object(o.jsx)(j.b,Object(L.a)(Object(L.a)({},c),{},{render:function(e){var c=e.location;return s.email?t:Object(o.jsx)(j.a,{to:{pathname:"/login",state:{from:c}}})}}))},E=(c(88),function(){return Object(o.jsxs)("div",{className:"register",children:[Object(o.jsx)("h2",{children:"Please Register"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"email",placeholder:"Enter your email"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",placeholder:"Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"phone",placeholder:"Phone"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"address",placeholder:"Address"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"my-2",type:"submit",value:"Submit"}),Object(o.jsx)("br",{})]}),Object(o.jsx)("button",{className:"btn btn-warning",children:"Google Sign in"}),Object(o.jsx)("br",{}),Object(o.jsx)(a.b,{to:"/login",children:"Alreadly Registered?"})]})}),U=c.p+"static/media/notFound.af765953.jpg",T=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{style:{width:"40%"},src:U,alt:""}),Object(o.jsx)("h1",{className:"text-danger",children:"Error! Page Not Found"}),Object(o.jsx)(a.b,{to:"home",children:Object(o.jsx)("button",{className:" btn btn-warning",children:"Go Back"})})]})},W=(c(89),function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("h2",{className:"",children:"We are always here for Your Health Care"}),Object(o.jsx)("h4",{children:"We have 24 Hours of emergency ambulance"}),Object(o.jsx)("p",{children:"Contact: 01951860540"}),Object(o.jsx)("p",{children:"Email: populardiagnosticbd@yahoo.com"})]})}),H=c(97),R=c(95),M=c(98),J=c(96),z=function(){var e=F(),t=e.user,c=e.logOut;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(H.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top",children:Object(o.jsxs)(R.a,{children:[Object(o.jsx)(H.a.Brand,{href:"#home",children:"Popular Diagonostic Center"}),Object(o.jsx)(H.a.Toggle,{}),Object(o.jsxs)(H.a.Collapse,{className:"justify-content-end",children:[Object(o.jsx)(M.a.Link,{as:a.b,to:"/home",children:"Home"}),Object(o.jsx)(M.a.Link,{as:a.b,to:"/contact",children:"Contact"}),Object(o.jsx)(M.a.Link,{as:a.b,to:"/about",children:"About"}),(null===t||void 0===t?void 0:t.email)?Object(o.jsx)(J.a,{onClick:c,variant:"dark",children:"Log Out"}):Object(o.jsx)(M.a.Link,{as:a.b,to:"/login",children:"Login"}),Object(o.jsxs)(H.a.Text,{children:["Signed in as: ",Object(o.jsx)("a",{href:"#login",children:null===t||void 0===t?void 0:t.displayName})]})]})]})})})};var K=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(I,{children:Object(o.jsxs)(a.a,{children:[Object(o.jsx)(z,{}),Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{exact:!0,path:"/",children:Object(o.jsx)(y,{})}),Object(o.jsx)(j.b,{path:"/home",children:Object(o.jsx)(y,{})}),Object(o.jsx)(j.b,{path:"/login",children:Object(o.jsx)(A,{})}),Object(o.jsx)(j.b,{path:"/register",children:Object(o.jsx)(E,{})}),Object(o.jsx)(B,{path:"/appointment/:serviceId",children:Object(o.jsx)(d,{})}),Object(o.jsx)(B,{path:"/contact",children:Object(o.jsx)(u,{})}),Object(o.jsx)(B,{path:"/about",children:Object(o.jsx)(l,{})}),Object(o.jsx)(j.b,{path:"*",children:Object(o.jsx)(T,{})})]}),Object(o.jsx)(W,{})]})})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(K,{})}),document.getElementById("root")),Q()}},[[92,1,2]]]);
//# sourceMappingURL=main.ba9fb6c6.chunk.js.map