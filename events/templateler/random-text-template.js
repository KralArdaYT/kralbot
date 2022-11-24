const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {



var r = ["yazı1","yazı2"]

 let rs = r[Math.floor(Math.random()*r.length)]
 message.reply(`${rs}`)

    },

    name: "isim",
    description: "Açıklama",
    aliases: ['takma ad'],
    kategori: "kategori",
    usage: "",
    }
