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
	
		 message.channel.send(`:ping_pong: Pingu Pomgu. \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``);
	}
});  //Ping command owo pretty important for checking if bot works


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'manwha')) {  //Here you put the command like p!help or like that
	
		.setTitle("> Click to check out the manwha! <")
	 /*
   * Alternatively, use "#984646", [136, 75, 75] or an integer number.
   */
  .setColor(0x884B4B) 
  .setThumbnail("https://cdn.discordapp.com/avatars/438185201844224001/d7176afb8d9faaf68570b50cbda480a4.png?size=256")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95&page=48")
  
  message.channel.send({embed});
				 
	}		
}); 

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// I N F O /////////////////////////////////////////////////

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'test')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('25th Bam', 'https://cdn.discordapp.com/avatars/438185201844224001/01ec47306dbb7490b51b73ebced7beed.png?size=256')
  .setColor(0x7A6753)
  .setDescription("Stars, thrones, skies, the Outside World, I don't need any of those things. But if someone tries to hurt someone precious to me, I will fight.")
  .setThumbnail('https://cdn.discordapp.com/avatars/438185201844224001/01ec47306dbb7490b51b73ebced7beed.png?size=256')
 
  .addField("About:", "\`Baam for short, is an Irregular and the main protagonist of Tower of God. Baam entered the Tower in search of his best friend Rachel, another Irregular, who wanted to climb to the top of the Tower and see the stars.\`")
.addField("Trivia:", "\`In Korean, the word BAAM has two meanings: one is NIGHT and the other CHESTNUT, `Baam has the largest harem in the entire series.\`")
	
  message.channel.send({embed});         
    }
	});
	  
//Important
client.login(process.env.BOT_TOKEN);
