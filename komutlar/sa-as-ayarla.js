const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {


let saas = db.fetch(`saas_${message.guild.id}`)


if(!saas) {
db.set(`saas_${message.guild.id}`, true)
message.reply(`Sa As Sistemim Başarılı Bir Şekilde **Aktif Edildi** !! ✅`)
return;
}
db.delete(`saas_${message.guild.id}`)

message.reply(`Sa As Sistemim Başarılı Bir Şekilde **Kapatıldı** !! ✅`)




},

name: "sa-as-ayarla",
description: "Sa As sistemimi aç/kapat",
aliases: ['saasayarla','sa-asayarla','saas-ayarla'],
kategori: "moderasyon",
usage: "",
}