Template.headernav.helpers({
	userName: function() {
		var user = Meteor.user();
		console.log(user);
		return 'Hello, ' + user.profile.firstName + ' ';
		// return (typeof user.profile !== 'undefined') ? 'no name' : user.profile.firstName;
		// var user = Meteor.users.findOne();
		// console.log(user);
		// return 'temp';
	}
});

Template.headernav.events({
	'click .profile': function(e){
		e.preventDefault();
		$('.logout').slideToggle();

	},
	'click .logout': function(e){
		e.preventDefault();
		Meteor.logout();
		Router.go('landing');
	}

});