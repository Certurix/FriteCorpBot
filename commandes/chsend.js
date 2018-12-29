module.exports.run = async (bot, message) => {
    const Discord = require('discord.js')
    if (message.author.id !== "420902183350042627") return message.channel.send(":x:")
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var channelID = args[1]
    if (isNaN(args[1])) return message.reply("Ce n'est pas un ID.") //if args is Not A Number!
    bot.channels.get(channelID).send(Rargs)
    message.channel.send("Envoyé !").catch(console.error) //send the message
}

module.exports.help = {
    name: "chsend"
}
