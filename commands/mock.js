const aids = require("aids");

module.exports = {
	commands: [
		"mock"
	],
	description: "Capitalize every other letter.",
	usage: "mock <text>",
	category: "Fun",
	hidden: false,
	execute: (bot, r, msg, args) => {
		if (args.length > 0) {
			const text = aids(args.join(" "));
			msg.channel.send(text).then(() => {
				msg.delete().catch(() => {});
			});
		} else {
			msg.channel.send({
				embed: {
					title: "Error!",
					color: 0xE50000,
					description: "Missing `<text>` option."
				}
			});
		}
	}
};