const discord = require("discord.js")

exports.run = function(client, message, args){

var troll = [
"https://media.discordapp.net/attachments/618073962382884867/620625928258584591/trolllerin-en-aktif-oldugu-saatler-aciklandi.jpg",
"https://media.discordapp.net/attachments/618073962382884867/620625930699669505/4Dnm1aRS_400x400.jpg",
"https://media.discordapp.net/attachments/618073962382884867/620625931375214625/images.jpg",
"https://media.discordapp.net/attachments/618073962382884867/620625942179479563/408293_oc4c4.jpg",
"https://media.discordapp.net/attachments/618073962382884867/620625943534501920/source.gif",
"https://media.discordapp.net/attachments/618073962382884867/620625943790354449/sBCKPKALbJlMtGczEfmgTdL5WmbGEx3Sldbgku-wrw1cORAyYciMYN-7or5ufkXAOwiW.png",
"https://media.discordapp.net/attachments/618073962382884867/620626506124754967/photoshoptroll_logo.png",
"https://media.discordapp.net/attachments/618073962382884867/620626508167380992/tenor.png"
]
const resimler = troll[Math.floor(Math.random() * troll.length)];

message.channel.send(
new discord.RichEmbed()
.setDescription(resimler)
.setImage(resimler)
  )
}

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ["troll"],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'trollresim',//Komutun adı (Komutu girerken lazım olucak)
  category: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  description: 'Troll resimler atar',//Komutun Açıklaması
  usage: 'trollresim' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
