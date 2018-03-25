const snekfetch = require("snekfetch");
const config = require("../config.json");
const nodegeocoder = require("node-geocoder");
const dateformat = require("dateformat");

const options = {
	provider: 'google'
  };

const geocoder = nodegeocoder(options);


module.exports = {
	commands: [
		"weather",
		"we"
	],
	description: "View weather for a city or zip code.",
	usage: "weather <city>",
	category: "Utility",
	hidden: false,
	execute: (bot, r, msg, args) => {
		if (args.length > 0) {
			geocoder.geocode(args.join(" "), function(err, res) {
				const lat = res[0].latitude;
				const long = res[0].longitude;
				const code = res[0].countryCode.toLowerCase();
			snekfetch.get("https://api.darksky.net/forecast/" + config.api_keys.darkskyapi + "/" + lat + "," + long + "?units=auto").then((body) => {

				var emoji = "☀";
				if (body.body.currently.icon.includes("cloud")) { emoji = "🌥"};
				if (body.body.currently.icon.includes("snow")) { emoji = "⛄"};
				if (body.body.currently.icon.includes("rain")) { emoji = "🌧"};
				if (body.body.currently.icon.includes("storm")) { emoji = "⛈"};
				if (body.body.currently.icon.includes("drizzle")) { emoji = "🌦"};

				msg.channel.send({
					embed: {
						title: res[0].formattedAddress + " :flag_" + code + ":",
						description: emoji + " " + body.body.currently.summary,
						color: 3447003,
						fields: [
							{
								name: "Forecast",
								value: body.body.hourly.summary
							},
							{
								name: "🌡 Temperature",
								value: "Temp: " + body.body.currently.temperature + "°C\n" +
									   "Feels Like: " + body.body.currently.apparentTemperature + "°C\n" +
									   "Dew Point: " + body.body.currently.dewPoint + "°C",
								inline: true
							},
							{
								name: "💨 Wind",
								value: "Speed: " + body.body.currently.windSpeed + "km/h\n" +
									   "Gust: " + body.body.currently.windGust + "km/h\n" +
									   "Bearing: " + body.body.currently.windBearing + "°",
								inline: true
							},
							{
								name: "📉 Other",
								value: "Humidity: " + body.body.currently.humidity + "%\n" +
									   "Pressure: " + body.body.currently.pressure + "hPa\n" +
									   "Visibility: " + body.body.currently.visibility + "km",
								inline: true
							}
						]
					}
				});
			}).catch((error) => {
				msg.channel.send({
					embed: {
						title: "Error!",
						color: 0xE50000,
						description: "An error occured while getting weather."
					}
				});
				console.error("Failed to get the weather.", error.message);
			});
		});
		} else {
			msg.channel.send({
				embed: {
					title: "Error!",
					color: 0xE50000,
					description: "Missing `<city | zip>` option."
				}
			});
		}
	}
};