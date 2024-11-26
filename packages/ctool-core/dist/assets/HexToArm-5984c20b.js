import{u as x,i as B}from"./action-01192c39.js";import{r as A,h as r}from"./util-0f8ade33.js";import{d as H,y as M,I as R,z as T,r as o,a as V,k as C,x as t,w as u,j as s,v as U,n as k,l as E,F}from"./tool-ab65ccdd.js";import"./proxy-1d3b6d38.js";import"./modulepreload-polyfill-3cfb730f.js";const w=`Input Hex code:
40000494
C0035FD6
F0 B5 03 AF81b0`,L=H({__name:"HexToArm",async setup(z){let m,d;const e=x(([m,d]=M(()=>B({input:"",offset:"",response:""})),m=await m,d(),m));let c=R(!1);const f=async()=>{if(c.value=!0,e.current.input.trim()===""){e.current.response="";return}A({hex:e.current.input,offset:e.current.offset,arch:["arm64","arm","armbe","thumb","thumbbe"]}).then(({data:p})=>{e.current.response=p,e.success()}).finally(()=>{c.value=!1})},l=T(()=>({arm64:r("asm","arm64",e.current),arm:r("asm","arm",e.current),thumb:r("asm","thumb",e.current),armbe:r("asm","armbe",e.current),thumbbe:r("asm","thumbbe",e.current)}));return(p,i)=>{const g=o("HelpTip"),v=o("Input"),n=o("Textarea"),_=o("Button"),h=o("Align"),b=o("HeightResize");return V(),C(F,null,[t(v,{class:"ctool-page-option",label:"Offset (hex) 0x",modelValue:s(e).current.offset,"onUpdate:modelValue":i[0]||(i[0]=a=>s(e).current.offset=a),placeholder:"0 - for branch and LDR put hex value here",style:{"margin-bottom":"5px"}},{append:u(()=>[t(g,{link:"https://armconverter.com/"})]),_:1},8,["modelValue"]),U("div",null,[t(b,{append:[".ctool-page-option"],style:{display:"grid","grid-template-columns":"10fr 14fr","grid-column-gap":"5px"}},{default:u(({height:a})=>[t(h,{direction:"vertical"},{default:u(()=>[t(n,{modelValue:s(e).current.input,"onUpdate:modelValue":i[1]||(i[1]=y=>s(e).current.input=y),height:a-37,placeholder:w},null,8,["modelValue","height"]),t(_,{type:"primary",loading:s(c),onClick:f,long:""},{default:u(()=>[k(E(p.$t("arm_convert")),1)]),_:1},8,["loading"])]),_:2},1024),t(h,{direction:"vertical"},{default:u(()=>[t(n,{"model-value":l.value.arm64,placeholder:"ARM64",copy:"ARM64",height:(a-20)/5},null,8,["model-value","height"]),t(n,{"model-value":l.value.arm,placeholder:"ARM",copy:"ARM",height:(a-20)/5},null,8,["model-value","height"]),t(n,{"model-value":l.value.armbe,placeholder:"ARM Big Endian",copy:"ARM Big Endian",height:(a-20)/5},null,8,["model-value","height"]),t(n,{"model-value":l.value.thumb,placeholder:"THUMB",copy:"THUMB",height:(a-20)/5},null,8,["model-value","height"]),t(n,{"model-value":l.value.thumbbe,placeholder:"THUMB Big Endian",copy:"THUMB Big Endian",height:(a-20)/5},null,8,["model-value","height"])]),_:2},1024)]),_:1},8,["append"])])],64)}}});export{L as default};