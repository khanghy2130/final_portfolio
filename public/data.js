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

/*
	Each project data structure. add noNewTab : true to button to keep in same tab
	{
		imageSrc: "./project-images/",
		name: "",
		description: "",
		tags: ["", ""],
		buttons: [
			{
				text: "View Live",
				link: ""
			},
			{
				text: "Github",
				link: ""
			}
		]
	},
*/

var projectsData = [
	{
		imageSrc: "./project-images/explore.png",
		name: "Explore",
		description: "A place for people to share discoveries and comment on others.",
		tags: ["Node.js", "Express.js", "MongoDB", "Passport.js", "EJS", "Moment.js", "Bootstrap"],
		buttons: [
			{
				text: "View Live",
				link: "http://project01-explore.herokuapp.com"
			},
			{
				text: "Github",
				link: "https://github.com/khanghy2130/Explore"
			}
		]
	},
	{
		imageSrc: "./project-images/chatapp.png",
		name: "Chat App",
		description: "A chat app where users can create and join private or public rooms.",
		tags: ["Node.js", "Express.js", "Socket.io"],
		buttons: [
			{
				text: "View Live",
				link: "http://project02-chatapp.herokuapp.com"
			},
			{
				text: "Github",
				link: "https://github.com/khanghy2130/chatapp"
			}
		]
	},
	{
		imageSrc: "./project-images/mailer.png",
		name: "Mailer",
		description: "This server receives message submissions from this portfolio, then it sends the details to my inbox.",
		tags: ["Node.js", "Express.js", "Nodemailer"],
		buttons: [
			{
				text: "Send Message",
				link: "#contact-form",
				noNewTab : true
			},
			{
				text: "Github",
				link: "https://github.com/khanghy2130/mailer"
			}
		]
	},


	{
		imageSrc: "./project-images/spread.png",
		name: "Spread",
		description: "This program takes in user inputs and procedurally generates tiles. The process is fully visualized.",
		tags: ["p5.js"],
		buttons: [
			{
				text: "View Live",
				link: "https://khanghy2130.github.io/Spread"
			},
			{
				text: "Github",
				link: "https://github.com/khanghy2130/Spread"
			}
		]
	},
	{
		imageSrc: "./project-images/rotatic.png",
		name: "Rotatic",
		description: "An unique puzzle game with in-game level editor. Featuring intriguing mechanism and smooth animations.",
		tags: ["p5.js"],
		buttons: [
			{
				text: "View Live",
				link: "https://khanghy2130.github.io/Rotatic"
			},
			{
				text: "Github",
				link: "https://github.com/khanghy2130/Rotatic"
			}
		]
	},
	{
		imageSrc: "./project-images/more-projects.png",
		name: "Extra projects",
		description: "Explore more projects I did under the name of Logix Indie, known for creating randomized puzzles.",
		tags: ["jQuery", "Unity", "GIMP", "processing.js", "App Inventor", "App Lab"],
		buttons: [
			{
				text: "Explore More",
				link: "https://khanghy2130.github.io"
			},
		]
	}
];