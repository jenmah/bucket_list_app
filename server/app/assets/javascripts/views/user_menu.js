bucketlistApp.Views.UserMenuView = Backbone.View.extend({
 render: function(){
 	var user = new bucketlistApp.Models.UserSession;  
 	var template = _.template($('#user-menu-template').html());
  this.$el.html(template());
  return this;
	} 
})