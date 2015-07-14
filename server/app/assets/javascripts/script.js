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
	// bucketlistApp.bucketlist = new bucketlistApp.Collections.Bucketlist();

	bucketlistApp.router = new bucketlistApp.AppRouter();
	Backbone.history.start();

	bucketlistApp.Views.appView = new bucketlistApp.Views.appView();
	bucketlistApp.Views.appView.render();

	// instantiating the new collection
	bucketlistApp.items = new bucketlistApp.Collections.Bucketlist();



// LOOK AT THIS AGAIN... success and error callbacks
	// $.when(
	// 	bucketlistApp.items.fetch()
	// 	).then(function(){

	// });

});