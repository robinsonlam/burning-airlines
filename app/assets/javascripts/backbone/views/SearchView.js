var app = app || {};

app.ENTER_KEY = 13;

app.SearchView = Backbone.View.extend({
	el: '#searchForm',

	events: {
		'click button': 'createSearch',
		'keydown textarea': 'checkForEnter'
	},

	render: function() {
		var searchTemplate = $('#searchViewTemplate').html();
		this.$el.html(searchTemplate);
		this.$el.find('#origin').focus();
	},

	createSearch: function() {
		var origin = this.$el.find('#originSearch').val();
		var destination = this.$el.find('#destinationSearch').val();

		var filteredFlights = app.flights.where({ origin: origin, destination: destination });
		if ( filteredFlights.length > 0 ) {
			app.filteredFlights.reset();
			filteredFlights.forEach(function(flight) {
				app.filteredFlights.add(flight);
			});

			var resultsView = new app.ResultsView({ collection: app.filteredFlights });
			resultsView.render();
		} else {
			$('#resultsTable').empty();	
			$('#resultsTable').text("No results found.");
		}
	},

	checkForEnter: function() {
		if ( event.which === app.ENTER_KEY ) {
			event.preventDefault();
			this.createSearch();
		}
	}
});