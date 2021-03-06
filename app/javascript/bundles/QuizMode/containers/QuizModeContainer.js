import { connect } from 'react-redux';
import QuizMode from '../components/QuizMode';
import * as actions from '../actions/quizModeActionCreators';

const mapStateToProps = (state) => ({
	quiz: state.quiz,
	guessStatus: state.guessStatus,
	guess: state.guess,
	loading: state.ajaxCallsInProgress > 0,
});

export default connect(mapStateToProps, actions)(QuizMode);
