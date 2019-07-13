import React from 'react';
import css from './addMessage.module.scss';


export default class AddMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			message: ''
		}
	}

	onChangeName = (e) => {
		this.setState({
			name: e.target.value
		})
	};

	onChangeMessage = (e) => {
		this.setState({
			message: e.target.value
		})
	};

	onSendMessage = () => {
		const { name, message } = this.state;
		if (message.trim().length === 0  || name.trim().length ===0) {
			return false;
		}
		this.props.sendMessage(message, name);
		this.reset();
	};

	onEnterPressed = (e) => {
		if (e.which === 13 || e.keyCode === 13) {
			this.onSendMessage();
		}
	};

	reset = () => {
		this.setState({
			message: ''
		})
	};

	render() {
		const {name, message} = this.state;
		return (
			<div className={css.chat_form}>
				<div className={css.chat_form__container}>
					<input placeholder='Nickname' type='text' className={css.chat_form__name}
						   value={name}
						   onChange={this.onChangeName}
						   onKeyPress={this.onEnterPressed} />
					<input placeholder='Message' type='text' className={css.chat_form__text}
						   value={message}
						   onChange={this.onChangeMessage}
						   onKeyPress={this.onEnterPressed} />
					<button onClick={this.onSendMessage}>Send</button>
				</div>
			</div>
		)
	}
};