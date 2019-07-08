import * as types from '../constants/ActionTypes';
import { messageReceive } from '../actions';

const setupSocket = (dispatch, ) => {
	const socket = new WebSocket('ws://localhost:8081');
	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: types.MESSAGE_RECEIVED
		}))
	};
	socket.onmessage = (event) => {
		const data = JSON.parse(event.data);
		switch (data.type) {
			case types.SEND_MESSAGE:
				dispatch(messageReceive(data.message, data.author));
				break;
			case types.MESSAGE_RECEIVED:
				if (data.messages && data.messages.length > 0) {
					data.messages.forEach((item) => {
						let itemMessage = JSON.parse(item);
						dispatch(messageReceive(itemMessage.message, itemMessage.author));
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