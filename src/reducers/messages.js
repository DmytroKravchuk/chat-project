import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
	const { ADD_MESSAGE, MESSAGE_RECEIVED } = types;

	switch (action.type) {
		case ADD_MESSAGE:
		case MESSAGE_RECEIVED:
			return state.concat([
				{
					message: action.message,
					author: action.author,
					id: action.id
				}
			]);
		default:
			return state
	}
};

export default messages;