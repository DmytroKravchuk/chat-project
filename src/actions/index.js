import * as types from '../constants/ActionTypes';

export const sendMessage = (message, author) => ({
	type: types.SEND_MESSAGE,
	message,
	author
});

export const messageReceive = (message, author) => ({
	type: types.MESSAGE_RECEIVED,
	message,
	author
});