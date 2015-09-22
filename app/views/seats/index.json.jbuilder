json.array!(@seats) do |seat|
  json.extract! seat, :id, :seat_number, :plane_id
  json.url seat_url(seat, format: :json)
end
