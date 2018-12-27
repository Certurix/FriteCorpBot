module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
const ms = require("ms");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas accès à cette commande.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Impossible de trouver l'utilisateur");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("L'utilisateur que vous voulez mute est un mod/admin.");
    let muterole = message.guild.roles.find(`name`, "Réduit au silence");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Réduit au silence",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
            message.channel.send("Oups! Il semblerait que la console soit cassé ! Le développeur à été prévenu et la commande sera bientôt re-disponible !")
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("Spécifiez un temps");

    await (tomute.addRole(muterole.id));
    message.channel.send(`<@${tomute.id}> à été réduit au silence pendant ${ms(ms(mutetime))}`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> à été unmute.`);
    }, ms(mutetime));

}

module.exports.help = {
    name: "mute",
}
