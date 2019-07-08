import React from 'react';
import css from './listMessage.module.scss';
import Message from '../Message';
import uniqid from 'uniqid';

export const ListMessage = (props) => (
	<div className={css.chat_message_box}>
		<div className={css.chat_scroll_container}>
			{
				props.messages && props.messages.length !== 0
				? props.messages.map((data) => {
					return <Message data={data} key={uniqid()} />
				})
				: <div className={css.chat_no_message}>No messages</div>
			}
		</div>
	</div>
);
