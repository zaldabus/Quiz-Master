import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from '../constants/quizModeConstants';

const actionTypeStartsCall = (type) => {
	return type.substring(type.length - 16) == '_BEGIN_AJAX_CALL';
};

const actionTypeEndsInSuccess = (type) => {
	return type.substring(type.length - 8) == '_SUCCESS';
};

const ajaxCallsInProgress = (state = 0, action) => {
	if (action.type == BEGIN_AJAX_CALL || actionTypeStartsCall(action.type)) {
		return state + 1;
	} else if (action.type == AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
		return state - 1;
	}

	return state;
};

export default ajaxCallsInProgress;