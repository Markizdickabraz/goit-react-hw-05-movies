"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{882:function(n,t,e){e.d(t,{Z:function(){return u}});var a=e(541),r=e(689),c=e(184);function u(n){var t=n.data,e=(0,r.TH)();return t.map((function(n){return(0,c.jsx)(a.Am,{children:(0,c.jsxs)(a.jJ,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,c.jsx)(a.vz,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title}),(0,c.jsx)("h4",{children:n.title})]})},n.id)}))}},541:function(n,t,e){e.d(t,{Am:function(){return f},BJ:function(){return s},jJ:function(){return d},vz:function(){return p}});var a,r,c,u,o=e(168),i=e(444),l=e(87),s=i.ZP.ul(a||(a=(0,o.Z)(["\npadding: 25px;\ndisplay: flex;\nflex-wrap: wrap;\ngap:20px;\nlist-style: none;\n"]))),f=i.ZP.li(r||(r=(0,o.Z)(["\nwidth: 240px;\ndisplay:flex;\nflex-direction: column;\n"]))),p=i.ZP.img(c||(c=(0,o.Z)(["\nwidth:100%;\n"]))),d=(0,i.ZP)(l.rU)(u||(u=(0,o.Z)(["\ntext-decoration: none;\ndisplay:block;\ncolor:black;\n    :hover {\n        color:lightblue;\n    }\n"])))},194:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var a,r=e(861),c=e(439),u=e(757),o=e.n(u),i=e(791),l=e(87),s=e(243),f=e(882),p=e(541),d=e(168),h=e(444).ZP.form(a||(a=(0,d.Z)(["\npadding:15px;\ndisplay:flex;\ngap:10px;\n"]))),m=e(184);function x(n){var t=n.value,e=n.onChange,a=n.formSubmit;return(0,m.jsxs)(h,{onSubmit:a,children:[(0,m.jsxs)("label",{children:["\u041f\u043e\u0448\u0443\u043a \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e",(0,m.jsx)("input",{type:"text",name:"name",value:t,onChange:e,autoComplete:"off"})]}),(0,m.jsx)("button",{type:"onSubmit",children:"Search"})]})}function v(){var n,t=(0,i.useState)(""),e=(0,c.Z)(t,2),a=e[0],u=e[1],d=(0,i.useState)([]),h=(0,c.Z)(d,2),v=h[0],g=h[1],Z=(0,l.lr)(),b=(0,c.Z)(Z,2),j=b[0],k=b[1],w=null!==(n=j.get("name"))&&void 0!==n?n:"",y=function(n){k(""!==n?{name:n}:{})},S="faab19b092cac6c59a97dec233a38f4d",_="https://api.themoviedb.org/3/search/movie?";function C(n){return P.apply(this,arguments)}function P(){return P=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(_,"api_key=").concat(S,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:e=n.sent,g(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),P.apply(this,arguments)}return(0,i.useEffect)((function(){v!==[]&&C(w)}),[]),(0,i.useEffect)((function(){""===w&&k({})}),[w]),(0,m.jsxs)("main",{children:[(0,m.jsx)(x,{value:a,onChange:function(n){u(n.currentTarget.value),y(n.currentTarget.value)},formSubmit:function(n){n.preventDefault(),""!==w.trim()?(C(w),u("")):alert("\u0422\u0430\u043c \u0446\u0435\u0439, \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u0430!")}}),(0,m.jsx)(p.BJ,{children:(0,m.jsx)(f.Z,{data:v})})]})}}}]);
//# sourceMappingURL=194.d5301e56.chunk.js.map