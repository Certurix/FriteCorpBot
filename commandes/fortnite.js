const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client(process.env.FORTNITE);

module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1];

    if(!username) return message.channel.send("S'il vous plaît, fournissez un pseudonyme (Fortnite)")
    if(!platform) return message.channel.send('Avez-vous fourni une plate-forme ? Utilisation correcte : **f!fortnite <username> <platform>**') 

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;

        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        let embed = new Discord.RichEmbed()
        .setTitle("Lifetime Stats")
        .setAuthor(data.username)
        .setColor("RANDOM")
        .addField("Victoires", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matchs joués", mplayed, true)
        .addField("Victoires %", winper, true)
        .addField("Ratio K/D", kd, true)
        .setTimestamp()
        
        message.channel.send(embed);
    }).catch((err) => {
      message.channel.send('L\'utilisateur n\'a pas été trouvé !');
      console.error(err);
    });
}

module.exports.help = {
    name: "fortnite"
} 
