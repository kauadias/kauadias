const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Por favor especifique um usuario!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Por favor especifique uma quantia valida.");
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`dinheiro adicionado!`)
        .addField(`Usuario`, `<@${data.user}>`)
        .addField(`Balança dada`, `${data.amount} 💸`)
        .addField(`Total `, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "adicionardinheiro",
    aliases: ["addd"],
    usage: `adicionardinheiro @user <quantidade>`
}
