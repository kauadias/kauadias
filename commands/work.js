module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Você está cansado. volte depois de ${work.time.minutes} minutos & ${work.time.seconds} segundos para trabalhar novamente.`);
    else return message.reply(`Você **${work.workedAs}** and earned **${work.amount}** 💸. Now you have **${work.after}** 💸.`);
};

module.exports.help = {
    name: "trabalhar",
    aliases: [],
    usage: "trabalhar"
}
