import PropTypes from 'prop-types';
import React from 'react';

const Quiz = ({ quiz, answerGuess, guessStatus, onChange, onSubmit, changeQuiz, tryAgain }) => (
  <div className="{key}">
  	<form className={guessStatus} onSubmit={onSubmit}>
	    <label dangerouslySetInnerHTML={{__html: quiz.question}}></label>
	    {guessStatus == 'correct' &&
	    	<button onClick={changeQuiz}>Next Quiz?</button>
		  }
		  {guessStatus == 'incorrect' &&
		  	<button onClick={tryAgain}>Try Again</button>
		  }
	    <input type="text" value={answerGuess} onChange={onChange}/>
	    <input type="submit" value="Submit" />
    </form>
  </div>
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
