bucketlistApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"bucketlists": "bucketlists",
		"users/sign_in": "signIn",
		"users/sign_up": "signUp",
		// "*actions": "defaultAction"
	},
	initialize: function() {
		console.log('router init')
		this.getCurrentUser();
	},
	bucketlists: function(){
		console.log('bucketLists');
		var bucketlistView = new bucketlistApp.Views.BucketlistView({collection: bucketlistApp.items});
		// bucketlistView.render();
	},
	getCurrentUser: function() {
		console.log('getCurrentUser');
		var token = Cookies.get('authentication_token');

		if (token) {
			$.getJSON("/users/" + token, function(response) {
				console.log(response)
				bucketlistApp.CurrentUser = response;
			})
		}
		// 		this.session = new bucketlistApp.Models.UserSession(data);
		// 		applicationView = new bucketlistApp.Views.ApplicationTemplateView(this.session);
		// 		applicationView.render();
		// 	});
		// } else {
		// 	this.session = new bucketlistApp.Models.UserSession();
		// 	applicationView = new bucketlistApp.Views.ApplicationTemplateView(this.session);
		// 	applicationView.render();
		// }
	},
	index: function(){
		console.log('index');
	}
})