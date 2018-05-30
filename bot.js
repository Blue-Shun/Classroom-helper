const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const strutils = require("./Utilities/StringUtils.js");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log(`Currently in ${client.guilds.size} server(s)!`);
});

client.on('ready', () => {
   var list = client.guilds.array().sort();
console.log("Server names: " + list);
});

client.on("ready", () => {
   client.user.setActivity(`c!help | watching ${client.guilds.size} servers`);
});

client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
      message.delete();
    } catch (err) {
        console.log(err);
        strutils.log(`${message.author.username} (${message.guild.id} / ${message.guild.name}) > The command "${config.prefix}${command}" couldn't be found!`);
    }
  });

client.login(process.emv.token);
