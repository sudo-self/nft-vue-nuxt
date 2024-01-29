import{d as te,u as Z,r as O,o as ne,_ as oe,a as ie,b as R,c as q,n as se,F as ae,e as y,f as K,g as B,w as z,T as H,t as re,h as V,p as de,i as ce,j as ue,k as G,l as le,m as pe,q as j,s as fe,v as E,x as U,y as Q,z as ve,A as we,B as F}from"./entry.847c407a.js";function J(e){if(e===null||typeof e!="object")return!1;const o=Object.getPrototypeOf(e);return o!==null&&o!==Object.prototype&&Object.getPrototypeOf(o)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function D(e,o,r=".",c){if(!J(o))return D(e,{},r,c);const v=Object.assign({},o);for(const d in e){if(d==="__proto__"||d==="constructor")continue;const u=e[d];u!=null&&(c&&c(v,d,u,r)||(Array.isArray(u)&&Array.isArray(v[d])?v[d]=[...u,...v[d]]:J(u)&&J(v[d])?v[d]=D(u,v[d],(r?`${r}.`:"")+d.toString(),c):v[d]=u))}return v}function ye(e){return(...o)=>o.reduce((r,c)=>D(r,c,"",e),{})}const A=e=>(de("data-v-9bd83813"),e=e(),ce(),e),_e=A(()=>y("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),he=A(()=>y("span",null,[y("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),ue(": Preview enabled")],-1)),me={key:0},ge=A(()=>y("div",{id:"__preview_background"},null,-1)),ke=A(()=>y("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[y("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Ce=A(()=>y("p",null,"Initializing the preview...",-1)),Pe={key:0},Se=A(()=>y("div",{id:"__preview_background"},null,-1)),Ie={id:"__preview_loader"},xe=te({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(e){const o=e,r=["__nuxt_preview","__preview_enabled"],c=G(),v=Z(),d=O(!0),u=O(!1),s=O(!1),w=O("");let l;const _=async()=>{V("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await v.replace({query:{preview:void 0}}),window.location.reload()},b=async S=>{const h=await o.syncPreview(S);if(s.value!==!0){if(!h){setTimeout(()=>b(S),1e3);return}V("previewToken").value&&(s.value=!0,await v.replace({query:{}}),c.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&l.disconnect())}};return ne(async()=>{l=(await oe(()=>import("./index.4df4817c.js"),[],import.meta.url)).connect(`${o.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:o.previewToken}});let h;l.on("connect",()=>{h=setTimeout(()=>{s.value||(h=setTimeout(()=>{w.value="Preview sync timed out",s.value=!1},3e4),l.emit("draft:requestSync"))},3e4)});const m=()=>{h&&(clearTimeout(h),h=null)};l.on("draft:sync",async I=>{if(m(),!I){try{l.once("draft:ready",()=>{l.emit("draft:requestSync")}),await o.requestPreviewSyncAPI()}catch($){switch(m(),$.response.status){case 404:w.value="Preview draft not found",s.value=!1;break;default:w.value="An error occurred while syncing preview",s.value=!1}}return}b(I)}),l.on("draft:unauthorized",()=>{m(),w.value="Unauthorized preview token",s.value=!1}),l.on("disconnect",()=>{m()}),document.body.classList.add(...r),l.on("draft:update",I=>{u.value=!0,o.syncPreview(I),u.value=!1})}),ie(()=>{document.body.classList.remove(...r)}),(S,h)=>(R(),q("div",null,[d.value?(R(),q("div",{key:0,id:"__nuxt_preview",class:se({__preview_ready:s.value,__preview_refreshing:u.value})},[s.value?(R(),q(ae,{key:0},[_e,he,y("button",{onClick:_}," Close ")],64)):K("",!0)],2)):K("",!0),B(H,{name:"preview-loading"},{default:z(()=>[d.value&&!s.value&&!w.value?(R(),q("div",me,[ge,y("div",{id:"__preview_loader"},[ke,Ce,y("button",{onClick:_}," Cancel ")])])):K("",!0)]),_:1}),B(H,{name:"preview-loading"},{default:z(()=>[w.value?(R(),q("div",Pe,[Se,y("div",Ie,[y("p",null,re(w.value),1),y("button",{onClick:_}," Exit preview ")])])):K("",!0)]),_:1})]))}});const Te=le(xe,[["__scopeId","data-v-9bd83813"]]),Ae=(e=[],o,r)=>{const c=[...o||[]],v=[...r||[]],d=JSON.parse(JSON.stringify(e));for(const s of c)if(s.oldPath)if(v.splice(v.findIndex(l=>l.path===s.oldPath),1),c.find(l=>l.path===s.oldPath))d.push({path:s.path,parsed:s.parsed});else{const l=d.find(_=>_.path===s.oldPath);l&&(l.path=s.path,s.parsed?l.parsed=s.parsed:s.pathMeta&&["_file","_path","_id","_locale"].forEach(_=>{l.parsed[_]=s.pathMeta[_]}))}else if(s.new)d.push({path:s.path,parsed:s.parsed});else{const w=d.find(l=>l.path===s.path);w&&Object.assign(w,{path:s.path,parsed:s.parsed})}for(const s of v)d.splice(d.findIndex(w=>w.path===s.path),1);const u=new Intl.Collator(void 0,{numeric:!0});return d.sort((s,w)=>u.compare(s.path,w.path)),d},C={appConfig:"app.config.ts",nuxtConfig:"nuxt.config.ts",tokensConfig:"tokens.config.ts"},be=e=>{let o;return r=>(o||(o=e()),o)};function X(e,o){for(const r in e){const c=o[r];r in o||delete e[r],c!==null&&typeof c=="object"&&X(e[r],o[r])}}function Y(e,o){for(const r in o){const c=o[r];c!==null&&typeof c=="object"?Array.isArray(c)&&Array.isArray(e[r])?e[r]=c:(e[r]=e[r]||{},Y(e[r],c)):e[r]=c}}const Re=be(()=>JSON.parse(JSON.stringify(Q()))),W=ye((e,o,r)=>{if(Array.isArray(e[o])&&Array.isArray(r))return e[o]=r,!0}),Le=()=>{const e=G(),{studio:o,content:r}=pe().public,c={},v=Re();let d;const u=j("studio-client-db",()=>null),s=j("studio-preview-db-files",()=>[]);u.value||(e.hook("content:storage",n=>{u.value=n}),fe("/non-existing-path").findOne());const w=async(n,i)=>{const a=window.sessionStorage.getItem("previewToken"),p=await n.getKeys(`${a}:`);await Promise.all(p.map(t=>n.removeItem(t)));const f=new Set(i.map(t=>t.parsed._id.split(":").shift()));await n.setItem(`${a}$`,JSON.stringify({ignoreSources:Array.from(f)})),await Promise.all(i.map(t=>(c[t.parsed._path]=t.parsed,n.setItem(`${a}:${t.parsed._id}`,JSON.stringify(t.parsed)))))},l=n=>{const i=U(e,Q);i!=null&&i.ui&&(i.ui.icons={...i.ui.icons,dynamic:!0}),Y(i,W(n,v)),n||X(i,v)},_=n=>{var a,p,f,t;const i=(t=(f=(p=(a=e==null?void 0:e.vueApp)==null?void 0:a._context)==null?void 0:p.config)==null?void 0:f.globalProperties)==null?void 0:t.$pinceauTheme;!i||!(i!=null&&i.updateTheme)||(d||(d=JSON.parse(JSON.stringify((i==null?void 0:i.theme.value)||{}))),U(e,i.updateTheme,[W(n,d)]))},b=async n=>{if(s.value=n.files=n.files||s.value||[],!u.value)return!1;const i=Ae(n.files,n.additions,n.deletions),a=i.filter(t=>![C.appConfig,C.nuxtConfig,C.tokensConfig].includes(t.path));await w(u.value,a);const p=i.find(t=>t.path===C.appConfig);l(p==null?void 0:p.parsed);const f=i.find(t=>t.path===C.tokensConfig);return _(f==null?void 0:f.parsed),L(),!0},S=async()=>{const n=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:o==null?void 0:o.apiURL,method:"POST",params:{token:n}})},h=()=>{const n=window.sessionStorage.getItem("previewToken"),i=document.createElement("div");i.id="__nuxt_preview_wrapper",document.body.appendChild(i),ve(Te,{previewToken:n,apiURL:o==null?void 0:o.apiURL,syncPreview:b,requestPreviewSyncAPI:S}).mount(i)},m=async n=>{var p,f,t;const i=window.sessionStorage.getItem("previewToken");if(!n)return null;n=n.replace(/\/$/,"");let a=await((p=u.value)==null?void 0:p.getItem(`${i}:${n}`));return a||(a=await((f=u.value)==null?void 0:f.getItem(`cached:${n}`))),a||(a=a=await((t=u.value)==null?void 0:t.getItem(n))),a||(a=c[n||"/"]),a},I=n=>{var a;const i=window.sessionStorage.getItem("previewToken");u.value&&(c[n.parsed._path]=n.parsed,u.value.setItem(`${i}:${(a=n.parsed)==null?void 0:a._id}`,JSON.stringify(n.parsed)))},$=async n=>{var p;const i=window.sessionStorage.getItem("previewToken"),a=await m(n);if(await((p=u.value)==null?void 0:p.removeItem(`${i}:${n}`)),a){delete c[a._path];const f=await m(a._id);f&&(c[f._path]=f)}},L=async()=>{if(r!=null&&r.documentDriven){const{pages:n}=U(e,we),i=await Promise.all(Object.keys(n.value).map(async a=>{var p;return await m(((p=n.value[a])==null?void 0:p._id)??a)}));n.value=i.reduce((a,p,f)=>(p&&(a[Object.keys(n.value)[f]]=p),a),{})}await e.hooks.callHookParallel("app:data:refresh")};return{apiURL:o==null?void 0:o.apiURL,contentStorage:u,syncPreviewFiles:w,syncPreviewAppConfig:l,syncPreviewTokensConfig:_,requestPreviewSynchronization:S,findContentWithId:m,updateContent:I,removeContentWithId:$,requestRerender:L,mountPreviewUI:h,initiateIframeCommunication:ee};function ee(){if(!window.parent||window.self===window.parent)return;const n=Z(),i=E(),a=O(""),p=t=>({path:t.path,query:F(t.query),params:F(t.params),fullPath:t.fullPath,meta:F(t.meta)});window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:t.key,metaKey:t.metaKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey}},"*")}),window.addEventListener("message",async t=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(t.origin))return;const{type:g,payload:T={}}=t.data||{};switch(g){case"nuxt-studio:editor:file-selected":{const k=await m(T.path);k&&(k._partial||k._path!==E().path&&(a.value=k._path,n.push(k._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:k=[],deletions:M=[]}=T;for(const P of k)await I(P);for(const P of M)await $(P.path);L();break}case"nuxt-studio:preview:sync":{b(T);break}case"nuxt-studio:config:file-changed":{const{additions:k=[],deletions:M=[]}=T,P=k.find(x=>x.path===C.appConfig);P&&l(P==null?void 0:P.parsed),M.find(x=>x.path===C.appConfig)&&l(void 0);const N=k.find(x=>x.path===C.tokensConfig);N&&_(N==null?void 0:N.parsed),M.find(x=>x.path===C.tokensConfig)&&_(void 0);break}}}),e.hook("page:finish",()=>{f(),e.payload.prerenderedAt&&L()}),e.hook("content:document-driven:finish",({route:t,page:g})=>{t.meta.studio_page_contentId=g==null?void 0:g._id}),e.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:p(E())},"*"),setTimeout(()=>{f()},100)});function f(){const t=Array.from(window.document.querySelectorAll("[data-content-id]")).map(T=>T.getAttribute("data-content-id")),g=Array.from(new Set([i.meta.studio_page_contentId,...t])).filter(Boolean);if(a.value===g[0]){a.value="";return}window.openContentInStudioEditor(g,{navigate:!0,pageContentId:i.meta.studio_page_contentId})}window.openContentInStudioEditor=(t,g={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...p(i),contentIds:t,...g}},"*")}}};export{Le as useStudio};
