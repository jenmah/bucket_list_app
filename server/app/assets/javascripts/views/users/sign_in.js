bucketlistApp.Views.SignInView = Backbone.View.extend({
 	el: "main",
 	// initialize: function(session) {
 	// 	this.model = session;
 	// },
 	render: function() {
   	var template = _.template($('#sign-in-template').html());
   	this.$el.html(template());
   	return this.$el;
	},
	events: {
		"click #login": "signIn"
	},
	signIn: function(){
		console.log("signIn callback");
		var self = this;
	  var user = new bucketlistApp.Models.UserSession;
	  console.log("UserSession in sign in method", user.cid);
   	user.save({
      email: $("input[name='email']").val(),
      password: $("input[name='password']").val(),
  	}, {
			success: function(model, response) {
      	var token = response.authentication_token;
      	$.cookie("authentication_token", token);
      	debugger;
      	this.session = new bucketlistApp.Models.UserSession(response);
      	var bucketlistView = new bucketlistApp.Views.BucketlistView({session: this.session});
      	debugger;
      	// Quick Friday Fix, will look again...
      	// Issue is that session is not passed into the instantiation of the view as only happening on initialize of the router...
      	var router = new bucketlistApp.AppRouter();
      	router.renderUserMenu()
      	// user.set({authentication_token: token})
      	// user.trigger("successfulSignIn");
	     },
	     error: function(model, response) {
	     	$('.alert').css("color", "red");
       	$('.alert ul').html("<li>Invalid email or password</li>");
	      console.log("signIn error");
	     }
	  })
	}
})