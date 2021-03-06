
const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", function(message) {

  var prefix = "kaio ";

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "letsee") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(config.BOT_TOKEN);
