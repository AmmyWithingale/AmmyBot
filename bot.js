const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	
	   client.user.setPresence({game: {name: "with Bam <33", type: 0}}); //Here you set the status of the bot like pixel that is playing in Japan or stuff like that
});

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// M A I N ///////////////////////////////////

var prefix = "zr!" //prefix, you can change it

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`:ping_pong: Pingu Pomgus! \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``);
	}
});  //Ping command owo pretty important for checking if bot works


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'towerofgod')) {  //Here you put the command like p!help or like that
	
		 message.channel.send(`To read the manwha of **Tower of God** click here: https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95&page=48`); //And here you put the answer of the bot owo
	}
}); 

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'test')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('25th Bam', 'https://cdn.discordapp.com/avatars/438185201844224001/01ec47306dbb7490b51b73ebced7beed.png?size=256')
  .setColor(0x7A6753)
  .setDescription("Stars, thrones, skies, the Outside World, I don't need any of those things. But if someone tries to hurt someone precious to me, I will fight.")
  .setThumbnail('https://cdn.discordapp.com/avatars/438185201844224001/01ec47306dbb7490b51b73ebced7beed.png?size=256')
 
  .addField("About:", "\`Baam for short, is an Irregular and the main protagonist of Tower of God. Baam entered the Tower in search of his best friend Rachel, another Irregular, who wanted to climb to the top of the Tower and see the stars.\`")
.addField("Trivia:", "\`In Korean, the word **baam** has two meanings: one is **night** and the other **chestnut.**`\`,\`Baam has the largest harem in the entire series.\`")
	
  message.channel.send({embed});         
    }
	});
	  
//Important
client.login(process.env.BOT_TOKEN);
