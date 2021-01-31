module.exports.run = async(client, message, args) => {
let a = "`"
message.channel.send(`this number doesn't mean anything really: ${a}${client.ws.ping}ms${a}`)
}

module.exports.config = {
name: 'ping',
description: 'test cmd plz ignore',
usage: 'pls ping',
aliases: ['ping']
}
