if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>i(e,c),a={module:{uri:c},exports:t,require:o};s[c]=Promise.all(r.map((e=>a[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c3becd34"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/banner.jpeg",revision:"255e5acfe21508c5019cd4028cee56b7"},{url:"assets/bg.jpg",revision:"d2eea6fbec2644cd18a6838e4757fc7f"},{url:"assets/book1.jpg",revision:"a3e89064544ff21ae6ed6dc8dd078a00"},{url:"assets/bootstrap.min.css",revision:"abe91756d18b7cd60871a2f47c1e8192"},{url:"assets/dexie.min.js",revision:"24bbfe6f686f009ceb13c8569369071e"},{url:"assets/images.jpeg",revision:"7ace9c2ff86592d7488277dc9534148b"},{url:"assets/images.png",revision:"6983e39ac11e289d158e013db7c0e07c"},{url:"assets/index.js",revision:"62ea80d10c32b7b6c51304f8bdfb491b"},{url:"assets/style.css",revision:"4d72a01b509514abdd3cbe1b486575b8"},{url:"assets/title.png",revision:"1425a562fc2ebf98fefffe0f508545c8"},{url:"darenBabbanSallah.html",revision:"45b48af8683973245a726647c90134fa"},{url:"index.html",revision:"14233105d046bf06270736cd00162e1d"},{url:"none.html",revision:"bee86023c33ff5888c0b41b713e97b80"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map