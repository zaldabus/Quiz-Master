import { UPDATE_ANSWER_GUESS, QUIZ_MODE_RESET } from '../constants/quizModeConstants';

const answerGuess = (state = '', action) => {
	switch(action.type) {
		case UPDATE_ANSWER_GUESS:
			return action.guess;
		case QUIZ_MODE_RESET:
			return '';
		default:
			return state;
	}
};

export default answerGuess;