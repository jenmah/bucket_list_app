var bucketlistApp = bucketlistApp || {
	Models: {},
	Collections: {},
	Views: {}
};


$(document).ready(function(){
	bucketlistApp.bucketlist = new bucketlistApp.Collections.Bucketlist([]);

	// Creating a new router instance
	var router = new bucketlistApp.AppRouter();
	Backbone.history.start();
});