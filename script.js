"use strict";
window.onload = function(){
	document.body.hidden = false; // show body after page loaded

	let headings = document.querySelectorAll(".my-heading"); // the only 2 headings

	let animateCheckers = [
		//  project panels, about paragraph, submit button, contact links
	];
	// add headings onto the list
	headings.forEach(heading => {
		animateCheckers.push(animateChecker(heading, "my-heading-animated"));
	});

	// run all animate checkers
	window.onscroll = function(){
		animateCheckers.forEach(f => f());
	}

	function animateChecker(ele, className){
		let animated = false; // closure
		return () => {
			if (animated) return; // stop function if already animated
			if (isNotBelowViewport(ele)){
				ele.classList.add(className);
				animated = true;
			}
		};
	}

	function isNotBelowViewport(ele) {
	    return ele.getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight);
	}
}



