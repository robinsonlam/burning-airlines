Rails.application.routes.draw do
  resources :seats
  resources :flights
  resources :planes
  resources :reservations
  resources :users
  
end
