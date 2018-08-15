import PropTypes from 'prop-types';
import React from 'react';

const Quiz = ({ quiz }) => (
  <div className="{key}">
    {quiz.question}
  </div>
);

Quiz.propTypes = {

};

export default Quiz;
