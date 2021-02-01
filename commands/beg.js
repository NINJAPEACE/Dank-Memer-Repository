const db = require('quick.db');

module.exports.run = async(client, message, args) => {

let Money = [0, 1, 10, 20, 30, 40, 50, 100, 200, 300, 400];
let random = Math.floor(Math.random() * Money.length);
let Calculation = Math.floor(Math.random() * 500 + Money[random]);

let People = ["Thanos", "Saitama", "Naruto", "Captain Africa", "Daddy Yeet"];
let generate = Math.floor(Math.random() * People.length);
let Msg = `**${People[generate]}** has donated ⏣ ${Calculation} to **${message.author}**!`;
let NoBeg = ["No coins for you", "Me soo poor", "coins.exe has stopped working"];
if(Money < 100)Msg = `${People[generate]}: ${NoBeg}`;
if(Money < 100)Calculation = 0;

db.add(`money_${message.author.id}`, Calculation)
message.channel.send(Msg)
}

module.exports.config = {
  name = 'beg',
  aliases = []
}
