// var bucketlistApp = bucketlistApp || {};
bucketlistApp.Models.Item = Backbone.Model.extend({
	urlRoot: '/bucketlists',
	defaults: {
		number: '',
		description: '',
		location: ''
	}
});