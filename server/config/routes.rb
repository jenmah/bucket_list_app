Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: { registrations: 'registrations', sessions: "sessions" }
  root 'home#index'
  get '/prints' => 'home#prints'
  
  resources :bucketlists do
  	resources :items
  end
  resources :charges
  
  devise_scope :user do 
    get "/users/:authentication_token", to: "sessions#show"
    delete "/users/:authentication_token", to: "sessions#destroy"
  end
end
