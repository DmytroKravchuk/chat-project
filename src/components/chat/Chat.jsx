import React from 'react';
import css from './chat.module.css';


export default class Chat extends React.Component {
	render() {
		return (
			<div className={css.chat_wrapper}>
				<h2 className={css.chat_header}>CHAT</h2>
				<div className={css.chat_message_box}>

				</div>
				<div className={css.chat_form_container}>
					<form className={css.chat_form}>
						<textarea placeholder='Type a message here'></textarea>
						<button className={css.sendMessage}></button>
					</form>
				</div>
			</div>
		)
	}
}