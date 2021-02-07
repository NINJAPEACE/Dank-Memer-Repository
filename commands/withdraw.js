const db = require('quick.db');

module.exports.run = async(client, message, args) => {

if(!args[0]) return message.channel.send(`${message.author} what are you depositing, idiot`)

if(args[0] === "all") {
let amount = parseInt(db.get(`money_${message.author.id}`));

db.add(`bank_${message.author.id}`, amount)
db.subtract(`money_${message.author.id}`, amount)
message.channel.send(`${message.author} **⏣ ${amount.toLocaleString()}** withdrawn`)
}

let money = db.get(`bank_${message.author.id}`);
if(isNaN(args[0])) return message.channel.send(`${message.author} Your second argument should be a number and no more than what you have in your bank (⏣ ${money.toLocaleString()})`)
let amount = parseInt(args[0]);

if(money < amount) {
message.channel.send(`${message.author} Your second argument should be a number and no more than what you have in your bank (⏣ ${money.toLocaleString()})`)
} else {
db.add(`money_${message.author.id}`, amount)
db.subtract(`bank_${message.author.id}`, amount)
message.channel.send(`${message.author} **⏣ ${amount}** withdrawn`)
}
};

module.exports.config = {
  name: 'withdraw',
  aliases: ['with']
}
