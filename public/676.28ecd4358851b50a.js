"use strict";(self.webpackChunkpos=self.webpackChunkpos||[]).push([[676],{6676:(L,l,i)=>{i.r(l),i.d(l,{LoginHistoryModule:()=>x});var u=i(9808),a=i(9735),c=i(590),t=i(5e3),g=i(7225),p=i(3857),y=i(4004),m=i(520);let v=(()=>{class o extends p.b{constructor(e){super(e),this.BASE_ROUTE="history/login"}getAll(){return super.getAll().pipe((0,y.U)(e=>e.map(r=>(r.createdDate=(0,g.xe)(+r.createdDate),r))))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=i(573),s=i(7805);const f=function(){return["5","10","15"]},H=[{path:"",component:(()=>{class o{constructor(e){this._loginHistoryService=e}ngOnInit(){this._loginHistoryService.getAll().pipe((0,c.P)()).subscribe(e=>{this.history=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login-history"]],hostAttrs:[1,"default-app-style"],decls:8,vars:8,consts:[[1,"text-6xl","mb-6"],["keyExpr","id",1,"shadow-xl",3,"dataSource","allowColumnReordering","allowColumnResizing"],["dataField","fullName","caption","User"],["dataField","action","caption","Action"],["dataField","createdDate","caption","Date","dataType","datetime"],[3,"visible"],["displayMode","adaptive",3,"visible","allowedPageSizes","showInfo"]],template:function(e,r){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Login History"),t.qZA(),t.TgZ(2,"dx-data-grid",1),t._UZ(3,"dxi-column",2),t._UZ(4,"dxi-column",3),t._UZ(5,"dxi-column",4),t._UZ(6,"dxo-filter-row",5),t._UZ(7,"dxo-pager",6),t.qZA()),2&e&&(t.xp6(2),t.Q6J("dataSource",r.history)("allowColumnReordering",!0)("allowColumnResizing",!0),t.xp6(4),t.Q6J("visible",!0),t.xp6(1),t.Q6J("visible",!0)("allowedPageSizes",t.DdM(7,f))("showInfo",!0))},directives:[d.e,s.qvW,s.I62,s.ilc],styles:[""]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(H)],a.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,h,d.x]]}),o})()}}]);