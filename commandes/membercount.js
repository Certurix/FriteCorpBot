module.exports.run = async (bot, msg, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();
      const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];
      const embed = new Discord.RichEmbed()
          .setColor(hexcols[~~(Math.random() * hexcols.length)])
          .setAuthor(msg.guild.name, msg.guild.iconURL)
      .setThumbnail(msg.guild.iconURL)
      .addField('Members Count', `**${msg.guild.memberCount}**`, true)
      .addBlankField(true)
      .addField('Humans', `**${msg.guild.members.filter(member => !member.user.bot).size}**`, true)
      .addField('Bots', `**${msg.guild.members.filter(member => member.user.bot).size}**`, true)
      .addField('Status', `<:online:505688157719887873> **${msg.guild.members.filter(o => o.presence.status === 'online').size}** Online\n<:idle:505688295116636162> **${msg.guild.members.filter(i => i.presence.status === 'idle').size}** Idle\n<:dnd:505688495981854720> **${msg.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do not disturb\n<:invisible:505688620963856394> **${msg.guild.members.filter(off => off.presence.status === 'offline').size}** Offline\n<:streaming:505690569792815106> **${msg.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
      .setTimestamp()
    msg.channel.send(embed);
  };

module.exports.help = {
    name: "membercount"
  }
  
