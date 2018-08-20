import PropTypes from 'prop-types';
import React from 'react';

import Quiz from './Quiz';
import guessIsCorrect from '../utils/guessIsCorrect';

class QuizMode extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.replaceQuiz = this.replaceQuiz.bind(this);
  }

  handleChange(event) {
    let guess = event.target.value;

    return this.props.updateGuess(guess);
  }

  handleSubmit(event) {
    event.preventDefault();

    let guess = this.props.guess;
    let answer = this.props.quiz.answer;

    if (guessIsCorrect(guess, answer)) {
      this.props.setCorrect();
    } else {
      this.props.setIncorrect();
    }
  }

  replaceQuiz() {
    let quizId = this.props.quiz.id;

    this.props.changeQuiz(quizId);
  }

  render() {
    return (
      <div className="quiz-mode">
        <Quiz
          quiz={this.props.quiz}
          guess={this.props.guess}
          guessStatus={this.props.guessStatus}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          changeQuiz={this.replaceQuiz}
          resetQuiz={this.props.resetQuiz}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

QuizMode.propTypes = {
  quiz: PropTypes.object.isRequired,
  guess: PropTypes.string.isRequired,
  guessStatus: PropTypes.string.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  updateGuess: PropTypes.func.isRequired,
  setCorrect: PropTypes.func.isRequired,
  setIncorrect: PropTypes.func.isRequired,
  changeQuiz: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default QuizMode;
