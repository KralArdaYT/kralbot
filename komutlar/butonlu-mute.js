const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")
const {MessageActionRow, MessageButton} = require("discord.js")
const ms = require("ms")


module.exports = {
    calistir: async(client, message, args) => {





    let kontrol = db.fetch(`mute_rol_${message.guild.id}`)
    let kontrolkanal = db.fetch(`mute_kanal_${message.guild.id}`)
    let kontrolmuteytkrol = db.fetch(`mute_yetkilirol_${message.guild.id}`)
    
    
    if(!kontrol) return message.reply(`Mute Rolü Ayarlanmamış !! Ayarlamak için **${ayarlar.prefix}mute-ayar rol @mute**`)
    if(!kontrolkanal) return message.reply(`Mute Log Ayarlanmamış !! Ayarlamak için **${ayarlar.prefix}mute-ayar log #kanal**`)
    if(!kontrolmuteytkrol) return message.reply(`Mute Yetkilisi Rolünü Ayarlanmamış !! Ayarlamak için **${ayarlar.prefix}mute-ayar mute-yetkilisi @yetkili** `)
    
    
if(!message.member.roles.cache.has(db.fetch(`mute_yetkilirol_${message.guild.id}`))) return message.reply(`Bu Komudu Sadece **Mute Yetkilisi** Olarak Belirtilen Role Sahip
Olan Yetkililer Kullanabilir !! ❌`)

    let user = message.mentions.users.first();


    if(!user) return message.reply(`Mute Atmam İçin Birisini Etiketlemelisin !! ❌`)

let mutesebep = args[1]



const butonlar = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('mute_red')
    .setLabel('İptal Et')
    .setStyle('DANGER'),
    new MessageButton()
        .setCustomId('mute_onay')
        .setLabel('Onayla')
        .setStyle('SUCCESS'),
      

);



const muteembed = new Discord.MessageEmbed()
.setDescription(`
${user} Adlı Kişiye Mute Atmamı İstiyormusunuz?
Sebep: ${mutesebep ? mutesebep : "YOK"}
`)


    message.reply({embeds:[muteembed] , components: [butonlar] }).then(async function(mesaj) {

        setTimeout(async () => {
    mesaj.delete().catch(err =>  console.log("Mesaj bulunamadığı için silemedim"))
          }, ms('20s'));
    
        mesaj.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {


if(button.user.id !== message.author.id) return message.channel.send({ content: "Denemeye Değer !!", ephemeral: true})
let üye = message.guild.members.cache.get(user.id)
if(button.customId === "mute_onay"){

    let muterol = db.fetch(`mute_rol_${message.guild.id}`)
    üye.roles.set([ muterol ])
mesaj.delete().catch(err => console.log(`Mesajı silemedim silinmiş olabilir`))
message.channel.send(`Başarıyla ${user} Adlı Kullanıcıya Mute Attım !! ✅`)
}


console.log(button.customId)

if(button.customId ===  "mute_red"){
    mesaj.delete().catch(err => console.log(`Mesajı silemedim silinmiş olabilir`))
    message.channel.send(`Mute Atma İşlemi İptal Edildi !! ✅`)
}



})








    }) 
    
















},

name: "mute",
description: "Asıl Olay Burada Başlıyor !! 😎",
aliases: [""],
kategori: "",
usage: "",
}