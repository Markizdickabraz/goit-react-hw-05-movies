"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{882:function(n,t,e){e.d(t,{Z:function(){return c}});var a=e(541),r=e(184);function c(n){return n.data.map((function(n){return(0,r.jsx)(a.Am,{children:(0,r.jsxs)(a.jJ,{to:"/movies/".concat(n.id),children:[(0,r.jsx)(a.vz,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title}),(0,r.jsx)("h4",{children:n.title})]})},n.id)}))}},541:function(n,t,e){e.d(t,{Am:function(){return f},BJ:function(){return s},jJ:function(){return d},vz:function(){return p}});var a,r,c,i,o=e(168),u=e(444),l=e(87),s=u.ZP.ul(a||(a=(0,o.Z)(["\npadding: 25px;\ndisplay: flex;\nflex-wrap: wrap;\ngap:20px;\nlist-style: none;\n"]))),f=u.ZP.li(r||(r=(0,o.Z)(["\nwidth: 240px;\ndisplay:flex;\nflex-direction: column;\n"]))),p=u.ZP.img(c||(c=(0,o.Z)(["\nwidth:100%;\n"]))),d=(0,u.ZP)(l.rU)(i||(i=(0,o.Z)(["\ntext-decoration: none;\ndisplay:block;\ncolor:black;\n    :hover {\n        color:lightblue;\n    }\n"])))},194:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var a,r=e(861),c=e(439),i=e(757),o=e.n(i),u=e(791),l=e(87),s=e(243),f=e(882),p=e(541),d=e(168),h=e(444).ZP.form(a||(a=(0,d.Z)(["\npadding:15px;\ndisplay:flex;\ngap:10px;\n"]))),m=e(184);function x(n){var t=n.value,e=n.onChange,a=n.formSubmit;return(0,m.jsxs)(h,{onSubmit:a,children:[(0,m.jsxs)("label",{children:["\u041f\u043e\u0448\u0443\u043a \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e",(0,m.jsx)("input",{type:"text",name:"name",value:t,onChange:e,autoComplete:"off"})]}),(0,m.jsx)("button",{type:"onSubmit",children:"Search"})]})}function v(){var n,t=(0,u.useState)([]),e=(0,c.Z)(t,2),a=e[0],i=e[1],d=(0,l.lr)(),h=(0,c.Z)(d,2),v=h[0],g=h[1],b=null!==(n=v.get("name"))&&void 0!==n?n:"",Z=function(n){g(""!==n?{name:n}:{})},j="faab19b092cac6c59a97dec233a38f4d",k="https://api.themoviedb.org/3/search/movie?";function w(n){return y.apply(this,arguments)}function y(){return y=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(k,"api_key=").concat(j,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:e=n.sent,i(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),y.apply(this,arguments)}return(0,u.useEffect)((function(){a!==[]&&w(b)}),[]),(0,u.useEffect)((function(){""===b&&g({})}),[b]),(0,m.jsxs)("main",{children:[(0,m.jsx)(x,{value:b,onChange:function(n){Z(n.currentTarget.value)},formSubmit:function(n){n.preventDefault(),""!==b.trim()?w(b):alert("\u0422\u0430\u043c \u0446\u0435\u0439, \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u0430!")}}),(0,m.jsx)(p.BJ,{children:(0,m.jsx)(f.Z,{data:a})})]})}}}]);
//# sourceMappingURL=194.21cf02c3.chunk.js.map