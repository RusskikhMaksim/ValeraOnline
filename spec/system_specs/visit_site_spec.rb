# require 'rails_helper'

# RSpec.describe 'ui tests', type: :system do
#   let(:saves_controller) { instance_double(SavesController) }

#   context 'when user want to sign in' do
#     it do
#       visit '/'
#       expect(page).to have_link('Sign in')
#     end
#   end

#   context 'when user want to sign up' do
#     it do
#       visit '/'
#       expect(page).to have_link('Sign up')
#     end
#   end

#   context 'when user try to sign up and play' do
# 	before do
#       user =  create(:user)
#       visit '/'
#       expect(page).to have_link('Sign in')
#       visit '/users/sign_in'
#       fill_in('user_email', with: 'usertest2@gmail.com')
#       fill_in('user_password', with: '123123')
#       click_button('Sign in')
#     end

#     it 'when user try to start game' do
#       click_link('Start game')
#       fill_in('name', with: '123')
#       click_button('Подтвердить')
#       expect(page).to have_content('Раздавать листовки')
#     end

#     it 'when user try to load game' do
#       click_link('Load game')
#       expect(page).to have_link('Back')
#     end

#     it 'when user try to log out' do
#       click_link('Log out')
#       expect(page).to have_link('Sign in')
#     end
#   end
# end
