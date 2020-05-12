const Discord = require('discord.js');
const BotClient = new Discord.Client();
const BotToken = "NzA5NjYxMTYyNjMwODA3NTc1.XrpJpA.X7Taj_h0hzRzGJfpooiNQN5kh8c";
const BotCommandPrefix = "!";
const PermissionsNameRole = "Administrator";
const NoPermissionsMessage = "Nie posiadasz uprawnień!";
const fs = require('fs');
BotClient.commands = new Discord.Collection();
BotClient.on('ready', () => {
    console.log("CONNECTED!");
});

BotClient.on("message", message => {
    if (message.author.bot) return; //anty spambot
    if (message.content.indexOf(BotCommandPrefix) !== 0) return;  //check prefix

    const MessageArgs = message.content.slice(BotCommandPrefix.length).trim().split(/ +/g);
    const MessageCommand = MessageArgs.shift().toLowerCase();

    if (MessageCommand === "test"){
        if(message.member.roles.cache.some(r => r.name === PermissionsNameRole)) {
            message.channel.send('Testowa komenda');
        } else {
            message.channel.send(NoPermissionsMessage);
        }
    } else if (MessageCommand === "koks"){
        if(message.member.roles.cache.some(r => r.name === PermissionsNameRole)) {
            let MessageText = MessageArgs.join(' ');
            if (MessageText == '') {
                message.channel.send('Poprawne użycie: !koks <text>');
            } else {
                message.channel.send(MessageText);
            }
        } else {
            message.channel.send(NoPermissionsMessage);
        }
    } else {
        message.channel.send('Dostępne komendy: test, koks.');
    }
});

BotClient.login(BotToken);
