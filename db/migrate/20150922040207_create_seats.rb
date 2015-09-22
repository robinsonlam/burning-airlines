class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|
      t.string :seat_number
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
