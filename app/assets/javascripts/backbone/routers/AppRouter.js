var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'flights/:id': 'flightPage'
	},

	index: function() {
		var appView = new app.AppView();
		appView.render();
	},

	flightPage: function(id) {
		// console.log('you clicked on flight ' + id);
	}
});