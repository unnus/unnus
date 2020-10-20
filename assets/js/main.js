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
	let elements = $('.fixed-form')[0];
	if(elements){
		Stickyfill.add(elements);
	}


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
	   scrollTo(document.documentElement);   
	});

function scrollTo(element, to = 0, duration= 1000) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 1000;
    let currentTime = 0;

    const animateScroll = (() => {

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

		// Track all sections that have an `id` applied
		document.querySelectorAll('h2[id]').forEach((section) => {
			observer.observe(section);
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