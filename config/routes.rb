Rails.application.routes.draw do
  
  resources :flights do
  	resources :seats
  end
  
  resources :planes
  resources :reservations
  resources :users


end
