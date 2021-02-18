require 'rails_helper'

RSpec.describe 'Routes test', type: :routing do
  describe 'routing' do
    it 'routes to menu_actions#index' do
      expect(get: '/').to route_to('menu_actions#index')
    end
    
    it 'routes to devise/sessions#new' do
      expect(get: '/users/sign_in').to route_to('devise/sessions#new')
    end

    it 'routes to devise/sessions#create' do
      expect(post: '/users/sign_in').to route_to('devise/sessions#create')
    end

    it 'routes to devise/sessions#create' do
      expect(get: '/users/sign_up').to route_to('devise/registrations#new')
    end

    it 'routes to devise/sessions#create' do
      expect(post: '/users').to route_to('devise/registrations#create')
    end

    it 'routes to #start' do
      expect(get: '/input-start').to route_to('menu_actions#start')
    end

    it 'routes to #load' do
      expect(get: '/input-load').to route_to('menu_actions#load')
    end

    it 'routes to #index' do
      expect(get: 'valera-online').to route_to('game#index')
    end

    it 'routes to #save' do
      expect(patch: 'save-stats').to route_to('game#save')
    end
  end
end
