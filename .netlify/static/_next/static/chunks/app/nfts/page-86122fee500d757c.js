(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2359,4726,2753],{46601:function(){},89214:function(){},85568:function(){},52361:function(){},94616:function(){},56313:function(e,t,i){Promise.resolve().then(i.bind(i,21394))},21394:function(e,t,i){"use strict";i.d(t,{default:function(){return u}});var a=i(57437),s=i(2265),r=i(97784),n=i(10287),l=i(91585);async function c(){try{await r.Z.start({apiKey:l.H3}),console.log("Moralis initialized")}catch(e){console.error("Failed to initialize Moralis:",e)}}async function o(e,t){try{await c();let i=(await r.Z.EvmApi.nft.getWalletNFTs({chain:n.CdM.BASE_SEPOLIA,address:e})).raw.result.filter(e=>e.token_address.toLowerCase()===t.toLowerCase());return console.log("Filtered NFTs:",i),i}catch(e){return console.error("Error fetching NFTs:",e),null}}var d=i(64707),u=()=>{let[e,t]=(0,s.useState)([]),[i,r]=(0,s.useState)(!0),[n,l]=(0,s.useState)(null),{address:c}=(0,d.m)();return(console.log("Current account address:",c),(0,s.useEffect)(()=>{(async()=>{if(c)try{let e=await o(c,"0xd2d5b17f9a0c65115a849ee0ced25f225bf53aca");Array.isArray(e)&&e.length>0?t(e):l("No NFTs found")}catch(e){l("Error fetching NFTs"),console.error(e)}finally{r(!1)}})()},[c]),i)?(0,a.jsx)("p",{children:"Loading NFTs..."}):n?(0,a.jsx)("p",{children:n}):(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-40 py-12 items-center justify-evenly",children:e.length>0?e.map((e,t)=>{let i={};try{e.metadata&&(i=JSON.parse(e.metadata))}catch(e){console.error("Error parsing metadata:",e)}return(0,a.jsxs)("div",{className:"max-w-xs rounded-lg overflow-hidden shadow-md bg-white p-4",children:[(0,a.jsx)("img",{className:"w-full h-48 object-cover mb-4",src:i.image||"placeholder-image-url",alt:i.name||"NFT Image"}),(0,a.jsx)("p",{className:"text-gray-700 text-sm mb-4",children:i.description||"No description available"}),(0,a.jsx)("div",{className:"text-sm",children:i.attributes&&i.attributes.length>0?i.attributes.map((e,t)=>(0,a.jsxs)("div",{className:"text-xs mb-1",children:[(0,a.jsxs)("span",{className:"font-semibold",children:[e.trait_type,":"," "]}),e.value||"N/A"]},t)):(0,a.jsx)("p",{children:"No attributes available"})})]},t)}):(0,a.jsx)("p",{children:"No NFTs available"})})}},91585:function(e,t,i){"use strict";i.d(t,{Es:function(){return a},H3:function(){return r},K0:function(){return s}});let a="kjjRDVw87Issus2p757XIZtZuJ1bphCi",s="ce33d043fca3d6ff7d38d239de27102a",r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjhiMjNjMDhmLTYzOTQtNGNjMi04MDIxLWZlMGY1NzI0NTdjNiIsIm9yZ0lkIjoiNDEyNTg5IiwidXNlcklkIjoiNDIzOTk4IiwidHlwZUlkIjoiMTgxODRmYzMtZGY2MS00OTQzLWE0MGMtNzBhODE0OGVmMDBhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3Mjk0MTc0MTYsImV4cCI6NDg4NTE3NzQxNn0.d3fxP2mNl244khjG3nMN-GN1yEvdhDGzRrX0oD-GfVQ"}},function(e){e.O(0,[2477,6101,1507,4707,510,1984,4373,7784,2971,2117,1744],function(){return e(e.s=56313)}),_N_E=e.O()}]);