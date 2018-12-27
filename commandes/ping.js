const Discord = require('discord.js')

module.exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send('Checking ping... ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)

    // Checks and replace string
let diffmsg = ""
let APImsg = ""


// diff
    if(diff < 100) {
        diffmsg = "Very Good"
    }

    if(diff > 300) {
        diffmsg = "Good"
    }
    
    if(diff > 900) {
        diffmsg = "Bad"
    }

    if(diff > 1300) {
        diffmsg = "Very Bad"
    }

// API

    if(API < 100) {
        APImsg = "Very Good"
    }

    if(API > 300) {
        APImsg = "Good"
    }
    
    if(API > 900) {
        APImsg = "Bad"
    }

    if(API > 1300) {
        APImsg = "Very Bad"
    }    


        
        let embed = new Discord.RichEmbed()
        .setTitle(`🔔 Ping`)
        .setColor(0xff2f2f)
        .addField("📶 Latency", `${diff}ms (${diffmsg})`, true)
        .addField("💻 API", `${API}ms (${APImsg})`, true)
        message.edit(embed);
      
    });

}

module.exports.help = {
    name: 'ping'
}