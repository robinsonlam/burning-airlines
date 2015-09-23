_.templateSettings = {
   evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function() {

	app.flights = new app.Flights();
	app.flights.fetch();

	app.filteredFlights = new app.FilteredFlights();

	app.router = new app.AppRouter();
	Backbone.history.start();
});