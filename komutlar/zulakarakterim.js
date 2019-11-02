const discord = require("discord.js")

exports.run = function(client, message, args){

var karakterisim = [
"Demir Erez",
"Şahin Kılıç",
"Eşref Dayı",
"Recep Aslan",
"Yunus Şanlı",
"Cengiz Kaya",
"Azad Kara",
"Larry Silverstein",
"Pierre Julliard",
"Robert O'bannon",
"Trevor Edward Moore",
"David King"

]
const zula = karakterisim[Math.floor(Math.random() * karakterisim.length)];

message.channel.send(
new discord.RichEmbed()
.setTitle(":tada: Zula")
.setDescription("Senin zula oyun karakterin: " + zula)
  )
}

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ["troll"],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'zulakarakterim',//Komutun adı (Komutu girerken lazım olucak)
  category: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  description: 'Size yakışan zula oyun karakterinizi söyler',//Komutun Açıklaması
  usage: 'zulakarakterim' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}