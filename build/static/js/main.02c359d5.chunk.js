(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{41:function(e,t,n){},63:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(31),s=n.n(a),i=(n(41),n(42),n(16)),u=n(3),j=n(13),l=n.n(j),o=n(14),d=n(12),b=n(33),h=n.n(b).a.create({baseURL:"https://jsonplaceholder.typicode.com",headers:{Accept:"application/json"}}),x=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/users");case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[null,e.t0]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/users/".concat(t));case 3:return n=e.sent,e.abrupt("return",[n,null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[null,e.t0]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),O=n(74),f=n(75),m=n(76),v=n(77),g=(n(63),n(1));var w=function(e){var t=e.userList;return Object(g.jsx)(O.a,{children:t.map((function(e){return Object(g.jsx)(f.a,{md:4,sm:12,xs:12,lg:4,children:Object(g.jsxs)(m.a,{style:{marginTop:"10px"},children:[Object(g.jsx)("div",{className:"avatar-container",children:Object(g.jsx)("div",{className:"avatar",children:e.name.charAt(0)})}),Object(g.jsxs)(m.a.Body,{children:[Object(g.jsx)(m.a.Title,{className:"text-center",children:e.name}),Object(g.jsx)(m.a.Text,{className:"text-center",children:Object(g.jsxs)("span",{className:"email-text",children:["@",e.username]})}),Object(g.jsx)(m.a.Text,{className:"text-center",children:Object(g.jsx)("a",{href:"https://www."+e.website,target:"_blank",rel:"noreferrer",children:e.website})}),Object(g.jsx)("div",{className:"justify-content-center d-flex",children:Object(g.jsx)(i.b,{to:"/".concat(e.id),children:Object(g.jsx)(v.a,{variant:"primary",children:"More Detail"})})})]})]})},e.id)}))})};var y=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,n=Object(d.a)(t,2),r=n[0],a=n[1],r?c(r.data):console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(w,{userList:n})})};var T=function(e){var t=e.user,n=Object(u.f)();return console.log(t),Object(g.jsx)(m.a,{children:t&&Object(g.jsxs)(m.a.Body,{children:[Object(g.jsxs)(m.a.Title,{children:["Name : ",t.name]}),Object(g.jsxs)(m.a.Title,{children:["Username : ",t.username]}),Object(g.jsxs)(m.a.Title,{children:["Email : ",t.email]}),Object(g.jsxs)(m.a.Title,{children:["Phone : ",t.phone]}),Object(g.jsxs)(m.a.Title,{children:["Company : ",t.company.name]}),Object(g.jsxs)(m.a.Title,{children:["Website : ",t.website]}),Object(g.jsxs)(m.a.Title,{children:["Address :"," ",Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:["Street: ",t.address.street]}),Object(g.jsxs)("li",{children:["Suite: ",t.address.suite]}),Object(g.jsxs)("li",{children:["City: ",t.address.city]}),Object(g.jsxs)("li",{children:["Zip code: ",t.address.zipcode]})]})]}),Object(g.jsx)(v.a,{onClick:function(){return n.push("/")},children:"Go back"})]})})};var k=function(){var e=Object(u.g)(),t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],a=n[1],s=function(){var t=Object(o.a)(l.a.mark((function t(){var n,r,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e.id);case 2:n=t.sent,r=Object(d.a)(n,2),c=r[0],s=r[1],c&&a(c.data),s&&console.log(s);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(T,{user:c})})};var N=function(){return Object(g.jsx)(i.a,{children:Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{path:"/",component:y,exact:!0}),Object(g.jsx)(u.a,{path:"/:id",component:k,exact:!0})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),C()}},[[73,1,2]]]);
//# sourceMappingURL=main.02c359d5.chunk.js.map