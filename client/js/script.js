bucketlistApp.bucketlist = new bucketlistApp.Bucketlist([]);

$(document).ready(function(){
	_.templateSettings = {
    evaluate:    /\{\{#([\s\S]+?)\}\}/g,
    interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,
    escape:      /\{\{\{([\s\S]+?)\}\}\}/g,
  }
	// Creating a new router instance
	var router = new bucketlistApp.AppRouter();
	Backbone.history.start();
});