import{bQ as v,bX as I,bE as O,ay as x,aq as S,bu as n,aW as z,c7 as k,bx as D,bF as p,c8 as H,c9 as E,bY as $,bM as j,by as q,ca as N}from"./history-fa1047dd.js";const U=async(a,{input:e="input",keyword:_=i=>!1,paste:y=i=>!0}={})=>{const i=v(),u=I(i.items.tool,i.items.feature),g=E(),m=O(),o=t=>{var w;const f=(w=g.query)==null?void 0:w[t];return n.isString(f)?f:""},r=(()=>{const t=o("keyword");return t===""?!1:_(t)})(),s=t=>(e&&n.isNumber(a[e])&&t[e]&&(t[e]=n.toNumber(t[e])),{items:n.cloneDeep(t),field:e}),b=()=>{if(u.length()<1)return null;if(o("history"))return u.get(parseInt(o("history")));if(r){const t=u.all();for(let f in t)if(N(r,t[f].v))return u.get(parseInt(f));return null}return u.get(0)};e&&!(e in a)&&(e="",y=!1);const h=e&&$(a[e]);a=r?n.merge(a,r):a;let c=n.cloneDeep(a);if(e){let t=j.get("_temp_input_storage")||o("input");if(t!=="")return h?(c[e].value=t,s(c)):s({...c,[e]:t})}const l=b();if(l)return s(n.mergeWith(c,l,(t,f)=>{if(k(t))return t.unserialize(f)}));if(e&&y!==!1&&m.items.auto_read_copy){const t=await q();if(t.trim()&&y(t))return h?(c[e].value=m.items.auto_read_copy_filter?t.trim():t,s(c)):s({...c,[e]:m.items.auto_read_copy_filter?t.trim():t})}return s(c)},W=a=>{const e=v(),_=I(e.items.tool,e.items.feature),y=O(),i=x(a.items);S(()=>{_.save()});const u=n.debounce(function(){const o=r=>{if(!n.isObject(r))return r;if(k(r)){if(!r.isSaveHistory())throw new Error("Do not save");return r.serialize()}for(let s in r)r[s]=o(r[s]);return r};try{_.push(o(n.cloneDeep(z(i))))}catch{}},500),g=()=>{u()};return{current:i,save:g,success:({message:o=$t("main_ui_success"),message_type:r="success",copy_text:s="",copy_image:b="",is_save:h=!0}={})=>{if(h&&g(),s!==""&&y.items.auto_save_copy)return D(s,()=>{p.success($t("main_ui_copy_text_ok"))});if(b!==""&&y.items.auto_save_copy)return H(b,()=>{p.success($t("main_ui_copy_image_ok"))});o!==""&&p[r](o,{offset:150,showClose:!0})}}};export{U as i,W as u};
