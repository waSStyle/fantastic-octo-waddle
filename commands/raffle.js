module.exports = {
	commands: [
		"raffle"
	],
	description: "Pick a random user from the server's member list.",
	usage: "raffle",
	category: "Utility",
	hidden: false,
	execute: (bot, r, msg) => {
		if (msg.channel.type === "dm") return msg.channel.send({
			embed: {
				title: "Error!",
				color: 0xE50000,
				description: "This command cannot be used in a Direct Message."
			}
		});
		msg.guild.fetchMembers().then((guild) => {
			const user = guild.members.filter((u) => !u.user.bot).random();
			msg.channel.send({
				embed: {
					title: "Random User",
					color: 3447003,
					description: user.user.tag
				}
			});
		});
	}
};