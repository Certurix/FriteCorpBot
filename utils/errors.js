const Discord = require("discord.js");
const fs = require("fs");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Vous n'avez pas la bonne permission")
        .setColor("#b70000")
        .addField("Permission requise : ", perm);

    message.channel.send(embed).then(m => m.delete(10000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#b70000")
        .setTitle("Erreur")
        .addField(`${user.username} a la permission : `, perms);

    message.channel.send(embed).then(m => m.delete(10000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setDescription("Vous ne pouvez pas me bannir")
        .setColor("#b70000");

    message.channel.send(embed).then(m => m.delete(10000));
}

module.exports.cantfindUser = (channel, message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setDescription(`${message.author.username}, impossible de trouver l'utilisateur, essayez de le mentionner.`)
        .setColor("#b70000");

    channel.send(embed).then(m => m.delete(10000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setDescription("Vous devez précisez une raison.")
        .setColor("#b70000");

    channel.send(embed).then(m => m.delete(10000));
}
