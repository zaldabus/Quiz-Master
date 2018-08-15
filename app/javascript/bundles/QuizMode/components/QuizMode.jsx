import PropTypes from 'prop-types';
import React from 'react';

import Quiz from './Quiz';

const QuizMode = ({ quizzes }) => (
  <div className="quizzes">
    {quizzes.map(quiz =>
      <Quiz key={quiz.id} quiz={quiz}/>
    )}
  </div>
);

QuizMode.propTypes = {
  quizzes: PropTypes.array.isRequired
};

export default QuizMode;
