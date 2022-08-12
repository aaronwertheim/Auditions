Rails.application.routes.draw do

  resources :auditions

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/shows', to: 'shows#index'
  post '/shows', to: 'shows#create'
  get '/shows/:id/auditions', to: 'shows#show_with_auditions'

  
end
