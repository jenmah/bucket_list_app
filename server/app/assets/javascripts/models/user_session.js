bucketlistApp.Models.UserSession = Backbone.Model.extend({
 url: "/users/sign_in.json",
 defaults: {
   id: null,
   email: '',
   password: '',
   authentication_token: null
	},
	isLoggedIn: function() {
    return !!this.get("authentication_token");
  },
  logOut: function(){
  	console.log(this.get("authentication_token"), 'token inside loggedOut');
  	var self = this;
  	$.ajax({
  		url: "/users/"+self.get("authentication_token"),
  		method: "DELETE",
  		dataType: "json"
  	}).done(function(){
  		$.removeCookie("authentication_token");
  		self.clear().set(self.defaults);
  		self.trigger("successfulSignOut");
  	})
  }
});