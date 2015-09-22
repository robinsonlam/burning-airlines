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
		console.log('Creating Search');
	},

	checkForEnter: function() {
		if ( event.which === app.ENTER_KEY ) {
			event.preventDefault();
			this.createSearch();
		}
	}
});