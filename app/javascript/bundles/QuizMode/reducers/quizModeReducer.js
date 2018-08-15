import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/quizModeConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const quizModeReducer = combineReducers({ name });

export default quizModeReducer;
