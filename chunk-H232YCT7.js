import{b as E,c as R}from"./chunk-3Y3NOGLI.js";import{c as v,g as f,n as x,o as y,t as g}from"./chunk-CC7E4XJL.js";import{e as I,g as m}from"./chunk-THORJGUU.js";import{da as o}from"./chunk-2VET7Q2B.js";import{$d as u,_d as p,ae as h,he as i,ma as l,ne as r,ra as a}from"./chunk-WMJTXZHA.js";var b=class s{constructor(e,t){this.router=e;this.activatedRoute=t;let c=()=>{let{id:w,q:n}=f(),{oneIndex:N,twoIndex:A,threeIndex:_}=g(w);this.oneIndex=N,this.twoIndex=A,this.selectedThreeIndex=_,this.searchKeyword=n,n?this.currentList=v(r,n):this.currentList=x()},d=()=>{this.activatedRoute.queryParams.subscribe(()=>{this.sliceMax=0,c(),setTimeout(()=>{this.sliceMax=Number.MAX_SAFE_INTEGER},100)})};window.__FINISHED__?d():o.on("WEB_FINISH",()=>{d()}),o.on("WEB_REFRESH",()=>{c()})}isLogin=p;settings=i;permissions=u(i);title=i.title.trim().split(/\s/)[0];websiteList=r;currentList=[];twoIndex=0;oneIndex=0;sliceMax=0;selectedThreeIndex=0;searchKeyword="";overIndex=Number.MAX_SAFE_INTEGER;handleClickClass(e){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{id:e,_:Date.now()}}),o.emit("SEARCH_FOCUS")}onCollapseAll=e=>{e?.stopPropagation(),R(r)};trackByItem(e,t){return t.title}trackByItemWeb(e,t){return t.id}get collapsed(){try{return!!r[this.oneIndex].nav[this.twoIndex].collapsed}catch{return!1}}onCollapse=e=>{e.collapsed=!e.collapsed,h||E(this.websiteList)};getOverIndex(e){queueMicrotask(()=>{let t=y(e);this.overIndex!==t&&(this.overIndex=t)})}setOverIndex(){this.overIndex=Number.MAX_SAFE_INTEGER}static \u0275fac=function(t){return new(t||s)(a(m),a(I))};static \u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})};export{b as a};
