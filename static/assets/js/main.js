/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).mediumZoom=t()}(this,(function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},i=function(e){try{return Array.isArray(e)?e.filter(t):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(t):o(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},r=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},d=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,a=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+m+"px",d.style.left=n+a+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},m=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=window.Promise||function(e){function t(){}e(t,t)},u=function(e){var t=e.target;t!==N?-1!==O.indexOf(t)&&w({target:t}):E()},s=function(){if(!A&&T.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(k-e)>S.scrollOffset&&setTimeout(E,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||E()},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;if(t.background&&(N.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=e({},S.container,t.container)),t.template){var i=o(t.template)?t.template:document.querySelector(t.template);n.template=i}return S=e({},S,n),O.forEach((function(e){e.dispatchEvent(m("medium-zoom:update",{detail:{zoom:j}}))})),j},g=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},S,o))},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,i(t))}),[]);return n.filter((function(e){return-1===O.indexOf(e)})).forEach((function(e){O.push(e),e.classList.add("medium-zoom-image")})),x.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),j},h=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];T.zoomed&&E();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,i(t))}),[]):O;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(m("medium-zoom:detach",{detail:{zoom:j}}))})),O=O.filter((function(e){return-1===n.indexOf(e)})),j},z=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return O.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),x.push({type:"medium-zoom:"+e,listener:t,options:o}),j},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return O.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),x=x.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),j},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.target,r=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},i=void 0,r=void 0;if(S.container)if(S.container instanceof Object)i=(t=e({},t,S.container)).width-t.left-t.right-2*S.margin,r=t.height-t.top-t.bottom-2*S.margin;else{var d=(o(S.container)?S.container:document.querySelector(S.container)).getBoundingClientRect(),m=d.width,a=d.height,l=d.left,c=d.top;t=e({},t,{width:m,height:a,left:l,top:c})}i=i||t.width-2*S.margin,r=r||t.height-2*S.margin;var u=T.zoomedHd||T.original,s=n(u)?i:u.naturalWidth||i,f=n(u)?r:u.naturalHeight||r,p=u.getBoundingClientRect(),g=p.top,v=p.left,h=p.width,z=p.height,y=Math.min(s,i)/h,b=Math.min(f,r)/z,E=Math.min(y,b),w="scale("+E+") translate3d("+((i-h)/2-v+S.margin+t.left)/E+"px, "+((r-z)/2-g+S.margin+t.top)/E+"px, 0)";T.zoomed.style.transform=w,T.zoomedHd&&(T.zoomedHd.style.transform=w)};return new c((function(e){if(i&&-1===O.indexOf(i))e(j);else{if(T.zoomed)e(j);else{if(i)T.original=i;else{if(!(O.length>0))return void e(j);var t=O;T.original=t[0]}if(T.original.dispatchEvent(m("medium-zoom:open",{detail:{zoom:j}})),k=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,T.zoomed=d(T.original),document.body.appendChild(N),S.template){var n=o(S.template)?S.template:document.querySelector(S.template);T.template=document.createElement("div"),T.template.appendChild(n.content.cloneNode(!0)),document.body.appendChild(T.template)}if(document.body.appendChild(T.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),T.original.classList.add("medium-zoom-image--hidden"),T.zoomed.classList.add("medium-zoom-image--opened"),T.zoomed.addEventListener("click",E),T.zoomed.addEventListener("transitionend",(function t(){A=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:opened",{detail:{zoom:j}})),e(j)})),T.original.getAttribute("data-zoom-src")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("srcset"),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-src"),T.zoomedHd.onerror=function(){clearInterval(a),console.warn("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,r()};var a=setInterval((function(){T.zoomedHd.complete&&(clearInterval(a),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",E),document.body.appendChild(T.zoomedHd),r())}),10)}else if(T.original.hasAttribute("srcset")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.removeAttribute("loading");var l=T.zoomedHd.addEventListener("load",(function(){T.zoomedHd.removeEventListener("load",l),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",E),document.body.appendChild(T.zoomedHd),r()}))}else r()}}}))},E=function(){return new c((function(e){if(!A&&T.original){A=!0,document.body.classList.remove("medium-zoom--opened"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform=""),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.original.dispatchEvent(m("medium-zoom:close",{detail:{zoom:j}})),T.zoomed.addEventListener("transitionend",(function t(){T.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(N),T.zoomed.classList.remove("medium-zoom-image--opened"),T.template&&document.body.removeChild(T.template),A=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:closed",{detail:{zoom:j}})),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null,e(j)}))}else e(j)}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return T.original?E():b({target:t})},L=function(){return S},H=function(){return O},C=function(){return T.original},O=[],x=[],A=!1,k=0,S=l,T={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(a)?S=a:(a||"string"==typeof a)&&v(a),S=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},S);var N=r(S.background);document.addEventListener("click",u),document.addEventListener("keyup",f),document.addEventListener("scroll",s),window.addEventListener("resize",E);var j={open:b,close:E,toggle:w,update:p,clone:g,attach:v,detach:h,on:z,off:y,getOptions:L,getImages:H,getZoomedImage:C};return j}}));

window.onload = function(){

	

	/*BLING JS*/

	window.$ = document.querySelectorAll.bind(document);

	Node.prototype.on = window.on = function (name, fn) {
	  this.addEventListener(name, fn);
	}

	NodeList.prototype.__proto__ = Array.prototype;

	NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
	  this.forEach(function (elem, i) {
	    elem.on(name, fn);
	  });
	}

	/*FIXED FORM*/
	// let elements = $('.fixed-form')[0];
	// if(elements){
	// 	Stickyfill.add(elements);
	// }


	/* #EFFECTS */

	 
	/* (1) NAVIGATION MENU */


	let menu    = $("#menu")[0];
	let sidebar = $('.sidebar')[0];
	let exitBar    = $(".sidebar-exit")[0];
	let bodyOverlay = $('.body-overlay')[0];

	menu.addEventListener('click', function(){
		gsap.to(sidebar, 0.4, {right:0, display:"block", ease:"power2.out"})
		gsap.to(bodyOverlay, 0.3, {opacity:1, display:"block", ease:"power2.out"})
	});

	[exitBar, bodyOverlay].forEach((el)=>{
			el.addEventListener('click', function(){
			gsap.to(sidebar, 0.4, {right:"-50%", display:"none", ease:"power1.in"})
			gsap.to(bodyOverlay, 0.3, {opacity:0, display:"none", ease:"power1.in"})
		});
	})





	/* (2) SCROLL BACK TO THE TOP + PROGRESS BAR */	
	
	var progressPath = document.querySelector('.progress-wrap path');
	var pathLength = progressPath.getTotalLength();
			progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
			progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';	

	// updating page scroll progress  
	var body = document.body,
    	html = document.documentElement;
	var offset = 50;


 	var updateProgress = function () {
	var scroll = window.pageYOffset || 
		           body.scrollTop ||
    			     html.scrollTop || 0;

	var height = (Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight)) - window.innerHeight ;
		

	var progress = pathLength - ((scroll * (pathLength / height)));
		progressPath.style.strokeDashoffset = progress;
	}

	updateProgress();

	window.addEventListener('scroll', updateProgress);

	var duration = 550;
	window.addEventListener('scroll', function() {
		if (this.scrollY > offset) {
			$('.progress-wrap')[0].classList.add('is-active-progress');
		} else {
			$('.progress-wrap')[0].classList.remove('is-active-progress');
		}
	});				

	$('.progress-wrap')[0].on('click', function () {
	   scrollTo(document.scrollingElement);   
	});

function scrollTo(element, to = 0, duration= 1000) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 1000;
    let currentTime = 0;

    const animateScroll = (() => {
      console.log(element.scrollTop)

      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    });

    animateScroll();
  };

  // progress bar transition 
  Math.easeInOutQuad = function (t, b, c, d) {

    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };


/* Multi Step Form */

var question = $(".question")[0];
var questionval;
var tags = $(".tags")[0];
var tagsval;
var yourquestion = $(".yourquestion");
var yourtags = $(".yourtags");
var formContainer = $('.form-container');
var formContainerFooter = $('.form-container-footer')[0]
let mq1;
let mq2;

var getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;

};


	// change the btn class name
	$(".first").forEach((el)=>{
		el.addEventListener('click', function (event) {
					
					if(getSiblings(el)[0].value.length < 3){ // name input
						 alert('Use a correct name!')
						 event.preventDefault();
						 return false;
					} 

	  	    // Stop the button from performing it's default task
				  event.preventDefault();

		      mq1 = window.matchMedia( "(max-width: 769px)" );
		      mq2 = window.matchMedia( "(max-width: 1200px)");
		      mq3 = window.matchMedia( "(max-width: 990px)");
		   		if(mq1.matches){
							// fixed buttons 2 on mobile
		      		if(el.className.includes("btn-2")){
					      formContainer[1].classList.remove("is-third-dot", "initial-active-area");
				  	    formContainer[1].classList.add("is-mobile-dot", "second-active-area");

		      		}else if (el.className.includes("btn-1")){

							// header buttons 2 on mobile
					      formContainer[0].classList.remove("is-third-dot", "initial-active-area");
					      formContainer[0].classList.add("is-mobile-dot", "second-active-area");
		      		
		      		}else if (el.className.includes("btn-4")){

							// footer button on mobile
							// if there is only the footer opt in
						      formContainerFooter.classList.remove("is-third-dot", "initial-active-area");
					  	    formContainerFooter.classList.add("is-mobile-dot", "second-active-area");	      			
		      		}
		      }else{
							// fixed buttons 2 on desktop
		      		if(el.className.includes("btn-2")){
					      formContainer[1].classList.remove("is-third-dot", "initial-active-area");
				  	    formContainer[1].classList.add("is-second-btn-dot", "second-active-area");

							// fixed buttons 1 on desktop
		      		}else if (el.className.includes("btn-1")){
					      formContainer[0].classList.remove("is-third-dot", "initial-active-area");
				  	    formContainer[0].classList.add("is-second-dot", "second-active-area");	      			
		      		
	 	      		}else if (el.className.includes("btn-4")){
					      formContainerFooter.classList.remove("is-third-dot", "initial-active-area");
				  	    formContainerFooter.classList.add("is-second-dot", "second-active-area");	      			
		      		}

		      		else if (el.className.includes("btn-3")){
		      			if(mq2.matches){
							      formContainer[0].classList.remove("is-third-dot", "initial-active-area");
						  	    formContainer[0].classList.add("is-second-lg-btn-dot", "second-active-area");
		      			}

		      			if(mq3.matches){
						      formContainer[0].classList.remove("is-third-dot", "initial-active-area");
					  	    formContainer[0].classList.add("is-second-sm-btn-dot", "second-active-area");
		      			}

					      formContainer[0].classList.remove("is-third-dot", "initial-active-area");
				  	    formContainer[0].classList.add("is-second-btn-dot", "second-active-area");	      			
		      		}
		      }
		      if(mq2.matches){
					      formContainer[1].classList.remove("is-third-dot", "initial-active-area");
				  	    formContainer[1].classList.add("is-second-lg-btn-dot", "second-active-area");

		      }
		      if(mq3.matches){
					      formContainer[1].classList.remove("is-third-dot", "initial-active-area");
				  	    formContainer[1].classList.add("is-second-sm-btn-dot", "second-active-area");
		      }
			})
	});



/* POST SECTION NAVIGATION */

	if($('.content-table')[0]){
		let table = $('.content-table')[0];

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const id = entry.target.getAttribute('id');
				if (entry.intersectionRatio > 0) {
					document.querySelector(`.section-nav li a[href="#${id}"]`).parentElement.classList.add('is-active');
				} else {
					document.querySelector(`.section-nav li a[href="#${id}"]`).parentElement.classList.remove('is-active');
				}
			});
		});

		// Track all h2s that have an `id` applied
		document.querySelectorAll('h2[id]').forEach((h2) => {
			observer.observe(h2);
		});
	}


	/* TEXT REVEAL AND SKEW EFFECT */

	gsap.registerPlugin(ScrollTrigger, SplitText);
	
	if($('.skew')[0]){ // if there is an image to apply a skew effect on:

		let tlReveal, childSplit, parentSplit;
	  gsap.set(".skew", {transformOrigin: "center center", force3D: true});

	}
	  var proxy = { skew: 0 },
	    skewSetter = gsap.quickSetter(".skew", "skewY", "deg"), // fast
	    clamp = gsap.utils.clamp(-2, 2); // don't let the skew go beyond 20 degrees. 


		$('.reveal-text').forEach((el)=>{
			 childSplit = new SplitText(el, {
			  type: "lines",
			  linesClass: "split-child",
		 	});
			
			 parentSplit = new SplitText(el, {
			  type: "words lines",
			  linesClass: "split-parent",
		 	});

			 tlReveal = gsap.timeline({
				scrollTrigger:{
					trigger:el,
					start:"top center",
					onUpdate: (self) => {
				      var skew = clamp(self.getVelocity() / -300);
				      if (Math.abs(skew) > Math.abs(proxy.skew)) {
				        proxy.skew = skew;
				        gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
				      }
					}
				}
			})
			.from([childSplit.lines], { duration: 1.5, yPercent: 100, ease: "power4", stagger: 0.1 })	
		});

	/* IMAGE REVEAL EFFECT */

	let revealContainers = document.querySelectorAll(".reveal-image-container");

	revealContainers.forEach(container => {
	  let wrapper = container.querySelectorAll(".reveal-image");
	  let image = container.querySelectorAll("img");
	  let tl = gsap.timeline({
	      scrollTrigger: {
	        trigger: container,
	        start: 'top 50%',
	      },
	    });
	  
	  tl.set(wrapper, { autoAlpha: 1});
	    tl.from(wrapper, 1, {
	      xPercent: -100,
	      ease: Power2.out,
	    });
	    tl.from(image, 1, {
	      xPercent: 100,
	      delay: -1,
	      ease: Power2.out,
	    });
	});


}