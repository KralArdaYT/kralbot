const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

    
    const embed = new Discord.MessageEmbed()



    .setColor("RED")

    .setTitle("【K】【U】【R】【A】【L】【L】【A】【R】")

    .setDescription(`

    [1]: Argo kelimeler, küfür vb. şeyler yasaktır.
    
    [2]: Rahatsız edici paylaşımlar yapmak yasaktır
    (Örn: +18, korku, cinsellik vs.).
    
    [3]: Spam yapmak yasaktır.
    
    [4]: Reklam yapmak yasaktır.
    
    [5]: Din, dil, ırk ve siyaset hakkında konuşmak yasaktır.
    
    [6]: Herkes birbirine saygılı davranmalıdır.
    
    [7]: Sunucu ayarları hakkında bir değişiklik istenemez.
    
    [8]: Kimsenin tercihi kimseyi ilgilendirmez.
    
    [9]: Tartışma çıkarmak, tartışmaya dahil olmak yasaktır.
    
    [10]: Yönetimce verilen kararlara veya sisteme karşı çıkılamaz. Ancak aşırıya 
    kaçılmadığı sürece görüş belirtilebilir.
    
    [11]: Başkalarını rahatsız edecek davranışlarda bulunmak yasaktır.
    
    [12]: Kimse başka bir kişiye üstünlük gösteremez.
    
    [13]: Aşırı derecede emoji ve büyük harf kullanımı yasaktır.
    
    [14]: Ahlaka karşı davranışlar sergilemek yasaktır.
    
    [15]: Başkalarını rahatsız etmek yasaktır.
    
    [16]: Troll davranışlar sergilemek yasaktır.
    
    [17]: Başta yetkililer olmak üzere kullanıcılara saygısızlık yapmayın
    .
    [18]: Oynuyor.. kısmına küfür, reklam vb. içerikler yazmak yasaktır.
    
    [19]: Youtuberleri etiketlemek yasaktır.
    
    [20]: Özelden reklam yapmak kesinlikle yasaktır ve affı yoktur.
    
    Bu Sunucuya Katılan Herkes Bu Kuralları Kabul Etmiş Sayılacaktır.
    Aksi taktirde, bilmiyorum, okumadım, oda yaptı,yanlışlıkla oldu gibi varsayımlar dikkate alınmayıp işlem uygulanır!
    ||@everyone||
    `)



    message.reply({embeds: [embed]})


},

name: "kurallar",
description: "Kurallar Kanalında Bu Komutu Yaz Ve Sunucunuzda Ki Düzeni Sağlayayım !!",
aliases: ['kurallar'],
kategori: "moderasyon",
usage: "",
}
