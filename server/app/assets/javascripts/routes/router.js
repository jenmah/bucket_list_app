bucketlistApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"users/sign_in": "signIn",
		"users/sign_up": "signUp",
		"*actions": "defaultAction"
	},
	index: function(){
		var bucketlistView = new bucketlistApp.BucketlistView({collection: bucketlistApp.bucketlist});
	},
	signIn: function(){
		console.log("signIn route");
	},
	signOut: function(){
		console.log("signOut route");
	}
})