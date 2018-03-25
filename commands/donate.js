const config = require("../config.json");

module.exports = {
	commands: [
		"donate",
		"patreon",
		"paypal"
	],
	usage: "donate",
	description: "Get the donation links to support the creator.",
	category: "Information",
	hidden: true,
	execute: (bot, r, msg) => {
		msg.channel.send({
			embed: {
				title: "Donation Links",
				color: 3066993,
				description: "Donating to PassTheMayo will help pay for the VPS that keeps the bots alive.",
				fields: [
					{
						name: "Patreon",
						value: config.links.patreon,
						inline: true
					},
					{
						name: "PayPal",
						value: config.links.paypal,
						inline: true
					}
				]
			}
		});
	}
};
