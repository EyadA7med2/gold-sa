const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setGame(`Welcome On VeloCity Server`, "http://twitch.tv/Streammingg")    
});
















client.login(process.env.BOT_TOKEN);
