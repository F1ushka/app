const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 300);
  var msgArray = [
"Quarty <3",
"Replace Bot r_yardım",
"Hizmetinizdeyim!",
"r_yardım | r_davet",
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/SpaceTAP0'})
}, 115000);
    console.log(`Quarty Bot Giriş Yaptı.`);
}