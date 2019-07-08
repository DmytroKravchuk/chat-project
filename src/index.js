import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from "redux";
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import setupSocket from './sockets';
import handleNewMessage from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const socket = setupSocket(store.dispatch);
sagaMiddleware.run(handleNewMessage, { socket });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
