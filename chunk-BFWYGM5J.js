import{a as ae}from"./chunk-OIWPTBSU.js";import{a as X,b as Y}from"./chunk-3LCYWMZU.js";import{d as Z,f as ee,h as te,i as ie,j as ne,k as re,l as oe}from"./chunk-JJN5BXAZ.js";import"./chunk-EG5CWYC7.js";import{l as K,m as Q}from"./chunk-YBRTZQWW.js";import{a as w}from"./chunk-6PQTI7ZB.js";import"./chunk-DWYZM4KV.js";import"./chunk-ZCH62Y2O.js";import{f as R,i as J}from"./chunk-XQNQL5DX.js";import"./chunk-NU6ZYXBM.js";import"./chunk-WLQ2BIWM.js";import{Db as q,Fb as H,Kb as v,hb as O,ib as $,kb as B,lb as F,pb as U,sb as A,vb as j}from"./chunk-G5SJT75B.js";import{Ac as C,Bc as L,Be as G,Db as u,Ed as k,Jb as _,Xb as a,Yb as m,Yd as D,Zb as N,bc as x,ec as g,ee as W,gc as d,ib as T,jd as V,kd as E,lb as o,le as f,qb as M,sc as l,sd as P,tc as h,uc as z,xa as c,xb as I,ya as p,yc as S,zc as y}from"./chunk-RQJWGCRA.js";function se(s,n){if(s&1&&(a(0,"div",4)(1,"b"),l(2),m()()),s&2){let e=d();o(2),h(e.$t("_buildTip"))}}function le(s,n){if(s&1){let e=x();a(0,"input",24),C("ngModelChange",function(i){c(e);let r=d().$implicit;return y(r.url,i)||(r.url=i),p(i)}),m()}if(s&2){let e=d().$implicit;S("ngModel",e.url)}}function ce(s,n){if(s&1&&N(0,"img",25),s&2){let e=d().$implicit;_("src",e.icon,T)}}function pe(s,n){if(s&1){let e=x();a(0,"a",26),g("nzOnConfirm",function(){c(e);let i=d().index,r=d();return p(r.handleDelete(i))}),l(1),m()}if(s&2){let e=d(2);_("nzPopconfirmTitle",e.$t("_confirmDel")),o(),z(" ",e.$t("_del")," ")}}function de(s,n){if(s&1){let e=x();a(0,"tr")(1,"td")(2,"input",12),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.name,i)||(r.name=i),p(i)}),m()(),a(3,"td"),u(4,le,1,1,"input",13),m(),a(5,"td",14),u(6,ce,1,1,"img",15),a(7,"input",16),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.icon,i)||(r.icon=i),p(i)}),m(),a(8,"app-upload",17),g("onChange",function(i){let r=c(e).index,me=d();return p(me.onChangeUpload(i,r))}),m()(),a(9,"td")(10,"input",18),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.placeholder,i)||(r.placeholder=i),p(i)}),m()(),a(11,"td")(12,"nz-switch",19),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.blocked,i)||(r.blocked=i),p(i)}),m()(),a(13,"td",20)(14,"a",21),g("click",function(){let i=c(e).index,r=d();return p(r.moveUp(i))}),l(15),m(),a(16,"a",22),g("click",function(){let i=c(e).index,r=d();return p(r.moveDown(i))}),l(17),m(),u(18,pe,2,2,"a",23),m()()}if(s&2){let e=n.$implicit,t=d();o(2),S("ngModel",e.name),o(2),_("ngIf",!e.isInner),o(2),_("ngIf",e.icon),o(),S("ngModel",e.icon),o(3),S("ngModel",e.placeholder),o(2),S("ngModel",e.blocked),o(3),h(t.$t("_moveUp")),o(2),h(t.$t("_moveDown")),o(),_("ngIf",!e.isInner)}}var b=class s{constructor(n,e){this.message=n;this.modal=e}$t=f;isSelfDevelop=D;searchList=W;submitting=!1;handleAdd(){this.searchList.some(e=>!e.name.trim())||this.searchList.unshift({name:"",url:"",icon:"",placeholder:"",blocked:!1,isInner:!1})}handleDelete(n){this.searchList.splice(n,1)}moveUp(n){if(n===0)return;let e=this.searchList[n],t=this.searchList[n-1];this.searchList[n-1]=e,this.searchList[n]=t}moveDown(n){if(n===this.searchList.length-1)return;let e=this.searchList[n],t=this.searchList[n+1];this.searchList[n+1]=e,this.searchList[n]=t}handleSubmit(){this.submitting||this.modal.info({nzTitle:f("_syncDataOut"),nzOkText:f("_confirmSync"),nzContent:f("_confirmSyncTip"),nzOnOk:()=>{let n={};if(this.searchList.forEach(e=>{e.name.trim()&&(n[e.name]=null)}),Object.keys(n).length!==this.searchList.length){this.message.error(f("_repeatAdd"));return}this.submitting=!0,G({message:"update search",content:JSON.stringify(this.searchList),path:k}).then(()=>{this.message.success(f("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(n,e){return e.name}onChangeUpload(n,e){this.searchList[e].icon=n.cdn}static \u0275fac=function(e){return new(e||s)(M(v),M(w))};static \u0275cmp=I({type:s,selectors:[["system-tag"]],features:[L([w,v])],decls:25,vars:14,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb-2",4,"ngIf"],[1,"mb-2"],[3,"nzData"],["nzWidth","150px"],["nzWidth","220px"],["nzWidth","260px"],["nzWidth","100px"],["nzWidth","200px"],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["nz-input","",3,"ngModel","ngModelChange",4,"ngIf"],[1,"whitespace-nowrap"],["class","icon",3,"src",4,"ngIf"],["nz-input","","type","text",2,"width","180px",3,"ngModelChange","ngModel"],[3,"onChange"],["nz-input","","maxlength","50",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[1,"select-none"],[3,"click"],[1,"ml-2.5",3,"click"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom","class","ml-2.5 !text-red-500",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","",3,"ngModelChange","ngModel"],[1,"icon",3,"src"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"ml-2.5","!text-red-500",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,t){if(e&1){let i=x();a(0,"button",1),g("click",function(){return c(i),p(t.handleAdd())}),l(1),m(),a(2,"button",2),g("click",function(){return c(i),p(t.handleSubmit())}),l(3),m(),u(4,se,3,1,"div",3),a(5,"div",4),l(6,"e.g. https://example.com/search?q=${q}"),m(),a(7,"nz-table",5,0)(9,"thead")(10,"tr")(11,"th",6),l(12),m(),a(13,"th",7),l(14),m(),a(15,"th",8),l(16),m(),a(17,"th",7),l(18),m(),a(19,"th",9),l(20),m(),a(21,"th",10),l(22),m()()(),a(23,"tbody"),u(24,de,19,9,"tr",11),m()()}e&2&&(_("nzLoading",t.submitting),o(),z(" ",t.$t("_addRow"),`
`),o(),_("nzLoading",t.submitting),o(),z(" ",t.$t("_save"),`
`),o(),_("ngIf",!t.isSelfDevelop),o(3),_("nzData",t.searchList),o(5),h(t.$t("_engineName")),o(2),h(t.$t("_engineUrl")),o(2),h(t.$t("_icon")),o(2),h(t.$t("_desc")),o(2),h(t.$t("_isDisable")),o(2),h(t.$t("_action")),o(2),_("ngForOf",t.searchList)("ngForTrackBy",t.trackByItem))},dependencies:[H,U,A,q,j,P,V,E,F,B,O,$,oe,ie,Z,ee,re,te,ne,J,R,ae,Y,X,Q,K],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:10px;object-fit:cover}  #file{vertical-align:middle;margin-left:10px}  #file .anticon{font-size:20px}"]})};export{b as default};
