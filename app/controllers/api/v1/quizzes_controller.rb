class Api::V1::QuizzesController < ApiController
	def request_quiz
		quiz = Quiz.where.not(id: params[:quiz_id]).order("RANDOM()").first
		render json: quiz
	end
end