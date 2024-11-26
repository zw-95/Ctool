import{e as Ae,u as Je,i as J,r as ir,a as Ce}from"./string_decoder-34e5f993.js";import{J as Le,O as j,K as ne}from"./tool-ab65ccdd.js";var pe,je;function Xe(){return je||(je=1,pe=Ae.EventEmitter),pe}var be,Ie;function nr(){if(Ie)return be;Ie=1;function E(p,v){var s=Object.keys(p);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(p);v&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(p,S).enumerable})),s.push.apply(s,c)}return s}function m(p){for(var v=1;v<arguments.length;v++){var s=arguments[v]!=null?arguments[v]:{};v%2?E(Object(s),!0).forEach(function(c){b(p,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach(function(c){Object.defineProperty(p,c,Object.getOwnPropertyDescriptor(s,c))})}return p}function b(p,v,s){return v=d(v),v in p?Object.defineProperty(p,v,{value:s,enumerable:!0,configurable:!0,writable:!0}):p[v]=s,p}function N(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")}function P(p,v){for(var s=0;s<v.length;s++){var c=v[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,d(c.key),c)}}function l(p,v,s){return v&&P(p.prototype,v),s&&P(p,s),Object.defineProperty(p,"prototype",{writable:!1}),p}function d(p){var v=a(p,"string");return typeof v=="symbol"?v:String(v)}function a(p,v){if(typeof p!="object"||p===null)return p;var s=p[Symbol.toPrimitive];if(s!==void 0){var c=s.call(p,v||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(p)}var n=Le,o=n.Buffer,g=Je,_=g.inspect,h=_&&_.custom||"inspect";function O(p,v,s){o.prototype.copy.call(p,v,s)}return be=function(){function p(){N(this,p),this.head=null,this.tail=null,this.length=0}return l(p,[{key:"push",value:function(s){var c={data:s,next:null};this.length>0?this.tail.next=c:this.head=c,this.tail=c,++this.length}},{key:"unshift",value:function(s){var c={data:s,next:this.head};this.length===0&&(this.tail=c),this.head=c,++this.length}},{key:"shift",value:function(){if(this.length!==0){var s=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,s}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(s){if(this.length===0)return"";for(var c=this.head,S=""+c.data;c=c.next;)S+=s+c.data;return S}},{key:"concat",value:function(s){if(this.length===0)return o.alloc(0);for(var c=o.allocUnsafe(s>>>0),S=this.head,R=0;S;)O(S.data,c,R),R+=S.data.length,S=S.next;return c}},{key:"consume",value:function(s,c){var S;return s<this.head.data.length?(S=this.head.data.slice(0,s),this.head.data=this.head.data.slice(s)):s===this.head.data.length?S=this.shift():S=c?this._getString(s):this._getBuffer(s),S}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(s){var c=this.head,S=1,R=c.data;for(s-=R.length;c=c.next;){var w=c.data,M=s>w.length?w.length:s;if(M===w.length?R+=w:R+=w.slice(0,s),s-=M,s===0){M===w.length?(++S,c.next?this.head=c.next:this.head=this.tail=null):(this.head=c,c.data=w.slice(M));break}++S}return this.length-=S,R}},{key:"_getBuffer",value:function(s){var c=o.allocUnsafe(s),S=this.head,R=1;for(S.data.copy(c),s-=S.data.length;S=S.next;){var w=S.data,M=s>w.length?w.length:s;if(w.copy(c,c.length-s,0,M),s-=M,s===0){M===w.length?(++R,S.next?this.head=S.next:this.head=this.tail=null):(this.head=S,S.data=w.slice(M));break}++R}return this.length-=R,c}},{key:h,value:function(s,c){return _(this,m(m({},c),{},{depth:0,customInspect:!1}))}}]),p}(),be}var _e,ke;function ze(){if(ke)return _e;ke=1;function E(d,a){var n=this,o=this._readableState&&this._readableState.destroyed,g=this._writableState&&this._writableState.destroyed;return o||g?(a?a(d):d&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,j.nextTick(P,this,d)):j.nextTick(P,this,d)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(d||null,function(_){!a&&_?n._writableState?n._writableState.errorEmitted?j.nextTick(b,n):(n._writableState.errorEmitted=!0,j.nextTick(m,n,_)):j.nextTick(m,n,_):a?(j.nextTick(b,n),a(_)):j.nextTick(b,n)}),this)}function m(d,a){P(d,a),b(d)}function b(d){d._writableState&&!d._writableState.emitClose||d._readableState&&!d._readableState.emitClose||d.emit("close")}function N(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function P(d,a){d.emit("error",a)}function l(d,a){var n=d._readableState,o=d._writableState;n&&n.autoDestroy||o&&o.autoDestroy?d.destroy(a):d.emit("error",a)}return _e={destroy:E,undestroy:N,errorOrDestroy:l},_e}var ge={},We;function X(){if(We)return ge;We=1;function E(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n}var m={};function b(a,n,o){o||(o=Error);function g(h,O,p){return typeof n=="string"?n:n(h,O,p)}var _=function(h){E(O,h);function O(p,v,s){return h.call(this,g(p,v,s))||this}return O}(o);_.prototype.name=o.name,_.prototype.code=a,m[a]=_}function N(a,n){if(Array.isArray(a)){var o=a.length;return a=a.map(function(g){return String(g)}),o>2?"one of ".concat(n," ").concat(a.slice(0,o-1).join(", "),", or ")+a[o-1]:o===2?"one of ".concat(n," ").concat(a[0]," or ").concat(a[1]):"of ".concat(n," ").concat(a[0])}else return"of ".concat(n," ").concat(String(a))}function P(a,n,o){return a.substr(!o||o<0?0:+o,n.length)===n}function l(a,n,o){return(o===void 0||o>a.length)&&(o=a.length),a.substring(o-n.length,o)===n}function d(a,n,o){return typeof o!="number"&&(o=0),o+n.length>a.length?!1:a.indexOf(n,o)!==-1}return b("ERR_INVALID_OPT_VALUE",function(a,n){return'The value "'+n+'" is invalid for option "'+a+'"'},TypeError),b("ERR_INVALID_ARG_TYPE",function(a,n,o){var g;typeof n=="string"&&P(n,"not ")?(g="must not be",n=n.replace(/^not /,"")):g="must be";var _;if(l(a," argument"))_="The ".concat(a," ").concat(g," ").concat(N(n,"type"));else{var h=d(a,".")?"property":"argument";_='The "'.concat(a,'" ').concat(h," ").concat(g," ").concat(N(n,"type"))}return _+=". Received type ".concat(typeof o),_},TypeError),b("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),b("ERR_METHOD_NOT_IMPLEMENTED",function(a){return"The "+a+" method is not implemented"}),b("ERR_STREAM_PREMATURE_CLOSE","Premature close"),b("ERR_STREAM_DESTROYED",function(a){return"Cannot call "+a+" after a stream was destroyed"}),b("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),b("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),b("ERR_STREAM_WRITE_AFTER_END","write after end"),b("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),b("ERR_UNKNOWN_ENCODING",function(a){return"Unknown encoding: "+a},TypeError),b("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),ge.codes=m,ge}var ye,Be;function Qe(){if(Be)return ye;Be=1;var E=X().codes.ERR_INVALID_OPT_VALUE;function m(N,P,l){return N.highWaterMark!=null?N.highWaterMark:P?N[l]:null}function b(N,P,l,d){var a=m(P,d,l);if(a!=null){if(!(isFinite(a)&&Math.floor(a)===a)||a<0){var n=d?l:"highWaterMark";throw new E(n,a)}return Math.floor(a)}return N.objectMode?16:16*1024}return ye={getHighWaterMark:b},ye}var ve,xe;function Ze(){if(xe)return ve;xe=1,ve=C;function E(i){var t=this;this.next=null,this.entry=null,this.finish=function(){se(t,i)}}var m;C.WritableState=A;var b={deprecate:ir()},N=Xe(),P=Le.Buffer,l=(typeof ne<"u"?ne:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function d(i){return P.from(i)}function a(i){return P.isBuffer(i)||i instanceof l}var n=ze(),o=Qe(),g=o.getHighWaterMark,_=X().codes,h=_.ERR_INVALID_ARG_TYPE,O=_.ERR_METHOD_NOT_IMPLEMENTED,p=_.ERR_MULTIPLE_CALLBACK,v=_.ERR_STREAM_CANNOT_PIPE,s=_.ERR_STREAM_DESTROYED,c=_.ERR_STREAM_NULL_VALUES,S=_.ERR_STREAM_WRITE_AFTER_END,R=_.ERR_UNKNOWN_ENCODING,w=n.errorOrDestroy;J(C,N);function M(){}function A(i,t,u){m=m||$(),i=i||{},typeof u!="boolean"&&(u=t instanceof m),this.objectMode=!!i.objectMode,u&&(this.objectMode=this.objectMode||!!i.writableObjectMode),this.highWaterMark=g(this,i,"writableHighWaterMark",u),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var T=i.decodeStrings===!1;this.decodeStrings=!T,this.defaultEncoding=i.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(q){oe(t,q)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=i.emitClose!==!1,this.autoDestroy=!!i.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new E(this)}A.prototype.getBuffer=function(){for(var t=this.bufferedRequest,u=[];t;)u.push(t),t=t.next;return u},function(){try{Object.defineProperty(A.prototype,"buffer",{get:b.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}}();var W;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(W=Function.prototype[Symbol.hasInstance],Object.defineProperty(C,Symbol.hasInstance,{value:function(t){return W.call(this,t)?!0:this!==C?!1:t&&t._writableState instanceof A}})):W=function(t){return t instanceof this};function C(i){m=m||$();var t=this instanceof m;if(!t&&!W.call(C,this))return new C(i);this._writableState=new A(i,this,t),this.writable=!0,i&&(typeof i.write=="function"&&(this._write=i.write),typeof i.writev=="function"&&(this._writev=i.writev),typeof i.destroy=="function"&&(this._destroy=i.destroy),typeof i.final=="function"&&(this._final=i.final)),N.call(this)}C.prototype.pipe=function(){w(this,new v)};function L(i,t){var u=new S;w(i,u),j.nextTick(t,u)}function x(i,t,u,T){var q;return u===null?q=new c:typeof u!="string"&&!t.objectMode&&(q=new h("chunk",["string","Buffer"],u)),q?(w(i,q),j.nextTick(T,q),!1):!0}C.prototype.write=function(i,t,u){var T=this._writableState,q=!1,e=!T.objectMode&&a(i);return e&&!P.isBuffer(i)&&(i=d(i)),typeof t=="function"&&(u=t,t=null),e?t="buffer":t||(t=T.defaultEncoding),typeof u!="function"&&(u=M),T.ending?L(this,u):(e||x(this,T,i,u))&&(T.pendingcb++,q=ae(this,T,e,i,t,u)),q},C.prototype.cork=function(){this._writableState.corked++},C.prototype.uncork=function(){var i=this._writableState;i.corked&&(i.corked--,!i.writing&&!i.corked&&!i.bufferProcessing&&i.bufferedRequest&&G(this,i))},C.prototype.setDefaultEncoding=function(t){if(typeof t=="string"&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new R(t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(C.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}});function z(i,t,u){return!i.objectMode&&i.decodeStrings!==!1&&typeof t=="string"&&(t=P.from(t,u)),t}Object.defineProperty(C.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function ae(i,t,u,T,q,e){if(!u){var r=z(t,T,q);T!==r&&(u=!0,q="buffer",T=r)}var f=t.objectMode?1:T.length;t.length+=f;var y=t.length<t.highWaterMark;if(y||(t.needDrain=!0),t.writing||t.corked){var k=t.lastBufferedRequest;t.lastBufferedRequest={chunk:T,encoding:q,isBuf:u,callback:e,next:null},k?k.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else H(i,t,!1,f,T,q,e);return y}function H(i,t,u,T,q,e,r){t.writelen=T,t.writecb=r,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new s("write")):u?i._writev(q,t.onwrite):i._write(q,e,t.onwrite),t.sync=!1}function fe(i,t,u,T,q){--t.pendingcb,u?(j.nextTick(q,T),j.nextTick(F,i,t),i._writableState.errorEmitted=!0,w(i,T)):(q(T),i._writableState.errorEmitted=!0,w(i,T),F(i,t))}function Z(i){i.writing=!1,i.writecb=null,i.length-=i.writelen,i.writelen=0}function oe(i,t){var u=i._writableState,T=u.sync,q=u.writecb;if(typeof q!="function")throw new p;if(Z(u),t)fe(i,u,T,t,q);else{var e=re(u)||i.destroyed;!e&&!u.corked&&!u.bufferProcessing&&u.bufferedRequest&&G(i,u),T?j.nextTick(U,i,u,e,q):U(i,u,e,q)}}function U(i,t,u,T){u||ee(i,t),t.pendingcb--,T(),F(i,t)}function ee(i,t){t.length===0&&t.needDrain&&(t.needDrain=!1,i.emit("drain"))}function G(i,t){t.bufferProcessing=!0;var u=t.bufferedRequest;if(i._writev&&u&&u.next){var T=t.bufferedRequestCount,q=new Array(T),e=t.corkedRequestsFree;e.entry=u;for(var r=0,f=!0;u;)q[r]=u,u.isBuf||(f=!1),u=u.next,r+=1;q.allBuffers=f,H(i,t,!0,t.length,q,"",e.finish),t.pendingcb++,t.lastBufferedRequest=null,e.next?(t.corkedRequestsFree=e.next,e.next=null):t.corkedRequestsFree=new E(t),t.bufferedRequestCount=0}else{for(;u;){var y=u.chunk,k=u.encoding,D=u.callback,I=t.objectMode?1:y.length;if(H(i,t,!1,I,y,k,D),u=u.next,t.bufferedRequestCount--,t.writing)break}u===null&&(t.lastBufferedRequest=null)}t.bufferedRequest=u,t.bufferProcessing=!1}C.prototype._write=function(i,t,u){u(new O("_write()"))},C.prototype._writev=null,C.prototype.end=function(i,t,u){var T=this._writableState;return typeof i=="function"?(u=i,i=null,t=null):typeof t=="function"&&(u=t,t=null),i!=null&&this.write(i,t),T.corked&&(T.corked=1,this.uncork()),T.ending||ue(this,T,u),this},Object.defineProperty(C.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function re(i){return i.ending&&i.length===0&&i.bufferedRequest===null&&!i.finished&&!i.writing}function le(i,t){i._final(function(u){t.pendingcb--,u&&w(i,u),t.prefinished=!0,i.emit("prefinish"),F(i,t)})}function te(i,t){!t.prefinished&&!t.finalCalled&&(typeof i._final=="function"&&!t.destroyed?(t.pendingcb++,t.finalCalled=!0,j.nextTick(le,i,t)):(t.prefinished=!0,i.emit("prefinish")))}function F(i,t){var u=re(t);if(u&&(te(i,t),t.pendingcb===0&&(t.finished=!0,i.emit("finish"),t.autoDestroy))){var T=i._readableState;(!T||T.autoDestroy&&T.endEmitted)&&i.destroy()}return u}function ue(i,t,u){t.ending=!0,F(i,t),u&&(t.finished?j.nextTick(u):i.once("finish",u)),t.ended=!0,i.writable=!1}function se(i,t,u){var T=i.entry;for(i.entry=null;T;){var q=T.callback;t.pendingcb--,q(u),T=T.next}t.corkedRequestsFree.next=i}return Object.defineProperty(C.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState===void 0?!1:this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),C.prototype.destroy=n.destroy,C.prototype._undestroy=n.undestroy,C.prototype._destroy=function(i,t){t(i)},ve}var we,Ue;function $(){if(Ue)return we;Ue=1;var E=Object.keys||function(o){var g=[];for(var _ in o)g.push(_);return g};we=d;var m=er(),b=Ze();J(d,m);for(var N=E(b.prototype),P=0;P<N.length;P++){var l=N[P];d.prototype[l]||(d.prototype[l]=b.prototype[l])}function d(o){if(!(this instanceof d))return new d(o);m.call(this,o),b.call(this,o),this.allowHalfOpen=!0,o&&(o.readable===!1&&(this.readable=!1),o.writable===!1&&(this.writable=!1),o.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once("end",a)))}Object.defineProperty(d.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(d.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(d.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function a(){this._writableState.ended||j.nextTick(n,this)}function n(o){o.end()}return Object.defineProperty(d.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(g){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=g,this._writableState.destroyed=g)}}),we}var Re,Fe;function Pe(){if(Fe)return Re;Fe=1;var E=X().codes.ERR_STREAM_PREMATURE_CLOSE;function m(l){var d=!1;return function(){if(!d){d=!0;for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];l.apply(this,n)}}}function b(){}function N(l){return l.setHeader&&typeof l.abort=="function"}function P(l,d,a){if(typeof d=="function")return P(l,null,d);d||(d={}),a=m(a||b);var n=d.readable||d.readable!==!1&&l.readable,o=d.writable||d.writable!==!1&&l.writable,g=function(){l.writable||h()},_=l._writableState&&l._writableState.finished,h=function(){o=!1,_=!0,n||a.call(l)},O=l._readableState&&l._readableState.endEmitted,p=function(){n=!1,O=!0,o||a.call(l)},v=function(R){a.call(l,R)},s=function(){var R;if(n&&!O)return(!l._readableState||!l._readableState.ended)&&(R=new E),a.call(l,R);if(o&&!_)return(!l._writableState||!l._writableState.ended)&&(R=new E),a.call(l,R)},c=function(){l.req.on("finish",h)};return N(l)?(l.on("complete",h),l.on("abort",s),l.req?c():l.on("request",c)):o&&!l._writableState&&(l.on("end",g),l.on("close",g)),l.on("end",p),l.on("finish",h),d.error!==!1&&l.on("error",v),l.on("close",s),function(){l.removeListener("complete",h),l.removeListener("abort",s),l.removeListener("request",c),l.req&&l.req.removeListener("finish",h),l.removeListener("end",g),l.removeListener("close",g),l.removeListener("finish",h),l.removeListener("end",p),l.removeListener("error",v),l.removeListener("close",s)}}return Re=P,Re}var Ee,He;function ar(){if(He)return Ee;He=1;var E;function m(R,w,M){return w=b(w),w in R?Object.defineProperty(R,w,{value:M,enumerable:!0,configurable:!0,writable:!0}):R[w]=M,R}function b(R){var w=N(R,"string");return typeof w=="symbol"?w:String(w)}function N(R,w){if(typeof R!="object"||R===null)return R;var M=R[Symbol.toPrimitive];if(M!==void 0){var A=M.call(R,w||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(w==="string"?String:Number)(R)}var P=Pe(),l=Symbol("lastResolve"),d=Symbol("lastReject"),a=Symbol("error"),n=Symbol("ended"),o=Symbol("lastPromise"),g=Symbol("handlePromise"),_=Symbol("stream");function h(R,w){return{value:R,done:w}}function O(R){var w=R[l];if(w!==null){var M=R[_].read();M!==null&&(R[o]=null,R[l]=null,R[d]=null,w(h(M,!1)))}}function p(R){j.nextTick(O,R)}function v(R,w){return function(M,A){R.then(function(){if(w[n]){M(h(void 0,!0));return}w[g](M,A)},A)}}var s=Object.getPrototypeOf(function(){}),c=Object.setPrototypeOf((E={get stream(){return this[_]},next:function(){var w=this,M=this[a];if(M!==null)return Promise.reject(M);if(this[n])return Promise.resolve(h(void 0,!0));if(this[_].destroyed)return new Promise(function(L,x){j.nextTick(function(){w[a]?x(w[a]):L(h(void 0,!0))})});var A=this[o],W;if(A)W=new Promise(v(A,this));else{var C=this[_].read();if(C!==null)return Promise.resolve(h(C,!1));W=new Promise(this[g])}return this[o]=W,W}},m(E,Symbol.asyncIterator,function(){return this}),m(E,"return",function(){var w=this;return new Promise(function(M,A){w[_].destroy(null,function(W){if(W){A(W);return}M(h(void 0,!0))})})}),E),s),S=function(w){var M,A=Object.create(c,(M={},m(M,_,{value:w,writable:!0}),m(M,l,{value:null,writable:!0}),m(M,d,{value:null,writable:!0}),m(M,a,{value:null,writable:!0}),m(M,n,{value:w._readableState.endEmitted,writable:!0}),m(M,g,{value:function(C,L){var x=A[_].read();x?(A[o]=null,A[l]=null,A[d]=null,C(h(x,!1))):(A[l]=C,A[d]=L)},writable:!0}),M));return A[o]=null,P(w,function(W){if(W&&W.code!=="ERR_STREAM_PREMATURE_CLOSE"){var C=A[d];C!==null&&(A[o]=null,A[l]=null,A[d]=null,C(W)),A[a]=W;return}var L=A[l];L!==null&&(A[o]=null,A[l]=null,A[d]=null,L(h(void 0,!0))),A[n]=!0}),w.on("readable",p.bind(null,A)),A};return Ee=S,Ee}var Se,Ge;function fr(){return Ge||(Ge=1,Se=function(){throw new Error("Readable.from is not available in the browser")}),Se}var me,Ve;function er(){if(Ve)return me;Ve=1,me=L;var E;L.ReadableState=C,Ae.EventEmitter;var m=function(r,f){return r.listeners(f).length},b=Xe(),N=Le.Buffer,P=(typeof ne<"u"?ne:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function l(e){return N.from(e)}function d(e){return N.isBuffer(e)||e instanceof P}var a=Je,n;a&&a.debuglog?n=a.debuglog("stream"):n=function(){};var o=nr(),g=ze(),_=Qe(),h=_.getHighWaterMark,O=X().codes,p=O.ERR_INVALID_ARG_TYPE,v=O.ERR_STREAM_PUSH_AFTER_EOF,s=O.ERR_METHOD_NOT_IMPLEMENTED,c=O.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,S,R,w;J(L,b);var M=g.errorOrDestroy,A=["error","close","destroy","pause","resume"];function W(e,r,f){if(typeof e.prependListener=="function")return e.prependListener(r,f);!e._events||!e._events[r]?e.on(r,f):Array.isArray(e._events[r])?e._events[r].unshift(f):e._events[r]=[f,e._events[r]]}function C(e,r,f){E=E||$(),e=e||{},typeof f!="boolean"&&(f=r instanceof E),this.objectMode=!!e.objectMode,f&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=h(this,e,"readableHighWaterMark",f),this.buffer=new o,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=e.emitClose!==!1,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(S||(S=Ce().StringDecoder),this.decoder=new S(e.encoding),this.encoding=e.encoding)}function L(e){if(E=E||$(),!(this instanceof L))return new L(e);var r=this instanceof E;this._readableState=new C(e,this,r),this.readable=!0,e&&(typeof e.read=="function"&&(this._read=e.read),typeof e.destroy=="function"&&(this._destroy=e.destroy)),b.call(this)}Object.defineProperty(L.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0?!1:this._readableState.destroyed},set:function(r){this._readableState&&(this._readableState.destroyed=r)}}),L.prototype.destroy=g.destroy,L.prototype._undestroy=g.undestroy,L.prototype._destroy=function(e,r){r(e)},L.prototype.push=function(e,r){var f=this._readableState,y;return f.objectMode?y=!0:typeof e=="string"&&(r=r||f.defaultEncoding,r!==f.encoding&&(e=N.from(e,r),r=""),y=!0),x(this,e,r,!1,y)},L.prototype.unshift=function(e){return x(this,e,null,!0,!1)};function x(e,r,f,y,k){n("readableAddChunk",r);var D=e._readableState;if(r===null)D.reading=!1,oe(e,D);else{var I;if(k||(I=ae(D,r)),I)M(e,I);else if(D.objectMode||r&&r.length>0)if(typeof r!="string"&&!D.objectMode&&Object.getPrototypeOf(r)!==N.prototype&&(r=l(r)),y)D.endEmitted?M(e,new c):z(e,D,r,!0);else if(D.ended)M(e,new v);else{if(D.destroyed)return!1;D.reading=!1,D.decoder&&!f?(r=D.decoder.write(r),D.objectMode||r.length!==0?z(e,D,r,!1):G(e,D)):z(e,D,r,!1)}else y||(D.reading=!1,G(e,D))}return!D.ended&&(D.length<D.highWaterMark||D.length===0)}function z(e,r,f,y){r.flowing&&r.length===0&&!r.sync?(r.awaitDrain=0,e.emit("data",f)):(r.length+=r.objectMode?1:f.length,y?r.buffer.unshift(f):r.buffer.push(f),r.needReadable&&U(e)),G(e,r)}function ae(e,r){var f;return!d(r)&&typeof r!="string"&&r!==void 0&&!e.objectMode&&(f=new p("chunk",["string","Buffer","Uint8Array"],r)),f}L.prototype.isPaused=function(){return this._readableState.flowing===!1},L.prototype.setEncoding=function(e){S||(S=Ce().StringDecoder);var r=new S(e);this._readableState.decoder=r,this._readableState.encoding=this._readableState.decoder.encoding;for(var f=this._readableState.buffer.head,y="";f!==null;)y+=r.write(f.data),f=f.next;return this._readableState.buffer.clear(),y!==""&&this._readableState.buffer.push(y),this._readableState.length=y.length,this};var H=1073741824;function fe(e){return e>=H?e=H:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function Z(e,r){return e<=0||r.length===0&&r.ended?0:r.objectMode?1:e!==e?r.flowing&&r.length?r.buffer.head.data.length:r.length:(e>r.highWaterMark&&(r.highWaterMark=fe(e)),e<=r.length?e:r.ended?r.length:(r.needReadable=!0,0))}L.prototype.read=function(e){n("read",e),e=parseInt(e,10);var r=this._readableState,f=e;if(e!==0&&(r.emittedReadable=!1),e===0&&r.needReadable&&((r.highWaterMark!==0?r.length>=r.highWaterMark:r.length>0)||r.ended))return n("read: emitReadable",r.length,r.ended),r.length===0&&r.ended?u(this):U(this),null;if(e=Z(e,r),e===0&&r.ended)return r.length===0&&u(this),null;var y=r.needReadable;n("need readable",y),(r.length===0||r.length-e<r.highWaterMark)&&(y=!0,n("length less than watermark",y)),r.ended||r.reading?(y=!1,n("reading or ended",y)):y&&(n("do read"),r.reading=!0,r.sync=!0,r.length===0&&(r.needReadable=!0),this._read(r.highWaterMark),r.sync=!1,r.reading||(e=Z(f,r)));var k;return e>0?k=t(e,r):k=null,k===null?(r.needReadable=r.length<=r.highWaterMark,e=0):(r.length-=e,r.awaitDrain=0),r.length===0&&(r.ended||(r.needReadable=!0),f!==e&&r.ended&&u(this)),k!==null&&this.emit("data",k),k};function oe(e,r){if(n("onEofChunk"),!r.ended){if(r.decoder){var f=r.decoder.end();f&&f.length&&(r.buffer.push(f),r.length+=r.objectMode?1:f.length)}r.ended=!0,r.sync?U(e):(r.needReadable=!1,r.emittedReadable||(r.emittedReadable=!0,ee(e)))}}function U(e){var r=e._readableState;n("emitReadable",r.needReadable,r.emittedReadable),r.needReadable=!1,r.emittedReadable||(n("emitReadable",r.flowing),r.emittedReadable=!0,j.nextTick(ee,e))}function ee(e){var r=e._readableState;n("emitReadable_",r.destroyed,r.length,r.ended),!r.destroyed&&(r.length||r.ended)&&(e.emit("readable"),r.emittedReadable=!1),r.needReadable=!r.flowing&&!r.ended&&r.length<=r.highWaterMark,i(e)}function G(e,r){r.readingMore||(r.readingMore=!0,j.nextTick(re,e,r))}function re(e,r){for(;!r.reading&&!r.ended&&(r.length<r.highWaterMark||r.flowing&&r.length===0);){var f=r.length;if(n("maybeReadMore read 0"),e.read(0),f===r.length)break}r.readingMore=!1}L.prototype._read=function(e){M(this,new s("_read()"))},L.prototype.pipe=function(e,r){var f=this,y=this._readableState;switch(y.pipesCount){case 0:y.pipes=e;break;case 1:y.pipes=[y.pipes,e];break;default:y.pipes.push(e);break}y.pipesCount+=1,n("pipe count=%d opts=%j",y.pipesCount,r);var k=(!r||r.end!==!1)&&e!==j.stdout&&e!==j.stderr,D=k?V:Q;y.endEmitted?j.nextTick(D):f.once("end",D),e.on("unpipe",I);function I(K,Y){n("onunpipe"),K===f&&Y&&Y.hasUnpiped===!1&&(Y.hasUnpiped=!0,tr())}function V(){n("onend"),e.end()}var ie=le(f);e.on("drain",ie);var Ne=!1;function tr(){n("cleanup"),e.removeListener("close",he),e.removeListener("finish",ce),e.removeListener("drain",ie),e.removeListener("error",de),e.removeListener("unpipe",I),f.removeListener("end",V),f.removeListener("end",Q),f.removeListener("data",qe),Ne=!0,y.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&ie()}f.on("data",qe);function qe(K){n("ondata");var Y=e.write(K);n("dest.write",Y),Y===!1&&((y.pipesCount===1&&y.pipes===e||y.pipesCount>1&&q(y.pipes,e)!==-1)&&!Ne&&(n("false write response, pause",y.awaitDrain),y.awaitDrain++),f.pause())}function de(K){n("onerror",K),Q(),e.removeListener("error",de),m(e,"error")===0&&M(e,K)}W(e,"error",de);function he(){e.removeListener("finish",ce),Q()}e.once("close",he);function ce(){n("onfinish"),e.removeListener("close",he),Q()}e.once("finish",ce);function Q(){n("unpipe"),f.unpipe(e)}return e.emit("pipe",f),y.flowing||(n("pipe resume"),f.resume()),e};function le(e){return function(){var f=e._readableState;n("pipeOnDrain",f.awaitDrain),f.awaitDrain&&f.awaitDrain--,f.awaitDrain===0&&m(e,"data")&&(f.flowing=!0,i(e))}}L.prototype.unpipe=function(e){var r=this._readableState,f={hasUnpiped:!1};if(r.pipesCount===0)return this;if(r.pipesCount===1)return e&&e!==r.pipes?this:(e||(e=r.pipes),r.pipes=null,r.pipesCount=0,r.flowing=!1,e&&e.emit("unpipe",this,f),this);if(!e){var y=r.pipes,k=r.pipesCount;r.pipes=null,r.pipesCount=0,r.flowing=!1;for(var D=0;D<k;D++)y[D].emit("unpipe",this,{hasUnpiped:!1});return this}var I=q(r.pipes,e);return I===-1?this:(r.pipes.splice(I,1),r.pipesCount-=1,r.pipesCount===1&&(r.pipes=r.pipes[0]),e.emit("unpipe",this,f),this)},L.prototype.on=function(e,r){var f=b.prototype.on.call(this,e,r),y=this._readableState;return e==="data"?(y.readableListening=this.listenerCount("readable")>0,y.flowing!==!1&&this.resume()):e==="readable"&&!y.endEmitted&&!y.readableListening&&(y.readableListening=y.needReadable=!0,y.flowing=!1,y.emittedReadable=!1,n("on readable",y.length,y.reading),y.length?U(this):y.reading||j.nextTick(F,this)),f},L.prototype.addListener=L.prototype.on,L.prototype.removeListener=function(e,r){var f=b.prototype.removeListener.call(this,e,r);return e==="readable"&&j.nextTick(te,this),f},L.prototype.removeAllListeners=function(e){var r=b.prototype.removeAllListeners.apply(this,arguments);return(e==="readable"||e===void 0)&&j.nextTick(te,this),r};function te(e){var r=e._readableState;r.readableListening=e.listenerCount("readable")>0,r.resumeScheduled&&!r.paused?r.flowing=!0:e.listenerCount("data")>0&&e.resume()}function F(e){n("readable nexttick read 0"),e.read(0)}L.prototype.resume=function(){var e=this._readableState;return e.flowing||(n("resume"),e.flowing=!e.readableListening,ue(this,e)),e.paused=!1,this};function ue(e,r){r.resumeScheduled||(r.resumeScheduled=!0,j.nextTick(se,e,r))}function se(e,r){n("resume",r.reading),r.reading||e.read(0),r.resumeScheduled=!1,e.emit("resume"),i(e),r.flowing&&!r.reading&&e.read(0)}L.prototype.pause=function(){return n("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(n("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this};function i(e){var r=e._readableState;for(n("flow",r.flowing);r.flowing&&e.read()!==null;);}L.prototype.wrap=function(e){var r=this,f=this._readableState,y=!1;e.on("end",function(){if(n("wrapped end"),f.decoder&&!f.ended){var I=f.decoder.end();I&&I.length&&r.push(I)}r.push(null)}),e.on("data",function(I){if(n("wrapped data"),f.decoder&&(I=f.decoder.write(I)),!(f.objectMode&&I==null)&&!(!f.objectMode&&(!I||!I.length))){var V=r.push(I);V||(y=!0,e.pause())}});for(var k in e)this[k]===void 0&&typeof e[k]=="function"&&(this[k]=function(V){return function(){return e[V].apply(e,arguments)}}(k));for(var D=0;D<A.length;D++)e.on(A[D],this.emit.bind(this,A[D]));return this._read=function(I){n("wrapped _read",I),y&&(y=!1,e.resume())},this},typeof Symbol=="function"&&(L.prototype[Symbol.asyncIterator]=function(){return R===void 0&&(R=ar()),R(this)}),Object.defineProperty(L.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(L.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(L.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(r){this._readableState&&(this._readableState.flowing=r)}}),L._fromList=t,Object.defineProperty(L.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}});function t(e,r){if(r.length===0)return null;var f;return r.objectMode?f=r.buffer.shift():!e||e>=r.length?(r.decoder?f=r.buffer.join(""):r.buffer.length===1?f=r.buffer.first():f=r.buffer.concat(r.length),r.buffer.clear()):f=r.buffer.consume(e,r.decoder),f}function u(e){var r=e._readableState;n("endReadable",r.endEmitted),r.endEmitted||(r.ended=!0,j.nextTick(T,r,e))}function T(e,r){if(n("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&e.length===0&&(e.endEmitted=!0,r.readable=!1,r.emit("end"),e.autoDestroy)){var f=r._writableState;(!f||f.autoDestroy&&f.finished)&&r.destroy()}}typeof Symbol=="function"&&(L.from=function(e,r){return w===void 0&&(w=fr()),w(L,e,r)});function q(e,r){for(var f=0,y=e.length;f<y;f++)if(e[f]===r)return f;return-1}return me}var Te,Ke;function rr(){if(Ke)return Te;Ke=1,Te=a;var E=X().codes,m=E.ERR_METHOD_NOT_IMPLEMENTED,b=E.ERR_MULTIPLE_CALLBACK,N=E.ERR_TRANSFORM_ALREADY_TRANSFORMING,P=E.ERR_TRANSFORM_WITH_LENGTH_0,l=$();J(a,l);function d(g,_){var h=this._transformState;h.transforming=!1;var O=h.writecb;if(O===null)return this.emit("error",new b);h.writechunk=null,h.writecb=null,_!=null&&this.push(_),O(g);var p=this._readableState;p.reading=!1,(p.needReadable||p.length<p.highWaterMark)&&this._read(p.highWaterMark)}function a(g){if(!(this instanceof a))return new a(g);l.call(this,g),this._transformState={afterTransform:d.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,g&&(typeof g.transform=="function"&&(this._transform=g.transform),typeof g.flush=="function"&&(this._flush=g.flush)),this.on("prefinish",n)}function n(){var g=this;typeof this._flush=="function"&&!this._readableState.destroyed?this._flush(function(_,h){o(g,_,h)}):o(this,null,null)}a.prototype.push=function(g,_){return this._transformState.needTransform=!1,l.prototype.push.call(this,g,_)},a.prototype._transform=function(g,_,h){h(new m("_transform()"))},a.prototype._write=function(g,_,h){var O=this._transformState;if(O.writecb=h,O.writechunk=g,O.writeencoding=_,!O.transforming){var p=this._readableState;(O.needTransform||p.needReadable||p.length<p.highWaterMark)&&this._read(p.highWaterMark)}},a.prototype._read=function(g){var _=this._transformState;_.writechunk!==null&&!_.transforming?(_.transforming=!0,this._transform(_.writechunk,_.writeencoding,_.afterTransform)):_.needTransform=!0},a.prototype._destroy=function(g,_){l.prototype._destroy.call(this,g,function(h){_(h)})};function o(g,_,h){if(_)return g.emit("error",_);if(h!=null&&g.push(h),g._writableState.length)throw new P;if(g._transformState.transforming)throw new N;return g.push(null)}return Te}var Me,Ye;function or(){if(Ye)return Me;Ye=1,Me=m;var E=rr();J(m,E);function m(b){if(!(this instanceof m))return new m(b);E.call(this,b)}return m.prototype._transform=function(b,N,P){P(null,b)},Me}var Oe,$e;function lr(){if($e)return Oe;$e=1;var E;function m(h){var O=!1;return function(){O||(O=!0,h.apply(void 0,arguments))}}var b=X().codes,N=b.ERR_MISSING_ARGS,P=b.ERR_STREAM_DESTROYED;function l(h){if(h)throw h}function d(h){return h.setHeader&&typeof h.abort=="function"}function a(h,O,p,v){v=m(v);var s=!1;h.on("close",function(){s=!0}),E===void 0&&(E=Pe()),E(h,{readable:O,writable:p},function(S){if(S)return v(S);s=!0,v()});var c=!1;return function(S){if(!s&&!c){if(c=!0,d(h))return h.abort();if(typeof h.destroy=="function")return h.destroy();v(S||new P("pipe"))}}}function n(h){h()}function o(h,O){return h.pipe(O)}function g(h){return!h.length||typeof h[h.length-1]!="function"?l:h.pop()}function _(){for(var h=arguments.length,O=new Array(h),p=0;p<h;p++)O[p]=arguments[p];var v=g(O);if(Array.isArray(O[0])&&(O=O[0]),O.length<2)throw new N("streams");var s,c=O.map(function(S,R){var w=R<O.length-1,M=R>0;return a(S,w,M,function(A){s||(s=A),A&&c.forEach(n),!w&&(c.forEach(n),v(s))})});return O.reduce(o)}return Oe=_,Oe}var hr=B,De=Ae.EventEmitter,ur=J;ur(B,De);B.Readable=er();B.Writable=Ze();B.Duplex=$();B.Transform=rr();B.PassThrough=or();B.finished=Pe();B.pipeline=lr();B.Stream=B;function B(){De.call(this)}B.prototype.pipe=function(E,m){var b=this;function N(g){E.writable&&E.write(g)===!1&&b.pause&&b.pause()}b.on("data",N);function P(){b.readable&&b.resume&&b.resume()}E.on("drain",P),!E._isStdio&&(!m||m.end!==!1)&&(b.on("end",d),b.on("close",a));var l=!1;function d(){l||(l=!0,E.end())}function a(){l||(l=!0,typeof E.destroy=="function"&&E.destroy())}function n(g){if(o(),De.listenerCount(this,"error")===0)throw g}b.on("error",n),E.on("error",n);function o(){b.removeListener("data",N),E.removeListener("drain",P),b.removeListener("end",d),b.removeListener("close",a),b.removeListener("error",n),E.removeListener("error",n),b.removeListener("end",o),b.removeListener("close",o),E.removeListener("close",o)}return b.on("end",o),b.on("close",o),E.on("close",o),E.emit("pipe",b),E};export{Ze as a,$ as b,rr as c,or as d,Pe as e,lr as f,er as r,hr as s};