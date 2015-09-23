class AddAvailableToSeats < ActiveRecord::Migration
  def change
  	add_column :seats, :available, :boolean, :default => true
  end
end
