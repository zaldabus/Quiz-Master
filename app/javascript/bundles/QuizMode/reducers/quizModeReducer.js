import { combineReducers } from 'redux';

import {
	QUIZ_MODE_ANSWER_CORRECT,
	QUIZ_MODE_ANSWER_INCORRECT,
	QUIZ_MODE_QUIZ_CHANGE,
	UPDATE_ANSWER_GUESS,
	QUIZ_MODE_RESET
} from '../constants/quizModeConstants';

const quiz = (state = '', action) => {
	switch (action.type) {
    case QUIZ_MODE_QUIZ_CHANGE:
      return action.quiz;
    default:
      return state;
  }
};

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
}

const answerGuess = (state = '', action) => {
	switch(action.type) {
		case UPDATE_ANSWER_GUESS:
			return action.guess;
		case QUIZ_MODE_RESET:
			return '';
		default:
			return state;
	}
}

const quizModeReducer = combineReducers({ quiz, guessStatus, answerGuess });

export default quizModeReducer;
