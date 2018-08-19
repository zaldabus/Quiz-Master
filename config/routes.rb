Rails.application.routes.draw do
	namespace :admin do
		resources :quizzes, except: :show
	end

	namespace :api, defaults: { format: :json } do
		namespace :v1 do
			controller :quizzes do
				get 'quizzes/request_quiz', action: :request_quiz
			end
		end
	end

	namespace :quiz_mode, path: '/' do
		root to: :index, action: :index
	end

  mount MagicLamp::Genie, at: "/magic_lamp" if defined?(MagicLamp)
end
