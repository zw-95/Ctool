import{u as j,i as q}from"./action-01192c39.js";import{d as J,y as K,I,r as u,A as O,a as c,c as k,w as r,B as S,k as v,x as l,v as m,aI as H,j as d,Y,q as G,F as y,ae as M,aJ as P,n as V,l as w,aK as Q}from"./tool-ab65ccdd.js";import"./modulepreload-polyfill-3cfb730f.js";const X={class:"ctool-page-option"},Z={class:"ctool-websocket-logs-item"},ee={class:"ctool-websocket-logs-top"},te={class:"ctool-websocket-logs-time"},oe={class:"ctool-websocket-logs-content"},se=J({__name:"Websocket",async setup(le){let b,C;const s=j(([b,C]=K(()=>q({input:"wss://echo.websocket.events",keepScroll:!0,protocols:""},{paste:e=>/^ws/.test(e)})),b=await b,C(),b));let _=I(!1),g=0,$=!1,x;const o=I({status:"close",ws:null,send_content:"",logs:[]}),i=async(e,t="other")=>{if(o.value.logs.push({content:e,type:t,time:M().format("HH:mm:ss")}),await P(),s.current.keepScroll){const p=document.querySelector(".ctool-websocket-logs .ctool-card-body");p&&(p.scrollTop=p.scrollHeight)}},z=()=>{if(!(!s.current.input.trim()||o.value.status!=="close")){o.value.status="connecting",s.save(),i($t("websocket_connect_start",[s.current.input]));try{let e=new WebSocket(s.current.input,s.current.protocols!==""?s.current.protocols.split(","):void 0);console.log(e),e.addEventListener("open",t=>{console.log(t),o.value.status="open",h(),i($t("websocket_connect_ok"))}),e.addEventListener("close",t=>{if(console.log(t),o.value.status="close",i($t("websocket_close_ok")),_.value){if($)return;$=!0,x=setInterval(()=>{o.value.status==="close"&&(g=g+1,i(`${$t("websocket_reconnect")} ${g}`),z())},3e3)}}),e.addEventListener("message",t=>{console.log(t),i(t.data,"accept")}),e.addEventListener("error",t=>{console.log(t),i("Websocket Error")}),o.value.ws=e}catch(e){console.log(e),i($error(e))}}},A=()=>{var e;_.value=!1,h(),i($t("websocket_close_start",[s.current.input])),(e=o.value.ws)==null||e.close()},h=()=>{g=0,$=!1,clearInterval(x)},L=()=>{var e;if(o.value.status!=="open")throw new Error($t("websocket_error_connect"));if(o.value.send_content==="")throw new Error($t("websocket_error_content"));try{(e=o.value.ws)==null||e.send(o.value.send_content),i(o.value.send_content,"send")}catch(t){i($error(t))}};return(e,t)=>{const p=u("Align"),E=u("Bool"),T=u("Input"),U=u("HelpTip"),f=u("Button"),W=u("Textarea"),N=u("Exception"),R=u("Icon"),D=u("Card"),F=u("HeightResize"),B=O("row");return c(),k(p,{direction:"vertical"},{default:r(()=>[S((c(),v("div",X,[l(T,{modelValue:d(s).current.input,"onUpdate:modelValue":t[1]||(t[1]=a=>d(s).current.input=a)},{prepend:r(()=>[l(p,{horizontal:"center",vertical:"center",width:20},{default:r(()=>[m("div",{class:H(["ctool-websocket-status",[`ctool-websocket-status-${o.value.status}`]])},null,2)]),_:1})]),suffix:r(()=>[l(E,{size:"small",modelValue:d(_),"onUpdate:modelValue":t[0]||(t[0]=a=>Y(_)?_.value=a:_=a),label:e.$t("websocket_reconnect")},null,8,["modelValue","label"])]),_:1},8,["modelValue"]),l(T,{modelValue:d(s).current.protocols,"onUpdate:modelValue":t[2]||(t[2]=a=>d(s).current.protocols=a),label:e.$t("websocket_protocols")},{suffix:r(()=>[l(U,{text:e.$t("websocket_protocols_tip")},null,8,["text"])]),_:1},8,["modelValue","label"]),o.value.status==="close"?(c(),k(f,{key:0,onClick:t[3]||(t[3]=a=>z()),text:e.$t("websocket_connect")},null,8,["text"])):(c(),k(f,{key:1,onClick:t[4]||(t[4]=a=>A()),text:e.$t("websocket_close")},null,8,["text"]))])),[[B,"16-8-auto"]]),S((c(),k(F,{ignore:"",reduce:5,append:[".ctool-page-option"]},{default:r(({height:a})=>[l(W,{height:a,modelValue:o.value.send_content,"onUpdate:modelValue":t[5]||(t[5]=n=>o.value.send_content=n),"float-text":e.$t("websocket_send"),"float-position":"top-right",onClickFloatText:L,placeholder:`${e.$t("main_ui_input")}${e.$t("websocket_send_content")}`},null,8,["height","modelValue","float-text","placeholder"]),l(D,{title:e.$t("websocket_log_content"),height:a,class:"ctool-websocket-logs"},{extra:r(()=>[l(p,null,{default:r(()=>[l(f,{size:"small",type:"primary",text:e.$t("main_ui_copy"),onClick:t[6]||(t[6]=()=>e.$copy(JSON.stringify(o.value.logs)))},null,8,["text"]),l(f,{size:"small",type:"danger",text:e.$t("main_ui_clear"),onClick:t[7]||(t[7]=n=>o.value.logs=[])},null,8,["text"]),l(E,{size:"small",modelValue:d(s).current.keepScroll,"onUpdate:modelValue":t[8]||(t[8]=n=>d(s).current.keepScroll=n),border:"",label:e.$t("websocket_keep_scroll"),onChange:t[9]||(t[9]=n=>d(s).save())},null,8,["modelValue","label"])]),_:1})]),default:r(()=>[o.value.logs.length<1?(c(),k(p,{key:0,horizontal:"center",vertical:"center"},{default:r(()=>[l(N)]),_:1})):(c(),k(p,{key:1,direction:"vertical"},{default:r(()=>[(c(!0),v(y,null,G(o.value.logs,n=>(c(),v("div",Z,[m("div",ee,[m("div",{class:H(["ctool-websocket-logs-type",`ctool-websocket-logs-type-${n.type}`])},[n.type==="send"?(c(),v(y,{key:0},[V(w(e.$t("websocket_client"))+"：",1)],64)):n.type==="accept"?(c(),v(y,{key:1},[V(w(e.$t("websocket_server"))+"：",1)],64)):(c(),v(y,{key:2},[V(w(e.$t("websocket_tips"))+"：",1)],64))],2),m("div",te,w(n.time),1),l(R,{size:12,name:"copy",tooltip:e.$t("main_ui_copy"),hover:"",onClick:ne=>e.$copy(n.content)},null,8,["tooltip","onClick"])]),m("pre",oe,[m("code",null,w(n.content),1)])]))),256))]),_:1}))]),_:2},1032,["title","height"])]),_:1},8,["append"])),[[B,"40-60"]])]),_:1})}}});const ie=Q(se,[["__scopeId","data-v-992100fd"]]);export{ie as default};