// bucketlistApp.Views.UserMenuView = Backbone.View.extend({
//  initialize: function(session){
//  	console.log("UserMenuView");
//  	this.model = session;
//  	this.model.on("successfulSignIn", this.render, this);
//  	this.model.on("successfulSignOut", this.render, this);
//  },
//  render: function(){
//  	console.log('user menu render function called');
//  	var template = _.template($('#user-menu-template').html());
//   this.$el.html(template({user: this.user}));
//   return this;
// 	} 
// })