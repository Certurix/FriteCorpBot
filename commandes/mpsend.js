module.exports.run = async (bot, message) => {
    const Discord = require('discord.js')
    if (message.author.id !== "420902183350042627") return;
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("Ce n'est pas un ID.") //if args is Not A Number!
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(Rargs)
    bot.users.get(userID).send(embed)
    message.channel.send("Envoyé !").catch(console.error) //send the message
    //it may be that if the user has blocked your bot that it does not work
}

module.exports.help = {
    name: "mpsend"
}