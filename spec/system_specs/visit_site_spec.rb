require 'rails_helper'


RSpec.describe 'Hello', :type => :system do
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
			fill_in('user_email', with: 'masscreed@mail.ru')
			fill_in('user_password', with: '123456')
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