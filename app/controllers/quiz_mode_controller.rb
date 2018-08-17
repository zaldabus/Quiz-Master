class QuizModeController < ActionController::Base
	layout 'quiz_mode'

	def index
		@quiz = {
			quiz: Quiz.order("RANDOM()").first,
			guessStatus: '',
			answerGuess: '',
			ajaxCallsInProgress: 0
		}
	end
end