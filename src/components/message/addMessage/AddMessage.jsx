import React from 'react';
import css from '../../chat/chat.module.scss';


export default class AddMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newName: '',
			newMessage: ''
		}
	}

	onChangeName = (e) => {
		this.setState({
			newName: e.target.value
		})
	};

	onChangeMessage = (e) => {
		this.setState({
			newMessage: e.target.value
		})
	};

	onSendMessage = () => {
		const { newMessage, newName } = this.state;
		this.props.sendMessage(newMessage, newName);
		this.reset();
	};

	onEnterPressed = (e) => {
		if (e.which === 13 || e.keyCode === 13) {
			this.onSendMessage();
		}
	};

	reset = () => {
		this.setState({
			newMessage: ''
		})
	};

	render() {
		const {newName, newMessage} = this.state;
		return (
			<div className={css.chat_form_container}>
				<div className={css.chat_form}>
					<input placeholder='Nickname' type='text' className={css.chat_form_name}
						   value={newName}
						   onChange={this.onChangeName}
						   onKeyPress={this.onEnterPressed} />
					<input placeholder='Message' type='text' className={css.chat_form_text}
						   value={newMessage}
						   onChange={this.onChangeMessage}
						   onKeyPress={this.onEnterPressed} />
					<button onClick={this.onSendMessage}>Send</button>
				</div>
			</div>
		)
	}
};