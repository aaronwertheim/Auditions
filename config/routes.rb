Rails.application.routes.draw do

  resources :auditions
  resources :shows

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/users', to: 'users#index'
  get '/messages', to: 'messages#index'
  post '/messages', to: 'messages#create'
  get '/shows/:id/auditions', to: 'shows#show_with_auditions'
  get '/user/:id', to: 'users#find_user'
  patch '/user/:id', to: 'users#update_unread'
  delete '/messages/:id', to: 'messages#destroy'
  
end
