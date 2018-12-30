const Discord = require("discord.js");
module.exports.run = async (bot, msg) => {
  const params = msg.content.split(" ");
const args = msg.content.split(" ").slice(1);
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  if(msg.author.id === "420902183350042627") {
    try {
         var code = args.join(" ");
         var evaled = eval(code);

         if (typeof evaled !== "string") {
           evaled = require("util").inspect(evaled);
         }
         msg.channel.sendMessage(":floppy_disk:  Output:")
         msg.channel.sendCode("js", clean(evaled, {depth: 20}));
       } catch(err) {
         msg.channel.sendMessage(`\`ERREUR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
       }
     } else {
    msg.channel.sendMessage("You do not have access to that command!");
     }
    }

    module.exports.help = {
        name: "eval"
      }
