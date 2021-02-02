const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async(client, message, member, args) => {
let gold = await db.fetch(`gold_${message.member.id}`)
let user = message.mentions.users.first() || message.author;
  const yardimlistesi2 = new Discord.MessageEmbed()
  .setColor('#066bc3')
  .setThumbnail('', client.user.avatarURL({dynamic: true}))
  .setAuthor('Replace Bot Yardım Menüsü')
  .setDescription(`
  > **Merhaba <@${message.author.id}> kullanıcım.
  > Benim Prefixim: ${prefix}
  > Benim Dilim: Türkçe
  > Gold Üye Durumu: ${gold? "``Gold Üye``" : ' ``Normal Üye``'}**

  > <a:RainbowOkGif:797033472274464779> **♯ Bot Komutları**
  > <a:developer:797032355976970251> ⁝ [${prefix}eğlence](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) > • **Eğlence komutlarını gösterir.**
  > <a:RexyEmojiPack31:797053360431562773> ⁝ [${prefix}kullanıcı](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) > • **Kullanıcı komutlarını gösterir.**
  > <a:vumpushype:797757085151920158> ⁝ [${prefix}yetkili](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) > • **Yetkili komutlarını gösterir.**
  > <a:dikkatalert:797756800798818305> ⁝ [${prefix}koruma](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) > • **Koruma sistemi komutlarını gösterir.**
  > <a:sarionay:797756996337270824> ⁝ [${prefix}youtube](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) > • **Youtube sistemi komutlarını gösterir.**
  > <a:tadaaa:797757216929087499> ⁝ [${prefix}sunucu](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) > • **Sunucu komutlarını gösterir.**
  > <a:ayarlar:797756953873874944> ⁝ [${prefix}sistemler](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) > • **Otocevap sistemi, bilet sistemi vb. komutları gösterir.**
  
  > ** <a:bildirim:797756868213866498> ⁝ Güncellemeler**
  > • **Tr:** Bot Şuan Aktiftir. Komutlari Kullanabilirsiniz! | **En:** Our bot is Online. You Can Use Commands!
  > <a:KalpGif:797756735708332063> • Hepinize İyi Eğlenceler Dilerim...
  
  > **:link: ⁝ Linkler -->**
  > • [Beni Ekle](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) • [Destek Sunucum](https://discord.gg/qa4xqCNNME) • [Oy Ver] () •
  
  `)
  .setFooter(`Replace Bot Yardım Menüsü`)
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/798513335439065098/799910916937744384/standard_1.gif')
  message.channel.send(yardimlistesi2);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-menüsü', 'yardım-listesi'],
  permLevel: 0
}

exports.help = {
  name: 'yardım',
  description: 'Yardım listesini gösterir.',
  usage: 'yardım'
}