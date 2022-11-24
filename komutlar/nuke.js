const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")
const wait = require("ms")

module.exports = {
    calistir: async(client, message, args) => {


if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply('NUKE Atmak İçin Komutanının İzini Ve Gerekli Yetkiye Sahip Değilsin !! ❌')


message.channel.clone().then(channel => {
channel.setPosition(message.channel.position)
})
message.channel.delete()



},

name: "nuke",
description: "Belirlenen kanaldaki tüm mesajları silerim !! (Bunu General-Sohbet Gibi Kanallarda Yapmanızı ÖNERMİYORUM !!)",
aliases: [""],
kategori: "moderasyon",
usage: "",
}
