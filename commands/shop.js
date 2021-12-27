const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("loja")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("use :!comprar <item> para comprar o item.")
  return message.channel.send(embed);
};

exports.help = {
  name: "loja",
  aliases: [],
  usage: `loja`
};
