import React from 'react';
import css from './chat.module.scss';
import AddMessageContainer from '../message/addMessage';
import ListMessageContainer from '../message/listMessage';

const Chat = () => (
	<div className={css.chat}>
		<h2 className={css.chat_header}>CHAT</h2>
		<ListMessageContainer />
		<AddMessageContainer />
	</div>
);


export default Chat;