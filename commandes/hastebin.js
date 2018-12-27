module.exports.run = async (bot, msg, args) => {
    const Discord = require('discord.js')
const snekfetch = require('snekfetch');
	if (!args.slice(0)
		.join(' ')) return msg.channel.send('Merci de mettre un code. Utilisation: f!hastebin <texte>')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	snekfetch.post('https://hastebin.com/documents')
		.send(args.slice(0)
			.join(' '))
		.then(body => {
            const embed = new Discord.RichEmbed()
            .setDescription("Code posté avec succès sur Hastebin !")
            .addField(":arrow_down: Cliquez pour le code :arrow_down:", `[Link](https://hastebin.com/${body.body.key})`)
			msg.channel.send(embed)
        });
    }

module.exports.help = {
    name: "hastebin"
}