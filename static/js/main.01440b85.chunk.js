(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),m=a(6),o=a(1),u=(a(26),a(27),function(){return r.a.createElement("h1",{className:"header"},"Home")}),s=a(20),i=a(10),p=a.n(i),h=a(17),E=function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.map((function(e,t){return{id:t+1,name:e.name,sex:e.sex,born:e.born,died:e.died,fatherName:e.fatherName?e.fatherName:"none",motherName:e.motherName?e.motherName:"none",slug:e.slug,age:e.died-e.born,century:Math.ceil(e.died/100)}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=a(13),d=a(18),b=a.n(d),N=function(e){var t=e.person,a=Object(o.f)(),n=Object(o.g)().tabId;return r.a.createElement("tr",{className:b()("Person",{"Person-active":n===t.slug}),onClick:function(){return e=t.slug,void a.push({pathname:"/people/".concat(e)});var e}},r.a.createElement("td",{className:"m"===t.sex?"male":"female"},t.name),r.a.createElement("td",null,t.sex.toUpperCase()),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",{className:"none"===t.father?"none":"male"},t.fatherName),r.a.createElement("td",{className:"none"===t.mother?"none":"female"},t.motherName),r.a.createElement("td",null,t.age),r.a.createElement("td",null,t.century))},v=function(e){var t=e.people,a=t.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{father:t.find((function(t){return t.name===e.fatherName}))||"none",mother:t.find((function(t){return t.name===e.motherName}))||"none"})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"PeopleTable purpleHorizon"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Sex"),r.a.createElement("th",null,"Born"),r.a.createElement("th",null,"Died"),r.a.createElement("th",null,"Father"),r.a.createElement("th",null,"Mother"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Century"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement(N,{key:e.id,person:e})})))))},g=(a(34),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){E().then((function(e){l(e)}))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"People Page"),r.a.createElement(v,{people:a}))}),x=(a(35),function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__link"},r.a.createElement(m.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",{className:"nav__link"},r.a.createElement(m.b,{to:"/people"},"People"))))}),j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:u}),r.a.createElement(o.a,{path:"/people/:tabId?",exact:!0,component:g}),r.a.createElement(o.a,null,r.a.createElement("h1",null,"Page not found!"))))};c.a.render(r.a.createElement(m.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.01440b85.chunk.js.map