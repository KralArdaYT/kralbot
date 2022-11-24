const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {



var r = ["Şanslı Rakamın; 1 🎲 !!","Şanslı Rakamın; 2 🎲 !!","Şanslı Rakamın; 3 🎲 !!","Şanslı Rakamın; 4 🎲 !!","Şanslı Rakamın; 5 🎲 !!","Şanslı Rakamın; 6 🎲 !!"]

 let rs = r[Math.floor(Math.random()*r.length)]
 message.reply(`Heyy <@${message.author.id}> !! **${rs}**`)

    },

    name: "zar-at",
    description: "Açıklama",
    aliases: ['zar-at','zarat'],
    kategori: "eğlence",
    usage: "",
    }
