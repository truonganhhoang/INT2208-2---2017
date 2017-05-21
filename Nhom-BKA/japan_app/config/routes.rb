Rails.application.routes.draw do
  root "static_pages#home"
  get "help", to: "static_pages#help"
  get "about", to: "static_pages#about"
  get "contact", to: "static_pages#contact"
  get "signup", to: "users#new"
  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  resources :users do
    resources :following, only: [:index]
    resources :followers, only: [:index]
  end

  resources :users
  resources :relationships, only: [:create, :destroy]
  resources :categories, only: [:index, :show] do
    resources :lessons, only: [:create]
  end
  resources :lessons, only: [:show, :destroy, :update]
  resources :words, only: [:index]

  namespace :admin do
    root "users#index"
    resources :users, only:[:index, :destroy]
    resources :categories do
      resources :words, except: [:index, :show]
    end
  end
end
