class QuizModeController < ActionController::Base
	layout 'quiz_mode'

	def index
		@quiz = { quiz: Quiz.first, guessStatus: '', answerGuess: '' }
	end
end