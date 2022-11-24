const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


    let user = message.mentions.users.first();

    if(!user) return message.reply('Çay Ismarlamak İstediğin Birisini Etiketle !! ❌')
    
    const embed = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor("Çay Ismarla ☕")
.setDescription(`Heyy ${user} !! <@${message.author.id}> Sana Çay Ismarladı Hadi Yine İyisin !! 😁`)
.setImage(`https://i.lezzet.com.tr/images-xxlarge-secondary/siyah-cayin-faydalari-nelerdir-7e134a19-a1ff-4e8f-86ee-6ee4899c9ec9.jpg`)


message.reply({embeds: [embed]})


},

name: "çay-ısmarla",
description: "Etiketlediğin Kişiye Çay Ismarlarsın !!",
aliases: ['çayısmarla'],
kategori: "eğlence",
usage: "",
}
