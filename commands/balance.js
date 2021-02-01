const dc = require('discord.js');
const db = require('quick.db')

module.exports.run = async(client, message, args) => {
	let user = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]).user;

	let balance = db.get(`money_${user.id}`);
	if (balance === null) balance = 0;
	let bank = db.get(`bank_${user.id}`);
	if (bank === null) bank = 0;

	let y = new dc.MessageEmbed()
		.setTitle(`${user.username}'s balance`)
		.setDescription(`**Wallet :** ⏣ ${money}\n**Bank :** ⏣ ${bank}`)
		.setColor('RANDOM');

	message.channel.send(y);
};

module.exports.config = {
  name: 'balance',
  aliases: ['bal', 'coins']
}
