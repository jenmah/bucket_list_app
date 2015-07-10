bucketlistApp.Views.ApplicationTemplateView = Backbone.View.extend({
  el: "header",
  initialize: function(session){
    this.user = session;
    this.user.on("successfulSignIn", this.render, this);
    this.user.on("successfulSignOut", this.render, this);
  },
  render: function() {
  	console.log('render function in application template');
    var template = _.template($('#application-template').html());
    this.$el.html(template({user: this.user}));
  },
  events: {
    "click #sign-out" : "signOut"
  },
  signOut: function() {
    this.user.logOut();
  }
});