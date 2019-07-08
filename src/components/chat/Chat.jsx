import React from 'react';
import css from './chat.module.scss';
import AddMessageContainer from '../message/addMessage';
import ListMessageContainer from '../message/listMessage';

export default class Chat extends React.Component {
	render() {
		return (
			<div className={css.chat_wrapper}>
				<h2 className={css.chat_header}>CHAT</h2>
				<ListMessageContainer />
				<AddMessageContainer />
			</div>
		)
	}
}