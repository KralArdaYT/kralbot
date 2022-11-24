const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


    let user = message.mentions.users.first();

    if(!user) return message.reply('Yumruk Atmak İstediğin Birisini Etiketle !! ❌')
    
    const embed = new Discord.MessageEmbed()

    .setFooter(`İntikam Almak İçin "k!yumruk-at @sana-yumruk-atan-kişi"`)
.setColor("BLUE")
.setAuthor("Yumruk At 👊🐎")
.setDescription(`**Heyy ${user} !! <@${message.author.id}> Adlı Kullanıcı Sana Yumruk Attı !! 😱**`)
.setImage("https://www.cnet.com/a/img/resize/1fb0d6214c9df08330d4c372909d00ca627b88ea/2021/01/24/8c6453ea-8137-46ac-a4ae-5832e8272b6a/godzilla3.jpg?auto=webp&width=940")

message.reply({embeds: [embed]})


},

name: "yumruk-at",
description: "Etiketlediğin Kişiye Yumruk Atarsın !!",
aliases: ['yumrukat'],
kategori: "eğlence",
usage: "",
}
