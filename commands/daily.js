module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`você já coletou. volte depois de  ${addMoney.time.hours} horas, ${addMoney.time.minutes} minutos & ${addMoney.time.seconds} segundos para coletar denovo.`);
    else return message.reply(`você reinvidicou **${addMoney.amount}** 💸 agora você tem **${addMoney.after}** 💸.`);
};

module.exports.help = {
    name: "diario",
    aliases: [],
    usage: "diario"
}
