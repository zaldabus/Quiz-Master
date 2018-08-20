import expect from 'expect';

import * as actions from '../actions/ajaxStatusActions';
import ajaxCallsInProgress from './ajaxStatusReducer';

describe('AJAX Status Reducer', () => {
 it('should increase the state value of ajaxCallsInProgress by 1 when passed BEGIN_AJAX_CALL', () => {
 		const initialState = 0;
 		const action = actions.beginAjaxCall();
 		const newState = ajaxCallsInProgress(initialState, action);

 		expect(newState).toEqual(initialState + 1);
 });

 it('should increase the state value of ajaxCallsInProgress by 1 when passed action of type that ends with _BEGIN_AJAX_CALL', () => {
 		const initialState = 0;
 		const RANDOM_BEGIN_AJAX_CALL = 'RANDOM_BEGIN_AJAX_CALL';
 		const action = {type: RANDOM_BEGIN_AJAX_CALL};
 		const newState = ajaxCallsInProgress(initialState, action);

 		expect(newState).toEqual(initialState + 1);
 });

 it('should decrease the state value of ajaxCallsInProgress by 1 when passed AJAX_CALL_ERROR', () => {
 		const initialState = 1;
 		const action = actions.ajaxCallError();
 		const newState = ajaxCallsInProgress(initialState, action);

 		expect(newState).toEqual(initialState - 1);
 });

 it('should decrease the state value of ajaxCallsInProgress by 1 when passed action of type that ends with _SUCCESS', () => {
 		const initialState = 1;
 		const RANDOM_SUCCESS = 'RANDOM_SUCCESS';
 		const action = {type: RANDOM_SUCCESS};
 		const newState = ajaxCallsInProgress(initialState, action);

 		expect(newState).toEqual(initialState - 1);
 });
});
