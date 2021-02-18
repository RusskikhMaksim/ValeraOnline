require 'rails_helper'


RSpec.describe 'Hello', :type => :system do
	let(:saves_controller) { instance_double(SavesController) }
    context 'test home page' do
		it do
			visit '/'
			expect(page).to have_link('Sign in')
		end
    end
    context 'test home page' do
		it do
			visit '/'
			expect(page).to have_link('Sign up')
		end
    end
    context do
		before do
    		visit '/users/sign_in'
			fill_in('user_email', with: 'usertest@gmail.com')
			fill_in('user_password', with: '123123')
			click_button('Sign in')
    	end
		it 'test game' do
			click_link('Start game')
			fill_in('name', with: '123')
			click_button('Подтвердить')
			expect(page).to have_content('Раздавать листовки')
		end

		it 'load game' do
			click_link('Load game')
			expect(page).to have_link('Load game')
		end
		
		it 'Log out' do
			click_link('Log out')
			expect(page).to have_link('Sign in')
		end
		
    end

end