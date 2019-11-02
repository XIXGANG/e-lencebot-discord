const Discord = require('discord.js');


exports.run = function(client, message) {
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
