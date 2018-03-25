const snekfetch = require('snekfetch');

const poewiki = "http://pathofexile.gamepedia.com/api.php?action=opensearch&search="


module.exports = {
	commands: [
		"poewiki"
    ],
    description: "Search for an item on PoE Wiki.",
	usage: "poewiki <search>",
	category: "Path of Exile",
    hidden: false,
    execute: (bot, r, msg, args) => {
            suffix = args.join(" ");
        snekfetch.get(poewiki + suffix).then((res) => {
            body = JSON.parse(res.text);
            name = body[1].toString();
            url = body[3].toString();
            msg.channel.send({
                embed: {
                    title: name,
                    description: 'The Community-Maintained Path of Exile Wiki',
                    thumbnail: {
                        url: 'https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/b/bc/Wiki.png'
                    },
                    url: url,
                    color: 3447003
                }
            })
         });
    }
}