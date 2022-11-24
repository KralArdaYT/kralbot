const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {




const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Level Sistemi ✨")
.setDescription(`
**👑-k!level-ayarla** = Sunucunuz İçin En İyi Ve Gelişmiş Level Sistemi !!
**👑-k!leve-öğren** = Kullanıcılar Buradan Kaçıncı Levelde Oldularını Öğrenebilirler !!
**👑-k!level-ayarla kxp-mesaj @miktar* = Mesaj Başına Kaç kXp Geleceğini Belirlesiniz !! [Otomatik Ayar: 1,5 kXp ✅]
**👑-k!level-ayarla kxp-level @kXp* = Kullanıcının Kaç kXpde Level Atlaması Gerektiğini Belirlesiniz !! [Otomatik Ayar: 350 kXp ✅]
**👑-k!level-ayarla log #kanal** = Kullanıcılar Level Atladığında Bu Kanala Yazarım !!
**👑-k!level-ayarla tebrik-mesaj @mesaj** = Bir Kullanıcı Level Atladığında Onu Bu Mesaj İle Tebrik Ederim [Otomatik Ayar: **Kapalı** ❌]
`)
        
message.reply({embeds: [embed]})



    },

    name: "level-sistemi",
    description: "Level İle İlgili Komutlarım Burada !!",
    aliases: ["levelsistemi"],
    kategori: "sistemler",
    usage: "",
    }