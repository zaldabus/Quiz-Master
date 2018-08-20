import PropTypes from 'prop-types';
import React from 'react';

class ActionButton extends React.Component {
	determineButton() {
		switch (this.props.guessStatus) {
			case 'correct':
				return <button className="btn btn-success" onClick={this.props.changeQuiz}>Next Quiz?</button>;
			case 'incorrect':
				return <button className="btn btn-danger" onClick={this.props.resetQuiz}>Try Again</button>;
			default:
				return <input className="btn btn-primary" type="submit" value="Submit" />;
		}
	}

	render() {
		return (
			<div>
				{this.determineButton()}
			</div>
		);
	}
}

ActionButton.propTypes = {
	guessStatus: PropTypes.string.isRequired,
	changeQuiz: PropTypes.func.isRequired,
	resetQuiz: PropTypes.func.isRequired
}

export default ActionButton;