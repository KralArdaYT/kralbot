const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()


.setColor("BLUE")
.setAuthor("Çayı Koydum ☕")
.setDescription(`**Birazdan İçeriz <@${message.author.id}> !!**`)
.setFooter("k!çay-iç")
.setImage("https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1474000/cay-istanbul-1475368.jpg")

    message.reply({embeds: [embed]})


},

name: "çay-koy",
description: "Çay Koyarım Ve Birlikte İçeriz !!",
aliases: ['çaykoy'],
kategori: "eğlence",
usage: "",
}
