(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GxIk:function(t,n,e){"use strict";e("W1QL"),e("K/PF"),e("t91x"),e("75LO");var r=e("5Md4"),o=e("mXGw"),i=e("aD51"),a=e("Wbzz"),c=e("D3RC"),u=e("yQ72"),s=e("5++h"),l=e("15bu");function p(){var t=S(["\n    &:hover "," {\n      transform: none;\n      //box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return p=function(){return t},t}function d(){var t=S(["\n    max-width: 100%;\n    padding: 0;\n  "]);return d=function(){return t},t}function f(){var t=S(["\n    max-width: 100%;\n    padding: 0;\n  "]);return f=function(){return t},t}function b(){var t=S(["\n    margin: 0 auto;\n    width: 100%;\n  "]);return b=function(){return t},t}function g(){var t=S(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return g=function(){return t},t}function x(){var t=S(["\n    margin-bottom; 15px;\n  "]);return x=function(){return t},t}function h(){var t=S(["\n    display: -webkit-box;\n  "]);return h=function(){return t},t}function m(){var t=S(["\n    font-size: 22px;\n    padding: 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return m=function(){return t},t}function j(){var t=S(["\n    font-size: 24px;\n  "]);return j=function(){return t},t}function v(){var t=S(["\n    margin-bottom: 15px;\n  "]);return v=function(){return t},t}function y(){var t=S(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    //border-top-right-radius: 5px;\n    //border-top-left-radius: 5px;\n  "]);return y=function(){return t},t}function w(){var t=S(["\n    height: 200px;\n    //margin-bottom: 35px;\n  "]);return w=function(){return t},t}function O(){var t=S(["\n    margin-bottom: 40px;\n    //box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return O=function(){return t},t}function k(){var t=S(["\n    margin-bottom: 60px;\n  "]);return k=function(){return t},t}function z(){var t=S(["\n    //box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    margin-bottom: 30px;\n  "]);return z=function(){return t},t}function L(){var t=S(["\n    grid-template-columns: 1fr;\n  "]);return L=function(){return t},t}function _(){var t=S(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return _=function(){return t},t}function P(){var t=S(["\n    grid-template-columns: 1fr;\n\n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return P=function(){return t},t}function A(){var t=S(["\n    grid-template-columns: 1fr 1fr;\n  "]);return A=function(){return t},t}function G(){var t=S(["\n    -webkit-line-clamp: 3;\n  "]);return G=function(){return t},t}function S(t,n){return n||(n=t.slice(0)),t.raw=n,t}n.a=function(t){var n=t.articles,e=t.alwaysShowAllDetails;if(!n)return null;var r=1===n.length,a=Object(o.useContext)(l.a),c=a.gridLayout,u=void 0===c?"tiles":c,s=a.hasSetGridLayout,p=a.getGridLayout,d=n.reduce((function(t,n,e,r){return e%2==0&&t.push(r.slice(e,e+2)),t}),[]);return Object(o.useEffect)((function(){return p()}),[]),Object(i.jsx)(R,{style:{opacity:s?1:0},alwaysShowAllDetails:e},d.map((function(t,n){var e=n%2!=0,o=n%2!=1;return Object(i.jsx)(M,{key:n,gridLayout:u,hasOnlyOneArticle:r,reverse:e},Object(i.jsx)(C,{article:t[0],narrow:e}),Object(i.jsx)(C,{article:t[1],narrow:o}))})))};var C=function(t){var n=t.article,e=t.narrow;if(!n)return null;var r=e&&n.title.length>35,o=e?n.hero.narrow:n.hero.regular,a=o&&0!==Object.keys(o).length&&o.constructor===Object;return Object(i.jsx)(B,{to:n.slug,"data-a11y":"false"},Object(i.jsx)(J,{gridLayout:"tiles"},Object(i.jsx)(N,{narrow:e,gridLayout:"tiles"},a?Object(i.jsx)(u.c,{src:o}):Object(i.jsx)(u.a,null)),Object(i.jsx)(X,{gridLayout:"tiles"},Object(i.jsx)(K,{gridLayout:"tiles"},Object(i.jsx)("span",{className:"Article__Categories"},n.categories),Object(i.jsx)("span",{className:"Article__Topics"},n.topic)),Object(i.jsx)(W,{dark:!0,hasOverflow:r,gridLayout:"tiles"},n.title),Object(i.jsx)(Y,{gridLayout:"tiles"},Object(i.jsx)("span",{className:"Article__Date"},n.date)," •  ",Object(i.jsx)("span",{className:"Article__TimeToRead"},n.timeToRead," min read")))))},T=Object(i.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:inline;white-space:normal;overflow:hidden;margin-bottom:25px;",s.a.phablet(G())),q={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},R=Object(r.a)("div",{target:"e14bbv6l0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&q})),D=function(t){return Object(i.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:35px;}",s.a.desktop_medium(A())," ",s.a.tablet(P()))},F=function(t){return Object(i.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 570px;grid-column-gap:0;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",s.a.desktop(_())," ",s.a.tablet(L())," @media (max-width:540px){background:",t.theme.colors.card,";}",s.a.phablet(z()))},Q=function(t){return Object(i.css)("position:relative;",s.a.tablet(k())," @media (max-width:540px){background:",t.theme.colors.card,";}",s.a.phablet(O()))},I=function(t){return Object(i.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},M=Object(r.a)("div",{target:"e14bbv6l1"})((function(t){return"tiles"===t.gridLayout?D:I})),J=Object(r.a)("div",{target:"e14bbv6l2"})((function(t){return"rows"===t.gridLayout?F:Q})),N=Object(r.a)("div",{target:"e14bbv6l3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");overflow:hidden;z-index:300;display:block;& > div{height:100%;transition:transform 0.3s var(--ease-out-quad),scale 0.3s var(--ease-out-quad);}",s.a.tablet(w())," ",s.a.phablet(y())),W=Object(r.a)(c.a.h2,{target:"e14bbv6l4"})("font-size:32px;font-weight:400;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"25px":"10px"}),";",T,";background-size:0 100%;background-repeat:no-repeat;text-decoration:none;-webkit-transition:background-size .8s ease;transition:background-size .8s ease;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(99%,transparent),color-stop(1%,",(function(t){return t.theme.colors.primary}),"));background-image:linear-gradient(180deg,transparent 99%,",(function(t){return t.theme.colors.primary})," 0);",s.a.desktop(v())," ",s.a.tablet(j())," ",s.a.phablet(m())),X=(Object(r.a)("p",{target:"e14bbv6l5"})(T,";display:block;font-style:italic;font-size:18px;line-height:32px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:15px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",s.a.desktop(h())," ",s.a.phablet(x())," ",s.a.phablet(g())),Object(r.a)("div",{target:"e14bbv6l6"})("padding:30px;background:",(function(t){return t.theme.colors.card}),";z-index:600;display:block;position:relative;",s.a.tablet(b()))),Y=Object(r.a)("div",{target:"e14bbv6l7"})("font-weight:400;font-size:16px;color:",(function(t){return t.theme.colors.lightGrey}),";margin-top:",(function(t){return"tiles"===t.gridLayout?"20px":"10px"}),";;",s.a.phablet(f())),K=Object(r.a)("div",{target:"e14bbv6l8"})("font-weight:600;font-size:12px;font-family:",(function(t){return t.theme.fonts.sansSerif}),";color:",(function(t){return t.theme.colors.primary}),";text-transform:uppercase;opacity:0.8;letter-spacing:2px;margin-bottom:",(function(t){return"tiles"===t.gridLayout?"20px":"10px"}),";text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;.Article__Categories{margin-right:5px;color:",(function(t){return t.theme.colors.lightGrey}),";margin-left:1px;}.Article__Topics{}",s.a.phablet(d())),B=Object(r.a)(a.Link,{target:"e14bbv6l9"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",N," > div,&:focus ",N," > div{0 30px 50px -30px rgba(0,0,0,0.3);transform:scale(1.1);}&:hover h2,&:focus h2{background-size:100% 100%;cursor:pointer;}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);}",s.a.phablet(p(),N))},ZGJb:function(t){t.exports=JSON.parse('{"data":{"site":{"edges":[{"node":{"siteMetadata":{"hero":{"heading":"Geek of all trades","maxWidth":652}}}}]}}}')},nzct:function(t,n,e){"use strict";e.r(n);var r=e("5Md4"),o=(e("mXGw"),e("FQY5")),i=e("7/GX"),a=e("h7I9"),c=e("vuho"),u=e("r4aB"),s=e("GxIk"),l=e("aD51");n.default=function(t){var n=t.location,e=t.pageContext,r=e.group,d=e.additionalContext.topics;return Object(l.jsx)(a.a,null,Object(l.jsx)(i.a,{pathname:n.pathname}),Object(l.jsx)(u.a,{topics:d,topic:{}}),Object(l.jsx)(o.a,{narrow:!0},Object(l.jsx)(s.a,{articles:r}),Object(l.jsx)(p,{show:e.pageCount>1},Object(l.jsx)(c.a,e))))};Object(r.a)("div",{target:"e1bswbkw0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";");var p=Object(r.a)("div",{target:"e1bswbkw1"})((function(t){return t.show&&"margin-top: 95px;"})," text-align:center;")},r4aB:function(t,n,e){"use strict";var r=e("5Md4"),o=e("ZGJb"),i=e("mXGw"),a=e("FQY5"),c=(e("lQyR"),e("YhIr"),e("4aJ6"),e("+jjx"),e("ABKx"),e("GkPX"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("Wbzz")),u=e("sqvr"),s=e.n(u),l=e("zL5+"),p=(e("yQ72"),e("U0tm")),d=e("5++h"),f=e("aD51");function b(){var t=w(["\n    display: none;\n  "]);return b=function(){return t},t}function g(){var t=w(["\n    width: 280px;\n  "]);return g=function(){return t},t}function x(){var t=w(["\n    display: block;\n    left: 0;\n  "]);return x=function(){return t},t}function h(){var t=w(["\n    display: none;\n  "]);return h=function(){return t},t}function m(){var t=w(["\n    top: 20px;\n  "]);return m=function(){return t},t}function j(){var t=w(["\n    top: 10px;\n  "]);return j=function(){return t},t}function v(){var t=w(["\n    position: absolute;\n    right: -30px;\n    bottom: 0px;\n    top: 3px;\n    height: 100%;\n  "]);return v=function(){return t},t}function y(){var t=w(["\n    //font-size: 14px;\n    align-items: center;\n\n    &::before {\n      box-shadow: none;\n      bottom: -30px;\n      background: transparent;\n    }\n\n    strong {\n      display: block;\n      font-weight: semi-bold;\n      margin-top: 6px;\n    }\n  "]);return y=function(){return t},t}function w(t,n){return n||(n=t.slice(0)),t.raw=n,t}function O(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=function(t){var n=t.topics,e=t.selectedTopic,r=Object(i.useState)(!1),o=r[0],a=r[1],u="dark"===Object(l.e)()[0]?"#fff":"#000",d=Object.keys(e).length,b={id:0,name:"all topics I write about",avatar:"",bio:"",slug:"/blog",topicsPage:!0,featured:!1,color:""},g=[b].concat(O(n));return Object(f.jsx)(z,{onClick:function(){return a(!o)},isOpen:o},Object(f.jsx)(A,null),Object(f.jsx)(L,null,d?e.name:b.name),Object(f.jsx)(_,null,Object(f.jsx)(p.a.ToggleOpen,{fill:u})),o&&Object(f.jsx)(s.a,{onOutsideClick:function(){return a(!o)}},Object(f.jsx)(G,null,Object(f.jsx)(P,null,Object(f.jsx)(p.a.ToggleClose,{fill:u})),g.map((function(t,n){return Object(f.jsx)(S,{key:t.name},Object(f.jsx)(C,{as:t.topicsPage?c.Link:"div",to:t.slug},Object(f.jsx)(T,null,t.name)))})))))},z=Object(r.a)("div",{target:"e8xnpg70"})("position:relative;display:inline-block;align-items:center;color:",(function(t){return t.theme.colors.grey}),';letter-spacing:1px;cursor:pointer;vertical-align:middle;&::before{content:"";position:absolute;left:-20px;right:-20px;top:-16px;bottom:-16px;background:',(function(t){return t.theme.colors.card}),";box-shadow:",(function(t){return t.isOpen?"none":" 0px 0px 15px rgba(0, 0, 0, 0.1)"}),";border-radius:5px;z-index:0;transition:opacity 0.3s;cursor:pointer;opacity:0;}&:hover::before{opacity:1;}",d.a.phablet(y())),L=(Object(r.a)("div",{target:"e8xnpg71"})("position:relative;display:flex;height:304px;cursor:pointer;flex-direction:column;justify-content:flex-end;align-items:center;border-radius:7px;padding:24px 0;background-color:#",(function(t){return t.color}),";background-repeat:no-repeat;background-size:100%;border:1px solid rgba(29,29,29,.1);overflow:hidden;"),Object(r.a)("div",{target:"e8xnpg72"})("display:block;position:relative;height:100%;width:100%;&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),Object(r.a)("div",{target:"e8xnpg75"})({name:"8lgfcg",styles:"height:100%;overflow:hidden;"}),Object(r.a)("p",{target:"e8xnpg76"})("max-width:430px;font-size:16px;margin-bottom:20px;text-transform:uppercase;text-align:left;padding:0 60px 0 30px;font-weight:bold;display:block;line-height:1.45;font-family:",(function(t){return t.theme.fonts.sansSerif}),";a{text-decoration:underline;}"),Object(r.a)("strong",{target:"e8xnpg77"})("position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;color:",(function(t){return t.theme.colors.primary}),";border-bottom:5px solid;font-weight:400;display:inline-block;margin-top:4px;vertical-align:middle;")),_=Object(r.a)("div",{target:"e8xnpg78"})("position:relative;cursor:pointer;margin-left:10px;display:inline-block;svg{width:30px;height:30px;}",d.a.phablet(v())),P=Object(r.a)("div",{target:"e8xnpg79"})("position:absolute;cursor:pointer;top:-10px;right:21px;",d.a.desktop(j())," ",d.a.phablet(m())," svg{width:30px;height:30px;}"),A=Object(r.a)("div",{target:"e8xnpg710"})("position:relative;width:auto;min-width:300px;",d.a.phablet(h())),G=Object(r.a)("ul",{target:"e8xnpg711"})("position:absolute;z-index:2;left:-21px;right:-21px;top:105px;padding:50px;background:",(function(t){return t.theme.colors.card}),";box-shadow:0px 0px 15px rgba(0,0,0,0.1);border-radius:5px;cursor:pointer;list-style:none;transform:translateY(-2px);max-height:500px;overflow-y:scroll;display:grid;width:100%;grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(150px,300px));",d.a.desktop(x())," ",d.a.phablet(g())),S=Object(r.a)("li",{target:"e8xnpg712"})({name:"l6s11q",styles:"a{width:100%;}&:not(:last-child){margin-bottom:10px;}"}),C=(Object(r.a)("div",{target:"e8xnpg713"})("height:25px;width:25px;border-radius:50%;margin-right:15px;background:",(function(t){return t.theme.colors.grey}),";overflow:hidden;pointer-events:none;.gatsby-image-wrapper > div{padding-bottom:100% !important;overflow:hidden;}"),Object(r.a)("div",{target:"e8xnpg714"})("position:absolute;height:25px;width:25px;border-radius:50%;z-index:1;background:",(function(t){return t.theme.colors.grey}),";box-shadow:0 0 0 2px ",(function(t){return t.theme.colors.background}),";transition:box-shadow 0.25s ease;overflow:hidden;pointer-events:none;.gatsby-image-wrapper > div{padding-bottom:100% !important;overflow:hidden;}",d.a.phablet(b())),Object(r.a)("div",{target:"e8xnpg715"})("display:flex;align-items:center;color:inherit;margin-left:10px;letter-spacing:1px;strong{transition:",(function(t){return t.theme.colorModeTransition}),";}&:hover strong{color:",(function(t){return t.theme.colors.primary}),";}")),T=Object(r.a)("strong",{target:"e8xnpg716"})("position:relative;cursor:pointer;color:",(function(t){return t.theme.colors.secondary}),";font-weight:400;font-size:16px;font-family:",(function(t){return t.theme.fonts.sansSerif}),";color:",(function(t){return t.theme.colors.primary}),";text-transform:uppercase;letter-spacing:1px;padding-bottom:3px;&:hover{padding-bottom:1px;border-bottom:1px solid ",(function(t){return t.theme.colors.primary}),";}"),q=e("15bu");function R(){var t=Y(["\n    margin-right: 8px;\n    display: block;\n  "]);return R=function(){return t},t}function D(){var t=Y(["\n    font-size: 24px;\n  "]);return D=function(){return t},t}function F(){var t=Y(["\n    font-size: 38px\n  "]);return F=function(){return t},t}function Q(){var t=Y(["\n    margin: 60px 0 80px 0;\n  "]);return Q=function(){return t},t}function I(){var t=Y(["\n    width: 100%;\n  "]);return I=function(){return t},t}function M(){var t=Y(["\n    width: 80%;\n  "]);return M=function(){return t},t}function J(){var t=Y(["\n    display: none;\n  "]);return J=function(){return t},t}function N(){var t=Y(["\n    display: none;\n  "]);return N=function(){return t},t}function W(){var t=Y(["\n    margin-bottom: 60px;\n  "]);return W=function(){return t},t}function X(){var t=Y(["\n    margin-bottom: 80px;\n  "]);return X=function(){return t},t}function Y(t,n){return n||(n=t.slice(0)),t.raw=n,t}n.a=function(t){var n=t.topics,e=t.topic,r=Object(i.useContext)(q.a);r.gridLayout,r.hasSetGridLayout,r.setGridLayout,o.data.site.edges[0].node.siteMetadata.hero;return Object(f.jsx)(a.a,{relative:!0,id:"Articles__Hero"},Object(f.jsx)(K,null,Object(f.jsx)(B,null,Object(f.jsx)(E,null,"Explore"),Object(f.jsx)(k,{topics:n,selectedTopic:e}))))},Object(r.a)("div",{target:"eabbjfq0"})("padding:20px 0;",d.a.desktop(X()),";",d.a.tablet(W()),";",d.a.phablet(N()),";"),Object(r.a)("div",{target:"eabbjfq1"})("display:flex;align-items:center;width:110px;margin:0 auto;",d.a.tablet(J()),";");var K=Object(r.a)("div",{target:"eabbjfq2"})("margin:80px 0 90px 0;display:inline-block;",d.a.desktop(M())," ",d.a.tablet(I())," ",d.a.phablet(Q())),B=Object(r.a)("h1",{target:"eabbjfq3"})("font-style:normal;font-weight:400;font-size:80px;line-height:1.15;color:",(function(t){return t.theme.colors.primary}),";vertical-align:middle;display:table-cell;a{color:",(function(t){return t.theme.colors.accent}),";}",d.a.desktop(F())," ",d.a.phablet(D())),E=Object(r.a)("span",{target:"eabbjfq4"})("vertical-align:middle;margin-right:15px;",d.a.phablet(R()));Object(r.a)("button",{target:"eabbjfq5"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}")},vuho:function(t,n,e){"use strict";e("YhIr"),e("4aJ6"),e("+jjx"),e("ABKx"),e("W1QL"),e("K/PF"),e("t91x"),e("lQyR"),e("m1Dn");var r=e("5Md4"),o=e("mXGw"),i=e.n(o),a=e("aD51"),c=e("Wbzz"),u=e("tj/o"),s=e("5++h"),l=e("LZRm");function p(){var t=b(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "]);return p=function(){return t},t}function d(){var t=b(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "]);return d=function(){return t},t}function f(){var t=b(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]);return f=function(){return t},t}function b(t,n){return n||(n=t.slice(0)),t.raw=n,t}function g(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(t){var n,e,r,o,c;function s(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).maxPages=3,n.count=n.props.pageCount,n.current=n.props.index,n.pageRoot=n.props.pathPrefix,n.getFullPath=function(t){return"/"===n.pageRoot?1===t?n.pageRoot:n.pageRoot+"page/"+t:1===t?n.pageRoot:n.pageRoot+"/page/"+t},n}return e=t,(n=s).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,s.prototype.render=function(){var t=this.count,n=this.current;if(t<=1)return null;var e=this.previousPath,r=this.nextPath,o=this.current<this.count,c=this.current>1;return Object(a.jsx)(i.a.Fragment,null,Object(a.jsx)(u.Helmet,null,c&&Object(a.jsx)("link",{rel:"prev",href:e}),o&&Object(a.jsx)("link",{rel:"next",href:r})),Object(a.jsx)(O,null,c&&Object(a.jsx)(j,{to:e},"Prev"),this.getPageLinks,Object(a.jsx)(w,{"aria-hidden":"true"},Object(a.jsx)("em",null,n)," of ",t),o&&Object(a.jsx)(j,{to:r},"Next")))},r=s,(o=[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,n=this.current,e=this.count,r=this.maxPages,o=1===n?n:n-1,i=Object(l.i)(o,e+1-o),c=i.slice(0,r);return i[0]>2&&c.unshift(null),i[0]>1&&c.unshift(1),i[0]+1===e&&i[0]-1>0&&c.splice(i.length-1-r,0,i[0]-1),i[0]+r<e&&c.push(null),i[0]+r-1<e&&c.push(e),g(new Set(c)).map((function(e,r){return null===e?Object(a.jsx)(y,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(a.jsx)(v,{key:"PaginatorPage_"+e,to:t.getFullPath(e),style:{opacity:n===e?1:.3},className:"Paginator__pageLink"},e)}))}}])&&x(r.prototype,o),c&&x(r,c),s}(o.Component);n.a=h;var m=function(t){return Object(a.css)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",s.a.desktop_up(f()))},j=Object(r.a)(c.Link,{target:"e5lnzj40"})("font-weight:600;font-size:16px;text-decoration:none;font-family:",(function(t){return t.theme.fonts.sansSerif}),";text-transform:uppercase;letter-spacing:3px;color:",(function(t){return t.theme.colors.primary}),";",m," &:hover,&:focus{opacity:1;text-decoration:underline;}"),v=Object(r.a)(c.Link,{target:"e5lnzj41"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",m," &:hover,&:focus{opacity:1;text-decoration:underline;}"),y=Object(r.a)("span",{target:"e5lnzj42"})("opacity:0.3;",m,' &::before{content:"...";}'),w=Object(r.a)("span",{target:"e5lnzj43"})("font-weight:400;",m," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),O=Object(r.a)("nav",{target:"e5lnzj44"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",s.a.tablet(d(),y)," ",s.a.desktop_up(p(),w))}}]);
//# sourceMappingURL=component---narative-gatsby-theme-novela-src-templates-articles-template-tsx-f936f1a99410233e6605.js.map