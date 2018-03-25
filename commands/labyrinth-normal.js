var moment = require("moment"),
	day = moment().format("DD"),
 	month = moment().format("MM"),
 	monthfull = moment().format("MMMM"),
 	year = moment().format("YYYY"),
	datefull = day + ' ' + monthfull + ' ' + year,
	poelab = ('http://www.poelab.com/wp-content/uploads/');

module.exports = {
	commands: [
		"nlab"
	],
	description: "Normal Labyrinth of the day.",
	usage: "nlab",
	category: "Path of Exile",
	hidden: false,
	execute: (bot, r, msg) => {

		const image = (poelab + year + '/' + month + '/' + year + '-' + month + '-' + day + '_normal.jpg');

		msg.channel.send({
			embed: {
				title: 'Normal Labyrinth',
				color: 3447003,
				description: '[Lab Compass File](http://www.poelab.com/wp-content/labfiles/normal.json)',
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