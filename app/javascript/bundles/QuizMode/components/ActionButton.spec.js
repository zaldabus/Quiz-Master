import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ActionButton from './ActionButton';

const setup = (status='') => {
	const props = {
		guessStatus: status,
		changeQuiz: () => {},
		tryAgain: () => {}
	}

	return shallow(<ActionButton {...props} />);
};

describe('ActionButton', () => {
	it('shows a Submit button by default', () => {
		const wrapper = setup();

		expect(wrapper.find('.btn').props().value).toEqual('Submit');
	});

	it('shows a button with Try Again when guessStatus equals incorrect', () => {
		const wrapper = setup('incorrect');

		expect(wrapper.find('.btn').text()).toEqual('Try Again');
	});

	it('shows a button with Next Quiz? when guessStatus equals correct', () => {
		const wrapper = setup('correct');

		expect(wrapper.find('.btn').text()).toEqual('Next Quiz?');
	});

	it('shows the default Submit button for any other value of guessStatus', () => {
		const wrapper = setup('this is bananas');

		expect(wrapper.find('.btn').props().value).toEqual('Submit');
	});
});