const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.channel.sendMessage(`${message.author.username} > !ban <user> <reason>`);
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: Impossible de trouver l'utilisateur.")
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send(":x: Aucune raison fourni.")
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Vous n'avez pas la permission d'executer cette commande.")

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField("Utilisateur banni", `${bUser} | ID : ${bUser.id}`)
    .addField("Banni par", `<@${message.author.id}> | ID : ${message.author.id}`)
    .addField("Date", message.createdAt)
    .addField("Raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return;

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
