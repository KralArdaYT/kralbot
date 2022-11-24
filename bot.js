const { Client, Intents, Collection, MessageAttachment, MessageEmbed, Permissions, Constants, ApplicationCommandPermissionsManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const ayarlar = require("./ayarlar.json");
const db = require("nrc.db");
const message = require("./events/message");
let prefix = ayarlar.prefix;

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./komutcalistirici`)(client);
}); 

client.on("ready", () => {
  require("./events/eventLoader")(client);
});

///// 'saas_${message.guild.id}'


client.on("messageCreate", async msg => {

  let saas = db.fetch(`saas_${msg.guild.id}`)

if(saas == true) {

var sa = ["sa","SA","Sa","Sea","sea","Selamın Aleyküm","selamın aleyküm", "SELAMIN ALEYKÜM","Selam","selam","SELAM"]

if(sa.includes(msg.content.toLowerCase())){
  msg.reply(`Aleyküm Selam !! Hoşgeldin !!`)

  
}



}


})



/*

    db.delete(`otorol_kanal_${message.guild.id}`)
    db.delete(`otorol_rol_${message.guild.id}`)
*/


client.on("guildMemberAdd", async member => {

let kanal = db.fetch(`otorol_kanal_${member.guild.id}`)
let rol   = db.fetch(`otorol_rol_${member.guild.id}`)

if(!kanal) return;
if(!rol) return;

member.roles.add(rol)

client.channels.cache.get(kanal).send(`Hoşgeldin ${member} !! 😊 , Otomatik olarak sana <@&${rol}> isimli rolü verdim !!`)

})
client.on("guildMemberAdd", async member => {


let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)

if(!hgbb) return;

const hg = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`Hoşgeldin ${member} Bizde Seni Bekliyorduk !! 😊`)
client.channels.cache.get(hgbb).send({embeds: [hg]})
})

client.on("guildMemberRemove", async member => {


  let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)
  
  if(!hgbb) return;
  
  const bb = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`Güle Güle ${member}, Seni Unutmiyacağız !! 😢`)
  client.channels.cache.get(hgbb).send({embeds: [bb]})
  })



/////// sayaç


client.on("guildMemberAdd", async member => {


  let kontrol1 = db.fetch(`sayaç_log_${member.guild.id}`)
  let kontrol2 = db.fetch(`sayaç_hedef_${member.guild.id}`)

 if(!kontrol1) return;

 if(kontrol2){
 
 let kalan = kontrol2 - member.guild.memberCount

 if(kalan === 0) {
   client.channels.cache.get(kontrol1).send(`Heyy ${member}, Hoşgeldin !! Sen Çok Şanslı Birisin Çünkü Senin Sayende **${member.guild.memberCount}** Kişiyiz Ve Sayaç Hedefimize Ulaştık !! 🥳🎉`)
   db.delete(`sayaç_hedef_${member.guild.id}`)
 }else{

  client.channels.cache.get(kontrol1).send(`Heyy ${member}, Hoşgeldin !! Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize **${kalan}** Kişi Kaldı !!`)

 }

 }else{

  client.channels.cache.get(kontrol1).send(`Heyy ${member} Hoşgeldin !! Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimiz Bulunmamakta !!`)
 }

})



/////// reklam engel


client.on("messageCreate", async msg => {

  const aktif =  db.fetch(`reklamengel_${msg.guild.id}`);
  if (aktif) {
    const reklamlar = [
      "discord.app",
      "discord.gg",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az",
      ".cf",
      ".me",
      ".in"
    ];
    if (reklamlar.some(reklamlar => msg.content.toLowerCase() === reklamlar)) {
      try {
        if (

          !msg.member.permissions.has("ADMINISTRATOR")) {
          msg.delete();
          return msg.channel.send('Heeyyy, Reklam Arasına Daha Zamanımız Var !! 🤨')

        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!aktif) return;
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  const aktif = db.fetch(`reklamengel_${oldMsg.guild.id}`);
  if (aktif) {
    const reklamlar = [
      "discord.app",
      "discord.gg",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az",
      ".cf",
      ".me",
      ".in"
    ];
    if (reklamlar.some(reklamlar => newMsg.content.toLowerCase() === reklamlar)) {
      try {
        if (

          !newMsg.member.permissions.has("ADMINISTRATOR")) {
          newMsg.delete();
          return oldMsg.channel.send('Heeyyy Mesajı Düzenlediğini Yakaladım !! Reklam Yasak !! ❌')
     
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!aktif) return;
});



/////// küfür engel

client.on("messageCreate", async msg => {

  const i =  db.fetch(`küfürengel_${msg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq",
      'sg',
      'amına koyim',
      'yavşak',
      'awk',
      'yarraq',
      'yavşaq',
      'sikik',
      'amıq',
      'gay',
      'gey',
      '🏳‍🌈'
    ];
    if (kufur.some(kufur => msg.content.toLowerCase() === kufur)) {
      try {
        if (

          !msg.member.permissions.has("ADMINISTRATOR")) {
          msg.delete();
          return msg.channel.send('Küfür Etmek Yasak !! 😡')

        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  const i = db.fetch(`küfürengel_${oldMsg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq",
      'sg',
      'amına koyim',
      'yavşak',
      'awk',
      'yarraq',
      'yavşaq',
      'sikik',
      'amıq',
      'gay',
      'gey',
      '🏳‍🌈'
    ];
    if (kufur.some(kufur => newMsg.content.toLowerCase() === kufur)) {
      try {
        if (

          !newMsg.member.permissions.has("ADMINISTRATOR")) {
          newMsg.delete();
          return oldMsg.channel.send('Heeyyy Mesajı Düzenlediğini Yakaladım !! Küfür Yasak !! ❌')
     
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});



///////vadeli hesap sistemi


const ms = require("ms");
setTimeout(() => {
  let liste = db.fetch(`vadeli_hesaplar`)
liste.forEach(elem => {
  
    
let coin = db.fetch(`banka_coin_vadeli_${elem}`)
let miktar = Number(coin)
if(!miktar) return;
if(miktar === 0) return;

var son = (miktar*5)/100
db.add(`banka_coin_vadeli_${elem}`, son)
message.reply(`<@${elem}> Adlı Kullanıcının Vadeli Kazancı **${son}** **KralCoin** :coin: !! `)
});

}, ms("4h"));



/////// etiket = prefix


client.on("message",message=>{
  if(message.content==`<@${client.user.id}>`) return message.channel.send(`Heyy Sanırım Yenisin Bu Benim Prefixim 😊: **${ayarlar.prefix}**`); })



/////// level sistemi


client.on("messageCreate", async message => {

  if(message.author.bot == true) return;

  let kontrol = db.fetch(`level_log_${message.guild.id}`)
  if(!kontrol) return;

  let xpmesaj = Number(db.fetch(`kxp_mesaj_${message.guild.id}`))
  let kontrol2 = Number(db.fetch(`kxp_${message.guild.id}_${message.author.id}`))
  if(!kontrol2) db.set(`kxp_${message.guild.id}_${message.author.id}`, 0)
  db.add(`kxp_${message.guild.id}_${message.author.id}`, xpmesaj)

  let kontrol3 = Number(db.fetch(`kxp_${message.guild.id}_${message.author.id}`))
  let xplevel = Number(db.fetch(`kxp_level_${message.guild.id}`))
  if(kontrol3 >= xplevel){
    console.log(db.fetch(`kxp_${message.guild.id}_${message.author.id}`))
    console.log(db.fetch(`kxp_level_${message.guild.id}`))
    let kontrol4 = db.fetch(`lvl_${message.guild.id}_${message.author.id}`)
    if(!kontrol4) db.set(`lvl_${message.guild.id}_${message.author.id}`, 0)
    db.add(`lvl_${message.guild.id}_${message.author.id}`, 1)
    let kontrol5 = db.fetch(`level_tebrik_${message.guild.id}`)

    db.set(`kxp_${message.guild.id}_${message.author.id}`, 0)
    if(kontrol5 == true){
      message.reply(`Heyy Sen Evet Evet Sen Level Atladın !! 🥳 Yeni Levelin ✨: **${db.fetch(`lvl_${message.guild.id}_${message.author.id}`)}**`)
    }
  } 



})


client.login(process.env.token);
