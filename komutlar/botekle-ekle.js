const Discord = require("discord.js");

exports.run = function(client, message, args) {
  let narcoscodid = args[0];
  let prefix = args[1];
  let onaylımı = args[2];
  let basvuru = "780831392791527436"; // başvurunun gideceği kanal
  let kanal = "780831056134930452"; // başvurunun yapılacağı kanal
  let log = "781126225896013834"; // bot eklendi / onaylandı / reddedildi kanalı

  if (message.channel.id !== kanal)
    return message.channel
      .send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(10000));
  if (message.channel.id == kanal) {
    if (!narcoscodid)
      return message.channel
        .send(`:no_entry: Botunun ID'sini yazmalısın.`)
        .then(msg => msg.delete(10000));
    if (!prefix)
      return message.channel
        .send(`:no_entry: Botunun prefixini yazmalısın.`)
        .then(msg => msg.delete(10000));
    if (!onaylımı)
      return message.channel
        .send(`:no_entry: Botunun Dbl onaylımı onu yazmalısın`)
        .then(msg => msg.delete(10000));
    message.delete();
    const embed = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setDescription(
        `[Ekle](https://discordapp.com/oauth2/authorize?client_id=${narcoscodid}&scope=bot&permissions=0)`,
        true
      )
      .setTitle("Bot Ekletme")
      .addField("Bot Sahibi", message.author.tag)
      .addField("Bot ID", narcoscodid)
      .addField("Bot Prefix", prefix)
      .addField("Bot Onaylımı?", onaylımı);
    client.channels.get(basvuru).send(embed);
    client.channels
      .get(log)
      .send(
        `:white_check_mark: ${message.author} adlı kullanıcının <@${narcoscodid}> adlı botu sıraya ekledi. Botu onaylanmayı bekliyor.`
      );
    message.channel
      .send(`:white_check_mark: Bot ekleme isteğiniz alındı.`)
      .then(msg => msg.delete(10000));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-ekle"],
  permLevel: 0
};

exports.help = {
  name: "botekle",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};
