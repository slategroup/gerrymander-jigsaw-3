(this["webpackJsonpgerrymander-jigsaw-3"]=this["webpackJsonpgerrymander-jigsaw-3"]||[]).push([[0],{141:function(e,t,l){"use strict";l.r(t);var h=l(0),a=l.n(h),i=l(49),n=l.n(i),s=(l(78),l(4)),v=l(8),r=l(9),o=l(11),c=l(10),u=l(2),p=l(12),d=(l(79),l(64)),m=l(5);function g(e){var t=Math.floor(e/6e4);return[t,Math.round((e-60*t*1e3)/1e3)]}function f(e,t){var l=e.width,h=e.height,a=l/h;return a>t?{height:h,width:h*t}:a<t?{height:l/t,width:l}:{width:l,height:h}}var z=l(143),b=l(144),w=l(145),S=l(16),E=function(e){var t=e.title,l=e.subtitle,h=e.shareText,i=e.onRestart,n=function(){var e=Object(d.parse)(window.location.search);return"string"===typeof e.parentUrl?decodeURIComponent(e.parentUrl):window.location.href}();return a.a.createElement("div",{className:"slide"},a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",{className:"subtitle"},l),a.a.createElement("div",{className:"share-btns"},a.a.createElement(z.a,{className:"puzzle-btn",url:n,quote:h},a.a.createElement(S.a,{color:"rgb(59, 89, 152)"}),a.a.createElement("span",null,"Share")),a.a.createElement(b.a,{className:"puzzle-btn",url:n,title:h},a.a.createElement(S.d,{color:"rgb(64, 153, 255)"}),"Tweet"),a.a.createElement(w.a,{className:"puzzle-btn",url:n,subject:h},a.a.createElement(S.c,{color:"rgb(106, 4, 50)"}),"Email")),a.a.createElement("div",{className:"puzzle-btn",onClick:i},a.a.createElement(S.b,null),a.a.createElement("span",null,"Restart"))))},y=l(36),j=l(70),k=l.n(j),O=l(71),x=l.n(O),B=l(35),D=l.n(B),M=function(e){function t(e){var l;return Object(v.a)(this,t),(l=Object(o.a)(this,Object(c.a)(t).call(this,e))).hoverColor=void 0,l.dragColor=void 0,l.state={color:l.props.color,dragging:!1,hovering:!1},l.hoverColor="rgb(100%, 100%, 44.1%)",l.dragColor="yellow",l.handleMouseEnter=l.handleMouseEnter.bind(Object(u.a)(l)),l.handleMouseOut=l.handleMouseOut.bind(Object(u.a)(l)),l}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.paths.map((function(t,l){return a.a.createElement("path",{d:t,className:"puzzle-piece-path",fill:e.state.color,key:l,cursor:e.props.locked?"normal":"move"})}));return a.a.createElement(x.a,{scale:this.props.dragScale,onStart:this.handleDragStart.bind(this),onStop:this.handleDragStop.bind(this),disabled:this.props.locked,position:{x:this.props.position[0],y:this.props.position[1]}},a.a.createElement("g",{className:D()({"puzzle-piece-group":!0,dragging:this.state.dragging,hovering:this.state.hovering}),onMouseEnter:this.handleMouseEnter,onMouseOut:this.handleMouseOut},t))}},{key:"handleMouseEnter",value:function(){this.setState({hovering:!0})}},{key:"handleMouseOut",value:function(){this.setState({hovering:!1})}},{key:"handleDragStart",value:function(){this.setState({dragging:!0}),this.props.onDragStart(this.props.index)}},{key:"handleDragStop",value:function(e,t){this.setState({dragging:!1}),this.props.onDragStop(this.props.index,t)}}]),t}(a.a.PureComponent),N=function(e){function t(e){var l;return Object(v.a)(this,t),(l=Object(o.a)(this,Object(c.a)(t).call(this,e))).ref=void 0,l.ref=a.a.createRef(),l}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.paths.map((function(e,t){return a.a.createElement("path",{className:"puzzle-guide-path",d:e,key:t})}));return a.a.createElement("g",{ref:this.ref},e)}},{key:"getBbox",value:function(){var e=this.ref;if("object"===typeof e&&e&&e.current)return e.current.getBoundingClientRect()}}]),t}(a.a.Component),T=function(e){function t(e){var l;Object(v.a)(this,t),(l=Object(o.a)(this,Object(c.a)(t).call(this,e))).ref=void 0;var h=k.a.scale("Spectral").domain([0,e.pieces.length],e.pieces.length);return l.state={pieces:e.pieces.map((function(e,t){return{key:e.key,paths:e.paths,originalPosition:e.transform,position:e.transform,color:h(t),guideRef:a.a.createRef(),pieceRef:a.a.createRef()}})),tolerance:30},l.ref=a.a.createRef(),l.handleDragStart=l.handleDragStart.bind(Object(u.a)(l)),l.handleDragStop=l.handleDragStop.bind(Object(u.a)(l)),l}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.getDragScale(this.props.width,this.props.height),l=this.state.pieces.map((function(l,h){return a.a.createElement(M,{index:h,paths:l.paths,key:l.key,color:l.color,onDragStart:e.handleDragStart,onDragStop:e.handleDragStop,dragScale:t,ref:l.pieceRef,locked:"end"===e.props.stage,position:l.position})})),h=this.state.pieces.map((function(e,t){return a.a.createElement(N,{paths:e.paths,ref:e.guideRef,key:t})})),i=this.props.devMode?a.a.createElement("rect",{x:this.props.viewBox[0],y:this.props.viewBox[1],width:this.props.viewBox[2],height:this.props.viewBox[3]}):null;return a.a.createElement("div",{className:"puzzle"},a.a.createElement("svg",{width:"100%",height:this.props.height,viewBox:this.props.viewBox.join(" "),ref:this.ref},i,h,l))}},{key:"componentDidUpdate",value:function(e){if(e.stage!==this.props.stage)switch(this.props.stage){case"editing":case"initial":this.setState({pieces:this.state.pieces.map((function(e){return e.position=e.originalPosition,e}))});break;case"end":this.setState({pieces:this.state.pieces.map((function(e){return e.position=[0,0],e}))})}}},{key:"getDragScale",value:function(e,t){if("object"===typeof this.ref){var l=this.props.viewBox;return e/t>l[2]/l[3]?t/this.props.viewBox[3]:e/this.props.viewBox[2]}}},{key:"movePieceToFront",value:function(e){e!==this.state.pieces.length-1&&this.setState({pieces:[].concat(Object(y.a)(this.state.pieces.slice(0,e)),Object(y.a)(this.state.pieces.slice(e+1,this.state.pieces.length)),[this.state.pieces[e]])})}},{key:"isPieceSolved",value:function(e){var t=Object(s.a)(this.state.pieces[e].position,2),l=t[0],h=t[1],a=this.state.tolerance;return l>-a&&l<a&&h>-a&&h<a}},{key:"isAllSolved",value:function(){var e=this;return this.state.pieces.forEach((function(t,l){return e.isPieceSolved(l)})),this.state.pieces.every((function(t,l){return e.isPieceSolved(l)}))}},{key:"handleDragStart",value:function(e){this.movePieceToFront(e)}},{key:"handleDragStop",value:function(e,t){this.state.pieces[e].position=[t.x,t.y],this.setState({pieces:Object(y.a)(this.state.pieces)}),this.isAllSolved()&&this.props.onSolved(),this.logPositions()}},{key:"logPositions",value:function(){if(this.props.devMode){var e=this.state.pieces.reduce((function(e,t){var l=t.position;if(l){var h=Object(s.a)(l,2),a=h[0],i=h[1];e[t.key]=[a.toFixed(1),i.toFixed(1)]}return e}),{});console.log(JSON.stringify(e))}}}]),t}(a.a.PureComponent),R=function(e){return a.a.createElement("div",{className:"slide"},a.a.createElement("div",null,a.a.createElement("h2",null,e.title),a.a.createElement("div",{className:"puzzle-btn btn-start",onClick:e.onStart},"Start!")))},A=function(e){var t=e.time;return a.a.createElement("div",{className:"timer"},a.a.createElement("span",{className:"time"},function(e){var t=g(e),l=Object(s.a)(t,2),h=l[0],a=l[1],i=h>=10?"".concat(h):"0".concat(h),n=a>=10?"".concat(a):"0".concat(a);return"".concat(i,":").concat(n)}(t)))},L=l(72),C=l.n(L),P=.5,F=function(e){function t(e){var l;Object(v.a)(this,t),(l=Object(o.a)(this,Object(c.a)(t).call(this,e))).interval=void 0;var h={viewBox:[m.viewBox.minX,m.viewBox.minY,m.viewBox.width,m.viewBox.height],pieces:Object.entries(m.paths).map((function(e){var t=Object(s.a)(e,2),l=t[0],h=t[1],a=m.transforms[l]||["0","0"],i=Object(s.a)(a,2),n=i[0],v=i[1];return{key:l,paths:h,transform:[parseFloat(n),parseFloat(v)]}})),title:m.title,shareText:m.shareText},a=h.pieces,i=h.viewBox,n=h.title,r=h.shareText;return l.state={pieces:a,viewBox:i,title:n,shareText:r,startTime:new Date,duration:0,stage:"start",dimensions:f({width:window.innerWidth,height:window.innerHeight},P)},l.handleSolved=l.handleSolved.bind(Object(u.a)(l)),l.handleStart=l.handleStart.bind(Object(u.a)(l)),l.handleRestart=l.handleRestart.bind(Object(u.a)(l)),l.handleTouchStart=l.handleTouchStart.bind(Object(u.a)(l)),l}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){switch(this.state.stage){case"start":return a.a.createElement("div",{className:"App"},a.a.createElement(R,{title:this.state.title,onStart:this.handleStart}),a.a.createElement(T,{stage:"initial",pieces:this.state.pieces,viewBox:this.state.viewBox,width:this.state.dimensions.width,height:this.state.dimensions.height}));case"puzzle":return a.a.createElement("div",{className:"App no-touch-action"},a.a.createElement("div",{className:"top-bar"},a.a.createElement("div",{className:"top-bar-interior"},a.a.createElement(A,{time:this.state.duration}),a.a.createElement("div",{className:"puzzle-btn",onClick:this.handleRestart},a.a.createElement(S.b,null),a.a.createElement("span",null,"Restart")))),a.a.createElement(T,{stage:"editing",onSolved:this.handleSolved,pieces:this.state.pieces,viewBox:this.state.viewBox,width:this.state.dimensions.width,height:this.state.dimensions.height}));case"end":var e=function(e){var t=g(e),l=Object(s.a)(t,2),h=l[0],a=l[1],i=[];return 1===h?i.push("1 minute"):h>1&&i.push("".concat(h||0," minutes")),1===a?i.push("1 second"):a>1&&i.push("".concat(a||0," seconds")),i.join(", ")}(this.state.duration),t=this.state.shareText.replace("{time}",e);return a.a.createElement("div",{className:"App"},a.a.createElement(E,{title:"Solved!",subtitle:"You solved the puzzle in ".concat(e,"!"),shareText:t,onRestart:this.handleRestart}),a.a.createElement(T,{stage:"end",pieces:this.state.pieces,viewBox:this.state.viewBox,width:this.state.dimensions.width,height:this.state.dimensions.height}))}}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("touchstart",this.handleTouchStart),this.interval=setInterval((function(){return e.incrementTime()}),1e3);var t=new C.a.Child;t.getParentPositionInfo(),t.onMessage("viewport-iframe-position",(function(l){var h=l.split(" "),a=Object(s.a)(h,2),i=a[0],n=a[1];e.setState({dimensions:f({width:Math.min(window.innerWidth,Number(i)),height:Number(n)},P)}),t.sendHeight()}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("touchstart",this.handleTouchStart),clearInterval(this.interval)}},{key:"incrementTime",value:function(){var e;"puzzle"===this.state.stage&&this.setState({duration:Math.round((e=this.state.startTime,Math.round((new Date).getTime()-e.getTime())))})}},{key:"handleStart",value:function(){this.setState({startTime:new Date,stage:"puzzle"})}},{key:"handleSolved",value:function(){this.setState({stage:"end"})}},{key:"handleRestart",value:function(){this.setState({startTime:new Date,stage:"start",duration:0})}},{key:"handleTouchStart",value:function(e){"puzzle"===this.state.stage&&(e.preventDefault(),e.stopPropagation())}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e){e.exports=JSON.parse('{"paths":{"LA-01":["M-8886 3208zm-1-1zm0-18l2 2 2 3 2 7v4l-2 7-3 6h-1l1-3 2-3 1-3-1-1 1-2 1-4-1-2v-3l-1-4-3-4zm-39 23zm-3-18zm-1 62zm0 1zm-2-58zm-1-1zm-1-3zm0-7h3l1-3 4-2 8-4-6 5h2v3l5 1v2l-1 1-3 1 1 2-1 1-1-1v-2l-1-3-2-1-2 3-3-1h-2l-1 1-1-3zm0 9zm-2 5zm0-8zm0 5v-3l1 2-1 1zm-2-6zm-6-12v-1h3l-1 1h-2zm-14 55zm-4 5l3-1h3l-3 2v2l-3-3zm-2-2zm0-1zm-2 1zm-24 24l1-1 3 1-2 1-2-1zm-5 4l4-2-3 2h-1zm-1-3zm-1 2zm-1-4h1v2l-1-2zm-4 8zm0-2zm-31 20zm-1-12zm-1 8zm-2-1zm-4-9zm-3-6zm-11 17l8 3h5l-2 1-3-1-5-1-3-2zm-1-143h5v-2h3l1-4h-1l-1-4 2-1 1 2 4 3 2 1v1l2 2-1 1v2l6 1h9v-9l-1-3 1-2-1-2 1-2-1-3 26 5h15l2 2v4h1l1 4 1 1 2 1 1 3 4 2 1 2 3 2 1 4-1 1 3 5 3 1v3l-2 2 1 1v3l2 1v2l1 1 3 3 4-1 1 1h-3l-3 3h-8l-2-2-3 2h-2l-1-2v3l-5 4h-4l-2-3v-2h-3l-5 7-3 2-5 2-2-1v2h-4l-1 1v2l-1 3h-7l3 1 1 2 1-1v1l-1 3-1-1-2-3-4 3h-2l-2-4 2-2h-2l-1-1v-2l-3 1v-9l2-7 3-1 7-2-1-4-14-6h-5l-2 1h-5l-6 1v-6l1-2-3-1 1-1-2-3-3-3-1-3-1-2v-4zm-5 133zm-14 15l7-2h2l-5 1-4 1zm-11-1h6l-3 1-3-1zm-7 0zm-11-14zm-17-22h2v-1l5-2 8-4 7 1 17 2 3-6v-2h2v-7l4 1-1-1 3-1 3-3-2-2v-1l-1-3 2-2-3-1v-2l3 1 4 1h5l-1 2 2 1 1-1 4 2v2l2-1v-1l1-1-2-3 7-7 4 3h2l3 1 1 3v2l2 2h12l2-6 3-5 1-4 4-1h2l-1 2 1 2-2 2 4 2 2-1-1-3 1-2 4-2 2-4h2v-1h3l2 1 2 3 1-2-2-3-1-1h-3l-5-2 3-5h1l4 1 2-2h2l1 2 3-2v3l2 3 2 1h2l5-1 2-1 1 1-3 1v3l4 3 4 1h3l4-2v-3l2-5-1-3 9-4v-3l1-2 3 2 2 1-1 1 1 1 4-2h2v2h-3l1 3-2-2h-3l-1 2 2 1 1 3h3l1 2 1 4 2 1v-2l2 1 2-2 4-7h3v2l2 1-2 3-3 1-5 3-2 1 1 1 2-1h7l-2 2-1 1h-1l-2-1-1 1 1 1-1 1v1h-1l-2-3-4 1 1 2h1l2 1h-1l2 3h2l2-2v4h-1l-3-2-3 1-3-2-1 2-3 3v3l5 3h-2l-2-1-2 2 1 2h-3l-1-2 1-1v-2l-3-2v1l-3-1 1 3-2 2 2 2 1 2-2-2-4-1-3 2-3 1-1-1h-3l2 1h2v2l2 3-2-1-2-3h-4l1 1v2l2 1 1 1-2 1h-2l1 3h2l1 3 4 1h4l-1 2 2 2h2v3l2 2-4-1-1 2 5 1 4-2 2 1h3v1l4-1 2 1h3l-1 2 1 1 2-1-1-3 7 6 2 3 3-4 2 1 2 3 2 1 1 2 2 2-1 5h2l1 2 2-1 5-2 2 3-1 1-3-1-1 1h-3l-1 2-2-1 2 2 6 1-3 4-1-2h-3l-1 4h-3v3l-1 2 1 3-7-3-1-4-2-2h-1v2l-3 1-3 4-2 1-7 7h-1l2-5 1-1 3-4 1-2h3l1-4-1-2 2-2h2v-4l-2-3h-2l-1 1-1 4-2 2-4 1-3-2-2-4-4-3-5-2-7-2-3-4h-4l-5-1-12-2 2-3h2l1 2h3l1-2h3l4-1 4-1 2 3 3-1-1-3-3-1h-13l-3-2-2 1-1-1-2-1 1-3 2-1-2-1h-3l-1 4-4-2-2 1-1-2h-2l-3 2 2 1-1 3h-2v2l-4 2 1 1h2l2-2 2 2-1 1-3-1-2 2v3h2l-2 2-2-1h-2l-3 3 1 2 1 1 1 2h3v1l4-3 2-3 1 1 2-2v2l-7 4-2 2-5 3-9 6-4 2-2-1 1-2v-2l-2-1 1-1-3-1v-1l2-3-3-2-2-5-3-1-2-2-2 1v3l-2 1v-6l-3-2-2-2-2 2 1 1-1 2-1 1-3-1h-3l-2 2-2-3-2 1-1 1 2 2-1 3 3 1h-1l-2-1-2 1v2h-2l-1 4h-3l-2 5-2 1-1-2h-1l-1 2h-2l-1 1h-1l-2 1v3h-3l-2-1-1-5-4-1-5-5-3 1-4-1-1-3-3 3-3-1-3-3h-9l-7-3-5-6 2 1 2-1 2-2 1-3 3-1-1 2 5 5 2-2 1 3-1 2 1 1-1 3 5-1 1-2-2-2 2-2-2-4-1-1-5-2-1-2h-1v-2z"],"LA-02":["M-9027 3194l3-1v2l1 1h2l-2 2 2 4h2l4-3 2 3 1 1 1-3v-1l-1 1-1-2-3-1h7l1-3v-2l1-1h4v-2l2 1 5-2 3-2 5-7h3v2l2 3h4l5-4v-3l1 2h2l3-2 2 2h4l-3 3-3 2v3h-4l-1 3 2 1-2 1-3-2h-5l-4 4-3 2-1-2h-2l-2 2-4-1h-1l-3 5 5 2h3l1 1 2 3-1 2-2-3-2-1h-3v1h-2l-2 4-4 2-1 2 1 3-2 1-4-2 2-2-1-2 1-2h-2l-4 1-1 4-3 5-2 6h-12l-2-2v-2l-1-3-3-1h-2l-4-3-1-1v-3l-2-2h-2l-2-3h-15v-1l-3 1-1-2-6-1v2h-10v3h-2l-2 4h-2l-3-2 1-1-1-4 3-1v-1l-4-4-4 1-4-1-1 1h-2l-1-1h-2l-1 2-1-3-1-1 1-2 2-1 3 1 1-2v-4h-2v-5h2l-1-3-5-3-2 3 1-3-2-1-2 2 1 1-2 2-4-1-3 2-1-2v-4l1-1 3-1 2-3h2l2-4h-4l-3 1-1-1-1 2h-1l-4-1 1-2-1-4v-2l1 2 3-3v-2l3-1-2-2 4 2 2-3v-2l-3-1 3-2 3 2 1-2-2 1v-5l-1-2v-2l-1-1 1-1-1-2 1-3h4l-1 4h2v2l4 2-2 1 5 2v2l-3 1 2 2h-7v3h-3l-5 7 2 1h7l1 2 3 1 2-1 6 1 2-1-4 11h1l2-3h6v1h4v2h2v2l-4 2-1 2 1 1 2-1 1 4 27-5 1-6 4 1 1 3 4 1v6l5 1h-1v3h1l1-3 2 1-2 2 2 4h-1l1 3 4 1 3 2 3-1-3 3 2 1 4 1 2-1 1-3v2l3-1v-4z"],"LA-03":["M-9124 3250h-1 1zm-14 4zm0 5zm0-3zm-65-19h1l2-3 2-1 2 1 4-2v-1h3l5 1 2 2 2 1h2l2 2h2l1 1 2-1v2l-5 3-1 2 1 1-2 1h-2l-2 1-2-1-2-2h-2l-7-4-4-1-3-2h-1zm-171-83h26v-9h10v9h25v-2h7v-2l29 1v-6l14 1h39v5h7v3h6l1 1v4l1 2-2 1h-3v-3l-1 1v2h1v2l6-4v-2l4-2 2 2 1-1 1 1 2-2 1-2 1-1 3 2 7-2 5 2h14l-2-1-3-5h-1l-2-4h5l2 2h1l3 3 2 3v4l-2 1 2 1v4l4 4v2l2 1h6l3 1-1 3 1 2 1 5-1 2 1 1h8l1 1 1 4 1-1h9l1 2 3 1-1 3h-2l1 5 2 2-1 1 3 3v3l2 2 5 1 2 1 2 2-1 3 2 2-2 2 1 5-1 4 2 2-5 1-3 2-2-1-4 3-1 2-3 1v3l-1 3 2 4-2 3-1 1-2-1-3 2v-4l-2-1v-1l2-1 1-2-4 1 2-2h-1v-2h-4l-1 3-2-1-4 2-1-2-1-1v-2l-1-2-5 2 2-2-1-2v-2l-2-5-2-1-5 1-1-1 1-3 1-5-1-2h-5l-4 1-2-2-4 1-8 4-2-1 2-2-1-1-1-1 2-3v-1l2 2 1-1v-2l-1-3-3 1-2-1h-2l-1 1-2 1-3-2-2 2 1 1-6 2-5 2-6 5 2-4-2-1-1 1-2-1v2l-3-1v3l4 2 1 1 5-1v1l-3 2 2 5 1 1 2-1h4l1-1 3 2-3-1-4 2 3 2-6-1-4 1-6 2-5 2-7 1-9-2-5-1-16-2-12-4-22-9-10-3-11-3h-11l-6 1h-5l-8-1-4 1-17 2-5 1-8 2-2 2-4-4-1-1-1-3-3-1v-4l2-1 5-3 2-3 2-3 1-3 2-4h1l3-3 1-1 2-3-2-2 3-3 1-4-2-6 1-3v-5l-4-1-1-4v-5l1-1z"],"LA-04":["M-9206 2893l-2 3 1 5v7l2 3h-1l1 4-1 3 1 3h-1l-3 5-3 1h-2l1 1-8 5-1 2-5 1h-14v-9h-10v-5h-3l-3-3h-4l-1-1h-20v5l-4 3v8h-2l1 15h10v22l-1 2h-2l1 3-3 2 1 2h-12v2l3 3-1 2 2 2 1 4-2 2 2 1v3h1l-2 4-1 6h-5l2 2-2 5h-1l-1 3 1 2-1 2 2 1-1 2 4 1v1h2v4l4 1 2 1h4l2 2 3 2-1 2 5 3-6 4-2 2h-2v1l-3 1v1h-3v2h-1v1h-3v2l-3 1v2h-4l2 1h3v1h4l2 1v2h1v2h2v2h2v36h10l1-1 15 1 2-1 2 1 3-1 1-2v-3l7-3 1-1 2-1 4 2 1 2h5v3l5 4v4h21v3h-3l1 4-1-1-2 1 4 2 1 2 2 3-1 1 5 3h-5l1 2 2 1v1l-4 1 1 1 5 4-3 1v-1l-2 1-3-2-4 2-2 5h1l1 2-2 4 1 2 1-1 2-1 5 2 2 2 2 1-1 2-2 2-1-1-1 1-2-2-4 2v2l-6 4v-2h-1v-2l1-1v3h3l2-1-1-2v-4l-1-1h-6v-3h-7v-5h-39l-14-1v6l-29-1v2h-7v2h-25v-9h-10v9h-26l4-3 1-1-2-4 1-2-3-3 1-3v-1l1-1 4-1-1-2v-3l3-2 3-2 2-4-1-2v-2h2l1-4h2l1-2v-4l-2-2 3-1-1-2 1-1h1v-4l-3-1v-1l-1-2 1-1 1 1 2-1 3-2-3-2h1v-2l-3-1-1-1 2-1v-5l1-3h-1l-4 2-2-1v-3l1-3h-2v-3l-1-1h-2l-2-2-2-1 1-5h3v-2l-2 1-1-3-3-3 1-2-1-1h-2l-2-2v-1l2-1 1-2h-3v-2l-2 1h-2l-3-3-2-5 2-2-1-4 3-4-2-1v-1l-2-3 1-2-1-3-4-2v-1l-1-2v-1l-2-2 1-1h-4l1-2h-3l-2-1-4-7-3-1v-102h55l42 1h101z"],"LA-05":["M-9206 2893l44 1h46l-1 2-3 2-1 4 2 2h5l1-3v-5l3-1 2 2v3l2 2-1 3-3 3-2 1-2 1-2 3v5l1 2h3l6 2v2l-5 3-4 3 1 4 3 2 4-2h3l1-3 1-1 2 2v1l-3 3-5 3 3 2 6 2v3h-1l-3-1-4-4-2-2-2 5v2l2 2 4 2 3 1 3-2 3 2-1 2-2 1-1 3 2 2 7 1 2-3h2l-4 7-3 2-3-1-1 2 2 2-2 1v3l-2 2v-3l-3-2h-1l-2 2h-2l-3 2-2-1-3 2-1 4 1 2 5 1 3-1 3 1 1-3-1-3 3 2h2l-1 3-2 1v2l-5 2 1 3h-2l-3-2-2-1-2 2 2 2 5 1 2 2-2 1-2 2h-5l-2 2-1 3 1 2h-2l-3 4-3 1v1l2 2-2 2h-1l-1-2-1-3-4 1-1 1-1 4-1 4h4l4-1 2 1-1 2-6-1h-3l-3 4-1 2 1 5-1 2-2 1-4-1-3-2-2 2v1l3 3h3l3-1h2v2l-5 3-2 1h-4v9l1 2 3 3v3l-4-1-2-2-1-4-2 1-1 2 1 3 1-1 1 4 3 3 1 2-1 2-6 1h-6l-2 1 1 2 4 2 1 2v3l-3 3v2l1 1 5 3v3l-3 3-4 1h190l1 1-1 3-2 2 1 2-2 1 1 1-2 1v4h-1v2l-3 4-2 3 1 1v3l-2 2 1 1-1 3h-15l-26-5 1 3-1 2 1 2-1 2 1 3v9h-9l-6-1v-2l1-1-2-2v-1l-2-1-4-3-1-2-2 1 1 4h1l-1 4h-3v2h-5v-30h-7v-1l-1-2h-2v2l-2-2-1 1-7-3-6-2h-2l-1 2-4-1-5 1-2 3-4-1v2h-2l-1 1-1-5-1 1-3 1-4 2-1 1 1 2v3l-1-2-4 3-2-2 2-4h-1l-2 2v-2h-3v3l-1 1-2 3-1-1-2 5-3 1 2 3v2l-3-1-2-6-3-4-1 1-6 2-5-1-5 1-4-2 1-2 3-1 2-1 2-7-1-3-2-2h-7l1 1 3 1 1 1 1 3-1 2-1-1h-5l-4-1v-4l2-4-2-4 1-2-2-2-3-1-1 2-3-2-2 1-2 3-2 1v10l-2 1 3 3-1 2 4 3 1 2v2l2 4v3l-1 1v3l-1 3v4l2 4v1l-2 2 2 4h1l3 5 2 1h-14l-5-2-7 2-3-2-1 1-2-1-2-2-5-2-2 1-1 1-1-2 2-4-1-2h-1l2-5 4-2 3 2 2-1v1l3-1-5-4-1-1 4-1v-1l-2-1-1-2h5l-5-3 1-1-2-3-1-2-4-2 2-1 1 1-1-4h3v-3h-21v-4l-5-4v-3h-5l-1-2-4-2-2 1-1 1-7 3v3l-1 2-3 1-2-1-2 1-15-1-1 1h-10v-36h-2v-2h-2v-2h-1v-2l-2-1h-4v-1h-3l-2-1h4v-2l3-1v-2h3v-1h1v-2h3v-1l3-1v-1h2l2-2 6-4-5-3 1-2-3-2-2-2h-4l-2-1-4-1v-4h-2v-1l-4-1 1-2-2-1 1-2-1-2 1-3h1l2-5-2-2h5l1-6 2-4h-1v-3l-2-1 2-2-1-4-2-2 1-2-3-3v-2h12l-1-2 3-2-1-3h2l1-2v-22h-10l-1-15h2v-8l4-3v-5h20l1 1h4l3 3h3v5h10v9h14l5-1 1-2 8-5-1-1h2l3-1 3-5h1l-1-3 1-3-1-4h1l-2-3v-7l-1-5 2-3z"],"LA-06":["M-9056 3142v4l1 2 1 3 3 3 2 3-1 1 3 1-1 2v6l6-1h5l2-1h5l14 6 1 4-7 2-3 1-2 7v13l-3 1v-2l-1 3-2 1-4-1-2-1 3-3-3 1-3-2-4-1-1-3h1l-2-4 2-2-2-1-1 3h-1v-3h1l-5-1v-6l-4-1-1-3-4-1-1 6-27 5-1-4-2 1-1-1 1-2 4-2v-2h-2v-2h-4v-1h-6l-2 3h-1l4-11-2 1-6-1-2 1-3-1-1-2h-7l-2-1 5-7h3v-3h7l-2-2 3-1v-2l-5-2 2-1-4-2v-2h-2l1-4h-4l-1 3 1 2-1 1 1 1v2l1 2v5l2-1-1 2-3-2-3 2 3 1v2l-2 3-4-2 2 2-3 1v2l-3 3-1-2v2l1 4-1 2 4 1h1l1-2 1 1 3-1h4l-2 4h-2l-2 3-3 1-1 1v4l1 2 3-2 4 1 2-2-1-1 2-2 2 1-1 3 2-3 5 3 1 3h-2v5h2v4l-1 2-3-1-2 1-1 2 1 1 1 3 1-2h2l1 1h2l1-1 4 1 4-1 4 4v1l-3 1 1 4-1 1 3 2h2l2-4h2v-3h10v-2l6 1 1 2 3-1v1h15l2 3h2l2 2v3l1 1-7 7 2 3-1 1v1l-2 1v-2l-4-2-1 1-2-1 1-2h-5l-4-1-3-1v2l3 1-2 2 1 3v1l2 2-3 3-3 1 1 1-4-1v7h-2v2l-3 6-17-2-7-1-8 4-5 2v1h-2l-1-2-2-1h-1l-2-4 1-3v-3l3-1 1-2 4-3 2 1 3-2 5-1-2-2 1-4-1-5 2-2-2-2 1-3-2-2-2-1-5-1-2-2v-3l-3-3 1-1-2-2-1-5h2l1-3-3-1-1-2h-9l-1 1-1-4-1-1h-8l-1-1 1-2-1-5-1-2 1-3-3-1h-6l-2-1v-2l-4-4v-4l-2-1 2-1v-4l-2-3-3-3h-1l-2-2h-5l2-2v-1l-2-4v-4l1-3v-3l1-1v-3l-2-4v-2l-1-2-4-3 1-2-3-3 2-1v-10l2-1 2-3 2-1 3 2 1-2 3 1 2 2-1 2 2 4-2 4v4l4 1h5l1 1 1-2-1-3-1-1-3-1-1-1h7l2 2 1 3-2 7-2 1-3 1-1 2 4 2 5-1 5 1 6-2 1-1 3 4 2 6 3 1v-2l-2-3 3-1 2-5 1 1 2-3 1-1v-3h3v2l2-2h1l-2 4 2 2 4-3 1 2v-3l-1-2 1-1 4-2 3-1 1-1 1 5 1-1h2v-2l4 1 2-3 5-1 4 1 1-2h2l6 2 7 3 1-1 2 2v-2h2l1 2v1h7v30z"]},"transforms":{"LA-05":["-97.1","-275.8"],"LA-04":["11.7","406.6"],"LA-06":["115.9","-185.2"],"LA-03":["217.6","-496.6"],"LA-02":["73.8","-354.8"],"LA-01":["-25.3","197.5"]},"viewBox":{"minX":-9404,"minY":2606,"width":522,"height":981},"title":"How quickly can you put Louisiana back together?","shareText":"I put Lousiana back together in {time}. Can you?"}')},73:function(e,t,l){e.exports=l(141)},78:function(e,t,l){},79:function(e,t,l){}},[[73,1,2]]]);
//# sourceMappingURL=main.cab964ce.chunk.js.map