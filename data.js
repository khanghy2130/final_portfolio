/*



*/
"use strict";
var colorThemes = {
	darkTheme : {
		"--primary-color" : "#222",
		"--secondary-color" : "#2d2d2d",
		"--tertiary-color" : "#cf6eff",
		"--quaternary-color" : "#eee"
	},
	lightTheme : {
		"--primary-color" : "#cfcfcf",
		"--secondary-color" : "#eaeaea",
		"--tertiary-color" : "#ff471a",
		"--quaternary-color" : "#444"
	}
};

/*
	Each project data structure
	{
		imageSrc: "",
		name: "",
		description: "",
		tags: ["", ""],
		buttons: [
			{
				text: "",
				link: ""
			},
			{
				text: "",
				link: ""
			}
		]
	},
*/

var projectsData = [
	{
		imageSrc: "./project-images/spread.png",
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
		imageSrc: "./project-images/spread.png",
		name: "Chat App",
		description: "A chat app where users can create and join private or public rooms.",
		tags: ["Node.js", "Express.js", "Socket.io"],
		buttons: [
			{
				text: "View Live",
				link: "project02-chatapp.herokuapp.com"
			},
			{
				text: "Github",
				link: "https://github.com/khanghy2130/chatapp"
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
	
];