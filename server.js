const WebSocket = require('ws');

const wss = new WebSocket.Server({
	port: 8081
});

const messages = [];
const maxGetCountMessages = 10;

const addMessage = (message) => {
	if (messages.length >= maxGetCountMessages) messages.shift();
	messages.push(message);
};

const broadcast = (data, ws, isSelf) => {
	wss.clients.forEach(client => {
		let isSelfClient = isSelf ? (client === ws) : (client !== ws);
		if (client.readyState === WebSocket.OPEN && isSelfClient) {
			client.send(JSON.stringify(data))
		}
	});
};

wss.on('connection', ws => {
	ws.on('message', (message) => {
		const data = JSON.parse(message);
		switch (data.type) {
			case 'MESSAGE_RECEIVED':
				broadcast({
					type: 'MESSAGE_RECEIVED',
					messages: messages
				}, ws, true);
				break;
			case 'SEND_MESSAGE':
				addMessage({message: data.message, author: data.author});
				broadcast({
					type: 'SEND_MESSAGE',
					message: data.message,
					author: data.author
				}, ws);
				break;
			default:
				break
		}
	});
});