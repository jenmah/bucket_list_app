bucketlistApp.Views.BucketlistView = Backbone.View.extend({
	el: '#bucketlist',
	events: {'submit form#add': 'createItem'},
	initialize: function(){
		this.collection.bind('add remove change', this.render, this);
	},
	render: function(){
		console.log('render function called')
		var itemList = $('#bucketlistItems');
		itemList.empty();
		this.collection.each(function(item){
			var itemView = new bucketlistApp.Views.ItemView({
				model: item})
			itemList.append(itemView.render().el);
			});
		},
		addItem: function(number, description, location){
			var item = new bucketlistApp.Models.Item({number: number, description: description, location: location});
			this.collection.create(item);
			console.log(this.collection.length);
		},
		createItem: function(event){
			event.preventDefault();
			var number = this.$('#number');
			var description = this.$('#description');
			var location = this.$('#location');
			this.addItem(number.val(), description.val(), location.val());
			number.val('');
			description.val('');
			location.val('');
		}
})