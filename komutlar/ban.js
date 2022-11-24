const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Üyeleri Banla Yetkiniz Yok !! ❌")


/////  !ban @kişi @sebep

        let user = message.mentions.users.first();
        let sebep = args[1]


        if(!user) return message.reply("Banlanacak Kişiyi Etikelemeniz Gerek ❌!! **Doğru Kullanım: k!ban @kişi @sebep**")
        if(!sebep) return message.reply("Banlanma sebebi belirtiniz ❌!! **Doğru Kullanım: k!ban @kişi @sebep**")


const üye = message.guild.members.cache.get(user.id)

üye.ban({reason: sebep })


const ban = new Discord.MessageEmbed()
.setAuthor("Banlandı 🔨")
.setColor("BLUE")
.setDescription(`${user}, Adlı Kullanıcıyı Banladım :D !! 🔨

**Banlanma Sebebi:** ${sebep}`)
.setFooter('Kişi Başarıyla Banlandı ✅')


message.reply({embeds:[ban]})


},

name: "ban",
description: "Belirlenen kişiyi banlarım :D",
aliases: [''],
kategori: "moderasyon",
usage: "",
}
