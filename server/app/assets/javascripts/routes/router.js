bucketlistApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"users/sign_in": "signIn",
		"users/sign_up": "signUp",
		// "*actions": "defaultAction"
	},
	renderUserMenu: function(){
		// First, we need to get the current user to return the session
		var token = $.cookie("authentication_token"),
				applicationView;
		// Check if we have a logged in user and if we do, pass the token from the db to the session model.
		if (token != null) {
			$.getJSON("/users/"+token, function(data){
				this.session = new bucketlistApp.Models.UserSession(data);
				applicationView = new bucketlistApp.Views.ApplicationTemplateView(this.session);
				applicationView.render();
			});
		} else {
			this.session = new bucketlistApp.Models.UserSession();
			applicationView = new bucketlistApp.Views.ApplicationTemplateView(this.session);
			applicationView.render();
		}
	},
	index: function(){
		var bucketlistView = new bucketlistApp.Views.BucketlistView({collection: bucketlistApp.bucketlist});
	},
	signIn: function(){
		var signInView = new bucketlistApp.Views.SignInView(this.session);
		signInView.render();
	},
	signUp: function(){
		var signUpView = new bucketlistApp.Views.SignUpView;
		signUpView.render();
	},
	initialize: function(){
		this.renderUserMenu();
	}
})