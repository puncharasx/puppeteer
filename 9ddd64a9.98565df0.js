(window.webpackJsonp=window.webpackJsonp||[]).push([[1730],{1801:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),c=(n(0),n(2836)),p=["components"],o={},l={unversionedId:"puppeteer.page.setcacheenabled",id:"puppeteer.page.setcacheenabled",isDocsHomePage:!1,title:"puppeteer.page.setcacheenabled",description:"Home &gt; puppeteer &gt; Page &gt; setCacheEnabled",source:"@site/docs\\puppeteer.page.setcacheenabled.md",slug:"/puppeteer.page.setcacheenabled",permalink:"/puppeteer/docs/next/puppeteer.page.setcacheenabled",version:"current"},b=[{value:"Page.setCacheEnabled() method",id:"pagesetcacheenabled-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:b};function i(e){var t=e.components,n=Object(a.a)(e,p);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.setcacheenabled"},"setCacheEnabled")),Object(c.b)("h2",{id:"pagesetcacheenabled-method"},"Page.setCacheEnabled() method"),Object(c.b)("p",null,"Toggles ignoring cache for each request based on the enabled state. By default, caching is enabled."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"setCacheEnabled(enabled?: boolean): Promise<void>;\n")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"enabled"),Object(c.b)("td",{parentName:"tr",align:null},"boolean"),Object(c.b)("td",{parentName:"tr",align:null},"sets the ",Object(c.b)("code",null,"enabled")," state of cache")))),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<","void",">"))}i.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),i=u(n),d=r,m=i["".concat(p,".").concat(d)]||i[d]||s[d]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var b=2;b<c;b++)p[b]=n[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);