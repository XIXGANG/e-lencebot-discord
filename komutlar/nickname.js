const Discord = require('discord.js');

var nickname = [
  "Sniper",
  "Expert Murderer",
  "Hyper",
  "Pluto",
  "Alpha",
  "Judge",
  "Ruling",
  "Rooster",
  "Fear",
  "Shooter",
  "Mental",
  "Game Mafia",
  "Trip",
  "Nacho",
  "Soldier",
  "Rookie",
  "Osprey",
  "Curio",
  "Frenzy",
  "Wings",
  "Habbink",
  "Senin Gibi Bir Efsaneye NickName Bulamadım :C"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Nickname : " + (nickname[Math.floor(Math.random() * nickname.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nick", "nn", "rastgelenick", "rastgelenickname"],
  permLevel: 0
};

exports.help = {
  name: 'nickname',
  kategori: 'eğlence',
  description: 'Rastgele nickname belirler',
  usage: 'nickname'
};
