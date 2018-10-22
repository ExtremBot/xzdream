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

  
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
