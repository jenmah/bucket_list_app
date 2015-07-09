bucketlistApp.Views.SignUpView = Backbone.View.extend({
	el: "main",
	render: function() {
		// debugger;
		this.template = _.template($('#sign-up-template').html());
		this.$el.html(this.template);
		return this.el;
	},
	events: {
		"click #signup": "signUp"
	},
	signUp: function(){
		console.log("signUp callback");
		var user = new bucketlistApp.Models.User;
   	user.save({
     email: $("input[name='email']").val(),
     password: $("input[name='password']").val(),
     password_confirmation: $("input[name='password_confirmation']").val()
		}, {
			success: function(model, response){
				$('.alert').css("color", "green");
				$('.alert ul').empty();
				_(response).each(function(message){
					$('.alert ul').append("<li>" + message + "</li>")
				})
			},
			error: function(model, response){
				var errors = response.responseJSON;
				$('.alert ul').empty();
				$('.alert').css("color", "red");
				_(errors).each(function(error){
					console.log(error);
					$('.alert ul').append("<li>" + error + "</li>")
				})
			}
		})
   }
});