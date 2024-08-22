import{a as D,b as P,c as q,e as J,g as H,h as W,k as B,l as G}from"./chunk-L7CTJDS6.js";import{$ as O,A as M,C as R,E as o,F as a,G as d,H as F,I,J as S,K as g,L as V,Q as x,R as n,S as h,V as A,W as T,ba as k,ca as j,ha as y,j as w,k as p,n as E,o as f,r as c,s as u,w as l,x as v}from"./chunk-O2UH7SNE.js";var L=(()=>{let e=class e{constructor(){this.currentReadingName="current-reading"}getCurrentReading(){try{let i=localStorage.getItem(this.currentReadingName);return JSON.parse(i)}catch(i){return console.log(i),[]}}updateCurrentReading(i){try{let t=this.getCurrentReading()||[];return t.push(i),localStorage.setItem(this.currentReadingName,JSON.stringify(t)),!0}catch(t){return console.log(t),!1}}updateWholeReadings(i){try{return localStorage.setItem(this.currentReadingName,JSON.stringify(i)),this.getCurrentReading()}catch(t){return console.log(t),[]}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function K(r,e){if(r&1){let s=S();F(0),o(1,"tr")(2,"td"),n(3),A(4,"date"),a(),o(5,"td"),n(6),a(),o(7,"td"),n(8),a(),o(9,"td")(10,"button",1),g("click",function(){let t=c(s).index,m=V();return u(m.removeReading(t))}),n(11,"X"),a()()(),I()}if(r&2){let s=e.$implicit;l(3),h(T(4,3,s.dateTime,"yyyy-MM-dd HH:mm:ss")),l(3),h(s.reading),l(2),h(s==null?null:s.comments)}}var X=(()=>{let e=class e{constructor(i){this.dts=i,this.readings=[]}ngOnInit(){this.getAllReadings()}getAllReadings(){this.readings=this.dts.getCurrentReading()}submit(i){try{i.form.status==="VALID"&&(this.dts.updateCurrentReading(i.value),this.getAllReadings(),i.reset())}catch(t){console.log(t)}}removeReading(i){confirm("Are you sure?")&&(this.readings.splice(i,1),this.readings=this.dts.updateWholeReadings(this.readings))}onReset(i){i.reset()}};e.\u0275fac=function(t){return new(t||e)(v(L))},e.\u0275cmp=E({type:e,selectors:[["app-current-reading"]],decls:46,vars:2,consts:[["readingForm","ngForm"],[3,"click"],[4,"ngFor","ngForOf"],[3,"ngSubmit"],["for","reading"],["type","text","id","reading","name","reading","ngModel","","required",""],["for","dateTime"],["type","datetime-local","id","dateTime","name","dateTime","ngModel","","required",""],["for","comments"],["id","comments","name","comments","ngModel","",3,"rows"],["type","submit"],["type","button",3,"click"]],template:function(t,m){if(t&1){let b=S();o(0,"h1"),n(1,"Current Reading"),a(),o(2,"button",1),g("click",function(){return c(b),u(m.getAllReadings())}),n(3,"Refresh Readings"),a(),d(4,"br")(5,"br")(6,"br"),o(7,"table")(8,"thead")(9,"tr")(10,"th"),n(11,"Date Time"),a(),o(12,"th"),n(13,"Reading"),a(),o(14,"th"),n(15,"Comments"),a(),d(16,"th"),a()(),o(17,"tbody"),M(18,K,12,6,"ng-container",2),a()(),o(19,"h2"),n(20,"New Reading"),a(),o(21,"form",3,0),g("ngSubmit",function(){c(b);let C=x(22);return u(m.submit(C))}),o(23,"label",4),n(24,"Reading"),a(),n(25,"\xA0 "),d(26,"input",5)(27,"br")(28,"br"),o(29,"label",6),n(30,"Date Time"),a(),n(31,"\xA0 "),d(32,"input",7)(33,"br")(34,"br"),o(35,"label",8),n(36,"Comments"),a(),n(37,"\xA0 "),d(38,"textarea",9)(39,"br")(40,"br"),o(41,"button",10),n(42,"Submit"),a(),n(43,"\xA0\xA0 "),o(44,"button",11),g("click",function(){c(b);let C=x(22);return u(m.onReset(C))}),n(45,"Reset"),a()()}t&2&&(l(18),R("ngForOf",m.readings),l(20),R("rows",2))},dependencies:[O,W,D,P,q,B,H,J,k],styles:["table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:200px;height:50px}"]});let r=e;return r})();var Q=[{path:"",component:X}],$=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=p({imports:[y.forChild(Q),y]});let r=e;return r})();var me=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=p({imports:[j,G,$]});let r=e;return r})();export{me as CurrentReadingModule};
