import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quizModeReducer from '../reducers/quizModeReducer';

const configureStore = (railsProps) => (
  createStore(quizModeReducer, railsProps, applyMiddleware(thunk))
);

export default configureStore;
