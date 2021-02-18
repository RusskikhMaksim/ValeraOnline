require 'json'
class GameController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @stats = Save.find(session[:current_save_id])
  end

  def save
    @save = params['game']
    @save_slot = Save.find(session[:current_save_id])
    save_stats
    @save_slot.save
  end

  def save_stats
    @save_slot.health = @save[:hp]
    @save_slot.mana = @save[:mp]
    @save_slot.fun = @save[:fun]
    @save_slot.fatigue = @save[:fatigue]
    @save_slot.money = @save[:money]
  end
end
