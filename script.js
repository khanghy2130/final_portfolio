"use strict";
window.onload = function(){
	document.body.hidden = false; // show body after page loaded

	let usingDarkTheme = true,
		rootStyle = document.documentElement.style,
		themeSwitcher = document.getElementById("theme-switcher"),

		headings = document.querySelectorAll(".my-heading"), // the only 2 headings
		animateCheckers = [],

		contactForm = document.getElementById("contact-form"),
		contactFormExpanded = false, // click to expand then click to submit

		inputsContainer = document.getElementById("inputs-container"),
		emailInput = document.getElementById("email-input"),
		messageInput = document.getElementById("message-input"),
		emailInputUnderline = document.getElementById("email-input-underline"),
		messageInputUnderline = document.getElementById("message-input-underline");

	// add headings animate checkers
	headings.forEach(heading => {
		animateCheckers.push(animateChecker(heading, "my-heading-animated"));
	});
	// adding project panels animate checkers


	// run all animate checkers
	window.onscroll = function(){animateCheckers.forEach(f => f());};

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
		let theme;
		if (usingDarkTheme){
			theme = colorThemes.lightTheme;
		} else {
			theme = colorThemes.darkTheme;
		}

		usingDarkTheme = !usingDarkTheme;
		for (let key in theme){
			rootStyle.setProperty(key, theme[key]);
		}
	});

	// Submit Form button
	contactForm.addEventListener("submit", e => {
		// show the form (one time action)
		if (!contactFormExpanded){
			e.preventDefault();
			contactFormExpanded = true;

			inputsContainer.classList.remove("hidden-inputs-container");
			emailInput.disabled = false;
			messageInput.disabled = false;
			emailInput.focus();	
		}

		// submitting/////////////
		else {
			e.preventDefault();
			console.log("submitted");
		}
		
	});

	// Underlines fill on focus
	emailInput.addEventListener("focus", e => {
		emailInputUnderline.classList.add("focus-underline");
	});
	emailInput.addEventListener("blur", e => {
		emailInputUnderline.classList.remove("focus-underline");
	});
	messageInput.addEventListener("focus", e => {
		messageInputUnderline.classList.add("focus-underline");
	});
	messageInput.addEventListener("blur", e => {
		messageInputUnderline.classList.remove("focus-underline");
	});
}

/*

icon web

make your own mailer!!!
*/

