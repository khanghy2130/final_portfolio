"use strict";
window.onload = function(){
	document.body.hidden = false; // show body after page loaded

	let usingDarkTheme = true,
		rootStyle = document.documentElement.style,
		themeSwitcher = document.getElementById("theme-switcher"),

		headings = document.querySelectorAll(".my-heading"), // the only 2 headings
		projectsContainer = document.getElementById("projects-container"), // contains project panels
		animateCheckers = [],

		contactForm = document.getElementById("contact-form"),
		contactFormExpanded = false, // click to expand then click to submit

		inputsContainer = document.getElementById("inputs-container"),
		emailInput = document.getElementById("email-input"),
		messageInput = document.getElementById("message-input"),
		emailInputUnderline = document.getElementById("email-input-underline"),
		messageInputUnderline = document.getElementById("message-input-underline");


	// show message submission status
	const urlParams = new URLSearchParams(window.location.search);
	const messageStatus = urlParams.get('messageStatus');
	if (messageStatus === "failure"){
		document.getElementById("message-status-failure").hidden = false;
	} else if (messageStatus === "success"){
		document.getElementById("message-status-success").hidden = false;
	}

	// creating project panel elements
	projectsData.forEach(data => {
		// creating strings of HTML then add them
		let imgDiv = `
			<div class="p-img-div">
				<img src="${data.imageSrc}">
			</div>
		`;
		let pName = `<h3 class="p-name">${data.name}</h3>`;
		let pDescription = `<p class="p-description">${data.description}</p>`;

		let pTags = "";
		data.tags.forEach(tag => {
			pTags += `<p>${tag}</p>`;
		});
		// adding parent element
		pTags = `
			<div class="p-tags-div d-flex flex-wrap align-items-start">
				${pTags}
			</div>
		`;

		let pButtons = "";
		data.buttons.forEach(b => {
			pButtons += `
				<a class="btn btn-custom" target="_blank" href="${b.link}">
					${b.text}
				</a>
			`;
		});
		// adding parent element
		pButtons = `
			<div class="p-buttons-div">
				${pButtons}
			</div>
		`;
		
		// adding project panel
		projectsContainer.innerHTML += `
			<div class="p-panel row d-flex">
				${imgDiv}
				<div class="p-info-div">
					${pName}
					${pTags}
					${pDescription}
					${pButtons}
				</div>
			</div>
		`;
	});

	// add headings animate checkers
	headings.forEach(heading => {
		animateCheckers.push(animateChecker(heading, "my-heading-animated"));
	});
	// adding project panels animate checkers (img-div's and info-div's)
	document.querySelectorAll(".p-img-div").forEach(ele => {
		animateCheckers.push(animateChecker(ele, "p-img-div-animated"));
	});
	document.querySelectorAll(".p-info-div").forEach(ele => {
		animateCheckers.push(animateChecker(ele, "p-info-div-animated"));
	});

	// run all animate checkers when scroll
	window.onscroll = function(){
		// filter out the ones which return false as they are animated
		animateCheckers = animateCheckers.filter(checker => checker() === true);
	};

	function animateChecker(ele, className){
		return () => {
			if (isNotBelowViewport(ele)){
				ele.classList.add(className);
				return false;
			}
			return true;
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

			// expanding the message form
			contactFormExpanded = true;
			inputsContainer.classList.remove("hidden-inputs-container");
			emailInput.disabled = false;
			messageInput.disabled = false;
			emailInput.focus();	
		}

		/*
		// disable submitting
		else {
			e.preventDefault();
			console.log("submitted");
		}
		*/
		
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
