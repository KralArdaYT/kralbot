const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {
        
        let kxp = db.fetch(`kxp_${message.guild.id}_${message.author.id}`)
        let lvl = db.fetch(`lvl_${message.guild.id}_${message.author.id}`)


        const embed = new Discord.MessageEmbed()
        .setDescription(`
        > Levelin ✨: **${lvl ? lvl :0}**
        > kXp'in ✨ : **${kxp ? kxp : 0}**
        `)

        message.reply({embeds:[embed]})



},

name: "level",
description: "Kullanıcılar Buradan Kaçıncı Levelde Oldularını Öğrenebilirler !!",
aliases: ["level-öğren", "levelöğren", "lvl"],
kategori: "",
usage: "",
}