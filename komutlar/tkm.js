const Discord = require('discord.js');

var tkm = [
    "Taş",
    "Kağıt",
    "Makas"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Cevabım : " + (tkm[Math.floor(Math.random() * tkm.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["taşkağıtmakas", "taş", "makas", "kağıt"],
  permLevel: 0
};

exports.help = {
  name: 'tkm',
  kategori: 'eğlence',
  description: 'Bota Taş Kağıt Makas Oynatırsınız',
  usage: 'tkm'
};