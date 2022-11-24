const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {



var r = ["Buyur geldim ne dicektin?","Konuşmanı bekliyorum . . . ","Evet?","Hadi ama","Ne lazımdı?"]

 let rs = r[Math.floor(Math.random()*r.length)]
 message.reply(`${rs}`)

    },

    name: "Arda",
    description: "Sa",
    aliases: ['arda'],
    kategori: "arda",
    usage: "arda",
    }
