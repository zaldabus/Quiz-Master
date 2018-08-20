require 'rails_helper'

describe QuizModeController do
	describe 'GET :index' do
		it "returns 200" do
      create(:quiz)

      get :index

      expect(response.code).to eq "200"
    end

    it "redirect to the quiz_admin page if there's no quizzes" do
      get :index

      expect(response).to redirect_to admin_quizzes_path
    end
  end
end