(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){var n={"./logo.png":9,"./userPic0.png":65,"./userPic1.png":66,"./userPic2.png":67,"./userPic3.png":68,"./userPic4.png":69,"./userPic5.png":70,"./userPic6.png":71};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=17},37:function(e,t,a){e.exports=a(75)},51:function(e,t){},63:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/userPic0.6839614d.png"},66:function(e,t,a){e.exports=a.p+"static/media/userPic1.c0554664.png"},67:function(e,t,a){e.exports=a.p+"static/media/userPic2.647e219f.png"},68:function(e,t,a){e.exports=a.p+"static/media/userPic3.c53dc180.png"},69:function(e,t,a){e.exports=a.p+"static/media/userPic4.11705daa.png"},70:function(e,t,a){e.exports=a.p+"static/media/userPic5.2c4686cb.png"},71:function(e,t,a){e.exports=a.p+"static/media/userPic6.8ec3ae35.png"},75:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(33),c=a.n(r),o=a(77),i=a(10),l=a(11),m=a(15),u=a(12),g=a(14),d=(a(19),a(79)),p=a(78),h=a(3),E=a(34),f=(a(63),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangeCode=a.onChangeCode.bind(Object(h.a)(Object(h.a)(a))),a.onSubmit=a.onSubmit.bind(Object(h.a)(Object(h.a)(a))),a.state={room:"",page:"init",users:[],step:0,score:[],question:"",answers:[]};var n=window.location.protocol.replace("http","ws")+"//"+window.location.hostname;return window.location.port&&"80"!==window.location.port&&(n+=":2567"),a.colyseus=new E.Client(n),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"msgListener",value:function(e){"join"===e.key?(console.log("response join",e.data),this.setState({users:e.data})):"test"===e.key?(console.log("response - test"),this.setState({page:"game",step:e.data.step,question:e.data.q,answers:e.data.a})):"select"===e.key?(console.log("response - select"),this.setState({page:"game",users:e.data})):"result"===e.key?(console.log("result",e.data),this.setState({page:"result",users:e.data})):"ready"===e.key&&console.log("ready",e.data)}},{key:"joinListener",value:function(){console.log("joined"),this.room.onMessage.add(this.msgListener.bind(this)),this.setState({page:"wait"})}},{key:"onChangeCode",value:function(e){this.setState({room:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("joining room",this.state.room),this.room=this.colyseus.join(this.state.room,{client:"leaderboard"}),this.room.onJoin.add(this.joinListener.bind(this))}},{key:"render",value:function(){var e=this;return"wait"===this.state.page?s.a.createElement("div",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{align:"center",className:"center",src:a(9),style:{height:150,marginTop:30}})),s.a.createElement("h3",{align:"center",style:{color:"#ccc",marginTop:50,marginBottom:30}},"Code(",this.state.room,") - Joined Users"),this.state.users.map(function(e,t){return s.a.createElement("div",{className:"listcontainer",key:t,style:{background:"rgba(255, 255, 255, 0.1)",borderRadius:10,maxWidth:300}},s.a.createElement("img",{className:"listimg",src:a(17)("./"+e.avatar)}),s.a.createElement("span",{className:"listname"},e.fname))})):"game"===this.state.page?s.a.createElement("div",{className:"contentcenter"},this.state.users.map(function(t,n){return s.a.createElement("div",{className:"gamecontainer",key:n},s.a.createElement("div",null,s.a.createElement("img",{className:"gameimg",src:a(17)("./"+t.avatar)}),s.a.createElement("h6",{className:"gamename"},t.fname)),s.a.createElement("p",null,"Score"),s.a.createElement("p",{className:"gamescore"},t.tscore),s.a.createElement("p",{className:"gameicon"},t.score.length<e.state.step?s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-hourglass-half"})):0==t.score[e.state.step-1]?s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-times-circle"})):s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-check-circle"}))))}),s.a.createElement("h3",{align:"center",style:{color:"#ccc",marginTop:50,marginBottom:30}},this.state.step,"/5 Questions"),s.a.createElement("h4",{align:"center",style:{color:"#ccc",marginTop:10,marginBottom:30}},this.state.question),this.state.answers.map(function(e,t){return s.a.createElement("div",{className:"answercontainer",key:t,style:{background:"rgba(255, 255, 255, 0.05)",maxWidth:400}},s.a.createElement("span",{className:"answername"},e))})):"result"===this.state.page?s.a.createElement("div",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{align:"center",className:"center",src:a(9),style:{height:150,marginTop:30}})),s.a.createElement("h3",{align:"center",style:{color:"#ccc",marginTop:50,marginBottom:30}},"Game Result"),this.state.users.map(function(e,t){return s.a.createElement("div",{className:"listcontainer",key:t,style:{background:"rgba(255, 255, 255, 0.1)",borderRadius:10,maxWidth:300}},s.a.createElement("img",{className:"listimg",src:a(17)("./"+e.avatar)}),s.a.createElement("span",{className:"listname"},e.fname,"\xa0\xa0\xa0\xa0",s.a.createElement("strong",null,e.tscore)))})):s.a.createElement("div",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{align:"center",className:"center",src:a(9),style:{height:150,marginTop:30}})),s.a.createElement("form",{onSubmit:this.onSubmit,className:"text-center",style:{marginTop:10}},s.a.createElement("h3",{align:"center",style:{color:"#ccc",marginTop:50,marginBottom:30}},"Please input game code"),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",style:{width:200,padding:10,borderRadius:6,background:"rgba(255, 255, 255, 0.2)",border:0},value:this.state.room,onChange:this.onChangeCode})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",style:{width:200,padding:10,borderRadius:25,border:"1px solid #ccc",background:"rgba(0, 0, 0, 0)",color:"#ccc"},value:"Start"}))))}}]),t}(n.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(d.a,null,s.a.createElement(p.a,{path:"/leaderboard",component:f}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(o.a,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/logo.a2975d85.png"}},[[37,2,1]]]);
//# sourceMappingURL=main.67b32da5.chunk.js.map