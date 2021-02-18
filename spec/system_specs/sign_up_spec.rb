require 'rails_helper'
require 'spec_helper'

RSpec.describe 'Sign up', type: :system do
  context 'when tests Sign up' do
    before do
      visit '/users/sign_up'
    end

    it do
      expect(page).to have_content('Email')
    end

    it do
      fill_in('user_email', with: 'testuser@gmail.com')
      fill_in('user_password', with: 'userpassword')
      fill_in('user_password_confirmation', with: 'userpassword')
      click_button('Sign up')
      expect(page).to have_link('Sign in')
    end
  end
end
