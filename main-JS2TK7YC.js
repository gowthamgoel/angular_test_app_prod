import{a as m,b as _}from"./chunk-XZIVA5NW.js";import{C as a,D as l,E as c,I as f,L as h,M,N as C,P as g,ba as y,ca as v,da as w,fa as d,j as n,l as u,m as r}from"./chunk-X2X2BR76.js";var j=[{path:"home",loadChildren:()=>import("./chunk-IB6PTA7L.js").then(t=>t.HomeModule)},{path:"cr",loadChildren:()=>import("./chunk-TITUOZMO.js").then(t=>t.CurrentReadingModule)},{path:"**",loadChildren:()=>import("./chunk-IB6PTA7L.js").then(t=>t.HomeModule)}],x=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=r({type:e}),e.\u0275inj=n({imports:[d.forRoot(j),d]});let t=e;return t})();var N=(()=>{let e=class e{constructor(){this.title="personal"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],viewQuery:function(o,p){if(o&1&&h(m,5),o&2){let s;M(s=C())&&(p.sideMenu=s.first)}},decls:6,vars:0,consts:[[1,"main-content"],[1,"open-btn",3,"click"],[1,"page-content"]],template:function(o,p){o&1&&(c(0,"app-side-menu"),a(1,"div",0)(2,"span",1),f("click",function(){return p.sideMenu.openMenu()}),g(3,"\u2630 Menu"),l(),a(4,"div",2),c(5,"router-outlet"),l()())},dependencies:[w,m],styles:[".open-btn[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}.main-content[_ngcontent-%COMP%]{padding:16px;transition:margin-left .5s}"]});let t=e;return t})();var S=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=r({type:e,bootstrap:[N]}),e.\u0275inj=n({imports:[v,x,_]});let t=e;return t})();y().bootstrapModule(S,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
