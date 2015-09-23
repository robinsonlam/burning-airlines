var app = app || {};

app.ResultsView = Backbone.View.extend({
	el: '#main',

	// initialize: function() {
	// 	this.collection.on('add', function(flight) {	
	// 		var flightView = new app.FlightView({ model: flight });
	// 		flightView.render();
	// 	}, this);
	// },

	render: function() {
		this.collection.forEach(function(flight) {
			var flightView = new app.FlightView({ model: flight });
			flightView.render();
		});

		var resultsTemplate = $('#resultsTemplate').html();
		this.$el.append( resultsTemplate );
	},
});