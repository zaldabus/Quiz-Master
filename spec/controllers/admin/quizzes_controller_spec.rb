require 'rails_helper'

describe Admin::QuizzesController do
  describe 'GET :index' do
  	it 'is successful' do
      get :index

      expect(response).to be_ok
    end
  end

  describe 'GET :new' do
    it 'is successful' do
      get :new

      expect(response).to be_ok
    end
  end

  describe 'POST :create' do
  	context 'with invalid parameters' do
  		it 'renders the new page' do
  			post :create, params: { quiz: { question: 'This is a question'} }

  			expect(response).to_not redirect_to admin_quizzes_path
  		end
  	end

    context 'with valid parameters' do
    	let(:valid_post) { post :create, params: { quiz: { question: 'This is a question', answer: 'This is an answer' } } }

      it 'redirects to the index page' do
        valid_post

        expect(response).to redirect_to admin_quizzes_path
      end

      it 'creates a new quiz' do
        expect {
          valid_post
        }.to change(Quiz, :count).by(1)
      end
    end
  end

  describe 'GET :edit' do
    it 'is successful' do
      quiz = create(:quiz)

      get :edit, params: { id: quiz.id }

      expect(response).to be_ok
    end
  end

  describe 'PUT :update' do
    let(:quiz) { create(:quiz) }

    it 'redirects to the index page with correct params' do
      put :update, params: { id: quiz.id, quiz: { question: 'Changing the question' } }

      expect(response).to redirect_to admin_quizzes_path
    end

    it 'renders the edit page with incorrect params' do
    	put :update, params: { id: quiz.id, quiz: { question: '' } }

    	expect(response).to_not redirect_to admin_quizzes_path
    end
  end

  describe 'DELETE :destroy' do
    it 'redirects to the index page' do
      quiz = create(:quiz)

      delete :destroy, params: { id: quiz.id }

      expect(response).to redirect_to admin_quizzes_path
    end

    it 'destroys the quiz' do
      quiz = create(:quiz)

      expect {
        delete :destroy, params: { id: quiz.id }
      }.to change(Quiz, :count).by(-1)
    end
  end
end
