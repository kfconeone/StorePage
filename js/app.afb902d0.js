(function(e){function t(t){for(var n,i,r=t[0],c=t[1],l=t[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/StorePage/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var f=c;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"313d":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e._v(" sadsadsadsa "),e._l(e.rooms,(function(t,n){return o("div",{key:t.id,staticClass:"row",staticStyle:{"margin-top":"10px"}},[o("button",{staticClass:"btn",class:t.isRead?"btn-light":"btn-danger",attrs:{type:"button"},on:{click:function(o){return e.setChatroom(t.id)}}},[e._v(" 客戶"+e._s(n)+" ")])])})),e._v(" "+e._s(e.str)+" "),o("div",{staticClass:"row justify-content-end fixed-bottom"},[o("div",{staticClass:"col chatroom"},[e.visible?o("Chat",{attrs:{id:"chat-window",participants:e.participants,myself:e.myself,messages:e.messages,"chat-title":e.chatTitle,placeholder:e.placeholder,profilePictureConfig:e.profilePictureConfig,colors:e.colors,"scroll-bottom":e.scrollBottom,"display-header":!0,"send-images":!1},on:{onMessageSubmit:e.onMessageSubmit,onType:e.onType,onClose:e.onClose}}):e._e()],1)])],2)},s=[],i=(o("4160"),o("b0c0"),o("d3b7"),o("25f0"),o("159b"),o("59ca")),r=o.n(i),c=(o("66ce"),o("b9b9")),l=o.n(c),f=o("3ce5"),d=(o("c561"),{name:"App",components:{Chat:f["Chat"]},data:function(){return{str:"",visible:!1,participants:[{name:"客戶",id:1}],myself:{name:"客服人員",id:2},messages:[],chatTitle:"客服",placeholder:"請輸入訊息",colors:{header:{bg:"#d30303",text:"#fff"},message:{myself:{bg:"#fff",text:"#bdb8b8"},others:{bg:"#fb4141",text:"#fff"},messagesDisplay:{bg:"#f7f3f3"}},submitIcon:"#b91010",submitImageIcon:"#b91010"},borderStyle:{topLeft:"10px",topRight:"10px",bottomLeft:"10px",bottomRight:"10px"},scrollBottom:{messageSent:!0,messageReceived:!1},displayHeader:!0,profilePictureConfig:{others:!1,myself:!1,styles:{width:"30px",height:"30px",borderRadius:"50%"}},messageText:"",rooms:[],firebaseConfig:{apiKey:"AIzaSyBNhudq5zJ3SGEuZl7ZccpWwDo_hv1iwfk",authDomain:"testing-vue-bb3af.firebaseapp.com",databaseURL:"https://testing-vue-bb3af.firebaseio.com",projectId:"testing-vue-bb3af",storageBucket:"testing-vue-bb3af.appspot.com",messagingSenderId:"403045099754",appId:"1:403045099754:web:8c1339ef83167be9244f93",measurementId:"G-6F3QCKLWTM"},database:null,rootRef:null,currentChatroomRef:null}},created:function(){console.log("asdsadsadasdsadasddsadasdsad"),r.a.initializeApp(this.firebaseConfig),this.database=r.a.database(),this.rootRef=this.database.ref("chatroom");var e=this;this.rootRef.once("value",(function(t){t.forEach((function(t){var o=new Date(new Date-new Date(Date.parse(t.val().updateDatetime)));e.str=t.key.toString(),console.log(o.getHours()),o.getHours()>24&&e.rootRef.child(t.key).remove()}))})),this.rootRef.on("value",(function(t){var o=[];t.forEach((function(e){o.push({id:e.key,isRead:e.val().isRead}),0==e.val().isRead&&(window.document.getElementById("link-myIcon").href="/StorePage/favicon2.ico")})),e.rooms=o}))},methods:{setChatroom:function(e){console.log(e),window.document.getElementById("link-myIcon").href="/StorePage/favicon.ico";var t=this;t.messages.length=0,this.currentChatroomRef=this.rootRef.child(e),this.currentChatroomRef.update({updateDatetime:l()(new Date,"yyyy/mm/dd HH:MM:ss"),isRead:!0}),this.currentChatroomRef.child("messages").on("child_added",(function(e){var o={type:"text"},n=new Date(Date.parse(e.val().datetime));o.content=e.val().content+n.getFullYear(),o.timestamp={year:2019,month:11,day:2,hour:12,minute:11,second:22,millisecond:33},e.val().nickname==t.myself.name?(o.participantId=2,o.myself=!0):(o.participantId=1,o.myself=!1),t.messages.push(o)})),this.visible=!0},onType:function(e){console.log(e)},onMessageSubmit:function(e){this.currentChatroomRef.child("messages").push().set({datetime:l()(new Date,"yyyy/mm/dd HH:MM:ss"),nickname:this.myself.name,content:e.content}),setTimeout((function(){e.uploaded=!0}),2e3)},onClose:function(){this.visible=!1}}}),u=d,p=(o("7fb9"),o("2877")),m=Object(p["a"])(u,a,s,!1,null,"1c7e2818",null),h=m.exports,b=o("5f5b");o("f9e3"),o("2dd8");n["default"].use(b["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(h)}}).$mount("#app")},"7fb9":function(e,t,o){"use strict";var n=o("313d"),a=o.n(n);a.a}});
//# sourceMappingURL=app.afb902d0.js.map