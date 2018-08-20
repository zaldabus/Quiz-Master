require 'rails_helper'

describe Api::V1::QuizzesController do
	describe 'GET :request_quiz' do
		let(:reference_quiz) { create(:quiz) }
		let(:get_request_quiz) { get :request_quiz, format: :json, params: { quiz_id: reference_quiz.id } }

		it "returns 200" do
      get_request_quiz

      expect(response.code).to eq "200"
    end

  	it 'returns a quiz other than the one specified by quiz_id' do
  		other_quiz = create(:quiz)

      get_request_quiz
      result = JSON.parse(response.body).deep_symbolize_keys

      expect(result[:id]).to_not eq reference_quiz.id
    end

    it 'returns the same quiz if no other quiz exists' do
      get_request_quiz
      result = JSON.parse(response.body).deep_symbolize_keys

      expect(result[:id]).to eq reference_quiz.id
    end
  end
end