// var bucketlistApp = bucketlistApp || {};
bucketlistApp.Models.Item = Backbone.Model.extend({
	// url: '/bucketlists/' + this.collection.id + '/items',
	// urlRoot: '/items',
	url: function() {
		debugger;
    var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || '/bucketlists';
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + this.attributes.bucketlist_id + '/' + (this.name.toLowerCase() + 's') + '/' +  encodeURIComponent(this.id);
	    },
	defaults: {
		number: '',
		description: '',
		location: ''
	},
	name: 'Item'
});