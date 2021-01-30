class CreateSaves < ActiveRecord::Migration[6.1]
  def change
    create_table :saves do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.string :name
      t.bigint :health
      t.bigint :mana
      t.bigint :fun
      t.bigint :fatigue
      t.bigint :money

      t.timestamps
    end
  end
end
