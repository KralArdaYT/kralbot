const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


    let user = message.mentions.users.first();

    if(!user) return message.reply('Birisini Etiketle !! ❌')
    
    const embed = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor("")
.setDescription(``)


message.reply({embeds: [embed]})


},

name: "isim",
description: "açıklama",
aliases: ['takmad'],
kategori: "kategori",
usage: "",
}
