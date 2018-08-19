import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import quiz from '../../../fixtures/quiz';
import Quiz from './Quiz';
import LoadingDots from '../../../lib/components/LoadingDots';

const setup = (options = {}) => {
	const props = {
		quiz: options.quiz || quiz,
		guess: '',
		guessStatus: '',
		onChange: () => {},
		onSubmit: () => {},
		changeQuiz: () => {},
		tryAgain: () => {},
		loading: options.loading || false,
	}

	return shallow(<Quiz {...props} />);
};

describe('Quiz', () => {
	it('renders the quiz.question value as html', () => {
		quiz.question = "<em>This text is wrapped in an em</em>";
		const wrapper = setup({quiz: quiz});

		expect(wrapper
			.find('.question')
			.render()
			.find('em')
			.text()
		).toEqual('This text is wrapped in an em');
	});

	it('does not display the LoadingDots component when loading equals false', () => {
		const wrapper = setup({loading: false});

		expect(wrapper.find(LoadingDots).length).toEqual(0);
	});

	it('displays the LoadingDots component when loading equals true', () => {
		const wrapper = setup({loading: true});

		expect(wrapper.find(LoadingDots).length).toEqual(1);
	});
});