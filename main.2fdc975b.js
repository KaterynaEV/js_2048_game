parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var r,e=document.querySelector(".button"),t=document.querySelector(".message-start"),a=document.querySelector(".message-lose"),n=document.querySelector(".message-win"),o=document.querySelector(".game-score"),s=document.querySelector(".game-field"),c=4,i=0;function f(){for(;r.flat().includes(0);){var e=Math.floor(Math.random()*c),t=Math.floor(Math.random()*c);if(0===r[e][t]){var a=Math.random()<.8?2:4;r[e][t]=a;break}}u()}function u(){for(var t=0;t<c;t++)for(var o=0;o<c;o++){var i=s.rows[t].cells[o];i.innerText="",i.classList.value="",i.classList.add("field-cell"),r[t][o]>0&&(i.innerText=r[t][o],i.classList.add("field-cell--".concat(r[t][o]))),2048===r[t][o]&&(n.classList.remove("hidden"),e.classList.replace("restart","start"))}w()&&a.classList.remove("hidden")}function l(r){return r.filter(function(r){return 0!==r})}function d(e){for(var t=r.flat().includes(0),a=!1,n=0;n<e.length-1;n++)if(e[n]===e[n+1]){a=!0;break}if(!t&&!a)return e;for(var s=l(e),f=0;f<s.length-1;f++)s[f]===s[f+1]&&(s[f]*=2,s[f+1]=0,i+=s[f],o.innerText=i);for(s=l(s);s.length<c;)s.push(0);return s}function v(){for(var e=0;e<c;e++){var t=r[e];t=d(t),r[e]=t}}function m(){for(var e=0;e<c;e++){var t=r[e].reverse();t=d(t).reverse(),r[e]=t}}function h(){for(var e=0;e<c;e++){var t=[r[0][e],r[1][e],r[2][e],r[3][e]];t=d(t);for(var a=0;a<c;a++)r[a][e]=t[a]}}function L(){for(var e=0;e<c;e++){var t=[r[0][e],r[1][e],r[2][e],r[3][e]].reverse();t=d(t).reverse();for(var a=0;a<c;a++)r[a][e]=t[a]}}function g(r,e){for(var t=0;t<c;t++)for(var a=0;a<c;a++)if(r[t][a]!==e[t][a])return!1;return!0}function w(){if(r.flat().includes(0))return!1;for(var e=0;e<c;e++)for(var t=0;t<c;t++)if(r[e][t]===r[e][t+1])return!1;for(var a=0;a<c-1;a++)for(var n=0;n<c;n++)if(r[a][n]===r[a+1][n])return!1;return!0}e.addEventListener("click",function(){e.classList.replace("start","restart"),e.innerText="Restart",t.classList.add("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0,o.textContent=i,f(),f()}),document.addEventListener("keyup",function(e){e.preventDefault();var t=JSON.parse(JSON.stringify(r));switch(e.code){case"ArrowLeft":v();break;case"ArrowRight":m();break;case"ArrowUp":h();break;case"ArrowDown":L()}g(t,r)||f(),u()});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.2fdc975b.js.map