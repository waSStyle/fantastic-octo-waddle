const updateBotLists = require("../functions/post-server-count.js");
const config = require("../config.json");
const updatePresence = require("../functions/update-presence.js");

module.exports = (bot) => {
	bot.on("guildCreate", (server) => {
		server.owner.send("Hello, there! Either you or one of your admins added me to your server, but you are the most relavent person I can send this to.\n\nTo use the bot, use `" + config.prefix + "help` to view a list of commands.\n\nSorry to ask this of you, but right now, I am currently not getting enough funding to support hosting costs. If you are a true supporter, then please consider donating at <https://patreon.com/passthemayo>.\n\nThank you!")
		updateBotLists(bot);
		updatePresence(bot);
		server.data = {};
		server.data.prefix = config.prefix;
	});
};