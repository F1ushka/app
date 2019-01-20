const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let channel = message.mentions.channels.first() || message.channel
    if (!channel) {
        return message.channel.send(`:no_entry: Giriş-çıkış kanalı olarak ayarlamak istediğin kanalı etiketlemelisin. \`${prefix}giriş-çıkış #giriş-çıkış\``)
    }
    db.set(`gckanal_${message.guild.id}`, channel.id)
    message.channel.send(`:white_check_mark: Giriş-çıkış kanalı başarıyla ${channel} olarak ayarlandı. Kapatmak için \`${prefix}kapat giriş-çıkış\` yazmalısın.`)
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['girişçıkış'],
    permLevel: 3
}

exports.help = {
    name: 'giriş-çıkış',
    description: 'Giriş-çıkış kanalını ayarlar.',
    usage: 'giriş-çıkış <#kanal>'
}