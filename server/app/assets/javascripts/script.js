var bucketlistApp = bucketlistApp || {
	Models: {},
	Collections: {},
	Views: {}
};


$(document).ready(function(){
	_.templateSettings = {
    evaluate:    /\{\{#([\s\S]+?)\}\}/g,
    interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,
    escape:      /\{\{\{([\s\S]+?)\}\}\}/g,
  }
	bucketlistApp.bucketlist = new bucketlistApp.Collections.Bucketlist([]);

	// Creating a new router instance
	var router = new bucketlistApp.AppRouter();
	Backbone.history.start();
});