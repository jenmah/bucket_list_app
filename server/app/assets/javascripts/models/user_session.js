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
  } 
});