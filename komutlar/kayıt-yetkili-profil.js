const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {





   let kayıt_ytk     =     db.fetch(`kayıt_yetkili_${message.guild.id}`)
   let kayıt_erkek   =     db.fetch(`kayıt_erkek_rol_${message.guild.id}`)
   let kayıt_kız     =     db.fetch(`kayıt_kız_rol_${message.guild.id}`)
   let kayıtsız      =     db.fetch(`kayıt_kayıtsız_rol_${message.guild.id}`)
   let kayıt_log     =     db.fetch(`kayıt_kayıt_log_${message.guild.id}`)
   let kayıt_kanal   =     db.fetch(`kayıt_kayıt_kanal_${message.guild.id}`)




if(!kayıt_ytk) return message.reply(`**Kayıt Yetkilisi** rolü ayarlanmamış !! ❌`)
if(!message.member.roles.cache.has(kayıt_ytk)) return message.reply(`Sanırım rolün **Kayıt Yetkilisi** Değil !! ❌`)
if(!kayıt_erkek) return message.reply(`**Erkek** rolü ayarlanmamış !! ❌`)
if(!kayıt_kız) return message.reply(`**Kız** rolü ayarlanmamış !! ❌`)
if(!kayıtsız) return message.reply(`**Kayıtsız** rolü ayarlanmamış !! ❌`)
if(!kayıt_log) return message.reply(`**Kayıt Log** kanalı ayarlanmamış !! ❌`)
if(!kayıt_kanal) return message.reply(`**Kayıt** kanalı ayarlanmamış !! ❌`)



let member = message.mentions.users.first() && message.author.id
let kayıt = db.fetch(`kayıt_yetkilisi_${message.guild.id}_${member}`)
const embed = new Discord.MessageEmbed()

.setColor('BLUE')
.setAuthor('Kayıt Yetkilisinin Bilgileri 📄')
.setDescription(`
**Kayıt Yetkilisi;** <@${member}>

Yaptığı Kayıt Sayısı:
${kayıt ? kayıt : "0"}

`)
.setFooter('Kayıt Yetkilisi Hakkında Bilgilendirildi !! ✅')

message.reply({embeds:[embed]})


},

name: "kayıt-yetkili-profil",
description: "Kayıt Yetkilisinin Bilgilerini İfşalarım !! :D",
aliases: ["kayıtyetkiliprofil",'kayıt-yetkiliprofil','kayıtyetkili-profil'],
kategori: "moderasyon",
usage: "",
}