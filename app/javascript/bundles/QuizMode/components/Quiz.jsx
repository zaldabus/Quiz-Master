import PropTypes from 'prop-types';
import React from 'react';

import ActionButton from './ActionButton'
import LoadingDots from '../../../lib/components/LoadingDots'

const Quiz = ({ quiz, guess, guessStatus, onChange, onSubmit, changeQuiz, resetQuiz, loading }) => (
	<form className={guessStatus} onSubmit={onSubmit}>
    <label className="question" dangerouslySetInnerHTML={{__html: quiz.question}}></label>
    {loading && <LoadingDots interval={100} dots={20} />}
    <div className="input-items">
	    <input
	    	type="text"
	    	value={guess}
	    	className="guess"
	    	onChange={onChange}
	    	disabled={guessStatus == '' ? "" : "disabled"}
    	/>
	    <ActionButton guessStatus={guessStatus} changeQuiz={changeQuiz} resetQuiz={resetQuiz} />
    </div>
  </form>
);

Quiz.propTypes = {
	quiz: PropTypes.object.isRequired,
	guess: PropTypes.string.isRequired,
	guessStatus: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	changeQuiz: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired
};

export default Quiz;
