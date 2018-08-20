class QuizModeController < ActionController::Base
	layout 'quiz_mode'

	before_action :check_for_quizzes

	def index
		@quiz_mode_props = {
			quiz: Quiz.order("RANDOM()").first,
			guessStatus: '',
			guess: '',
			ajaxCallsInProgress: 0
		}
	end

	private

	def check_for_quizzes
		redirect_to admin_quizzes_path unless Quiz.any?
	end
end