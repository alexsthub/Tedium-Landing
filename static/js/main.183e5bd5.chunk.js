(this["webpackJsonptedium-landing"]=this["webpackJsonptedium-landing"]||[]).push([[0],{16:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),a=n.n(s),c=n(17),r=n.n(c),o=n(7),l=n(8),d=n(10),u=n(9),h=(n(16),n(2)),j=n(11),m=[["is a quantitative trading firm","based in downtown Seattle."],["is a place","for individuals to","reach their potential."],["is built on","mutual respect and","the desire to learn","from others."],["is a small team","of scientists and","engineers who love","intellectual challenges."]],b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).componentDidUpdate=function(e){!e.animFinished&&s.props.animFinished&&s.start()},s.start=function(){s.setState({points:s.constructPoints(s.state.selectedIndex,!1)},(function(){setTimeout((function(){return s.pause()}),s.props.interval)}))},s.next=function(){var e=s.state.selectedIndex,t=e===s.state.points.length-1?0:e+1;s.setState({selectedIndex:t,points:s.constructPoints(t,!1),pause:!1},(function(){setTimeout((function(){return s.pause()}),s.props.interval)}))},s.pause=function(){s.setState({pause:!0,points:s.constructPoints(s.state.selectedIndex,!0)},(function(){setTimeout((function(){return s.next()}),s.props.pauseInterval)}))},s.constructPoints=function(e,t){return m.map((function(n,a){var c=e===a&&s.props.animFinished&&!t?"active-text":"",r=n.map((function(e){return Object(i.jsx)("li",{className:c,children:e},e)}));return Object(i.jsx)("ul",{children:r},String(a))}))},s.state={selectedIndex:0,points:s.constructPoints(0,!1)},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"text-carousel",children:this.state.points})}}]),n}(s.Component),p=n(45),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){window.addEventListener("scroll",i.handleScroll),i.timeline=new p.a({paused:!0,defaults:{ease:"Power2.easeIn"}}),i.timeline.to(i.menu,.1,{background:"#805ad5",borderRadius:"5em 0 0 5em"},"-=.2"),i.timeline.to(i.nav,.3,{clipPath:"ellipse(100% 100% at 50% 50%)"},"-=.2"),i.timeline.staggerTo(i.navElements,.3,{opacity:1,transform:"translateX(0)"},.05,"-=.2"),i.handleScroll()},i.componentWillUnmount=function(){window.removeEventListener("scroll",i.handleScroll)},i.handleClick=function(){i.toggle?i.timeline.reverse():i.timeline.play(),i.toggle=!i.toggle},i.handleScroll=function(){var e=i.props.headerRef.current;if(e){var t=e.offsetTop+e.offsetHeight,n=window.scrollY;n>t&&!i.state.inView?i.setState({inView:!0},(function(){i.toggle=!0,i.timeline.play()})):n<t&&i.state.inView&&!i.pending&&(i.pending=!0,i.toggle=!1,i.timeline.reverse(),setTimeout((function(){i.pending=!1,n<t&&i.setState({inView:!1})}),400))}},i.state={inView:!1},i.toggle=!1,i.pending=!1,i.navElements=[],i.menu=null,i.nav=null,i}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=O.map((function(t,n){return t.internalLink?Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:t.href,style:{textDecoration:"none"},children:Object(i.jsx)("img",{src:t.src,alt:t.alt,ref:function(t){return e.navElements[n]=t}})})},String(n)):Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:t.href,children:Object(i.jsx)("img",{src:t.src,alt:t.alt,ref:function(t){return e.navElements[n]=t}})})},String(n))})),n="navbar".concat(this.state.inView?" navbar-active":"");return Object(i.jsxs)("div",{className:n,children:[Object(i.jsx)("img",{alt:"Menu",ref:function(t){return e.menu=t},className:"menu",src:"https://s.svgbox.net/hero-outline.svg?ic=menu-alt-1&fill=ccb258",onClick:this.handleClick}),Object(i.jsx)("nav",{ref:function(t){return e.nav=t},children:Object(i.jsx)("ul",{children:t})})]})}}]),n}(s.Component),O=[{href:"https://www.linkedin.com/company/tedium-capital/jobs/",src:"//s.svgbox.net/hero-outline.svg?fill=805ad5#briefcase",alt:"careers"},{href:"/news",src:"//s.svgbox.net/hero-outline.svg?fill=805ad5#newspaper",alt:"news",internalLink:!0},{href:"mailto:hello@tedium.capital",src:"//s.svgbox.net/hero-outline.svg?fill=805ad5#mail",alt:"contact"}],x=n(27),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){setTimeout((function(){i.setState({animFinished:!0})}),3e3)},i.state={animFinished:!1},i.headerRef=a.a.createRef(),i}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{headerRef:this.headerRef}),Object(i.jsxs)("div",{className:"header-container",ref:this.headerRef,children:[Object(i.jsx)("div",{className:"header-image"}),Object(i.jsxs)("div",{className:"header-content",children:[Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("p",{className:"title",children:"Tedium Capital"}),Object(i.jsx)(b,{animFinished:this.state.animFinished,interval:4500,pauseInterval:1e3})]}),Object(i.jsxs)("div",{className:"contact-container",children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/company/tedium-capital/jobs/",children:"CAREERS"}),Object(i.jsx)(j.b,{to:"/news",style:{textDecoration:"none"},children:"NEWS"}),Object(i.jsx)("a",{href:"mailto:hello@tedium.capital",children:"CONTACT"})]})]})]}),Object(i.jsxs)(x.Carousel,{showArrows:!0,infiniteLoop:!0,showStatus:!1,showThumbs:!1,swipeable:!0,children:[Object(i.jsxs)("div",{className:"carousel-item",children:[Object(i.jsx)("img",{src:"icon-backempty.png",className:"carousel-logo",alt:"Tedium Logo"}),Object(i.jsx)("h2",{children:"MAXIMIZE YOUR TRADING Test"}),Object(i.jsx)("p",{children:"In this business, you\u2019re only as good as your data, technology and resources. Tedium is a small and growing company that is using the latest technology and ideas to be successful."})]}),Object(i.jsxs)("div",{className:"carousel-item",children:[Object(i.jsx)("h2",{children:"STRIVING FOR THE BEST"}),Object(i.jsx)("p",{children:"Searching for talented and passionate individuals to join the team as we develop and scale our platform. We believe in kindness, collaboration, and progress. If you like an environment where you will have a big impact, consider checking out our open positions!"})]})]}),Object(i.jsx)("div",{className:"attributes",children:Object(i.jsxs)("div",{className:"attribute-content",children:[Object(i.jsxs)("div",{className:"attribute",children:[Object(i.jsx)("img",{src:"https://s.svgbox.net/materialui.svg?ic=money_off",alt:"Low costs"}),Object(i.jsx)("h3",{children:"LOW COST TRADES"}),Object(i.jsx)("p",{children:"Tedium Capital offers low commissions and financing rates in order to maximize your returns."})]}),Object(i.jsxs)("div",{className:"attribute",children:[Object(i.jsx)("img",{src:"https://s.svgbox.net/hero-outline.svg?ic=globe",alt:"Globe"}),Object(i.jsx)("h3",{children:"WIDE ACCESS"}),Object(i.jsxs)("p",{children:["Tedium Capital offers investments in stocks, options, and bonds."," "]})]}),Object(i.jsxs)("div",{className:"attribute",children:[Object(i.jsx)("img",{src:"https://s.svgbox.net/materialui.svg?ic=computer",alt:"Computer"}),Object(i.jsx)("h3",{children:"POWERFUL TECHNOLOGY"}),Object(i.jsxs)("p",{children:["Tedium Capital's technology helps optimize trading speed and efficiency."," "]})]})]})}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{children:"Tedium Capital \xa9 2020"})})]})}}]),n}(s.Component),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",flexDirection:"column"},children:[Object(i.jsx)("p",{style:{color:"white",fontSize:"3rem",margin:0},children:"News will come as we grow!"}),Object(i.jsx)(j.b,{style:{marginTop:20,textDecoration:"none",fontSize:"2rem",color:"white",backgroundColor:"#4e779e",padding:20},to:"/",children:"Return Home"})]})}}]),n}(s.Component),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(h.d,{children:[Object(i.jsx)(h.b,{exact:!0,path:"/",component:v}),Object(i.jsx)(h.b,{exact:!0,path:"/news",component:g}),Object(i.jsx)(h.a,{to:"/"})]})})}}]),n}(s.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j.a,{basename:"",children:Object(i.jsx)(w,{})})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.183e5bd5.chunk.js.map