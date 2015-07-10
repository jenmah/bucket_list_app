bucketlistApp.Views.UserMenuView = Backbone.View.extend({
 render: function(){

 	console.log('user menu render function called');
 	debugger;
 	var user = new bucketlistApp.Models.UserSession(); 
 	var template = _.template($('#user-menu-template').html());
  this.$el.html(template({user: user}));
  this.$el.html(template());
  return this;
	} 
})