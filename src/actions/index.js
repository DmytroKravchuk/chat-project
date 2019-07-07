import * as types from '../constants/ActionTypes';

let nextMessageId = 0;

export const sendMessage = (message, author) => ({
	type: types.SEND_MESSAGE,
	id: nextMessageId++,
	message,
	author
});

export const messageReceive = (message, author) => ({
	type: types.MESSAGE_RECEIVED,
	id: nextMessageId++,
	message,
	author
});