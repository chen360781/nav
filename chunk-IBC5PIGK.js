import{a as he,b as ke,c as we,d as be}from"./chunk-MFQ3TS6M.js";import{c as te,e as ne,f as ie}from"./chunk-FPJMWUDM.js";import{G as ze,H as ve,I as Se,a as W,b as A,c as j,d as F,f as Q,g as q}from"./chunk-5R4RKCTQ.js";import{f as ue,i as _e}from"./chunk-7MZFC3KK.js";import"./chunk-WFMPHLDX.js";import{a as de,b as ge}from"./chunk-W3T7PV34.js";import{$ as H,Eb as pe,Jb as xe,Z as K,gb as oe,hb as re,jb as le,kb as ae,ob as se,rb as ce,ub as me}from"./chunk-UJSE3ALS.js";import{$b as R,Ac as S,Db as f,Fa as L,Fd as U,Jb as r,Od as G,Rd as J,Sd as X,Td as Y,Ud as Z,Vd as I,Xb as s,Xd as h,Yb as c,Zb as y,_b as O,_d as ee,bc as C,ec as _,f as N,gc as l,ib as D,ke as x,lb as n,lc as P,ld as M,mc as $,nc as B,qb as k,qe as fe,sc as u,se as ye,tc as b,td as V,uc as d,we as Ce,xa as m,xb as w,ya as p,yc as z,zc as v}from"./chunk-FPBESQGC.js";var Ie=["input"];function Ee(i,a){if(i&1&&(s(0,"p",5),u(1),s(2,"a",6),u(3),c()()),i&2){let e=l(2);n(),d(" ",e.$t("_getToken"),""),n(2),d(" ",e.$t("_readDoc"),"")}}function Ne(i,a){if(i&1){let e=C();O(0),s(1,"p"),u(2),c(),s(3,"input",3,0),S("ngModelChange",function(t){m(e);let g=l();return v(g.token,t)||(g.token=t),p(t)}),_("keyup",function(t){m(e);let g=l();return p(g.onKey(t))}),c(),f(5,Ee,4,2,"p",4),R()}if(i&2){let e=l();n(2),b(e.$t("_inputTokenMsg")),n(),z("ngModel",e.token),n(2),r("ngIf",!e.isSelfDevelop)}}var T=class i{constructor(a){this.message=a}visible=!1;onCancel=new L;input;$t=x;isSelfDevelop=h;token="";submitting=!1;ngAfterViewInit(){this.inputFocus()}handleCancel(){this.onCancel.emit()}inputFocus(){setTimeout(()=>{this.input?.nativeElement?.focus()},300)}onKey(a){a.code==="Enter"&&this.login()}login(){return N(this,null,function*(){if(!this.token){this.message.error(x("_pleaseInputToken"));return}let a=this.token.trim();this.submitting=!0;try{let e=yield ye(a);if(!h&&e?.data?.login!==fe)throw this.message.error("Bad credentials"),new Error("Bad credentials");J(a);try{Ce("image").finally(()=>{this.message.success(x("_tokenVerSuc")),Y().finally(()=>{window.location.reload()})})}catch{X(),this.submitting=!1}}catch{this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)(k(xe))};static \u0275cmp=w({type:i,selectors:[["app-login"]],viewQuery:function(e,o){if(e&1&&P(Ie,5),e&2){let t;$(t=B())&&(o.input=t.first)}},inputs:{visible:"visible"},outputs:{onCancel:"onCancel"},decls:2,vars:3,consts:[["input",""],[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzOkLoading"],[4,"nzModalContent"],["autofocus","","nz-input","","autofocus","",3,"ngModelChange","keyup","ngModel"],["class","!mt-2",4,"ngIf"],[1,"!mt-2"],["href","https://github.com/xjh22222228/nav#%E9%83%A8%E7%BD%B2","target","_blank"]],template:function(e,o){e&1&&(s(0,"nz-modal",1),S("nzVisibleChange",function(g){return v(o.visible,g)||(o.visible=g),g}),_("nzOnCancel",function(){return o.handleCancel()})("nzOnOk",function(){return o.login()}),f(1,Ne,6,3,"ng-container",2),c()),e&2&&(z("nzVisible",o.visible),r("nzTitle",o.$t("_authLogin"))("nzOkLoading",o.submitting))},dependencies:[V,M,pe,se,ce,me,Se,ve,ze,_e,ue],styles:[".prefix-icon[_ngcontent-%COMP%]{width:20px;height:20px;pointer-events:none}"]})};function Le(i,a){if(i&1){let e=C();s(0,"li",8),_("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/component"))}),u(1),c()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="component"),n(),d(" ",e.$t("_components")," ")}}function De(i,a){if(i&1){let e=C();s(0,"li",8),_("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/bookmarkExport"))}),u(1),c()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="bookmarkExport"),n(),d(" ",e.$t("_bookmarkExport")," ")}}function Oe(i,a){if(i&1){let e=C();s(0,"li",8),_("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/collect"))}),u(1),c()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="collect"),n(),d(" ",e.$t("_userCollect")," ")}}function Re(i,a){if(i&1&&(s(0,"span",19),u(1),c()),i&2){let e=l(2);n(),b(e.date)}}function Pe(i,a){i&1&&y(0,"nz-spin",20),i&2&&r("nzSize","large")}function $e(i,a){if(i&1){let e=C();s(0,"nz-layout",2)(1,"nz-layout")(2,"nz-sider",3),S("nzCollapsedChange",function(t){m(e);let g=l();return v(g.isCollapsed,t)||(g.isCollapsed=t),p(t)}),s(3,"div",4)(4,"button",5),_("click",function(){m(e);let t=l();return p(t.toggleCollapsed())}),y(5,"nz-icon",6),c()(),s(6,"ul",7)(7,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/web"))}),u(8),c(),s(9,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/setting"))}),u(10),c(),s(11,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/tag"))}),u(12),c(),s(13,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/search"))}),u(14),c(),f(15,Le,2,2,"li",9),s(16,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/bookmark"))}),u(17),c(),f(18,De,2,2,"li",9)(19,Oe,2,2,"li",9),s(20,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/auth"))}),u(21),c(),s(22,"li",8),_("click",function(){m(e);let t=l();return p(t.goRoute("/system/info"))}),u(23),c()()(),s(24,"nz-layout",10)(25,"nz-content",11)(26,"div")(27,"button",12),_("click",function(){m(e);let t=l();return p(t.goBack())}),u(28),c(),s(29,"button",13),_("click",function(){m(e);let t=l();return p(t.logout())}),u(30),c(),y(31,"img",14),s(32,"a",15),y(33,"img",16),c(),f(34,Re,2,1,"span",17),c(),f(35,Pe,1,1,"nz-spin",18),y(36,"router-outlet"),c()()()()}if(i&2){let e=l();n(2),z("nzCollapsed",e.isCollapsed),r("nzTrigger",null),n(3),r("nzType",e.isCollapsed?"menu-unfold":"menu-fold"),n(2),r("nzSelected",e.currentMenu==="web"),n(),d(" ",e.$t("_websiteMang")," "),n(),r("nzSelected",e.currentMenu==="setting"),n(),d(" ",e.$t("_systemSet")," "),n(),r("nzSelected",e.currentMenu==="tag"),n(),d(" ",e.$t("_tagSettings")," "),n(),r("nzSelected",e.currentMenu==="search"),n(),d(" ",e.$t("_searchEngines")," "),n(),r("ngIf",e.isAuthz||e.isSelfDevelop),n(),r("nzSelected",e.currentMenu==="bookmark"),n(),d(" ",e.$t("_bookmarkImport")," "),n(),r("ngIf",e.isAuthz),n(),r("ngIf",e.isAuthz||e.isSelfDevelop),n(),r("nzSelected",e.currentMenu==="auth"),n(),d(" ",e.$t("_vipAuth")," "),n(),r("nzSelected",e.currentMenu==="info"),n(),d(" ",e.$t("_webInfo")," "),n(5),d(" ",e.$t("_backHome")," "),n(2),d(" ",e.$t("_logout")," "),n(),r("src",e.currentVersionSrc,D),n(3),r("ngIf",!e.isSelfDevelop),n(),r("ngIf",e.pageLoading)}}var E=class i{constructor(a){this.router=a;ee(),this.router.events.subscribe(e=>{e instanceof W?this.pageLoading=!0:(e instanceof A||e instanceof j||e instanceof F)&&(this.pageLoading=!1)})}isSelfDevelop=h;$t=x;isLogin=I;showLoginModal=!I;currentMenu="";date=document.getElementById("META-NAV")?.dataset?.date||"";currentVersionSrc=`https://img.shields.io/badge/current-v${U}-red.svg?longCache=true&style=flat-square`;isAuthz=!!G();pageLoading=!1;isCollapsed=!1;ngOnInit(){let a=window.location.href.split("/");this.currentMenu=a.at(-1)||""}toggleCollapsed(){this.isCollapsed=!this.isCollapsed}goBack(){this.router.navigate(["/"],{queryParams:{_:Date.now()}})}goRoute(a,e=!1){e||this.router.navigate([a])}logout(){Z(),this.router.navigate(["/"]),setTimeout(()=>{location.reload()},26)}static \u0275fac=function(e){return new(e||i)(k(q))};static \u0275cmp=w({type:i,selectors:[["app-system"]],decls:2,vars:2,consts:[["class","system-layout",4,"ngIf"],[3,"visible"],[1,"system-layout"],["nzWidth","150px","nzTheme","light","nzCollapsible","",1,"sidebar","select-none",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],[1,"flex","justify-center","items-center","py-2.5"],["nz-button","","nzType","primary",3,"click"],[3,"nzType"],["nz-menu","","nzMode","inline",1,"sider-menu"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],[1,"inner-layout"],[1,"content"],["nz-button","",2,"margin-bottom","15px",3,"click"],["nz-button","","nzDanger","","nzType","primary",2,"margin-left","15px",3,"click"],[1,"ml-2.5",3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav",1,"ml-2.5"],["class","ml-2.5",4,"ngIf"],["nzSimple","","class","fixed-center",3,"nzSize",4,"ngIf"],[1,"ml-2.5"],["nzSimple","",1,"fixed-center",3,"nzSize"]],template:function(e,o){e&1&&(f(0,$e,37,25,"nz-layout",0),y(1,"app-login",1)),e&2&&(r("ngIf",o.isLogin),n(),r("visible",o.showLoginModal))},dependencies:[V,M,be,we,he,ke,ie,ne,te,ae,le,oe,re,T,Q,ge,de,H,K],styles:[".system-layout[_ngcontent-%COMP%]{min-height:100vh}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px;background-color:#fff;min-width:1200px}.system-layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{background-color:#fff}.system-layout[_ngcontent-%COMP%]   .inner-layout[_ngcontent-%COMP%]{margin-left:15px}.system-layout[_ngcontent-%COMP%]   .fixed-center[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10}"]})};export{E as default};
