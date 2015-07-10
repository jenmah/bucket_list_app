//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routes


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

	bucketlistApp.Views.appView = new bucketlistApp.Views.appView();
	bucketlistApp.Views.appView.render();

	// Creating a new router instance
	var router = new bucketlistApp.AppRouter();
	Backbone.history.start();
});