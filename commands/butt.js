const snekfetch = require('snekfetch');

module.exports = {
    commands: [
        "butts",
        "ass"
    ],
    description: "Get a random picture of an ass.",
    usage: "butts",
    category: "NSFW",
    hidden: true,
    execute: (bot, r, msg) => {
        if (!msg.channel.nsfw) return msg.channel.send({
            embed: {
                title: 'This is not a NSFW channel!',
                description: 'Please use an appropriate channel for NSFW content',
                thumbnail: {
                    url: 'https://images-ext-2.discordapp.net/external/m96RVcoXm0scMDMXDwmJ9YpUnCSGR3bshRQM63P1i5k/http/i.imgur.com/KQ7f9l7.png?width=72&height=72'
                },
                color: 0xE50000
            }
        }).then(m => m.delete(15000));

        const id = [Math.floor(Math.random() * 4923)]
        snekfetch.get(`http://api.obutts.ru/butts/` + id).then((res) => {
            const preview = res.body[0]["PREVIEW".toLowerCase()]
            const image = `http://media.obutts.ru/` + preview
            const seemsgood = "<:seemsgood:230306069518221315>";
            msg.channel.send({
                embed: {
                    title: 'Ass ' + seemsgood,
                    color: 3447003,
                    image: {
                        url: image
                    }
                }
            })
        }).catch((error) => {
            msg.channel.send({
                embed: {
                    title: "Error!",
                    color: 0xE50000,
                    description: "An unexpected error occured while trying to fetch an ass."
                }
            });
            console.error("Failed to get a random ass pic.", error.message);
        });
    }
}