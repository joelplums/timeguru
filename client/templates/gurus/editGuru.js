Template.editGuru.events({
	'click .addTile': function(e) {
		e.preventDefault();
		var timers = $('.timers');	
		Blaze.render(Template.tile, timers[0]);
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

		var currentGuru = this._id;

		var guruProperties = {
			guruName: guruName,
			transition: transition,
			timerdata: timerData,
		}

		Gurus.update(currentGuru, {$set: guruProperties}, function(error) {
			if (error) {
				alert(error)
			} else {
				Router.go('dashboard');
			}
		});
		
	}
})