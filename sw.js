if(!self.define){let e,n={};const s=(s,o)=>(s=new URL(s+".js",o).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let r={};const c=e=>s(e,t),l={module:{uri:t},exports:r,require:c};n[t]=Promise.all(o.map((e=>l[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"00320f63990b0948bae6c4c5573dc696"},{url:"contact/_payload.json",revision:"42dc691e3b3596c7ae952f241739564e"},{url:"eth/_payload.json",revision:"6c8c2e2c61d4a6ca4a2f0dd284b254bd"},{url:"nfts/_payload.json",revision:"4be3fdc870506f7bdf9c097c07641e08"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/1fe8ff4a-4902-4d6a-93ec-6eb3a3db8ee9.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
