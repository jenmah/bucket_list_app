bucketlistApp.Models.User = Backbone.Model.extend({
     url: "/users.json",
     defaults: {
       id: null,
       email: '',
       password: '',
       password_confirmation: ''
     }
});