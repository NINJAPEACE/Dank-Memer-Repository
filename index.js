//make the Bot
const discord = require('discord.js');
const client = new discord.Client();


//make command handler and aliases
const fs = require('fs');
client.commands = new discord.collection();
client.aliases = new discord.aliases();

fs.readdir('./commands/', (err, files) => {
//to notify when there is an error
if(err) console.log(err)

//search for files endsWith .js
let file = files.filter(f => f.endsWith('.js'))

//If you don't make any commands then we will be notified
if(file.length <= 0) return console.log(`Couldn't find commands!`)

file.forEach((f, i) => {
let pull = require(`./command/${f}`);
client.commands.set(pull.config.name, pull);
pull.config.aliases.forEach(alias => {
client.aliases.set(alias, pull.config.name);
		});
	});
});

//to notify when the bot is ready to use
client.on('ready', async() => {
console.log(`I'm ready`)
});

client.on('message', async message => {
const db = require('quick.db');
let prefix = db.get(`prefix_${message.guild.id}`);

if(prefix === null)prefix = "pls";
if(message.content.startsWith('PLS')) prefix = 'PLS';
if(message.content.startsWith('Pls')) prefix = 'Pls';
//You can add more and customize the prefix

if(message.content.startsWith(prefix)) return null;

let args = message.content.slice(prefix.length).trim().split(' ');
let command = args.shift().toLowerCase();
let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
if(commandfile)commandfile.run(client, message, args?;

});

client.login(process.env.token)
