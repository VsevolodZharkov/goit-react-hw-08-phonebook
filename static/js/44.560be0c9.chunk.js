"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[44],{854:function(t,e,n){n.d(e,{a:function(){return a}});var s=n(3329),a=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"modal-backdrop fade show"}),(0,s.jsx)("div",{className:"modal fade show d-flex align-items-center justify-content-center",style:{display:"block",height:"100vh"},children:(0,s.jsx)("div",{className:"spinner-border text-light",children:(0,s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})}},3044:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var s=n(2791),a=n(9434),c=n(501),r=n(6871),i=n(854),o=n(885),l=n(9085),u=n(476),d=n(3329),m=function(){var t=(0,r.s0)(),e=(0,r.UO)().postId,n=(0,s.useState)(!1),a=(0,o.Z)(n,2),c=a[0],m=a[1];return(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(i.a,{}),(0,d.jsxs)("div",{className:"btn-group mb-5 d-block",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){m(!0),(0,u.Mp)(e).then((function(){l.Am.success("You have successfully deleted your post!"),t("/posts")})).catch((function(){l.Am.error("Something went wrong!")})).finally((function(){return m(!1)}))},children:"Delete post"}),(0,d.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"Edit post"})]})]})},h=n(8172),p=n(6959),f=function(){var t=(0,r.UO)().postId,e=(0,r.TH)(),n=(0,a.I0)(),o=(0,a.v9)((function(t){return t.singlePost})),l=o.status,u=o.postData;return(0,s.useEffect)((function(){n((0,p.j)(t))}),[t,n]),l===h.Q.Loading||l===h.Q.Idle?(0,d.jsx)(i.a,{}):u&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)("img",{src:u.image,alt:u.title,className:"img-fluid mb-4",style:{maxHeight:"600px",width:"100%",objectFit:"cover"}}),(0,d.jsx)("h1",{className:"mb-5",children:u.title}),(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:u.content.replace(/\n/g,"<br/>")}}),(0,d.jsx)(c.rU,{state:e.state,to:"/posts/".concat(t,"/comments"),className:"btn btn-primary my-4",children:"Vew post comments"}),(0,d.jsx)(r.j3,{})]})}}}]);
//# sourceMappingURL=44.560be0c9.chunk.js.map