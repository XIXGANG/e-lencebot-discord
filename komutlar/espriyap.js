const Discord = require('discord.js');


exports.run = function(client, message) {
const espri = espr[Math.floor(Math.random() * espr.length)];
  
  var espr = [
    "Rock yapmayan kişiye ne denir? - Yaprock.",
    "Ben Yedigün içiyorum sen Onbeşgün iç.",
    "Acıkan var mı ya? -Yok bizde tatlı kan var.",
    "İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez",
    "Elektriği Edison buldu ama parasını niye biz ödüyoruz?",
    "Mafya babası olmak için oğlumun adını “Mafya” koydum.",
    "Canın sıkıldıysa gevşet.",
    "Dört tarafı suyla çevrili çaya ne denir? Adaçayı.",
    "Fransız ihtilali neye karşı yapılmıştır? Sabaha karşı.",
    "Geçen gün taksi çevirdim hala dönüyor.",
    "Adamın birisi televizyona çıkmış bir daha indirememişler.",
    "Adamın biri gülmüş, saksıya koymuşlar.",
    "Dünya dönermiş ay da köfte",
    "Bu erikson, başka erik yok.",
    "Aya ilk bayrağı kim dikmiştir? Terzi.",
    "Çok tatlısın ama bende şeker hastasıyım.",
    "Tebrikler kazandınız, şimdi tencere oldunuz!"
  ]
message.channel.send(
new Discord.RichEmbed()

.setDescription(espri)



)};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'espri',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Bot size espri yapar',//Komutun Açıklaması
  kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-eğlence-efekt-yetkili2-iletişim
  usage: 'espri' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
