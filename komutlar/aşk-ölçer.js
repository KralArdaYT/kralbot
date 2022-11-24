const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


 let ks = message.mentions.users.first()
 if(!ks) return message.reply("Birini Etiketlemelisin !! ❌")
 var r = ["Azcıkta Olsa Seviyor :heart:","Sana Tutulmuş :heart:",
 "Maalesef Seni Sevmiyor :broken_heart:","Birşeyler Hissediyor :heartpulse:",
 "Yerinde Duramıyor :heartbeat:",'Bence Seviyor Ama Utanıyor :heart:',
 'Başkası Var :broken_heart:','Sevmiyor :broken_heart: (ama sadece seni değil)',
`Bu İş Olmuş Bile :heart:`,`Boş Ver Kendi Kaybeder :broken_heart:`
]
 let rs = r[Math.floor(Math.random()*r.length)]
 return message.channel.send(`${ks} ${rs}`)

    },

    name: "aşk-ölçer",
    description: "Aşk Testi Yaparım :D",
    aliases: ['aşkölçer'],
    kategori: "eğlence",
    usage: "",
    }
    