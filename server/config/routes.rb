Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: { registrations: 'registrations', sessions: "sessions" }
  root 'home#index'
  
  resources :bucketlists	
  resources :charges
  
  devise_scope :user do 
    get "/users/:authentication_token", to: "sessions#show"
    delete "/users/:authentication_token", to: "sessions#destroy"
  end
end
