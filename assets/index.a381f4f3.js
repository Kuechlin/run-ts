var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,i=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&a(e,r,t[r]);return e},s=(e,o)=>t(e,r(o));"undefined"!=typeof require&&require;import{s as c,R as d,S as u,a as m,c as p,b as g,d as h,r as f,Z as x,e as b,f as v,F as y,g as E,h as k,P as w}from"./vendor.173c58e8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const $={};function S(e,t,r){let o;return(...n)=>new Promise((l=>{const a=async()=>{var t=e(...n);t instanceof Promise&&await t,l(t)};o?clearTimeout(o):r&&a();o=setTimeout((()=>{o=void 0,r||a()}),t)}))}const C="#282c34",z="#DCDFE4",L="#61AFEF",I="#56B6C2",N="#C678DD",O="#cd3131",j="#E06C75",_="#98C379",T="#E5C07B",D={base:"dark",name:"default-dark",font:{name:"Consolas, 'Courier New', monospace",feature:"'liga' 0, 'calt' 0"},colors:{background:C,foreground:z,link:L,lineNumber:F(C,60),border:F(C,60),cursor:L,error:O,type:T,keyword:N,delimiter:z,comment:F(C,100),identifier:z,number:I,string:_,regexp:j}};var M,P;(P=M||(M={})).Type="type",P.Keyword="keyword",P.Delimiter="delimiter",P.Comment="comment",P.Identifier="identifier",P.NumberLiteral="number",P.StringLiteral="string",P.RegExpLiteral="regexp";const W=({colors:e})=>({base:"vs-dark",inherit:!0,colors:{"editor.background":e.background,"editor.foreground":e.foreground,"textLink.foreground":e.link,"editor.selectionBackground":F(e.background,40),"editor.lineHighlightBackground":F(e.background,15),"editorCursor.foreground":e.cursor,"editorWhitespace.foreground":F(e.foreground,-60),"editorLineNumber.foreground":e.lineNumber,"editorLineNumber.activeForeground":e.cursor,"editorError.foreground":e.error,"editorSuggestWidget.background":F(e.background,-10),"editorSuggestWidget.border":e.border,"editorSuggestWidget.selectedBackground":F(e.link,-40),"editorGroup.background":e.error,"editorHoverWidget.background":F(e.background,-10),"editorHoverWidget.border":e.border},rules:[{token:"",foreground:e.foreground,background:e.background},{token:M.Comment,foreground:e.comment,fontStyle:"italic"},...[M.StringLiteral,M.NumberLiteral,M.RegExpLiteral,M.Type,M.Keyword,M.Identifier,M.Delimiter].map((t=>({token:t,foreground:e[t]})))]});function F(e,t){var{r:r,g:o,b:n}=B(e);return K(r=(r=Math.round(r*(100+t)/100))<255?r:255,o=(o=Math.round(o*(100+t)/100))<255?o:255,n=(n=Math.round(n*(100+t)/100))<255?n:255)}function B(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16)}}function A(e,t=2){return(new Array(t).join("0")+e).slice(-t)}function K(e,t,r){return"#"+A(e.toString(16))+A(t.toString(16))+A(r.toString(16))}const R=({strong:e,children:t,size:r,center:o,style:n,className:l})=>d.createElement(V,{style:i({fontWeight:e?"bolder":void 0,fontSize:r?r+"px":void 0,textAlign:o?"center":void 0},n),className:l,children:t}),V=c.span`
  color: ${e=>e.theme.colors.foreground};
  font-family: ${e=>e.theme.font.name};
  font-feature-settings: ${e=>e.theme.font.feature};
  font-weight: normal;
  font-size: 16px;
`;function H({header:e,editor:t,output:r,onKeyDown:o}){return d.createElement(J,{onKeyDown:o},d.createElement(q,null,d.createElement(R,{strong:!0,size:22,style:{padding:"0px 8px"},children:"run ts"}),d.createElement("div",{style:{flexGrow:1}}),e),d.createElement(u,{className:"split",gutterSize:4,sizes:[60,40]},d.createElement(G,{border:!0},d.createElement(U,{children:"editor"}),t),d.createElement(G,null,d.createElement(U,{children:"output"}),r)))}const J=c.div`
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
`,q=c.header`
  height: 32px;
  background-color: ${e=>F(e.theme.colors.background,-20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,G=c.div`
  height: ${e=>e.height||"100%"};
  width: ${e=>e.width||"100%"};
  display: flex;
  flex-direction: column;
  border-right: ${e=>e.border?"1px solid "+e.theme.colors.border:""};
`,U=c(R)`
  height: 32px;
  border-top: 1px solid ${e=>e.theme.colors.border};
  border-bottom: 1px solid ${e=>e.theme.colors.border};

  line-height: 32px;
  padding: 0px 8px;
`,X={current:"initial",imports:{},libraries:[],theme:D},Z={};var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",onInitializeOvermind:async({state:e,effects:t})=>{e.theme=t.local.getTheme()},beforeMount:({state:e,effects:t},r)=>{e.current="mounting",r.editor.defineTheme("default-dark",W(e.theme)),console.log(r.languages.typescript),r.languages.typescript.typescriptDefaults.setCompilerOptions({target:r.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,moduleResolution:r.languages.typescript.ModuleResolutionKind.NodeJs,module:r.languages.typescript.ModuleKind.ESNext,noEmit:!1,jsx:r.languages.typescript.JsxEmit.React,jsxFactory:"React.createElement",typeRoots:["node_modules/@types"]}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1})},didMount:async({state:e,effects:t,actions:r},{monaco:o,editor:n})=>{e.current="mounted",Z.monaco=o,Z.editor=n;for(const[l,a]of Object.entries(t.local.getImports()))await r.install({name:l,version:a})},updateTheme:({state:e,effects:t},r)=>{var o;e.theme=r,t.local.setTheme(r),null==(o=Z.monaco)||o.editor.defineTheme("default-dark",W(e.theme))},resetTheme:({state:e,effects:t})=>{var r;e.theme=D,t.local.setTheme(D),null==(r=Z.monaco)||r.editor.defineTheme("default-dark",W(e.theme))},install:async({state:e,effects:t,actions:r},{name:o,version:n="*",isDependency:l})=>{var a;if(e.imports[o])return;var c=await t.loadPackageJson(o,n);if(!c)throw new Error(`package ${o}@${n} not found`);let d;if((c.module||c.main)&&(d=`https://unpkg.com/${c.name}@${c.version}/${c.module||c.main}`),l||(t.local.addImport(o,n),d&&t.preloadLibrary(d)),e.imports=s(i({},e.imports),{[c.name]:{url:d,isDependency:l,name:c.name,version:c.version,dependencies:c.dependencies?Object.keys(c.dependencies):void 0}}),c.types||c.typings){var u=await t.loadTypesLibrary(c);if(u){e.libraries.push(u);for(const e of u.files)null==(a=Z.monaco)||a.languages.typescript.typescriptDefaults.addExtraLib(e.content,e.fileName)}}else await r.install({name:t.getTypesPackageName(c.name),isDependency:!0});if(c.dependencies)for(const[i,s]of Object.entries(c.dependencies))await r.install({name:i,version:s,isDependency:!0})},unload:async({effects:e,actions:t},r)=>{t._save(),e.local.removeImport(r),location.reload()},run:async({state:e,actions:t,effects:r})=>{if(!e.running)try{e.running=!0,window.dispatchEvent(new Event("clear-logs"));const o=await t._save(),n=await t._transform(o);r.executeScript(n),await r.wait(100),e.running=!1}catch(o){console.error(o)}},_save:async({effects:e,actions:t})=>{var r;if(!Z.monaco||!Z.editor)throw new Error("no ref to monaco editor");return null==(r=Z.editor.getAction("editor.action.formatDocument"))||r.run(),e.local.save(Z.editor.getValue()),e.worker.getEmitOutput()},_transform:({state:e},t)=>{const r=t.outputFiles[0]?t.outputFiles[0].text:'console.error("no code")';return Babel.transform(r,{plugins:[{visitor:{ImportDeclaration(t){if("react"===t.node.source.value)t.remove();else{const n=e.imports[t.node.source.value];if(!n||!n.url)return;t.replaceWith((r=t.node.specifiers,o=(e=>({type:"StringLiteral",value:e}))(n.url),{type:"ImportDeclaration",specifiers:r,source:o}))}var r,o},ExpressionStatement(e){var t,r,o;"CallExpression"===e.node.expression.type&&"Identifier"===e.node.expression.callee.type&&"log"===e.node.expression.callee.name||"UnaryExpression"===e.node.expression.type&&"UnaryExpression"!==e.node.expression.argument.type||e.replaceWith((r={type:"Identifier",name:"log"},o=[{type:"NumericLiteral",value:null==(t=e.node.loc)?void 0:t.start.line},e.node.expression],{type:"CallExpression",callee:r,arguments:o}))}}}]}).code||r}});const Y={defaultValue:"import React from 'react';",defaultImports:{"@types/react":"17.0.19"},save(e){localStorage.setItem("code",e)},load(){const e=localStorage.getItem("code");return e||this.defaultValue},getTheme(){const e=localStorage.getItem("theme");try{return e?JSON.parse(e):D}catch(t){return D}},setTheme(e){localStorage.setItem("theme",JSON.stringify(e))},addImport(e,t){var r=this.getImports();r[e]=t,localStorage.setItem("imports",JSON.stringify(r))},removeImport(e){var t=this.getImports();delete t[e],localStorage.setItem("imports",JSON.stringify(t))},getImports(){try{const e=localStorage.getItem("imports");return e?JSON.parse(e):this.defaultImports}catch(e){return this.defaultImports}}},ee={_uri:null,_proxy:null,async getEmitOutput(){if(!this._uri){if(!Z.editor)throw new Error("no ref to monaco editor");const e=Z.editor.getModel();if(!e)throw new Error("no model to save");this._uri=e.uri}if(!this._proxy){if(!Z.monaco)throw new Error("no ref to monaco editor");const e=await Z.monaco.languages.typescript.getTypeScriptWorker();this._proxy=await e(this._uri)}return this._proxy.getEmitOutput(this._uri.toString())}};const te=(e,t,r)=>(r.startsWith("./")&&(r=r.substring(2)),r.startsWith("/")&&(r=r.substring(1)),m.get(`https://unpkg.com/${e}@${t}/${r}`).then((t=>({fileName:`file:///node_modules/${e}/${r}`,content:t.data}))).catch((e=>(console.log(e),null))));var re=null;const oe={state:X,actions:Q,effects:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",wait:e=>new Promise((t=>setTimeout(t,e))),search:async e=>{try{return(await m.get("https://api.npms.io/v2/search/suggestions?q="+e)).data.map((e=>({value:e.package.name,label:d.createElement("div",{dangerouslySetInnerHTML:{__html:e.highlight}})})))}catch(t){return console.error(t),[]}},loadPackageJson:async(e,t="*")=>m.get(`https://unpkg.com/${e}@${t}/package.json`).then((e=>e.data)).catch((e=>(console.error(e),null))),getTypesPackageName:e=>e.startsWith("@types/")?e:(e.startsWith("@")&&(e=e.substring(1)),e.includes("/")&&(e=e.replaceAll("/","__")),"@types/"+e),loadTypesLibrary:async e=>{const t=await te(e.name,e.version,e.types||e.typings);if(!t)return null;const r={package:e.name,version:e.version,files:[t]};for(const n of function*(e){const t=/\/\/\/ <reference path="(.*.d.ts)" \/>/g;let r;for(;null!==(r=t.exec(e));)yield r[1]}(t.content)){var o=await te(e.name,e.version,n);o&&r.files.push(o)}return r},executeScript:e=>{re&&(re.remove(),re=null),(re=document.createElement("script")).type="module",re.innerHTML=e,document.head.append(re)},preloadLibrary:e=>{const t=document.createElement("link");t.rel="modulepreload",t.href=e,document.head.append(t)},local:Y,worker:ee})},ne=p(),le=g(),ae=h(),ie=e=>{var t=e,{value:r}=t,a=((e,t)=>{var r={};for(var a in e)n.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(t,["value"]);return r&&"object"==typeof r?d.createElement(ce,i({value:r},a)):d.createElement(de,i({value:r},a))},se=()=>d.createElement("span",{style:{display:"inline-block",width:"24px",height:"8px"}}),ce=({value:e,prefix:t})=>{const r=Array.isArray(e),o=r?"[]":"{}";return d.createElement(d.Fragment,null,d.createElement(R,{children:o[0]}),d.createElement("br",null),Object.entries(e).map((([e,o])=>d.createElement(f.exports.Fragment,{key:e},t,d.createElement(se,null),!r&&d.createElement(R,null,e,": "),d.createElement(ie,{value:o,prefix:d.createElement(d.Fragment,null,t,d.createElement(se,null))}),d.createElement(R,null,","),d.createElement("br",null)))),t,d.createElement(R,{children:o[1]}))},de=({value:e})=>{const{colors:t}=x();var r=null==e?void 0:e.toString();let o;switch(void 0===e&&(r="undefined"),null===e&&(r="null"),typeof e){case"string":o=t.string;break;case"number":o=t.number;break;case"boolean":o=t.keyword;break;default:o=t.type}return d.createElement(R,{children:r,style:{color:o}})};var ue=c(b)`
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
`;function me({size:e=16,stroke:t=2,color:r}){const{colors:o}=x();return d.createElement(ge,{size:e,stroke:t,color:r||o.foreground})}const pe=()=>{const{colors:e}=x();return d.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},d.createElement(ge,{size:100,stroke:16,color:e.foreground}))},ge=c.div`
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
`;function he(){const[e,t]=f.exports.useState({}),r=()=>t({}),o=f.exports.useCallback(((e,r)=>{void 0!==r&&t((t=>{for(;t[e];)e++;return s(i({},t),{[e]:r})}))}),[]);return f.exports.useEffect((()=>(window.log=o,window.addEventListener("clear-logs",r),()=>{window.removeEventListener("clear-logs",r),window.log=null})),[]),d.createElement(ue,{horizontal:!1},Object.entries(e).map((([e,t])=>d.createElement(fe,{key:e},d.createElement(xe,null,d.createElement(be,{size:14},e)),d.createElement(ve,null,d.createElement(ye,{value:t}))))))}const fe=c.div`
  display: flex;
  justify-content: start;
  align-items: center;
`,xe=c.div`
  position: relative;
  width: 64px;
  height: 19px;
`,be=c(R)`
  position: absolute;
  width: 38px;
  left: 0;

  color: ${e=>e.theme.colors.lineNumber};
  line-height: 19px;
  letter-spacing: 0px;
  text-align: right;
`,ve=c.div`
  padding: 8px 0px;
  > * {
    margin: 0px;
  }
  > pre > code {
    padding: 0px;
  }
`;function ye({value:e}){var t;const[r,o]=f.exports.useState(e instanceof Promise?{type:"loading"}:{type:"success",value:e});switch(f.exports.useEffect((()=>{e instanceof Promise&&e.then((e=>o({type:"success",value:e}))).catch((e=>o({type:"error",value:e})))}),[]),r.type){case"loading":return d.createElement(me,null);case"error":return d.createElement(ke,{children:null==(t=r.value)?void 0:t.toString()});case"success":return f.exports.isValidElement(r.value)?r.value:(n=r.value,/^#{0,1}[0-9a-f]{3,6}$/i.test(n)?d.createElement(Ee,{children:r.value}):d.createElement(ie,{value:r.value}))}var n}const Ee=c.div`
  border: 2px solid ${e=>e.theme.colors.border};
  background-color: ${e=>e.children};
  color: ${e=>function(e){var{r:t,g:r,b:o}=B(e);return K(t=255-t,r=255-r,o=255-o)}(e.children)};
  font-family: ${e=>e.theme.font.name};
  font-feature-settings: ${e=>e.theme.font.feature};
  padding: 8px 16px;
`,ke=c(R)`
  color: ${e=>e.theme.colors.error};
`;function we({onClick:e,style:t,children:r,icon:o,className:n}){return d.createElement($e,{onClick:e,style:t,className:n,children:d.createElement(d.Fragment,null,o,d.createElement(R,{children:r}))})}const $e=c.div`
  border: 1px solid ${e=>e.theme.colors.border};
  display: inline;
  cursor: pointer;
  color: ${e=>e.theme.colors.foreground};
  padding: 4px;
  border-radius: 2px;
  z-index: 1;
  display: flex;
  align-items: center;

  &:hover {
    border-color: ${e=>e.theme.colors.link};
  }
`;function Se({open:e,title:t,children:r,onClose:o}){return d.createElement(Ce,{open:e,onClick:o},d.createElement(ze,{onClick:e=>e.stopPropagation()},t&&d.createElement(Le,{size:24},t),o&&d.createElement(Ie,{onClick:o},d.createElement(Ne,null)),r))}const Ce=c.div`
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
`,ze=c.div`
  position: relative;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.foreground};
  border-radius: 2px;
`,Le=c(R)`
  display: block;
  line-height: 42px;
  padding: 0px 8px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Ie=c.div`
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
`,Ne=()=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})),Oe=c.div`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  margin: 2px;
`,je=({onClick:e,loading:t,size:r=24})=>d.createElement(Oe,{onClick:e,size:r},t?d.createElement(me,{size:20}):d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"}))),_e=({size:e=24})=>d.createElement(Oe,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}))),Te=({size:e=24})=>d.createElement(Oe,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))),De=({size:e=24})=>d.createElement(Oe,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}))),Me=({size:e=24})=>d.createElement(Oe,{size:e},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})));function Pe(){const e=ne().theme,t=le(),r=r=>o=>{t.updateTheme(s(i({},e),{colors:s(i({},e.colors),{[r]:o})}))};return d.createElement(We,null,Object.entries(e.colors).map((([e,t])=>d.createElement(Be,{key:e},d.createElement(Ae,null,e),d.createElement(Ke,{color:t,onChange:r(e)})))),d.createElement(Fe,{icon:d.createElement(_e,null),children:"reset",onClick:t.resetTheme}))}const We=c.div`
  display: flex;
  flex-wrap: wrap;
`,Fe=c(we)`
  border: 2px solid ${e=>e.theme.colors.border};
`,Be=c.div`
  width: 40%;
  display: flex;
  padding: 4px;
  align-items: center;
`,Ae=c(R)`
  width: 124px;
`,Ke=({color:e,onChange:t})=>{const[r,o]=f.exports.useState(!1),n=()=>o((e=>!e));return d.createElement(Re,null,d.createElement(Ee,{children:e,onClick:n}),d.createElement(He,{open:r},d.createElement(Ve,{onClick:n}),d.createElement(v,{color:e,onChange:e=>t(e.hex)})))},Re=c.div`
  position: relative;
`,Ve=c.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,He=c.div`
  display: ${e=>e.open?"block":"none"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  .sketch-picker {
    background-color: ${e=>F(e.theme.colors.background,30)} !important;

    * {
      color: ${e=>e.theme.colors.foreground} !important;
      font-family: ${e=>e.theme.font.name};
      font-feature-settings: ${e=>e.theme.font.feature};
    }
    input {
      background-color: ${e=>F(e.theme.colors.background,10)};
      border: 1px solid ${e=>e.theme.colors.border} !important;
      box-shadow: none !important;
      outline: none;
    }
  }
`;function Je({rowKey:e,columns:t,data:r,style:o}){return d.createElement(qe,{style:o},d.createElement("thead",null,d.createElement("tr",null,t.map((e=>d.createElement("th",{key:e.name,children:d.createElement(R,{children:e.name})}))))),d.createElement("tbody",null,r.map(((r,o)=>d.createElement("tr",{key:r[e]},t.map((e=>d.createElement("td",{key:e.name,children:d.createElement(R,{children:e.render(r,o)})}))))))))}const qe=c.table`
  border-collapse: collapse;
  min-width: 400px;

  td,
  th {
    text-align: left;
    border: 1px solid ${e=>e.theme.colors.border};
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: ${e=>F(e.theme.colors.background,-10)};
  }
`;function Ge({value:e,onSearch:t,onSelect:r}){const[o,n]=f.exports.useState(!1),[l,a]=f.exports.useState(null),[i,s]=f.exports.useState(!1),[c,u]=f.exports.useState([]),m=f.exports.useCallback((async e=>{s(!0),a(e.target.value),u(await t(e.target.value)),s(!1)}),[]),p=f.exports.useCallback((e=>t=>{t.preventDefault(),t.stopPropagation(),a(null),r(e),n(!1)}),[]);return d.createElement(Ue,{onClick:e=>{n(!0)}},o&&d.createElement(Qe,{onClick:e=>{e.stopPropagation(),n(!1)}}),d.createElement(Xe,{open:o},d.createElement(Ze,{value:l||e,onChange:m}),i&&d.createElement(me,null)),d.createElement(Ye,{open:o},0===c.length&&d.createElement(R,{style:{padding:"4px 8px",display:"block",color:"rgba(255,255,255,0.2)"}},"no data"),c.map(((e,t)=>d.createElement("button",{onClick:p(e.value)},d.createElement(R,null,e.label))))))}const Ue=c.div`
  min-width: 64px;
  display: flex;
  flex-direction: column;
  position: relative;
`,Xe=c.div`
  display: flex;
  align-items: center;
  z-index: 1;

  padding: 4px 8px;

  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.open?"4px 4px 0px 0px":"4px"};
  &:focus,
  &:hover {
    border-color: ${e=>F(e.theme.colors.link,-20)};
  }
`,Ze=c.input`
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
`,Qe=c.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,Ye=c.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 35px;
  right: 0;
  background-color: ${e=>F(e.theme.colors.background,20)};
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
      background-color: ${e=>F(e.theme.colors.background,40)};
    }
  }
  button:last-child {
    border: none;
  }
`;var et=()=>{const e=ne().imports,t=le();return d.createElement(d.Fragment,null,d.createElement(tt,null,d.createElement(rt,null),d.createElement(Je,{style:{width:"calc(100% - 8px)"},rowKey:"name",columns:[{name:"name",render:e=>e.name},{name:"version",render:e=>e.version},{name:"actions",render:e=>e.isDependency?d.createElement("small",{children:"dependency"}):d.createElement(we,{onClick:()=>t.unload(e.name),icon:d.createElement(Me,{size:16})},"delete")}],data:Object.values(e)})))};const tt=c.div`
  > * {
    margin: 8px;
  }

  em {
    color: ${e=>e.theme.colors.link};
  }
`;function rt(){const[e,t]=f.exports.useState(null),[r,o]=f.exports.useState(!1),n=ae(),l=le(),a=S(n.search,1e3);return d.createElement(ot,null,d.createElement("div",{style:{flexGrow:1}},d.createElement(Ge,{value:e||"",onSearch:a,onSelect:t})),d.createElement(nt,{icon:d.createElement(je,{loading:r,onClick:async()=>{if(e&&!r)try{o(!0),console.log(e),await l.install({name:e})}catch(n){console.log(n)}finally{o(!1),t(null)}}})}))}const ot=c.div`
  display: flex;
  align-items: center;
`,nt=c(we)`
  border-radius: 4px;
  margin-left: 8px;
`;function lt(){const[e,t]=f.exports.useState(!1),[r,o]=f.exports.useState("importer"),n=f.exports.useCallback((()=>t((e=>!e))),[]);return d.createElement(d.Fragment,null,d.createElement(we,{icon:d.createElement(Te,{size:16}),onClick:n,style:{margin:"0px 8px"}},"settings"),d.createElement(Se,{open:e,onClose:n,title:"settings"},d.createElement(at,null,d.createElement(dt,{active:r,items:["importer","theme"],onSelect:o}),d.createElement(it,null,"importer"===r&&d.createElement(et,null),"theme"===r&&d.createElement(Pe,null)))))}const at=c.div`
  display: flex;
  width: 800px;
`,it=c.div`
  flex-grow: 1;
  padding: 8px;
`,st=c.ul`
  list-style-type: none;
  width: 100px;
  padding: 0px;
  margin: 0px;
  border-right: 1px solid ${e=>e.theme.colors.border};
  > *:last-child {
    border: none;
  }
`,ct=c.li`
  padding: 8px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  cursor: pointer;
  background-color: ${e=>e.active?e.theme.colors.link:"transparent"};

  &:hover {
    background-color: ${e=>F(e.theme.colors.background,40)};
  }
`,dt=({items:e,active:t,onSelect:r})=>d.createElement(st,null,e.map((e=>d.createElement(ct,{active:e===t,onClick:()=>r&&r(e),key:e},d.createElement(R,null,e))))),ut=f.exports.lazy((()=>{return e=()=>import("./Editor.3b0b68c5.js"),(t=["assets/Editor.3b0b68c5.js","assets/vendor.173c58e8.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`/run-ts/${e}`)in $)return;$[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}));function mt(){const e=le(),t=ne().theme,r=S(e.run,1e3,!0),o=f.exports.useCallback((e=>{!e.ctrlKey||"s"!==e.key&&"s"!==e.key||(e.preventDefault(),r())}),[]);return f.exports.useEffect((()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)})),[]),d.createElement(y,{theme:t},d.createElement(H,{onKeyDown:o,header:d.createElement(d.Fragment,null,d.createElement(pt,{onClick:r}),d.createElement(lt,null)),editor:d.createElement(f.exports.Suspense,{fallback:d.createElement(me,null)},d.createElement(ut,null)),output:d.createElement(he,null)}))}const pt=({onClick:e})=>{const t=ne(),{colors:r}=x();return d.createElement(we,{style:{border:t.running?"1px solid "+r.link:void 0,transition:"0.5s",margin:"0px 8px"},onClick:e,icon:d.createElement(De,{size:16})},"strg + s")},gt=E(oe);globalThis.React=d,k.render(d.createElement(w,{value:gt},d.createElement(mt,null)),document.getElementById("root"));export{pe as P,ae as a,le as u};
