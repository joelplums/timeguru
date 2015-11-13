Template.guruCreate.events({
	'click .addTile': function(e) {
		e.preventDefault();
		var timers = $('.timers');	
		Blaze.render(Template.tile, timers[0]);
	},
	'keyup .duration': function(e) {

		// e.preventDefault(); 
		// var inputArray = $(e.target).val().split('');
		// var arrayLength = inputArray.length;
		// for (var index = arrayLength; index >= 0; i--) {

		// }
		// // console.log(inputArray);
		// // console.log(arrayLength);
		// if (arrayLength === 3){
		// 	function getMinute (inputArray) {
		// 		console.log(inputArray[0]);
		// 		// $(e.target).prev().html(inputArray[0]);

		// 	};
		// } else if (inputArray.length = 4) {

		// }

	
	},
	'click .removeTile': function(e) {
		e.preventDefault();
		$(e.target).parent().remove();
	},
	'click .fa-minus': function(e) {
		e.preventDefault();
		$(e.target).parent().parent().remove();
	},
	'submit form': function(e) {
		e.preventDefault();

		var guruName = $("[name=guruName]").val();
		var transition = $("[name=transition]").val();

		var timerData = _.map($(".tile"), function(tile) {
			var jqTile = $(tile);
			var tit = $(jqTile.find('[name=title]')).val();
			var dur = $(jqTile.find('[name=duration]')).val();
			return {title: tit, duration: dur};
		});

		var guruProperties = {
			guruName: guruName,
			transition: transition,
			timerdata: timerData,
		}

		Meteor.call('guruCreate', guruProperties, function(err, result) {
			if (err)
				return alert(err);
			Router.go('dashboard')
		});

		// Gurus.insert({
		// 	guruName: guruName,
		// 	transition: transition,
		// 	timerdata: timerData,
		// 	}, 
		// 	function(err, result) {
		// 		if (err) {
		// 			alert(err);
		// 		} else {
		// 			Router.go('dashboard');
		// 		}
		// });
	
		
	}
});


	
