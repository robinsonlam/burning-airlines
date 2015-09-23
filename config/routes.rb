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

  root :to => 'pages#search'
  get '/result' => 'pages#result'

end
