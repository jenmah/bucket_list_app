bucketlistApp.Bucketlist = Backbone.Collection.extend({
	url: 'http://localhost:3000/bucketlists',
	model: bucketlistApp.Item
})