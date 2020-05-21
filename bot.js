const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	
	   client.user.setPresence({game: {name: "with owo", type: 0}}); //Here you set the status of the bot like pixel that is playing in Japan or stuff like that
});

var prefix = "n!" //prefix, you can change it

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`:ping_pong: Pong! \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``);
	}
});  //Ping command owo pretty important for checking if bot works


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'owo')) {  //Here you put the command like p!help or like that
	
		 message.channel.send(`Simple text here owo`); //And here you put the answer of the bot owo
	}
}); 



	  
//Important
client.login(process.env.BOT_TOKEN);
