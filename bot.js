const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	
	   client.user.setPresence({game: {name: "with Bam <33", type: 0}}); //Here you set the status of the bot like pixel that is playing in Japan or stuff like that
});

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
	if (message.content.startsWith(prefix + 'test')) {  //Here you put the command like p!help or like that
	
var username = 'AmmyZeru'
		var avatar = 'https://cdn.discordapp.com/avatars/206606985167110145/85771c2592d4065711da020daffd376d.png?size=256'
const exampleEmbed = new Discord.RichEmbed()
		
  .setAuthor(username, avatar)
  .setColor(0x7AFFA8)
  .setDescription("I will not be ruled. I make my own rules. That is the mindset of a ruler.")
  .setThumbnail(avatar) //And here you put the answer of the bot owo
		  
		 message.channel.send({exampleEmbed});
	}
}); 
	  
//Important
client.login(process.env.BOT_TOKEN);
