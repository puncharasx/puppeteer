(window.webpackJsonp=window.webpackJsonp||[]).push([[1961],{2033:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(2836)),o=["components"],s={},c={unversionedId:"puppeteer.accessibility.snapshot",id:"version-5.4.0/puppeteer.accessibility.snapshot",isDocsHomePage:!1,title:"puppeteer.accessibility.snapshot",description:"Home &gt; puppeteer &gt; Accessibility &gt; snapshot",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.accessibility.snapshot.md",slug:"/puppeteer.accessibility.snapshot",permalink:"/puppeteer/docs/puppeteer.accessibility.snapshot",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.accessibility",permalink:"/puppeteer/docs/puppeteer.accessibility"},next:{title:"puppeteer.filechooser",permalink:"/puppeteer/docs/puppeteer.filechooser"}},i=[{value:"Accessibility.snapshot() method",id:"accessibilitysnapshot-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],l={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.accessibility"},"Accessibility")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.accessibility.snapshot"},"snapshot")),Object(p.b)("h2",{id:"accessibilitysnapshot-method"},"Accessibility.snapshot() method"),Object(p.b)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"snapshot(options?: SnapshotOptions): Promise<SerializedAXNode>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.snapshotoptions"},"SnapshotOptions")),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.serializedaxnode"},"SerializedAXNode"),">"),Object(p.b)("p",null,"An AXNode object representing the snapshot."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"*","*","NOTE","*","*"," The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Puppeteer will discard them as well for an easier to process tree, unless ",Object(p.b)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",Object(p.b)("inlineCode",{parentName:"p"},"false"),"."),Object(p.b)("h2",{id:"example-1"},"Example 1"),Object(p.b)("p",null,"An example of dumping the entire accessibility tree:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n\n")),Object(p.b)("h2",{id:"example-2"},"Example 2"),Object(p.b)("p",null,"An example of logging the focused node's name:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n\n")))}b.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||p;return n?a.a.createElement(m,s(s({ref:t},i),{},{components:n})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);