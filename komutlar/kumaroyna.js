const Discord = require('discord.js');

const para = [
  "85 Dolar Kazandın!",
  "10 Dolar Kazandın!",
  "Hiç Bir Şey Kazanamadın.",
  "1 Dolar Kazandın!",
  "120 Dolar Kazandın!",
  "250 Dolar Kazandın!",
  "800 Dolar Kazandın!",
  "950 Dolar Kazandın!",
  "1000 Dolar Kazandın!",
  "2500 Dolar Kazandın!",
  "1485 Dolar Kazandın!",
  "6500 Dolar Kazandın!",
  "3585 Dolar Kazandın!",
  "BİNGO! 1.000.000 Dolar Kazandın!",
];

exports.run = function(client, message) {
//Komutun Kodları
const para1 = para[Math.floor(Math.random() * para.length)];
  message.channel.send(
  
  "**20 Dolar Para Yatırılıyor..**"
  
  ).then(
  function(i){
    i.edit("**Kumar Oynanıyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Kumar Oynadın**')
    .setDescription('```Kumar Sonuçları```')
      .addField('**Kazanılan Para: **',para1)
    .setColor('GREEN')
    
    
    )
  })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['kumar'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kumaroyna',//Komutun adı (Komutu girerken lazım olucak)

  description: 'Kumar oynarsınız',//Komutun Açıklaması
    kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'kumaroyna' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}