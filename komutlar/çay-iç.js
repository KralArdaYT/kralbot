const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")

module.exports = {
    calistir: async(client, message, args) => {

        const {MessageActionRow, MessageButton} = require("discord.js")

const menu1 = new Discord.MessageEmbed()
.setAuthor(`Lıkır Lıkır İçelim ☕`)
.setColor("BLUE")
.setDescription(`**Simitte Benden Olsun He Al Bakalım 🥯!!

Peki Ya Çay Nasıl Olmuş Beğendin Mi?**`)
.setFooter(`👍Çayı Beğendim !! 👎Çayı Beğenmedim !!`)
.setImage(`https://i4.hurimg.com/i/hurriyet/75/750x422/5dc862bf18c77314ccec2acc.jpg`)

const butonlar = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('beğendim_çay')
    .setEmoji('👍')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('beğenmedim_çay')
    .setEmoji('👎')
    .setStyle('DANGER')
);


message.reply({embeds:[menu1] , components: [butonlar] }).then(async function(mesaj) {


    mesaj.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

		await button.deferUpdate();

        if(button.customId === "yardım"){

            const menu2 = new Discord.MessageEmbed()
            .setAuthor(`---`)
            .setColor("---")
            .setDescription(`---`)
            mesaj.edit({embeds:[menu2]})

        }
        


       if(button.customId === "beğendim_çay"){


    const beğendim = new Discord.MessageEmbed()
    .setAuthor('WaoW')
    .setColor(`GREEN`)
    .setDescription(`**Teşekkür Ederim Ama Zaten Genellikle Herkes Çayımı Beğenir !! 😊**`)
    .setFooter(`Yeniden İçmek İstermisin? "k!çay-koy" - "k!çay-iç"`)
        mesaj.edit({embeds:[beğendim]})



        }

               if(button.customId === "beğenmedim_çay"){


    const beğenmedim = new Discord.MessageEmbed()
    .setAuthor(`Uhgg`)
    .setColor(`RED`)
    .setDescription(`**Hmm Sanırım Biraz Daha Isınmasını Beklemem Gerekiyodu !! 🤨**`)
    .setFooter(`Yeniden İçmek İstermisin? "k!çay-koy" - "k!çay-iç"`)
        mesaj.edit({embeds:[beğenmedim]})



        }
             

    })})

},

name: "çay-iç",
description: "Birlikte Çay İçer Simit Yeriz !!",
aliases: ["çayiç"],
kategori: "eğlence",
usage: "",
}
