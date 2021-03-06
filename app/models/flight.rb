# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :string
#  origin        :string
#  destination   :string
#  date          :date
#  time          :time
#  plane_id      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Flight < ActiveRecord::Base
	belongs_to :plane
	has_many :reservations
end
