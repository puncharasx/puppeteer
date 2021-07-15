(window.webpackJsonp=window.webpackJsonp||[]).push([[1145],{1216:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var p=t(3),n=t(7),o=(t(0),t(2836)),a=["components"],c={},u={unversionedId:"puppeteer.puppeteer.errors",id:"version-10.0.0/puppeteer.puppeteer.errors",isDocsHomePage:!1,title:"puppeteer.puppeteer.errors",description:"Home &gt; puppeteer &gt; Puppeteer &gt; errors",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.puppeteer.errors.md",slug:"/puppeteer.puppeteer.errors",permalink:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.errors",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.puppeteer.devices",permalink:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.devices"},next:{title:"puppeteer.puppeteer.networkconditions",permalink:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.networkconditions"}},i=[{value:"Puppeteer.errors property",id:"puppeteererrors-property",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:i};function l(e){var r=e.components,t=Object(n.a)(e,a);return Object(o.b)("wrapper",Object(p.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.puppeteer"},"Puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.errors"},"errors")),Object(o.b)("h2",{id:"puppeteererrors-property"},"Puppeteer.errors property"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"get errors(): PuppeteerErrors;\n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"page.waitForSelector(selector[, options])")," might fail if the selector doesn't match any nodes during the given timeframe."),Object(o.b)("p",null,"For certain types of errors Puppeteer uses specific error classes. These classes are available via ",Object(o.b)("inlineCode",{parentName:"p"},"puppeteer.errors"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of handling a timeout error:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof puppeteer.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n\n")))}l.isMDXComponent=!0},2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var p=t(0),n=t.n(p);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},o=Object.keys(e);for(p=0;p<o.length;p++)t=o[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)t=o[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),s=function(e){var r=n.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.a.createElement(i.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},m=n.a.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=s(t),m=p,f=l["".concat(a,".").concat(m)]||l[m]||b[m]||o;return t?n.a.createElement(f,c(c({ref:r},i),{},{components:t})):n.a.createElement(f,c({ref:r},i))}));function f(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:p,a[1]=c;for(var i=2;i<o;i++)a[i]=t[i];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);