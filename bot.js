const Discord = require('discord.js');
const BotClient = new Discord.Client();
const BotToken = "NTY5MjgwODY2MDMxNzYzNDk5.Xrpz6w.gp2bMxlY_FnyyOBWGh34IzrzzO0";
const BotCommandPrefix = "!";
const PermissionsNameRole = "Administrator";
const NoPermissionsMessage = "Nie posiadasz uprawnień!";
const NoMessage = "Wiadomość jest pusta.";
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
            message.channel.send('Działa');
        } else {
            message.channel.send(NoPermissionsMessage);
        }
    } else if (MessageCommand === "koks"){
        if(message.member.roles.cache.some(r => r.name === PermissionsNameRole)) {
            let MessageText = MessageArgs.join(' ');
            if (MessageText == '') {
                message.channel.send(NoMessage);
            } else {
                message.channel.send(MessageText);
            }
        } else {
            message.channel.send(NoPermissionsMessage);
        }
    } else {
        message.channel.send(`Dostępne komendy: test, koks.`);
    }
});

BotClient.login(BotToken);
