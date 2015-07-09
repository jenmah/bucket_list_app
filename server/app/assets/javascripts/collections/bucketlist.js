bucketlistApp.Bucketlist = Backbone.Collection.extend({
	url: '/bucketlists',
	model: bucketlistApp.Item
})