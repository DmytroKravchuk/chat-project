import { connect } from 'react-redux';
import { ListMessage } from "./ListMessage";

let mapStateToProps = (state) => {
	return {
		...state
	}
};

export const ListMessageContainer = connect(mapStateToProps, null)(ListMessage);
