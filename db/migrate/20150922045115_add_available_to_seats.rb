class AddAvailableToSeats < ActiveRecord::Migration
  def change
  	add_column :seats, :available, :boolean, :default => false
  end
end
