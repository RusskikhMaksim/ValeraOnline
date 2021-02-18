Rails.application.routes.draw do
 devise_for :users
 root 'menu_actions#index'

 get '/input-start' => 'menu_actions#start'
 get '/input-load' => 'menu_actions#load'
 resources :saves
 #get '/load-game/:id' => 'menu_actions#load_params', as: 'load_save'
 get 'valera-online' => 'game#index'
 patch 'save-stats' => 'game#save'
 #post '/save' => 'game#save'
end
