const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Yetkiniz bunu kullanmak için yetersiz !! ❌")

let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

if(!user) return message.reply("Rol vermem için birisini etiketle !! (k!rol ver @kişi @rol)")
if(!rol) return message.reply("Rol olmadan rol veremem lütfen rolü etiketle !! (k!rol ver @kişi @rol)")


message.guild.members.cache.get(user.id).roles.add(rol)

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Rol Ver")
.setDescription(`Tebrikler ${user} !! Artık ${rol} isimli role sahipsin :)`)
.setFooter('Rol başarıyla verildi !!')

message.reply({embeds:[embed]})





},

name: "rol-ver",
description: "Benden büyük yetkisi olmayan birine isteğiniz rolü veririm !!",
aliases: ['rolver'],
kategori: "moderasyon",
usage: "",
}