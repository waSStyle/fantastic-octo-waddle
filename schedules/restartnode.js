module.exports = {
    interval: 8.64e7,
    execute: (bot) => {
        console.log("Daily Restart!").then(() => {
            bot.shard.broadcastEval("process.exit()").catch(() => {
                console.log("Failed to restart bot")
            });
        });
    }
}