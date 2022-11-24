const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")
const ms = require("ms")

module.exports = {
    calistir: async(client, message, args) => {

        const {MessageActionRow, MessageButton} = require("discord.js")

const menu1 = new Discord.MessageEmbed()
.setAuthor(`Kral Bot 👑 Yardım Menüsü`)
.setColor("BLUE")
.setDescription(`

**Moderasyon** Komutlarımı Görmek İçin [🔨]

**Eğlence** Komutlarımı Görmek için [🔮]

**Tüm Sistemler** Komutlarımı Görmek için [📝]

**Diğer** Komutlarımı Görmek İçin [🔀]

**Ana Menüye** Dönmek İçin [🏡]

`)

const butonlar = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('moderasyon_yardım')
    .setEmoji('🔨')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('eğlence_yardım')
    .setEmoji('🔮')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('sistemler_yardım')
    .setEmoji('📝')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('diğer_yardım')
    .setEmoji('🔀')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('yardım')
    .setEmoji('🏡')
    .setStyle('SECONDARY'),   
      

);


message.reply({embeds:[menu1] , components: [butonlar] }).then(async function(mesaj) {

    setTimeout(async () => {
mesaj.delete().catch(err =>  console.log("Mesaj bulunamadığı için silemedim"))
      }, ms('1m'));

    mesaj.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

		await button.deferUpdate();

        if(button.customId === "yardım"){

            const menu2 = new Discord.MessageEmbed()
            .setAuthor(`Kral Bot 👑 Yardım Menüsü`)
            .setColor("BLUE")
            .setDescription(`
            
            **Moderasyon** Komutlarımı Görmek İçin [🔨]

            **Eğlence** Komutlarımı Görmek için [🔮]
            
            **Tüm Sistemler** Komutlarımı Görmek için [💰]
                        
            **Diğer** Komutlarımı Görmek İçin [🔀]
            
            **Ana Menüye** Dönmek İçin [🏡]
            
            `)
            mesaj.edit({embeds:[menu2]})

        }



        if(button.customId === "moderasyon_yardım"){


    const moderasyon = new Discord.MessageEmbed()
    .setAuthor(`Kral Bot 👑 Moderasyon Yardım Menüsü`)
    .setColor(`BLUE`)
    .setDescription(`
    ${client.commands
       
        .filter(cmds => cmds.kategori == "moderasyon")
      
        .map(nrc => `**👑-${ayarlar.prefix}${nrc.name}** = ${nrc.description || "**Hmm, Açıklamayla İlgi Bişey Bulamadım. BU İLGİNÇ !!**"}`)
      
        .join('\n')}
    `)
        mesaj.edit({embeds:[moderasyon]})



        }

       if(button.customId === "eğlence_yardım"){


    const eğlence = new Discord.MessageEmbed()
    .setAuthor('Kral Bot 👑 Eğlence Yardım Menüsü')
    .setColor(`BLUE`)
    .setDescription(`
    ${client.commands
       
        .filter(cmds => cmds.kategori == "eğlence")
      
        .map(nrc => `**👑-${ayarlar.prefix}${nrc.name}** = ${nrc.description || "**Hmm, Açıklamayla İlgi Bişey Bulamadım. BU İLGİNÇ !!**"}`)
      
        .join('\n')}
    `)
        mesaj.edit({embeds:[eğlence]})



        }

               if(button.customId === "sistemler_yardım"){


    const sistemler = new Discord.MessageEmbed()
    .setAuthor(`Kral Bot 👑 Tüm Sistemler Yardım Menüsü`)
    .setColor(`BLUE`)
    .setDescription(`
    ${client.commands
       
        .filter(cmds => cmds.kategori == "sistemler")
      
        .map(nrc => `**👑-${ayarlar.prefix}${nrc.name}** = ${nrc.description || "**Hmm, Açıklamayla İlgi Bişey Bulamadım. BU İLGİNÇ !!**"}`)
      
        .join('\n')}
    `)
        mesaj.edit({embeds:[sistemler]})



        }
             
                 if(button.customId === "diğer_yardım"){


    const diğer = new Discord.MessageEmbed()
    .setAuthor(`Kral Bot 👑 Diğer Yardım Menüsü`)
    .setColor(`BLUE`)
    .setDescription(`
    ${client.commands
       
        .filter(cmds => cmds.kategori == "diğer")
      
        .map(nrc => `**👑-${ayarlar.prefix}${nrc.name}** = ${nrc.description || "**Hmm, Açıklamayla İlgi Bişey Bulamadım. BU İLGİNÇ !!**"}`)
      
        .join('\n')}
    `)
        mesaj.edit({embeds:[diğer]})



        }


    })})

},

name: "yardım",
description: "",
aliases: [""],
kategori: "yardım",
usage: "",
}
