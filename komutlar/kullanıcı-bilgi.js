const Discord = require("discord.js");
const moment = require(`moment`)


module.exports = {
    calistir: async(client, message, args) => {

    let member = message.mentions.members.last()  || message.member
    if(!member) {
        try {
            member = await message.guild.members.fetch(args[0])
    }    catch (err) {
            member = message.member ;
        }
    }

    let rolesname;
    let roles = member.roles.cache.sort((a, b) => b.position - a.position).map
    (role => role.toString()).slice(0, -1);

    rolesname = roles.join(" ")
    if(member.roles.cache.size < 1) rolesname = "**Rolü Yok !!**"
    if(!member.roles.cache.size || member.roles.cache.size - 1 < 1) roles =
    `\`Yok\``

const embed = new Discord.MessageEmbed()


    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dyanamic:
    true }))
    .setFooter(`${moment().format(`H:MM`)}`)
    .setColor("BLUE")
    .setDescription(`
    **Kullanıcı:** \`${member.user.username}\` | \`#${member.user.discriminator}\`
    \n**İD:** \`${member.id}\`
    \n**Hesabını Kurduğu Tarih:**\`${moment(member.user.createdAt).format(`DD MMMM YYYY, H:MM:SS`)}\`
    \n**Sunucuya Katılma Tarihi:** \` ${moment(member.joinedAt).format(`DD MMMM YYYY, H:MM:SS A`)}\`
    \n**Rolleri:** ${roles.lenght || ``}${rolesname || `\`Kullanıcının Rolü Yok !! ❌ \``}`) 



message.reply({embeds: [embed]})


},

name: "kullanıcı-bilgi",
description: "Etiketlediğiniz Kullanıcı Hakkında Bilgi Veririm !!",
aliases: ['kullanıcıbilgi'],
kategori: "diğer",
usage: "",
}
