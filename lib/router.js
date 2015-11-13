Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'landing'});

Router.route('/logIn', {name: 'logIn'});

Router.route('/create', {name: 'createUser'});

Router.route('/dashboard', {
	name:'dashboard',
	waitOn: function() {
		return [
			Meteor.subscribe('gurus')
		];
	},
	data: function() {
		return {
			gurus: Gurus.find()
		};
	}
});

Router.route('/play/:_id', {
	name: 'playGuru',
	waitOn: function() {
		return [
			Meteor.subscribe('gurus')
		];
	},
	data: function() { return Gurus.findOne(this.params._id); }
});

Router.route('/new', {name:'guruCreate'});

Router.route('/edit/:_id', {
	name: 'editGuru',
	waitOn: function() {
		return [
			Meteor.subscribe('gurus')
		];
	},
	data: function() { return Gurus.findOne(this.params._id); }


});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
		this.render('landing');
		}
	} else {
		this.next();

	}
}



Router.onBeforeAction(requireLogin, {except: ['landing', 'logIn', 'createUser']});

