const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {



var r = ["Dinlemekte !!","Konuşmanı bekliyor . . . ","Buradaydı !!","Buradaydı !!","Buradaydı !!","Buradaydı !!","Buradaydı !!","Buradaydı !!","Buradaydı !!", "B U R A D A", "Ar7S1","Ar7A9"]

 let rs = r[Math.floor(Math.random()*r.length)]
 message.reply(`${rs}`)

    },

    name: "Üstünsoy",
    description: "Buradaydı",
    aliases: ['üstünsoy'],
    kategori: "üstün-baron",
    usage: "",
    }
