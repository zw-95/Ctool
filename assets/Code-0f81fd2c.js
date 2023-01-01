import{u as j,i as Q}from"./action-398a71db.js";import{f as m}from"./index-e7f9e609.js";import{l as A}from"./index-4fa5e3a9.js";import{a4 as D,b0 as N,Q as w,k as O,aY as R,U as s,b1 as c,aG as u,ay as l,a2 as d,x as t,W as g,aE as H,I as q,V as i,a1 as v,D as $}from"./history-c0e2c0dd.js";import"./index-da14ef80.js";import"./_commonjsHelpers-87174ba5.js";const M=Object.keys(A.formatters),P={key:3},K=D({__name:"Code",async setup(F){let p,b;const _=Object.keys(m.languages).filter(o=>!["json"].includes(o)),e=j(([p,b]=N(()=>Q({input:"",language:"javascript",option:{javascript:{tab:4},markdown:{tab:4},typescript:{tab:4},css:{tab:4},less:{tab:4},scss:{tab:4},yaml:{tab:4},html:{tab:4},xml:{tab:4,collapse_content:!0},php:{tab:4},java:{tab:4},vue:{tab:4},angular:{tab:4},graphql:{tab:4},sql:{tab:4,language:"mysql"}}},!1)),p=await p,b(),p)),y=w(()=>m.languages[e.current.language].compress),h=w(()=>m.languages[e.current.language].beautify),f=async o=>{if(e.current.input.trim()==="")return;const r=await(await m.load(e.current.language)).set(e.current.input,e.current.option[e.current.language]).format(o);if(r==="")throw new Error("result empty");e.current.input=r,e.success()},V=O(0),L=()=>{if(e.current.language==="sql")switch(e.current.option.sql.language){case"mysql":return"MySQL";case"mariadb":return"MariaDB SQL";case"plsql":return"PLSQL";case"postgresql":return"PostgreSQL";case"sqlite":return"SQLite"}};R(()=>e.current.option.sql.language,()=>{V.value++});const x=[{label:$t("code_indent_width_null"),value:0},{label:$t("code_indent_width",[2]),value:2},{label:$t("code_indent_width",[4]),value:4},{label:$t("code_indent_width",[6]),value:6},{label:$t("code_indent_width",[8]),value:8}];return(o,n)=>{const r=u("Select"),z=u("Bool"),k=u("Button"),B=u("Align"),C=u("Editor"),S=u("HeightResize");return l(),s(S,null,{default:c(({height:E})=>[d(C,{modelValue:t(e).current.input,"onUpdate:modelValue":n[5]||(n[5]=a=>t(e).current.input=a),"lang-callback":L,reload:V.value,lang:t(e).current.language,height:`${E}px`},{default:c(()=>[d(B,null,{default:c(()=>[d(r,{size:"small",modelValue:t(e).current.language,"onUpdate:modelValue":n[0]||(n[0]=a=>t(e).current.language=a),options:t(_)},null,8,["modelValue","options"]),(l(!0),g(q,null,H(t(_),a=>(l(),g(q,{key:a},[t(e).current.language===a?(l(),s(r,{key:0,size:"small",modelValue:t(e).current.option[`${a}`].tab,"onUpdate:modelValue":U=>t(e).current.option[`${a}`].tab=U,options:x},null,8,["modelValue","onUpdate:modelValue"])):i("",!0)],64))),128)),t(e).current.language==="sql"?(l(),s(r,{key:0,size:"small",modelValue:t(e).current.option.sql.language,"onUpdate:modelValue":n[1]||(n[1]=a=>t(e).current.option.sql.language=a),options:t(M)},null,8,["modelValue","options"])):i("",!0),t(e).current.language==="xml"?(l(),s(z,{key:1,size:"small",modelValue:t(e).current.option.xml.collapse_content,"onUpdate:modelValue":n[2]||(n[2]=a=>t(e).current.option.xml.collapse_content=a),label:o.$t("code_xml_collapse_content")},null,8,["modelValue","label"])):i("",!0),t(h)?(l(),s(k,{key:2,type:"primary",size:"small",onClick:n[3]||(n[3]=a=>f("beautify"))},{default:c(()=>[v($(o.$t("code_beautify")),1)]),_:1})):i("",!0),t(y)?(l(),g("span",P,"|")):i("",!0),t(y)?(l(),s(k,{key:4,type:"primary",size:"small",onClick:n[4]||(n[4]=a=>f("compress"))},{default:c(()=>[v($(o.$t("code_compress")),1)]),_:1})):i("",!0)]),_:1})]),_:2},1032,["modelValue","reload","lang","height"])]),_:1})}}});export{K as default};