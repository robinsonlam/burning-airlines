class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.text :address
      t.string :phone_number
      t.string :passport_number

      t.timestamps null: false
    end
  end
end
