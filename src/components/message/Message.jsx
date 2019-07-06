import React from 'react';
import css from './message.module.css';

const Message = ({data}) => {
	let {name, text, isIncoming} = data;
	return (
		<div className={isIncoming ? css.message_wrap_incoming : css.message_wrap_outgoing}>
			<div className={css.message}>
				<div className={css.message_name}>{name}</div>
				<div className={css.message_text}>{text}</div>
			</div>
		</div>
	)
};

export default Message;