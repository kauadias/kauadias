exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Por favor mencione o jogador ou me de o ID') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Por favor coloque uma quantia possível') 
  if(authordata.amount < amount) return message.channel.send('parece que você não tem muito dinheiro') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`Você transferiu com sucesso 💸**${amount}** para ** ${member.user.tag}**.`)
}
exports.help = {
  name: "transferir",
  aliases: ['dar', 'compartilhar'],
  usage: `transferir <membro> <quantidade>`
};
