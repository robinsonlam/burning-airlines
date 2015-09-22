class RemoveSeatsFromPlanes < ActiveRecord::Migration
  def change
  	remove_column :planes, :seats
  end
end
