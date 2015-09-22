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
#

class User < ActiveRecord::Base
	has_many :reservations
end
