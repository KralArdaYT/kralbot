const Discord = require("discord.js");
const db = require("nrc.db")
const ms = require('rhino-ms')


module.exports = {
    calistir: async(client, message, args) => {



        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`**Bu komutumu kullanabilmek için **"Yönetici"** yetkisine sahip olman gerek !!** ❌`);

        const zaman = ms(args.join(" "), {birim: "saniye"})
        if(!args[0]) return message.channel.send("Lütfen Bir Zaman Dilimi Belirtin !! Örnek: k!yavaşmod 10s = Yavaş Mod 10 saniye olarak ayarlanır !! Rakamın Sonunda 'H = Saat M = Dakika S = Saniye' yazınız yoksa sistemim hata verir !! ❌")
        if (zaman < 0 || zaman > 21600) return message.reply('0 Saniye ile 6 Saat Arası Birim Giriniz !!')
        const slowmode = Math.floor(zaman)
        message.channel.setRateLimitPerUser(slowmode)
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTimestamp()
        .setColor("BLUE")
        .setTitle('Yavaş Modu Ayarladım ✅')
        .setDescription(`**Yavaş Mod Ayarladığım Kanal: ** <#${message.channel.id}>
        **Süre: **` + args.join(" "))
        .setImage("https://cdn.glitch.me/2f9a3bcc-456b-4787-9a0f-e65e286ea42e%2Fstandard_28.gif")
        message.channel.send({embeds: [embed]})



},

name: "yavaş-mod",
description: "Belirlenen Kanalı Yavaş Moda Alırım !!",
aliases: ["yavaşmod",'slowmode','slow-mode'],
kategori: "moderasyon",
usage: "",
}
