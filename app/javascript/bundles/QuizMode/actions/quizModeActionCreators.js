/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
	QUIZ_MODE_ANSWER_CORRECT,
	QUIZ_MODE_ANSWER_INCORRECT,
	QUIZ_MODE_QUIZ_CHANGE,
	UPDATE_ANSWER_GUESS,
	QUIZ_MODE_RESET
} from '../constants/quizModeConstants';

export const setCorrect = () => ({
  type: QUIZ_MODE_ANSWER_CORRECT
});

export const setIncorrect = () => ({
  type: QUIZ_MODE_ANSWER_INCORRECT
});

export const updateAnswerGuess = (guess) => ({
	type: UPDATE_ANSWER_GUESS,
	guess
});

export const tryAgain = () => ({
	type: QUIZ_MODE_RESET
});

export const changeQuizSuccess = (quiz) => ({
	type: QUIZ_MODE_QUIZ_CHANGE,
	quiz
});

export const changeQuiz = (quizId) => {
	return dispatch => axios.get('/api/v1/quizzes/request_quiz', {
      params: {
          quiz_id: quizId
      }
  }).then(res => {
  	let quiz = res.data;

  	dispatch(tryAgain());
  	dispatch(changeQuizSuccess(quiz));
	});
};