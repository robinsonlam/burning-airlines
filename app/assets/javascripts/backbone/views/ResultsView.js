var app = app || {};

app.ResultsView = Backbone.View.extend({
	el: '#resultsTable',

	initialize: function() {
		var resultsTemplate = $('#resultsTemplate').html();
		this.$el.append( resultsTemplate );

		this.collection.on('add', function(flight) {	
			var flightView = new app.FlightView({ model: flight });
			flightView.render();
		}, this);
	},

	render: function() {
		if ( $('.flight').length ) {
			this.$el.empty();				
			var resultsTemplate = $('#resultsTemplate').html();
			this.$el.append( resultsTemplate );
		}

		this.collection.each(function(flight) {
			var flightView = new app.FlightView({ model: flight });
			flightView.render();
		});
	},
});