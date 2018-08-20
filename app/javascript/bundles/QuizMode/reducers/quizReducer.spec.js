import expect from 'expect';

import * as actions from '../actions/quizModeActionCreators';
import quizFixture from '../../../fixtures/quiz';
import quiz from './quizReducer';

describe('Quiz Reducer', () => {
 it('should change the state value of quiz when passed QUIZ_MODE_CHANGE_SUCCESS', () => {
 		const initialState = '';
 		const action = actions.changeQuizSuccess(quizFixture);
 		const newState = quiz(initialState, action);

 		expect(newState).toEqual(quizFixture);
 });
});
