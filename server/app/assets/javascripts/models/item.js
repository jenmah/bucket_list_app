// var bucketlistApp = bucketlistApp || {};
bucketlistApp.Item = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/bucketlists',
	defaults: {
		number: '',
		description: '',
		location: ''
	}
});