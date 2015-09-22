class RemoveSeatNumberFromPlanes < ActiveRecord::Migration
  def change
  	remove_column :planes, :seat_number
  end
end
