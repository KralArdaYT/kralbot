const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


        let bos = args[0]
  

if(!bos) return message.reply(`Lütfen Komudumu Doğru Kullanınız !! **Doğru Kullanım: ${ayarlar.prefix}hg-bb kanal #kanal **`)


if(args[0] == "kanal") {

    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`Bir Kanal Etiketlemelisiniz !! ** Doğru Kullanım ${ayarlar.prefix}hg-bb kanal #kanal **`)


    db.set(`hg_bb_kanal_${message.guild.id}`, kanal.id)

    message.reply(`Başarılı Bir Şekilde HG-BB kanalını ${kanal} olarak ayarlandım !! ✅`)

}

if(args[0] == "sıfırla") {

    db.delete(`hg_bb_kanal_${message.guild.id}`)
    message.reply(`Başarılı bir şekilde hg-bb kanalını sıfırladım !! ✅ Yeni bir kanal ayarlayınız !! 🔧`)
}



},

name: "hg-bb-ayarla",
description: "Hg-bb Kanalı Ayarlarsınız Ve Sunucuya Yeni Katılan Üyelere Otomatik Olarak 'Hoşgeldin-Güle Güle' Derim !!",
aliases: ['hgbbayarla','hg-bbayarla','hgbb-ayarla'],
kategori: "moderasyon",
usage: "",
}
