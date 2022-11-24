const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


    let user = message.mentions.users.first();

    if(!user) return message.reply('Dans İstediğin Kişiyi Etiketle !! ❌')
    
    const embed = new Discord.MessageEmbed()


    
    .setColor("BLUE")
    .setAuthor(`'ıptıs' 'ıptıs'`)
    .setDescription(`**<@${message.author.id}> Adlı Kullanıcı ${user} Adlı Kullanıcıyla Dans Ediyor !!**`)
    .setImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fd-s-la%2Fcat-dance&psig=AOvVaw0VMxysJ1VQoypSlzZlekH7&ust=1666539195427000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKj64LeU9PoCFQAAAAAdAAAAABAE")



    message.reply({embeds: [embed]})


},

name: "dans-et",
description: "Etiketlediğin Kişiyle Dans Edersin !!",
aliases: ['dans-et','danset'],
kategori: "eğlence",
usage: "",
}
