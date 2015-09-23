var app = app || {};

app.FilteredFlights = Backbone.Collection.extend({
	model: app.Flight,

	initialize: function() {
		this.on('add', function(flight) {	
			var flightView = new app.FlightView({ model: flight });
			flightView.render();
		});
	}
});