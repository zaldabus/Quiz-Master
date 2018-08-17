class QuizModeController < ActionController::Base
	layout 'quiz_mode'

	def index
		@quiz = {
			quiz: Quiz.order("RANDOM()").first,
			guessStatus: '',
			guess: '',
			ajaxCallsInProgress: 0
		}
	end
end