import { takeEvery } from 'redux-saga/effects';
import { SEND_MESSAGE } from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {
	yield takeEvery(SEND_MESSAGE, (action) => {
		params.socket.send(JSON.stringify(action))
	})
};

export default handleNewMessage
