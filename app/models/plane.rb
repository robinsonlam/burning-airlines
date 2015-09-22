# == Schema Information
#
# Table name: planes
#
#  id          :integer          not null, primary key
#  name        :string
#  num_rows    :integer
#  num_cols    :integer
#  seat_number :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seats       :integer
#

class Plane < ActiveRecord::Base
end
