(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),u=a(8),m=a(1),o=function(){return l.a.createElement("h1",null,"Home page")},p=a(10),s=a.n(p),i=a(13),E=a(17),d=a(19),f=function(e){var t=e.name,a=e.sex,n=e.born,r=e.died,c=e.motherName,u=e.fatherName;return l.a.createElement("tr",{className:"Person"},l.a.createElement("td",null,t),l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,c||" - "),l.a.createElement("td",null,u||" - "))},h=f;f.defaultProps={motherName:" - ",fatherName:" - "};a(26);var b=function(e){var t=e.people;return l.a.createElement("table",{className:"PeopleTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name"),l.a.createElement("td",null,"sex"),l.a.createElement("td",null,"born"),l.a.createElement("td",null,"died"),l.a.createElement("td",null,"mother"),l.a.createElement("td",null,"father"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(h,Object.assign({key:e.slug},e))}))))},N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(E.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:t=e.sent,a=t.map((function(e,t,a){return Object(i.a)(Object(i.a)({},e),{},{father:a.find((function(t){return t.name===e.fatherName}))||null,mother:a.find((function(t){return t.name===e.motherName}))||null})})),r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"People page"),l.a.createElement(b,{people:a}))},v=function(){return l.a.createElement("h1",null,"Page not found")},j=(a(27),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"main-header"},l.a.createElement(u.b,{to:"/",exact:!0,activeClassName:"selected"},"Home"),l.a.createElement(u.b,{to:"/people",exact:!0,activeClassName:"selected"},"People")),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0,component:o}),l.a.createElement(m.b,{path:"/people",exact:!0,component:N}),l.a.createElement(m.a,{path:"/home",to:"/"}),l.a.createElement(v,null)))});c.a.render(l.a.createElement(u.a,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bdc6035d.chunk.js.map