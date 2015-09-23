Rails.application.routes.draw do
  
  resources :flights do
  	resources :seats
  end
  
  resources :planes
  resources :reservations
  resources :users

  get '/login' => 'session#new', :as => 'login' # Login Page
  post '/login' => 'session#create' # Starts a new login session
  delete '/login' => 'session#destroy', :as => 'logout' # Logs out

  get '/result' => 'pages#result'

  # root :to => 'pages#home'
  root :to => 'pages#search'
end
