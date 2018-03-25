
module.exports = {
	commands: [
		"trials"
	],
	description: "Eternal Labyrinth Trials",
	usage: "trials",
	category: "Path of Exile",
	hidden: false,
	execute: (bot, r, msg) => {

		msg.channel.send({
			embed: {
				title: 'Eternal Labyrinth Trials',
				color: 3447003,
				image: {
					url: 'https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/2/2c/Endgame_Trial_Plaque_2.jpg'
				}
			}
		});
	}
};