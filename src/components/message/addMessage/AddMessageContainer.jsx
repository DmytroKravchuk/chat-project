import { connect } from "react-redux";
import  AddMessage from './AddMessage';
import { sendMessage } from '../../../actions';

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (message, author) => {
			dispatch(sendMessage(message, author))
		}
	}
};

export const AddMessageContainer = connect(null, mapDispatchToProps)(AddMessage);