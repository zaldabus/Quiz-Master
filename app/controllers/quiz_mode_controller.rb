class QuizModeController < ActionController::Base
	layout 'quiz_mode'

	def index
		@quizzes = { quizzes: Quiz.all }
	end
end
