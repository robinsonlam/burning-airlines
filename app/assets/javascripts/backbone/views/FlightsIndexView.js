var app = app || {};

app.FlightsIndexView = Backbone.View.extend({
	el: '#main',

	initialize: function() {
		this.collection.on('add', function(flight) {	
			var flightView = new app.FlightView({ model: flight });
			flightView.render();
		}, this);
	},

	render: function() {
		var resultsTemplate = $('#resultsTemplate').html();
		this.$el.html( resultsTemplate );
	},
});