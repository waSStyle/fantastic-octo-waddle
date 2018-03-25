const snekfetch = require("snekfetch");

module.exports = {
	commands: [
		"meme",
		"memes",
		"dankmemes"
	],
	usage: "meme",
	description: "Returns a random meme from reddit's /r/DankMemes.",
	category: "Fun",
	hidden: false,
	execute: (bot, r, msg) => {
		snekfetch.get("https://www.reddit.com/r/dankmemes/top/.json").then((body) => {
			if (body.body.data && body.body.data.children && body.body.data.children.length > 0) {
				const meme = body.body.data.children[Math.floor(Math.random() * body.body.data.children.length)];
				msg.channel.send({
					embed: {
						title: meme.title,
						color: 3447003,
						image: {
							url: meme.data.url
						}
					}
				});
			} else {
				msg.channel.send({
					embed: {
						title: "Error!",
						color: 0xE50000,
						description: "I couldn't find any fresh memes for you."
					}
				});
			}
		}).catch((error) => {
			msg.channel.send({
				embed: {
					title: "Error!",
					color: 0xE50000,
					description: "An unexpected error occured while getting a random meme."
				}
			});
			console.error("Failed to get a random Reddit meme.", error.message);
		});
	}
};