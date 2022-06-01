import{_ as s,r,o as i,c as a,b as e,d as t,e as o}from"./app.bdb7511d.js";const d={},l=e("h1",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),o(" Introduction")],-1),c=e("p",null,'All you need to know to "How to setup a environment for Testing/Contributing/Use this source code".',-1),h=e("h2",{id:"testing-workflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#testing-workflow","aria-hidden":"true"},"#"),o(" Testing/Workflow")],-1),u=e("p",null,"To run the app, you need:",-1),_=o("A Discord Bot, with "),p=e("code",null,"server member intent",-1),f=o(" and "),m=e("code",null,"presence intent",-1),g=o(".. obviously.. "),w={href:"https://discord.com/developers/applications",target:"_blank",rel:"noopener noreferrer"},v=o("click here"),y=e("li",null,"A Discord server to test - you can't use the Warung International Discord Server to do tests",-1),b={href:"https://www.python.org/downloads/release/python-3100/",target:"_blank",rel:"noopener noreferrer"},k=o("Python version 3.10.0"),D=o(" or latest - no guarantees on older versions"),x=e("li",null,"A MongoDB Server for levelling and warning system (mongodb atlas is preferred)",-1),I=o("A Good Code IDE, obviously.. I recommend you "),B={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},A=o("Visual Studio Code"),C=e("p",null,"If you don't own/admin a Discord server, creating one is simple, you can do it from the same menu you join discord servers from.",-1),E=e("h2",{id:"running-with-a-database",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-with-a-database","aria-hidden":"true"},"#"),o(" Running with a database")],-1),T=e("p",null,"If you want to develop features that require persisting data, spin up a MongoDB database. If you have Docker installed, this is as simple as running make mongodb which will start a MongoDB container with a user root that has no password.",-1),V=e("p",null,"Finally, the application requires some configuration. Copy the example.env to .env and modify it to use your token and various IDs. Depending on what you're working on, some values won't be necessary.",-1);function M(N,S){const n=r("ExternalLinkIcon");return i(),a("div",null,[l,c,h,u,e("ul",null,[e("li",null,[_,p,f,m,g,e("a",w,[v,t(n)])]),y,e("li",null,[e("a",b,[k,t(n)]),D]),x,e("li",null,[I,e("a",B,[A,t(n)])])]),C,E,T,V])}var L=s(d,[["render",M],["__file","introduction.html.vue"]]);export{L as default};
