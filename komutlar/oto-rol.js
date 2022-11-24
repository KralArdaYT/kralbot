const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {





        let bos = args[0]

      

if(!bos) return message.reply(`Lütfen Komutu Doğru Kullanınız !! ❌ **Doğru Kullanım: ${ayarlar.prefix}otorol kanal #kanal | ${ayarlar.prefix}otorol rol @rol **`)

if(args[0] == "rol"){

  let rol = message.mentions.roles.first();

  if(!rol) return message.reply(`Bir Rol Belirtmeniz Gerek !! ❌`)

    db.set(`otorol_rol_${message.guild.id}`, rol.id)
    message.reply(`Artık ${rol} isimli rolü gelen yeni kişilere vereceğim !! ✅`)
}


if(args[0] == "kanal"){
    let kanal = message.mentions.channels.first();

    if(!kanal) return message.reply(`Bir Kanal Belirtmeniz Gerek !! ❌`)
    db.set(`otorol_kanal_${message.guild.id}`, kanal.id)
    message.reply(`Artık ${kanal} isimli kanala rol verdiğim kişileri yazıcam !! ✅`)
}

if(args[0] == "sıfırla"){

    db.delete(`otorol_kanal_${message.guild.id}`)
    db.delete(`otorol_rol_${message.guild.id}`)
    message.reply(`Sistemi başarılı bir şekilde sıfırlandım !! ✅`)

}




},

name: "oto-rol",
description: "Yeni Gelen Kişilere Seçtiğiniz Rol Otomatik OLarak Veririm !!",
aliases: ['otorol'],
kategori: "moderasyon",
usage: "",
}