var app = app || {};

app.Flight = Backbone.Model.extend({
	urlRoot: '/flights',
	defaults: {
		flight_number: 'Unassigned Flight Number',
		date: '1st January 2000',
		time: '00:00',
		origin: 'Unassigned Origin',
		destination: 'Unassigned Destination'
	}
});