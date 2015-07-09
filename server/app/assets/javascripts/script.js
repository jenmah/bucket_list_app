var bucketlistApp = bucketlistApp || {};


$(document).ready(function(){
	bucketlistApp.bucketlist = new bucketlistApp.Bucketlist([]);

	// Creating a new router instance
	var router = new bucketlistApp.AppRouter();
	Backbone.history.start();
});