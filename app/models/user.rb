# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  address         :text
#  phone_number    :string
#  passport_number :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  admin           :boolean          default(FALSE)
#  password_digest :string
#  email           :string
#

class User < ActiveRecord::Base
	has_secure_password
	has_many :reservations

	validates :email, :presence => true, :uniqueness => true
	# validates :first_name, :presence => true, :uniqueness => true, :length => { :minimum => 3 }
end
