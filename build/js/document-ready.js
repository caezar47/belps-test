"use strict";window.onerror=function(t,e,n,i,a){console.log("Error FECSS: "+e+":"+n+":"+i+": "+JSON.stringify(t)+"\n"+JSON.stringify(a))}+function(i){i.fn.emulateTransitionEnd=function(t){var e=!1,n=this;i(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||i(n).trigger(i.support.transition.end)},t),this},i(function(){i.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}(),i.support.transition&&(i.event.special.bsTransitionEnd={bindType:i.support.transition.end,delegateType:i.support.transition.end,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){var r=function(t,e){this.$element=s(t),this.options=s.extend({},r.DEFAULTS,e),this.$trigger=s('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function a(t){var e,n=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return s(n)}function l(i){return this.each(function(){var t=s(this),e=t.data("bs.collapse"),n=s.extend({},r.DEFAULTS,t.data(),"object"==typeof i&&i);!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||t.data("bs.collapse",e=new r(this,n)),"string"==typeof i&&e[i]()})}r.VERSION="3.3.7",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var n=s.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!s.support.transition)return a.call(this);var o=s.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",s.proxy(a,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[i](this.$element[0][o])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=s.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!s.support.transition)return n.call(this);this.$element[e](0).one("bsTransitionEnd",s.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return s(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(s.proxy(function(t,e){var n=s(e);this.addAriaAndCollapsedClass(a(n),n)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var t=s.fn.collapse;s.fn.collapse=l,s.fn.collapse.Constructor=r,s.fn.collapse.noConflict=function(){return s.fn.collapse=t,this},s(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=s(this);e.attr("data-target")||t.preventDefault();var n=a(e),i=n.data("bs.collapse")?"toggle":e.data();l.call(n,i)})}(jQuery),function(s){function i(t){s(t).on("click.bs.dropdown",this.toggle)}var r='[data-toggle="dropdown"]';function l(t){var e=t.attr("data-target"),n=(e=e||(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""))&&s(e);return n&&n.length?n:t.parent()}function o(i){i&&3===i.which||(s(".dropdown-backdrop").remove(),s(r).each(function(){var t=s(this),e=l(t),n={relatedTarget:this};e.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&s.contains(e[0],i.target)||(e.trigger(i=s.Event("hide.bs.dropdown",n)),i.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(s.Event("hidden.bs.dropdown",n)))))}))}i.VERSION="3.3.7",i.prototype.toggle=function(t){var e=s(this);if(!e.is(".disabled, :disabled")){var n=l(e),i=n.hasClass("open");if(o(),!i){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click",o);var a={relatedTarget:this};if(n.trigger(t=s.Event("show.bs.dropdown",a)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger(s.Event("shown.bs.dropdown",a))}return!1}},i.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=s(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var n=l(e),i=n.hasClass("open");if(!i&&27!=t.which||i&&27==t.which)return 27==t.which&&n.find(r).trigger("focus"),e.trigger("click");var a=n.find(".dropdown-menu li:not(.disabled):visible a");if(a.length){var o=a.index(t.target);38==t.which&&0<o&&o--,40==t.which&&o<a.length-1&&o++,~o||(o=0),a.eq(o).trigger("focus")}}}};var t=s.fn.dropdown;s.fn.dropdown=function(n){return this.each(function(){var t=s(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new i(this)),"string"==typeof n&&e[n].call(t)})},s.fn.dropdown.Constructor=i,s.fn.dropdown.noConflict=function(){return s.fn.dropdown=t,this},s(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,i.prototype.toggle).on("keydown.bs.dropdown.data-api",r,i.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",i.prototype.keydown)}(jQuery),function(o){function s(t,e){this.options=e,this.$body=o(document.body),this.$element=o(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,o.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}function r(i,a){return this.each(function(){var t=o(this),e=t.data("bs.modal"),n=o.extend({},s.DEFAULTS,t.data(),"object"==typeof i&&i);e||t.data("bs.modal",e=new s(this,n)),"string"==typeof i?e[i](a):n.show&&e.show(a)})}s.VERSION="3.3.7",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(n){var i=this,t=o.Event("show.bs.modal",{relatedTarget:n});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',o.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(t){o(t.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=o.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),t&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var e=o.Event("shown.bs.modal",{relatedTarget:n});t?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):i.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=o.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),o(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),o.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",o.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){o(document).off("focusin.bs.modal").on("focusin.bs.modal",o.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",o.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?o(window).on("resize.bs.modal",o.proxy(this.handleUpdate,this)):o(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=o.support.transition&&n;if(this.$backdrop=o(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",o.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){e.removeBackdrop(),t&&t()};o.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):a()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=o.fn.modal;o.fn.modal=r,o.fn.modal.Constructor=s,o.fn.modal.noConflict=function(){return o.fn.modal=t,this},o(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=o(this),n=e.attr("href"),i=o(e.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=i.data("bs.modal")?"toggle":o.extend({remote:!/#/.test(n)&&n},i.data(),e.data());e.is("a")&&t.preventDefault(),i.one("show.bs.modal",function(t){t.isDefaultPrevented()||i.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(i,a,this)})}(jQuery),function(r){function s(t){this.element=r(t)}function e(n){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new s(this)),"string"==typeof n&&e[n]()})}s.VERSION="3.3.7",s.TRANSITION_DURATION=150,s.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),n=t.data("target");if(n=n||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,""),!t.parent("li").hasClass("active")){var i=e.find(".active:last a"),a=r.Event("hide.bs.tab",{relatedTarget:t[0]}),o=r.Event("show.bs.tab",{relatedTarget:i[0]});if(i.trigger(a),t.trigger(o),!o.isDefaultPrevented()&&!a.isDefaultPrevented()){var s=r(n);this.activate(t.closest("li"),e),this.activate(s,s.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})}}},s.prototype.activate=function(t,e,n){var i=e.find("> .active"),a=n&&r.support.transition&&(i.length&&i.hasClass("fade")||!!e.find("> .fade").length);function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}i.length&&a?i.one("bsTransitionEnd",o).emulateTransitionEnd(s.TRANSITION_DURATION):o(),i.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=s,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};function n(t){t.preventDefault(),e.call(r(this),"show")}r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n),r('[data-toggle="tab-dropdown"]').on("click.bs.tab.data-api",n)}(jQuery);var password=document.getElementById("signup[password]"),confirm_password=document.getElementById("signup[confirm_password]");function validatePassword(){password.value!=confirm_password.value?confirm_password.setCustomValidity("Passwords Don't Match"):confirm_password.setCustomValidity("")}password.onchange=validatePassword,confirm_password.onkeyup=validatePassword,function(){function n(t){if(void 0===t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}var i,e,t,l;function a(t,e,n){i(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}n.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],n.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],n.prototype.scan=function(t){for(var e,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)n=(0,this[(e=a[o]).tagName.toLowerCase()+"ToPath"])(this.parseAttr(e.attributes)),i=this.pathMaker(e,n),e.parentNode.replaceChild(i,e)},n.prototype.lineToPath=function(t){var e={},n=t.x1||0,i=t.y1||0,a=t.x2||0,o=t.y2||0;return e.d="M"+n+","+i+"L"+a+","+o,e},n.prototype.rectToPath=function(t){var e={},n=parseFloat(t.x)||0,i=parseFloat(t.y)||0,a=parseFloat(t.width)||0,o=parseFloat(t.height)||0;if(t.rx||t.ry){var s=parseInt(t.rx,10)||-1,r=parseInt(t.ry,10)||-1;s=Math.min(Math.max(s<0?r:s,0),a/2),r=Math.min(Math.max(r<0?s:r,0),o/2),e.d="M "+(n+s)+","+i+" L "+(n+a-s)+","+i+" A "+s+","+r+",0,0,1,"+(n+a)+","+(i+r)+" L "+(n+a)+","+(i+o-r)+" A "+s+","+r+",0,0,1,"+(n+a-s)+","+(i+o)+" L "+(n+s)+","+(i+o)+" A "+s+","+r+",0,0,1,"+n+","+(i+o-r)+" L "+n+","+(i+r)+" A "+s+","+r+",0,0,1,"+(n+s)+","+i}else e.d="M"+n+" "+i+" L"+(n+a)+" "+i+" L"+(n+a)+" "+(i+o)+" L"+n+" "+(i+o)+" Z";return e},n.prototype.polylineToPath=function(t){var e,n,i={},a=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var o=[];for(e=0;e<a.length;e+=2)o.push(a[e]+","+a[e+1]);a=o}for(n="M"+a[0],e=1;e<a.length;e++)-1!==a[e].indexOf(",")&&(n+="L"+a[e]);return i.d=n,i},n.prototype.polygonToPath=function(t){var e=n.prototype.polylineToPath(t);return e.d+="Z",e},n.prototype.ellipseToPath=function(t){var e={},n=parseFloat(t.rx)||0,i=parseFloat(t.ry)||0,a=parseFloat(t.cx)||0,o=parseFloat(t.cy)||0,s=a-n,r=o,l=parseFloat(a)+parseFloat(n);return e.d="M"+s+","+r+"A"+n+","+i+" 0,1,1 "+l+","+o+"A"+n+","+i+" 0,1,1 "+s+","+o,e},n.prototype.circleToPath=function(t){var e={},n=parseFloat(t.r)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-n,s=a,r=parseFloat(i)+parseFloat(n);return e.d="M"+o+","+s+"A"+n+","+n+" 0,1,1 "+r+","+a+"A"+n+","+n+" 0,1,1 "+o+","+a,e},n.prototype.pathMaker=function(t,e){var n,i,a=document.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)i=t.attributes[n],-1===this.ATTR_WATCH.indexOf(i.name)&&a.setAttribute(i.name,i.value);for(n in e)a.setAttribute(n,e[n]);return a},n.prototype.parseAttr=function(t){for(var e,n={},i=0;i<t.length;i++){if(e=t[i],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");n[e.name]=e.value}return n},a.LINEAR=function(t){return t},a.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},a.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},a.EASE_IN=function(t){return Math.pow(t,3)},a.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(t*(.5*Math.PI)),n=Math.pow(e,1.5),i=Math.pow(1-t,2);return 1-i+(1-Math.abs(Math.cos(n*(2.5*Math.PI))))*i},a.prototype.setElement=function(e,n){var t,i;if(void 0===e)throw new Error('Vivus [constructor]: "element" parameter is required');if(e.constructor===String&&!(e=document.getElementById(e)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=e,n&&n.file){i=this,t=function(){var t=document.createElement("div");t.innerHTML=this.responseText;var e=t.querySelector("svg");if(!e)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+n.file);i.el=e,i.el.setAttribute("width","100%"),i.el.setAttribute("height","100%"),i.parentEl.appendChild(i.el),i.isReady=!0,i.init(),i=null};var a=new window.XMLHttpRequest;return a.addEventListener("load",t),a.open("GET",n.file),void a.send()}switch(e.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=e,this.isReady=!0;break;case window.HTMLObjectElement:i=this,(t=function(t){if(!i.isReady){if(i.el=e.contentDocument&&e.contentDocument.querySelector("svg"),!i.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");i.el&&(e.getAttribute("built-by-vivus")&&(i.parentEl.insertBefore(i.el,e),i.parentEl.removeChild(e),i.el.setAttribute("width","100%"),i.el.setAttribute("height","100%")),i.isReady=!0,i.init(),i=null)}})()||e.addEventListener("load",t);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},a.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if((t=t||{}).type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=l(t.duration,120),this.delay=l(t.delay,null),this.dashGap=l(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||a.LINEAR,this.pathTimingFunction=t.pathTimingFunction||a.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},a.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},a.prototype.mapping=function(){var t,e,n,i,a,o,s,r;for(r=o=s=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)n=e[t],this.isInvisible(n)||(a={el:n,length:Math.ceil(n.getTotalLength())},isNaN(a.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(this.map.push(a),n.style.strokeDasharray=a.length+" "+(a.length+2*this.dashGap),n.style.strokeDashoffset=a.length+this.dashGap,a.length+=this.dashGap,o+=a.length,this.renderPath(t)));for(o=0===o?1:o,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(1<e.length?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(a=this.map[t],this.type){case"delayed":a.startAt=this.delayUnit*t,a.duration=this.duration-this.delay;break;case"oneByOne":a.startAt=s/o*this.duration,a.duration=a.length/o*this.duration;break;case"sync":case"async":case"nsync":a.startAt=0,a.duration=this.duration;break;case"scenario-sync":n=a.el,i=this.parseAttr(n),a.startAt=r+(l(i["data-delay"],this.delayUnit)||0),a.duration=l(i["data-duration"],this.duration),r=void 0!==i["data-async"]?a.startAt:a.startAt+a.duration,this.frameLength=Math.max(this.frameLength,a.startAt+a.duration);break;case"scenario":n=a.el,i=this.parseAttr(n),a.startAt=l(i["data-start"],this.delayUnit)||0,a.duration=l(i["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,a.startAt+a.duration)}s+=a.length,this.frameLength=this.frameLength||this.duration}},a.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=e(function(){t.drawer()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},a.prototype.trace=function(){var t,e,n,i;for(i=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)e=(i-(n=this.map[t]).startAt)/n.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),n.progress!==e&&(n.progress=e,n.el.style.strokeDashoffset=Math.floor(n.length*(1-e)),this.renderPath(t))},a.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],n=e.el.cloneNode(!0);e.el.parentNode.replaceChild(n,e.el),e.el=n}},a.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new n(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},a.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},a.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},a.prototype.reset=function(){return this.setFrameProgress(0)},a.prototype.finish=function(){return this.setFrameProgress(1)},a.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},a.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},a.prototype.stop=function(){return this.handle&&(t(this.handle),this.handle=null),this},a.prototype.destroy=function(){var t,e;for(this.stop(),t=0;t<this.map.length;t++)(e=this.map[t]).el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},a.prototype.isInvisible=function(t){var e,n=t.getAttribute("data-ignore");return null!==n?"false"!==n:!!this.ignoreInvisible&&!(e=t.getBoundingClientRect()).width&&!e.height},a.prototype.parseAttr=function(t){var e,n={};if(t&&t.attributes)for(var i=0;i<t.attributes.length;i++)n[(e=t.attributes[i]).name]=e.value;return n},a.prototype.isInViewport=function(t,e){var n=this.scrollY(),i=n+this.getViewportH(),a=t.getBoundingClientRect(),o=a.height,s=n+a.top;return s+o*(e=e||0)<=i&&n<=s+o},a.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},a.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},i=function(){a.prototype.docElem||(a.prototype.docElem=window.document.documentElement,e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},t=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)})},l=function(t,e){var n=parseInt(t,10);return 0<=n?n:e},"function"==typeof define&&define.amd?define([],function(){return a}):"object"==typeof exports?module.exports=a:window.Vivus=a}(),$(function(){$(document.body).on("changeClass",null,{},function(t,e){}),$('[data-toggle="modal"]').on("click",function(t){var e=$(this).attr("data-target"),n=$(e).find("[data-modal-heading]"),i=$(this).attr("data-modal-heading"),a=$(e).find("[data-modal-heading-small]"),o=$(this).attr("data-modal-heading-small"),s=$(e).find("[data-form-heading]"),r=$(e).find("[data-btn-heading]"),l=$(this).attr("data-btn-heading");n.text(i),a.text(o),s.attr({value:i}),r.text(l)});var e=$(".navbar__hamburger-card"),n=e.data("toggle-nav"),i=e.data("body"),a=e.data("collapse-nav");e.on("click",function(){$(i).toggleClass("is--open-navbar"),$(n).toggleClass("is--open"),$(a).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(t){0==$(t.target).closest(".navbar__block").length&&($(i).removeClass("is--open-navbar"),$(n).removeClass("is--open"),$(a).removeClass("is--open"),e.removeClass("is--active"))});var t=window.location.pathname;$('.navbar__nav a[href="'+t+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+t+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+t+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(t){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(t){t.preventDefault(),t.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(t){$(".azbn__search-input").focus()}),$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var e=$(this),n=$(e.attr("href")).eq(0),i=parseInt(e.attr("data-scrollto-diff"))||0,a=parseInt(e.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:n.offset().top+i},a),$('[data-scrollto="nav-item"]').removeClass("is--active"),e.parent().addClass("is--active")}),$(document.body).on("click",'[data-scrollto="navbar"].is--open .scrollto',{},function(t){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(t.preventDefault(),$('[data-scrollto="humb"]').trigger("click"))}),$(function(){var t=$('[data-slider-slick="slick-header"]'),e=$('[data-slider-slick="slick-gallery"]');t.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!1,autoplay:!0,autoplaySpeed:4e3,fade:!0}),e.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,infinite:!0,prevArrow:'<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',nextArrow:'<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{dots:!1,slidesToShow:1,slidesToScroll:1}}]}),$(".slick-cloned .content-block__preview").removeAttr("data-fancybox"),$(".slick-cloned .card-item__preview").removeAttr("data-fancybox")}),$(window).on("resize",function(t){}).trigger("resize"),$(window).on("scroll",function(t){var e=$(document).scrollTop(),n=$(".navbar__block.is--scroll");n.hasClass("opacity")?e<=200&&n.removeClass("opacity"):200<e&&n.addClass("opacity"),n.hasClass("fixed")?e<=400&&n.removeClass("fixed"):400<e&&n.addClass("fixed"),n.hasClass("scroll-navbar")?e<=500&&n.removeClass("scroll-navbar"):500<e&&n.addClass("scroll-navbar")}).trigger("scroll"),window.onbeforeunload=function(t){$("body").trigger("fecss.window.unload",[t])}});