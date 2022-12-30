import{u as R,i as W}from"./action-20425d74.js";import{d as y,c as X}from"./radix-56f2acb1.js";import{a4 as Y,b0 as j,Q as o,k as D,aY as q,W as d,a2 as s,b1 as c,I as k,aG as m,aH as J,ay as l,aE as z,U as g,x as u,V as K,bu as C,b3 as E,X as O,D as T,C as Z}from"./history-d3ff5000.js";import"./_commonjsHelpers-87174ba5.js";const ee={key:0},te={style:{width:"100%","row-gap":"5px"}},re=["onClick"],se=Y({__name:"Radix",async setup(ne){let _,w;const t=R(([_,w]=j(()=>W({type:0,input:"",map:[2,8,10,16,60,64],alphabet:""},!1)),_=await _,w(),_)),v="large",I=o(()=>C.range(2,65).map(e=>({value:e,label:$t("radix_base",[e])})));let h=D(!1),p=D(t.current.alphabet||y);const S=()=>{p.value=y};q(()=>p.value,e=>{t.current.alphabet=e===y?"":e});const f=o(()=>/^[\-0-9]+$/.test(a(10))&&/^[\-0-1]+$/.test(a(2))),a=e=>{if(p.value.length!==64)return $t("radix_alphabet_length_error");if(t.current.type===0||t.current.input==="")return"";if(t.current.type===e)return t.current.input;try{return X(t.current.input,t.current.type,e,p.value)}catch(n){return $error(n)}},i=(e,n)=>{t.current.input=n,t.current.type=e,t.current.input!==""&&t.save()},H=o({get:()=>a(t.current.map[0]),set:e=>i(t.current.map[0],e)}),N=o({get:()=>a(t.current.map[1]),set:e=>i(t.current.map[1],e)}),P=o({get:()=>a(t.current.map[2]),set:e=>i(t.current.map[2],e)}),F=o({get:()=>a(t.current.map[3]),set:e=>i(t.current.map[3],e)}),G=o({get:()=>a(t.current.map[4]),set:e=>i(t.current.map[4],e)}),L=o({get:()=>a(t.current.map[5]),set:e=>i(t.current.map[5],e)}),$={number0:H,number1:N,number2:P,number3:F,number4:G,number5:L};return(e,n)=>{const V=m("Input"),M=m("Select"),x=m("Button"),U=m("Align"),A=m("Display"),Q=m("ExtendPage"),B=J("row");return l(),d(k,null,[s(U,{direction:"vertical"},{default:c(()=>[(l(!0),d(k,null,z(u(C.range)(0,6),r=>(l(),g(A,{position:"right-center"},{extra:c(()=>[s(U,null,{default:c(()=>[s(M,{modelValue:u(t).current.map[r],"onUpdate:modelValue":b=>u(t).current.map[r]=b,options:I.value,size:"small",disabled:f.value&&u(t).current.map[r]===u(t).current.type},null,8,["modelValue","onUpdate:modelValue","options","disabled"]),f.value?(l(),g(x,{key:0,text:e.$t("main_ui_copy"),onClick:b=>e.$copy($[`number${r}`].value),size:"small",type:"primary"},null,8,["text","onClick"])):K("",!0)]),_:2},1024)]),default:c(()=>[s(V,{modelValue:$[`number${r}`].value,"onUpdate:modelValue":b=>$[`number${r}`].value=b,placeholder:e.$t("radix_input_placeholder"),size:v},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024))),256)),f.value?E((l(),d("div",ee,[s(x,{size:v,onClick:n[0]||(n[0]=r=>h.value=!0),text:e.$t("main_ui_more")},null,8,["text"]),s(x,{size:v,onClick:n[1]||(n[1]=r=>u(t).current.input=""),text:e.$t("main_ui_clear")},null,8,["text"])])),[[B,"1-100px"]]):(l(),g(A,{key:1,position:"right-center",text:p.value!==u(y)?e.$t("radix_reset"):"",type:"danger",onClick:S},{default:c(()=>[s(V,{modelValue:p.value,"onUpdate:modelValue":n[2]||(n[2]=r=>p.value=r),placeholder:e.$t("radix_alphabet"),size:v,label:e.$t("radix_alphabet")},null,8,["modelValue","placeholder","label"])]),_:1},8,["text"]))]),_:1}),s(Q,{modelValue:h.value,"onUpdate:modelValue":n[3]||(n[3]=r=>h.value=r)},{default:c(()=>[E((l(),d("div",te,[(l(!0),d(k,null,z(u(C.range)(2,65),r=>(l(),g(V,{"model-value":a(r)},{prepend:c(()=>[O("span",{style:Z({...r===u(t).current.type?{color:"red"}:{},width:"20px",cursor:"pointer"}),onClick:()=>e.$copy(a(r))},T(r),13,re)]),_:2},1032,["model-value"]))),256))])),[[B,"1-1-1"]])]),_:1},8,["modelValue"])],64)}}});export{se as default};
