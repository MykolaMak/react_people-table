(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{29:function(e,t,a){e.exports=a(51)},34:function(e,t,a){},35:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=a(6),u=a(1),m=(a(34),a(35),function(){return r.a.createElement("h1",{className:"header"},"Home")}),s=a(8),i=a(13),f=a.n(i),h=a(24),p=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.map((function(e,t){return{id:t+1,name:e.name,sex:e.sex,born:e.born,died:e.died,fatherName:e.fatherName?e.fatherName:"none",motherName:e.motherName?e.motherName:"none",slug:e.slug,age:e.died-e.born,century:Math.ceil(e.died/100)}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=a(28),d=a(16),E=a(25),N=a.n(E),g=a(26),j=a.n(g),O=function(e){var t=e.person,a=e.searchTarget,n=Object(u.g)(),c=Object(u.i)().tabId;return r.a.createElement("tr",{className:j()("Person",{"Person-active":c===t.slug}),onClick:function(){return e=t.slug,void n.push({pathname:"/people/".concat(e),search:a});var e}},r.a.createElement("td",{className:"m"===t.sex?"male":"female"},t.name),r.a.createElement("td",null,t.sex.toUpperCase()),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",{className:"none"===t.father?"none":"male"},t.fatherName),r.a.createElement("td",{className:"none"===t.mother?"none":"female"},t.motherName),r.a.createElement("td",null,t.age),r.a.createElement("td",null,t.century))},v=function(e){var t=e.people,a=Object(u.h)(),c=new URLSearchParams(a.search),o=Object(u.g)(),l=t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{father:t.find((function(t){return t.name===e.fatherName}))||"none",mother:t.find((function(t){return t.name===e.motherName}))||"none"})})),m=Object(n.useState)([]),i=Object(s.a)(m,2),f=i[0],h=i[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),g=E[0],j=E[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),k=y[0],x=y[1];Object(n.useEffect)((function(){h(Object(b.a)(l))}),[t]);var C=Object(n.useCallback)(N()((function(e){c.set("query",e),o.push({search:c.toString()})}),500),[]),w=Object(n.useMemo)((function(){return f.filter((function(e){return(e.name+e.father+e.mother).toLowerCase().includes(k.toLowerCase())}))}),[f,k]);Object(n.useMemo)((function(){switch(g){case"died":case"born":case"age":case"century":w.sort((function(e,t){return e[g]-t[g]}));break;case"name":case"sex":w.sort((function(e,t){return e[g].localeCompare(t[g])}));break;case"father":w.sort((function(e,t){return e.fatherName.localeCompare(t.fatherName)}));break;case"mother":w.sort((function(e,t){return e.motherName.localeCompare(t.motherName)}))}}),[w,g]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:k,placeholder:"Type something to search",onChange:function(e){return function(e){x(e),C(e.trim())}(e.target.value)}}),r.a.createElement("table",{className:"PeopleTable purpleHorizon"},r.a.createElement("thead",null,r.a.createElement("tr",null,["Name","Sex","Born","Died","Father","Mother","Age","Century"].map((function(e){return r.a.createElement("th",{key:e,onClick:function(){return function(e){var t=e.toLowerCase();c.set("sortBy",t),j(t),o.push({search:c.toString()})}(e)}},e,g===e.toLowerCase()&&"*")})))),r.a.createElement("tbody",null,w.map((function(e){return r.a.createElement(O,{key:e.id,person:e,searchTarget:c.toString()})})))))},y=(a(49),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){p().then((function(e){c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"People Page"),r.a.createElement(v,{people:a}))}),k=(a(50),function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__link"},r.a.createElement(l.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",{className:"nav__link"},r.a.createElement(l.b,{to:"/people"},"People"))))}),x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:m}),r.a.createElement(u.b,{path:"/people/:tabId?",exact:!0,component:y}),r.a.createElement(u.a,{from:"/home",to:"/"}),r.a.createElement(u.b,null,r.a.createElement("h1",null,"Page not found!"))))};o.a.render(r.a.createElement(l.a,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.93069c88.chunk.js.map