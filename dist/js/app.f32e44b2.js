(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1cd2":function(t,e,n){t.exports=n.p+"img/PCBuild.0c085aa5.png"},"3f79":function(t,e,n){"use strict";n("c037")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n("1cd2")}}),r("NavBar"),r("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links"},[n("span",{on:{click:t.goToHome}},[t._v("Home")]),n("span",{on:{click:t.goToInstructors}},[t._v("Instructors")]),n("span",{on:{click:t.goToStudents}},[t._v("Students")])])},i=[],u={name:"NavBar",methods:{goToHome:function(){this.$router.push({path:"home"})},goToInstructors:function(){this.$router.push({path:"Instructors"})},goToStudents:function(){this.$router.push({path:"Students"})}}},c=u,l=(n("62ba"),n("2877")),d=Object(l["a"])(c,s,i,!1,null,"4d22989e",null),p=d.exports,f={name:"App",components:{NavBar:p}},h=f,m=(n("034f"),Object(l["a"])(h,a,o,!1,null,null,null)),v=m.exports,_=n("4af9"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",{attrs:{id:"mainHeading"}},[t._v("Muh Payge!")]),n("blockquote",[t._v(" Dream it, Believe it, do it...day by day by day. ")]),n("h2",[t._v("Muh First Paragraph!")]),n("p",{staticClass:"paragraphStyles"},[t._v(" Hello my name is Jacob and I am super happy to be here today. I hope you all enjoy whats written as this is from me. A person is a person is a person and all that ")]),n("h3",[t._v("Paragraph 2")]),n("p",{staticClass:"paragraphStyles"},[t._v(" This paragraph is written by me for CST 356. Admittedly, I am a total n00b compared with my fellow students. I will need to try and fail and try and try to be able to do well! ")]),n("h3",[t._v("Paragraph 3 Woohoo")]),n("p",{staticClass:"paragraphStyles"},[t._v(" Well this has been fun, got to go. I hope you enjoyed reading. Good day! ")])])])}],g={name:"Home"},I=g,w=(n("8b71"),Object(l["a"])(I,y,b,!1,null,null,null)),S=w.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"section-heading"},[t._v("Instructors")]),n("table",[t._m(0),n("tbody",t._l(t.instructors,(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e.firstName))]),n("td",[t._v(t._s(e.middleInitial)+" ")]),n("td",[t._v(t._s(e.lastName))])])})),0)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("First Name")]),n("th",[t._v("Middle Initial")]),n("th",[t._v("Last Name")])])])}],j={name:"Instructors",mounted:function(){this.instructors=x()},data:function(){return{instructors:[]}}};function x(){return JSON.parse(P)}var P='[{"firstName": "Gerald", "middleInitial": "H", "lastName": "Adler"}, {"firstName": "Michael", "middleInitial": "M", "lastName": "Margarito"}, {"firstName": "Xi", "middleInitial": "V", "lastName": "Chu"}]',$=j,M=(n("f367"),Object(l["a"])($,N,O,!1,null,"313d6c75",null)),T=M.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"section-heading"},[t._v("Students")]),n("table",[t._m(0),n("tbody",t._l(t.students,(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e.studentName))]),n("td",[t._v(t._s(e.studentID))])])})),0)])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Student ID")]),n("th",[t._v("Student Name")])])])}],E={name:"Students",mounted:function(){this.students=H()},data:function(){return{students:[]}}};function H(){return JSON.parse(B)}var B='[{"studentID": "Rachel Mendez", "studentName": "11111"}, {"studentID": "Brian Rose", "studentName": "111111"}]',D=E,J=(n("3f79"),Object(l["a"])(D,k,C,!1,null,"6150ac72",null)),A=J.exports;r["a"].use(_["a"]);var F=new _["a"]({routes:[{path:"/",component:S},{path:"/home",component:S},{path:"/Instructors",component:T},{path:"/Students",component:A}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)},router:F}).$mount("#app")},6011:function(t,e,n){},"62ba":function(t,e,n){"use strict";n("6011")},"85ec":function(t,e,n){},"88d7":function(t,e,n){},"8b71":function(t,e,n){"use strict";n("88d7")},c037:function(t,e,n){},e9a8:function(t,e,n){},f367:function(t,e,n){"use strict";n("e9a8")}});
//# sourceMappingURL=app.f32e44b2.js.map