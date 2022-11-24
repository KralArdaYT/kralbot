const Discord = require("discord.js");


module.exports = {
    calistir: async(client, message, args) => {


    let user = message.mentions.users.first();

    if(!user) return message.reply('Tokat Atmak İstediğin Birisini Etiketle !! ❌')
    
    const embed = new Discord.MessageEmbed()



    .setFooter(`İntikam Almak İçin "k!tokat-at @sana-tokat-atan-kişi"`)
    .setColor("BLUE")
    .setAuthor("Tokat At ✋")
    .setDescription(`**Heyy ${user} !! <@${message.author.id}> Adlı Kullanıcı Sana Tokat Attı !! 😱**`)
    .setImage("https://img.piri.net/mnresize/720/2000/resim/upload/2022/03/29/07/00/8397f7fd012.jpg")
    


message.reply({embeds: [embed]})


},

name: "tokat-at",
description: "Etiketlediğin Kişiye Tokat Atarsın !!",
aliases: ['tokatat'],
kategori: "eğlence",
usage: "",
}
