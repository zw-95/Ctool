import{B as D}from"./base-f0edccdd.js";var y,S;function F(){if(S)return y;S=1;function n(e,i={}){i.filter=i.filter||(()=>!0);function c(){return h()||v()||C()||O()}function f(){return u(/\s*/),h(!0)||C()||N()||s(!1)}function p(){const t=m(),r=[];let o,l=f();for(;l;){if(l.node.type==="Element"){if(o)throw new Error("Found multiple root nodes");o=l.node}l.excluded||r.push(l.node),l=f()}if(!o)throw new Error("Failed to parse XML");return{declaration:t?t.node:null,root:o,children:r}}function m(){return s(!0)}function s(t){const r=u(t?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!r)return;const o={name:r[1],type:"ProcessingInstruction",attributes:{}};for(;!(T()||g("?>"));){const l=E();if(!l)return o;o.attributes[l.name]=l.value}return u(/\?>/),{excluded:t?!1:i.filter(o)===!1,node:o}}function h(t){const r=u(/^<([\w-:.]+)\s*/);if(!r)return;const o={type:"Element",name:r[1],attributes:{},children:[]};for(;!(T()||g(">")||g("?>")||g("/>"));){const d=E();if(!d)return o;o.attributes[d.name]=d.value}const l=t?!1:i.filter(o)===!1;if(u(/^\s*\/>/))return o.children=null,{excluded:l,node:o};if(u(/\??>/),!l){let d=c();for(;d;)d.excluded||o.children.push(d.node),d=c()}return u(/^<\/[\w-:.]+>/),{excluded:l,node:o}}function N(){const t=u(/^<!DOCTYPE\s+[^>]*>/);if(t){const r={type:"DocumentType",content:t[0]};return{excluded:i.filter(r)===!1,node:r}}}function O(){if(e.startsWith("<![CDATA[")){const t=e.indexOf("]]>");if(t>-1){const r=t+3,o={type:"CDATA",content:e.substring(0,r)};return e=e.slice(r),{excluded:i.filter(o)===!1,node:o}}}}function C(){const t=u(/^<!--[\s\S]*?-->/);if(t){const r={type:"Comment",content:t[0]};return{excluded:i.filter(r)===!1,node:r}}}function v(){const t=u(/^([^<]+)/);if(t){const r={type:"Text",content:t[1]};return{excluded:i.filter(r)===!1,node:r}}}function E(){const t=u(/([\w-:.]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);if(t)return{name:t[1],value:X(t[2])}}function X(t){return t.replace(/^['"]|['"]$/g,"")}function u(t){const r=e.match(t);if(r)return e=e.slice(r[0].length),r}function T(){return e.length===0}function g(t){return e.indexOf(t)===0}return e=e.trim(),p()}return y=n,y}function w(n){if(!n.options.indentation&&!n.options.lineSeparator)return;n.content+=n.options.lineSeparator;let e;for(e=0;e<n.level;e++)n.content+=n.options.indentation}function a(n,e){n.content+=e}function x(n,e,i){if(typeof n.content=="string")I(n,e,i);else if(n.type==="Element")k(n,e,i);else if(n.type==="ProcessingInstruction")P(n,e);else throw new Error("Unknown node type: "+n.type)}function I(n,e,i){i||(n.content=n.content.trim()),n.content.length>0&&(!i&&e.content.length>0&&w(e),a(e,n.content))}function k(n,e,i){if(!i&&e.content.length>0&&w(e),a(e,"<"+n.name),A(e,n.attributes),n.children===null){const c=e.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";a(e,c)}else if(n.children.length===0)a(e,"></"+n.name+">");else{a(e,">"),e.level++;let c=n.attributes["xml:space"]==="preserve";if(!c&&e.options.collapseContent){let f=!1,p=!1,m=!1;n.children.forEach(function(s,h){s.type==="Text"?(s.content.includes(`
`)?(p=!0,s.content=s.content.trim()):(h===0||h===n.children.length-1)&&s.content.trim().length===0&&(s.content=""),s.content.length>0&&(f=!0)):s.type==="CDATA"?f=!0:m=!0}),f&&(!m||!p)&&(c=!0)}n.children.forEach(function(f){x(f,e,i||c,e.options)}),e.level--,!i&&!c&&w(e),a(e,"</"+n.name+">")}}function A(n,e){Object.keys(e).forEach(function(i){const c=e[i].replace(/"/g,"&quot;");a(n," "+i+'="'+c+'"')})}function P(n,e){e.content.length>0&&w(e),a(e,"<?"+n.name),A(e,n.attributes),a(e,"?>")}function q(n,e={}){e.indentation="indentation"in e?e.indentation:"    ",e.collapseContent=e.collapseContent===!0,e.lineSeparator="lineSeparator"in e?e.lineSeparator:`\r
`,e.whiteSpaceAtEndOfSelfclosingTag=!!e.whiteSpaceAtEndOfSelfclosingTag;const c=F()(n,{filter:e.filter}),f={content:"",level:0,options:e};return c.declaration&&P(c.declaration,f),c.children.forEach(function(p){x(p,f,!1)}),f.content.replace(/\r\n/g,`
`).replace(/\n/g,e.lineSeparator)}var b=q;const L=new class extends D{async beautify(){return b(this.code,{indentation:" ".repeat(this.getOptionValue("tab",4)),collapseContent:this.getOptionValue("collapse_content",!1),lineSeparator:`
`})}async compress(){return b(this.code,{indentation:"",collapseContent:!0,lineSeparator:""})}};export{L as formatter};
