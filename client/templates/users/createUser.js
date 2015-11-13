Template.createUser.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var email = $('[name=email]').val();
		var firstName = $('[name=first_name]').val();
		//var firstName = $('[name=first_name]').val();
		var password = $('[name=password]').val();
		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				firstName: firstName
			}
		});
		Router.go('dashboard');

	}
});