Rails.application.routes.draw do
  root 'products#show', id: 1

  resources :products do
    resources :reviews, only: [:create, :index]
  end
end
