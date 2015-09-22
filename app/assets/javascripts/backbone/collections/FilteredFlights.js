var app = app || {};

app.FilteredFlights = Backbone.Collection.extend({
	model: app.Flight
});