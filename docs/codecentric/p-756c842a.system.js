System.register(["./p-7004d9a2.system.js"],(function(e,r){"use strict";var t,n,c,s,i,a;return{setters:[function(e){t=e.p;n=e.w;c=e.d;s=e.N;i=e.a;a=e.b}],execute:function(){var e=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var o=function(){{t.$cssShim$=n.__cssshim}var e=Array.from(c.querySelectorAll("script")).find((function(e){return new RegExp("/"+s+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===s}));var a=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{a.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,n.location.href)).href;{u(a.resourcesUrl,e)}if(!n.customElements){return r.import("./p-d266b343.system.js").then((function(){return a}))}}return i(a)};var u=function(r,t){var i=e(s);try{n[i]=new Function("w","return import(w);//"+Math.random())}catch(o){var a=new Map;n[i]=function(e){var s=new URL(e,r).href;var o=a.get(s);if(!o){var u=c.createElement("script");u.type="module";u.crossOrigin=t.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+s+"'; window."+i+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){u.onload=function(){e(n[i].m);u.remove()}}));a.set(s,o);c.head.appendChild(u)}return o}}};o().then((function(e){return a([["p-aadd46ca.system",[[1,"cc-button",{primary:[4],href:[8]}]]],["p-326931c9.system",[[1,"cc-link",{href:[1],external:[4]}]]],["p-9c631329.system",[[1,"cc-checkbox",{checked:[1540],value:[1]},[[0,"click","handleClick"]]]]],["p-79863ba4.system",[[1,"cc-headline",{rank:[2]}]]],["p-a6b4fde0.system",[[1,"cc-icon",{icon:[1]}]]]],e)}))}}}));