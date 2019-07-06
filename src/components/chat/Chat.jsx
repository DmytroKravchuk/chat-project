import React from 'react';
import css from './chat.module.css';
import Message from "../message";


export default class Chat extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: [
				{name:'User1', text:'Text', isIncoming:false},
				{name:'User2', text:'Text', isIncoming:true},
				{name:'User1', text:'Text', isIncoming:false}
			],
			currentMessageValue: '',
		}
	}

	onNewMessageChange = (e) => {
		this.setState({
			currentMessageValue: e.target.value
		});
	};

	sendMessage = () => {
		const {data, currentMessageValue} = this.state;
		this.setState({
			data: [...data, {name: 'User1', text: currentMessageValue, isIncoming: false}],
			currentMessageValue: ''
		})
	};

	enterPressed = (e) => {
		let code = e.keyCode || e.which;
		if (code === 13) {
			this.sendMessage();
		};
	};

	render() {
		let  {currentMessageValue} = this.state;
		return (
			<div className={css.chat_wrapper}>
				<h2 className={css.chat_header}>CHAT</h2>
				<div className={css.chat_message_box}>
					{this.state.data.map((data, index) => {
						return <Message data={data} key={index} />
					})}
				</div>
				<div className={css.chat_form_container}>
					<form className={css.chat_form}>
						<textarea placeholder='Type a message here' value={currentMessageValue} onChange={this.onNewMessageChange} onKeyPress={this.enterPressed}></textarea>
						<button className={css.sendMessage} onClick={this.sendMessage}></button>
					</form>
				</div>
			</div>
		)
	}
}