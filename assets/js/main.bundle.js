!function(){"use strict";var e,t={1142:function(e,t,n){n(483),n(7312);var o=n(8305),i=n(7682),r=(n(2081),n(5613),n(4253)),a=n(1655),s=window.getComputedStyle(document.body,null).getPropertyValue("background-color");s||(s="trasparent");var l=document.createElement("div");l.setAttribute("id","debug-panel"),l.style.position="fixed",l.style.bottom=0,l.style.right=0,l.style.padding="8px 12px",l.style.color="#fff",l.style.fontSize="12px",l.style.lineHeight="16px",l.style.textAlign="left",l.style.background="rgba(0, 0, 0, 0.9)",l.addEventListener("click",(function(){0===parseInt(l.style.bottom,10)?(localStorage.setItem("DEBUG_IS_HIDE",1),l.style.bottom="-"+(l.clientHeight-20)+"px"):(localStorage.setItem("DEBUG_IS_HIDE",0),l.style.bottom="0px")}));var d=document.createElement("div");d.setAttribute("class","debug-panel-app"),l.appendChild(d);var c=document.createElement("div");c.setAttribute("class","debug-panel-app-buttons"),l.appendChild(c);var u=document.createElement("button");function p(e){e?(a.Z.set("bodyColored",0),document.body.style.backgroundColor=s):(a.Z.set("bodyColored",1),document.body.style.backgroundColor="rgba(0, 0, 0, 0.9)")}u.setAttribute("id","debug-panel-app-button-body"),u.classList.add("button"),u.classList.add("button--primary"),u.style.minHeight="24px",u.style.lineHeight="24px",u.style.padding="0 1em",u.innerText="Body Color",l.appendChild(u),c.appendChild(u),u.addEventListener("click",(function(e){e.stopPropagation(),p(!!+a.Z.get("bodyColored"))})),document.body.appendChild(l);var b=(0,r.P)(1e3,(function(){var e=[];e.push("Ширина окна: "),e.push('<span style="color:#dc3545">'),e.push(document.body.clientWidth),e.push("/"),e.push(window.innerWidth),e.push("px</span> "),e.push("<br>Font Size 16px: "),e.push(document.body.clientWidth/16),e.push("rem"),e.push("<br>Font Size 18px: "),e.push(document.body.clientWidth/18),e.push("rem"),e.push("<br>Font Size 20px: "),e.push(document.body.clientWidth/20),e.push("rem"),e.push("<br>Размер пикселя: "),e.push('<span style="color:#dc3545">'),e.push(window.devicePixelRatio),e.push("px</span> ");var t=l.querySelector(".debug-panel-app");null!==t&&(t.innerHTML=e.join(""))}));window.addEventListener("resize",b),p(!+a.Z.get("bodyColored")),b(),1===parseInt(localStorage.getItem("DEBUG_IS_HIDE"),10)?l.style.bottom="-"+(l.clientHeight-20)+"px":l.style.bottom="0px";var y=n(9667);y.p8.timeline({defaults:{duration:1,ease:"back"},onComplete:function(){document.body.classList.add("animation-end")}}).to(".section-hero",{opacity:1,scale:1.1,ease:"power2"},"+=1.2").to(".section-hero__image",{opacity:1,duration:.6},"+=.5").to(".section-hero__title",{opacity:1,duration:.6},"-=.15"),y.p8.timeline({defaults:{duration:.3,ease:"back"},onComplete:function(){document.querySelector(".page-header-bar").style.transform="none",document.querySelector(".page-header__navigation").style.transform="none"}}).to(".page-header-bar",{opacity:1,y:0,duration:.4,ease:"power2"},"+=2").to(".js-logo",{opacity:1,x:0,ease:"back"},"+=.2").to(".page-header__navigation",{opacity:1,x:0,ease:"back"},"-=.3").to(".navigation__list li",{opacity:1,x:0,duration:.6,stagger:.2},"-=.3"),document.body.addEventListener("mousemove",(function(e){if(document.body.classList.contains("animation-end")){var t=window.innerWidth/2,n=window.innerHeight/2,o=e.clientX-t,i=e.clientY-n;o/=t,i/=n,y.p8.to(".section-hero",.1,{transform:"scale(1.1) translateX("+12*-o+"px) translateY("+12*-i+"px)"}),y.p8.to(".section-hero__top",.1,{transform:"rotateY("+30*o+"deg) translateX("+24*o+"px) translateY("+24*i+"px)"})}})),(0,i.F)(document.getElementById("navigation"),{breakpointClose:576,open:function(){for(var e=document.querySelectorAll(".js-menu-inert"),t=0,n=e.length;t<n;t+=1)e[t].inert=!0},close:function(){for(var e=document.querySelectorAll(".js-menu-inert"),t=0,n=e.length;t<n;t+=1)e[t].inert=!1}}),new o.ZP(".swiper",{modules:[o.tl,o.xW],pagination:{el:".swiper-pagination",clickable:!0,type:"bullets",renderBullet:function(e,t){var n="",o=this.slides[e].getAttribute("data-slide-icon"),i=this.slides[e].getAttribute("data-slide-title"),r=this.slides[e].getAttribute("data-slide-body");return o&&(n+='<span class="block-requirements__image"><img src="'+o+'" alt="" /></span>'),o&&(n+='<span class="block-requirements__title">'+i+"</span>"),o&&(n+='<span class="block-requirements__body">'+r+"</span>"),""===n?"":'<a class="block-requirements '+t+'">'+n+"</a>"}},effect:"fade",fadeEffect:{crossFade:!0}})}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,n,i,r){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],r=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],s=n[1],l=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var c=l(o)}for(t&&t(n);d<a.length;d++)r=a[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=o.O(void 0,[736],(function(){return o(1142)}));i=o.O(i)}();