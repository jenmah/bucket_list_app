bucketlistApp.Views.appView = Backbone.View.extend({
  el: '#app',
  initialize: function () {
    this.template = _.template($('#appView').html());
  },

  render: function () {
    this.$el.html( this.template() );
    if (bucketlistApp.currentUser) {
      var view = new bucketlistApp.Views.loggedInView();
      view.render();
    } else {
      var view = new bucketlistApp.Views.loggedOutView();
      view.render();
    }
  }
});