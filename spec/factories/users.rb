FactoryBot.define do
  factory :user do
    id { '10' }
    email { 'usertest2@gmail.com' }
    password { '123123' }
    password_confirmation { '123123' }
    confirmed_at { Time.zone.today }
  end
end
