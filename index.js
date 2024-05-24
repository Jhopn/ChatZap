const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
  });

client.on('ready', () => {
    console.log('Cliente online!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
    if (message.body != ' ') {
        client.sendMessage(message.from, 'Olá! Sou o bot do Pedro🤖');
        client.sendMessage(message.from, 'Como posso te ajudar hoje?');
        client.sendMessage(message.from, '1. Digite !ping para um teste de conexão.');
        client.sendMessage(message.from, '2. Digite !kakera para uma surpresa!');
        client.sendMessage(message.from, '3. Digite !help para ver esta mensagem novamente.');
    }
    if (message.body === '!ping') {
        client.sendMessage(message.from, 'pong');
    }
    if (message.body === '!kakera') {
        client.sendMessage(message.from, 'Rapaz... Mudae é lá');
    }
    if (message.body === '!help') {
        client.sendMessage(message.from, 'Sou apenas um experimento! Não tenho grandes funções');
        client.sendMessage(message.from, 'Como posso te ajudar hoje?');
        client.sendMessage(message.from, '1. Digite !ping para um teste de conexão.');
        client.sendMessage(message.from, '2. Digite !kakera para uma surpresa!');
        client.sendMessage(message.from, '3. Digite !help para ver esta mensagem novamente.');
    }
    if (message.body === '1') {
        client.sendMessage(message.from, 'Você digitou 1. Testando conexão...');
        client.sendMessage(message.from, 'pong');
    }
    if (message.body === '2') {
        client.sendMessage(message.from, 'Você digitou 2. Prepare-se para uma surpresa...');
        client.sendMessage(message.from, 'Rapaz... Mudae é lá');
    }
    if (message.body === '3') {
        client.sendMessage(message.from, 'Você digitou 3. Mostrando o menu de ajuda novamente...');
        client.sendMessage(message.from, 'Como posso te ajudar hoje?');
        client.sendMessage(message.from, '1. Digite !ping para um teste de conexão.');
        client.sendMessage(message.from, '2. Digite !kakera para uma surpresa!');
        client.sendMessage(message.from, '3. Digite !help para ver esta mensagem novamente.');
    }
});

client.initialize();