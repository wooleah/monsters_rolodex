(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),l=n(4),i=n(5),u=n(6),h=(n(13),n(14),n(15),function(e){var t=e.item;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(t.id,".png?set=set2"),alt:"monster"}),r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.email))}),m=function(e){var t=e.items;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(h,{key:e.id,item:e})})))},d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={monsters:[],searchField:""},e.handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField.toLowerCase(),a=t.filter((function(e){return e.name.toLowerCase().includes(n)||e.email.toLowerCase().includes(n)}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(d,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(m,{items:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.0b0baf4e.chunk.js.map