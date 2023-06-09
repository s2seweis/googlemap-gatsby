/*! For license information please see commons-2b909763a268af8b9395.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_blog=self.webpackChunkmy_gatsby_blog||[]).push([[351],{8663:function(e,t,n){var o,a;!function(r){if(void 0===(a="function"==typeof(o=r)?o.call(t,n,t,e):o)||(e.exports=a),!0,e.exports=r(),!!0){var l=window.Cookies,i=window.Cookies=r();i.noConflict=function(){return window.Cookies=l,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function a(){}function r(t,n,r){if("undefined"!=typeof document){"number"==typeof(r=e({path:"/"},a.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(s){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var c in r)r[c]&&(i+="; "+c,!0!==r[c]&&(i+="="+r[c].split(";")[0]));return document.cookie=t+"="+n+i}}function l(e,n){if("undefined"!=typeof document){for(var a={},r=document.cookie?document.cookie.split("; "):[],l=0;l<r.length;l++){var i=r[l].split("="),c=i.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var s=t(i[0]);if(c=(o.read||o)(c,s)||t(c),n)try{c=JSON.parse(c)}catch(u){}if(a[s]=c,e===s)break}catch(u){}}return e?a[e]:a}}return a.set=r,a.get=function(e){return l(e,!1)},a.getJSON=function(e){return l(e,!0)},a.remove=function(t,n){r(t,"",e(n,{expires:-1}))},a.defaults={},a.withConverter=n,a}((function(){}))}))},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var o=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=o.createContext&&o.createContext(a),l=function(){return l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};function c(e){return e&&e.map((function(e,t){return o.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return o.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.attr,r=e.size,c=e.title,s=i(e,["attr","size","title"]),u=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return void 0!==r?o.createElement(r.Consumer,null,(function(e){return t(e)})):t(a)}},8411:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var o=n(7294),a=n(3201),r=function(){return o.createElement("footer",{style:{color:"white"},className:"footer-blog"},o.createElement("div",{className:"container-footer"},o.createElement("div",{className:"footer-e1"},o.createElement("a",{className:"footer-e1-a",style:{},href:"/copyright"},"Copyright")),o.createElement("div",{className:"footer-e2"},o.createElement("a",{className:"footer-e1-a",style:{},href:"/about"},"About")),o.createElement("div",{className:"footer-e3"},o.createElement("a",{className:"footer-e1-a",style:{},href:"/contact"},"Contact"))),o.createElement("div",{className:"container-footer-row2"},o.createElement("div",{className:"footer-e1-row2"},o.createElement("a",{"aria-label":"link",href:"https://www.facebook.com",className:"link-social-desktop"},o.createElement("span",null,o.createElement(a.R9i,null))),o.createElement("a",{"aria-label":"link",href:"https://www.instagram.com/",className:"link-social-desktop"},o.createElement("span",null,o.createElement(a.hJX,null))))))},l=n(1521),i=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about"}],c=n(1082),s=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about/"},{id:9,text:"index",url:"/index-all-recipes"},{id:10,text:"contact",url:"/contact/"}],u=[{id:1,icon:o.createElement(a.R9i,{className:"social-icon"}),url:"https://www.facebook.com/people/The-Solace-Life/100090725413897/?mibextid=LQQJ4d"},{id:3,icon:o.createElement(a.hJX,{className:"social-icon"}),url:"https://www.tiktok.com/"}],p=function(e){var t=e.isOpen,n=e.toggleSidebar;return o.createElement("aside",{className:t?"sidebar show-sidebar":"sidebar"},o.createElement("button",{className:"close-btn",alt:"close",type:"button",onClick:n},o.createElement(a.aHS,null)),o.createElement("div",{className:"side-container",style:{marginTop:"60px",width:"100%"}},o.createElement("div",{className:"sidebar-social-links-margin",style:{marginTop:"auto"}},o.createElement("ul",{className:t?"sidebar-links":null},s.map((function(e){return o.createElement("li",{style:{},key:e.id},o.createElement(c.rU,{to:e.url,onClick:n},e.text))})))),o.createElement("div",{className:"sidebar-social-links-margin",style:{marginTop:"30px"}},o.createElement("ul",{className:t?"social-links sidebar-icons":null},u.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{"aria-label":"link",href:e.url,className:"social-link"},e.icon))}))))))},m=n(9463),d=function(e){var t=e.toggleSidebar;return o.createElement("nav",{style:{position:"sticky"},className:"navbar"},o.createElement("div",{className:"nav-center"},o.createElement("div",{className:"nav-header"},o.createElement("a",{href:"/"},o.createElement("span",{style:{fontSize:"5rem"}},o.createElement(m.OqH,{style:{color:"black"}})))),o.createElement("div",{className:"nav-title"},o.createElement("button",{style:{marginLeft:"15px"},type:"button",className:"toggle-btn",onClick:t},o.createElement(l.umT,null)),o.createElement("h2",{className:"h2-nav-title",style:{display:"flex",justifyContent:"center",width:"100%"}},"G-Map Playground")),o.createElement("div",{className:"nav-links"},i.map((function(e){return o.createElement(c.rU,{key:e.id,to:e.url},e.text)}))),o.createElement(p,null)))},f=n(8663),b=n.n(f),y=function(e){var t=e.condition,n=e.wrapper,o=e.children;return t?n(o):o};function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}var g,k="top",E="bottom";!function(e){e.STRICT="strict",e.LAX="lax",e.NONE="none"}(g||(g={}));var C="hidden",w="byCookieValue",x="CookieConsent",O=["children"],S={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:E,visible:w,onAccept:function(e){},onDecline:function(){},cookieName:x,cookieValue:"true",declineCookieValue:"false",setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:g.LAX,ButtonComponent:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,O);return o.createElement("button",Object.assign({},n),t)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{},customDeclineButtonProps:{},customButtonWrapperAttributes:{},style:{},buttonStyle:{},declineButtonStyle:{},contentStyle:{},overlayStyle:{}},N={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},j=function(e){return e+"-legacy"},B=function(e){var t,n;function a(){var t;return(t=e.apply(this,arguments)||this).state=N,t.handleScroll=function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,o=document.body,a="scrollTop",r="scrollHeight";(n[a]||o[a])/((n[r]||o[r])-n.clientHeight)*100>e&&t.accept(!0)},t.removeScrollListener=function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,v(t,n);var r=a.prototype;return r.componentDidMount=function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))},r.componentWillUnmount=function(){this.removeScrollListener()},r.accept=function(e){var t;void 0===e&&(e=!1);var n=this.props,o=n.cookieName,a=n.cookieValue,r=n.hideOnAccept,l=n.onAccept;this.setCookie(o,a),l(null!=(t=e)&&t),r&&(this.setState({visible:!1}),this.removeScrollListener())},r.overlayClick=function(){var e=this.props,t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()},r.decline=function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,o=e.hideOnDecline,a=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),a(),o&&this.setState({visible:!1})},r.setCookie=function(e,t){var n=this.props,o=n.extraCookieOptions,a=n.expires,r=n.sameSite,l=this.props.cookieSecurity;void 0===l&&(l=!window.location||"https:"===window.location.protocol);var i=h({expires:a},o,{sameSite:r,secure:l});r===g.NONE&&b().set(j(e),t,i),b().set(e,t,i)},r.getCookieValue=function(){return function(e){void 0===e&&(e=x);var t=b().get(e);return void 0===t?b().get(j(e)):t}(this.props.cookieName)},r.render=function(){var e=this;switch(this.props.visible){case C:return null;case w:if(!this.state.visible)return null}var t=this.props,n=t.location,a=t.style,r=t.buttonStyle,l=t.declineButtonStyle,i=t.contentStyle,c=t.disableStyles,s=t.buttonText,u=t.declineButtonText,p=t.containerClasses,m=t.contentClasses,d=t.buttonClasses,f=t.buttonWrapperClasses,b=t.declineButtonClasses,v=t.buttonId,g=t.declineButtonId,x=t.disableButtonStyles,O=t.enableDeclineButton,S=t.flipButtons,N=t.ButtonComponent,j=t.overlay,B=t.overlayClasses,A=t.overlayStyle,D=t.ariaAcceptLabel,I=t.ariaDeclineLabel,T=t.customContainerAttributes,L=t.customContentAttributes,P=t.customButtonProps,R=t.customDeclineButtonProps,z=t.customButtonWrapperAttributes,_={},U={},V={},W={},J={};switch(c?(_=Object.assign({},a),U=Object.assign({},r),V=Object.assign({},l),W=Object.assign({},i),J=Object.assign({},A)):(_=Object.assign({},h({},this.state.style,a)),W=Object.assign({},h({},this.state.contentStyle,i)),J=Object.assign({},h({},this.state.overlayStyle,A)),x?(U=Object.assign({},r),V=Object.assign({},l)):(U=Object.assign({},h({},this.state.buttonStyle,r)),V=Object.assign({},h({},this.state.declineButtonStyle,l)))),n){case k:_.top="0";break;case E:_.bottom="0"}var H=[];return O&&H.push(o.createElement(N,Object.assign({key:"declineButton",style:V,className:b,id:g,"aria-label":I,onClick:function(){e.decline()}},R),u)),H.push(o.createElement(N,Object.assign({key:"acceptButton",style:U,className:d,id:v,"aria-label":D,onClick:function(){e.accept()}},P),s)),S&&H.reverse(),o.createElement(y,{condition:j,wrapper:function(t){return o.createElement("div",{style:J,className:B,onClick:function(){e.overlayClick()}},t)}},o.createElement("div",Object.assign({className:""+p,style:_},T),o.createElement("div",Object.assign({style:W,className:m},L),this.props.children),o.createElement("div",Object.assign({className:""+f},z),H.map((function(e){return e})))))},a}(o.Component);B.defaultProps=S;var A=B,D=function(e){var t=e.children,n=((0,o.useRef)(null),(0,o.useState)(!1)),l=n[0],i=n[1],c=function(){i(!l)};return o.createElement("div",{className:"flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900"},o.createElement("div",{className:"social-media-left-side"},o.createElement("a",{"aria-label":"link",href:"https://www.instagram.com/",className:"link-social-left1",style:{}},o.createElement("span",null,o.createElement(a.Zf_,null))),o.createElement("a",{"aria-label":"link",href:"https://www.facebook.com",className:"link-social-left2"},o.createElement("span",null,o.createElement(a.R9i,null))),o.createElement("a",{"aria-label":"link",href:"https://www.youtube.com",className:"link-social-left3"},o.createElement("span",null,o.createElement(a.V2E,null)))),o.createElement("div",null,o.createElement(A,{location:"bottom",buttonText:"I Accept It",cookieName:"myAwesomeCookieName2",style:{background:"#0d6efd"},buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150},"This website uses cookies to enhance the user experience.",o.createElement("span",{style:{fontSize:"10px"}},o.createElement("div",{style:{marginTop:"20px"}},o.createElement("a",{style:{fontSize:"1.3rem",padding:"5px",marginLeft:"20px"},href:"javascript:history.back()"},o.createElement("button",{type:"button",className:"btn btn-link"},"Go Back"))))),o.createElement(p,{isOpen:l,toggleSidebar:c}),o.createElement(d,{toggleSidebar:c}),t),o.createElement(r,null))}}}]);
//# sourceMappingURL=commons-2b909763a268af8b9395.js.map