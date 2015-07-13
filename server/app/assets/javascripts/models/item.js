// var bucketlistApp = bucketlistApp || {};
bucketlistApp.Models.Item = Backbone.Model.extend({
	// url: '/bucketlists/' + this.collection.id + '/items',
	// urlRoot: '/items',
	url: function() {
		debugger;
    var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
	    },
	defaults: {
		number: '',
		description: '',
		location: ''
	},
	name: 'Item'
});