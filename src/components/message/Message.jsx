import React from 'react';
import css from './message.module.css';

const Message = ({data}) => {
	let {author, message} = data;
	return (
		<div className={css.message_wrap}>
			<div className={css.message}>
				<div className={css.message_name}>{author}</div>
				<div className={css.message_text}>{message}</div>
			</div>
		</div>
	)
};

export default Message;