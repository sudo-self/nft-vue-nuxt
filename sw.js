if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const a=e=>n(e,r),l={module:{uri:r},exports:t,require:a};s[r]=Promise.all(o.map((e=>l[e]||a(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"8545405080662b92c7061bd38c8ace84"},{url:"contact/_payload.json",revision:"5efad8caa0ac2763165ecd956e3baf06"},{url:"eth/_payload.json",revision:"95274c96f9f700e60e5abb918df36a69"},{url:"jesse/_payload.json",revision:"54d53215cea6daad45fe3685f370a208"},{url:"nfts/_payload.json",revision:"6260429b852410fb86255f4d43605972"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/17805393-64bb-4852-be0b-57c522c85945.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
