import expect from 'expect';

import * as actions from '../actions/quizModeActionCreators';
import guess from './guessReducer';

describe('Guess Reducer', () => {
 it('should change the state value of guess when passed UPDATE_GUESS', () => {
 		const initialState = '';
 		const newGuess = 'this state, is bananas';
 		const action = actions.updateAnswerGuess(newGuess);
 		const newState = guess(initialState, action);

 		expect(newState).toEqual(newGuess);
 });

 it('should change the state value of guess to empty when passed QUIZ_MODE_RESET', () => {
 		const initialState = 'this state, is bananas';
 		const action = actions.tryAgain();
 		const newState = guess(initialState, action);

 		expect(newState).toEqual('');
 });
});
