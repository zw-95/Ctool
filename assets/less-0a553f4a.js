import{p as t}from"./standalone-dfcd35ed.js";import{p as r}from"./parser-postcss-ca6d578a.js";import{B as s}from"./base-f0edccdd.js";import"./tool-65d8c39c.js";import"./modulepreload-polyfill-3cfb730f.js";const m=new class extends s{async beautify(){return t.format(this.code,{plugins:[r],parser:"less",tabWidth:this.getOptionValue("tab",4)})}};export{m as formatter};
