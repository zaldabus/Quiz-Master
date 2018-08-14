Rails.application.routes.draw do
	namespace :admin do
		resources :quizzes, except: :show
	end

	namespace :api, defaults: { format: :json }, constraints: { subdomain: 'api' }, path: '/' do
		namespace :v1 do
			controller :quizzes do
				get 'quizzes/request_quizzes', action: :request_quizzes
			end
		end
	end

	namespace :quiz_mode, path: '/' do
		root to: :index, action: :index
	end

  mount MagicLamp::Genie, at: "/magic_lamp" if defined?(MagicLamp)
end
