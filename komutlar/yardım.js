const Discord = require("discord.js");

exports.run = async (bolat, message, args, tools, con) => {
    let yardım = new Discord.RichEmbed()
        .setDescription(`[Sunucuna Eklemek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=628183832050532367&scope=bot&permissions=8) \n[Oy Ver](https://top.gg/bot/628183832050532367/vote)`)
        .setColor("BLUE")
        .addField("**Bot Komutları**", `${bolat.commands.filter(cmd => cmd.help.kategori === 'bot').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("**Eğlence Komutları**", `${bolat.commands.filter(cmd => cmd.help.kategori === 'eğlence').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("**İletişim Komutları**", `${bolat.commands.filter(cmd => cmd.help.kategori === 'iletişim').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .setTimestamp()
    message.channel.send(yardım)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","komutlar"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  kategori: 'bot',
  description: 'Komutları gösterir.',
  usage: 'yardım'
};