(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8V83":function(e,t,n){"use strict";var r=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("7ljp"),i=n("ASLC"),l=function(e){return Object(i.f)(i.c.h2,{sx:{mt:0,mb:[4,5],textAlign:"center"}},e.children)},s=n("aq6d"),u=n("WvNB"),f=n("/1MN"),p=n("9eSz"),b=n.n(p),m=function(e){return Object(i.f)(i.c.div,Object.assign({},e,{sx:{variant:"components.heroImg.parent"}}),Object(i.f)(b.a,{sx:{variant:"components.heroImg.gatsbyImg"},fluid:e.fluid}),Object(i.f)("div",{sx:{variant:"components.heroImg.content"}},e.children))},d=n("yJZE");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={},x={},h=function(e){var t=e.title,n=e.tagline;return Object(i.f)(a.a.Fragment,null,Object(i.f)(i.c.h1,null,t),n&&Object(i.f)("p",null,n),Object(i.f)(d.a,null))},y=function(e){var t=e.children,n=e.bgOverlay,r=e.color,o=Object(f.a)(),a=o.title,c=o.artist,l=o.bannerImg;l&&(j.flexDirection="column"),r&&(j.color="color"),n&&(x={"&:after":{background:n}});var s=Object(i.f)(h,{title:a,tagline:void 0===c.tagline?null:c.tagline});return Object(i.f)("div",{className:"GtmBanner",sx:v(v({variant:"components.banner"},j),x)},l?Object(i.f)(m,{className:"GtmBanner__hero-wrapper",fluid:l.fluid,sx:{flexGrow:1}},Object(i.f)(i.b,{className:"GtmBanner__content-wrapper"},t||s)):Object(i.f)(i.b,{className:"GtmBanner__content-wrapper",sx:{alignSelf:"center"}},t||s))},g=function(e){return Object(i.f)(i.b,e,e.children)},w=n("zLVn"),_=function(e){var t=e.children,n=e.columns,r=void 0===n?3:n,o=e.gap,a=void 0===o?24:o,c=Object(w.a)(e,["children","columns","gap"]);return Object(i.f)(i.c.div,Object.assign({},c,{sx:{listStyle:"none",display:"grid",gridTemplateColumns:["auto","repeat("+r+", 1fr)"],gridGap:a,p:0,m:0}}),t)},S=function(e){var t=e.children,n=e.src,r=e.ratio,o=void 0===r?1:r,a=Object(w.a)(e,["children","src","ratio"]);return Object(i.f)(i.c.div,Object.assign({},a,{sx:{width:"100%",height:0,pb:100*o+"%",backgroundColor:"bgAccent",backgroundImage:n?"url("+n+")":"none",backgroundSize:"cover",backgroundPosition:"center"}}),t)},P=n("A0Jk"),I=function(e){var t=e.id,n=e.title,r=e.date,o=e.release_type,c=e.image,l=e.links;return Object(i.f)("article",{key:t,className:"GtmReleaseItem",sx:{".GtmReleaseItem__cover":{borderRadius:2}}},c?Object(i.f)(b.a,{fluid:c.childImageSharp.fluid,alt:"Album cover",className:"GtmReleaseItem__cover"}):Object(i.f)(S,{className:"GtmReleaseItem__cover GtmReleaseItem__cover--empty",sx:{position:"relative"}},Object(i.f)("small",{sx:{position:"absolute",top:"calc(50% - 1rem)",width:"100%",textAlign:"center",color:"muted"}},"no cover image")),Object(i.f)(i.c.h4,{className:"GtmReleaseItem__title",sx:{mb:0,mt:2}},n),Object(i.f)("div",{className:"GtmReleaseItem__date",sx:{variant:"textStyles.itemSubheading"}},new Date(r).toLocaleDateString("en-GB",{year:"numeric"}),o&&Object(i.f)(a.a.Fragment,null," · ",o)),l&&Object(i.f)("div",{sx:{variant:"textStyles.itemSubheading",mt:2}},"Listen: ",Object(i.f)(i.c.ul,{sx:{variant:"textStyles.inlineTextList",display:"inline",lineHeight:1.6}},l.map((function(e){return Object(i.f)("a",{key:e.name,href:e.url,sx:{textDecoration:"none",display:"inline-block",mx:".375em",fontWeight:700,color:"text","&:hover":{color:"primary"},svg:{verticalAlign:"middle",marginTop:-1}},rel:"external nofollow"},Object(i.f)(P.a,{name:e.name.toLowerCase().replace(/\s/g,"")})," ",e.name)})))))},D=function(e){var t=e.id,n=e.name,r=e.date,o=e.location,c=e.info_url,l=e.map_url;return Object(i.f)("li",{key:t,className:"GtmShowItem",sx:{variant:"components.show"}},Object(i.f)("time",{dateTime:r,"aria-label":new Date(r).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),className:"GtmShowItem__date",sx:{variant:"components.show.date"}},Object(i.f)("span",{className:"GtmShowItem__month",sx:{variant:"components.show.date.month"}}," ",new Date(r).toLocaleDateString("en-GB",{month:"short"})," "),Object(i.f)("span",{className:"GtmShowItem__day",sx:{variant:"components.show.date.day"}},new Date(r).toLocaleDateString("en-GB",{day:"numeric"}))),Object(i.f)("div",{sx:{variant:"components.show.colWrapper"}},Object(i.f)("div",{sx:{variant:"components.show.desc"}},Object(i.f)(i.c.h4,{className:"GtmShowItem__title",sx:{m:0,pt:[0,2],pb:[1,2]}},n),Object(i.f)("div",{sx:{variant:"textStyles.itemSubheading"}},o,l&&Object(i.f)(a.a.Fragment,null," ","·"," ",Object(i.f)(i.c.a,{href:c,rel:"external nofollow"},Object(i.f)("strong",null,"Map"))))),Object(i.f)("div",{sx:{variant:"components.show.rsvpLink"}},c?Object(i.f)("a",{href:c,rel:"external nofollow",sx:{variant:"textStyles.button"}},"Detail / RSVP"):Object(i.f)("small",{sx:{color:"muted"}},"No RSVP info"))))};function k(e){return e.split("?v=")[1].split("&")[0]}var G={position:"relative",width:["100%",null,null,800],pb:["56.25%",null,null,450],pt:0,mx:"auto",my:[4,null,null,5],height:0,iframe:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},R=function(e){e.videoId;var t=e.url,n=e.videoTitle;return Object(i.f)("div",{className:"GtmYoutube",sx:G},Object(i.f)("iframe",{src:"https://www.youtube.com/embed/"+(k(t)||"sCluiViSnNA"),title:n||"YouTube video",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={Banner:y,Container:g,Grids:_,Releases:function(e){var t,n=e.releases,r=void 0===n?[]:n,o=e.columns,a="Releases",c=Object(f.a)().textLabels;return void 0!==c.section_releases_title&&c.section_releases_title.length&&(a=c.section_releases_title),o||(t=[null,"repeat(auto-fit,minmax(14em,1fr))"]),Object(i.f)("section",{id:"releases",sx:{variant:"layout.landingSection"}},Object(i.f)(l,null,a),Object(i.f)(_,{as:"ol",columns:o,gap:"calc(1em + 1vw)",sx:{gridTemplateColumns:t}},r.length>0&&r.map((function(e){return Object(i.f)("li",{key:e.id},Object(i.f)(I,e))}))))},Shows:function(e){var t=e.shows,n=void 0===t?[]:t,r="Shows",o=Object(f.a)().textLabels;return void 0!==o.section_shows_title&&o.section_shows_title.length&&(r=o.section_shows_title),Object(i.f)("section",{id:"shows",sx:{variant:"layout.landingSection"}},Object(i.f)(l,null,r),Object(i.f)("ol",{sx:{m:0,p:0,listStyle:"none"}},n.length>0&&n.map((function(e){return Object(i.f)(D,Object.assign({},e,{key:e.id}))}))))},Social:d.a,Youtube:R,wrapper:function(e){return a.a.createElement(s.a,e)},h2:function(e){return a.a.createElement(l,e)},a:function(e){return a.a.createElement(u.a,e)}};t.a=function(e){return a.a.createElement(c.MDXProvider,{components:N({},B)},e.children)}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Kzn7:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),c=n("A2+M"),i=n("8V83"),l="35303891";t.default=function(e){var t=e.location,n=(e.pageContext,Object(a.c)(l)),r=n.shows.nodes,s=n.releases.nodes;return o.a.createElement(i.a,null,o.a.createElement(c.MDXRenderer,{location:t,shows:r,releases:s,isBasePath:!0},n.mdx.body))}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),u=n("7ljp").mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=c(e,["scope","children"]),i=f(t),p=s.useMemo((function(){if(!n)return null;var e=l({React:s,mdx:u},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return s.createElement(p,l({},a))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-musician-src-templates-landing-js-de9059f7028eb6ef78c3.js.map