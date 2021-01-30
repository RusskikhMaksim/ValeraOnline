class MenuActionsController < ApplicationController
    
    
    def index
    end

    def load
        @saves_list = Save.where(user_id: current_user.id).all
    end

    # def setup_params
    #     @save = new save
    #     @save.name = params[:name]
    #     @save.health = 100
    #     @save.mana = 0
    #     @save.fun = 5
    #     @save.fatigue = 0
    #     @save.money = 20
    #     @save.save
    #     session[:current_save_id] = @save.id
        
    #     redirect_to "/valera-online"
    # end
end
