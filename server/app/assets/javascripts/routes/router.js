bucketlistApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"users/sign_in": "signIn",
		"users/sign_up": "signUp",
		"*actions": "defaultAction"
	},
	index: function(){
		var bucketlistView = new bucketlistApp.Views.BucketlistView({collection: bucketlistApp.bucketlist});
	},
	signIn: function(){
		console.log("signIn route");
		var signInView = new bucketlistApp.Views.SignInView;
		signInView.render();
	},
	signUp: function(){
		console.log("signUp route");
		// debugger
		var signUpView = new bucketlistApp.Views.SignUpView;
		signUpView.render();
	}
})