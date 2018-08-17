import {
  QUIZ_MODE_ANSWER_CORRECT,
  QUIZ_MODE_ANSWER_INCORRECT,
  QUIZ_MODE_RESET
} from '../constants/quizModeConstants';

const guessStatus = (state = '', action) => {
	switch (action.type) {
    case QUIZ_MODE_ANSWER_CORRECT:
      return 'correct';
    case QUIZ_MODE_ANSWER_INCORRECT:
      return 'incorrect';
    case QUIZ_MODE_RESET:
    	return '';
    default:
      return state;
  }
};

export default guessStatus;