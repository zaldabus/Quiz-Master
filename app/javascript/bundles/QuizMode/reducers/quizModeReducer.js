import { combineReducers } from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import answerGuess from './guessReducer';
import guessStatus from './guessStatusReducer';
import quiz from './quizReducer';

const quizModeReducer = combineReducers({ ajaxCallsInProgress, answerGuess, guessStatus, quiz });

export default quizModeReducer;
