const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        let xpmesaj = db.fetch(`kxp_mesaj_${message.guild.id}`)
        let xplevel = db.fetch(`kxp_level_${message.guild.id}`)
        let levellog = db.fetch(`level_log_${message.guild.id}`)
        let leveltebrik = db.fetch(`level_tebrik_${message.guild.id}`)
        let leveltebrik2 = db.fetch(`level_tebrik_${message.guild.id}`) 
        let son;
        if(leveltebrik2 === true){
            son = "Açık"
        }else{
            son = "Kapalı"
        }



        const menu = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setFooter('"kXp = Xp" :D')
        .setDescription(`
        > Doğru Kullanım;
        **${ayarlar.prefix}level-ayarla kxp-mesaj @miktar :** Mesaj Başına Kaç kXp Geleceğini Belirlesiniz !! [Otomatik Ayar: 1,5 kXp ✅]
        **${ayarlar.prefix}level-ayarla kxp-level @kXp:** Kullanıcının Kaç kXpde Level Atlaması Gerektiğini Belirlesiniz !! [Otomatik Ayar: 350 kXp ✅]
        **${ayarlar.prefix}level-ayarla log #kanal:** Kullanıcılar Level Atladığında Bu Kanala Yazarım !!
        **${ayarlar.prefix}level-ayarla tebrik-mesaj @mesaj:** Bir Kullanıcı Level Atladığında Onu Bu Mesaj İle Tebrik Ederim [Otomatik Ayar: **Kapalı** ❌]
        
        > Ayarlar; 
        Mesaj başına Verilecek kXp: **${xpmesaj ? xpmesaj : 1}**
        Kaç kXpde Bir Level Atlanabilir: **${xplevel ? xplevel : 350}**
        Level Log: <#${levellog ? levellog : "Ayarlanmamış !! ❌"}>
        Tebrik Mesajı: **${son}**


        `)

        if(!args[0]) return message.reply({embeds:[menu]})

        if(args[0] === "kxp-mesaj"){
            let miktar = args[1]
            if(!miktar) return message.reply(`Lütfen her bir mesaj için verilecek xp değerini yazınız.`)
            db.set(`kxp_mesaj_${message.guild.id}`, Number(miktar))
            message.reply(`Başarıyla Mesaj Başına Gelen Xpyi **${miktar}** Olarak Ayarladım !! ✅`)
        }
        if(args[0] === "kxp-level"){
            let miktar = args[1]
            if(!miktar) return message.reply(`Kaç **Xp*de Bir Level Atlancağını Belirleyiniz !!`)
            db.set(`kxp_level_${message.guild.id}`, Number(miktar))
            message.reply(`Level Atlamak İçin Gerekli Olan kXp"yi **${miktar}** Olarak Ayarladım !! ✅`)
        }
        if(args[0] === "tebrik-mesaj"){
            let kontrol1 = db.fetch(`level_tebrik_${message.guild.id}`)
            console.log(kontrol1)
            if(kontrol1){
                db.set(`level_tebrik_${message.guild.id}`, false)
                message.reply(`Artık Level Atlayanları Tebrik Etmicem !! ❌`)
            }
            if(!kontrol1){
                db.set(`level_tebrik_${message.guild.id}`, true)
                message.reply(`Artık Level Atlayanları Tebrik Edicem !! ✅`)
            }

        }
        if(args[0] === "log"){
            let kanal =  message.mentions.channels.first();
            if(!kanal) return message.reply(`Lütfen level log kanalını belirtiniz.`)
            db.set(`level_log_${message.guild.id}`, kanal.id)
            message.reply(`Başarılı bir şekilde level log kanalı ${kanal} olarak ayarlandı.`)
        }




},

name: "level-ayarla",
description: "Sunucunuz İçin En İyi Ve Gelişmiş Level Sistemi !!",
aliases: ["levelayarla"],
kategori: "",
usage: "",
}