import * as types from '../constants/ActionTypes';
import uniqid from 'uniqid';

const messages = (state = [], action) => {
	const { SEND_MESSAGE, MESSAGE_RECEIVED } = types;
	switch (action.type) {
		case SEND_MESSAGE:
		case MESSAGE_RECEIVED:
			return state.concat([
				{
					message: action.message,
					author: action.author,
					id: uniqid()
				}
			]);
		default:
			return state
	}
};

export default messages;