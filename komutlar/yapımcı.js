const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor("Yapımcı 👑")
.setDescription(`Heyy Merhaba,
Ben <@${client.user.id}> Botun Yapımcısı **👑 Kral Arda 👑 #9923**
Öncelike Botumu Sunucunuza Eklediğiniz İçin Teşekkür Ederim !! 😃

    <@${client.user.id}> Botunun Amacı Sunucunuzu Korumaktır Ve Bu Koruma İşini Yaparken Bir Yandan Yetkilileri Ve Üyelerinizi Eğlendirmektir !!
Ayrıca k!müzik Konusuna Gelirsek Burada **Kraliçe** Botu Devreye Giriyor Çünkü <@${client.user.id}> Botun Bu Kadar Fazla İşi Aynı Anda Yaparken Fazla Zorlanacağını Düşündüm !!
Ve Son Olarak <@${client.user.id}> Bota Haftalık Veya Aylık Güncellemeler Gelmeye Devam Edicek !!

Eğer <@${client.user.id}> Botta Bug Veya Çökmeye Sebep Olabilecek Hata Bulursanız Bana Bildirin !!
[Kral Bot Destek Sunucusu](https://discord.gg/m2m6UjdkCW)

Teşekkürler . . . 


**Not:** Açılışa Özel Botun Datası Resetlenecektir Yani Moderasyon Komutlarını Ve Benzeri Komutları Tekrar Ayarlamanız Gerekecek !!
`)
.setFooter(`Datalar Sadece Açılışa Özel Olarak Sıfırlanıp Bir Daha Sıfırlanmicaktır !!`)


    message.reply({embeds: [embed]})


},

name: "yapımcı",
description: "Yapımcımdan Size +1 Mesaj !!",
aliases: [''],
kategori: "diğer",
usage: "",
}
