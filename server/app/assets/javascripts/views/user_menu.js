bucketlistApp.Views.UserMenuView = Backbone.View.extend({
 render: function(){
 	console.log('user menu render function called');
 	var user = new bucketlistApp.Models.UserSession(); 
 	var template = _.template($('#user-menu-template').html());
 		debugger 
  this.$el.html(template({user: user}));
  return this;
	} 
})