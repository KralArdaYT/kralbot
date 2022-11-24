let { prefix } = require("../ayarlar.json");
const db = require("nrc.db");
const { MessageEmbed } = require("discord.js");

module.exports = async(message) => {

      let client = message.client;
        if (message.author.bot) return; 
        if (!message.guild) return message.reply("Komutlarım sadece sunucularda kullanılabilir !! ❌")
        
        if (!message.content.startsWith(prefix)) return; 
      
        const args = message.content.slice(prefix.length).trim().split(/ +/g); 
        const cmd = args.shift().toLowerCase(); 
      
        if (cmd.length === 0) return; 
      
        var command = client.commands.get(cmd); 
        if (!command) command = client.commands.get(client.aliases.get(cmd));
      
      
        if (command) 
        {
          if(message.guild) {
            if(!message.guild.me.permissions.has("EMBED_LINKS")) return message.channel.send("Sanırım **BAĞLANTI YERLEŞTİR** yetkim yok. Komutlarım **EMBED** içerdiğinden bu yetkiyi bana vermeniz lazım. Bana Yetki Veğğğr, Bana Yetki Veğğğğğr :(")
            if(db.has(`komutkanal_${message.guild.id}`)){
              if(message.channel.id !== db.fetch(`komutkanal_${message.guild.id}`)) {
                const embed = new MessageEmbed()
                .setTitle("HATA !!")
                .setDescription(`
╔══════════════════════════════════════╗
║
║ **• Komutlarım sadece <#${db.fetch(`komutkanal_${message.guild.id}`)}> kanalında kullanabilirsin.**
║
╚══════════════════════════════════════╝
            `)
                .setColor("BLUE")
                .setFooter("Kaldığımız Yerden Devam !!", client.user.avatarURL())
                return message.channel.send({embeds: [embed]})
              }
            }
        }
          try {
            command.calistir(client, message, args, prefix)
          } catch (error) {
            console.log(error)
          }
        }  else

        return message.reply("WaaaooW Sanırım Böyle Bir Komutum Yok Ama Öneride Bulunabilirsin :) (Öneride Bulunmak İçin Destek Sunucuma Katılmalısın **k!davet**) ")
}