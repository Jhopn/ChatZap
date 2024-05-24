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
        client.sendMessage(message.from, 'Aqui é o bot do Pedro🤖')
		client.sendMessage(message.from, 'Aguarde um momento...');
	}
    if( message.body === '!ping'){
        client.sendMessage(message.from, 'pong');
    }
    if( message.body === '!kakera'){
        client.sendMessage(message.from, 'Rapaz... Mudae é lá');
    }
    if( message.body === '!help'){
        client.sendMessage(message.from, 'Sou apenas um experimento! Não tenho grandes funções')
    }
});


client.initialize();