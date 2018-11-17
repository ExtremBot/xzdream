const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Don't Let Me Down`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});


client.on('message' , message => {
if(message.content === '-help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
***__وصف عن البوت__***
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
》 -bc / برودكاست
》 -link / رابط السيرفر
》 -clear / مسح الشات
》 -mc / قفل الروم
》 -umc / فتح الروم
》 -avatar / يطلع صورتك
》 -bans / عدد الاشخاص المبندين
》 -ct / روم كتابي لازم تكتب اسمه
》 -cv / روم صوتي لازم تكتب اسمه
》 -setVoice / يسوي روم يقولك كم بلفويس
》 -move / يسحب شخص لرومك
》 -ban / تبنيد عضو
》 -kick / طرد عضو
》 -mure / اعطاء العضو ميوت
》 -unmute / فك الميوت
》 -rooms / يعرضلك الرومات الي بلسيرفر
》 -roles / يعرضلك رتب الي بلسيرفر
》 -say / البوت يكرر كلام تكتبه
》 -id / امر ايدي
》 -new / انشاء تذكرة
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
`);
}
})
  
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
