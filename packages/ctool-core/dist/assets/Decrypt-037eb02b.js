import{u as C,i as U}from"./action-5b70528b.js";import{d as w,y as z,z as E,D as I,r as i,a as A,c as H,w as r,x as l,j as t,C as $,E as L,T as s}from"./tool-a5cfd998.js";import{m as O,k as S,p as j,a as D}from"./cryptoJS-9a50cefc.js";import"./modulepreload-polyfill-3cfb730f.js";import"./index-8d6e0be6.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-27ce627d.js";import"./string_decoder-f99a9766.js";import"./index-d84d7c8a.js";const Q=w({__name:"Decrypt",async setup(R){let p,m;const y={iv:"",type:"advanced",key:"",fill:!0,mode:"CBC",padding:"Pkcs7",key_size:"128"},e=C(([p,m]=z(()=>U({input:$("base64"),option:y,output:L("text")})),p=await p,m(),p)),c=E(()=>{if(e.current.input.text.isEmpty()||e.current.option.key===""||e.current.option.type==="advanced"&&e.current.option.mode!=="ECB"&&e.current.option.iv==="")return s.empty();if(e.current.input.text.isError())return e.current.input.text;try{return s.fromBase64(D.decrypt(e.current.input.text.toBase64(),e.current.option))}catch(u){return s.fromError($error(u))}});return I(()=>c.value,u=>{u.isEmpty()||e.save()},{immediate:!0,deep:!0}),(u,o)=>{const _=i("TextInput"),a=i("Select"),d=i("Input"),f=i("Bool"),x=i("Tooltip"),V=i("Align"),g=i("HelpTip"),k=i("Tabs"),b=i("TextOutput"),v=i("HeightResize");return A(),H(v,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:r(({small:T,large:B})=>[l(V,{direction:"vertical"},{default:r(()=>[l(_,{modelValue:t(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).current.input=n),allow:["base64","hex"],height:T},null,8,["modelValue","height"]),l(k,{modelValue:t(e).current.option.type,"onUpdate:modelValue":o[8]||(o[8]=n=>t(e).current.option.type=n),class:"ctool-page-option",lists:[{name:"advanced",label:u.$t("main_ui_advanced")},{name:"simple",label:u.$t("main_ui_simple")}]},{extra:r(()=>[l(g,{link:"https://github.com/brix/crypto-js"})]),default:r(()=>[l(V,null,{default:r(()=>[l(a,{modelValue:t(e).current.option.mode,"onUpdate:modelValue":o[1]||(o[1]=n=>t(e).current.option.mode=n),options:t(O)},null,8,["modelValue","options"]),l(a,{modelValue:t(e).current.option.key_size,"onUpdate:modelValue":o[2]||(o[2]=n=>t(e).current.option.key_size=n),options:t(S)},null,8,["modelValue","options"]),l(a,{modelValue:t(e).current.option.padding,"onUpdate:modelValue":o[3]||(o[3]=n=>t(e).current.option.padding=n),options:t(j)},null,8,["modelValue","options"]),l(d,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[4]||(o[4]=n=>t(e).current.option.key=n),width:220,label:"key"},null,8,["modelValue"]),l(d,{modelValue:t(e).current.option.iv,"onUpdate:modelValue":o[6]||(o[6]=n=>t(e).current.option.iv=n),width:220,label:"iv",disabled:t(e).current.option.mode==="ECB"},{append:r(()=>[l(x,{content:u.$t("aes_iv_auto_fill")},{default:r(()=>[l(f,{modelValue:t(e).current.option.fill,"onUpdate:modelValue":o[5]||(o[5]=n=>t(e).current.option.fill=n),disabled:t(e).current.option.mode==="ECB"},null,8,["modelValue","disabled"])]),_:1},8,["content"])]),_:1},8,["modelValue","disabled"])]),_:1}),l(d,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[7]||(o[7]=n=>t(e).current.option.key=n),label:"key"},null,8,["modelValue"])]),_:1},8,["modelValue","lists"]),l(b,{modelValue:t(e).current.output,"onUpdate:modelValue":o[9]||(o[9]=n=>t(e).current.output=n),allow:["text"],content:c.value,height:B,encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{Q as default};