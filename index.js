//make the Bot
const discord = require('discord.js');
const client = new discord.Client();


//make command handler and aliases
const fs = require('fs');
client.commands = new discord.collection();
client.aliases = new discord.aliases();

fs.readdir('./commands/')(err, files)=> {
//to notify when there is an error
if(err) console.log(err)
}

//to notify when the bot is ready to use
client.on('ready', async() => {
console.log(`I'm ready`)
});

client.on('message', async message => {

let prefix = "pls";
if(message.content.startsWith('PLS')) prefix = 'PLS';
if(message.content.startsWith('Pls')) prefix = 'Pls';
//You can add more and customize it

if(message.content.startsWith(prefix)) return null;

let args = message.content.slice(prefix.length).trim().split(' ');
let command = args.shift().toLowerCase();
let commandfile = client.commands.get(cmd) || client.commands.get(alias(cmd));
if(commandfile)commandfile.run(client, message, args?;

});

client.login(process.env.token)
