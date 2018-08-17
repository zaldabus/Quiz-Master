import { combineReducers } from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import guess from './guessReducer';
import guessStatus from './guessStatusReducer';
import quiz from './quizReducer';

const quizModeReducer = combineReducers({ ajaxCallsInProgress, guess, guessStatus, quiz });

export default quizModeReducer;
