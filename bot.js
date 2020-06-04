const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	
	   client.user.setPresence({game: {name: "with Bam | zr!help", type: 0}}); //Here you set the status of the bot like pixel that is playing in Japan or stuff like that
});

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// M A I N ///////////////////////////////////

var prefix = "zr!" //prefix, you can change it

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
		
	    const embed = new Discord.RichEmbed()
	  .setTitle("Pinged: Beep boop!")
   .setColor(0x7BB2EC)
  .setDescription (`<a:2306_verify_blue_style:717708902971473930> Ping! \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``)
.setThumbnail("https://66.media.tumblr.com/fd87e4fed4e4f11c8ad67b394719e0e2/9291ae1250585751-90/s250x400/c352fa277f7e7138c93ff325a1b7e4d35593a20d.gif")
	  message.channel.send({embed});	
	    }
});  //Ping command owo pretty important for checking if bot works


client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'webtoon')) {  //Here you put the command like p!help or like that
   
	    const embed = new Discord.RichEmbed()
        .setTitle("> Click to check out the webtoon! <")
     /*
   * Alternatively, use "#984646", [136, 75, 75] or an integer number.
   */
  .setColor(0x884B4B)
  .setDescription ("**Tower of God (Korean: 신의 탑; RR: Sin-ui Tap)** is a South Korean web manhwa written and illustrated by **S.I.U.** It has been serialized in Naver's webtoon platform Naver Webtoon since June 30, 2010, with the individual chapters collected and published by Young Com into two volumes as of April 2020. Tower of God received official English translations by LINE Webtoon in 2014.")
  .setThumbnail("https://media.discordapp.net/attachments/704994881247903817/713021582171439144/Tower_of_God_Volume_1_Cover.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95&page=48")
 
  message.channel.send({embed});
                 
    }      
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		
	const embed = new Discord.RichEmbed()
  .setTitle("Command List: Beep boop!")
   .setColor(0x7BB2EC)
  .setDescription("Hello! These are all of my commands you can use! Have fun <33")
.setThumbnail("https://66.media.tumblr.com/fd87e4fed4e4f11c8ad67b394719e0e2/9291ae1250585751-90/s250x400/c352fa277f7e7138c93ff325a1b7e4d35593a20d.gif")

  .addField("Main Commands",
    "\`help\`,\`ping\`,\`webtoon\`,\`server\`")
.addField("Information Commands (Tower of God Characters!)", "\`baam\`, \`khunaguero\` \`rak\`")
.addField("Roleplay Commands", "\`hug\`,\`slap\`,\`eat\`,\`fight\`,\`hungry\`,\`smile\`,\`blush\`")
  message.channel.send({embed});		
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'server')) {
		const embed = new Discord.RichEmbed()
  .setTitle("> Click to join our server! <")
  .setColor(0x7BB2EC) 
  
  .setThumbnail("https://66.media.tumblr.com/fd87e4fed4e4f11c8ad67b394719e0e2/9291ae1250585751-90/s250x400/c352fa277f7e7138c93ff325a1b7e4d35593a20d.gif")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://disboard.org/server/694433890387099668")
  
  message.channel.send({embed});
				 
	}		
});


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// I N F O /////////////////////////////////////////////////

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'baam')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('25th Baam', 'https://66.media.tumblr.com/8624b8fcd4b3387b3267a79aba3e531c/5902c1b1dc001a07-55/s400x600/17d0e61ba7ea1d192b04fc3f2893e38c2088c953.gif')
  .setColor(0x7A6753)
  .setDescription("Stars, thrones, skies, the Outside World, I don't need any of those things. But if someone tries to hurt someone precious to me, I will fight.")
  .setThumbnail('https://66.media.tumblr.com/8624b8fcd4b3387b3267a79aba3e531c/5902c1b1dc001a07-55/s400x600/17d0e61ba7ea1d192b04fc3f2893e38c2088c953.gif')
 
  .addField("About:", "\`Baam for short, is an Irregular and the main protagonist of Tower of God. Baam entered the Tower in search of his best friend Rachel, another Irregular, who wanted to climb to the top of the Tower and see the stars.\`")
.addField("Trivia:", "\`In Korean, the word BAAM has two meanings: one is NIGHT and the other CHESTNUT and BAAM has the largest HAREM in the entire series.\`")
	
  message.channel.send({embed});         
    }
	});

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'khunaguero')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('Khun Aguero Agnis', 'https://66.media.tumblr.com/e404e48db27e2ae7610759c1e71334c5/e3b4ff7bff9d13d3-5e/s250x400/d3642f68bcc889a567a40de50d631ea6b0f6bb5f.gif')
  .setColor(0xA5EBFF)
  .setDescription("I will not be ruled. I make my own rules. That is the mindset of a ruler.")
  .setThumbnail('https://66.media.tumblr.com/e404e48db27e2ae7610759c1e71334c5/e3b4ff7bff9d13d3-5e/s250x400/d3642f68bcc889a567a40de50d631ea6b0f6bb5f.gif')
 
  .addField("About:", "\`Khun is a C-Rank Regular from Khun Family, and is often referred to simply as KHUN. He is a best friend of Twenty-Fifth Baam, one of the main protagonists of Tower of God. He is one of many defected sons of Khun Eduan. He was expelled from his family because his older sister failed to become one of Zahard's Princesses. \`")
.addField("Trivia:", "\`His name is a reference to the football or soccer player Sergio Kun Agüero. It's because SIU really likes football and SIU has revealed that Khun's birthday is on November 29th. And his blood type is B.\`")
	
  message.channel.send({embed});         
    }
	});

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'rak')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('Rak Wraithraiser ', 'https://66.media.tumblr.com/ddf82bb77413a18f311385945290353e/4e53153cbcaf2078-e9/s640x960/3f71ee3ad5a81bd677b3c209dedb2c3a83132804.jpg')
  .setColor(0xCE6D4C)
  .setDescription("Of course... A game without me... IS A GAME NOT WORTH WINNING!!!")
  .setThumbnail('https://66.media.tumblr.com/ddf82bb77413a18f311385945290353e/4e53153cbcaf2078-e9/s640x960/3f71ee3ad5a81bd677b3c209dedb2c3a83132804.jpg')
 
  .addField("About:", "\`Rak is a C-rank Regular from the Wraithraiser species. His position is Spear Bearer. He is a direct descendant of the Native One. Rak is originally a giant-size creature, but after he mocked Ranker Yu Han Sung, the Second Floor Test Director, his body was shrunk intentionally by the Ranker. He eventually found out how to get back to his giant-size. Because of this, he also becomes one of Compression Licenser users.\`")
.addField("Trivia:", "\`Rak loves bananas but has trouble peeling them. He also hates Quaetro for burning his bananas because they were yellow. He is the best leader and his birthday is on July 7th\`")
	
  message.channel.send({embed});         
    }
	});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// R O L E P L A Y /////////////////////////////////////////////

var hugifs =  [
     "https://media1.tenor.com/images/9ec6e2fb28858ba0664e10de1ba5a6c8/tenor.gif?itemid=17067126",
     "https://media1.tenor.com/images/d81281c85f295795448f743c7dd11857/tenor.gif?itemid=16842939",
     "https://66.media.tumblr.com/a29c896f8a4cd60be085ce18434059b2/4418b50c505076d2-c1/s500x750/9ad22c74950d28f80e3e4ab89596d2454921439d.gif",
     "https://media1.tenor.com/images/4976cd16a95e32932f29222a2d96c16f/tenor.gif?itemid=17193103"];
 
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'hug')) {
       
       
    let member = message.mentions.members.first();
         if(!member)
        return message.reply("Try mentioning the person"); 
       
        var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
          message.channel.send(`**${message.author.username}** hugged **${member.user.username}**`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selecthugGif)
   message.channel.send({embed});
    }
});


var fightgifs =  [
     "https://media1.tenor.com/images/9787f3a79b87c836a9871e5c2b3ecf83/tenor.gif?itemid=16842904",
     "https://media1.tenor.com/images/ebeba2090b256e4183ee113e8b1f2e33/tenor.gif?itemid=16415435",
     "https://media1.tenor.com/images/ec18521e5f5d92672dba6940e239407d/tenor.gif?itemid=16842949",
     "https://media1.tenor.com/images/09778ce7a2b63e22700754292cd31f7b/tenor.gif?itemid=16948316",
     "https://media1.tenor.com/images/cf5a1bec69d16a3665c528bed1067e62/tenor.gif?itemid=17193120",
     "https://media1.tenor.com/images/9aae692e1eb7622985e22522e7b25853/tenor.gif?itemid=17333261",
     "https://media1.tenor.com/images/1fc02d8046d1d42bb841ae0aa03d2134/tenor.gif?itemid=17333060",
     "https://66.media.tumblr.com/088687c2f5949be3e60a2d36ea6e2182/17d819c69520f704-34/s500x750/84cd23d97629b3d4d068564aa957656ce9bf3238.gif",
     "https://66.media.tumblr.com/4e7b92ebb20dba18a74def056dc0d1b8/82d216d80ef76447-07/s500x750/03c8e5cc192757b8c18fbbdf4457b94d0b4d9213.gif",
     "https://media1.tenor.com/images/fef00edef8301366c20277ed415f28cd/tenor.gif?itemid=17229170"];
 
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'fight')) {
       
       
    let member = message.mentions.members.first();
         if(!member)
        return message.reply("Try mentioning the person"); 
       
        var selectfightGif = fightgifs[Math.floor(Math.random() * fightgifs.length)];
          message.channel.send(`**${message.author.username}** fought with **${member.user.username}**`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selectfightGif)
   message.channel.send({embed});
    }
});

var slapgifs =  [
     "https://media.tenor.com/images/c8832c9d5596ed9e6297c947047b584d/tenor.gif", //filler gif
     "https://66.media.tumblr.com/e3c4f826a918e3009bbf937df1443331/9e1e961e9a3eddda-a3/s400x600/bf024cf4b813a5d1f4b684a845de4fda9839a927.gif"];
 
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'slap')) {
	    
	    	     let member = message.mentions.members.first();
         if(!member)
        return message.reply("Try mentioning the person"); 
	    
        var selectslapGif = slapgifs[Math.floor(Math.random() * slapgifs.length)];
          message.channel.send(`**${message.author.username}** slapped **${member.user.username}**`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selectslapGif)
   message.channel.send({embed});
    }
});
	  

var blushgifs =  [
     "https://media1.tenor.com/images/009f033d4573464f51e4da481f8424f5/tenor.gif?itemid=17263578",
     "https://media1.tenor.com/images/5b44318ecd14a743f28a8475170b6508/tenor.gif?itemid=17195402",
     "https://66.media.tumblr.com/4065c8f24ac8ca3df6bb3ab53996bf2f/cb53d39b4e360a11-b6/s1280x1920/e3c97395a5f67fa801a271bc651ee09792af73e8.gif",
     "https://66.media.tumblr.com/43fb3d3df3d503c9ff7626cca22d0275/cb53d39b4e360a11-3f/s1280x1920/ba329447466e50ea50c9db4e59f925cf4ea23e8d.gif",
     "https://media1.tenor.com/images/66189e363445b3031f4f2e568627fd68/tenor.gif?itemid=17192315"];
 
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'blush')) {
       
        var selectblushGif = blushgifs[Math.floor(Math.random() * blushgifs.length)];
          message.channel.send(`**${message.author.username}** is blushing.`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selectblushGif)
   message.channel.send({embed});
    }
});

var smilegifs =  [
     "https://66.media.tumblr.com/a978e687e9ef8b5cf9869d40ff4ac437/1cb22668d4bf6699-54/s500x750/0c0c523cb2c11a0abddfb0ab8ad1b53dfa261c19.gif",
     "https://66.media.tumblr.com/3dfdd3b5a0917328a262c7c69b1abf8b/5902c1b1dc001a07-2e/s400x600/004c073385e2835da56bb7f6b4accda1fb0502e6.gif",
     "https://66.media.tumblr.com/8b498fb0cdd4f71c94e6606ca4711371/9291ae1250585751-49/s540x810/942a78bf481bef6c6cb9d7220c6558bb542c6ac9.gif"];
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'smile')) {
       
        var selectsmileGif = smilegifs[Math.floor(Math.random() * smilegifs.length)];
          message.channel.send(`**${message.author.username}** is smiling`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selectsmileGif)
   message.channel.send({embed});
    }
});

var hungrygifs =  [
     "https://media1.tenor.com/images/2034eebc6eb08606fb4c18cb8aada4cc/tenor.gif?itemid=17193098",
     "https://media1.tenor.com/images/6037cbad7860cc8c40326d4fb7d20d40/tenor.gif?itemid=17193077"];
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'hungry')) {
       
        var selecthungryGif = hungrygifs[Math.floor(Math.random() * hungrygifs.length)];
          message.channel.send(`**${message.author.username}** is hungry`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selecthungryGif)
   message.channel.send({embed});
    }
});

var eatgifs =  [
     "https://media1.tenor.com/images/26f574c00f92f9c72f3937982de46b67/tenor.gif?itemid=17264523",
     "https://media1.tenor.com/images/d55edb8796467b84eb28c5ba15197593/tenor.gif?itemid=17394882",
     "https://66.media.tumblr.com/0abcd90a025493e95955326e25a37c20/2e12dac4ec1e9b78-d4/s400x600/ebb79ff1b7b3219f835f56942c9a59e0d4f9517d.gif",
     "https://media1.tenor.com/images/dbe00e6943b3a2b82b63a866651f2ceb/tenor.gif?itemid=17193078"];
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'eat')) {
       
        var selecteatGif = eatgifs[Math.floor(Math.random() * eatgifs.length)];
          message.channel.send(`**${message.author.username}** is eating`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selecteatGif)
   message.channel.send({embed});
    }
});

var sipgifs =  [
     "https://66.media.tumblr.com/ba0aafe401cd3da3e4c09bf6f6f428c9/195731eea1335e2b-66/s400x600/aa7121d35d9774330d7e5b07b416a5dc25eedd5c.gif",
     "https://media1.tenor.com/images/8b6421b8aaf7ea93fa669e01cfbafede/tenor.gif?itemid=11566439"]; //filler gif
 
client.on('message', message => {
    if (message.author === client.user) return;
     if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'sip')) {
       
        var selectsipGif = sipgifs[Math.floor(Math.random() * sipgifs.length)];
          message.channel.send(`**${message.author.username}** takes a sip`);
        const embed = new Discord.RichEmbed()
   .setColor(0xC6E2FF)
  .setImage(selectsipGif)
   message.channel.send({embed});
    }
});

//Important
client.login(process.env.BOT_TOKEN);
