(()=>{var e={};e.id=9643,e.ids=[9643],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},78893:e=>{"use strict";e.exports=require("buffer")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},85807:e=>{"use strict";e.exports=require("module")},98216:e=>{"use strict";e.exports=require("net")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},68621:e=>{"use strict";e.exports=require("punycode")},76162:e=>{"use strict";e.exports=require("stream")},74026:e=>{"use strict";e.exports=require("string_decoder")},82452:e=>{"use strict";e.exports=require("tls")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},6162:e=>{"use strict";e.exports=require("worker_threads")},71568:e=>{"use strict";e.exports=require("zlib")},6005:e=>{"use strict";e.exports=require("node:crypto")},51079:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>c,originalPathname:()=>u,pages:()=>p,routeModule:()=>h,tree:()=>d}),r(48734),r(99650),r(90996);var s=r(30170),i=r(45002),a=r(83876),l=r.n(a),o=r(66299),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(t,n);let d=["",{children:["test",{children:["[...url]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,48734)),"/Users/jayanthkoppala/Desktop/Developer/Credibly/app/test/[...url]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,99650)),"/Users/jayanthkoppala/Desktop/Developer/Credibly/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/jayanthkoppala/Desktop/Developer/Credibly/app/test/[...url]/page.tsx"],u="/test/[...url]/page",c={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/test/[...url]/page",pathname:"/test/[...url]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},49018:(e,t,r)=>{Promise.resolve().then(r.bind(r,32957)),Promise.resolve().then(r.bind(r,94444)),Promise.resolve().then(r.bind(r,85825)),Promise.resolve().then(r.bind(r,68417)),Promise.resolve().then(r.bind(r,48120)),Promise.resolve().then(r.t.bind(r,15889,23)),Promise.resolve().then(r.t.bind(r,34080,23)),Promise.resolve().then(r.bind(r,99304)),Promise.resolve().then(r.bind(r,24146))},51493:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,63642,23)),Promise.resolve().then(r.t.bind(r,87586,23)),Promise.resolve().then(r.t.bind(r,47838,23)),Promise.resolve().then(r.t.bind(r,58057,23)),Promise.resolve().then(r.t.bind(r,77741,23)),Promise.resolve().then(r.t.bind(r,13118,23))},35303:()=>{},94444:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(97247);r(28964);var i=r(19898);let a=function({children:e}){return s.jsx(i.SessionProvider,{children:e})}},48120:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(97247),i=r(34577),a=r(33275);let l=(0,i.xC)({reducer:{data:a.ZP}});r(28964);var o=r(82653);let n=function({children:e}){return s.jsx(o.zt,{store:l,children:e})}},85825:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(97247),i=r(34268);function a(){return s.jsx(i.Z,{className:"min-w-[90px] text-yellow-200 bg-[#020335] hover:bg-black z-50",text:"Connect wallet",withWalletAggregator:!0})}},68417:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(97247),i=r(92602),a=r(29559),l=r(58797),o=r(41755),n=r(86647),d=r(75314),p=r(23391);r(2399);var u=r(4218),c=r(90171),h=r(38415),x=r(28964),m=r(13760),v=r(81900),b=r(64653),j=r(46817);let g=new l.S;function y({children:e}){return(0,j.createPortal)(s.jsx("div",{style:{zIndex:9999},children:e}),document.body)}let f=function({children:e}){let t=function(){let e=p.K0??"";if(!e)throw Error("To connect to all Wallets you need to provide a NEXT_PUBLIC_WC_PROJECT_ID env variable");return(0,x.useMemo)(()=>{let t=(0,a.a3)([{groupName:"Recommended Wallet",wallets:[u.D]},{groupName:"Other Wallets",wallets:[c.u,h.P]}],{appName:"onchainkit",projectId:e});return(0,m._)({chains:[n.u,b.L],multiInjectedProviderDiscovery:!1,connectors:t,ssr:!0,transports:{[n.u.id]:(0,v.d)(),[b.L.id]:(0,v.d)()}})},[e])}();return s.jsx(d.F,{config:t,children:s.jsx(o.aH,{client:g,children:s.jsx(i.Ag,{apiKey:p.Es,chain:n.u,children:s.jsx(y,{children:s.jsx(a.pj,{modalSize:"compact",children:e})})})})})}},34268:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(97247),i=r(33647),a=r(11276);function l({className:e,text:t,withWalletAggregator:r=!1}){return s.jsx(s.Fragment,{children:(0,s.jsxs)(a.w5,{children:[(0,s.jsxs)(a.RZ,{withWalletAggregator:r,text:t,className:e,children:[s.jsx(i.qE,{className:"h-6 w-6 bg-white"}),s.jsx(i.VG,{className:"text-white"})]}),(0,s.jsxs)(a.Zl,{className:"absolute z-50 border-4 border-pink-500",children:[(0,s.jsxs)(i.iJ,{className:"px-4 z-50 pt-3 pb-2",hasCopyAddressOnClick:!0,children:[s.jsx(i.qE,{}),s.jsx(i.VG,{}),s.jsx(i.kL,{}),s.jsx(i.je,{})]}),s.jsx(a.ou,{}),s.jsx(a.zN,{className:"z-50",icon:"wallet",href:"https://wallet.coinbase.com",children:"Go to Wallet Dashboard"}),s.jsx(a.b3,{}),s.jsx(a.Oq,{})]})]})})}},23391:(e,t,r)=>{"use strict";r.d(t,{Es:()=>s,H3:()=>a,K0:()=>i});let s="kjjRDVw87Issus2p757XIZtZuJ1bphCi",i="ce33d043fca3d6ff7d38d239de27102a",a="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjhiMjNjMDhmLTYzOTQtNGNjMi04MDIxLWZlMGY1NzI0NTdjNiIsIm9yZ0lkIjoiNDEyNTg5IiwidXNlcklkIjoiNDIzOTk4IiwidHlwZUlkIjoiMTgxODRmYzMtZGY2MS00OTQzLWE0MGMtNzBhODE0OGVmMDBhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3Mjk0MTc0MTYsImV4cCI6NDg4NTE3NzQxNn0.d3fxP2mNl244khjG3nMN-GN1yEvdhDGzRrX0oD-GfVQ"},33275:(e,t,r)=>{"use strict";r.d(t,{$2:()=>o,ZP:()=>n,dS:()=>a,iS:()=>i});let s=(0,r(34577).oM)({name:"dataSlice",initialState:{id:"",title:"",description:"",tags:[""],thumbnail:"",validation:"",link:""},reducers:{setDataFromVideo:(e,t)=>{e.id=t.payload.video.id,e.title=t.payload.video.snippet.title,e.description=t.payload.video.snippet.description,e.tags=t.payload.tags,e.thumbnail=t.payload.video.snippet.thumbnails.high.url},setDataFromPlaylist:(e,t)=>{e.id=t.payload.playlist.id,e.title=t.payload.playlist.snippet.title,e.description=t.payload.playlist.snippet.description,e.tags=t.payload.tags,e.thumbnail=t.payload.playlist.snippet.thumbnails.high.url},setValidation:(e,t)=>{e.validation=t.payload},setLink:(e,t)=>{e.link=t.payload}}}),{setDataFromVideo:i,setDataFromPlaylist:a,setValidation:l,setLink:o}=s.actions,n=s.reducer},99650:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j,metadata:()=>b});var s=r(72051),i=r(91605),a=r.n(i),l=r(66326),o=r.n(l);r(67272),r(7618);var n=r(45347);let d=(0,n.createProxy)(String.raw`/Users/jayanthkoppala/Desktop/Developer/Credibly/app/AuthProvider.jsx#default`);r(26269);var p=r(59624);let u={src:"/_next/static/media/logo.1f616232.svg",height:18,width:18,blurWidth:0,blurHeight:0},c=(0,n.createProxy)(String.raw`/Users/jayanthkoppala/Desktop/Developer/Credibly/app/components/Wallet/LoginButton.tsx#default`);var h=r(92349);let x=()=>(0,s.jsxs)("div",{className:"flex z-50 justify-between items-center backdrop-blur-lg bg-white/10 rounded-lg border border-white/20 shadow-lg mx-40 my-4 p-6 h-[10vh]",children:[s.jsx(h.default,{href:"/",children:(0,s.jsxs)("div",{className:"flex  justify-between items-center",children:[s.jsx(p.default,{src:u,width:25,height:25,alt:"logo"}),s.jsx("h1",{className:"text-xl font-bold text-white",children:"Credibly"})]})}),s.jsx("div",{children:s.jsx(c,{})})]}),m=(0,n.createProxy)(String.raw`/Users/jayanthkoppala/Desktop/Developer/Credibly/app/ReduxProvider.tsx#default`);r(94782),r(48103);let v=(0,r(41264).default)(()=>r.e(778).then(r.bind(r,80778)),{loadableGenerated:{modules:["app/layout.tsx -> ./components/Wallet/OnchainProviders"]},ssr:!1}),b={title:"Create Next App",description:"Generated by create next app"};function j({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${a().variable} ${o().variable} antialiased bg-gradient-to-br from-[#020234] to-[#252c6a]`,children:s.jsx(d,{children:s.jsx(m,{children:(0,s.jsxs)(v,{children:[s.jsx(x,{}),e]})})})})})}},48734:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(72051);r(26269);let i=function({params:e}){let{url:t}=e;return console.log(t),s.jsx("div",{children:"page"})}},32957:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s={src:"/_next/static/media/logo.1f616232.svg",height:18,width:18,blurWidth:0,blurHeight:0}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(54564);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{},7618:()=>{},2399:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[9379,8295,4564],()=>r(51079));module.exports=s})();