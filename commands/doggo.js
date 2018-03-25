const snekfetch = require("snekfetch");

module.exports = {
	commands: [
		"dog",
		"doggo"
	],
	description: "Get a random picture of a doggo.",
	usage: "dog",
	category: "Fun",
	hidden: false,
	execute: (bot, r, msg) => {
			snekfetch.get("https://api.thedogapi.co.uk/v2/dog.php?limit=1").then((res) => {
				image = JSON.parse(res.text);
				msg.channel.send({
					embed: {
						title: 'Woof! :dog:',
						color: 3447003,
						image: {
							url: image.data[0].url
						}
					}
				})
			}).catch((error) => {
				m.edit({
					embed: {
						title: "Error!",
						color: 0xE50000,
						description: "An unexpected error occured while trying to fetch a random doggo."
					}
				});
				console.error("Failed to get a random dog picture.", error.message);
			});
	}
};