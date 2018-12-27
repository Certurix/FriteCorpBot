const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

  // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");

  // We want to check if the argument is a number
  if(!args[0]) return message.channel.send("Specifiez un nombre pour effacer.");
  if (isNaN(args[0])) {
      // Sends a message to the channel.
      message.channel.send('Merci de ne mettre **QUE** des nombres'); //\n means new line.
      // Cancels out of the script, so the rest doesn't run.
      return;
  }

  const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
  message.channel.send(fetched.size + ' messages ont été trouvés.').then(msg => msg.delete(5000)); // Lets post into console how many messages we are deleting

  // Deleting the messages
  message.channel.bulkDelete(fetched)
      .catch(error => console.log(error)).then(msg => msg.channel("Il y a eu un problème, je ne peut pas éxecuter l'action demandé.")) // If it finds an error, it posts it into the channel.

}


module.exports.help = {
  name: "clear"
}


//   if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  //if(!args[0]) return message.channel.send("Specific a number to clear");