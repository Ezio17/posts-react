(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(80)},40:function(e,t,a){},41:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(16),l=a.n(o),c=(a(40),a(41),a(13)),r=function(e){return s.a.createElement("h1",{className:"title"},e.children)},i=a(17),m=a(8),u=a(9),p=a(11),d=a(10),h=a(2),b=a(12),f=a(18),E=a.n(f),g=a(14),v=a.n(g),C=a(30),y=a.n(C),N=a(5),k=function(e){return s.a.createElement("table",{className:"posts-table"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"posts-table__title"},s.a.createElement("th",null,"ID"),s.a.createElement("th",null,"Title"),s.a.createElement("th",null,"Coments"),s.a.createElement("th",null,"Author"))),s.a.createElement("tbody",null,e.posts.map(function(t){return s.a.createElement("tr",{key:t.id,className:"posts-table__info"},s.a.createElement("td",null,t.id),s.a.createElement("td",null,s.a.createElement(N.b,{to:"/posts/".concat(t.id)},t.title)),s.a.createElement("td",{onClick:function(){return e.openCommentModal(t.id)},className:"posts-table__comments"},"Open comments"),s.a.createElement("td",{onClick:function(){return e.openUserModal(t.userId)},className:"posts-table__user"},"UserId: ",t.userId))})))},O=function(e){return e.postComments.map(function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("div",{className:"col-md-12 col-sm-10 comments-modal"},s.a.createElement("div",{className:"panel panel-default arrow left"},s.a.createElement("div",{className:"panel-body"},s.a.createElement("header",{className:"text-left"},s.a.createElement("div",{className:"comment-user"},"Author: ",e.email)),s.a.createElement("div",{className:"comment-post"},s.a.createElement("p",null,e.body))))))})},j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={addressVisibility:!1,companyVisibility:!1},a.companyVisibilityInfo=a.companyVisibilityInfo.bind(Object(h.a)(a)),a.addressVisibilityInfo=a.addressVisibilityInfo.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"companyVisibilityInfo",value:function(){this.setState(function(e){return{companyVisibility:!e.companyVisibility}})}},{key:"addressVisibilityInfo",value:function(){this.setState(function(e){return{addressVisibility:!e.addressVisibility}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.addressVisibility,n=t.companyVisibility,o=a?"list-group-item":"list-group-item hidden",l=n?"list-group-item":"list-group-item hidden";return s.a.createElement("div",null,s.a.createElement("div",null,this.props.userInfo.map(function(t){return s.a.createElement("div",{className:"offset-md-3 col-md-6 user-block",key:t.name},s.a.createElement("ul",{className:"list-group  text-center"},s.a.createElement("li",{className:"list-group-item"},"Name: ",t.name),s.a.createElement("li",{className:"list-group-item"},"User name: ",t.username),s.a.createElement("li",{className:"list-group-item"},"Email: ",t.email),s.a.createElement("li",{className:"list-group-item"},"Phone: ",t.phone),s.a.createElement("li",{className:"list-group-item"},"Website: ",t.website),s.a.createElement("li",{className:"list-group-item pointer",onClick:e.addressVisibilityInfo},"Address info"),s.a.createElement("li",{className:o},"City: ",t.address.city),s.a.createElement("li",{className:o},"Geo: lat ",t.address.geo.lat,", lng ",t.address.geo.lng," "),s.a.createElement("li",{className:o},"Street: ",t.address.street),s.a.createElement("li",{className:o},"Suite: ",t.address.suite),s.a.createElement("li",{className:o},"Zipcode: ",t.address.zipcode),s.a.createElement("li",{className:"list-group-item pointer",onClick:e.companyVisibilityInfo},"Company info"),s.a.createElement("li",{className:l},"Name: ",t.company.name),s.a.createElement("li",{className:l},"Catch Phrase: ",t.company.name),s.a.createElement("li",{className:l},"Bs: ",t.company.name)))})),s.a.createElement("div",{className:"comment-button"},s.a.createElement("button",{onClick:this.props.closeModal,type:"button",className:"btn btn-danger"},"Close")))}}]),t}(s.a.Component),I={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"70%",height:"80%"}};E.a.setAppElement("#root");var _=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={posts:[],postsLoad:!1,postComments:[],postCommentsLoad:!1,modalCommentsIsOpen:!1,modalUserIsOpen:!1,modalUserLoad:!1,userInfo:[],pageCount:0,page:1},a.baseURL="https://jsonplaceholder.typicode.com",a.openCommentModal=a.openCommentModal.bind(Object(h.a)(a)),a.closeCommentModal=a.closeCommentModal.bind(Object(h.a)(a)),a.openUserModal=a.openUserModal.bind(Object(h.a)(a)),a.closeUserModal=a.closeUserModal.bind(Object(h.a)(a)),a.handlePageClick=a.handlePageClick.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.baseURL,"/posts?_start=").concat(0,"&_limit=").concat(10)).then(function(e){return e.json()}).then(function(t){return fetch("".concat(e.baseURL,"/posts")).then(function(e){return e.json()}).then(function(a){return e.setState({postsLoad:!0,posts:t,pageCount:a.length/10})})})}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.state.page!==e.match.params.id){this.setState({postsLoad:!1,page:e.match.params.id});var a=this.props.match.params.id-1+"0";fetch("".concat(this.baseURL,"/posts?_start=").concat(a,"&_limit=").concat(10)).then(function(e){return e.json()}).then(function(e){return t.setState({posts:e,postsLoad:!0})})}}},{key:"openCommentModal",value:function(e){var t=this;fetch("".concat(this.baseURL,"/comments?postId=").concat(e)).then(function(e){return e.json()}).then(function(e){return t.setState({postComments:e,modalCommentsIsOpen:!0,postCommentsLoad:!0})})}},{key:"closeCommentModal",value:function(){this.setState({modalCommentsIsOpen:!1})}},{key:"openUserModal",value:function(e){var t=this;this.setState({userInfo:[]}),fetch("".concat(this.baseURL,"/users/").concat(e)).then(function(e){return e.json()}).then(function(e){return t.setState({modalUserIsOpen:!0,modalUserLoad:!0,userInfo:[].concat(Object(i.a)(t.state.userInfo),[e])})})}},{key:"closeUserModal",value:function(){this.setState({modalUserIsOpen:!1})}},{key:"handlePageClick",value:function(e){var t=e.selected+1;this.props.history.push("/posts&page=".concat(t)),this.setState({page:t})}},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.modalCommentsIsOpen,n=e.postComments,o=e.postsLoad,l=e.postCommentsLoad,c=e.userInfo,r=e.modalUserIsOpen,i=e.modalUserLoad;return s.a.createElement("div",null,s.a.createElement(E.a,{isOpen:a,onRequestClose:this.closeCommentModal,style:I},l?s.a.createElement(O,{postComments:n}):s.a.createElement(v.a,{type:"Puff",color:"#00BFFF",height:"150",width:"150",className:"spinner"}),s.a.createElement("div",{className:"comment-button"},s.a.createElement("button",{onClick:this.closeCommentModal,type:"button",className:"btn btn-danger"},"Close"))),s.a.createElement(E.a,{isOpen:r,onRequestClose:this.closeUserModal,style:I},i?s.a.createElement(j,{closeModal:this.closeUserModal,userInfo:c}):s.a.createElement(v.a,{type:"Puff",color:"#00BFFF",height:"150",width:"150",className:"spinner"})),o?s.a.createElement("div",null,s.a.createElement(k,{posts:t,openCommentModal:this.openCommentModal,openUserModal:this.openUserModal}),s.a.createElement(y.a,{previousLabel:"<",nextLabel:">",forcePage:+this.state.page-1,breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeLinkClassName:"active-page",pageLinkClassName:"page-links",previousClassName:"previous-arrow",nextClassName:"next-arrow"})):s.a.createElement(v.a,{type:"Puff",color:"#00BFFF",height:150,width:150,className:"spinner"}))}}]),t}(s.a.Component),U=Object(c.f)(_),x=function(){return s.a.createElement("div",{className:"create-post-button-wrapper"},s.a.createElement(N.b,{to:"/create-post"},s.a.createElement("button",{className:"btn btn-primary create-post-button"},"Create Post")))},L=function(){return s.a.createElement("div",null,s.a.createElement(r,null,"Posts"),s.a.createElement(x,null),s.a.createElement(U,null))},w=a(23),M=a.n(w),P=a(33),F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={post:[],postLoad:!1,postComments:[]},a.baseURL="https://jsonplaceholder.typicode.com",a.postId=e.match.params.id,a.getPost=a.getPost.bind(Object(h.a)(a)),a.getPostComments=a.getPostComments.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(P.a)(M.a.mark(function e(){var t;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.getPost(),this.getPostComments()]);case 2:t=e.sent,this.setState(function(e){return{post:[].concat(Object(i.a)(e.post),[t[0]]),postComments:t[1],postLoad:!0}});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPost",value:function(){return fetch("".concat(this.baseURL,"/posts/").concat(this.postId)).then(function(e){return e.json()})}},{key:"getPostComments",value:function(){return fetch("".concat(this.baseURL,"/comments?postId=").concat(this.postId)).then(function(e){return e.json()})}},{key:"render",value:function(){var e=this.state,t=e.post,a=e.postComments,n=e.postLoad;return s.a.createElement("div",{className:"post"},s.a.createElement(N.b,{to:"/",className:"post__title"},"Home Page"),n?s.a.createElement("div",null,t.map(function(e){return s.a.createElement("div",{key:e.id,className:"post__info"},s.a.createElement("h3",null,e.title),s.a.createElement("p",null,e.body))}),s.a.createElement("div",{className:"card-comments"},a.map(function(e){return s.a.createElement("div",{key:e.id,className:"card border-dark col-8 col-md-6 col-lg-4 col-xl-3"},s.a.createElement("div",{className:"card-header text-center"},e.email),s.a.createElement("div",{className:"card-body text-dark"},s.a.createElement("h5",{className:"card-title"},e.name),s.a.createElement("p",{className:"card-text"},e.body)))}))):s.a.createElement(v.a,{type:"Puff",color:"#00BFFF",height:150,width:150,className:"spinner"}))}}]),t}(s.a.Component),S=a(24),V=a.n(S),R=a(34),B=a.n(R)()(V.a),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={input:"",textarea:""},a.onChangeInput=a.onChangeInput.bind(Object(h.a)(a)),a.onChangetextarea=a.onChangetextarea.bind(Object(h.a)(a)),a.validationForm=a.validationForm.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onChangeInput",value:function(e){this.setState({input:e.target.value})}},{key:"onChangetextarea",value:function(e){this.setState({textarea:e.target.value})}},{key:"validationForm",value:function(e){var t=this,a=this.state,n=a.input,s=a.textarea;e.preventDefault(),n.length<3||s<3?B.fire({type:"error",title:"Oops...",text:"You need to write more text or title"}):V.a.fire({position:"center",type:"success",title:"Your post has been added",showConfirmButton:!1,timer:2e3}).then(function(){return t.props.history.push("/")})}},{key:"render",value:function(){return s.a.createElement("div",{className:"create"},s.a.createElement("h1",{style:{textAlign:"center",margin:"20px 0"}},"Create Post"),s.a.createElement("form",{className:"create__form"},s.a.createElement("div",{className:"form-group col-auto"},s.a.createElement("div",{className:"create__title-block"},s.a.createElement("label",{htmlFor:"title"},"Title:"),s.a.createElement("input",{onChange:this.onChangeInput,value:this.state.input,id:"title",className:"create__input"})),s.a.createElement("div",{className:"create__text-block"},s.a.createElement("label",{htmlFor:"Comment"},"Comment:"),s.a.createElement("textarea",{onChange:this.onChangetextarea,value:this.state.textarea,className:"form-control create__textarea",id:"Comment",rows:"3"}))),s.a.createElement("div",{className:"create__buttons"},s.a.createElement("button",{className:"btn btn-success create__buttons-save",onClick:this.validationForm},"Save"),s.a.createElement(N.b,{to:"/"},s.a.createElement("button",{className:"btn btn-danger create__buttons-cancel"},"Cancel")))))}}]),t}(s.a.Component),A=function(){return s.a.createElement("div",null,s.a.createElement(c.c,null,s.a.createElement(c.a,{exact:!0,path:"/posts/:id",component:F}),s.a.createElement(c.a,{path:"/create-post",component:D}),s.a.createElement(c.a,{path:"/posts&page=:id",component:L}),s.a.createElement(c.a,{path:"/",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(N.a,null,s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.8863ea71.chunk.js.map