class SavesController < ApplicationController
    def create
        @save = Save.new
        #@save.user_id = session[:current_user_id]
        @save.name = params[:name]
        @save.health = 100
        @save.mana = 0
        @save.fun = 5
        @save.fatigue = 0
        @save.money = 20 
        @save.user_id = current_user.id
        @save.save
        session[:current_save_id] = @save.id
        
        redirect_to "/valera-online"
    end
end
