import React from 'react';
import PropTypes from 'prop-types';
import css from './message.module.css';

const Message = ({data}) => {
	let {name, message} = data;
	return (
		<div className={css.message_wrap}>
			<div className={css.message}>
				<div className={css.message_name}>{name}</div>
				<div className={css.message_text}>{message}</div>
			</div>
		</div>
	)
};

Message.PropTypes = {
	name: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
};

export default Message;