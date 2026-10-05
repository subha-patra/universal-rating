import{Bt as oT,Jt as rT,M as Ou,Mt as ky,N as PT,Ot as ig,Ut as pT,V as TE,Vt as op,X as XD,Y as WT,a as hs,en as tl,ft as cD,ht as dT,i as fs,jt as kh,k as Nh,mt as ct,q as W$1,qt as qo,rn as v,rt as Zc,st as bh,tt as Yc,v as Fh,vt as eT,z as Ru,zt as nT}from"./main-YSHLP5MR.js";import{t as w}from"./chunk-C_lZfJfI.js";var d={title:``,subtitle:``,message:``,footer:``,inputLabel:``,inputPlaceholder:``,inputValue:null,inputOptions:{},type:`success`,timeout:4e3,toast:!1,position:`center`,transition:`slide`,theme:`default`,buttons:null,showIcon:!0,showDenyButton:!1,showCloseButton:!1,showProgressBar:!0,showConfirmButton:!1,showCancelButton:!1,confirmButtonText:`Confirm`,okButtonText:`OK`,cancelButtonText:`Cancel`,denyButtonText:`Deny`,ariaLabel:``,confirmAriaLabel:``,denyAriaLabel:``,cancelAriaLabel:``,okAriaLabel:``,closeAriaLabel:``,confirmButtonClass:``,denyButtonClass:``,cancelButtonClass:``,okButtonClass:``,closeButtonClass:``,buttonVariant:`solid`,confirmButtonVariant:`solid`,denyButtonVariant:`solid`,cancelButtonVariant:`solid`,okButtonVariant:`solid`,pauseOnHover:!0,pauseOnFocus:!0,customClass:``};var W=`quick-alert-styles`;var Y=`http://www.w3.org/2000/svg`;var X={success:[`M20 6 9 17l-5-5`],error:[`M12 8v5`,`M12 17h.01`],warning:[`M12 8v5`,`M12 17h.01`],info:[`M12 11v6`,`M12 7h.01`],question:[`M9.5 9a2.5 2.5 0 1 1 4.1 1.9c-.8.5-1.6 1.2-1.6 2.1`,`M12 17h.01`]};var Z=`
.quick-alert-root {
  --quick-alert-color: #101010;
  --quick-alert-muted-color: #5f6470;
  --quick-alert-surface: #ffffff;
  --quick-alert-toast-surface: rgba(246, 246, 246, 0.95);
  --quick-alert-overlay: rgba(0, 0, 0, 0.45);
  --quick-alert-progress: #101010;
  --quick-alert-button-bg: #101010;
  --quick-alert-button-hover-bg: #4b5563;
  --quick-alert-button-color: #ffffff;
  --quick-alert-danger: #d92d20;
  --quick-alert-success: #16803c;
  --quick-alert-warning: #b7791f;
  --quick-alert-info: #2563eb;
  color: var(--quick-alert-color);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.quick-alert-theme-dark {
  --quick-alert-color: #f8fafc;
  --quick-alert-muted-color: #cbd5e1;
  --quick-alert-surface: #0f172a;
  --quick-alert-toast-surface: rgba(15, 23, 42, 0.96);
  --quick-alert-overlay: rgba(2, 6, 23, 0.68);
  --quick-alert-progress: #38bdf8;
  --quick-alert-button-bg: #f8fafc;
  --quick-alert-button-hover-bg: #cbd5e1;
  --quick-alert-button-color: #0f172a;
}

.quick-alert-theme-success {
  --quick-alert-color: #064e3b;
  --quick-alert-muted-color: #047857;
  --quick-alert-surface: #ecfdf5;
  --quick-alert-toast-surface: rgba(236, 253, 245, 0.96);
  --quick-alert-progress: #059669;
  --quick-alert-button-bg: #047857;
  --quick-alert-button-hover-bg: #065f46;
}

.quick-alert-theme-minimal {
  --quick-alert-overlay: rgba(15, 23, 42, 0.25);
  --quick-alert-progress: #64748b;
  box-shadow: none;
}

.quick-alert-theme-glass {
  --quick-alert-surface: rgba(255, 255, 255, 0.76);
  --quick-alert-toast-surface: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
}

.quick-alert-theme-material {
  border-radius: 4px;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.26);
}

.quick-alert-theme-bootstrap {
  --quick-alert-button-bg: #0d6efd;
  --quick-alert-button-hover-bg: #0b5ed7;
  border-radius: 6px;
}

.quick-alert-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: var(--quick-alert-overlay);
  backdrop-filter: blur(8px);
}

.quick-alert-card {
  box-sizing: border-box;
  position: fixed;
  z-index: 10001;
  width: min(calc(100vw - 32px), 420px);
  border: 1px solid rgba(17, 24, 39, 0.14);
  border-radius: 12px;
  background: var(--quick-alert-surface);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.24);
  padding: 28px;
  text-align: center;
  overflow: hidden;
}

.quick-alert-toast {
  width: min(calc(100vw - 32px), 360px);
  padding: 14px 16px;
  background: var(--quick-alert-toast-surface);
  text-align: left;
  border-top: 3px solid var(--quick-alert-progress);
  box-shadow: 0 16px 48px rgba(15, 23, 42, 0.18);
}

.quick-alert-toast-stack {
  position: fixed;
  z-index: 10001;
  display: grid;
  gap: 12px;
  width: min(calc(100vw - 32px), 360px);
  pointer-events: none;
}

.quick-alert-toast-stack .quick-alert-item,
.quick-alert-toast-stack .quick-alert-toast {
  pointer-events: auto;
}

.quick-alert-toast-stack .quick-alert-toast {
  position: relative;
  inset: auto;
  transform: none;
  width: 100%;
}

.quick-alert-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.quick-alert-top-right {
  top: max(20px, env(safe-area-inset-top));
  right: max(20px, env(safe-area-inset-right));
}

.quick-alert-top-left {
  top: max(20px, env(safe-area-inset-top));
  left: max(20px, env(safe-area-inset-left));
}

.quick-alert-bottom-right {
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
}

.quick-alert-bottom-left {
  bottom: max(20px, env(safe-area-inset-bottom));
  left: max(20px, env(safe-area-inset-left));
}

.quick-alert-center-left {
  top: 50%;
  left: max(20px, env(safe-area-inset-left));
  transform: translateY(-50%);
}

.quick-alert-center-right {
  top: 50%;
  right: max(20px, env(safe-area-inset-right));
  transform: translateY(-50%);
}

.quick-alert-top-center {
  top: max(20px, env(safe-area-inset-top));
  left: 50%;
  transform: translateX(-50%);
}

.quick-alert-bottom-center {
  bottom: max(20px, env(safe-area-inset-bottom));
  left: 50%;
  transform: translateX(-50%);
}

.quick-alert-slide {
  animation: quick-alert-slide-in 160ms ease-out;
}

.quick-alert-fade {
  animation: quick-alert-fade-in 160ms ease-out;
}

.quick-alert-header {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.quick-alert-toast .quick-alert-header {
  justify-content: flex-start;
  margin-bottom: 6px;
}

.quick-alert-icon {
  display: inline-flex;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 999px;
  border: 1px solid currentColor;
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
}

.quick-alert-icon svg {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.25;
}

.quick-alert-toast .quick-alert-icon {
  width: 36px;
  height: 36px;
}

.quick-alert-toast .quick-alert-icon svg {
  width: 20px;
  height: 20px;
}

.quick-alert-icon-success {
  color: var(--quick-alert-success);
}

.quick-alert-icon-error {
  color: var(--quick-alert-danger);
}

.quick-alert-icon-warning {
  color: var(--quick-alert-warning);
}

.quick-alert-icon-info,
.quick-alert-icon-question {
  color: var(--quick-alert-info);
}

.quick-alert-copy {
  min-width: 0;
}

.quick-alert-title {
  margin: 0;
  color: var(--quick-alert-color);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
}

.quick-alert-toast .quick-alert-title {
  font-size: 15px;
}

.quick-alert-subtitle,
.quick-alert-message,
.quick-alert-footer {
  color: var(--quick-alert-muted-color);
}

.quick-alert-subtitle {
  margin-top: 4px;
  font-size: 15px;
  font-weight: 500;
}

.quick-alert-message {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
}

.quick-alert-footer {
  margin-top: 12px;
  font-size: 12px;
}

.quick-alert-input-wrap {
  margin-top: 16px;
  text-align: left;
}

.quick-alert-input-label {
  display: block;
  margin-bottom: 7px;
  color: var(--quick-alert-color);
  font-size: 13px;
  font-weight: 700;
}

.quick-alert-checkbox-label {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 0;
}

.quick-alert-input {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.2);
  border-radius: 7px;
  background: var(--quick-alert-surface);
  color: var(--quick-alert-color);
  font: inherit;
  font-size: 14px;
  line-height: 1.35;
  padding: 10px 11px;
}

.quick-alert-input[type="checkbox"] {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  accent-color: var(--quick-alert-button-bg);
}

.quick-alert-textarea {
  min-height: 92px;
  resize: vertical;
}

.quick-alert-input:focus-visible {
  border-color: var(--quick-alert-button-bg);
  outline: 3px solid rgba(37, 99, 235, 0.18);
}

.quick-alert-input[aria-invalid="true"] {
  border-color: var(--quick-alert-danger);
}

.quick-alert-input-error {
  margin-top: 7px;
  color: var(--quick-alert-danger);
  font-size: 12px;
  font-weight: 650;
}

.quick-alert-input-error[hidden] {
  display: none;
}

.quick-alert-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 18px;
}

.quick-alert-button {
  border: 0;
  border-radius: 6px;
  background: var(--quick-alert-button-bg);
  color: var(--quick-alert-button-color);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 12px;
}

.quick-alert-button-outline {
  border: 1px solid currentColor;
  background: transparent;
  color: var(--quick-alert-button-bg);
}

.quick-alert-button-ghost {
  background: transparent;
  color: var(--quick-alert-color);
}

.quick-alert-button[disabled],
.quick-alert-close[disabled] {
  cursor: wait;
  opacity: 0.68;
}

.quick-alert-button:hover,
.quick-alert-button:focus-visible {
  background: var(--quick-alert-button-hover-bg);
}

.quick-alert-button-outline:hover,
.quick-alert-button-outline:focus-visible,
.quick-alert-button-ghost:hover,
.quick-alert-button-ghost:focus-visible {
  background: rgba(15, 23, 42, 0.08);
}

.quick-alert-loading {
  cursor: wait;
}

.quick-alert-close {
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.07);
  color: var(--quick-alert-color);
  cursor: pointer;
  font: inherit;
  font-size: 18px;
  line-height: 1;
}

.quick-alert-progress {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 3px;
  background: rgba(15, 23, 42, 0.12);
}

.quick-alert-progress-bar {
  width: 100%;
  height: 100%;
  background: var(--quick-alert-progress);
  transition: width 80ms linear;
}

@keyframes quick-alert-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes quick-alert-slide-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; }
}

@media (max-width: 640px) {
  .quick-alert-top-right,
  .quick-alert-top-left,
  .quick-alert-bottom-right,
  .quick-alert-bottom-left,
  .quick-alert-top-center,
  .quick-alert-bottom-center {
    right: max(16px, env(safe-area-inset-right));
    left: max(16px, env(safe-area-inset-left));
    transform: none;
    width: auto;
  }

  .quick-alert-center-left,
  .quick-alert-center-right {
    right: max(16px, env(safe-area-inset-right));
    left: max(16px, env(safe-area-inset-left));
    width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .quick-alert-slide,
  .quick-alert-fade {
    animation: none;
  }

  .quick-alert-progress-bar {
    transition: none;
  }
}
`;var V=class c{static controllers=new Set;static modalQueue=[];static inertedElements=new WeakMap;static idCounter=0;static domIdCounter=0;active=new Map;configuredDefaults={};listeningForKeys=!1;constructor(e={}){this.configuredDefaults=W$1({},e),c.controllers.add(this)}handleKeydown=e=>{let t=this.latestModal();if(t){if(e.key===`Escape`){if(e.preventDefault(),t.loadingAction||t.pendingAction)return;this.finish(t,`close`,`escape`);return}if(e.key===`Enter`){let n=t.card.ownerDocument.activeElement;if(n instanceof HTMLTextAreaElement||t.loadingAction||t.pendingAction)return;let i=n instanceof HTMLElement?n.closest(`[data-quick-alert-action]`):null,l=i&&t.card.contains(i)?i.getAttribute(`data-quick-alert-action`):this.resolveActions(t.options)[0]??null;l&&(e.preventDefault(),this.handleActionById(t.id,l));return}e.key===`Tab`&&this.trapFocus(e,t.card)}};fire(e={}){let t=this.getDocument();if(!t?.body)return Promise.resolve(this.result(`quick-alert-ssr`,`close`,`api-close`));let n=this.normalizeOptions(W$1(W$1({},this.configuredDefaults),e));this.ensureStyles(t),this.closeExistingById(n.id);let i=this.ensureRoot(t),l=c.activeModalForDocument(t),s=t.activeElement instanceof HTMLElement?t.activeElement:null,f=!n.toast&&l?.previousFocus?.isConnected?l.previousFocus:s;return new Promise(x=>{if(!n.toast&&l){c.modalQueue.push({controller:this,doc:t,options:n,previousFocus:f,resolve:x});return}this.activateRecord(t,i,n,f,x)})}close(e){if(e){this.resolveQueuedById(e),this.finishActiveById(e);return}let t=Array.from(this.active.values()).at(-1);t&&this.finish(t,`close`,`api-close`)}closeAll(){let e=[...c.modalQueue];c.modalQueue=[],e.forEach(t=>t.controller.completeQueued(t)),c.controllers.forEach(t=>{Array.from(t.active.values()).forEach(n=>t.finish(n,`close`,`api-close`))})}configure(e={}){this.configuredDefaults=W$1({},e)}resetConfig(){this.configuredDefaults={}}activateRecord(e,t,n,i,l){let s=this.render(e,n,i,l);this.active.set(s.id,s),n.toast?this.ensureToastStack(e,t,n.position).appendChild(s.item):t.appendChild(s.item),this.syncKeyListener(),this.syncDocumentInert(e),this.startTimers(s),this.safeCall(()=>n.onOpen?.({id:s.id,element:s.item,card:s.card})),this.focusInitialAction(s)}render(e,t,n,i){let l=e.createElement(`div`);if(l.className=`quick-alert-item`,!t.toast){let F=e.createElement(`div`);F.className=this.classNames(`quick-alert-overlay`,this.customClassFor(t,`overlay`)),l.appendChild(F)}let s=e.createElement(`section`);s.className=this.cardClass(e,t),s.dataset.quickAlertId=t.id,s.setAttribute(`data-quick-alert-id`,t.id),s.tabIndex=-1,t.toast?(s.setAttribute(`role`,`status`),s.setAttribute(`aria-live`,`polite`)):(s.setAttribute(`role`,`alertdialog`),s.setAttribute(`aria-modal`,`true`));let f=this.nextDomId(t.id),x=`quick-alert-title-${f}`,y=`quick-alert-message-${f}`,g=`quick-alert-input-${f}`,h=`quick-alert-input-label-${f}`,J=`quick-alert-input-error-${f}`;return this.renderCloseButton(e,s,t),this.renderContent(e,s,t,x,y,g,h,J),t.toast||(t.title&&s.setAttribute(`aria-labelledby`,x),(t.message||t.content!==void 0)&&s.setAttribute(`aria-describedby`,y),this.renderActions(e,s,t)),l.appendChild(s),{id:t.id,options:t,item:l,card:s,previousFocus:n,resolve:i,timeouts:[],intervals:[],listeners:[],loadingAction:null,pendingAction:null,timer:null}}renderCloseButton(e,t,n){if(!n.showCloseButton)return;let i=e.createElement(`button`);i.className=this.classNames(`quick-alert-close`,this.customClassFor(n,`closeButton`),n.closeButtonClass),i.type=`button`,i.textContent=`x`,i.setAttribute(`aria-label`,n.closeAriaLabel||`Close alert`),i.setAttribute(`data-quick-alert-action`,`close`),i.addEventListener(`click`,()=>this.finishById(n.id,`close`,`close-button`)),t.appendChild(i)}renderContent(e,t,n,i,l,s,f,x){let y=e.createElement(`div`);y.className=`quick-alert-header`,n.showIcon&&y.appendChild(this.renderIcon(e,n));let g=e.createElement(`div`);if(g.className=`quick-alert-copy`,n.title){let h=e.createElement(`h2`);h.className=this.classNames(`quick-alert-title`,this.customClassFor(n,`title`)),h.id=i,h.textContent=n.title,g.appendChild(h)}else t.setAttribute(`aria-label`,n.ariaLabel||`${n.type} alert`);if(n.subtitle){let h=e.createElement(`div`);h.className=this.classNames(`quick-alert-subtitle`,this.customClassFor(n,`subtitle`)),h.textContent=n.subtitle,g.appendChild(h)}if(y.appendChild(g),t.appendChild(y),n.content!==void 0||n.message){let h=e.createElement(`div`);h.className=this.classNames(`quick-alert-message`,this.customClassFor(n,`message`)),h.id=l,n.content!==void 0?this.appendContent(e,h,n.id,n.content):h.textContent=n.message,t.appendChild(h)}if(this.renderInput(e,t,n,s,f,x),n.footer){let h=e.createElement(`div`);h.className=this.classNames(`quick-alert-footer`,this.customClassFor(n,`footer`)),h.textContent=n.footer,t.appendChild(h)}}renderInput(e,t,n,i,l,s){if(!n.input)return;let f=e.createElement(`div`);f.className=`quick-alert-input-wrap`;let x=this.createInputControl(e,n,i,l,s);if(n.input===`checkbox`){let g=e.createElement(`label`);g.className=this.classNames(`quick-alert-input-label`,`quick-alert-checkbox-label`,this.customClassFor(n,`inputLabel`)),g.id=l,g.appendChild(x),g.appendChild(e.createTextNode(n.inputLabel||`Confirm`)),f.appendChild(g)}else{if(n.inputLabel){let g=e.createElement(`label`);g.className=this.classNames(`quick-alert-input-label`,this.customClassFor(n,`inputLabel`)),g.id=l,g.htmlFor=i,g.textContent=n.inputLabel,f.appendChild(g)}f.appendChild(x)}let y=e.createElement(`div`);y.id=s,y.className=this.classNames(`quick-alert-input-error`,this.customClassFor(n,`inputError`)),y.setAttribute(`role`,`alert`),y.setAttribute(`aria-live`,`assertive`),y.setAttribute(`aria-atomic`,`true`),y.hidden=!0,f.appendChild(y),t.appendChild(f)}createInputControl(e,t,n,i,l){let s=t.input===`textarea`?e.createElement(`textarea`):t.input===`select`?e.createElement(`select`):e.createElement(`input`);return s.id=n,s.className=this.classNames(`quick-alert-input`,`quick-alert-input-${t.input}`,t.input===`textarea`&&`quick-alert-textarea`,this.customClassFor(t,`input`)),s.setAttribute(`data-quick-alert-input`,``),s.setAttribute(`aria-invalid`,`false`),s.setAttribute(`data-quick-alert-input-error`,l),t.inputLabel&&s.setAttribute(`aria-labelledby`,i),s instanceof HTMLInputElement?(s.type=t.input??`text`,t.inputPlaceholder&&t.input!==`checkbox`&&(s.placeholder=t.inputPlaceholder),t.input===`checkbox`?s.checked=!!t.inputValue:t.inputValue!==null&&t.inputValue!==void 0&&(s.value=String(t.inputValue))):s instanceof HTMLTextAreaElement?(t.inputPlaceholder&&(s.placeholder=t.inputPlaceholder),s.value=t.inputValue===null||t.inputValue===void 0?``:String(t.inputValue)):(this.normalizeInputOptions(t.inputOptions).forEach(f=>{let x=e.createElement(`option`);x.value=f.value,x.textContent=f.label,x.disabled=f.disabled===!0,s.appendChild(x)}),t.inputValue!==null&&t.inputValue!==void 0&&(s.value=String(t.inputValue))),s.addEventListener(`input`,()=>this.clearInputErrorByControl(s)),s.addEventListener(`change`,()=>this.clearInputErrorByControl(s)),s}appendContent(e,t,n,i){let l=typeof i==`function`?i({id:n,document:e}):i;if(typeof l==`string`){t.textContent=l;return}t.appendChild(l)}renderIcon(e,t){let n=e.createElement(`span`);n.className=this.classNames(`quick-alert-icon`,`quick-alert-icon-${t.type}`,this.customClassFor(t,`icon`)),n.setAttribute(`aria-hidden`,`true`);let i=e.createElementNS(Y,`svg`);return i.setAttribute(`viewBox`,`0 0 24 24`),i.setAttribute(`focusable`,`false`),X[t.type].forEach(l=>{let s=e.createElementNS(Y,`path`);s.setAttribute(`d`,l),i.appendChild(s)}),n.appendChild(i),n}renderActions(e,t,n){let i=this.resolveActions(n);if(!i.length)return;let l=e.createElement(`div`);l.className=this.classNames(`quick-alert-actions`,this.customClassFor(n,`actions`)),i.forEach(s=>{l.appendChild(this.actionButton(e,n,s,this.labelForAction(n,s)))}),t.appendChild(l)}actionButton(e,t,n,i){let l=e.createElement(`button`),s=this.variantForAction(t,n);return l.className=this.classNames(`quick-alert-button`,`quick-alert-button-${n}`,`quick-alert-button-${s}`,this.customClassFor(t,this.buttonClassSlot(n)),this.directButtonClass(t,n)),l.type=`button`,l.textContent=i,l.setAttribute(`aria-label`,this.ariaLabelForAction(t,n,i)),l.setAttribute(`data-quick-alert-action`,n),l.addEventListener(`click`,()=>{this.handleActionById(t.id,n)}),l}async handleActionById(e,t){let n=this.active.get(e);if(!n||n.loadingAction||n.pendingAction)return;let i=this.shouldSubmitInput(n,t),l=i?this.inputValue(n):null;n.pendingAction=t;try{if(i&&!await this.validateInput(n,l??null))return;let s=this.hookForAction(n.options,t);if(!s){this.finish(n,t,this.dismissedByForAction(t),l,i);return}if(this.setLoading(n,t,!0),await s(l,{id:n.id})===!1){this.setLoading(n,t,!1);return}this.finish(n,t,this.dismissedByForAction(t),l,i)}catch{this.active.has(n.id)&&this.setLoading(n,t,!1)}finally{this.active.has(n.id)&&(n.pendingAction=null)}}resolveActions(e){if(e.buttons)switch(e.buttons){case`none`:return[];case`ok`:return[`ok`];case`confirm`:return[`confirm`];case`confirm-cancel`:return[`confirm`,`cancel`];case`confirm-deny-cancel`:return[`confirm`,`deny`,`cancel`]}let t=[e.showConfirmButton?`confirm`:`ok`];return e.showDenyButton&&t.push(`deny`),e.showCancelButton&&t.push(`cancel`),t}labelForAction(e,t){switch(t){case`confirm`:return e.confirmButtonText;case`deny`:return e.denyButtonText;case`cancel`:return e.cancelButtonText;default:return e.okButtonText}}ariaLabelForAction(e,t,n){switch(t){case`confirm`:return e.confirmAriaLabel||n;case`deny`:return e.denyAriaLabel||n;case`cancel`:return e.cancelAriaLabel||n;default:return e.okAriaLabel||n}}variantForAction(e,t){switch(t){case`confirm`:return e.confirmButtonVariant||e.buttonVariant;case`deny`:return e.denyButtonVariant||e.buttonVariant;case`cancel`:return e.cancelButtonVariant||e.buttonVariant;default:return e.okButtonVariant||e.buttonVariant}}directButtonClass(e,t){switch(t){case`confirm`:return e.confirmButtonClass;case`deny`:return e.denyButtonClass;case`cancel`:return e.cancelButtonClass;default:return e.okButtonClass}}hookForAction(e,t){if(t===`confirm`)return e.preConfirm;if(t===`deny`)return e.preDeny}shouldSubmitInput(e,t){return!!e.options.input&&(t===`confirm`||t===`deny`||t===`ok`)}inputValue(e){if(!e.options.input)return null;let t=this.inputControl(e);if(!t)return null;if(t instanceof HTMLInputElement&&e.options.input===`checkbox`)return t.checked;if(t instanceof HTMLInputElement&&e.options.input===`number`){let n=t.value.trim();if(!n)return null;let i=Number(n);return Number.isNaN(i)?null:i}return t.value}async validateInput(e,t){let n=e.options.inputValidator;if(!e.options.input||!n)return this.clearInputError(e),!0;let i=await n(t,{id:e.id});return i?(this.showInputError(e,i),!1):(this.clearInputError(e),!0)}showInputError(e,t){let n=this.inputControl(e),i=this.inputError(e);!n||!i||(i.textContent=t,i.hidden=!1,n.setAttribute(`aria-invalid`,`true`),n.setAttribute(`aria-describedby`,i.id),n.focus({preventScroll:!0}))}clearInputError(e){let t=this.inputControl(e);t&&this.clearInputErrorByControl(t)}clearInputErrorByControl(e){let t=e.getAttribute(`data-quick-alert-input-error`),n=t?e.ownerDocument.getElementById(t):null;n&&(n.textContent=``,n.hidden=!0),e.setAttribute(`aria-invalid`,`false`),e.removeAttribute(`aria-describedby`)}inputControl(e){return e.card.querySelector(`[data-quick-alert-input]`)}inputError(e){let n=this.inputControl(e)?.getAttribute(`data-quick-alert-input-error`);return n?e.card.ownerDocument.getElementById(n):null}normalizeInputOptions(e){return Array.isArray(e)?e:Object.entries(e).map(([t,n])=>({value:t,label:n}))}setLoading(e,t,n){e.loadingAction=n?t:null,e.card.classList.toggle(`quick-alert-loading`,n),e.card.setAttribute(`aria-busy`,n?`true`:`false`),e.card.querySelectorAll(`[data-quick-alert-action]`).forEach(i=>{i.disabled=n})}buttonClassSlot(e){switch(e){case`confirm`:return`confirmButton`;case`deny`:return`denyButton`;case`cancel`:return`cancelButton`;default:return`okButton`}}startTimers(e){if(!e.options.toast||e.options.timeout<=0)return;let t=e.card.ownerDocument.defaultView;if(t){if(e.timer={totalMs:e.options.timeout,remainingMs:e.options.timeout,running:!0,lastStartedAt:Date.now(),progressBar:null,lastSecond:null},e.options.pauseOnHover){let n=()=>this.pauseTimer(e),i=()=>this.resumeTimer(e);e.card.addEventListener(`mouseenter`,n),e.card.addEventListener(`mouseleave`,i),e.listeners.push(()=>{e.card.removeEventListener(`mouseenter`,n),e.card.removeEventListener(`mouseleave`,i)})}if(e.options.pauseOnFocus){let n=()=>this.pauseTimer(e),i=()=>this.resumeTimer(e);e.card.addEventListener(`focusin`,n),e.card.addEventListener(`focusout`,i),e.listeners.push(()=>{e.card.removeEventListener(`focusin`,n),e.card.removeEventListener(`focusout`,i)})}if(e.options.showProgressBar){let n=e.card.ownerDocument.createElement(`div`);n.className=this.classNames(`quick-alert-progress`,this.customClassFor(e.options,`progress`));let i=e.card.ownerDocument.createElement(`div`);i.className=this.classNames(`quick-alert-progress-bar`,this.customClassFor(e.options,`progressBar`)),n.appendChild(i),e.card.appendChild(n),e.timer.progressBar=i}this.emitTimerChange(e),this.updateProgress(e),e.intervals.push(t.setInterval(()=>this.tickTimer(e),50))}}tickTimer(e){let t=e.timer;if(!t||!t.running||!this.active.has(e.id))return;let n=Date.now(),i=Math.max(0,n-t.lastStartedAt);t.lastStartedAt=n,t.remainingMs=Math.max(0,t.remainingMs-i),this.updateProgress(e),this.emitTimerChange(e),t.remainingMs<=0&&this.finish(e,`timeout`,`timeout`)}pauseTimer(e){let t=e.timer;if(!t||!t.running)return;let n=Date.now();t.remainingMs=Math.max(0,t.remainingMs-Math.max(0,n-t.lastStartedAt)),t.running=!1,this.updateProgress(e),this.emitTimerChange(e)}resumeTimer(e){let t=e.timer;!t||t.running||t.remainingMs<=0||(t.running=!0,t.lastStartedAt=Date.now())}updateProgress(e){let t=e.timer;if(!t?.progressBar)return;let n=Math.max(0,t.remainingMs/t.totalMs*100);t.progressBar.style.width=`${n}%`}emitTimerChange(e){let t=e.timer;if(!t)return;let n=Math.ceil(t.remainingMs/1e3);t.lastSecond!==n&&(t.lastSecond=n,this.safeCall(()=>e.options.onTimerChange?.(n,e.id)))}finishById(e,t,n){let i=this.active.get(e);i&&this.finish(i,t,n)}finish(e,t,n,i,l=!1){if(!this.active.has(e.id))return;e.timer&&n===`timeout`&&(e.timer.remainingMs=0,this.updateProgress(e),this.emitTimerChange(e)),this.clearTimers(e),e.listeners.forEach(f=>f()),e.listeners=[],e.item.remove(),this.active.delete(e.id),this.syncKeyListener(),this.syncDocumentInert(e.card.ownerDocument),this.removeRootIfEmpty(e.card.ownerDocument),!e.options.toast&&e.previousFocus?.isConnected&&e.previousFocus.focus({preventScroll:!0});let s=this.result(e.id,t,n,i,l);this.callLifecycle(e.options,t,s),this.safeCall(()=>e.options.onClose?.(s)),e.resolve(s),this.activateNextModal(e.card.ownerDocument)}clearTimers(e){let t=e.card.ownerDocument.defaultView;t&&(e.timeouts.forEach(n=>t.clearTimeout(n)),e.intervals.forEach(n=>t.clearInterval(n)),e.timeouts=[],e.intervals=[])}focusInitialAction(e){if(e.options.toast)return;let t=this.inputControl(e);if(t){t.focus({preventScroll:!0});return}let n=e.card.querySelector(`[data-quick-alert-action]`);n?n.focus({preventScroll:!0}):e.card.focus({preventScroll:!0})}trapFocus(e,t){let n=Array.from(t.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`)).filter(f=>!f.hasAttribute(`disabled`)&&f.tabIndex!==-1);if(!n.length){e.preventDefault(),t.focus({preventScroll:!0});return}let i=n[0],l=n.at(-1),s=t.ownerDocument.activeElement;if(!(s instanceof HTMLElement)||!t.contains(s)){e.preventDefault(),i.focus({preventScroll:!0});return}if(e.shiftKey&&s===i){e.preventDefault(),l?.focus({preventScroll:!0});return}!e.shiftKey&&s===l&&(e.preventDefault(),i.focus({preventScroll:!0}))}latestModal(){return Array.from(this.active.values()).reverse().find(e=>!e.options.toast)}activateNextModal(e){if(c.activeModalForDocument(e)||!c.modalQueue.length)return;let t=c.modalQueue.findIndex(i=>i.doc===e);if(t<0)return;let[n]=c.modalQueue.splice(t,1);n&&n.controller.activateRecord(e,n.controller.ensureRoot(e),n.options,n.previousFocus,n.resolve)}closeExistingById(e){this.resolveQueuedById(e),this.finishActiveById(e)}resolveQueuedById(e){let t=c.modalQueue.filter(n=>n.options.id===e);return t.length?(c.modalQueue=c.modalQueue.filter(n=>n.options.id!==e),t.forEach(n=>n.controller.completeQueued(n)),!0):!1}completeQueued(e){let t=this.result(e.options.id,`close`,`api-close`);this.safeCall(()=>e.options.onClose?.(t)),e.resolve(t)}finishActiveById(e){let t=!1;return c.controllers.forEach(n=>{let i=n.active.get(e);i&&(n.finish(i,`close`,`api-close`),t=!0)}),t}static activeModalForDocument(e){for(let t of c.controllers){let n=Array.from(t.active.values()).find(i=>!i.options.toast&&i.card.ownerDocument===e);if(n)return n}}static hasActiveModal(e){return!!c.activeModalForDocument(e)}static inertedElementsFor(e){let t=c.inertedElements.get(e);if(t)return t;let n=new Map;return c.inertedElements.set(e,n),n}dismissedByForAction(e){switch(e){case`confirm`:return`confirm-button`;case`deny`:return`deny-button`;case`cancel`:return`cancel-button`;case`ok`:return`ok-button`;case`timeout`:return`timeout`;default:return`close-button`}}syncKeyListener(){let e=this.getDocument();if(!e)return;let t=Array.from(this.active.values()).some(n=>!n.options.toast);if(t&&!this.listeningForKeys){e.addEventListener(`keydown`,this.handleKeydown),this.listeningForKeys=!0;return}!t&&this.listeningForKeys&&(e.removeEventListener(`keydown`,this.handleKeydown),this.listeningForKeys=!1)}ensureRoot(e){let t=e.querySelector(`.quick-alert-root`);if(t)return t;let n=e.createElement(`div`);return n.className=`quick-alert-root`,e.body.appendChild(n),n}ensureToastStack(e,t,n){let i=`.quick-alert-toast-stack[data-quick-alert-position="${n}"]`,l=t.querySelector(i);if(l)return l;let s=e.createElement(`div`);return s.className=this.classNames(`quick-alert-toast-stack`,`quick-alert-${n}`),s.setAttribute(`data-quick-alert-position`,n),t.appendChild(s),s}removeRootIfEmpty(e){let t=e.querySelector(`.quick-alert-root`);t?.querySelectorAll(`.quick-alert-toast-stack`).forEach(n=>{n.querySelector(`.quick-alert-item`)||n.remove()}),t&&!t.querySelector(`.quick-alert-item`)&&t.remove()}syncDocumentInert(e){let t=c.hasActiveModal(e),n=e.querySelector(`.quick-alert-root`),i=c.inertedElementsFor(e);if(t){Array.from(e.body.children).forEach(l=>{!(l instanceof HTMLElement)||l===n||(i.has(l)||i.set(l,l.inert),l.inert=!0)});return}i.forEach((l,s)=>{s.inert=l}),i.clear()}ensureStyles(e){if(e.getElementById(W))return;let t=e.createElement(`style`);t.id=W,t.textContent=Z,e.head.appendChild(t)}normalizeOptions(e){return{title:e.title??d.title,subtitle:e.subtitle??d.subtitle,message:e.message??d.message,content:e.content,footer:e.footer??d.footer,input:e.input,inputLabel:e.inputLabel??d.inputLabel,inputPlaceholder:e.inputPlaceholder??d.inputPlaceholder,inputValue:e.inputValue??d.inputValue,inputOptions:e.inputOptions??d.inputOptions,inputValidator:e.inputValidator,type:e.type??d.type,timeout:this.normalizeTimeout(e.timeout),toast:e.input?!1:e.toast??d.toast,position:e.position??d.position,transition:e.transition??d.transition,theme:e.theme??d.theme,buttons:e.buttons??d.buttons,showIcon:e.showIcon??d.showIcon,showDenyButton:e.showDenyButton??d.showDenyButton,showCloseButton:e.showCloseButton??d.showCloseButton,showProgressBar:e.showProgressBar??d.showProgressBar,showConfirmButton:e.showConfirmButton??d.showConfirmButton,showCancelButton:e.showCancelButton??d.showCancelButton,confirmButtonText:e.confirmButtonText??d.confirmButtonText,okButtonText:e.okButtonText??d.okButtonText,cancelButtonText:e.cancelButtonText??d.cancelButtonText,denyButtonText:e.denyButtonText??d.denyButtonText,ariaLabel:e.ariaLabel??d.ariaLabel,confirmAriaLabel:e.confirmAriaLabel??d.confirmAriaLabel,denyAriaLabel:e.denyAriaLabel??d.denyAriaLabel,cancelAriaLabel:e.cancelAriaLabel??d.cancelAriaLabel,okAriaLabel:e.okAriaLabel??d.okAriaLabel,closeAriaLabel:e.closeAriaLabel??d.closeAriaLabel,confirmButtonClass:e.confirmButtonClass??d.confirmButtonClass,denyButtonClass:e.denyButtonClass??d.denyButtonClass,cancelButtonClass:e.cancelButtonClass??d.cancelButtonClass,okButtonClass:e.okButtonClass??d.okButtonClass,closeButtonClass:e.closeButtonClass??d.closeButtonClass,buttonVariant:e.buttonVariant??d.buttonVariant,confirmButtonVariant:e.confirmButtonVariant??e.buttonVariant??d.confirmButtonVariant,denyButtonVariant:e.denyButtonVariant??e.buttonVariant??d.denyButtonVariant,cancelButtonVariant:e.cancelButtonVariant??e.buttonVariant??d.cancelButtonVariant,okButtonVariant:e.okButtonVariant??e.buttonVariant??d.okButtonVariant,pauseOnHover:e.pauseOnHover??d.pauseOnHover,pauseOnFocus:e.pauseOnFocus??d.pauseOnFocus,onTimerChange:e.onTimerChange,preConfirm:e.preConfirm,preDeny:e.preDeny,onOpen:e.onOpen,onClose:e.onClose,onConfirm:e.onConfirm,onDeny:e.onDeny,onCancel:e.onCancel,onOk:e.onOk,onTimeout:e.onTimeout,customClass:e.customClass??d.customClass,id:e.id||this.nextId()}}normalizeTimeout(e){return typeof e!=`number`||!Number.isFinite(e)?d.timeout:Math.max(0,e)}cardClass(e,t){let n=this.resolveTheme(e,t.theme);return this.classNames(`quick-alert-card`,t.toast?`quick-alert-toast`:`quick-alert-modal`,`quick-alert-${t.position}`,`quick-alert-${t.transition}`,t.theme===`auto`&&`quick-alert-theme-auto`,`quick-alert-theme-${n}`,t.theme!==`auto`&&t.theme!==n&&`quick-alert-theme-${t.theme}`,this.customClassFor(t,`popup`))}resolveTheme(e,t){return t!==`auto`?t:e.defaultView?.matchMedia?.(`(prefers-color-scheme: dark)`).matches?`dark`:`default`}customClassFor(e,t){return typeof e.customClass==`string`?t===`popup`?e.customClass:``:e.customClass[t]??``}classNames(...e){return e.filter(Boolean).join(` `)}callLifecycle(e,t,n){let i=this.lifecycleForAction(e,t);this.safeCall(()=>i?.(n))}lifecycleForAction(e,t){switch(t){case`confirm`:return e.onConfirm;case`deny`:return e.onDeny;case`cancel`:return e.onCancel;case`ok`:return e.onOk;case`timeout`:return e.onTimeout;default:return}}safeCall(e){try{e()}catch{}}result(e,t,n,i,l=!1){let s={id:e,action:t,dismissedBy:n,isConfirm:t===`confirm`,isDeny:t===`deny`,isCancel:t===`cancel`,isOk:t===`ok`,isClose:t===`close`,isTimeout:t===`timeout`};return l&&(s.value=i??null),s}nextId(){return c.idCounter+=1,`quick-alert-${c.idCounter}`}nextDomId(e){return c.domIdCounter+=1,`${e.trim().replace(/[^A-Za-z0-9_-]+/g,`-`).replace(/^-+|-+$/g,``)||`alert`}-${c.domIdCounter}`}getDocument(){return typeof document>`u`?null:document}};var N=(c={})=>new V(c);var A=N();var ee=(c,e)=>e.key;var O=(c,e)=>e.name;var te=(c,e)=>e.label+e.value+c;function ne(c,e){c&1&&(Yc(0,`span`),WT(1,`Published version: `),Yc(2,`strong`),WT(3),Zc()()),c&2&&(TE(3),tl(`v`,e))}function oe(c,e){if(c&1&&(Yc(0,`span`),WT(1,`Latest update: `),Yc(2,`strong`,68),WT(3),Zc()()),c&2){let t=e,n=pT();TE(2),kh(`title`,t),TE(),ig(n.publishedAgo(t))}}function ie(c,e){if(c&1&&(Yc(0,`span`),WT(1,`Total downloads: `),Yc(2,`strong`),WT(3),Zc()()),c&2){let t=pT();TE(3),ig(t.packageStats().downloads?.toLocaleString(`en-US`))}}function ae(c,e){if(c&1&&(Yc(0,`a`,5),Nh(1,`img`,69),Zc()),c&2)kh(`href`,pT().githubUrl,ky),bh(`aria-label`,`Star quick-alert on GitHub, `+e.toLocaleString(`en-US`)+` stars`)}function re(c,e){if(c&1){let t=dT();Yc(0,`button`,70),Fh(`click`,function(){Ou(t);return Ru(pT().scrollToTop())}),WT(1,`↑`),Zc()}}function se(c,e){if(c&1){let t=dT();Yc(0,`article`,21)(1,`div`,71)(2,`h3`),WT(3),Zc(),Yc(4,`p`),WT(5),Zc(),Yc(6,`button`,72),Fh(`click`,function(){let i=Ou(t).$implicit;return Ru(pT().runCopyableExample(i))}),WT(7,`Try me!`),Zc()(),Yc(8,`div`,11)(9,`div`,12)(10,`span`),WT(11,`Example code`),Zc(),Yc(12,`button`,7),Fh(`click`,function(){let i=Ou(t).$implicit;return Ru(pT().copyToClipboard(i.code))}),WT(13),Zc()(),Yc(14,`pre`)(15,`code`),WT(16),Zc()()()()}if(c&2){let t=e.$implicit,n=pT();TE(3),ig(t.title),TE(2),ig(t.description),TE(),bh(`data-testid`,`run-docs-`+t.key),TE(6),bh(`data-testid`,`copy-docs-`+t.key)(`aria-label`,n.copiedValue()===t.code?`Copied `+t.title+` code`:`Copy `+t.title+` code`),TE(),ig(n.copiedValue()===t.code?`Copied`:`Copy`),TE(3),ig(t.code)}}function le(c,e){if(c&1){let t=dT();Yc(0,`details`)(1,`summary`),WT(2),Zc(),Yc(3,`div`,11)(4,`div`,12)(5,`span`),WT(6),Zc(),Yc(7,`button`,7),Fh(`click`,function(){let i=Ou(t).$implicit;return Ru(pT().copyToClipboard(i.code))}),WT(8),Zc()(),Yc(9,`pre`)(10,`code`),WT(11),Zc()()()()}if(c&2){let t=e.$implicit,n=pT();TE(2),ig(t.name),TE(4),ig(t.name),TE(),bh(`aria-label`,`Copy `+t.name+` example`),TE(),ig(n.copiedValue()===t.code?`Copied`:`Copy`),TE(3),ig(t.code)}}function ce(c,e){if(c&1){let t=dT();Yc(0,`article`,28)(1,`div`,73)(2,`strong`),WT(3),Zc(),Yc(4,`span`),WT(5,`Alert preview`),Zc(),Nh(6,`i`),Zc(),Yc(7,`div`,74)(8,`h3`),WT(9),Zc(),Yc(10,`button`,72),Fh(`click`,function(){let i=Ou(t).$implicit;return Ru(pT().showThemeDemo(i))}),WT(11,`Try me!`),Zc()(),Yc(12,`div`,11)(13,`div`,12)(14,`span`),WT(15,`Theme code`),Zc(),Yc(16,`button`,7),Fh(`click`,function(){let i=Ou(t).$implicit,l=pT();return Ru(l.copyToClipboard(l.themeSnippet(i)))}),WT(17),Zc()(),Yc(18,`pre`)(19,`code`),WT(20),Zc()()()()}if(c&2){let t=e.$implicit,n=pT();TE(),PT(`theme-preview theme-`+t),TE(2),ig(t),TE(6),ig(t),TE(),bh(`data-testid`,`try-theme-`+t),TE(6),bh(`aria-label`,`Copy `+t+` theme code`),TE(),ig(n.copiedValue()===n.themeSnippet(t)?`Copied`:`Copy`),TE(3),ig(n.themeSnippet(t))}}function ue(c,e){if(c&1&&(Yc(0,`tr`)(1,`th`,60)(2,`code`),WT(3),Zc()(),Yc(4,`td`)(5,`code`),WT(6),Zc()(),Yc(7,`td`),WT(8),Zc()()),c&2){let t=e.$implicit;TE(3),ig(t.name),TE(3),ig(t.defaultValue),TE(2),ig(t.description)}}function de(c,e){if(c&1){let t=dT();Yc(0,`button`,7),Fh(`click`,function(){let i=Ou(t).$implicit;return Ru(pT().showPositionDemo(i))}),WT(1),Zc()}if(c&2){let t=e.$implicit;bh(`data-testid`,`show-position-`+t),TE(),ig(t)}}function me(c,e){if(c&1){let t=dT();Yc(0,`button`,7),Fh(`click`,function(){let i=Ou(t).$implicit;return Ru(pT().showButtonPresetDemo(i))}),WT(1),Zc()}if(c&2){let t=e.$implicit;bh(`data-testid`,`show-buttons-`+t),TE(),ig(t)}}function pe(c,e){if(c&1&&(Yc(0,`tr`)(1,`th`,60)(2,`code`),WT(3),Zc()(),Yc(4,`td`),WT(5),Zc()()),c&2){let t=e.$implicit;TE(3),ig(t.name),TE(2),ig(t.description)}}function fe(c,e){if(c&1&&(Yc(0,`tr`)(1,`th`,60)(2,`code`),WT(3),Zc()(),Yc(4,`td`),WT(5),Zc()()),c&2){let t=e.$implicit;TE(3),ig(t.name),TE(2),ig(t.description)}}function he(c,e){if(c&1){let t=dT();Yc(0,`div`,57)(1,`span`,75),WT(2),Zc(),Yc(3,`strong`),WT(4),Zc(),Yc(5,`button`,72),Fh(`click`,function(){let i=Ou(t).$implicit;return Ru(pT().showTypeDemo(i))}),WT(6,`Try me!`),Zc(),Yc(7,`div`,11)(8,`div`,12)(9,`span`),WT(10,`Icon code`),Zc(),Yc(11,`button`,7),Fh(`click`,function(){let i=Ou(t).$implicit,l=pT();return Ru(l.copyToClipboard(l.iconSnippet(i)))}),WT(12),Zc()(),Yc(13,`pre`)(14,`code`),WT(15),Zc()()()()}if(c&2){let t=e.$implicit,n=pT();TE(),PT(`icon-mark icon-`+t),TE(),ig(t===`success`?`✓`:t===`error`?`×`:t===`warning`?`!`:t===`info`?`i`:`?`),TE(2),ig(t),TE(),bh(`data-testid`,`show-type-`+t),TE(6),bh(`aria-label`,`Copy `+t+` icon code`),TE(),ig(n.copiedValue()===n.iconSnippet(t)?`Copied`:`Copy`),TE(3),ig(n.iconSnippet(t))}}function ge(c,e){if(c&1&&(Yc(0,`li`)(1,`span`),WT(2),Zc(),Yc(3,`code`),WT(4),Zc()()),c&2){let t=e.$implicit;TE(2),ig(t.label),TE(2),ig(t.value)}}var G=class c{document=v(ct);title=v(hs);meta=v(fs);previousTitle=this.title.getTitle();previousIconHref=this.document.head.querySelector(`link[rel="icon"]`)?.getAttribute(`href`)??null;previousDescription=this.meta.getTag(`name="description"`)?.getAttribute(`content`)??null;previousCanonicalHref=this.document.head.querySelector(`link[rel="canonical"]`)?.getAttribute(`href`)??null;browserAbort=new AbortController;packageStats=qo({});githubUrl=`https://github.com/subha-patra/quick-alert`;showScrollTop=qo(!1);installCommand=`npm install quick-alert`;usageSnippet=`import { quickAlert } from 'quick-alert';

const result = await quickAlert.fire({
  title: 'Saved',
  message: 'Your changes are ready.',
  type: 'success',
  buttons: 'ok'
});

console.log(result.action, result.dismissedBy);`;resultSnippet=`const result = await quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel'
});

if (result.isConfirm) {
  console.log('Confirmed', result.id);
} else {
  console.log('Dismissed by', result.dismissedBy);
}`;methodsSnippet=`quickAlert.configure({ theme: 'minimal' });

const billingAlert = createQuickAlert({
  type: 'info',
  position: 'top-right'
});
await billingAlert.fire({ title: 'Invoice sent', toast: true });

quickAlert.close('alert-id');
quickAlert.closeAll();
quickAlert.resetConfig();`;copiedValue=qo(null);lastAction=qo(`Waiting for an alert action`);eventLog=qo([{label:`ready`,value:`Open a demo alert`}]);angularSnippet=`import { quickAlert } from 'quick-alert';

await quickAlert.fire({
  title: 'Saved',
  message: 'Angular uses the same API.',
  type: 'success'
});`;reactSnippet=`import { quickAlert } from 'quick-alert';

<button onClick={() => quickAlert.fire({
  title: 'Saved',
  type: 'success'
})}>
  Save
</button>`;vueSnippet=`<script setup lang="ts">
import { quickAlert } from 'quick-alert';

function save() {
  quickAlert.fire({ title: 'Saved', type: 'success' });
}
<\/script>`;javascriptSnippet=`import { quickAlert } from 'quick-alert';

document.querySelector('#save').addEventListener('click', () => {
  quickAlert.fire({ title: 'Saved', type: 'success' });
});`;ssrSnippet=`import { quickAlert } from 'quick-alert';

// Safe during SSR: no document access happens until browser render.
await quickAlert.fire({ title: 'Browser-only UI' });`;nextSnippet=`'use client';

import { quickAlert } from 'quick-alert';

export function SaveButton() {
  return (
    <button onClick={() => quickAlert.fire({
      title: 'Saved from Next.js',
      theme: 'auto'
    })}>
      Save
    </button>
  );
}`;nuxtSnippet=`<script setup lang="ts">
import { quickAlert } from 'quick-alert';

const notify = () => {
  quickAlert.fire({
    title: 'Saved from Nuxt',
    toast: true,
    theme: 'auto'
  });
};
<\/script>`;frameworkSnippets=[{name:`Angular`,code:this.angularSnippet},{name:`React`,code:this.reactSnippet},{name:`Vue`,code:this.vueSnippet},{name:`Plain JavaScript`,code:this.javascriptSnippet},{name:`Next.js`,code:this.nextSnippet},{name:`Nuxt`,code:this.nuxtSnippet},{name:`SSR`,code:this.ssrSnippet}];buttonPresetSnippet=`await quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Delete',
  cancelButtonText: 'Keep item'
});`;slotClassSnippet=`quickAlert.fire({
  title: 'Styled alert',
  customClass: {
    popup: 'brand-alert',
    title: 'brand-alert-title',
    confirmButton: 'brand-alert-confirm'
  }
});`;scopedDefaultsSnippet=`import { createQuickAlert, quickAlert } from 'quick-alert';

const billingAlert = createQuickAlert({
  type: 'info',
  position: 'top-right'
});

quickAlert.resetConfig();`;customContentSnippet=`quickAlert.fire({
  title: 'Safe custom content',
  message: 'Fallback text for plain rendering.',
  content: ({ document }) => {
    const list = document.createElement('ul');
    list.append('Safe DOM content only');
    return list;
  }
});`;lifecycleSnippet=`quickAlert.fire({
  title: 'Run lifecycle hooks',
  buttons: 'confirm-cancel',
  onOpen: ({ id }) => console.log('open', id),
  onConfirm: (result) => console.log('confirm', result.id),
  onCancel: (result) => console.log('cancel', result.id),
  onClose: (result) => console.log('close', result.dismissedBy),
  onTimeout: (result) => console.log('timeout', result.id)
});`;autoThemeSnippet=`quickAlert.fire({
  title: 'System theme',
  message: 'Uses dark theme when the OS prefers dark mode.',
  theme: 'auto'
});`;apiReferenceSnippet=`const result: QuickAlertResult = await quickAlert.fire({
  id: 'docs-toast',
  title: 'Saved',
  subtitle: 'Billing',
  message: 'Invoice sent.',
  footer: 'You can close this safely.',
  input: 'email',
  inputLabel: 'Email address',
  inputPlaceholder: 'billing@example.com',
  inputValue: 'billing@example.com',
  inputValidator: (value) => value ? null : 'Email is required',
  type: 'success',
  toast: false,
  position: 'center',
  transition: 'slide',
  theme: 'dark',
  content: ({ document }) => document.createTextNode('Safe custom content'),
  buttons: 'confirm-cancel',
  timeout: 4000,
  showIcon: true,
  showCloseButton: true,
  showProgressBar: true,
  confirmButtonText: 'Continue',
  cancelButtonText: 'Later',
  ariaLabel: 'Billing confirmation',
  confirmAriaLabel: 'Continue billing flow',
  closeAriaLabel: 'Close billing confirmation',
  buttonVariant: 'outline',
  confirmButtonClass: 'brand-confirm',
  pauseOnHover: true,
  pauseOnFocus: true,
  onTimerChange: (seconds, id) => console.log(id, seconds),
  preConfirm: async (value) => verifyOnServer(value),
  onOpen: ({ id }) => console.log('open', id),
  onClose: (result) => console.log('close', result.dismissedBy),
  onConfirm: (result) => console.log('confirm', result.id),
  onTimeout: (result) => console.log('timeout', result.id),
  customClass: { popup: 'brand-alert' }
});

if (result.isConfirm && result.dismissedBy === 'confirm-button') {
  quickAlert.close('docs-toast');
}`;copyableExamples=[{key:`success-modal`,title:`Success modal`,description:`Confirm and cancel actions with a promise result.`,code:`const result = await quickAlert.fire({
  title: 'Payment received',
  subtitle: 'Success modal',
  message: 'The customer has paid and the receipt is ready.',
  type: 'success',
  toast: false,
  buttons: 'confirm-cancel',
  confirmButtonText: 'View receipt',
  cancelButtonText: 'Later',
  showCloseButton: true
});`,run:()=>this.showAlert()},{key:`info-toast`,title:`Toast with progress`,description:`A positioned toast with close button and progress bar.`,code:`quickAlert.fire({
  title: 'Toast notification',
  message: 'This toast closes by itself and shows a progress bar.',
  type: 'info',
  toast: true,
  position: 'top-right',
  showCloseButton: true,
  showProgressBar: true
});`,run:()=>this.showToast()},{key:`warning-deny-cancel`,title:`Warning actions`,description:`Confirm, deny, and cancel buttons for destructive flows.`,code:`const result = await quickAlert.fire({
  title: 'Delete API key?',
  subtitle: 'This cannot be undone',
  message: 'Deny and cancel buttons make destructive confirmation flows clear.',
  type: 'warning',
  toast: false,
  buttons: 'confirm-deny-cancel',
  confirmButtonText: 'Review',
  denyButtonText: 'Delete key',
  cancelButtonText: 'Cancel',
  showCloseButton: true
});`,run:()=>this.showWarningModal()},{key:`positions`,title:`Toast position`,description:`Move toast notifications to any supported screen position.`,code:`quickAlert.fire({
  title: 'Bottom-right toast',
  message: 'Position can be changed per alert.',
  type: 'success',
  toast: true,
  position: 'bottom-right',
  timeout: 3500,
  showProgressBar: true,
  showCloseButton: true
});`,run:()=>this.showPositionToast()},{key:`button-presets`,title:`Button presets`,description:`Use one option for common action layouts.`,code:`const result = await quickAlert.fire({
  title: 'Delete item?',
  type: 'warning',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Delete',
  cancelButtonText: 'Keep item',
  showCloseButton: true
});`,run:()=>this.showButtonPresetDemo(`confirm-cancel`)},{key:`email-input`,title:`Email input`,description:`Collect a validated email and read it from result.value.`,code:`const result = await quickAlert.fire({
  title: 'Send receipt',
  input: 'email',
  inputLabel: 'Email address',
  inputPlaceholder: 'you@example.com',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Send',
  inputValidator: value => value ? null : 'Email is required'
});

console.log(result.value);`,run:()=>this.showEmailInputDemo()},{key:`password-input`,title:`Password input`,description:`Collect a password with async confirmation.`,code:`const result = await quickAlert.fire({
  title: 'Re-enter password',
  input: 'password',
  inputLabel: 'Password',
  inputPlaceholder: 'Account password',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Verify',
  preConfirm: async (value) => Boolean(value)
});

console.log(result.value);`,run:()=>this.showPasswordInputDemo()},{key:`number-input`,title:`Number input`,description:`Number inputs resolve result.value as a number.`,code:`const result = await quickAlert.fire({
  title: 'Seats to add',
  input: 'number',
  inputLabel: 'Seats',
  inputValue: 3,
  buttons: 'confirm-cancel',
  confirmButtonText: 'Update seats'
});

console.log(result.value);`,run:()=>this.showNumberInputDemo()},{key:`textarea-input`,title:`Textarea input`,description:`Use textarea for notes, feedback, or support messages.`,code:`const result = await quickAlert.fire({
  title: 'Leave a note',
  input: 'textarea',
  inputLabel: 'Note',
  inputPlaceholder: 'Write a short note...',
  buttons: 'confirm-cancel',
  confirmButtonText: 'Save note'
});

console.log(result.value);`,run:()=>this.showTextareaInputDemo()},{key:`select-input`,title:`Select input`,description:`Render a native select from inputOptions.`,code:`const result = await quickAlert.fire({
  title: 'Choose plan',
  input: 'select',
  inputLabel: 'Plan',
  inputValue: 'pro',
  inputOptions: [
    { value: 'starter', label: 'Starter' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise' }
  ],
  buttons: 'confirm-cancel'
});

console.log(result.value);`,run:()=>this.showSelectInputDemo()},{key:`checkbox-input`,title:`Checkbox input`,description:`Resolve true or false for consent and preference flows.`,code:`const result = await quickAlert.fire({
  title: 'Enable alerts?',
  input: 'checkbox',
  inputLabel: 'Send me product updates',
  inputValue: true,
  buttons: 'confirm-cancel',
  confirmButtonText: 'Save preference'
});

console.log(result.value);`,run:()=>this.showCheckboxInputDemo()},{key:`theme-accessibility`,title:`Theme and ARIA labels`,description:`Use themes, variants, button classes, and accessible labels together.`,code:`quickAlert.fire({
  title: '',
  message: 'Theme, button variants, custom classes, and ARIA labels can be set per alert.',
  type: 'question',
  theme: 'dark',
  ariaLabel: 'Accessible themed alert',
  buttons: 'confirm-cancel',
  buttonVariant: 'outline',
  confirmButtonVariant: 'solid',
  confirmAriaLabel: 'Confirm themed alert',
  closeAriaLabel: 'Close themed alert',
  showCloseButton: true
});`,run:()=>this.showThemeAccessibilityDemo()},{key:`custom-class-slots`,title:`Slot customClass`,description:`Style popup, overlay, icon, text, buttons, close button, and progress.`,code:`quickAlert.fire({
  title: 'Slot customClass',
  subtitle: 'Every visible slot can be styled',
  message: 'Pass classes for every alert slot.',
  type: 'warning',
  buttons: 'confirm-deny-cancel',
  showCloseButton: true,
  customClass: {
    popup: 'qa-demo-popup',
    overlay: 'qa-demo-overlay',
    confirmButton: 'qa-demo-confirm',
    progressBar: 'qa-demo-progress-bar'
  }
});`,run:()=>this.showCustomClassSlotsDemo()},{key:`queue-modals`,title:`Queue modals`,description:`Open two modals and quick-alert keeps only one visible at a time.`,code:`quickAlert.fire({
  id: 'queue-first',
  title: 'First queued modal',
  toast: false
});

quickAlert.fire({
  id: 'queue-second',
  title: 'Second queued modal',
  toast: false
});`,run:()=>this.showQueueDemo()},{key:`stack-toasts`,title:`Stack toasts`,description:`Multiple toasts in the same position stack without overlapping.`,code:`quickAlert.fire({
  id: 'stack-one',
  title: 'Stacked toast one',
  toast: true,
  position: 'top-right'
});

quickAlert.fire({
  id: 'stack-two',
  title: 'Stacked toast two',
  toast: true,
  position: 'top-right'
});`,run:()=>this.showStackDemo()},{key:`async-confirm`,title:`Async confirm`,description:`Keep the modal open with a loading state while server work runs.`,code:`await quickAlert.fire({
  title: 'Verify on server',
  message: 'The confirm button enters loading state while preConfirm resolves.',
  type: 'warning',
  toast: false,
  buttons: 'confirm-cancel',
  confirmButtonText: 'Verify',
  preConfirm: () => new Promise(resolve => setTimeout(resolve, 900))
});`,run:()=>this.showAsyncDemo()},{key:`pauseable-timer`,title:`Pauseable timer`,description:`Pause timeout and progress while the toast is hovered or focused.`,code:`quickAlert.fire({
  id: 'pausing-timer',
  title: 'Pauseable timer',
  toast: true,
  timeout: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
  onTimerChange: (seconds, id) => console.log(id, seconds)
});`,run:()=>this.showPausingTimerDemo()},{key:`custom-content`,title:`Safe custom content`,description:`Render safe DOM nodes without adding unsafe HTML parsing.`,code:`quickAlert.fire({
  title: 'Safe custom content',
  message: 'Fallback text is ignored when content is provided.',
  type: 'info',
  content: ({ document }) => {
    const list = document.createElement('ul');
    list.append('DOM node content', 'No innerHTML');
    return list;
  }
});`,run:()=>this.showCustomContentDemo()},{key:`lifecycle-callbacks`,title:`Lifecycle callbacks`,description:`Use lifecycle callbacks for analytics and event logs.`,code:`quickAlert.fire({
  title: 'Lifecycle callbacks',
  buttons: 'confirm-cancel',
  onOpen: ({ id }) => console.log('open', id),
  onConfirm: (result) => console.log('confirm', result.id),
  onCancel: (result) => console.log('cancel', result.id),
  onClose: (result) => console.log('close', result.dismissedBy),
  onTimeout: (result) => console.log('timeout', result.id)
});`,run:()=>this.showLifecycleDemo()},{key:`auto-theme`,title:`Auto theme`,description:`Resolve default or dark styling from the user system preference.`,code:`quickAlert.fire({
  title: 'Auto theme',
  message: 'theme: auto resolves when the alert opens.',
  type: 'success',
  theme: 'auto',
  ariaLabel: 'Auto theme alert'
});`,run:()=>this.showAutoThemeDemo()},{key:`global-config`,title:`Global defaults`,description:`Configure shared defaults, then reset them when needed.`,code:`quickAlert.configure({
  type: 'info',
  toast: true,
  position: 'top-right',
  timeout: 3500,
  showProgressBar: true
});

quickAlert.fire({ id: 'docs-toast', title: 'Configured default' });
quickAlert.resetConfig();`,run:()=>{this.configureDefaults(),this.showConfiguredToast(),this.resetDefaults()}},{key:`scoped-defaults`,title:`Scoped defaults`,description:`Create isolated alert instances so defaults do not leak across app areas.`,code:`import { createQuickAlert } from 'quick-alert';

const billingAlert = createQuickAlert({
  type: 'question',
  position: 'center',
  toast: false,
  buttons: 'ok'
});

await billingAlert.fire({
  title: 'Scoped defaults',
  message: 'Only this alert instance receives these defaults.'
});`,run:()=>this.showScopedDefaultsDemo()},{key:`close-methods`,title:`Close by API`,description:`Close one tracked alert by id, or clean up every active alert.`,code:`quickAlert.close('docs-toast');
quickAlert.closeAll();`,run:()=>{this.closeTrackedAlert(),this.closeAllAlerts()}}];alertTypes=[`success`,`error`,`warning`,`info`,`question`];themes=[`default`,`dark`,`auto`,`success`,`minimal`,`glass`,`material`,`bootstrap`];positions=[`top-right`,`top-left`,`bottom-right`,`bottom-left`,`center`,`center-left`,`center-right`,`top-center`,`bottom-center`];buttonPresets=[`ok`,`confirm`,`confirm-cancel`,`confirm-deny-cancel`,`none`];configRows=[{name:`id`,defaultValue:`generated`,description:`Identify an alert for close(id) and result tracking.`},{name:`title, subtitle, message, footer`,defaultValue:`''`,description:`Text-only content in the four text areas.`},{name:`content`,defaultValue:`undefined`,description:`Safe text, a DOM Node, or a browser-only DOM factory. Overrides message.`},{name:`input`,defaultValue:`undefined`,description:`text, email, password, number, textarea, select, or checkbox.`},{name:`inputLabel, inputPlaceholder, inputValue`,defaultValue:`'' / null`,description:`Label, placeholder, and starting value for input alerts.`},{name:`inputOptions`,defaultValue:`{}`,description:`Record or array of options for select input alerts.`},{name:`inputValidator`,defaultValue:`undefined`,description:`Return an error string to keep the modal open.`},{name:`type`,defaultValue:`'success'`,description:`success, error, warning, info, or question icon.`},{name:`toast, position`,defaultValue:`false, center`,description:`Choose modal or toast and where it appears.`},{name:`timeout, showProgressBar`,defaultValue:`4000, true`,description:`Toast duration in milliseconds and progress visibility.`},{name:`pauseOnHover, pauseOnFocus, onTimerChange`,defaultValue:`true, true, none`,description:`Pause a timed alert and observe the remaining seconds.`},{name:`buttons`,defaultValue:`automatic OK`,description:`ok, confirm, confirm-cancel, confirm-deny-cancel, or none.`},{name:`showConfirmButton, showDenyButton, showCancelButton`,defaultValue:`false`,description:`Legacy button flags when buttons is omitted.`},{name:`confirmButtonText, denyButtonText, cancelButtonText, okButtonText`,defaultValue:`action names`,description:`Visible action labels.`},{name:`showCloseButton, showIcon`,defaultValue:`false, true`,description:`Toggle the close control and state icon.`},{name:`theme, transition`,defaultValue:`default, slide`,description:`Visual preset and fade or slide entrance.`},{name:`buttonVariant, [action]ButtonVariant`,defaultValue:`solid`,description:`Use solid, outline, or ghost buttons globally or per action.`},{name:`[action]ButtonClass, customClass`,defaultValue:`''`,description:`Add action classes or classes for individual alert slots.`},{name:`ariaLabel, [action]AriaLabel, closeAriaLabel`,defaultValue:`''`,description:`Accessible labels for the dialog and controls.`},{name:`preConfirm, preDeny`,defaultValue:`undefined`,description:`Async actions receive input value/context; old no-argument hooks still work.`},{name:`onOpen, onClose, onConfirm, onDeny, onCancel, onOk, onTimeout`,defaultValue:`undefined`,description:`Lifecycle callbacks for UI work and analytics.`}];resultRows=[{name:`action`,description:`confirm, deny, cancel, ok, close, or timeout.`},{name:`value`,description:`Submitted input value for confirm, deny, or OK input alerts.`},{name:`id`,description:`The alert id supplied or generated when opened.`},{name:`dismissedBy`,description:`The exact button, Escape, timeout, or API close.`},{name:`isConfirm, isDeny, isCancel`,description:`Flags for a decision button.`},{name:`isOk, isClose, isTimeout`,description:`Flags for acknowledgement or dismissal.`}];dismissalRows=[{name:`confirm-button, deny-button, cancel-button, ok-button`,description:`An action button was pressed.`},{name:`close-button`,description:`The close control was pressed.`},{name:`escape`,description:`The modal was dismissed with Escape.`},{name:`timeout`,description:`The timed alert finished.`},{name:`api-close`,description:`close(id) or closeAll() dismissed the alert.`}];copyResetTimeout=null;constructor(){this.title.setTitle(`quick-alert | Universal Alert and Toast`),this.meta.updateTag({name:`description`,content:`Explore quick-alert: accessible modals and toasts for Angular, React, Vue, and plain JavaScript. Try every feature and copy working examples.`});let e=this.document.head.querySelector(`base`)?.getAttribute(`href`)??`/`;this.setPageLink(`icon`,`${e}quick-alert-favicon.svg`),this.setPageLink(`canonical`,`https://subha-patra.github.io/quick-alert/`),op(()=>{if(this.browserAbort.signal.aborted)return;let t=()=>this.showScrollTop.set(window.scrollY>400);window.addEventListener(`scroll`,t,{passive:!0,signal:this.browserAbort.signal}),t(),w({fetcher:globalThis.fetch.bind(globalThis),packageName:`quick-alert`,githubRepo:`subha-patra/quick-alert`,now:new Date,signal:this.browserAbort.signal}).then(n=>{this.browserAbort.signal.aborted||this.packageStats.set(n)})})}ngOnDestroy(){this.browserAbort.abort(),this.clearCopyResetTimeout(),A.closeAll(),this.title.setTitle(this.previousTitle),this.previousDescription===null?this.meta.removeTag(`name="description"`):this.meta.updateTag({name:`description`,content:this.previousDescription}),this.restorePageLink(`icon`,this.previousIconHref),this.restorePageLink(`canonical`,this.previousCanonicalHref)}setPageLink(e,t){let n=this.document.head.querySelector(`link[rel="${e}"]`);n||(n=this.document.createElement(`link`),n.rel=e,this.document.head.appendChild(n)),n.href=t,e===`icon`&&(n.type=`image/svg+xml`)}restorePageLink(e,t){let n=this.document.head.querySelector(`link[rel="${e}"]`);n&&(t===null?n.remove():n.setAttribute(`href`,t))}publishedAgo(e){let t=Math.max(0,Math.floor((Date.now()-Date.parse(e))/864e5)),n=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`});return t<7?n.format(-t,`day`):t<30?n.format(-Math.floor(t/7),`week`):t<365?n.format(-Math.floor(t/30),`month`):n.format(-Math.floor(t/365),`year`)}scrollToTop(){let e=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1;window.scrollTo({top:0,behavior:e?`auto`:`smooth`})}async showAlert(){await this.runAlert(`success modal`,{title:`Payment received`,subtitle:`Success modal`,message:`The customer has paid and the receipt is ready.`,type:`success`,toast:!1,showCloseButton:!0,buttons:`confirm-cancel`,confirmButtonText:`View receipt`,cancelButtonText:`Later`})}async showWarningModal(){await this.runAlert(`warning modal`,{title:`Delete API key?`,subtitle:`This cannot be undone`,message:`Deny and cancel buttons make destructive confirmation flows clear.`,type:`warning`,toast:!1,showCloseButton:!0,buttons:`confirm-deny-cancel`,confirmButtonText:`Review`,denyButtonText:`Delete key`,cancelButtonText:`Cancel`})}async showErrorModal(){await this.runAlert(`error modal`,{title:`Payment failed`,message:`The card was declined. Ask the customer to try another payment method.`,type:`error`,toast:!1,showCloseButton:!0})}async showOkModal(){await this.runAlert(`ok modal`,{title:`Plain OK dialog`,message:`When confirm is hidden, quick-alert resolves with the ok action.`,type:`question`,toast:!1,okButtonText:`Got it`,showCloseButton:!0})}async showTypeDemo(e){await this.runAlert(`${e} type`,{title:`${e} alert`,message:`This live example uses type: '${e}'.`,type:e,toast:!1,buttons:`ok`,okButtonText:`OK`,showCloseButton:!0})}showPositionDemo(e){this.runAlert(`position ${e}`,{id:`position-${e}`,title:`${e} position`,message:`This toast uses position: '${e}'.`,type:`info`,toast:!0,position:e,timeout:2500,showCloseButton:!0,showProgressBar:!0})}async showTransitionDemo(e){await this.runAlert(`${e} transition`,{title:`${e} transition`,message:`This modal uses transition: '${e}'.`,type:`question`,toast:!1,transition:e,buttons:`ok`,okButtonText:`Nice`,showCloseButton:!0})}async showButtonPresetDemo(e){await this.runAlert(`buttons ${e}`,{title:`buttons: '${e}'`,message:`Button presets cover common action layouts with one option.`,type:e===`none`?`info`:`warning`,toast:!1,buttons:e,showCloseButton:!0,confirmButtonText:`Confirm`,denyButtonText:`Deny`,cancelButtonText:`Cancel`,okButtonText:`OK`})}async showEmailInputDemo(){await this.runAlert(`email input`,{title:`Send receipt`,input:`email`,inputLabel:`Email address`,inputPlaceholder:`you@example.com`,buttons:`confirm-cancel`,confirmButtonText:`Send`,cancelButtonText:`Cancel`,inputValidator:e=>e?null:`Email is required`,showCloseButton:!0})}async showPasswordInputDemo(){await this.runAlert(`password input`,{title:`Re-enter password`,input:`password`,inputLabel:`Password`,inputPlaceholder:`Account password`,buttons:`confirm-cancel`,confirmButtonText:`Verify`,cancelButtonText:`Cancel`,preConfirm:async e=>!!e,showCloseButton:!0})}async showNumberInputDemo(){await this.runAlert(`number input`,{title:`Seats to add`,input:`number`,inputLabel:`Seats`,inputValue:3,buttons:`confirm-cancel`,confirmButtonText:`Update seats`,cancelButtonText:`Cancel`,showCloseButton:!0})}async showTextareaInputDemo(){await this.runAlert(`textarea input`,{title:`Leave a note`,input:`textarea`,inputLabel:`Note`,inputPlaceholder:`Write a short note...`,buttons:`confirm-cancel`,confirmButtonText:`Save note`,cancelButtonText:`Cancel`,showCloseButton:!0})}async showSelectInputDemo(){await this.runAlert(`select input`,{title:`Choose plan`,input:`select`,inputLabel:`Plan`,inputValue:`pro`,inputOptions:[{value:`starter`,label:`Starter`},{value:`pro`,label:`Pro`},{value:`enterprise`,label:`Enterprise`}],buttons:`confirm-cancel`,confirmButtonText:`Choose`,cancelButtonText:`Cancel`,showCloseButton:!0})}async showCheckboxInputDemo(){await this.runAlert(`checkbox input`,{title:`Enable alerts?`,input:`checkbox`,inputLabel:`Send me product updates`,inputValue:!0,buttons:`confirm-cancel`,confirmButtonText:`Save preference`,cancelButtonText:`Cancel`,showCloseButton:!0})}async showLegacyFlagsDemo(){await this.runAlert(`legacy button flags`,{title:`Legacy button flags`,message:`The old showConfirmButton, showDenyButton, and showCancelButton options still work.`,type:`warning`,toast:!1,showConfirmButton:!0,showDenyButton:!0,showCancelButton:!0,showCloseButton:!0,confirmButtonText:`Confirm flag`,denyButtonText:`Deny flag`,cancelButtonText:`Cancel flag`})}async showTextPartsDemo(){await this.runAlert(`title subtitle message footer`,{title:`Title text`,subtitle:`Subtitle text`,message:`Message text shows the main alert content.`,footer:`Footer text can hold small notes or help copy.`,type:`info`,toast:!1,buttons:`ok`,okButtonText:`okButtonText`,showCloseButton:!0})}async showNoIconDemo(){await this.runAlert(`showIcon false`,{title:`No icon`,message:`This example uses showIcon: false.`,type:`success`,toast:!1,showIcon:!1,buttons:`ok`,showCloseButton:!0})}showNoProgressToast(){this.runAlert(`showProgressBar false`,{title:`No progress bar`,message:`This toast uses showProgressBar: false.`,type:`info`,toast:!0,position:`top-center`,timeout:2500,showProgressBar:!1,showCloseButton:!0})}async showStringClassDemo(){await this.runAlert(`customClass string`,{title:`String customClass`,message:`A string customClass applies to the popup card.`,type:`success`,toast:!1,customClass:`qa-demo-string-class`,buttons:`ok`,showCloseButton:!0})}async showCustomClassSlotsDemo(){await this.runAlert(`customClass slots`,{title:`Slot customClass`,subtitle:`Every visible slot can be styled`,message:`This call passes popup, overlay, icon, text, button, close, and progress slot classes.`,footer:`Use CSS in your app to style these classes.`,type:`warning`,toast:!1,buttons:`confirm-deny-cancel`,showCloseButton:!0,confirmButtonText:`Styled confirm`,denyButtonText:`Styled deny`,cancelButtonText:`Styled cancel`,customClass:{popup:`qa-demo-popup`,overlay:`qa-demo-overlay`,icon:`qa-demo-icon`,title:`qa-demo-title`,subtitle:`qa-demo-subtitle`,message:`qa-demo-message`,footer:`qa-demo-footer`,actions:`qa-demo-actions`,okButton:`qa-demo-ok`,confirmButton:`qa-demo-confirm`,denyButton:`qa-demo-deny`,cancelButton:`qa-demo-cancel`,closeButton:`qa-demo-close`,progress:`qa-demo-progress`,progressBar:`qa-demo-progress-bar`}})}showQueueDemo(){this.runAlert(`queue first`,{id:`queue-first`,title:`First queued modal`,message:`Open another modal before closing this one; quick-alert keeps them in order.`,type:`question`,toast:!1,buttons:`ok`,showCloseButton:!0}),this.runAlert(`queue second`,{id:`queue-second`,title:`Second queued modal`,message:`This modal waits until the first one resolves.`,type:`info`,toast:!1,buttons:`ok`,showCloseButton:!0})}showStackDemo(){this.runAlert(`stack one`,{id:`stack-one`,title:`Stacked toast one`,message:`Toasts render immediately in the same position stack.`,type:`success`,toast:!0,position:`top-right`,timeout:3500,showCloseButton:!0}),this.runAlert(`stack two`,{id:`stack-two`,title:`Stacked toast two`,message:`The second toast sits below the first instead of overlapping.`,type:`info`,toast:!0,position:`top-right`,timeout:3500,showCloseButton:!0})}async showThemeAccessibilityDemo(){await this.runAlert(`theme accessibility`,{title:``,message:`Theme, button variants, custom classes, and ARIA labels can be set per alert.`,type:`question`,toast:!1,theme:`dark`,ariaLabel:`Accessible themed alert`,buttons:`confirm-cancel`,buttonVariant:`outline`,confirmButtonVariant:`solid`,confirmButtonText:`Confirm theme`,cancelButtonText:`Cancel`,confirmAriaLabel:`Confirm themed alert`,closeAriaLabel:`Close themed alert`,confirmButtonClass:`qa-demo-confirm`,showCloseButton:!0})}async showAsyncDemo(){await this.runAlert(`async preConfirm`,{title:`Verify on server`,message:`The confirm button enters loading state while preConfirm resolves.`,type:`warning`,toast:!1,buttons:`confirm-cancel`,confirmButtonText:`Verify`,cancelButtonText:`Cancel`,showCloseButton:!0,preConfirm:()=>new Promise(e=>{setTimeout(e,900)})})}showPausingTimerDemo(){this.runAlert(`pausing timer`,{id:`pausing-timer`,title:`Pauseable timer`,message:`Hover or focus this toast to pause its timeout and progress bar.`,type:`info`,toast:!0,position:`top-center`,timeout:5e3,pauseOnHover:!0,pauseOnFocus:!0,showProgressBar:!0,showCloseButton:!0,onTimerChange:(e,t)=>this.addEvent(`timer`,`${t}: ${e}s`)})}async showResultMetadataDemo(){await this.runAlert(`result metadata`,{id:`metadata-demo`,title:`Result metadata`,message:`The resolved result includes id and dismissedBy for analytics.`,type:`success`,toast:!1,buttons:`confirm-cancel`,confirmButtonText:`Track confirm`,cancelButtonText:`Track cancel`,showCloseButton:!0})}async showCustomContentDemo(){await this.runAlert(`custom content`,{title:`Safe custom content`,message:`This fallback text is ignored because content is provided.`,type:`info`,toast:!1,buttons:`ok`,showCloseButton:!0,content:({document:e})=>{let t=e.createElement(`ul`);return t.className=`qa-demo-content-list`,[`DOM node content`,`No innerHTML`,`Text remains safe by default`].forEach(n=>{let i=e.createElement(`li`);i.textContent=n,t.appendChild(i)}),t}})}async showLifecycleDemo(){await this.runAlert(`lifecycle callbacks`,{title:`Lifecycle callbacks`,message:`Open, action, timeout, and close callbacks can feed analytics or logs.`,type:`question`,toast:!1,buttons:`confirm-cancel`,confirmButtonText:`Run confirm`,cancelButtonText:`Cancel`,showCloseButton:!0,onOpen:({id:e})=>this.addEvent(`onOpen`,e),onConfirm:e=>this.addEvent(`onConfirm`,e.id),onCancel:e=>this.addEvent(`onCancel`,e.id),onTimeout:e=>this.addEvent(`onTimeout`,e.id),onClose:e=>this.addEvent(`onClose`,e.dismissedBy)})}async showAutoThemeDemo(){await this.runAlert(`auto theme`,{title:`Auto theme`,message:`theme: auto resolves to dark or default when the alert opens.`,type:`success`,toast:!1,theme:`auto`,ariaLabel:`Auto theme alert`,buttons:`ok`,showCloseButton:!0})}showToast(){this.runAlert(`info toast`,{title:`Toast notification`,message:`This toast closes by itself and shows a progress bar.`,type:`info`,toast:!0,position:`top-right`,showCloseButton:!0,showProgressBar:!0})}showPositionToast(){this.runAlert(`bottom toast`,{title:`Bottom-right toast`,message:`Position can be changed per alert.`,type:`success`,toast:!0,position:`bottom-right`,timeout:3500,showProgressBar:!0,showCloseButton:!0})}configureDefaults(){A.configure({type:`info`,toast:!0,position:`top-right`,timeout:3500,showProgressBar:!0}),this.addEvent(`configure`,`toast defaults applied`),this.lastAction.set(`Configured default toast options`)}resetDefaults(){A.resetConfig(),this.addEvent(`resetConfig`,`global defaults cleared`),this.lastAction.set(`Reset quick-alert defaults`)}showConfiguredToast(){this.runAlert(`configured toast`,{id:`docs-toast`,title:`Configured default`,message:`This alert inherits type, toast, position, timeout, and progress settings.`,showCloseButton:!0})}async showScopedDefaultsDemo(){let t=await N({type:`question`,position:`center`,toast:!1,buttons:`ok`,okButtonText:`Scoped OK`}).fire({title:`Scoped defaults`,message:`This alert was created with createQuickAlert(defaults).`,showCloseButton:!0});this.recordResult(`createQuickAlert`,t)}closeTrackedAlert(){A.close(`docs-toast`),this.addEvent(`close(id)`,`docs-toast`),this.lastAction.set(`Closed alert id: docs-toast`)}closeAllAlerts(){A.closeAll(),this.addEvent(`closeAll`,`all active alerts`),this.lastAction.set(`Closed all active alerts`)}runCopyableExample(e){e.run()}scrollToSection(e){typeof document<`u`&&document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})}themeSnippet(e){return`quickAlert.fire({
  title: '${e} theme',
  theme: '${e}',
  buttons: 'confirm-cancel'
});`}iconSnippet(e){return`quickAlert.fire({
  title: '${e} alert',
  type: '${e}',
  buttons: 'ok'
});`}showThemeDemo(e){this.runAlert(`${e} theme`,{title:`${e} theme`,theme:e,type:`info`,toast:!1,buttons:`confirm-cancel`,showCloseButton:!0})}copyToClipboard(e){let t=globalThis.navigator?.clipboard;t?.writeText?t.writeText(e).catch(()=>this.copyWithTextarea(e)):this.copyWithTextarea(e),this.copiedValue.set(e),this.addEvent(`copied`,e),this.clearCopyResetTimeout(),this.copyResetTimeout=setTimeout(()=>this.copiedValue.set(null),1600)}async runAlert(e,t){let n=await A.fire(t);this.recordResult(e,n)}recordResult(e,t){let n=t.value===void 0?``:` value=${String(t.value)}`;this.lastAction.set(`${e}: ${t.action} (${t.dismissedBy})${n}`),this.addEvent(e,`${t.id}:${t.dismissedBy}${n}`)}addEvent(e,t){this.eventLog.update(n=>[{label:e,value:t},...n].slice(0,7))}clearCopyResetTimeout(){this.copyResetTimeout&&(clearTimeout(this.copyResetTimeout),this.copyResetTimeout=null)}copyWithTextarea(e){if(typeof document>`u`)return;let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),t.remove()}static ɵfac=function(t){return new(t||c)};static ɵcmp=cD({type:c,selectors:[[`app-alert`]],decls:317,vars:15,consts:[[1,`alert-docs`],[1,`intro`],[1,`eyebrow`],[1,`lead`],[`aria-label`,`Package statistics`,1,`package-stats`],[`data-testid`,`github-stars`,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`On this page`,1,`page-nav`],[`type`,`button`,3,`click`],[`type`,`button`,`data-testid`,`scroll-to-top`,`title`,`Scroll to top`,`aria-label`,`Scroll to top`,`aria-hidden`,`false`,1,`scroll-to-top`],[`data-testid`,`docs-section`,`id`,`install`,`aria-labelledby`,`install-title`,1,`docs-section`],[`id`,`install-title`],[1,`code-block`],[1,`code-toolbar`],[`type`,`button`,`data-testid`,`copy-install-command`,3,`click`],[`data-testid`,`docs-section`,`id`,`usage`,`aria-labelledby`,`usage-title`,1,`docs-section`],[`id`,`usage-title`],[1,`note`],[`data-testid`,`sweetalert-docs-examples`,`id`,`examples`,`aria-labelledby`,`examples-title`,1,`docs-section`],[`id`,`examples-title`],[`aria-live`,`polite`,1,`live-result`],[1,`example-list`],[`data-testid`,`docs-example-row`,1,`example-row`],[`data-testid`,`docs-section`,`id`,`integrations`,`aria-labelledby`,`integrations-title`,1,`docs-section`],[`id`,`integrations-title`],[1,`integration-list`],[`data-testid`,`docs-section`,`id`,`themes`,`aria-labelledby`,`themes-title`,1,`docs-section`],[`id`,`themes-title`],[1,`theme-list`],[1,`theme-row`],[`data-testid`,`docs-section`,`id`,`configuration`,`aria-labelledby`,`configuration-title`,1,`docs-section`],[`id`,`configuration-title`],[1,`table-scroll`],[`data-testid`,`docs-section`,`id`,`options`,`aria-labelledby`,`options-title`,1,`docs-section`],[`id`,`options-title`],[1,`option-group`],[1,`option-buttons`],[`type`,`button`],[`type`,`button`,`data-testid`,`show-legacy-flags`,`title`,`showConfirmButton, showDenyButton, showCancelButton`,3,`click`],[`type`,`button`,`data-testid`,`show-transition-fade`,3,`click`],[`type`,`button`,`data-testid`,`show-custom-class-slots`,3,`click`],[`type`,`button`,`data-testid`,`show-theme-accessibility-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-queue-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-stack-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-async-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-pausing-timer-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-custom-content-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-lifecycle-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-auto-theme-demo`,3,`click`],[`type`,`button`,`data-testid`,`show-result-metadata-demo`,3,`click`],[`data-testid`,`docs-section`,`id`,`buttons`,`aria-labelledby`,`buttons-title`,1,`docs-section`],[`id`,`buttons-title`],[`type`,`button`,`aria-label`,`Copy result example`,3,`click`],[`data-testid`,`docs-section`,`id`,`dismissals`,`aria-labelledby`,`dismissals-title`,1,`docs-section`],[`id`,`dismissals-title`],[`data-testid`,`docs-section`,`id`,`icons`,`aria-labelledby`,`icons-title`,1,`docs-section`],[`id`,`icons-title`],[1,`icon-list`],[1,`icon-row`],[`data-testid`,`docs-section`,`id`,`methods`,`aria-labelledby`,`methods-title`,1,`docs-section`],[`id`,`methods-title`],[`scope`,`row`],[1,`option-buttons`,`method-actions`],[`type`,`button`,`data-testid`,`close-tracked-alert`,3,`click`],[`type`,`button`,`data-testid`,`close-all-alerts`,3,`click`],[`type`,`button`,`aria-label`,`Copy methods example`,3,`click`],[`aria-labelledby`,`log-title`,1,`docs-section`,`result-section`],[`id`,`log-title`],[1,`event-log`],[3,`title`],[`data-testid`,`github-stars-image`,`src`,`https://img.shields.io/github/stars/subha-patra/quick-alert?style=social`,`alt`,`GitHub stars`,`height`,`20`],[`type`,`button`,`data-testid`,`scroll-to-top`,`title`,`Scroll to top`,`aria-label`,`Scroll to top`,`aria-hidden`,`false`,1,`scroll-to-top`,3,`click`],[1,`example-detail`],[`type`,`button`,1,`try-button`,3,`click`],[`aria-hidden`,`true`,1,`theme-preview`],[1,`theme-copy`],[`aria-hidden`,`true`]],template:function(t,n){if(t&1&&(Yc(0,`main`,0)(1,`header`,1)(2,`p`,2),WT(3,`Documentation and live examples `),Yc(4,`span`),WT(5,`v2.1.0`),Zc()(),Yc(6,`h1`),WT(7,`quick-alert`),Zc(),Yc(8,`p`,3),WT(9,`Alerts and toasts for Angular, React, Vue, and plain JavaScript. Try an example, then copy the code beside it.`),Zc(),Yc(10,`div`,4),XD(11,ne,4,1,`span`),XD(12,oe,4,2,`span`),XD(13,ie,4,1,`span`),XD(14,ae,2,2,`a`,5),Zc(),Yc(15,`nav`,6)(16,`button`,7),Fh(`click`,function(){return n.scrollToSection(`install`)}),WT(17,`Install`),Zc(),Yc(18,`button`,7),Fh(`click`,function(){return n.scrollToSection(`examples`)}),WT(19,`Examples`),Zc(),Yc(20,`button`,7),Fh(`click`,function(){return n.scrollToSection(`integrations`)}),WT(21,`Integrations`),Zc(),Yc(22,`button`,7),Fh(`click`,function(){return n.scrollToSection(`themes`)}),WT(23,`Themes`),Zc(),Yc(24,`button`,7),Fh(`click`,function(){return n.scrollToSection(`configuration`)}),WT(25,`API reference`),Zc()()(),XD(26,re,2,0,`button`,8),Yc(27,`section`,9)(28,`h2`,10),WT(29,`Download & install`),Zc(),Yc(30,`p`),WT(31,`Install the package in any JavaScript project. It has no framework runtime dependency.`),Zc(),Yc(32,`div`,11)(33,`div`,12)(34,`span`),WT(35,`Terminal`),Zc(),Yc(36,`button`,13),Fh(`click`,function(){return n.copyToClipboard(n.installCommand)}),WT(37),Zc()(),Yc(38,`pre`)(39,`code`),WT(40,`npm install quick-alert`),Zc()()()(),Yc(41,`section`,14)(42,`h2`,15),WT(43,`Usage`),Zc(),Yc(44,`p`),WT(45,`Import the same API in every framework, then call `),Yc(46,`code`),WT(47,`fire()`),Zc(),WT(48,` from a browser event.`),Zc(),Yc(49,`div`,11)(50,`div`,12)(51,`span`),WT(52,`JavaScript / TypeScript`),Zc(),Yc(53,`button`,7),Fh(`click`,function(){return n.copyToClipboard(n.usageSnippet)}),WT(54),Zc()(),Yc(55,`pre`)(56,`code`),WT(57),Zc()()(),Yc(58,`p`,16),WT(59,`On the server, importing the package is safe. Open alerts from a browser event or mounted component.`),Zc()(),Yc(60,`section`,17)(61,`h2`,18),WT(62,`Examples`),Zc(),Yc(63,`p`),WT(64,`Each example opens the actual alert. Input alerts, modal flows, toasts, themes, callbacks, and methods all use the same public API.`),Zc(),Yc(65,`div`,19)(66,`span`),WT(67,`Last result`),Zc(),Yc(68,`strong`),WT(69),Zc()(),Yc(70,`div`,20),rT(71,se,17,7,`article`,21,ee),Zc()(),Yc(73,`section`,22)(74,`h2`,23),WT(75,`Integrations`),Zc(),Yc(76,`p`),WT(77,`One root import works across frameworks. Use the call in a client event handler; no provider or plugin registration is required.`),Zc(),Yc(78,`div`,24),rT(79,le,12,5,`details`,null,O),Zc()(),Yc(81,`section`,25)(82,`h2`,26),WT(83,`Themes`),Zc(),Yc(84,`p`),WT(85,`Select a built-in preset with `),Yc(86,`code`),WT(87,`theme`),Zc(),WT(88,`. The `),Yc(89,`code`),WT(90,`auto`),Zc(),WT(91,` preset follows the user's color scheme when the alert opens.`),Zc(),Yc(92,`div`,27),rT(93,ce,21,8,`article`,28,nT),Zc()(),Yc(95,`section`,29)(96,`h2`,30),WT(97,`Configuration parameters`),Zc(),Yc(98,`p`),WT(99,`Pass an options object to `),Yc(100,`code`),WT(101,`quickAlert.fire()`),Zc(),WT(102,`. Global defaults can be set with `),Yc(103,`code`),WT(104,`configure()`),Zc(),WT(105,`; use `),Yc(106,`code`),WT(107,`createQuickAlert()`),Zc(),WT(108,` for isolated defaults.`),Zc(),Yc(109,`div`,31)(110,`table`)(111,`thead`)(112,`tr`)(113,`th`),WT(114,`Option`),Zc(),Yc(115,`th`),WT(116,`Default`),Zc(),Yc(117,`th`),WT(118,`What it does`),Zc()()(),Yc(119,`tbody`),rT(120,ue,9,3,`tr`,null,O),Zc()()()(),Yc(122,`section`,32)(123,`h2`,33),WT(124,`Options in action`),Zc(),Yc(125,`p`),WT(126,`Try the smaller options individually, then copy the option name from the reference table above.`),Zc(),Yc(127,`div`,34)(128,`h3`),WT(129,`Positions`),Zc(),Yc(130,`div`,35),rT(131,de,2,2,`button`,36,nT),Zc()(),Yc(133,`div`,34)(134,`h3`),WT(135,`Button layouts`),Zc(),Yc(136,`div`,35),rT(137,me,2,2,`button`,36,nT),Yc(139,`button`,37),Fh(`click`,function(){return n.showLegacyFlagsDemo()}),WT(140,`Legacy flags`),Zc()()(),Yc(141,`div`,34)(142,`h3`),WT(143,`Transitions and styling`),Zc(),Yc(144,`div`,35)(145,`button`,38),Fh(`click`,function(){return n.showTransitionDemo(`fade`)}),WT(146,`fade`),Zc(),Yc(147,`button`,7),Fh(`click`,function(){return n.showTransitionDemo(`slide`)}),WT(148,`slide`),Zc(),Yc(149,`button`,7),Fh(`click`,function(){return n.showNoIconDemo()}),WT(150,`No icon`),Zc(),Yc(151,`button`,7),Fh(`click`,function(){return n.showNoProgressToast()}),WT(152,`No progress bar`),Zc(),Yc(153,`button`,7),Fh(`click`,function(){return n.showTextPartsDemo()}),WT(154,`Text sections`),Zc(),Yc(155,`button`,7),Fh(`click`,function(){return n.showStringClassDemo()}),WT(156,`String class`),Zc(),Yc(157,`button`,39),Fh(`click`,function(){return n.showCustomClassSlotsDemo()}),WT(158,`Class slots`),Zc(),Yc(159,`button`,40),Fh(`click`,function(){return n.showThemeAccessibilityDemo()}),WT(160,`ARIA and variants`),Zc()()(),Yc(161,`div`,34)(162,`h3`),WT(163,`Flows and timing`),Zc(),Yc(164,`div`,35)(165,`button`,41),Fh(`click`,function(){return n.showQueueDemo()}),WT(166,`Modal queue`),Zc(),Yc(167,`button`,42),Fh(`click`,function(){return n.showStackDemo()}),WT(168,`Toast stack`),Zc(),Yc(169,`button`,43),Fh(`click`,function(){return n.showAsyncDemo()}),WT(170,`Async confirm`),Zc(),Yc(171,`button`,44),Fh(`click`,function(){return n.showPausingTimerDemo()}),WT(172,`Pauseable timer`),Zc(),Yc(173,`button`,45),Fh(`click`,function(){return n.showCustomContentDemo()}),WT(174,`Safe content`),Zc(),Yc(175,`button`,46),Fh(`click`,function(){return n.showLifecycleDemo()}),WT(176,`Lifecycle`),Zc(),Yc(177,`button`,47),Fh(`click`,function(){return n.showAutoThemeDemo()}),WT(178,`Auto theme`),Zc(),Yc(179,`button`,48),Fh(`click`,function(){return n.showResultMetadataDemo()}),WT(180,`Result metadata`),Zc()()()(),Yc(181,`section`,49)(182,`h2`,50),WT(183,`Handling buttons`),Zc(),Yc(184,`p`)(185,`code`),WT(186,`fire()`),Zc(),WT(187,` returns a promise. Read the action flag or the exact `),Yc(188,`code`),WT(189,`dismissedBy`),Zc(),WT(190,` value.`),Zc(),Yc(191,`div`,11)(192,`div`,12)(193,`span`),WT(194,`Promise result`),Zc(),Yc(195,`button`,51),Fh(`click`,function(){return n.copyToClipboard(n.resultSnippet)}),WT(196),Zc()(),Yc(197,`pre`)(198,`code`),WT(199),Zc()()(),Yc(200,`div`,31)(201,`table`)(202,`thead`)(203,`tr`)(204,`th`),WT(205,`Result key`),Zc(),Yc(206,`th`),WT(207,`Meaning`),Zc()()(),Yc(208,`tbody`),rT(209,pe,6,2,`tr`,null,O),Zc()()()(),Yc(211,`section`,52)(212,`h2`,53),WT(213,`Handling dismissals`),Zc(),Yc(214,`p`),WT(215,`The `),Yc(216,`code`),WT(217,`dismissedBy`),Zc(),WT(218,` field tells you how an alert ended, including Escape, timeout, and API close.`),Zc(),Yc(219,`div`,31)(220,`table`)(221,`thead`)(222,`tr`)(223,`th`),WT(224,`Reason`),Zc(),Yc(225,`th`),WT(226,`When it happens`),Zc()()(),Yc(227,`tbody`),rT(228,fe,6,2,`tr`,null,O),Zc()()()(),Yc(230,`section`,54)(231,`h2`,55),WT(232,`Icons`),Zc(),Yc(233,`p`),WT(234,`The five alert types use inline SVG icons. Set `),Yc(235,`code`),WT(236,`showIcon: false`),Zc(),WT(237,` when an icon is not needed.`),Zc(),Yc(238,`div`,56),rT(239,he,16,8,`div`,57,nT),Zc()(),Yc(241,`section`,58)(242,`h2`,59),WT(243,`Methods`),Zc(),Yc(244,`div`,31)(245,`table`)(246,`thead`)(247,`tr`)(248,`th`),WT(249,`Method`),Zc(),Yc(250,`th`),WT(251,`Purpose`),Zc()()(),Yc(252,`tbody`)(253,`tr`)(254,`th`,60)(255,`code`),WT(256,`quickAlert.fire(options)`),Zc()(),Yc(257,`td`),WT(258,`Open a modal or toast and await its result.`),Zc()(),Yc(259,`tr`)(260,`th`,60)(261,`code`),WT(262,`quickAlert.close(id?)`),Zc()(),Yc(263,`td`),WT(264,`Close the matching alert or the current one.`),Zc()(),Yc(265,`tr`)(266,`th`,60)(267,`code`),WT(268,`quickAlert.closeAll()`),Zc()(),Yc(269,`td`),WT(270,`Close active alerts and queued modals.`),Zc()(),Yc(271,`tr`)(272,`th`,60)(273,`code`),WT(274,`quickAlert.configure(defaults)`),Zc()(),Yc(275,`td`),WT(276,`Set defaults for the shared controller.`),Zc()(),Yc(277,`tr`)(278,`th`,60)(279,`code`),WT(280,`quickAlert.resetConfig()`),Zc()(),Yc(281,`td`),WT(282,`Restore the original defaults.`),Zc()(),Yc(283,`tr`)(284,`th`,60)(285,`code`),WT(286,`createQuickAlert(defaults)`),Zc()(),Yc(287,`td`),WT(288,`Create an independent controller with scoped defaults.`),Zc()()()()(),Yc(289,`div`,61)(290,`button`,7),Fh(`click`,function(){return n.configureDefaults()}),WT(291,`Configure defaults`),Zc(),Yc(292,`button`,7),Fh(`click`,function(){return n.showConfiguredToast()}),WT(293,`Try configured toast`),Zc(),Yc(294,`button`,7),Fh(`click`,function(){return n.resetDefaults()}),WT(295,`Reset config`),Zc(),Yc(296,`button`,7),Fh(`click`,function(){return n.showScopedDefaultsDemo()}),WT(297,`Try scoped alert`),Zc(),Yc(298,`button`,62),Fh(`click`,function(){return n.closeTrackedAlert()}),WT(299,`Close by ID`),Zc(),Yc(300,`button`,63),Fh(`click`,function(){return n.closeAllAlerts()}),WT(301,`Close all`),Zc()(),Yc(302,`div`,11)(303,`div`,12)(304,`span`),WT(305,`Controller methods`),Zc(),Yc(306,`button`,64),Fh(`click`,function(){return n.copyToClipboard(n.methodsSnippet)}),WT(307),Zc()(),Yc(308,`pre`)(309,`code`),WT(310),Zc()()()(),Yc(311,`section`,65)(312,`h2`,66),WT(313,`Result log`),Zc(),Yc(314,`ul`,67),rT(315,ge,5,2,`li`,null,te),Zc()()()),t&2){let i,l,s;TE(11),eT((i=n.packageStats().version)?11:-1,i),TE(),eT((l=n.packageStats().updatedAt)?12:-1,l),TE(),eT(n.packageStats().downloads!==void 0?13:-1),TE(),eT((s=n.packageStats().stars)?14:-1,s),TE(12),eT(n.showScrollTop()?26:-1),TE(10),bh(`aria-label`,n.copiedValue()===n.installCommand?`Copied install command`:`Copy install command`),TE(),ig(n.copiedValue()===n.installCommand?`Copied`:`Copy`),TE(16),bh(`aria-label`,n.copiedValue()===n.usageSnippet?`Copied usage code`:`Copy usage code`),TE(),ig(n.copiedValue()===n.usageSnippet?`Copied`:`Copy`),TE(3),ig(n.usageSnippet),TE(12),ig(n.lastAction()),TE(2),oT(n.copyableExamples),TE(8),oT(n.frameworkSnippets),TE(14),oT(n.themes),TE(27),oT(n.configRows),TE(11),oT(n.positions),TE(6),oT(n.buttonPresets),TE(59),ig(n.copiedValue()===n.resultSnippet?`Copied`:`Copy`),TE(3),ig(n.resultSnippet),TE(10),oT(n.resultRows),TE(19),oT(n.dismissalRows),TE(11),oT(n.alertTypes),TE(68),ig(n.copiedValue()===n.methodsSnippet?`Copied`:`Copy`),TE(3),ig(n.methodsSnippet),TE(5),oT(n.eventLog())}},styles:[`.alert-docs[_ngcontent-%COMP%]{min-height:100vh;background:#f7f9fc;color:#252a35;font:16px/1.6 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:36px clamp(16px,4vw,56px) 100px}.intro[_ngcontent-%COMP%], .docs-section[_ngcontent-%COMP%]{max-width:1040px;margin-inline:auto}.intro[_ngcontent-%COMP%]{padding:20px 0 0}.eyebrow[_ngcontent-%COMP%]{color:#5664a9;font-size:12px;font-weight:750;margin:0 0 12px;text-transform:uppercase}.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#697386;margin-left:8px}h1[_ngcontent-%COMP%]{font-size:clamp(42px,6vw,64px);line-height:1;margin:0}.lead[_ngcontent-%COMP%]{color:#596273;font-size:19px;max-width:700px;margin:18px 0 0}.package-stats[_ngcontent-%COMP%]{align-items:center;color:#657083;display:flex;flex-wrap:wrap;gap:8px 22px;min-height:24px;margin-top:20px;font-size:13px}.package-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#4058ab;font-weight:700}.package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{align-items:center;color:#36435a;display:inline-flex;gap:5px;text-decoration:none}.package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{color:#4058ab;text-decoration:underline}.package-stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:inherit}.scroll-to-top[_ngcontent-%COMP%]{align-items:center;background:#fff;border:1px solid #cbd3e2;border-radius:50%;bottom:calc(20px + env(safe-area-inset-bottom));box-shadow:0 5px 18px #25345424;color:#384964;cursor:pointer;display:flex;font:22px/1 system-ui,sans-serif;height:44px;justify-content:center;position:fixed;right:calc(20px + env(safe-area-inset-right));width:44px;z-index:20}.scroll-to-top[_ngcontent-%COMP%]:hover, .scroll-to-top[_ngcontent-%COMP%]:focus-visible{border-color:#5665d8;color:#4354c4;outline:2px solid #adb8f2;outline-offset:2px}.page-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.page-nav[_ngcontent-%COMP%]{border-bottom:1px solid #dce2eb;margin-top:28px;padding-bottom:13px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:none;color:#46536b;cursor:pointer;font:inherit;font-size:14px;font-weight:650;padding:5px 11px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{color:#4354c4;text-decoration:underline}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:transparent;border:0;cursor:pointer;font:inherit;font-size:12px;font-weight:700;padding:7px 12px}.docs-section[_ngcontent-%COMP%]{border-top:1px solid #dce2eb;padding:48px 0 54px;scroll-margin-top:18px}.docs-section#install[_ngcontent-%COMP%]{border-top:0}.docs-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#4f5869;font-size:27px;font-weight:550;line-height:1.2;margin:0 0 16px;text-align:center;text-transform:uppercase}.docs-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#5b6574;margin:0 auto 26px;max-width:780px;text-align:center}.docs-section[_ngcontent-%COMP%] > .note[_ngcontent-%COMP%]{color:#697386;font-size:14px;margin-top:14px}.docs-section[_ngcontent-%COMP%] > .code-block[_ngcontent-%COMP%]{max-width:780px;margin-inline:auto}.code-block[_ngcontent-%COMP%]{background:#272c36;border:1px solid #242a33;border-radius:4px;min-width:0;overflow:hidden}.code-toolbar[_ngcontent-%COMP%]{align-items:center;background:#20252d;color:#bdc7d5;display:flex;font-size:11px;font-weight:650;justify-content:space-between;min-height:32px;padding-left:12px;text-transform:uppercase}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:stretch;border-left:1px solid #3b414d;color:#e4e8f0;min-width:62px}.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{background:#45506b;color:#fff}pre[_ngcontent-%COMP%]{color:#dce7d2;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;margin:0;overflow:auto;padding:12px 14px;tab-size:2}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{white-space:pre}code[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.live-result[_ngcontent-%COMP%]{align-items:baseline;background:#edf1f8;border-left:3px solid #5665d8;color:#546074;display:flex;flex-wrap:wrap;gap:14px;margin-bottom:16px;padding:9px 14px}.live-result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:800;text-transform:uppercase}.live-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263247;font-size:14px;overflow-wrap:anywhere}.example-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb}.example-row[_ngcontent-%COMP%]{display:grid;gap:24px;grid-template-columns:minmax(0,260px) minmax(0,1fr);padding:24px 0;border-bottom:1px solid #dce2eb}.example-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .theme-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:17px;font-weight:650;line-height:1.3;margin:0 0 7px}.example-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#677180;font-size:14px;line-height:1.5;margin:0 0 16px}.try-button[_ngcontent-%COMP%]{background:#6262d7;border:1px solid #6262d7;border-radius:4px;color:#fff;cursor:pointer;font:inherit;font-size:14px;font-weight:700;min-height:38px;padding:6px 18px}.try-button[_ngcontent-%COMP%]:hover, .try-button[_ngcontent-%COMP%]:focus-visible{background:#4b4bb6;outline:2px solid #b6b6f4;outline-offset:2px}.example-row[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{align-self:start}.integration-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb;max-width:780px;margin-inline:auto}.integration-list[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]{border-bottom:1px solid #dce2eb;padding:11px 0}.integration-list[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{color:#354158;cursor:pointer;font-weight:650;padding:3px 5px}.integration-list[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{margin-top:10px}.theme-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb}.theme-row[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid #dce2eb;display:grid;gap:20px;grid-template-columns:170px 140px minmax(0,1fr);padding:20px 0}.theme-preview[_ngcontent-%COMP%]{background:#fff;border:1px solid #cbd3e2;border-radius:4px;box-shadow:0 3px 10px #20314c12;color:#283246;display:grid;gap:3px;height:94px;padding:12px 15px}.theme-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;line-height:1.2;text-transform:capitalize}.theme-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6b7280;font-size:11px}.theme-preview[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#6262d7;border-radius:3px;height:12px;margin-top:6px;width:44px}.theme-dark[_ngcontent-%COMP%]{background:#252b37;color:#fff}.theme-dark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#bdc5d4}.theme-auto[_ngcontent-%COMP%]{background:linear-gradient(145deg,#252b37 0 50%,#fff 50% 100%);color:#fff}.theme-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#29a569}.theme-minimal[_ngcontent-%COMP%]{box-shadow:none;border-color:transparent}.theme-glass[_ngcontent-%COMP%]{background:#ffffffb0;box-shadow:0 8px 18px #6986af40}.theme-material[_ngcontent-%COMP%]{box-shadow:0 6px 14px #20314c38}.theme-bootstrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#0d6efd}.theme-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:capitalize}.theme-copy[_ngcontent-%COMP%]   .try-button[_ngcontent-%COMP%]{padding-inline:12px}.table-scroll[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{border-collapse:collapse;font-size:14px;text-align:left;width:100%}thead[_ngcontent-%COMP%]{background:#fff;color:#465269}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-bottom:1px solid #e1e6ee;padding:11px 14px;vertical-align:top}th[_ngcontent-%COMP%]{font-weight:650}tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#c12c6b;min-width:210px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#f0f3f9}td[_ngcontent-%COMP%]{color:#4f5a69}td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef1f5;border-radius:3px;overflow-wrap:anywhere;padding:2px 4px}.option-group[_ngcontent-%COMP%]{border-top:1px solid #dce2eb;padding:16px 0}.option-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#37445b;font-size:16px;margin:0 0 10px}.option-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:1px solid #cdd6e5;border-radius:4px;color:#33435f;cursor:pointer;font:inherit;font-size:13px;padding:7px 12px}.option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .option-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{border-color:#6262d7;color:#4b4bb6;outline:none}.method-actions[_ngcontent-%COMP%]{margin:20px 0}.icon-list[_ngcontent-%COMP%]{border-top:1px solid #dce2eb}.icon-row[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid #dce2eb;display:grid;gap:16px;grid-template-columns:54px 90px 112px minmax(0,1fr);padding:16px 0}.icon-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}.icon-mark[_ngcontent-%COMP%]{align-items:center;border:2px solid currentColor;border-radius:50%;display:flex;font-size:26px;height:48px;justify-content:center;width:48px}.icon-success[_ngcontent-%COMP%]{color:#34a268}.icon-error[_ngcontent-%COMP%]{color:#e06b72}.icon-warning[_ngcontent-%COMP%]{color:#de9a4e}.icon-info[_ngcontent-%COMP%]{color:#41a9d0}.icon-question[_ngcontent-%COMP%]{color:#829bab}.icon-row[_ngcontent-%COMP%]   .try-button[_ngcontent-%COMP%]{padding-inline:10px}.event-log[_ngcontent-%COMP%]{list-style:none;margin:0 auto;max-width:780px;padding:0}.event-log[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #dce2eb;display:flex;gap:16px;justify-content:space-between;padding:9px 0}.event-log[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{overflow-wrap:anywhere}@media(max-width:760px){.alert-docs[_ngcontent-%COMP%]{padding-inline:16px}.example-row[_ngcontent-%COMP%]{gap:12px;grid-template-columns:1fr}.example-detail[_ngcontent-%COMP%]{display:grid;gap:8px;grid-template-columns:minmax(0,1fr) auto}.example-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .example-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{grid-column:1;margin:0}.example-detail[_ngcontent-%COMP%]   .try-button[_ngcontent-%COMP%]{align-self:center;grid-column:2;grid-row:1/3}.theme-row[_ngcontent-%COMP%]{grid-template-columns:130px minmax(0,1fr)}.theme-row[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{grid-column:1/-1}.icon-row[_ngcontent-%COMP%]{grid-template-columns:48px 1fr auto}.icon-row[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]{grid-column:1/-1}}@media(max-width:480px){.docs-section[_ngcontent-%COMP%]{padding-block:34px}.docs-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}.page-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-inline:5px}.example-detail[_ngcontent-%COMP%]{display:block}.example-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:12px}.theme-row[_ngcontent-%COMP%]{grid-template-columns:104px 1fr}.theme-preview[_ngcontent-%COMP%]{padding:10px}.event-log[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:grid;gap:0}}`]})};export{G as Alert};