const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


const menu = new Discord.MessageEmbed()
.setAuthor('Kayıt Sistemi Alt Yapısı 📝')
.setColor('BLUE')
.setFooter('Çok Uzun Oldu Dimi? :D')
.setDescription
(`
${ayarlar.prefix}kayıt kayıt-yetkilisi **@rol:** 
**Kayıt yetkilisi** rolünü ayarlarsınız !!

${ayarlar.prefix}kayıt erkek-rol **@erkek-üye-rolü:** 
**Erkek üye** rolünü ayarlarsınız !!

${ayarlar.prefix}kayıt kız-rol **@kız-üye-rolü:** 
**Kız üye** rolünü ayarlarsınız !!

${ayarlar.prefix}kayıt kayıtsız-rol **@kayıt-yapmayan-kişilere-verilecek-olan-rol:** 
**Kayıtsız** rolünü ayarlarsınız !!

${ayarlar.prefix}kayıt kayıt-log **#kayıt-olanların-bilirimi-bu-kanala-gidecek:** 
**Kayıt Log** kanalını ayarlarsınız !!

${ayarlar.prefix}kayıt kayıt-kanal **#asıl-olay-burada-kayıt-olucaklar:** 
**Kayıt kanalını** ayarlarsınız !!

`)

if(!args[0]) return message.reply({embeds: [menu]})

if(args[0] === "kayıt-yetkilisi"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`Lütfen **Kayıt Yetkilisi** rolünü etiketlemelisiniz !! ❌`)
db.set(`kayıt_yetkili_${message.guild.id}`, rol.id)
message.reply(`**Kayıt Yetkilisi** rolünü ${rol} olarak ayarladım !! ✅`)
}

if(args[0] === "erkek-rol"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`**Erkek** rolünü etiketlemelisiniz !! ❌`)
db.set(`kayıt_erkek_rol_${message.guild.id}`, rol.id)
message.reply(`**Erkek** rolünü ${rol} olarak ayarladım !! ✅`)
}
if(args[0] === "kız-rol"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`**Kız** rolünü etiketlemelisiniz !! ❌`)
db.set(`kayıt_kız_rol_${message.guild.id}`, rol.id)
message.reply(`**Kız** rolünü ${rol} olarak ayarladım !! ✅`)
}
if(args[0] === "kayıtsız-rol"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`**Kayıtsız** rolünü etiketlemelisiniz !! ❌`)
db.set(`kayıt_kayıtsız_rol_${message.guild.id}`, rol.id)
message.reply(`**Kayıtsız** rolünü ${rol} olarak ayarladım !! ✅`)
}

if(args[0] === "kayıt-log"){
let kanal = message.mentions.channels.first()

if(!kanal) return message.reply(`**Kayıt Log** kanalını etiketlemeniz gerek !! ❌`)
db.set(`kayıt_kayıt_log_${message.guild.id}`, kanal.id)
message.reply(`**Kayıt Log** kanalını ${kanal} olarak ayarladım !! ✅`)
}


if(args[0] === "kayıt-kanal"){
let kanal = message.mentions.channels.first()

if(!kanal) return message.reply(`**Kayıt Kanal** kanalını etiketlemeniz gerek !! ❌`)
db.set(`kayıt_kayıt_kanal_${message.guild.id}`, kanal.id)
message.reply(`**Kayıt Kanal** kanalını ${kanal} olarak ayarladım !! ✅.`)
}
},

name: "kayıt",
description: "Kayıt Sisteminin Çalışması İçin Gerekli Olan Alt Yapıyı Ayarlarsınız !!",
aliases: [],
kategori: "",
usage: "",
}
