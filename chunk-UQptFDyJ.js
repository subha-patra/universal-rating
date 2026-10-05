import{Bt as oT,Jt as rT,L as Qh,M as Ou,Mt as ky,Ot as ig,Ut as pT,V as TE,Vt as op,X as XD,Y as WT,a as hs,cn as z,en as tl,ft as cD,ht as dT,i as fs,jt as kh,k as Nh,mt as ct,q as W$1,qt as qo,rn as v,rt as Zc,st as bh,tt as Yc,v as Fh,vt as eT,z as Ru,zt as nT}from"./main-YSHLP5MR.js";import{t as w}from"./chunk-C_lZfJfI.js";var H=`universal-rating-style`;var U={root:``,item:``,icon:``,label:``,error:``};var u={value:0,max:5,precision:.5,dir:`ltr`,theme:`default`,icon:`star`,customIcon:``,color:``,badColor:`#f20808`,avgColor:`#f39c12`,goodColor:`#3df400`,emptyColor:`#cbd5e1`,spacing:`0px`,size:`medium`,customSize:`30px`,readonly:!1,disabled:!1,clearable:!1,required:!1,errorText:`Please select a rating`,label:`Rating`,labels:[],showLabel:!1,showValue:!1,suffix:``,name:``,className:``,customClass:U};var pe=0;var ge={"extra-small":`18px`,small:`24px`,medium:`30px`,large:`36px`,"extra-large":`48px`};var he={star:`<polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />`,heart:`<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 .81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />`,circle:`<circle cx="12" cy="12" r="10" />`,diamond:`<polygon points="12,2 22,12 12,22 2,12" />`};var ie={default:{badColor:`#f20808`,avgColor:`#f39c12`,goodColor:`#3df400`,emptyColor:`#cbd5e1`},minimal:{badColor:`#ef4444`,avgColor:`#f59e0b`,goodColor:`#111827`,emptyColor:`#e5e7eb`},material:{badColor:`#f44336`,avgColor:`#ff9800`,goodColor:`#4caf50`,emptyColor:`#cfd8dc`},bootstrap:{badColor:`#dc3545`,avgColor:`#ffc107`,goodColor:`#198754`,emptyColor:`#dee2e6`},outline:{badColor:`#ef4444`,avgColor:`#f59e0b`,goodColor:`#2563eb`,emptyColor:`#cbd5e1`},filled:{badColor:`#fb7185`,avgColor:`#fbbf24`,goodColor:`#7c3aed`,emptyColor:`#ede9fe`}};var ve=`
.universal-rating-control {
  --universal-rating-color: #3df400;
  --universal-rating-empty-color: #cbd5e1;
  --universal-rating-spacing: 0px;
  --universal-rating-size: 30px;
  align-items: center;
  display: inline-flex;
  gap: var(--universal-rating-spacing);
  line-height: 1;
  outline: none;
  touch-action: pan-y;
  user-select: none;
}
.universal-rating-control:not([aria-disabled="true"]):not([aria-readonly="true"]) {
  cursor: pointer;
}
.universal-rating-control:focus-visible {
  border-radius: 6px;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, .35);
}
.universal-rating-readonly-summary {
  --universal-rating-color: #3df400;
  --universal-rating-empty-color: #cbd5e1;
  --universal-rating-spacing: 0px;
  --universal-rating-size: 30px;
  align-items: center;
  color: #1f2937;
  display: inline-flex;
  gap: max(0.25rem, var(--universal-rating-spacing));
  line-height: 1;
  user-select: none;
}
.universal-rating-readonly-value {
  font: 700 0.95rem/1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.universal-rating-readonly-count {
  color: #64748b;
  font: 500 0.875rem/1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.universal-rating-readonly-icon {
  display: inline-flex;
  height: var(--universal-rating-size);
  position: relative;
  width: var(--universal-rating-size);
}
.universal-rating-item {
  display: inline-flex;
  height: var(--universal-rating-size);
  position: relative;
  width: var(--universal-rating-size);
}
.universal-rating-icon {
  display: flex;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}
.universal-rating-icon svg {
  display: block;
  fill: currentColor;
  height: 100%;
  width: 100%;
}
.universal-rating-icon-empty {
  color: var(--universal-rating-empty-color);
}
.universal-rating-icon-full {
  color: var(--universal-rating-color);
  clip-path: inset(0 calc(100% - var(--universal-rating-fill, 0%)) 0 0);
  overflow: hidden;
}
.universal-rating-dir-rtl .universal-rating-icon-full {
  clip-path: inset(0 0 0 calc(100% - var(--universal-rating-fill, 0%)));
}
.universal-rating-error {
  color: #dc2626;
  font: 500 0.875rem/1.35 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  margin-top: 0.5rem;
}
.universal-rating-meaning {
  color: #475569;
  font: 600 0.875rem/1.35 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  margin-top: 0.45rem;
}
.universal-rating-validation-proxy {
  block-size: 1px;
  inline-size: 1px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
}
`;var B=class{constructor(t,e,n=null){this.host=t;this.formController=n;this.sourceOptions=e,this.options=ne(this.sourceOptions),this.value=this.clamp(this.options.value),this.displayValue=this.value,this.render()}host;formController;sourceOptions;options;value;displayValue;errorId=`universal-rating-error-${++pe}`;validationProxyName=`${this.errorId}-validation`;activePointerId=null;lastHoverValue=null;suppressNextClick=!1;errorVisible=!1;form=null;onFormSubmit=t=>{this.isInvalid()&&(t.preventDefault(),this.validate(),this.focus())};onFormData=t=>{t.formData.delete(this.validationProxyName)};setValue(t){this.setInternalValue(t,!0,!1,`set`)}getValue(){return this.value}update(t){this.sourceOptions=W$1(W$1({},this.sourceOptions),t),this.options=ne(this.sourceOptions),this.value=this.clamp(P(t.value??this.value,this.options.precision)),this.displayValue=this.value,(!this.options.required||this.value>0)&&(this.errorVisible=!1),this.render()}clear(){this.setInternalValue(0,!0,!1,`clear`)}validate(){let t=!this.isInvalid();return this.errorVisible=!t,this.render(),t}enable(){this.update({disabled:!1})}disable(){this.update({disabled:!0})}focus(){this.control()?.focus()}destroy(){this.detachFormSubmitListener(),$(this.host,[])}render(){let t=this.host.ownerDocument;if(_e(t),this.formController?this.detachFormSubmitListener():this.syncFormSubmitListener(),this.options.readonly&&this.options.showValue){this.renderReadonlySummary(t);return}let e=t.createElement(`div`);e.className=S(`universal-rating-control`,`universal-rating-theme-${this.options.theme}`,`universal-rating-dir-${this.options.dir}`,this.options.className,this.options.customClass.root),e.setAttribute(`dir`,this.options.dir),e.setAttribute(`role`,`slider`),e.setAttribute(`aria-label`,this.options.label),e.setAttribute(`aria-valuemin`,`0`),e.setAttribute(`aria-valuemax`,String(this.options.max)),e.setAttribute(`aria-valuenow`,b(this.displayValue)),e.setAttribute(`aria-valuetext`,this.valueText(this.displayValue)),e.setAttribute(`aria-readonly`,String(this.options.readonly)),e.setAttribute(`aria-disabled`,String(this.options.disabled)),e.setAttribute(`aria-invalid`,String(this.errorVisible&&this.isInvalid())),this.errorVisible&&this.isInvalid()&&e.setAttribute(`aria-describedby`,this.errorId),e.tabIndex=this.options.disabled?-1:0,e.style.setProperty(`--universal-rating-color`,this.colorForValue(this.displayValue)),e.style.setProperty(`--universal-rating-empty-color`,this.options.emptyColor),e.style.setProperty(`--universal-rating-spacing`,this.options.spacing),e.style.setProperty(`--universal-rating-size`,this.size()),e.addEventListener(`keydown`,d=>this.onKeydown(d)),e.addEventListener(`focus`,()=>this.options.onFocus?.()),e.addEventListener(`blur`,()=>this.options.onBlur?.()),e.addEventListener(`pointerleave`,()=>{this.activePointerId===null&&(this.preview(this.value,!1),this.lastHoverValue=null)});for(let d=0;d<this.options.max;d+=1)e.appendChild(this.renderItem(t,d));let n=[e],s=this.meaningForValue(this.displayValue);if(s&&n.push(this.renderMeaning(t,s)),this.options.required&&!this.formController&&n.push(this.renderValidationProxy(t)),this.errorVisible&&this.isInvalid()){let d=t.createElement(`div`);d.id=this.errorId,d.className=S(`universal-rating-error`,this.options.customClass.error),d.setAttribute(`role`,`alert`),d.textContent=this.options.errorText,n.push(d)}if(this.options.name&&!this.formController){let d=t.createElement(`input`);d.type=`hidden`,d.name=this.options.name,d.value=b(this.value),d.disabled=this.options.disabled,n.push(d)}$(this.host,n),this.formController?.sync(this.value,this.options,this.isInvalid())}renderReadonlySummary(t){let e=t.createElement(`div`);e.className=S(`universal-rating-readonly-summary`,`universal-rating-theme-${this.options.theme}`,`universal-rating-dir-${this.options.dir}`,this.options.className,this.options.customClass.root),e.setAttribute(`dir`,this.options.dir),e.setAttribute(`role`,`img`),e.setAttribute(`aria-label`,this.readonlySummaryText()),e.style.setProperty(`--universal-rating-color`,this.colorForValue(this.value)),e.style.setProperty(`--universal-rating-empty-color`,this.options.emptyColor),e.style.setProperty(`--universal-rating-spacing`,this.options.spacing),e.style.setProperty(`--universal-rating-size`,this.size());let n=t.createElement(`span`);n.className=`universal-rating-readonly-value`,n.textContent=b(this.value),e.appendChild(n);let s=t.createElement(`span`);s.className=`universal-rating-readonly-icon`,s.setAttribute(`aria-hidden`,`true`),s.style.setProperty(`--universal-rating-fill`,`100%`),s.appendChild(this.iconElement(t,`full`)),e.appendChild(s);let d=this.readonlyCountText();if(d){let p=t.createElement(`span`);p.className=`universal-rating-readonly-count`,p.textContent=d,e.appendChild(p)}let c=[e];if(this.options.required&&!this.formController&&c.push(this.renderValidationProxy(t)),this.errorVisible&&this.isInvalid()){let p=t.createElement(`div`);p.id=this.errorId,p.className=S(`universal-rating-error`,this.options.customClass.error),p.setAttribute(`role`,`alert`),p.textContent=this.options.errorText,c.push(p)}if(this.options.name&&!this.formController){let p=t.createElement(`input`);p.type=`hidden`,p.name=this.options.name,p.value=b(this.value),p.disabled=this.options.disabled,c.push(p)}$(this.host,c),this.formController?.sync(this.value,this.options,this.isInvalid())}renderItem(t,e){let n=t.createElement(`span`);n.className=S(`universal-rating-item`,this.options.customClass.item),n.setAttribute(`data-universal-rating-index`,String(e)),n.setAttribute(`aria-hidden`,`true`),n.style.setProperty(`--universal-rating-fill`,`${re(this.displayValue,e)}%`),n.addEventListener(`pointerdown`,c=>this.onPointerDown(c,e)),n.addEventListener(`pointermove`,c=>this.onPointerMove(c,e)),n.addEventListener(`pointerup`,c=>this.onPointerUp(c,e)),n.addEventListener(`pointercancel`,c=>this.onPointerCancel(c)),n.addEventListener(`mousemove`,c=>{this.activePointerId===null&&this.canChange()&&this.preview(this.valueFromMouseInteraction(c,e))}),n.addEventListener(`click`,c=>{if(this.suppressNextClick){this.suppressNextClick=!1;return}this.canChange()&&(this.preview(this.valueFromMouseInteraction(c,e),!1),this.setInternalValue(this.valueFromMouseInteraction(c,e),!0,!0,`clearable`))});let s=this.iconElement(t,`empty`),d=this.iconElement(t,`full`);return n.appendChild(s),n.appendChild(d),n}iconElement(t,e){let n=t.createElement(`span`);n.className=S(`universal-rating-icon`,`universal-rating-icon-${e}`,`universal-rating-icon-${this.resolvedIcon()}`,this.options.customClass.icon);let s=this.customIcon();return s?(n.innerHTML=s,n):(n.innerHTML=`<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">${he[this.resolvedIcon()]}</svg>`,n)}renderMeaning(t,e){let n=t.createElement(`div`);return n.className=S(`universal-rating-meaning`,this.options.customClass.label),n.textContent=e,n}resolvedIcon(){return this.options.icon===`custom`&&!this.customIcon()?`star`:this.options.icon}customIcon(){return this.options.icon!==`custom`||!Se(this.options.customIcon)?``:this.options.customIcon.trim()}valueFromPointer(t,e){let n=t.currentTarget.getBoundingClientRect(),s=n.width||1,d=Math.min(Math.max(t.clientX-n.left,0),s),c=this.options.dir===`rtl`?e+(1-d/s):e+d/s;return this.clamp(P(c,this.options.precision))}onPointerDown(t,e){this.canChange()&&(t.preventDefault(),this.activePointerId=t.pointerId,this.preview(this.valueFromPointerPosition(t,e)),this.tryPointerCapture(t))}onPointerMove(t,e){this.canChange()&&(this.activePointerId!==null&&this.activePointerId!==t.pointerId||this.activePointerId===null&&t.pointerType===`touch`||this.preview(this.valueFromPointerPosition(t,e)))}onPointerUp(t,e){!this.canChange()||this.activePointerId!==t.pointerId||(this.activePointerId=null,this.suppressNextClick=!0,this.tryPointerRelease(t),this.setInternalValue(this.valueFromPointerPosition(t,e),!0,!0,`clearable`))}onPointerCancel(t){this.activePointerId===t.pointerId&&(this.activePointerId=null,this.tryPointerRelease(t),this.preview(this.value,!1),this.lastHoverValue=null)}tryPointerCapture(t){try{t.currentTarget.setPointerCapture?.(t.pointerId)}catch{}}tryPointerRelease(t){try{t.currentTarget.releasePointerCapture?.(t.pointerId)}catch{}}valueFromPointerPosition(t,e){return this.valueFromClientX(t.clientX)??this.valueFromPointer(t,e)}valueFromMouseInteraction(t,e){return this.options.dir===`rtl`?this.valueFromPointerPosition(t,e):this.valueFromPointer(t,e)}valueFromClientX(t){let n=Array.from(this.host.querySelectorAll(`.universal-rating-item`)).map((c,p)=>({index:p,rect:c.getBoundingClientRect()})).filter(({rect:c})=>c.width>0);if(!n.length)return null;let s=Math.min(...n.map(({rect:c})=>c.left)),d=Math.max(...n.map(({rect:c})=>c.right));if(t<=s)return this.options.dir===`rtl`?this.options.max:0;if(t>=d)return this.options.dir===`rtl`?0:this.options.max;for(let{index:c,rect:p}of n)if(t>=p.left&&t<=p.right){let L=Math.min(Math.max(t-p.left,0),p.width),ue=this.options.dir===`rtl`?c+(1-L/p.width):c+L/p.width;return this.clamp(P(ue,this.options.precision))}return le(t-s,d-s,{max:this.options.max,precision:this.options.precision,dir:this.options.dir})}onKeydown(t){if(!this.canChange())return;let e={ArrowRight:this.options.dir===`rtl`?-this.options.precision:this.options.precision,ArrowUp:this.options.precision,ArrowLeft:this.options.dir===`rtl`?this.options.precision:-this.options.precision,ArrowDown:-this.options.precision};if(t.key in e){t.preventDefault(),this.setInternalValue(this.value+e[t.key],!0);return}if(t.key===`Home`){t.preventDefault(),this.setInternalValue(0,!0,!1,`home`);return}if(t.key===`End`){t.preventDefault(),this.setInternalValue(this.options.max,!0);return}(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),this.setInternalValue(this.displayValue,!0))}setInternalValue(t,e,n=!1,s=`set`){let d=this.clamp(P(t,this.options.precision)),c=n&&this.options.clearable&&d>0&&d===this.value?0:d,p=this.value,L=c!==this.value;this.value=c,this.displayValue=c,this.lastHoverValue=null,(this.value>0||!this.options.required)&&(this.errorVisible=!1),this.render(),e&&L&&(this.options.onChange?.(this.value),p>0&&this.value===0&&s!==`set`&&this.options.onClear?.())}preview(t,e=!0){this.displayValue=this.clamp(t),this.updateControlState(),e&&this.emitHover(this.displayValue)}emitHover(t){this.lastHoverValue!==t&&(this.lastHoverValue=t,this.options.onHover?.(t))}updateControlState(){let t=this.control();t&&(t.setAttribute(`aria-valuenow`,b(this.displayValue)),t.setAttribute(`aria-valuetext`,this.valueText(this.displayValue)),t.style.setProperty(`--universal-rating-color`,this.colorForValue(this.displayValue)),t.querySelectorAll(`[data-universal-rating-index]`).forEach((e,n)=>{e.style.setProperty(`--universal-rating-fill`,`${re(this.displayValue,n)}%`)}),this.syncMeaningElement(t))}control(){return this.host.querySelector(`.universal-rating-control`)}canChange(){return!this.options.readonly&&!this.options.disabled}isInvalid(){return this.options.required&&!this.options.disabled&&this.value<=0}valueText(t){let e=`${b(t)} out of ${b(this.options.max)}`,n=this.meaningForValue(t);return n?`${e}, ${n}`:e}readonlySummaryText(){let t=`Rated ${b(this.value)} out of ${b(this.options.max)}`;return typeof this.options.count!=`number`?t:this.options.suffix?`${t}, ${b(this.options.count)} ${this.options.suffix}`:`${t}, ${b(this.options.count)}`}readonlyCountText(){return typeof this.options.count!=`number`?``:this.options.suffix?`(${b(this.options.count)} ${this.options.suffix})`:`(${b(this.options.count)})`}meaningForValue(t){if(!this.options.showLabel||t<=0)return``;let e=Math.ceil(t)-1;return this.options.labels[e]??``}syncMeaningElement(t){let e=this.meaningForValue(this.displayValue),n=this.host.querySelector(`.universal-rating-meaning`);if(!e){n?.remove();return}if(n){n.textContent=e;return}let s=this.renderMeaning(this.host.ownerDocument,e);t.after(s)}renderValidationProxy(t){let e=t.createElement(`input`);return e.className=`universal-rating-validation-proxy`,e.name=this.validationProxyName,e.tabIndex=-1,e.required=this.options.required,e.disabled=this.options.disabled,e.value=this.value>0?`selected`:``,e.setAttribute(`aria-hidden`,`true`),e.setCustomValidity(this.isInvalid()?this.options.errorText:``),e.addEventListener(`invalid`,n=>{n.preventDefault(),this.showValidationError(),this.focus()}),e}showValidationError(){if(!this.isInvalid())return;this.errorVisible=!0;let t=this.control();if(t?.setAttribute(`aria-invalid`,`true`),t?.setAttribute(`aria-describedby`,this.errorId),!this.host.querySelector(`#${this.errorId}`)){let e=this.host.ownerDocument.createElement(`div`);e.id=this.errorId,e.className=S(`universal-rating-error`,this.options.customClass.error),e.setAttribute(`role`,`alert`),e.textContent=this.options.errorText,this.host.appendChild(e)}}syncFormSubmitListener(){let t=this.options.required?this.host.closest(`form`):null;t!==this.form&&(this.detachFormSubmitListener(),this.form=t,this.form?.addEventListener(`submit`,this.onFormSubmit),this.form?.addEventListener(`formdata`,this.onFormData))}detachFormSubmitListener(){this.form?.removeEventListener(`submit`,this.onFormSubmit),this.form?.removeEventListener(`formdata`,this.onFormData),this.form=null}clamp(t){return Number.isFinite(t)?Math.min(Math.max(t,0),this.options.max):0}colorForValue(t){return this.options.color?this.options.color:t<=this.options.max*.33?this.options.badColor:t<=this.options.max*.66?this.options.avgColor:this.options.goodColor}size(){return this.options.size===`custom`?Ce(this.options.customSize):ge[this.options.size]}};var F={create(i,t={}){let e=typeof i==`string`?globalThis.document?.querySelector(i):i;if(!e)throw new Error(`universal-rating target was not found: ${String(i)}`);return oe(e,t)},valueFromPosition(i,t,e={}){return le(i,t,e)},roundValue(i,t=u.precision){return P(D(i,0),q(t))},clampValue(i,t=u.max){return se(i,K(t,u.max))}};function oe(i,t,e=null){return new B(i,t,e)}function W(i=`universal-rating`){let t=globalThis.customElements,e=globalThis.HTMLElement;!t||!e||t.get(i)||t.define(i,fe(e))}function fe(i){return class extends i{static formAssociated=!0;static get observedAttributes(){return[`value`,`max`,`precision`,`dir`,`theme`,`icon`,`custom-icon`,`color`,`empty-color`,`spacing`,`size`,`custom-size`,`readonly`,`disabled`,`clearable`,`required`,`error-text`,`label`,`labels`,`show-label`,`show-value`,`count`,`suffix`,`name`]}instance=null;internals=typeof this.attachInternals==`function`?this.attachInternals():null;syncingValue=!1;defaultValue=0;formDisabled=!1;onInvalid=e=>{e.preventDefault(),this.validate(),this.instance?.focus()};get value(){return Number(this.getAttribute(`value`)??0)}set value(e){this.setAttribute(`value`,b(e))}clear(){this.instance?.clear()}validate(){return this.instance?.validate()??!0}connectedCallback(){this.defaultValue=D(T(this,`value`),u.value),this.addEventListener(`invalid`,this.onInvalid),this.mount()}disconnectedCallback(){this.removeEventListener(`invalid`,this.onInvalid),this.instance?.destroy(),this.instance=null}formResetCallback(){this.setComponentValue(this.defaultValue)}formDisabledCallback(e){this.formDisabled=e,this.instance?.update(this.optionsFromAttributes())}formStateRestoreCallback(e){typeof e==`string`&&this.setComponentValue(D(Number(e),u.value))}attributeChangedCallback(){this.syncingValue||this.instance&&this.instance.update(this.optionsFromAttributes())}mount(){this.instance||(this.instance=oe(this,z(W$1({},this.optionsFromAttributes()),{onChange:e=>{this.setComponentValue(e),this.dispatchValueEvent(`universal-rating-change`,e)},onHover:e=>this.dispatchValueEvent(`universal-rating-hover`,e),onFocus:()=>this.dispatchValueEvent(`universal-rating-focus`,this.value),onBlur:()=>this.dispatchValueEvent(`universal-rating-blur`,this.value),onClear:()=>this.dispatchValueEvent(`universal-rating-clear`,0)}),this.internals?{sync:(e,n,s)=>this.syncInternals(e,n,s)}:null))}dispatchValueEvent(e,n){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:{value:n}}))}setComponentValue(e){this.syncingValue=!0,this.value=e,this.syncingValue=!1,this.instance?.update(this.optionsFromAttributes())}syncInternals(e,n,s){if(!this.internals)return;let d=b(e);if(this.internals.setFormValue(n.name&&!n.disabled?d:null,d),s){this.internals.setValidity({valueMissing:!0},n.errorText,this.querySelector(`.universal-rating-control`)??this);return}this.internals.setValidity({})}optionsFromAttributes(){return{value:T(this,`value`),max:T(this,`max`),precision:T(this,`precision`),dir:Re(this,`dir`),theme:ke(this,`theme`),icon:Me(this,`icon`),customIcon:this.getAttribute(`custom-icon`)??void 0,color:this.getAttribute(`color`)??void 0,emptyColor:this.getAttribute(`empty-color`)??void 0,spacing:this.getAttribute(`spacing`)??void 0,size:Oe(this,`size`),customSize:this.getAttribute(`custom-size`)??void 0,readonly:this.hasAttribute(`readonly`),disabled:this.hasAttribute(`disabled`)||this.formDisabled,clearable:this.hasAttribute(`clearable`),required:this.hasAttribute(`required`),errorText:this.getAttribute(`error-text`)??void 0,label:this.getAttribute(`label`)??void 0,labels:Pe(this,`labels`),showLabel:this.hasAttribute(`show-label`),showValue:this.hasAttribute(`show-value`),count:T(this,`count`),suffix:this.getAttribute(`suffix`)??void 0,name:this.getAttribute(`name`)??void 0}}}}function ne(i){let t=K(i.max??i.length,u.max),e=be(i),n=i.theme??u.theme,s=ie[n]??ie[u.theme];return{value:P(D(i.value,u.value),e),max:t,precision:e,dir:ae(i.dir),theme:n,icon:i.icon??i.iconType??u.icon,customIcon:i.customIcon??u.customIcon,color:i.color??u.color,badColor:i.badColor??s.badColor,avgColor:i.avgColor??s.avgColor,goodColor:i.goodColor??s.goodColor,emptyColor:i.emptyColor??s.emptyColor,spacing:we(i.spacing??i.spaceBetween??u.spacing),size:i.size??u.size,customSize:i.customSize??u.customSize,readonly:i.readonly??u.readonly,disabled:i.disabled??u.disabled,clearable:i.clearable??u.clearable,required:i.required??u.required,errorText:i.errorText??u.errorText,label:i.label??u.label,labels:ye(i.labels),showLabel:i.showLabel??u.showLabel,showValue:i.showValue??u.showValue,count:xe(i.count),suffix:i.suffix??u.suffix,name:i.name??u.name,className:i.className??u.className,customClass:Ee(i.customClass),onChange:i.onChange,onHover:i.onHover,onFocus:i.onFocus,onBlur:i.onBlur,onClear:i.onClear}}function be(i){return typeof i.precision==`number`?q(i.precision):i.fractions===!1?1:u.precision}function q(i){return Number.isFinite(i)&&i>0?Math.min(i,1):u.precision}function K(i,t){return typeof i==`number`&&Number.isFinite(i)&&i>0?Math.floor(i):t}function D(i,t){return typeof i==`number`&&Number.isFinite(i)?i:t}function ae(i){return i===`rtl`?`rtl`:u.dir}function ye(i){return Array.isArray(i)?i.map(t=>String(t).trim()).filter(Boolean):u.labels}function xe(i){if(!(typeof i!=`number`||!Number.isFinite(i)))return Math.max(0,Math.floor(i))}function Ee(i){return typeof i==`string`?z(W$1({},U),{root:i}):i?{root:i.root??``,item:i.item??``,icon:i.icon??``,label:i.label??``,error:i.error??``}:W$1({},U)}function se(i,t){return Number.isFinite(i)?Math.min(Math.max(i,0),t):0}function le(i,t,e={}){if(!Number.isFinite(i)||!Number.isFinite(t)||t<=0)return 0;let n=K(e.max,u.max),s=q(e.precision??u.precision),d=Math.min(Math.max(i,0),t);return se(P((ae(e.dir??e.direction)===`rtl`?1-d/t:d/t)*n,s),n)}function P(i,t){return Number((Math.round((i+Number.EPSILON)/t)*t).toFixed(4))}function b(i){return Number.isInteger(i)?String(i):String(Number(i.toFixed(4)))}function re(i,t){let e=i-t;return e>=1?100:e<=0?0:Math.round(e*1e4)/100}function we(i){return typeof i==`number`?`${i}px`:i}function Ce(i){return/^\d+(\.\d+)?$/.test(i)?`${i}px`:i}function Se(i){return/^<svg(?:\s|>)[\s\S]*(?:<\/svg>|\/>)$/i.test(i.trim())}function S(...i){return i.filter(Boolean).join(` `)}function _e(i){if(i.getElementById(H))return;let t=i.createElement(`style`);t.id=H,t.className=H,t.textContent=ve,i.head.appendChild(t)}function $(i,t){for(;i.firstChild;)i.removeChild(i.firstChild);t.forEach(e=>i.appendChild(e))}function T(i,t){let e=i.getAttribute(t),n=e===null?NaN:Number(e);return Number.isFinite(n)?n:void 0}function Pe(i,t){let e=i.getAttribute(t);if(e!==null)return e.split(`,`).map(n=>n.trim()).filter(Boolean)}function Me(i,t){let e=i.getAttribute(t);return e===`star`||e===`heart`||e===`circle`||e===`diamond`||e===`custom`?e:void 0}function ke(i,t){let e=i.getAttribute(t);return e==="default"||e===`minimal`||e===`material`||e===`bootstrap`||e===`outline`||e===`filled`?e:void 0}function Re(i,t){let e=i.getAttribute(t);return e===`rtl`||e===`ltr`?e:void 0}function Oe(i,t){let e=i.getAttribute(t);return e===`extra-small`||e===`small`||e===`medium`||e===`large`||e===`extra-large`||e===`custom`?e:void 0}var de=(i,t)=>t.key;var G=(i,t)=>t.name;var Ie=(i,t)=>t.label+t.value+i;var me=(i,t)=>t.id;function Ve(i,t){i&1&&(Yc(0,`span`),WT(1,`Published version: `),Yc(2,`strong`),WT(3),Zc()()),i&2&&(TE(3),tl(`v`,t))}function Te(i,t){if(i&1&&(Yc(0,`span`),WT(1,`Latest update: `),Yc(2,`strong`,68),WT(3),Zc()()),i&2){let e=t,n=pT();TE(2),kh(`title`,e),TE(),ig(n.publishedAgo(e))}}function Fe(i,t){if(i&1&&(Yc(0,`span`),WT(1,`Total downloads: `),Yc(2,`strong`),WT(3),Zc()()),i&2){let e=pT();TE(3),ig(e.packageStats().downloads?.toLocaleString(`en-US`))}}function Le(i,t){if(i&1&&(Yc(0,`a`,5),Nh(1,`img`,69),Zc()),i&2)kh(`href`,pT().githubUrl,ky),bh(`aria-label`,`Star universal-rating on GitHub, `+t.toLocaleString(`en-US`)+` stars`)}function Ae(i,t){if(i&1){let e=dT();Yc(0,`button`,70),Fh(`click`,function(){Ou(e);return Ru(pT().scrollToTop())}),WT(1,`↑`),Zc()}}function De(i,t){if(i&1){let e=dT();Yc(0,`div`,73)(1,`button`,74),Fh(`click`,function(){Ou(e);let s=pT().$implicit;return Ru(pT().validateLiveExample(s.key))}),WT(2,`validate()`),Zc()()}}function ze(i,t){if(i&1){let e=dT();Yc(0,`article`,23)(1,`div`,71)(2,`h3`),WT(3),Zc(),Yc(4,`p`),WT(5),Zc(),Nh(6,`div`,72),XD(7,De,3,0,`div`,73),Zc(),Yc(8,`div`,12)(9,`div`,13)(10,`span`),WT(11,`Example code`),Zc(),Yc(12,`button`,7),Fh(`click`,function(){let s=Ou(e).$implicit;return Ru(pT().copyToClipboard(s.code))}),WT(13),Zc()(),Yc(14,`pre`)(15,`code`),WT(16),Zc()()()()}if(i&2){let e=t.$implicit,n=pT();TE(3),ig(e.title),TE(2),ig(e.description),TE(),kh(`id`,`demo-`+e.key),TE(),eT(e.key===`required-validation`?7:-1),TE(5),bh(`data-testid`,`copy-example-`+e.key),TE(),ig(n.copiedValue()===e.code?`Copied`:`Copy`),TE(3),ig(e.code)}}function Ne(i,t){if(i&1){let e=dT();Yc(0,`article`,26)(1,`div`,71)(2,`h3`),WT(3),Zc(),Yc(4,`p`),WT(5),Zc(),Nh(6,`div`,72),Zc(),Yc(7,`div`,12)(8,`div`,13)(9,`span`),WT(10,`Example code`),Zc(),Yc(11,`button`,7),Fh(`click`,function(){let s=Ou(e).$implicit;return Ru(pT().copyToClipboard(s.code))}),WT(12),Zc()(),Yc(13,`pre`)(14,`code`),WT(15),Zc()()()()}if(i&2){let e=t.$implicit,n=pT();TE(3),ig(e.title),TE(2),ig(e.description),TE(),kh(`id`,`demo-`+e.key),TE(5),bh(`data-testid`,`copy-example-`+e.key),TE(),ig(n.copiedValue()===e.code?`Copied`:`Copy`),TE(3),ig(e.code)}}function He(i,t){if(i&1){let e=dT();Yc(0,`button`,7),Fh(`click`,function(){let s=Ou(e).$implicit;return Ru(pT(2).selectFramework(s.id))}),WT(1),Zc()}if(i&2){let e=t.$implicit,n=pT(2);Qh(`active`,n.activeFrameworkId()===e.id),bh(`aria-pressed`,n.activeFrameworkId()===e.id)(`data-testid`,`framework-tab-`+e.id),TE(),ig(e.name)}}function $e(i,t){if(i&1&&(Yc(0,`div`,31)(1,`span`),WT(2),Zc(),Yc(3,`div`,75),rT(4,He,2,5,`button`,76,me),Zc()()),i&2){let e=t.$implicit,n=pT();TE(2),ig(e),TE(2),oT(n.frameworkExamplesByCategory(e))}}function Ue(i,t){i&1&&Nh(0,`div`,40)}function Be(i,t){if(i&1&&(Yc(0,`div`,41)(1,`strong`),WT(2),Zc(),Yc(3,`span`),WT(4,`Native UI frameworks do not render DOM. Use the helper output to paint your own stars, icons, or SVG layer.`),Zc()()),i&2){let e=pT();TE(2),ig(e.activeFramework().supportKind)}}function We(i,t){if(i&1&&(Yc(0,`li`)(1,`span`),WT(2),Zc(),Yc(3,`span`,77),WT(4),Zc()()),i&2){let e=t.$implicit;TE(2),ig(e.name),TE(2),ig(e.supportKind)}}function qe(i,t){if(i&1&&(Yc(0,`div`,46)(1,`h3`),WT(2),Zc(),Yc(3,`ul`),rT(4,We,5,2,`li`,null,me),Zc()()),i&2){let e=t.$implicit,n=pT();TE(2),ig(e),TE(2),oT(n.frameworkExamplesByCategory(e))}}function Ke(i,t){if(i&1&&(Yc(0,`tr`)(1,`th`,78)(2,`code`),WT(3),Zc()(),Yc(4,`td`)(5,`code`),WT(6),Zc()(),Yc(7,`td`),WT(8),Zc()()),i&2){let e=t.$implicit;TE(3),ig(e.name),TE(3),ig(e.defaultValue),TE(2),ig(e.description)}}function Ge(i,t){if(i&1&&(Yc(0,`tr`)(1,`th`,78)(2,`code`),WT(3),Zc()(),Yc(4,`td`),WT(5),Zc()()),i&2){let e=t.$implicit;TE(3),ig(e.name),TE(2),ig(e.description)}}function je(i,t){if(i&1&&(Yc(0,`tr`)(1,`th`,78)(2,`code`),WT(3),Zc()(),Yc(4,`td`),WT(5),Zc()()),i&2){let e=t.$implicit;TE(3),ig(e.name),TE(2),ig(e.description)}}function Je(i,t){if(i&1&&(Yc(0,`li`)(1,`span`),WT(2),Zc(),Yc(3,`code`),WT(4),Zc()()),i&2){let e=t.$implicit;TE(2),ig(e.label),TE(2),ig(e.value)}}var Qe=`<svg viewBox="0 0 24 24"><path d="M12 2l2.8 6.8 7.2.6-5.5 4.7 1.7 7-6.2-3.7-6.2 3.7 1.7-7L2 9.4l7.2-.6L12 2z"/></svg>`;var g={value:4,precision:.5,labels:[`Poor`,`Fair`,`Good`,`Very good`,`Excellent`],showLabel:!0,label:`Framework workbench rating`};var ce=class i{document=v(ct);title=v(hs);meta=v(fs);previousTitle=this.title.getTitle();previousIconHref=this.document.head.querySelector(`link[rel="icon"]`)?.getAttribute(`href`)??null;previousDescription=this.meta.getTag(`name="description"`)?.getAttribute(`content`)??null;previousCanonicalHref=this.document.head.querySelector(`link[rel="canonical"]`)?.getAttribute(`href`)??null;browserAbort=new AbortController;liveInstances=[];liveInstanceByKey=new Map;frameworkPreviewInstance=null;methodInstance=null;copyResetTimeout=null;browserFeaturesInitialized=!1;packageStats=qo({});githubUrl=`https://github.com/subha-patra/universal-rating`;showScrollTop=qo(!1);copiedValue=qo(null);activeFrameworkId=qo(`javascript`);lastAction=qo(`Try a rating example`);eventLog=qo([{label:`ready`,value:`Rendered universal-rating docs`}]);installCommand=`npm install universal-rating`;usageSnippet=`import { starRate } from 'universal-rating';

const rating = starRate.create('#rating', {
  value: 3.5,
  max: 5,
  precision: 0.5,
  icon: 'star',
  onChange: value => console.log(value)
});`;webComponentSnippet=`<form id="review-form">
  <universal-rating
    name="rating"
    theme="bootstrap"
    labels="Poor,Fair,Good,Very good,Excellent"
    show-label
    required
    clearable
    error-text="Please select a rating"
  ></universal-rating>

  <button type="submit">Submit review</button>
</form>`;frameworkCategories=[`Web`,`SSR / meta`,`Hybrid mobile`,`Native / headless`];frameworkExamples=[{id:`javascript`,name:`JavaScript`,category:`Web`,supportKind:`DOM`,description:`Use a normal DOM element when you are not using a framework.`,lifecycle:`Create after the element exists; call destroy() if you remove the host manually.`,canPreview:!0,previewOptions:g,code:`import { starRate } from 'universal-rating';

const rating = starRate.create('#rating', {
  value: 4,
  precision: 0.5,
  labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
  showLabel: true,
  onChange: value => console.log(value)
});`},{id:`html-web-component`,name:`HTML / Web Component`,category:`Web`,supportKind:`Web Component`,description:`Register the custom element once and use declarative HTML.`,lifecycle:`Call defineStarRateElement() once before rendering <universal-rating>.`,canPreview:!0,previewOptions:g,code:`<script type="module">
  import { defineStarRateElement } from 'universal-rating';
  defineStarRateElement();
<\/script>

<universal-rating
  value="4"
  precision="0.5"
  labels="Poor,Fair,Good,Very good,Excellent"
  show-label
></universal-rating>`},{id:`angular`,name:`Angular`,category:`Web`,supportKind:`DOM`,description:`Create the rating after Angular has rendered the host element.`,lifecycle:`Use afterNextRender() and destroy the instance if the component owns dynamic teardown.`,canPreview:!0,previewOptions:g,code:`import { afterNextRender, Component } from '@angular/core';
import { starRate, type StarRateInstance } from 'universal-rating';

@Component({ template: '<div id="rating"></div>' })
export class RatingComponent {
  private rating: StarRateInstance | null = null;

  constructor() {
    afterNextRender(() => {
      this.rating = starRate.create('#rating', {
        value: 4,
        precision: 0.5,
        labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
        showLabel: true,
        onChange: value => console.log(value)
      });
    });
  }
}`},{id:`react`,name:`React`,category:`Web`,supportKind:`DOM`,description:`Use a ref and create the rating inside an effect.`,lifecycle:`Create in useEffect(); return rating.destroy() from the cleanup.`,canPreview:!0,previewOptions:g,code:`import { useEffect, useRef } from 'react';
import { starRate, type StarRateInstance } from 'universal-rating';

export function Rating() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const rating: StarRateInstance = starRate.create(ref.current, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true,
      onChange: value => console.log(value)
    });
    return () => rating.destroy();
  }, []);

  return <div ref={ref} />;
}`},{id:`vue`,name:`Vue`,category:`Web`,supportKind:`DOM`,description:`Use a template ref and initialize after mount.`,lifecycle:`Create in onMounted(); destroy in onUnmounted().`,canPreview:!0,previewOptions:g,code:`<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { starRate, type StarRateInstance } from 'universal-rating';

const target = ref<HTMLElement | null>(null);
let rating: StarRateInstance | null = null;

onMounted(() => {
  if (!target.value) return;
  rating = starRate.create(target.value, {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true,
    onChange: value => console.log(value)
  });
});
onUnmounted(() => rating?.destroy());
<\/script>

<template><div ref="target" /></template>`},{id:`svelte`,name:`Svelte`,category:`Web`,supportKind:`DOM`,description:`Bind the host node and initialize when the component mounts.`,lifecycle:`Create in onMount(); return rating.destroy() from onMount.`,canPreview:!0,previewOptions:g,code:`<script lang="ts">
  import { onMount } from 'svelte';
  import { starRate } from 'universal-rating';

  let target: HTMLDivElement;

  onMount(() => {
    const rating = starRate.create(target, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true,
      onChange: value => console.log(value)
    });
    return () => rating.destroy();
  });
<\/script>

<div bind:this={target}></div>`},{id:`solid`,name:`Solid`,category:`Web`,supportKind:`DOM`,description:`Use a local variable ref and Solid cleanup.`,lifecycle:`Create in onMount(); destroy in onCleanup().`,canPreview:!0,previewOptions:g,code:`import { onCleanup, onMount } from 'solid-js';
import { starRate } from 'universal-rating';

export function Rating() {
  let target!: HTMLDivElement;

  onMount(() => {
    const rating = starRate.create(target, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true,
      onChange: value => console.log(value)
    });
    onCleanup(() => rating.destroy());
  });

  return <div ref={target} />;
}`},{id:`preact`,name:`Preact`,category:`Web`,supportKind:`DOM`,description:`Preact uses the same ref/effect pattern as React.`,lifecycle:`Create in useEffect(); destroy in the returned cleanup.`,canPreview:!0,previewOptions:g,code:`import { useEffect, useRef } from 'preact/hooks';
import { starRate } from 'universal-rating';

export function Rating() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const rating = starRate.create(ref.current, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true
    });
    return () => rating.destroy();
  }, []);

  return <div ref={ref} />;
}`},{id:`lit`,name:`Lit`,category:`Web`,supportKind:`Web Component`,description:`Lit can render the registered <universal-rating> element directly.`,lifecycle:`Register the element once, then use it inside render().`,canPreview:!0,previewOptions:g,code:`import { LitElement, html } from 'lit';
import { defineStarRateElement } from 'universal-rating';

defineStarRateElement();

export class RatingElement extends LitElement {
  render() {
    return html\`
      <universal-rating
        value="4"
        precision="0.5"
        labels="Poor,Fair,Good,Very good,Excellent"
        show-label
      ></universal-rating>
    \`;
  }
}`},{id:`alpine`,name:`Alpine`,category:`Web`,supportKind:`DOM`,description:`Initialize from x-init once Alpine has the element.`,lifecycle:`Create from x-init; destroy when Alpine tears down if you hold the instance.`,canPreview:!0,previewOptions:g,code:`<div
  x-data
  x-init="starRate.create($refs.rating, {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true,
    onChange: value => console.log(value)
  })"
>
  <div x-ref="rating"></div>
</div>`},{id:`ember`,name:`Ember`,category:`Web`,supportKind:`DOM`,description:`Use an element modifier so the widget starts when the element inserts.`,lifecycle:`Create in a modifier; register a destructor to call destroy().`,canPreview:!0,previewOptions:g,code:`import { modifier } from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import { starRate } from 'universal-rating';

export default modifier((element: HTMLElement) => {
  const rating = starRate.create(element, {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true
  });
  registerDestructor(rating, () => rating.destroy());
});`},{id:`next-js`,name:`Next.js`,category:`SSR / meta`,supportKind:`SSR client-only`,description:`Import is SSR-safe, but DOM rendering belongs in a client component.`,lifecycle:`Add 'use client'; create in useEffect(); destroy in cleanup.`,canPreview:!0,previewOptions:g,code:`'use client';

import { useEffect, useRef } from 'react';
import { starRate } from 'universal-rating';

export function RatingClient() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const rating = starRate.create(ref.current, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true,
      onChange: value => console.log(value)
    });
    return () => rating.destroy();
  }, []);

  return <div ref={ref} />;
}`},{id:`nuxt`,name:`Nuxt`,category:`SSR / meta`,supportKind:`SSR client-only`,description:`Use the package only after Nuxt mounts on the client.`,lifecycle:`Create in onMounted(); destroy in onUnmounted().`,canPreview:!0,previewOptions:g,code:`<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { starRate, type StarRateInstance } from 'universal-rating';

const target = ref<HTMLElement | null>(null);
let rating: StarRateInstance | null = null;

onMounted(() => {
  if (!target.value) return;
  rating = starRate.create(target.value, {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true
  });
});
onUnmounted(() => rating?.destroy());
<\/script>

<template><ClientOnly><div ref="target" /></ClientOnly></template>`},{id:`astro`,name:`Astro`,category:`SSR / meta`,supportKind:`SSR client-only`,description:`Use a client script or a hydrated framework island.`,lifecycle:`Run after document load or inside a client island mount hook.`,canPreview:!0,previewOptions:g,code:`<div id="rating"></div>

<script>
  import { starRate } from 'universal-rating';

  starRate.create('#rating', {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true,
    onChange: value => console.log(value)
  });
<\/script>`},{id:`sveltekit`,name:`SvelteKit`,category:`SSR / meta`,supportKind:`SSR client-only`,description:`Use the same Svelte mount pattern; it only runs in the browser.`,lifecycle:`Create in onMount(); return rating.destroy() from onMount.`,canPreview:!0,previewOptions:g,code:`<script lang="ts">
  import { onMount } from 'svelte';
  import { starRate } from 'universal-rating';

  let target: HTMLDivElement;

  onMount(() => {
    const rating = starRate.create(target, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true
    });
    return () => rating.destroy();
  });
<\/script>

<div bind:this={target}></div>`},{id:`qwik`,name:`Qwik`,category:`SSR / meta`,supportKind:`SSR client-only`,description:`Use a visible task so DOM work runs in the browser.`,lifecycle:`Create from useVisibleTask$(); destroy from cleanup().`,canPreview:!0,previewOptions:g,code:`import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { starRate } from 'universal-rating';

export default component$(() => {
  const host = useSignal<Element>();

  useVisibleTask$(({ cleanup }) => {
    if (!host.value) return;
    const rating = starRate.create(host.value as HTMLElement, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true
    });
    cleanup(() => rating.destroy());
  });

  return <div ref={host} />;
});`},{id:`ionic-angular`,name:`Ionic Angular`,category:`Hybrid mobile`,supportKind:`Mobile WebView`,description:`Ionic Angular runs in a WebView, so the DOM renderer works directly.`,lifecycle:`Create after the Ionic page view renders; destroy when the page is removed if needed.`,canPreview:!0,previewOptions:z(W$1({},g),{label:`Ionic Angular rating`}),code:`import { afterNextRender, Component } from '@angular/core';
import { starRate } from 'universal-rating';

@Component({
  template: '<ion-item><div id="rating"></div></ion-item>'
})
export class RatingPage {
  constructor() {
    afterNextRender(() => starRate.create('#rating', {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true
    }));
  }
}`},{id:`ionic-react`,name:`Ionic React`,category:`Hybrid mobile`,supportKind:`Mobile WebView`,description:`Use a React ref inside Ionic components.`,lifecycle:`Create in useEffect(); destroy in cleanup.`,canPreview:!0,previewOptions:z(W$1({},g),{label:`Ionic React rating`}),code:`import { IonItem } from '@ionic/react';
import { useEffect, useRef } from 'react';
import { starRate } from 'universal-rating';

export function RatingItem() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const rating = starRate.create(ref.current, {
      value: 4,
      precision: 0.5,
      labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
      showLabel: true
    });
    return () => rating.destroy();
  }, []);

  return <IonItem><div ref={ref} /></IonItem>;
}`},{id:`ionic-vue`,name:`Ionic Vue`,category:`Hybrid mobile`,supportKind:`Mobile WebView`,description:`Ionic Vue can use the same Vue ref/onMounted pattern.`,lifecycle:`Create in onMounted(); destroy in onUnmounted().`,canPreview:!0,previewOptions:z(W$1({},g),{label:`Ionic Vue rating`}),code:`<script setup lang="ts">
import { IonItem } from '@ionic/vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { starRate, type StarRateInstance } from 'universal-rating';

const target = ref<HTMLElement | null>(null);
let rating: StarRateInstance | null = null;

onMounted(() => {
  if (!target.value) return;
  rating = starRate.create(target.value, {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true
  });
});
onUnmounted(() => rating?.destroy());
<\/script>

<template><ion-item><div ref="target" /></ion-item></template>`},{id:`capacitor`,name:`Capacitor`,category:`Hybrid mobile`,supportKind:`Mobile WebView`,description:`Capacitor apps render web UI, so the DOM renderer works as-is.`,lifecycle:`Create after the screen DOM exists; destroy when the screen unmounts.`,canPreview:!0,previewOptions:z(W$1({},g),{label:`Capacitor rating`}),code:`import { starRate } from 'universal-rating';

document.addEventListener('DOMContentLoaded', () => {
  starRate.create('#rating', {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true,
    onChange: value => console.log(value)
  });
});`},{id:`cordova`,name:`Cordova`,category:`Hybrid mobile`,supportKind:`Mobile WebView`,description:`Cordova uses a WebView, so initialize after deviceready or page render.`,lifecycle:`Create after deviceready; destroy manually if the page is removed.`,canPreview:!0,previewOptions:z(W$1({},g),{label:`Cordova rating`}),code:`import { starRate } from 'universal-rating';

document.addEventListener('deviceready', () => {
  starRate.create('#rating', {
    value: 4,
    precision: 0.5,
    labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
    showLabel: true,
    onChange: value => console.log(value)
  });
});`},{id:`react-native`,name:`React Native`,category:`Native / headless`,supportKind:`Headless`,description:`React Native does not render DOM nodes; use universal-rating for rating math and render native UI yourself.`,lifecycle:`Use valueFromPosition() in Pressable gestures and store the selected value in native state.`,canPreview:!1,code:`import { Pressable, Text, View } from 'react-native';
import { starRate } from 'universal-rating';

const width = 240;

export function NativeRating() {
  return (
    <Pressable
      onPress={event => {
        const value = starRate.valueFromPosition(
          event.nativeEvent.locationX,
          width,
          { max: 5, precision: 0.5 }
        );
        const rounded = starRate.roundValue(value, 0.5);
        setRating(starRate.clampValue(rounded, 5));
      }}
    >
      <View><Text>Tap to rate</Text></View>
    </Pressable>
  );
}`},{id:`expo`,name:`Expo`,category:`Native / headless`,supportKind:`Headless`,description:`Expo uses React Native, so use the same headless helpers with your own native stars.`,lifecycle:`Use valueFromPosition() from Pressable events; render with Text, SVG, or image components.`,canPreview:!1,code:`import { Pressable, Text } from 'react-native';
import { starRate } from 'universal-rating';

const ratingWidth = 220;

<Pressable
  onPress={event => {
    const nextValue = starRate.valueFromPosition(
      event.nativeEvent.locationX,
      ratingWidth,
      { max: 5, precision: 0.5 }
    );
    setRating(nextValue);
  }}
>
  <Text>Expo rating: {rating}</Text>
</Pressable>;`}];liveExamples=[{key:`basic-rating`,title:`Basic rating`,description:`A clean five-star rating with a starting value.`,options:{value:3,max:5,precision:1,label:`Basic rating`},code:`starRate.create('#basic-rating', {
  value: 3,
  max: 5,
  precision: 1
});`},{key:`decimal-rating`,title:`Decimal rating`,description:`Half-step precision for reviews and scores.`,options:{value:3.5,max:5,precision:.5,label:`Decimal rating`},code:`starRate.create('#decimal-rating', {
  value: 3.5,
  max: 5,
  precision: 0.5
});`},{key:`rating-meaning`,title:`Rating meaning labels`,description:`Show user-friendly labels such as Poor, Good, or Excellent while users hover, tap, drag, use the keyboard, or select a rating.`,options:{value:4,labels:[`Poor`,`Fair`,`Good`,`Very good`,`Excellent`],showLabel:!0,label:`Review rating`},code:`starRate.create('#rating-meaning', {
  value: 4,
  labels: ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
  showLabel: true
});`},{key:`rtl-support`,title:`RTL support`,description:`Use right-to-left visual direction, pointer math, and horizontal keyboard controls for global products.`,options:{value:3,dir:`rtl`,labels:[`ضعيف`,`مقبول`,`جيد`,`جيد جدا`,`ممتاز`],showLabel:!0,label:`RTL rating`},code:`starRate.create('#rtl-rating', {
  value: 3,
  dir: 'rtl',
  labels: ['\u0636\u0639\u064A\u0641', '\u0645\u0642\u0628\u0648\u0644', '\u062C\u064A\u062F', '\u062C\u064A\u062F \u062C\u062F\u0627', '\u0645\u0645\u062A\u0627\u0632'],
  showLabel: true
});`},{key:`readonly-rating`,title:`Readonly rating`,description:`Display a score without allowing changes.`,options:{value:4.5,readonly:!0,precision:.5,label:`Readonly rating`},code:`starRate.create('#readonly-rating', {
  value: 4.5,
  readonly: true
});`},{key:`readonly-product-card`,title:`Readonly product card`,description:`Render a compact static score with one icon, the numeric value, and review count.`,options:{value:4.5,readonly:!0,showValue:!0,count:245,suffix:`reviews`,theme:`material`,icon:`heart`,color:`#ba2865`,label:`Product card rating`},code:`starRate.create('#readonly-product-card', {
  value: 4.5,
  readonly: true,
  showValue: true,
  count: 245,
  suffix: 'reviews',
  theme: 'material',
  icon: 'heart'
});`},{key:`disabled-rating`,title:`Disabled rating`,description:`Temporarily block pointer and keyboard changes.`,options:{value:2.5,disabled:!0,precision:.5,label:`Disabled rating`},code:`starRate.create('#disabled-rating', {
  value: 2.5,
  disabled: true
});`},{key:`custom-colors`,title:`Custom colors`,description:`Use one brand color and a custom empty color.`,options:{value:4,color:`#e1085d`,emptyColor:`#d7dee9`,spacing:`6px`,label:`Custom colors`},code:`starRate.create('#custom-colors', {
  value: 4,
  color: '#e1085d',
  emptyColor: '#d7dee9',
  spacing: '6px'
});`},{key:`styling-hooks`,title:`Styling hooks`,description:`Attach classes to the root, items, icons, visible label, and validation error slots.`,options:{value:4,labels:[`Poor`,`Fair`,`Good`,`Very good`,`Excellent`],showLabel:!0,customClass:{root:`review-rating`,item:`review-rating__item`,icon:`review-rating__icon`,label:`review-rating__label`,error:`review-rating__error`},label:`Styled review rating`},code:`starRate.create('#styled-rating', {
  value: 4,
  customClass: {
    root: 'review-rating',
    item: 'review-rating__item',
    icon: 'review-rating__icon',
    label: 'review-rating__label',
    error: 'review-rating__error'
  }
});`},{key:`icon-variants`,title:`Icon variants`,description:`Use heart, circle, diamond, or star shapes.`,options:{value:4,icon:`heart`,color:`#ef4f86`,label:`Heart rating`},code:`starRate.create('#icon-variants', {
  value: 4,
  icon: 'heart',
  color: '#ef4f86'
});`},{key:`custom-svg`,title:`Custom SVG icon`,description:`Provide a safe SVG string for a custom shape.`,options:{value:4,icon:`custom`,customIcon:Qe,color:`#f6b93b`,label:`Custom SVG rating`},code:`starRate.create('#custom-svg', {
  value: 4,
  icon: 'custom',
  customIcon: '<svg viewBox="0 0 24 24">...</svg>'
});`},{key:`clear-rating`,title:`Clear rating`,description:`Let users click the selected rating again to reset a form value back to zero.`,options:{value:3,clearable:!0,label:`Clearable rating`},code:`starRate.create('#clear-rating', {
  value: 3,
  clearable: true
});`},{key:`better-events`,title:`Better events`,description:`Track hover, focus, blur, clear, and change behavior for analytics or advanced UI.`,options:{value:3,clearable:!0,label:`Event callback rating`,onHover:t=>this.addEvent(`hover`,String(t)),onFocus:()=>this.addEvent(`focus`,`rating-events`),onBlur:()=>this.addEvent(`blur`,`rating-events`),onClear:()=>this.addEvent(`clear`,`0`)},code:`starRate.create('#rating-events', {
  value: 3,
  clearable: true,
  onHover: value => console.log('hover', value),
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onClear: () => console.log('clear')
});`},{key:`required-validation`,title:`Required validation`,description:`Show accessible inline validation when a required review or survey rating is empty.`,options:{required:!0,errorText:`Please select a rating`,label:`Required rating`},code:`starRate.create('#required-validation', {
  required: true,
  errorText: 'Please select a rating'
});`},{key:`form-value`,title:`Form value`,description:`Set name to submit the rating. The Web Component uses ElementInternals when available; starRate.create() uses a hidden-input fallback.`,options:{value:5,name:`rating`,label:`Form rating`},code:`starRate.create('#form-value', {
  value: 5,
  name: 'rating'
});`},{key:`legacy-aliases`,title:`Migration aliases`,description:`Old angular-star names still work during migration.`,options:{value:3.5,length:5,fractions:!0,iconType:`diamond`,label:`Legacy aliases`},code:`starRate.create('#legacy-aliases', {
  value: 3.5,
  length: 5,
  fractions: true,
  iconType: 'diamond'
});`}];themeExamples=[[`default`,`Balanced package defaults for general product UI.`],[`minimal`,`Quiet monochrome styling for dashboards and admin tools.`],[`material`,`Material-inspired green, orange, red, and blue-gray tones.`],[`bootstrap`,`Bootstrap-style success, warning, danger, and neutral colors.`],[`outline`,`Crisp blue selection color with restrained empty outlines.`],[`filled`,`Expressive filled colors for friendlier review experiences.`]].map(([t,e])=>({key:`theme-${t}`,title:`${t} theme`,description:e,options:{value:4,theme:t,label:`${t} theme rating`},code:`starRate.create('#theme-${t}', {
  value: 4,
  theme: '${t}'
});`}));configRows=[{name:`value`,defaultValue:`0`,description:`Initial selected rating value.`},{name:`max`,defaultValue:`5`,description:`Maximum rating item count.`},{name:`precision`,defaultValue:`0.5`,description:`Step size for click, hover, and keyboard updates.`},{name:`dir`,defaultValue:`ltr`,description:`Visual and interaction direction: ltr or rtl.`},{name:`theme`,defaultValue:`default`,description:`Visual preset: default, minimal, material, bootstrap, outline, or filled. Explicit color options override theme colors.`},{name:`icon`,defaultValue:`star`,description:`star, heart, circle, diamond, or custom.`},{name:`customIcon`,defaultValue:`''`,description:`SVG string used when icon is custom.`},{name:`color`,defaultValue:`''`,description:`Single fill color override.`},{name:`badColor / avgColor / goodColor`,defaultValue:`red / amber / green`,description:`Score-based fill colors when color is not set.`},{name:`emptyColor`,defaultValue:`#cbd5e1`,description:`Unfilled icon color.`},{name:`spacing`,defaultValue:`0px`,description:`Gap between rating icons.`},{name:`size`,defaultValue:`medium`,description:`extra-small, small, medium, large, extra-large, or custom.`},{name:`customSize`,defaultValue:`30px`,description:`Exact size used when size is custom.`},{name:`readonly`,defaultValue:`false`,description:`Display value without interaction.`},{name:`showValue`,defaultValue:`false`,description:`For readonly ratings, render a compact summary with one icon and the value.`},{name:`count`,defaultValue:`undefined`,description:`Optional count shown beside a readonly compact summary.`},{name:`suffix`,defaultValue:`''`,description:`Optional label appended to count, such as reviews.`},{name:`disabled`,defaultValue:`false`,description:`Disable focus and interaction.`},{name:`clearable`,defaultValue:`false`,description:`Click the current value again to reset to zero.`},{name:`required`,defaultValue:`false`,description:`Require a value greater than zero for forms.`},{name:`errorText`,defaultValue:`Please select a rating`,description:`Inline validation message for required ratings.`},{name:`label`,defaultValue:`Rating`,description:`Accessible label for the slider.`},{name:`labels`,defaultValue:`[]`,description:`Meaning text from low to high, such as Poor through Excellent.`},{name:`showLabel`,defaultValue:`false`,description:`Show the matching meaning text for the current preview or selected value.`},{name:`name`,defaultValue:`''`,description:`Form field name. Web Components use ElementInternals when supported; DOM instances render a hidden input fallback.`},{name:`className`,defaultValue:`''`,description:`Extra class on the root rating control.`},{name:`customClass`,defaultValue:`undefined`,description:`Slot classes for root, item, icon, visible label, and validation error.`},{name:`onChange`,defaultValue:`undefined`,description:`Called with the new value after user changes.`},{name:`onHover`,defaultValue:`undefined`,description:`Called when hover or drag preview moves to a new value.`},{name:`onFocus`,defaultValue:`undefined`,description:`Called when the slider control receives focus.`},{name:`onBlur`,defaultValue:`undefined`,description:`Called when the slider control loses focus.`},{name:`onClear`,defaultValue:`undefined`,description:`Called when a non-zero value is cleared to zero.`},{name:`length / fractions / iconType`,defaultValue:`aliases`,description:`Migration aliases for max, precision, and icon.`}];methodRows=[{name:`setValue(value)`,description:`Set the selected value and update the UI.`},{name:`getValue()`,description:`Read the current selected value.`},{name:`update(options)`,description:`Patch options and re-render.`},{name:`clear()`,description:`Reset the selected value to zero.`},{name:`validate()`,description:`Show required validation and return whether the rating is valid.`},{name:`enable()`,description:`Clear disabled state.`},{name:`disable()`,description:`Set disabled state.`},{name:`focus()`,description:`Focus the accessible slider control.`},{name:`destroy()`,description:`Remove rendered DOM from the target.`},{name:`valueFromPosition(x, width, options)`,description:`Headless rating value helper for React Native and custom renderers.`},{name:`roundValue(value, precision)`,description:`Round a value to the configured rating precision.`},{name:`clampValue(value, max)`,description:`Clamp a value between zero and the maximum rating.`}];eventRows=[{name:`onChange(value)`,description:`JavaScript callback passed to starRate.create().`},{name:`onHover(value)`,description:`JavaScript callback when hover or drag preview changes.`},{name:`onFocus()`,description:`JavaScript callback when the rating receives focus.`},{name:`onBlur()`,description:`JavaScript callback when the rating loses focus.`},{name:`onClear()`,description:`JavaScript callback when the value clears to zero.`},{name:`universal-rating-change`,description:`Web Component CustomEvent with detail.value.`},{name:`universal-rating-hover`,description:`Web Component CustomEvent with detail.value for preview changes.`},{name:`universal-rating-focus`,description:`Web Component CustomEvent with the current detail.value.`},{name:`universal-rating-blur`,description:`Web Component CustomEvent with the current detail.value.`},{name:`universal-rating-clear`,description:`Web Component CustomEvent with detail.value set to 0.`}];constructor(){this.title.setTitle(`universal-rating | Universal Star Rating`),this.meta.updateTag({name:`description`,content:`Explore universal-rating: a framework-agnostic, accessible star rating package for JavaScript, Angular, React, Vue, and Web Components.`});let t=this.document.head.querySelector(`base`)?.getAttribute(`href`)??`/`;this.setPageLink(`icon`,`${t}universal-rating-favicon.svg`),this.setPageLink(`canonical`,`https://subha-patra.github.io/universal-rating/`),op({write:()=>this.scheduleBrowserFeatures()}),this.scheduleBrowserFeatures()}ngOnDestroy(){this.browserAbort.abort(),this.clearCopyResetTimeout(),this.destroyLiveExamples(),this.title.setTitle(this.previousTitle),this.previousDescription===null?this.meta.removeTag(`name="description"`):this.meta.updateTag({name:`description`,content:this.previousDescription}),this.restorePageLink(`icon`,this.previousIconHref),this.restorePageLink(`canonical`,this.previousCanonicalHref)}publishedAgo(t){let e=Math.max(0,Math.floor((Date.now()-Date.parse(t))/864e5)),n=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`});return e<7?n.format(-e,`day`):e<30?n.format(-Math.floor(e/7),`week`):e<365?n.format(-Math.floor(e/30),`month`):n.format(-Math.floor(e/365),`year`)}copyToClipboard(t){let e=globalThis.navigator?.clipboard;e?.writeText?e.writeText(t).catch(()=>this.copyWithTextarea(t)):this.copyWithTextarea(t),this.copiedValue.set(t),this.addEvent(`copied`,t),this.clearCopyResetTimeout(),this.copyResetTimeout=setTimeout(()=>this.copiedValue.set(null),1600)}scrollToTop(){let t=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1;window.scrollTo({top:0,behavior:t?`auto`:`smooth`})}scrollToSection(t){typeof document<`u`&&document.getElementById(t)?.scrollIntoView({behavior:`smooth`,block:`start`})}setMethodValue(){this.methodInstance?.setValue(4.5),this.lastAction.set(`setValue -> ${this.methodInstance?.getValue()??`missing`}`),this.addEvent(`setValue`,String(this.methodInstance?.getValue()??`missing`))}disableMethodRating(){this.methodInstance?.disable(),this.lastAction.set(`disable -> method rating disabled`),this.addEvent(`disable`,`method rating disabled`)}enableMethodRating(){this.methodInstance?.enable(),this.lastAction.set(`enable -> method rating enabled`),this.addEvent(`enable`,`method rating enabled`)}validateLiveExample(t){let e=this.liveInstanceByKey.get(t)?.validate()??!0;this.lastAction.set(`${t}: ${e?`valid`:`invalid`}`),this.addEvent(t,e?`valid`:`invalid`)}activeFramework(){return this.frameworkExamples.find(t=>t.id===this.activeFrameworkId())??this.frameworkExamples[0]}frameworkExamplesByCategory(t){return this.frameworkExamples.filter(e=>e.category===t)}selectFramework(t){let e=this.frameworkExamples.find(n=>n.id===t);e&&(this.activeFrameworkId.set(e.id),this.renderFrameworkPreview(e),this.lastAction.set(`framework -> ${e.name}`),this.addEvent(`framework`,e.name),e.canPreview&&!this.document.getElementById(`framework-preview-rating`)&&setTimeout(()=>this.renderFrameworkPreview(e)))}renderFrameworkPreview(t=this.activeFramework()){if(this.destroyFrameworkPreview(),!t.canPreview)return;let e=this.document.getElementById(`framework-preview-rating`);e&&(this.frameworkPreviewInstance=F.create(e,z(W$1(W$1({},g),t.previewOptions),{onChange:n=>{t.previewOptions?.onChange?.(n),this.lastAction.set(`${t.name}: ${n}`),this.addEvent(t.name,String(n))}})))}destroyFrameworkPreview(){this.frameworkPreviewInstance?.destroy(),this.frameworkPreviewInstance=null}renderLiveExamples(){this.destroyLiveExamples(),[...this.liveExamples,...this.themeExamples].forEach(e=>{let n=this.document.getElementById(`demo-${e.key}`);if(!n)return;let s=F.create(n,z(W$1({},e.options),{onChange:d=>{e.options.onChange?.(d),this.lastAction.set(`${e.title}: ${d}`),this.addEvent(e.key,String(d))}}));this.liveInstances.push(s),this.liveInstanceByKey.set(e.key,s)});let t=this.document.getElementById(`method-rating`);t&&(this.methodInstance=F.create(t,{value:2.5,precision:.5,label:`Method playground rating`,onChange:e=>this.addEvent(`method change`,String(e))})),this.renderFrameworkPreview()}destroyLiveExamples(){this.destroyFrameworkPreview(),this.liveInstances.splice(0).forEach(t=>t.destroy()),this.liveInstanceByKey.clear(),this.methodInstance?.destroy(),this.methodInstance=null}scheduleBrowserFeatures(){typeof window>`u`||setTimeout(()=>this.initializeBrowserFeatures(),75)}initializeBrowserFeatures(t=0){if(this.browserFeaturesInitialized||this.browserAbort.signal.aborted)return;let e=this.liveExamples[0];if(e&&!this.document.getElementById(`demo-${e.key}`)){t<10&&setTimeout(()=>this.initializeBrowserFeatures(t+1),50);return}this.browserFeaturesInitialized=!0,this.renderLiveExamples();try{W()}catch{}let n=()=>this.showScrollTop.set(window.scrollY>400);window.addEventListener(`scroll`,n,{passive:!0,signal:this.browserAbort.signal}),n();let s=typeof globalThis>`u`?window:globalThis,d=s.fetch?.bind(s);d&&w({fetcher:d,packageName:`universal-rating`,githubRepo:`subha-patra/universal-rating`,now:new Date,signal:this.browserAbort.signal}).then(c=>{this.browserAbort.signal.aborted||this.packageStats.set(c)})}addEvent(t,e){this.eventLog.update(n=>[{label:t,value:e},...n].slice(0,8))}setPageLink(t,e){let n=this.document.head.querySelector(`link[rel="${t}"]`);n||(n=this.document.createElement(`link`),n.rel=t,this.document.head.appendChild(n)),n.href=e,t===`icon`&&(n.type=`image/svg+xml`)}restorePageLink(t,e){let n=this.document.head.querySelector(`link[rel="${t}"]`);n&&(e===null?n.remove():n.setAttribute(`href`,e))}clearCopyResetTimeout(){this.copyResetTimeout&&(clearTimeout(this.copyResetTimeout),this.copyResetTimeout=null)}copyWithTextarea(t){let e=this.document.createElement(`textarea`);e.value=t,e.setAttribute(`readonly`,``),e.style.position=`fixed`,e.style.opacity=`0`,this.document.body.appendChild(e),e.select(),this.document.execCommand(`copy`),e.remove()}static ɵfac=function(e){return new(e||i)};static ɵcmp=cD({type:i,selectors:[[`app-star`]],decls:244,vars:19,consts:[[1,`star-docs`],[1,`intro`],[1,`eyebrow`],[1,`lead`],[`aria-label`,`Package statistics`,1,`package-stats`],[`data-testid`,`github-stars`,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`On this page`,1,`page-nav`],[`type`,`button`,3,`click`],[`type`,`button`,`data-testid`,`nav-rtl-example`,3,`click`],[`type`,`button`,`data-testid`,`scroll-to-top`,`title`,`Scroll to top`,`aria-label`,`Scroll to top`,1,`scroll-to-top`],[`id`,`install`,`aria-labelledby`,`install-title`,1,`docs-section`],[`id`,`install-title`],[1,`code-block`],[1,`code-toolbar`],[`type`,`button`,`data-testid`,`copy-install-command`,3,`click`],[`id`,`usage`,`aria-labelledby`,`usage-title`,1,`docs-section`],[`id`,`usage-title`],[1,`usage-grid`],[1,`snippet-note`],[`id`,`examples`,`aria-labelledby`,`examples-title`,1,`docs-section`],[`id`,`examples-title`],[`aria-live`,`polite`,1,`live-result`],[1,`example-list`],[`data-testid`,`docs-example-row`,1,`example-row`],[1,`example-subsection`],[1,`example-list`,`theme-example-list`],[`data-testid`,`theme-example-row`,1,`example-row`],[`id`,`frameworks`,`aria-labelledby`,`frameworks-title`,`data-testid`,`framework-workbench`,1,`docs-section`,`framework-section`],[`id`,`frameworks-title`],[1,`framework-shell`],[`aria-label`,`Framework examples`,1,`framework-tabs`],[1,`framework-group`],[1,`framework-panel`],[1,`framework-summary`],[`data-testid`,`active-framework-title`],[1,`support-badge`],[1,`framework-panel-body`],[1,`framework-live-card`],[1,`lifecycle-note`],[`data-testid`,`framework-preview`,1,`framework-preview`],[`id`,`framework-preview-rating`,1,`rating-stage`],[1,`headless-preview`],[1,`code-block`,`framework-code-block`],[`type`,`button`,`data-testid`,`copy-active-framework`,3,`click`],[`data-testid`,`active-framework-code`],[`aria-label`,`Framework compatibility matrix`,1,`compatibility-matrix`],[1,`compatibility-card`],[`id`,`configuration`,`aria-labelledby`,`configuration-title`,1,`docs-section`],[`id`,`configuration-title`],[1,`table-scroll`],[`id`,`methods`,`aria-labelledby`,`methods-title`,1,`docs-section`],[`id`,`methods-title`],[1,`method-grid`],[1,`method-card`],[`id`,`method-rating`,1,`rating-stage`],[1,`option-buttons`],[`type`,`button`,`data-testid`,`method-set-value`,3,`click`],[`type`,`button`,`data-testid`,`method-disable`,3,`click`],[`type`,`button`,`data-testid`,`method-enable`,3,`click`],[`id`,`events`,`aria-labelledby`,`events-title`,1,`docs-section`],[`id`,`events-title`],[`id`,`accessibility`,`aria-labelledby`,`accessibility-title`,1,`docs-section`],[`id`,`accessibility-title`],[`id`,`migration`,`aria-labelledby`,`migration-title`,1,`docs-section`],[`id`,`migration-title`],[`aria-labelledby`,`log-title`,1,`docs-section`,`result-section`],[`id`,`log-title`],[1,`event-log`],[3,`title`],[`data-testid`,`github-stars-image`,`src`,`https://img.shields.io/github/stars/subha-patra/universal-rating?style=social`,`alt`,`GitHub stars`,`height`,`20`],[`type`,`button`,`data-testid`,`scroll-to-top`,`title`,`Scroll to top`,`aria-label`,`Scroll to top`,1,`scroll-to-top`,3,`click`],[1,`example-detail`],[1,`rating-stage`,3,`id`],[1,`option-buttons`,`compact-actions`],[`type`,`button`,`data-testid`,`validate-required-example`,3,`click`],[1,`framework-chip-row`],[`type`,`button`,3,`active`],[1,`support-badge`,`compatibility-kind`],[`scope`,`row`]],template:function(e,n){if(e&1&&(Yc(0,`main`,0)(1,`header`,1)(2,`p`,2),WT(3,`Documentation and live examples `),Yc(4,`span`),WT(5,`v1.0.0`),Zc()(),Yc(6,`h1`),WT(7,`universal-rating`),Zc(),Yc(8,`p`,3),WT(9,`A framework-agnostic rating UI for JavaScript, Angular, React, Vue, Web Components, and static HTML.`),Zc(),Yc(10,`div`,4),XD(11,Ve,4,1,`span`),XD(12,Te,4,2,`span`),XD(13,Fe,4,1,`span`),XD(14,Le,2,2,`a`,5),Zc(),Yc(15,`nav`,6)(16,`button`,7),Fh(`click`,function(){return n.scrollToSection(`install`)}),WT(17,`Install`),Zc(),Yc(18,`button`,7),Fh(`click`,function(){return n.scrollToSection(`usage`)}),WT(19,`Usage`),Zc(),Yc(20,`button`,7),Fh(`click`,function(){return n.scrollToSection(`examples`)}),WT(21,`Examples`),Zc(),Yc(22,`button`,8),Fh(`click`,function(){return n.scrollToSection(`demo-rtl-support`)}),WT(23,`RTL`),Zc(),Yc(24,`button`,7),Fh(`click`,function(){return n.scrollToSection(`frameworks`)}),WT(25,`Frameworks`),Zc(),Yc(26,`button`,7),Fh(`click`,function(){return n.scrollToSection(`configuration`)}),WT(27,`API reference`),Zc()()(),XD(28,Ae,2,0,`button`,9),Yc(29,`section`,10)(30,`h2`,11),WT(31,`Download & install`),Zc(),Yc(32,`p`),WT(33,`Install the universal rating package. It has no Angular, React, or Vue runtime dependency.`),Zc(),Yc(34,`div`,12)(35,`div`,13)(36,`span`),WT(37,`Terminal`),Zc(),Yc(38,`button`,14),Fh(`click`,function(){return n.copyToClipboard(n.installCommand)}),WT(39),Zc()(),Yc(40,`pre`)(41,`code`),WT(42,`npm install universal-rating`),Zc()()()(),Yc(43,`section`,15)(44,`h2`,16),WT(45,`Usage`),Zc(),Yc(46,`p`),WT(47,`Use the root import for JavaScript APIs, or register the Web Component for HTML usage.`),Zc(),Yc(48,`div`,17)(49,`div`,12)(50,`div`,13)(51,`span`),WT(52,`JavaScript / TypeScript`),Zc(),Yc(53,`button`,7),Fh(`click`,function(){return n.copyToClipboard(n.usageSnippet)}),WT(54),Zc()(),Yc(55,`pre`)(56,`code`),WT(57),Zc()()(),Yc(58,`div`,12)(59,`div`,13)(60,`span`),WT(61,`Web Component`),Zc(),Yc(62,`button`,7),Fh(`click`,function(){return n.copyToClipboard(n.webComponentSnippet)}),WT(63),Zc()(),Yc(64,`pre`)(65,`code`),WT(66),Zc()()()(),Yc(67,`p`,18),WT(68,`Registered Web Components are form-associated through `),Yc(69,`code`),WT(70,`ElementInternals`),Zc(),WT(71,` when supported. Older browsers and `),Yc(72,`code`),WT(73,`starRate.create()`),Zc(),WT(74,` DOM instances keep the hidden-input fallback.`),Zc()(),Yc(75,`section`,19)(76,`h2`,20),WT(77,`Examples`),Zc(),Yc(78,`p`),WT(79,`Each row renders the real package output and keeps the copyable setup beside it.`),Zc(),Yc(80,`div`,21)(81,`span`),WT(82,`Last result`),Zc(),Yc(83,`strong`),WT(84),Zc()(),Yc(85,`div`,22),rT(86,ze,17,7,`article`,23,de),Zc(),Yc(88,`div`,24)(89,`h3`),WT(90,`Theme presets`),Zc(),Yc(91,`p`),WT(92,`Use a preset when you need the rating to look finished quickly. Direct color options still override the preset.`),Zc()(),Yc(93,`div`,25),rT(94,Ne,16,6,`article`,26,de),Zc()(),Yc(96,`section`,27)(97,`h2`,28),WT(98,`Framework Workbench`),Zc(),Yc(99,`p`),WT(100,`Choose your stack to see the right lifecycle pattern, live preview when the platform supports DOM, and copyable code.`),Zc(),Yc(101,`div`,29)(102,`div`,30),rT(103,$e,6,1,`div`,31,nT),Zc(),Yc(105,`div`,32)(106,`div`,33)(107,`div`)(108,`h3`,34),WT(109),Zc(),Yc(110,`p`),WT(111),Zc()(),Yc(112,`span`,35),WT(113),Zc()(),Yc(114,`div`,36)(115,`div`,37)(116,`p`,38)(117,`strong`),WT(118,`Lifecycle`),Zc(),Yc(119,`span`),WT(120),Zc()(),Yc(121,`div`,39),XD(122,Ue,1,0,`div`,40)(123,Be,5,1,`div`,41),Zc()(),Yc(124,`div`,42)(125,`div`,13)(126,`span`),WT(127),Zc(),Yc(128,`button`,43),Fh(`click`,function(){return n.copyToClipboard(n.activeFramework().code)}),WT(129),Zc()(),Yc(130,`pre`)(131,`code`,44),WT(132),Zc()()()()()(),Yc(133,`div`,45),rT(134,qe,6,1,`div`,46,nT),Zc()(),Yc(136,`section`,47)(137,`h2`,48),WT(138,`Configuration parameters`),Zc(),Yc(139,`p`),WT(140,`Pass these options to `),Yc(141,`code`),WT(142,`starRate.create()`),Zc(),WT(143,`. Migration aliases are supported for old `),Yc(144,`code`),WT(145,`angular-star`),Zc(),WT(146,` config names.`),Zc(),Yc(147,`div`,49)(148,`table`)(149,`thead`)(150,`tr`)(151,`th`),WT(152,`Option`),Zc(),Yc(153,`th`),WT(154,`Default`),Zc(),Yc(155,`th`),WT(156,`What it does`),Zc()()(),Yc(157,`tbody`),rT(158,Ke,9,3,`tr`,null,G),Zc()()()(),Yc(160,`section`,50)(161,`h2`,51),WT(162,`Methods`),Zc(),Yc(163,`p`),WT(164,`Keep the returned instance if you need to update the rating after rendering.`),Zc(),Yc(165,`div`,52)(166,`div`,53),Nh(167,`div`,54),Yc(168,`div`,55)(169,`button`,56),Fh(`click`,function(){return n.setMethodValue()}),WT(170,`setValue(4.5)`),Zc(),Yc(171,`button`,57),Fh(`click`,function(){return n.disableMethodRating()}),WT(172,`disable()`),Zc(),Yc(173,`button`,58),Fh(`click`,function(){return n.enableMethodRating()}),WT(174,`enable()`),Zc()()(),Yc(175,`div`,49)(176,`table`)(177,`thead`)(178,`tr`)(179,`th`),WT(180,`Method`),Zc(),Yc(181,`th`),WT(182,`Purpose`),Zc()()(),Yc(183,`tbody`),rT(184,Ge,6,2,`tr`,null,G),Zc()()()()(),Yc(186,`section`,59)(187,`h2`,60),WT(188,`Events`),Zc(),Yc(189,`p`),WT(190,`Use callbacks for the JavaScript API and CustomEvents for the Web Component.`),Zc(),Yc(191,`div`,49)(192,`table`)(193,`thead`)(194,`tr`)(195,`th`),WT(196,`Event`),Zc(),Yc(197,`th`),WT(198,`Meaning`),Zc()()(),Yc(199,`tbody`),rT(200,je,6,2,`tr`,null,G),Zc()()()(),Yc(202,`section`,61)(203,`h2`,62),WT(204,`Accessibility`),Zc(),Yc(205,`p`),WT(206,`Rendered ratings use `),Yc(207,`code`),WT(208,`role="slider"`),Zc(),WT(209,`, ARIA value attributes, readable labels, disabled/readonly states, and keyboard controls: Arrow keys, Home, End, Enter, and Space.`),Zc()(),Yc(210,`section`,63)(211,`h2`,64),WT(212,`Migration from angular-star`),Zc(),Yc(213,`p`)(214,`code`),WT(215,`angular-star`),Zc(),WT(216,` is replaced by `),Yc(217,`code`),WT(218,`universal-rating`),Zc(),WT(219,`. Use `),Yc(220,`code`),WT(221,`max`),Zc(),WT(222,` instead of `),Yc(223,`code`),WT(224,`length`),Zc(),WT(225,`, `),Yc(226,`code`),WT(227,`precision`),Zc(),WT(228,` instead of `),Yc(229,`code`),WT(230,`fractions`),Zc(),WT(231,`, and `),Yc(232,`code`),WT(233,`icon`),Zc(),WT(234,` instead of `),Yc(235,`code`),WT(236,`iconType`),Zc(),WT(237,`. The aliases still work during migration.`),Zc()(),Yc(238,`section`,65)(239,`h2`,66),WT(240,`Result log`),Zc(),Yc(241,`ul`,67),rT(242,Je,5,2,`li`,null,Ie),Zc()()()),e&2){let s,d,c;TE(11),eT((s=n.packageStats().version)?11:-1,s),TE(),eT((d=n.packageStats().updatedAt)?12:-1,d),TE(),eT(n.packageStats().downloads!==void 0?13:-1),TE(),eT((c=n.packageStats().stars)?14:-1,c),TE(14),eT(n.showScrollTop()?28:-1),TE(11),ig(n.copiedValue()===n.installCommand?`Copied`:`Copy`),TE(15),ig(n.copiedValue()===n.usageSnippet?`Copied`:`Copy`),TE(3),ig(n.usageSnippet),TE(6),ig(n.copiedValue()===n.webComponentSnippet?`Copied`:`Copy`),TE(3),ig(n.webComponentSnippet),TE(18),ig(n.lastAction()),TE(2),oT(n.liveExamples),TE(8),oT(n.themeExamples),TE(9),oT(n.frameworkCategories),TE(6),ig(n.activeFramework().name),TE(2),ig(n.activeFramework().description),TE(2),ig(n.activeFramework().supportKind),TE(7),ig(n.activeFramework().lifecycle),TE(2),eT(n.activeFramework().canPreview?122:123),TE(5),tl(``,n.activeFramework().name,` example`),TE(2),ig(n.copiedValue()===n.activeFramework().code?`Copied`:`Copy`),TE(3),ig(n.activeFramework().code),TE(2),oT(n.frameworkCategories),TE(24),oT(n.configRows),TE(26),oT(n.methodRows),TE(16),oT(n.eventRows),TE(42),oT(n.eventLog())}},styles:[`.star-docs[_ngcontent-%COMP%]{min-height:100vh;background:#f6f8fb;color:#1f2937;font:16px/1.6 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:36px clamp(16px,4vw,56px) 100px}.intro[_ngcontent-%COMP%], .docs-section[_ngcontent-%COMP%]{max-width:1040px;margin-inline:auto}.intro[_ngcontent-%COMP%]{padding-top:18px}.eyebrow[_ngcontent-%COMP%]{color:#9f2d5d;font-size:12px;font-weight:800;margin:0 0 12px;text-transform:uppercase}.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6b7280;margin-left:8px}h1[_ngcontent-%COMP%]{color:#141b2d;font-size:clamp(44px,6vw,68px);line-height:1;margin:0}.lead[_ngcontent-%COMP%]{color:#566174;font-size:19px;max-width:740px;margin:18px 0 0}.package-stats[_ngcontent-%COMP%], .page-nav[_ngcontent-%COMP%], .option-buttons[_ngcontent-%COMP%], .live-result[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.package-stats[_ngcontent-%COMP%]{color:#667085;gap:8px 22px;margin-top:20px;min-height:24px;font-size:13px}.package-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#ba2865;font-weight:750}.package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex}.page-nav[_ngcontent-%COMP%]{border-bottom:1px solid #dbe2ec;gap:8px;margin-top:30px;padding-bottom:14px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;font:inherit}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:0;color:#42506a;font-size:14px;font-weight:700;padding:6px 10px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{color:#ba2865;text-decoration:underline}.scroll-to-top[_ngcontent-%COMP%]{align-items:center;background:#fff;border:1px solid #cbd5e1;border-radius:50%;bottom:calc(20px + env(safe-area-inset-bottom));box-shadow:0 8px 24px #25345424;color:#334155;cursor:pointer;display:flex;font:22px/1 system-ui,sans-serif;height:44px;justify-content:center;position:fixed;right:calc(20px + env(safe-area-inset-right));width:44px;z-index:20}.docs-section[_ngcontent-%COMP%]{border-top:1px solid #dbe2ec;padding:48px 0 54px;scroll-margin-top:18px}.docs-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#4b5568;font-size:27px;font-weight:600;line-height:1.2;margin:0 0 14px;text-align:center;text-transform:uppercase}.docs-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#596477;margin:0 auto 26px;max-width:800px;text-align:center}.usage-grid[_ngcontent-%COMP%], .method-grid[_ngcontent-%COMP%]{display:grid;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr))}.code-block[_ngcontent-%COMP%]{background:#252b36;border:1px solid #222834;border-radius:5px;min-width:0;overflow:hidden}.code-toolbar[_ngcontent-%COMP%]{align-items:center;background:#1f2530;color:#c5ceda;display:flex;font-size:11px;font-weight:800;justify-content:space-between;min-height:32px;padding-left:12px;text-transform:uppercase}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:stretch;background:transparent;border:0;border-left:1px solid #394150;color:#f8fafc;font-size:12px;font-weight:800;min-width:62px;padding:7px 12px}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{background:#3b4659}pre[_ngcontent-%COMP%]{color:#e5edf7;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;margin:0;overflow:auto;padding:13px 14px;tab-size:2}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{white-space:pre}code[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.live-result[_ngcontent-%COMP%]{background:#eef2f7;border-left:3px solid #ba2865;color:#526073;gap:14px;margin-bottom:16px;padding:9px 14px}.live-result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:850;text-transform:uppercase}.live-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263247;font-size:14px;overflow-wrap:anywhere}.example-list[_ngcontent-%COMP%], .integration-list[_ngcontent-%COMP%]{border-top:1px solid #dbe2ec}.example-subsection[_ngcontent-%COMP%]{border-top:1px solid #dbe2ec;margin-top:26px;padding:28px 0 14px;text-align:center}.example-subsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#344258;font-size:21px;line-height:1.25;margin:0 0 8px}.example-subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#667085;margin:0 auto;max-width:680px}.theme-example-list[_ngcontent-%COMP%]{border-top:0}.example-row[_ngcontent-%COMP%]{align-items:start;border-bottom:1px solid #dbe2ec;display:grid;gap:24px;grid-template-columns:minmax(240px,300px) minmax(0,1fr);padding:24px 0}.example-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;line-height:1.25;margin:0 0 7px}.example-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#667085;font-size:14px;line-height:1.5;margin:0 0 16px}.rating-stage[_ngcontent-%COMP%], .method-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #d5deeb;border-radius:6px;box-shadow:0 5px 16px #20314c10}.rating-stage[_ngcontent-%COMP%]{display:grid;min-height:92px;place-items:center;padding:16px}[_nghost-%COMP%]     .review-rating{background:#fff1f2;border:1px solid #fecdd3;border-radius:999px;padding:9px 12px}[_nghost-%COMP%]     .review-rating__item{filter:drop-shadow(0 4px 8px rgba(190,24,93,.18))}[_nghost-%COMP%]     .review-rating__icon{transform:scale(.92)}[_nghost-%COMP%]     .review-rating__label{color:#9f1239;letter-spacing:0;text-align:center}[_nghost-%COMP%]     .review-rating__error{color:#be123c;text-align:center}.framework-section[_ngcontent-%COMP%]{border-top:0}.framework-shell[_ngcontent-%COMP%]{background:#fff;border:1px solid #d8e0eb;border-radius:8px;overflow:hidden}.framework-tabs[_ngcontent-%COMP%]{border-bottom:1px solid #dbe3ee;display:grid;gap:12px;padding:18px}.framework-group[_ngcontent-%COMP%]{align-items:start;display:grid;gap:14px;grid-template-columns:130px minmax(0,1fr)}.framework-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#64748b;font-size:11px;font-weight:850;padding-top:9px;text-transform:uppercase}.framework-chip-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.framework-chip-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:1px solid #cbd5e1;border-radius:999px;color:#334155;flex:0 0 auto;font:inherit;font-size:13px;font-weight:750;min-height:34px;padding:6px 12px}.framework-chip-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .framework-chip-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{border-color:#ba2865;color:#9f2d5d}.framework-chip-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#ba2865;border-color:#ba2865;color:#fff}.framework-panel[_ngcontent-%COMP%]{display:grid;gap:18px;padding:22px}.framework-summary[_ngcontent-%COMP%]{align-items:start;display:flex;gap:16px;justify-content:space-between}.framework-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#182236;font-size:24px;line-height:1.2;margin:0 0 5px}.framework-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .lifecycle-note[_ngcontent-%COMP%]{color:#5b6679;margin:0}.framework-panel-body[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:minmax(280px,.85fr) minmax(0,1.15fr)}.framework-live-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #dbe3ee;border-radius:7px;display:grid;gap:14px;padding:16px}.lifecycle-note[_ngcontent-%COMP%]{background:#fff;border:1px solid #e2e8f0;border-radius:6px;display:grid;gap:3px;padding:10px 12px}.lifecycle-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#9f2d5d;font-size:11px;text-transform:uppercase}.support-badge[_ngcontent-%COMP%]{background:#eff6ff;border:1px solid #bfdbfe;border-radius:999px;color:#1d4ed8;flex:0 0 auto;font-size:12px;font-weight:850;padding:4px 9px}.framework-preview[_ngcontent-%COMP%]{background:#fff;border:1px solid #dbe2ec;border-radius:6px;display:grid;min-height:152px;padding:16px;place-items:center;text-align:center}.compatibility-matrix[_ngcontent-%COMP%]{display:grid;gap:14px;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:18px}.compatibility-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #dbe3ee;border-radius:7px;padding:14px}.compatibility-matrix[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;gap:6px;list-style:none;margin:0;padding:0}.compatibility-matrix[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:space-between}.table-scroll[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;font-size:14px;text-align:left;width:100%}thead[_ngcontent-%COMP%]{background:#fff;color:#465269}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-bottom:1px solid #e0e6ef;padding:11px 14px;vertical-align:top}tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#ba2865;min-width:210px}td[_ngcontent-%COMP%]{color:#4f5a69}td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef2f7;border-radius:3px;overflow-wrap:anywhere;padding:2px 4px}.method-card[_ngcontent-%COMP%]{align-self:start;padding:18px}.option-buttons[_ngcontent-%COMP%]{gap:8px;margin-top:14px}.compact-actions[_ngcontent-%COMP%]{justify-content:center;margin-top:10px}.option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:1px solid #cdd6e5;border-radius:4px;color:#33435f;font-size:13px;font-weight:700;min-height:36px;padding:7px 12px}.option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{border-color:#ba2865;color:#9f2d5d}.event-log[_ngcontent-%COMP%]{list-style:none;margin:0 auto;max-width:820px;padding:0}.event-log[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #dbe2ec;display:flex;gap:16px;justify-content:space-between;padding:9px 0}.event-log[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{overflow-wrap:anywhere}@media(max-width:780px){.star-docs[_ngcontent-%COMP%]{padding-inline:16px}.usage-grid[_ngcontent-%COMP%], .method-grid[_ngcontent-%COMP%], .example-row[_ngcontent-%COMP%], .framework-panel-body[_ngcontent-%COMP%], .compatibility-matrix[_ngcontent-%COMP%]{grid-template-columns:1fr}.example-row[_ngcontent-%COMP%]{gap:12px}.framework-group[_ngcontent-%COMP%]{grid-template-columns:1fr}.framework-chip-row[_ngcontent-%COMP%]{flex-wrap:nowrap;overflow-x:auto;padding-bottom:2px}.framework-summary[_ngcontent-%COMP%]{display:grid}}@media(max-width:480px){.docs-section[_ngcontent-%COMP%]{padding-block:34px}.docs-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-inline:5px}.event-log[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:grid;gap:0}}`]})};export{ce as Star};