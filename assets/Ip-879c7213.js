import{u as b,i as w}from"./action-6c9f0bf6.js";import{b as A,S as _}from"./index-a9237573.js";import{a as D}from"./index-01831826.js";import{a4 as E,b0 as N,k as O,Q as g,W as y,a2 as r,b1 as l,aG as a,ay as p,X as q,x as n,a1 as h,D as v,V as x,U as I,bu as L}from"./history-6b8b5fef.js";import"./___vite-browser-external_commonjs-proxy-d2112d3c.js";import"./_commonjsHelpers-87174ba5.js";import"./index-da14ef80.js";const U={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}},R={style:{display:"grid","grid-template-columns":"1fr 80px","column-gap":"5px"}},G={key:0,style:{"text-align":"center"}},M=E({__name:"Ip",async setup(Q){let s,c;const V=/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/ig,e=b(([s,c]=N(()=>w({input:"",option:A("json"),result:""},t=>V.test(t)||t==="localhost")),s=await s,c(),s));let d=O(!1);const u=g(()=>e.current.result===""?_.empty():_.formObject(e.current.result)),m=g(()=>!u.value.isEmpty()||u.value.isError()),k=()=>{e.current.input="localhost",f()},f=()=>{d.value=!0,D({url:"https://get.geojs.io/v1/ip/geo.json",params:e.current.input!=="localhost"?{ip:e.current.input}:{}}).then(({data:t})=>{e.current.result=L.isArray(t)&&t.length<2?t[0]:t,e.save()}).catch(t=>{e.current.result={error:$error(t,!1)},e.save()}).then(()=>{d.value=!1})};return(t,o)=>{const j=a("Input"),z=a("Display"),S=a("Button"),$=a("Link"),C=a("SerializeOutput"),B=a("Align");return p(),y("div",U,[r(B,{width:600,direction:"vertical"},{default:l(()=>[q("div",R,[r(z,{type:"general",text:n(e).current.input===""?t.$t("ip_local"):"",onClick:k,position:"right-center"},{default:l(()=>[r(j,{modelValue:n(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=i=>n(e).current.input=i),size:"large",placeholder:t.$t("ip_input")},null,8,["modelValue","placeholder"])]),_:1},8,["text"]),r(S,{type:"primary",loading:d.value,size:"large",onClick:f},{default:l(()=>[h(v(t.$t("ip_query")),1)]),_:1},8,["loading"])]),m.value?x("",!0):(p(),y("div",G,[r($,{href:"https://geojs.io/"},{default:l(()=>[h(v(t.$t("ip_info_source"))+": https://geojs.io/",1)]),_:1})])),m.value?(p(),I(C,{key:1,allow:["json","xml","yaml","toml","php_array","properties","http_query_string"],content:u.value,height:300,modelValue:n(e).current.option,"onUpdate:modelValue":o[1]||(o[1]=i=>n(e).current.option=i),onSuccess:o[2]||(o[2]=i=>n(e).save())},null,8,["content","modelValue"])):x("",!0)]),_:1})])}}});export{M as default};