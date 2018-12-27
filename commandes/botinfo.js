

module.exports.run = async (bot, message, args) => {
    const Discord = require("discord.js");
const os = require("os")
let upTime = Math.round(os.uptime());
let upTime1 = Math.round(process.uptime());
    let upTimeSeconds2 = upTime1;
       let upTimeOutput2 = "";
       if (upTime<60) {
           upTimeOutput2 = `${upTime1} seconde(s)`;
       } else if (upTime1<3600) {
           upTimeOutput2 = `${Math.floor(upTime1/60)} minute(s) ${upTime1%60} seconde(s)`;
       } else if (upTime1<86400) {
           upTimeOutput2 = `${Math.floor(upTime1/3600)} heure(s) ${Math.floor(upTime1%3600/60)} minute(s) ${upTime1%3600%60} seconde(s)`;
       } else if (upTime1<604800) {
           upTimeOutput2 = `${Math.floor(upTime1/86400)} jour(s) ${Math.floor(upTime1%86400/3600)} heure(s) ${Math.floor(upTime1%86400%3600/60)} minute(s) ${upTime%86400%3600%60} seconde(s)`;
       }
        let upTimeSeconds = upTime;
       let upTimeOutput = "";

       if (upTime<60) {
           upTimeOutput = `${upTime} seconde(s)`;
       } else if (upTime<3600) {
           upTimeOutput = `${Math.floor(upTime/60)} minute(s) ${upTime%60} seconde(s)`;
       } else if (upTime<86400) {
           upTimeOutput = `${Math.floor(upTime/3600)} heure(s) ${Math.floor(upTime%3600/60)} minute(s) ${upTime%3600%60} seconde(s)`;
       } else if (upTime<604800) {
           upTimeOutput = `${Math.floor(upTime/86400)} jour(s) ${Math.floor(upTime%86400/3600)} heure(s) ${Math.floor(upTime%86400%3600/60)} minute(s) ${upTime%86400%3600%60} seconde(s)`;
       }
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];
    let bicon = bot.user.displayAvatarURL;
    let dev = "JavaScript - Discord.JS";
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot infos")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .setThumbnail(bicon)
    .addField("Nom ", bot.user.username)
    .addField("Créé le", bot.user.createdAt)
    .addField("Langage et librairie", dev)
    .addField("Temps de connexion", upTimeOutput2)
    .addField("Utilisateur de la mémoire du processeur", Math.ceil(process.memoryUsage().heapTotal / 1000000))
    .addField("Système d'exploitation", process.platform)

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
