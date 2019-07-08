import * as types from '../constants/ActionTypes';
import { sendMessage, messageReceive } from '../actions';

const setupSocket = (dispatch) => {
	const socket = new WebSocket('ws://localhost:8080');
	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: types.MESSAGE_RECEIVED
		}))
	};
	socket.onmessage = (event) => {
		const data = JSON.parse(event.data);
		switch (data.type) {
			case types.SEND_MESSAGE:
				dispatch(sendMessage(data.message, data.author, data.id));
				break;
			case types.MESSAGE_RECEIVED:
				if (data.messages && data.messages.length > 0) {
					data.messages.forEach((item) => {
						let itemMessage = JSON.parse(item);
						dispatch(messageReceive(itemMessage.message, itemMessage.author, itemMessage.id));
					});
				}
				break;
			default:
				break
		}
	};
	return socket
};

export default setupSocket;