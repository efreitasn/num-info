(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c);n(14),n(15);function l(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header-title"},r.a.createElement("span",{className:"header-title__num"},"num"),r.a.createElement("span",{className:"header-title__in"},"In"),r.a.createElement("span",{className:"header-title__fo"},"fo")))}n(16);function u(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,r.a.createElement("a",{className:"footer-link",href:"https://github.com/efreitasn/num-info",target:"_blank",rel:"noopener noreferrer"},"View on github")),r.a.createElement("div",{className:"footer-author-info"},r.a.createElement("span",{className:"footer-by"},"By "),r.a.createElement("a",{className:"footer-link",href:"https://efreitasn.dev",target:"_blank",rel:"noopener noreferrer"},"efreitasn")))}var i=n(1),s=n(3),m=Object(a.createContext)(function(){});var f={triviaInfo:null,mathInfo:null,yearInfo:null,hasError:!1,loading:!1,notFound:!1};Object(a.createContext)(f);var h=n(5),E=n(2),v=n.n(E),p=n(4);n(19);var d=Object(a.forwardRef)(function(e,t){var n=e.onChange,c=e.value,o=Object(a.useRef)(null);return Object(a.useImperativeHandle)(t,function(){return{focus:function(){o.current.focus()}}},[]),r.a.createElement("input",{className:"main-content-search-form-input",value:c,placeholder:"type a number",onChange:n,ref:o})});n(20);function b(){return r.a.createElement("button",{className:"main-content-search-form-button"},"Get info")}n(21);function O(e){var t=e.noShadow,n=e.children;return r.a.createElement("section",{className:"main-content-section".concat(t?" main-content-section--no-shadow":"")},n)}var N=function(){var e=Object(p.a)(v.a.mark(function e(t,n){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://numbersapi.com/".concat(t,"/").concat(n,"?json"));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),S=function(e){return Promise.all([N(e,"trivia"),N(e,"year"),N(e,"math")])},g=Object(a.createContext)(function(){});function j(){var e=Object(a.useContext)(m),t=Object(a.useContext)(g);return Object(a.useCallback)(function(){var n=Object(p.a)(v.a.mark(function n(a){var r,c,o,l,u;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(""===a){n.next=17;break}return e({type:"START_LOADING"}),t({type:"SET_CURRENT_VALUE",currentValue:a}),n.prev=3,n.next=6,S(a);case 6:r=n.sent,c=Object(i.a)(r,3),o=c[0],l=c[1],u=c[2],e({type:"SET_INFO",triviaInfo:o.found?o.text:null,yearInfo:l.found?l.text:null,mathInfo:u.found?u.text:null}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(3),e({type:"HAS_ERROR"});case 17:case"end":return n.stop()}},n,this,[[3,14]])}));return function(e){return n.apply(this,arguments)}}(),[])}var _={currentValue:"",recentSearches:[]},w=Object(a.createContext)(_);function y(){return Object(a.useContext)(w)}n(22);var I=function(e){return""===e||e.match(/^[0-9]+$/g)};function C(){var e=Object(a.useRef)(null),t=j(),n=function(e,t){var n=Object(a.useState)(e),r=Object(i.a)(n,2),c=r[0],o=r[1];return[c,Object(a.useCallback)(function(e){var n=e.target;t&&t(n.value)?o(n.value):t||o(n.value)},[t]),o]}("",I),c=Object(i.a)(n,3),o=c[0],l=c[1],u=c[2],s=y().currentValue,m=Object(a.useCallback)(function(){var e=Object(p.a)(v.a.mark(function e(n){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(o);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),[o]);return Object(a.useEffect)(function(){return u(s)},[s]),Object(a.useEffect)(function(){return e.current.focus()},[]),r.a.createElement(O,null,r.a.createElement("form",{className:"main-content-search-form",onSubmit:m},r.a.createElement(d,{value:o,onChange:l,ref:e}),r.a.createElement(b,null)))}function R(e){var t=e.title,n=e.className;return r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:n},r.a.createElement("title",null,t),r.a.createElement("path",{d:"M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"}))}n(23);function x(e){var t=e.clearRecentSearches,n=j(),a=y().recentSearches;return 0===a.length?null:r.a.createElement(O,{noShadow:!0},r.a.createElement("div",{className:"main-content-search-recent"},r.a.createElement("div",{className:"main-content-search-recent__left"},r.a.createElement("h2",{className:"main-content-search-recent__title"},"Recent searches"),r.a.createElement("div",{className:"main-content-search-recent__items"},Object(h.a)(a).reverse().map(function(e){return r.a.createElement("button",{key:e,className:"main-content-search-recent__item",onClick:function(){return n(e)}},e)}))),r.a.createElement("div",{className:"main-content-search-recent__right"},r.a.createElement("button",{className:"main-content-search-recent-clear",onClick:t,title:"Clear recent searches"},r.a.createElement(R,{className:"main-content-search-recent-clear__icon",title:"Clear recent searches"})))))}function k(e,t){switch(t.type){case"SET_CURRENT_VALUE":var n=function(e,t){if(e[e.length-1]!==t){var n=[].concat(Object(h.a)(e),[t]).filter(function(e,t,n){return n.lastIndexOf(e)===t});return 6===n.length&&n.shift(),n}return e}(e.recentSearches,Number(t.currentValue));return Object(s.a)({},e,{currentValue:t.currentValue,recentSearches:n});case"SET_RECENT_SEARCHES":return Object(s.a)({},e,{recentSearches:t.recentSearches});default:return e}}function T(){var e=Object(a.useReducer)(k,_),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useCallback)(function(){c({type:"SET_RECENT_SEARCHES",recentSearches:[]})},[c]);return Object(a.useEffect)(function(){var e=JSON.parse(localStorage.getItem("recent_searches"));e&&c({type:"SET_RECENT_SEARCHES",recentSearches:e})},[]),Object(a.useEffect)(function(){localStorage.setItem("recent_searches",JSON.stringify(n.recentSearches))},[n.recentSearches]),r.a.createElement(g.Provider,{value:c},r.a.createElement(w.Provider,{value:n},r.a.createElement(C,null),r.a.createElement(x,{clearRecentSearches:o})))}n(24);var A={trivia:"Trivia",math:"Math",year:"Year"};function V(e){var t=e.type,n=(e.title,e.description);return r.a.createElement(O,null,r.a.createElement("div",{className:"main-content-info-box main-content-info-box--".concat(t)},r.a.createElement("h2",null,A[t]),r.a.createElement("p",null,n)))}n(25);function H(e){switch(e.type){case"not-found":return r.a.createElement(O,{noShadow:!0},r.a.createElement("p",{className:"main-content-message main-content-message--not-found"},"There's no info related to that number ;("));case"error":return r.a.createElement(O,{noShadow:!0},r.a.createElement("p",{className:"main-content-message main-content-message--error"},"An error happened while trying to get the info."));default:return null}}n(26);function F(){return r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",className:"spinner-icon"},r.a.createElement("title",null,"Loading"),r.a.createElement("path",{d:"M16 32c-4.274 0-8.292-1.664-11.314-4.686s-4.686-7.040-4.686-11.314c0-3.026 0.849-5.973 2.456-8.522 1.563-2.478 3.771-4.48 6.386-5.791l1.344 2.682c-2.126 1.065-3.922 2.693-5.192 4.708-1.305 2.069-1.994 4.462-1.994 6.922 0 7.168 5.832 13 13 13s13-5.832 13-13c0-2.459-0.69-4.853-1.994-6.922-1.271-2.015-3.066-3.643-5.192-4.708l1.344-2.682c2.615 1.31 4.824 3.313 6.386 5.791 1.607 2.549 2.456 5.495 2.456 8.522 0 4.274-1.664 8.292-4.686 11.314s-7.040 4.686-11.314 4.686z"}))}n(27);function L(){return r.a.createElement(O,{noShadow:!0},r.a.createElement("div",{className:"main-content-loading"},r.a.createElement(F,null)))}n(28);function B(e,t){switch(t.type){case"START_LOADING":return Object(s.a)({},f,{loading:!0});case"SET_INFO":return Object(s.a)({},e,{triviaInfo:t.triviaInfo,yearInfo:t.yearInfo,mathInfo:t.mathInfo,notFound:!t.triviaInfo&&!t.yearInfo&&!t.mathInfo,loading:!1});case"HAS_ERROR":return Object(s.a)({},e,{hasError:!0,loading:!1});default:return e}}function J(){var e=Object(a.useReducer)(B,f),t=Object(i.a)(e,2),n=t[0],c=n.triviaInfo,o=n.yearInfo,l=n.mathInfo,u=n.loading,s=n.notFound,h=n.hasError,E=t[1];return r.a.createElement(m.Provider,{value:E},r.a.createElement("main",null,r.a.createElement(T,null),u&&r.a.createElement(L,null),h&&r.a.createElement(H,{type:"error"}),s&&r.a.createElement(H,{type:"not-found"}),c&&r.a.createElement(V,{type:"trivia",description:c}),o&&r.a.createElement(V,{type:"year",description:o}),l&&r.a.createElement(V,{type:"math",description:l})))}n(29);o.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"app"},r.a.createElement(l,null),r.a.createElement(J,null),r.a.createElement(u,null))},null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.09e8e084.chunk.js.map