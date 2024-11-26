import{L as wt}from"./tool-a5cfd998.js";import{j as X}from"./index-eb4757a5.js";const{BigInteger:D}=X;function pt(e){let t=e.toString(16);if(t[0]!=="-")t.length%2===1?t="0"+t:t.match(/^[0-7]/)||(t="00"+t);else{t=t.substr(1);let n=t.length;n%2===1?n+=1:t.match(/^[0-7]/)||(n+=2);let s="";for(let r=0;r<n;r++)s+="f";s=new D(s,16),t=s.xor(e).add(D.ONE),t=t.toString(16).replace(/^-/,"")}return t}class lt{constructor(){this.tlv=null,this.t="00",this.l="00",this.v=""}getEncodedHex(){return this.tlv||(this.v=this.getValue(),this.l=this.getLength(),this.tlv=this.t+this.l+this.v),this.tlv}getLength(){const t=this.v.length/2;let n=t.toString(16);return n.length%2===1&&(n="0"+n),t<128?n:(128+n.length/2).toString(16)+n}getValue(){return""}}class nt extends lt{constructor(t){super(),this.t="02",t&&(this.v=pt(t))}getValue(){return this.v}}class vt extends lt{constructor(t){super(),this.t="30",this.asn1Array=t}getValue(){return this.v=this.asn1Array.map(t=>t.getEncodedHex()).join(""),this.v}}function ut(e,t){return+e[t+2]<8?1:+e.substr(t+2,2)&127+1}function st(e,t){const n=ut(e,t),s=e.substr(t+2,n*2);return s?(+s[0]<8?new D(s,16):new D(s.substr(2),16)).intValue():-1}function M(e,t){const n=ut(e,t);return t+(n+1)*2}var It={encodeDer(e,t){const n=new nt(e),s=new nt(t);return new vt([n,s]).getEncodedHex()},decodeDer(e){const t=M(e,0),n=M(e,t),s=st(e,t),r=e.substr(n,s*2),o=n+r.length,x=M(e,o),h=st(e,o),i=e.substr(x,h*2),g=new D(r,16),c=new D(i,16);return{r:g,s:c}}};const{BigInteger:y}=X,rt=new y("2"),ot=new y("3");class E{constructor(t,n){this.x=n,this.q=t}equals(t){return t===this?!0:this.q.equals(t.q)&&this.x.equals(t.x)}toBigInteger(){return this.x}negate(){return new E(this.q,this.x.negate().mod(this.q))}add(t){return new E(this.q,this.x.add(t.toBigInteger()).mod(this.q))}subtract(t){return new E(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))}multiply(t){return new E(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))}divide(t){return new E(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))}square(){return new E(this.q,this.x.square().mod(this.q))}}class T{constructor(t,n,s,r){this.curve=t,this.x=n,this.y=s,this.z=r??y.ONE,this.zinv=null}getX(){return this.zinv===null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}getY(){return this.zinv===null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}equals(t){return t===this?!0:this.isInfinity()?t.isInfinity():t.isInfinity()?this.isInfinity():t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(y.ZERO)?t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(y.ZERO):!1}isInfinity(){return this.x===null&&this.y===null?!0:this.z.equals(y.ZERO)&&!this.y.toBigInteger().equals(y.ZERO)}negate(){return new T(this.curve,this.x,this.y.negate(),this.z)}add(t){if(this.isInfinity())return t;if(t.isInfinity())return this;const n=this.x.toBigInteger(),s=this.y.toBigInteger(),r=this.z,o=t.x.toBigInteger(),x=t.y.toBigInteger(),h=t.z,i=this.curve.q,g=n.multiply(h).mod(i),c=o.multiply(r).mod(i),f=g.subtract(c),u=s.multiply(h).mod(i),d=x.multiply(r).mod(i),a=u.subtract(d);if(y.ZERO.equals(f))return y.ZERO.equals(a)?this.twice():this.curve.infinity;const m=g.add(c),b=r.multiply(h).mod(i),w=f.square().mod(i),v=f.multiply(w).mod(i),P=b.multiply(a.square()).subtract(m.multiply(w)).mod(i),C=f.multiply(P).mod(i),$=a.multiply(w.multiply(g).subtract(P)).subtract(u.multiply(v)).mod(i),U=v.multiply(b).mod(i);return new T(this.curve,this.curve.fromBigInteger(C),this.curve.fromBigInteger($),U)}twice(){if(this.isInfinity())return this;if(!this.y.toBigInteger().signum())return this.curve.infinity;const t=this.x.toBigInteger(),n=this.y.toBigInteger(),s=this.z,r=this.curve.q,o=this.curve.a.toBigInteger(),x=t.square().multiply(ot).add(o.multiply(s.square())).mod(r),h=n.shiftLeft(1).multiply(s).mod(r),i=n.square().mod(r),g=i.multiply(t).multiply(s).mod(r),c=h.square().mod(r),f=x.square().subtract(g.shiftLeft(3)).mod(r),u=h.multiply(f).mod(r),d=x.multiply(g.shiftLeft(2).subtract(f)).subtract(c.shiftLeft(1).multiply(i)).mod(r),a=h.multiply(c).mod(r);return new T(this.curve,this.curve.fromBigInteger(u),this.curve.fromBigInteger(d),a)}multiply(t){if(this.isInfinity())return this;if(!t.signum())return this.curve.infinity;const n=t.multiply(ot),s=this.negate();let r=this;for(let o=n.bitLength()-2;o>0;o--){r=r.twice();const x=n.testBit(o),h=t.testBit(o);x!==h&&(r=r.add(x?this:s))}return r}}let Bt=class{constructor(t,n,s){this.q=t,this.a=this.fromBigInteger(n),this.b=this.fromBigInteger(s),this.infinity=new T(this,null,null)}equals(t){return t===this?!0:this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)}fromBigInteger(t){return new E(this.q,t)}decodePointHex(t){switch(parseInt(t.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:const n=this.fromBigInteger(new y(t.substr(2),16));let s=this.fromBigInteger(n.multiply(n.square()).add(n.multiply(this.a)).add(this.b).toBigInteger().modPow(this.q.divide(new y("4")).add(y.ONE),this.q));return s.toBigInteger().mod(rt).equals(new y(t.substr(0,2),16).subtract(rt))||(s=s.negate()),new T(this,n,s);case 4:case 6:case 7:const r=(t.length-2)/2,o=t.substr(2,r),x=t.substr(r+2,r);return new T(this,this.fromBigInteger(new y(o,16)),this.fromBigInteger(new y(x,16)));default:return null}}};var qt={ECPointFp:T,ECCurveFp:Bt};const{BigInteger:q,SecureRandom:Pt}=X,{ECCurveFp:At}=qt,Et=new Pt,{curve:j,G:Ht,n:it}=at();function Tt(){return j}function at(){const e=new q("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",16),t=new q("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",16),n=new q("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",16),s=new At(e,t,n),r="32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7",o="BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0",x=s.decodePointHex("04"+r+o),h=new q("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",16);return{curve:s,G:x,n:h}}function Ct(e,t,n){const r=(e?new q(e,t,n):new q(it.bitLength(),Et)).mod(it.subtract(q.ONE)).add(q.ONE),o=V(r.toString(16),64),x=Ht.multiply(r),h=V(x.getX().toBigInteger().toString(16),64),i=V(x.getY().toBigInteger().toString(16),64),g="04"+h+i;return{privateKey:o,publicKey:g}}function St(e){if(e.length!==130)throw new Error("Invalid public key to compress");const t=(e.length-2)/2,n=e.substr(2,t),s=new q(e.substr(t+2,t),16);let r="03";return s.mod(new q("2")).equals(q.ZERO)&&(r="02"),r+n}function Rt(e){e=unescape(encodeURIComponent(e));const t=e.length,n=[];for(let r=0;r<t;r++)n[r>>>2]|=(e.charCodeAt(r)&255)<<24-r%4*8;const s=[];for(let r=0;r<t;r++){const o=n[r>>>2]>>>24-r%4*8&255;s.push((o>>>4).toString(16)),s.push((o&15).toString(16))}return s.join("")}function V(e,t){return e.length>=t?e:new Array(t-e.length+1).join("0")+e}function zt(e){return e.map(t=>(t=t.toString(16),t.length===1?"0"+t:t)).join("")}function Ot(e){const t=[];let n=0;for(let s=0;s<e.length*2;s+=2)t[s>>>3]|=parseInt(e[n],10)<<24-s%8*4,n++;try{const s=[];for(let r=0;r<e.length;r++){const o=t[r>>>2]>>>24-r%4*8&255;s.push(String.fromCharCode(o))}return decodeURIComponent(escape(s.join("")))}catch{throw new Error("Malformed UTF-8 data")}}function jt(e){const t=[];let n=e.length;n%2!==0&&(e=V(e,n+1)),n=e.length;for(let s=0;s<n;s+=2)t.push(parseInt(e.substr(s,2),16));return t}function Dt(e){const t=j.decodePointHex(e);if(!t)return!1;const n=t.getX();return t.getY().square().equals(n.multiply(n.square()).add(n.multiply(j.a)).add(j.b))}function Lt(e,t){const n=j.decodePointHex(e);if(!n)return!1;const s=j.decodePointHex(t);return s?n.equals(s):!1}var $t={getGlobalCurve:Tt,generateEcparam:at,generateKeyPairHex:Ct,compressPublicKeyHex:St,utf8ToHex:Rt,leftPad:V,arrayToHex:zt,arrayToUtf8:Ot,hexToArray:jt,verifyPublicKey:Dt,comparePublicKeyHex:Lt};const B=new Uint32Array(68),W=new Uint32Array(64);function I(e,t){const n=t&31;return e<<n|e>>>32-n}function xt(e,t){const n=[];for(let s=e.length-1;s>=0;s--)n[s]=(e[s]^t[s])&255;return n}function Ut(e){return e^I(e,9)^I(e,17)}function Vt(e){return e^I(e,15)^I(e,23)}function K(e){let t=e.length*8,n=t%512;n=n>=448?512-n%448-1:448-n-1;const s=new Array((n-7)/8),r=new Array(8);for(let c=0,f=s.length;c<f;c++)s[c]=0;for(let c=0,f=r.length;c<f;c++)r[c]=0;t=t.toString(2);for(let c=7;c>=0;c--)if(t.length>8){const f=t.length-8;r[c]=parseInt(t.substr(f),2),t=t.substr(0,f)}else t.length>0&&(r[c]=parseInt(t,2),t="");const o=new Uint8Array([...e,128,...s,...r]),x=new DataView(o.buffer,0),h=o.length/64,i=new Uint32Array([1937774191,1226093241,388252375,3666478592,2842636476,372324522,3817729613,2969243214]);for(let c=0;c<h;c++){B.fill(0),W.fill(0);const f=16*c;for(let F=0;F<16;F++)B[F]=x.getUint32((f+F)*4,!1);for(let F=16;F<68;F++)B[F]=Vt(B[F-16]^B[F-9]^I(B[F-3],15))^I(B[F-13],7)^B[F-6];for(let F=0;F<64;F++)W[F]=B[F]^B[F+4];const u=2043430169,d=2055708042;let a=i[0],m=i[1],b=i[2],w=i[3],v=i[4],P=i[5],C=i[6],$=i[7],U,J,_,tt,et;for(let F=0;F<64;F++)et=F>=0&&F<=15?u:d,U=I(I(a,12)+v+I(et,F),7),J=U^I(a,12),_=(F>=0&&F<=15?a^m^b:a&m|a&b|m&b)+w+J+W[F],tt=(F>=0&&F<=15?v^P^C:v&P|~v&C)+$+U+B[F],w=b,b=I(m,9),m=a,a=_,$=C,C=I(P,19),P=v,v=Ut(tt);i[0]^=a,i[1]^=m,i[2]^=b,i[3]^=w,i[4]^=v,i[5]^=P,i[6]^=C,i[7]^=$}const g=[];for(let c=0,f=i.length;c<f;c++){const u=i[c];g.push((u&4278190080)>>>24,(u&16711680)>>>16,(u&65280)>>>8,u&255)}return g}const k=64,ht=new Uint8Array(k),gt=new Uint8Array(k);for(let e=0;e<k;e++)ht[e]=54,gt[e]=92;function kt(e,t){for(t.length>k&&(t=K(t));t.length<k;)t.push(0);const n=xt(t,ht),s=xt(t,gt),r=K([...n,...e]);return K([...s,...r])}var dt={sm3:K,hmac:kt};const{BigInteger:p}=X,{encodeDer:Zt,decodeDer:Yt}=It,l=$t,L=dt.sm3,{G:R,curve:Ft,n:z}=l.generateEcparam(),yt=0;function Gt(e,t,n=1){e=typeof e=="string"?l.hexToArray(l.utf8ToHex(e)):Array.prototype.slice.call(e),t=l.getGlobalCurve().decodePointHex(t);const s=l.generateKeyPairHex(),r=new p(s.privateKey,16);let o=s.publicKey;o.length>128&&(o=o.substr(o.length-128));const x=t.multiply(r),h=l.hexToArray(l.leftPad(x.getX().toBigInteger().toRadix(16),64)),i=l.hexToArray(l.leftPad(x.getY().toBigInteger().toRadix(16),64)),g=l.arrayToHex(L([].concat(h,e,i)));let c=1,f=0,u=[];const d=[].concat(h,i),a=()=>{u=L([...d,c>>24&255,c>>16&255,c>>8&255,c&255]),c++,f=0};a();for(let b=0,w=e.length;b<w;b++)f===u.length&&a(),e[b]^=u[f++]&255;const m=l.arrayToHex(e);return n===yt?o+m+g:o+g+m}function Nt(e,t,n=1,{output:s="string"}={}){t=new p(t,16);let r=e.substr(128,64),o=e.substr(128+64);n===yt&&(r=e.substr(e.length-64),o=e.substr(128,e.length-128-64));const x=l.hexToArray(o),i=l.getGlobalCurve().decodePointHex("04"+e.substr(0,128)).multiply(t),g=l.hexToArray(l.leftPad(i.getX().toBigInteger().toRadix(16),64)),c=l.hexToArray(l.leftPad(i.getY().toBigInteger().toRadix(16),64));let f=1,u=0,d=[];const a=[].concat(g,c),m=()=>{d=L([...a,f>>24&255,f>>16&255,f>>8&255,f&255]),f++,u=0};m();for(let w=0,v=x.length;w<v;w++)u===d.length&&m(),x[w]^=d[u++]&255;return l.arrayToHex(L([].concat(g,x,c)))===r.toLowerCase()?s==="array"?x:l.arrayToUtf8(x):s==="array"?[]:""}function Kt(e,t,{pointPool:n,der:s,hash:r,publicKey:o,userId:x}={}){let h=typeof e=="string"?l.utf8ToHex(e):l.arrayToHex(e);r&&(o=o||Mt(t),h=mt(h,o,x));const i=new p(t,16),g=new p(h,16);let c=null,f=null,u=null;do{do{let d;n&&n.length?d=n.pop():d=bt(),c=d.k,f=g.add(d.x1).mod(z)}while(f.equals(p.ZERO)||f.add(c).equals(z));u=i.add(p.ONE).modInverse(z).multiply(c.subtract(f.multiply(i))).mod(z)}while(u.equals(p.ZERO));return s?Zt(f,u):l.leftPad(f.toString(16),64)+l.leftPad(u.toString(16),64)}function Xt(e,t,n,{der:s,hash:r,userId:o}={}){let x=typeof e=="string"?l.utf8ToHex(e):l.arrayToHex(e);r&&(x=mt(x,n,o));let h,i;if(s){const a=Yt(t);h=a.r,i=a.s}else h=new p(t.substring(0,64),16),i=new p(t.substring(64),16);const g=Ft.decodePointHex(n),c=new p(x,16),f=h.add(i).mod(z);if(f.equals(p.ZERO))return!1;const u=R.multiply(i).add(g.multiply(f)),d=c.add(u.getX().toBigInteger()).mod(z);return h.equals(d)}function mt(e,t,n="1234567812345678"){n=l.utf8ToHex(n);const s=l.leftPad(R.curve.a.toBigInteger().toRadix(16),64),r=l.leftPad(R.curve.b.toBigInteger().toRadix(16),64),o=l.leftPad(R.getX().toBigInteger().toRadix(16),64),x=l.leftPad(R.getY().toBigInteger().toRadix(16),64);let h,i;if(t.length===128)h=t.substr(0,64),i=t.substr(64,64);else{const u=R.curve.decodePointHex(t);h=l.leftPad(u.getX().toBigInteger().toRadix(16),64),i=l.leftPad(u.getY().toBigInteger().toRadix(16),64)}const g=l.hexToArray(n+s+r+o+x+h+i),c=n.length*4;g.unshift(c&255),g.unshift(c>>8&255);const f=L(g);return l.arrayToHex(L(f.concat(l.hexToArray(e))))}function Mt(e){const t=R.multiply(new p(e,16)),n=l.leftPad(t.getX().toBigInteger().toString(16),64),s=l.leftPad(t.getY().toBigInteger().toString(16),64);return"04"+n+s}function bt(){const e=l.generateKeyPairHex(),t=Ft.decodePointHex(e.publicKey);return e.k=new p(e.privateKey,16),e.x1=t.getX().toBigInteger(),e}var Wt={generateKeyPairHex:l.generateKeyPairHex,compressPublicKeyHex:l.compressPublicKeyHex,comparePublicKeyHex:l.comparePublicKeyHex,doEncrypt:Gt,doDecrypt:Nt,doSignature:Kt,doVerifySignature:Xt,getPoint:bt,verifyPublicKey:l.verifyPublicKey};const{sm3:Qt,hmac:Jt}=dt;function _t(e,t){return e.length>=t?e:new Array(t-e.length+1).join("0")+e}function ct(e){return e.map(t=>(t=t.toString(16),t.length===1?"0"+t:t)).join("")}function te(e){const t=[];let n=e.length;n%2!==0&&(e=_t(e,n+1)),n=e.length;for(let s=0;s<n;s+=2)t.push(parseInt(e.substr(s,2),16));return t}function ee(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e.codePointAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>>6),t.push(128|r&63);else if(r<=55295||r>=57344&&r<=65535)t.push(224|r>>>12),t.push(128|r>>>6&63),t.push(128|r&63);else if(r>=65536&&r<=1114111)n++,t.push(240|r>>>18&28),t.push(128|r>>>12&63),t.push(128|r>>>6&63),t.push(128|r&63);else throw t.push(r),new Error("input is not supported")}return t}var ne=function(e,t){if(e=typeof e=="string"?ee(e):Array.prototype.slice.call(e),t){if((t.mode||"hmac")!=="hmac")throw new Error("invalid mode");let s=t.key;if(!s)throw new Error("invalid key");return s=typeof s=="string"?te(s):Array.prototype.slice.call(s),ct(Jt(e,s))}return ct(Qt(e))};const A=0,se=32,S=16,Z=[214,144,233,254,204,225,61,183,22,182,20,194,40,251,44,5,43,103,154,118,42,190,4,195,170,68,19,38,73,134,6,153,156,66,80,244,145,239,152,122,51,84,11,67,237,207,172,98,228,179,28,169,201,8,232,149,128,223,148,250,117,143,63,166,71,7,167,252,243,115,23,186,131,89,60,25,230,133,79,168,104,107,129,178,113,100,218,139,248,235,15,75,112,86,157,53,30,36,14,94,99,88,209,162,37,34,124,59,1,33,120,135,212,0,70,87,159,211,39,82,76,54,2,231,160,196,200,158,234,191,138,210,64,199,56,181,163,247,242,206,249,97,21,161,224,174,93,164,155,52,26,85,173,147,50,48,245,140,177,227,29,246,226,46,130,102,202,96,192,41,35,171,13,83,78,111,213,219,55,69,222,253,142,47,3,255,106,114,109,108,91,81,141,27,175,146,187,221,188,127,17,217,92,65,31,16,90,216,10,193,49,136,165,205,123,189,45,116,208,18,184,229,180,176,137,105,151,74,12,150,119,126,101,185,241,9,197,110,198,132,24,240,125,236,58,220,77,32,121,238,95,62,215,203,57,72],Y=[462357,472066609,943670861,1415275113,1886879365,2358483617,2830087869,3301692121,3773296373,4228057617,404694573,876298825,1347903077,1819507329,2291111581,2762715833,3234320085,3705924337,4177462797,337322537,808926789,1280531041,1752135293,2223739545,2695343797,3166948049,3638552301,4110090761,269950501,741554753,1213159005,1684763257];function Q(e){const t=[];for(let n=0,s=e.length;n<s;n+=2)t.push(parseInt(e.substr(n,2),16));return t}function re(e){return e.map(t=>(t=t.toString(16),t.length===1?"0"+t:t)).join("")}function oe(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e.codePointAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>>6),t.push(128|r&63);else if(r<=55295||r>=57344&&r<=65535)t.push(224|r>>>12),t.push(128|r>>>6&63),t.push(128|r&63);else if(r>=65536&&r<=1114111)n++,t.push(240|r>>>18&28),t.push(128|r>>>12&63),t.push(128|r>>>6&63),t.push(128|r&63);else throw t.push(r),new Error("input is not supported")}return t}function ie(e){const t=[];for(let n=0,s=e.length;n<s;n++)e[n]>=240&&e[n]<=247?(t.push(String.fromCodePoint(((e[n]&7)<<18)+((e[n+1]&63)<<12)+((e[n+2]&63)<<6)+(e[n+3]&63))),n+=3):e[n]>=224&&e[n]<=239?(t.push(String.fromCodePoint(((e[n]&15)<<12)+((e[n+1]&63)<<6)+(e[n+2]&63))),n+=2):e[n]>=192&&e[n]<=223?(t.push(String.fromCodePoint(((e[n]&31)<<6)+(e[n+1]&63))),n++):t.push(String.fromCodePoint(e[n]));return t.join("")}function O(e,t){return e<<t|e>>>32-t}function H(e){return(Z[e>>>24&255]&255)<<24|(Z[e>>>16&255]&255)<<16|(Z[e>>>8&255]&255)<<8|Z[e&255]&255}function G(e){return e^O(e,2)^O(e,10)^O(e,18)^O(e,24)}function N(e){return e^O(e,13)^O(e,23)}function xe(e,t,n){const s=new Array(4),r=new Array(4);for(let o=0;o<4;o++)r[0]=e[4*o]&255,r[1]=e[4*o+1]&255,r[2]=e[4*o+2]&255,r[3]=e[4*o+3]&255,s[o]=r[0]<<24|r[1]<<16|r[2]<<8|r[3];for(let o=0,x;o<32;o+=4)x=s[1]^s[2]^s[3]^n[o+0],s[0]^=G(H(x)),x=s[2]^s[3]^s[0]^n[o+1],s[1]^=G(H(x)),x=s[3]^s[0]^s[1]^n[o+2],s[2]^=G(H(x)),x=s[0]^s[1]^s[2]^n[o+3],s[3]^=G(H(x));for(let o=0;o<16;o+=4)t[o]=s[3-o/4]>>>24&255,t[o+1]=s[3-o/4]>>>16&255,t[o+2]=s[3-o/4]>>>8&255,t[o+3]=s[3-o/4]&255}function ce(e,t,n){const s=new Array(4),r=new Array(4);for(let o=0;o<4;o++)r[0]=e[0+4*o]&255,r[1]=e[1+4*o]&255,r[2]=e[2+4*o]&255,r[3]=e[3+4*o]&255,s[o]=r[0]<<24|r[1]<<16|r[2]<<8|r[3];s[0]^=2746333894,s[1]^=1453994832,s[2]^=1736282519,s[3]^=2993693404;for(let o=0,x;o<32;o+=4)x=s[1]^s[2]^s[3]^Y[o+0],t[o+0]=s[0]^=N(H(x)),x=s[2]^s[3]^s[0]^Y[o+1],t[o+1]=s[1]^=N(H(x)),x=s[3]^s[0]^s[1]^Y[o+2],t[o+2]=s[2]^=N(H(x)),x=s[0]^s[1]^s[2]^Y[o+3],t[o+3]=s[3]^=N(H(x));if(n===A)for(let o=0,x;o<16;o++)x=t[o],t[o]=t[31-o],t[31-o]=x}function ft(e,t,n,{padding:s="pkcs#7",mode:r,iv:o=[],output:x="string"}={}){if(r==="cbc"&&(typeof o=="string"&&(o=Q(o)),o.length!==128/8))throw new Error("iv is invalid");if(typeof t=="string"&&(t=Q(t)),t.length!==128/8)throw new Error("key is invalid");if(typeof e=="string"?n!==A?e=oe(e):e=Q(e):e=[...e],(s==="pkcs#5"||s==="pkcs#7")&&n!==A){const u=S-e.length%S;for(let d=0;d<u;d++)e.push(u)}const h=new Array(se);ce(t,h,n);const i=[];let g=o,c=e.length,f=0;for(;c>=S;){const u=e.slice(f,f+16),d=new Array(16);if(r==="cbc")for(let a=0;a<S;a++)n!==A&&(u[a]^=g[a]);xe(u,d,h);for(let a=0;a<S;a++)r==="cbc"&&n===A&&(d[a]^=g[a]),i[f+a]=d[a];r==="cbc"&&(n!==A?g=d:g=u),c-=S,f+=S}if((s==="pkcs#5"||s==="pkcs#7")&&n===A){const u=i.length,d=i[u-1];for(let a=1;a<=d;a++)if(i[u-a]!==d)throw new Error("padding is invalid");i.splice(u-d,d)}return x!=="array"?n!==A?re(i):ie(i):i}var fe={encrypt(e,t,n){return ft(e,t,1,n)},decrypt(e,t,n){return ft(e,t,0,n)}},le={sm2:Wt,sm3:ne,sm4:fe};const ge=wt(le);export{le as a,ge as s};