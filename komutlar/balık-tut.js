const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {



var r = ["Hamsi Tuttun :) 🎣",
"Tüh Balık Kaçtı :( 🐟",
"Mezgit Tuttun :) 🎣",
 "Sazan Tuttun :) 🎣",
 "Köpek Balığı Tuttun Sat Sat Belki İyi Para Eder :D 🦈",
 "Japon Balığı Tuttun Niye Çin Balığı Tutmadın :D 🎣",
 "İstavrit Tuttun :) 🎣",
 "Kaya Balığı Tuttun Yemeği Düşünmüyorsun Dimi? 🎣",
 "Mezgit Tuttun :) 🎣",
 "Fener Balığı Tuttun Karanlıkta İşine Yarar :) 🎣",
 "Fok Balığı Tuttun Sal Hayvanı Gitsin :D 🎣",
 "Yunus Balığı Tuttun Sal Hayvanı Gitsin :D 🐬",
 "Uskumru Tuttun :) 🎣","Levrek Tuttun :) 🎣",
 "Vatoz Balığı Tuttun :D 🎣",
 "Ahtapot Tuttun Yürüyerek Geliyo Kaçç :( 🐙😥",
 "Alabalık Tuttun :) 🎣",
 "Oltayı Denize Düşürdün Denize Atla Al Oltanı :D 🎣",
 "Balina Tuttun :D 🐳",
 "Penguen Tuttun Git Kuzey Kutubuna Geri Bırak :D 🐧",
 "Pirana Tuttun Oltayı Ve Seni Yedi :( 🐟",
 "Istakoz Tuttun :) 🦐",
 "Yengeç Tuttun :D 🦀",
 "Oltayı Çok Yükseğe Attın Ve Şahin Tuttun :D 🦅",
 "Oltan Kırıldı :( 😐",
 "Deniz Kızı Tuttun 🧜‍♀️",
 "Tebrikler Kayıp Balık Nemo'yu Tuttun :) 🐠",
 "Tebrikler Kayıp Balık Dori'yi Tuttun :) 🐟",
 "Zehirli Bir Balon Balığı Tuttun Ve Dikenleri Eline Battı :( 🐡",
 "Su Samuru Tuttun Yemiceksin Dimi? :| 🦦",
 "Deniz Erkeği Tuttun Sanırım Bu Aquaman'di :) 🧜‍♂️"
 ]

 let rs = r[Math.floor(Math.random()*r.length)]
 message.reply(`${rs}`)

    },

    name: "balık-tut",
    description: "Balık Tutarız !!",
    aliases: ['balıktut'],
    kategori: "eğlence",
    usage: "",
    }
    