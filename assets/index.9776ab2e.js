var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,a=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&i(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&i(e,r,t[r]);return e},s=(e,o)=>t(e,r(o));"undefined"!=typeof require&&require;import{d as c,a as d,R as m,c as u,b as p,e as g,s as h,S as f,r as x,Z as v,f as b,g as y,F as E,h as k,i as w,P as $}from"./vendor.6e84fbd1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const S={};function z(e,t,r){let o;return(...n)=>new Promise((l=>{const i=async()=>{var t=e(...n);t instanceof Promise&&await t,l(t)};o?clearTimeout(o):r&&i();o=setTimeout((()=>{o=void 0,r||i()}),t)}))}const C=()=>window.innerWidth<1e3?"s":"l",L="#282c34",N="#DCDFE4",j="#61AFEF",I="#56B6C2",O="#C678DD",_="#cd3131",T="#E06C75",D="#98C379",W="#E5C07B",M={base:"dark",name:"default-dark",font:{name:"Consolas, 'Courier New', monospace",feature:"'liga' 0, 'calt' 0"},colors:{background:L,foreground:N,link:j,lineNumber:B(L,60),border:B(L,60),cursor:j,error:_,type:W,keyword:O,delimiter:N,comment:B(L,100),identifier:N,number:I,string:D,regexp:T}};var P,F;(F=P||(P={})).Type="type",F.Keyword="keyword",F.Delimiter="delimiter",F.Comment="comment",F.Identifier="identifier",F.NumberLiteral="number",F.StringLiteral="string",F.RegExpLiteral="regexp";const A=({colors:e})=>({base:"vs-dark",inherit:!0,colors:{"editor.background":e.background,"editor.foreground":e.foreground,"textLink.foreground":e.link,"editor.selectionBackground":B(e.background,40),"editor.lineHighlightBackground":B(e.background,15),"editorCursor.foreground":e.cursor,"editorWhitespace.foreground":B(e.foreground,-60),"editorLineNumber.foreground":e.lineNumber,"editorLineNumber.activeForeground":e.cursor,"editorError.foreground":e.error,"editorSuggestWidget.background":B(e.background,-10),"editorSuggestWidget.border":e.border,"editorSuggestWidget.selectedBackground":B(e.link,-40),"editorGroup.background":e.error,"editorHoverWidget.background":B(e.background,-10),"editorHoverWidget.border":e.border},rules:[{token:"",foreground:e.foreground,background:e.background},{token:P.Comment,foreground:e.comment,fontStyle:"italic"},...[P.StringLiteral,P.NumberLiteral,P.RegExpLiteral,P.Type,P.Keyword,P.Identifier,P.Delimiter].map((t=>({token:t,foreground:e[t]})))]});function B(e,t){var{r:r,g:o,b:n}=K(e);return V(r=(r=Math.round(r*(100+t)/100))<255?r:255,o=(o=Math.round(o*(100+t)/100))<255?o:255,n=(n=Math.round(n*(100+t)/100))<255?n:255)}function K(e){if(!e||"string"!=typeof e)return{r:0,g:0,b:0};if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16)}}function R(e,t=2){return(new Array(t).join("0")+e).slice(-t)}function V(e,t,r){return"#"+R(e.toString(16))+R(t.toString(16))+R(r.toString(16))}const H={current:"initial",imports:{},libraries:[],theme:M,size:C()},J={};var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",onInitializeOvermind:async({state:e,effects:t,actions:r})=>{e.theme=t.local.getTheme(),window.addEventListener("resize",r.resize)},updateTheme:({state:e,effects:t},r)=>{var o;e.theme=r,t.local.setTheme(r),null==(o=J.monaco)||o.editor.defineTheme("default-dark",A(e.theme))},resetTheme:({state:e,effects:t})=>{var r;e.theme=M,t.local.setTheme(M),null==(r=J.monaco)||r.editor.defineTheme("default-dark",A(e.theme))},setActive:({state:e},t)=>{e.active=t},resize:({state:e})=>{const t=C();t!==e.size&&(e.size=t,"s"===t&&(e.active="editor"))},install:async({state:e,effects:t,actions:r},{name:o,version:n="*",isDependency:l})=>{var i;if(e.imports[o])return;var c=await t.loadPackageJson(o,n);if(!c)throw new Error(`package ${o}@${n} not found`);let d;if((c.module||c.main)&&(d=`https://unpkg.com/${c.name}@${c.version}/${c.module||c.main}`),l||(t.local.addImport(o,n),d&&t.preloadLibrary(d)),e.imports=s(a({},e.imports),{[c.name]:{url:d,isDependency:l,name:c.name,version:c.version,dependencies:c.dependencies?Object.keys(c.dependencies):void 0}}),c.types||c.typings){var m=await t.loadTypesLibrary(c);if(m){e.libraries.push(m);for(const e of m.files)null==(i=J.monaco)||i.languages.typescript.typescriptDefaults.addExtraLib(e.content,e.fileName)}}else await r.install({name:t.getTypesPackageName(c.name),isDependency:!0});if(c.dependencies)for(const[a,s]of Object.entries(c.dependencies))await r.install({name:a,version:s,isDependency:!0})},unload:async({effects:e,actions:t},r)=>{t._save(),e.local.removeImport(r),location.reload()},beforeMount:({state:e},t)=>{e.current="mounting",t.editor.defineTheme("default-dark",A(e.theme)),t.languages.typescript.typescriptDefaults.setCompilerOptions({target:t.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,moduleResolution:t.languages.typescript.ModuleResolutionKind.NodeJs,module:t.languages.typescript.ModuleKind.ESNext,noEmit:!1,jsx:t.languages.typescript.JsxEmit.React,jsxFactory:"React.createElement",typeRoots:["node_modules/@types"],removeComments:!1,sourceMap:!0}),t.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1})},didMount:async({state:e,effects:t,actions:r},{monaco:o,editor:n})=>{e.current="mounted",J.monaco=o,J.editor=n;for(const[l,i]of Object.entries(t.local.getImports()))await r.install({name:l,version:i})},run:async({state:e,actions:t,effects:r})=>{if(!e.running)try{e.running=!0,e.error=!1,e.active="output",window.dispatchEvent(new Event("clear-logs"));const o=await t._save(),n=r.transform(o,e.imports);r.executeScript(n),await r.wait(100),e.running=!1}catch(o){e.running=!1,e.error=o,console.error(o)}},_save:async({effects:e,actions:t})=>{var r;if(!J.monaco||!J.editor)throw new Error("no ref to monaco editor");return null==(r=J.editor.getAction("editor.action.formatDocument"))||r.run(),e.local.save(J.editor.getValue()),e.worker.getEmitOutput()}});const G={defaultValue:"import React from 'react';",defaultImports:{"@types/react":"17.0.19"},save(e){localStorage.setItem("code",e)},load(){const e=localStorage.getItem("code");return e||this.defaultValue},getTheme(){const e=localStorage.getItem("theme");try{return e?JSON.parse(e):M}catch(t){return M}},setTheme(e){localStorage.setItem("theme",JSON.stringify(e))},addImport(e,t){var r=this.getImports();r[e]=t,localStorage.setItem("imports",JSON.stringify(r))},removeImport(e){var t=this.getImports();delete t[e],localStorage.setItem("imports",JSON.stringify(t))},getImports(){try{const e=localStorage.getItem("imports");return e?JSON.parse(e):this.defaultImports}catch(e){return this.defaultImports}}},U={_uri:null,_proxy:null,async getEmitOutput(){if(!this._uri){if(!J.editor)throw new Error("no ref to monaco editor");const e=J.editor.getModel();if(!e)throw new Error("no model to save");this._uri=e.uri}if(!this._proxy){if(!J.monaco)throw new Error("no ref to monaco editor");const e=await J.monaco.languages.typescript.getTypeScriptWorker();this._proxy=await e(this._uri)}return this._proxy.getEmitOutput(this._uri.toString())}};const X=e=>JSON.parse(e.text).mappings.split(";").map((e=>e.split(",").map(c))),Z=(e,t,r)=>{let o=1;for(let n=0;n<t;n++){const l=e[n];for(const e of l)if(4===e.length&&(o+=e[2],n===t-1&&e[0]===r))return o}return o},Q=e=>({type:"StringLiteral",value:e}),Y=(e,t)=>({type:"ImportDeclaration",specifiers:e,source:t}),ee=(e,t)=>({type:"CallExpression",callee:e,arguments:t});const te=(e,t,r)=>(r.startsWith("./")&&(r=r.substring(2)),r.startsWith("/")&&(r=r.substring(1)),d.get(`https://unpkg.com/${e}@${t}/${r}`).then((t=>({fileName:`file:///node_modules/${e}/${r}`,content:t.data}))).catch((e=>(console.error(e),null))));var re=null;const oe={state:H,actions:q,effects:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",wait:e=>new Promise((t=>setTimeout(t,e))),search:async e=>{try{return(await d.get("https://api.npms.io/v2/search/suggestions?q="+e)).data.map((e=>({value:e.package.name,label:m.createElement("div",{dangerouslySetInnerHTML:{__html:e.highlight}})})))}catch(t){return console.error(t),[]}},loadPackageJson:async(e,t="*")=>d.get(`https://unpkg.com/${e}@${t}/package.json`).then((e=>e.data)).catch((e=>(console.error(e),null))),getTypesPackageName:e=>e.startsWith("@types/")?e:(e.startsWith("@")&&(e=e.substring(1)),e.includes("/")&&(e=e.replaceAll("/","__")),"@types/"+e),loadTypesLibrary:async e=>{const t=await te(e.name,e.version,e.types||e.typings);if(!t)return null;const r={package:e.name,version:e.version,files:[t]};for(const n of function*(e){const t=/\/\/\/ <reference path="(.*.d.ts)" \/>/g;let r;for(;null!==(r=t.exec(e));)yield r[1]}(t.content)){var o=await te(e.name,e.version,n);o&&r.files.push(o)}return r},executeScript:e=>{re&&(re.remove(),re=null),(re=document.createElement("script")).type="module",re.innerHTML=e,document.head.append(re)},preloadLibrary:e=>{const t=document.createElement("link");t.rel="modulepreload",t.href=e,document.head.append(t)},local:G,worker:U,transform:function(e,t){if(e.emitSkipped)throw new Error("emit skipped");const r=e.outputFiles.find((e=>e.name.endsWith(".js.map"))),o=e.outputFiles.find((e=>e.name.endsWith(".js")));if(!r||!o)throw new Error("source or map file missing");const n=X(r),l=o.text;return Babel.transform(l,{plugins:[{visitor:{ImportDeclaration(e){if("react"===e.node.source.value)e.remove();else{const r=t[e.node.source.value];if(!r||!r.url)return;e.replaceWith(Y(e.node.specifiers,Q(r.url)))}},ExpressionStatement(e){"CallExpression"===e.node.expression.type&&"Identifier"===e.node.expression.callee.type&&"log"===e.node.expression.callee.name||"UnaryExpression"===e.node.expression.type&&"UnaryExpression"!==e.node.expression.argument.type||e.node.loc&&e.replaceWith(ee({type:"Identifier",name:"log"},[{type:"NumericLiteral",value:Z(n,e.node.loc.start.line,e.node.loc.start.column)},e.node.expression]))}}}]}).code||l}})},ne=u(),le=p(),ie=g(),ae=({strong:e,children:t,size:r,center:o,style:n,className:l})=>m.createElement(se,{style:a({fontWeight:e?"bolder":void 0,fontSize:r?r+"px":void 0,textAlign:o?"center":void 0},n),className:l,children:t}),se=h.span`
  color: ${e=>e.theme.colors.foreground};
  font-family: ${e=>e.theme.font.name};
  font-feature-settings: ${e=>e.theme.font.feature};
  font-weight: normal;
  font-size: 16px;
`;function ce({header:e,editor:t,output:r,onKeyDown:o}){const n=ne();return m.createElement(me,{onKeyDown:o},m.createElement(ue,null,m.createElement(ae,{strong:!0,size:22,style:{padding:"0px 8px"},children:"run ts"}),m.createElement("div",{style:{flexGrow:1}}),e),"l"===n.size?m.createElement(f,{className:"split",gutterSize:4,sizes:[60,40]},m.createElement(pe,{border:!0},m.createElement(ge,{children:"editor"}),t),m.createElement(pe,null,m.createElement(ge,{children:"output"}),r)):m.createElement("div",{className:"split"},m.createElement(de,{if:"output"===n.active,then:r,else:t})))}const de=({if:e,then:t,else:r})=>m.createElement(m.Fragment,null,m.createElement("div",{style:{width:"100%",height:"100%",display:e?"block":"none"},children:t}),r&&m.createElement("div",{style:{width:"100%",height:"100%",display:e?"none":"block"},children:r})),me=h.div`
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
`,ue=h.header`
  height: 32px;
  background-color: ${e=>B(e.theme.colors.background,-20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,pe=h.div`
  height: ${e=>e.height||"100%"};
  width: ${e=>e.width||"100%"};
  display: flex;
  flex-direction: column;
  border-right: ${e=>e.border?"1px solid "+e.theme.colors.border:""};
`,ge=h(ae)`
  height: 32px;
  border-top: 1px solid ${e=>e.theme.colors.border};
  border-bottom: 1px solid ${e=>e.theme.colors.border};

  line-height: 32px;
  padding: 0px 8px;
`,he=e=>{var t=e,{value:r}=t,i=((e,t)=>{var r={};for(var i in e)n.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&l.call(e,i)&&(r[i]=e[i]);return r})(t,["value"]);return r&&"object"==typeof r?m.createElement(xe,a({value:r},i)):m.createElement(ve,a({value:r},i))},fe=()=>m.createElement("span",{style:{display:"inline-block",width:"24px",height:"8px"}}),xe=({value:e,prefix:t})=>{const r=Array.isArray(e),o=r?"[]":"{}";return m.createElement(m.Fragment,null,m.createElement(ae,{children:o[0]}),m.createElement("br",null),Object.entries(e).map((([e,o])=>m.createElement(x.exports.Fragment,{key:e},t,m.createElement(fe,null),!r&&m.createElement(ae,null,e,": "),m.createElement(he,{value:o,prefix:m.createElement(m.Fragment,null,t,m.createElement(fe,null))}),m.createElement(ae,null,","),m.createElement("br",null)))),t,m.createElement(ae,{children:o[1]}))},ve=({value:e})=>{const{colors:t}=v();var r=null==e?void 0:e.toString();let o;switch(void 0===e&&(r="undefined"),null===e&&(r="null"),typeof e){case"string":o=t.string;break;case"number":o=t.number;break;case"boolean":o=t.keyword;break;default:o=t.type}return m.createElement(ae,{children:r,style:{color:o}})};var be=h(b)`
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
`;function ye({size:e=16,stroke:t=2,color:r}){const{colors:o}=v();return m.createElement(ke,{size:e,stroke:t,color:r||o.foreground})}const Ee=()=>{const{colors:e}=v();return m.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},m.createElement(ke,{size:100,stroke:16,color:e.foreground}))},ke=h.div`
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
`;function we(){const[e,t]=x.exports.useState({}),r=()=>t({}),o=x.exports.useCallback(((e,r)=>{void 0!==r&&t((t=>{for(;t[e];)e++;return s(a({},t),{[e]:r})}))}),[]);return x.exports.useEffect((()=>(window.log=o,window.addEventListener("clear-logs",r),()=>{window.removeEventListener("clear-logs",r),window.log=null})),[]),m.createElement(be,{horizontal:!1},Object.entries(e).map((([e,t])=>m.createElement($e,{key:e},m.createElement(Se,null,m.createElement(ze,{size:14},e)),m.createElement(Ce,null,m.createElement(Le,{value:t}))))))}const $e=h.div`
  display: flex;
  justify-content: start;
  align-items: center;
`,Se=h.div`
  position: relative;
  width: 64px;
  height: 19px;
`,ze=h(ae)`
  position: absolute;
  width: 38px;
  left: 0;

  color: ${e=>e.theme.colors.lineNumber};
  line-height: 19px;
  letter-spacing: 0px;
  text-align: right;
`,Ce=h.div`
  padding: 8px 0px;
  > * {
    margin: 0px;
  }
  > pre > code {
    padding: 0px;
  }
`;function Le({value:e}){var t;const[r,o]=x.exports.useState(e instanceof Promise?{type:"loading"}:{type:"success",value:e});switch(x.exports.useEffect((()=>{e instanceof Promise&&e.then((e=>o({type:"success",value:e}))).catch((e=>o({type:"error",value:e})))}),[]),r.type){case"loading":return m.createElement(ye,null);case"error":return m.createElement(je,{children:null==(t=r.value)?void 0:t.toString()});case"success":return x.exports.isValidElement(r.value)?r.value:(n=r.value,/^#[0-9a-f]{3,6}$/i.test(n)?m.createElement(Ne,{children:r.value}):m.createElement(he,{value:r.value}))}var n}const Ne=h.div`
  border: 2px solid ${e=>e.theme.colors.border};
  background-color: ${e=>e.children};
  color: ${e=>function(e){var{r:t,g:r,b:o}=K(e);return V(t=255-t,r=255-r,o=255-o)}(e.children)};
  font-family: ${e=>e.theme.font.name};
  font-feature-settings: ${e=>e.theme.font.feature};
  padding: 8px 16px;
`,je=h(ae)`
  color: ${e=>e.theme.colors.error};
`;function Ie({onClick:e,style:t,children:r,icon:o,className:n}){return m.createElement(Oe,{onClick:e,style:t,className:n,children:m.createElement(m.Fragment,null,o,m.createElement(ae,{children:r}))})}const Oe=h.div`
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
`;function _e({open:e,title:t,children:r,onClose:o}){const n=ne().size;return m.createElement(Te,{open:e,onClick:o},m.createElement(De,{onClick:e=>e.stopPropagation(),size:n},t&&m.createElement(We,{size:24},t),o&&m.createElement(Me,{onClick:o},m.createElement(Pe,null)),r))}const Te=h.div`
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
`,De=h.div`
  position: relative;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.foreground};
  border-radius: 2px;
  width: ${e=>"s"===e.size?"calc(100% - 16px)":"800px"};
`,We=h(ae)`
  display: block;
  line-height: 42px;
  padding: 0px 8px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Me=h.div`
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
`,Pe=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})),Fe=h.div`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  margin: 2px;
`,Ae=({onClick:e,loading:t,size:r=24})=>m.createElement(Fe,{onClick:e,size:r},t?m.createElement(ye,{size:20}):m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"}))),Be=({size:e=24})=>m.createElement(Fe,{size:e},m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}))),Ke=({size:e=24})=>m.createElement(Fe,{size:e},m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))),Re=({size:e=24})=>m.createElement(Fe,{size:e},m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}))),Ve=({size:e=24})=>m.createElement(Fe,{size:e},m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})));function He(){const e=ne().theme,t=le(),r=r=>o=>{t.updateTheme(s(a({},e),{colors:s(a({},e.colors),{[r]:o})}))};return m.createElement(Je,null,Object.entries(e.colors).map((([e,t])=>m.createElement(Ge,{key:e},m.createElement(Ue,null,e),m.createElement(Xe,{color:t,onChange:r(e)})))),m.createElement(qe,{icon:m.createElement(Be,null),children:"reset",onClick:t.resetTheme}))}const Je=h.div`
  display: flex;
  flex-wrap: wrap;
`,qe=h(Ie)`
  border: 2px solid ${e=>e.theme.colors.border};
`,Ge=h.div`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: center;
`,Ue=h(ae)`
  width: 124px;
`,Xe=({color:e,onChange:t})=>{const[r,o]=x.exports.useState(!1),n=()=>o((e=>!e));return m.createElement(Ze,null,m.createElement(Ne,{children:e,onClick:n}),m.createElement(Ye,{open:r},m.createElement(Qe,{onClick:n}),m.createElement(y,{color:e,onChange:e=>t(e.hex)})))},Ze=h.div`
  position: relative;
`,Qe=h.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,Ye=h.div`
  display: ${e=>e.open?"block":"none"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  .sketch-picker {
    background-color: ${e=>B(e.theme.colors.background,30)} !important;

    * {
      color: ${e=>e.theme.colors.foreground} !important;
      font-family: ${e=>e.theme.font.name};
      font-feature-settings: ${e=>e.theme.font.feature};
    }
    input {
      background-color: ${e=>B(e.theme.colors.background,10)};
      border: 1px solid ${e=>e.theme.colors.border} !important;
      box-shadow: none !important;
      outline: none;
    }
  }
`;function et({rowKey:e,columns:t,data:r,style:o}){return m.createElement(tt,{style:o},m.createElement("thead",null,m.createElement("tr",null,t.map((e=>m.createElement("th",{key:e.name,children:m.createElement(ae,{children:e.name})}))))),m.createElement("tbody",null,r.map(((r,o)=>m.createElement("tr",{key:r[e]},t.map((e=>m.createElement("td",{key:e.name,children:m.createElement(ae,{children:e.render(r,o)})}))))))))}const tt=h.table`
  border-collapse: collapse;

  td,
  th {
    text-align: left;
    border: 1px solid ${e=>e.theme.colors.border};
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: ${e=>B(e.theme.colors.background,-10)};
  }
`;function rt({value:e,onSearch:t,onSelect:r}){const[o,n]=x.exports.useState(!1),[l,i]=x.exports.useState(null),[a,s]=x.exports.useState(!1),[c,d]=x.exports.useState([]),u=x.exports.useCallback((async e=>{s(!0),i(e.target.value),d(await t(e.target.value)),s(!1)}),[]),p=x.exports.useCallback((e=>t=>{t.preventDefault(),t.stopPropagation(),i(null),r(e),n(!1)}),[]);return m.createElement(ot,{onClick:e=>{n(!0)}},o&&m.createElement(it,{onClick:e=>{e.stopPropagation(),n(!1)}}),m.createElement(nt,{open:o},m.createElement(lt,{value:l||e,onChange:u}),a&&m.createElement(ye,null)),m.createElement(at,{open:o},0===c.length&&m.createElement(ae,{style:{padding:"4px 8px",display:"block",color:"rgba(255,255,255,0.2)"}},"no data"),c.map(((e,t)=>m.createElement("button",{onClick:p(e.value)},m.createElement(ae,null,e.label))))))}const ot=h.div`
  min-width: 64px;
  display: flex;
  flex-direction: column;
  position: relative;
`,nt=h.div`
  display: flex;
  align-items: center;
  z-index: 1;

  padding: 4px 8px;

  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.open?"4px 4px 0px 0px":"4px"};
  &:focus,
  &:hover {
    border-color: ${e=>B(e.theme.colors.link,-20)};
  }
`,lt=h.input`
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
`,it=h.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,at=h.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 35px;
  right: 0;
  background-color: ${e=>B(e.theme.colors.background,20)};
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
      background-color: ${e=>B(e.theme.colors.background,40)};
    }
  }
  button:last-child {
    border: none;
  }
`;var st=()=>{const e=ne().imports,t=le();return m.createElement(m.Fragment,null,m.createElement(ct,null,m.createElement(dt,null),m.createElement(et,{style:{width:"calc(100% - 8px)"},rowKey:"name",columns:[{name:"name",render:e=>e.name},{name:"version",render:e=>e.version},{name:"",render:e=>e.isDependency?m.createElement("small",{children:"dep"}):m.createElement(Ie,{onClick:()=>t.unload(e.name),icon:m.createElement(Ve,{size:16})})}],data:Object.values(e)})))};const ct=h.div`
  > * {
    margin: 8px;
  }

  em {
    color: ${e=>e.theme.colors.link};
  }
`;function dt(){const[e,t]=x.exports.useState(null),[r,o]=x.exports.useState(!1),n=ie(),l=le(),i=z(n.search,1e3);return m.createElement(mt,null,m.createElement("div",{style:{flexGrow:1}},m.createElement(rt,{value:e||"",onSearch:i,onSelect:t})),m.createElement(ut,{icon:m.createElement(Ae,{loading:r,onClick:async()=>{if(e&&!r)try{o(!0),await l.install({name:e})}catch(n){console.error(n)}finally{o(!1),t(null)}}})}))}const mt=h.div`
  display: flex;
  align-items: center;
`,ut=h(Ie)`
  border-radius: 4px;
  margin-left: 8px;
`;function pt(){const[e,t]=x.exports.useState(!1),[r,o]=x.exports.useState("importer"),n=x.exports.useCallback((()=>t((e=>!e))),[]);return m.createElement(m.Fragment,null,m.createElement(Ie,{icon:m.createElement(Ke,{size:16}),onClick:n,style:{margin:"0px 8px"}},"settings"),m.createElement(_e,{open:e,onClose:n,title:"settings"},m.createElement(gt,null,m.createElement(vt,{active:r,items:["importer","theme"],onSelect:o}),m.createElement(ht,null,"importer"===r&&m.createElement(st,null),"theme"===r&&m.createElement(He,null)))))}const gt=h.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,ht=h.div`
  flex-grow: 1;
  padding: 8px;
`,ft=h.div`
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  display: flex;
`,xt=h.div`
  padding: 8px;
  border-bottom: 2px solid ${e=>e.theme.colors.border};
  margin-bottom: -2px;
  cursor: pointer;
  border-color: ${e=>e.active?e.theme.colors.link:"transparent"};

  &:hover {
    border-color: ${e=>B(e.theme.colors.foreground,40)};
  }
`,vt=({items:e,active:t,onSelect:r})=>m.createElement(ft,null,e.map((e=>m.createElement(xt,{active:e===t,onClick:()=>r&&r(e),key:e},m.createElement(ae,null,e))))),bt=({children:e})=>{const t=ne().error;return t?m.createElement(yt,null,"string"==typeof t?t:t instanceof Error?t.message:m.createElement(Le,{value:t})):m.createElement(m.Fragment,null,e)},yt=h.pre`
  margin: 8px;
  color: ${e=>e.theme.colors.error};
`,Et=x.exports.lazy((()=>{return e=()=>import("./Editor.db08ac6f.js"),(t=["assets/Editor.db08ac6f.js","assets/vendor.6e84fbd1.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`/run-ts/${e}`)in S)return;S[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}));function kt(){const e=le(),t=ne().theme,r=z(e.run,1e3,!0),o=x.exports.useCallback((e=>{!e.ctrlKey||"s"!==e.key&&"s"!==e.key||(e.preventDefault(),r())}),[]);return x.exports.useEffect((()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)})),[]),m.createElement(E,{theme:t},m.createElement(ce,{onKeyDown:o,header:m.createElement(m.Fragment,null,m.createElement(wt,{onClick:r}),m.createElement(pt,null)),editor:m.createElement(x.exports.Suspense,{fallback:m.createElement(ye,null)},m.createElement(Et,null)),output:m.createElement(bt,{children:m.createElement(we,null)})}))}const wt=({onClick:e})=>{const t=ne(),r=le(),{colors:o}=v();let n=e,l="strg + s";return"s"===t.size&&"output"===t.active?(l="back to editor",n=()=>r.setActive("editor")):"s"===t.size&&(l="show output"),m.createElement(Ie,{style:{border:t.running?"1px solid "+o.link:void 0,transition:"0.5s",margin:"0px 8px"},onClick:n,icon:m.createElement(Re,{size:16}),children:l})},$t=k(oe);globalThis.React=m,w.render(m.createElement($,{value:$t},m.createElement(kt,null)),document.getElementById("root"));export{Ee as P,ie as a,le as u};
