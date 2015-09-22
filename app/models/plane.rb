# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string
#  num_rows   :integer
#  num_cols   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Plane < ActiveRecord::Base
	has_many :seats
	has_many :flights
end
