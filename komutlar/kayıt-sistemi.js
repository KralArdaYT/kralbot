const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {




const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Kayıt Sistemi 📥")
.setDescription(`
**👑-k!kayıt** = Kayıt Sisteminin Çalışması İçin Gerekli Olan Alt Yapıyı Ayarlarsınız !!
**👑-k!kayıt-erkek** = Erkeklerin Kayıt İşlemlerini Yaparım !!
**👑-k!kayıt-kız** = Kızların Kayıt İşlemlerini Yaparım !!
**👑-k!kayıt-isim-değiştir** = Zaten Kayıt Edilmiş Bir Üyenin Adını Değiştiririm !!
**👑-k!kayıt-yetkili-profil** = Kayıt Yetkilisinin Bilgilerini İfşalarım !! :D
**👑-k!kayıt-kayıtsıza-düşür** = Üyeleri Kayıtsıza Düşürürüm !!
`)
        
message.reply({embeds: [embed]})



    },

    name: "kayıt-sistemi",
    description: "Kayıt İle İlgili Komutlarım Burada !!",
    aliases: ["kayıtsistemi"],
    kategori: "sistemler",
    usage: "",
    }
