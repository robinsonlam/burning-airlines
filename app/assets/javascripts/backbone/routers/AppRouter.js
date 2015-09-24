var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'flights/:flight_number': 'flightPage'
	},

	index: function() {
		var appView = new app.AppView();
		appView.render();
	},

	flightPage: function(flight_number) {
		// console.log('you clicked on flight ' + id);
		debugger;
		app.flights.fetch().done(function() {
			var flight = app.flights.findWhere({ flight_number: flight_number });
			flight.fetch().done(function() {
				debugger;
				var currentFlightView = new app.FlightInfoView({ model: flight });
				currentFlightView.render();
			});
		});
	}
});