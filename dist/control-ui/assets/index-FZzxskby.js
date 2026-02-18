(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const Dn=globalThis,ki=Dn.ShadowRoot&&(Dn.ShadyCSS===void 0||Dn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Si=Symbol(),Ia=new WeakMap;let ur=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==Si)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ki&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Ia.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ia.set(n,t))}return t}toString(){return this.cssText}};const vc=e=>new ur(typeof e=="string"?e:e+"",void 0,Si),mc=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,i,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new ur(n,e,Si)},bc=(e,t)=>{if(ki)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),i=Dn.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,e.appendChild(s)}},Ma=ki?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return vc(n)})(e):e;const{is:yc,defineProperty:xc,getOwnPropertyDescriptor:wc,getOwnPropertyNames:$c,getOwnPropertySymbols:kc,getPrototypeOf:Sc}=Object,Jn=globalThis,Da=Jn.trustedTypes,Ac=Da?Da.emptyScript:"",Cc=Jn.reactiveElementPolyfillSupport,Vt=(e,t)=>e,Bn={toAttribute(e,t){switch(t){case Boolean:e=e?Ac:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ai=(e,t)=>!yc(e,t),Pa={attribute:!0,type:String,converter:Bn,reflect:!1,useDefault:!1,hasChanged:Ai};Symbol.metadata??=Symbol("metadata"),Jn.litPropertyMetadata??=new WeakMap;let Et=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Pa){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,n);i!==void 0&&xc(this.prototype,t,i)}}static getPropertyDescriptor(t,n,s){const{get:i,set:a}=wc(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const l=i?.call(this);a?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pa}static _$Ei(){if(this.hasOwnProperty(Vt("elementProperties")))return;const t=Sc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vt("properties"))){const n=this.properties,s=[...$c(n),...kc(n)];for(const i of s)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)n.unshift(Ma(i))}else t!==void 0&&n.push(Ma(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Bn).toAttribute(n,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,n){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Bn;this._$Em=i;const l=o.fromAttribute(n,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,n,s,i=!1,a){if(t!==void 0){const o=this.constructor;if(i===!1&&(a=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??Ai)(a,n)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:i,wrapped:a},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:o}=a,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Et.elementStyles=[],Et.shadowRootOptions={mode:"open"},Et[Vt("elementProperties")]=new Map,Et[Vt("finalized")]=new Map,Cc?.({ReactiveElement:Et}),(Jn.reactiveElementVersions??=[]).push("2.1.2");const Ci=globalThis,Na=e=>e,Un=Ci.trustedTypes,Fa=Un?Un.createPolicy("lit-html",{createHTML:e=>e}):void 0,gr="$lit$",Qe=`lit$${Math.random().toFixed(9).slice(2)}$`,pr="?"+Qe,Tc=`<${pr}>`,ht=document,Xt=()=>ht.createComment(""),en=e=>e===null||typeof e!="object"&&typeof e!="function",Ti=Array.isArray,_c=e=>Ti(e)||typeof e?.[Symbol.iterator]=="function",As=`[ 	
\f\r]`,Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oa=/-->/g,Ba=/>/g,it=RegExp(`>|${As}(?:([^\\s"'>=/]+)(${As}*=${As}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ua=/'/g,za=/"/g,fr=/^(?:script|style|textarea|title)$/i,hr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),r=hr(1),wn=hr(2),Je=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ha=new WeakMap,pt=ht.createTreeWalker(ht,129);function vr(e,t){if(!Ti(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fa!==void 0?Fa.createHTML(t):t}const Ec=(e,t)=>{const n=e.length-1,s=[];let i,a=t===2?"<svg>":t===3?"<math>":"",o=Ft;for(let l=0;l<n;l++){const c=e[l];let u,g,p=-1,h=0;for(;h<c.length&&(o.lastIndex=h,g=o.exec(c),g!==null);)h=o.lastIndex,o===Ft?g[1]==="!--"?o=Oa:g[1]!==void 0?o=Ba:g[2]!==void 0?(fr.test(g[2])&&(i=RegExp("</"+g[2],"g")),o=it):g[3]!==void 0&&(o=it):o===it?g[0]===">"?(o=i??Ft,p=-1):g[1]===void 0?p=-2:(p=o.lastIndex-g[2].length,u=g[1],o=g[3]===void 0?it:g[3]==='"'?za:Ua):o===za||o===Ua?o=it:o===Oa||o===Ba?o=Ft:(o=it,i=void 0);const d=o===it&&e[l+1].startsWith("/>")?" ":"";a+=o===Ft?c+Tc:p>=0?(s.push(u),c.slice(0,p)+gr+c.slice(p)+Qe+d):c+Qe+(p===-2?l:d)}return[vr(e,a+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class tn{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let a=0,o=0;const l=t.length-1,c=this.parts,[u,g]=Ec(t,n);if(this.el=tn.createElement(u,s),pt.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=pt.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(gr)){const h=g[o++],d=i.getAttribute(p).split(Qe),f=/([.?@])?(.*)/.exec(h);c.push({type:1,index:a,name:f[2],strings:d,ctor:f[1]==="."?Rc:f[1]==="?"?Ic:f[1]==="@"?Mc:Xn}),i.removeAttribute(p)}else p.startsWith(Qe)&&(c.push({type:6,index:a}),i.removeAttribute(p));if(fr.test(i.tagName)){const p=i.textContent.split(Qe),h=p.length-1;if(h>0){i.textContent=Un?Un.emptyScript:"";for(let d=0;d<h;d++)i.append(p[d],Xt()),pt.nextNode(),c.push({type:2,index:++a});i.append(p[h],Xt())}}}else if(i.nodeType===8)if(i.data===pr)c.push({type:2,index:a});else{let p=-1;for(;(p=i.data.indexOf(Qe,p+1))!==-1;)c.push({type:7,index:a}),p+=Qe.length-1}a++}}static createElement(t,n){const s=ht.createElement("template");return s.innerHTML=t,s}}function It(e,t,n=e,s){if(t===Je)return t;let i=s!==void 0?n._$Co?.[s]:n._$Cl;const a=en(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=i:n._$Cl=i),i!==void 0&&(t=It(e,i._$AS(e,t.values),i,s)),t}class Lc{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,i=(t?.creationScope??ht).importNode(n,!0);pt.currentNode=i;let a=pt.nextNode(),o=0,l=0,c=s[0];for(;c!==void 0;){if(o===c.index){let u;c.type===2?u=new Zn(a,a.nextSibling,this,t):c.type===1?u=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(u=new Dc(a,this,t)),this._$AV.push(u),c=s[++l]}o!==c?.index&&(a=pt.nextNode(),o++)}return pt.currentNode=ht,i}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let Zn=class mr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=It(this,t,n),en(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==Je&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_c(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&en(this._$AH)?this._$AA.nextSibling.data=t:this.T(ht.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=tn.createElement(vr(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(n);else{const a=new Lc(i,this),o=a.u(this.options);a.p(n),this.T(o),this._$AH=a}}_$AC(t){let n=Ha.get(t.strings);return n===void 0&&Ha.set(t.strings,n=new tn(t)),n}k(t){Ti(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const a of t)i===n.length?n.push(s=new mr(this.O(Xt()),this.O(Xt()),this,this.options)):s=n[i],s._$AI(a),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=Na(t).nextSibling;Na(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Xn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,i,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,n=this,s,i){const a=this.strings;let o=!1;if(a===void 0)t=It(this,t,n,0),o=!en(t)||t!==this._$AH&&t!==Je,o&&(this._$AH=t);else{const l=t;let c,u;for(t=a[0],c=0;c<a.length-1;c++)u=It(this,l[s+c],n,c),u===Je&&(u=this._$AH[c]),o||=!en(u)||u!==this._$AH[c],u===v?t=v:t!==v&&(t+=(u??"")+a[c+1]),this._$AH[c]=u}o&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Rc=class extends Xn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},Ic=class extends Xn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},Mc=class extends Xn{constructor(t,n,s,i,a){super(t,n,s,i,a),this.type=5}_$AI(t,n=this){if((t=It(this,t,n,0)??v)===Je)return;const s=this._$AH,i=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==v&&(s===v||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Dc=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){It(this,t)}};const Pc={I:Zn},Nc=Ci.litHtmlPolyfillSupport;Nc?.(tn,Zn),(Ci.litHtmlVersions??=[]).push("3.3.2");const Fc=(e,t,n)=>{const s=n?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const a=n?.renderBefore??null;s._$litPart$=i=new Zn(t.insertBefore(Xt(),a),a,void 0,n??{})}return i._$AI(e),i};const _i=globalThis;let Rt=class extends Et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Fc(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};Rt._$litElement$=!0,Rt.finalized=!0,_i.litElementHydrateSupport?.({LitElement:Rt});const Oc=_i.litElementPolyfillSupport;Oc?.({LitElement:Rt});(_i.litElementVersions??=[]).push("4.2.2");const br=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Bc={attribute:!0,type:String,converter:Bn,reflect:!1,hasChanged:Ai},Uc=(e=Bc,t,n)=>{const{kind:s,metadata:i}=n;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),s==="accessor"){const{name:o}=n;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,c,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(s==="setter"){const{name:o}=n;return function(l){const c=this[o];t.call(this,l),this.requestUpdate(o,c,e,!0,l)}}throw Error("Unsupported decorator location: "+s)};function es(e){return(t,n)=>typeof n=="object"?Uc(e,t,n):((s,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,n)}function $(e){return es({...e,state:!0,attribute:!1})}async function xe(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function zc(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Hc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function jc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function ke(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function yr(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(ke(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Ei(e){return e.filter(t=>typeof t=="string").join(".")}function Ce(e,t){const n=Ei(e),s=t[n];if(s)return s;const i=n.split(".");for(const[a,o]of Object.entries(t)){if(!a.includes("*"))continue;const l=a.split(".");if(l.length!==i.length)continue;let c=!0;for(let u=0;u<i.length;u+=1)if(l[u]!=="*"&&l[u]!==i[u]){c=!1;break}if(c)return o}}function qe(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function ja(e,t){const n=e.trim();if(n==="")return;const s=Number(n);return!Number.isFinite(s)||t&&!Number.isInteger(s)?e:s}function Ka(e){const t=e.trim();return t==="true"?!0:t==="false"?!1:e}function Ve(e,t){if(e==null)return e;if(t.allOf&&t.allOf.length>0){let s=e;for(const i of t.allOf)s=Ve(s,i);return s}const n=ke(t);if(t.anyOf||t.oneOf){const s=(t.anyOf??t.oneOf??[]).filter(i=>!(i.type==="null"||Array.isArray(i.type)&&i.type.includes("null")));if(s.length===1)return Ve(e,s[0]);if(typeof e=="string")for(const i of s){const a=ke(i);if(a==="number"||a==="integer"){const o=ja(e,a==="integer");if(o===void 0||typeof o=="number")return o}if(a==="boolean"){const o=Ka(e);if(typeof o=="boolean")return o}}for(const i of s){const a=ke(i);if(a==="object"&&typeof e=="object"&&!Array.isArray(e)||a==="array"&&Array.isArray(e))return Ve(e,i)}return e}if(n==="number"||n==="integer"){if(typeof e=="string"){const s=ja(e,n==="integer");if(s===void 0||typeof s=="number")return s}return e}if(n==="boolean"){if(typeof e=="string"){const s=Ka(e);if(typeof s=="boolean")return s}return e}if(n==="object"){if(typeof e!="object"||Array.isArray(e))return e;const s=e,i=t.properties??{},a=t.additionalProperties&&typeof t.additionalProperties=="object"?t.additionalProperties:null,o={};for(const[l,c]of Object.entries(s)){const u=i[l]??a,g=u?Ve(c,u):c;g!==void 0&&(o[l]=g)}return o}if(n==="array"){if(!Array.isArray(e))return e;if(Array.isArray(t.items)){const i=t.items;return e.map((a,o)=>{const l=o<i.length?i[o]:void 0;return l?Ve(a,l):a})}const s=t.items;return s?e.map(i=>Ve(i,s)).filter(i=>i!==void 0):e}return e}function vt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function nn(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function xr(e,t,n){if(t.length===0)return;let s=e;for(let a=0;a<t.length-1;a+=1){const o=t[a],l=t[a+1];if(typeof o=="number"){if(!Array.isArray(s))return;s[o]==null&&(s[o]=typeof l=="number"?[]:{}),s=s[o]}else{if(typeof s!="object"||s==null)return;const c=s;c[o]==null&&(c[o]=typeof l=="number"?[]:{}),s=c[o]}}const i=t[t.length-1];if(typeof i=="number"){Array.isArray(s)&&(s[i]=n);return}typeof s=="object"&&s!=null&&(s[i]=n)}function wr(e,t){if(t.length===0)return;let n=e;for(let i=0;i<t.length-1;i+=1){const a=t[i];if(typeof a=="number"){if(!Array.isArray(n))return;n=n[a]}else{if(typeof n!="object"||n==null)return;n=n[a]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function Re(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Wc(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function $r(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Kc(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Kc(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Wc(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?nn(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=nn(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=vt(t.config??{}),e.configFormOriginal=vt(t.config??{}),e.configRawOriginal=n)}function qc(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function kr(e){if(e.configFormMode!=="form"||!e.configForm)return e.configRaw;const t=qc(e.configSchema),n=t?Ve(e.configForm,t):e.configForm;return nn(n)}async function Pn(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=kr(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await Re(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Gc(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=kr(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await Re(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Vc(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function $e(e,t,n){const s=vt(e.configForm??e.configSnapshot?.config??{});xr(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=nn(s))}function je(e,t){const n=vt(e.configForm??e.configSnapshot?.config??{});wr(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=nn(n))}function Qc(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Yc(e){const{state:t,callbacks:n,accountId:s}=e,i=Qc(t),a=(l,c,u={})=>{const{type:g="text",placeholder:p,maxLength:h,help:d}=u,f=t.values[l]??"",m=t.fieldErrors[l],S=`nostr-profile-${l}`;return g==="textarea"?r`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${S}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${c}
          </label>
          <textarea
            id="${S}"
            .value=${f}
            placeholder=${p??""}
            maxlength=${h??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${k=>{const y=k.target;n.onFieldChange(l,y.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${d?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${d}</div>`:v}
          ${m?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${m}</div>`:v}
        </div>
      `:r`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${S}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${c}
        </label>
        <input
          id="${S}"
          type=${g}
          .value=${f}
          placeholder=${p??""}
          maxlength=${h??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${k=>{const y=k.target;n.onFieldChange(l,y.value)}}
          ?disabled=${t.saving}
        />
        ${d?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${d}</div>`:v}
        ${m?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${m}</div>`:v}
      </div>
    `},o=()=>{const l=t.values.picture;return l?r`
      <div style="margin-bottom: 12px;">
        <img
          src=${l}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${c=>{const u=c.target;u.style.display="none"}}
          @load=${c=>{const u=c.target;u.style.display="block"}}
        />
      </div>
    `:v};return r`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">Edit Profile</div>
        <div style="font-size: 12px; color: var(--text-muted);">Account: ${s}</div>
      </div>

      ${t.error?r`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:v}

      ${t.success?r`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:v}

      ${o()}

      ${a("name","Username",{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${a("displayName","Display Name",{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${a("about","Bio",{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${a("picture","Avatar URL",{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?r`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">Advanced</div>

              ${a("banner","Banner URL",{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${a("website","Website",{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${a("nip05","NIP-05 Identifier",{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${a("lud16","Lightning Address",{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:v}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?"Saving...":"Save & Publish"}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?"Importing...":"Import from Relays"}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?"Hide Advanced":"Show Advanced"}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          Cancel
        </button>
      </div>

      ${i?r`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                You have unsaved changes
              </div>
            `:v}
    </div>
  `}function Jc(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function Zc(e,t){await zc(e,t),await xe(e,!0)}async function Xc(e){await Hc(e),await xe(e,!0)}async function ed(e){await jc(e),await xe(e,!0)}async function td(e){await Pn(e),await Re(e),await xe(e,!0)}async function nd(e){await Re(e),await xe(e,!0)}function sd(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...i]=n.split(":");if(!s||i.length===0)continue;const a=s.trim(),o=i.join(":").trim();a&&o&&(t[a]=o)}return t}function Sr(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function Ar(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function id(e){const t=e.hello?.auth?.deviceToken?.trim();if(t)return`Bearer ${t}`;const n=e.settings.token.trim();if(n)return`Bearer ${n}`;const s=e.password.trim();return s?`Bearer ${s}`:null}function Cr(e){const t=id(e);return t?{Authorization:t}:{}}function ad(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=Jc(n??void 0)}function od(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function rd(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function ld(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function cd(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=Sr(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(Ar(n),{method:"PUT",headers:{"Content-Type":"application/json",...Cr(e)},body:JSON.stringify(t.values)}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const a=i?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:a,success:null,fieldErrors:sd(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await xe(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function dd(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=Sr(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(Ar(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json",...Cr(e)},body:JSON.stringify({autoMerge:!0})}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const c=i?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:c,success:null};return}const a=i.merged??i.imported??null,o=a?{...t.values,...a}:t.values,l=!!(o.banner||o.website||o.nip05||o.lud16);e.nostrProfileFormState={...t,importing:!1,values:o,error:null,success:i.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:l},i.saved&&await xe(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function Tr(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),i=n.slice(2).join(":");return!s||!i?null:{agentId:s,rest:i}}const Ys=450;function ln(e,t=!1,n=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const s=()=>{const i=e.querySelector(".chat-thread");if(i){const a=getComputedStyle(i).overflowY;if(a==="auto"||a==="scroll"||i.scrollHeight-i.clientHeight>1)return i}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const i=s();if(!i)return;const a=i.scrollHeight-i.scrollTop-i.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<Ys)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0);const c=n&&(typeof window>"u"||typeof window.matchMedia!="function"||!window.matchMedia("(prefers-reduced-motion: reduce)").matches),u=i.scrollHeight;typeof i.scrollTo=="function"?i.scrollTo({top:u,behavior:c?"smooth":"auto"}):i.scrollTop=u,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const g=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const p=s();if(!p)return;const h=p.scrollHeight-p.scrollTop-p.clientHeight;(o||e.chatUserNearBottom||h<Ys)&&(p.scrollTop=p.scrollHeight,e.chatUserNearBottom=!0)},g)})})}function _r(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function ud(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<Ys,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function gd(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function Wa(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function pd(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),i=document.createElement("a"),a=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");i.href=s,i.download=`openclaw-logs-${t}-${a}.log`,i.click(),URL.revokeObjectURL(s)}function fd(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}async function ts(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,i]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const a=s;e.debugModels=Array.isArray(a?.models)?a?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function hd(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const vd=2e3,md=new Set(["trace","debug","info","warn","error","fatal"]);function bd(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function yd(e){if(typeof e!="string")return null;const t=e.toLowerCase();return md.has(t)?t:null}function xd(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,i=yd(n?.logLevelName??n?.level),a=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,o=bd(a);let l=null;o&&(typeof o.subsystem=="string"?l=o.subsystem:typeof o.module=="string"&&(l=o.module)),!l&&a&&a.length<120&&(l=a);let c=null;return typeof t[1]=="string"?c=t[1]:!o&&typeof t[0]=="string"?c=t[0]:typeof t.message=="string"&&(c=t.message),{raw:e,time:s,level:i,subsystem:l,message:c??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Li(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),a=(Array.isArray(s.lines)?s.lines.filter(l=>typeof l=="string"):[]).map(xd),o=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=o?a:[...e.logsEntries,...a].slice(-vd),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function ns(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function wd(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{ns(e,{quiet:!0})},5e3))}function $d(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Ri(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Li(e,{quiet:!0})},2e3))}function Ii(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Mi(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&ts(e)},3e3))}function Di(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function Er(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function Lr(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const i=await e.client.request("agent.identity.get",{agentId:s});i&&(e.agentIdentityById={...e.agentIdentityById,[s]:i})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function Nn(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function Pi(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(i=>i.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}function Ni(e,t){if(e==null||!Number.isFinite(e)||e<=0)return;if(e<1e3)return`${Math.round(e)}ms`;const n=t?.spaced?" ":"",s=Math.round(e/1e3),i=Math.floor(s/3600),a=Math.floor(s%3600/60),o=s%60;if(i>=24){const l=Math.floor(i/24),c=i%24;return c>0?`${l}d${n}${c}h`:`${l}d`}return i>0?a>0?`${i}h${n}${a}m`:`${i}h`:a>0?o>0?`${a}m${n}${o}s`:`${a}m`:`${o}s`}function Fi(e,t="n/a"){if(e==null||!Number.isFinite(e)||e<0)return t;if(e<1e3)return`${Math.round(e)}ms`;const n=Math.round(e/1e3);if(n<60)return`${n}s`;const s=Math.round(n/60);if(s<60)return`${s}m`;const i=Math.round(s/60);return i<24?`${i}h`:`${Math.round(i/24)}d`}function Q(e,t){const n=t?.fallback??"n/a";if(e==null||!Number.isFinite(e))return n;const s=Date.now()-e,i=Math.abs(s),a=s>=0,o=Math.round(i/1e3);if(o<60)return a?"just now":"in <1m";const l=Math.round(o/60);if(l<60)return a?`${l}m ago`:`in ${l}m`;const c=Math.round(l/60);if(c<48)return a?`${c}h ago`:`in ${c}h`;const u=Math.round(c/24);return a?`${u}d ago`:`in ${u}d`}const kd=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,$n=/<\s*\/?\s*final\b[^<>]*>/gi,qa=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function Ga(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const i of e.matchAll(n)){const a=(i.index??0)+i[1].length;t.push({start:a,end:a+i[0].length-i[1].length})}const s=/`+[^`]+`+/g;for(const i of e.matchAll(s)){const a=i.index??0,o=a+i[0].length;t.some(c=>a>=c.start&&o<=c.end)||t.push({start:a,end:o})}return t.sort((i,a)=>i.start-a.start),t}function Va(e,t){return t.some(n=>e>=n.start&&e<n.end)}function Sd(e,t){return e.trimStart()}function Ad(e,t){if(!e||!kd.test(e))return e;let n=e;if($n.test(n)){$n.lastIndex=0;const l=[],c=Ga(n);for(const u of n.matchAll($n)){const g=u.index??0;l.push({start:g,length:u[0].length,inCode:Va(g,c)})}for(let u=l.length-1;u>=0;u--){const g=l[u];g.inCode||(n=n.slice(0,g.start)+n.slice(g.start+g.length))}}else $n.lastIndex=0;const s=Ga(n);qa.lastIndex=0;let i="",a=0,o=!1;for(const l of n.matchAll(qa)){const c=l.index??0,u=l[1]==="/";Va(c,s)||(o?u&&(o=!1):(i+=n.slice(a,c),u||(o=!0)),a=c+l[0].length)}return i+=n.slice(a),Sd(i)}function mt(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function Js(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function Zs(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function Rr(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function zn(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Cs(e){return Ad(e)}async function cn(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function ss(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function Cd(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=zn(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function Td(e){if(e.payloadKind==="systemEvent"){const i=e.payloadText.trim();if(!i)throw new Error("System event text required.");return{kind:"systemEvent",text:i}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=zn(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function _d(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=Cd(e.cronForm),n=Td(e.cronForm),s=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,i=e.cronForm.agentId.trim(),a={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:i||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:s};if(!a.name)throw new Error("Name required.");await e.client.request("cron.add",a),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await ss(e),await cn(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function Ed(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await ss(e),await cn(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function Ld(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await Ir(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function Rd(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await ss(e),await cn(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function Ir(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const Mr="openclaw.device.auth.v1";function Oi(e){return e.trim()}function Id(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function Bi(){try{const e=window.localStorage.getItem(Mr);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function Dr(e){try{window.localStorage.setItem(Mr,JSON.stringify(e))}catch{}}function Md(e){const t=Bi();if(!t||t.deviceId!==e.deviceId)return null;const n=Oi(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function Pr(e){const t=Oi(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=Bi();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const i={token:e.token,role:t,scopes:Id(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=i,Dr(n),i}function Nr(e){const t=Bi();if(!t||t.deviceId!==e.deviceId)return;const n=Oi(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],Dr(s)}const Fr={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:ge,n:Fn,Gx:Qa,Gy:Ya,a:Ts,d:_s,h:Dd}=Fr,bt=32,Ui=64,Pd=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},re=(e="")=>{const t=new Error(e);throw Pd(t,re),t},Nd=e=>typeof e=="bigint",Fd=e=>typeof e=="string",Od=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",Xe=(e,t,n="")=>{const s=Od(e),i=e?.length,a=t!==void 0;if(!s||a&&i!==t){const o=n&&`"${n}" `,l=a?` of length ${t}`:"",c=s?`length=${i}`:`type=${typeof e}`;re(o+"expected Uint8Array"+l+", got "+c)}return e},is=e=>new Uint8Array(e),Or=e=>Uint8Array.from(e),Br=(e,t)=>e.toString(16).padStart(t,"0"),Ur=e=>Array.from(Xe(e)).map(t=>Br(t,2)).join(""),Ke={_0:48,_9:57,A:65,F:70,a:97,f:102},Ja=e=>{if(e>=Ke._0&&e<=Ke._9)return e-Ke._0;if(e>=Ke.A&&e<=Ke.F)return e-(Ke.A-10);if(e>=Ke.a&&e<=Ke.f)return e-(Ke.a-10)},zr=e=>{const t="hex invalid";if(!Fd(e))return re(t);const n=e.length,s=n/2;if(n%2)return re(t);const i=is(s);for(let a=0,o=0;a<s;a++,o+=2){const l=Ja(e.charCodeAt(o)),c=Ja(e.charCodeAt(o+1));if(l===void 0||c===void 0)return re(t);i[a]=l*16+c}return i},Hr=()=>globalThis?.crypto,Bd=()=>Hr()?.subtle??re("crypto.subtle must be defined, consider polyfill"),sn=(...e)=>{const t=is(e.reduce((s,i)=>s+Xe(i).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},Ud=(e=bt)=>Hr().getRandomValues(is(e)),Hn=BigInt,lt=(e,t,n,s="bad number: out of range")=>Nd(e)&&t<=e&&e<n?e:re(s),N=(e,t=ge)=>{const n=e%t;return n>=0n?n:t+n},jr=e=>N(e,Fn),zd=(e,t)=>{(e===0n||t<=0n)&&re("no inverse n="+e+" mod="+t);let n=N(e,t),s=t,i=0n,a=1n;for(;n!==0n;){const o=s/n,l=s%n,c=i-a*o;s=n,n=l,i=a,a=c}return s===1n?N(i,t):re("no inverse")},Hd=e=>{const t=Gr[e];return typeof t!="function"&&re("hashes."+e+" not set"),t},Es=e=>e instanceof Ae?e:re("Point expected"),Xs=2n**256n;class Ae{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,i){const a=Xs;this.X=lt(t,0n,a),this.Y=lt(n,0n,a),this.Z=lt(s,1n,a),this.T=lt(i,0n,a),Object.freeze(this)}static CURVE(){return Fr}static fromAffine(t){return new Ae(t.x,t.y,1n,N(t.x*t.y))}static fromBytes(t,n=!1){const s=_s,i=Or(Xe(t,bt)),a=t[31];i[31]=a&-129;const o=Wr(i);lt(o,0n,n?Xs:ge);const c=N(o*o),u=N(c-1n),g=N(s*c+1n);let{isValid:p,value:h}=Kd(u,g);p||re("bad point: y not sqrt");const d=(h&1n)===1n,f=(a&128)!==0;return!n&&h===0n&&f&&re("bad point: x==0, isLastByteOdd"),f!==d&&(h=N(-h)),new Ae(h,o,1n,N(h*o))}static fromHex(t,n){return Ae.fromBytes(zr(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=Ts,n=_s,s=this;if(s.is0())return re("bad point: ZERO");const{X:i,Y:a,Z:o,T:l}=s,c=N(i*i),u=N(a*a),g=N(o*o),p=N(g*g),h=N(c*t),d=N(g*N(h+u)),f=N(p+N(n*N(c*u)));if(d!==f)return re("bad point: equation left != right (1)");const m=N(i*a),S=N(o*l);return m!==S?re("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:i}=this,{X:a,Y:o,Z:l}=Es(t),c=N(n*l),u=N(a*i),g=N(s*l),p=N(o*i);return c===u&&g===p}is0(){return this.equals(Lt)}negate(){return new Ae(N(-this.X),this.Y,this.Z,N(-this.T))}double(){const{X:t,Y:n,Z:s}=this,i=Ts,a=N(t*t),o=N(n*n),l=N(2n*N(s*s)),c=N(i*a),u=t+n,g=N(N(u*u)-a-o),p=c+o,h=p-l,d=c-o,f=N(g*h),m=N(p*d),S=N(g*d),k=N(h*p);return new Ae(f,m,k,S)}add(t){const{X:n,Y:s,Z:i,T:a}=this,{X:o,Y:l,Z:c,T:u}=Es(t),g=Ts,p=_s,h=N(n*o),d=N(s*l),f=N(a*p*u),m=N(i*c),S=N((n+s)*(o+l)-h-d),k=N(m-f),y=N(m+f),A=N(d-g*h),C=N(S*k),I=N(y*A),_=N(S*A),M=N(k*y);return new Ae(C,I,M,_)}subtract(t){return this.add(Es(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return Lt;if(lt(t,1n,Fn),t===1n)return this;if(this.equals(yt))return tu(t).p;let s=Lt,i=yt;for(let a=this;t>0n;a=a.double(),t>>=1n)t&1n?s=s.add(a):n&&(i=i.add(a));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(Lt))return{x:0n,y:1n};const i=zd(s,ge);N(s*i)!==1n&&re("invalid inverse");const a=N(t*i),o=N(n*i);return{x:a,y:o}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=Kr(n);return s[31]|=t&1n?128:0,s}toHex(){return Ur(this.toBytes())}clearCofactor(){return this.multiply(Hn(Dd),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(Fn/2n,!1).double();return Fn%2n&&(t=t.add(this)),t.is0()}}const yt=new Ae(Qa,Ya,1n,N(Qa*Ya)),Lt=new Ae(0n,1n,1n,0n);Ae.BASE=yt;Ae.ZERO=Lt;const Kr=e=>zr(Br(lt(e,0n,Xs),Ui)).reverse(),Wr=e=>Hn("0x"+Ur(Or(Xe(e)).reverse())),De=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=ge;return n},jd=e=>{const n=e*e%ge*e%ge,s=De(n,2n)*n%ge,i=De(s,1n)*e%ge,a=De(i,5n)*i%ge,o=De(a,10n)*a%ge,l=De(o,20n)*o%ge,c=De(l,40n)*l%ge,u=De(c,80n)*c%ge,g=De(u,80n)*c%ge,p=De(g,10n)*a%ge;return{pow_p_5_8:De(p,2n)*e%ge,b2:n}},Za=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Kd=(e,t)=>{const n=N(t*t*t),s=N(n*n*t),i=jd(e*s).pow_p_5_8;let a=N(e*n*i);const o=N(t*a*a),l=a,c=N(a*Za),u=o===e,g=o===N(-e),p=o===N(-e*Za);return u&&(a=l),(g||p)&&(a=c),(N(a)&1n)===1n&&(a=N(-a)),{isValid:u||g,value:a}},ei=e=>jr(Wr(e)),zi=(...e)=>Gr.sha512Async(sn(...e)),Wd=(...e)=>Hd("sha512")(sn(...e)),qr=e=>{const t=e.slice(0,bt);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(bt,Ui),s=ei(t),i=yt.multiply(s),a=i.toBytes();return{head:t,prefix:n,scalar:s,point:i,pointBytes:a}},Hi=e=>zi(Xe(e,bt)).then(qr),qd=e=>qr(Wd(Xe(e,bt))),Gd=e=>Hi(e).then(t=>t.pointBytes),Vd=e=>zi(e.hashable).then(e.finish),Qd=(e,t,n)=>{const{pointBytes:s,scalar:i}=e,a=ei(t),o=yt.multiply(a).toBytes();return{hashable:sn(o,s,n),finish:u=>{const g=jr(a+ei(u)*i);return Xe(sn(o,Kr(g)),Ui)}}},Yd=async(e,t)=>{const n=Xe(e),s=await Hi(t),i=await zi(s.prefix,n);return Vd(Qd(s,i,n))},Gr={sha512Async:async e=>{const t=Bd(),n=sn(e);return is(await t.digest("SHA-512",n.buffer))},sha512:void 0},Jd=(e=Ud(bt))=>e,Zd={getExtendedPublicKeyAsync:Hi,getExtendedPublicKey:qd,randomSecretKey:Jd},jn=8,Xd=256,Vr=Math.ceil(Xd/jn)+1,ti=2**(jn-1),eu=()=>{const e=[];let t=yt,n=t;for(let s=0;s<Vr;s++){n=t,e.push(n);for(let i=1;i<ti;i++)n=n.add(t),e.push(n);t=n.double()}return e};let Xa;const eo=(e,t)=>{const n=t.negate();return e?n:t},tu=e=>{const t=Xa||(Xa=eu());let n=Lt,s=yt;const i=2**jn,a=i,o=Hn(i-1),l=Hn(jn);for(let c=0;c<Vr;c++){let u=Number(e&o);e>>=l,u>ti&&(u-=a,e+=1n);const g=c*ti,p=g,h=g+Math.abs(u)-1,d=c%2!==0,f=u<0;u===0?s=s.add(eo(d,t[p])):n=n.add(eo(f,t[h]))}return e!==0n&&re("invalid wnaf"),{p:n,f:s}},Ls="openclaw-device-identity-v1";function ni(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function Qr(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),i=new Uint8Array(s.length);for(let a=0;a<s.length;a+=1)i[a]=s.charCodeAt(a);return i}function nu(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function Yr(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return nu(new Uint8Array(t))}async function su(){const e=Zd.randomSecretKey(),t=await Gd(e);return{deviceId:await Yr(t),publicKey:ni(t),privateKey:ni(e)}}async function ji(){try{const n=localStorage.getItem(Ls);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const i=await Yr(Qr(s.publicKey));if(i!==s.deviceId){const a={...s,deviceId:i};return localStorage.setItem(Ls,JSON.stringify(a)),{deviceId:i,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await su(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(Ls,JSON.stringify(t)),e}async function iu(e,t){const n=Qr(e),s=new TextEncoder().encode(t),i=await Yd(s,n);return ni(i)}async function et(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function au(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await et(e)}catch(n){e.devicesError=String(n)}}async function ou(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await et(e)}catch(s){e.devicesError=String(s)}}async function ru(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await ji(),i=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&Pr({deviceId:s.deviceId,role:i,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await et(e)}catch(n){e.devicesError=String(n)}}async function lu(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await ji();t.deviceId===s.deviceId&&Nr({deviceId:s.deviceId,role:t.role}),await et(e)}catch(s){e.devicesError=String(s)}}function cu(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function du(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function Ki(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=cu(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);uu(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function uu(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=vt(t.file??{}))}async function gu(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},i=du(t,{file:s,baseHash:n});if(!i){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(i.method,i.params),e.execApprovalsDirty=!1,await Ki(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function pu(e,t,n){const s=vt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});xr(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function fu(e,t){const n=vt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});wr(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function Wi(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function wt(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,i=t?.activeMinutes??zn(e.sessionsFilterActive,0),a=t?.limit??zn(e.sessionsFilterLimit,0),o={includeGlobal:n,includeUnknown:s};i>0&&(o.activeMinutes=i),a>0&&(o.limit=a);const l=await e.client.request("sessions.list",o);l&&(e.sessionsResult=l)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function hu(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await wt(e)}catch(i){e.sessionsError=String(i)}}async function vu(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),await wt(e)}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}function Mt(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function as(e){return e instanceof Error?e.message:String(e)}async function dn(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=as(n)}finally{e.skillsLoading=!1}}}function mu(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function bu(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await dn(e),Mt(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const i=as(s);e.skillsError=i,Mt(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}async function yu(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await dn(e),Mt(e,t,{kind:"success",message:"API key saved"})}catch(n){const s=as(n);e.skillsError=s,Mt(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function xu(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const i=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await dn(e),Mt(e,t,{kind:"success",message:i?.message??"Installed"})}catch(i){const a=as(i);e.skillsError=a,Mt(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}const to={OpenClaw:"OpenClaw",Overview:"总览",Settings:"设置",Status:"状态",Dashboard:"仪表板",Connect:"连接",Disconnect:"断开","Connecting...":"连接中...",Connected:"已连接",Disconnected:"已断开",Connecting:"正在连接","n/a":"不可用",seconds:"秒",minutes:"分钟",hours:"小时",days:"天",Uptime:"运行时间","Policy Tick":"策略时钟",Channel:"渠道",Channels:"渠道",Session:"会话",Sessions:"会话",Cron:"定时任务","Cron Jobs":"定时任务",Instance:"实例",Instances:"实例",gateway:"网关",Gateway:"网关",Node:"节点",Nodes:"节点",Skill:"技能",Skills:"技能",Job:"任务",Jobs:"任务",Log:"日志",Logs:"日志",Device:"设备",Devices:"设备",Agent:"代理",Agents:"代理",Files:"文件",Tools:"工具",Control:"控制台",Resources:"资源",Docs:"文档",Save:"保存",Cancel:"取消",Edit:"编辑",Delete:"删除",Add:"添加",Search:"搜索",Enable:"启用",Disable:"禁用",Configure:"配置",Unknown:"未知",Ready:"就绪",Install:"安装",Uninstall:"卸载",Update:"更新",Remove:"移除",Clear:"清除",Abort:"中止",Stop:"停止",Retry:"重试",Close:"关闭",Back:"返回",Next:"下一步",Previous:"上一步",Done:"完成",OK:"确定",Yes:"是",No:"否",On:"开",Off:"关",Run:"运行",Call:"调用",Export:"导出",Download:"下载",Copy:"复制",Approve:"批准",Reject:"拒绝",Revoke:"撤销",Allow:"允许",Deny:"拒绝",Send:"发送","New session":"新会话","Focus mode":"专注模式","Split ratio":"分割比例","Loading...":"加载中...","Loading chat…":"正在加载聊天…","Compacting context...":"正在压缩上下文...","Context compacted":"上下文已压缩","New message in":"新消息来自",Queue:"队列",Chat:"聊天","Chat history":"聊天历史","Attach file":"附加文件","Send message":"发送消息","Connect to the gateway to start chatting…":"连接到网关以开始聊天…","Add a message or paste more images...":"添加消息或粘贴更多图片...",Configuration:"配置",Config:"配置",Apply:"应用","Apply & Restart":"应用并重启","Raw JSON":"原始 JSON",Raw:"原始",Form:"表单",Reset:"重置","Generating diff...":"正在生成差异...",Analysis:"分析",Diff:"差异","No changes":"无更改","Loading schema…":"正在加载模式...","Saving...":"正在保存...","Applying...":"正在应用...",Saved:"已保存","Error:":"错误：","Invalid configuration":"无效配置","Configuration saved. Restart the gateway to apply changes.":"配置已保存。重启网关以应用更改。","Restart required":"需要重启","The gateway must be restarted for changes to take effect.":"网关必须重启才能生效。","Restart now":"立即重启","Restart later":"稍后重启",All:"全部","All Settings":"所有设置","Search settings...":"搜索设置...","Unsaved changes":"未保存的更改",Reload:"重新加载",Update:"更新",View:"查看",pending:"待处理",change:"更改",changes:"更改",Environment:"环境",Updates:"更新",Authentication:"身份验证",Messages:"消息",Commands:"命令",Hooks:"钩子",Skills:"技能",Tools:"工具",Gateway:"网关",Meta:"元信息",Broadcast:"广播",Audio:"音频",Session:"会话",Cron:"定时任务",Discovery:"发现",CanvasHost:"画布主机",Plugins:"插件",Ui:"界面",Models:"模型","Setup Wizard":"设置向导",Diagnostics:"诊断",Logging:"日志",Browser:"浏览器",NodeHost:"节点主机",Bindings:"绑定",Media:"媒体",Approvals:"审批",Web:"网络",Memory:"内存",Talk:"对话","This gateway requires auth. Add a token or password, then click Connect.":"此网关需要身份验证。请添加令牌或密码，然后点击连接。","Auth failed. Update the token or password in Control UI settings, then click Connect.":"身份验证失败。请在控制台设置中更新令牌或密码，然后点击连接。","Gateway requires auth.":"网关需要身份验证。","Add a token or password in settings.":"在设置中添加令牌或密码。","Last refresh":"上次刷新","Gateway URL":"网关地址",Token:"令牌",Password:"密码",Version:"版本",Refresh:"刷新","Open Control UI":"打开控制台",Usage:"使用统计",Debug:"调试",Logs:"日志",Instances:"实例","Switch Language":"切换语言","Environment Variables":"环境变量","Auto-update settings and release channel":"自动更新设置和发布渠道","Agent configurations, models, and identities":"代理配置、模型和身份","API keys and authentication profiles":"API 密钥和身份验证配置","Messaging channels (Telegram, Discord, Slack, etc.)":"消息渠道 (Telegram, Discord, Slack 等)","Message handling and routing settings":"消息处理和路由设置","Custom slash commands":"自定义斜杠命令","Webhooks and event hooks":"Webhooks 和事件钩子","Skill packs and capabilities":"技能包和能力","Tool configurations (browser, search, etc.)":"工具配置 (浏览器、搜索等)","Gateway server settings (port, auth, binding)":"网关服务器设置 (端口、认证、绑定)","Setup wizard state and history":"设置向导状态和历史","Gateway metadata and version information":"网关元数据和版本信息","Log levels and output configuration":"日志级别和输出配置","Browser automation settings":"浏览器自动化设置","User interface preferences":"用户界面首选项","AI model configurations and providers":"AI 模型配置和提供商","Key bindings and shortcuts":"键绑定和快捷键","Broadcast and notification settings":"广播和通知设置","Audio input/output settings":"音频输入/输出设置","Session management and persistence":"会话管理和持久化","Scheduled tasks and automation":"计划任务和自动化","Web server and API settings":"Web 服务器和 API 设置","Service discovery and networking":"服务发现和网络","Canvas rendering and display":"画布渲染和显示","Plugin management and extensions":"插件管理和扩展","Node host settings and management":"节点主机设置和管理","Media processing and storage":"媒体处理和存储","Pending approvals and authorizations":"待批准和授权","Memory management and limits":"内存管理和限制","System diagnostics and troubleshooting":"系统诊断和故障排除","No settings in this section":"此部分无设置","No settings match":"无匹配设置","Unsupported schema node. Use Raw mode.":"不支持的架构节点。请使用原始模式。","Unsupported type:":"不支持的类型：","Use Raw mode.":"请使用原始模式。","Unsupported array schema. Use Raw mode.":"不支持的数组架构。请使用原始模式。","This gateway requires auth. Add a token or password, then click Connect.":"此网关需要身份验证。请添加令牌或密码，然后点击连接。","Auth failed. Update the token or password in Control UI settings, then click Connect.":"身份验证失败。请在控制台设置中更新令牌或密码，然后点击连接。","This page is HTTP, so the browser blocks device identity.":"此页面是 HTTP，浏览器阻止设备身份验证。","Use HTTPS (Tailscale Serve) or open":"请使用 HTTPS (Tailscale Serve) 或打开","on the gateway host.":"在网关上。","If you must stay on HTTP, set":"如果必须使用 HTTP，请设置","(token-only).":"（仅令牌）。","Docs: Control UI auth":"文档：控制台身份验证","Docs: Tailscale Serve":"文档：Tailscale Serve","Docs: Insecure HTTP":"文档：不安全 HTTP","open the Control UI":"打开控制台","set token":"设置令牌","Gateway Access":"网关访问","Where the dashboard connects and how it authenticates.":"控制台连接位置和身份验证方式","WebSocket URL":"WebSocket 地址","Gateway Token":"网关令牌","Password (not stored)":"密码（不存储）","Default Session Key":"默认会话密钥","Click Connect to apply connection changes.":"点击连接以应用连接更改",Snapshot:"快照","Latest gateway handshake information.":"最新的网关握手信息","Tick Interval":"时钟间隔","Last Channels Refresh":"最后渠道刷新","Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.":"使用渠道链接 WhatsApp、Telegram、Discord、Signal 或 iMessage","Presence beacons in the last 5 minutes.":"最近 5 分钟的在线状态信标","Recent session keys tracked by the gateway.":"网关跟踪的最近会话密钥",Enabled:"启用",Disabled:"禁用","Next wake":"下次唤醒",Notes:"备注","Quick reminders for remote control setups.":"远程控制设置的快速提醒","Tailscale serve":"Tailscale 服务","Prefer serve mode to keep the gateway on loopback with tailnet auth.":"建议使用服务模式，将网关保留在 loopback 并使用 tailnet 认证","Session hygiene":"会话卫生","Use /new or sessions.patch to reset context.":"使用 /new 或 sessions.patch 重置上下文","Cron reminders":"Cron 提醒","Use isolated sessions for recurring runs.":"对定期运行使用隔离会话","Connected Instances":"已连接实例","Presence beacons from the gateway and clients.":"来自网关和客户端的存在信标。","No instances reported yet.":"尚未报告任何实例。","unknown host":"未知主机","Last input":"最后输入",Reason:"原因",scopes:"范围",Active:"活跃",Inactive:"非活跃",Global:"全局",Unknown:"未知","Include Global":"包含全局","Include Unknown":"包含未知","Thinking Level":"思考级别","Reasoning Level":"推理级别","Verbose Level":"详细级别",minimal:"最小",low:"低",medium:"中",high:"高",xhigh:"极高",full:"完整",inherit:"继承",stream:"流式","on (explicit)":"开启（显式）","Delete Session":"删除会话",Totals:"总计",Cost:"成本",Messages:"消息",Tokens:"令牌","Cost Daily":"每日成本",Activity:"活动","Error Rate":"错误率","Peak Error Hours":"高峰错误时段",errors:"错误",msgs:"消息","Select date range":"选择日期范围","All Agents":"所有代理","No data":"无数据","Activity by Time":"活动时间",Local:"本地",UTC:"UTC","Day of Week":"星期",Hours:"小时",Midnight:"午夜","4am":"凌晨4点","8am":"早上8点",Noon:"中午","4pm":"下午4点","8pm":"晚上8点","Low → High token density":"低 → 高令牌密度","Daily Usage":"每日使用","Daily Token":"每日令牌","Daily Cost":"每日成本",Total:"总计","By Type":"按类型",Token:"令牌",Cost:"成本","Token Usage":"令牌使用","Cost Usage":"成本使用","Tokens by Type":"按类型的令牌","Cost by Type":"按类型的成本",Output:"输出",Input:"输入","Cache write":"缓存写入","Cache read":"缓存读取","Total:":"总计：",calls:"调用",messages:"消息","Higher is better":"越高越好","Lower is better":"越低越好","Cache hit rate":"缓存命中率","Cache hit rate = cache read / (input + cache read). Higher is better.":"缓存命中率 = 缓存读取 / (输入 + 缓存读取)。越高越好。","Error rate":"错误率","Error rate = errors / total messages. Lower is better.":"错误率 = 错误 / 总消息数。越低越好。",Throughput:"吞吐量","Throughput shows tokens per minute over active time. Higher is better.":"吞吐量显示活跃时间内的每分钟令牌数。越高越好。","Average tokens per message in this range.":"此范围内的每条消息平均令牌数。","Average cost per message when providers report costs.":"提供商报告成本时的每条消息平均成本。","Cost data is missing for some or all sessions in this range.":"此范围内部分或全部会话缺少成本数据。","Avg tokens/msg":"平均令牌/消息","Avg cost/msg":"平均成本/消息","Cache hit":"缓存命中","Throughput (tok/min)":"吞吐量 (令牌/分钟)","Throughput (/min)":"吞吐量 (/分钟)",Duration:"持续时间",Model:"模型",Provider:"提供商",Agent:"代理",Channel:"渠道",Tool:"工具","Cost per Model":"每模型成本","Cost per Provider":"每提供商成本","Cost per Agent":"每代理成本","Cost per Channel":"每渠道成本","Top Tools":"热门工具","Top Models":"热门模型","Top Providers":"热门提供商","Top Agents":"热门代理","Top Channels":"热门渠道",unknown:"未知",Scheduler:"调度器","Gateway-owned cron scheduler status.":"网关自有的 cron 调度器状态。",Jobs:"任务","Next wake":"下次唤醒","Refreshing…":"正在刷新...","New Job":"新建任务","Create a scheduled wakeup or agent run.":"创建计划的唤醒或代理运行。",Name:"名称",Schedule:"计划","Delivery Channel":"交付渠道",Payload:"负载",Agent:"代理",Message:"消息",Expression:"表达式","Delete Job":"删除任务","Delete this job?":"确定删除此任务？","Run Now":"立即运行",Runs:"运行记录","Select a job":"选择任务",Error:"错误",Output:"输出","Add Channel":"添加渠道","Edit Channel":"编辑渠道","Configure Channel":"配置渠道","Channel ID":"渠道 ID","Delete Channel":"删除渠道","No channels configured.":"未配置任何渠道。","Gateway status, entry points, and a fast health read.":"网关状态、入口点和快速健康检查。","Manage channels and settings.":"管理渠道和设置。","Presence beacons from connected clients and nodes.":"来自已连接客户端和节点的在线状态信标。","Inspect active sessions and adjust per-session defaults.":"检查活跃会话并调整每个会话的默认设置。","See where tokens go, when sessions spike, and what drives cost.":"查看令牌使用情况、会话峰值和成本驱动因素。","Schedule wakeups and recurring agent runs.":"计划唤醒和定期代理运行。","Manage agent workspaces, tools, and identities.":"管理代理工作区、工具和身份。","Manage skill availability and API key injection.":"管理技能可用性和 API 密钥注入。","Paired devices, capabilities, and command exposure.":"配对设备、功能和命令暴露。","Direct gateway chat session for quick interventions.":"直接网关聊天会话，快速干预。","Edit ~/.openclaw/openclaw.json safely.":"安全编辑 ~/.openclaw/openclaw.json。","Gateway snapshots, events, and manual RPC calls.":"网关快照、事件和手动 RPC 调用。","Live tail of the gateway file logs.":"实时跟踪网关文件日志。"},no={OpenClaw:"OpenClaw",Overview:"Overview",Settings:"Settings",Status:"Status",Dashboard:"Dashboard",Connect:"Connect",Disconnect:"Disconnect","Connecting...":"Connecting...",Connected:"Connected",Disconnected:"Disconnected",Connecting:"Connecting","n/a":"n/a",seconds:"seconds",minutes:"minutes",hours:"hours",days:"days",Uptime:"Uptime","Policy Tick":"Policy Tick",Channel:"Channel",Channels:"Channels",Session:"Session",Sessions:"Sessions",Cron:"Cron","Cron Jobs":"Cron Jobs",Instance:"Instance",Instances:"Instances",gateway:"gateway",Gateway:"Gateway",Node:"Node",Nodes:"Nodes",Skill:"Skill",Skills:"Skills",Job:"Job",Jobs:"Jobs",Log:"Log",Logs:"Logs",Device:"Device",Devices:"Devices",Agent:"Agent",Agents:"Agents",Files:"Files",Tools:"Tools",Control:"Control",Resources:"Resources",Docs:"Docs",Save:"Save",Cancel:"Cancel",Edit:"Edit",Delete:"Delete",Add:"Add",Search:"Search",Enable:"Enable",Disable:"Disable",Configure:"Configure",Unknown:"Unknown",Ready:"Ready",Install:"Install",Uninstall:"Uninstall",Update:"Update",Reload:"Reload",View:"View",pending:"pending",change:"change",changes:"changes",Remove:"Remove",Clear:"Clear",Abort:"Abort",Stop:"Stop",Retry:"Retry",Close:"Close",Back:"Back",Next:"Next",Previous:"Previous",Done:"Done",OK:"OK",Yes:"Yes",No:"No",On:"On",Off:"Off",Run:"Run",Call:"Call",Export:"Export",Download:"Download",Copy:"Copy",Approve:"Approve",Reject:"Reject",Revoke:"Revoke",Allow:"Allow",Deny:"Deny",Send:"Send","New session":"New session","Focus mode":"Focus mode","Split ratio":"Split ratio","Loading...":"Loading...","Loading chat…":"Loading chat…","Compacting context...":"Compacting context...","Context compacted":"Context compacted","New message in":"New message in",Queue:"Queue",Chat:"Chat","Chat history":"Chat history","Attach file":"Attach file","Send message":"Send message","Connect to the gateway to start chatting…":"Connect to the gateway to start chatting…","Add a message or paste more images...":"Add a message or paste more images...",Configuration:"Configuration",Config:"Config",Apply:"Apply","Apply & Restart":"Apply & Restart","Raw JSON":"Raw JSON",Raw:"Raw",Form:"Form",Reset:"Reset","Generating diff...":"Generating diff...",Analysis:"Analysis",Diff:"Diff","No changes":"No changes","Loading schema…":"Loading schema…","Saving...":"Saving...","Applying...":"Applying...",Saved:"Saved","Error:":"Error:","Invalid configuration":"Invalid configuration","Configuration saved. Restart the gateway to apply changes.":"Configuration saved. Restart the gateway to apply changes.","Restart required":"Restart required","The gateway must be restarted for changes to take effect.":"The gateway must be restarted for changes to take effect.","Restart now":"Restart now","Restart later":"Restart later",All:"All","All Settings":"All Settings","Search settings...":"Search settings...","Unsaved changes":"Unsaved changes",Reload:"Reload",Environment:"Environment",Updates:"Updates",Authentication:"Authentication",Messages:"Messages",Commands:"Commands",Hooks:"Hooks",Skills:"Skills",Tools:"Tools",Gateway:"Gateway",Meta:"Metadata",Broadcast:"Broadcast",Audio:"Audio",Session:"Session",Cron:"Cron",Discovery:"Discovery",CanvasHost:"Canvas Host",Plugins:"Plugins",Ui:"UI",Models:"Models","Setup Wizard":"Setup Wizard",Diagnostics:"Diagnostics",Logging:"Logging",Browser:"Browser",NodeHost:"Node Host",Bindings:"Bindings",Media:"Media",Approvals:"Approvals",Web:"Web",Memory:"Memory",Talk:"Talk","No settings in this section":"No settings in this section","No settings match":"No settings match","Unsupported schema node. Use Raw mode.":"Unsupported schema node. Use Raw mode.","Unsupported type:":"Unsupported type:","Use Raw mode.":"Use Raw mode.","Unsupported array schema. Use Raw mode.":"Unsupported array schema. Use Raw mode.",Usage:"Usage",Debug:"Debug",Logs:"Logs",Instances:"Instances","Switch Language":"Switch Language","This gateway requires auth. Add a token or password, then click Connect.":"This gateway requires auth. Add a token or password, then click Connect.","Auth failed. Update the token or password in Control UI settings, then click Connect.":"Auth failed. Update the token or password in Control UI settings, then click Connect.","Gateway requires auth.":"Gateway requires auth.","Add a token or password in settings.":"Add a token or password in settings.","Last refresh":"Last refresh","Gateway URL":"Gateway URL",Token:"Token",Password:"Password",Version:"Version",Refresh:"Refresh","Open Control UI":"Open Control UI","Connected Instances":"Connected Instances","Presence beacons from the gateway and clients.":"Presence beacons from the gateway and clients.","No instances reported yet.":"No instances reported yet.","unknown host":"unknown host","Last input":"Last input",Reason:"Reason",scopes:"scopes",Active:"Active",Inactive:"Inactive",Global:"Global",Unknown:"Unknown","Include Global":"Include Global","Include Unknown":"Include Unknown","Thinking Level":"Thinking Level","Reasoning Level":"Reasoning Level","Verbose Level":"Verbose Level",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh",full:"full",inherit:"inherit",stream:"stream","on (explicit)":"on (explicit)","Delete Session":"Delete Session",Totals:"Totals",Cost:"Cost",Messages:"Messages",Tokens:"Tokens","Cost Daily":"Cost Daily",Activity:"Activity","Error Rate":"Error Rate","Peak Error Hours":"Peak Error Hours",errors:"errors",msgs:"msgs","Select date range":"Select date range","All Agents":"All Agents","No data":"No data",Scheduler:"Scheduler","Gateway-owned cron scheduler status.":"Gateway-owned cron scheduler status.",Jobs:"Jobs","Next wake":"Next wake","Refreshing…":"Refreshing…","New Job":"New Job","Create a scheduled wakeup or agent run.":"Create a scheduled wakeup or agent run.",Name:"Name",Schedule:"Schedule","Delivery Channel":"Delivery Channel",Payload:"Payload",Agent:"Agent",Message:"Message",Expression:"Expression","Delete Job":"Delete Job","Delete this job?":"Delete this job?","Run Now":"Run Now",Runs:"Runs","Select a job":"Select a job",Error:"Error",Output:"Output","Add Channel":"Add Channel","Edit Channel":"Edit Channel","Configure Channel":"Configure Channel","Channel ID":"Channel ID","Delete Channel":"Delete Channel","No channels configured.":"No channels configured."},qi={"zh-CN":to,zh:to,en:no,"en-US":no},Jr="openclaw_language",Zr="en";function wu(){if(typeof window>"u")return null;try{return localStorage.getItem(Jr)}catch{return null}}function $u(e){if(!(typeof window>"u"))try{localStorage.setItem(Jr,e)}catch{}}function ku(){const e=wu();return e&&qi[e]?e:typeof navigator<"u"&&navigator.language&&navigator.language.toLowerCase().includes("zh")?"zh-CN":Zr}let Xr=null;function un(){return Xr||ku()}function el(e){qi[e]||(console.warn(`[i18n] Unsupported language: ${e}, falling back to 'en'`),e=Zr),Xr=e,$u(e),typeof window<"u"&&window.dispatchEvent(new CustomEvent("language-change",{detail:{language:e}}))}function tl(){const e=un(),t=e==="zh-CN"||e==="zh"?"en":"zh-CN";return el(t),t}function nl(){const e=un();return e==="zh-CN"||e==="zh"}function Su(){return!nl()}function T(e){if(!e||!e.trim())return e;const t=un();if(t==="en"||t==="en-US")return e;const n=qi["zh-CN"];return n&&n[e]?n[e]:e}typeof window<"u"&&(window.T=T,window.getLanguage=un,window.setLanguage=el,window.toggleLanguage=tl,window.isZh=nl,window.isEn=Su,console.log("[i18n] Bilingual translation module loaded"));const Au=[{label:T("Chat"),tabs:["chat"]},{label:T("Control"),tabs:["overview","channels","instances","sessions","usage","cron"]},{label:T("Agent"),tabs:["agents","skills","nodes"]},{label:T("Settings"),tabs:["config","debug","logs"]}],sl={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",nodes:"/nodes",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},il=new Map(Object.entries(sl).map(([e,t])=>[t,e]));function gn(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function an(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function os(e,t=""){const n=gn(t),s=sl[e];return n?`${n}${s}`:s}function al(e,t=""){const n=gn(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let i=an(s).toLowerCase();return i.endsWith("/index.html")&&(i="/"),i==="/"?"chat":il.get(i)??null}function Cu(e){let t=an(e);if(t.endsWith("/index.html")&&(t=an(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const i=`/${n.slice(s).join("/")}`.toLowerCase();if(il.has(i)){const a=n.slice(0,s);return a.length?`/${a.join("/")}`:""}}return`/${n.join("/")}`}function Tu(e){switch(e){case"agents":return"folder";case"chat":return"messageSquare";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"nodes":return"monitor";case"config":return"settings";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function si(e){switch(e){case"agents":return T("Agents");case"overview":return T("Overview");case"channels":return T("Channels");case"instances":return T("Instances");case"sessions":return T("Sessions");case"usage":return T("Usage");case"cron":return T("Cron Jobs");case"skills":return T("Skills");case"nodes":return T("Nodes");case"chat":return T("Chat");case"config":return T("Config");case"debug":return T("Debug");case"logs":return T("Logs");default:return T("Control")}}function _u(e){switch(e){case"agents":return T("Manage agent workspaces, tools, and identities.");case"overview":return T("Gateway status, entry points, and a fast health read.");case"channels":return T("Manage channels and settings.");case"instances":return T("Presence beacons from connected clients and nodes.");case"sessions":return T("Inspect active sessions and adjust per-session defaults.");case"usage":return T("See where tokens go, when sessions spike, and what drives cost.");case"cron":return T("Schedule wakeups and recurring agent runs.");case"skills":return T("Manage skill availability and API key injection.");case"nodes":return T("Paired devices, capabilities, and command exposure.");case"chat":return T("Direct gateway chat session for quick interventions.");case"config":return T("Edit ~/.openclaw/openclaw.json safely.");case"debug":return T("Gateway snapshots, events, and manual RPC calls.");case"logs":return T("Live tail of the gateway file logs.");default:return T("")}}const ol="openclaw.control.settings.v1";function Eu(){const t={gatewayUrl:`${location.protocol==="https:"?"wss":"ws"}://${location.host}`,token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(ol);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function Lu(e){localStorage.setItem(ol,JSON.stringify(e))}const kn=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,Ru=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,Sn=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},Iu=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const i=globalThis.document??null;if(!i){t();return}const a=i.documentElement,o=i,l=Ru();if(!!o.startViewTransition&&!l){let u=.5,g=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")u=kn(n.pointerClientX/window.innerWidth),g=kn(n.pointerClientY/window.innerHeight);else if(n?.element){const p=n.element.getBoundingClientRect();p.width>0&&p.height>0&&typeof window<"u"&&(u=kn((p.left+p.width/2)/window.innerWidth),g=kn((p.top+p.height/2)/window.innerHeight))}a.style.setProperty("--theme-switch-x",`${u*100}%`),a.style.setProperty("--theme-switch-y",`${g*100}%`),a.classList.add("theme-transition");try{const p=o.startViewTransition?.(()=>{t()});p?.finished?p.finished.finally(()=>Sn(a)):Sn(a)}catch{Sn(a),t()}return}t(),Sn(a)};function Mu(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Gi(e){return e==="system"?Mu():e}function Ze(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Lu(n),t.theme!==e.theme&&(e.theme=t.theme,rs(e,Gi(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function rl(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&Ze(e,{...e.settings,lastActiveSessionKey:n})}function Du(e){if(!window.location.search&&!window.location.hash)return;const t=new URL(window.location.href),n=new URLSearchParams(t.search),s=new URLSearchParams(t.hash.startsWith("#")?t.hash.slice(1):t.hash),i=n.get("token")??s.get("token"),a=n.get("password")??s.get("password"),o=n.get("session")??s.get("session"),l=n.get("gatewayUrl")??s.get("gatewayUrl");let c=!1;if(i!=null){const g=i.trim();g&&g!==e.settings.token&&Ze(e,{...e.settings,token:g}),n.delete("token"),s.delete("token"),c=!0}if(a!=null){const g=a.trim();g&&(e.password=g),n.delete("password"),s.delete("password"),c=!0}if(o!=null){const g=o.trim();g&&(e.sessionKey=g,Ze(e,{...e.settings,sessionKey:g,lastActiveSessionKey:g}))}if(l!=null){const g=l.trim();g&&g!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=g),n.delete("gatewayUrl"),s.delete("gatewayUrl"),c=!0}if(!c)return;t.search=n.toString();const u=s.toString();t.hash=u?`#${u}`:"",window.history.replaceState({},"",t.toString())}function Pu(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ri(e):Ii(e),t==="debug"?Mi(e):Di(e),Vi(e),cl(e,t,!1)}function Nu(e,t,n){Iu({nextTheme:t,applyTheme:()=>{e.theme=t,Ze(e,{...e.settings,theme:t}),rs(e,Gi(t))},context:n,currentTheme:e.theme})}async function Vi(e){if(e.tab==="overview"&&await dl(e),e.tab==="channels"&&await Ku(e),e.tab==="instances"&&await Wi(e),e.tab==="sessions"&&await wt(e),e.tab==="cron"&&await Kn(e),e.tab==="skills"&&await dn(e),e.tab==="agents"){await Pi(e),await Re(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&Lr(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(Er(e,n),e.agentsPanel==="skills"&&Nn(e,n),e.agentsPanel==="channels"&&xe(e,!1),e.agentsPanel==="cron"&&Kn(e))}e.tab==="nodes"&&(await ns(e),await et(e),await Re(e),await Ki(e)),e.tab==="chat"&&(await ml(e),ln(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await $r(e),await Re(e)),e.tab==="debug"&&(await ts(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Li(e,{reset:!0}),_r(e,!0))}function Fu(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?gn(e):Cu(window.location.pathname)}function Ou(e){e.theme=e.settings.theme??"system",rs(e,Gi(e.theme))}function rs(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function Bu(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&rs(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function Uu(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function zu(e,t){if(typeof window>"u")return;const n=al(window.location.pathname,e.basePath)??"chat";ll(e,n),cl(e,n,t)}function Hu(e){if(typeof window>"u")return;const t=al(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,Ze(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),ll(e,t)}function ll(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ri(e):Ii(e),t==="debug"?Mi(e):Di(e),e.connected&&Vi(e)}function cl(e,t,n){if(typeof window>"u")return;const s=an(os(t,e.basePath)),i=an(window.location.pathname),a=new URL(window.location.href);t==="chat"&&e.sessionKey?a.searchParams.set("session",e.sessionKey):a.searchParams.delete("session"),i!==s&&(a.pathname=s),n?window.history.replaceState({},"",a.toString()):window.history.pushState({},"",a.toString())}function ju(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function dl(e){await Promise.all([xe(e,!1),Wi(e),wt(e),cn(e),ts(e)])}async function Ku(e){await Promise.all([xe(e,!0),$r(e),Re(e)])}async function Kn(e){await Promise.all([xe(e,!1),cn(e),ss(e)])}const so=50,Wu=80,qu=12e4;function Gu(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(i=>{if(!i||typeof i!="object")return null;const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>!!i);return s.length===0?null:s.join(`
`)}function io(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Gu(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=Rr(n,qu);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function Vu(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Qu(e){if(e.toolStreamOrder.length<=so)return;const t=e.toolStreamOrder.length-so,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Yu(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function ii(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Yu(e)}function Ju(e,t=!1){if(t){ii(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>ii(e),Wu))}function ls(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],ii(e)}const Zu=5e3;function Xu(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},Zu))}function eg(e,t){if(!t)return;if(t.stream==="compaction"){Xu(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},i=typeof s.toolCallId=="string"?s.toolCallId:"";if(!i)return;const a=typeof s.name=="string"?s.name:"tool",o=typeof s.phase=="string"?s.phase:"",l=o==="start"?s.args:void 0,c=o==="update"?io(s.partialResult):o==="result"?io(s.result):void 0,u=Date.now();let g=e.toolStreamById.get(i);g?(g.name=a,l!==void 0&&(g.args=l),c!==void 0&&(g.output=c||void 0),g.updatedAt=u):(g={toolCallId:i,runId:t.runId,sessionKey:n,name:a,args:l,output:c||void 0,startedAt:typeof t.ts=="number"?t.ts:u,updatedAt:u,message:{}},e.toolStreamById.set(i,g),e.toolStreamOrder.push(i)),g.message=Vu(g),Qu(e),Ju(e,o==="result")}const tg=/^\[([^\]]+)\]\s*/,ng=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],Rs=new WeakMap,Is=new WeakMap;function sg(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:ng.some(t=>e.startsWith(`${t} `))}function Ms(e){const t=e.match(tg);if(!t)return e;const n=t[1]??"";return sg(n)?e.slice(t[0].length):e}function ai(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?Cs(s):Ms(s);if(Array.isArray(s)){const i=s.map(a=>{const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>typeof a=="string");if(i.length>0){const a=i.join(`
`);return n==="assistant"?Cs(a):Ms(a)}}return typeof t.text=="string"?n==="assistant"?Cs(t.text):Ms(t.text):null}function ul(e){if(!e||typeof e!="object")return ai(e);const t=e;if(Rs.has(t))return Rs.get(t)??null;const n=ai(e);return Rs.set(t,n),n}function ao(e){const n=e.content,s=[];if(Array.isArray(n))for(const l of n){const c=l;if(c.type==="thinking"&&typeof c.thinking=="string"){const u=c.thinking.trim();u&&s.push(u)}}if(s.length>0)return s.join(`
`);const i=ag(e);if(!i)return null;const o=[...i.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(l=>(l[1]??"").trim()).filter(Boolean);return o.length>0?o.join(`
`):null}function ig(e){if(!e||typeof e!="object")return ao(e);const t=e;if(Is.has(t))return Is.get(t)??null;const n=ao(e);return Is.set(t,n),n}function ag(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(i=>{const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>typeof i=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function og(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let oo=!1;function ro(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function rg(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function lg(){oo||(oo=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function Qi(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),ro(t)}return lg(),ro(rg())}async function on(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function cg(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function dg(e,t,n){if(!e.client||!e.connected)return null;const s=t.trim(),i=n&&n.length>0;if(!s&&!i)return null;const a=Date.now(),o=[];if(s&&o.push({type:"text",text:s}),i)for(const u of n)o.push({type:"image",source:{type:"base64",media_type:u.mimeType,data:u.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:o,timestamp:a}],e.chatSending=!0,e.lastError=null;const l=Qi();e.chatRunId=l,e.chatStream="",e.chatStreamStartedAt=a;const c=i?n.map(u=>{const g=cg(u.dataUrl);return g?{type:"image",mimeType:g.mimeType,content:g.content}:null}).filter(u=>u!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:l,attachments:c}),l}catch(u){const g=String(u);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=g,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+g}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function ug(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function gg(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=ai(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const gl=120;function pl(e){return e.chatSending||!!e.chatRunId}function pg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function fg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function fl(e){e.connected&&(e.chatMessage="",await ug(e))}function hg(e,t,n,s){const i=t.trim(),a=!!(n&&n.length>0);!i&&!a||(e.chatQueue=[...e.chatQueue,{id:Qi(),text:i,createdAt:Date.now(),attachments:a?n?.map(o=>({...o})):void 0,refreshSessions:s}])}async function hl(e,t,n){ls(e);const s=await dg(e,t,n?.attachments),i=!!s;return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&rl(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),ln(e),i&&!e.chatRunId&&vl(e),i&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),i}async function vl(e){if(!e.connected||pl(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await hl(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function vg(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function mg(e,t,n){if(!e.connected)return;const s=e.chatMessage,i=(t??e.chatMessage).trim(),a=e.chatAttachments??[],o=t==null?a:[],l=o.length>0;if(!i&&!l)return;if(pg(i)){await fl(e);return}const c=fg(i);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),pl(e)){hg(e,i,o,c);return}await hl(e,i,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:l?o:void 0,previousAttachments:t==null?a:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:c})}async function ml(e,t){await Promise.all([on(e),wt(e,{activeMinutes:gl}),oi(e)]),t?.scheduleScroll!==!1&&ln(e)}const bg=vl;function yg(e){const t=Tr(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function xg(e,t){const n=gn(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function oi(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=yg(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=xg(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const i=await s.json(),a=typeof i.avatarUrl=="string"?i.avatarUrl.trim():"";e.chatAvatarUrl=a||null}catch{e.chatAvatarUrl=null}}const wg={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},$g={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},kg=50,Sg=200,Ag="Assistant";function lo(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function ri(e){const t=lo(e?.name,kg)??Ag,n=lo(e?.avatar??void 0,Sg)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function Cg(){return ri(typeof window>"u"?{}:{name:window.__OPENCLAW_ASSISTANT_NAME__,avatar:window.__OPENCLAW_ASSISTANT_AVATAR__})}async function bl(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const i=await e.client.request("agent.identity.get",s);if(!i)return;const a=ri(i);e.assistantName=a.name,e.assistantAvatar=a.avatar,e.assistantAgentId=a.agentId??null}catch{}}function li(e){return typeof e=="object"&&e!==null}function Tg(e){if(!li(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!li(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const i=typeof e.createdAtMs=="number"?e.createdAtMs:0,a=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!i||!a?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:i,expiresAtMs:a}}function _g(e){if(!li(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function yl(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function Eg(e,t){const n=yl(e).filter(s=>s.id!==t.id);return n.push(t),n}function co(e,t){return yl(e).filter(n=>n.id!==t)}function Lg(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",i=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&i.push(e.nonce??""),i.join("|")}const xl={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},uo=xl,ci={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(xl));new Set(Object.values(ci));const Rg=4008;class Ig{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>this.handleMessage(String(t.data??""))),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let i=null,a=!1,o=this.opts.token;if(t){i=await ji();const g=Md({deviceId:i.deviceId,role:s})?.token;o=g??this.opts.token,a=!!(g&&this.opts.token)}const l=o||this.opts.password?{token:o,password:this.opts.password}:void 0;let c;if(t&&i){const g=Date.now(),p=this.connectNonce??void 0,h=Lg({deviceId:i.deviceId,clientId:this.opts.clientName??uo.CONTROL_UI,clientMode:this.opts.mode??ci.WEBCHAT,role:s,scopes:n,signedAtMs:g,token:o??null,nonce:p}),d=await iu(i.privateKey,h);c={id:i.deviceId,publicKey:i.publicKey,signature:d,signedAt:g,nonce:p}}const u={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??uo.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??ci.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:c,caps:[],auth:l,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",u).then(g=>{g?.auth?.deviceToken&&i&&Pr({deviceId:i.deviceId,role:g.auth.role??s,token:g.auth.deviceToken,scopes:g.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(g)}).catch(()=>{a&&i&&Nr({deviceId:i.deviceId,role:s}),this.ws?.close(Rg,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const i=n;if(i.event==="connect.challenge"){const o=i.payload,l=o&&typeof o.nonce=="string"?o.nonce:null;l&&(this.connectNonce=l,this.sendConnect());return}const a=typeof i.seq=="number"?i.seq:null;a!==null&&(this.lastSeq!==null&&a>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:a}),this.lastSeq=a);try{this.opts.onEvent?.(i)}catch(o){console.error("[gateway] event handler error:",o)}return}if(s.type==="res"){const i=n,a=this.pending.get(i.id);if(!a)return;this.pending.delete(i.id),i.ok?a.resolve(i.payload):a.reject(new Error(i.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=Qi(),i={type:"req",id:s,method:t,params:n},a=new Promise((o,l)=>{this.pending.set(s,{resolve:c=>o(c),reject:l})});return this.ws.send(JSON.stringify(i)),a}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function Ds(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const i=t.mainKey?.trim()||"main",a=t.defaultAgentId?.trim();return n==="main"||n===i||a&&(n===`agent:${a}:main`||n===`agent:${a}:${i}`)?s:n}function Mg(e,t){if(!t?.mainSessionKey)return;const n=Ds(e.sessionKey,t),s=Ds(e.settings.sessionKey,t),i=Ds(e.settings.lastActiveSessionKey,t),a=n||s||e.sessionKey,o={...e.settings,sessionKey:s||a,lastActiveSessionKey:i||a},l=o.sessionKey!==e.settings.sessionKey||o.lastActiveSessionKey!==e.settings.lastActiveSessionKey;a!==e.sessionKey&&(e.sessionKey=a),l&&Ze(e,o)}function wl(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new Ig({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,Ng(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,ls(e),bl(e),Pi(e),ns(e,{quiet:!0}),et(e,{quiet:!0}),Vi(e)},onClose:({code:t,reason:n})=>{e.connected=!1,t!==1012&&(e.lastError=`disconnected (${t}): ${n||"no reason"}`)},onEvent:t=>Dg(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function Dg(e,t){try{Pg(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function Pg(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;eg(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&rl(e,n.sessionKey);const s=gg(e,n);if(s==="final"||s==="error"||s==="aborted"){ls(e),bg(e);const i=n?.runId;i&&e.refreshSessionsAfterChat.has(i)&&(e.refreshSessionsAfterChat.delete(i),s==="final"&&wt(e,{activeMinutes:gl}))}s==="final"&&on(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Kn(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&et(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=Tg(t.payload);if(n){e.execApprovalQueue=Eg(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=co(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=_g(t.payload);n&&(e.execApprovalQueue=co(e.execApprovalQueue,n.id))}}function Ng(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&Mg(e,n.sessionDefaults)}function Fg(e){e.basePath=Fu(),Du(e),zu(e,!0),Ou(e),Bu(e),window.addEventListener("popstate",e.popStateHandler),wl(e),wd(e),e.tab==="logs"&&Ri(e),e.tab==="debug"&&Mi(e)}function Og(e){fd(e)}function Bg(e){window.removeEventListener("popstate",e.popStateHandler),$d(e),Ii(e),Di(e),Uu(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function Ug(e,t){if(!(e.tab==="chat"&&e.chatManualRefreshInFlight)){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;ln(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&_r(e,t.has("tab")||t.has("logsAutoFollow"))}}const Yi={CHILD:2},Ji=e=>(...t)=>({_$litDirective$:e,values:t});let Zi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:zg}=Pc,go=e=>e,Hg=e=>e.strings===void 0,po=()=>document.createComment(""),Ot=(e,t,n)=>{const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=s.insertBefore(po(),i),o=s.insertBefore(po(),i);n=new zg(a,o,e,e.options)}else{const a=n._$AB.nextSibling,o=n._$AM,l=o!==e;if(l){let c;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(c=e._$AU)!==o._$AU&&n._$AP(c)}if(a!==i||l){let c=n._$AA;for(;c!==a;){const u=go(c).nextSibling;go(s).insertBefore(c,i),c=u}}}return n},at=(e,t,n=e)=>(e._$AI(t,n),e),jg={},Kg=(e,t=jg)=>e._$AH=t,Wg=e=>e._$AH,Ps=e=>{e._$AR(),e._$AA.remove()};const fo=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},$l=Ji(class extends Zi{constructor(e){if(super(e),e.type!==Yi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],a=[];let o=0;for(const l of e)i[o]=s?s(l,o):o,a[o]=n(l,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=Wg(e),{values:a,keys:o}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=o,a;const l=this.ut??=[],c=[];let u,g,p=0,h=i.length-1,d=0,f=a.length-1;for(;p<=h&&d<=f;)if(i[p]===null)p++;else if(i[h]===null)h--;else if(l[p]===o[d])c[d]=at(i[p],a[d]),p++,d++;else if(l[h]===o[f])c[f]=at(i[h],a[f]),h--,f--;else if(l[p]===o[f])c[f]=at(i[p],a[f]),Ot(e,c[f+1],i[p]),p++,f--;else if(l[h]===o[d])c[d]=at(i[h],a[d]),Ot(e,i[p],i[h]),h--,d++;else if(u===void 0&&(u=fo(o,d,f),g=fo(l,p,h)),u.has(l[p]))if(u.has(l[h])){const m=g.get(o[d]),S=m!==void 0?i[m]:null;if(S===null){const k=Ot(e,i[p]);at(k,a[d]),c[d]=k}else c[d]=at(S,a[d]),Ot(e,i[p],S),i[m]=null;d++}else Ps(i[h]),h--;else Ps(i[p]),p++;for(;d<=f;){const m=Ot(e,c[f+1]);at(m,a[d]),c[d++]=m}for(;p<=h;){const m=i[p++];m!==null&&Ps(m)}return this.ut=o,Kg(e,c),Je}}),ce={messageSquare:r`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:r`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:r`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:r`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:r`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:r`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:r`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:r`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:r`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:r`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:r`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:r`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:r`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:r`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:r`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:r`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `};function qg(e,t){const n=os(t,e.basePath);return r`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${s=>{s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),e.setTab(t))}}
      title=${si(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${ce[Tu(t)]}</span>
      <span class="nav-item__text">${si(t)}</span>
    </a>
  `}function Gg(e){const t=Vg(e.hello,e.sessionsResult),n=Qg(e.sessionKey,e.sessionsResult,t),s=e.onboarding,i=e.onboarding,a=e.onboarding?!1:e.settings.chatShowThinking,o=e.onboarding?!0:e.settings.chatFocusMode,l=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,c=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return r`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${u=>{const g=u.target.value;e.sessionKey=g,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:g,lastActiveSessionKey:g}),e.loadAssistantIdentity(),ju(e,g),on(e)}}
        >
          ${$l(n,u=>u.key,u=>r`<option value=${u.key}>
                ${u.displayName??u.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${async()=>{const u=e;u.chatManualRefreshInFlight=!0,u.chatNewMessagesBelow=!1,await u.updateComplete,u.resetToolStream();try{await ml(e,{scheduleScroll:!1}),u.scrollToBottom({smooth:!0})}finally{requestAnimationFrame(()=>{u.chatManualRefreshInFlight=!1,u.chatNewMessagesBelow=!1})}}}
        title="Refresh chat data"
      >
        ${l}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${a?"active":""}"
        ?disabled=${s}
        @click=${()=>{s||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${a}
        title=${s?"Disabled during onboarding":"Toggle assistant thinking/working output"}
      >
        ${ce.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${o?"active":""}"
        ?disabled=${i}
        @click=${()=>{i||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${o}
        title=${i?"Disabled during onboarding":"Toggle focus mode (hide sidebar + page header)"}
      >
        ${c}
      </button>
    </div>
  `}function Vg(e,t){const n=e?.snapshot,s=n?.sessionDefaults?.mainSessionKey?.trim();if(s)return s;const i=n?.sessionDefaults?.mainKey?.trim();return i||(t?.sessions?.some(a=>a.key==="main")?"main":null)}function Ns(e,t){const n=t?.displayName?.trim()||"",s=t?.label?.trim()||"";return n&&n!==e?`${n} (${e})`:s&&s!==e?`${s} (${e})`:e}function Qg(e,t,n){const s=new Set,i=[],a=n&&t?.sessions?.find(l=>l.key===n),o=t?.sessions?.find(l=>l.key===e);if(n&&(s.add(n),i.push({key:n,displayName:Ns(n,a||void 0)})),s.has(e)||(s.add(e),i.push({key:e,displayName:Ns(e,o)})),t?.sessions)for(const l of t.sessions)s.has(l.key)||(s.add(l.key),i.push({key:l.key,displayName:Ns(l.key,l)}));return i}const Yg=["system","light","dark"];function Jg(e){const t=Math.max(0,Yg.indexOf(e.theme)),n=s=>i=>{const o={element:i.currentTarget};(i.clientX||i.clientY)&&(o.pointerClientX=i.clientX,o.pointerClientY=i.clientY),e.setTheme(s,o)};return r`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="Theme">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="System theme"
          title="System"
        >
          ${ep()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="Light theme"
          title="Light"
        >
          ${Zg()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="Dark theme"
          title="Dark"
        >
          ${Xg()}
        </button>
      </div>
    </div>
  `}function Zg(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function Xg(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function ep(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}function ho(){const e=un(),t=e==="zh-CN"||e==="zh";return r`
    <div class="language-toggle" style="margin-left: 8px;">
      <button
        class="btn btn--sm language-toggle__btn"
        @click=${()=>{tl(),window.location.reload()}}
        title="${T("Switch Language")}"
        aria-label="${T("Switch Language")}"
      >
        <span class="language-toggle__icon">🌐</span>
        <span class="language-toggle__text">${t?"EN":"中文"}</span>
      </button>
    </div>
  `}function kl(e,t){if(!e)return e;const s=e.files.some(i=>i.name===t.name)?e.files.map(i=>i.name===t.name?t:i):[...e.files,t];return{...e,files:s}}async function Fs(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(s=>s.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function tp(e,t,n,s){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.get",{agentId:t,name:n});if(i?.file){const a=i.file.content??"",o=e.agentFileContents[n]??"",l=e.agentFileDrafts[n],c=s?.preserveDraft??!0;e.agentFilesList=kl(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:a},(!c||!Object.hasOwn(e.agentFileDrafts,n)||l===o)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:a})}}catch(i){e.agentFilesError=String(i)}finally{e.agentFilesLoading=!1}}}async function np(e,t,n,s){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.set",{agentId:t,name:n,content:s});i?.file&&(e.agentFilesList=kl(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:s},e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}catch(i){e.agentFilesError=String(i)}finally{e.agentFileSaving=!1}}}async function Sl(e,t){if(!(!e.client||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const n=t?.startDate??e.usageStartDate,s=t?.endDate??e.usageEndDate,[i,a]=await Promise.all([e.client.request("sessions.usage",{startDate:n,endDate:s,limit:1e3,includeContextWeight:!0}),e.client.request("usage.cost",{startDate:n,endDate:s})]);i&&(e.usageResult=i),a&&(e.usageCostSummary=a)}catch(n){e.usageError=String(n)}finally{e.usageLoading=!1}}}async function sp(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function ip(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:500});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}const ap={bash:"exec","apply-patch":"apply_patch"},op={"group:memory":["memory_search","memory_get"],"group:web":["web_search","web_fetch"],"group:fs":["read","write","edit","apply_patch"],"group:runtime":["exec","process"],"group:sessions":["sessions_list","sessions_history","sessions_send","sessions_spawn","subagents","session_status"],"group:ui":["browser","canvas"],"group:automation":["cron","gateway"],"group:messaging":["message"],"group:nodes":["nodes"],"group:openclaw":["browser","canvas","nodes","cron","message","gateway","agents_list","sessions_list","sessions_history","sessions_send","sessions_spawn","subagents","session_status","memory_search","memory_get","web_search","web_fetch","image"]},rp={minimal:{allow:["session_status"]},coding:{allow:["group:fs","group:runtime","group:sessions","group:memory","image"]},messaging:{allow:["group:messaging","sessions_list","sessions_history","sessions_send","session_status"]},full:{}};function Fe(e){const t=e.trim().toLowerCase();return ap[t]??t}function lp(e){return e?e.map(Fe).filter(Boolean):[]}function cp(e){const t=lp(e),n=[];for(const s of t){const i=op[s];if(i){n.push(...i);continue}n.push(s)}return Array.from(new Set(n))}function dp(e){if(!e)return;const t=rp[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}function up(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",i=e.version??"";return`${t} ${n} ${s} ${i}`.trim()}function gp(e){const t=e.ts??null;return t?Q(t):"n/a"}function Xi(e){return e?`${mt(e)} (${Q(e)})`:"n/a"}function pp(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function fp(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function hp(e){const t=e.state??{},n=t.nextRunAtMs?mt(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?mt(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function Al(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${mt(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${Fi(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function vp(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,s=e.delivery;if(s&&s.mode!=="none"){const i=s.channel||s.to?` (${s.channel??"last"}${s.to?` -> ${s.to}`:""})`:"";return`${n} · ${s.mode}${i}`}return n}const vo=[{id:"fs",label:"Files",tools:[{id:"read",label:"read",description:"Read file contents"},{id:"write",label:"write",description:"Create or overwrite files"},{id:"edit",label:"edit",description:"Make precise edits"},{id:"apply_patch",label:"apply_patch",description:"Patch files (OpenAI)"}]},{id:"runtime",label:"Runtime",tools:[{id:"exec",label:"exec",description:"Run shell commands"},{id:"process",label:"process",description:"Manage background processes"}]},{id:"web",label:"Web",tools:[{id:"web_search",label:"web_search",description:"Search the web"},{id:"web_fetch",label:"web_fetch",description:"Fetch web content"}]},{id:"memory",label:"Memory",tools:[{id:"memory_search",label:"memory_search",description:"Semantic search"},{id:"memory_get",label:"memory_get",description:"Read memory files"}]},{id:"sessions",label:"Sessions",tools:[{id:"sessions_list",label:"sessions_list",description:"List sessions"},{id:"sessions_history",label:"sessions_history",description:"Session history"},{id:"sessions_send",label:"sessions_send",description:"Send to session"},{id:"sessions_spawn",label:"sessions_spawn",description:"Spawn sub-agent"},{id:"session_status",label:"session_status",description:"Session status"}]},{id:"ui",label:"UI",tools:[{id:"browser",label:"browser",description:"Control web browser"},{id:"canvas",label:"canvas",description:"Control canvases"}]},{id:"messaging",label:"Messaging",tools:[{id:"message",label:"message",description:"Send messages"}]},{id:"automation",label:"Automation",tools:[{id:"cron",label:"cron",description:"Schedule tasks"},{id:"gateway",label:"gateway",description:"Gateway control"}]},{id:"nodes",label:"Nodes",tools:[{id:"nodes",label:"nodes",description:"Nodes + devices"}]},{id:"agents",label:"Agents",tools:[{id:"agents_list",label:"agents_list",description:"List agents"}]},{id:"media",label:"Media",tools:[{id:"image",label:"image",description:"Image understanding"}]}],mp=[{id:"minimal",label:"Minimal"},{id:"coding",label:"Coding"},{id:"messaging",label:"Messaging"},{id:"full",label:"Full"}];function di(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function An(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let s=0;s<t.length;s+=1)if(t.charCodeAt(s)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function cs(e,t){const n=t?.emoji?.trim();if(n&&An(n))return n;const s=e.identity?.emoji?.trim();if(s&&An(s))return s;const i=t?.avatar?.trim();if(i&&An(i))return i;const a=e.identity?.avatar?.trim();return a&&An(a)?a:""}function Cl(e,t){return t&&e===t?"default":null}function bp(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function ds(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(a=>a?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function Tl(e,t,n,s,i){const a=ds(t,e.id),l=(n&&n.agentId===e.id?n.workspace:null)||a.entry?.workspace||a.defaults?.workspace||"default",c=a.entry?.model?Qt(a.entry?.model):Qt(a.defaults?.model),u=i?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||a.entry?.name||e.id,g=cs(e,i)||"-",p=Array.isArray(a.entry?.skills)?a.entry?.skills:null,h=p?.length??null;return{workspace:l,model:c,identityName:u,identityEmoji:g,skillsLabel:p?`${h} selected`:"all skills",isDefault:!!(s&&e.id===s)}}function Qt(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const s=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return s>0?`${n} (+${s} fallback)`:n}}return"-"}function mo(e){const t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function bo(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function yp(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(s=>typeof s=="string"):null}return null}function xp(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function wp(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const s=[];for(const[i,a]of Object.entries(n)){const o=i.trim();if(!o)continue;const l=a&&typeof a=="object"&&"alias"in a&&typeof a.alias=="string"?a.alias?.trim():void 0,c=l&&l!==o?`${l} (${o})`:o;s.push({value:o,label:c})}return s}function $p(e,t){const n=wp(e),s=t?n.some(i=>i.value===t):!1;return t&&!s&&n.unshift({value:t,label:`Current (${t})`}),n.length===0?r`
      <option value="" disabled>No configured models</option>
    `:n.map(i=>r`<option value=${i.value}>${i.label}</option>`)}function kp(e){const t=Fe(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function ui(e){return Array.isArray(e)?cp(e).map(kp).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function Yt(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function Sp(e,t){if(!t)return!0;const n=Fe(e),s=ui(t.deny);if(Yt(n,s))return!1;const i=ui(t.allow);return!!(i.length===0||Yt(n,i)||n==="apply_patch"&&Yt("exec",i))}function yo(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=Fe(e),s=ui(t);return!!(Yt(n,s)||n==="apply_patch"&&Yt("exec",s))}function Ap(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,s=e.selectedAgentId??n??t[0]?.id??null,i=s?t.find(a=>a.id===s)??null:null;return r`
    <div class="agents-layout">
      <section class="card agents-sidebar">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Agents</div>
            <div class="card-sub">${t.length} configured.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
        </div>
        ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
        <div class="agent-list" style="margin-top: 12px;">
          ${t.length===0?r`
                  <div class="muted">No agents found.</div>
                `:t.map(a=>{const o=Cl(a.id,n),l=cs(a,e.agentIdentityById[a.id]??null);return r`
                    <button
                      type="button"
                      class="agent-row ${s===a.id?"active":""}"
                      @click=${()=>e.onSelectAgent(a.id)}
                    >
                      <div class="agent-avatar">
                        ${l||di(a).slice(0,1)}
                      </div>
                      <div class="agent-info">
                        <div class="agent-title">${di(a)}</div>
                        <div class="agent-sub mono">${a.id}</div>
                      </div>
                      ${o?r`<span class="agent-pill">${o}</span>`:v}
                    </button>
                  `})}
        </div>
      </section>
      <section class="agents-main">
        ${i?r`
              ${Cp(i,n,e.agentIdentityById[i.id]??null)}
              ${Tp(e.activePanel,a=>e.onSelectPanel(a))}
              ${e.activePanel==="overview"?_p({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):v}
              ${e.activePanel==="files"?Op({agentId:i.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):v}
              ${e.activePanel==="tools"?Up({agentId:i.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
              ${e.activePanel==="skills"?Hp({agentId:i.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
              ${e.activePanel==="channels"?Np({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):v}
              ${e.activePanel==="cron"?Fp({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):v}
            `:r`
                <div class="card">
                  <div class="card-title">Select an agent</div>
                  <div class="card-sub">Pick an agent to inspect its workspace and tools.</div>
                </div>
              `}
      </section>
    </div>
  `}function Cp(e,t,n){const s=Cl(e.id,t),i=di(e),a=e.identity?.theme?.trim()||"Agent workspace and routing.",o=cs(e,n);return r`
    <section class="card agent-header">
      <div class="agent-header-main">
        <div class="agent-avatar agent-avatar--lg">
          ${o||i.slice(0,1)}
        </div>
        <div>
          <div class="card-title">${i}</div>
          <div class="card-sub">${a}</div>
        </div>
      </div>
      <div class="agent-header-meta">
        <div class="mono">${e.id}</div>
        ${s?r`<span class="agent-pill">${s}</span>`:v}
      </div>
    </section>
  `}function Tp(e,t){return r`
    <div class="agent-tabs">
      ${[{id:"overview",label:"Overview"},{id:"files",label:"Files"},{id:"tools",label:"Tools"},{id:"skills",label:"Skills"},{id:"channels",label:"Channels"},{id:"cron",label:"Cron Jobs"}].map(s=>r`
          <button
            class="agent-tab ${e===s.id?"active":""}"
            type="button"
            @click=${()=>t(s.id)}
          >
            ${s.label}
          </button>
        `)}
    </div>
  `}function _p(e){const{agent:t,configForm:n,agentFilesList:s,agentIdentity:i,agentIdentityLoading:a,agentIdentityError:o,configLoading:l,configSaving:c,configDirty:u,onConfigReload:g,onConfigSave:p,onModelChange:h,onModelFallbacksChange:d}=e,f=ds(n,t.id),S=(s&&s.agentId===t.id?s.workspace:null)||f.entry?.workspace||f.defaults?.workspace||"default",k=f.entry?.model?Qt(f.entry?.model):Qt(f.defaults?.model),y=Qt(f.defaults?.model),A=bo(f.entry?.model)||(k!=="-"?mo(k):null),C=bo(f.defaults?.model)||(y!=="-"?mo(y):null),I=A??C??null,_=yp(f.entry?.model),M=_?_.join(", "):"",H=i?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||f.entry?.name||"-",ie=cs(t,i)||"-",F=Array.isArray(f.entry?.skills)?f.entry?.skills:null,j=F?.length??null,de=a?"Loading…":o?"Unavailable":"",E=!!(e.defaultId&&t.id===e.defaultId);return r`
    <section class="card">
      <div class="card-title">Overview</div>
      <div class="card-sub">Workspace paths and identity metadata.</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${S}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${k}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${H}</div>
          ${de?r`<div class="agent-kv-sub muted">${de}</div>`:v}
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${E?"yes":"no"}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${ie}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${F?`${j} selected`:"all skills"}</div>
        </div>
      </div>

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">Model Selection</div>
        <div class="row" style="gap: 12px; flex-wrap: wrap;">
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Primary model${E?" (default)":""}</span>
            <select
              .value=${I??""}
              ?disabled=${!n||l||c}
              @change=${U=>h(t.id,U.target.value||null)}
            >
              ${E?v:r`
                      <option value="">
                        ${C?`Inherit default (${C})`:"Inherit default"}
                      </option>
                    `}
              ${$p(n,I??void 0)}
            </select>
          </label>
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Fallbacks (comma-separated)</span>
            <input
              .value=${M}
              ?disabled=${!n||l||c}
              placeholder="provider/model, provider/model"
              @input=${U=>d(t.id,xp(U.target.value))}
            />
          </label>
        </div>
        <div class="row" style="justify-content: flex-end; gap: 8px;">
          <button
            class="btn btn--sm"
            ?disabled=${l}
            @click=${g}
          >
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${c||!u}
            @click=${p}
          >
            ${c?"Saving…":"Save"}
          </button>
        </div>
      </div>
    </section>
  `}function _l(e,t){return r`
    <section class="card">
      <div class="card-title">Agent Context</div>
      <div class="card-sub">${t}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${e.workspace}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${e.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${e.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${e.identityEmoji}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${e.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${e.isDefault?"yes":"no"}</div>
        </div>
      </div>
    </section>
  `}function Ep(e,t){const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Lp(e){if(!e)return[];const t=new Set;for(const i of e.channelOrder??[])t.add(i);for(const i of e.channelMeta??[])t.add(i.id);for(const i of Object.keys(e.channelAccounts??{}))t.add(i);const n=[],s=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const i of s)t.has(i)&&(n.push(i),t.delete(i));for(const i of t)n.push(i);return n.map(i=>({id:i,label:Ep(e,i),accounts:e.channelAccounts?.[i]??[]}))}const Rp=["groupPolicy","streamMode","dmPolicy"];function Ip(e,t){if(!e)return null;const s=(e.channels??{})[t];if(s&&typeof s=="object")return s;const i=e[t];return i&&typeof i=="object"?i:null}function Mp(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function Dp(e,t){const n=Ip(e,t);return n?Rp.flatMap(s=>s in n?[{label:s,value:Mp(n[s])}]:[]):[]}function Pp(e){let t=0,n=0,s=0;for(const i of e){const a=i.probe&&typeof i.probe=="object"&&"ok"in i.probe?!!i.probe.ok:!1;(i.connected===!0||i.running===!0||a)&&(t+=1),i.configured&&(n+=1),i.enabled&&(s+=1)}return{total:e.length,connected:t,configured:n,enabled:s}}function Np(e){const t=Tl(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=Lp(e.snapshot),s=e.lastSuccess?Q(e.lastSuccess):"never";return r`
    <section class="grid grid-cols-2">
      ${_l(t,"Workspace, identity, and model configuration.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Channels</div>
            <div class="card-sub">Gateway-wide channel status snapshot.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">
          Last refresh: ${s}
        </div>
        ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
        ${e.snapshot?v:r`
                <div class="callout info" style="margin-top: 12px">Load channels to see live status.</div>
              `}
        ${n.length===0?r`
                <div class="muted" style="margin-top: 16px">No channels found.</div>
              `:r`
              <div class="list" style="margin-top: 16px;">
                ${n.map(i=>{const a=Pp(i.accounts),o=a.total?`${a.connected}/${a.total} connected`:"no accounts",l=a.configured?`${a.configured} configured`:"not configured",c=a.total?`${a.enabled} enabled`:"disabled",u=Dp(e.configForm,i.id);return r`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${i.label}</div>
                        <div class="list-sub mono">${i.id}</div>
                      </div>
                      <div class="list-meta">
                        <div>${o}</div>
                        <div>${l}</div>
                        <div>${c}</div>
                        ${u.length>0?u.map(g=>r`<div>${g.label}: ${g.value}</div>`):v}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </section>
    </section>
  `}function Fp(e){const t=Tl(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=e.jobs.filter(s=>s.agentId===e.agent.id);return r`
    <section class="grid grid-cols-2">
      ${_l(t,"Workspace and scheduling targets.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Scheduler</div>
            <div class="card-sub">Gateway cron status.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${Xi(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
      </section>
    </section>
    <section class="card">
      <div class="card-title">Agent Cron Jobs</div>
      <div class="card-sub">Scheduled jobs targeting this agent.</div>
      ${n.length===0?r`
              <div class="muted" style="margin-top: 16px">No jobs assigned.</div>
            `:r`
              <div class="list" style="margin-top: 16px;">
                ${n.map(s=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${s.name}</div>
                      ${s.description?r`<div class="list-sub">${s.description}</div>`:v}
                      <div class="chip-row" style="margin-top: 6px;">
                        <span class="chip">${Al(s)}</span>
                        <span class="chip ${s.enabled?"chip-ok":"chip-warn"}">
                          ${s.enabled?"enabled":"disabled"}
                        </span>
                        <span class="chip">${s.sessionTarget}</span>
                      </div>
                    </div>
                    <div class="list-meta">
                      <div class="mono">${hp(s)}</div>
                      <div class="muted">${vp(s)}</div>
                    </div>
                  </div>
                `)}
              </div>
            `}
    </section>
  `}function Op(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],s=e.agentFileActive??null,i=s?n.find(c=>c.name===s)??null:null,a=s?e.agentFileContents[s]??"":"",o=s?e.agentFileDrafts[s]??a:"",l=s?o!==a:!1;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Core Files</div>
          <div class="card-sub">Bootstrap persona, identity, and tool guidance.</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${e.agentFilesLoading}
          @click=${()=>e.onLoadFiles(e.agentId)}
        >
          ${e.agentFilesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${t?r`<div class="muted mono" style="margin-top: 8px;">Workspace: ${t.workspace}</div>`:v}
      ${e.agentFilesError?r`<div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}</div>`:v}
      ${t?r`
              <div class="agent-files-grid" style="margin-top: 16px;">
                <div class="agent-files-list">
                  ${n.length===0?r`
                          <div class="muted">No files found.</div>
                        `:n.map(c=>Bp(c,s,()=>e.onSelectFile(c.name)))}
                </div>
                <div class="agent-files-editor">
                  ${i?r`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-title mono">${i.name}</div>
                              <div class="agent-file-sub mono">${i.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                ?disabled=${!l}
                                @click=${()=>e.onFileReset(i.name)}
                              >
                                Reset
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${e.agentFileSaving||!l}
                                @click=${()=>e.onFileSave(i.name)}
                              >
                                ${e.agentFileSaving?"Saving…":"Save"}
                              </button>
                            </div>
                          </div>
                          ${i.missing?r`
                                  <div class="callout info" style="margin-top: 10px">
                                    This file is missing. Saving will create it in the agent workspace.
                                  </div>
                                `:v}
                          <label class="field" style="margin-top: 12px;">
                            <span>Content</span>
                            <textarea
                              .value=${o}
                              @input=${c=>e.onFileDraftChange(i.name,c.target.value)}
                            ></textarea>
                          </label>
                        `:r`
                          <div class="muted">Select a file to edit.</div>
                        `}
                </div>
              </div>
            `:r`
              <div class="callout info" style="margin-top: 12px">
                Load the agent workspace files to edit core instructions.
              </div>
            `}
    </section>
  `}function Bp(e,t,n){const s=e.missing?"Missing":`${bp(e.size)} · ${Q(e.updatedAtMs??null)}`;return r`
    <button
      type="button"
      class="agent-file-row ${t===e.name?"active":""}"
      @click=${n}
    >
      <div>
        <div class="agent-file-name mono">${e.name}</div>
        <div class="agent-file-meta">${s}</div>
      </div>
      ${e.missing?r`
              <span class="agent-pill warn">missing</span>
            `:v}
    </button>
  `}function Up(e){const t=ds(e.configForm,e.agentId),n=t.entry?.tools??{},s=t.globalTools??{},i=n.profile??s.profile??"full",a=n.profile?"agent override":s.profile?"global default":"default",o=Array.isArray(n.allow)&&n.allow.length>0,l=Array.isArray(s.allow)&&s.allow.length>0,c=!!e.configForm&&!e.configLoading&&!e.configSaving&&!o,u=o?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],g=o?[]:Array.isArray(n.deny)?n.deny:[],p=o?{allow:n.allow??[],deny:n.deny??[]}:dp(i)??void 0,h=vo.flatMap(k=>k.tools.map(y=>y.id)),d=k=>{const y=Sp(k,p),A=yo(k,u),C=yo(k,g);return{allowed:(y||A)&&!C,baseAllowed:y,denied:C}},f=h.filter(k=>d(k).allowed).length,m=(k,y)=>{const A=new Set(u.map(M=>Fe(M)).filter(M=>M.length>0)),C=new Set(g.map(M=>Fe(M)).filter(M=>M.length>0)),I=d(k).baseAllowed,_=Fe(k);y?(C.delete(_),I||A.add(_)):(A.delete(_),C.add(_)),e.onOverridesChange(e.agentId,[...A],[...C])},S=k=>{const y=new Set(u.map(C=>Fe(C)).filter(C=>C.length>0)),A=new Set(g.map(C=>Fe(C)).filter(C=>C.length>0));for(const C of h){const I=d(C).baseAllowed,_=Fe(C);k?(A.delete(_),I||y.add(_)):(y.delete(_),A.add(_))}e.onOverridesChange(e.agentId,[...y],[...A])};return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Tool Access</div>
          <div class="card-sub">
            Profile + per-tool overrides for this agent.
            <span class="mono">${f}/${h.length}</span> enabled.
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button
            class="btn btn--sm"
            ?disabled=${!c}
            @click=${()=>S(!0)}
          >
            Enable All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!c}
            @click=${()=>S(!1)}
          >
            Disable All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?v:r`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to adjust tool profiles.
              </div>
            `}
      ${o?r`
              <div class="callout info" style="margin-top: 12px">
                This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.
              </div>
            `:v}
      ${l?r`
              <div class="callout info" style="margin-top: 12px">
                Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.
              </div>
            `:v}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Profile</div>
          <div class="mono">${i}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Source</div>
          <div>${a}</div>
        </div>
        ${e.configDirty?r`
                <div class="agent-kv">
                  <div class="label">Status</div>
                  <div class="mono">unsaved</div>
                </div>
              `:v}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">Quick Presets</div>
        <div class="agent-tools-buttons">
          ${mp.map(k=>r`
              <button
                class="btn btn--sm ${i===k.id?"active":""}"
                ?disabled=${!c}
                @click=${()=>e.onProfileChange(e.agentId,k.id,!0)}
              >
                ${k.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!c}
            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
          >
            Inherit
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${vo.map(k=>r`
            <div class="agent-tools-section">
              <div class="agent-tools-header">${k.label}</div>
              <div class="agent-tools-list">
                ${k.tools.map(y=>{const{allowed:A}=d(y.id);return r`
                    <div class="agent-tool-row">
                      <div>
                        <div class="agent-tool-title mono">${y.label}</div>
                        <div class="agent-tool-sub">${y.description}</div>
                      </div>
                      <label class="cfg-toggle">
                        <input
                          type="checkbox"
                          .checked=${A}
                          ?disabled=${!c}
                          @change=${C=>m(y.id,C.target.checked)}
                        />
                        <span class="cfg-toggle__track"></span>
                      </label>
                    </div>
                  `})}
              </div>
            </div>
          `)}
      </div>
    </section>
  `}const Cn=[{id:"workspace",label:"Workspace Skills",sources:["openclaw-workspace"]},{id:"built-in",label:"Built-in Skills",sources:["openclaw-bundled"]},{id:"installed",label:"Installed Skills",sources:["openclaw-managed"]},{id:"extra",label:"Extra Skills",sources:["openclaw-extra"]}];function zp(e){const t=new Map;for(const a of Cn)t.set(a.id,{id:a.id,label:a.label,skills:[]});const n=Cn.find(a=>a.id==="built-in"),s={id:"other",label:"Other Skills",skills:[]};for(const a of e){const o=a.bundled?n:Cn.find(l=>l.sources.includes(a.source));o?t.get(o.id)?.skills.push(a):s.skills.push(a)}const i=Cn.map(a=>t.get(a.id)).filter(a=>!!(a&&a.skills.length>0));return s.skills.length>0&&i.push(s),i}function Hp(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=ds(e.configForm,e.agentId),s=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,i=new Set((s??[]).map(d=>d.trim()).filter(Boolean)),a=s!==void 0,o=!!(e.report&&e.activeAgentId===e.agentId),l=o?e.report?.skills??[]:[],c=e.filter.trim().toLowerCase(),u=c?l.filter(d=>[d.name,d.description,d.source].join(" ").toLowerCase().includes(c)):l,g=zp(u),p=a?l.filter(d=>i.has(d.name)).length:l.length,h=l.length;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">
            Per-agent skill allowlist and workspace skills.
            ${h>0?r`<span class="mono">${p}/${h}</span>`:v}
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
            Use All
          </button>
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onDisableAll(e.agentId)}>
            Disable All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            Reload Config
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?v:r`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to set per-agent skills.
              </div>
            `}
      ${a?r`
              <div class="callout info" style="margin-top: 12px">This agent uses a custom skill allowlist.</div>
            `:r`
              <div class="callout info" style="margin-top: 12px">
                All skills are enabled. Disabling any skill will create a per-agent allowlist.
              </div>
            `}
      ${!o&&!e.loading?r`
              <div class="callout info" style="margin-top: 12px">
                Load skills for this agent to view workspace-specific entries.
              </div>
            `:v}
      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${d=>e.onFilterChange(d.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${u.length} shown</div>
      </div>

      ${u.length===0?r`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:r`
              <div class="agent-skills-groups" style="margin-top: 16px;">
                ${g.map(d=>jp(d,{agentId:e.agentId,allowSet:i,usingAllowlist:a,editable:t,onToggle:e.onToggle}))}
              </div>
            `}
    </section>
  `}function jp(e,t){const n=e.id==="workspace"||e.id==="built-in";return r`
    <details class="agent-skills-group" ?open=${!n}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(s=>Kp(s,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
      </div>
    </details>
  `}function Kp(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,s=[...e.missing.bins.map(a=>`bin:${a}`),...e.missing.env.map(a=>`env:${a}`),...e.missing.config.map(a=>`config:${a}`),...e.missing.os.map(a=>`os:${a}`)],i=[];return e.disabled&&i.push("disabled"),e.blockedByAllowlist&&i.push("blocked by allowlist"),r`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${e.description}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.source}</span>
          <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"eligible":"blocked"}
          </span>
          ${e.disabled?r`
                  <span class="chip chip-warn">disabled</span>
                `:v}
        </div>
        ${s.length>0?r`<div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:v}
        ${i.length>0?r`<div class="muted" style="margin-top: 6px;">Reason: ${i.join(", ")}</div>`:v}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${n}
            ?disabled=${!t.editable}
            @change=${a=>t.onToggle(t.agentId,e.name,a.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}const Wp=new Set(["title","description","default","nullable"]);function qp(e){return Object.keys(e??{}).filter(n=>!Wp.has(n)).length===0}function Gp(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const rn={chevronDown:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function We(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:l}=e,c=e.showLabel??!0,u=ke(t),g=Ce(s,i),p=g?.label??t.title??qe(String(s.at(-1))),h=T(p),d=T(g?.help??t.description??""),f=Ei(s);if(a.has(f))return r`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${h}</div>
      <div class="cfg-field__error">${T("Unsupported schema node. Use Raw mode.")}</div>
    </div>`;if(t.anyOf||t.oneOf){const S=(t.anyOf??t.oneOf??[]).filter(_=>!(_.type==="null"||Array.isArray(_.type)&&_.type.includes("null")));if(S.length===1)return We({...e,schema:S[0]});const k=_=>{if(_.const!==void 0)return _.const;if(_.enum&&_.enum.length===1)return _.enum[0]},y=S.map(k),A=y.every(_=>_!==void 0);if(A&&y.length>0&&y.length<=5){const _=n??t.default;return r`
        <div class="cfg-field">
          ${c?r`<label class="cfg-field__label">${h}</label>`:v}
          ${d?r`<div class="cfg-field__help">${d}</div>`:v}
          <div class="cfg-segmented">
            ${y.map(M=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${M===_||String(M)===String(_)?"active":""}"
                ?disabled=${o}
                @click=${()=>l(s,M)}
              >
                ${String(M)}
              </button>
            `)}
          </div>
        </div>
      `}if(A&&y.length>5)return wo({...e,options:y,value:n??t.default});const C=new Set(S.map(_=>ke(_)).filter(Boolean)),I=new Set([...C].map(_=>_==="integer"?"number":_));if([...I].every(_=>["string","number","boolean"].includes(_))){const _=I.has("string"),M=I.has("number");if(I.has("boolean")&&I.size===1)return We({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(_||M)return xo({...e,inputType:M&&!_?"number":"text"})}}if(t.enum){const m=t.enum;if(m.length<=5){const S=n??t.default;return r`
        <div class="cfg-field">
          ${c?r`<label class="cfg-field__label">${h}</label>`:v}
          ${d?r`<div class="cfg-field__help">${d}</div>`:v}
          <div class="cfg-segmented">
            ${m.map(k=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${k===S||String(k)===String(S)?"active":""}"
                ?disabled=${o}
                @click=${()=>l(s,k)}
              >
                ${String(k)}
              </button>
            `)}
          </div>
        </div>
      `}return wo({...e,options:m,value:n??t.default})}if(u==="object")return Qp(e);if(u==="array")return Yp(e);if(u==="boolean"){const m=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return r`
      <label class="cfg-toggle-row ${o?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${h}</span>
          ${d?r`<span class="cfg-toggle-row__help">${d}</span>`:v}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${m}
            ?disabled=${o}
            @change=${S=>l(s,S.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return u==="number"||u==="integer"?Vp(e):u==="string"?xo({...e,inputType:"text"}):r`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${h}</div>
      <div class="cfg-field__error">${T("Unsupported type:")} ${u}. ${T("Use Raw mode.")}</div>
    </div>
  `}function xo(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:o,inputType:l}=e,c=e.showLabel??!0,u=Ce(s,i),g=u?.label??t.title??qe(String(s.at(-1))),p=u?.help??t.description,h=(u?.sensitive??!1)&&!/^\$\{[^}]*\}$/.test(String(n??"").trim()),d=u?.placeholder??(h?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),f=n??"";return r`
    <div class="cfg-field">
      ${c?r`<label class="cfg-field__label">${g}</label>`:v}
      ${p?r`<div class="cfg-field__help">${p}</div>`:v}
      <div class="cfg-input-wrap">
        <input
          type=${h?"password":l}
          class="cfg-input"
          placeholder=${d}
          .value=${f==null?"":String(f)}
          ?disabled=${a}
          @input=${m=>{const S=m.target.value;if(l==="number"){if(S.trim()===""){o(s,void 0);return}const k=Number(S);o(s,Number.isNaN(k)?S:k);return}o(s,S)}}
          @change=${m=>{if(l==="number")return;const S=m.target.value;o(s,S.trim())}}
        />
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${a}
            @click=${()=>o(s,t.default)}
          >↺</button>
        `:v}
      </div>
    </div>
  `}function Vp(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:o}=e,l=e.showLabel??!0,c=Ce(s,i),u=c?.label??t.title??qe(String(s.at(-1))),g=c?.help??t.description,p=n??t.default??"",h=typeof p=="number"?p:0;return r`
    <div class="cfg-field">
      ${l?r`<label class="cfg-field__label">${u}</label>`:v}
      ${g?r`<div class="cfg-field__help">${g}</div>`:v}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(s,h-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${p==null?"":String(p)}
          ?disabled=${a}
          @input=${d=>{const f=d.target.value,m=f===""?void 0:Number(f);o(s,m)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(s,h+1)}
        >+</button>
      </div>
    </div>
  `}function wo(e){const{schema:t,value:n,path:s,hints:i,disabled:a,options:o,onPatch:l}=e,c=e.showLabel??!0,u=Ce(s,i),g=u?.label??t.title??qe(String(s.at(-1))),p=u?.help??t.description,h=n??t.default,d=o.findIndex(m=>m===h||String(m)===String(h)),f="__unset__";return r`
    <div class="cfg-field">
      ${c?r`<label class="cfg-field__label">${g}</label>`:v}
      ${p?r`<div class="cfg-field__help">${p}</div>`:v}
      <select
        class="cfg-select"
        ?disabled=${a}
        .value=${d>=0?String(d):f}
        @change=${m=>{const S=m.target.value;l(s,S===f?void 0:o[Number(S)])}}
      >
        <option value=${f}>Select...</option>
        ${o.map((m,S)=>r`
          <option value=${String(S)}>${String(m)}</option>
        `)}
      </select>
    </div>
  `}function Qp(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:l}=e,c=Ce(s,i),u=c?.label??t.title??qe(String(s.at(-1))),g=c?.help??t.description,p=n??t.default,h=p&&typeof p=="object"&&!Array.isArray(p)?p:{},d=t.properties??{},m=Object.entries(d).toSorted((A,C)=>{const I=Ce([...s,A[0]],i)?.order??0,_=Ce([...s,C[0]],i)?.order??0;return I!==_?I-_:A[0].localeCompare(C[0])}),S=new Set(Object.keys(d)),k=t.additionalProperties,y=!!k&&typeof k=="object";return s.length===1?r`
      <div class="cfg-fields">
        ${m.map(([A,C])=>We({schema:C,value:h[A],path:[...s,A],hints:i,unsupported:a,disabled:o,onPatch:l}))}
        ${y?$o({schema:k,value:h,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:S,onPatch:l}):v}
      </div>
    `:r`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${u}</span>
        <span class="cfg-object__chevron">${rn.chevronDown}</span>
      </summary>
      ${g?r`<div class="cfg-object__help">${g}</div>`:v}
      <div class="cfg-object__content">
        ${m.map(([A,C])=>We({schema:C,value:h[A],path:[...s,A],hints:i,unsupported:a,disabled:o,onPatch:l}))}
        ${y?$o({schema:k,value:h,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:S,onPatch:l}):v}
      </div>
    </details>
  `}function Yp(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:l}=e,c=e.showLabel??!0,u=Ce(s,i),g=u?.label??t.title??qe(String(s.at(-1))),p=u?.help??t.description,h=Array.isArray(t.items)?t.items[0]:t.items;if(!h)return r`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${g}</div>
        <div class="cfg-field__error">${T("Unsupported array schema. Use Raw mode.")}</div>
      </div>
    `;const d=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return r`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${c?r`<span class="cfg-array__label">${g}</span>`:v}
        <span class="cfg-array__count">${d.length} item${d.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${o}
          @click=${()=>{const f=[...d,yr(h)];l(s,f)}}
        >
          <span class="cfg-array__add-icon">${rn.plus}</span>
          Add
        </button>
      </div>
      ${p?r`<div class="cfg-array__help">${p}</div>`:v}

      ${d.length===0?r`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:r`
        <div class="cfg-array__items">
          ${d.map((f,m)=>r`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${m+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${o}
                  @click=${()=>{const S=[...d];S.splice(m,1),l(s,S)}}
                >
                  ${rn.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${We({schema:h,value:f,path:[...s,m],hints:i,unsupported:a,disabled:o,showLabel:!1,onPatch:l})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function $o(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:l,onPatch:c}=e,u=qp(t),g=Object.entries(n??{}).filter(([p])=>!l.has(p));return r`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${o}
          @click=${()=>{const p={...n};let h=1,d=`custom-${h}`;for(;d in p;)h+=1,d=`custom-${h}`;p[d]=u?{}:yr(t),c(s,p)}}
        >
          <span class="cfg-map__add-icon">${rn.plus}</span>
          Add Entry
        </button>
      </div>

      ${g.length===0?r`
              <div class="cfg-map__empty">No custom entries.</div>
            `:r`
        <div class="cfg-map__items">
          ${g.map(([p,h])=>{const d=[...s,p],f=Gp(h);return r`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${p}
                    ?disabled=${o}
                    @change=${m=>{const S=m.target.value.trim();if(!S||S===p)return;const k={...n};S in k||(k[S]=k[p],delete k[p],c(s,k))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${u?r`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${f}
                          ?disabled=${o}
                          @change=${m=>{const S=m.target,k=S.value.trim();if(!k){c(d,void 0);return}try{c(d,JSON.parse(k))}catch{S.value=f}}}
                        ></textarea>
                      `:We({schema:t,value:h,path:d,hints:i,unsupported:a,disabled:o,showLabel:!1,onPatch:c})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${o}
                  @click=${()=>{const m={...n};delete m[p],c(s,m)}}
                >
                  ${rn.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const ko={env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},us={env:{label:"环境变量",description:"传递给网关进程的环境变量"},update:{label:"更新",description:"自动更新设置和发布渠道"},agents:{label:"代理",description:"代理配置、模型和身份"},auth:{label:"身份验证",description:"API 密钥和身份验证配置"},channels:{label:"渠道",description:"消息渠道 (Telegram, Discord, Slack 等)"},messages:{label:"消息",description:"消息处理和路由设置"},commands:{label:"命令",description:"自定义斜杠命令"},hooks:{label:"钩子",description:"Webhooks 和事件钩子"},skills:{label:"技能",description:"技能包和能力"},tools:{label:"工具",description:"工具配置 (浏览器、搜索等)"},gateway:{label:"网关",description:"网关服务器设置 (端口、认证、绑定)"},wizard:{label:"设置向导",description:"设置向导状态和历史"},meta:{label:"元信息",description:"网关元数据和版本信息"},logging:{label:"日志",description:"日志级别和输出配置"},browser:{label:"浏览器",description:"浏览器自动化设置"},ui:{label:"界面",description:"用户界面首选项"},models:{label:"模型",description:"AI 模型配置和提供商"},bindings:{label:"绑定",description:"键绑定和快捷键"},broadcast:{label:"广播",description:"广播和通知设置"},audio:{label:"音频",description:"音频输入/输出设置"},session:{label:"会话",description:"会话管理和持久化"},cron:{label:"定时任务",description:"计划任务和自动化"},web:{label:"网络",description:"Web 服务器和 API 设置"},discovery:{label:"发现",description:"服务发现和网络"},canvasHost:{label:"画布主机",description:"画布渲染和显示"},talk:{label:"对话",description:"语音和语音设置"},plugins:{label:"插件",description:"插件管理和扩展"},nodeHost:{label:"节点主机",description:"节点主机设置和管理"},media:{label:"媒体",description:"媒体处理和存储"},approvals:{label:"审批",description:"待批准和授权"},memory:{label:"内存",description:"内存管理和限制"},diagnostics:{label:"诊断",description:"系统诊断和故障排除"}};function Jp(e){const t=us[e];return T(t?t.label:e)}function Zp(e){const t=us[e];return t?T(t.description):""}const Xp=us;function So(e){return ko[e]??ko.default}function ef(e,t,n){if(!n)return!0;const s=n.toLowerCase(),i=Jp(e),a=Zp(e);return e.toLowerCase().includes(s)||i.toLowerCase().includes(s)||a.toLowerCase().includes(s)?!0:qt(t,s)}function qt(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,i]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||qt(i,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const i of s)if(i&&qt(i,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&qt(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&qt(s,t))return!0}return!1}function tf(e){if(!e.schema)return r`
      <div class="muted">Schema unavailable.</div>
    `;const t=e.schema,n=e.value??{};if(ke(t)!=="object"||!t.properties)return r`
      <div class="callout danger">Unsupported schema. Use Raw.</div>
    `;const s=new Set(e.unsupportedPaths??[]),i=t.properties,a=e.searchQuery??"",o=e.activeSection,l=e.activeSubsection??null,u=Object.entries(i).toSorted((p,h)=>{const d=Ce([p[0]],e.uiHints)?.order??50,f=Ce([h[0]],e.uiHints)?.order??50;return d!==f?d-f:p[0].localeCompare(h[0])}).filter(([p,h])=>!(o&&p!==o||a&&!ef(p,h,a)));let g=null;if(o&&l&&u.length===1){const p=u[0]?.[1];p&&ke(p)==="object"&&p.properties&&p.properties[l]&&(g={sectionKey:o,subsectionKey:l,schema:p.properties[l]})}return u.length===0?r`
      <div class="config-empty">
        <div class="config-empty__icon">${ce.search}</div>
        <div class="config-empty__text">
          ${a?`${T("No settings match")} "${a}"`:T("No settings in this section")}
        </div>
      </div>
    `:r`
    <div class="config-form config-form--modern">
      ${g?(()=>{const{sectionKey:p,subsectionKey:h,schema:d}=g,f=Ce([p,h],e.uiHints),m=f?.label??d.title??qe(h),S=f?.help??d.description??"",k=T(m),y=T(S),A=n[p],C=A&&typeof A=="object"?A[h]:void 0,I=`config-section-${p}-${h}`;return r`
              <section class="config-section-card" id=${I}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${So(p)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${k}</h3>
                    ${y?r`<p class="config-section-card__desc">${y}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${We({schema:d,value:C,path:[p,h],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():u.map(([p,h])=>{const d=p.charAt(0).toUpperCase()+p.slice(1),f=h.description??"",m=us[p]??{label:d,description:f};return r`
              <section class="config-section-card" id="config-section-${p}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${So(p)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${T(m.label)}</h3>
                    ${m.description?r`<p class="config-section-card__desc">${T(m.description)}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${We({schema:h,value:n[p],path:[p],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const nf=new Set(["title","description","default","nullable"]);function sf(e){return Object.keys(e??{}).filter(n=>!nf.has(n)).length===0}function El(e){const t=e.filter(i=>i!=null),n=t.length!==e.length,s=[];for(const i of t)s.some(a=>Object.is(a,i))||s.push(i);return{enumValues:s,nullable:n}}function Ll(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:Jt(e,[])}function Jt(e,t){const n=new Set,s={...e},i=Ei(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const l=af(e,t);return l||{schema:e,unsupportedPaths:[i]}}const a=Array.isArray(e.type)&&e.type.includes("null"),o=ke(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=o??e.type,s.nullable=a||e.nullable,s.enum){const{enumValues:l,nullable:c}=El(s.enum);s.enum=l,c&&(s.nullable=!0),l.length===0&&n.add(i)}if(o==="object"){const l=e.properties??{},c={};for(const[u,g]of Object.entries(l)){const p=Jt(g,[...t,u]);p.schema&&(c[u]=p.schema);for(const h of p.unsupportedPaths)n.add(h)}if(s.properties=c,e.additionalProperties===!0)n.add(i);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!sf(e.additionalProperties)){const u=Jt(e.additionalProperties,[...t,"*"]);s.additionalProperties=u.schema??e.additionalProperties,u.unsupportedPaths.length>0&&n.add(i)}}else if(o==="array"){const l=Array.isArray(e.items)?e.items[0]:e.items;if(!l)n.add(i);else{const c=Jt(l,[...t,"*"]);s.items=c.schema??l,c.unsupportedPaths.length>0&&n.add(i)}}else o!=="string"&&o!=="number"&&o!=="integer"&&o!=="boolean"&&!s.enum&&n.add(i);return{schema:s,unsupportedPaths:Array.from(n)}}function af(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],i=[];let a=!1;for(const l of n){if(!l||typeof l!="object")return null;if(Array.isArray(l.enum)){const{enumValues:c,nullable:u}=El(l.enum);s.push(...c),u&&(a=!0);continue}if("const"in l){if(l.const==null){a=!0;continue}s.push(l.const);continue}if(ke(l)==="null"){a=!0;continue}i.push(l)}if(s.length>0&&i.length===0){const l=[];for(const c of s)l.some(u=>Object.is(u,c))||l.push(c);return{schema:{...e,enum:l,nullable:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){const l=Jt(i[0],t);return l.schema&&(l.schema.nullable=a||l.schema.nullable),l}const o=new Set(["string","number","integer","boolean"]);return i.length>0&&s.length===0&&i.every(l=>l.type&&o.has(String(l.type)))?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}function of(e,t){let n=e;for(const s of t){if(!n)return null;const i=ke(n);if(i==="object"){const a=n.properties??{};if(typeof s=="string"&&a[s]){n=a[s];continue}const o=n.additionalProperties;if(typeof s=="string"&&o&&typeof o=="object"){n=o;continue}return null}if(i==="array"){if(typeof s!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function rf(e,t){const s=(e.channels??{})[t],i=e[t];return(s&&typeof s=="object"?s:null)??(i&&typeof i=="object"?i:null)??{}}const lf=["groupPolicy","streamMode","dmPolicy"];function cf(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function df(e){const t=lf.flatMap(n=>n in e?[[n,e[n]]]:[]);return t.length===0?null:r`
    <div class="status-list" style="margin-top: 12px;">
      ${t.map(([n,s])=>r`
          <div>
            <span class="label">${n}</span>
            <span>${cf(s)}</span>
          </div>
        `)}
    </div>
  `}function uf(e){const t=Ll(e.schema),n=t.schema;if(!n)return r`
      <div class="callout danger">Schema unavailable. Use Raw.</div>
    `;const s=of(n,["channels",e.channelId]);if(!s)return r`
      <div class="callout danger">Channel config schema unavailable.</div>
    `;const i=e.configValue??{},a=rf(i,e.channelId);return r`
    <div class="config-form">
      ${We({schema:s,value:a,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
    ${df(a)}
  `}function Ge(e){const{channelId:t,props:n}=e,s=n.configSaving||n.configSchemaLoading;return r`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?r`
              <div class="muted">Loading config schema…</div>
            `:uf({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?"Saving…":"Save"}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          Reload
        </button>
      </div>
    </div>
  `}function gf(e){const{props:t,discord:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function pf(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat API webhook status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?n.configured?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?n.running?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Credential</span>
          <span>${n?.credentialSource??"n/a"}</span>
        </div>
        <div>
          <span class="label">Audience</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function ff(e){const{props:t,imessage:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOS bridge status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Ao(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:"n/a"}function hf(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:i,profileFormState:a,profileFormCallbacks:o,onEditProfile:l}=e,c=s[0],u=n?.configured??c?.configured??!1,g=n?.running??c?.running??!1,p=n?.publicKey??c?.publicKey,h=n?.lastStartAt??c?.lastStartAt??null,d=n?.lastError??c?.lastError??null,f=s.length>1,m=a!=null,S=y=>{const A=y.publicKey,C=y.profile,I=C?.displayName??C?.name??y.name??y.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${I}</div>
          <div class="account-card-id">${y.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${y.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${y.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Public Key</span>
            <span class="monospace" title="${A??""}">${Ao(A)}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${y.lastInboundAt?Q(y.lastInboundAt):"n/a"}</span>
          </div>
          ${y.lastError?r`
                <div class="account-card-error">${y.lastError}</div>
              `:v}
        </div>
      </div>
    `},k=()=>{if(m&&o)return Yc({state:a,callbacks:o,accountId:s[0]?.accountId??"default"});const y=c?.profile??n?.profile,{name:A,displayName:C,about:I,picture:_,nip05:M}=y??{},H=A||C||I||_||M;return r`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">Profile</div>
          ${u?r`
                <button
                  class="btn btn-sm"
                  @click=${l}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  Edit Profile
                </button>
              `:v}
        </div>
        ${H?r`
              <div class="status-list">
                ${_?r`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${_}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${J=>{J.target.style.display="none"}}
                        />
                      </div>
                    `:v}
                ${A?r`<div><span class="label">Name</span><span>${A}</span></div>`:v}
                ${C?r`<div><span class="label">Display Name</span><span>${C}</span></div>`:v}
                ${I?r`<div><span class="label">About</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${I}</span></div>`:v}
                ${M?r`<div><span class="label">NIP-05</span><span>${M}</span></div>`:v}
              </div>
            `:r`
                <div style="color: var(--text-muted); font-size: 13px">
                  No profile set. Click "Edit Profile" to add your name, bio, and avatar.
                </div>
              `}
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">Decentralized DMs via Nostr relays (NIP-04).</div>
      ${i}

      ${f?r`
            <div class="account-card-list">
              ${s.map(y=>S(y))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${u?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${g?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Public Key</span>
                <span class="monospace" title="${p??""}"
                  >${Ao(p)}</span
                >
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${h?Q(h):"n/a"}</span>
              </div>
            </div>
          `}

      ${d?r`<div class="callout danger" style="margin-top: 12px;">${d}</div>`:v}

      ${k()}

      ${Ge({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>Refresh</button>
      </div>
    </div>
  `}function vf(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const i=s[e],a=typeof i?.configured=="boolean"&&i.configured,o=typeof i?.running=="boolean"&&i.running,l=typeof i?.connected=="boolean"&&i.connected,u=(n.channelAccounts?.[e]??[]).some(g=>g.configured||g.running||g.connected);return a||o||l||u}function mf(e,t){return t?.[e]?.length??0}function Rl(e,t){const n=mf(e,t);return n<2?v:r`<div class="account-count">Accounts (${n})</div>`}function bf(e){const{props:t,signal:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cli status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Base URL</span>
          <span>${n?.baseUrl??"n/a"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function yf(e){const{props:t,slack:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">Socket mode status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?Q(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?Q(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function xf(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:i}=e,a=s.length>1,o=l=>{const u=l.probe?.bot?.username,g=l.name||l.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${u?`@${u}`:g}
          </div>
          <div class="account-card-id">${l.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${l.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${l.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${l.lastInboundAt?Q(l.lastInboundAt):"n/a"}</span>
          </div>
          ${l.lastError?r`
                <div class="account-card-error">
                  ${l.lastError}
                </div>
              `:v}
        </div>
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">Telegram</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${i}

      ${a?r`
            <div class="account-card-list">
              ${s.map(l=>o(l))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${n?.configured?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${n?.running?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Mode</span>
                <span>${n?.mode??"n/a"}</span>
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${n?.lastStartAt?Q(n.lastStartAt):"n/a"}</span>
              </div>
              <div>
                <span class="label">Last probe</span>
                <span>${n?.lastProbeAt?Q(n.lastProbeAt):"n/a"}</span>
              </div>
            </div>
          `}

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${Ge({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function wf(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">Link WhatsApp Web and monitor connection health.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Linked</span>
          <span>${n?.linked?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n?.connected?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last connect</span>
          <span>
            ${n?.lastConnectedAt?Q(n.lastConnectedAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last message</span>
          <span>
            ${n?.lastMessageAt?Q(n.lastMessageAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Auth age</span>
          <span>
            ${n?.authAgeMs!=null?Fi(n.authAgeMs):"n/a"}
          </span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${t.whatsappMessage?r`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:v}

      ${t.whatsappQrDataUrl?r`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:v}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?"Working…":"Show QR"}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          Relink
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          Wait for scan
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          Logout
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Refresh
        </button>
      </div>

      ${Ge({channelId:"whatsapp",props:t})}
    </div>
  `}function $f(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,i=t?.discord??null,a=t?.googlechat??null,o=t?.slack??null,l=t?.signal??null,c=t?.imessage??null,u=t?.nostr??null,p=kf(e.snapshot).map((h,d)=>({key:h,enabled:vf(h,e),order:d})).toSorted((h,d)=>h.enabled!==d.enabled?h.enabled?-1:1:h.order-d.order);return r`
    <section class="grid grid-cols-2">
      ${p.map(h=>Sf(h.key,e,{whatsapp:n,telegram:s,discord:i,googlechat:a,slack:o,signal:l,imessage:c,nostr:u,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Channel health</div>
          <div class="card-sub">Channel status snapshots from the gateway.</div>
        </div>
        <div class="muted">${e.lastSuccessAt?Q(e.lastSuccessAt):"n/a"}</div>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):"No snapshot yet."}
      </pre>
    </section>
  `}function kf(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function Sf(e,t,n){const s=Rl(e,n.channelAccounts);switch(e){case"whatsapp":return wf({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return xf({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return gf({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return pf({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return yf({props:t,slack:n.slack,accountCountLabel:s});case"signal":return bf({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return ff({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const i=n.channelAccounts?.nostr??[],a=i[0],o=a?.accountId??"default",l=a?.profile??null,c=t.nostrProfileAccountId===o?t.nostrProfileFormState:null,u=c?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return hf({props:t,nostr:n.nostr,nostrAccounts:i,accountCountLabel:s,profileFormState:c,profileFormCallbacks:u,onEditProfile:()=>t.onNostrProfileEdit(o,l)})}default:return Af(e,t,n.channelAccounts??{})}}function Af(e,t,n){const s=Tf(t.snapshot,e),i=t.snapshot?.channels?.[e],a=typeof i?.configured=="boolean"?i.configured:void 0,o=typeof i?.running=="boolean"?i.running:void 0,l=typeof i?.connected=="boolean"?i.connected:void 0,c=typeof i?.lastError=="string"?i.lastError:void 0,u=n[e]??[],g=Rl(e,n);return r`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">Channel status and configuration.</div>
      ${g}

      ${u.length>0?r`
            <div class="account-card-list">
              ${u.map(p=>Rf(p))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${a==null?"n/a":a?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${o==null?"n/a":o?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Connected</span>
                <span>${l==null?"n/a":l?"Yes":"No"}</span>
              </div>
            </div>
          `}

      ${c?r`<div class="callout danger" style="margin-top: 12px;">
            ${c}
          </div>`:v}

      ${Ge({channelId:e,props:t})}
    </div>
  `}function Cf(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function Tf(e,t){return Cf(e)[t]?.label??e?.channelLabels?.[t]??t}const _f=600*1e3;function Il(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<_f:!1}function Ef(e){return e.running?"Yes":Il(e)?"Active":"No"}function Lf(e){return e.connected===!0?"Yes":e.connected===!1?"No":Il(e)?"Active":"n/a"}function Rf(e){const t=Ef(e),n=Lf(e);return r`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${e.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span>${e.lastInboundAt?Q(e.lastInboundAt):"n/a"}</span>
        </div>
        ${e.lastError?r`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:v}
      </div>
    </div>
  `}const Zt=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),Zt(s,t);return!0},Wn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ml=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Df(t)}};function If(e){this._$AN!==void 0?(Wn(this),this._$AM=e,Ml(this)):this._$AM=e}function Mf(e,t=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let a=n;a<s.length;a++)Zt(s[a],!1),Wn(s[a]);else s!=null&&(Zt(s,!1),Wn(s));else Zt(this,e)}const Df=e=>{e.type==Yi.CHILD&&(e._$AP??=Mf,e._$AQ??=If)};class Pf extends Zi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),Ml(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(Zt(this,t),Wn(this))}setValue(t){if(Hg(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Os=new WeakMap,Nf=Ji(class extends Pf{render(e){return v}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),v}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Os.get(t);n===void 0&&(n=new WeakMap,Os.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Os.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class gi extends Zi{constructor(t){if(super(t),this.it=v,t.type!==Yi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===Je)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}gi.directiveName="unsafeHTML",gi.resultType=1;const pi=Ji(gi);const{entries:Dl,setPrototypeOf:Co,isFrozen:Ff,getPrototypeOf:Of,getOwnPropertyDescriptor:Bf}=Object;let{freeze:me,seal:Te,create:fi}=Object,{apply:hi,construct:vi}=typeof Reflect<"u"&&Reflect;me||(me=function(t){return t});Te||(Te=function(t){return t});hi||(hi=function(t,n){for(var s=arguments.length,i=new Array(s>2?s-2:0),a=2;a<s;a++)i[a-2]=arguments[a];return t.apply(n,i)});vi||(vi=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return new t(...s)});const Tn=be(Array.prototype.forEach),Uf=be(Array.prototype.lastIndexOf),To=be(Array.prototype.pop),Bt=be(Array.prototype.push),zf=be(Array.prototype.splice),On=be(String.prototype.toLowerCase),Bs=be(String.prototype.toString),Us=be(String.prototype.match),Ut=be(String.prototype.replace),Hf=be(String.prototype.indexOf),jf=be(String.prototype.trim),_e=be(Object.prototype.hasOwnProperty),he=be(RegExp.prototype.test),zt=Kf(TypeError);function be(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return hi(e,t,s)}}function Kf(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return vi(e,n)}}function W(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:On;Co&&Co(e,null);let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const a=n(i);a!==i&&(Ff(t)||(t[s]=a),i=a)}e[i]=!0}return e}function Wf(e){for(let t=0;t<e.length;t++)_e(e,t)||(e[t]=null);return e}function Pe(e){const t=fi(null);for(const[n,s]of Dl(e))_e(e,n)&&(Array.isArray(s)?t[n]=Wf(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Pe(s):t[n]=s);return t}function Ht(e,t){for(;e!==null;){const s=Bf(e,t);if(s){if(s.get)return be(s.get);if(typeof s.value=="function")return be(s.value)}e=Of(e)}function n(){return null}return n}const _o=me(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),zs=me(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Hs=me(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),qf=me(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),js=me(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Gf=me(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Eo=me(["#text"]),Lo=me(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ks=me(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ro=me(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),_n=me(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Vf=Te(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Qf=Te(/<%[\w\W]*|[\w\W]*%>/gm),Yf=Te(/\$\{[\w\W]*/gm),Jf=Te(/^data-[\-\w.\u00B7-\uFFFF]+$/),Zf=Te(/^aria-[\-\w]+$/),Pl=Te(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Xf=Te(/^(?:\w+script|data):/i),eh=Te(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Nl=Te(/^html$/i),th=Te(/^[a-z][.\w]*(-[.\w]+)+$/i);var Io=Object.freeze({__proto__:null,ARIA_ATTR:Zf,ATTR_WHITESPACE:eh,CUSTOM_ELEMENT:th,DATA_ATTR:Jf,DOCTYPE_NAME:Nl,ERB_EXPR:Qf,IS_ALLOWED_URI:Pl,IS_SCRIPT_OR_DATA:Xf,MUSTACHE_EXPR:Vf,TMPLIT_EXPR:Yf});const jt={element:1,text:3,progressingInstruction:7,comment:8,document:9},nh=function(){return typeof window>"u"?null:window},sh=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(s=n.getAttribute(i));const a="dompurify"+(s?"#"+s:"");try{return t.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Mo=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Fl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nh();const t=z=>Fl(z);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==jt.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,i=s.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:l,Element:c,NodeFilter:u,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:p,DOMParser:h,trustedTypes:d}=e,f=c.prototype,m=Ht(f,"cloneNode"),S=Ht(f,"remove"),k=Ht(f,"nextSibling"),y=Ht(f,"childNodes"),A=Ht(f,"parentNode");if(typeof o=="function"){const z=n.createElement("template");z.content&&z.content.ownerDocument&&(n=z.content.ownerDocument)}let C,I="";const{implementation:_,createNodeIterator:M,createDocumentFragment:H,getElementsByTagName:J}=n,{importNode:ie}=s;let F=Mo();t.isSupported=typeof Dl=="function"&&typeof A=="function"&&_&&_.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:j,ERB_EXPR:de,TMPLIT_EXPR:E,DATA_ATTR:U,ARIA_ATTR:ae,IS_SCRIPT_OR_DATA:oe,ATTR_WHITESPACE:X,CUSTOM_ELEMENT:ne}=Io;let{IS_ALLOWED_URI:R}=Io,D=null;const P=W({},[..._o,...zs,...Hs,...js,...Eo]);let K=null;const we=W({},[...Lo,...Ks,...Ro,..._n]);let Y=Object.seal(fi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,ee=null;const fe=Object.seal(fi(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Oe=!0,Be=!0,tt=!1,fa=!0,kt=!1,fn=!0,nt=!1,hs=!1,vs=!1,St=!1,hn=!1,vn=!1,ha=!0,va=!1;const lc="user-content-";let ms=!0,Pt=!1,At={},Ie=null;const bs=W({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ma=null;const ba=W({},["audio","video","img","source","image","track"]);let ys=null;const ya=W({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),mn="http://www.w3.org/1998/Math/MathML",bn="http://www.w3.org/2000/svg",Ue="http://www.w3.org/1999/xhtml";let Ct=Ue,xs=!1,ws=null;const cc=W({},[mn,bn,Ue],Bs);let yn=W({},["mi","mo","mn","ms","mtext"]),xn=W({},["annotation-xml"]);const dc=W({},["title","style","font","a","script"]);let Nt=null;const uc=["application/xhtml+xml","text/html"],gc="text/html";let se=null,Tt=null;const pc=n.createElement("form"),xa=function(b){return b instanceof RegExp||b instanceof Function},$s=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Tt&&Tt===b)){if((!b||typeof b!="object")&&(b={}),b=Pe(b),Nt=uc.indexOf(b.PARSER_MEDIA_TYPE)===-1?gc:b.PARSER_MEDIA_TYPE,se=Nt==="application/xhtml+xml"?Bs:On,D=_e(b,"ALLOWED_TAGS")?W({},b.ALLOWED_TAGS,se):P,K=_e(b,"ALLOWED_ATTR")?W({},b.ALLOWED_ATTR,se):we,ws=_e(b,"ALLOWED_NAMESPACES")?W({},b.ALLOWED_NAMESPACES,Bs):cc,ys=_e(b,"ADD_URI_SAFE_ATTR")?W(Pe(ya),b.ADD_URI_SAFE_ATTR,se):ya,ma=_e(b,"ADD_DATA_URI_TAGS")?W(Pe(ba),b.ADD_DATA_URI_TAGS,se):ba,Ie=_e(b,"FORBID_CONTENTS")?W({},b.FORBID_CONTENTS,se):bs,Se=_e(b,"FORBID_TAGS")?W({},b.FORBID_TAGS,se):Pe({}),ee=_e(b,"FORBID_ATTR")?W({},b.FORBID_ATTR,se):Pe({}),At=_e(b,"USE_PROFILES")?b.USE_PROFILES:!1,Oe=b.ALLOW_ARIA_ATTR!==!1,Be=b.ALLOW_DATA_ATTR!==!1,tt=b.ALLOW_UNKNOWN_PROTOCOLS||!1,fa=b.ALLOW_SELF_CLOSE_IN_ATTR!==!1,kt=b.SAFE_FOR_TEMPLATES||!1,fn=b.SAFE_FOR_XML!==!1,nt=b.WHOLE_DOCUMENT||!1,St=b.RETURN_DOM||!1,hn=b.RETURN_DOM_FRAGMENT||!1,vn=b.RETURN_TRUSTED_TYPE||!1,vs=b.FORCE_BODY||!1,ha=b.SANITIZE_DOM!==!1,va=b.SANITIZE_NAMED_PROPS||!1,ms=b.KEEP_CONTENT!==!1,Pt=b.IN_PLACE||!1,R=b.ALLOWED_URI_REGEXP||Pl,Ct=b.NAMESPACE||Ue,yn=b.MATHML_TEXT_INTEGRATION_POINTS||yn,xn=b.HTML_INTEGRATION_POINTS||xn,Y=b.CUSTOM_ELEMENT_HANDLING||{},b.CUSTOM_ELEMENT_HANDLING&&xa(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Y.tagNameCheck=b.CUSTOM_ELEMENT_HANDLING.tagNameCheck),b.CUSTOM_ELEMENT_HANDLING&&xa(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Y.attributeNameCheck=b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),b.CUSTOM_ELEMENT_HANDLING&&typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Y.allowCustomizedBuiltInElements=b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),kt&&(Be=!1),hn&&(St=!0),At&&(D=W({},Eo),K=[],At.html===!0&&(W(D,_o),W(K,Lo)),At.svg===!0&&(W(D,zs),W(K,Ks),W(K,_n)),At.svgFilters===!0&&(W(D,Hs),W(K,Ks),W(K,_n)),At.mathMl===!0&&(W(D,js),W(K,Ro),W(K,_n))),b.ADD_TAGS&&(typeof b.ADD_TAGS=="function"?fe.tagCheck=b.ADD_TAGS:(D===P&&(D=Pe(D)),W(D,b.ADD_TAGS,se))),b.ADD_ATTR&&(typeof b.ADD_ATTR=="function"?fe.attributeCheck=b.ADD_ATTR:(K===we&&(K=Pe(K)),W(K,b.ADD_ATTR,se))),b.ADD_URI_SAFE_ATTR&&W(ys,b.ADD_URI_SAFE_ATTR,se),b.FORBID_CONTENTS&&(Ie===bs&&(Ie=Pe(Ie)),W(Ie,b.FORBID_CONTENTS,se)),b.ADD_FORBID_CONTENTS&&(Ie===bs&&(Ie=Pe(Ie)),W(Ie,b.ADD_FORBID_CONTENTS,se)),ms&&(D["#text"]=!0),nt&&W(D,["html","head","body"]),D.table&&(W(D,["tbody"]),delete Se.tbody),b.TRUSTED_TYPES_POLICY){if(typeof b.TRUSTED_TYPES_POLICY.createHTML!="function")throw zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof b.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=b.TRUSTED_TYPES_POLICY,I=C.createHTML("")}else C===void 0&&(C=sh(d,i)),C!==null&&typeof I=="string"&&(I=C.createHTML(""));me&&me(b),Tt=b}},wa=W({},[...zs,...Hs,...qf]),$a=W({},[...js,...Gf]),fc=function(b){let L=A(b);(!L||!L.tagName)&&(L={namespaceURI:Ct,tagName:"template"});const O=On(b.tagName),Z=On(L.tagName);return ws[b.namespaceURI]?b.namespaceURI===bn?L.namespaceURI===Ue?O==="svg":L.namespaceURI===mn?O==="svg"&&(Z==="annotation-xml"||yn[Z]):!!wa[O]:b.namespaceURI===mn?L.namespaceURI===Ue?O==="math":L.namespaceURI===bn?O==="math"&&xn[Z]:!!$a[O]:b.namespaceURI===Ue?L.namespaceURI===bn&&!xn[Z]||L.namespaceURI===mn&&!yn[Z]?!1:!$a[O]&&(dc[O]||!wa[O]):!!(Nt==="application/xhtml+xml"&&ws[b.namespaceURI]):!1},Me=function(b){Bt(t.removed,{element:b});try{A(b).removeChild(b)}catch{S(b)}},st=function(b,L){try{Bt(t.removed,{attribute:L.getAttributeNode(b),from:L})}catch{Bt(t.removed,{attribute:null,from:L})}if(L.removeAttribute(b),b==="is")if(St||hn)try{Me(L)}catch{}else try{L.setAttribute(b,"")}catch{}},ka=function(b){let L=null,O=null;if(vs)b="<remove></remove>"+b;else{const te=Us(b,/^[\r\n\t ]+/);O=te&&te[0]}Nt==="application/xhtml+xml"&&Ct===Ue&&(b='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+b+"</body></html>");const Z=C?C.createHTML(b):b;if(Ct===Ue)try{L=new h().parseFromString(Z,Nt)}catch{}if(!L||!L.documentElement){L=_.createDocument(Ct,"template",null);try{L.documentElement.innerHTML=xs?I:Z}catch{}}const ue=L.body||L.documentElement;return b&&O&&ue.insertBefore(n.createTextNode(O),ue.childNodes[0]||null),Ct===Ue?J.call(L,nt?"html":"body")[0]:nt?L.documentElement:ue},Sa=function(b){return M.call(b.ownerDocument||b,b,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},ks=function(b){return b instanceof p&&(typeof b.nodeName!="string"||typeof b.textContent!="string"||typeof b.removeChild!="function"||!(b.attributes instanceof g)||typeof b.removeAttribute!="function"||typeof b.setAttribute!="function"||typeof b.namespaceURI!="string"||typeof b.insertBefore!="function"||typeof b.hasChildNodes!="function")},Aa=function(b){return typeof l=="function"&&b instanceof l};function ze(z,b,L){Tn(z,O=>{O.call(t,b,L,Tt)})}const Ca=function(b){let L=null;if(ze(F.beforeSanitizeElements,b,null),ks(b))return Me(b),!0;const O=se(b.nodeName);if(ze(F.uponSanitizeElement,b,{tagName:O,allowedTags:D}),fn&&b.hasChildNodes()&&!Aa(b.firstElementChild)&&he(/<[/\w!]/g,b.innerHTML)&&he(/<[/\w!]/g,b.textContent)||b.nodeType===jt.progressingInstruction||fn&&b.nodeType===jt.comment&&he(/<[/\w]/g,b.data))return Me(b),!0;if(!(fe.tagCheck instanceof Function&&fe.tagCheck(O))&&(!D[O]||Se[O])){if(!Se[O]&&_a(O)&&(Y.tagNameCheck instanceof RegExp&&he(Y.tagNameCheck,O)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(O)))return!1;if(ms&&!Ie[O]){const Z=A(b)||b.parentNode,ue=y(b)||b.childNodes;if(ue&&Z){const te=ue.length;for(let ye=te-1;ye>=0;--ye){const He=m(ue[ye],!0);He.__removalCount=(b.__removalCount||0)+1,Z.insertBefore(He,k(b))}}}return Me(b),!0}return b instanceof c&&!fc(b)||(O==="noscript"||O==="noembed"||O==="noframes")&&he(/<\/no(script|embed|frames)/i,b.innerHTML)?(Me(b),!0):(kt&&b.nodeType===jt.text&&(L=b.textContent,Tn([j,de,E],Z=>{L=Ut(L,Z," ")}),b.textContent!==L&&(Bt(t.removed,{element:b.cloneNode()}),b.textContent=L)),ze(F.afterSanitizeElements,b,null),!1)},Ta=function(b,L,O){if(ha&&(L==="id"||L==="name")&&(O in n||O in pc))return!1;if(!(Be&&!ee[L]&&he(U,L))){if(!(Oe&&he(ae,L))){if(!(fe.attributeCheck instanceof Function&&fe.attributeCheck(L,b))){if(!K[L]||ee[L]){if(!(_a(b)&&(Y.tagNameCheck instanceof RegExp&&he(Y.tagNameCheck,b)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(b))&&(Y.attributeNameCheck instanceof RegExp&&he(Y.attributeNameCheck,L)||Y.attributeNameCheck instanceof Function&&Y.attributeNameCheck(L,b))||L==="is"&&Y.allowCustomizedBuiltInElements&&(Y.tagNameCheck instanceof RegExp&&he(Y.tagNameCheck,O)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(O))))return!1}else if(!ys[L]){if(!he(R,Ut(O,X,""))){if(!((L==="src"||L==="xlink:href"||L==="href")&&b!=="script"&&Hf(O,"data:")===0&&ma[b])){if(!(tt&&!he(oe,Ut(O,X,"")))){if(O)return!1}}}}}}}return!0},_a=function(b){return b!=="annotation-xml"&&Us(b,ne)},Ea=function(b){ze(F.beforeSanitizeAttributes,b,null);const{attributes:L}=b;if(!L||ks(b))return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:K,forceKeepAttr:void 0};let Z=L.length;for(;Z--;){const ue=L[Z],{name:te,namespaceURI:ye,value:He}=ue,_t=se(te),Ss=He;let le=te==="value"?Ss:jf(Ss);if(O.attrName=_t,O.attrValue=le,O.keepAttr=!0,O.forceKeepAttr=void 0,ze(F.uponSanitizeAttribute,b,O),le=O.attrValue,va&&(_t==="id"||_t==="name")&&(st(te,b),le=lc+le),fn&&he(/((--!?|])>)|<\/(style|title|textarea)/i,le)){st(te,b);continue}if(_t==="attributename"&&Us(le,"href")){st(te,b);continue}if(O.forceKeepAttr)continue;if(!O.keepAttr){st(te,b);continue}if(!fa&&he(/\/>/i,le)){st(te,b);continue}kt&&Tn([j,de,E],Ra=>{le=Ut(le,Ra," ")});const La=se(b.nodeName);if(!Ta(La,_t,le)){st(te,b);continue}if(C&&typeof d=="object"&&typeof d.getAttributeType=="function"&&!ye)switch(d.getAttributeType(La,_t)){case"TrustedHTML":{le=C.createHTML(le);break}case"TrustedScriptURL":{le=C.createScriptURL(le);break}}if(le!==Ss)try{ye?b.setAttributeNS(ye,te,le):b.setAttribute(te,le),ks(b)?Me(b):To(t.removed)}catch{st(te,b)}}ze(F.afterSanitizeAttributes,b,null)},hc=function z(b){let L=null;const O=Sa(b);for(ze(F.beforeSanitizeShadowDOM,b,null);L=O.nextNode();)ze(F.uponSanitizeShadowNode,L,null),Ca(L),Ea(L),L.content instanceof a&&z(L.content);ze(F.afterSanitizeShadowDOM,b,null)};return t.sanitize=function(z){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,O=null,Z=null,ue=null;if(xs=!z,xs&&(z="<!-->"),typeof z!="string"&&!Aa(z))if(typeof z.toString=="function"){if(z=z.toString(),typeof z!="string")throw zt("dirty is not a string, aborting")}else throw zt("toString is not a function");if(!t.isSupported)return z;if(hs||$s(b),t.removed=[],typeof z=="string"&&(Pt=!1),Pt){if(z.nodeName){const He=se(z.nodeName);if(!D[He]||Se[He])throw zt("root node is forbidden and cannot be sanitized in-place")}}else if(z instanceof l)L=ka("<!---->"),O=L.ownerDocument.importNode(z,!0),O.nodeType===jt.element&&O.nodeName==="BODY"||O.nodeName==="HTML"?L=O:L.appendChild(O);else{if(!St&&!kt&&!nt&&z.indexOf("<")===-1)return C&&vn?C.createHTML(z):z;if(L=ka(z),!L)return St?null:vn?I:""}L&&vs&&Me(L.firstChild);const te=Sa(Pt?z:L);for(;Z=te.nextNode();)Ca(Z),Ea(Z),Z.content instanceof a&&hc(Z.content);if(Pt)return z;if(St){if(hn)for(ue=H.call(L.ownerDocument);L.firstChild;)ue.appendChild(L.firstChild);else ue=L;return(K.shadowroot||K.shadowrootmode)&&(ue=ie.call(s,ue,!0)),ue}let ye=nt?L.outerHTML:L.innerHTML;return nt&&D["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&he(Nl,L.ownerDocument.doctype.name)&&(ye="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+ye),kt&&Tn([j,de,E],He=>{ye=Ut(ye,He," ")}),C&&vn?C.createHTML(ye):ye},t.setConfig=function(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$s(z),hs=!0},t.clearConfig=function(){Tt=null,hs=!1},t.isValidAttribute=function(z,b,L){Tt||$s({});const O=se(z),Z=se(b);return Ta(O,Z,L)},t.addHook=function(z,b){typeof b=="function"&&Bt(F[z],b)},t.removeHook=function(z,b){if(b!==void 0){const L=Uf(F[z],b);return L===-1?void 0:zf(F[z],L,1)[0]}return To(F[z])},t.removeHooks=function(z){F[z]=[]},t.removeAllHooks=function(){F=Mo()},t}var mi=Fl();function ea(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $t=ea();function Ol(e){$t=e}var dt={exec:()=>null};function q(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(i,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(ve.caret,"$1"),n=n.replace(i,o),s},getRegex:()=>new RegExp(n,t)};return s}var ih=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ve={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},ah=/^(?:[ \t]*(?:\n|$))+/,oh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,rh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,pn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,lh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ta=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Bl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ul=q(Bl).replace(/bull/g,ta).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ch=q(Bl).replace(/bull/g,ta).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),na=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,dh=/^[^\n]+/,sa=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,uh=q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",sa).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gh=q(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ta).getRegex(),gs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ia=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ph=q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ia).replace("tag",gs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),zl=q(na).replace("hr",pn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gs).getRegex(),fh=q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",zl).getRegex(),aa={blockquote:fh,code:oh,def:uh,fences:rh,heading:lh,hr:pn,html:ph,lheading:Ul,list:gh,newline:ah,paragraph:zl,table:dt,text:dh},Do=q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",pn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gs).getRegex(),hh={...aa,lheading:ch,table:Do,paragraph:q(na).replace("hr",pn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Do).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gs).getRegex()},vh={...aa,html:q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ia).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:q(na).replace("hr",pn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ul).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},mh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Hl=/^( {2,}|\\)\n(?!\s*$)/,yh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ps=/[\p{P}\p{S}]/u,oa=/[\s\p{P}\p{S}]/u,jl=/[^\s\p{P}\p{S}]/u,xh=q(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,oa).getRegex(),Kl=/(?!~)[\p{P}\p{S}]/u,wh=/(?!~)[\s\p{P}\p{S}]/u,$h=/(?:[^\s\p{P}\p{S}]|~)/u,Wl=/(?![*_])[\p{P}\p{S}]/u,kh=/(?![*_])[\s\p{P}\p{S}]/u,Sh=/(?:[^\s\p{P}\p{S}]|[*_])/u,Ah=q(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ih?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ql=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ch=q(ql,"u").replace(/punct/g,ps).getRegex(),Th=q(ql,"u").replace(/punct/g,Kl).getRegex(),Gl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_h=q(Gl,"gu").replace(/notPunctSpace/g,jl).replace(/punctSpace/g,oa).replace(/punct/g,ps).getRegex(),Eh=q(Gl,"gu").replace(/notPunctSpace/g,$h).replace(/punctSpace/g,wh).replace(/punct/g,Kl).getRegex(),Lh=q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,jl).replace(/punctSpace/g,oa).replace(/punct/g,ps).getRegex(),Rh=q(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Wl).getRegex(),Ih="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Mh=q(Ih,"gu").replace(/notPunctSpace/g,Sh).replace(/punctSpace/g,kh).replace(/punct/g,Wl).getRegex(),Dh=q(/\\(punct)/,"gu").replace(/punct/g,ps).getRegex(),Ph=q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Nh=q(ia).replace("(?:-->|$)","-->").getRegex(),Fh=q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Nh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),qn=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Oh=q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",qn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Vl=q(/^!?\[(label)\]\[(ref)\]/).replace("label",qn).replace("ref",sa).getRegex(),Ql=q(/^!?\[(ref)\](?:\[\])?/).replace("ref",sa).getRegex(),Bh=q("reflink|nolink(?!\\()","g").replace("reflink",Vl).replace("nolink",Ql).getRegex(),Po=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ra={_backpedal:dt,anyPunctuation:Dh,autolink:Ph,blockSkip:Ah,br:Hl,code:bh,del:dt,delLDelim:dt,delRDelim:dt,emStrongLDelim:Ch,emStrongRDelimAst:_h,emStrongRDelimUnd:Lh,escape:mh,link:Oh,nolink:Ql,punctuation:xh,reflink:Vl,reflinkSearch:Bh,tag:Fh,text:yh,url:dt},Uh={...ra,link:q(/^!?\[(label)\]\((.*?)\)/).replace("label",qn).getRegex(),reflink:q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",qn).getRegex()},bi={...ra,emStrongRDelimAst:Eh,emStrongLDelim:Th,delLDelim:Rh,delRDelim:Mh,url:q(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Po).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:q(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Po).getRegex()},zh={...bi,br:q(Hl).replace("{2,}","*").getRegex(),text:q(bi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},En={normal:aa,gfm:hh,pedantic:vh},Kt={normal:ra,gfm:bi,breaks:zh,pedantic:Uh},Hh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},No=e=>Hh[e];function Ne(e,t){if(t){if(ve.escapeTest.test(e))return e.replace(ve.escapeReplace,No)}else if(ve.escapeTestNoEncode.test(e))return e.replace(ve.escapeReplaceNoEncode,No);return e}function Fo(e){try{e=encodeURI(e).replace(ve.percentDecode,"%")}catch{return null}return e}function Oo(e,t){let n=e.replace(ve.findPipe,(a,o,l)=>{let c=!1,u=o;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),s=n.split(ve.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(ve.slashPipe,"|");return s}function Wt(e,t,n){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function jh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Kh(e,t=0){let n=t,s="";for(let i of e)if(i==="	"){let a=4-n%4;s+=" ".repeat(a),n+=a}else s+=i,n++;return s}function Bo(e,t,n,s,i){let a=t.href,o=t.title||null,l=e[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:o,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,c}function Wh(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let i=s[1];return t.split(`
`).map(a=>{let o=a.match(n.other.beginningSpace);if(o===null)return a;let[l]=o;return l.length>=i.length?a.slice(i.length):a}).join(`
`)}var Gn=class{options;rules;lexer;constructor(e){this.options=e||$t}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Wt(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Wh(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=Wt(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Wt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Wt(t[0],`
`).split(`
`),s="",i="",a=[];for(;n.length>0;){let o=!1,l=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),o=!0;else if(!o)l.push(n[c]);else break;n=n.slice(c);let u=l.join(`
`),g=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,i=i?`${i}
${g}`:g;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=p,n.length===0)break;let h=a.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let d=h,f=d.raw+`
`+n.join(`
`),m=this.blockquote(f);a[a.length-1]=m,s=s.substring(0,s.length-d.raw.length)+m.raw,i=i.substring(0,i.length-d.text.length)+m.text;break}else if(h?.type==="list"){let d=h,f=d.raw+`
`+n.join(`
`),m=this.list(f);a[a.length-1]=m,s=s.substring(0,s.length-h.raw.length)+m.raw,i=i.substring(0,i.length-d.raw.length)+m.raw,n=f.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let c=!1,u="",g="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let p=Kh(t[2].split(`
`,1)[0],t[1].length),h=e.split(`
`,1)[0],d=!p.trim(),f=0;if(this.options.pedantic?(f=2,g=p.trimStart()):d?f=t[1].length+1:(f=p.search(this.rules.other.nonSpaceChar),f=f>4?1:f,g=p.slice(f),f+=t[1].length),d&&this.rules.other.blankLine.test(h)&&(u+=h+`
`,e=e.substring(h.length+1),c=!0),!c){let m=this.rules.other.nextBulletRegex(f),S=this.rules.other.hrRegex(f),k=this.rules.other.fencesBeginRegex(f),y=this.rules.other.headingBeginRegex(f),A=this.rules.other.htmlBeginRegex(f),C=this.rules.other.blockquoteBeginRegex(f);for(;e;){let I=e.split(`
`,1)[0],_;if(h=I,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),_=h):_=h.replace(this.rules.other.tabCharGlobal,"    "),k.test(h)||y.test(h)||A.test(h)||C.test(h)||m.test(h)||S.test(h))break;if(_.search(this.rules.other.nonSpaceChar)>=f||!h.trim())g+=`
`+_.slice(f);else{if(d||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||k.test(p)||y.test(p)||S.test(p))break;g+=`
`+h}d=!h.trim(),u+=I+`
`,e=e.substring(I.length+1),p=_.slice(f)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),i.raw+=u}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let c of i.items){if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),c.task){if(c.text=c.text.replace(this.rules.other.listReplaceTask,""),c.tokens[0]?.type==="text"||c.tokens[0]?.type==="paragraph"){c.tokens[0].raw=c.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),c.tokens[0].text=c.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(c.raw);if(u){let g={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};c.checked=g.checked,i.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=g.raw+c.tokens[0].raw,c.tokens[0].text=g.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(g)):c.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):c.tokens.unshift(g)}}if(!i.loose){let u=c.tokens.filter(p=>p.type==="space"),g=u.length>0&&u.some(p=>this.rules.other.anyLine.test(p.raw));i.loose=g}}if(i.loose)for(let c of i.items){c.loose=!0;for(let u of c.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Oo(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let o of s)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<n.length;o++)a.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:a.align[o]});for(let o of i)a.rows.push(Oo(o,a.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[c]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let a=Wt(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{let a=jh(t[2],"()");if(a===-2)return;if(a>-1){let o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],i=a[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Bo(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[s.toLowerCase()];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return Bo(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,a,o,l=i,c=0,u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+i);(s=u.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(o=[...a].length,s[3]||s[4]){l+=o;continue}else if((s[5]||s[6])&&i%3&&!((i+o)%3)){c+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+c);let g=[...s[0]][0].length,p=e.slice(0,i+s.index+g+o);if(Math.min(i,o)%2){let d=p.slice(1,-1);return{type:"em",raw:p,text:d,tokens:this.lexer.inlineTokens(d)}}let h=p.slice(2,-2);return{type:"strong",raw:p,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,a,o,l=i,c=this.rules.inline.delRDelim;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a||(o=[...a].length,o!==i))continue;if(s[3]||s[4]){l+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l);let u=[...s[0]][0].length,g=e.slice(0,i+s.index+u+o),p=g.slice(i,-i);return{type:"del",raw:g,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Ee=class yi{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||$t,this.options.tokenizer=this.options.tokenizer||new Gn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:ve,block:En.normal,inline:Kt.normal};this.options.pedantic?(n.block=En.pedantic,n.inline=Kt.pedantic):this.options.gfm&&(n.block=En.gfm,this.options.breaks?n.inline=Kt.breaks:n.inline=Kt.gfm),this.tokenizer.rules=n}static get rules(){return{block:En,inline:Kt}}static lex(t,n){return new yi(n).lex(t)}static lexInline(t,n){return new yi(n).inlineTokens(t)}lex(t){t=t.replace(ve.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(ve.tabCharGlobal,"    ").replace(ve.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let o=n.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let a=t;if(this.options.extensions?.startBlock){let o=1/0,l=t.slice(1),c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(a=t.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let o=n.at(-1);s&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i),s=a.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(t){let o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,i=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)a=i[2]?i[2].length:0,s=s.slice(0,i.index+a)+"["+"a".repeat(i[0].length-a-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let o=!1,l="";for(;t;){o||(l=""),o=!1;let c;if(this.options.extensions?.inline?.some(g=>(c=g.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);let g=n.at(-1);c.type==="text"&&g?.type==="text"?(g.raw+=c.raw,g.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,s,l)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t,s,l)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let u=t;if(this.options.extensions?.startInline){let g=1/0,p=t.slice(1),h;this.options.extensions.startInline.forEach(d=>{h=d.call({lexer:this},p),typeof h=="number"&&h>=0&&(g=Math.min(g,h))}),g<1/0&&g>=0&&(u=t.substring(0,g+1))}if(c=this.tokenizer.inlineText(u)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),o=!0;let g=n.at(-1);g?.type==="text"?(g.raw+=c.raw,g.text+=c.text):n.push(c);continue}if(t){let g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},Vn=class{options;parser;constructor(e){this.options=e||$t}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(ve.notSpaceStart)?.[0],i=e.replace(ve.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Ne(s)+'">'+(n?i:Ne(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:Ne(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let o=0;o<e.items.length;o++){let l=e.items[o];s+=this.listitem(l)}let i=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+i+a+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){let a=e.rows[i];n="";for(let o=0;o<a.length;o++)n+=this.tablecell(a[o]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ne(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),i=Fo(e);if(i===null)return s;e=i;let a='<a href="'+e+'"';return t&&(a+=' title="'+Ne(t)+'"'),a+=">"+s+"</a>",a}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=Fo(e);if(i===null)return Ne(n);e=i;let a=`<img src="${e}" alt="${Ne(n)}"`;return t&&(a+=` title="${Ne(t)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ne(e.text)}},la=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Le=class xi{options;renderer;textRenderer;constructor(t){this.options=t||$t,this.options.renderer=this.options.renderer||new Vn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new la}static parse(t,n){return new xi(n).parse(t)}static parseInline(t,n){return new xi(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let i=t[s];if(this.options.extensions?.renderers?.[i.type]){let o=i,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){n+=l||"";continue}}let a=i;switch(a.type){case"space":{n+=this.renderer.space(a);break}case"hr":{n+=this.renderer.hr(a);break}case"heading":{n+=this.renderer.heading(a);break}case"code":{n+=this.renderer.code(a);break}case"table":{n+=this.renderer.table(a);break}case"blockquote":{n+=this.renderer.blockquote(a);break}case"list":{n+=this.renderer.list(a);break}case"checkbox":{n+=this.renderer.checkbox(a);break}case"html":{n+=this.renderer.html(a);break}case"def":{n+=this.renderer.def(a);break}case"paragraph":{n+=this.renderer.paragraph(a);break}case"text":{n+=this.renderer.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(t,n=this.renderer){let s="";for(let i=0;i<t.length;i++){let a=t[i];if(this.options.extensions?.renderers?.[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=l||"";continue}}let o=a;switch(o.type){case"escape":{s+=n.text(o);break}case"html":{s+=n.html(o);break}case"link":{s+=n.link(o);break}case"image":{s+=n.image(o);break}case"checkbox":{s+=n.checkbox(o);break}case"strong":{s+=n.strong(o);break}case"em":{s+=n.em(o);break}case"codespan":{s+=n.codespan(o);break}case"br":{s+=n.br(o);break}case"del":{s+=n.del(o);break}case"text":{s+=n.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},Gt=class{options;block;constructor(e){this.options=e||$t}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Ee.lex:Ee.lexInline}provideParser(){return this.block?Le.parse:Le.parseInline}},qh=class{defaults=ea();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Le;Renderer=Vn;TextRenderer=la;Lexer=Ee;Tokenizer=Gn;Hooks=Gt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let i=s;for(let a of i.header)n=n.concat(this.walkTokens(a.tokens,t));for(let a of i.rows)for(let o of a)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{let i=s;n=n.concat(this.walkTokens(i.items,t));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{let o=i[a].flat(1/0);n=n.concat(this.walkTokens(o,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let a=t.renderers[i.name];a?t.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=a.apply(this,o)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=t[i.level];a?a.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){let i=this.defaults.renderer||new Vn(this.defaults);for(let a in n.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,l=n.renderer[o],c=i[o];i[o]=(...u)=>{let g=l.apply(i,u);return g===!1&&(g=c.apply(i,u)),g||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new Gn(this.defaults);for(let a in n.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,l=n.tokenizer[o],c=i[o];i[o]=(...u)=>{let g=l.apply(i,u);return g===!1&&(g=c.apply(i,u)),g}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new Gt;for(let a in n.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,l=n.hooks[o],c=i[o];Gt.passThroughHooks.has(a)?i[o]=u=>{if(this.defaults.async&&Gt.passThroughHooksRespectAsync.has(a))return(async()=>{let p=await l.call(i,u);return c.call(i,p)})();let g=l.call(i,u);return c.call(i,g)}:i[o]=(...u)=>{if(this.defaults.async)return(async()=>{let p=await l.apply(i,u);return p===!1&&(p=await c.apply(i,u)),p})();let g=l.apply(i,u);return g===!1&&(g=c.apply(i,u)),g}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,a=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(a.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ee.lex(e,t??this.defaults)}parser(e,t){return Le.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(t):t,l=await(i.hooks?await i.hooks.provideLexer():e?Ee.lex:Ee.lexInline)(o,i),c=i.hooks?await i.hooks.processAllTokens(l):l;i.walkTokens&&await Promise.all(this.walkTokens(c,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser():e?Le.parse:Le.parseInline)(c,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let o=(i.hooks?i.hooks.provideLexer():e?Ee.lex:Ee.lexInline)(t,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let l=(i.hooks?i.hooks.provideParser():e?Le.parse:Le.parseInline)(o,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(o){return a(o)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Ne(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},xt=new qh;function G(e,t){return xt.parse(e,t)}G.options=G.setOptions=function(e){return xt.setOptions(e),G.defaults=xt.defaults,Ol(G.defaults),G};G.getDefaults=ea;G.defaults=$t;G.use=function(...e){return xt.use(...e),G.defaults=xt.defaults,Ol(G.defaults),G};G.walkTokens=function(e,t){return xt.walkTokens(e,t)};G.parseInline=xt.parseInline;G.Parser=Le;G.parser=Le.parse;G.Renderer=Vn;G.TextRenderer=la;G.Lexer=Ee;G.lexer=Ee.lex;G.Tokenizer=Gn;G.Hooks=Gt;G.parse=G;G.options;G.setOptions;G.use;G.walkTokens;G.parseInline;Le.parse;Ee.lex;G.setOptions({gfm:!0,breaks:!0});const Uo=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],zo=["class","href","rel","target","title","start"];let Ho=!1;const Gh=14e4,Vh=4e4,Qh=200,Ws=5e4,ft=new Map;function Yh(e){const t=ft.get(e);return t===void 0?null:(ft.delete(e),ft.set(e,t),t)}function jo(e,t){if(ft.set(e,t),ft.size<=Qh)return;const n=ft.keys().next().value;n&&ft.delete(n)}function Jh(){Ho||(Ho=!0,mi.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function wi(e){const t=e.trim();if(!t)return"";if(Jh(),t.length<=Ws){const o=Yh(t);if(o!==null)return o}const n=Rr(t,Gh),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Vh){const l=`<pre class="code-block">${Jl(`${n.text}${s}`)}</pre>`,c=mi.sanitize(l,{ALLOWED_TAGS:Uo,ALLOWED_ATTR:zo});return t.length<=Ws&&jo(t,c),c}const i=G.parse(`${n.text}${s}`,{renderer:Yl}),a=mi.sanitize(i,{ALLOWED_TAGS:Uo,ALLOWED_ATTR:zo});return t.length<=Ws&&jo(t,a),a}const Yl=new G.Renderer;Yl.html=({text:e})=>Jl(e);function Jl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Zh=new RegExp("\\p{Script=Hebrew}|\\p{Script=Arabic}|\\p{Script=Syriac}|\\p{Script=Thaana}|\\p{Script=Nko}|\\p{Script=Samaritan}|\\p{Script=Mandaic}|\\p{Script=Adlam}|\\p{Script=Phoenician}|\\p{Script=Lydian}","u");function Zl(e,t=/[\s\p{P}\p{S}]/u){if(!e)return"ltr";for(const n of e)if(!t.test(n))return Zh.test(n)?"rtl":"ltr";return"ltr"}const Xh=1500,ev=2e3,Xl="Copy as markdown",tv="Copied",nv="Copy failed";async function sv(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Ln(e,t){e.title=t,e.setAttribute("aria-label",t)}function iv(e){const t=e.label??Xl;return r`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const i=await sv(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!i){s.dataset.error="1",Ln(s,nv),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,Ln(s,t))},ev);return}s.dataset.copied="1",Ln(s,tv),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,Ln(s,t))},Xh)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${ce.copy}</span>
        <span class="chat-copy-btn__icon-check">${ce.check}</span>
      </span>
    </button>
  `}function av(e){return iv({text:()=>e,label:Xl})}function ec(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",i=t.content,a=Array.isArray(i)?i:null,o=Array.isArray(a)&&a.some(p=>{const h=p,d=(typeof h.type=="string"?h.type:"").toLowerCase();return d==="toolresult"||d==="tool_result"}),l=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||o||l)&&(n="toolResult");let c=[];typeof t.content=="string"?c=[{type:"text",text:t.content}]:Array.isArray(t.content)?c=t.content.map(p=>({type:p.type||"text",text:p.text,name:p.name,args:p.args||p.arguments})):typeof t.text=="string"&&(c=[{type:"text",text:t.text}]);const u=typeof t.timestamp=="number"?t.timestamp:Date.now(),g=typeof t.id=="string"?t.id:void 0;return{role:n,content:c,timestamp:u,id:g}}function ca(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function tc(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const ov={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},rv={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},lv={fallback:ov,tools:rv},nc=lv,Ko=nc.fallback??{icon:"puzzle"},cv=nc.tools??{};function dv(e){return(e??"tool").trim()}function uv(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function gv(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function sc(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>sc(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function pv(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function fv(e,t){for(const n of t){const s=pv(e,n),i=sc(s);if(i)return i}}function hv(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,i=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&i!==void 0?`${n}:${s}-${s+i}`:n}function vv(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function mv(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function bv(e){const t=dv(e.name),n=t.toLowerCase(),s=cv[n],i=s?.icon??Ko.icon??"puzzle",a=s?.title??uv(t),o=s?.label??t,l=e.args&&typeof e.args=="object"?e.args.action:void 0,c=typeof l=="string"?l.trim():void 0,u=mv(s,c),g=gv(u?.label??c);let p;n==="read"&&(p=hv(e.args)),!p&&(n==="write"||n==="edit"||n==="attach")&&(p=vv(e.args));const h=u?.detailKeys??s?.detailKeys??Ko.detailKeys??[];return!p&&h.length>0&&(p=fv(e.args,h)),!p&&e.meta&&(p=e.meta),p&&(p=xv(p)),{name:t,icon:i,title:a,label:o,verb:g,detail:p}}function yv(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function xv(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const wv=80,$v=2,Wo=100;function kv(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function Sv(e){const t=e.split(`
`),n=t.slice(0,$v),s=n.join(`
`);return s.length>Wo?s.slice(0,Wo)+"…":n.length<t.length?s+"…":s}function Av(e){const t=e,n=Cv(t.content),s=[];for(const i of n){const a=(typeof i.type=="string"?i.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(a)||typeof i.name=="string"&&i.arguments!=null)&&s.push({kind:"call",name:i.name??"tool",args:Tv(i.arguments??i.args)})}for(const i of n){const a=(typeof i.type=="string"?i.type:"").toLowerCase();if(a!=="toolresult"&&a!=="tool_result")continue;const o=_v(i),l=typeof i.name=="string"?i.name:"tool";s.push({kind:"result",name:l,text:o})}if(tc(e)&&!s.some(i=>i.kind==="result")){const i=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",a=ul(e)??void 0;s.push({kind:"result",name:i,text:a})}return s}function qo(e,t){const n=bv({name:e.name,args:e.args}),s=yv(n),i=!!e.text?.trim(),a=!!t,o=a?()=>{if(i){t(kv(e.text));return}const p=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(p)}:void 0,l=i&&(e.text?.length??0)<=wv,c=i&&!l,u=i&&l,g=!i;return r`
    <div
      class="chat-tool-card ${a?"chat-tool-card--clickable":""}"
      @click=${o}
      role=${a?"button":v}
      tabindex=${a?"0":v}
      @keydown=${a?p=>{p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),o?.())}:v}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${ce[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${a?r`<span class="chat-tool-card__action">${i?"View":""} ${ce.check}</span>`:v}
        ${g&&!a?r`<span class="chat-tool-card__status">${ce.check}</span>`:v}
      </div>
      ${s?r`<div class="chat-tool-card__detail">${s}</div>`:v}
      ${g?r`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:v}
      ${c?r`<div class="chat-tool-card__preview mono">${Sv(e.text)}</div>`:v}
      ${u?r`<div class="chat-tool-card__inline mono">${e.text}</div>`:v}
    </div>
  `}function Cv(e){return Array.isArray(e)?e.filter(Boolean):[]}function Tv(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function _v(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function Ev(e){const n=e.content,s=[];if(Array.isArray(n))for(const i of n){if(typeof i!="object"||i===null)continue;const a=i;if(a.type==="image"){const o=a.source;if(o?.type==="base64"&&typeof o.data=="string"){const l=o.data,c=o.media_type||"image/png",u=l.startsWith("data:")?l:`data:${c};base64,${l}`;s.push({url:u})}else typeof a.url=="string"&&s.push({url:a.url})}else if(a.type==="image_url"){const o=a.image_url;typeof o?.url=="string"&&s.push({url:o.url})}}return s}function Lv(e){return r`
    <div class="chat-group assistant">
      ${da("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function Rv(e,t,n,s){const i=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),a=s?.name??"Assistant";return r`
    <div class="chat-group assistant">
      ${da("assistant",s)}
      <div class="chat-group-messages">
        ${ic({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${i}</span>
        </div>
      </div>
    </div>
  `}function Iv(e,t){const n=ca(e.role),s=t.assistantName??"Assistant",i=n==="user"?"You":n==="assistant"?s:n,a=n==="user"?"user":n==="assistant"?"assistant":"other",o=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return r`
    <div class="chat-group ${a}">
      ${da(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((l,c)=>ic(l.message,{isStreaming:e.isStreaming&&c===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${i}</span>
          <span class="chat-group-timestamp">${o}</span>
        </div>
      </div>
    </div>
  `}function da(e,t){const n=ca(e),s=t?.name?.trim()||"Assistant",i=t?.avatar?.trim()||"",a=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",o=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return i&&n==="assistant"?Mv(i)?r`<img
        class="chat-avatar ${o}"
        src="${i}"
        alt="${s}"
      />`:r`<div class="chat-avatar ${o}">${i}</div>`:r`<div class="chat-avatar ${o}">${a}</div>`}function Mv(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function Dv(e){return e.length===0?v:r`
    <div class="chat-message-images">
      ${e.map(t=>r`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function ic(e,t,n){const s=e,i=typeof s.role=="string"?s.role:"unknown",a=tc(e)||i.toLowerCase()==="toolresult"||i.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",o=Av(e),l=o.length>0,c=Ev(e),u=c.length>0,g=ul(e),p=t.showReasoning&&i==="assistant"?ig(e):null,h=g?.trim()?g:null,d=p?og(p):null,f=h,m=i==="assistant"&&!!f?.trim(),S=["chat-bubble",m?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!f&&l&&a?r`${o.map(k=>qo(k,n))}`:!f&&!l&&!u?v:r`
    <div class="${S}">
      ${m?av(f):v}
      ${Dv(c)}
      ${d?r`<div class="chat-thinking">${pi(wi(d))}</div>`:v}
      ${f?r`<div class="chat-text" dir="${Zl(f)}">${pi(wi(f))}</div>`:v}
      ${o.map(k=>qo(k,n))}
    </div>
  `}function Pv(e){return r`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${ce.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?r`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?r`<div class="sidebar-markdown">${pi(wi(e.content))}</div>`:r`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var Nv=Object.defineProperty,Fv=Object.getOwnPropertyDescriptor,fs=(e,t,n,s)=>{for(var i=s>1?void 0:s?Fv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(s?o(t,n,i):o(i))||i);return s&&i&&Nv(t,n,i),i};let Dt=class extends Rt{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,i=(e.clientX-this.startX)/n;let a=this.startRatio+i;a=Math.max(this.minRatio,Math.min(this.maxRatio,a)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:a},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return v}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};Dt.styles=mc`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;fs([es({type:Number})],Dt.prototype,"splitRatio",2);fs([es({type:Number})],Dt.prototype,"minRatio",2);fs([es({type:Number})],Dt.prototype,"maxRatio",2);Dt=fs([br("resizable-divider")],Dt);const Ov=5e3;function Go(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function Bv(e){return e?e.active?r`
      <div class="compaction-indicator compaction-indicator--active" role="status" aria-live="polite">
        ${ce.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Ov?r`
        <div class="compaction-indicator compaction-indicator--complete" role="status" aria-live="polite">
          ${ce.check} Context compacted
        </div>
      `:v:v}function Uv(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function zv(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let i=0;i<n.length;i++){const a=n[i];a.type.startsWith("image/")&&s.push(a)}if(s.length!==0){e.preventDefault();for(const i of s){const a=i.getAsFile();if(!a)continue;const o=new FileReader;o.addEventListener("load",()=>{const l=o.result,c={id:Uv(),dataUrl:l,mimeType:a.type},u=t.attachments??[];t.onAttachmentsChange?.([...u,c])}),o.readAsDataURL(a)}}}function Hv(e){const t=e.attachments??[];return t.length===0?v:r`
    <div class="chat-attachments">
      ${t.map(n=>r`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(i=>i.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${ce.x}
            </button>
          </div>
        `)}
    </div>
  `}function jv(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),a=e.sessions?.sessions?.find(d=>d.key===e.sessionKey)?.reasoningLevel??"off",o=e.showThinking&&a!=="off",l={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},c=(e.attachments?.length??0)>0,u=e.connected?c?"Add a message or paste more images...":"Message (↩ to send, Shift+↩ for line breaks, paste images)":"Connect to the gateway to start chatting…",g=e.splitRatio??.6,p=!!(e.sidebarOpen&&e.onCloseSidebar),h=r`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?r`
              <div class="muted">Loading chat…</div>
            `:v}
      ${$l(Wv(e),d=>d.key,d=>d.kind==="divider"?r`
              <div class="chat-divider" role="separator" data-ts=${String(d.timestamp)}>
                <span class="chat-divider__line"></span>
                <span class="chat-divider__label">${d.label}</span>
                <span class="chat-divider__line"></span>
              </div>
            `:d.kind==="reading-indicator"?Lv(l):d.kind==="stream"?Rv(d.text,d.startedAt,e.onOpenSidebar,l):d.kind==="group"?Iv(d,{onOpenSidebar:e.onOpenSidebar,showReasoning:o,assistantName:e.assistantName,assistantAvatar:l.avatar}):v)}
    </div>
  `;return r`
    <section class="card chat">
      ${e.disabledReason?r`<div class="callout">${e.disabledReason}</div>`:v}

      ${e.error?r`<div class="callout danger">${e.error}</div>`:v}

      ${e.focusMode?r`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${ce.x}
            </button>
          `:v}

      <div
        class="chat-split-container ${p?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${p?`0 0 ${g*100}%`:"1 1 100%"}"
        >
          ${h}
        </div>

        ${p?r`
              <resizable-divider
                .splitRatio=${g}
                @resize=${d=>e.onSplitRatioChange?.(d.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${Pv({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:v}
      </div>

      ${e.queue.length?r`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(d=>r`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${d.text||(d.attachments?.length?`Image (${d.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(d.id)}
                      >
                        ${ce.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:v}

      ${Bv(e.compactionStatus)}

      ${e.showNewMessages?r`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${ce.arrowDown}
            </button>
          `:v}

      <div class="chat-compose">
        ${Hv(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${Nf(d=>d&&Go(d))}
              .value=${e.draft}
              dir=${Zl(e.draft)}
              ?disabled=${!e.connected}
              @keydown=${d=>{d.key==="Enter"&&(d.isComposing||d.keyCode===229||d.shiftKey||e.connected&&(d.preventDefault(),t&&e.onSend()))}}
              @input=${d=>{const f=d.target;Go(f),e.onDraftChange(f.value)}}
              @paste=${d=>zv(d,e)}
              placeholder=${u}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"Stop":"New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"Queue":"Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const Vo=200;function Kv(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const i=ec(s.message),a=ca(i.role),o=i.timestamp||Date.now();!n||n.role!==a?(n&&t.push(n),n={kind:"group",key:`group:${a}:${s.key}`,role:a,messages:[{message:s.message,key:s.key}],timestamp:o,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Wv(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-Vo);i>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${Vo} messages (${i} hidden).`,timestamp:Date.now()}});for(let a=i;a<n.length;a++){const o=n[a],l=ec(o),u=o.__openclaw;if(u&&u.kind==="compaction"){t.push({kind:"divider",key:typeof u.id=="string"?`divider:compaction:${u.id}`:`divider:compaction:${l.timestamp}:${a}`,label:"Compaction",timestamp:l.timestamp??Date.now()});continue}!e.showThinking&&l.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:Qo(o,a),message:o})}if(e.showThinking)for(let a=0;a<s.length;a++)t.push({kind:"message",key:Qo(s[a],a+n.length),message:s[a]});if(e.stream!==null){const a=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:a,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:a})}return Kv(t)}function Qo(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const i=typeof n.id=="string"?n.id:"";if(i)return`msg:${i}`;const a=typeof n.messageId=="string"?n.messageId:"";if(a)return`msg:${a}`;const o=typeof n.timestamp=="number"?n.timestamp:null,l=typeof n.role=="string"?n.role:"unknown";return o!=null?`msg:${l}:${o}:${t}`:`msg:${l}:${t}`}const $i={all:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},Yo=[{key:"env",label:T("Environment")},{key:"update",label:T("Updates")},{key:"agents",label:T("Agents")},{key:"auth",label:T("Authentication")},{key:"channels",label:T("Channels")},{key:"messages",label:T("Messages")},{key:"commands",label:T("Commands")},{key:"hooks",label:T("Hooks")},{key:"skills",label:T("Skills")},{key:"tools",label:T("Tools")},{key:"gateway",label:T("Gateway")},{key:"wizard",label:T("Setup Wizard")},{key:"meta",label:T("Meta")},{key:"diagnostics",label:T("Diagnostics")},{key:"logging",label:T("Logging")},{key:"browser",label:T("Browser")},{key:"ui",label:T("Ui")},{key:"models",label:T("Models")},{key:"nodeHost",label:T("NodeHost")},{key:"bindings",label:T("Bindings")},{key:"broadcast",label:T("Broadcast")},{key:"audio",label:T("Audio")},{key:"media",label:T("Media")},{key:"approvals",label:T("Approvals")},{key:"session",label:T("Session")},{key:"cron",label:T("Cron")},{key:"web",label:T("Web")},{key:"discovery",label:T("Discovery")},{key:"canvasHost",label:T("CanvasHost")},{key:"talk",label:T("Talk")},{key:"memory",label:T("Memory")},{key:"plugins",label:T("Plugins")}],Jo="__all__";function Zo(e){return $i[e]??$i.default}function qv(e,t){const n=Xp[e];return n||{label:t?.title??qe(e),description:t?.description??""}}function Gv(e){const{key:t,schema:n,uiHints:s}=e;if(!n||ke(n)!=="object"||!n.properties)return[];const i=Object.entries(n.properties).map(([a,o])=>{const l=Ce([t,a],s),c=l?.label??o.title??qe(a),u=l?.help??o.description??"",g=l?.order??50;return{key:a,label:T(c),description:T(u),order:g}});return i.sort((a,o)=>a.order!==o.order?a.order-o.order:a.key.localeCompare(o.key)),i}function Vv(e,t){if(!e||!t)return[];const n=[];function s(i,a,o){if(i===a)return;if(typeof i!=typeof a){n.push({path:o,from:i,to:a});return}if(typeof i!="object"||i===null||a===null){i!==a&&n.push({path:o,from:i,to:a});return}if(Array.isArray(i)&&Array.isArray(a)){JSON.stringify(i)!==JSON.stringify(a)&&n.push({path:o,from:i,to:a});return}const l=i,c=a,u=new Set([...Object.keys(l),...Object.keys(c)]);for(const g of u)s(l[g],c[g],o?`${o}.${g}`:g)}return s(e,t,""),n}function Xo(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function Qv(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=Ll(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,i=n.schema?.properties??{},a=Yo.filter(_=>_.key in i),o=new Set(Yo.map(_=>_.key)),l=Object.keys(i).filter(_=>!o.has(_)).map(_=>({key:_,label:_.charAt(0).toUpperCase()+_.slice(1)})),c=[...a,...l],u=e.activeSection&&n.schema&&ke(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,g=e.activeSection?qv(e.activeSection,u):null,p=e.activeSection?Gv({key:e.activeSection,schema:u,uiHints:e.uiHints}):[],h=e.formMode==="form"&&!!e.activeSection&&p.length>0,d=e.activeSubsection===Jo,f=e.searchQuery||d?null:e.activeSubsection??p[0]?.key??null,m=e.formMode==="form"?Vv(e.originalValue,e.formValue):[],S=e.formMode==="raw"&&e.raw!==e.originalRaw,k=e.formMode==="form"?m.length>0:S,y=!!e.formValue&&!e.loading&&!!n.schema,A=e.connected&&!e.saving&&k&&(e.formMode==="raw"?!0:y),C=e.connected&&!e.applying&&!e.updating&&k&&(e.formMode==="raw"?!0:y),I=e.connected&&!e.applying&&!e.updating;return r`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">Settings</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${t}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder="Search settings..."
            .value=${e.searchQuery}
            @input=${_=>e.onSearchChange(_.target.value)}
          />
          ${e.searchQuery?r`
                <button
                  class="config-search__clear"
                  @click=${()=>e.onSearchChange("")}
                >
                  ×
                </button>
              `:v}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${$i.all}</span>
            <span class="config-nav__label">${T("All Settings")}</span>
          </button>
          ${c.map(_=>r`
              <button
                class="config-nav__item ${e.activeSection===_.key?"active":""}"
                @click=${()=>e.onSectionChange(_.key)}
              >
                <span class="config-nav__icon"
                  >${Zo(_.key)}</span
                >
                <span class="config-nav__label">${_.label}</span>
              </button>
            `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              Form
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              Raw
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${k?r`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?"Unsaved changes":`${m.length} unsaved change${m.length!==1?"s":""}`}</span
                  >
                `:r`
                    <span class="config-status muted">${T("No changes")}</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?T("Loading..."):T("Reload")}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!A}
              @click=${e.onSave}
            >
              ${e.saving?T("Saving..."):T("Save")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!C}
              @click=${e.onApply}
            >
              ${e.applying?T("Applying..."):T("Apply")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!I}
              @click=${e.onUpdate}
            >
              ${e.updating?T("Updating..."):T("Update")}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${k&&e.formMode==="form"?r`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >${T("View")} ${m.length} ${T("pending")} ${T("change")}${m.length!==1?"s":""}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${m.map(_=>r`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${_.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${Xo(_.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${Xo(_.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:v}
        ${g&&e.formMode==="form"?r`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${Zo(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${g.label}
                  </div>
                  ${g.description?r`<div class="config-section-hero__desc">
                        ${g.description}
                      </div>`:v}
                </div>
              </div>
            `:v}
        ${h?r`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${f===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(Jo)}
                >
                  ${T("All")}
                </button>
                ${p.map(_=>r`
                    <button
                      class="config-subnav__item ${f===_.key?"active":""}"
                      title=${_.description||_.label}
                      @click=${()=>e.onSubsectionChange(_.key)}
                    >
                      ${_.label}
                    </button>
                  `)}
              </div>
            `:v}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?r`
                ${e.schemaLoading?r`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>Loading schema…</span>
                        </div>
                      `:tf({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:f})}
                ${s?r`
                        <div class="callout danger" style="margin-top: 12px">
                          Form view can't safely edit some fields. Use Raw to avoid losing config entries.
                        </div>
                      `:v}
              `:r`
                <label class="field config-raw-field">
                  <span>Raw JSON5</span>
                  <textarea
                    .value=${e.raw}
                    @input=${_=>e.onRawChange(_.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?r`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:v}
      </main>
    </div>
  `}function Yv(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(i=>s.has(i)?!1:(s.add(i),!0))}function Jv(e,t){if(t==="last")return"last";const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Zv(e){const t=Yv(e),s=(e.runsJobId==null?void 0:e.jobs.find(a=>a.id===e.runsJobId))?.name??e.runsJobId??"(select a job)",i=e.runs.toSorted((a,o)=>o.ts-a.ts);return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">Scheduler</div>
        <div class="card-sub">Gateway-owned cron scheduler status.</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${Xi(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
          ${e.error?r`<span class="muted">${e.error}</span>`:v}
        </div>
      </div>

      <div class="card">
        <div class="card-title">New Job</div>
        <div class="card-sub">Create a scheduled wakeup or agent run.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Name</span>
            <input
              .value=${e.form.name}
              @input=${a=>e.onFormChange({name:a.target.value})}
            />
          </label>
          <label class="field">
            <span>Description</span>
            <input
              .value=${e.form.description}
              @input=${a=>e.onFormChange({description:a.target.value})}
            />
          </label>
          <label class="field">
            <span>Agent ID</span>
            <input
              .value=${e.form.agentId}
              @input=${a=>e.onFormChange({agentId:a.target.value})}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>Enabled</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${a=>e.onFormChange({enabled:a.target.checked})}
            />
          </label>
          <label class="field">
            <span>Schedule</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${a=>e.onFormChange({scheduleKind:a.target.value})}
            >
              <option value="every">Every</option>
              <option value="at">At</option>
              <option value="cron">Cron</option>
            </select>
          </label>
        </div>
        ${Xv(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>Session</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${a=>e.onFormChange({sessionTarget:a.target.value})}
            >
              <option value="main">Main</option>
              <option value="isolated">Isolated</option>
            </select>
          </label>
          <label class="field">
            <span>Wake mode</span>
            <select
              .value=${e.form.wakeMode}
              @change=${a=>e.onFormChange({wakeMode:a.target.value})}
            >
              <option value="now">Now</option>
              <option value="next-heartbeat">Next heartbeat</option>
            </select>
          </label>
          <label class="field">
            <span>Payload</span>
            <select
              .value=${e.form.payloadKind}
              @change=${a=>e.onFormChange({payloadKind:a.target.value})}
            >
              <option value="systemEvent">System event</option>
              <option value="agentTurn">Agent turn</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?"System text":"Agent message"}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${a=>e.onFormChange({payloadText:a.target.value})}
            rows="4"
          ></textarea>
        </label>
        ${e.form.payloadKind==="agentTurn"?r`
                <div class="form-grid" style="margin-top: 12px;">
                  <label class="field">
                    <span>Delivery</span>
                    <select
                      .value=${e.form.deliveryMode}
                      @change=${a=>e.onFormChange({deliveryMode:a.target.value})}
                    >
                      <option value="announce">Announce summary (default)</option>
                      <option value="none">None (internal)</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>Timeout (seconds)</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${a=>e.onFormChange({timeoutSeconds:a.target.value})}
                    />
                  </label>
                  ${e.form.deliveryMode==="announce"?r`
                          <label class="field">
                            <span>Channel</span>
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${a=>e.onFormChange({deliveryChannel:a.target.value})}
                            >
                              ${t.map(a=>r`<option value=${a}>
                                    ${Jv(e,a)}
                                  </option>`)}
                            </select>
                          </label>
                          <label class="field">
                            <span>To</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${a=>e.onFormChange({deliveryTo:a.target.value})}
                              placeholder="+1555… or chat id"
                            />
                          </label>
                        `:v}
                </div>
              `:v}
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" ?disabled=${e.busy} @click=${e.onAdd}>
            ${e.busy?"Saving…":"Add job"}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Jobs</div>
      <div class="card-sub">All scheduled jobs stored in the gateway.</div>
      ${e.jobs.length===0?r`
              <div class="muted" style="margin-top: 12px">No jobs yet.</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(a=>em(a,e))}
            </div>
          `}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Run history</div>
      <div class="card-sub">Latest runs for ${s}.</div>
      ${e.runsJobId==null?r`
              <div class="muted" style="margin-top: 12px">Select a job to inspect run history.</div>
            `:i.length===0?r`
                <div class="muted" style="margin-top: 12px">No runs yet.</div>
              `:r`
              <div class="list" style="margin-top: 12px;">
                ${i.map(a=>sm(a,e.basePath))}
              </div>
            `}
    </section>
  `}function Xv(e){const t=e.form;return t.scheduleKind==="at"?r`
      <label class="field" style="margin-top: 12px;">
        <span>Run at</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?r`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>Every</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>Unit</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
          </select>
        </label>
      </div>
    `:r`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>Expression</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function em(e,t){const s=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`;return r`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${Al(e)}</div>
        ${tm(e)}
        ${e.agentId?r`<div class="muted cron-job-agent">Agent: ${e.agentId}</div>`:v}
      </div>
      <div class="list-meta">
        ${nm(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?"enabled":"disabled"}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onLoadRuns(e.id)}}
          >
            History
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function tm(e){if(e.payload.kind==="systemEvent")return r`<div class="cron-job-detail">
      <span class="cron-job-detail-label">System</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return r`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">Prompt</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?r`<div class="cron-job-detail">
            <span class="cron-job-detail-label">Delivery</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:v}
  `}function er(e){return typeof e!="number"||!Number.isFinite(e)?"n/a":Q(e)}function nm(e){const t=e.state?.lastStatus??"n/a",n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=e.state?.nextRunAtMs,i=e.state?.lastRunAtMs;return r`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Status</span>
        <span class=${`cron-job-status-pill ${n}`}>${t}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Next</span>
        <span class="cron-job-state-value" title=${mt(s)}>
          ${er(s)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Last</span>
        <span class="cron-job-state-value" title=${mt(i)}>
          ${er(i)}
        </span>
      </div>
    </div>
  `}function sm(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${os("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${mt(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${n?r`<div><a class="session-link" href=${n}>Open run chat</a></div>`:v}
        ${e.error?r`<div class="muted">${e.error}</div>`:v}
      </div>
    </div>
  `}function im(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,i=n?.warn??0,a=n?.info??0,o=s>0?"danger":i>0?"warn":"success",l=s>0?`${s} critical`:i>0?`${i} warnings`:"No critical issues";return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Snapshots</div>
            <div class="card-sub">Status, health, and heartbeat data.</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">Status</div>
            ${n?r`<div class="callout ${o}" style="margin-top: 8px;">
                  Security audit: ${l}${a>0?` · ${a} info`:""}. Run
                  <span class="mono">openclaw security audit --deep</span> for details.
                </div>`:v}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Health</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Last heartbeat</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Manual RPC</div>
        <div class="card-sub">Send a raw gateway method with JSON params.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Method</span>
            <input
              .value=${e.callMethod}
              @input=${c=>e.onCallMethodChange(c.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>Params (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${c=>e.onCallParamsChange(c.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>Call</button>
        </div>
        ${e.callError?r`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:v}
        ${e.callResult?r`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:v}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Models</div>
      <div class="card-sub">Catalog from models.list.</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Event Log</div>
      <div class="card-sub">Latest gateway events.</div>
      ${e.eventLog.length===0?r`
              <div class="muted" style="margin-top: 12px">No events yet.</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(c=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${c.event}</div>
                      <div class="list-sub">${new Date(c.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${fp(c.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function am(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function ot(e,t){return t?r`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:v}function om(e){const t=e.execApprovalQueue[0];if(!t)return v;const n=t.request,s=t.expiresAtMs-Date.now(),i=s>0?`expires in ${am(s)}`:"expired",a=e.execApprovalQueue.length;return r`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
          ${a>1?r`<div class="exec-approval-queue">${a} pending</div>`:v}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${ot("Host",n.host)}
          ${ot("Agent",n.agentId)}
          ${ot("Session",n.sessionKey)}
          ${ot("CWD",n.cwd)}
          ${ot("Resolved",n.resolvedPath)}
          ${ot("Security",n.security)}
          ${ot("Ask",n.ask)}
        </div>
        ${e.execApprovalError?r`<div class="exec-approval-error">${e.execApprovalError}</div>`:v}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function rm(e){const{pendingGatewayUrl:t}=e;return t?r`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:v}function lm(e){return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${T("Connected Instances")}</div>
          <div class="card-sub">${T("Presence beacons from the gateway and clients.")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      ${e.statusMessage?r`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?r`
                <div class="muted">No instances reported yet.</div>
              `:e.entries.map(t=>cm(t))}
      </div>
    </section>
  `}function cm(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}s ago`:"n/a",n=e.mode??"unknown",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],i=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],a=i.length>0?i.length>3?`${i.length} scopes`:`scopes: ${i.join(", ")}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??"unknown host"}</div>
        <div class="list-sub">${up(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(o=>r`<span class="chip">${o}</span>`)}
          ${a?r`<span class="chip">${a}</span>`:v}
          ${e.platform?r`<span class="chip">${e.platform}</span>`:v}
          ${e.deviceFamily?r`<span class="chip">${e.deviceFamily}</span>`:v}
          ${e.modelIdentifier?r`<span class="chip">${e.modelIdentifier}</span>`:v}
          ${e.version?r`<span class="chip">${e.version}</span>`:v}
        </div>
      </div>
      <div class="list-meta">
        <div>${gp(e)}</div>
        <div class="muted">Last input ${t}</div>
        <div class="muted">Reason ${e.reason??""}</div>
      </div>
    </div>
  `}const tr=["trace","debug","info","warn","error","fatal"];function dm(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function um(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function gm(e){const t=e.filterText.trim().toLowerCase(),n=tr.some(a=>!e.levelFilters[a]),s=e.entries.filter(a=>a.level&&!e.levelFilters[a.level]?!1:um(a,t)),i=t||n?"filtered":"visible";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Logs</div>
          <div class="card-sub">Gateway file logs (JSONL).</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(a=>a.raw),i)}
          >
            Export ${i}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${a=>e.onFilterTextChange(a.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${a=>e.onToggleAutoFollow(a.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${tr.map(a=>r`
            <label class="chip log-chip ${a}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[a]}
                @change=${o=>e.onLevelToggle(a,o.target.checked)}
              />
              <span>${a}</span>
            </label>
          `)}
      </div>

      ${e.file?r`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:v}
      ${e.truncated?r`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:v}
      ${e.error?r`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:v}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?r`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(a=>r`
                <div class="log-row">
                  <div class="log-time mono">${dm(a.time)}</div>
                  <div class="log-level ${a.level??""}">${a.level??""}</div>
                  <div class="log-subsystem mono">${a.subsystem??""}</div>
                  <div class="log-message mono">${a.message??a.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function pm(e){const t=ym(e),n=Am(e);return r`
    ${Tm(n)}
    ${Cm(t)}
    ${fm(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Nodes</div>
          <div class="card-sub">Paired devices and live links.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?r`
                <div class="muted">No nodes found.</div>
              `:e.nodes.map(s=>Fm(s))}
      </div>
    </section>
  `}function fm(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Devices</div>
          <div class="card-sub">Pairing requests + role tokens.</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.devicesError?r`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?r`
              <div class="muted" style="margin-bottom: 8px;">Pending</div>
              ${n.map(i=>hm(i,e))}
            `:v}
        ${s.length>0?r`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">Paired</div>
              ${s.map(i=>vm(i,e))}
            `:v}
        ${n.length===0&&s.length===0?r`
                <div class="muted">No paired devices.</div>
              `:v}
      </div>
    </section>
  `}function hm(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?Q(e.ts):"n/a",i=e.role?.trim()?`role: ${e.role}`:"role: -",a=e.isRepair?" · repair":"",o=e.remoteIp?` · ${e.remoteIp}`:"";return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${o}</div>
        <div class="muted" style="margin-top: 6px;">
          ${i} · requested ${s}${a}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            Approve
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  `}function vm(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",i=`roles: ${Js(e.roles)}`,a=`scopes: ${Js(e.scopes)}`,o=Array.isArray(e.tokens)?e.tokens:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${i} · ${a}</div>
        ${o.length===0?r`
                <div class="muted" style="margin-top: 6px">Tokens: none</div>
              `:r`
              <div class="muted" style="margin-top: 10px;">Tokens</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${o.map(l=>mm(e.deviceId,l,t))}
              </div>
            `}
      </div>
    </div>
  `}function mm(e,t,n){const s=t.revokedAtMs?"revoked":"active",i=`scopes: ${Js(t.scopes)}`,a=Q(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return r`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${i} · ${a}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          Rotate
        </button>
        ${t.revokedAtMs?v:r`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                Revoke
              </button>
            `}
      </div>
    </div>
  `}const Ye="__defaults__",nr=[{value:"deny",label:"Deny"},{value:"allowlist",label:"Allowlist"},{value:"full",label:"Full"}],bm=[{value:"off",label:"Off"},{value:"on-miss",label:"On miss"},{value:"always",label:"Always"}];function ym(e){const t=e.configForm,n=Dm(e.nodes),{defaultBinding:s,agents:i}=Nm(t),a=!!t,o=e.configSaving||e.configFormMode==="raw";return{ready:a,disabled:o,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:i,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function sr(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function xm(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function wm(e){const t=e?.defaults??{};return{security:sr(t.security),ask:xm(t.ask),askFallback:sr(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function $m(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(i=>{if(!i||typeof i!="object")return;const a=i,o=typeof a.id=="string"?a.id.trim():"";if(!o)return;const l=typeof a.name=="string"?a.name.trim():void 0,c=a.default===!0;s.push({id:o,name:l||void 0,isDefault:c})}),s}function km(e,t){const n=$m(e),s=Object.keys(t?.agents??{}),i=new Map;n.forEach(o=>i.set(o.id,o)),s.forEach(o=>{i.has(o)||i.set(o,{id:o})});const a=Array.from(i.values());return a.length===0&&a.push({id:"main",isDefault:!0}),a.sort((o,l)=>{if(o.isDefault&&!l.isDefault)return-1;if(!o.isDefault&&l.isDefault)return 1;const c=o.name?.trim()?o.name:o.id,u=l.name?.trim()?l.name:l.id;return c.localeCompare(u)}),a}function Sm(e,t){return e===Ye?Ye:e&&t.some(n=>n.id===e)?e:Ye}function Am(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=wm(t),i=km(e.configForm,t),a=Pm(e.nodes),o=e.execApprovalsTarget;let l=o==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;o==="node"&&l&&!a.some(p=>p.id===l)&&(l=null);const c=Sm(e.execApprovalsSelectedAgent,i),u=c!==Ye?(t?.agents??{})[c]??null:null,g=Array.isArray(u?.allowlist)?u.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:c,selectedAgent:u,agents:i,allowlist:g,target:o,targetNodeId:l,targetNodes:a,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function Cm(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec node binding</div>
          <div class="card-sub">
            Pin agents to a specific node when using <span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?"Saving…":"Save"}
        </button>
      </div>

      ${e.formMode==="raw"?r`
              <div class="callout warn" style="margin-top: 12px">
                Switch the Config tab to <strong>Form</strong> mode to edit bindings here.
              </div>
            `:v}

      ${e.ready?r`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">Default binding</div>
                  <div class="list-sub">Used when agents do not override a node binding.</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>Node</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const a=s.target.value.trim();e.onBindDefault(a||null)}}
                    >
                      <option value="" ?selected=${n===""}>Any node</option>
                      ${e.nodes.map(s=>r`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?v:r`
                          <div class="muted">No nodes with system.run available.</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?r`
                      <div class="muted">No agents found.</div>
                    `:e.agents.map(s=>Mm(s,e))}
            </div>
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load config to edit bindings.</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?"Loading…":"Load config"}
            </button>
          </div>`}
    </section>
  `}function Tm(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec approvals</div>
          <div class="card-sub">
            Allowlist and approval policy for <span class="mono">exec host=gateway/node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?"Saving…":"Save"}
        </button>
      </div>

      ${_m(e)}

      ${t?r`
            ${Em(e)}
            ${Lm(e)}
            ${e.selectedScope===Ye?v:Rm(e)}
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load exec approvals to edit allowlists.</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?"Loading…":"Load approvals"}
            </button>
          </div>`}
    </section>
  `}function _m(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return r`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Target</div>
          <div class="list-sub">
            Gateway edits local approvals; node edits the selected node.
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Host</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const o=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||o)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>Gateway</option>
              <option value="node" ?selected=${e.target==="node"}>Node</option>
            </select>
          </label>
          ${e.target==="node"?r`
                <label class="field">
                  <span>Node</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const a=s.target.value.trim();e.onSelectTarget("node",a||null)}}
                  >
                    <option value="" ?selected=${n===""}>Select node</option>
                    ${e.targetNodes.map(s=>r`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:v}
        </div>
      </div>
      ${e.target==="node"&&!t?r`
              <div class="muted">No nodes advertise exec approvals yet.</div>
            `:v}
    </div>
  `}function Em(e){return r`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">Scope</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===Ye?"active":""}"
          @click=${()=>e.onSelectScope(Ye)}
        >
          Defaults
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return r`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function Lm(e){const t=e.selectedScope===Ye,n=e.defaults,s=e.selectedAgent??{},i=t?["defaults"]:["agents",e.selectedScope],a=typeof s.security=="string"?s.security:void 0,o=typeof s.ask=="string"?s.ask:void 0,l=typeof s.askFallback=="string"?s.askFallback:void 0,c=t?n.security:a??"__default__",u=t?n.ask:o??"__default__",g=t?n.askFallback:l??"__default__",p=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,h=p??n.autoAllowSkills,d=p==null;return r`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Security</div>
          <div class="list-sub">
            ${t?"Default security mode.":`Default: ${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${f=>{const S=f.target.value;!t&&S==="__default__"?e.onRemove([...i,"security"]):e.onPatch([...i,"security"],S)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${c==="__default__"}>
                    Use default (${n.security})
                  </option>`}
              ${nr.map(f=>r`<option
                    value=${f.value}
                    ?selected=${c===f.value}
                  >
                    ${f.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask</div>
          <div class="list-sub">
            ${t?"Default prompt policy.":`Default: ${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${f=>{const S=f.target.value;!t&&S==="__default__"?e.onRemove([...i,"ask"]):e.onPatch([...i,"ask"],S)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${u==="__default__"}>
                    Use default (${n.ask})
                  </option>`}
              ${bm.map(f=>r`<option
                    value=${f.value}
                    ?selected=${u===f.value}
                  >
                    ${f.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask fallback</div>
          <div class="list-sub">
            ${t?"Applied when the UI prompt is unavailable.":`Default: ${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Fallback</span>
            <select
              ?disabled=${e.disabled}
              @change=${f=>{const S=f.target.value;!t&&S==="__default__"?e.onRemove([...i,"askFallback"]):e.onPatch([...i,"askFallback"],S)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${g==="__default__"}>
                    Use default (${n.askFallback})
                  </option>`}
              ${nr.map(f=>r`<option
                    value=${f.value}
                    ?selected=${g===f.value}
                  >
                    ${f.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Auto-allow skill CLIs</div>
          <div class="list-sub">
            ${t?"Allow skill executables listed by the Gateway.":d?`Using default (${n.autoAllowSkills?"on":"off"}).`:`Override (${h?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Enabled</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${h}
              @change=${f=>{const m=f.target;e.onPatch([...i,"autoAllowSkills"],m.checked)}}
            />
          </label>
          ${!t&&!d?r`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...i,"autoAllowSkills"])}
              >
                Use default
              </button>`:v}
        </div>
      </div>
    </div>
  `}function Rm(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return r`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">Allowlist</div>
        <div class="card-sub">Case-insensitive glob patterns.</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        Add pattern
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?r`
              <div class="muted">No allowlist entries yet.</div>
            `:n.map((s,i)=>Im(e,s,i))}
    </div>
  `}function Im(e,t,n){const s=t.lastUsedAt?Q(t.lastUsedAt):"never",i=t.lastUsedCommand?Zs(t.lastUsedCommand,120):null,a=t.lastResolvedPath?Zs(t.lastResolvedPath,120):null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:"New pattern"}</div>
        <div class="list-sub">Last used: ${s}</div>
        ${i?r`<div class="list-sub mono">${i}</div>`:v}
        ${a?r`<div class="list-sub mono">${a}</div>`:v}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Pattern</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${o=>{const l=o.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],l.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          Remove
        </button>
      </div>
    </div>
  `}function Mm(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,i=t.nodes.length>0;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?"default agent":"agent"} ·
          ${n==="__default__"?`uses default (${t.defaultBinding??"any"})`:`override: ${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Binding</span>
          <select
            ?disabled=${t.disabled||!i}
            @change=${a=>{const l=a.target.value.trim();t.onBindAgent(e.index,l==="__default__"?null:l)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              Use default
            </option>
            ${t.nodes.map(a=>r`<option
                  value=${a.id}
                  ?selected=${n===a.id}
                >
                  ${a.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function Dm(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(l=>String(l)==="system.run"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function Pm(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(l=>String(l)==="system.execApprovals.get"||String(l)==="system.execApprovals.set"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function Nm(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},i=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,a=e.agents??{},o=Array.isArray(a.list)?a.list:[];if(o.length===0)return{defaultBinding:i,agents:[t]};const l=[];return o.forEach((c,u)=>{if(!c||typeof c!="object")return;const g=c,p=typeof g.id=="string"?g.id.trim():"";if(!p)return;const h=typeof g.name=="string"?g.name.trim():void 0,d=g.default===!0,m=(g.tools??{}).exec??{},S=typeof m.node=="string"&&m.node.trim()?m.node.trim():null;l.push({id:p,name:h||void 0,index:u,isDefault:d,binding:S})}),l.length===0&&l.push(t),{defaultBinding:i,agents:l}}function Fm(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),i=Array.isArray(e.caps)?e.caps:[],a=Array.isArray(e.commands)?e.commands:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${n?"paired":"unpaired"}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${t?"connected":"offline"}
          </span>
          ${i.slice(0,12).map(o=>r`<span class="chip">${String(o)}</span>`)}
          ${a.slice(0,8).map(o=>r`<span class="chip">${String(o)}</span>`)}
        </div>
      </div>
    </div>
  `}function Om(e){const t=e.hello?.snapshot,n=t?.uptimeMs?Fi(t.uptimeMs):"n/a",s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",i=(()=>{if(e.connected||!e.lastError)return null;const o=e.lastError.toLowerCase();if(!(o.includes("unauthorized")||o.includes("connect failed")))return null;const c=!!e.settings.token.trim(),u=!!e.password.trim();return!c&&!u?r`
        <div class="muted" style="margin-top: 8px">
          This gateway requires auth. Add a token or password, then click Connect.
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> �?open the Control UI<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> �?set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:r`
      <div class="muted" style="margin-top: 8px">
        Auth failed. Update the token or password in Control UI settings, then click Connect.
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),a=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const l=e.lastError.toLowerCase();return!l.includes("secure context")&&!l.includes("device identity required")?null:r`
      <div class="muted" style="margin-top: 8px">
        This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open
        <span class="mono">http://127.0.0.1:18789</span> on the gateway host.
        <div style="margin-top: 6px">
          If you must stay on HTTP, set
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span> (token-only).
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})();return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${T("Gateway Access")}</div>
        <div class="card-sub">${T("Where the dashboard connects and how it authenticates.")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${T("WebSocket URL")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${o=>{const l=o.target.value;e.onSettingsChange({...e.settings,gatewayUrl:l})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          <label class="field">
            <span>${T("Gateway Token")}</span>
            <input
              .value=${e.settings.token}
              @input=${o=>{const l=o.target.value;e.onSettingsChange({...e.settings,token:l})}}
              placeholder="OPENCLAW_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>${T("Password (not stored)")}</span>
            <input
              type="password"
              .value=${e.password}
              @input=${o=>{const l=o.target.value;e.onPasswordChange(l)}}
              placeholder="system or shared password"
            />
          </label>
          <label class="field">
            <span>${T("Default Session Key")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${o=>{const l=o.target.value;e.onSessionKeyChange(l)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${T("Connect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${T("Refresh")}</button>
          <span class="muted">${T("Click Connect to apply connection changes.")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${T("Snapshot")}</div>
        <div class="card-sub">${T("Latest gateway handshake information.")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${T("Status")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?T("Connected"):T("Disconnected")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${T("Uptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${T("Tick Interval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${T("Last Channels Refresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?Q(e.lastChannelsRefresh):T("n/a")}
            </div>
          </div>
        </div>
        ${e.lastError?r`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${i??""}
              ${a??""}
            </div>`:r`
                <div class="callout" style="margin-top: 14px">
                  ${T("Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${T("Instances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${T("Presence beacons in the last 5 minutes.")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${T("Sessions")}</div>
        <div class="stat-value">${e.sessionsCount??T("n/a")}</div>
        <div class="muted">${T("Recent session keys tracked by the gateway.")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${T("Cron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?T("n/a"):e.cronEnabled?T("Enabled"):T("Disabled")}
        </div>
        <div class="muted">${T("Next wake")} ${Xi(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${T("Notes")}</div>
      <div class="card-sub">${T("Quick reminders for remote control setups.")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${T("Tailscale serve")}</div>
          <div class="muted">
            ${T("Prefer serve mode to keep the gateway on loopback with tailnet auth.")}
          </div>
        </div>
        <div>
          <div class="note-title">${T("Session hygiene")}</div>
          <div class="muted">${T("Use /new or sessions.patch to reset context.")}</div>
        </div>
        <div>
          <div class="note-title">${T("Cron reminders")}</div>
          <div class="muted">${T("Use isolated sessions for recurring runs.")}</div>
        </div>
      </div>
    </section>
  `}const Bm=["","off","minimal","low","medium","high","xhigh"],Um=["","off","on"],zm=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"},{value:"full",label:"full"}],Hm=["","off","on","stream"];function jm(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function ac(e){return jm(e)==="zai"}function Km(e){return ac(e)?Um:Bm}function ir(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function Wm(e,t){return t?e.some(n=>n.value===t)?[...e]:[...e,{value:t,label:`${t} (custom)`}]:[...e]}function qm(e,t){return!t||!e||e==="off"?e:"on"}function Gm(e,t){return e?t&&e==="on"?"low":e:null}function Vm(e){const t=e.result?.sessions??[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Sessions</div>
          <div class="card-sub">Active session keys and per-session overrides.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>Active within (minutes)</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>Limit</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include global</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include unknown</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`Store: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>Key</div>
          <div>Label</div>
          <div>Kind</div>
          <div>Updated</div>
          <div>Tokens</div>
          <div>Thinking</div>
          <div>Verbose</div>
          <div>Reasoning</div>
          <div>Actions</div>
        </div>
        ${t.length===0?r`
                <div class="muted">No sessions found.</div>
              `:t.map(n=>Qm(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function Qm(e,t,n,s,i){const a=e.updatedAt?Q(e.updatedAt):"n/a",o=e.thinkingLevel??"",l=ac(e.modelProvider),c=qm(o,l),u=ir(Km(e.modelProvider),c),g=e.verboseLevel??"",p=Wm(zm,g),h=e.reasoningLevel??"",d=ir(Hm,h),f=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,m=typeof e.label=="string"?e.label.trim():"",S=!!(f&&f!==e.key&&f!==m),k=e.kind!=="global",y=k?`${os("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return r`
    <div class="table-row">
      <div class="mono session-key-cell">
        ${k?r`<a href=${y} class="session-link">${e.key}</a>`:e.key}
        ${S?r`<span class="muted session-key-display-name">${f}</span>`:v}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${i}
          placeholder="(optional)"
          @change=${A=>{const C=A.target.value.trim();n(e.key,{label:C||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${a}</div>
      <div>${pp(e)}</div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const C=A.target.value;n(e.key,{thinkingLevel:Gm(C,l)})}}
        >
          ${u.map(A=>r`<option value=${A} ?selected=${c===A}>
                ${A||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const C=A.target.value;n(e.key,{verboseLevel:C||null})}}
        >
          ${p.map(A=>r`<option value=${A.value} ?selected=${g===A.value}>
                ${A.label}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const C=A.target.value;n(e.key,{reasoningLevel:C||null})}}
        >
          ${d.map(A=>r`<option value=${A} ?selected=${h===A}>
                ${A||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${i} @click=${()=>s(e.key)}>
          Delete
        </button>
      </div>
    </div>
  `}const Rn=[{id:"workspace",label:"Workspace Skills",sources:["openclaw-workspace"]},{id:"built-in",label:"Built-in Skills",sources:["openclaw-bundled"]},{id:"installed",label:"Installed Skills",sources:["openclaw-managed"]},{id:"extra",label:"Extra Skills",sources:["openclaw-extra"]}];function Ym(e){const t=new Map;for(const a of Rn)t.set(a.id,{id:a.id,label:a.label,skills:[]});const n=Rn.find(a=>a.id==="built-in"),s={id:"other",label:"Other Skills",skills:[]};for(const a of e){const o=a.bundled?n:Rn.find(l=>l.sources.includes(a.source));o?t.get(o.id)?.skills.push(a):s.skills.push(a)}const i=Rn.map(a=>t.get(a.id)).filter(a=>!!(a&&a.skills.length>0));return s.skills.length>0&&i.push(s),i}function Jm(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(a=>[a.name,a.description,a.source].join(" ").toLowerCase().includes(n)):t,i=Ym(s);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">Bundled, managed, and workspace skills.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${a=>e.onFilterChange(a.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${s.length} shown</div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${s.length===0?r`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:r`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${i.map(a=>{const o=a.id==="workspace"||a.id==="built-in";return r`
                  <details class="agent-skills-group" ?open=${!o}>
                    <summary class="agent-skills-header">
                      <span>${a.label}</span>
                      <span class="muted">${a.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${a.skills.map(l=>Zm(l,e))}
                    </div>
                  </details>
                `})}
            </div>
          `}
    </section>
  `}function Zm(e,t){const n=t.busyKey===e.skillKey,s=t.edits[e.skillKey]??"",i=t.messages[e.skillKey]??null,a=e.install.length>0&&e.missing.bins.length>0,o=!!(e.bundled&&e.source!=="openclaw-bundled"),l=[...e.missing.bins.map(u=>`bin:${u}`),...e.missing.env.map(u=>`env:${u}`),...e.missing.config.map(u=>`config:${u}`),...e.missing.os.map(u=>`os:${u}`)],c=[];return e.disabled&&c.push("disabled"),e.blockedByAllowlist&&c.push("blocked by allowlist"),r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${Zs(e.description,140)}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.source}</span>
          ${o?r`
                  <span class="chip">bundled</span>
                `:v}
          <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"eligible":"blocked"}
          </span>
          ${e.disabled?r`
                  <span class="chip chip-warn">disabled</span>
                `:v}
        </div>
        ${l.length>0?r`
              <div class="muted" style="margin-top: 6px;">
                Missing: ${l.join(", ")}
              </div>
            `:v}
        ${c.length>0?r`
              <div class="muted" style="margin-top: 6px;">
                Reason: ${c.join(", ")}
              </div>
            `:v}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${n}
            @click=${()=>t.onToggle(e.skillKey,e.disabled)}
          >
            ${e.disabled?"Enable":"Disable"}
          </button>
          ${a?r`<button
                class="btn"
                ?disabled=${n}
                @click=${()=>t.onInstall(e.skillKey,e.name,e.install[0].id)}
              >
                ${n?"Installing…":e.install[0].label}
              </button>`:v}
        </div>
        ${i?r`<div
              class="muted"
              style="margin-top: 8px; color: ${i.kind==="error"?"var(--danger-color, #d14343)":"var(--success-color, #0a7f5a)"};"
            >
              ${i.message}
            </div>`:v}
        ${e.primaryEnv?r`
              <div class="field" style="margin-top: 10px;">
                <span>API key</span>
                <input
                  type="password"
                  .value=${s}
                  @input=${u=>t.onEdit(e.skillKey,u.target.value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${n}
                @click=${()=>t.onSaveKey(e.skillKey)}
              >
                Save key
              </button>
            `:v}
      </div>
    </div>
  `}const Xm=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),Qn=e=>e.trim().toLowerCase(),eb=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},ct=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},ua=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),i=s.indexOf(":");if(i>0){const a=s.slice(0,i),o=s.slice(i+1);return{key:a,value:o,raw:s}}return{value:s,raw:s}}),tb=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),ar=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},or=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},nb=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),sb=(e,t)=>{const n=Qn(t.value??"");if(!n)return!0;if(!t.key)return tb(e).some(i=>i.includes(n));switch(Qn(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return ar(e).some(i=>i.includes(n));case"model":return or(e).some(i=>i.includes(n));case"tool":return nb(e).some(i=>i.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const i=eb(n);return i.test(e.key)||(e.sessionId?i.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return or(e).length>0;case"provider":return ar(e).length>0;default:return!0}case"mintokens":{const i=ct(n);return i===null?!0:(e.usage?.totalTokens??0)>=i}case"maxtokens":{const i=ct(n);return i===null?!0:(e.usage?.totalTokens??0)<=i}case"mincost":{const i=ct(n);return i===null?!0:(e.usage?.totalCost??0)>=i}case"maxcost":{const i=ct(n);return i===null?!0:(e.usage?.totalCost??0)<=i}case"minmessages":{const i=ct(n);return i===null?!0:(e.usage?.messageCounts?.total??0)>=i}case"maxmessages":{const i=ct(n);return i===null?!0:(e.usage?.messageCounts?.total??0)<=i}default:return!0}},ib=(e,t)=>{const n=ua(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const a of n){if(!a.key)continue;const o=Qn(a.key);if(!Xm.has(o)){s.push(`Unknown filter: ${a.key}`);continue}if(a.value===""&&s.push(`Missing value for ${a.key}`),o==="has"){const l=new Set(["tools","errors","context","usage","model","provider"]);a.value&&!l.has(Qn(a.value))&&s.push(`Unknown has:${a.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(o)&&a.value&&ct(a.value)===null&&s.push(`Invalid number for ${a.key}`)}return{sessions:e.filter(a=>n.every(o=>sb(a,o))),warnings:s}};function ab(e){const t=e.split(`
`),n=new Map,s=[];for(const l of t){const c=/^\[Tool:\s*([^\]]+)\]/.exec(l.trim());if(c){const u=c[1];n.set(u,(n.get(u)??0)+1);continue}l.trim().startsWith("[Tool Result]")||s.push(l)}const i=Array.from(n.entries()).toSorted((l,c)=>c[1]-l[1]),a=i.reduce((l,[,c])=>l+c,0),o=i.length>0?`Tools: ${i.map(([l,c])=>`${l}×${c}`).join(", ")} (${a} calls)`:"";return{tools:i,summary:o,cleanContent:s.join(`
`).trim()}}const ob=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--text-muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--text-muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--text-muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--text-muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--text-muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--text-muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text-muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }
`,rb=4;function rt(e){return Math.round(e/rb)}function B(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function lb(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function cb(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const i of e){const a=i.usage;if(!a?.messageCounts||a.messageCounts.total===0)continue;const o=a.firstActivity??i.updatedAt,l=a.lastActivity??i.updatedAt;if(!o||!l)continue;const c=Math.min(o,l),u=Math.max(o,l),p=Math.max(u-c,1)/6e4;let h=c;for(;h<u;){const d=new Date(h),f=ga(d,t),m=pa(d,t),S=Math.min(m.getTime(),u),y=Math.max((S-h)/6e4,0)/p;n[f]+=a.messageCounts.errors*y,s[f]+=a.messageCounts.total*y,h=S+1}}return s.map((i,a)=>{const o=n[a],l=i>0?o/i:0;return{hour:a,rate:l,errors:o,msgs:i}}).filter(i=>i.msgs>0&&i.errors>0).toSorted((i,a)=>a.rate-i.rate).slice(0,5).map(i=>({label:lb(i.hour),value:`${(i.rate*100).toFixed(2)}%`,sub:`${Math.round(i.errors)} errors Â· ${Math.round(i.msgs)} msgs`}))}const db=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function ga(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function ub(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function pa(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function gb(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let i=0,a=!1;for(const l of e){const c=l.usage;if(!c||!c.totalTokens||c.totalTokens<=0)continue;i+=c.totalTokens;const u=c.firstActivity??l.updatedAt,g=c.lastActivity??l.updatedAt;if(!u||!g)continue;a=!0;const p=Math.min(u,g),h=Math.max(u,g),f=Math.max(h-p,1)/6e4;let m=p;for(;m<h;){const S=new Date(m),k=ga(S,t),y=ub(S,t),A=pa(S,t),C=Math.min(A.getTime(),h),_=Math.max((C-m)/6e4,0)/f;n[k]+=c.totalTokens*_,s[y]+=c.totalTokens*_,m=C+1}}const o=db.map((l,c)=>({label:l,tokens:s[c]}));return{hasData:a,totalTokens:i,hourTotals:n,weekdayTotals:o}}function pb(e,t,n,s){const i=gb(e,t);if(!i.hasData)return r`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">Activity by Time</div>
            <div class="usage-mosaic-sub">Estimates require session timestamps.</div>
          </div>
          <div class="usage-mosaic-total">${B(0)} tokens</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">No timeline data yet.</div>
      </div>
    `;const a=Math.max(...i.hourTotals,1),o=Math.max(...i.weekdayTotals.map(l=>l.tokens),1);return r`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">Activity by Time</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${t==="utc"?"UTC":"Local"}.
          </div>
        </div>
        <div class="usage-mosaic-total">${B(i.totalTokens)} tokens</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">Day of Week</div>
          <div class="usage-daypart-grid">
            ${i.weekdayTotals.map(l=>{const c=Math.min(l.tokens/o,1),u=l.tokens>0?`rgba(255, 77, 77, ${.12+c*.6})`:"transparent";return r`
                <div class="usage-daypart-cell" style="background: ${u};">
                  <div class="usage-daypart-label">${l.label}</div>
                  <div class="usage-daypart-value">${B(l.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>Hours</span>
            <span class="usage-mosaic-sub">0 â?23</span>
          </div>
          <div class="usage-hour-grid">
            ${i.hourTotals.map((l,c)=>{const u=Math.min(l/a,1),g=l>0?`rgba(255, 77, 77, ${.08+u*.7})`:"transparent",p=`${c}:00 Â· ${B(l)} tokens`,h=u>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",d=n.includes(c);return r`
                <div
                  class="usage-hour-cell ${d?"selected":""}"
                  style="background: ${g}; border-color: ${h};"
                  title="${p}"
                  @click=${f=>s(c,f.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>Midnight</span>
            <span>4am</span>
            <span>8am</span>
            <span>Noon</span>
            <span>4pm</span>
            <span>8pm</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low â?High token density
          </div>
        </div>
      </div>
    </div>
  `}function V(e,t=2){return`$${e.toFixed(t)}`}function qs(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function oc(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,i]=t,a=new Date(Date.UTC(Number(n),Number(s)-1,Number(i)));return Number.isNaN(a.valueOf())?null:a}function rc(e){const t=oc(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function fb(e){const t=oc(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}function Gs(e,t,n="text/plain"){const s=new Blob([t],{type:n}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}function hb(e){return e.includes('"')||e.includes(",")||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function Yn(e){return e.map(t=>t==null?"":hb(String(t))).join(",")}const In=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),Mn=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},vb=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,i=new Map,a=new Map,o=new Map,l=new Map,c=new Map,u=new Map,g=new Map,p={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const h of e){const d=h.usage;if(d){if(d.messageCounts&&(n.total+=d.messageCounts.total,n.user+=d.messageCounts.user,n.assistant+=d.messageCounts.assistant,n.toolCalls+=d.messageCounts.toolCalls,n.toolResults+=d.messageCounts.toolResults,n.errors+=d.messageCounts.errors),d.toolUsage)for(const f of d.toolUsage.tools)s.set(f.name,(s.get(f.name)??0)+f.count);if(d.modelUsage)for(const f of d.modelUsage){const m=`${f.provider??"unknown"}::${f.model??"unknown"}`,S=i.get(m)??{provider:f.provider,model:f.model,count:0,totals:In()};S.count+=f.count,Mn(S.totals,f.totals),i.set(m,S);const k=f.provider??"unknown",y=a.get(k)??{provider:f.provider,model:void 0,count:0,totals:In()};y.count+=f.count,Mn(y.totals,f.totals),a.set(k,y)}if(d.latency){const{count:f,avgMs:m,minMs:S,maxMs:k,p95Ms:y}=d.latency;f>0&&(p.count+=f,p.sum+=m*f,p.min=Math.min(p.min,S),p.max=Math.max(p.max,k),p.p95Max=Math.max(p.p95Max,y))}if(h.agentId){const f=o.get(h.agentId)??In();Mn(f,d),o.set(h.agentId,f)}if(h.channel){const f=l.get(h.channel)??In();Mn(f,d),l.set(h.channel,f)}for(const f of d.dailyBreakdown??[]){const m=c.get(f.date)??{date:f.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};m.tokens+=f.tokens,m.cost+=f.cost,c.set(f.date,m)}for(const f of d.dailyMessageCounts??[]){const m=c.get(f.date)??{date:f.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};m.messages+=f.total,m.toolCalls+=f.toolCalls,m.errors+=f.errors,c.set(f.date,m)}for(const f of d.dailyLatency??[]){const m=u.get(f.date)??{date:f.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};m.count+=f.count,m.sum+=f.avgMs*f.count,m.min=Math.min(m.min,f.minMs),m.max=Math.max(m.max,f.maxMs),m.p95Max=Math.max(m.p95Max,f.p95Ms),u.set(f.date,m)}for(const f of d.dailyModelUsage??[]){const m=`${f.date}::${f.provider??"unknown"}::${f.model??"unknown"}`,S=g.get(m)??{date:f.date,provider:f.provider,model:f.model,tokens:0,cost:0,count:0};S.tokens+=f.tokens,S.cost+=f.cost,S.count+=f.count,g.set(m,S)}}}return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((h,d)=>h+d,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([h,d])=>({name:h,count:d})).toSorted((h,d)=>d.count-h.count)},byModel:Array.from(i.values()).toSorted((h,d)=>d.totals.totalCost-h.totals.totalCost),byProvider:Array.from(a.values()).toSorted((h,d)=>d.totals.totalCost-h.totals.totalCost),byAgent:Array.from(o.entries()).map(([h,d])=>({agentId:h,totals:d})).toSorted((h,d)=>d.totals.totalCost-h.totals.totalCost),byChannel:Array.from(l.entries()).map(([h,d])=>({channel:h,totals:d})).toSorted((h,d)=>d.totals.totalCost-h.totals.totalCost),latency:p.count>0?{count:p.count,avgMs:p.sum/p.count,minMs:p.min===Number.POSITIVE_INFINITY?0:p.min,maxMs:p.max,p95Ms:p.p95Max}:void 0,dailyLatency:Array.from(u.values()).map(h=>({date:h.date,count:h.count,avgMs:h.count?h.sum/h.count:0,minMs:h.min===Number.POSITIVE_INFINITY?0:h.min,maxMs:h.max,p95Ms:h.p95Max})).toSorted((h,d)=>h.date.localeCompare(d.date)),modelDaily:Array.from(g.values()).toSorted((h,d)=>h.date.localeCompare(d.date)||d.cost-h.cost),daily:Array.from(c.values()).toSorted((h,d)=>h.date.localeCompare(d.date))}},mb=(e,t,n)=>{let s=0,i=0;for(const g of e){const p=g.usage?.durationMs??0;p>0&&(s+=p,i+=1)}const a=i?s/i:0,o=t&&s>0?t.totalTokens/(s/6e4):void 0,l=t&&s>0?t.totalCost/(s/6e4):void 0,c=n.messages.total?n.messages.errors/n.messages.total:0,u=n.daily.filter(g=>g.messages>0&&g.errors>0).map(g=>({date:g.date,errors:g.errors,messages:g.messages,rate:g.errors/g.messages})).toSorted((g,p)=>p.rate-g.rate||p.errors-g.errors)[0];return{durationSumMs:s,durationCount:i,avgDurationMs:a,throughputTokensPerMin:o,throughputCostPerMin:l,errorRate:c,peakErrorDay:u}},bb=e=>{const t=[Yn(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(Yn([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},yb=e=>{const t=[Yn(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(Yn([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},xb=(e,t,n)=>{const s=e.trim();if(!s)return[];const i=s.length?s.split(/\s+/):[],a=i.length?i[i.length-1]:"",[o,l]=a.includes(":")?[a.slice(0,a.indexOf(":")),a.slice(a.indexOf(":")+1)]:["",""],c=o.toLowerCase(),u=l.toLowerCase(),g=y=>{const A=new Set;for(const C of y)C&&A.add(C);return Array.from(A)},p=g(t.map(y=>y.agentId)).slice(0,6),h=g(t.map(y=>y.channel)).slice(0,6),d=g([...t.map(y=>y.modelProvider),...t.map(y=>y.providerOverride),...n?.byProvider.map(y=>y.provider)??[]]).slice(0,6),f=g([...t.map(y=>y.model),...n?.byModel.map(y=>y.model)??[]]).slice(0,6),m=g(n?.tools.tools.map(y=>y.name)??[]).slice(0,6);if(!c)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const S=[],k=(y,A)=>{for(const C of A)(!u||C.toLowerCase().includes(u))&&S.push({label:`${y}:${C}`,value:`${y}:${C}`})};switch(c){case"agent":k("agent",p);break;case"channel":k("channel",h);break;case"provider":k("provider",d);break;case"model":k("model",f);break;case"tool":k("tool",m);break;case"has":["errors","tools","context","usage","model","provider"].forEach(y=>{(!u||y.includes(u))&&S.push({label:`has:${y}`,value:`has:${y}`})});break}return S},wb=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},ut=e=>e.trim().toLowerCase(),$b=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),i=s[s.length-1]??"",a=t.includes(":")?t.split(":")[0]:null,o=i.includes(":")?i.split(":")[0]:null;return i.endsWith(":")&&a&&o===a?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},rr=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(i=>i!==t);return s.length?`${s.join(" ")} `:""},lr=(e,t,n)=>{const s=ut(t),a=[...ua(e).filter(o=>ut(o.key??"")!==s).map(o=>o.raw),...n.map(o=>`${t}:${o}`)];return a.length?`${a.join(" ")} `:""};function pe(e,t){return t===0?0:e/t*100}function kb(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:pe(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:pe(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:pe(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:pe(e.cacheWriteCost||0,t)},totalCost:t}}function Sb(e,t,n,s,i,a,o,l){if(!(e.length>0||t.length>0||n.length>0))return v;const u=n.length===1?s.find(f=>f.key===n[0]):null,g=u?(u.label||u.key).slice(0,20)+(u.label||u.key).length>20?"…":"":n.length===1?n[0].slice(0,8)+"…":`${n.length} sessions`,p=u?u.label||u.key:n.length===1?n[0]:n.join(", "),h=e.length===1?e[0]:`${e.length} days`,d=t.length===1?`${t[0]}:00`:`${t.length} hours`;return r`
    <div class="active-filters">
      ${e.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">Days: ${h}</span>
              <button class="filter-chip-remove" @click=${i} title="Remove filter">Ã</button>
            </div>
          `:v}
      ${t.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">Hours: ${d}</span>
              <button class="filter-chip-remove" @click=${a} title="Remove filter">Ã</button>
            </div>
          `:v}
      ${n.length>0?r`
            <div class="filter-chip" title="${p}">
              <span class="filter-chip-label">Session: ${g}</span>
              <button class="filter-chip-remove" @click=${o} title="Remove filter">Ã</button>
            </div>
          `:v}
      ${(e.length>0||t.length>0)&&n.length>0?r`
            <button class="btn btn-sm filter-clear-btn" @click=${l}>
              Clear All
            </button>
          `:v}
    </div>
  `}function Ab(e,t,n,s,i,a){if(!e.length)return r`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">Daily Usage</div>
        <div class="muted" style="padding: 20px; text-align: center">No data</div>
      </div>
    `;const o=n==="tokens",l=e.map(p=>o?p.totalTokens:p.totalCost),c=Math.max(...l,o?1:1e-4),u=e.length>30?12:e.length>20?18:e.length>14?24:32,g=e.length<=14;return r`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>i("total")}
          >
            Total
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>i("by-type")}
          >
            By Type
          </button>
        </div>
        <div class="card-title">Daily ${o?"Token":"Cost"} Usage</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${u}px">
          ${e.map((p,h)=>{const f=l[h]/c*100,m=t.includes(p.date),S=rc(p.date),k=e.length>20?String(parseInt(p.date.slice(8),10)):S,y=e.length>20?"font-size: 8px":"",A=s==="by-type"?o?[{value:p.output,class:"output"},{value:p.input,class:"input"},{value:p.cacheWrite,class:"cache-write"},{value:p.cacheRead,class:"cache-read"}]:[{value:p.outputCost??0,class:"output"},{value:p.inputCost??0,class:"input"},{value:p.cacheWriteCost??0,class:"cache-write"},{value:p.cacheReadCost??0,class:"cache-read"}]:[],C=s==="by-type"?o?[`Output ${B(p.output)}`,`Input ${B(p.input)}`,`Cache write ${B(p.cacheWrite)}`,`Cache read ${B(p.cacheRead)}`]:[`Output ${V(p.outputCost??0)}`,`Input ${V(p.inputCost??0)}`,`Cache write ${V(p.cacheWriteCost??0)}`,`Cache read ${V(p.cacheReadCost??0)}`]:[],I=o?B(p.totalTokens):V(p.totalCost);return r`
              <div
                class="daily-bar-wrapper ${m?"selected":""}"
                @click=${_=>a(p.date,_.shiftKey)}
              >
                ${s==="by-type"?r`
                        <div
                          class="daily-bar"
                          style="height: ${f.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const _=A.reduce((M,H)=>M+H.value,0)||1;return A.map(M=>r`
                                <div
                                  class="cost-segment ${M.class}"
                                  style="height: ${M.value/_*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:r`
                        <div class="daily-bar" style="height: ${f.toFixed(1)}%"></div>
                      `}
                ${g?r`<div class="daily-bar-total">${I}</div>`:v}
                <div class="daily-bar-label" style="${y}">${k}</div>
                <div class="daily-bar-tooltip">
                  <strong>${fb(p.date)}</strong><br />
                  ${B(p.totalTokens)} tokens<br />
                  ${V(p.totalCost)}
                  ${C.length?r`${C.map(_=>r`<div>${_}</div>`)}`:v}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function Cb(e,t){const n=kb(e),s=t==="tokens",i=e.totalTokens||1,a={output:pe(e.output,i),input:pe(e.input,i),cacheWrite:pe(e.cacheWrite,i),cacheRead:pe(e.cacheRead,i)};return r`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${s?"Tokens":"Cost"} by Type</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?a.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?B(e.output):V(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?a.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?B(e.input):V(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?a.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?B(e.cacheWrite):V(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?a.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?B(e.cacheRead):V(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>Output ${s?B(e.output):V(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>Input ${s?B(e.input):V(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>Cache Write ${s?B(e.cacheWrite):V(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>Cache Read ${s?B(e.cacheRead):V(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        Total: ${s?B(e.totalTokens):V(e.totalCost)}
      </div>
    </div>
  `}function gt(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-list">
                ${t.map(s=>r`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?r`<span class="usage-list-sub">${s.sub}</span>`:v}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function cr(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-error-list">
                ${t.map(s=>r`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?r`<div class="usage-error-sub">${s.sub}</div>`:v}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Tb(e,t,n,s,i,a,o){if(!e)return v;const l=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,c=t.messages.total?e.totalCost/t.messages.total:0,u=e.input+e.cacheRead,g=u>0?e.cacheRead/u:0,p=u>0?`${(g*100).toFixed(1)}%`:"—",h=n.errorRate*100,d=n.throughputTokensPerMin!==void 0?`${B(Math.round(n.throughputTokensPerMin))} tok/min`:"—",f=n.throughputCostPerMin!==void 0?`${V(n.throughputCostPerMin,4)} / min`:"—",m=n.durationCount>0?Ni(n.avgDurationMs,{spaced:!0})??"—":"—",S="Cache hit rate = cache read / (input + cache read). Higher is better.",k="Error rate = errors / total messages. Lower is better.",y="Throughput shows tokens per minute over active time. Higher is better.",A="Average tokens per message in this range.",C=s?"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.":"Average cost per message when providers report costs.",I=t.daily.filter(F=>F.messages>0&&F.errors>0).map(F=>{const j=F.errors/F.messages;return{label:rc(F.date),value:`${(j*100).toFixed(2)}%`,sub:`${F.errors} errors Â· ${F.messages} msgs Â· ${B(F.tokens)}`,rate:j}}).toSorted((F,j)=>j.rate-F.rate).slice(0,5).map(({rate:F,...j})=>j),_=t.byModel.slice(0,5).map(F=>({label:F.model??"unknown",value:V(F.totals.totalCost),sub:`${B(F.totals.totalTokens)} Â· ${F.count} msgs`})),M=t.byProvider.slice(0,5).map(F=>({label:F.provider??"unknown",value:V(F.totals.totalCost),sub:`${B(F.totals.totalTokens)} Â· ${F.count} msgs`})),H=t.tools.tools.slice(0,6).map(F=>({label:F.name,value:`${F.count}`,sub:"calls"})),J=t.byAgent.slice(0,5).map(F=>({label:F.agentId,value:V(F.totals.totalCost),sub:B(F.totals.totalTokens)})),ie=t.byChannel.slice(0,5).map(F=>({label:F.channel,value:V(F.totals.totalCost),sub:B(F.totals.totalTokens)}));return r`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Usage Overview</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Messages
            <span class="usage-summary-hint" title="Total user + assistant messages in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} user Â· ${t.messages.assistant} assistant
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Tool Calls
            <span class="usage-summary-hint" title="Total tool call count across sessions.">?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} tools used</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Errors
            <span class="usage-summary-hint" title="Total message/tool errors in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} tool results</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Tokens / Msg
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${B(l)}</div>
          <div class="usage-summary-sub">Across ${t.messages.total||0} messages</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Cost / Msg
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value">${V(c,4)}</div>
          <div class="usage-summary-sub">${V(e.totalCost)} total</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Sessions
            <span class="usage-summary-hint" title="Distinct sessions in the range.">?</span>
          </div>
          <div class="usage-summary-value">${a}</div>
          <div class="usage-summary-sub">of ${o} in range</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Throughput
            <span class="usage-summary-hint" title=${y}>?</span>
          </div>
          <div class="usage-summary-value">${d}</div>
          <div class="usage-summary-sub">${f}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Error Rate
            <span class="usage-summary-hint" title=${k}>?</span>
          </div>
          <div class="usage-summary-value ${h>5?"bad":h>1?"warn":"good"}">${h.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} errors Â· ${m} avg session
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Cache Hit Rate
            <span class="usage-summary-hint" title=${S}>?</span>
          </div>
          <div class="usage-summary-value ${g>.6?"good":g>.3?"warn":"bad"}">${p}</div>
          <div class="usage-summary-sub">
            ${B(e.cacheRead)} cached Â· ${B(u)} prompt
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${gt("Top Models",_,"No model data")}
        ${gt("Top Providers",M,"No provider data")}
        ${gt("Top Tools",H,"No tool calls")}
        ${gt("Top Agents",J,"No agent data")}
        ${gt("Top Channels",ie,"No channel data")}
        ${cr("Peak Error Days",I,"No error data")}
        ${cr("Peak Error Hours",i,"No error data")}
      </div>
    </section>
  `}function _b(e,t,n,s,i,a,o,l,c,u,g,p,h,d,f){const m=E=>h.includes(E),S=E=>{const U=E.label||E.key;return U.startsWith("agent:")&&U.includes("?token=")?U.slice(0,U.indexOf("?token=")):U},k=async E=>{const U=S(E);try{await navigator.clipboard.writeText(U)}catch{}},y=E=>{const U=[];return m("channel")&&E.channel&&U.push(`channel:${E.channel}`),m("agent")&&E.agentId&&U.push(`agent:${E.agentId}`),m("provider")&&(E.modelProvider||E.providerOverride)&&U.push(`provider:${E.modelProvider??E.providerOverride}`),m("model")&&E.model&&U.push(`model:${E.model}`),m("messages")&&E.usage?.messageCounts&&U.push(`msgs:${E.usage.messageCounts.total}`),m("tools")&&E.usage?.toolUsage&&U.push(`tools:${E.usage.toolUsage.totalCalls}`),m("errors")&&E.usage?.messageCounts&&U.push(`errors:${E.usage.messageCounts.errors}`),m("duration")&&E.usage?.durationMs&&U.push(`dur:${Ni(E.usage.durationMs,{spaced:!0})??""}`),U},A=E=>{const U=E.usage;if(!U)return 0;if(n.length>0&&U.dailyBreakdown&&U.dailyBreakdown.length>0){const ae=U.dailyBreakdown.filter(oe=>n.includes(oe.date));return s?ae.reduce((oe,X)=>oe+X.tokens,0):ae.reduce((oe,X)=>oe+X.cost,0)}return s?U.totalTokens??0:U.totalCost??0},C=[...e].toSorted((E,U)=>{switch(i){case"recent":return(U.updatedAt??0)-(E.updatedAt??0);case"messages":return(U.usage?.messageCounts?.total??0)-(E.usage?.messageCounts?.total??0);case"errors":return(U.usage?.messageCounts?.errors??0)-(E.usage?.messageCounts?.errors??0);case"cost":return A(U)-A(E);default:return A(U)-A(E)}}),I=a==="asc"?C.toReversed():C,_=I.reduce((E,U)=>E+A(U),0),M=I.length?_/I.length:0,H=I.reduce((E,U)=>E+(U.usage?.messageCounts?.errors??0),0),J=new Set(t),ie=I.filter(E=>J.has(E.key)),F=ie.length,j=new Map(I.map(E=>[E.key,E])),de=o.map(E=>j.get(E)).filter(E=>!!E);return r`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">Sessions</div>
        <div class="sessions-card-count">
          ${e.length} shown${d!==e.length?` Â· ${d} total`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?B(M):V(M)} avg</span>
          <span>${H} errors</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${l==="all"?"active":""}"
            @click=${()=>p("all")}
          >
            All
          </button>
          <button
            class="toggle-btn ${l==="recent"?"active":""}"
            @click=${()=>p("recent")}
          >
            Recently viewed
          </button>
        </div>
        <label class="sessions-sort">
          <span>Sort</span>
          <select
            @change=${E=>u(E.target.value)}
          >
            <option value="cost" ?selected=${i==="cost"}>Cost</option>
            <option value="errors" ?selected=${i==="errors"}>Errors</option>
            <option value="messages" ?selected=${i==="messages"}>Messages</option>
            <option value="recent" ?selected=${i==="recent"}>Recent</option>
            <option value="tokens" ?selected=${i==="tokens"}>Tokens</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>g(a==="desc"?"asc":"desc")}
          title=${a==="desc"?"Descending":"Ascending"}
        >
          ${a==="desc"?"↑":"↓"}
        </button>
        ${F>0?r`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${f}>
                  Clear Selection
                </button>
              `:v}
      </div>
      ${l==="recent"?de.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">No recent sessions</div>
              `:r`
                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
                  ${de.map(E=>{const U=A(E),ae=J.has(E.key),oe=S(E),X=y(E);return r`
                      <div
                        class="session-bar-row ${ae?"selected":""}"
                        @click=${ne=>c(E.key,ne.shiftKey)}
                        title="${E.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${oe}</div>
                          ${X.length>0?r`<div class="session-bar-meta">${X.join(" Â· ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title="Copy session name"
                            @click=${ne=>{ne.stopPropagation(),k(E)}}
                          >
                            Copy
                          </button>
                          <div class="session-bar-value">${s?B(U):V(U)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              `:e.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">No sessions in range</div>
              `:r`
                <div class="session-bars">
                  ${I.slice(0,50).map(E=>{const U=A(E),ae=t.includes(E.key),oe=S(E),X=y(E);return r`
                      <div
                        class="session-bar-row ${ae?"selected":""}"
                        @click=${ne=>c(E.key,ne.shiftKey)}
                        title="${E.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${oe}</div>
                          ${X.length>0?r`<div class="session-bar-meta">${X.join(" Â· ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title="Copy session name"
                            @click=${ne=>{ne.stopPropagation(),k(E)}}
                          >
                            Copy
                          </button>
                          <div class="session-bar-value">${s?B(U):V(U)}</div>
                        </div>
                      </div>
                    `})}
                  ${e.length>50?r`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} more</div>`:v}
                </div>
              `}
      ${F>1?r`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">Selected (${F})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${ie.map(E=>{const U=A(E),ae=S(E),oe=y(E);return r`
                      <div
                        class="session-bar-row selected"
                        @click=${X=>c(E.key,X.shiftKey)}
                        title="${E.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ae}</div>
                          ${oe.length>0?r`<div class="session-bar-meta">${oe.join(" Â· ")}</div>`:v}
                        </div>
                  <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title="Copy session name"
                            @click=${X=>{X.stopPropagation(),k(E)}}
                          >
                            Copy
                          </button>
                          <div class="session-bar-value">${s?B(U):V(U)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:v}
    </div>
  `}function Eb(){return v}function Lb(e){const t=e.usage;if(!t)return r`
      <div class="muted">No usage data for this session.</div>
    `;const n=o=>o?new Date(o).toLocaleString():"",s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);const i=t.toolUsage?.tools.slice(0,6).map(o=>({label:o.name,value:`${o.count}`,sub:"calls"}))??[],a=t.modelUsage?.slice(0,6).map(o=>({label:o.model??"unknown",value:V(o.totals.totalCost),sub:B(o.totals.totalTokens)}))??[];return r`
    ${s.length>0?r`<div class="usage-badges">${s.map(o=>r`<span class="usage-badge">${o}</span>`)}</div>`:v}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">Messages</div>
        <div class="session-summary-value">${t.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.user??0} user Â· ${t.messageCounts?.assistant??0} assistant</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Tool Calls</div>
        <div class="session-summary-value">${t.toolUsage?.totalCalls??0}</div>
        <div class="session-summary-meta">${t.toolUsage?.uniqueTools??0} tools</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Errors</div>
        <div class="session-summary-value">${t.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.toolResults??0} tool results</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Duration</div>
        <div class="session-summary-value">${Ni(t.durationMs,{spaced:!0})??""}</div>
        <div class="session-summary-meta">${n(t.firstActivity)} - ${n(t.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${gt("Top Tools",i,"No tool calls")}
      ${gt("Model Mix",a,"No model data")}
    </div>
  `}function Rb(e,t,n,s,i,a,o,l,c,u,g,p,h,d,f,m,S,k,y,A,C,I,_){const M=e.label||e.key,H=M.length>50?M.slice(0,50)+"…":M,J=e.usage;return r`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">${H}</div>
        </div>
        <div class="session-detail-stats">
          ${J?r`
            <span><strong>${B(J.totalTokens)}</strong> tokens</span>
            <span><strong>${V(J.totalCost)}</strong></span>
          `:v}
        </div>
        <button class="session-close-btn" @click=${_} title="Close session details">Ã</button>
      </div>
      <div class="session-detail-content">
        ${Lb(e)}
        <div class="session-detail-row">
          ${Ib(t,n,s,i,a,o,l,c,u)}
        </div>
        <div class="session-detail-bottom">
          ${Db(g,p,h,d,f,m,S,k,y,A)}
          ${Mb(e.contextWeight,J,C,I)}
        </div>
      </div>
    </div>
  `}function Ib(e,t,n,s,i,a,o,l,c){if(t)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.points.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No timeline data</div>
      </div>
    `;let u=e.points;if(o||l||c&&c.length>0){const j=o?new Date(o+"T00:00:00").getTime():0,de=l?new Date(l+"T23:59:59").getTime():1/0;u=e.points.filter(E=>{if(E.timestamp<j||E.timestamp>de)return!1;if(c&&c.length>0){const U=new Date(E.timestamp),ae=`${U.getFullYear()}-${String(U.getMonth()+1).padStart(2,"0")}-${String(U.getDate()).padStart(2,"0")}`;return c.includes(ae)}return!0})}if(u.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No data in range</div>
      </div>
    `;let g=0,p=0,h=0,d=0,f=0,m=0;u=u.map(j=>(g+=j.totalTokens,p+=j.cost,h+=j.output,d+=j.input,f+=j.cacheRead,m+=j.cacheWrite,{...j,cumulativeTokens:g,cumulativeCost:p}));const S=400,k=80,y={top:16,right:10,bottom:20,left:40},A=S-y.left-y.right,C=k-y.top-y.bottom,I=n==="cumulative",_=n==="per-turn"&&i==="by-type",M=h+d+f+m,H=u.map(j=>I?j.cumulativeTokens:_?j.input+j.output+j.cacheRead+j.cacheWrite:j.totalTokens),J=Math.max(...H,1),ie=Math.max(2,Math.min(8,A/u.length*.7)),F=Math.max(1,(A-ie*u.length)/(u.length-1||1));return r`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 13px;">Usage Over Time</div>
        <div class="timeseries-controls">
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${I?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              Per Turn
            </button>
            <button
              class="toggle-btn ${I?"active":""}"
              @click=${()=>s("cumulative")}
            >
              Cumulative
            </button>
          </div>
          ${I?v:r`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${i==="total"?"active":""}"
                      @click=${()=>a("total")}
                    >
                      Total
                    </button>
                    <button
                      class="toggle-btn ${i==="by-type"?"active":""}"
                      @click=${()=>a("by-type")}
                    >
                      By Type
                    </button>
                  </div>
                `}
        </div>
      </div>
      <svg viewBox="0 0 ${S} ${k+15}" class="timeseries-svg" style="width: 100%; height: auto;">
        <!-- Y axis -->
        <line x1="${y.left}" y1="${y.top}" x2="${y.left}" y2="${y.top+C}" stroke="var(--border)" />
        <!-- X axis -->
        <line x1="${y.left}" y1="${y.top+C}" x2="${S-y.right}" y2="${y.top+C}" stroke="var(--border)" />
        <!-- Y axis labels -->
        <text x="${y.left-4}" y="${y.top+4}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">${B(J)}</text>
        <text x="${y.left-4}" y="${y.top+C}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">0</text>
        <!-- X axis labels (first and last) -->
        ${u.length>0?wn`
          <text x="${y.left}" y="${y.top+C+12}" text-anchor="start" style="font-size: 8px; fill: var(--text-muted)">${new Date(u[0].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
          <text x="${S-y.right}" y="${y.top+C+12}" text-anchor="end" style="font-size: 8px; fill: var(--text-muted)">${new Date(u[u.length-1].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
        `:v}
        <!-- Bars -->
        ${u.map((j,de)=>{const E=H[de],U=y.left+de*(ie+F),ae=E/J*C,oe=y.top+C-ae,ne=[new Date(j.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${B(E)} tokens`];_&&(ne.push(`Output ${B(j.output)}`),ne.push(`Input ${B(j.input)}`),ne.push(`Cache write ${B(j.cacheWrite)}`),ne.push(`Cache read ${B(j.cacheRead)}`));const R=ne.join(" Â· ");if(!_)return wn`<rect x="${U}" y="${oe}" width="${ie}" height="${ae}" class="ts-bar" rx="1" style="cursor: pointer;"><title>${R}</title></rect>`;const D=[{value:j.output,class:"output"},{value:j.input,class:"input"},{value:j.cacheWrite,class:"cache-write"},{value:j.cacheRead,class:"cache-read"}];let P=y.top+C;return wn`
            ${D.map(K=>{if(K.value<=0||E<=0)return v;const we=ae*(K.value/E);return P-=we,wn`<rect x="${U}" y="${P}" width="${ie}" height="${we}" class="ts-bar ${K.class}" rx="1"><title>${R}</title></rect>`})}
          `})}
      </svg>
      <div class="timeseries-summary">${u.length} msgs Â· ${B(g)} Â· ${V(p)}</div>
      ${_?r`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px;">Tokens by Type</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${pe(h,M).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${pe(d,M).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${pe(m,M).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${pe(f,M).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${B(h)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${B(d)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${B(m)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${B(f)}
                  </div>
                </div>
                <div class="cost-breakdown-total">Total: ${B(M)}</div>
              </div>
            `:v}
    </div>
  `}function Mb(e,t,n,s){if(!e)return r`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">No context data</div>
      </div>
    `;const i=rt(e.systemPrompt.chars),a=rt(e.skills.promptChars),o=rt(e.tools.listChars+e.tools.schemaChars),l=rt(e.injectedWorkspaceFiles.reduce((A,C)=>A+C.injectedChars,0)),c=i+a+o+l;let u="";if(t&&t.totalTokens>0){const A=t.input+t.cacheRead;A>0&&(u=`~${Math.min(c/A*100,100).toFixed(0)}% of input`)}const g=e.skills.entries.toSorted((A,C)=>C.blockChars-A.blockChars),p=e.tools.entries.toSorted((A,C)=>C.summaryChars+C.schemaChars-(A.summaryChars+A.schemaChars)),h=e.injectedWorkspaceFiles.toSorted((A,C)=>C.injectedChars-A.injectedChars),d=4,f=n,m=f?g:g.slice(0,d),S=f?p:p.slice(0,d),k=f?h:h.slice(0,d),y=g.length>d||p.length>d||h.length>d;return r`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 13px;">System Prompt Breakdown</div>
        ${y?r`<button class="context-expand-btn" @click=${s}>
                ${f?"Collapse":"Expand all"}
              </button>`:v}
      </div>
      <p class="context-weight-desc">${u||"Base context per message"}</p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${pe(i,c).toFixed(1)}%" title="System: ~${B(i)}"></div>
        <div class="context-segment skills" style="width: ${pe(a,c).toFixed(1)}%" title="Skills: ~${B(a)}"></div>
        <div class="context-segment tools" style="width: ${pe(o,c).toFixed(1)}%" title="Tools: ~${B(o)}"></div>
        <div class="context-segment files" style="width: ${pe(l,c).toFixed(1)}%" title="Files: ~${B(l)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${B(i)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${B(a)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${B(o)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${B(l)}</span>
      </div>
      <div class="context-total">Total: ~${B(c)}</div>
      <div class="context-breakdown-grid">
        ${g.length>0?(()=>{const A=g.length-m.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Skills (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${m.map(C=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${B(rt(C.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?r`<div class="context-breakdown-more">+${A} more</div>`:v}
                  </div>
                `})():v}
        ${p.length>0?(()=>{const A=p.length-S.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Tools (${p.length})</div>
                    <div class="context-breakdown-list">
                      ${S.map(C=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${B(rt(C.summaryChars+C.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?r`<div class="context-breakdown-more">+${A} more</div>`:v}
                  </div>
                `})():v}
        ${h.length>0?(()=>{const A=h.length-k.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Files (${h.length})</div>
                    <div class="context-breakdown-list">
                      ${k.map(C=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${C.name}</span>
                            <span class="muted">~${B(rt(C.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?r`<div class="context-breakdown-more">+${A} more</div>`:v}
                  </div>
                `})():v}
      </div>
    </div>
  `}function Db(e,t,n,s,i,a,o,l,c,u){if(t)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.length===0)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">No messages</div>
      </div>
    `;const g=i.query.trim().toLowerCase(),p=e.map(k=>{const y=ab(k.content),A=y.cleanContent||k.content;return{log:k,toolInfo:y,cleanContent:A}}),h=Array.from(new Set(p.flatMap(k=>k.toolInfo.tools.map(([y])=>y)))).toSorted((k,y)=>k.localeCompare(y)),d=p.filter(k=>!(i.roles.length>0&&!i.roles.includes(k.log.role)||i.hasTools&&k.toolInfo.tools.length===0||i.tools.length>0&&!k.toolInfo.tools.some(([A])=>i.tools.includes(A))||g&&!k.cleanContent.toLowerCase().includes(g))),f=i.roles.length>0||i.tools.length>0||i.hasTools||g?`${d.length} of ${e.length}`:`${e.length}`,m=new Set(i.roles),S=new Set(i.tools);return r`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>Conversation <span style="font-weight: normal; color: var(--text-muted);">(${f} messages)</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${n?"Collapse All":"Expand All"}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${k=>a(Array.from(k.target.selectedOptions).map(y=>y.value))}
        >
          <option value="user" ?selected=${m.has("user")}>User</option>
          <option value="assistant" ?selected=${m.has("assistant")}>Assistant</option>
          <option value="tool" ?selected=${m.has("tool")}>Tool</option>
          <option value="toolResult" ?selected=${m.has("toolResult")}>Tool result</option>
        </select>
        <select
          multiple
          size="4"
          @change=${k=>o(Array.from(k.target.selectedOptions).map(y=>y.value))}
        >
          ${h.map(k=>r`<option value=${k} ?selected=${S.has(k)}>${k}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${i.hasTools}
            @change=${k=>l(k.target.checked)}
          />
          Has tools
        </label>
        <input
          type="text"
          placeholder="Search conversation"
          .value=${i.query}
          @input=${k=>c(k.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${u}>
          Clear
        </button>
      </div>
      <div class="session-logs-list">
        ${d.map(k=>{const{log:y,toolInfo:A,cleanContent:C}=k,I=y.role==="user"?"user":"assistant",_=y.role==="user"?"You":y.role==="assistant"?"Assistant":"Tool";return r`
          <div class="session-log-entry ${I}">
            <div class="session-log-meta">
              <span class="session-log-role">${_}</span>
              <span>${new Date(y.timestamp).toLocaleString()}</span>
              ${y.tokens?r`<span>${B(y.tokens)}</span>`:v}
            </div>
            <div class="session-log-content">${C}</div>
            ${A.tools.length>0?r`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${A.summary}</summary>
                      <div class="session-log-tools-list">
                        ${A.tools.map(([M,H])=>r`
                            <span class="session-log-tools-pill">${M} Ã ${H}</span>
                          `)}
                      </div>
                    </details>
                  `:v}
          </div>
        `})}
        ${d.length===0?r`
                <div class="muted" style="padding: 12px">No messages match the filters.</div>
              `:v}
      </div>
    </div>
  `}function Pb(e){if(e.loading&&!e.totals)return r`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">Token Usage</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                Loading
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--text-muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,i=[...e.sessions].toSorted((R,D)=>{const P=t?R.usage?.totalTokens??0:R.usage?.totalCost??0;return(t?D.usage?.totalTokens??0:D.usage?.totalCost??0)-P}),a=e.selectedDays.length>0?i.filter(R=>{if(R.usage?.activityDates?.length)return R.usage.activityDates.some(K=>e.selectedDays.includes(K));if(!R.updatedAt)return!1;const D=new Date(R.updatedAt),P=`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}-${String(D.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(P)}):i,o=(R,D)=>{if(D.length===0)return!0;const P=R.usage,K=P?.firstActivity??R.updatedAt,we=P?.lastActivity??R.updatedAt;if(!K||!we)return!1;const Y=Math.min(K,we),Se=Math.max(K,we);let ee=Y;for(;ee<=Se;){const fe=new Date(ee),Oe=ga(fe,e.timeZone);if(D.includes(Oe))return!0;const Be=pa(fe,e.timeZone);ee=Math.min(Be.getTime(),Se)+1}return!1},l=e.selectedHours.length>0?a.filter(R=>o(R,e.selectedHours)):a,c=ib(l,e.query),u=c.sessions,g=c.warnings,p=xb(e.queryDraft,i,e.aggregates),h=ua(e.query),d=R=>{const D=ut(R);return h.filter(P=>ut(P.key??"")===D).map(P=>P.value).filter(Boolean)},f=R=>{const D=new Set;for(const P of R)P&&D.add(P);return Array.from(D)},m=f(i.map(R=>R.agentId)).slice(0,12),S=f(i.map(R=>R.channel)).slice(0,12),k=f([...i.map(R=>R.modelProvider),...i.map(R=>R.providerOverride),...e.aggregates?.byProvider.map(R=>R.provider)??[]]).slice(0,12),y=f([...i.map(R=>R.model),...e.aggregates?.byModel.map(R=>R.model)??[]]).slice(0,12),A=f(e.aggregates?.tools.tools.map(R=>R.name)??[]).slice(0,12),C=e.selectedSessions.length===1?e.sessions.find(R=>R.key===e.selectedSessions[0])??u.find(R=>R.key===e.selectedSessions[0]):null,I=R=>R.reduce((D,P)=>(P.usage&&(D.input+=P.usage.input,D.output+=P.usage.output,D.cacheRead+=P.usage.cacheRead,D.cacheWrite+=P.usage.cacheWrite,D.totalTokens+=P.usage.totalTokens,D.totalCost+=P.usage.totalCost,D.inputCost+=P.usage.inputCost??0,D.outputCost+=P.usage.outputCost??0,D.cacheReadCost+=P.usage.cacheReadCost??0,D.cacheWriteCost+=P.usage.cacheWriteCost??0,D.missingCostEntries+=P.usage.missingCostEntries??0),D),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),_=R=>e.costDaily.filter(P=>R.includes(P.date)).reduce((P,K)=>(P.input+=K.input,P.output+=K.output,P.cacheRead+=K.cacheRead,P.cacheWrite+=K.cacheWrite,P.totalTokens+=K.totalTokens,P.totalCost+=K.totalCost,P.inputCost+=K.inputCost??0,P.outputCost+=K.outputCost??0,P.cacheReadCost+=K.cacheReadCost??0,P.cacheWriteCost+=K.cacheWriteCost??0,P),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let M,H;const J=i.length;if(e.selectedSessions.length>0){const R=u.filter(D=>e.selectedSessions.includes(D.key));M=I(R),H=R.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(M=_(e.selectedDays),H=u.length):e.selectedHours.length>0||n?(M=I(u),H=u.length):(M=e.totals,H=J);const ie=e.selectedSessions.length>0?u.filter(R=>e.selectedSessions.includes(R.key)):n||e.selectedHours.length>0?u:e.selectedDays.length>0?a:i,F=vb(ie,e.aggregates),j=e.selectedSessions.length>0?(()=>{const R=u.filter(P=>e.selectedSessions.includes(P.key)),D=new Set;for(const P of R)for(const K of P.usage?.activityDates??[])D.add(K);return D.size>0?e.costDaily.filter(P=>D.has(P.date)):e.costDaily})():e.costDaily,de=mb(ie,M,F),E=!e.loading&&!e.totals&&e.sessions.length===0,U=(M?.missingCostEntries??0)>0||(M?M.totalTokens>0&&M.totalCost===0&&M.input+M.output+M.cacheRead+M.cacheWrite>0:!1),ae=[{label:"Today",days:1},{label:"7d",days:7},{label:"30d",days:30}],oe=R=>{const D=new Date,P=new Date;P.setDate(P.getDate()-(R-1)),e.onStartDateChange(qs(P)),e.onEndDateChange(qs(D))},X=(R,D,P)=>{if(P.length===0)return v;const K=d(R),we=new Set(K.map(ee=>ut(ee))),Y=P.length>0&&P.every(ee=>we.has(ut(ee))),Se=K.length;return r`
      <details
        class="usage-filter-select"
        @toggle=${ee=>{const fe=ee.currentTarget;if(!fe.open)return;const Oe=Be=>{Be.composedPath().includes(fe)||(fe.open=!1,window.removeEventListener("click",Oe,!0))};window.addEventListener("click",Oe,!0)}}
      >
        <summary>
          <span>${D}</span>
          ${Se>0?r`<span class="usage-filter-badge">${Se}</span>`:r`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${ee=>{ee.preventDefault(),ee.stopPropagation(),e.onQueryDraftChange(lr(e.queryDraft,R,P))}}
              ?disabled=${Y}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${ee=>{ee.preventDefault(),ee.stopPropagation(),e.onQueryDraftChange(lr(e.queryDraft,R,[]))}}
              ?disabled=${Se===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${P.map(ee=>{const fe=we.has(ut(ee));return r`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${fe}
                    @change=${Oe=>{const Be=Oe.target,tt=`${R}:${ee}`;e.onQueryDraftChange(Be.checked?$b(e.queryDraft,tt):rr(e.queryDraft,tt))}}
                  />
                  <span>${ee}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},ne=qs(new Date);return r`
    <style>${ob}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">See where tokens go, when sessions spike, and what drives cost.</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?r`
                  <span class="usage-refresh-indicator">Loading</span>
                `:v}
          ${E?r`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:v}
        </div>
        <div class="usage-header-metrics">
          ${M?r`
                <span class="usage-metric-badge">
                  <strong>${B(M.totalTokens)}</strong> tokens
                </span>
                <span class="usage-metric-badge">
                  <strong>${V(M.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${H}</strong>
                  session${H!==1?"s":""}
                </span>
              `:v}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${R=>{const D=R.currentTarget;if(!D.open)return;const P=K=>{K.composedPath().includes(D)||(D.open=!1,window.removeEventListener("click",P,!0))};window.addEventListener("click",P,!0)}}
          >
            <summary class="usage-export-button">Export â?/summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>Gs(`openclaw-usage-sessions-${ne}.csv`,bb(u),"text/csv")}
                  ?disabled=${u.length===0}
                >
                  Sessions CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>Gs(`openclaw-usage-daily-${ne}.csv`,yb(j),"text/csv")}
                  ?disabled=${j.length===0}
                >
                  Daily CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>Gs(`openclaw-usage-${ne}.json`,JSON.stringify({totals:M,sessions:u,daily:j,aggregates:F},null,2),"application/json")}
                  ?disabled=${u.length===0&&j.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${Sb(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${ae.map(R=>r`
                <button class="btn btn-sm" @click=${()=>oe(R.days)}>
                  ${R.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${R=>e.onStartDateChange(R.target.value)}
          />
          <span style="color: var(--text-muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${R=>e.onEndDateChange(R.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${R=>e.onTimeZoneChange(R.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${R=>e.onQueryDraftChange(R.target.value)}
            @keydown=${R=>{R.key==="Enter"&&(R.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?r`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>Clear</button>`:v}
            <span class="usage-query-hint">
              ${n?`${u.length} of ${J} sessions match`:`${J} sessions in range`}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${X("agent","Agent",m)}
          ${X("channel","Channel",S)}
          ${X("provider","Provider",k)}
          ${X("model","Model",y)}
          ${X("tool","Tool",A)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${h.length>0?r`
                <div class="usage-query-chips">
                  ${h.map(R=>{const D=R.raw;return r`
                      <span class="usage-query-chip">
                        ${D}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(rr(e.queryDraft,D))}
                        >
                          Ã
                        </button>
                      </span>
                    `})}
                </div>
              `:v}
        ${p.length>0?r`
                <div class="usage-query-suggestions">
                  ${p.map(R=>r`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(wb(e.queryDraft,R.value))}
                      >
                        ${R.label}
                      </button>
                    `)}
                </div>
              `:v}
        ${g.length>0?r`
                <div class="callout warning" style="margin-top: 8px;">
                  ${g.join(" Â· ")}
                </div>
              `:v}
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${e.sessionsLimitReached?r`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:v}
    </section>

    ${Tb(M,F,de,U,cb(ie,e.timeZone),H,J)}

    ${pb(ie,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${Ab(j,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${M?Cb(M,e.chartMode):v}
        </div>
      </div>
      <div class="usage-grid-right">
        ${_b(u,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,J,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${C?Rb(C,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):Eb()}
  `}let Vs=null;const dr=e=>{Vs&&clearTimeout(Vs),Vs=window.setTimeout(()=>{Sl(e)},400)},Nb=/^data:/i,Fb=/^https?:\/\//i;function Ob(e){const t=e.agentsList?.agents??[],s=Tr(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",a=t.find(l=>l.id===s)?.identity,o=a?.avatarUrl??a?.avatar;if(o)return Nb.test(o)||Fb.test(o)?o:a?.avatarUrl}function Bb(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,i=e.connected?null:"Disconnected from gateway.",a=e.tab==="chat",o=a&&(e.settings.chatFocusMode||e.onboarding),l=e.onboarding?!1:e.settings.chatShowThinking,c=Ob(e),u=e.chatAvatarUrl??c??null,g=e.configForm??e.configSnapshot?.config,p=gn(e.basePath??""),h=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;return r`
    <div class="shell ${a?"shell--chat":""} ${o?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
            aria-label="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
          >
            <span class="nav-collapse-toggle__icon">${ce.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img src=${p?`${p}/favicon.svg`:"/favicon.svg"} alt="OpenClaw" />
            </div>
            <div class="brand-text">
              <div class="brand-title">OPENCLAW</div>
              <div class="brand-sub">Gateway Dashboard</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>Health</span>
            <span class="mono">${e.connected?"OK":"Offline"}</span>
          </div>
          ${Jg(e)}
          ${ho()}
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${Au.map(d=>{const f=e.settings.navGroupsCollapsed[d.label]??!1,m=d.tabs.some(S=>S===e.tab);return r`
            <div class="nav-group ${f&&!m?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const S={...e.settings.navGroupsCollapsed};S[d.label]=!f,e.applySettings({...e.settings,navGroupsCollapsed:S})}}
                aria-expanded=${!f}
              >
                <span class="nav-label__text">${d.label}</span>
                <span class="nav-label__chevron">${f?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${d.tabs.map(S=>qg(e,S))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">${T("Resources")}</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://docs.openclaw.ai"
              target="_blank"
              rel="noreferrer"
              title="Docs (opens in new tab)"
            >
              <span class="nav-item__icon" aria-hidden="true">${ce.book}</span>
              <span class="nav-item__text">${T("Docs")}</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${a?"content--chat":""}">
        <section class="content-header">
          <div>
            ${e.tab==="usage"?v:r`<div class="page-title">${si(e.tab)}</div>`}
            ${e.tab==="usage"?v:r`<div class="page-sub">${_u(e.tab)}</div>`}
          </div>
          <div class="page-meta">
            ${e.lastError?r`<div class="pill danger">${e.lastError}</div>`:v}
            ${a?Gg(e):v}
            ${ho()}
          </div>
        </section>

        ${e.tab==="overview"?Om({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:d=>e.applySettings(d),onPasswordChange:d=>e.password=d,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):v}

        ${e.tab==="channels"?$f({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:d=>xe(e,d),onWhatsAppStart:d=>e.handleWhatsAppStart(d),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(d,f)=>$e(e,d,f),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(d,f)=>e.handleNostrProfileEdit(d,f),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(d,f)=>e.handleNostrProfileFieldChange(d,f),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):v}

        ${e.tab==="instances"?lm({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>Wi(e)}):v}

        ${e.tab==="sessions"?Vm({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:d=>{e.sessionsFilterActive=d.activeMinutes,e.sessionsFilterLimit=d.limit,e.sessionsIncludeGlobal=d.includeGlobal,e.sessionsIncludeUnknown=d.includeUnknown},onRefresh:()=>wt(e),onPatch:(d,f)=>hu(e,d,f),onDelete:d=>vu(e,d)}):v}

        ${e.tab==="usage"?Pb({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:d=>{e.usageStartDate=d,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],dr(e)},onEndDateChange:d=>{e.usageEndDate=d,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],dr(e)},onRefresh:()=>Sl(e),onTimeZoneChange:d=>{e.usageTimeZone=d},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:d=>{e.usageLogFilterRoles=d},onLogFilterToolsChange:d=>{e.usageLogFilterTools=d},onLogFilterHasToolsChange:d=>{e.usageLogFilterHasTools=d},onLogFilterQueryChange:d=>{e.usageLogFilterQuery=d},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(d,f)=>{if(f&&e.usageSelectedHours.length>0){const m=Array.from({length:24},(A,C)=>C),S=e.usageSelectedHours[e.usageSelectedHours.length-1],k=m.indexOf(S),y=m.indexOf(d);if(k!==-1&&y!==-1){const[A,C]=k<y?[k,y]:[y,k],I=m.slice(A,C+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...I])]}}else e.usageSelectedHours.includes(d)?e.usageSelectedHours=e.usageSelectedHours.filter(m=>m!==d):e.usageSelectedHours=[...e.usageSelectedHours,d]},onQueryDraftChange:d=>{e.usageQueryDraft=d,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:d=>{e.usageSessionSort=d},onSessionSortDirChange:d=>{e.usageSessionSortDir=d},onSessionsTabChange:d=>{e.usageSessionsTab=d},onToggleColumn:d=>{e.usageVisibleColumns.includes(d)?e.usageVisibleColumns=e.usageVisibleColumns.filter(f=>f!==d):e.usageVisibleColumns=[...e.usageVisibleColumns,d]},onSelectSession:(d,f)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[d,...e.usageRecentSessions.filter(m=>m!==d)].slice(0,8),f&&e.usageSelectedSessions.length>0){const m=e.usageChartMode==="tokens",k=[...e.usageResult?.sessions??[]].toSorted((I,_)=>{const M=m?I.usage?.totalTokens??0:I.usage?.totalCost??0;return(m?_.usage?.totalTokens??0:_.usage?.totalCost??0)-M}).map(I=>I.key),y=e.usageSelectedSessions[e.usageSelectedSessions.length-1],A=k.indexOf(y),C=k.indexOf(d);if(A!==-1&&C!==-1){const[I,_]=A<C?[A,C]:[C,A],M=k.slice(I,_+1),H=[...new Set([...e.usageSelectedSessions,...M])];e.usageSelectedSessions=H}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===d?e.usageSelectedSessions=[]:e.usageSelectedSessions=[d];e.usageSelectedSessions.length===1&&(sp(e,e.usageSelectedSessions[0]),ip(e,e.usageSelectedSessions[0]))},onSelectDay:(d,f)=>{if(f&&e.usageSelectedDays.length>0){const m=(e.usageCostSummary?.daily??[]).map(A=>A.date),S=e.usageSelectedDays[e.usageSelectedDays.length-1],k=m.indexOf(S),y=m.indexOf(d);if(k!==-1&&y!==-1){const[A,C]=k<y?[k,y]:[y,k],I=m.slice(A,C+1),_=[...new Set([...e.usageSelectedDays,...I])];e.usageSelectedDays=_}}else e.usageSelectedDays.includes(d)?e.usageSelectedDays=e.usageSelectedDays.filter(m=>m!==d):e.usageSelectedDays=[d]},onChartModeChange:d=>{e.usageChartMode=d},onDailyChartModeChange:d=>{e.usageDailyChartMode=d},onTimeSeriesModeChange:d=>{e.usageTimeSeriesMode=d},onTimeSeriesBreakdownChange:d=>{e.usageTimeSeriesBreakdownMode=d},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}}):v}

        ${e.tab==="cron"?Zv({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(d=>d.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:d=>e.cronForm={...e.cronForm,...d},onRefresh:()=>e.loadCron(),onAdd:()=>_d(e),onToggle:(d,f)=>Ed(e,d,f),onRun:d=>Ld(e,d),onRemove:d=>Rd(e,d),onLoadRuns:d=>Ir(e,d)}):v}

        ${e.tab==="agents"?Ap({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:h,activePanel:e.agentsPanel,configForm:g,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,skillsFilter:e.skillsFilter,onRefresh:async()=>{await Pi(e);const d=e.agentsList?.agents?.map(f=>f.id)??[];d.length>0&&Lr(e,d)},onSelectAgent:d=>{e.agentsSelectedId!==d&&(e.agentsSelectedId=d,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,Er(e,d),e.agentsPanel==="files"&&Fs(e,d),e.agentsPanel==="skills"&&Nn(e,d))},onSelectPanel:d=>{e.agentsPanel=d,d==="files"&&h&&e.agentFilesList?.agentId!==h&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},Fs(e,h)),d==="skills"&&h&&Nn(e,h),d==="channels"&&xe(e,!1),d==="cron"&&e.loadCron()},onLoadFiles:d=>Fs(e,d),onSelectFile:d=>{e.agentFileActive=d,h&&tp(e,h,d)},onFileDraftChange:(d,f)=>{e.agentFileDrafts={...e.agentFileDrafts,[d]:f}},onFileReset:d=>{const f=e.agentFileContents[d]??"";e.agentFileDrafts={...e.agentFileDrafts,[d]:f}},onFileSave:d=>{if(!h)return;const f=e.agentFileDrafts[d]??e.agentFileContents[d]??"";np(e,h,d,f)},onToolsProfileChange:(d,f,m)=>{if(!g)return;const S=g.agents?.list;if(!Array.isArray(S))return;const k=S.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===d);if(k<0)return;const y=["agents","list",k,"tools"];f?$e(e,[...y,"profile"],f):je(e,[...y,"profile"]),m&&je(e,[...y,"allow"])},onToolsOverridesChange:(d,f,m)=>{if(!g)return;const S=g.agents?.list;if(!Array.isArray(S))return;const k=S.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===d);if(k<0)return;const y=["agents","list",k,"tools"];f.length>0?$e(e,[...y,"alsoAllow"],f):je(e,[...y,"alsoAllow"]),m.length>0?$e(e,[...y,"deny"],m):je(e,[...y,"deny"])},onConfigReload:()=>Re(e),onConfigSave:()=>Pn(e),onChannelsRefresh:()=>xe(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:d=>e.skillsFilter=d,onSkillsRefresh:()=>{h&&Nn(e,h)},onAgentSkillToggle:(d,f,m)=>{if(!g)return;const S=g.agents?.list;if(!Array.isArray(S))return;const k=S.findIndex(H=>H&&typeof H=="object"&&"id"in H&&H.id===d);if(k<0)return;const y=S[k],A=f.trim();if(!A)return;const C=e.agentSkillsReport?.skills?.map(H=>H.name).filter(Boolean)??[],_=(Array.isArray(y.skills)?y.skills.map(H=>String(H).trim()).filter(Boolean):void 0)??C,M=new Set(_);m?M.add(A):M.delete(A),$e(e,["agents","list",k,"skills"],[...M])},onAgentSkillsClear:d=>{if(!g)return;const f=g.agents?.list;if(!Array.isArray(f))return;const m=f.findIndex(S=>S&&typeof S=="object"&&"id"in S&&S.id===d);m<0||je(e,["agents","list",m,"skills"])},onAgentSkillsDisableAll:d=>{if(!g)return;const f=g.agents?.list;if(!Array.isArray(f))return;const m=f.findIndex(S=>S&&typeof S=="object"&&"id"in S&&S.id===d);m<0||$e(e,["agents","list",m,"skills"],[])},onModelChange:(d,f)=>{if(!g)return;const m=g.agents?.list;if(!Array.isArray(m))return;const S=m.findIndex(C=>C&&typeof C=="object"&&"id"in C&&C.id===d);if(S<0)return;const k=["agents","list",S,"model"];if(!f){je(e,k);return}const A=m[S]?.model;if(A&&typeof A=="object"&&!Array.isArray(A)){const C=A.fallbacks,I={primary:f,...Array.isArray(C)?{fallbacks:C}:{}};$e(e,k,I)}else $e(e,k,f)},onModelFallbacksChange:(d,f)=>{if(!g)return;const m=g.agents?.list;if(!Array.isArray(m))return;const S=m.findIndex(H=>H&&typeof H=="object"&&"id"in H&&H.id===d);if(S<0)return;const k=["agents","list",S,"model"],y=m[S],A=f.map(H=>H.trim()).filter(Boolean),C=y.model,_=(()=>{if(typeof C=="string")return C.trim()||null;if(C&&typeof C=="object"&&!Array.isArray(C)){const H=C.primary;if(typeof H=="string")return H.trim()||null}return null})();if(A.length===0){_?$e(e,k,_):je(e,k);return}$e(e,k,_?{primary:_,fallbacks:A}:{fallbacks:A})}}):v}

        ${e.tab==="skills"?Jm({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:d=>e.skillsFilter=d,onRefresh:()=>dn(e,{clearMessages:!0}),onToggle:(d,f)=>bu(e,d,f),onEdit:(d,f)=>mu(e,d,f),onSaveKey:d=>yu(e,d),onInstall:(d,f,m)=>xu(e,d,f,m)}):v}

        ${e.tab==="nodes"?pm({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>ns(e),onDevicesRefresh:()=>et(e),onDeviceApprove:d=>au(e,d),onDeviceReject:d=>ou(e,d),onDeviceRotate:(d,f,m)=>ru(e,{deviceId:d,role:f,scopes:m}),onDeviceRevoke:(d,f)=>lu(e,{deviceId:d,role:f}),onLoadConfig:()=>Re(e),onLoadExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Ki(e,d)},onBindDefault:d=>{d?$e(e,["tools","exec","node"],d):je(e,["tools","exec","node"])},onBindAgent:(d,f)=>{const m=["agents","list",d,"tools","exec","node"];f?$e(e,m,f):je(e,m)},onSaveBindings:()=>Pn(e),onExecApprovalsTargetChange:(d,f)=>{e.execApprovalsTarget=d,e.execApprovalsTargetNodeId=f,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:d=>{e.execApprovalsSelectedAgent=d},onExecApprovalsPatch:(d,f)=>pu(e,d,f),onExecApprovalsRemove:d=>fu(e,d),onSaveExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return gu(e,d)}}):v}

        ${e.tab==="chat"?jv({sessionKey:e.sessionKey,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity(),on(e),oi(e)},thinkingLevel:e.chatThinkingLevel,showThinking:l,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:u,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:i,error:e.lastError,sessions:e.sessionsResult,focusMode:o,onRefresh:()=>(e.resetToolStream(),Promise.all([on(e),oi(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:d=>e.handleChatScroll(d),onDraftChange:d=>e.chatMessage=d,attachments:e.chatAttachments,onAttachmentsChange:d=>e.chatAttachments=d,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:d=>e.removeQueuedMessage(d),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow&&!e.chatManualRefreshInFlight,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:d=>e.handleOpenSidebar(d),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:d=>e.handleSplitRatioChange(d),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):v}

        ${e.tab==="config"?Qv({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:d=>{e.configRaw=d},onFormModeChange:d=>e.configFormMode=d,onFormPatch:(d,f)=>$e(e,d,f),onSearchChange:d=>e.configSearchQuery=d,onSectionChange:d=>{e.configActiveSection=d,e.configActiveSubsection=null},onSubsectionChange:d=>e.configActiveSubsection=d,onReload:()=>Re(e),onSave:()=>Pn(e),onApply:()=>Gc(e),onUpdate:()=>Vc(e)}):v}

        ${e.tab==="debug"?im({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:d=>e.debugCallMethod=d,onCallParamsChange:d=>e.debugCallParams=d,onRefresh:()=>ts(e),onCall:()=>hd(e)}):v}

        ${e.tab==="logs"?gm({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:d=>e.logsFilterText=d,onLevelToggle:(d,f)=>{e.logsLevelFilters={...e.logsLevelFilters,[d]:f}},onToggleAutoFollow:d=>e.logsAutoFollow=d,onRefresh:()=>Li(e,{reset:!0}),onExport:(d,f)=>e.exportLogs(d,f),onScroll:d=>e.handleLogsScroll(d)}):v}
      </main>
      ${om(e)}
      ${rm(e)}
    </div>
  `}var Ub=Object.defineProperty,zb=Object.getOwnPropertyDescriptor,w=(e,t,n,s)=>{for(var i=s>1?void 0:s?zb(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(s?o(t,n,i):o(i))||i);return s&&i&&Ub(t,n,i),i};const Qs=Cg();function Hb(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let x=class extends Rt{constructor(){super(...arguments),this.settings=Eu(),this.password="",this.tab="chat",this.onboarding=Hb(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=Qs.name,this.assistantAvatar=Qs.avatar,this.assistantAgentId=Qs.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.chatManualRefreshInFlight=!1,this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...$g},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...wg},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>Hu(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),Fg(this)}firstUpdated(){Og(this)}disconnectedCallback(){Bg(this),super.disconnectedCallback()}updated(e){Ug(this,e)}connect(){wl(this)}handleChatScroll(e){ud(this,e)}handleLogsScroll(e){gd(this,e)}exportLogs(e,t){pd(e,t)}resetToolStream(){ls(this)}resetChatScroll(){Wa(this)}scrollToBottom(e){Wa(this),ln(this,!0,!!e?.smooth)}async loadAssistantIdentity(){await bl(this)}applySettings(e){Ze(this,e)}setTab(e){Pu(this,e)}setTheme(e,t){Nu(this,e,t)}async loadOverview(){await dl(this)}async loadCron(){await Kn(this)}async handleAbortChat(){await fl(this)}removeQueuedMessage(e){vg(this,e)}async handleSendChat(e,t){await mg(this,e,t)}async handleWhatsAppStart(e){await Zc(this,e)}async handleWhatsAppWait(){await Xc(this)}async handleWhatsAppLogout(){await ed(this)}async handleChannelConfigSave(){await td(this)}async handleChannelConfigReload(){await nd(this)}handleNostrProfileEdit(e,t){ad(this,e,t)}handleNostrProfileCancel(){od(this)}handleNostrProfileFieldChange(e,t){rd(this,e,t)}async handleNostrProfileSave(){await cd(this)}async handleNostrProfileImport(){await dd(this)}handleNostrProfileToggleAdvanced(){ld(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,Ze(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return Bb(this)}};w([$()],x.prototype,"settings",2);w([$()],x.prototype,"password",2);w([$()],x.prototype,"tab",2);w([$()],x.prototype,"onboarding",2);w([$()],x.prototype,"connected",2);w([$()],x.prototype,"theme",2);w([$()],x.prototype,"themeResolved",2);w([$()],x.prototype,"hello",2);w([$()],x.prototype,"lastError",2);w([$()],x.prototype,"eventLog",2);w([$()],x.prototype,"assistantName",2);w([$()],x.prototype,"assistantAvatar",2);w([$()],x.prototype,"assistantAgentId",2);w([$()],x.prototype,"sessionKey",2);w([$()],x.prototype,"chatLoading",2);w([$()],x.prototype,"chatSending",2);w([$()],x.prototype,"chatMessage",2);w([$()],x.prototype,"chatMessages",2);w([$()],x.prototype,"chatToolMessages",2);w([$()],x.prototype,"chatStream",2);w([$()],x.prototype,"chatStreamStartedAt",2);w([$()],x.prototype,"chatRunId",2);w([$()],x.prototype,"compactionStatus",2);w([$()],x.prototype,"chatAvatarUrl",2);w([$()],x.prototype,"chatThinkingLevel",2);w([$()],x.prototype,"chatQueue",2);w([$()],x.prototype,"chatAttachments",2);w([$()],x.prototype,"chatManualRefreshInFlight",2);w([$()],x.prototype,"sidebarOpen",2);w([$()],x.prototype,"sidebarContent",2);w([$()],x.prototype,"sidebarError",2);w([$()],x.prototype,"splitRatio",2);w([$()],x.prototype,"nodesLoading",2);w([$()],x.prototype,"nodes",2);w([$()],x.prototype,"devicesLoading",2);w([$()],x.prototype,"devicesError",2);w([$()],x.prototype,"devicesList",2);w([$()],x.prototype,"execApprovalsLoading",2);w([$()],x.prototype,"execApprovalsSaving",2);w([$()],x.prototype,"execApprovalsDirty",2);w([$()],x.prototype,"execApprovalsSnapshot",2);w([$()],x.prototype,"execApprovalsForm",2);w([$()],x.prototype,"execApprovalsSelectedAgent",2);w([$()],x.prototype,"execApprovalsTarget",2);w([$()],x.prototype,"execApprovalsTargetNodeId",2);w([$()],x.prototype,"execApprovalQueue",2);w([$()],x.prototype,"execApprovalBusy",2);w([$()],x.prototype,"execApprovalError",2);w([$()],x.prototype,"pendingGatewayUrl",2);w([$()],x.prototype,"configLoading",2);w([$()],x.prototype,"configRaw",2);w([$()],x.prototype,"configRawOriginal",2);w([$()],x.prototype,"configValid",2);w([$()],x.prototype,"configIssues",2);w([$()],x.prototype,"configSaving",2);w([$()],x.prototype,"configApplying",2);w([$()],x.prototype,"updateRunning",2);w([$()],x.prototype,"applySessionKey",2);w([$()],x.prototype,"configSnapshot",2);w([$()],x.prototype,"configSchema",2);w([$()],x.prototype,"configSchemaVersion",2);w([$()],x.prototype,"configSchemaLoading",2);w([$()],x.prototype,"configUiHints",2);w([$()],x.prototype,"configForm",2);w([$()],x.prototype,"configFormOriginal",2);w([$()],x.prototype,"configFormDirty",2);w([$()],x.prototype,"configFormMode",2);w([$()],x.prototype,"configSearchQuery",2);w([$()],x.prototype,"configActiveSection",2);w([$()],x.prototype,"configActiveSubsection",2);w([$()],x.prototype,"channelsLoading",2);w([$()],x.prototype,"channelsSnapshot",2);w([$()],x.prototype,"channelsError",2);w([$()],x.prototype,"channelsLastSuccess",2);w([$()],x.prototype,"whatsappLoginMessage",2);w([$()],x.prototype,"whatsappLoginQrDataUrl",2);w([$()],x.prototype,"whatsappLoginConnected",2);w([$()],x.prototype,"whatsappBusy",2);w([$()],x.prototype,"nostrProfileFormState",2);w([$()],x.prototype,"nostrProfileAccountId",2);w([$()],x.prototype,"presenceLoading",2);w([$()],x.prototype,"presenceEntries",2);w([$()],x.prototype,"presenceError",2);w([$()],x.prototype,"presenceStatus",2);w([$()],x.prototype,"agentsLoading",2);w([$()],x.prototype,"agentsList",2);w([$()],x.prototype,"agentsError",2);w([$()],x.prototype,"agentsSelectedId",2);w([$()],x.prototype,"agentsPanel",2);w([$()],x.prototype,"agentFilesLoading",2);w([$()],x.prototype,"agentFilesError",2);w([$()],x.prototype,"agentFilesList",2);w([$()],x.prototype,"agentFileContents",2);w([$()],x.prototype,"agentFileDrafts",2);w([$()],x.prototype,"agentFileActive",2);w([$()],x.prototype,"agentFileSaving",2);w([$()],x.prototype,"agentIdentityLoading",2);w([$()],x.prototype,"agentIdentityError",2);w([$()],x.prototype,"agentIdentityById",2);w([$()],x.prototype,"agentSkillsLoading",2);w([$()],x.prototype,"agentSkillsError",2);w([$()],x.prototype,"agentSkillsReport",2);w([$()],x.prototype,"agentSkillsAgentId",2);w([$()],x.prototype,"sessionsLoading",2);w([$()],x.prototype,"sessionsResult",2);w([$()],x.prototype,"sessionsError",2);w([$()],x.prototype,"sessionsFilterActive",2);w([$()],x.prototype,"sessionsFilterLimit",2);w([$()],x.prototype,"sessionsIncludeGlobal",2);w([$()],x.prototype,"sessionsIncludeUnknown",2);w([$()],x.prototype,"usageLoading",2);w([$()],x.prototype,"usageResult",2);w([$()],x.prototype,"usageCostSummary",2);w([$()],x.prototype,"usageError",2);w([$()],x.prototype,"usageStartDate",2);w([$()],x.prototype,"usageEndDate",2);w([$()],x.prototype,"usageSelectedSessions",2);w([$()],x.prototype,"usageSelectedDays",2);w([$()],x.prototype,"usageSelectedHours",2);w([$()],x.prototype,"usageChartMode",2);w([$()],x.prototype,"usageDailyChartMode",2);w([$()],x.prototype,"usageTimeSeriesMode",2);w([$()],x.prototype,"usageTimeSeriesBreakdownMode",2);w([$()],x.prototype,"usageTimeSeries",2);w([$()],x.prototype,"usageTimeSeriesLoading",2);w([$()],x.prototype,"usageSessionLogs",2);w([$()],x.prototype,"usageSessionLogsLoading",2);w([$()],x.prototype,"usageSessionLogsExpanded",2);w([$()],x.prototype,"usageQuery",2);w([$()],x.prototype,"usageQueryDraft",2);w([$()],x.prototype,"usageSessionSort",2);w([$()],x.prototype,"usageSessionSortDir",2);w([$()],x.prototype,"usageRecentSessions",2);w([$()],x.prototype,"usageTimeZone",2);w([$()],x.prototype,"usageContextExpanded",2);w([$()],x.prototype,"usageHeaderPinned",2);w([$()],x.prototype,"usageSessionsTab",2);w([$()],x.prototype,"usageVisibleColumns",2);w([$()],x.prototype,"usageLogFilterRoles",2);w([$()],x.prototype,"usageLogFilterTools",2);w([$()],x.prototype,"usageLogFilterHasTools",2);w([$()],x.prototype,"usageLogFilterQuery",2);w([$()],x.prototype,"cronLoading",2);w([$()],x.prototype,"cronJobs",2);w([$()],x.prototype,"cronStatus",2);w([$()],x.prototype,"cronError",2);w([$()],x.prototype,"cronForm",2);w([$()],x.prototype,"cronRunsJobId",2);w([$()],x.prototype,"cronRuns",2);w([$()],x.prototype,"cronBusy",2);w([$()],x.prototype,"skillsLoading",2);w([$()],x.prototype,"skillsReport",2);w([$()],x.prototype,"skillsError",2);w([$()],x.prototype,"skillsFilter",2);w([$()],x.prototype,"skillEdits",2);w([$()],x.prototype,"skillsBusyKey",2);w([$()],x.prototype,"skillMessages",2);w([$()],x.prototype,"debugLoading",2);w([$()],x.prototype,"debugStatus",2);w([$()],x.prototype,"debugHealth",2);w([$()],x.prototype,"debugModels",2);w([$()],x.prototype,"debugHeartbeat",2);w([$()],x.prototype,"debugCallMethod",2);w([$()],x.prototype,"debugCallParams",2);w([$()],x.prototype,"debugCallResult",2);w([$()],x.prototype,"debugCallError",2);w([$()],x.prototype,"logsLoading",2);w([$()],x.prototype,"logsError",2);w([$()],x.prototype,"logsFile",2);w([$()],x.prototype,"logsEntries",2);w([$()],x.prototype,"logsFilterText",2);w([$()],x.prototype,"logsLevelFilters",2);w([$()],x.prototype,"logsAutoFollow",2);w([$()],x.prototype,"logsTruncated",2);w([$()],x.prototype,"logsCursor",2);w([$()],x.prototype,"logsLastFetchAt",2);w([$()],x.prototype,"logsLimit",2);w([$()],x.prototype,"logsMaxBytes",2);w([$()],x.prototype,"logsAtBottom",2);w([$()],x.prototype,"chatNewMessagesBelow",2);x=w([br("openclaw-app")],x);
//# sourceMappingURL=index-FZzxskby.js.map
