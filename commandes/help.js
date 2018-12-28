module.exports.run = async (bot, message, args) => {
const Discord = require('discord.js') 


    const embed = new Discord.RichEmbed()
    .setTitle("Menu d'aide")
    .setDescription(`Ce bot à été créé par Certurix pour la communauté Frite's Corporation.`)
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)

    const embed2 = new Discord.RichEmbed()
    .setTitle("Commandes de modération")
    .setDescription("Voici les commandes de modération.\nRappel :\n<> : obligatoire\n[] : facultatif\n@... : mention\n")
    .addField("ban", "Bannissez quelqu'un. Utilisation : f!ban @utilisateur <raison>")
    .addField("kick", "Expulsez quelqu'un. Utilisation : f!kick @utilisateur <raison>")
    .addField("mute", "Réduisez quelqu'un au silence. Utilisation : f!mute @utilisateur <temps>")
    .addField("clear", "Supprimez des messages (max 100/commande). Utilisation : f!clear <nombre>")
    .setTimestamp()
    .setFooter(`Créé par Certurix | ${bot.user.username} Bot`)

    const embed3 = new Discord.RichEmbed()
    .setTitle("Commandes utilitaires")
    .setDescription("Voici les commandes utilitaires.")
    .addField("botinfo", "Affiche les informations du bot")
    .addField("membercount", "Affiche des informations lié aux membres du serveur")
    .addField("ping", "Permet de voir le ping du bot.")
    .addField("hastebin", "Permet de mettre en ligne du texte/code ")

    const embed4 = new Discord.RichEmbed()
    .setTitle("Commandes développeur")
    .setDescription("Commandes secrètes du bot")
    .addField("eval", "Permet d'executer du code sur le bot")
    .addField("stop", "Eteint tous les processus du bot")


    message.author.send(embed)
    message.author.send(embed3)

    if(message.member.hasPermission("BAN_MEMBERS")) {
        message.author.send(embed2)
    } else return;

    if(message.author.id == ("420902183350042627")) {
        message.author.send(embed4)
    }


};

module.exports.help = {
    name: "help"
}
