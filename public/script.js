"use strict";
var colorThemes = {
	darkTheme : {
		"--primary-color" : "#222",
		"--secondary-color" : "#2d2d2d",
		"--tertiary-color" : "#cf6eff",
		"--quaternary-color" : "#eee"
	},
	lightTheme : {
		"--primary-color" : "#dfdfdf",
		"--secondary-color" : "#eaeaea",
		"--tertiary-color" : "#ff4d21",
		"--quaternary-color" : "#444"
	}
};

window.onload = function(){
	document.body.hidden = false; // show body after page loaded

	let usingDarkTheme = true,
		rootStyle = document.documentElement.style,
		themeSwitcher = document.getElementById("theme-switcher"),

		headings = document.querySelectorAll(".my-heading"), // the only 2 headings
		skillsContainer = document.getElementById("skills-container"),
		projectsContainer = document.getElementById("projects-container"), // contains project panels
		animateCheckers = [],

		contactForm = document.getElementById("contact-form"),
		submitBtn = document.getElementById("form-submit-btn"),
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

	// Load data.json
	fetch("./public/data.json")
		.then(res => res.json())
		.then(projectsData => {
			console.log("Projects data loaded.");

			// creating all project panel elements
			projectsData.forEach(createProjectPanel);

			// after created all: add animate checkers for them
			document.querySelectorAll(".p-img-div").forEach(ele => {
				animateCheckers.push(animateChecker(ele, "p-img-div-animated"));
			});
			document.querySelectorAll(".p-info-div").forEach(ele => {
				animateCheckers.push(animateChecker(ele, "p-info-div-animated"));
			});

		})
		.catch(err => {
			console.log("ERROR WHILE FETCHING\n", err);
		})
	;


	// add headings animate checkers
	headings.forEach(heading => {
		animateCheckers.push(animateChecker(heading, "my-heading-animated"));
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

	// custom animate checker for skills-container
	animateCheckers.push(() => {
		if (isNotBelowViewport(skillsContainer)){
			// set timeout to animate all skill tags
			const skillTags = document.querySelectorAll("#skills-container > p");
			skillTags.forEach((tag, index) =>{
				setTimeout(() => {
					tag.classList.add("skill-tag-animated");
				}, 200 * index);
			});

			return false;
		}
		return true;
	});


	// theme switcher function
	themeSwitcher.addEventListener("click", ()=>{
		let theme;
		if (usingDarkTheme){
			theme = colorThemes.lightTheme;
			themeSwitcher.innerText = "Theme: Light";
		} else {
			theme = colorThemes.darkTheme;
			themeSwitcher.innerText = "Theme: Dark";
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
			submitBtn.blur();	
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

	function createProjectPanel(data){
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
			let targetAttribute = (b.noNewTab) ? "" : `target="_blank"`;
			pButtons += `
				<a class="btn btn-custom" href="${b.link}" ${targetAttribute}>
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
	}
}

function readMore(){
	// hide the Read More button
	document.getElementById("read-more-btn").hidden = true;
	// expand the collapsed div
	document.getElementById("collapsable-div").classList.remove("collapsed-div");
}

/*
	Each project data structure. add "noNewTab" : true to button to keep in same tab

	{
		"imageSrc": "./project-images/",
		"name": "",
		"description": "",
		"tags": ["", ""],
		"buttons": [
			{
				"text": "View Live",
				"link": ""
			},
			{
				"text": "Github",
				"link": ""
			}
		]
	},
*/