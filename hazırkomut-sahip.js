const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(":warning: Bu komutu kullanabilmen için yetkin yetmiyor!")

//Komutun Kodları
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: '',//Komutun adı (Komutu girerken lazım olucak)
  description: '',//Komutun Açıklaması
  kategori: '',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-eğlence-efekt-yetkili2-iletişim
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
