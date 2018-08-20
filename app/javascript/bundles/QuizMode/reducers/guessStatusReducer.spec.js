import expect from 'expect';

import * as actions from '../actions/quizModeActionCreators';
import guessStatus from './guessStatusReducer';

describe('Guess Status Reducer', () => {
 it('should change the state value of guessStatus to correct when passed QUIZ_MODE_ANSWER_CORRECT', () => {
 		const initialState = '';
 		const action = actions.setCorrect();
 		const newState = guessStatus(initialState, action);

 		expect(newState).toEqual('correct');
 });

 it('should change the state value of guessStatus to incorrect when passed QUIZ_MODE_ANSWER_INCORRECT', () => {
 		const initialState = '';
 		const action = actions.setIncorrect();
 		const newState = guessStatus(initialState, action);

 		expect(newState).toEqual('incorrect');
 });

 it('should reset the state value of guessStatus when passed QUIZ_MODE_RESET', () => {
 		const initialState = '';
 		const action = actions.resetQuiz();
 		const newState = guessStatus(initialState, action);

 		expect(newState).toEqual('');
 });
});
