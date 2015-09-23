class PagesController < ApplicationController 
	def search
	end

	def result
		@flights = Flight.all
		@origin = params[:origin]
		@destination = params[:destination]
	end
end

