const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor(`Mute Sistemi 🔨`)
.setFooter(`Ayrıca Botlara Mute Atamazsınız Hata Verir 😐`)
.setDescription(`
**👑-k!mute** = Asıl Olay Burada Başlıyor !! 😎
**👑-k!mute-ayar** = Mute Yetkili, Mute Log, Mute Rol Vb. Gibi Mute Komutlarını Ayarlarsın !!
**👑-k!mute-ayar rol @rol** = Mute Attığın Kullanıcıya Bu Rolü Veririm !!
**👑-k!mute-ayar log #kanal** = Mute Atınca Bu Kanalda Size Bildiririm !!
**👑-k!mute-ayar mute-yetkilisi @yetkili-rol** = Sadece Mute Yetkilileri Mute Atabilir !!
`)
    


    message.reply({embeds: [embed]})


},

name: "mute-sistemi",
description: "Mute İle İlgili Komutlarım Burada !!",
aliases: ['mute-sistemi'],
kategori: "sistemler",
usage: "",
}
