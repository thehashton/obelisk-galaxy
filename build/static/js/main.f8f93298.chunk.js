(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},17:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),l=n(6),s=()=>r.a.createElement("div",{className:"credits"},r.a.createElement("a",{href:"https://www.twitter.com/dghez_",target:"_BLANK",without:!0,rel:"noopener noreferrer"},"TW: @dghez_"),r.a.createElement("style",{jsx:!0},"\n        .credits {\n          position: fixed;\n          bottom: 30px;\n          left: 30px;\n          z-index: 10;\n          color: white;\n          font-family: 'Noto Sans JP', sans-serif;\n          font-size: 12px;\n          font-weight: 700;\n          letter-spacing: -0.02em;\n          opacity: 0.5;\n          transition: all 0.6s;\n        }\n\n        .credits:hover {\n          opacity: 1;\n        }\n      ")),i=n(2),m=n(3),u=()=>{const e=Object(a.useRef)(),t=Object(a.useRef)(0),n=Object(a.useState)(!1),c=Object(i.a)(n,2),o=c[0],s=c[1],u=Object(a.useState)(!1),h=Object(i.a)(u,2),p=h[0],b=h[1],f=Object(a.useRef)(p),E=Object(a.useMemo)(()=>[Object(m.random)(-3,3,!0),Object(m.random)(-3,3,!0),Object(m.random)(-3,3,!0)],[]),d=Object(a.useMemo)(()=>Object(m.random)(.1,4,!0),[]),g=o?15062349:p?16246757:16341820;Object(a.useEffect)(()=>{f.current=p},[p]),Object(l.b)(()=>{e.current.rotation.y+=.01*d,f.current&&(t.current+=.03,e.current.position.y=E[1]+.4*Math.sin(t.current))});const O=Object(a.useCallback)((e,t)=>{e.stopPropagation(),s(t)},[s]),j=Object(a.useCallback)(e=>{e.stopPropagation(),b(e=>!e)},[b]);return r.a.createElement("mesh",{ref:e,position:E,onClick:e=>j(e),onPointerOver:e=>O(e,!0),onPointerOut:e=>O(e,!1)},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.047,.5,.29]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:g,roughness:.6,metalness:.1}))},h=()=>{return r.a.createElement("group",null,r.a.createElement(()=>r.a.createElement("mesh",null,r.a.createElement("sphereBufferGeometry",{args:[.7,30,30],attach:"geometry"}),r.a.createElement("meshBasicMaterial",{color:16773615,attach:"material"})),null),r.a.createElement("ambientLight",{intensity:.9}),r.a.createElement("pointLight",{intensity:1.12,position:[0,0,0]}))},p=n(1),b=()=>r.a.createElement("mesh",null,r.a.createElement("sphereBufferGeometry",{args:[5,10,10],attach:"geometry"}),r.a.createElement("meshStandardMaterial",{color:13780267,attach:"material",side:p.BackSide,metalness:.4}));const f=document.getElementById("root");o.a.render(r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(l.a,null,r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement(b,null)))},null),f)}},[[16,1,2]]]);
//# sourceMappingURL=main.f8f93298.chunk.js.map