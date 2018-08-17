import { UPDATE_GUESS, QUIZ_MODE_RESET } from '../constants/quizModeConstants';

const guess = (state = '', action) => {
	switch(action.type) {
		case UPDATE_GUESS:
			return action.guess;
		case QUIZ_MODE_RESET:
			return '';
		default:
			return state;
	}
};

export default guess;