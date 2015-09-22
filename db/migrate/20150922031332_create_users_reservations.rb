class CreateUsersReservations < ActiveRecord::Migration
  def change
    create_table :users_reservations do |t|
      t.integer :user_id
      t.integer :reservation_id
    end
  end
end
