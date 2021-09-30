var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,a=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&i(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&i(e,r,t[r]);return e},s=(e,o)=>t(e,r(o));"undefined"!=typeof require&&require;import{a as c,R as d,c as m,b as u,d as p,s as g,S as h,r as f,Z as x,e as v,f as b,F as y,g as E,h as k,P as w}from"./vendor.56831abe.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const $={};function S(e,t,r){let o;return(...n)=>new Promise((l=>{const i=async()=>{var t=e(...n);t instanceof Promise&&await t,l(t)};o?clearTimeout(o):r&&i();o=setTimeout((()=>{o=void 0,r||i()}),t)}))}const z=()=>window.innerWidth<1e3?"s":"l",C="#282c34",L="#DCDFE4",N="#61AFEF",I="#56B6C2",j="#C678DD",O="#cd3131",_="#E06C75",T="#98C379",D="#E5C07B",M={base:"dark",name:"default-dark",font:{name:"Consolas, 'Courier New', monospace",feature:"'liga' 0, 'calt' 0"},colors:{background:C,foreground:L,link:N,lineNumber:A(C,60),border:A(C,60),cursor:N,error:O,type:D,keyword:j,delimiter:L,comment:A(C,100),identifier:L,number:I,string:T,regexp:_}};var P,W;(W=P||(P={})).Type="type",W.Keyword="keyword",W.Delimiter="delimiter",W.Comment="comment",W.Identifier="identifier",W.NumberLiteral="number",W.StringLiteral="string",W.RegExpLiteral="regexp";const F=({colors:e})=>({base:"vs-dark",inherit:!0,colors:{"editor.background":e.background,"editor.foreground":e.foreground,"textLink.foreground":e.link,"editor.selectionBackground":A(e.background,40),"editor.lineHighlightBackground":A(e.background,15),"editorCursor.foreground":e.cursor,"editorWhitespace.foreground":A(e.foreground,-60),"editorLineNumber.foreground":e.lineNumber,"editorLineNumber.activeForeground":e.cursor,"editorError.foreground":e.error,"editorSuggestWidget.background":A(e.background,-10),"editorSuggestWidget.border":e.border,"editorSuggestWidget.selectedBackground":A(e.link,-40),"editorGroup.background":e.error,"editorHoverWidget.background":A(e.background,-10),"editorHoverWidget.border":e.border},rules:[{token:"",foreground:e.foreground,background:e.background},{token:P.Comment,foreground:e.comment,fontStyle:"italic"},...[P.StringLiteral,P.NumberLiteral,P.RegExpLiteral,P.Type,P.Keyword,P.Identifier,P.Delimiter].map((t=>({token:t,foreground:e[t]})))]});function A(e,t){var{r:r,g:o,b:n}=B(e);return R(r=(r=Math.round(r*(100+t)/100))<255?r:255,o=(o=Math.round(o*(100+t)/100))<255?o:255,n=(n=Math.round(n*(100+t)/100))<255?n:255)}function B(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16)}}function K(e,t=2){return(new Array(t).join("0")+e).slice(-t)}function R(e,t,r){return"#"+K(e.toString(16))+K(t.toString(16))+K(r.toString(16))}const V={current:"initial",imports:{},libraries:[],theme:M,size:z()},H={};var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",onInitializeOvermind:async({state:e,effects:t,actions:r})=>{e.theme=t.local.getTheme(),window.addEventListener("resize",r.resize)},beforeMount:({state:e},t)=>{e.current="mounting",t.editor.defineTheme("default-dark",F(e.theme)),console.log(t.languages.typescript),t.languages.typescript.typescriptDefaults.setCompilerOptions({target:t.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,moduleResolution:t.languages.typescript.ModuleResolutionKind.NodeJs,module:t.languages.typescript.ModuleKind.ESNext,noEmit:!1,jsx:t.languages.typescript.JsxEmit.React,jsxFactory:"React.createElement",typeRoots:["node_modules/@types"],removeComments:!1}),t.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1})},didMount:async({state:e,effects:t,actions:r},{monaco:o,editor:n})=>{e.current="mounted",H.monaco=o,H.editor=n;for(const[l,i]of Object.entries(t.local.getImports()))await r.install({name:l,version:i})},updateTheme:({state:e,effects:t},r)=>{var o;e.theme=r,t.local.setTheme(r),null==(o=H.monaco)||o.editor.defineTheme("default-dark",F(e.theme))},resetTheme:({state:e,effects:t})=>{var r;e.theme=M,t.local.setTheme(M),null==(r=H.monaco)||r.editor.defineTheme("default-dark",F(e.theme))},setActive:({state:e},t)=>{e.active=t},resize:({state:e})=>{const t=z();t!==e.size&&(e.size=t,"s"===t&&(e.active="editor"))},install:async({state:e,effects:t,actions:r},{name:o,version:n="*",isDependency:l})=>{var i;if(e.imports[o])return;var c=await t.loadPackageJson(o,n);if(!c)throw new Error(`package ${o}@${n} not found`);let d;if((c.module||c.main)&&(d=`https://unpkg.com/${c.name}@${c.version}/${c.module||c.main}`),l||(t.local.addImport(o,n),d&&t.preloadLibrary(d)),e.imports=s(a({},e.imports),{[c.name]:{url:d,isDependency:l,name:c.name,version:c.version,dependencies:c.dependencies?Object.keys(c.dependencies):void 0}}),c.types||c.typings){var m=await t.loadTypesLibrary(c);if(m){e.libraries.push(m);for(const e of m.files)null==(i=H.monaco)||i.languages.typescript.typescriptDefaults.addExtraLib(e.content,e.fileName)}}else await r.install({name:t.getTypesPackageName(c.name),isDependency:!0});if(c.dependencies)for(const[a,s]of Object.entries(c.dependencies))await r.install({name:a,version:s,isDependency:!0})},unload:async({effects:e,actions:t},r)=>{t._save(),e.local.removeImport(r),location.reload()},run:async({state:e,actions:t,effects:r})=>{if(!e.running)try{e.running=!0,e.error=!1,e.active="output",window.dispatchEvent(new Event("clear-logs"));const o=await t._save(),n=await t._transform(o);r.executeScript(n),await r.wait(100),e.running=!1}catch(o){e.running=!1,e.error=o,console.error(o)}},_save:async({effects:e,actions:t})=>{var r;if(!H.monaco||!H.editor)throw new Error("no ref to monaco editor");return null==(r=H.editor.getAction("editor.action.formatDocument"))||r.run(),e.local.save(H.editor.getValue()),e.worker.getEmitOutput()},_transform:({state:e},t)=>{const r=t.outputFiles[0]?t.outputFiles[0].text:'console.error("no code")';return Babel.transform(r,{plugins:[{visitor:{ImportDeclaration(t){if("react"===t.node.source.value)t.remove();else{const n=e.imports[t.node.source.value];if(!n||!n.url)return;t.replaceWith((r=t.node.specifiers,o=(e=>({type:"StringLiteral",value:e}))(n.url),{type:"ImportDeclaration",specifiers:r,source:o}))}var r,o},ExpressionStatement(e){var t,r,o;"CallExpression"===e.node.expression.type&&"Identifier"===e.node.expression.callee.type&&"log"===e.node.expression.callee.name||"UnaryExpression"===e.node.expression.type&&"UnaryExpression"!==e.node.expression.argument.type||e.replaceWith((r={type:"Identifier",name:"log"},o=[{type:"NumericLiteral",value:null==(t=e.node.loc)?void 0:t.start.line},e.node.expression],{type:"CallExpression",callee:r,arguments:o}))}}}]}).code||r}});const q={defaultValue:"import React from 'react';",defaultImports:{"@types/react":"17.0.19"},save(e){localStorage.setItem("code",e)},load(){const e=localStorage.getItem("code");return e||this.defaultValue},getTheme(){const e=localStorage.getItem("theme");try{return e?JSON.parse(e):M}catch(t){return M}},setTheme(e){localStorage.setItem("theme",JSON.stringify(e))},addImport(e,t){var r=this.getImports();r[e]=t,localStorage.setItem("imports",JSON.stringify(r))},removeImport(e){var t=this.getImports();delete t[e],localStorage.setItem("imports",JSON.stringify(t))},getImports(){try{const e=localStorage.getItem("imports");return e?JSON.parse(e):this.defaultImports}catch(e){return this.defaultImports}}},G={_uri:null,_proxy:null,async getEmitOutput(){if(!this._uri){if(!H.editor)throw new Error("no ref to monaco editor");const e=H.editor.getModel();if(!e)throw new Error("no model to save");this._uri=e.uri}if(!this._proxy){if(!H.monaco)throw new Error("no ref to monaco editor");const e=await H.monaco.languages.typescript.getTypeScriptWorker();this._proxy=await e(this._uri)}return this._proxy.getEmitOutput(this._uri.toString())}};const U=(e,t,r)=>(r.startsWith("./")&&(r=r.substring(2)),r.startsWith("/")&&(r=r.substring(1)),c.get(`https://unpkg.com/${e}@${t}/${r}`).then((t=>({fileName:`file:///node_modules/${e}/${r}`,content:t.data}))).catch((e=>(console.log(e),null))));var X=null;const Z={state:V,actions:J,effects:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",wait:e=>new Promise((t=>setTimeout(t,e))),search:async e=>{try{return(await c.get("https://api.npms.io/v2/search/suggestions?q="+e)).data.map((e=>({value:e.package.name,label:d.createElement("div",{dangerouslySetInnerHTML:{__html:e.highlight}})})))}catch(t){return console.error(t),[]}},loadPackageJson:async(e,t="*")=>c.get(`https://unpkg.com/${e}@${t}/package.json`).then((e=>e.data)).catch((e=>(console.error(e),null))),getTypesPackageName:e=>e.startsWith("@types/")?e:(e.startsWith("@")&&(e=e.substring(1)),e.includes("/")&&(e=e.replaceAll("/","__")),"@types/"+e),loadTypesLibrary:async e=>{const t=await U(e.name,e.version,e.types||e.typings);if(!t)return null;const r={package:e.name,version:e.version,files:[t]};for(const n of function*(e){const t=/\/\/\/ <reference path="(.*.d.ts)" \/>/g;let r;for(;null!==(r=t.exec(e));)yield r[1]}(t.content)){var o=await U(e.name,e.version,n);o&&r.files.push(o)}return r},executeScript:e=>{X&&(X.remove(),X=null),(X=document.createElement("script")).type="module",X.innerHTML=e,document.head.append(X)},preloadLibrary:e=>{const t=document.createElement("link");t.rel="modulepreload",t.href=e,document.head.append(t)},local:q,worker:G})},Q=m(),Y=u(),ee=p(),te=({strong:e,children:t,size:r,center:o,style:n,className:l})=>d.createElement(re,{style:a({fontWeight:e?"bolder":void 0,fontSize:r?r+"px":void 0,textAlign:o?"center":void 0},n),className:l,children:t}),re=g.span`
  color: ${e=>e.theme.colors.foreground};
  font-family: ${e=>e.theme.font.name};
  font-feature-settings: ${e=>e.theme.font.feature};
  font-weight: normal;
  font-size: 16px;
`;function oe({header:e,editor:t,output:r,onKeyDown:o}){const n=Q();return d.createElement(le,{onKeyDown:o},d.createElement(ie,null,d.createElement(te,{strong:!0,size:22,style:{padding:"0px 8px"},children:"run ts"}),d.createElement("div",{style:{flexGrow:1}}),e),"l"===n.size?d.createElement(h,{className:"split",gutterSize:4,sizes:[60,40]},d.createElement(ae,{border:!0},d.createElement(se,{children:"editor"}),t),d.createElement(ae,null,d.createElement(se,{children:"output"}),r)):d.createElement("div",{className:"split"},d.createElement(ne,{if:"output"===n.active,then:r,else:t})))}const ne=({if:e,then:t,else:r})=>d.createElement(d.Fragment,null,d.createElement("div",{style:{width:"100%",height:"100%",display:e?"block":"none"},children:t}),r&&d.createElement("div",{style:{width:"100%",height:"100%",display:e?"none":"block"},children:r})),le=g.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.background};

  .split {
    height: calc(100vh - 32px);
    display: flex;
    flex-direction: row;
  }
  .gutter {
    z-index: 1;
    margin: 0px -2px;
    cursor: col-resize;
  }
  .gutter:hover {
    background-color: ${e=>e.theme.colors.border};
  }
`,ie=g.header`
  height: 32px;
  background-color: ${e=>A(e.theme.colors.background,-20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ae=g.div`
  height: ${e=>e.height||"100%"};
  width: ${e=>e.width||"100%"};
  display: flex;
  flex-direction: column;
  border-right: ${e=>e.border?"1px solid "+e.theme.colors.border:""};
`,se=g(te)`
  height: 32px;
  border-top: 1px solid ${e=>e.theme.colors.border};
  border-bottom: 1px solid ${e=>e.theme.colors.border};

  line-height: 32px;
  padding: 0px 8px;
`,ce=e=>{var t=e,{value:r}=t,i=((e,t)=>{var r={};for(var i in e)n.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&l.call(e,i)&&(r[i]=e[i]);return r})(t,["value"]);return r&&"object"==typeof r?d.createElement(me,a({value:r},i)):d.createElement(ue,a({value:r},i))},de=()=>d.createElement("span",{style:{display:"inline-block",width:"24px",height:"8px"}}),me=({value:e,prefix:t})=>{const r=Array.isArray(e),o=r?"[]":"{}";return d.createElement(d.Fragment,null,d.createElement(te,{children:o[0]}),d.createElement("br",null),Object.entries(e).map((([e,o])=>d.createElement(f.exports.Fragment,{key:e},t,d.createElement(de,null),!r&&d.createElement(te,null,e,": "),d.createElement(ce,{value:o,prefix:d.createElement(d.Fragment,null,t,d.createElement(de,null))}),d.createElement(te,null,","),d.createElement("br",null)))),t,d.createElement(te,{children:o[1]}))},ue=({value:e})=>{const{colors:t}=x();var r=null==e?void 0:e.toString();let o;switch(void 0===e&&(r="undefined"),null===e&&(r="null"),typeof e){case"string":o=t.string;break;case"number":o=t.number;break;case"boolean":o=t.keyword;break;default:o=t.type}return d.createElement(te,{children:r,style:{color:o}})};var pe=g(v)`
  flex-grow: 1;
  position: relative;
  overflow: hidden;

  .scrollarea-content {
    top: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    touch-action: none;

    &:focus {
      outline: 0;
    }
  }

  .scrollbar-container {
    &.vertical {
      width: 12px;
      height: 100%;
      right: 0;
      top: 0;
    }

    background-color: ${e=>e.theme.colors.background};
    width: 12px;
    border-left: 1px solid ${e=>e.theme.colors.border};
    border-right: 1px solid ${e=>e.theme.colors.border};
    position: absolute;
    z-index: 99;
  }

  .scrollbar {
    background-color: ${e=>e.theme.colors.border};
    width: 12px;
    opacity: 0.1;
    height: 20px;

    -webkit-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    -ms-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  &:hover .scrollbar {
    opacity: 1;
  }
`;function ge({size:e=16,stroke:t=2,color:r}){const{colors:o}=x();return d.createElement(fe,{size:e,stroke:t,color:r||o.foreground})}const he=()=>{const{colors:e}=x();return d.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},d.createElement(fe,{size:100,stroke:16,color:e.foreground}))},fe=g.div`
  display: inline-block;
  &:after {
    content: ' ';
    display: block;
    width: ${e=>e.size}px;
    height: ${e=>e.size}px;
    border-radius: 50%;
    border: ${e=>e.stroke}px solid ${e=>e.color};
    border-color: ${e=>e.color} transparent ${e=>e.color} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function xe(){const[e,t]=f.exports.useState({}),r=()=>t({}),o=f.exports.useCallback(((e,r)=>{void 0!==r&&t((t=>{for(;t[e];)e++;return s(a({},t),{[e]:r})}))}),[]);return f.exports.useEffect((()=>(window.log=o,window.addEventListener("clear-logs",r),()=>{window.removeEventListener("clear-logs",r),window.log=null})),[]),d.createElement(pe,{horizontal:!1},Object.entries(e).map((([e,t])=>d.createElement(ve,{key:e},d.createElement(be,null,d.createElement(ye,{size:14},e)),d.createElement(Ee,null,d.createElement(ke,{value:t}))))))}const ve=g.div`
  display: flex;
  justify-content: start;
  align-items: center;
`,be=g.div`
  position: relative;
  width: 64px;
  height: 19px;
`,ye=g(te)`
  position: absolute;
  width: 38px;
  left: 0;

  color: ${e=>e.theme.colors.lineNumber};
  line-height: 19px;
  letter-spacing: 0px;
  text-align: right;
`,Ee=g.div`
  padding: 8px 0px;
  > * {
    margin: 0px;
  }
  > pre > code {
    padding: 0px;
  }
`;function ke({value:e}){var t;const[r,o]=f.exports.useState(e instanceof Promise?{type:"loading"}:{type:"success",value:e});switch(f.exports.useEffect((()=>{e instanceof Promise&&e.then((e=>o({type:"success",value:e}))).catch((e=>o({type:"error",value:e})))}),[]),r.type){case"loading":return d.createElement(ge,null);case"error":return d.createElement($e,{children:null==(t=r.value)?void 0:t.toString()});case"success":return f.exports.isValidElement(r.value)?r.value:(n=r.value,/^#{0,1}[0-9a-f]{3,6}$/i.test(n)?d.createElement(we,{children:r.value}):d.createElement(ce,{value:r.value}))}var n}const we=g.div`
  border: 2px solid ${e=>e.theme.colors.border};
  background-color: ${e=>e.children};
  color: ${e=>function(e){var{r:t,g:r,b:o}=B(e);return R(t=255-t,r=255-r,o=255-o)}(e.children)};
  font-family: ${e=>e.theme.font.name};
  font-feature-settings: ${e=>e.theme.font.feature};
  padding: 8px 16px;
`,$e=g(te)`
  color: ${e=>e.theme.colors.error};
`;function Se({onClick:e,style:t,children:r,icon:o,className:n}){return d.createElement(ze,{onClick:e,style:t,className:n,children:d.createElement(d.Fragment,null,o,d.createElement(te,{children:r}))})}const ze=g.div`
  border: 1px solid ${e=>e.theme.colors.border};
  display: inline;
  cursor: pointer;
  color: ${e=>e.theme.colors.foreground};
  padding: 4px;
  border-radius: 2px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${e=>e.theme.colors.link};
  }
`;function Ce({open:e,title:t,children:r,onClose:o}){const n=Q().size;return d.createElement(Le,{open:e,onClick:o},d.createElement(Ne,{onClick:e=>e.stopPropagation(),size:n},t&&d.createElement(Ie,{size:24},t),o&&d.createElement(je,{onClick:o},d.createElement(Oe,null)),r))}const Le=g.div`
  display: ${e=>e.open?"block":"none"};
  opacity: ${e=>e.open?1:0};
  z-index: ${e=>e.open?100:0};
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  padding-top: ${e=>e.open?"200px":"-100vh"};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`,Ne=g.div`
  position: relative;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.foreground};
  border-radius: 2px;
  width: ${e=>"s"===e.size?"calc(100% - 16px)":"800px"};
`,Ie=g(te)`
  display: block;
  line-height: 42px;
  padding: 0px 8px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,je=g.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  color: ${e=>e.theme.colors.foreground};
  transition: color 0.5s ease;
  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.colors.link};
  }
`,Oe=()=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})),_e=g.div`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  margin: 2px;
`,Te=({onClick:e,loading:t,size:r=24})=>d.createElement(_e,{onClick:e,size:r},t?d.createElement(ge,{size:20}):d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"}))),De=({size:e=24})=>d.createElement(_e,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}))),Me=({size:e=24})=>d.createElement(_e,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))),Pe=({size:e=24})=>d.createElement(_e,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}))),We=({size:e=24})=>d.createElement(_e,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})));function Fe(){const e=Q().theme,t=Y(),r=r=>o=>{t.updateTheme(s(a({},e),{colors:s(a({},e.colors),{[r]:o})}))};return d.createElement(Ae,null,Object.entries(e.colors).map((([e,t])=>d.createElement(Ke,{key:e},d.createElement(Re,null,e),d.createElement(Ve,{color:t,onChange:r(e)})))),d.createElement(Be,{icon:d.createElement(De,null),children:"reset",onClick:t.resetTheme}))}const Ae=g.div`
  display: flex;
  flex-wrap: wrap;
`,Be=g(Se)`
  border: 2px solid ${e=>e.theme.colors.border};
`,Ke=g.div`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: center;
`,Re=g(te)`
  width: 124px;
`,Ve=({color:e,onChange:t})=>{const[r,o]=f.exports.useState(!1),n=()=>o((e=>!e));return d.createElement(He,null,d.createElement(we,{children:e,onClick:n}),d.createElement(qe,{open:r},d.createElement(Je,{onClick:n}),d.createElement(b,{color:e,onChange:e=>t(e.hex)})))},He=g.div`
  position: relative;
`,Je=g.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,qe=g.div`
  display: ${e=>e.open?"block":"none"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  .sketch-picker {
    background-color: ${e=>A(e.theme.colors.background,30)} !important;

    * {
      color: ${e=>e.theme.colors.foreground} !important;
      font-family: ${e=>e.theme.font.name};
      font-feature-settings: ${e=>e.theme.font.feature};
    }
    input {
      background-color: ${e=>A(e.theme.colors.background,10)};
      border: 1px solid ${e=>e.theme.colors.border} !important;
      box-shadow: none !important;
      outline: none;
    }
  }
`;function Ge({rowKey:e,columns:t,data:r,style:o}){return d.createElement(Ue,{style:o},d.createElement("thead",null,d.createElement("tr",null,t.map((e=>d.createElement("th",{key:e.name,children:d.createElement(te,{children:e.name})}))))),d.createElement("tbody",null,r.map(((r,o)=>d.createElement("tr",{key:r[e]},t.map((e=>d.createElement("td",{key:e.name,children:d.createElement(te,{children:e.render(r,o)})}))))))))}const Ue=g.table`
  border-collapse: collapse;

  td,
  th {
    text-align: left;
    border: 1px solid ${e=>e.theme.colors.border};
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: ${e=>A(e.theme.colors.background,-10)};
  }
`;function Xe({value:e,onSearch:t,onSelect:r}){const[o,n]=f.exports.useState(!1),[l,i]=f.exports.useState(null),[a,s]=f.exports.useState(!1),[c,m]=f.exports.useState([]),u=f.exports.useCallback((async e=>{s(!0),i(e.target.value),m(await t(e.target.value)),s(!1)}),[]),p=f.exports.useCallback((e=>t=>{t.preventDefault(),t.stopPropagation(),i(null),r(e),n(!1)}),[]);return d.createElement(Ze,{onClick:e=>{n(!0)}},o&&d.createElement(et,{onClick:e=>{e.stopPropagation(),n(!1)}}),d.createElement(Qe,{open:o},d.createElement(Ye,{value:l||e,onChange:u}),a&&d.createElement(ge,null)),d.createElement(tt,{open:o},0===c.length&&d.createElement(te,{style:{padding:"4px 8px",display:"block",color:"rgba(255,255,255,0.2)"}},"no data"),c.map(((e,t)=>d.createElement("button",{onClick:p(e.value)},d.createElement(te,null,e.label))))))}const Ze=g.div`
  min-width: 64px;
  display: flex;
  flex-direction: column;
  position: relative;
`,Qe=g.div`
  display: flex;
  align-items: center;
  z-index: 1;

  padding: 4px 8px;

  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.open?"4px 4px 0px 0px":"4px"};
  &:focus,
  &:hover {
    border-color: ${e=>A(e.theme.colors.link,-20)};
  }
`,Ye=g.input`
  display: block;
  flex-grow: 1;
  background-color: transparent;

  outline: none;
  border: none;
  color: ${e=>e.theme.colors.foreground};
  font-family: ${e=>e.theme.font.name};
  font-feature-settings: ${e=>e.theme.font.feature};
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`,et=g.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,tt=g.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 35px;
  right: 0;
  background-color: ${e=>A(e.theme.colors.background,20)};
  border-radius: 0px 0px 4px 4px;
  border: 1px solid ${e=>e.theme.colors.border};

  display: ${e=>e.open?"block":"none"};
  max-height: ${e=>e.open?"500px":"0px"};
  transition: max-height 0.5s;

  button {
    outline: none;
    border: none;
    display: block;
    background-color: transparent;
    padding: 4px 8px;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;

    &:hover,
    &:focus {
      background-color: ${e=>A(e.theme.colors.background,40)};
    }
  }
  button:last-child {
    border: none;
  }
`;var rt=()=>{const e=Q().imports,t=Y();return d.createElement(d.Fragment,null,d.createElement(ot,null,d.createElement(nt,null),d.createElement(Ge,{style:{width:"calc(100% - 8px)"},rowKey:"name",columns:[{name:"name",render:e=>e.name},{name:"version",render:e=>e.version},{name:"",render:e=>e.isDependency?d.createElement("small",{children:"dep"}):d.createElement(Se,{onClick:()=>t.unload(e.name),icon:d.createElement(We,{size:16})})}],data:Object.values(e)})))};const ot=g.div`
  > * {
    margin: 8px;
  }

  em {
    color: ${e=>e.theme.colors.link};
  }
`;function nt(){const[e,t]=f.exports.useState(null),[r,o]=f.exports.useState(!1),n=ee(),l=Y(),i=S(n.search,1e3);return d.createElement(lt,null,d.createElement("div",{style:{flexGrow:1}},d.createElement(Xe,{value:e||"",onSearch:i,onSelect:t})),d.createElement(it,{icon:d.createElement(Te,{loading:r,onClick:async()=>{if(e&&!r)try{o(!0),console.log(e),await l.install({name:e})}catch(n){console.log(n)}finally{o(!1),t(null)}}})}))}const lt=g.div`
  display: flex;
  align-items: center;
`,it=g(Se)`
  border-radius: 4px;
  margin-left: 8px;
`;function at(){const[e,t]=f.exports.useState(!1),[r,o]=f.exports.useState("importer"),n=f.exports.useCallback((()=>t((e=>!e))),[]);return d.createElement(d.Fragment,null,d.createElement(Se,{icon:d.createElement(Me,{size:16}),onClick:n,style:{margin:"0px 8px"}},"settings"),d.createElement(Ce,{open:e,onClose:n,title:"settings"},d.createElement(st,null,d.createElement(ut,{active:r,items:["importer","theme"],onSelect:o}),d.createElement(ct,null,"importer"===r&&d.createElement(rt,null),"theme"===r&&d.createElement(Fe,null)))))}const st=g.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,ct=g.div`
  flex-grow: 1;
  padding: 8px;
`,dt=g.div`
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  display: flex;
`,mt=g.div`
  padding: 8px;
  border-bottom: 2px solid ${e=>e.theme.colors.border};
  margin-bottom: -2px;
  cursor: pointer;
  border-color: ${e=>e.active?e.theme.colors.link:"transparent"};

  &:hover {
    border-color: ${e=>A(e.theme.colors.foreground,40)};
  }
`,ut=({items:e,active:t,onSelect:r})=>d.createElement(dt,null,e.map((e=>d.createElement(mt,{active:e===t,onClick:()=>r&&r(e),key:e},d.createElement(te,null,e))))),pt=({children:e})=>{const t=Q().error;return t?d.createElement(gt,null,"string"==typeof t?t:t instanceof Error?t.message:d.createElement(ke,{value:t})):d.createElement(d.Fragment,null,e)},gt=g.pre`
  margin: 8px;
  color: ${e=>e.theme.colors.error};
`,ht=f.exports.lazy((()=>{return e=()=>import("./Editor.636883c7.js"),(t=["assets/Editor.636883c7.js","assets/vendor.56831abe.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`/run-ts/${e}`)in $)return;$[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}));function ft(){const e=Y(),t=Q().theme,r=S(e.run,1e3,!0),o=f.exports.useCallback((e=>{!e.ctrlKey||"s"!==e.key&&"s"!==e.key||(e.preventDefault(),r())}),[]);return f.exports.useEffect((()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)})),[]),d.createElement(y,{theme:t},d.createElement(oe,{onKeyDown:o,header:d.createElement(d.Fragment,null,d.createElement(xt,{onClick:r}),d.createElement(at,null)),editor:d.createElement(f.exports.Suspense,{fallback:d.createElement(ge,null)},d.createElement(ht,null)),output:d.createElement(pt,{children:d.createElement(xe,null)})}))}const xt=({onClick:e})=>{const t=Q(),r=Y(),{colors:o}=x();let n=e,l="strg + s";return"s"===t.size&&"output"===t.active?(l="back to editor",n=()=>r.setActive("editor")):"s"===t.size&&(l="show output"),d.createElement(Se,{style:{border:t.running?"1px solid "+o.link:void 0,transition:"0.5s",margin:"0px 8px"},onClick:n,icon:d.createElement(Pe,{size:16}),children:l})},vt=E(Z);globalThis.React=d,k.render(d.createElement(w,{value:vt},d.createElement(ft,null)),document.getElementById("root"));export{he as P,ee as a,Y as u};
