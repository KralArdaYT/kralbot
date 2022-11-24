const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Ping-Pong 🏓")
.setDescription(`Pongum: ${Math.round(message.client.ws.ping)} MS`)

message.reply({embeds: [embed]})


},

name: "ping",
description: "Anlık Pongumu Görürsünüz :D",
aliases: ['pong'],
kategori: "diğer",
usage: "",
}
