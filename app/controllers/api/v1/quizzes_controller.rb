class Api::V1::QuizzesController < ApiController
	def request_quiz
		quiz = Quiz.where.not(id: params[:quiz_id]).order("RANDOM()").first

		if quiz
			render json: quiz
		else
			render json: Quiz.find(params[:quiz_id])
		end
	end
end