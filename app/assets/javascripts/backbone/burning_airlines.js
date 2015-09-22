_.templateSettings = {
   evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function() {

	app.flights = new app.Flights();
	app.flights.fetch();

	// app.filteredFlights = app.flights.where({ origin: 'Sydney', destination: 'Melbourne' }); // FOR SEARCH

	app.router = new app.AppRouter();
	Backbone.history.start();
});