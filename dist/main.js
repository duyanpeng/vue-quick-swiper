!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["main.js"]=e():t["main.js"]=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){var i=n(5);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,r);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var i={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),s=null,a=0,c=[],u=n(6);function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(m(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(m(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=c[c.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(t.insertAt.before,n);n.insertBefore(e,r)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function p(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return v(e,t.attrs),f(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=a++;n=s||(s=p(e)),i=x.bind(null,n,c,!1),r=x.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),f(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return l(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&l(d(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function x(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){"use strict";var i=n(0);n.n(i).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n[v-cloak][data-v-71fa2845]{\n  display: none;\n}\n.vq-swiper[data-v-71fa2845] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.vq-swiper-container[data-v-71fa2845] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vq-swiper-dots[data-v-71fa2845]{\n  position:absolute;\n  bottom:20px;\n  left:50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height:6px;\n}\n.vq-swiper-dot[data-v-71fa2845]{\n  margin: 0 5px;\n  width:6px;\n  height:6px;\n  border-radius: 3px;\n  background: #d0cdd1;\n}\n.vq-swiper-select[data-v-71fa2845]{\n  background: #53b2fd;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";var i=n(1);n.n(i).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.vq-swiper-item[data-v-e6c0b110] {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 100%;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vq-swiper"},[n("div",{ref:"container",staticClass:"vq-swiper-container"},[t._t("default")],2),t._v(" "),t._t("dots",[n("div",{staticClass:"vq-swiper-dots"},t._l(t.imgNum,function(e,i){return n("div",{key:i,staticClass:"vq-swiper-dot",class:{"vq-swiper-select":t.selectIndex==i}})}))])],2)};i._withStripped=!0;var r={props:{space:{default:3e3},getIndex:{default:function(){return function(){}}}},data:()=>({index:1,startX:0,selectIndex:0,endX:0,imgNum:0,timer:{},stopAuto:!1}),components:{},computed:{},watch:{index(t,e){t>this.imgNum?(this.selectIndex=0,this.getIndex(this.selectIndex)):0===t?(this.selectIndex=this.imgNum-1,this.getIndex(this.selectIndex)):1===t||(this.selectIndex=t-1,this.getIndex(this.selectIndex))}},mounted(){this.bindEvent(),this.insertNode(),this.initPosition(),this.autoMove()},methods:{bindEvent(){this.$nextTick(()=>{"ontouchend"in document?(this.$el.addEventListener("touchstart",this.onTouchStart),this.$el.addEventListener("touchmove",this.onTouchMove),this.$el.addEventListener("touchend",this.onTouchEnd)):console.log("不支持")})},onTouchStart(t){this.stopAuto=!0;const e=t.touches[0].screenX;this.startX=e,this.$refs.container.style["-webkit-transition"]=null,this.$refs.container.style.transition=null,0===this.index&&(this.index=this.imgNum),this.index===this.imgNum+1&&(this.index=1)},onTouchMove(t){this.stopAuto=!0;const e=t.touches[0].screenX,n=this.$el.getBoundingClientRect().width;this.endX=e-this.startX,this.handleMove(this.endX+n*-this.index)},onTouchEnd(){this.stopAuto=!1,clearTimeout(this.timer),this.autoMove();const t=this.$el.getBoundingClientRect().width;Math.abs(this.endX)>t/2&&(this.endX<0?this.index++:this.index--),this.endX=0,this.handleEnd()},handleMove(t){this.$refs.container.style["-webkit-transform"]=`translate3d(${t}px,0,0)`,this.$refs.container.style.transform=`translate3d(${t}px,0,0)`},handleEnd(){const t=this.$el.getBoundingClientRect().width;this.$refs.container.style["-webkit-transition"]="all .2s",this.$refs.container.style.transition="all .2s",this.handleMove(-t*this.index)},insertNode(){this.$nextTick(()=>{const t=this.$refs.container.children;this.imgNum=t.length;const e=t[0].cloneNode(!0),n=t[t.length-1].cloneNode(!0);this.$refs.container.insertBefore(n,t[0]),this.$refs.container.appendChild(e)})},initPosition(){const t=this.$el.getBoundingClientRect().width;this.handleMove(1*-t)},autoMove(){if(this.stopAuto)return!1;this.timer=setTimeout(()=>{if(this.stopAuto)return!1;const t=this.$el.getBoundingClientRect().width;this.$refs.container.style["-webkit-transition"]=null,this.$refs.container.style.transition=null,this.index===this.imgNum+1?(this.index=1,this.$refs.container.style["-webkit-transform"]=`translate3d(${-t}px,0,0)`,this.$refs.container.style.transform=`translate3d(${-t}px,0,0)`,this.space=0,this.autoMove()):(this.space=1500,this.index=this.index+1,this.$refs.container.style["-webkit-transition"]="all .2s",this.$refs.container.style.transition="all .2s",this.handleMove(-t*this.index),this.autoMove())},this.space)}}};n(4);function o(t,e,n,i,r,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}var s=o(r,i,[],!1,null,"71fa2845",null);s.options.__file="src/components/QuickSwiper.vue";var a=s.exports,c=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vq-swiper-item"},[this._t("default")],2)};c._withStripped=!0;var u={data:()=>({}),components:{},computed:{},mounted(){},methods:{}},l=(n(7),o(u,c,[],!1,null,"e6c0b110",null));l.options.__file="src/components/QuickSwiperItem.vue";var d=l.exports;e.default={install:t=>{t.component("quickSwiper",a),t.component("quickSwiperItem",d)}}}])});