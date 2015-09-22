class AddSeatsToPlanes < ActiveRecord::Migration
  def change
  	add_column :planes, :seats, :integer
  end
end
