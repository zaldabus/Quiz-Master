import { connect } from 'react-redux';
import QuizMode from '../components/QuizMode';
import * as actions from '../actions/quizModeActionCreators';

const mapStateToProps = (state) => ({ name: state.name });

export default connect(mapStateToProps, actions)(QuizMode);
