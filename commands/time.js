var moment = require("moment"),
	day = moment().format("DD"),
	month = moment().format("MM"),
	year = moment().format("YYYY"),
	time = moment().format("HH:mm:ss"),
	current = day + "/" + month + "/" + year + ", " + time;

module.exports = {
	commands: [
		"serverdate"
	],
	description: "Check server date & time.",
	usage: "servertime",
	category: "Developers",
	hidden: true,
	execute: (bot, r, msg) => {
		msg.channel.send({
			embed: {
				title: 'Current Server Date & Time :watch:',
				description: current,
				color: 3447003
			}
		});
	}
};