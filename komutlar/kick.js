const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Üyeleri Kickle Yetkiniz Yok !!")


/////  !kick @kişi @sebep

        let user = message.mentions.users.first();
        let sebep = args[1]


        if(!user) return message.reply('Kicklenecek Kişiyi Etikelemeniz Gerek !! Doğru Kullanım: k!kick @kişi @sebep**')
        if(!sebep) return message.reply("Kicklenme Sebebi Belirtiniz !! **Doğru Kullanım: k!kick @kişi @sebep**")


const üye = message.guild.members.cache.get(user.id)

üye.kick({reason: sebep})


const kick = new Discord.MessageEmbed()
.setAuthor("Kick 🔨")
.setColor("BLUE")
.setDescription(`${user}, Adlı kullanıcıyı sunucudan attım !! 🔨
Atılma Sebebi: **${sebep}**`)


message.reply({embeds:[kick]})


},

name: "kick",
description: "Belirlenen kişiyi sunucudan atarım ama tekrardan geri gelebilir :)",
aliases: [],
kategori: "moderasyon",
usage: "",
}