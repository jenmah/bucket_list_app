bucketlistApp.Views.AddItemView = Backbone.View.extend({
	initialize: function() {
		console.log('init add item view')
		this.template = _.template($('#add-item-template').html())
		this.render();
	},
	el: '#add-item',
	// template: _.template($('#add-item-template').html()),
	render: function() {
		console.log('render add item view')
		this.$el.html( this.template() );
	}
})