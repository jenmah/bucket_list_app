bucketlistApp.Views.UserMenuView = Backbone.View.extend({
 render: function(){

 	console.log('user menu render function called');
 	var user = new bucketlistApp.Models.UserSession(); 
 	debugger;
 	var template = _.template($('#user-menu-template').html());
 	console.log(template);
  this.$el.html(template({user: user}));
  return this;
	} 
})