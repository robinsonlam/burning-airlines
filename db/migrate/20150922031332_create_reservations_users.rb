class CreateReservationsUsers < ActiveRecord::Migration
  def change
    create_table :reservations_users do |t|
      t.integer :user_id
      t.integer :reservation_id
    end
  end
end
