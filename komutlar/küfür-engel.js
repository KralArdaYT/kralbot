const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`**Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerek !! ❌**`);



let test = db.fetch(`küfürengel_${message.guild.id}`);

if (test)  {

    db.delete(`küfürengel_${message.guild.id}`);
    message.channel.send("Küfür Engel Sistemim **Kapatıldı** !! ❌")

    return
}

if (!test)  {

    db.set(`küfürengel_${message.guild.id}`, true);
    message.channel.send("Küfür Engel Sistemim **Açıldı** !! ✅")

    return
}



},

name: "küfür-engel",
description: "Küfür Engel Sistemimi Aç/Kapat !!",
aliases: ['küfürengel'],
kategori: "moderasyon",
usage: "",
}
