

//Define discord-js
const Discord = require('discord.js');

//Define moment
const moment = require("moment")
require("moment-duration-format")

module.exports.run = async (bot, message, args, ops, func) => {
    let user;
    if (message.guild.members.get(args[0])) user = message.guild.members.get(args[0])
    else if (message.mentions.users.first()) user = message.mentions.users.first()
    else if (args.join(" ")) user = func.autouser(message, args.join(" "))
    else if (!args.join(" ") || message.mentions.users.first()) user = message.author;
    const member = message.guild.member(user);

    function isBot() {

        let bot;
        if (user != func.autouser(message, args.join(" "))) {
            if (user.bot === true) bot = "Oui";
            else bot = "Non";

            return bot;
        } else {
            if (user.user.bot === true) bot = "Oui";
            else bot = "Non";

            return bot;
        }
    }


    function game() {
        let game;
        if (user.presence.activity !== null) game = user.presence.activity.name
        else game = "Aucun";
        return game;
    }
    //Discord rich embed
    if (message.guild.members.get(args[0])) {
        const embed = new Discord.RichEmbed()
            .setColor('#36393e')
            .setThumbnail(user.user.displayAvatarURL())
            .setAuthor(`${user.user.username}#${user.user.discriminator}`, user.user.displayAvatarURL())
            .addField("ID:", `${user.user.id}`, true)
            .addField("Surnom:", `${member.nickname || 'Aucun'}`, true)
            .addField("Status:", status(), true)
            .addField("Bot:", `${isBot()}`, true)
            .addField("Jeu", game(), true)
            .addField("Créé le" + ` (${moment(user.user.createdAt, "dd").fromNow()})`, `${moment.utc(user.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
            .addField("Rejoint le" + ` (${moment(member.joinedAt, "dd").fromNow()})`, `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
            .addField("Rôle le plus haut", member.user.highestRole, true)
            .addField("Rôles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
            .setFooter(`Répondre à ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
        message.channel.send({
            embed
        });
    } else {
        const embed = new Discord.RichEmbed
            .setColor('#36393e')
            .setThumbnail(user.displayAvatarURL())
            .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL())
            .addField("ID:", `${user.id}`, true)
            .addField("Surnom:", `${member.nickname || 'Aucun'}`, true)
            .addField("Status:", status(), true)
            .addField("Bot:", `${isBot()}`, true)
            .addField("Jeu", game(), true)
            .addField("Créé le" + ` (${moment(user.createdAt, "dd").fromNow()})`, `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
            .addField("Rejoint le" + ` (${moment(member.joinedAt, "dd").fromNow()})`, `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
            .addField("Rôle le plus haut", member.highestRole, true)
            .addField("Rôles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
            .setFooter(`Répondre à ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
        message.channel.send({
            embed
        });
    }
}

module.exports.help = {
    name: 'userinfo'
}
