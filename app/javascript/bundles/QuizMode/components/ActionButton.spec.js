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
});