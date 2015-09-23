var app = app || {};

app.FlightView = Backbone.View.extend({
	el: '#flights',

	render: function() {		
		var searchTemplate = $('#flightTemplate').html();

		$row = $(searchTemplate);
		$row.find('.flight-number').text( this.model.get('flight_number') );
		$row.find('.flight-origin').text( this.model.get('origin') );
		$row.find('.flight-destination').text( this.model.get('destination') );
		$row.find('.flight-date').text( this.model.get('date') );
		$row.find('.flight-time').text( this.model.get('time') );
	
		this.$el.prepend($row);
	}
});