(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{74613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(61561)}])},90638:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}n.default=function(e,n){var t=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var o,l;var c=r=a({},r,n);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return t(c);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(t,r);delete r.ssr}return t(r)};o(t(67294));var i=o(t(14302));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,n){return delete n.webpack,delete n.modules,e(n)}},16319:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var a=((r=t(67294))&&r.__esModule?r:{default:r}).default.createContext(null);n.LoadableContext=a},14302:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,u=(o=t(67294))&&o.__esModule?o:{default:o},l=t(67161),c=t(16319);var s=[],d=[],f=!1;function p(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var b=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var n,t,a;return n=e,(t=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;if(n.loading){if("number"===typeof t.delay)if(0===t.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),t.delay)}if("number"===typeof t.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),t.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(n){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}])&&r(n.prototype,t),a&&r(n,a),e}();function h(e){return function(e,n){var t=function(){if(!a){var n=new b(e,r);a={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},n);r.suspense&&(r.lazy=u.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var o=r.webpack?r.webpack():r.modules;o&&d.push((function(e){var n=!0,r=!1,a=void 0;try{for(var i,u=o[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;if(-1!==e.indexOf(l))return t()}}catch(c){r=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(r)throw a}}}))}var s=r.suspense?function(e,n){return u.default.createElement(r.lazy,i({},e,{ref:n}))}:function(e,n){t();var i=u.default.useContext(c.LoadableContext),o=l.useSubscription(a);return u.default.useImperativeHandle(n,(function(){return{retry:a.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),u.default.useMemo((function(){return o.loading||o.error?u.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return s.preload=function(){return!r.suspense&&t()},s.displayName="LoadableComponent",u.default.forwardRef(s)}(p,e)}function m(e,n){for(var t=[];e.length;){var r=e.pop();t.push(r(n))}return Promise.all(t).then((function(){if(e.length)return m(e,n)}))}h.preloadAll=function(){return new Promise((function(e,n){m(s).then(e,n)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(n){var t=function(){return f=!0,n()};m(d,e).then(t,t)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var v=h;n.default=v},33976:function(e,n,t){"use strict";var r=t(16829),a=t(41641);function i(){var e,n,t=(e=["\n    padding: 60px 0;\n    text-align: center;\n    color: ",";\n    &::before {\n        content: '/ empty\ud83d\ude2a /';\n    },\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return i=function(){return t},t}var o=r.Z.div(i(),a.Z.aaa);n.Z=o},46083:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(35944),a=t(16829),i=t(41641),o=t(41664);function u(){var e,n,t=(e=["\n    background: ",";\n    color: ",";\n    letter-spacing: 0.1em;\n    text-align: center;\n    border: 1px solid ",";\n    padding: 6px 0;\n    position: absolute;\n    top: -32px;\n    left: -1px;\n    width: 300px;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return u=function(){return t},t}var l=a.Z.h2(u(),i.Z.white,i.Z.def,i.Z.deep),c=function(e){var n=e.title,t=e.link;return n?(0,r.tZ)(r.HY,{children:t?(0,r.tZ)(o.default,{href:"/".concat(t),children:(0,r.tZ)("a",{children:(0,r.tZ)(l,{className:"has-link",children:n})})}):(0,r.tZ)(l,{children:n})}):(0,r.tZ)(r.HY,{})},s=t(33976);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function p(){var e,n,t=(e=["\n    border: 1px solid ",";\n    padding: 20px 12px 12px;\n    position: relative;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return p=function(){return t},t}var b=a.Z.article(p(),i.Z.deep),h=function(e){return(0,r.BX)(b,{children:[(0,r.tZ)(c,f({},e)),e.children||(0,r.tZ)(s.Z,{})]})}},61561:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(35944),a=t(70917),i=t(89583),o=t(97735),u=t(5152),l=t(41664),c=t(46083),s=t(16829),d=t(41641);function f(){var e,n,t=(e=["\n    margin: 8px;\n    li {\n        color: ",";\n        font-weight: bold;\n        "," {\n            margin: ",";\n        }\n        svg.list-icon {\n            display: inline;\n            height: 0.7em;\n            padding-right: 7px;\n            color: ",";\n        },\n    },\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return f=function(){return t},t}var p=s.Z.ul(f(),d.Z.deep,d.X.space,d.X.spaceY(4),d.Z.black),b=function(e){var n=e.liElements,t=e.Icon,a=void 0===t?i.u9M:t,o=n.map((function(e,n){return(0,r.BX)("li",{children:[(0,r.tZ)(a,{className:"list-icon"}),e]},n)}));return(0,r.tZ)(p,{children:o})},h=t(33165);function m(){var e,n,t=(e=["\n    margin: 16px 16px 0;\n    article {\n        "," {\n            margin: ",";\n        }\n    }\n    .about-name {\n        color: ",";\n    }\n    .about-skill-chart {\n        height: 288px;\n    }\n    .about-link-has-url:hover {\n        color: ",';\n    }\n    .about-link-has-url:after {\n        content: "\u2197";\n    }\n    .about-sub-description {\n        color: ',";\n        font-size: 14px;\n        font-weight: 100;\n    }\n    svg.about-skill-icon {\n        display: inline;\n        vertical-align: middle;\n        font-size: 1.6rem;\n        padding: 0 4px 4px 0;\n    }\n    svg.about-contact-icon {\n        display: inline;\n        vertical-align: middle;\n        color: ",";\n        font-size: 1.6rem;\n        padding: 0 4px 4px 0;\n    }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return m=function(){return t},t}var v=(0,u.default)((function(){return Promise.all([t.e(336),t.e(182)]).then(t.bind(t,11182))}),{loadableGenerated:{webpack:function(){return[11182]}},ssr:!1}),g=(0,a.iv)(m(),d.X.space,d.X.spaceY(32),d.Z.black,d.Z.highlight,d.Z.black,d.Z.deep);function y(e,n){return(0,r.tZ)(l.default,{href:"".concat(n),children:(0,r.tZ)("a",{target:"_blank",className:"about-link-has-url",children:e})})}function _(e){return e.map((function(e){return(0,r.BX)(r.HY,{children:[e.name," ",(0,r.BX)("span",{className:"about-sub-description",children:[" ",e.value]})]})}))}var w=[{name:(0,r.tZ)(o.Kt8,{className:"about-skill-icon"}),value:"Lambda, EC2, Elastic Beanstalk, RDS, Cognito, CodeDeploy"},{name:(0,r.tZ)(o.Vce,{className:"about-skill-icon"}),value:"MVC/WebFlux, JPA, QueryDsl, OAuth2.0, Swagger3.0, RESTful API"},{name:(0,r.tZ)(o.Xou,{className:"about-skill-icon"}),value:"SSR, SSG"},{name:(0,r.tZ)(o.pNp,{className:"about-skill-icon"}),value:"Zustand, emotion, tailwind, Atomic Design"},{name:(0,r.tZ)(o.vl3,{className:"about-skill-icon"}),value:"es6, babel, webpack"},{name:(0,r.tZ)(o.WZi,{className:"about-skill-icon"}),value:""},{name:(0,r.tZ)(o.YgB,{className:"about-skill-icon"}),value:"ANSI Sql, procedure, function, indexing"}],Z=[{name:y("Seegene. Inc","https://www.seegene.co.kr/"),value:"2021.11.~ SW Lab - Service platform"},{name:y("KHANTECH","https://www.khantech.co.kr/"),value:"2018.04.~2021.11. SD Development"},{name:"",value:(0,r.BX)(r.HY,{children:["\ud83d\udc46 IT Developer",(0,r.tZ)("br",{}),".........\ud83d\udc47 PCB Engineer"]})},{name:y("KOREA CIRCUIT CO.,LTD","https://www.kcg.co.kr/"),value:"2013.12.~2016.12. Front Engineering"}],O=_(w),k=_(Z),j=function(){return(0,h.Z)("About"),(0,r.BX)("div",{css:g,children:[(0,r.tZ)(c.Z,{title:"\u2728Introduce",children:(0,r.tZ)(b,{liElements:[(0,r.tZ)("span",{className:"about-name",children:"\uae40\ud61c\ub9ac | Kim Hyeri"},"content0"),"Web Developer",(0,r.BX)(r.HY,{children:["Skill",(0,r.tZ)("div",{className:"about-skill-chart",children:(0,r.tZ)(v,{})}),(0,r.tZ)(b,{Icon:i.QJe,liElements:O})]}),(0,r.BX)(r.HY,{children:["Careers",(0,r.tZ)(b,{Icon:i.QJe,liElements:k})]})]})}),(0,r.tZ)(c.Z,{title:"\ud83d\udd4aContact",children:(0,r.tZ)(b,{liElements:[(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.SRX,{className:"about-contact-icon"}),(0,r.tZ)("span",{children:" Email : m3rri17@gmail.com"})]}),(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.hJX,{className:"about-contact-icon"}),(0,r.tZ)("span",{children:" Github : "}),y("https://github.com/m3rri","https://github.com/m3rri")]})]})})]})}},5152:function(e,n,t){e.exports=t(90638)},68217:function(e,n,t){"use strict";var r=t(96086),a=t(67294);n.useSubscription=function(e){var n=e.getCurrentValue,t=e.subscribe,i=a.useState((function(){return{getCurrentValue:n,subscribe:t,value:n()}}));e=i[0];var o=i[1];return i=e.value,e.getCurrentValue===n&&e.subscribe===t||(i=n(),o({getCurrentValue:n,subscribe:t,value:i})),a.useDebugValue(i),a.useEffect((function(){function e(){if(!a){var e=n();o((function(a){return a.getCurrentValue!==n||a.subscribe!==t||a.value===e?a:r({},a,{value:e})}))}}var a=!1,i=t(e);return e(),function(){a=!0,i()}}),[n,t]),i}},67161:function(e,n,t){"use strict";e.exports=t(68217)}},function(e){e.O(0,[415,774,888,179],(function(){return n=74613,e(e.s=n);var n}));var n=e.O();_N_E=n}]);