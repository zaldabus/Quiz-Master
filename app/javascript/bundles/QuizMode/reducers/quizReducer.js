import { QUIZ_MODE_CHANGE_SUCCESS } from '../constants/quizModeConstants';

const quiz = (state = '', action) => {
	switch (action.type) {
    case QUIZ_MODE_CHANGE_SUCCESS:
    	return action.quiz;
    default:
      return state;
  }
};

export default quiz;