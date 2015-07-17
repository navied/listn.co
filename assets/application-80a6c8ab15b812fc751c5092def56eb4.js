(function(){var t,e,n,i,o,s,r,a,l,h,c,u,d,f,p,m,v,g,y,w,$,b,C,x,k,T,E,j,D,S,A,P,H,L,q,M,Q,R,O,W,N,B,X,I,K,_,F,G,Y,z,J,U,V,Z,te,ee,ne,ie,oe,se,re=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},ae=[].slice;Q={},c=10,te=!1,m=null,H=null,T=["html"],X=null,f=null,oe=null,$=function(t){var e;return G(),h(),I(t),te&&(e=ee(t))?(b(e),C(t)):C(t,V)},ee=function(t){var e;return e=Q[t],e&&!e.transitionCacheDisabled?e:void 0},v=function(t){return null==t&&(t=!0),te=t},C=function(t,e){return null==e&&(e=function(){return function(){}}(this)),ne("page:fetch",{url:t}),null!=oe&&oe.abort(),oe=new XMLHttpRequest,oe.open("GET",z(t),!0),oe.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),oe.setRequestHeader("X-XHR-Referer",X),oe.onload=function(){var n;return ne("page:receive"),(n=N())?(u.apply(null,w(n)),K(),e(),ne("page:load")):document.location.href=t},oe.onloadend=function(){return oe=null},oe.onerror=function(){return document.location.href=t},oe.send()},b=function(t){return null!=oe&&oe.abort(),u(t.title,t.body),B(t),ne("page:restore")},h=function(){return Q[m.url]={url:document.location.href,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},d(c)},O=function(t){return null==t&&(t=c),/^[\d]+$/.test(t)?c=parseInt(t):void 0},d=function(t){var e,n,i,o,s,r;for(i=Object.keys(Q),e=i.map(function(t){return Q[t].cachedAt}).sort(function(t,e){return e-t}),r=[],o=0,s=i.length;s>o;o++)n=i[o],Q[n].cachedAt<=e[t]&&(ne("page:expire",Q[n]),r.push(delete Q[n]));return r},u=function(e,n,i,o){return document.title=e,document.documentElement.replaceChild(n,document.body),null!=i&&t.update(i),o&&g(),m=window.history.state,ne("page:change"),ne("page:update")},g=function(){var t,e,n,i,o,s,r,a,l,h,c,u;for(s=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),r=0,l=s.length;l>r;r++)if(o=s[r],""===(c=o.type)||"text/javascript"===c){for(e=document.createElement("script"),u=o.attributes,a=0,h=u.length;h>a;a++)t=u[a],e.setAttribute(t.name,t.value);e.appendChild(document.createTextNode(o.innerHTML)),i=o.parentNode,n=o.nextSibling,i.removeChild(o),i.insertBefore(e,n)}},J=function(t){return t.innerHTML=t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),t},I=function(t){return t!==X?window.history.pushState({turbolinks:!0,url:t},"",t):void 0},K=function(){var t,e;return(t=oe.getResponseHeader("X-XHR-Redirected-To"))?(e=Y(t)===t?document.location.hash:"",window.history.replaceState(m,"",t+e)):void 0},G=function(){return X=document.location.href},F=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},_=function(){return m=window.history.state},B=function(t){return window.scrollTo(t.positionX,t.positionY)},V=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},z=function(t){return Y(t)},Y=function(t){var e;return e=t,null==t.href&&(e=document.createElement("A"),e.href=t),e.href.replace(e.hash,"")},W=function(t){var e,n;return e=(null!=(n=document.cookie.match(new RegExp(t+"=(\\w+)")))?n[1].toUpperCase():void 0)||"",document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",e},ne=function(t,e){var n;return n=document.createEvent("Events"),e&&(n.data=e),n.initEvent(t,!0,!0),document.dispatchEvent(n)},R=function(){return!ne("page:before-change")},N=function(){var t,e,n,i,o,s;return e=function(){var t;return 400<=(t=oe.status)&&600>t},s=function(){return oe.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},i=function(t){var e,n,i,o,s;for(o=t.head.childNodes,s=[],n=0,i=o.length;i>n;n++)e=o[n],null!=("function"==typeof e.getAttribute?e.getAttribute("data-turbolinks-track"):void 0)&&s.push(e.getAttribute("src")||e.getAttribute("href"));return s},t=function(t){var e;return H||(H=i(document)),e=i(t),e.length!==H.length||o(e,H).length!==H.length},o=function(t,e){var n,i,o,s,r;for(t.length>e.length&&(s=[e,t],t=s[0],e=s[1]),r=[],i=0,o=t.length;o>i;i++)n=t[i],re.call(e,n)>=0&&r.push(n);return r},!e()&&s()&&(n=f(oe.responseText),n&&!t(n))?n:void 0},w=function(e){var n;return n=e.querySelector("title"),[null!=n?n.textContent:void 0,J(e.body),t.get(e).token,"runScripts"]},t={get:function(t){var e;return null==t&&(t=document),{node:e=t.querySelector('meta[name="csrf-token"]'),token:null!=e?"function"==typeof e.getAttribute?e.getAttribute("content"):void 0:void 0}},update:function(t){var e;return e=this.get(),null!=e.token&&null!=t&&e.token!==t?e.node.setAttribute("content",t):void 0}},i=function(){var t,e,n,i,o,s;e=function(t){return(new DOMParser).parseFromString(t,"text/html")},t=function(t){var e;return e=document.implementation.createHTMLDocument(""),e.documentElement.innerHTML=t,e},n=function(t){var e;return e=document.implementation.createHTMLDocument(""),e.open("replace"),e.write(t),e.close(),e};try{if(window.DOMParser)return o=e("<html><body><p>test"),e}catch(r){return i=r,o=t("<html><body><p>test"),t}finally{if(1!==(null!=o?null!=(s=o.body)?s.childNodes.length:void 0:void 0))return n}},D=function(t){return t.defaultPrevented?void 0:(document.removeEventListener("click",x,!1),document.addEventListener("click",x,!1))},x=function(t){var e;return t.defaultPrevented||(e=y(t),"A"!==e.nodeName||E(t,e))?void 0:(R()||ie(e.href),t.preventDefault())},y=function(t){var e;for(e=t.target;e.parentNode&&"A"!==e.nodeName;)e=e.parentNode;return e},p=function(t){return location.protocol!==t.protocol||location.host!==t.host},n=function(t){return(t.hash&&Y(t))===Y(location)||t.href===location.href+"#"},q=function(t){var e;return e=Y(t),e.match(/\.[a-z]+(\?.*)?$/g)&&!e.match(new RegExp("\\.(?:"+T.join("|")+")?(\\?.*)?$","g"))},L=function(t){for(var e;!e&&t!==document;)e=null!=t.getAttribute("data-no-turbolink"),t=t.parentNode;return e},Z=function(t){return 0!==t.target.length},M=function(t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey},E=function(t,e){return p(e)||n(e)||q(e)||L(e)||Z(e)||M(t)},e=function(){var t,e,n,i;for(e=1<=arguments.length?ae.call(arguments,0):[],n=0,i=e.length;i>n;n++)t=e[n],T.push(t);return T},l=function(t){return setTimeout(t,500)},S=function(){return document.addEventListener("DOMContentLoaded",function(){return ne("page:change"),ne("page:update")},!0)},P=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(t,e){return jQuery.trim(e.responseText)?ne("page:update"):void 0}):void 0},A=function(t){var e,n;return(null!=(n=t.state)?n.turbolinks:void 0)?(e=Q[t.state.url])?(h(),b(e)):ie(t.target.location.href):void 0},j=function(){return F(),_(),f=i(),document.addEventListener("click",D,!0),l(function(){return window.addEventListener("popstate",A,!1)})},k=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),r=window.history&&window.history.pushState&&window.history.replaceState&&k,o=!navigator.userAgent.match(/CriOS\//),U="GET"===(se=W("request_method"))||""===se,a=r&&o&&U,s=document.addEventListener&&document.createEvent,s&&(S(),P()),a?(ie=$,j()):ie=function(t){return document.location.href=t},this.Turbolinks={visit:ie,pagesCached:O,enableTransitionCache:v,allowLinkExtensions:e,supported:a}}).call(this),!function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.options=t.extend({},t.fn.affix.defaults,n),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,n=t(document).height(),i=this.$window.scrollTop(),o=this.$element.offset(),s=this.options.offset,r=s.bottom,a=s.top,l="affix affix-top affix-bottom";"object"!=typeof s&&(r=a=s),"function"==typeof a&&(a=s.top()),"function"==typeof r&&(r=s.bottom()),e=null!=this.unpin&&i+this.unpin<=o.top?!1:null!=r&&o.top+this.$element.height()>=n-r?"bottom":null!=a&&a>=i?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?o.top-i:null,this.$element.removeClass(l).addClass("affix"+(e?"-"+e:"")))}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var i=t(this),o=i.data("affix"),s="object"==typeof n&&n;o||i.data("affix",o=new e(this,s)),"string"==typeof n&&o[n]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)})})}(window.jQuery),!function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,o=t(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),i=t(s),e&&e.preventDefault(),i.length||(i=o.hasClass("alert")?o:o.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),o=i.data("alert");o||i.data("alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),o=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[o]()),n[o](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),o=i.data("button"),s="object"==typeof n&&n;o||i.data("button",o=new e(this,s)),"toggle"==n?o.toggle():n&&o.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var n=this.getActiveIndex(),i=this;if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,n){var i,o=this.$element.find(".item.active"),s=n||o[e](),r=this.interval,a="next"==e?"left":"right",l="next"==e?"first":"last",h=this;if(this.sliding=!0,r&&this.pause(),s=s.length?s:this.$element.find(".item")[l](),i=t.Event("slide",{relatedTarget:s[0],direction:a}),!s.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(h.$indicators.children()[h.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;s.addClass(e),s[0].offsetWidth,o.addClass(a),s.addClass(a),this.$element.one(t.support.transition.end,function(){s.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return r&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("carousel"),s=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),r="string"==typeof n?n:s.slide;o||i.data("carousel",o=new e(this,s)),"number"==typeof n?o.to(n):r?o[r]():s.interval&&o.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i,o=t(this),s=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),r=t.extend({},s.data(),o.data());s.carousel(r),(i=o.attr("data-slide-to"))&&s.data("carousel").pause().to(i).cycle(),e.preventDefault()})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,n),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){var e,n,i,o;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),n=t.camelCase(["scroll",e].join("-")),i=this.$parent&&this.$parent.find("> .accordion-group > .in"),i&&i.length){if(o=i.data("collapse"),o&&o.transitioning)return;i.collapse("hide"),o||i.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][n])}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,n,i){var o=this,s=function(){"show"==n.type&&o.reset(),o.transitioning=0,o.$element.trigger(i)};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,s):s())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),o=i.data("collapse"),s=t.extend({},t.fn.collapse.defaults,i.data(),"object"==typeof n&&n);o||i.data("collapse",o=new e(this,s)),"string"==typeof n&&o[n]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),s=t(o).data("collapse")?"toggle":i.data();i[t(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(o).collapse(s)})}(window.jQuery),!function(t){"use strict";function e(){t(".dropdown-backdrop").remove(),t(i).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,i=e.attr("data-target");return i||(i=e.attr("href"),i=i&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),n=i&&t(i),n&&n.length||(n=e.parent()),n}var i="[data-toggle=dropdown]",o=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(){var i,o,s=t(this);if(!s.is(".disabled, :disabled"))return i=n(s),o=i.hasClass("open"),e(),o||("ontouchstart"in document.documentElement&&t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click",e),i.toggleClass("open")),s.focus(),!1},keydown:function(e){var o,s,r,a,l;if(/(38|40|27)/.test(e.keyCode)&&(o=t(this),e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled"))){if(r=n(o),a=r.hasClass("open"),!a||a&&27==e.keyCode)return 27==e.which&&r.find(i).focus(),o.click();s=t("[role=menu] li:not(.divider):visible a",r),s.length&&(l=s.index(s.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<s.length-1&&l++,~l||(l=0),s.eq(l).focus())}}};var s=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("dropdown");i||n.data("dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=s,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.data-api",i,o.prototype.toggle).on("keydown.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault();e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),o=i.data("modal"),s=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);o||i.data("modal",o=new e(this,s)),"string"==typeof n?o[n]():s.show&&o.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),o=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=o.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),n.data());e.preventDefault(),o.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(t){"use strict";function e(e,n){var i,o=t.proxy(this.process,this),s=t(e).is("body")?t(window):t(e);this.options=t.extend({},t.fn.scrollspy.defaults,n),this.$scrollElement=s.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(i=t(e).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e,n=this;this.offsets=t([]),this.targets=t([]),e=this.$body.find(this.selector).map(function(){var e=t(this),i=e.data("target")||e.attr("href"),o=/^#\w/.test(i)&&t(i);return o&&o.length&&[[o.position().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=n-this.$scrollElement.height(),o=this.offsets,s=this.targets,r=this.activeTarget;if(e>=i)return r!=(t=s.last()[0])&&this.activate(t);for(t=o.length;t--;)r!=s[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(s[t])},activate:function(e){var n,i;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var i=t(this),o=i.data("scrollspy"),s="object"==typeof n&&n;o||i.data("scrollspy",o=new e(this,s)),"string"==typeof n&&o[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),!function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,n,i,o=this.element,s=o.closest("ul:not(.dropdown-menu)"),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),o.parent("li").hasClass("active")||(e=s.find(".active:last a")[0],i=t.Event("show",{relatedTarget:e}),o.trigger(i),i.isDefaultPrevented()||(n=t(r),this.activate(o.parent("li"),s),this.activate(n,n.parent(),function(){o.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,n,i){function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var s=n.find("> .active"),r=i&&t.support.transition&&s.hasClass("fade");r?s.one(t.support.transition.end,o):o(),s.removeClass("in")}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),o=i.data("tab");o||i.data("tab",o=new e(this)),"string"==typeof n&&o[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,i){var o,s,r,a,l;for(this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.enabled=!0,r=this.options.trigger.split(" "),l=r.length;l--;)a=r[l],"click"==a?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(o="hover"==a?"mouseenter":"focus",s="hover"==a?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var n,i=t.fn[this.type].defaults,o={};return this._options&&t.each(this._options,function(t,e){i[t]!=e&&(o[t]=e)},this),n=t(e.currentTarget)[this.type](o).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},show:function(){var e,n,i,o,s,r,a=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),i=e[0].offsetWidth,o=e[0].offsetHeight,s){case"bottom":r={top:n.top+n.height,left:n.left+n.width/2-i/2};break;case"top":r={top:n.top-o,left:n.left+n.width/2-i/2};break;case"left":r={top:n.top+n.height/2-o/2,left:n.left-i};break;case"right":r={top:n.top+n.height/2-o/2,left:n.left+n.width}}this.applyPlacement(r,s),this.$element.trigger("shown")}},applyPlacement:function(t,e){var n,i,o,s,r=this.tip(),a=r[0].offsetWidth,l=r[0].offsetHeight;r.offset(t).addClass(e).addClass("in"),n=r[0].offsetWidth,i=r[0].offsetHeight,"top"==e&&i!=l&&(t.top=t.top+l-i,s=!0),"bottom"==e||"top"==e?(o=0,t.left<0&&(o=-2*t.left,t.left=0,r.offset(t),n=r[0].offsetWidth,i=r[0].offsetHeight),this.replaceArrow(o-a+n,n,"left")):this.replaceArrow(i-l,i,"top"),s&&r.offset(t)},replaceArrow:function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){n.off(t.support.transition.end).detach()},500);n.one(t.support.transition.end,function(){clearTimeout(e),n.detach()})}var n=this.tip(),i=t.Event("hide");return this.$element.trigger(i),i.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():n.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var n=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var i=t(this),o=i.data("tooltip"),s="object"==typeof n&&n;o||i.data("tooltip",o=new e(this,s)),"string"==typeof n&&o[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(window.jQuery),!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,n=this.options;return t=("function"==typeof n.content?n.content.call(e[0]):n.content)||e.attr("data-content")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var i=t(this),o=i.data("popover"),s="object"==typeof n&&n;o||i.data("popover",o=new e(this,s)),"string"==typeof n&&o[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=t(this.options.menu),this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:e.top+e.height,left:e.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)},process:function(e){var n=this;return e=t.grep(e,function(t){return n.matcher(t)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],i=[],o=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?i.push(e):o.push(e):n.push(e);
return n.concat(i,o)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var n=this;return e=t(e).map(function(e,i){return e=t(n.options.item).attr("data-value",i),e.find("a").html(n.highlighter(i)),e[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),n=e.next();n.length||(n=t(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",t.proxy(this.focus,this)).on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this)).on("mouseleave","li",t.proxy(this.mouseleave,this))},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(){this.focused=!0},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=t.fn.typeahead;t.fn.typeahead=function(n){return this.each(function(){var i=t(this),o=i.data("typeahead"),s="object"==typeof n&&n;o||i.data("typeahead",o=new e(this,s)),"string"==typeof n&&o[n]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=n,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var e=t(this);e.data("typeahead")||e.typeahead(e.data())})}(window.jQuery);