import{a as ae}from"./chunk-4WA4COM5.js";import{a as X,b as Y}from"./chunk-JS4IVRAA.js";import{d as Z,f as ee,h as te,i as ie,j as ne,k as re,l as oe}from"./chunk-JVH2OLHQ.js";import"./chunk-MCPRHMOO.js";import{l as K,m as Q}from"./chunk-R4QU7FFF.js";import"./chunk-X4ESTI5Z.js";import{F as v}from"./chunk-XEDMFNTH.js";import{f as R,i as J}from"./chunk-WNRFF5NK.js";import{a as W,b as B,c as F}from"./chunk-I2HF7ZL6.js";import"./chunk-E3HEEQRI.js";import"./chunk-OT7PD4EE.js";import{b as $}from"./chunk-VSIK4PLM.js";import{Hb as G,Xb as w,jb as U,mb as A,pb as j,xb as q,zb as H}from"./chunk-BRUFLRGZ.js";import{Ca as c,Cb as I,Da as p,Dc as S,Ec as y,Fc as C,Gc as L,Gd as k,Ib as u,Ob as _,_d as D,ac as a,bc as m,cc as N,gc as x,ge as O,jc as g,lc as d,nb as T,od as V,oe as f,pd as E,qb as o,vb as M,xc as l,xd as P,yc as h,zc as z}from"./chunk-HFLZKUUC.js";function se(s,n){if(s&1&&(a(0,"div",4)(1,"b"),l(2),m()()),s&2){let e=d();o(2),h(e.$t("_buildTip"))}}function le(s,n){if(s&1){let e=x();a(0,"input",22),C("ngModelChange",function(i){c(e);let r=d().$implicit;return y(r.url,i)||(r.url=i),p(i)}),m()}if(s&2){let e=d().$implicit;S("ngModel",e.url)}}function ce(s,n){if(s&1&&N(0,"img",23),s&2){let e=d().$implicit;_("src",e.icon,T)}}function pe(s,n){if(s&1){let e=x();a(0,"a",24),g("nzOnConfirm",function(){c(e);let i=d().index,r=d();return p(r.handleDelete(i))}),l(1),m()}if(s&2){let e=d(2);_("nzPopconfirmTitle",e.$t("_confirmDel")),o(),z(" ",e.$t("_del")," ")}}function de(s,n){if(s&1){let e=x();a(0,"tr")(1,"td",7)(2,"input",8),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.name,i)||(r.name=i),p(i)}),m()(),a(3,"td",9),u(4,le,1,1,"input",10),m(),a(5,"td",11),u(6,ce,1,1,"img",12),a(7,"input",13),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.icon,i)||(r.icon=i),p(i)}),m(),a(8,"app-upload",14),g("onChange",function(i){let r=c(e).index,me=d();return p(me.onChangeUpload(i,r))}),m()(),a(9,"td",9)(10,"input",15),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.placeholder,i)||(r.placeholder=i),p(i)}),m()(),a(11,"td",16)(12,"nz-switch",17),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.blocked,i)||(r.blocked=i),p(i)}),m()(),a(13,"td",18)(14,"a",19),g("click",function(){let i=c(e).index,r=d();return p(r.moveUp(i))}),l(15),m(),a(16,"a",20),g("click",function(){let i=c(e).index,r=d();return p(r.moveDown(i))}),l(17),m(),u(18,pe,2,2,"a",21),m()()}if(s&2){let e=n.$implicit,t=d();o(2),S("ngModel",e.name),o(2),_("ngIf",!e.isInner),o(2),_("ngIf",e.icon),o(),S("ngModel",e.icon),o(3),S("ngModel",e.placeholder),o(2),S("ngModel",e.blocked),o(3),h(t.$t("_moveUp")),o(2),h(t.$t("_moveDown")),o(),_("ngIf",!e.isInner)}}var b=class s{constructor(n,e){this.message=n;this.modal=e}$t=f;isSelfDevelop=D;searchList=O;submitting=!1;handleAdd(){this.searchList.some(e=>!e.name.trim())||this.searchList.unshift({name:"",url:"",icon:"",placeholder:"",blocked:!1,isInner:!1})}handleDelete(n){this.searchList.splice(n,1)}moveUp(n){if(n===0)return;let e=this.searchList[n],t=this.searchList[n-1];this.searchList[n-1]=e,this.searchList[n]=t}moveDown(n){if(n===this.searchList.length-1)return;let e=this.searchList[n],t=this.searchList[n+1];this.searchList[n+1]=e,this.searchList[n]=t}handleSubmit(){this.submitting||this.modal.info({nzTitle:f("_syncDataOut"),nzOkText:f("_confirmSync"),nzContent:f("_confirmSyncTip"),nzOnOk:()=>{let n={};if(this.searchList.forEach(e=>{e.name.trim()&&(n[e.name]=null)}),Object.keys(n).length!==this.searchList.length){this.message.error(f("_repeatAdd"));return}this.submitting=!0,G({message:"update search",content:JSON.stringify(this.searchList),path:k}).then(()=>{this.message.success(f("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(n,e){return e.name}onChangeUpload(n,e){this.searchList[e].icon=n.cdn}static \u0275fac=function(e){return new(e||s)(M(w),M(v))};static \u0275cmp=I({type:s,selectors:[["system-tag"]],features:[L([v,w])],decls:25,vars:14,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb-2",4,"ngIf"],[1,"mb-2"],[3,"nzData"],[4,"ngFor","ngForOf","ngForTrackBy"],["width","150px"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["width","220px"],["nz-input","",3,"ngModel","ngModelChange",4,"ngIf"],["width","260px",1,"whitespace-nowrap"],["class","icon",3,"src",4,"ngIf"],["nz-input","","type","text",2,"width","180px",3,"ngModelChange","ngModel"],[3,"onChange"],["nz-input","","maxlength","50",3,"ngModelChange","ngModel"],["width","100px"],[3,"ngModelChange","ngModel"],[1,"select-none"],[3,"click"],[1,"ml-2.5",3,"click"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom","class","ml-2.5 !text-red-500",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","",3,"ngModelChange","ngModel"],[1,"icon",3,"src"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"ml-2.5","!text-red-500",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,t){if(e&1){let i=x();a(0,"button",1),g("click",function(){return c(i),p(t.handleAdd())}),l(1),m(),a(2,"button",2),g("click",function(){return c(i),p(t.handleSubmit())}),l(3),m(),u(4,se,3,1,"div",3),a(5,"div",4),l(6,"e.g. https://example.com/search?q=${q}"),m(),a(7,"nz-table",5,0)(9,"thead")(10,"tr")(11,"th"),l(12),m(),a(13,"th"),l(14),m(),a(15,"th"),l(16),m(),a(17,"th"),l(18),m(),a(19,"th"),l(20),m(),a(21,"th"),l(22),m()()(),a(23,"tbody"),u(24,de,19,9,"tr",6),m()()}e&2&&(_("nzLoading",t.submitting),o(),z(" ",t.$t("_addRow"),`
`),o(),_("nzLoading",t.submitting),o(),z(" ",t.$t("_save"),`
`),o(),_("ngIf",!t.isSelfDevelop),o(3),_("nzData",t.searchList),o(5),h(t.$t("_engineName")),o(2),h(t.$t("_engineUrl")),o(2),h(t.$t("_icon")),o(2),h(t.$t("_desc")),o(2),h(t.$t("_isDisable")),o(2),h(t.$t("_action")),o(2),_("ngForOf",t.searchList)("ngForTrackBy",t.trackByItem))},dependencies:[H,U,A,q,j,P,V,E,F,B,W,$,oe,ie,Z,ee,re,te,ne,J,R,ae,Y,X,Q,K],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:10px;object-fit:cover}  #file{vertical-align:middle;margin-left:10px}  #file .anticon{font-size:20px}"]})};export{b as default};
