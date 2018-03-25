const Nightmare = require('nightmare');
const screenshotSelector = require('nightmare-screenshot-selector');
const cheerio = require('cheerio');

Nightmare.action('screenshotSelector', screenshotSelector)

var nightmare = new Nightmare({ show: false, width: 1280, height: 1024 });

module.exports = {
    commands: [
        "poeprofile"
    ],
    usage: "poeprofile <account> <character>",
    description: "Check your Path of Exile profile.",
    category: "Path of Exile",
    hidden: false,
    execute: (bot, r, msg, args) => {
        msg.channel.send({
            embed: {
                title: ":hourglass: Gathering profile data, just a second!",
                color: 3447003
            }
        }).then((newmsg) => {

            const poeurl = ("http://poe-profile.info/profile/" + args[0] + '/' + args[1]);
            const selector = '#container';

            nightmare
                .goto(poeurl)
                .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
                .wait(2000)
                .screenshotSelector({ selector: '.icon2', path: 'public/icon_' + args[1] + '.png' })
                .screenshotSelector({ selector: '.inventoryPanel', path: 'public/inventory_' + args[1] + '.png' })
                .evaluate((selector) => {
                    return document.body.innerHTML;
                }, selector)
                .then(function (body) {
                    var $ = cheerio.load(body, {
                        ignoreWhitespace: true,
                        xmlMode: true,
                    })

                    var name = $('.name').eq(0).text();
                    var lvlasc = $('.info1').text();
                    var skill = $('.skill.current .name').text();
                    var leaguefull = $('.info2').text();
                    var league = leaguefull.replace("League", "");
                    var life = $('.total').eq(0).text();
                    var mana = $('.total').eq(1).text();
                    var es = $('.info-panel').find('li:nth-child(2)').text().trim();
                    var ar = $('.info-panel').find('li:nth-child(3)').text().trim();
                    var ev = $('.info-panel').find('li:nth-child(4)').text().trim();
                    var atrfull = $('.list-group.showless').find('a:nth-child(1)').text().trim();
                    var atr = atrfull.slice(0, -141);
                    var def = es + ' | ' + ar + ' | ' + ev

                    newmsg.edit({
                        embed: {
                            title: name,
                            color: 3447003,
                            description: lvlasc,
                            thumbnail: {
                                url: 'https://r2d2-nerdtank.herokuapp.com/icon_' + args[1] + '.png'
                            },
                            image: {
                                url: 'https://r2d2-nerdtank.herokuapp.com/inventory_' + args[1] + '.png'
                            },
                            url: poeurl,
                            fields: [
                                {
                                    name: 'Skill',
                                    value: skill,
                                    inline: true
                                },
                                {
                                    name: 'League',
                                    value: league,
                                    inline: true
                                },
                                {
                                    name: 'Life :red_circle:',
                                    value: life,
                                    inline: true
                                },
                                {
                                    name: 'Mana :large_blue_circle:',
                                    value: mana,
                                    inline: true
                                },
                                {
                                    name: 'Attributes',
                                    value: atr
                                },
                                {
                                    name: 'Defences',
                                    value: def
                                }
                            ]
                        }
                    });
                });
        });
    }
};