exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Você ja renvidicou seu semanal. volte depois de ${addMoney.time.days} dias, ${addMoney.time.hours} horas, ${addMoney.time.minutes} minutos & ${addMoney.time.seconds} segundos para reinvidicar novamente.`);
    else return message.reply(`Você reinvidicou **${addMoney.amount}** 💸 como seu crédito semanal & e agora você tem **${addMoney.after}** 💸. cuide bem do seu dinheiro`);
};

exports.help = {
    name: "semanal",
    aliases: [],
    usage: "semanal"
}
