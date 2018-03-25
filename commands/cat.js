const snekfetch = require("snekfetch");

module.exports = {
	commands: [
		"cat"
	],
	description: "Get a random picture of a cat.",
	usage: "cat",
	category: "Fun",
	hidden: false,
	execute: (bot, r, msg) => {
			snekfetch.get("http://random.cat/meow").then((body) => {
				image = body.body.file;
				msg.channel.send({
					embed: {
						title: 'Meow! :cat:',
						color: 3447003,
						image: {
							url: image
						}
					}
				})
			}).catch((error) => {
				m.edit({
					embed: {
						title: "Error!",
						color: 0xE50000,
						description: "An unexpected error occured while trying to fetch a random cat."
					}
				});
				console.error("Failed to get a random cat picture.", error.message);
			});
	}
};