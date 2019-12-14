"use strict";
window.onload = function(){
	document.body.hidden = false; // show body after page loaded

	let darkTheme = true;
	let rootStyle = document.documentElement.style;
	let themeSwitcher = document.getElementById("theme-switcher");

	let headings = document.querySelectorAll(".my-heading"); // the only 2 headings
	let animateCheckers = [];

	let contactForm = document.getElementById("contact-form");
	


	// add headings onto the list
	headings.forEach(heading => {
		animateCheckers.push(animateChecker(heading, "my-heading-animated"));
	});
	// adding project panels


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

	// theme switcher function
	themeSwitcher.addEventListener("click", ()=>{
		if (darkTheme){
			darkTheme = false;
			rootStyle.setProperty("--primary-color", "#cdcdcd");
			rootStyle.setProperty("--secondary-color", "#f2f2f2");
			rootStyle.setProperty("--tertiary-color", "#ff471a");
			rootStyle.setProperty("--quaternary-color", "#444");
		}
		else {
			darkTheme = true;
			rootStyle.setProperty("--primary-color", "#222");
			rootStyle.setProperty("--secondary-color", "#2d2d2d");
			rootStyle.setProperty("--tertiary-color", "#cf6eff");
			rootStyle.setProperty("--quaternary-color", "#eee");
		}
	});
}

/*

icon web

*/

