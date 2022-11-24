const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Sanırım Yetkin Bunu Yapmak İçin Yetersiz !! ❌")

let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

if(!user) return message.reply("Rol almam için birisini etiketle !! **Doğru Kullanım: k!rol al @kişi @rol**")
if(!rol) return message.reply("Rol olmadan rol alamam lütfen rolü etiketle !! **Doğru Kullanım: k!rol al @kişi @rol**")


message.guild.members.cache.get(user.id).roles.remove(rol)

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Rol Al ❌")
.setDescription(`Üzgünüm ${user} !! Artık ${rol} isimli role sahip değilsin :/`)
.setFooter('Rol başarıyla alındı !! ✅')

message.reply({embeds:[embed]})





},

name: "rolal",
description: "Benden büyük yetkisi olmayan birinden isteğiniz rolü alırım !!",
aliases: ['rol-al'],
kategori: "moderasyon",
usage: "",
}