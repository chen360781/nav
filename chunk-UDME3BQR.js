import{a as ct,b as dt}from"./chunk-MCPRHMOO.js";import{n as ht}from"./chunk-R4QU7FFF.js";import{c as st,e as rt,f as lt}from"./chunk-X4ESTI5Z.js";import{b as Ze,g as qe,h as Ge}from"./chunk-XEDMFNTH.js";import{Ga as ke,O as Ke,R as Je,S as K,X as he,Z as me,aa as et,ba as we,cb as ot,ea as tt,eb as J,f as Ue,fb as ee,pa as nt,t as Se,va as it,wa as at}from"./chunk-BRUFLRGZ.js";import{$b as oe,Ba as ge,Ca as T,Cb as B,Da as g,Db as He,Eb as W,Gc as je,Hc as re,Ib as f,J as Y,Ka as z,La as j,M as ne,N as Be,Nb as Z,O as Me,Ob as m,Pa as O,Pb as ye,Pc as le,Qb as R,Rb as Ve,Sa as ve,Tc as ce,V as Le,Wc as y,Xa as $e,Xb as k,Y as Oe,Zb as ie,_b as ae,ac as C,bc as x,cc as $,dc as q,ea as Te,ec as G,ga as L,gc as E,ic as Qe,jc as N,l as Q,la as We,lc as d,mc as xe,na as Fe,nc as se,pa as Pe,pc as H,q as te,qb as u,qc as M,rc as I,sa as P,sb as Ce,sc as S,t as Re,u as Ee,ud as de,vb as b,w as X,wc as U,x as A,xc as Ie,yc as Xe,z as _e,zc as Ye}from"./chunk-HFLZKUUC.js";function It(i,c){if(i&1&&(q(0),$(1,"nz-icon",1),G()),i&2){let e=c.$implicit;u(),m("nzType",e)}}var St=()=>({minWidth:"46px"}),wt=()=>({visible:!1});function kt(i,c){if(i&1&&(q(0),Ie(1),G()),i&2){let e=d().$implicit;u(),Ye(" ",e.tab.label," ")}}function Nt(i,c){if(i&1){let e=E();C(0,"li",7),N("click",function(){let n=T(e).$implicit,a=d(2);return g(a.onSelect(n))})("contextmenu",function(n){let a=T(e).$implicit,l=d(2);return g(l.onContextmenu(a,n))}),f(1,kt,2,1,"ng-container",8),x()}if(i&2){let e=c.$implicit;R("ant-tabs-dropdown-menu-item-disabled",e.disabled),m("nzSelected",e.active)("nzDisabled",e.disabled),u(),m("nzStringTemplateOutlet",e.tab.label)("nzStringTemplateOutletContext",re(6,wt))}}function Dt(i,c){if(i&1&&(C(0,"ul",4),ae(1,Nt,2,7,"li",6,ie),x()),i&2){let e=d();u(),oe(e.items)}}function At(i,c){if(i&1){let e=E();C(0,"button",9),N("click",function(){T(e);let n=d();return g(n.addClicked.emit())}),x()}if(i&2){let e=d();m("addIcon",e.addIcon)}}var Rt=["navWarp"],Et=["navList"],Bt=["*"];function Mt(i,c){if(i&1){let e=E();C(0,"button",8),N("click",function(){T(e);let n=d();return g(n.addClicked.emit())}),x()}if(i&2){let e=d();m("addIcon",e.addIcon),Z("tabindex",-1)}}function Lt(i,c){}function Ot(i,c){if(i&1&&(C(0,"div",7),f(1,Lt,0,0,"ng-template",9),x()),i&2){let e=d();u(),m("ngTemplateOutlet",e.extraTemplate)}}var Wt=["nz-tab-body",""];function Ft(i,c){}function Pt(i,c){if(i&1&&(q(0),$(1,"nz-icon",1),G()),i&2){let e=c.$implicit;u(),m("nzType",e)}}var $t=["contentTemplate"],Ht=[[["","nz-tab-link",""]],"*"],Vt=["[nz-tab-link]","*"];function Qt(i,c){i&1&&se(0)}function Xt(i,c){i&1&&se(0,1)}var Yt=()=>({visible:!0});function jt(i,c){if(i&1&&(q(0),Ie(1),G()),i&2){let e=d().$implicit;u(),Xe(e.label)}}function Zt(i,c){if(i&1){let e=E();C(0,"button",10),N("click",function(n){T(e);let a=d().$index,l=d(2);return g(l.onClose(a,n))}),x()}if(i&2){let e=d().$implicit;m("closeIcon",e.nzCloseIcon)}}function qt(i,c){if(i&1){let e=E();C(0,"div",6),N("click",function(n){let a=T(e),l=a.$implicit,h=a.$index,p=d(2);return g(p.clickNavItem(l,h,n))})("contextmenu",function(n){let a=T(e).$implicit,l=d(2);return g(l.contextmenuNavItem(a,n))}),C(1,"button",7),f(2,jt,2,1,"ng-container",8)(3,Zt,1,1,"button",9),x()()}if(i&2){let e=c.$implicit,t=c.$index,n=d(2);ye("margin-right",n.position==="horizontal"?n.nzTabBarGutter:null,"px")("margin-bottom",n.position==="vertical"?n.nzTabBarGutter:null,"px"),R("ant-tabs-tab-active",n.nzSelectedIndex===t)("ant-tabs-tab-disabled",e.nzDisabled),u(),m("id",n.getTabContentId(t))("disabled",e.nzDisabled)("tab",e)("active",n.nzSelectedIndex===t),Z("tabIndex",n.getTabIndex(e,t))("aria-disabled",e.nzDisabled)("aria-selected",n.nzSelectedIndex===t&&!n.nzHideAll)("aria-controls",n.getTabContentId(t)),u(),m("nzStringTemplateOutlet",e.label)("nzStringTemplateOutletContext",re(19,Yt)),u(),k(e.nzClosable&&n.closable&&!e.nzDisabled?3:-1)}}function Gt(i,c){if(i&1){let e=E();C(0,"nz-tabs-nav",4),N("tabScroll",function(n){T(e);let a=d();return g(a.nzTabListScroll.emit(n))})("selectFocusedIndex",function(n){T(e);let a=d();return g(a.setSelectedIndex(n))})("addClicked",function(){T(e);let n=d();return g(n.onAdd())}),ae(1,qt,4,20,"div",5,ie),x()}if(i&2){let e=d();Ve(e.nzTabBarStyle),m("selectedIndex",e.nzSelectedIndex||0)("inkBarAnimated",e.inkBarAnimated)("addable",e.addable)("addIcon",e.nzAddIcon)("hideBar",e.nzHideAll)("position",e.position)("extraTemplate",e.nzTabBarExtraContent),u(),oe(e.tabs)}}function Ut(i,c){}function Kt(i,c){if(i&1&&f(0,Ut,0,0,"ng-template",11),i&2){d();let e=U(4);m("ngTemplateOutlet",e)}}function Jt(i,c){}function en(i,c){if(i&1&&f(0,Jt,0,0,"ng-template",11),i&2){d(2);let e=U(4);m("ngTemplateOutlet",e)}}function tn(i,c){if(i&1&&f(0,en,1,1,null,11),i&2){let e=d().$index,t=d(2);k(t.nzSelectedIndex===e?0:-1)}}function nn(i,c){}function an(i,c){if(i&1&&f(0,nn,0,0,"ng-template",11),i&2){d(2);let e=U(4);m("ngTemplateOutlet",e)}}function on(i,c){if(i&1&&f(0,an,1,1,null,11),i&2){let e=d(),t=e.$implicit,n=e.$index,a=d(2);k(a.nzSelectedIndex===n||t.hasBeenActive?0:-1)}}function sn(i,c){if(i&1&&$(0,"div",12),i&2){let e=d(),t=e.$implicit,n=e.$index,a=d(2);m("id",a.getTabContentId(n))("active",a.nzSelectedIndex===n)("content",t.content)("animated",a.tabPaneAnimated),Z("aria-labelledby",a.getTabContentId(n))}}function rn(i,c){if(i&1&&f(0,Kt,1,1,null,11)(1,tn,1,1)(2,on,1,1)(3,sn,1,5,"ng-template",null,0,le),i&2){let e=c.$implicit,t=d(2);k(e.nzForceRender?0:t.nzDestroyInactiveTabPane?1:2)}}function ln(i,c){if(i&1&&ae(0,rn,5,1,null,null,ie),i&2){let e=d();oe(e.tabs)}}var fe=(()=>{class i{elementRef;addIcon="plus";element;constructor(e){this.elementRef=e,this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}static \u0275fac=function(t){return new(t||i)(b(O))};static \u0275cmp=B({type:i,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nzTheme","outline",3,"nzType"]],template:function(t,n){t&1&&f(0,It,2,1,"ng-container",0),t&2&&m("nzStringTemplateOutlet",n.addIcon)},dependencies:[ee,J,me,he],encapsulation:2})}return i})(),mt=(()=>{class i{elementRef;ngZone;position="horizontal";animated=!0;animationMode=P($e,{optional:!0});get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(e,t){this.elementRef=e,this.ngZone=t}alignToElement(e){this.ngZone.runOutsideAngular(()=>{ke(()=>this.setStyles(e))})}setStyles(e){let t=this.elementRef.nativeElement;this.position==="horizontal"?(t.style.top="",t.style.height="",t.style.left=this.getLeftPosition(e),t.style.width=this.getElementWidth(e)):(t.style.left="",t.style.width="",t.style.top=this.getTopPosition(e),t.style.height=this.getElementHeight(e))}getLeftPosition(e){return e?`${e.offsetLeft||0}px`:"0"}getElementWidth(e){return e?`${e.offsetWidth||0}px`:"0"}getTopPosition(e){return e?`${e.offsetTop||0}px`:"0"}getElementHeight(e){return e?`${e.offsetHeight||0}px`:"0"}static \u0275fac=function(t){return new(t||i)(b(O),b(j))};static \u0275dir=W({type:i,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(t,n){t&2&&R("ant-tabs-ink-bar-animated",n._animated)},inputs:{position:"position",animated:"animated"}})}return i})(),bt=(()=>{class i{elementRef;disabled=!1;tab;active=!1;el;parentElement;constructor(e){this.elementRef=e,this.el=e.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}static \u0275fac=function(t){return new(t||i)(b(O))};static \u0275dir=W({type:i,selectors:[["","nzTabNavItem",""]],inputs:{disabled:[2,"disabled","disabled",y],tab:"tab",active:[2,"active","active",y]}})}return i})(),Ne=(()=>{class i{cdr;elementRef;items=[];addable=!1;addIcon="plus";addClicked=new z;selected=new z;closeAnimationWaitTimeoutId;menuOpened=!1;element;constructor(e,t){this.cdr=e,this.elementRef=t,this.element=this.elementRef.nativeElement}onSelect(e){e.disabled||(e.tab.nzClick.emit(),this.selected.emit(e))}onContextmenu(e,t){e.disabled||e.tab.nzContextmenu.emit(t)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(e){e||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}static \u0275fac=function(t){return new(t||i)(b(ce),b(O))};static \u0275cmp=B({type:i,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(t,n){t&2&&R("ant-tabs-nav-operations-hidden",n.items.length===0)},inputs:{items:"items",addable:[2,"addable","addable",y],addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],decls:7,vars:6,consts:[["dropdownTrigger","nzDropdown"],["menu","nzDropdownMenu"],["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzVisibleChange","mouseenter","nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement"],["nzType","ellipsis"],["nz-menu",""],["nz-tab-add-button","",3,"addIcon"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"click","contextmenu","nzSelected","nzDisabled"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"click","addIcon"]],template:function(t,n){if(t&1){let a=E();C(0,"button",2,0),N("nzVisibleChange",function(h){return T(a),g(n.menuVisChange(h))})("mouseenter",function(){return T(a),g(n.showItems())}),$(2,"nz-icon",3),x(),C(3,"nz-dropdown-menu",null,1),f(5,Dt,3,0,"ul",4),x(),f(6,At,1,1,"button",5)}if(t&2){let a=U(4);m("nzDropdownMenu",a)("nzOverlayStyle",re(5,St))("nzMatchWidthElement",null),u(5),k(n.menuOpened?5:-1),u(),k(n.addable?6:-1)}},dependencies:[me,he,ee,J,fe,dt,lt,rt,st,ct],encapsulation:2,changeDetection:0})}return i})(),cn=.1,pt=.01,pe=20,ut=.995**pe,dn=(()=>{class i{ngZone;elementRef;lastWheelDirection=null;lastWheelTimestamp=0;lastTimestamp=0;lastTimeDiff=0;lastMixedWheel=0;lastWheelPrevent=!1;touchPosition=null;lastOffset=null;motion=-1;unsubscribe=()=>{};offsetChange=new z;tabScroll=new z;constructor(e,t){this.ngZone=e,this.elementRef=t}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let e=this.elementRef.nativeElement,t=Y(e,"wheel"),n=Y(e,"touchstart"),a=Y(e,"touchmove"),l=Y(e,"touchend"),h=new Q;return h.add(this.subscribeWrap("wheel",t,this.onWheel)),h.add(this.subscribeWrap("touchstart",n,this.onTouchStart)),h.add(this.subscribeWrap("touchmove",a,this.onTouchMove)),h.add(this.subscribeWrap("touchend",l,this.onTouchEnd)),()=>{h.unsubscribe()}})}subscribeWrap(e,t,n){return t.subscribe(a=>{this.tabScroll.emit({type:e,event:a}),a.defaultPrevented||n(a)})}onTouchEnd=e=>{if(!this.touchPosition)return;let t=this.lastOffset,n=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,t){let a=t.x/n,l=t.y/n,h=Math.abs(a),p=Math.abs(l);if(Math.max(h,p)<cn)return;let w=a,D=l;this.motion=window.setInterval(()=>{if(Math.abs(w)<pt&&Math.abs(D)<pt){window.clearInterval(this.motion);return}w*=ut,D*=ut,this.onOffset(w*pe,D*pe,e)},pe)}};onTouchMove=e=>{if(!this.touchPosition)return;e.preventDefault();let{screenX:t,screenY:n}=e.touches[0],a=t-this.touchPosition.x,l=n-this.touchPosition.y;this.onOffset(a,l,e);let h=Date.now();this.lastTimeDiff=h-this.lastTimestamp,this.lastTimestamp=h,this.lastOffset={x:a,y:l},this.touchPosition={x:t,y:n}};onTouchStart=e=>{let{screenX:t,screenY:n}=e.touches[0];this.touchPosition={x:t,y:n},window.clearInterval(this.motion)};onWheel=e=>{let{deltaX:t,deltaY:n}=e,a,l=Math.abs(t),h=Math.abs(n);l===h?a=this.lastWheelDirection==="x"?t:n:l>h?(a=t,this.lastWheelDirection="x"):(a=n,this.lastWheelDirection="y");let p=Date.now(),w=Math.abs(a);(p-this.lastWheelTimestamp>100||w-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-a,-a,e),(e.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=p,this.lastMixedWheel=w};onOffset(e,t,n){this.ngZone.run(()=>{this.offsetChange.emit({x:e,y:t,event:n})})}ngOnDestroy(){this.unsubscribe()}static \u0275fac=function(t){return new(t||i)(b(j),b(O))};static \u0275dir=W({type:i,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"}})}return i})(),hn=typeof requestAnimationFrame<"u"?Ee:Re,ft=150,De=(()=>{class i{cdr;ngZone;viewportRuler;nzResizeObserver;dir;indexFocused=new z;selectFocusedIndex=new z;addClicked=new z;tabScroll=new z;position="horizontal";addable=!1;hideBar=!1;addIcon="plus";inkBarAnimated=!0;extraTemplate;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=Se(e);this._selectedIndex!==t&&(this._selectedIndex=e,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(e))}navWarpRef;navListRef;operationRef;addBtnRef;inkBar;items;get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(e){!this.isValidIndex(e)||this.focusIndex===e||!this.keyManager||this.keyManager.setActiveItem(e)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}translate=null;transformX=0;transformY=0;pingLeft=!1;pingRight=!1;pingTop=!1;pingBottom=!1;hiddenItems=[];keyManager;destroy$=new te;_selectedIndex=0;wrapperWidth=0;wrapperHeight=0;scrollListWidth=0;scrollListHeight=0;operationWidth=0;operationHeight=0;addButtonWidth=0;addButtonHeight=0;selectedIndexChanged=!1;lockAnimationTimeoutId;cssTransformTimeWaitingId;constructor(e,t,n,a,l){this.cdr=e,this.ngZone=t,this.viewportRuler=n,this.nzResizeObserver=a,this.dir=l}ngAfterViewInit(){let e=this.dir?this.dir.change.asObservable():_e(null),t=this.viewportRuler.change(150),n=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new nt(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),ke(n),ne(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(L(this.destroy$),Me(16,hn)).subscribe(()=>{n()}),ne(e,t,this.items.changes).pipe(L(this.destroy$)).subscribe(()=>{Promise.resolve().then(n),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(L(this.destroy$)).subscribe(a=>{this.indexFocused.emit(a),this.setTabFocus(a),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(e){let t=this.items.toArray().findIndex(n=>n===e);t!==-1&&(this.keyManager.updateActiveItem(t),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(e)))}onOffsetChange(e){if(this.position==="horizontal"){if(!this.lockAnimationTimeoutId&&(this.transformX>=0&&e.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&e.x<0))return;e.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+e.x),this.setTransform(this.transformX,0)}else{if(!this.lockAnimationTimeoutId&&(this.transformY>=0&&e.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&e.y<0))return;e.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+e.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(e){let t=this.navWarpRef.nativeElement.contains(e.target);if(!(et(e)||!t))switch(e.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(e);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(e)}}isValidIndex(e){if(!this.items)return!0;let t=this.items?this.items.toArray()[e]:null;return!!t&&!t.disabled}scrollToTab(e){if(!this.items.find(n=>n===e))return;let t=this.items.toArray();if(this.position==="horizontal"){let n=this.transformX;if(this.getLayoutDirection()==="rtl"){let a=t[0].left+t[0].width-e.left-e.width;a<this.transformX?n=a:a+e.width>this.transformX+this.wrapperWidth&&(n=a+e.width-this.wrapperWidth)}else e.left<-this.transformX?n=-e.left:e.left+e.width>-this.transformX+this.wrapperWidth&&(n=-(e.left+e.width-this.wrapperWidth));this.transformX=n,this.transformY=0,this.setTransform(n,0)}else{let n=this.transformY;e.top<-this.transformY?n=-e.top:e.top+e.height>-this.transformY+this.wrapperHeight&&(n=-(e.top+e.height-this.wrapperHeight)),this.transformY=n,this.transformX=0,this.setTransform(0,n)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},ft)}lockAnimation(){this.lockAnimationTimeoutId||this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=void 0},ft)})}setTransform(e,t){this.navListRef.nativeElement.style.transform=`translate(${e}px, ${t}px)`}clampTransformX(e){let t=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(t,e),0):Math.min(Math.max(t,e),0)}clampTransformY(e){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,e),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let e=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t&&this.inkBar.alignToElement(t.parentElement)}setPingStatus(){let e={top:!1,right:!1,bottom:!1,left:!1},t=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(e.right=this.transformX>0,e.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(e.left=this.transformX<0,e.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(e.top=this.transformY<0,e.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(e).forEach(n=>{let a=`ant-tabs-nav-wrap-ping-${n}`;e[n]?t.classList.add(a):t.classList.remove(a)})}setVisibleRange(){let e,t,n,a,l,h,p=this.items.toArray(),w={width:0,height:0,left:0,top:0,right:0},D=_=>{let F,ze=p[_]||w;return t==="right"?F=p[0].left+p[0].width-p[_].left-p[_].width:F=ze[t],F};this.position==="horizontal"?(e="width",a=this.wrapperWidth,l=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),h=this.addButtonWidth,n=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(t="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,t="left")):(e="height",a=this.wrapperHeight,l=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),h=this.addButtonHeight,t="top",n=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let V=a;if(l+h>a&&(V=a-h),!p.length){this.hiddenItems=[],this.cdr.markForCheck();return}let be=p.length,s=be;for(let _=0;_<be;_+=1){let F=D(_),ze=p[_]||w;if(F+ze[e]>n+V){s=_-1;break}}let o=0;for(let _=be-1;_>=0;_-=1)if(D(_)<n){o=_+1;break}let r=p.slice(0,o),v=p.slice(s+1);this.hiddenItems=[...r,...v],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(e){}ngOnChanges(e){let{position:t}=e;t&&!t.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}static \u0275fac=function(t){return new(t||i)(b(ce),b(j),b(tt),b(ht),b(we))};static \u0275cmp=B({type:i,selectors:[["nz-tabs-nav"]],contentQueries:function(t,n,a){if(t&1&&H(a,bt,5),t&2){let l;I(l=S())&&(n.items=l)}},viewQuery:function(t,n){if(t&1&&(M(Rt,7),M(Et,7),M(Ne,7),M(fe,5),M(mt,7)),t&2){let a;I(a=S())&&(n.navWarpRef=a.first),I(a=S())&&(n.navListRef=a.first),I(a=S())&&(n.operationRef=a.first),I(a=S())&&(n.addBtnRef=a.first),I(a=S())&&(n.inkBar=a.first)}},hostAttrs:[1,"ant-tabs-nav"],hostBindings:function(t,n){t&1&&N("keydown",function(l){return n.handleKeydown(l)})},inputs:{position:"position",addable:[2,"addable","addable",y],hideBar:[2,"hideBar","hideBar",y],addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],features:[ge],ngContentSelectors:Bt,decls:9,vars:16,consts:[["navWarp",""],["navList",""],[1,"ant-tabs-nav-wrap"],["nzTabScrollList","","role","tablist",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["role","tab","nz-tab-add-button","",3,"addIcon"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addClicked","selected","addIcon","addable","items"],[1,"ant-tabs-extra-content"],["role","tab","nz-tab-add-button","",3,"click","addIcon"],[3,"ngTemplateOutlet"]],template:function(t,n){if(t&1){let a=E();xe(),C(0,"div",2,0)(2,"div",3,1),N("offsetChange",function(h){return T(a),g(n.onOffsetChange(h))})("tabScroll",function(h){return T(a),g(n.tabScroll.emit(h))}),se(4),f(5,Mt,1,2,"button",4),$(6,"div",5),x()(),C(7,"nz-tab-nav-operation",6),N("addClicked",function(){return T(a),g(n.addClicked.emit())})("selected",function(h){return T(a),g(n.onSelectedFromMenu(h))}),x(),f(8,Ot,2,1,"div",7)}t&2&&(R("ant-tabs-nav-wrap-ping-left",n.pingLeft)("ant-tabs-nav-wrap-ping-right",n.pingRight)("ant-tabs-nav-wrap-ping-top",n.pingTop)("ant-tabs-nav-wrap-ping-bottom",n.pingBottom),u(5),k(n.showAddButton?5:-1),u(),m("hidden",n.hideBar)("position",n.position)("animated",n.inkBarAnimated),u(),m("addIcon",n.addIcon)("addable",n.addable)("items",n.hiddenItems),u(),k(n.extraTemplate?8:-1))},dependencies:[dn,fe,mt,Ne,de],encapsulation:2,changeDetection:0})}return i})(),mn=(()=>{class i{content=null;active=!1;animated=!0;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=B({type:i,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:10,hostBindings:function(t,n){t&2&&(Qe("@tabSwitchMotion",n.active?"enter":"leave")("@.disabled",!n.animated),Z("tabindex",n.active?0:-1)("aria-hidden",!n.active),ye("overflow-y",n.animated?n.active?null:"none":null),R("ant-tabs-tabpane-active",n.active)("ant-tabs-tabpane-hidden",n.animated?null:!n.active))},inputs:{content:"content",active:"active",animated:"animated"},exportAs:["nzTabBody"],attrs:Wt,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(t,n){t&1&&f(0,Ft,0,0,"ng-template",0),t&2&&m("ngTemplateOutlet",n.content)},dependencies:[de],encapsulation:2,data:{animation:[ot]},changeDetection:0})}return i})(),zt=(()=>{class i{closeIcon="close";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=B({type:i,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nzTheme","outline",3,"nzType"]],template:function(t,n){t&1&&f(0,Pt,2,1,"ng-container",0),t&2&&m("nzStringTemplateOutlet",n.closeIcon)},dependencies:[ee,J,me,he],encapsulation:2})}return i})(),pn=(()=>{class i{templateRef=P(Ce,{host:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=W({type:i,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"]})}return i})(),un=(()=>{class i{elementRef;routerLink=P(Ge,{self:!0,optional:!0});constructor(e){this.elementRef=e}static \u0275fac=function(t){return new(t||i)(b(O))};static \u0275dir=W({type:i,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"]})}return i})(),fn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=W({type:i,selectors:[["","nz-tab",""]],exportAs:["nzTab"]})}return i})(),_t=new Pe("NZ_TAB_SET"),bn=(()=>{class i{nzTitle="";nzClosable=!1;nzCloseIcon="close";nzDisabled=!1;nzForceRender=!1;nzSelect=new z;nzDeselect=new z;nzClick=new z;nzContextmenu=new z;nzTabLinkTemplateDirective;template=null;linkDirective;contentTemplate;isActive=!1;hasBeenActive=!1;position=null;origin=null;closestTabSet=P(_t);stateChanges=new te;get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}ngOnChanges(e){let{nzTitle:t,nzDisabled:n,nzForceRender:a}=e;(t||n||a)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}setActive(e){this.isActive=e,e&&(this.hasBeenActive=!0)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=B({type:i,selectors:[["nz-tab"]],contentQueries:function(t,n,a){if(t&1&&(H(a,pn,5),H(a,fn,5,Ce),H(a,un,5)),t&2){let l;I(l=S())&&(n.nzTabLinkTemplateDirective=l.first),I(l=S())&&(n.template=l.first),I(l=S())&&(n.linkDirective=l.first)}},viewQuery:function(t,n){if(t&1&&M($t,7),t&2){let a;I(a=S())&&(n.contentTemplate=a.first)}},inputs:{nzTitle:"nzTitle",nzClosable:[2,"nzClosable","nzClosable",y],nzCloseIcon:"nzCloseIcon",nzDisabled:[2,"nzDisabled","nzDisabled",y],nzForceRender:[2,"nzForceRender","nzForceRender",y]},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],features:[ge],ngContentSelectors:Vt,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(t,n){t&1&&(xe(Ht),f(0,Qt,1,0,"ng-template",null,0,le)(2,Xt,1,0,"ng-template",null,1,le))},encapsulation:2,changeDetection:0})}return i})(),Ae=class{index;tab},zn="tabs",_n=0,Tn=(()=>{let i,c=[],e=[],t,n=[],a=[],l,h=[],p=[],w,D=[],V=[];return class ue{static{let s=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[K()],t=[K()],l=[K()],w=[K()],X(null,null,i,{kind:"field",name:"nzType",static:!1,private:!1,access:{has:o=>"nzType"in o,get:o=>o.nzType,set:(o,r)=>{o.nzType=r}},metadata:s},c,e),X(null,null,t,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:o=>"nzSize"in o,get:o=>o.nzSize,set:(o,r)=>{o.nzSize=r}},metadata:s},n,a),X(null,null,l,{kind:"field",name:"nzAnimated",static:!1,private:!1,access:{has:o=>"nzAnimated"in o,get:o=>o.nzAnimated,set:(o,r)=>{o.nzAnimated=r}},metadata:s},h,p),X(null,null,w,{kind:"field",name:"nzTabBarGutter",static:!1,private:!1,access:{has:o=>"nzTabBarGutter"in o,get:o=>o.nzTabBarGutter,set:(o,r)=>{o.nzTabBarGutter=r}},metadata:s},D,V),s&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:s})}nzConfigService;ngZone;cdr;directionality;_nzModuleName=zn;get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(s){this.indexToSelect=Se(s,null)}nzTabPosition="top";nzTabBarExtraContent;nzCanDeactivate=null;nzAddIcon="plus";nzTabBarStyle=null;nzType=A(this,c,"line");nzSize=(A(this,e),A(this,n,"default"));nzAnimated=(A(this,a),A(this,h,!0));nzTabBarGutter=(A(this,p),A(this,D,void 0));nzHideAdd=(A(this,V),!1);nzCentered=!1;nzHideAll=!1;nzLinkRouter=!1;nzLinkExact=!0;nzDestroyInactiveTabPane=!1;nzSelectChange=new z(!0);nzSelectedIndexChange=new z;nzTabListScroll=new z;nzClose=new z;nzAdd=new z;get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane}allTabs=new ve;tabNavBarRef;tabs=new ve;dir="ltr";tabSetId;destroy$=new te;indexToSelect=0;selectedIndex=null;tabLabelSubscription=Q.EMPTY;tabsSubscription=Q.EMPTY;canDeactivateSubscription=Q.EMPTY;router=P(qe,{optional:!0});constructor(s,o,r,v){this.nzConfigService=s,this.ngZone=o,this.cdr=r,this.directionality=v,this.tabSetId=_n++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(L(this.destroy$)).subscribe(s=>{this.dir=s,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let o=this.tabs.toArray();for(let r=0;r<o.length;r++)if(o[r].isActive){this.indexToSelect=this.selectedIndex=r;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let s=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==s){let o=this.selectedIndex==null;o||this.nzSelectChange.emit(this.createChangeEvent(s)),Promise.resolve().then(()=>{this.tabs.forEach((r,v)=>r.setActive(v===s)),o||this.nzSelectedIndexChange.emit(s)})}this.tabs.forEach((o,r)=>{o.position=r-s,this.selectedIndex!=null&&o.position===0&&!o.origin&&(o.origin=s-this.selectedIndex)}),this.selectedIndex!==s&&(this.selectedIndex=s,this.cdr.markForCheck())}onClose(s,o){o.preventDefault(),o.stopPropagation(),this.nzClose.emit({index:s})}onAdd(){this.nzAdd.emit()}clampTabIndex(s){return Math.min(this.tabs.length-1,Math.max(s||0,0))}createChangeEvent(s){let o=new Ae;return o.index=s,this.tabs&&this.tabs.length&&(o.tab=this.tabs.toArray()[s],this.tabs.forEach((r,v)=>{v!==s&&r.nzDeselect.emit()}),o.tab.nzSelect.emit()),o}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=ne(...this.tabs.map(s=>s.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(Te(this.allTabs)).subscribe(s=>{this.tabs.reset(s.filter(o=>o.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(s,o){return typeof this.nzCanDeactivate=="function"?Ke(this.nzCanDeactivate(s,o)).pipe(Oe(),L(this.destroy$)):_e(!0)}clickNavItem(s,o,r){s.nzDisabled||(s.nzClick.emit(),this.isRouterLinkClickEvent(o,r)||this.setSelectedIndex(o))}isRouterLinkClickEvent(s,o){let r=o.target;return this.nzLinkRouter?!!this.tabs.toArray()[s]?.linkDirective?.elementRef.nativeElement.contains(r):!1}contextmenuNavItem(s,o){s.nzDisabled||s.nzContextmenu.emit(o)}setSelectedIndex(s){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,s).subscribe(o=>{o&&(this.nzSelectedIndex=s,this.tabNavBarRef.focusIndex=s,this.cdr.markForCheck())})}getTabIndex(s,o){return s.nzDisabled?null:this.selectedIndex===o?0:-1}getTabContentId(s){return`nz-tabs-${this.tabSetId}-tab-${s}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${Ue} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(L(this.destroy$),Be(s=>s instanceof Ze),Te(!0),Le(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router?.navigated){let s=this.findShouldActiveTabIndex();s!==this.selectedIndex&&this.setSelectedIndex(s),this.nzHideAll=s===-1}}findShouldActiveTabIndex(){let s=this.tabs.toArray(),o=this.isLinkActive(this.router);return s.findIndex(r=>{let v=r.linkDirective;return v?o(v.routerLink):!1})}isLinkActive(s){return o=>o?!!s?.isActive(o.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}static \u0275fac=function(o){return new(o||ue)(b(Je),b(j),b(ce),b(we))};static \u0275cmp=B({type:ue,selectors:[["nz-tabset"]],contentQueries:function(o,r,v){if(o&1&&H(v,bn,5),o&2){let _;I(_=S())&&(r.allTabs=_)}},viewQuery:function(o,r){if(o&1&&M(De,5),o&2){let v;I(v=S())&&(r.tabNavBarRef=v.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(o,r){o&2&&R("ant-tabs-card",r.nzType==="card"||r.nzType==="editable-card")("ant-tabs-editable",r.nzType==="editable-card")("ant-tabs-editable-card",r.nzType==="editable-card")("ant-tabs-centered",r.nzCentered)("ant-tabs-rtl",r.dir==="rtl")("ant-tabs-top",r.nzTabPosition==="top")("ant-tabs-bottom",r.nzTabPosition==="bottom")("ant-tabs-left",r.nzTabPosition==="left")("ant-tabs-right",r.nzTabPosition==="right")("ant-tabs-default",r.nzSize==="default")("ant-tabs-small",r.nzSize==="small")("ant-tabs-large",r.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:[2,"nzHideAdd","nzHideAdd",y],nzCentered:[2,"nzCentered","nzCentered",y],nzHideAll:[2,"nzHideAll","nzHideAll",y],nzLinkRouter:[2,"nzLinkRouter","nzLinkRouter",y],nzLinkExact:[2,"nzLinkExact","nzLinkExact",y],nzDestroyInactiveTabPane:[2,"nzDestroyInactiveTabPane","nzDestroyInactiveTabPane",y]},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],features:[je([{provide:_t,useExisting:We(()=>ue)}])],decls:4,vars:12,consts:[["tabpaneTmpl",""],[3,"style","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],[3,"tabScroll","selectFocusedIndex","addClicked","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled"],[1,"ant-tabs-tab",3,"click","contextmenu"],["type","button","role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"id","disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["type","button","nz-tab-close-button","",3,"closeIcon"],["type","button","nz-tab-close-button","",3,"click","closeIcon"],[3,"ngTemplateOutlet"],["role","tabpanel","nz-tab-body","",3,"id","active","content","animated"]],template:function(o,r){o&1&&(f(0,Gt,3,9,"nz-tabs-nav",1),C(1,"div",2)(2,"div",3),f(3,ln,2,0),x()()),o&2&&(k(r.tabs.length||r.addable?0:-1),u(2),R("ant-tabs-content-top",r.nzTabPosition==="top")("ant-tabs-content-bottom",r.nzTabPosition==="bottom")("ant-tabs-content-left",r.nzTabPosition==="left")("ant-tabs-content-right",r.nzTabPosition==="right")("ant-tabs-content-animated",r.tabPaneAnimated),u(),k(r.nzHideAll?-1:3))},dependencies:[De,de,bt,at,it,ee,J,zt,mn],encapsulation:2})}})();var ai=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=He({type:i});static \u0275inj=Fe({imports:[Tn,De,Ne,fe,zt]})}return i})();export{bn as a,Tn as b,ai as c};
