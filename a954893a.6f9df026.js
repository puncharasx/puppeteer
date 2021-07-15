(window.webpackJsonp=window.webpackJsonp||[]).push([[1843],{1915:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2836)),o=["components"],c={},u={unversionedId:"puppeteer.mouse.drag",id:"version-5.4.0/puppeteer.mouse.drag",isDocsHomePage:!1,title:"puppeteer.mouse.drag",description:"Home &gt; puppeteer &gt; Mouse &gt; drag",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.mouse.drag.md",slug:"/puppeteer.mouse.drag",permalink:"/puppeteer/docs/puppeteer.mouse.drag",version:"5.4.0"},i=[{value:"Mouse.drag() method",id:"mousedrag-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.mouse"},"Mouse")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.mouse.drag"},"drag")),Object(p.b)("h2",{id:"mousedrag-method"},"Mouse.drag() method"),Object(p.b)("p",null,"Dispatches a ",Object(p.b)("inlineCode",{parentName:"p"},"drag")," event."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"drag(start: Point, target: Point): Promise<Protocol.Input.DragData>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"start"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.point"},"Point")),Object(p.b)("td",{parentName:"tr",align:null},"starting point for drag")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"target"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.point"},"Point")),Object(p.b)("td",{parentName:"tr",align:null},"point to drag to ","`","`","`")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","Protocol.Input.DragData",">"))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=l(r),s=n,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||p;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);