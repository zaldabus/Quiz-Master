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
    let answerGuess = event.target.value;

    return this.props.updateAnswerGuess(answerGuess);
  }

  handleSubmit(event) {
    event.preventDefault();

    let answerGuess = this.props.answerGuess;
    let answer = this.props.quiz.answer;

    if (guessIsCorrect(answerGuess, answer)) {
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
      <div className="quiz">
        <Quiz
          key={this.props.quiz.id}
          quiz={this.props.quiz}
          answerGuess={this.props.answerGuess}
          guessStatus={this.props.guessStatus}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          changeQuiz={this.replaceQuiz}
          tryAgain={this.props.tryAgain}
        />
      </div>
    );
  }
}

QuizMode.propTypes = {
  quiz: PropTypes.object.isRequired
};

export default QuizMode;
