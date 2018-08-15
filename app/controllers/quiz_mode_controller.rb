class QuizModeController < ActionController::Base
	layout 'quiz_mode'

	def index
		@hello_world_props = { name: "Bob" }
	end
end
