const snekfetch = require("snekfetch");

module.exports = {
	commands: [
		"catfact"
	],
	description: "Get a random fact about cats.",
	usage: "catfact",
	category: "Fun",
	hidden: false,
	execute: (bot, r, msg) => {
			snekfetch.get("https://catfact.ninja/fact").then((res) => {
				fact = res.body.fact;
				msg.channel.send({
					embed: {
						title: "Here's an interesting fact about cats :cat:",
						color: 3447003,
						description: fact
					}
				})
			}).catch((error) => {
				m.edit({
					embed: {
						title: "Error!",
						color: 0xE50000,
						description: "An unexpected error occured while trying to fetch a random cat fact."
					}
				});
				console.error("Failed to get a random cat fact.", error.message);
			});
	}
};