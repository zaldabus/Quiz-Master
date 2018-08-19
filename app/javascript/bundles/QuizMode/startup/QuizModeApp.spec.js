import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import { Provider } from 'react-redux';
import writtenNumber from 'written-number';

import quiz from '../../../fixtures/quiz';
import configureStore from '../store/quizModeStore';
import QuizModeContainer from '../containers/QuizModeContainer';

const setup = (options = {}) => {
	const props = {
		quiz: options.quiz || quiz,
		guess: '',
		guessStatus: '',
		ajaxCallsInProgress: 0
	}

	return mount(<Provider store={configureStore(props)}><QuizModeContainer /></Provider>);
};

describe('QuizModeApp', () => {
	it('renders the Try Again button on incorrect guess', () => {
		quiz.answer = 'The square root of all things';
		const wrapper = setup(quiz: quiz);
		const guessField = wrapper.find('.guess');
		const submitButton = wrapper.find('.btn');

		guessField.simulate('change', { target: { value: 'Hello' } });
		submitButton.simulate('submit');

		const tryAgainButton = wrapper.find('.btn');

		expect(tryAgainButton.text()).toEqual('Try Again');
	});

	it('disables the guess field after a guess', () => {
		quiz.answer = 'The square root of all things';
		const wrapper = setup(quiz: quiz);
		const guessField = wrapper.find('.guess');
		const submitButton = wrapper.find('.btn');

		guessField.simulate('change', { target: { value: 'Hello' } });
		submitButton.simulate('submit');

		expect(guessField.props('disabled')).toBeTruthy();
	});

	it('renders the Next Quiz? button on correct guess', () => {
		quiz.answer = 'The answer is 7';
		const wrapper = setup(quiz: quiz);
		const guessField = wrapper.find('.guess');
		const submitButton = wrapper.find('.btn');

		guessField.simulate('change', { target: { value: quiz.answer } });
		submitButton.simulate('submit');

		const nextQuizButton = wrapper.find('.btn');

		expect(nextQuizButton.text()).toEqual('Next Quiz?');
	});

	it('accepts an answer with the word version of a number', () => {
		quiz.answer = '7';
		const wrapper = setup(quiz: quiz);
		const guessField = wrapper.find('.guess');
		const submitButton = wrapper.find('.btn');

		guessField.simulate('change', { target: { value: writtenNumber(quiz.answer) } });
		submitButton.simulate('submit');

		const nextQuizButton = wrapper.find('.btn');

		expect(nextQuizButton.text()).toEqual('Next Quiz?');
	});

	it('accepts an answer with the word version of multipe numbers', () => {
		const numberOne = '7';
		const numberTwo = '14';
		const numberThree = '21';
		quiz.answer = `${numberOne} ${numberTwo} ${numberThree}`;
		const wrapper = setup(quiz: quiz);

		const guessField = wrapper.find('.guess');
		const submitButton = wrapper.find('.btn');

		guessField.simulate('change', { target: { value: `${writtenNumber(numberOne)} ${writtenNumber(numberTwo)} ${writtenNumber(numberThree)}` } });
		submitButton.simulate('submit');

		const nextQuizButton = wrapper.find('.btn');

		expect(nextQuizButton.text()).toEqual('Next Quiz?');
	});

	it('accepts an answer with the word version of multipe numbers in a sentence', () => {
		const numberOne = '7';
		const numberTwo = '14';
		const numberThree = '21';
		const answer = `The answer is ${numberOne} or ${numberTwo} or ${numberThree}`
		quiz.answer = answer;
		const wrapper = setup(quiz: quiz);

		const guessField = wrapper.find('.guess');
		const submitButton = wrapper.find('.btn');

		guessField.simulate('change', { target: { value: answer } });
		submitButton.simulate('submit');

		const nextQuizButton = wrapper.find('.btn');

		expect(nextQuizButton.text()).toEqual('Next Quiz?');
	});

	it('clears the guess field after a post guess action', () => {
		quiz.answer = 'The square root of all things';
		const wrapper = setup(quiz: quiz);
		const guessField = wrapper.find('.guess');
		const submitButton = wrapper.find('.btn');

		guessField.simulate('change', { target: { value: 'Hello' } });
		submitButton.simulate('submit');

		const tryAgainButton = wrapper.find('.btn');

		tryAgainButton.simulate('click');

		expect(guessField.prop('value')).toEqual('');
	});
});