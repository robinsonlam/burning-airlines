var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index'
	},

	index: function() {
		console.log("You are on the index page");
	}
});