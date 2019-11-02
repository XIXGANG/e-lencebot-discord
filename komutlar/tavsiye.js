const Discord = require('discord.js');


exports.run = function(client, message, args) {
       let öneri = args.slice(0).join(' ');
       if (öneri.length < 1) return message.channel.send(
      new Discord.RichEmbed()
      .setDescription(":warning: Lütfen bir tavsiye yazınız."));
const basari = new Discord.RichEmbed()
.setDescription("Tavsiyeniz başarılı bir şekilde iletilmiştir. Tavsiyeniz hakkında sonuçlar size özelden mesaj olarak gönderilecektir. Tekrardan teşekkürler. :tada:")
.setColor("RANDOM")
message.channel.send(basari)
  const tavsiye = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(":warning: Tavsiye :warning:")
  .setDescription("**Tavsiyeyi yapan kişi:** " + message.author.tag + "\n**Tavsiyeyi yapan kişinin ID:** " + message.author.id + "\n**Tavsiye yapılan sunucu:** " + message.guild.name + "\n**----------------------------------**" + "\n**Öneri:** " + öneri)
  .setThumbnail(client.user.avatarURL)
  client.channels.get('626404132022124544').send(tavsiye);
};
exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'tavsiye',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Bota tavsiye verirsiniz',//Komutun Açıklaması
  kategori: 'iletişim',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-eğlence
  usage: 'tavsiye <tavsiyeniz>' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
