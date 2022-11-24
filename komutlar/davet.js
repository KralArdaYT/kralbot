const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor("Davet 🎫")
.setDescription(`
**Heyy Merhaba Demek Buraya Kadar Geldin Burada 2 Seçeneğin Var;


Beni Sunucuna Eklemek İçin [Tıkla](https://top.gg/tr/bot/689854211223322681)

Destek Sunucuma Gelmek İçin [Tıkla](https://discord.gg/m2m6UjdkCW)

**`)


    message.reply({embeds: [embed]})


},

name: "davet",
description: "Destek Sunucuma Katılmak Veya Beni Sunucuna Eklemek İçin Davet Linkleri !!",
aliases: [''],
kategori: "diğer",
usage: "",
}
