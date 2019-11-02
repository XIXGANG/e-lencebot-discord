const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.send(
new Discord.RichEmbed()
.setDescription(`[Sunucuna Eklemek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=628183832050532367&scope=bot&permissions=8) \n[Oy Ver](https://top.gg/bot/628183832050532367/vote)`)
.setColor("RANDOM")
)};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'botdavet',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Bota ait olan linkleri gösterir',//Komutun Açıklaması
  kategori: 'bot',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-eğlence-efekt-yetkili2-iletişim
  usage: 'botdavet' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
   
