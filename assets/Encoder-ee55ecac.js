import{L as g,d as C,y as v,z as y,c as x,w as s,r,f as A,v as a,j as n}from"./tool-65d7eee7.js";import{u as U,i as $}from"./action-4599c846.js";import"./modulepreload-polyfill-3cfb730f.js";var w=i=>encodeURIComponent(i).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`);const z=g(w),j=C({__name:"Encoder",async setup(i){let e,c;const t=U(([e,c]=v(()=>$({input:""})),e=await e,c(),e)),u=y(()=>{if(t.current.input==="")return"";try{return t.save(),z(t.current.input)}catch(o){return $error(o)}});return(o,l)=>{const p=r("Textarea"),d=r("Align"),m=r("HeightResize");return A(),x(m,{reduce:5},{default:s(({small:_,large:h})=>[a(d,{direction:"vertical"},{default:s(()=>[a(p,{modelValue:n(t).current.input,"onUpdate:modelValue":l[0]||(l[0]=f=>n(t).current.input=f),height:_,placeholder:o.$t("main_ui_input")},null,8,["modelValue","height","placeholder"]),a(p,{"model-value":n(u),height:h,placeholder:o.$t("main_ui_output"),copy:!!n(u)},null,8,["model-value","height","placeholder","copy"])]),_:2},1024)]),_:1})}}});export{j as default};