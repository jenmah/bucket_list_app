bucketlistApp.Views.SignUpView = Backbone.View.extend({
	el: "main",
	render: function() {
		// debugger;
		this.template = _.template($('#sign-up-template').html());
		this.$el.html(this.template);
		return this.el;
	} 
});