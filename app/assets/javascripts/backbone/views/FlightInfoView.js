var app = app || {};

app.FlightInfoView = Backbone.View.extend({
	el: '#main',

	render: function() {
		var infoTemplate = $('#flightInfoTemplate').html();

		$infoTemplate = $(infoTemplate);
		console.log($infoTemplate);
		$infoTemplate.find('.flight-number').text( this.model.get('flight_number') );
		$infoTemplate.find('.flight-origin').text( this.model.get('origin') );
		$infoTemplate.find('.flight-destination').text( this.model.get('destination') );
		$infoTemplate.find('.flight-date').text( this.model.get('date') );
		$infoTemplate.find('.flight-time').text( this.model.get('time') );

		this.$el.html($infoTemplate);
	},
});