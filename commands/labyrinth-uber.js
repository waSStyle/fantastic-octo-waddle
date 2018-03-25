var moment = require("moment"),
	day = moment().format("DD"),
	month = moment().format("MM"),
	monthfull = moment().format("MMMM"),
	year = moment().format("YYYY"),
	datefull = day + ' ' + monthfull + ' ' + year,
	poelab = ('http://www.poelab.com/wp-content/uploads/');

module.exports = {
	commands: [
		"ulab"
	],
	description: "Uber Labyrinth of the day.",
	usage: "ulab",
	category: "Path of Exile",
	hidden: false,
	execute: (bot, r, msg) => {

		const image = (poelab + year + '/' + month + '/' + year + '-' + month + '-' + day + '_uber.jpg');

		msg.channel.send({
			embed: {
				title: 'Uber Labyrinth',
				color: 3447003,
				description: '[Lab Compass File](http://www.poelab.com/wp-content/labfiles/uber.json)',
				image: {
					url: image
				},
				footer: {
					text: datefull
				}
			}
		});
	}
};