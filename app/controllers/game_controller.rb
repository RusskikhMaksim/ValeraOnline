class GameController < ApplicationController
    def index
        @stats = Save.find(session[:current_save_id])
    end
end
