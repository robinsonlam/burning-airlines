# == Schema Information
#
# Table name: seats
#
#  id          :integer          not null, primary key
#  seat_number :string
#  plane_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  available   :boolean          default(FALSE)
#

class Seat < ActiveRecord::Base
	belongs_to :plane
end
