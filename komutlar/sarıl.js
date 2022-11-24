const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


    let user = message.mentions.users.first();

    if(!user) return message.reply('Sarılmak İstediğin Birisini Etiketle !! ❌')
    
    const embed = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor("Sarıl 😃")
.setDescription(`**<@${message.author.id}> Adlı Kullanıcı ${user} Adlı Kullanıcıya Sarıldı !! 😀**`)

message.reply({embeds: [embed]})


},

name: "sarıl",
description: "Etiketlediğin Kişiye Sarılırsın !!",
aliases: [''],
kategori: "eğlence",
usage: "",
}
