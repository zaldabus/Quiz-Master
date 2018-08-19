import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import quiz from '../../../fixtures/quiz';
import * as quizModeActions from './quizModeActionCreators';
import * as types from '../constants/quizModeConstants';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('quizModeActionCreators Thunk', () => {
    it('should create BEGIN_AJAX_CALL, QUIZ_MODE_RESET, and QUIZ_MODE_CHANGE_SUCCESS types when changing quizzes', (done) => {
      nock('http://example.com/')
        .get('/api/v1/quizzes/request_quiz')
      	.query({
      		quiz_id: (123)
      	})
        .reply(200, {data: quiz} );

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.QUIZ_MODE_RESET},
        {type: types.QUIZ_MODE_CHANGE_SUCCESS, quiz}
      ];
      const store = mockStore({quiz: quiz}, expectedActions, done);
      store.dispatch(quizModeActions.changeQuiz(123)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.QUIZ_MODE_RESET);
        expect(actions[2].type).toEqual(types.QUIZ_MODE_CHANGE_SUCCESS);
        done();
      });
    });
  });
});