import React from 'react';
import css from '../../chat/chat.module.css';
import Message from '../Message';

export const ListMessage = (props) => {
	let content = props.messages && props.messages.length !== 0
		? props.messages.map((data, index) => {
			return <Message data={data} key={index} />
		})
		: <div>No messages</div>;
	return (
		<div className={css.chat_message_box}>
			{content}
		</div>
	)
};