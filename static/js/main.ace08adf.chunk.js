(this["webpackJsonpmy-pet-project"]=this["webpackJsonpmy-pet-project"]||[]).push([[0],{109:function(e,t,n){e.exports=n.p+"static/media/usersPhoto.5d3f3632.jpg"},11:function(e,t,n){e.exports={nav:"Sidebar_nav__1N17u",item:"Sidebar_item__3YTIZ",active:"Sidebar_active__NGft3",friends:"Sidebar_friends__31Cph"}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var a=n(134),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f622bb4-7235-4fc9-b85b-75b00ff9e5b9"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},u={authMe:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(43),r=n(4),o={dialogs:[{id:1,name:"NiKo"},{id:2,name:"Dasha"},{id:3,name:"Julia"},{id:4,name:"Mark"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hi, how are you?"},{id:3,message:"What is your status?"},{id:4,message:"Hey"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageText;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:5,message:n}])});default:return e}},u=function(e){return{type:"SEND_MESSAGE",newMessageText:e}}},135:function(e,t,n){e.exports=n.p+"static/media/preloader.46c9430b.svg"},164:function(e,t,n){e.exports=n(290)},169:function(e,t,n){},170:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n(55),r=n(0),o=n.n(r),c=n(48),u=n.n(c),i=n(89),s=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:n,validate:a},r))," ",c)}},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(64),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(169);var u=n(35),i=n(36),s=n(38),l=n(37),f=n(10),p=n(12),d=(n(170),n(11)),m=n.n(d),g=function(){return r.a.createElement("div",{className:m.a.nav},r.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},r.a.createElement(p.b,{to:"/profile",activeClassName:m.a.active},"Profile")),r.a.createElement("div",{className:m.a.item},r.a.createElement(p.b,{to:"/dialogs",activeClassName:m.a.active},"Dialogs")),r.a.createElement("div",{className:m.a.item},r.a.createElement(p.b,{to:"/users",activeClassName:m.a.active},"Users")),r.a.createElement("div",{className:m.a.item},r.a.createElement(p.b,{to:"/news",activeClassName:m.a.active},"News")),r.a.createElement("div",{className:m.a.item},r.a.createElement(p.b,{to:"/music",activeClassName:m.a.active},"Music")),r.a.createElement("div",{className:m.a.item},r.a.createElement(p.b,{to:"/settings",activeClassName:m.a.active},"Settings")),r.a.createElement("div",{className:m.a.friends},r.a.createElement("h2",null,"Friends"),r.a.createElement("span",{className:m.a.item},r.a.createElement(p.b,{to:"/dialogs/1"},"NiKo")),r.a.createElement("span",{className:m.a.item},r.a.createElement(p.b,{to:"/dialogs/2"},"Dasha")),r.a.createElement("span",{className:m.a.item},r.a.createElement(p.b,{to:"/dialogs/3"},"Julia")),r.a.createElement("span",{className:m.a.item},r.a.createElement(p.b,{to:"/dialogs/4"},"Mark"))))},h=function(){return r.a.createElement("div",null,"News")},b=function(){return r.a.createElement("div",null,"Music")},v=function(){return r.a.createElement("div",null,"Settings")},E=n(18),w=n(7),O=n.n(w),j=n(15),_=n(43),P=n(4),S=n(13),C=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),a):e}))},y="social-network/users/FOLLOW",k="social-network/users/UNFOLLOW",U="social-network/users/SET_USERS",N="social-network/users/SET_CURRENT_PAGE",x="social-network/users/SET_TOTAL_USERS_COUNT",I="social-network/users/TOGGLE_IS_FETCHING",T={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!0,followInProgress:[]},A=function(e){return{type:y,userId:e}},F=function(e){return{type:k,userId:e}},L=function(e){return{type:N,currentPage:e}},z=function(e){return{type:I,isFetching:e}},M=function(e,t){return{type:"social-network/users/TOGGLE_IS_FOLLOW_IN_PROGRESS",isFetching:e,userId:t}},R=function(){var e=Object(j.a)(O.a.mark((function e(t,n,a,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(M(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(M(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(P.a)(Object(P.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case k:return Object(P.a)(Object(P.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case U:return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case N:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case x:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.totalUsersCount});case I:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"social-network/users/TOGGLE_IS_FOLLOW_IN_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followInProgress:t.isFetching?[].concat(Object(_.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},G=n(55),H=n(69),W=n.n(H),J=n(68),B=n(98),K=n(71),V=n.n(K),X=n(93),Q=n.n(X),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=void 0===o?1:o,u=e.onPageChanged,i=void 0===u?function(e){return e}:u,s=e.portionSize,l=void 0===s?20:s,f=Math.ceil(t/n),p=[],d=1;d<=f;d++)p.push(d);var m=Math.ceil(f/l),g=Object(a.useState)(1),h=Object(B.a)(g,2),b=h[0],v=h[1],E=(b-1)*l+1,w=b*l;return r.a.createElement("div",{className:Q()(V.a.paginator)},b>1&&r.a.createElement("button",{onClick:function(){v(b-1)}},"PREV"),p.filter((function(e){return e>=E&&e<=w})).map((function(e){return r.a.createElement("span",{className:Q()(Object(J.a)({},V.a.selectedPage,c===e),V.a.pageNumber),key:e,onClick:function(t){i(e)}},e)})),m>b&&r.a.createElement("button",{onClick:function(){v(b+1)}},"NEXT"))},Z=n(109),q=n.n(Z),$=function(e){var t=e.user,n=e.followInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:W.a.usersPhoto,src:null!=t.photos.small?t.photos.small:q.a,alt:"usersPhoto"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unsubscribe"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Subscribe"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status),r.a.createElement("div",null,t.id)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},ee=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,o=e.pageSize,c=e.users,u=Object(G.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return r.a.createElement("div",{className:W.a.usersContainer},r.a.createElement(Y,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:o}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement($,{key:e.id,user:e,followInProgress:u.followInProgress,unfollow:u.unfollow,follow:u.follow})}))))},te=n(47),ne=n(136),ae=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),re=function(e){return e.usersPage.totalUsersCount},oe=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.isFetching},ie=function(e){return e.usersPage.followInProgress},se=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(te.a,null):null,r.a.createElement(ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followInProgress:this.props.followInProgress,onPageChanged:this.onPageChanged}))}}]),n}(r.a.Component),le=Object(E.b)((function(e){return{users:ae(e),totalUsersCount:re(e),pageSize:oe(e),currentPage:ce(e),isFetching:ue(e),followInProgress:ie(e)}}),{follow:function(e){return function(){var t=Object(j.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=S.d.follow.bind(S.d),t.next=3,R(n,e,a,A);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=S.d.unfollow.bind(S.d),t.next=3,R(n,e,a,F);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowInProgress:M,getUsers:function(e,t){return function(){var n=Object(j.a)(O.a.mark((function n(a){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(z(!0)),a(L(e)),n.next=4,S.d.getUsers(e,t);case 4:r=n.sent,a(z(!1)),a((c=r.items,{type:U,users:c})),a((o=r.totalCount,{type:x,totalUsersCount:o}));case 8:case"end":return n.stop()}var o,c}),n)})));return function(e){return n.apply(this,arguments)}}()}})(se),fe=n(94),pe=n.n(fe),de=function(e){return r.a.createElement("div",{className:pe.a.header},r.a.createElement("img",{src:"https://samanvi.in/wp-content/uploads/2018/05/l1.jpg",alt:"logo"}),r.a.createElement("div",{className:pe.a.login},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(p.b,{to:"/login"},"Login")))},me=n(30),ge="social-network/auth/SET_USER_DATA",he={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},be=function(e,t,n,a){return{type:ge,payload:{userId:e,email:t,login:n,isAuth:a}}},ve=function(e){return{type:"social-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Ee=function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){var n,a,r,o,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,c=a.login,t(be(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},we=function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(ve(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:case"social-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},je=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(de,this.props)}}]),n}(r.a.Component),_e=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(je),Pe=n(131),Se=n(25),Ce=n(65),ye=n(48),ke=n.n(ye),Ue=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(Se.c)("Email","email",Se.a,[Ce.b]),Object(Se.c)("Password","password",Se.a,[Ce.b],{type:"password"}),Object(Se.c)(null,"rememberMe",Se.a,[],{type:"checkbox"},"remember me"),a&&r.a.createElement("img",{src:a,alt:"captcha"}),a&&Object(Se.c)("Symbols from image","captcha",Se.a,[Ce.b],{}),n&&r.a.createElement("div",{className:ke.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Ne=Object(E.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(j.a)(O.a.mark((function r(o){var c,u;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(Ee()):(10===c.data.resultCode&&o(we()),u=c.data.messages.length>0?c.data.messages[0]:"Some Error",o(Object(me.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),xe=n(9),Ie="social-network/app/INITIALIZED_SUCCESS",Te={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},Fe=n(97),Le=n(130),ze={},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze;return e},Re=n(138),De=n(132),Ge=Object(xe.c)({profilePage:Fe.d,dialogsPage:Le.a,usersPage:D,sidebar:Me,auth:Oe,app:Ae,form:De.a}),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.d,We=Object(xe.e)(Ge,He(Object(xe.a)(Re.a))),Je=r.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),Be=r.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Ke=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){alert("error")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(_e,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(te.a,null)},r.a.createElement("section",null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{to:"/profile"})}}),r.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Be,null)}}),r.a.createElement(f.b,{path:"/dialogs",render:function(){return r.a.createElement(Je,null)}}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(f.b,{path:"/news",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(f.b,{path:"/music",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(f.b,{path:"/settings",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(f.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))))):r.a.createElement(te.a,null)}}]),n}(r.a.Component),Ve=Object(xe.d)(f.g,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ee());Promise.all([t]).then((function(){e({type:Ie})}))}}}))(Ke),Xe=function(e){return r.a.createElement(p.a,null,r.a.createElement(E.a,{store:We},r.a.createElement(Ve,null)))};c.a.render(r.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,n){"use strict";var a=n(135),r=n.n(a),o=n(0),c=n.n(o);t.a=function(e){return c.a.createElement("div",{style:{marginLeft:450}},c.a.createElement("img",{src:r.a,alt:"preloader"}))}},48:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2FU6-",error:"FormsControls_error__t7t3F",formSummaryError:"FormsControls_formSummaryError__1dAA8"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__1Cn1M",usersPhoto:"Users_usersPhoto__1671b"}},71:function(e,t,n){e.exports={paginator:"Pagination_paginator__30mnl",pageNumber:"Pagination_pageNumber__3JUhQ",selectedPage:"Pagination_selectedPage__3aOTQ"}},94:function(e,t,n){e.exports={header:"Header_header__3pT-F",login:"Header_login__2BJxi"}},97:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return w})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return _}));var a=n(7),r=n.n(a),o=n(15),c=n(43),u=n(4),i=n(13),s=n(30),l="social-network/profile/ADD_POST",f="social-network/profile/DELETE_POST",p="social-network/profile/SET_USER_PROFILE",d="social-network/profile/SET_USER_STATUS",m="social-network/profile/SAVE_PHOTO_SUCCESS",g={posts:[{id:1,message:"Hi",likes:10},{id:2,message:"My first post",likes:30},{id:3,message:"What are you doing now?",likes:20},{id:4,message:"Hi again",likes:100}],profile:null,status:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likes:2};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case f:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case d:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case m:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}},b=function(e){return{type:l,newPostText:e}},v=function(e){return{type:d,status:e}},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:p,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(v(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(v(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:m,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(E(o)),t.next=10;break;case 8:return n(Object(s.a)("editProfile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}},[[164,1,2]]]);
//# sourceMappingURL=main.ace08adf.chunk.js.map