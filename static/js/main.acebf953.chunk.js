(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),i=n.n(o),c=n(8),s=(n(29),n(5)),l=n(6),u=n(10),h=n(7),p=n(9),d=n(2),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).renderTemplate=n.renderTemplate.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderTemplate",value:function(){var e=this.props.user,t=e.name,n=e.error,r=e.isFetching;return n?a.a.createElement("p",null,"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"):r?a.a.createElement("div",{style:{justifySelf:"flex-end",width:"200px",color:"white",marginRight:"100px"}},"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."):t?a.a.createElement("div",{className:"logged"},"\u041f\u0440\u0438\u0432\u0435\u0442, ",t,"!"):a.a.createElement("button",{className:"btn btn-login",onClick:this.props.handleLogin},"Login")}},{key:"render",value:function(){return a.a.createElement("header",{className:"user"},a.a.createElement("h2",null,"Top Photo App"),this.renderTemplate())}}]),t}(r.Component),f=Object(c.b)(function(e){return{user:e.user}},function(e){return{handleLogin:function(){return e(function(e){e({type:"LOGIN_REQUEST"}),VK.Auth.login(function(t){if(t.session){var n=t.session.user.first_name;e({type:"LOGIN_SUCCESS",payload:n})}else e({type:"LOGIN_FAIL",error:!0,payload:new Error("Auth error")})},4)})}}})(function(e){return a.a.createElement(m,e)}),g=function(e){return a.a.createElement("div",{className:"photo-grid"},e.photos.map(function(e){for(var t=3,n=0;n<e.sizes.length;n++)if(e.sizes[n].width>=600&&e.sizes[n].width<=1600){console.log(e.sizes[n].width),t=n;break}return a.a.createElement("figure",{key:e.id,className:"grid-figure"},a.a.createElement("img",{src:e.sizes[t].url,className:"grid-photo",alt:""}),a.a.createElement("figcaption",null,a.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"})," ",e.likes.count))}))},y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).years=[2018,2017,2016,2015,2014,2013,2012],n.handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getPhotos(this.years[0])}},{key:"handleClick",value:function(e){var t=+e.currentTarget.innerText;this.props.getPhotos(t)}},{key:"renderTemplate",value:function(){var e=this.props.page,t=e.photos,n=e.error,r=e.isFetching;return n?a.a.createElement("p",null,"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"):r?a.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."):0===t.length?a.a.createElement("p",{style:{textAlign:"center"}},"You don't have any photo this year \ud83d\ude14"):a.a.createElement(g,{photos:t})}},{key:"render",value:function(){var e=this,t=this.props.page,n=t.year,r=t.photos,o=this.props.isAuthorized;return a.a.createElement("div",{className:"page"},a.a.createElement("div",{className:"year-btns"},this.years.map(function(t,n){return a.a.createElement("button",{className:"btn",onClick:e.handleClick,key:n},t)})),o?a.a.createElement("div",null,a.a.createElement("div",{style:{textAlign:"center"}},n," year [",r.length,"]"),this.renderTemplate()):a.a.createElement("div",{style:{textAlign:"center",marginTop:"40px"}},"You need to be authorized \ud83c\udf83 to view photos."))}}]),t}(r.Component),E=[],b=!1,O=function(e,t){var n=[];return e.forEach(function(e){new Date(1e3*e.date).getFullYear()===t&&n.push(e)}),n.sort(function(e,t){return t.likes.count-e.likes.count}),n},v="GET_PHOTOS_SUCCESS",j="GET_PHOTOS_FAIL",k=function(e){return function(t){if(t({type:"GET_PHOTOS_REQUEST",payload:e}),b){var n=O(E,e);t({type:v,payload:n})}else!function e(t,n,r,a){VK.Api.call("photos.getAll",{extended:1,count:n,offset:t,v:"5.80"},function(o){try{if(E=E.concat(o.response.items),t<=o.response.count)e(t+=200,n,r,a);else{var i=O(E,r);b=!0,a({type:v,payload:i})}}catch(c){a({type:j,error:!0,payload:new Error(c)})}})}(0,200,e,t)}},w=Object(c.b)(function(e){return{page:e.page,isAuthorized:e.user.isAuthorized}},function(e){return{getPhotos:function(t){return e(k(t))}}})(function(e){return a.a.createElement(y,e)}),T=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(f,this.props),a.a.createElement(w,this.props))}}]),t}(r.Component),S=n(4),A=n(3),N={year:2018,photos:[],error:"",isFetching:!1},C={name:"",error:"",isFetching:!1,isAuthorized:!1},_=Object(S.c)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PHOTOS_REQUEST":return Object(A.a)({},e,{year:t.payload,error:"",isFetching:!0});case v:return Object(A.a)({},e,{photos:t.payload,error:"",isFetching:!1});case j:return Object(A.a)({},e,{error:t.payload.message,isFetching:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return Object(A.a)({},e,{isFetching:!0,error:""});case"LOGIN_SUCCESS":return Object(A.a)({},e,{isFetching:!1,name:t.payload,isAuthorized:!0});case"LOGIN_FAIL":return Object(A.a)({},e,{isFetching:!1,error:t.payload.message,isAuthorized:!1});default:return e}}}),F=n(19),z=n.n(F),L=n(20),x=Object(S.d)(_,Object(S.a)(L.a,z.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(c.a,{store:x},a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.acebf953.chunk.js.map