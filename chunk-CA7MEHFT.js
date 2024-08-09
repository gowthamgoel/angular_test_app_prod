import{A as te,B as ie,C as l,D as u,E as V,F as Ae,G as Me,H as ne,I as m,J as Ee,K as re,L as o,M as G,N as x,O as we,P as Fe,Q as Ie,R as Se,S as se,T as oe,U as xe,V as Oe,W as Ne,_ as ae,a as d,b as p,c as ye,d as ve,e as _e,f as Ce,g as j,h as w,i as X,j as y,k as _,l as Ve,m as v,n as h,o as Y,p as F,q as I,r as K,s as Q,t as S,u as C,v as a,w as ee,x as g,y as De,z as be}from"./chunk-5OHW7RC4.js";var Pe=(()=>{let e=class e{constructor(){this.currentReadingName="current-reading"}getCurrentReading(){try{let t=localStorage.getItem(this.currentReadingName);return JSON.parse(t)}catch(t){return console.log(t),[]}}updateCurrentReading(t){try{let r=this.getCurrentReading()||[];return r.push(t),localStorage.setItem(this.currentReadingName,JSON.stringify(r)),!0}catch(r){return console.log(r),!1}}updateWholeReadings(t){try{return localStorage.setItem(this.currentReadingName,JSON.stringify(t)),this.getCurrentReading()}catch(r){return console.log(r),[]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Le=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(ee),a(Q))},e.\u0275dir=h({type:e});let i=e;return i})(),ut=(()=>{let e=class e extends Le{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=K(e)))(s||e)}})(),e.\u0275dir=h({type:e,features:[g]});let i=e;return i})(),$e=new _("");var dt={provide:$e,useExisting:w(()=>Z),multi:!0};function ct(){let i=oe()?oe().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ht=new _(""),Z=(()=>{let e=class e extends Le{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ct())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(ee),a(Q),a(ht,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&m("input",function(f){return s._handleInput(f.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(f){return s._compositionEnd(f.target.value)})},features:[x([dt]),g]});let i=e;return i})();function ft(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var ue=new _(""),We=new _("");function pt(i){return ft(i.value)?{required:!0}:null}function ke(i){return null}function qe(i){return i!=null}function ze(i){return Ie(i)?ve(i):i}function Ze(i){let e={};return i.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Je(i,e){return e.map(n=>n(i))}function gt(i){return!i.validate}function Xe(i){return i.map(e=>gt(e)?e:n=>e.validate(n))}function mt(i){if(!i)return null;let e=i.filter(qe);return e.length==0?null:function(n){return Ze(Je(n,e))}}function de(i){return i!=null?mt(Xe(i)):null}function yt(i){if(!i)return null;let e=i.filter(qe);return e.length==0?null:function(n){let t=Je(n,e).map(ze);return Ce(t).pipe(_e(Ze))}}function ce(i){return i!=null?yt(Xe(i)):null}function Te(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function vt(i){return i._rawValidators}function _t(i){return i._rawAsyncValidators}function le(i){return i?Array.isArray(i)?i:[i]:[]}function H(i,e){return Array.isArray(i)?i.includes(e):i===e}function Re(i,e){let n=le(e);return le(i).forEach(r=>{H(n,r)||n.push(r)}),n}function je(i,e){return le(e).filter(n=>!H(i,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=de(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},A=class extends L{get formDirective(){return null}get path(){return null}},R=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},li=p(d({},Ct),{"[class.ng-submitted]":"isSubmitted"}),Ye=(()=>{let e=class e extends ${constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(R,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&ie("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let i=e;return i})(),Ke=(()=>{let e=class e extends ${constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(A,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&ie("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[g]});let i=e;return i})();var O="VALID",U="INVALID",D="PENDING",N="DISABLED",M=class{},W=class extends M{constructor(e,n){super(),this.value=e,this.source=n}},k=class extends M{constructor(e,n){super(),this.pristine=e,this.source=n}},T=class extends M{constructor(e,n){super(),this.touched=e,this.source=n}},b=class extends M{constructor(e,n){super(),this.status=e,this.source=n}};function Qe(i){return(J(i)?i.validators:i)||null}function Vt(i){return Array.isArray(i)?de(i):i||null}function et(i,e){return(J(e)?e.asyncValidators:i)||null}function Dt(i){return Array.isArray(i)?ce(i):i||null}function J(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function bt(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new j(1e3,"");if(!t[n])throw new j(1001,"")}function At(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new j(1002,"")})}var q=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new ye,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===U}get pending(){return this.status==D}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(p(d({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new T(!0,t))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:t})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t),n&&e.emitEvent!==!1&&this._events.next(new T(!1,t))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(p(d({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new k(!1,t))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),n&&e.emitEvent!==!1&&this._events.next(new k(!0,t))}markAsPending(e={}){this.status=D;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(p(d({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(r=>{r.disable(p(d({},e),{onlySelf:!0}))}),this._updateValue();let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(t=>{t.enable(p(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===D)&&this._runAsyncValidator(t,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,n)),this._events.next(new b(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(p(d({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let t=ze(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,t){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||t)&&this._events.next(new b(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,t)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(U)?U:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new k(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new T(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){J(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Vt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Dt(this._rawAsyncValidators)}},z=class extends q{constructor(e,n,t){super(Qe(n),et(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){At(this,!0,e),Object.keys(e).forEach(t=>{bt(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var he=new _("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function Mt(i,e){return[...e.path,i]}function tt(i,e,n=fe){it(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),wt(i,e),It(i,e),Ft(i,e),Et(i,e)}function Ge(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Et(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function it(i,e){let n=vt(i);e.validator!==null?i.setValidators(Te(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=_t(i);e.asyncValidator!==null?i.setAsyncValidators(Te(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();Ge(e._rawValidators,r),Ge(e._rawAsyncValidators,r)}function wt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&nt(i,e)})}function Ft(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&nt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function nt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function It(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function St(i,e){i==null,it(i,e)}function xt(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ot(i){return Object.getPrototypeOf(i.constructor)===ut}function Nt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Pt(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===Z?n=s:Ot(s)?t=s:r=s}),r||t||n||null}var kt={provide:A,useExisting:w(()=>pe)},P=Promise.resolve(),pe=(()=>{let e=class e extends A{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new S,this.form=new z({},de(t),ce(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){P.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),tt(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){P.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){P.then(()=>{let r=this._findContainer(t.path),s=new z({});St(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){P.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){P.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Nt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(a(ue,10),a(We,10),a(he,8))},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&m("submit",function(f){return s.onSubmit(f)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[x([kt]),g]});let i=e;return i})();function Be(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Ue(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Tt=class extends q{constructor(e=null,n,t){super(Qe(n),et(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),J(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt={provide:R,useExisting:w(()=>ge)},He=Promise.resolve(),ge=(()=>{let e=class e extends R{constructor(t,r,s,c,f,E){super(),this._changeDetectorRef=f,this.callSetDisabledState=E,this.control=new Tt,this._registered=!1,this.name="",this.update=new S,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Pt(this,c)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),xt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){tt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){He.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,s=r!==0&&se(r);He.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Mt(t,this._parent):[t]}};e.\u0275fac=function(r){return new(r||e)(a(A,9),a(ue,10),a(We,10),a($e,10),a(Se,8),a(he,8))},e.\u0275dir=h({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[x([Rt]),g,Y]});let i=e;return i})(),rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var jt=(()=>{let e=class e{constructor(){this._validator=ke}ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):ke,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,features:[Y]});let i=e;return i})();var Gt={provide:ue,useExisting:w(()=>me),multi:!0};var me=(()=>{let e=class e extends jt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=se,this.createValidator=t=>pt}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=K(e)))(s||e)}})(),e.\u0275dir=h({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&be("required",s._enabled?"":null)},inputs:{required:"required"},features:[x([Gt]),g]});let i=e;return i})();var Bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v({type:e}),e.\u0275inj=y({});let i=e;return i})();var st=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:he,useValue:t.callSetDisabledState??fe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v({type:e}),e.\u0275inj=y({imports:[Bt]});let i=e;return i})();function Ht(i,e){if(i&1){let n=ne();Ae(0),l(1,"tr")(2,"td"),o(3),we(4,"date"),u(),l(5,"td"),o(6),u(),l(7,"td"),o(8),u(),l(9,"td")(10,"button",1),m("click",function(){let r=F(n).index,s=Ee();return I(s.removeReading(r))}),o(11,"X"),u()()(),Me()}if(i&2){let n=e.$implicit;C(3),G(Fe(4,3,n.dateTime,"yyyy-MM-dd HH:mm:ss")),C(3),G(n.reading),C(2),G(n==null?null:n.comments)}}var ot=(()=>{let e=class e{constructor(t){this.dts=t,this.readings=[]}ngOnInit(){this.getAllReadings()}getAllReadings(){this.readings=this.dts.getCurrentReading()}submit(t){try{t.form.status==="VALID"&&(this.dts.updateCurrentReading(t.value),this.getAllReadings(),t.reset())}catch(r){console.log(r)}}removeReading(t){confirm("Are you sure?")&&(this.readings.splice(t,1),this.readings=this.dts.updateWholeReadings(this.readings))}onReset(t){t.reset()}};e.\u0275fac=function(r){return new(r||e)(a(Pe))},e.\u0275cmp=Ve({type:e,selectors:[["app-current-reading"]],decls:46,vars:2,consts:[["readingForm","ngForm"],[3,"click"],[4,"ngFor","ngForOf"],[3,"ngSubmit"],["for","reading"],["type","text","id","reading","name","reading","ngModel","","required",""],["for","dateTime"],["type","datetime-local","id","dateTime","name","dateTime","ngModel","","required",""],["for","comments"],["id","comments","name","comments","ngModel","",3,"rows"],["type","submit"],["type","button",3,"click"]],template:function(r,s){if(r&1){let c=ne();l(0,"h1"),o(1,"Current Reading"),u(),l(2,"button",1),m("click",function(){return F(c),I(s.getAllReadings())}),o(3,"Refresh Readings"),u(),V(4,"br")(5,"br")(6,"br"),l(7,"table")(8,"thead")(9,"tr")(10,"th"),o(11,"Date Time"),u(),l(12,"th"),o(13,"Reading"),u(),l(14,"th"),o(15,"Comments"),u(),V(16,"th"),u()(),l(17,"tbody"),De(18,Ht,12,6,"ng-container",2),u()(),l(19,"h2"),o(20,"New Reading"),u(),l(21,"form",3,0),m("ngSubmit",function(){F(c);let E=re(22);return I(s.submit(E))}),l(23,"label",4),o(24,"Reading"),u(),o(25,"\xA0 "),V(26,"input",5)(27,"br")(28,"br"),l(29,"label",6),o(30,"Date Time"),u(),o(31,"\xA0 "),V(32,"input",7)(33,"br")(34,"br"),l(35,"label",8),o(36,"Comments"),u(),o(37,"\xA0 "),V(38,"textarea",9)(39,"br")(40,"br"),l(41,"button",10),o(42,"Submit"),u(),o(43,"\xA0\xA0 "),l(44,"button",11),m("click",function(){F(c);let E=re(22);return I(s.onReset(E))}),o(45,"Reset"),u()()}r&2&&(C(18),te("ngForOf",s.readings),C(20),te("rows",2))},dependencies:[xe,rt,Z,Ye,Ke,me,ge,pe,Oe],styles:["table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:200px;height:50px}"]});let i=e;return i})();var Lt=[{path:"",component:ot}],at=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v({type:e}),e.\u0275inj=y({imports:[ae.forChild(Lt),ae]});let i=e;return i})();var Vi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v({type:e}),e.\u0275inj=y({imports:[Ne,st,at]});let i=e;return i})();export{Vi as CurrentReadingModule};
