const db = require('quick.db');

module.exports.run = async (client, message, args) => {
	if (!args[0])
		return message.channel.send(
			`${message.author} what are you depositing, idiot`
		);

	if (args[0] === 'all') {
		let amount = parseInt(db.get(`money_${message.author.id}`));

		db.add(`bank_${message.author.id}`, amount);
		db.subtract(`money_${message.author.id}`, amount);
		message.channel.send(`${message.author} **⏣ ${amount}** deposited`);
	}

	if (isNaN(args[0])) return message.channel.send(`It's not a valid amount`);
	let amount = parseInt(args[0]);
	let money = db.get(`money_${message.author.id}`);

	if (money < amount) {
		let a = '`';
		message.channel.send(
			`${
				message.author
			} Your argument should be either a number and no more than what you have in your wallet (⏣ ${money.toLocaleString()}), or ${a}max${a}`
		);
	} else {
		db.add(`bank_${message.author.id}`, amount);
		db.subtract(`money_${message.author.id}`, amount);
		message.channel.send(`${message.author} **⏣ ${amount}** deposited`);
	}
};

module.exports.config = {
	name: 'deposit',
	aliases: ['dep']
};
