const snekfetch = require('snekfetch');

module.exports = {
	commands: [
		"dadjoke"
    ],
    description: "Get a really bad DadJoke.",
	usage: "dadjoke",
	category: "Fun",
    hidden: false,
    execute: (bot, r, msg) => {
        snekfetch.get('https://icanhazdadjoke.com/slack').then((res) => {
            joke = JSON.parse(res.text);
            msg.channel.send({
                embed: {
                    title: ":confounded: Here's an awful dad joke",
                    color: 3447003,
                    description: joke.attachments[0].fallback
                }
            })
        }).catch((error) => {
            m.edit({
                embed: {
                    title: "Error!",
                    color: 0xE50000,
                    description: "An unexpected error occured while trying to fetch a random dad joke."
                }
            });
            console.error("Failed to get a random dad joke.", error.message);
        });
}
};