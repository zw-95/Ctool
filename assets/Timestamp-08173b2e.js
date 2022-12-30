import{u as R,i as B}from"./action-20425d74.js";import{a4 as h,c4 as a,b0 as j,Q as s,aY as N,k as U,aw as A,U as y,b1 as m,aG as d,aH as L,ay as f,a2 as u,x as o,V as C,b3 as G,W as Q,X as g,D as S,a1 as W}from"./history-d3ff5000.js";import{u as X,t as Z,z as q,e as F}from"./en_US-e946fe52.js";import"./_commonjsHelpers-87174ba5.js";const le=h({__name:"Timestamp",async setup(J){let c,x;a.extend(X),a.extend(Z);const t=R(([c,x]=j(()=>B({input:"",timezone:a.tz.guess(),unix_type:2},e=>new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+$/).test(e)||new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+\.\d+$/).test(e)||new RegExp(/^\d{5,}$/).test(e))),c=await c,x(),c)),i=s(()=>(t.current.input||"").trim()),p=s(()=>i.value===""?!1:new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+$/).test(i.value)?0:new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+\.\d+$/).test(i.value)?1:new RegExp(/^\d+$/).test(i.value)?2:!1),b=s(()=>new RegExp(/^\d{1,12}$/).test(i.value)?3:4),r=s(()=>{try{if(i.value==="")return"";if(p.value===!1)throw new Error($t("time_error_format"));let e;if(p.value===0?e=a.tz(i.value,t.current.timezone):p.value===1?e=a.tz(i.value,t.current.timezone):(t.current.unix_type===2?b.value:t.current.unix_type)===3?e=a(parseInt(i.value)*1e3).tz(t.current.timezone):e=a(parseInt(i.value)).tz(t.current.timezone),!e.isValid())throw new Error($t("time_error_format"));return e}catch(e){return $error(e)}}),_=s(()=>a.isDayjs(r.value)),w=s(()=>a.isDayjs(r.value)?p.value!==2?r.value.unix().toString():r.value.format("YYYY-MM-DD HH:mm:ss"):r.value),k=s(()=>a.isDayjs(r.value)?p.value!==2?r.value.valueOf().toString():r.value.format("YYYY-MM-DD HH:mm:ss.SSS"):r.value);N(()=>({data:t.current,is_valid:_.value}),({is_valid:e})=>{e&&t.save()},{immediate:!0,deep:!0});const T=s(()=>{const e=Intl.supportedValuesOf("timeZone");return Object.entries($t("main_locale")==="zh_CN"?q:F).filter(([n])=>e.includes(n)).map(([n,v])=>({value:n,label:`${v}`}))});let D=U(a().valueOf());const E=setInterval(()=>{D.value=a().valueOf()},100);A(()=>{clearInterval(E)});const H=s(()=>{const e=a(D.value).tz(t.current.timezone);return[{format:$t("time_normal_second"),value:e.format("YYYY-MM-DD HH:mm:ss")},{format:$t("time_unix_second"),value:e.unix().toString()},{format:$t("time_normal_millisecond"),value:e.format("YYYY-MM-DD HH:mm:ss.SSS")},{format:$t("time_unix_millisecond"),value:e.valueOf().toString()}]});return(e,n)=>{const v=d("Select"),$=d("Input"),V=d("Button"),Y=d("Align"),z=d("Display"),I=d("Link"),M=d("Table"),O=L("row");return f(),y(Y,{direction:"vertical"},{default:m(()=>[u(v,{size:"large",width:"100%",center:!1,label:e.$t("time_timezone"),modelValue:o(t).current.timezone,"onUpdate:modelValue":n[0]||(n[0]=l=>o(t).current.timezone=l),options:T.value,onChange:n[1]||(n[1]=l=>o(t).current.timezone=l)},null,8,["label","modelValue","options"]),u(z,{position:"right-center"},{extra:m(()=>[u(Y,null,{default:m(()=>[p.value===2?(f(),y(v,{key:0,modelValue:o(t).current.unix_type,"onUpdate:modelValue":n[3]||(n[3]=l=>o(t).current.unix_type=l),size:"small",options:[{value:2,label:`${e.$t("time_unix_auto")}:${b.value===3?e.$t("time_second"):e.$t("time_millisecond")}`},{value:3,label:e.$t("time_unix_second")},{value:4,label:e.$t("time_unix_millisecond")}]},null,8,["modelValue","options"])):C("",!0),o(t).current.input!==""?(f(),y(V,{key:1,text:e.$t("main_ui_clear"),onClick:n[4]||(n[4]=l=>o(t).current.input=""),size:"small"},null,8,["text"])):C("",!0)]),_:1})]),default:m(()=>[u($,{size:"large",modelValue:o(t).current.input,"onUpdate:modelValue":n[2]||(n[2]=l=>o(t).current.input=l),label:e.$t("main_ui_input"),placeholder:e.$t("time_timestamp_input_placeholder")},null,8,["modelValue","label","placeholder"])]),_:1}),G((f(),Q("div",null,[u(z,{position:"right-center",text:_.value?e.$t("main_ui_copy"):"",onClick:n[5]||(n[5]=()=>e.$copy(w.value))},{default:m(()=>[u($,{size:"large","model-value":w.value,label:e.$t("time_second")},null,8,["model-value","label"])]),_:1},8,["text"]),u(z,{position:"right-center",text:_.value?e.$t("main_ui_copy"):"",onClick:n[6]||(n[6]=()=>e.$copy(k.value))},{default:m(()=>[u($,{size:"large","model-value":k.value,label:e.$t("time_millisecond")},null,8,["model-value","label"])]),_:1},8,["text"])])),[[O,"1-1"]]),g("div",null,[u(M,{columns:[{title:e.$t("time_format"),key:"format"},{title:e.$t("time_value"),key:"value"}],lists:H.value,"action-width":100,border:""},{column:m(({row:l})=>[g("td",null,S(l.format),1),g("td",null,[u(I,{onClick:K=>e.$copy(l.value)},{default:m(()=>[W(S(l.value),1)]),_:2},1032,["onClick"])])]),default:m(({row:l})=>[u(V,{text:e.$t("main_ui_load"),onClick:()=>o(t).current.input=`${l.value}`,size:"small"},null,8,["text","onClick"])]),_:1},8,["columns","lists"])])]),_:1})}}});export{le as default};
