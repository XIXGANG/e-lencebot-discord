const Discord = require('discord.js');


exports.run = function(client, message, args) {
       let öneri = args.slice(0).join(' ');
       if (öneri.length < 1) return message.channel.send(
      new Discord.RichEmbed()
      .setDescription(":warning: Lütfen bir hata yazınız."));
const basari = new Discord.RichEmbed()
.setDescription("Hata başarılı bir şekilde iletilmiştir. Tavsiyeniz hakkında sonuçlar size özelden mesaj olarak gönderilecektir. Tekrardan teşekkürler. :tada:")
.setColor("RANDOM")
message.channel.send(basari)
  const tavsiye = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(":warning: Hata :warning:")
  .setDescription("**Hatayı bildiren kişi:** " + message.author.tag + "\n**Hatayı bildiren kişinin ID:** " + message.author.id + "\n**Hatayı bildiren sunucu:** " + message.guild.name + "\n**----------------------------------**" + "\n**HATA**: " + öneri)
  .setThumbnail(client.user.avatarURL)
  client.channels.get('626406474192650270').send(tavsiye);
};
exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'hatabildir',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Bot hakkında hata bildirirsiniz.',//Komutun Açıklaması
  kategori: 'iletişim',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-eğlence
  usage: 'hatabildir <hata>' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
