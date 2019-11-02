const discord = require("discord.js")

var minecraft = [
  "herobrine",
  "zombi",
  "creeper",
  "steve",
  "domuz",
  "at",
  "koyun",
  "inek",
  "örümcek",
  "tavuk",
  "köpek"
];
exports.run = async(client, message, args) => {

const karakter = minecraft[Math.floor(Math.random() * minecraft.length)];
var resim = ""
if (karakter === "herobrine") {
 resim = "https://resmim.net/f/S3Imnc.png"
}

if (karakter === "zombi") {
 resim = "https://resmim.net/f/ryVLuc.png"
}

if (karakter === "creeper") {
 resim = "https://resmim.net/f/sLc08P.png"
}

if (karakter === "steve") {
 resim = "https://resmim.net/f/XVXT91.png"
}

if (karakter === "domuz") {
  resim = "https://resmim.net/f/M6aTGp.png"
}

if (karakter === "at") {
  resim = "https://resmim.net/f/X6zdlR.png"
}

if (karakter === "koyun") {
  resim = "https://resmim.net/f/zsbCBc.png"
}

if (karakter === "inek") {
  resim = "https://resmim.net/f/uA1ab5.png"
}

if (karakter === "örümcek") {
  resim = "https://resmim.net/f/gyBHF2.png"
}

if (karakter === "tavuk") {
  resim = "https://resmim.net/f/XTfPva.png"
}

if (karakter === "köpek") {
  resim = "https://resmim.net/f/eLpyKK.png"
}

message.channel.send(
new discord.RichEmbed()
.setTitle("Minecraft Karakter")
.setDescription(message.author.toString() + " **Karakterin:** " + karakter)
.setImage(resim)
  );
}

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ["mc", "mckarakterim", "minecraftkarakterim"],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'minecraft',//Komutun adı (Komutu girerken lazım olucak)
  category: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  description: 'Temsil ettiğiniz minecraft karakterini gösterir',//Komutun Açıklaması
  usage: 'minecraft' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
