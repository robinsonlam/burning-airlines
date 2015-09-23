class PagesController < ApplicationController 
	def search
	end

	def result
		@flights = Flight.all
		@origin = params[:origin]
		@destination = params[:destination]
	end

	def booking
		@user = @current_user
		@flight = Flight.find params[:id]
	end
end

