const snekfetch = require("snekfetch");
const config = require("../config.json");


module.exports = {
	commands: [
		"imdb"
	],
	description: "Imdb",
	usage: "imdb <movie/series>",
	category: "Fun",
	hidden: false,
	execute: (bot, r, msg, args) => {
		if (args.length > 0) {
            const letter = args[0]; 
            const url = ('http://www.omdbapi.com/?t=' + args +'&apikey=' + config.api_keys.omdbapi);
            snekfetch.get(url).then((body) => {
                const movie = body.body;
                msg.channel.send({
					embed: {
                        "title": movie.Title,
                        "description": movie.Plot,
                        "color": 16772879,
                        "url": 'http://www.imdb.com/title/' + movie.imdbID,
                        "fields": [
                            {
                              "name": "Starring",
                              "value": movie.Actors
                            },
                            {
                              "name": "Year",
                              "value": movie.Year,
                              "inline": true
                            },
                            {
                                "name": "Rating",
                                "value": movie.imdbRating,
                                "inline": true
                              }
                        ],
                        "thumbnail": {
                            "url": movie.Poster
                        },
                        "footer": {
                            "text": "From the Internet Movie Database.",
                            "icon_url": "https://logoepscdnphoto.b-cdn.net/wp-content/uploads/2016/12/imdb_logo.png"
                          }
                        }
                    });
                });
            
        } else {
			msg.channel.send({
				embed: {
					title: "Error!",
					color: 0xE50000,
					description: "Missing `<text>` option."
				}
            });
        }
    }
};