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
   
	    const embed = new Discord.RichEmbed()
        .setTitle("> Click to check out the manwha! <")
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// I N F O /////////////////////////////////////////////////

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'baam')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('25th Baam', 'https://cdn.discordapp.com/avatars/438185201844224001/01ec47306dbb7490b51b73ebced7beed.png?size=256')
  .setColor(0x7A6753)
  .setDescription("Stars, thrones, skies, the Outside World, I don't need any of those things. But if someone tries to hurt someone precious to me, I will fight.")
  .setThumbnail('https://cdn.discordapp.com/avatars/438185201844224001/01ec47306dbb7490b51b73ebced7beed.png?size=256')
 
  .addField("About:", "\`Baam for short, is an Irregular and the main protagonist of Tower of God. Baam entered the Tower in search of his best friend Rachel, another Irregular, who wanted to climb to the top of the Tower and see the stars.\`")
.addField("Trivia:", "\`In Korean, the word BAAM has two meanings: one is NIGHT and the other CHESTNUT and BAAM has the largest HAREM in the entire series.\`")
	
  message.channel.send({embed});         
    }
	});

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'khunaguero')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('Khun Aguero Agnis', 'https://cdn.discordapp.com/avatars/438185201844224001/ecbacf2fe666977f1d26eba0b3a5dd4c.png?size=256')
  .setColor(0xA5EBFF)
  .setDescription("I will not be ruled. I make my own rules. That is the mindset of a ruler.")
  .setThumbnail('https://cdn.discordapp.com/avatars/438185201844224001/ecbacf2fe666977f1d26eba0b3a5dd4c.png?size=256')
 
  .addField("About:", "\`Khun is a C-Rank Regular from Khun Family, and is often referred to simply as KHUN. He is a best friend of Twenty-Fifth Baam, one of the main protagonists of Tower of God. He is one of many defected sons of Khun Eduan. He was expelled from the his family because his older sister failed to become one of Zahard's Princesses. \`")
.addField("Trivia:", "\`His name is a reference to the football or soccer player Sergio Kun Agüero. It's because SIU really likes football and SIU has revealed that Khun's birthday is on November 29th. And his blood type is B.\`")
	
  message.channel.send({embed});         
    }
	});

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'rak')) {
 
        const embed = new Discord.RichEmbed()
 
  .setAuthor('Rak Wraithraiser ', 'https://cdn.discordapp.com/avatars/438185201844224001/52bc8a826ae72d9eaece12791ff211ca.png?size=256')
  .setColor(0xCE6D4C)
  .setDescription("Of course... A game without me... IS A GAME NOT WORTH WINNING!!!")
  .setThumbnail('https://cdn.discordapp.com/avatars/438185201844224001/52bc8a826ae72d9eaece12791ff211ca.png?size=256')
 
  .addField("About:", "\`Rak is a C-rank Regular from the Wraithraiser species. His position is Spear Bearer. He is a direct descendant of the Native One. Rak is originally a giant-size creature, but after he mocked Ranker Yu Han Sung, the Second Floor Test Director, his body was shrunked intentionally by the Ranker. He eventually found out how to get back to his giant-size. Because of this, he also become one of Compression Licenser users.\`")
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
          message.channel.send(`**${message.author.username}** slapped oop`);
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
	
//Important
client.login(process.env.BOT_TOKEN);
