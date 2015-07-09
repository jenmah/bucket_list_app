bucketlistApp.Views.SignInView = Backbone.View.extend({
 el: "main",
 render: function() {
   var template = _.template($('#sign-in-template').html());
   this.$el.html(template());
   return this.el;
	},
	events: {
		"click #login": "signIn"
	},
	signIn: function(){
		console.log("signIn callback");
		var self = this;
	  var user = new bucketlistApp.Models.UserSession;
   	user.save({
      email: $("input[name='email']").val(),
      password: $("input[name='password']").val(),
  	}, {
			success: function(model, response) {
      	console.log("signIn success");
      	var token = response.authentication_token;
      	$.cookie("authentication_token", token);
      	console.log(token);
	     },
	     error: function(model, response) {
	     	$('.alert').css("color", "red");
       	$('.alert ul').html("<li>Invalid email or password</li>");
	      console.log("signIn error");
	     }
	  })
	}
})