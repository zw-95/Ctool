import{u as x,i as g}from"./action-1ad25393.js";import{c as f,a as h}from"./index-fb174fea.js";import{A as V,bi as w,m as T,bj as s,aF as a,as as A,x as i,a$ as n}from"./history-00340aff.js";import"./_commonjsHelpers-87174ba5.js";import"./index-b1ff2442.js";import"./shim-03580cdb.js";const B=V({__name:"Decoder",async setup(b){let o,r;const t=x(([o,r]=w(()=>g({input:f("base64"),output:h()})),o=await o,r(),o));return(v,e)=>{const p=a("TextInput"),l=a("TextOutput"),c=a("Align"),m=a("HeightResize");return A(),T(m,{reduce:5},{default:s(({small:d,large:_})=>[i(c,{direction:"vertical"},{default:s(()=>[i(p,{allow:["base64"],modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=u=>n(t).current.input=u),height:d},null,8,["modelValue","height"]),i(l,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=u=>n(t).current.output=u),allow:["text","hex","image","down"],content:n(t).current.input.text,height:_,onSuccess:e[2]||(e[2]=u=>n(t).save()),encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{B as default};