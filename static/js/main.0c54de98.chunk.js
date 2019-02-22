(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports={hero:"styles_hero__32PxF",miniHero:"styles_miniHero__1hspW"}},15:function(e,t,a){e.exports={form:"styles_form__HwfGx",container:"styles_container__7UhFJ"}},26:function(e,t,a){e.exports={container:"styles_container__RT9BP"}},27:function(e,t,a){},29:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),l=a.n(c),s=a(61),m=a(62),o=a(63),i=a(13),u=a.n(i),d=a(23),p=a(8),E=a(24),v=a.n(E),f=Object(r.createContext)();var N=a(60),g=a(6),h=a.n(g);var b=function(e){var t=e.listing;if(!t)return null;var a=t.id,n=t.image,c=t.title,l=t.address,s=t.description,m=t.price,o=h()("column","col-4","col-xs-12"),i=h()("card");return r.createElement("div",{className:o,style:{margin:"1rem 0"}},r.createElement("div",{className:i},r.createElement("div",{className:"card-image"},r.createElement("img",{className:"img-responsive",src:"/server/".concat(n),alt:l})),r.createElement("div",{className:"card-header"},r.createElement("div",{className:"card-title h5"},c),r.createElement("div",{className:"card-title h6"},"\xa3 ",m),r.createElement("div",{className:"card-subtitle text-gray"},l)),r.createElement("div",{className:"card-body"},s),r.createElement("div",{className:"card-footer"},r.createElement(N.a,{className:"btn btn-primary",to:"/details/".concat(a)},"Go to property"))))},y=a(7),x=a(14),O=a.n(x);var F=function(e){var t,a=e.miniHero,n=h()(O.a.hero,"hero","mb-3",(t={"hero-sm":a},Object(y.a)(t,O.a.miniHero,a),Object(y.a)(t,"hero-lg",!a),t));return r.createElement(N.a,{to:"/",style:{textDecoration:"none"}}," ",r.createElement("div",{className:n},r.createElement("div",{className:"hero-body text-center text-light"},r.createElement("h1",null,"Premium Property Finder"),r.createElement("p",{className:"mb-0"},"Bringing premium property right to your fingertips"))))},j=a(25),w=a(15),_=a.n(w),k={priceFrom:"",postcode:"",sortOrder:"",sortOrders:["Highest First","Lowest First"]};var C=function(){var e=Object(r.useState)(k),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(r.useContext)(f),s=l.setFilter,m=l.allListings,o=function(e){c(Object(j.a)({},a,Object(y.a)({},e.target.name,e.target.value)))};Object(r.useEffect)(function(){s(a)},[a]);var i=h()("container","mb-1",_.a.container),u=h()("form-horizontal",_.a.form),d=m.map(function(e){return e.postcode.split(" ")[0]}).filter(function(e,t,a){return a.indexOf(e)===t});return n.a.createElement("div",{className:i},n.a.createElement("form",{className:u,noValidate:!0},n.a.createElement("p",{className:"mb-1"},"Refine your results"),n.a.createElement("div",{className:"columns text-center"},n.a.createElement("div",{className:"column col-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-3 col-sm-12"},n.a.createElement("label",{className:"form-label",htmlFor:"price-from"},"Price from")),n.a.createElement("div",{className:"col-9 col-sm-12"},n.a.createElement("input",{className:"form-input",min:"0",max:"10000000",type:"number",id:"price-from",placeholder:"\xa31,000,000",value:a.priceFrom,onChange:o,name:"priceFrom"})))),n.a.createElement("div",{className:"column col-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-3 col-sm-12"},n.a.createElement("label",{className:"form-label",htmlFor:"postcode"},"Postcode")),n.a.createElement("div",{className:"col-9 col-sm-12"},n.a.createElement("select",{name:"postcode",className:"form-select",id:"postcode",value:a.postcode,onChange:o},n.a.createElement("option",{value:""},"Choose..."),d.map(function(e){return n.a.createElement("option",{key:e,value:e.toLowerCase()},e)}))))),n.a.createElement("div",{className:"column col-4 col-xs-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-3 col-sm-12"},n.a.createElement("label",{className:"form-label",htmlFor:"sortorder"},"Sort Order")),n.a.createElement("div",{className:"col-9 col-sm-12"},n.a.createElement("select",{className:"form-select",id:"sortorder",value:a.sortOrder,onChange:o,name:"sortOrder"},n.a.createElement("option",{value:""},"Choose..."),a.sortOrders.map(function(e){return n.a.createElement("option",{key:e,value:e.replace(" ","").toLowerCase()},e)}))))))))},L=a(26),P=a.n(L);var H=function(){var e=Object(r.useContext)(f).propertyListings;return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,null),n.a.createElement("div",{className:P.a.container},n.a.createElement(C,null),n.a.createElement("div",{className:"columns"},e&&e.map(function(e){return n.a.createElement(b,{listing:e,key:e.address})}))))};var B=function(e){var t=e.image,a=e.title;return r.createElement("figure",{className:"figure"},r.createElement("img",{className:"img-responsive",src:"/server/".concat(t),alt:a}),r.createElement("figcaption",{className:"figure-caption text-center text-small"},a))},S=a(27),I=a.n(S);var W=function(e){var t=e.features;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Key Features"),n.a.createElement("ul",{className:I.a.list},t.map(function(e){return n.a.createElement("li",{key:e},n.a.createElement("small",null,e))})))};var G=function(e){var t=e.address,a="https://maps.google.com/maps?q=".concat(t,"&t=&z=16&ie=UTF8&iwloc=&output=embed");return n.a.createElement("div",{className:"mapouter"},n.a.createElement("div",{className:"gmap_canvas"},n.a.createElement("iframe",{title:t,src:a,width:"100%",height:"500",id:"gmap_canvas",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"})))};var J=function(e){var t=e.listing;if(!t)return null;Object(r.useEffect)(function(){window.scrollTo(0,0)},[]);var a=t.title,c=t.address,l=t.description,s=t.price,m=t.features,o=t.details,i=t.image,u=h()("text-success","text-right");return n.a.createElement("div",null,n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column col-9 col-xs-12"},n.a.createElement("div",{className:"hero hero-sm hero-dark"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",null,a),n.a.createElement("h2",{className:"text-dark text-small mb-1"},l)))),n.a.createElement("div",{className:"column col-3 col-xs-12"},n.a.createElement("h5",{className:u},n.a.createElement("small",null,"Priced from"),n.a.createElement("br",null),"\xa3",s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column col-6 col-xs-12"},n.a.createElement(B,{image:i,title:a})),n.a.createElement("div",{className:"column col-6 col-xs-12"},n.a.createElement(W,{features:m}))),n.a.createElement("p",{className:"text-bold mt-3"},"Full Details"),o.map(function(e){return n.a.createElement("p",{key:e},e)}),n.a.createElement("p",{className:"text-bold mt-3"},"Map"),n.a.createElement(G,{address:c}))};var T=function(e){var t=e.match,a=Object(r.useContext)(f).getListingByPropertyId;return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{miniHero:!0}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:1e3}},n.a.createElement(J,{listing:a(t.params.propertyId)})))};var q=function(){return r.createElement("div",{className:"columns"},r.createElement("div",{className:"column col-12"},r.createElement("div",{className:"empty"},r.createElement("div",{className:"empty-icon"},r.createElement("i",{className:"icon icon-3x icon-mail"})),r.createElement("p",{className:"empty-title h5"},"404."),r.createElement("p",{className:"empty-subtitle"},"Sorry the requested page was not found"),r.createElement("div",{className:"empty-action"}," ",r.createElement(N.a,{to:"/"},"Go back home")))))};l.a.render(n.a.createElement(function(e){var t=e.children,a=Object(r.useState)([]),c=Object(p.a)(a,2),l=c[0],s=c[1],m=Object(r.useState)({}),o=Object(p.a)(m,2),i=o[0],E=o[1];function N(){return(N=Object(d.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("./server/listings.json");case 3:t=e.sent,a=t.data,console.log(a),s(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(){N.apply(this,arguments)}()},[]),n.a.createElement(f.Provider,{value:{allListings:l,propertyListings:function(e,t){var a=t.priceFrom,r=t.postcode,n=t.sortOrder,c=e;if(a){var l=Number(a);c=c.filter(function(e){return e.price>=l})}return r&&(c=c.filter(function(e){return e.postcode.toLowerCase().startsWith(r)})),n&&("highestfirst"===n&&(c=c.sort(function(e,t){return t.price-e.price})),"lowestfirst"===n&&(c=c.sort(function(e,t){return e.price-t.price}))),c}(l,i),setFilter:E,getListingByPropertyId:function(e){return l.find(function(t){return t.id===Number(e)})}}},t)},null,n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{exact:!0,path:"/",component:H}),n.a.createElement(o.a,{path:"/details/:propertyId",component:T}),n.a.createElement(q,null)))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0c54de98.chunk.js.map