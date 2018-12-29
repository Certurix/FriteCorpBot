module.exports.run = async (bot, message, args) => {


 let randomNumber = Math.floor(Math.random() * 10 + 1)
  let wordRule = "un"
  if (message.author.id === "420902183350042627") randomNumber = 10
  if (message.mentions[0]) {
    message.channel.sendMessage(`Je note ${c.message.mentions[0].username} ${wordRule} **${randomNumber}**/10`)
  } else {
    message.channel.sendMessage(`Je note ton nom ${message.author.username} ${wordRule} **${randomNumber}**/10`)
  }
}

module.exports.help = {
name: "ratename"
}