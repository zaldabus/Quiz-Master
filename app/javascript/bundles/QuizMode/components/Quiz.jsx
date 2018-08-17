import PropTypes from 'prop-types';
import React from 'react';

import ActionButton from './ActionButton'

const Quiz = ({ quiz, answerGuess, guessStatus, onChange, onSubmit, changeQuiz, tryAgain }) => (
	<form className={guessStatus} onSubmit={onSubmit}>
    <label className="question" dangerouslySetInnerHTML={{__html: quiz.question}}></label>
    <div className="input-items">
	    <input
	    	type="text"
	    	value={answerGuess}
	    	className="guess"
	    	onChange={onChange}
	    	disabled={guessStatus == '' ? "" : "disabled"}
    	/>
	    <ActionButton guessStatus={guessStatus} changeQuiz={changeQuiz} tryAgain={tryAgain} />
    </div>
  </form>
);

Quiz.propTypes = {
	quiz: PropTypes.object.isRequired,
	answerGuess: PropTypes.string.isRequired,
	guessStatus: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	changeQuiz: PropTypes.func.isRequired,
	tryAgain: PropTypes.func.isRequired
};

export default Quiz;
