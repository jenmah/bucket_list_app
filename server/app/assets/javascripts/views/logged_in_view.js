bucketlistApp.Views.loggedInView = Backbone.View.extend({
  el: '#user',

  initialize: function () {
    //unbind any existing event handlers
    $(this.el).undelegate('#logout', 'click');

    this.template = _.template($('#loggedInView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  },

  events: {
    'click #logout': 'logout'
  },

  logout: function (event) {

    event.preventDefault();

    var request = $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: '/users/sign_out'
    // what to do on success
    }).done(function (data) {
      //perform javascript logout
      Cookies.remove('authentication_token')

      // take the user back to the home page and re-render
      bucketlistApp.router.navigate('/');
      bucketlistApp.Views.appView.render();
      // this is required as if you are already on the home page and you logout, the page does not re-render
      bucketlistApp.router.index();
    });

  }
});