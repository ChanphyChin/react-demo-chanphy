(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(218)},133:function(e,t,a){},134:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},135:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),s=(a(133),a(28)),l=a(29),i=a(32),u=a(30),p=a(33),m=(a(134),a(135),a(220)),d=a(219),f=a(37),h=a(222),b=a(42),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"test")}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"test 1")}}]),t}(n.Component),g=a(69),v=a(221),O="TEST",j="SAGA_TEST";var k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).add=function(){console.log(a.props.test);var e=a.props.test;a.props.add(e/1+1)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"test in redux is ",this.props.test),r.a.createElement("div",null,this.props.sagaTest.map(function(e){return e.name})),r.a.createElement(v.a,{onClick:this.add},"add test"))}}]),t}(n.Component),w=Object(g.b)(function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return console.log(e),{test:e.test,sagaTest:e.sagaTest}},function(e,t){return{add:function(t){e(function(e){return{type:O,test:e}}(t))}}})(k),x=m.b.SubMenu,S=d.a.Header,T=d.a.Content,I=d.a.Sider,C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={defaultSelectedKeysTop:["1"],defaultSelectedKeysSide:[]},a.menuChange=function(e){a.props.history.push(e.key)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=[];e.push(this.props.location.pathname),this.setState({defaultSelectedKeysSide:e})}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(S,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(m.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:this.state.defaultSelectedKeysTop,style:{lineHeight:"64px"}},r.a.createElement(m.b.Item,{key:"1"},"nav 1"),r.a.createElement(m.b.Item,{key:"2"},"nav 2"),r.a.createElement(m.b.Item,{key:"3"},"nav 3"))),r.a.createElement(d.a,null,r.a.createElement(I,{width:200,style:{background:"#fff"}},r.a.createElement(m.b,{mode:"inline",defaultSelectedKeys:this.state.defaultSelectedKeysSide,defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},onSelect:this.menuChange},r.a.createElement(x,{key:"sub1",title:r.a.createElement("span",null,r.a.createElement(f.a,{type:"user"}),"subnav 1")},r.a.createElement(m.b.Item,{key:"/app/test"},"test"),r.a.createElement(m.b.Item,{key:"/app/test1"},"test1"),r.a.createElement(m.b.Item,{key:"/app/store"},"store")))),r.a.createElement(d.a,{style:{padding:"0 24px 24px"}},r.a.createElement(h.a,{style:{margin:"16px 0"}},r.a.createElement(h.a.Item,null,"Home"),r.a.createElement(h.a.Item,null,"List"),r.a.createElement(h.a.Item,null,"App")),r.a.createElement(T,{style:{background:"#fff",padding:24,margin:0,minHeight:280}},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/app/test",component:E}),r.a.createElement(b.b,{exact:!0,path:"/app/test1",component:y}),r.a.createElement(b.b,{exact:!0,path:"/app/store",component:w}),"// \u8def\u7531\u91cd\u5b9a\u5411",r.a.createElement(b.a,{from:"*",to:"/app/test"}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(88),A=a(31),H={test:"1",sagaTest:[]};var W=a(125),B=a(44),J=a.n(B),M=a(60),N=a(124),R=a.n(N),z=J.a.mark($),G=J.a.mark(_),L=J.a.mark(q);function P(e){return new Promise(function(t,a){R.a.get(e).then(function(e){t(e.data.result)}).catch(function(e){a(e)})})}function $(){var e;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.b)(P,"/getResult");case 2:return e=t.sent,t.next=5,Object(M.c)({type:j,sagaTest:e});case 5:case"end":return t.stop()}},z)}function _(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(O,$);case 2:case"end":return e.stop()}},G)}function q(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello saga"),e.next=3,Object(M.a)([_()]);case 3:case"end":return e.stop()}},L)}var D=Object(W.a)(q),F=Object(A.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object.assign({},e,{test:t.test});case j:return Object.assign({},e,{sagaTest:t.sagaTest});default:return e}},Object(A.a)(D));D.run(q),o.a.render(r.a.createElement(g.a,{store:F},r.a.createElement(K.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:C}),r.a.createElement(b.b,{path:"/app",component:C}),r.a.createElement(b.a,{from:"*",to:"/app"})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[128,1,2]]]);
//# sourceMappingURL=main.ef893a0d.chunk.js.map