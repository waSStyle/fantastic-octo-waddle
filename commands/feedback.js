const config = require("../config.json");

module.exports = {
	commands: [
		"feedback",
		"bug",
		"bugs",
		"feature",
		"submit"
	],
	description: "Submit a bug or a feature request to the developers.",
	usage: "feedback",
	category: "Information",
	hidden: true,
	execute: (bot, r, msg) => {
		msg.channel.send({
			embed: {
				title: "Feedback",
				color: 3447003,
				description: "To submit feedback, you can fill out the form using the link below and click 'Submit'.",
				fields: [
					{
						name: "Website Form",
						value: config.links.contact,
						inline: true
					}
				]
			}
		});
	}
};