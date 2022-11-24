const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()



    .setAuthor("error 411")
    .setDescription('*Just Monika Just Monika Just Monika Just Monika Just Monika Just Monika Just Monika Just Monika Just Monika Just Monika Just Monika*')
    .setFooter('hata böyle bir komut bulunamadı')
    .setColor("LUMINOUS_VIVID_PINK")


    message.reply({embeds: [embed]})


},

name: "Just Monika",
description: "Just Monika Just Monika Just Monika Just Monika",
aliases: ['just-monika','monika'],
kategori: "error",
usage: "",
}
