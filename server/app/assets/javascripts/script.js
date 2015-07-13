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

	bucketlistApp.Views.appView = new bucketlistApp.Views.appView();
	bucketlistApp.Views.appView.render();

	// instantiating the new collection
	bucketlistApp.items = new bucketlistApp.Collections.Bucketlist();

	// if user then render items

// LOOK AT THIS AGAIN... success and error callbacks
	// $.when(
	// 	bucketlistApp.items.fetch()
	// 	).then(function(){
			bucketlistApp.router = new bucketlistApp.AppRouter();
			Backbone.history.start();
	// });

});



//handle client side session
var session = {
  login: function (email) {
    bucketlistApp.currentUser = email;
    //add logged-in class to the body (used to display / hide elements on the page)
    $('body').addClass('logged-in');
  },

  logout: function () {
    //set currentUser to blank
    bucketlistApp.currentUser = '';
    //remove logged-in class from the body (used to display / hide elements on the page)
    $('body').removeClass('logged-in');
  }
};