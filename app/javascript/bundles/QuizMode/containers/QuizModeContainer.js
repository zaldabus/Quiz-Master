import { connect } from 'react-redux';
import QuizMode from '../components/QuizMode';
import * as actions from '../actions/quizModeActionCreators';

const mapStateToProps = (state) => ({ quizzes: state.quizzes });

export default connect(mapStateToProps, actions)(QuizMode);
