"use strict";(self.webpackChunkpos=self.webpackChunkpos||[]).push([[561],{9561:(M,m,a)=>{a.r(m),a.d(m,{ProductsModule:()=>L});var e=a(9808),y=a(573),n=a(4448),x=a(1221),t=a(5e3);let u=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[e.ez,x.e]]}),r})();var _=a(9735),c=a(8306),o=a(8421);const{isArray:C}=Array;var b=a(515),S=a(5403),O=a(3269);var f=a(590),I=a(2386),U=a(4004),w=a(7225),A=a(6082),P=a(4655),Z=a(4562),h=a(7805);const T=function(){return{class:"products-form-popup"}},R=function(){return{dataType:"date"}},F=function(){return{dataType:"date",disabled:!0}},K=function(){return["5","10","15"]},J=[{path:"",component:(()=>{class r extends I.V{constructor(s,d,p){super(),this._productService=s,this._categoryService=d,this._supplierService=p,this.products=[],this.categories=[],this.suppliers=[],this.priceEditorOptions={type:"currency",onKeyDown:g=>{69===g.event.which&&g.event.preventDefault()}}}ngOnInit(){super.subscribe(function B(...r){const l=(0,O.jO)(r),s=function i(r){return 1===r.length&&C(r[0])?r[0]:r}(r);return s.length?new c.y(d=>{let p=s.map(()=>[]),g=s.map(()=>!1);d.add(()=>{p=g=null});for(let v=0;!d.closed&&v<s.length;v++)(0,o.Xf)(s[v]).subscribe((0,S.x)(d,Q=>{if(p[v].push(Q),p.every(E=>E.length)){const E=p.map(D=>D.shift());d.next(l?l(...E):E),p.some((D,j)=>!D.length&&g[j])&&d.complete()}},()=>{g[v]=!0,!p[v].length&&d.complete()}));return()=>{p=g=null}}):b.E}([this._categoryService.getAll(),this._supplierService.getAll()]),([s,d])=>{this.categories=(0,w.Zr)(s),this.suppliers=(0,w.Zr)(d),this._getAll()})}ngOnDestroy(){super.dispose()}_getAll(){this._productService.getAll().pipe((0,U.U)(s=>s.map(d=>(d.expiration=new Date(+d.expiration),d.createdDate=new Date(+d.createdDate),d))),(0,f.P)()).subscribe(s=>{this.products=s})}currencyFormat(s){return(0,w.oB)(s.price)}onSaving(s){(0,w.F2)(this._productService,s,()=>this._getAll())}onInitNewRow(s){const d=new Date;d.setHours(0,0,0,0),s.data={status:!0,createdDate:+d}}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(A.M),t.Y36(P.H),t.Y36(Z.p))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-products"]],viewQuery:function(s,d){if(1&s&&t.Gf(y.e,5),2&s){let p;t.iGM(p=t.CRH())&&(d.grid=p.first)}},hostAttrs:[1,"default-app-style"],features:[t.qOj],decls:34,vars:30,consts:[[1,"text-6xl","mb-6"],["keyExpr","id",1,"shadow-xl",3,"dataSource","allowColumnReordering","allowColumnResizing","onSaving","onInitNewRow"],["dataField","name","caption","Name"],["type","required"],["dataField","description","caption","Description"],["dataField","expiration","caption","Expiration","dataType","date"],["dataField","category","caption","Category"],["valueExpr","id","displayExpr","name",3,"dataSource"],["dataField","supplier","caption","Supplier"],["dataField","price","caption","Price",3,"calculateDisplayValue"],["dataField","createdDate","caption","Created Date","dataType","date","allowEditing","false"],["dataField","reorderPoint","caption","Reorder Point","dataType","number"],["dataField","stock","caption","Stocks","dataType","number",3,"allowEditing"],["mode","popup",3,"allowUpdating","allowDeleting","allowAdding"],["title","Add Product","width","auto","height","auto",3,"showTitle","wrapperAttr"],["itemType","group",3,"colCount","colSpan"],["dataField","name"],["dataField","category"],["dataField","expiration",3,"editorOptions"],["dataField","supplier"],["dataField","price","editorType","dxNumberBox",3,"editorOptions"],["dataField","createdDate",3,"editorOptions"],["dataField","reorderPoint"],[3,"visible"],["displayMode","full",3,"visible","allowedPageSizes","showInfo","showNavigationButtons"],[3,"pageSize","enabled"]],template:function(s,d){1&s&&(t.TgZ(0,"h1",0),t._uU(1,"Products"),t.qZA(),t.TgZ(2,"dx-data-grid",1),t.NdJ("onSaving",function(g){return d.onSaving(g)})("onInitNewRow",function(g){return d.onInitNewRow(g)}),t.TgZ(3,"dxi-column",2),t._UZ(4,"dxi-validation-rule",3),t.qZA(),t._UZ(5,"dxi-column",4),t.TgZ(6,"dxi-column",5),t._UZ(7,"dxi-validation-rule",3),t.qZA(),t.TgZ(8,"dxi-column",6),t._UZ(9,"dxo-lookup",7),t.qZA(),t.TgZ(10,"dxi-column",8),t._UZ(11,"dxo-lookup",7),t.qZA(),t.TgZ(12,"dxi-column",9),t._UZ(13,"dxi-validation-rule",3),t.qZA(),t._UZ(14,"dxi-column",10),t._UZ(15,"dxi-column",11),t._UZ(16,"dxi-column",12),t.TgZ(17,"dxo-editing",13),t._UZ(18,"dxo-popup",14),t.TgZ(19,"dxo-form"),t.TgZ(20,"dxi-item",15),t._UZ(21,"dxi-item",16),t.TgZ(22,"dxi-item",17),t._UZ(23,"dxo-lookup",7),t.qZA(),t._UZ(24,"dxi-item",4),t._UZ(25,"dxi-item",18),t.TgZ(26,"dxi-item",19),t._UZ(27,"dxo-lookup",7),t.qZA(),t._UZ(28,"dxi-item",20),t._UZ(29,"dxi-item",21),t._UZ(30,"dxi-item",22),t.qZA(),t.qZA(),t.qZA(),t._UZ(31,"dxo-filter-row",23),t._UZ(32,"dxo-pager",24),t._UZ(33,"dxo-paging",25),t.qZA()),2&s&&(t.xp6(2),t.Q6J("dataSource",d.products)("allowColumnReordering",!0)("allowColumnResizing",!0),t.xp6(7),t.Q6J("dataSource",d.categories),t.xp6(2),t.Q6J("dataSource",d.suppliers),t.xp6(1),t.Q6J("calculateDisplayValue",d.currencyFormat),t.xp6(4),t.Q6J("allowEditing",!1),t.xp6(1),t.Q6J("allowUpdating",!0)("allowDeleting",!0)("allowAdding",!0),t.xp6(1),t.Q6J("showTitle",!0)("wrapperAttr",t.DdM(26,T)),t.xp6(2),t.Q6J("colCount",2)("colSpan",2),t.xp6(3),t.Q6J("dataSource",d.categories),t.xp6(2),t.Q6J("editorOptions",t.DdM(27,R)),t.xp6(2),t.Q6J("dataSource",d.suppliers),t.xp6(1),t.Q6J("editorOptions",d.priceEditorOptions),t.xp6(1),t.Q6J("editorOptions",t.DdM(28,F)),t.xp6(2),t.Q6J("visible",!0),t.xp6(1),t.Q6J("visible",!0)("allowedPageSizes",t.DdM(29,K))("showInfo",!0)("showNavigationButtons",!0),t.xp6(1),t.Q6J("pageSize",10)("enabled",!0))},directives:[y.e,h.qvW,h.vrV,h.w3U,h.Uo8,h.gt6,h.U12,h.ZT3,h.I62,h.ilc,h.sXh],styles:[""]}),r})()}];let z=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[_.Bz.forChild(J)],_.Bz]}),r})(),L=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[e.ez,z,y.x,n.n,n.n,u]]}),r})()},6082:(M,m,a)=>{a.d(m,{M:()=>t});var e=a(2340),y=a(3857),n=a(5e3),x=a(520);let t=(()=>{class u extends y.b{constructor(c){super(c),this.http=c,this.BASE_ROUTE="product"}getProductBySupplier(c){return this.http.get(`${e.N.apiUrl}/product/supplier/${c}`)}}return u.\u0275fac=function(c){return new(c||u)(n.LFG(x.eN))},u.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1221:(M,m,a)=>{a.d(m,{K:()=>_,e:()=>c});var e=a(1547),y=a(2313),n=a(5e3),x=a(3946),t=a(9828);const u=["*"];let _=(()=>{let o=class extends t.Ay{constructor(i,b,S,O,B,f,I){super(i,b,S,O,f,I),this._createEventEmitters([{subscribe:"click",emit:"onClick"},{subscribe:"contentReady",emit:"onContentReady"},{subscribe:"disposing",emit:"onDisposing"},{subscribe:"initialized",emit:"onInitialized"},{subscribe:"optionChanged",emit:"onOptionChanged"},{emit:"accessKeyChange"},{emit:"activeStateEnabledChange"},{emit:"disabledChange"},{emit:"elementAttrChange"},{emit:"focusStateEnabledChange"},{emit:"heightChange"},{emit:"hintChange"},{emit:"hoverStateEnabledChange"},{emit:"iconChange"},{emit:"rtlEnabledChange"},{emit:"stylingModeChange"},{emit:"tabIndexChange"},{emit:"templateChange"},{emit:"textChange"},{emit:"typeChange"},{emit:"useSubmitBehaviorChange"},{emit:"validationGroupChange"},{emit:"visibleChange"},{emit:"widthChange"}]),B.setHost(this)}get accessKey(){return this._getOption("accessKey")}set accessKey(i){this._setOption("accessKey",i)}get activeStateEnabled(){return this._getOption("activeStateEnabled")}set activeStateEnabled(i){this._setOption("activeStateEnabled",i)}get disabled(){return this._getOption("disabled")}set disabled(i){this._setOption("disabled",i)}get elementAttr(){return this._getOption("elementAttr")}set elementAttr(i){this._setOption("elementAttr",i)}get focusStateEnabled(){return this._getOption("focusStateEnabled")}set focusStateEnabled(i){this._setOption("focusStateEnabled",i)}get height(){return this._getOption("height")}set height(i){this._setOption("height",i)}get hint(){return this._getOption("hint")}set hint(i){this._setOption("hint",i)}get hoverStateEnabled(){return this._getOption("hoverStateEnabled")}set hoverStateEnabled(i){this._setOption("hoverStateEnabled",i)}get icon(){return this._getOption("icon")}set icon(i){this._setOption("icon",i)}get rtlEnabled(){return this._getOption("rtlEnabled")}set rtlEnabled(i){this._setOption("rtlEnabled",i)}get stylingMode(){return this._getOption("stylingMode")}set stylingMode(i){this._setOption("stylingMode",i)}get tabIndex(){return this._getOption("tabIndex")}set tabIndex(i){this._setOption("tabIndex",i)}get template(){return this._getOption("template")}set template(i){this._setOption("template",i)}get text(){return this._getOption("text")}set text(i){this._setOption("text",i)}get type(){return this._getOption("type")}set type(i){this._setOption("type",i)}get useSubmitBehavior(){return this._getOption("useSubmitBehavior")}set useSubmitBehavior(i){this._setOption("useSubmitBehavior",i)}get validationGroup(){return this._getOption("validationGroup")}set validationGroup(i){this._setOption("validationGroup",i)}get visible(){return this._getOption("visible")}set visible(i){this._setOption("visible",i)}get width(){return this._getOption("width")}set width(i){this._setOption("width",i)}_createInstance(i,b){return new x.Z(i,b)}ngOnDestroy(){this._destroyWidget()}};return o.\u0275fac=function(i){return new(i||o)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(t._5),n.Y36(t._h),n.Y36(t.al),n.Y36(y.ki),n.Y36(n.Lbi))},o.\u0275cmp=n.Xpm({type:o,selectors:[["dx-button"]],inputs:{accessKey:"accessKey",activeStateEnabled:"activeStateEnabled",disabled:"disabled",elementAttr:"elementAttr",focusStateEnabled:"focusStateEnabled",height:"height",hint:"hint",hoverStateEnabled:"hoverStateEnabled",icon:"icon",rtlEnabled:"rtlEnabled",stylingMode:"stylingMode",tabIndex:"tabIndex",template:"template",text:"text",type:"type",useSubmitBehavior:"useSubmitBehavior",validationGroup:"validationGroup",visible:"visible",width:"width"},outputs:{onClick:"onClick",onContentReady:"onContentReady",onDisposing:"onDisposing",onInitialized:"onInitialized",onOptionChanged:"onOptionChanged",accessKeyChange:"accessKeyChange",activeStateEnabledChange:"activeStateEnabledChange",disabledChange:"disabledChange",elementAttrChange:"elementAttrChange",focusStateEnabledChange:"focusStateEnabledChange",heightChange:"heightChange",hintChange:"hintChange",hoverStateEnabledChange:"hoverStateEnabledChange",iconChange:"iconChange",rtlEnabledChange:"rtlEnabledChange",stylingModeChange:"stylingModeChange",tabIndexChange:"tabIndexChange",templateChange:"templateChange",textChange:"textChange",typeChange:"typeChange",useSubmitBehaviorChange:"useSubmitBehaviorChange",validationGroupChange:"validationGroupChange",visibleChange:"visibleChange",widthChange:"widthChange"},features:[n._Bn([t._5,t._h,t.al]),n.qOj],ngContentSelectors:u,decls:1,vars:0,template:function(i,b){1&i&&(n.F$t(),n.Hsn(0))},encapsulation:2}),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",String),(0,e.w6)("design:paramtypes",[String])],o.prototype,"accessKey",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Boolean),(0,e.w6)("design:paramtypes",[Boolean])],o.prototype,"activeStateEnabled",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Boolean),(0,e.w6)("design:paramtypes",[Boolean])],o.prototype,"disabled",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Object),(0,e.w6)("design:paramtypes",[Object])],o.prototype,"elementAttr",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Boolean),(0,e.w6)("design:paramtypes",[Boolean])],o.prototype,"focusStateEnabled",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Object),(0,e.w6)("design:paramtypes",[Object])],o.prototype,"height",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",String),(0,e.w6)("design:paramtypes",[String])],o.prototype,"hint",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Boolean),(0,e.w6)("design:paramtypes",[Boolean])],o.prototype,"hoverStateEnabled",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",String),(0,e.w6)("design:paramtypes",[String])],o.prototype,"icon",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Boolean),(0,e.w6)("design:paramtypes",[Boolean])],o.prototype,"rtlEnabled",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",String),(0,e.w6)("design:paramtypes",[String])],o.prototype,"stylingMode",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Number),(0,e.w6)("design:paramtypes",[Number])],o.prototype,"tabIndex",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Object),(0,e.w6)("design:paramtypes",[Object])],o.prototype,"template",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",String),(0,e.w6)("design:paramtypes",[String])],o.prototype,"text",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",String),(0,e.w6)("design:paramtypes",[String])],o.prototype,"type",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Boolean),(0,e.w6)("design:paramtypes",[Boolean])],o.prototype,"useSubmitBehavior",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",String),(0,e.w6)("design:paramtypes",[String])],o.prototype,"validationGroup",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Boolean),(0,e.w6)("design:paramtypes",[Boolean])],o.prototype,"visible",null),(0,e.gn)([(0,n.IIB)(),(0,e.w6)("design:type",Object),(0,e.w6)("design:paramtypes",[Object])],o.prototype,"width",null),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"onClick",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"onContentReady",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"onDisposing",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"onInitialized",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"onOptionChanged",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"accessKeyChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"activeStateEnabledChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"disabledChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"elementAttrChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"focusStateEnabledChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"heightChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"hintChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"hoverStateEnabledChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"iconChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"rtlEnabledChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"stylingModeChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"tabIndexChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"templateChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"textChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"typeChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"useSubmitBehaviorChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"validationGroupChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"visibleChange",void 0),(0,e.gn)([(0,n.r_U)(),(0,e.w6)("design:type",n.vpe)],o.prototype,"widthChange",void 0),o=(0,e.gn)([(0,e.fM)(6,(0,n.tBr)(n.Lbi)),(0,e.w6)("design:paramtypes",[n.SBq,n.R0b,t._5,t._h,t.al,y.ki,Object])],o),o})(),c=(()=>{let o=class{};return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[t.Lz,t.ie,y.Cu],t.ie]}),o})()}}]);