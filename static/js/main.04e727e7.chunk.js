(this.webpackJsonptesting_react=this.webpackJsonptesting_react||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(2),o=a.n(c),s=(a(12),a(13),a(3)),l=a(4),i=a(6),d=a(5),h=function(e){var t=e.searchfield;return n.a.createElement("div",{className:"tc dib pa2 ma2 bg-light-blue br3 grow"},n.a.createElement("img",{alt:"Your robot",src:"https://robohash.org/".concat(t,".."),width:"150px",height:"150px"}),n.a.createElement("h1",{className:"f3 sega-font"},t))},u=function(e){var t=e.robots,a=e.searchfield,r=t.length>0?t.map((function(e,t){return n.a.createElement(h,{searchfield:e,key:t})})):null;return n.a.createElement("div",null,n.a.createElement(h,{searchfield:a||"YOU"}),r)},m=function(e){var t=e.searchfield,a=e.addCard,r=e.value;return n.a.createElement("div",null,n.a.createElement("input",{type:"text",className:"pa3 bg-lightest-blue ma2 f4 br4",placeholder:"Escribe tu nombre...",onChange:t,value:r}),n.a.createElement("button",{className:"f4 link dim ba bw2 ph3 pv2 mb2 dib dark-red bg-light-blue br3",onClick:a},"Guardar"))},b=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this)).addCard=function(){r.state.searchfield&&(r.state.robots.push(r.state.searchfield),console.log(r.state.robots),r.setState({searchfield:""}))},r.searchChange=function(e){r.setState({searchfield:e.target.value}),13===e.keyCode&&r.addCard()},r.state={robots:[],searchfield:""},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"tc",width:"50%"},n.a.createElement("h1",{className:"grow"},"Escribe tu nombre y encuentra tu Robot!"),n.a.createElement(m,{value:this.state.searchfield,searchfield:this.searchChange,addCard:this.addCard}),n.a.createElement(u,{robots:this.state.robots,searchfield:this.state.searchfield}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.04e727e7.chunk.js.map