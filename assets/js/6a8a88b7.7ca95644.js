"use strict";(self.webpackChunkperadaban_docs=self.webpackChunkperadaban_docs||[]).push([[83],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"dev-intro",title:"Introduction",sidebar_position:1,tags:["introduction","development"]},s=void 0,u={unversionedId:"development/dev-intro",id:"development/dev-intro",title:"Introduction",description:'All you need to know to "How to setup a environment for Testing/Contributing/Use this source code".',source:"@site/docs/development/introduction.md",sourceDirName:"development",slug:"/development/dev-intro",permalink:"/docs/development/dev-intro",draft:!1,editUrl:"https://github.com/warung-international/docs/tree/master/docs/development/introduction.md",tags:[{label:"introduction",permalink:"/docs/tags/introduction"},{label:"development",permalink:"/docs/tags/development"}],version:"current",sidebarPosition:1,frontMatter:{id:"dev-intro",title:"Introduction",sidebar_position:1,tags:["introduction","development"]},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/docs/category/development"},next:{title:"Awesome",permalink:"/docs/development/dev-awesome"}},d={},c=[{value:"Testing/Workflow",id:"testingworkflow",level:2},{value:"Running with a database",id:"running-with-a-database",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'All you need to know to "How to setup a environment for Testing/Contributing/Use this source code".'),(0,i.kt)("h2",{id:"testingworkflow"},"Testing/Workflow"),(0,i.kt)("p",null,"To run the app, you need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Discord Bot, with ",(0,i.kt)("inlineCode",{parentName:"li"},"server member intent")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"presence intent"),".. obviously.. ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"click here")),(0,i.kt)("li",{parentName:"ul"},"A Discord server to test - you can't use the Warung International Discord Server to do tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/release/python-3100/"},"Python version 3.10.0")," or latest - no guarantees on older versions"),(0,i.kt)("li",{parentName:"ul"},"A MongoDB Server for levelling and warning system (mongodb atlas is preferred)"),(0,i.kt)("li",{parentName:"ul"},"A Good Code IDE, obviously.. I recommend you ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code"))),(0,i.kt)("p",null,"If you don't own/admin a Discord server, creating one is simple, you can do it from the same menu you join discord servers from."),(0,i.kt)("h2",{id:"running-with-a-database"},"Running with a database"),(0,i.kt)("p",null,"If you want to develop features that require persisting data, spin up a MongoDB database. If you have Docker installed, this is as simple as running make mongodb which will start a MongoDB container with a user root that has no password."),(0,i.kt)("p",null,"Finally, the application requires some configuration. Copy the example.env to .env and modify it to use your token and various IDs. Depending on what you're working on, some values won't be necessary."))}m.isMDXComponent=!0}}]);