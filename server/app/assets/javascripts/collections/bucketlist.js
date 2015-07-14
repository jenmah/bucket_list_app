bucketlistApp.Collections.Bucketlist = Backbone.Collection.extend({
	url: function() {
		debugger;
		return '/bucketlists'
	},
	model: bucketlistApp.Models.Item
})