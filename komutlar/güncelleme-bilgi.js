const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()

.setColor(`BLUE`)
.setAuthor(`Güncelleme Bilgi ✅`)
.setDescription(`**Kral Bot 👑 v3.0 Güncellemesi**
1- Altyapı Tümüyle Değiştirilerek Yeniden Kodlandı !! ✅
2- Ekonomi Sistemi Eklendi !! ✅
3- Kayıt Sistemi Eklendi !! ✅
4- Level Sistemi Eklendi !! ✅
5- Oto-Rol Sistemi Eklendi !! ✅
6- Butonlu Mute Eklendi !! ✅
7- Yavaş Mod Eklendi !! ✅
8- Hg-bb (Karşılama) Komutu Eklendi !! ✅
9- Kullanıcı Bilgi Eklendi !! ✅
10- Nuke Komutu Eklendi !! ✅
11- Sayaç Komutu Eklendi !! ✅
12- Küfür Engel Komutu Eklendi !! ✅
13- Yardım Komutu Geliştirildi !! ✅
14- Eğlence Komutlarına Çay Ismarlama Komutu Eklendi !! ✅
15- Bazı Komutlar Kaldırıldı İlerki ellemelerde Geri Eklenbilirler !! ✅
16- Çökmeye Veya Hataya Sebep Olabilecek Buglar Fixlendi !! ✅
`)
.setFooter(`Güncelleme Tarihi 📑:`)

    message.reply({embeds: [embed]})


},

name: "güncelleme-bilgi",
description: "Güncellemem Hakkında Bilgi Veririm !!",
aliases: ['güncellemebilgi'],
kategori: "diğer",
usage: "",
}
