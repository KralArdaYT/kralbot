const Discord = require("discord.js");
const message = require("../events/message");



module.exports = {
    calistir: async(client, message, args) => {


var r = ["Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:",
"Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:","Tura :coin:","Yazı :coin:"
]

 let rs = r[Math.floor(Math.random()*r.length)]
 message.reply(`KralCoin :coin: Döndüü Hoopp :hushed:: **${rs} !!**`)




},

name: "yazı-tura",
description: "Bakalım Ne Çıkıcak :) !!",
aliases: ['yazıtura'],
kategori: "eğlence",
usage: "",
}
