const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()

.setFooter("Çok Yakında . . .")
.setColor("BLUE")
.setAuthor("Müzik 🎶")
.setDescription(`
Heyy <@${message.author.id}> !!

Ben Müzik İşlerine Bakmıyorum !!
Müzik İçin **Kraliçe** Botunu Sunucuna Ekle

(Hala Yapım Aşamasında Kendisi)`)


    message.reply({embeds: [embed]})


},

name: "m#ü$z#i$k½>£#$>£#½$",
description: "Müzik Hakkında Bilgi !!",
aliases: [''],
kategori: "d£>i#>£ğ#$£#e$#r",
usage: "",
}
