bucketlistApp.Views.ItemView = Backbone.View.extend({
	tagName: 'div',
	// className : 'item-box',
	events: {
		'click button.remove': 'removeItem',
		'click button.edit': 'editItem',
		'click button.save': 'saveItem',
		'click input.completed': 'completedItem'
	},
	initialize: function(){
		this.itemTemplate = _.template($('#list-item').html());
	},
	render: function(){
		this.$el.html(this.itemTemplate(this.model.toJSON()));
		return this;
	},
	removeItem: function(){
		this.model.destroy();
	},
	editItem: function(){
		this.$('h2, p').each(function(){
			$(this).replaceWith($('<input class="' + $(this).attr('class') + '" value="' + $(this).text() + '" />'));
		})
			this.$('button.edit').text('Save').addClass('save').removeClass('edit');
	},
	saveItem: function(){
		this.model.set({
			number: this.$('input.number').val(),
			description: this.$('input.description').val(),
			location: this.$('input.location').val()
		})
		if (this.model.hasChanged()) {
			this.model.save();
		} else {
			console.log('the same');
			this.render();
		}
	},
	completedItem: function(){
		console.log('completedItem');
	}
})