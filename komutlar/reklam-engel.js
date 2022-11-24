const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`**Bu komutumu kullanabilmek için **"Yönetici"** yetkisine sahip olman gerek !!** ❌`);



let test = db.fetch(`reklamengel_${message.guild.id}`);

if (test)  {

    db.delete(`reklamengel_${message.guild.id}`);
    message.channel.send("Reklam Engel Sistemim **Kapatıldı** ❌")

    return
}

if (!test)  {

    db.set(`reklamengel_${message.guild.id}`, true);
    message.channel.send("Reklam Engel Sistemim **Açıldı** ✅")

    return
}



},

name: "reklam-engel",
description: "Reklam Engel Sistemimi Aç/Kapat !!",
aliases: ['reklamengel'],
kategori: "moderasyon",
usage: "",
}