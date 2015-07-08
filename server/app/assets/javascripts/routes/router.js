bucketlistApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index"
	},
	index: function(){
		var bucketlistView = new bucketlistApp.BucketlistView({collection: bucketlistApp.bucketlist});
	}
})