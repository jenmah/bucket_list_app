Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: { registrations: 'registrations', sessions: "sessions" }
  resources :bucketlists
  root 'home#index'
  # get '/bucketlists#bucketlists' => 'bucketlists#bucketlists'
  
  devise_scope :user do 
    get "/users/:authentication_token", to: "sessions#show"
    delete "/users/:authentication_token", to: "sessions#destroy"
  end
end
