const snekfetch = require("snekfetch");
const header = {
    "Content-Type": "application/json"
};

module.exports = {
	commands: [
		"shiba"
    ],
    description: "Get a random doge.",
	usage: "shiba",
	category: "Fun",
    hidden: false,
    execute: (bot, r, msg) => {
    snekfetch.get('http://shibe.online/api/shibes?count=1', {headers: header}).then((res) => {
        image = JSON.parse(res.text);
        msg.channel.send({
            embed: {
                title: 'Woof! :dog:',
                color: 3447003,
                image: {
                    url: image[0]
                }
            }
        })
    }).catch((error) => {
        m.edit({
            embed: {
                title: "Error!",
                color: 0xE50000,
                description: "An unexpected error occured while trying to fetch a random shiba."
            }
        });
        console.error("Failed to get a random shiba picture.", error.message);
    });
}
};