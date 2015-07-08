bucketlistApp.bucketlist = new bucketlistApp.Bucketlist([]);

$(document).ready(function(){
	// Creating a new router instance
	var router = new bucketlistApp.AppRouter();
	Backbone.history.start();
});