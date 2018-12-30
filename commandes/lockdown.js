const ms = require('ms');
module.exports.run = async (bot, message, args) => {
  if (!bot.lockit) bot.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['liberer', 'deverouiller', 'stop', 'off', 'quit'];
  if (!time) return message.channel.send('Spécifiez une heure pour verrouiller le canal en minutes (m) secondes (s) ou heures (h)');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Le verrouillage du canal est terminé.');
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Le canal a été verrouillé pendant ${ms(ms(time), { long:true })}`).then(() => {

        bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Le verrouillage du canal est terminé.')).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};

module.exports.help = {
  name: "lockdown"
}
