(this["webpackJsonpnote-keeper"]=this["webpackJsonpnote-keeper"]||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(18),o=n.n(r),i=n(4),l=n(5),d=n(7),u=n(6),j=(n(34),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"color-picker",onClick:function(t){return e.props.OnSetColor(t)},children:[Object(a.jsx)("div",{className:"circle",id:"white"}),Object(a.jsx)("div",{className:"circle",id:"blue"}),Object(a.jsx)("div",{className:"circle",id:"yellow"}),Object(a.jsx)("div",{className:"circle",id:"green"}),Object(a.jsx)("div",{className:"circle",id:"red"})]})}}]),n}(c.Component)),h=n(13),b=n.n(h),f=n(17),O=function e(){Object(i.a)(this,e),this.setfetchData=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes.json",{method:"POST",body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getFetchData=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.deleteFetchData=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes/".concat(t,".json"),{method:"DELETE"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateFetchData=function(){var e=Object(f.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://note-keeper-e56d5-default-rtdb.firebaseio.com/notes/".concat(t,".json"),{method:"PATCH",body:JSON.stringify(n)});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},p=(n(36),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).service=new O,e.state={showColor:!1,color:"white",title:"",descr:"",saved:!1,validation:null},e.OnShowColor=function(){e.setState({showColor:!e.state.showColor})},e.OnSetColor=function(t){var n;switch(t.target.id){case"white":n="#ffffff";break;case"blue":n="#b2ebf2";break;case"yellow":n="#ffff8d";break;case"green":n="#ccff90";break;case"red":n="#ff8a80";break;default:return}e.setState({color:n})},e.OnSubmit=function(t){t.preventDefault();var n=document.getElementById("title"),a=document.getElementById("notes");if(""===n.value&&""===a.value&&e.setState({validation:"You forgot write something..."}),""===n.value&&""!==a.value&&e.setState({validation:"Please write your title..."}),""===a.value&&""!==n.value&&e.setState({validation:"Please write your note..."}),n.value.length>0&&a.value.length>0){var c=e.state,s=c.color,r=c.title,o=c.descr;e.service.setfetchData({color:s,title:r,descr:o}),e.setState({showColor:!1,color:"white",title:"",descr:"",saved:!0,validation:null}),t.target.reset(),setTimeout((function(){return e.setState({saved:!1})}),2e3)}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.showColor,c=t.color,s=t.title,r=t.descr,o=t.saved,i=t.validation,l=null;n&&(l=Object(a.jsx)(j,{OnSetColor:this.OnSetColor}));var d=o?"note-saved active":"note-saved";return Object(a.jsx)("div",{className:"note-menu",children:Object(a.jsxs)("div",{className:"note-menu-wrapper container",children:[Object(a.jsxs)("div",{className:"note-menu-inner",children:[Object(a.jsx)("h2",{children:"Add some notes"}),Object(a.jsxs)("form",{className:"note-form",style:{backgroundColor:c},onSubmit:function(t){return e.OnSubmit(t)},autoComplete:"off",children:[Object(a.jsxs)("div",{className:"note-form-title",children:[Object(a.jsx)("input",{type:"text",id:"title",placeholder:"Your title",maxLength:"40",className:"note-form-input",onChange:function(t){e.setState({title:t.target.value})}}),Object(a.jsxs)("span",{className:"note-form-counter",children:[s.length,"/40"]})]}),Object(a.jsxs)("div",{className:"note-form-menu",children:[Object(a.jsx)("textarea",{type:"text",id:"notes",placeholder:"Take a note...",maxLength:"200",className:"note-form-input",onChange:function(t){e.setState({descr:t.target.value})}}),Object(a.jsxs)("span",{className:"note-form-counter",children:[r.length,"/200"]})]}),Object(a.jsx)("div",{className:"note-form-valid",children:Object(a.jsx)(m,{text:i})}),Object(a.jsxs)("div",{className:"note-form-buttons",children:[Object(a.jsx)("button",{type:"button",className:"note-paint",onClick:this.OnShowColor,children:Object(a.jsx)("i",{className:"fas fa-paint-brush"})}),Object(a.jsx)("button",{className:"note-submit",type:"submit",children:"Add Note"}),l]})]})]}),Object(a.jsx)("div",{className:d,children:Object(a.jsx)("div",{children:"Note saved"})})]})})}}]),n}(c.Component)),m=function(e){var t=e.text;return t?Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"fas fa-exclamation-circle"}),t]}):null},v=p,x=function(){return Object(a.jsx)("section",{id:"home-page",children:Object(a.jsx)(v,{})})},g=n(12),N=(n(37),function(){return Object(a.jsx)("div",{className:"spinner-container",children:Object(a.jsx)("div",{className:"loadingio-spinner-disk-bf4ay46xjrw",children:Object(a.jsx)("div",{className:"ldio-p6x087xo41s",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})})})}),y=(n(38),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).renderItem=function(t){var n=[];for(var c in t){var s={id:c},r=Object(g.a)(Object(g.a)({},t[c]),s);n.push(r)}return n.map((function(t){var n,c,s=t.id,r=t.title,o=t.descr,i=t.color;return(null===(n=r)||void 0===n?void 0:n.length)>20&&(r="".concat(r.substring(0,20),"...")),(null===(c=o)||void 0===c?void 0:c.length)>80&&(o="".concat(o.substring(0,80),"...")),Object(a.jsxs)("div",{className:"note-card",style:{backgroundColor:i},children:[Object(a.jsx)("div",{className:"note-card-title",children:r}),Object(a.jsx)("div",{className:"note-card-descr",children:o}),Object(a.jsx)("button",{className:"note-card-update",onClick:function(){return e.props.OnOpenModal(s)},children:Object(a.jsx)("i",{className:"fas fa-pen"})})]},s)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.renderItem(this.props.notes);return Object(a.jsx)("div",{className:"note-card-container",children:e})}}]),n}(c.Component)),C=(n(39),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={id:null,color:null,title:"",descr:"",showColor:!1},e.OnShowColor=function(){e.setState({showColor:!e.state.showColor})},e.OnSetColor=function(t){var n;switch(t.target.id){case"white":n="#ffffff";break;case"blue":n="#b2ebf2";break;case"yellow":n="#ffff8d";break;case"green":n="#ccff90";break;case"red":n="#ff8a80";break;default:return}e.setState({color:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState(Object(g.a)({id:this.props.id},this.props.notes[this.props.id]))}},{key:"render",value:function(){var e=this,t=this.state,n=t.id,c=t.color,s=t.title,r=t.descr,o=null;return t.showColor&&(o=Object(a.jsx)(j,{OnSetColor:this.OnSetColor})),Object(a.jsx)("div",{className:"note-modal-wrappper",children:Object(a.jsx)("div",{className:"note-modal-inner container",children:Object(a.jsxs)("form",{className:"note-modal",style:{backgroundColor:c},autoComplete:"off",children:[Object(a.jsxs)("div",{className:"note-modal-title",children:[Object(a.jsx)("input",{type:"text",id:"title",placeholder:"Your title",maxLength:"40",className:"note-modal-input",value:s,onChange:function(t){return e.setState({title:t.target.value})}}),Object(a.jsxs)("span",{className:"note-modal-counter",children:[s.length,"/40"]})]}),Object(a.jsxs)("div",{className:"note-modal-descr",children:[Object(a.jsx)("textarea",{type:"text",id:"notes",placeholder:"Take a note...",maxLength:"200",className:"note-modal-input",value:r,onChange:function(t){return e.setState({descr:t.target.value})}}),Object(a.jsxs)("span",{className:"note-modal-counter",children:[r.length,"/200"]})]}),Object(a.jsx)("div",{className:"note-modal-valid"}),Object(a.jsxs)("div",{className:"note-modal-buttons",children:[Object(a.jsxs)("div",{className:"rigth-buttons",children:[Object(a.jsx)("button",{type:"button",className:"modal-left",onClick:this.OnShowColor,children:Object(a.jsx)("i",{className:"fas fa-paint-brush"})}),Object(a.jsx)("button",{type:"button",className:"modal-left",onClick:function(t){e.props.OnCloseModal(t),e.props.OnDelete(n),e.props.OnSetUpdate()},children:Object(a.jsx)("i",{className:"far fa-trash-alt"})})]}),Object(a.jsxs)("div",{className:"left-buttons",children:[Object(a.jsx)("button",{className:"modal-right",type:"submit",onClick:function(t){e.props.OnCloseModal(t),e.props.OnUpdate(t,n,{color:c,title:s,descr:r}),e.props.OnSetUpdate()},children:"Update"}),Object(a.jsx)("button",{className:"modal-right",onClick:function(t){return e.props.OnCloseModal(t)},children:"Close"})]}),o]})]})})})}}]),n}(c.Component)),k=(n(40),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).service=new O,e.state={loading:!0,notes:null,id:null,modal:!1,update:!1},e.OnOpenModal=function(t){e.setState({id:t,modal:!0})},e.OnCloseModal=function(t){t.preventDefault(),e.setState({modal:!1})},e.OnDelete=function(t){var n={};for(var a in e.state.notes)a!==t&&(n[a]=e.state.notes[a]);e.setState({notes:n,update:!0}),e.service.deleteFetchData(t)},e.OnUpdate=function(t,n,a){t.preventDefault();var c={},s=Object(g.a)({},a);for(var r in e.state.notes)c[r]=r===n?s:e.state.notes[r];e.setState({notes:c,update:!0}),e.service.updateFetchData(n,a)},e.OnSetUpdate=function(){setTimeout((function(){return e.setState({update:!1})}),2e3)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.service.getFetchData().then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({loading:!1,notes:t})}))}},{key:"render",value:function(){var e=this.state,t=e.notes,n=e.loading,c=e.id,r=e.modal,o=e.update;if(!t&&n)return Object(a.jsx)(N,{});if(!t&&!n||0===Object.keys(t).length)return Object(a.jsxs)("p",{children:["You dont have notes!!! ",Object(a.jsx)("br",{})," Go back and Write it!"]});var i=null;r&&(i=Object(a.jsx)(C,{id:c,notes:t,OnUpdate:this.OnUpdate,OnDelete:this.OnDelete,OnSetUpdate:this.OnSetUpdate,OnCloseModal:this.OnCloseModal}));var l=o?"note-update active":"note-update";return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(y,{notes:t,OnOpenModal:this.OnOpenModal}),i,Object(a.jsx)("div",{className:l,children:Object(a.jsx)("div",{children:"Note updated"})})]})}}]),n}(c.Component)),w=(n(41),function(){return Object(a.jsx)("section",{id:"note-page",children:Object(a.jsxs)("div",{className:"container note-page-container",children:[Object(a.jsx)("h2",{children:"Notes"}),Object(a.jsx)(k,{})]})})}),S=n(3),D=n(15),E=(n(42),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).OnClickLink=function(e,t){e.classList.contains("router-active")||(e.classList.add("router-active"),t.classList.remove("router-active"))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"header d-flex",children:[Object(a.jsxs)("div",{className:"header-logo d-flex align-items-center",children:[Object(a.jsx)("div",{className:"header-logo-img",children:Object(a.jsx)("i",{className:"far fa-sticky-note"})}),Object(a.jsx)("h5",{children:"NoteKeep"})]}),Object(a.jsxs)("div",{className:"header-routing d-flex align-items-center",children:[Object(a.jsx)(D.b,{id:"add",className:"router router-active",to:"/",onClick:function(){e.OnClickLink(document.getElementById("add"),document.getElementById("saved"))},children:"Add"}),Object(a.jsx)(D.b,{id:"saved",className:"router",to:"/notepage",onClick:function(){e.OnClickLink(document.getElementById("saved"),document.getElementById("add"))},children:"Saved"}),Object(a.jsx)("div",{className:"header-icon",children:Object(a.jsx)("a",{href:"https://github.com/tameoo",target:"blank",children:Object(a.jsx)("i",{className:"fab fa-github"})})})]})]})})}}]),n}(c.Component)),M=function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(E,{}),Object(a.jsxs)(S.c,{children:[Object(a.jsx)(S.a,{path:"/",component:x,exact:!0}),Object(a.jsx)(S.a,{path:"/notepage",component:w})]})]})},A=n(28),L=n(20),U={note:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTE_UPDATE":return Object(g.a)({},t.payloud);default:return e}},T=Object(L.b)(I),F=function(){return Object(a.jsx)("div",{children:"Hey! Something goes wrong... Error!!!"})},B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)(F,{}):this.props.children}}]),n}(c.Component),P=s.a.createContext(),J=P.Provider,Y=(P.Consumer,new O);o.a.render(Object(a.jsx)(A.a,{store:T,children:Object(a.jsx)(B,{children:Object(a.jsx)(J,{value:Y,children:Object(a.jsx)(D.a,{children:Object(a.jsx)(M,{})})})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d6eacc39.chunk.js.map