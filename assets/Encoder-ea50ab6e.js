import{u as x,i as f}from"./action-20425d74.js";import{c as g,a as h}from"./index-e2379d3d.js";import{a4 as V,b0 as T,U as w,b1 as l,aG as a,ay as b,a2 as r,x as n}from"./history-d3ff5000.js";import"./_commonjsHelpers-87174ba5.js";import"./index-cc134824.js";const U=V({__name:"Encoder",async setup(v){let o,i;const t=x(([o,i]=T(()=>f({input:g(),output:h("base64")})),o=await o,i(),o));return(A,e)=>{const p=a("TextInput"),s=a("TextOutput"),c=a("Align"),m=a("HeightResize");return b(),w(m,{reduce:5},{default:l(({small:d,large:_})=>[r(c,{direction:"vertical"},{default:l(()=>[r(p,{allow:["text","hex","upload","url"],modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=u=>n(t).current.input=u),height:d,upload:"file",encoding:""},null,8,["modelValue","height"]),r(s,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=u=>n(t).current.output=u),allow:["base64"],content:n(t).current.input.text,height:_,onSuccess:e[2]||(e[2]=u=>n(t).save())},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{U as default};
