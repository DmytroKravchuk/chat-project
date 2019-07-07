import React from 'react';
import css from './chat.module.css';
import Message from '../message';

const socket = new WebSocket('ws://localhost:8080');
socket.onopen = () => console.log('server is running');
socket.onclose = () => console.log('disconnected');
socket.message = response => console.log(response.data);

export default class Chat extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			dataMessages: [
				{name:'User1', message:'Text'},
				{name:'User2', message:'Text'},
				{name:'User1', message:'Text'}
			],
			currentMessage: {
				name: '',
				message: ''
			},
		}
	}

	onChangeName = (e) => {
		this.setState({
			currentMessage: {
				...this.state.currentMessage,
				name: e.target.value
			}
		});
	};

	onChangeMessage = (e) => {
		this.setState({
			currentMessage: {
					...this.state.currentMessage,
					message: e.target.value
			}
		});
	};

	sendMessage = (e) => {
		if(e) {
			e.preventDefault();
		}
		const {dataMessages, currentMessage} = this.state;
		this.props.dispatch(currentMessage.message, currentMessage.name);
		this.setState({
			dataMessages: [...dataMessages, {name: currentMessage.name, message: currentMessage.message}],
			currentMessage: {
				name: '',
				message: ''
			}
		});
		socket.send({
			dataMessages: [...dataMessages, {name: currentMessage.name, message: currentMessage.message}],
			currentMessage: {
				name: '',
				message: ''
			}
		});
		return false;
	};

	enterPressed = (e) => {
		let code = e.keyCode || e.which;
		if (code === 13) {
			e.preventDefault();
			this.sendMessage();
		}
	};

	render() {
		const {currentMessage} = this.state;

		return (
			<div className={css.chat_wrapper}>
				<h2 className={css.chat_header}>CHAT</h2>
				<div className={css.chat_message_box}>
					{this.state.dataMessages.map((data, index) => {
						return <Message data={data} key={index} />
					})}
				</div>
				<div className={css.chat_form_container}>
					<form className={css.chat_form}>
						<input placeholder='Nickname' type='text' value={currentMessage.name} onChange={this.onChangeName} className={css.chat_form_name}></input>
						<input placeholder='Message' type='text' value={currentMessage.message} onChange={this.onChangeMessage} onKeyPress={this.enterPressed} className={css.chat_form_text}></input>
						<button className={css.sendMessage} onClick={this.sendMessage}>Send</button>
					</form>
				</div>
			</div>
		)
	}
}