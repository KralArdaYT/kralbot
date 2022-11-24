const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {












    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Bunu İçin **Sunucuyu Yönet** Yetkisine İhtiyacın Var !! ❌")



const muteyardım = new Discord.MessageEmbed()
.setColor(`BLUE`)
.setAuthor(`Mute Ayar 🔧`)
.setDescription(`**
${ayarlar.prefix}mute-ayar rol @rol** = Mute Attığın Kişiye Bu Rolü Veririm !!

**${ayarlar.prefix}mute-ayar log #kanal** = Mute Atınca Bu Kanalda Size Bildiririm !!

**${ayarlar.prefix}mute-ayar mute-yetkilisi @yetkili-rol** = Sadece Mute Yetkilileri Mute Atabilir !!
`)

if(!args[1]) return message.reply({embeds:[muteyardım]})

if(args[0] == "rol") {

let rol = message.mentions.roles.first();


if(!rol) return message.reply(`Bir **Muted** Rolü Lazım !! ❌`)

db.set(`mute_rol_${message.guild.id}`, rol.id)

message.reply(`Mute Attığım Kişinin Tüm Rollerini Alıp ${rol} Adlı Rolü Vericem !! ✅`)




}

if(args[0] == "mute-yetkilisi"){

    let rol = message.mentions.roles.first();
    
    
    if(!rol) return message.reply(`Mute Atabilecek **Mute Yetkilisi** Rolü Seçmelisin !! ❌`)
    
    db.set(`mute_yetkilirol_${message.guild.id}`, rol.id)
    
    message.reply(`Sadece ${rol} Adlı Rolü Olan Yetkililer Mute Atabilicek !! ✅`)

    
    }
    

    if(args[0] == "log"){

        let kanal = message.mentions.channels.first();
        
        
        if(!kanal) return message.reply(`Bir **Mute Log** Kanalı Seçmelisin !! ❌`)
        
        db.set(`mute_kanal_${message.guild.id}`, kanal.id)
        
        message.reply(`Mute Atıldığında ${kanal} Adlı Kanalda Bunu Bildiricem !! ✅`)
    
        
        }










},

name: "mute-ayar",
description: "Mute Yetkili, Mute Log, Mute Rol Vb. Gibi Mute Komutlarını Ayarlarsın !!",
aliases: ["muteayar"],
kategori: "moderasyon",
usage: "",
}
