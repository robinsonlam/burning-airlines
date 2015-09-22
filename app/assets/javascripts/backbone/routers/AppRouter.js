var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'flights/:origin/:destination': 'filteredFlightsView'
	},

	index: function() {
		var appView = new app.AppView();
		appView.render();
	},

	filteredFlightsView: function(origin, destination) {
		
	}
});