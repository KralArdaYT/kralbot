const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {

        const kulsayi = []
        client.guilds.cache.forEach((item, i) => {
            kulsayi.push(item.memberCount)
        });
        var toplamkulsayi = 0
        for (var i = 0; i < kulsayi.length; i++) {
            if (isNaN(kulsayi[i])){
                continue;
            }
      
            toplamkulsayi += Number(kulsayi[i])
        }
      
    
    const embed = new Discord.MessageEmbed()

.setColor(`BLUE`)
.setAuthor(`Bot Bilgi 📉`)
.setDescription(`

Sunucu Sayısı 📜: **${client.guilds.cache.size}**

Kullanıcı Sayısı 🎉: **${toplamkulsayi}**

Emoji Sayısı ✨: **${client.emojis.cache.size}**

Kanal Sayısı 📄: **${client.channels.cache.size}**

Ping-Pongum 🏓: **${Math.round(message.client.ws.ping)} MS**

Sahibim 👑: **👑 Kral Arda 👑 #9923**

`)


    message.reply({embeds: [embed]})


},

name: "bot-bilgi",
description: "açıklama",
aliases: ['botbilgi'],
kategori: "diğer",
usage: "",
}
