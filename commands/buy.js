const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Looks like you are poor.");
  let item = args[0];
  if (!item) return message.channel.send("What are you trying to buy?");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("esse item não existe burrinho-kun");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("sua balança é insuficiente. Você precisa :dollar: "+hasItem.cost+" para comprar esse item.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Você comprou **${item}** por **:dollar: ${hasItem.cost}**.`);
};

exports.help = {
  name: "comprar",
  aliases: [],
  usage: `comprar <item>`
};
