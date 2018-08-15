class Admin::QuizzesController < AdminController
	def index
		@quizzes = Quiz.all
	end

	def new
		@quiz = Quiz.new
	end

	def create
		@quiz = Quiz.new(quiz_params)

		if @quiz.save
			redirect_to admin_quizzes_path
		else
			render :new
		end
	end

	def edit
		@quiz = Quiz.find params[:id]
	end

	def update
		@quiz = Quiz.find params[:id]

		if @quiz.update_attributes(quiz_params)
			redirect_to admin_quizzes_path
		else
			render :edit
		end
	end

	def destroy
		@quiz = Quiz.find params[:id]
		@quiz.destroy
		redirect_to admin_quizzes_path
	end

	private

	def quiz_params
		params.require(:quiz).permit(:question, :answer)
	end
end