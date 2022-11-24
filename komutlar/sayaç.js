const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {



const menu = new Discord.MessageEmbed()
.setAuthor(`Sayaç Hedefi Ve Sayaç Logunu Belirleyiniz !!`)
.setColor(`BLUE`)
.setDescription(`
**${ayarlar.prefix}sayaç log:** Sayaç İle İlgili Bildirimleri Buraya Atarım !!
**${ayarlar.prefix}sayaç hedef:** Sayaç Hedefini Belirlersiniz Ve Bende Bu Hedefe Göre Sayım Yapmaya Başlarım !!
`)
if(!args[0]) return message.reply({embeds:[menu]})

if(args[0] === "log"){
    let kanal = message.mentions.channels.first();

if(!kanal) return message.reply(`**Log** Kanalını Belirlemelisiniz !! ❌`)
db.set(`sayaç_log_${message.guild.id}`, kanal.id)
message.reply(`Başarıyla **Sayaç Log** Kanalını ${kanal} Olarak Ayarladım !! ✅`)
}

if(args[0] === "hedef"){
let hedef = args[1]

if(!hedef) return message.reply(`Sanırım **Hedef üye** Sayıyısını Bilmem Gerek !! ❌`)
if(isNaN(hedef)) return message.reply(`**Hedefi Harf** İle Yazarken Üşenmedin Mi? :D`)

db.set(`sayaç_hedef_${message.guild.id}`,hedef)
message.reply(`Sayaç hedefini **${hedef}** olarak ayarlandım !! ✅`)
}

if(args[0] === "sıfırla"){

let kontrol1 = db.fetch(`sayaç_log_${message.guild.id}`)
let kontrol2 = db.fetch(`sayaç_hedef_${message.guild.id}`)

if(!kontrol1 && !kontrol2) return message.reply(`**Hedef** Zaten Ayarlanmış !!`)
if(kontrol1) db.delete(`sayaç_log_${message.guild.id}`)
if(kontrol2) db.delete(`sayaç_hedef_${message.guild.id}`)
message.reply(`**Sayaç Hedefini** Sıfırladım !! ✅`)
}


},

name: "sayaç",
description: "Sayaç Sistemini Ayarlarım !!",
aliases: [""],
kategori: "moderasyon",
usage: "",
}