class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
      t.string :name
      t.integer :num_rows
      t.integer :num_cols
      t.text :seat_number

      t.timestamps null: false
    end
  end
end
