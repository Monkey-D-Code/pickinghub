(this["webpackJsonppickinghub-ui"]=this["webpackJsonppickinghub-ui"]||[]).push([[0],{36:function(e,a,t){e.exports=t(71)},41:function(e,a,t){},59:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),o=(t(41),t(2)),s=t(4),m=t(3),i=t(5),d=t(33),u=t(11),p=t(13),E=t.n(p),h=(t(59),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){var e=t.props.Brand,a=e.full_name,n=(e.logo_url,e.facebook,e.instagram,e.twitter,e.address,e.contact_number,e.tag_line),c=(e.email,e.random_hero_image),r=e.foundation_date;return l.a.createElement("div",{className:"hero-wrap js-fullheight",style:{backgroundImage:"url(".concat(c,")")}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row no-gutters slider-text js-fullheight align-items-center justify-content-center"},l.a.createElement("h3",{className:"v"},a," - ",n),l.a.createElement("h3",{className:"vr"},"Since - ",r),l.a.createElement("div",{className:"col-md-11 ftco-animate text-center"},l.a.createElement("h1",null,"Welcome To ",a),l.a.createElement("h2",null,l.a.createElement("span",null,n))),l.a.createElement("div",{className:"mouse"},l.a.createElement("a",{href:"#",className:"mouse-icon"},l.a.createElement("div",{className:"mouse-wheel"},l.a.createElement("span",{className:"ion-ios-arrow-down"})))))))},t}return Object(i.a)(a,e),a}(n.Component)),g=(t(60),t(32)),f=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={TrendingProducts:[],loading:!1},t.style={trending_image:{height:"100%",objectFit:"contain"},trending_product:{height:"30em",backgroundColor:"white"}},t.componentWillMount=function(){var e=t.props.ajaxUrl;t.setState({loading:!0}),E.a.get("".concat(e,"/shop/api/trending-products/")).then((function(e){t.setState({TrendingProducts:e.data,loading:!1})})).catch((function(e,a){console.log(a),t.setState({loading:!1})}))},t.render=function(){var e=t.state,a=e.loading,n=e.TrendingProducts,c=t.style,r=c.trending_image,o=c.trending_product;return a?l.a.createElement("h1",{className:"text-center"},"Loading Trending Products"):l.a.createElement("section",{className:"ftco-section ftco-product"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center mb-3 pb-3"},l.a.createElement("div",{className:"col-md-12 heading-section text-center"},l.a.createElement("h1",{className:"big"},"Trending"),l.a.createElement("h2",{className:"mb-4"},"Trending"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(g.Carousel,{useKeyboardArrows:!0},n.map((function(e,a){return l.a.createElement("div",{style:o},l.a.createElement("img",{src:e.random_product_image,style:r,alt:"".concat(e.name)}),l.a.createElement("p",{className:"legend"},e.name))})))))))},t}return Object(i.a)(a,e),a}(n.Component),v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){var e=t.props.Brand,a=e.full_name,n=(e.logo_url,e.facebook,e.instagram,e.twitter,e.address,e.contact_number,e.tag_line,e.email,e.about),c=e.random_normal_image;return l.a.createElement("section",{className:"ftco-section ftco-no-pb ftco-no-pt bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(c,")")}},l.a.createElement("a",{href:"https://vimeo.com/45830194",className:"icon popup-vimeo d-flex justify-content-center align-items-center"},l.a.createElement("span",{className:"icon-play"}))),l.a.createElement("div",{className:"col-md-7 py-5 wrap-about pb-md-5"},l.a.createElement("div",{className:"heading-section-bold mb-5 mt-md-5"},l.a.createElement("div",{className:"ml-md-0"},l.a.createElement("h2",{className:"mb-4"},a," ",l.a.createElement("br",null),"Online ",l.a.createElement("br",null)," ",l.a.createElement("span",null,"Shop")))),l.a.createElement("div",{className:"pb-md-5"},l.a.createElement("p",null,n))))))},t}return Object(i.a)(a,e),a}(n.Component),b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={Categories:[],loading:!1},t.style={category_thumb:{height:"6em",width:"6em",borderRadius:"50%",objectFit:"cover",border:"2px solid #F7D4DC"},products_list:{margin:"1em",padding:"0.5em"},single_product:{border:"2px solid #F7D4DC",padding:"0.5em"},product_image:{height:"15em",display:"block",margin:"auto"}},t.componentWillMount=function(){t.getCategoryWiseProducts()},t.getCategoryWiseProducts=function(){t.setState({loading:!0});var e=t.props.ajaxUrl;E.a.get("".concat(e,"/shop/api/category-wise-products/")).then((function(e){t.setState({Categories:e.data,loading:!1})})).catch((function(e,a){console.log(a),t.setState({loading:!1})}))},t.render=function(){var e=t.state,a=e.Categories,n=e.loading,c=t.style,r=c.category_thumb,o=c.products_list,s=c.single_product,m=c.product_image;return n?l.a.createElement("h1",{className:"text-center"},"Our Products by categories .."):l.a.createElement("section",{className:"ftco-section"},l.a.createElement("div",{className:"col-md-12 heading-section text-center"},l.a.createElement("h1",{className:"big"},"Explore Us"),l.a.createElement("h2",{className:"mb-4"},"Explore Us")),a.map((function(e,a){return l.a.createElement("div",{key:a,className:"container"},l.a.createElement("h3",{style:{color:"#F7D4DC"}},l.a.createElement("img",{src:e.cover_image,style:r,alt:"".concat(e.name)})," ",e.name),l.a.createElement("hr",null),l.a.createElement("div",{style:o,className:"row"},e.all_products.length>0?e.all_products.map((function(e,a){return l.a.createElement("div",{key:a,style:s,className:"col-md-3"},l.a.createElement("img",{src:e.random_product_image,style:m}),l.a.createElement("h4",null,e.name))})):l.a.createElement("h5",{className:"text-center col-md-12"},"No Products in this category")),l.a.createElement("br",null))})))},t}return Object(i.a)(a,e),a}(n.Component),N=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return l.a.createElement("div",null,l.a.createElement(h,{Brand:t.props.Brand}),l.a.createElement("div",{className:"goto-here"}),l.a.createElement(f,{ajaxUrl:t.props.ajaxUrl}),l.a.createElement(v,{Brand:t.props.Brand}),l.a.createElement(b,{ajaxUrl:t.props.ajaxUrl}))},t}return Object(i.a)(a,e),a}(n.Component),y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).style={logo_img:{width:"4em"}},t.render=function(){var e=t.props.Brand,a=(e.full_name,e.logo_url),n=t.style.logo_img;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:a,style:n})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"oi oi-menu"})," Menu"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{href:"#",className:"nav-link"},"Home")),l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Shop"),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdown04"},l.a.createElement("a",{class:"dropdown-item",href:"shop.html"},"Shop"),l.a.createElement("a",{class:"dropdown-item",href:"product-single.html"},"Single Product"),l.a.createElement("a",{class:"dropdown-item",href:"cart.html"},"Cart"),l.a.createElement("a",{class:"dropdown-item",href:"checkout.html"},"Checkout"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#",className:"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"blog.html",className:"nav-link"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"contact.html",className:"nav-link"},"Contact")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#",className:"nav-link"},l.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"})," Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#",className:"nav-link"},l.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true"})," Register"))))))},t}return Object(i.a)(a,e),a}(n.Component),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){var e=t.props.Brand,a=e.full_name,n=(e.logo_url,e.facebook),c=e.instagram,r=e.twitter,o=e.address,s=e.contact_number,m=(e.tag_line,e.email);return l.a.createElement("footer",{className:"ftco-footer bg-light ftco-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"ftco-footer-widget mb-4"},l.a.createElement("h2",{className:"ftco-heading-2"},a),l.a.createElement("ul",{className:"ftco-footer-social list-unstyled float-md-left float-lft mt-5"},l.a.createElement("li",{className:"ftco-animate"},l.a.createElement("a",{href:r},l.a.createElement("span",{className:"icon-twitter"}))),l.a.createElement("li",{className:"ftco-animate"},l.a.createElement("a",{href:n},l.a.createElement("span",{className:"icon-facebook"}))),l.a.createElement("li",{className:"ftco-animate"},l.a.createElement("a",{href:c},l.a.createElement("span",{className:"icon-instagram"})))))),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"ftco-footer-widget mb-4 ml-md-5"},l.a.createElement("h2",{className:"ftco-heading-2"},"Menu"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Shop")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Journal")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Contact Us"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"ftco-footer-widget mb-4"},l.a.createElement("h2",{className:"ftco-heading-2"},"Help"),l.a.createElement("div",{className:"d-flex"},l.a.createElement("ul",{className:"list-unstyled mr-l-5 pr-l-3 mr-4"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Shipping Information")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Returns & Exchange")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Terms & Conditions")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Privacy Policy"))),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"FAQs")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"py-2 d-block"},"Contact")))))),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"ftco-footer-widget mb-4"},l.a.createElement("h2",{className:"ftco-heading-2"},"Have a Questions?"),l.a.createElement("div",{className:"block-23 mb-3"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"icon icon-map-marker"}),l.a.createElement("span",{className:"text"},o)),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("span",{className:"icon icon-phone"}),l.a.createElement("span",{className:"text"},"+91 ",s))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("span",{className:"icon icon-envelope"}),l.a.createElement("span",{className:"text"},m)))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("p",null,"Copyright \xa9",l.a.createElement("script",null,"document.write(new Date().getFullYear());")," All rights reserved | Developed & maintained by ",l.a.createElement("a",{href:"https://gieitech.pythonanywhere.com",target:"__blank"},"GIEITech"))))))},t}return Object(i.a)(a,e),a}(n.Component),j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return l.a.createElement("div",{id:"ftco-loader",className:"show fullscreen"},l.a.createElement("svg",{className:"circular",width:"48px",height:"48px"},l.a.createElement("circle",{className:"path-bg",cx:"24",cy:"24",r:"22",fill:"none",strokeWidth:"4",stroke:"#eeeeee"}),l.a.createElement("circle",{className:"path",cx:"24",cy:"24",r:"22",fill:"none",strokeWidth:"4",strokeMiterlimit:"10",stroke:"#F96D00"})))},t}return Object(i.a)(a,e),a}(n.Component),k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={Brand:!1,Customer:!1,Admin:!1,ajaxUrl:"3000"===window.location.port?"http://127.0.0.1:8000":"".concat(window.location.protocol,"//").concat(window.location.hostname,":").concat(window.location.port),loading:!1},t.componentWillMount=function(){t.getBrand()},t.getBrand=function(){var e=t.state.ajaxUrl;t.setState({loading:!0}),E.a.get("".concat(e,"/api/brand/1/details/")).then((function(e){t.setState({Brand:e.data,loading:!1})})).catch((function(e,a){console.log(a),t.setState({loading:!1})}))},t.render=function(){var e=t.state,a=e.loading,n=e.Brand,c=e.ajaxUrl;return a?l.a.createElement(j,null):l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(y,{Brand:n}),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(N,{Brand:n,ajaxUrl:c}))),l.a.createElement(w,{Brand:n})))},t}return Object(i.a)(a,e),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.50eae644.chunk.js.map