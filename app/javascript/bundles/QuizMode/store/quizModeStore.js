import { createStore } from 'redux';
import quizModeReducer from '../reducers/quizModeReducer';

const configureStore = (railsProps) => (
  createStore(quizModeReducer, railsProps)
);

export default configureStore;
