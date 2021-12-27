const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Balança`)
        .addField(`Usuario`, `<@${userBalance.user}>`)
        .addField(`Balança`, `${userBalance.amount} 💸`)
        .addField(`Posição`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bolsa",
    aliases: ["dinheiro", "credito", "balança"],
    usage: `bolsa`
}
