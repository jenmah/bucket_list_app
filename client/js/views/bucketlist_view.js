bucketlistApp.BucketlistView = Backbone.View.extend({
	el: '#bucketlist',
	events: {'submit form#add': 'createItem'},
	initialize: function(){
		this.collection.bind('add remove change', this.render, this);
		this.collection.fetch({
			success: function(collection, response, options) {
				console.log('collection');
			},
			error: function(collection, response, options) {
				console.log('error');
			}
		})
	},
	render: function(){
		console.log('render function called')
		var itemList = $('#bucketlistItems');
		itemList.empty();
		this.collection.each(function(item){
			var itemView = new bucketlistApp.ItemView({
				model: item})
			itemList.append(itemView.render().el);
			});
		},
		addItem: function(number, description, location){
			var item = new bucketlistApp.Item({number: number, description: description, location: location});
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