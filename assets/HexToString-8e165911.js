import{u as _,i as f}from"./action-6c9f0bf6.js";import{c as g,a as h}from"./index-49e4d58d.js";import{a4 as T,b0 as V,U as w,b1 as l,aG as a,ay as v,a2 as i,x as n}from"./history-6b8b5fef.js";import"./_commonjsHelpers-87174ba5.js";import"./index-cc134824.js";const O=T({__name:"HexToString",async setup(A){let o,r;const t=_(([o,r]=V(()=>f({input:g("hex"),output:h("text")})),o=await o,r(),o));return(C,e)=>{const p=a("TextInput"),s=a("TextOutput"),c=a("Align"),m=a("HeightResize");return v(),w(m,{reduce:5},{default:l(({small:d,large:x})=>[i(c,{direction:"vertical"},{default:l(()=>[i(p,{allow:["hex"],modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=u=>n(t).current.input=u),height:d,upload:"file"},null,8,["modelValue","height"]),i(s,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=u=>n(t).current.output=u),allow:["text","base64"],content:n(t).current.input.text,height:x,onSuccess:e[2]||(e[2]=u=>n(t).save()),encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{O as default};