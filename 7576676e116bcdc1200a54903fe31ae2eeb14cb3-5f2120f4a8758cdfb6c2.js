(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/1MN":function(e,t,r){"use strict";var a=r("Wbzz"),n=r("Yhjm"),o=r.n(n),i=r("ikrs"),l=r.n(i);t.a=function(){var e,t,r=Object(a.c)(s),n=r.site,i=r.bannerImg,c=r.socialImg,u=r.logoImg;void 0!==(e=o.a)[t="social"]&&e[t].length?n.siteMetadata.social=o.a.social:n.siteMetadata.social=[],n.siteMetadata.artist=o.a.artist,n.siteMetadata.title&&"Gatsby Theme Musician"!==n.siteMetadata.title||(n.siteMetadata.title=o.a.artist.name),l.a?n.siteMetadata.textLabels=l.a:n.siteMetadata.textLabels={};return"https://github.com/ekafyi/eka-gatsby-playground"===n.siteMetadata.siteUrl&&(n.siteMetadata.siteUrl="//"),n.siteMetadata.bannerImg=i,n.siteMetadata.socialImg=c,n.siteMetadata.logoImg=u,n.siteMetadata};var s="2083838646"},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,o=a(r("PJYZ")),i=a(r("VbXa")),l=a(r("8OQS")),s=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),f=function(e){var t=(0,s.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=j([].concat(t.fluid))),t.fixed&&(t.fixed=j([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=h(t||r||[]);return a&&a.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=f(e),r=p(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,O=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,o=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:o}),r&&c.default.createElement("source",{media:n,srcSet:r,sizes:o}))}))}function j(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function E(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var _=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},P=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+c+i+l+r+a+t+o+n+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,o=e.spreadProps,i=e.ariaHidden,l=c.default.createElement(L,(0,s.default)({ref:t,src:r},o,{ariaHidden:i}));return a.length>1?c.default.createElement("picture",null,n(a),l):l})),L=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,o=e.style,i=e.onLoad,u=e.onError,f=e.loading,d=e.draggable,p=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},h,{onLoad:i,onError:u,ref:t,loading:f,draggable:d,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=_(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,o=void 0===n?{}:n,i=e.imgStyle,l=void 0===i?{}:i,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,O=e.itemProp,j=e.loading,E=e.draggable,_=m||g;if(!_)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:k?1:0,transition:T?"opacity "+y+"ms":"none"},l),z="boolean"==typeof b?"lightgray":b,M={transitionDelay:y+"ms"},R=(0,s.default)({opacity:this.state.imgLoaded?0:1},T&&M,l,d),N={title:t,alt:this.state.isVisible?"":r,style:R,className:p,itemProp:O},V=this.state.isHydrated?h(_):_[0];if(m)return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),z&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&M)}),V.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:N,imageVariants:_,generateSources:S}),V.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:N,imageVariants:_,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(_),c.default.createElement(L,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,s.default)({alt:r,title:t,loading:j},V,{imageVariants:_}))}}));if(g){var B=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},o);return"inherit"===o.display&&delete B.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},z&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:z,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},T&&M)}),V.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:N,imageVariants:_,generateSources:S}),V.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:N,imageVariants:_,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(_),c.default.createElement(L,{alt:r,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,s.default)({alt:r,title:t,loading:j},V,{imageVariants:_}))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function z(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}k.propTypes={resolutions:T,sizes:C,fixed:z(u.default.oneOfType([T,u.default.arrayOf(T)])),fluid:z(u.default.oneOfType([C,u.default.arrayOf(C)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var M=k;t.default=M},A0Jk:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),o=r("ma3e"),i=n.a.createElement(o.a,{focusable:"false","aria-hidden":"true"}),l=n.a.createElement(o.b,{focusable:"false","aria-hidden":"true"}),s=n.a.createElement(o.d,{focusable:"false","aria-hidden":"true"}),c=n.a.createElement(o.e,{focusable:"false","aria-hidden":"true"}),u=n.a.createElement(o.f,{focusable:"false","aria-hidden":"true"}),f=n.a.createElement(o.g,{focusable:"false","aria-hidden":"true"}),d=n.a.createElement(o.h,{focusable:"false","aria-hidden":"true"}),p=n.a.createElement(o.i,{focusable:"false","aria-hidden":"true"}),h=n.a.createElement(o.j,{focusable:"false","aria-hidden":"true"}),m=n.a.createElement(o.c,{focusable:"false","aria-hidden":"true"});t.a=function(e){switch(e.name){case"twitter":return p;case"facebook":return m;case"instagram":return c;case"youtube":return h;case"spotify":return f;case"soundcloud":return u;case"applemusic":case"apple":return i;case"bandcamp":return l;case"tumblr":return d;default:return s}}},Bi3C:function(e,t,r){var a;"undefined"!=typeof self&&self,a=function(e){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(1),o=(a=n)&&a.__esModule?a:{default:a};t.default=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=r(2),l=(a=i)&&a.__esModule?a:{default:a},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.smoothScroll=r.smoothScroll.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){r(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var r=function(){return 0};void 0!==this.props.offset&&(r=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var a=e.currentTarget.getAttribute("href").slice(1),n=document.getElementById(a).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:n-r(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["offset"]));return l.default.createElement("a",n({},t,{onClick:this.smoothScroll}))}}]),t}(i.Component);t.default=s},function(t,r){t.exports=e},function(e,t,r){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,a=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||l,scrollIntoView:a.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var r=d(this),a=r.getBoundingClientRect(),o=this.getBoundingClientRect();r!==t.body?(h.call(this,r,r.scrollLeft+o.left-a.left,r.scrollTop+o.top-a.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function u(t,r){var a=e.getComputedStyle(t,null)["overflow"+r];return"auto"===a||"scroll"===a}function f(e){var t=c(e,"Y")&&u(e,"Y"),r=c(e,"X")&&u(e,"X");return t||r}function d(e){var r;do{r=(e=e.parentNode)===t.body}while(!1===r&&!1===f(e));return r=null,e}function p(t){var r,a,n,i,l=(o()-t.startTime)/468;i=l=l>1?1:l,r=.5*(1-Math.cos(Math.PI*i)),a=t.startX+(t.x-t.startX)*r,n=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,a,n),a===t.x&&n===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(r,a,i){var s,c,u,f,d=o();r===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=n.scroll):(s=r,c=r.scrollLeft,u=r.scrollTop,f=l),p({scrollable:s,method:f,startTime:d,startX:c,startY:u,x:a,y:i})}}}}()}])},e.exports=a(r("q1tI"))},"D4+t":function(e,t,r){"use strict";var a=r("KQm4"),n=r("rePB"),o=r("q1tI"),i=r.n(o),l=r("TJpk"),s=r.n(l),c=r("/1MN");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var f={"@context":"http://schema.org","@type":"MusicGroup",name:"",url:"",image:[],sameAs:[]};function d(e,t){return void 0!==e[t]&&!!e[t].length}var p=function(e){e.meta;var t,r=e.pageTitle,o=e.pageDescription,l=e.url,p=e.twitterCardType,h=Object(c.a)().socialImg;if(h){var m=h.resize.src;t=Object(c.a)().siteUrl+m}var g=Object(c.a)().artist,b=Object(c.a)().title;"Gatsby Theme Musician"===b&&d(g,"name")&&(b=g.name),d(g,"seo_title")&&(b=g.seo_title);var y=Object(c.a)().description;g.hasOwnProperty("seo_description")?y=g.seo_description:g.hasOwnProperty("tagline")&&(y=g.tagline);var v=[];if(g.contact_twitter_username){var O="@"===g.contact_twitter_username.charAt(0)?g.contact_twitter_username:"@"+g.contact_twitter_username;v=[{name:"twitter:site",content:O},{name:"twitter:creator",content:O}]}var w="en";d(Object(c.a)(),"site_language")&&(w=Object(c.a)().site_language),f.name=g.name,f.image[0]=t;var j=Object(c.a)().social;if(j.length&&j.forEach((function(e,t){d(e,"url")&&(f.sameAs[t]=e.url)})),g.contact_phone||g.contact_email){var x={"@type":"ContactPoint",contactType:"sales",telephone:g.contact_phone.length?g.contact_phone:null,email:g.contact_email.length?g.contact_email:null};f.contactPoint=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},x)}return i.a.createElement(s.a,{htmlAttributes:{lang:w},defaultTitle:b,title:r,titleTemplate:"%s | "+b,meta:[{property:"og:title",content:r||b},{name:"twitter:title",content:r||b},{name:"description",content:o||y},{property:"og:description",content:o||y},{name:"twitter:description",content:o||y},{property:"og:image",content:t||""},{name:"twitter:image",content:t||""},{property:"og:type",content:"website"},{property:"og:site_name",content:b},{property:"og:locale",content:w},{property:"og:url",content:l},{name:"twitter:card",content:p}].concat(Object(a.a)(v))},i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)))};p.defaultProps={meta:[],twitterCardType:"summary_large_image"},t.a=p},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.createContext&&a.createContext(n),i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};function s(e){return function(t){return a.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,i({key:r},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,s=e.title,c=l(e,["attr","title"]);return a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==o?a.createElement(o.Consumer,null,(function(e){return t(e)})):t(n)}},QESI:function(e,t){e.exports={navigation:[{text:"NinjaNode",url:"http://ninjanode.tn42.com"},{text:"StarFries",url:"/starfries"},{text:"Hall Of Fame",url:"/hallofame"},{text:"Games",url:"/games"},{text:"Starphee's Groovy Mix",url:"/groovymix"},{text:"Hypno",url:"/hypno"}]}},QwNe:function(e,t,r){"use strict";e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a `string`, got `".concat(typeof e,"`"));return!/^[a-zA-Z]:\\/.test(e)&&/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}},WvNB:function(e,t,r){"use strict";var a=r("zLVn"),n=(r("q1tI"),r("ASLC")),o=r("Wbzz"),i=r("QwNe"),l=r.n(i);t.a=function(e){var t=e.href,r=Object(a.a)(e,["href"]);if(l()(t||""))return Object(n.f)(n.c.a,Object.assign({},r,{href:t,rel:"external nofollow"}),r.children);var i=r.to||t;return Object(n.f)(n.c.a,Object.assign({as:o.a},r,{to:i,activeClassName:"is-active"}))}},Yhjm:function(e,t){e.exports={artist:{name:"starphee.com",tagline:"-The 𝕌𝕃𝕋𝕀𝕄𝔸𝕋𝔼 website-"},site_language:"en"}},aq6d:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),o=r("qKvR"),i=r("ASLC"),l=r("D4+t"),s=r("Wbzz"),c=r("9eSz"),u=r.n(c),f=r("/1MN"),d=r("WvNB"),p=function(e){return Object(i.f)(d.a,Object.assign({sx:{variant:"textStyles.navLink"}},e),e.children)},h=r("Bi3C"),m=r.n(h),g=r("QESI"),b=r.n(g),y={variant:"layout.header.link",fontSize:[2,2,3]},v=function(e){var t=e.children,r=(e.location,e.isBasePath),a=Object(f.a)(),o=a.title,l=a.logoImg,c=b.a.navigation;return Object(i.f)("header",{role:"banner",sx:{variant:"layout.header"}},Object(i.f)(i.b,{sx:{variant:"layout.header.container"}},Object(i.f)("div",{sx:{variant:"layout.header.homeLink"}},l?r?Object(i.f)(m.a,{href:"#main"},Object(i.f)(u.a,{fixed:l.fixed})):Object(i.f)(s.a,{to:"/"},Object(i.f)(u.a,{fixed:l.fixed})):r?Object(i.f)(m.a,{href:"#main",sx:y},o):Object(i.f)(p,{to:"/",sx:y},o)),Object(i.f)("nav",{sx:{a:{variant:"layout.header.link"}}},t?Object(i.f)("div",{sx:{variant:"layout.header.customChild"}},t):null,!t&&c.length?Object(i.f)(n.a.Fragment,null,c.map((function(e){return r&&(e.url.startsWith("#")||e.url.startsWith("/#"))?Object(i.f)(m.a,{key:e.text,href:e.url},e.text):e.url.startsWith("http")?Object(i.f)(p,{key:e.text,href:e.url},e.text):Object(i.f)(p,{key:e.text,to:e.url},e.text)}))):null)))},O=r("yJZE"),w=function(e){var t=e.children,r=Object(f.a)(),a=r.title,o=r.social,l=!1;return o.length&&void 0!==o[0].name&&o[0].name.length&&(l=!0),Object(i.f)("footer",{role:"contentinfo",sx:{variant:"layout.footer"}},l&&Object(i.f)(n.a.Fragment,null,Object(i.f)("strong",{className:"GtmFooter__social-heading",sx:{variant:"styles.caps"}},"Follow & Subscribe"),Object(i.f)("div",{className:"GtmFooter__social-wrapper"},Object(i.f)(O.a,null))),Object(i.f)("hr",{sx:{variant:"layout.footer.hr"}}),t?Object(i.f)("div",{sx:{variant:"layout.footer.copyright"}},t):Object(i.f)("small",{sx:{variant:"layout.footer.copyright"}},"Copyright © ",(new Date).getFullYear()," ",a,". All rights reserved.",Object(i.f)("br",null),"Built with"," ",Object(i.f)(i.c.a,{href:"https://gatsbyjs.org",rel:"external nofollow"},"Gatsby")," ","and"," ",Object(i.f)(i.c.a,{href:"https://www.npmjs.com/package/gatsby-theme-musician",rel:"external nofollow"},"gatsby-theme-musician"),"."))},j=function(e){return Object(i.f)("a",Object.assign({},e,{href:e.href||"#main",sx:{clip:"rect(0 0 0 0)",height:1,width:1,m:-1,p:0,overrflow:"hidden",position:"absolute",top:-9999,":focus":{p:3,position:"fixed",zIndex:4,top:0,left:0,m:2,fontWeight:"bold",color:"black",bg:"white",width:"auto",height:"auto",clip:"auto"}}}),"Skip to content")};t.a=function(e){return Object(i.f)(i.c.root,null,Object(i.f)(l.a,{url:void 0!==e.location?e.location.href:null}),Object(i.f)(i.a,null),Object(i.f)(o.a,{styles:{"*":{boxSizing:"border-box"},body:{margin:0},iframe:{maxWidth:"100%"},img:{maxWidth:"100%",height:"auto"}}}),Object(i.f)(j,null,"Skip to content"),Object(i.f)(v,{location:e.location,isBasePath:e.isBasePath}),Object(i.f)("main",{id:"main"},e.children),Object(i.f)(w,null))}},ikrs:function(e,t){e.exports={section_releases_title:"Releases",section_shows_title:"Shows"}},yJZE:function(e,t,r){"use strict";var a=r("rePB"),n=r("q1tI"),o=r.n(n),i=r("ASLC"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s={border:0,clip:"rect(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute"},c=function(e){return o.a.createElement("div",l({style:s},e))},u=r("/1MN"),f=function(e){return Object(i.f)(i.c.a,Object.assign({},e,{sx:{display:"inline-block",p:2,mx:[1,2],color:"inherit",textDecoration:"none","&:hover":{color:"primary"},"& > svg":{display:"inline-block",verticalAlign:"middle"}}}))},d=r("A0Jk");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={fontSize:[4,5],svg:{fill:"currentColor"}},g=function(e){var t=e.data,r=Object(u.a)().social;return t.length||r.length&&void 0!==r[0].name&&r[0].name.length&&(t=r),Object(i.f)(o.a.Fragment,null,t.map((function(e,t){return e.name?Object(i.f)(f,{key:t,className:"GtmSocialItem",href:e.url,sx:h({},m),rel:"external nofollow"},Object(i.f)(d.a,{name:e.name.toLowerCase()}),Object(i.f)(c,null,e.name)):null})))};g.defaultProps={data:[]};t.a=g},zLVn:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=7576676e116bcdc1200a54903fe31ae2eeb14cb3-5f2120f4a8758cdfb6c2.js.map