json.array!(@planes) do |plane|
  json.extract! plane, :id, :name, :num_rows, :num_cols, :seat_number
  json.url plane_url(plane, format: :json)
end
