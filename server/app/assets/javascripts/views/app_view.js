bucketlistApp.Views.appView = Backbone.View.extend({
  el: '#app',
  initialize: function () {
    this.template = _.template($('#appView').html());
  },

  render: function () {
    this.$el.html( this.template() );
    // debugger;
    var token = Cookies.get("authentication_token");
    // debugger
    if(token === undefined) {
      console.log('not logged in')
      new bucketlistApp.Views.loggedOutView().render();
    } else {
      console.log('logged in')
      new bucketlistApp.Views.loggedInView().render();
    }
  }
});