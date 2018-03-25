const snekfetch = require("snekfetch");
const config = require("../config.json");

module.exports = (bot) => {
	snekfetch.post("https://botlist.space/api/bots/" + bot.user.id + "/").set("Authorization", config.api_keys.bot_list["botlist.space"]).send({
		server_count: bot.guilds.size
	}).catch((error) => {
		console.error("Failed to post server count to botlist.space.", error.message);
	});
	snekfetch.post("https://ls.terminal.ink/api/v1/bots/" + bot.user.id + "/").set("Authorization", config.api_keys.bot_list["ls.terminal.ink"]).send({
		server_count: bot.guilds.size
	}).catch((error) => {
		console.error("Failed to post server count to ls.terminal.ink.", error.message);
	});
};
