Template.guruCreate.events({
	'click .addTile': function(e) {
		e.preventDefault();
		var timers = $('.timers');	
		Blaze.render(Template.tile, timers[0]);
	},

	'click .removeTile': function(e) {
		e.preventDefault();
		$(e.target).parent().parent().remove();
	},
	'click .fa-minus': function(e) {
		e.preventDefault();
		$(e.target).parent().parent().remove();
	},
	'click .cancelaction': function(e) {
		e.preventDefault();
		Router.go('dashboard');
	},
	'keyup .transition': function(e) {
		var transtime = $("[name=transition]").val();
		var transArray = transtime.split('');
		var transLength = transArray.length
		if (transLength > 4) {
			var minutes = (transArray.splice(0,2)).join("");
			var seconds = (transArray.splice(0,2)).join("");
		} else if(transLength === 0) {
			var seconds = "";
			var minutes = "";
		} else if (transLength === 1) {
			var seconds = transArray[0];
			var minutes = ""
		} else if (transLength === 2) {
			var seconds = transArray.join("");
			var minutes = ""
		} else if (transLength === 3) {
			var minutes = transArray[0];
			var seconds = (transArray.splice(1,3)).join("");
		} else if (transLength === 4) {
			var minutes = (transArray.splice(0,2)).join("");
			var seconds = transArray.join("");
		} 
		$(".transmin").html(minutes+'m');
		$(".transsec").html(seconds+'s');
	},
	'focus .transition': function(event, template) {
		var sel = window.getSelection();
		var range = document.createRange();
		var length = $(event.target).val().length;
		console.log(length);
		range.setStart(event.target, length - 1);
		range.setEnd(event.target, length - 1);
		sel.removeAllRanges();
		sel.addRange(range);
	},
	'submit form': function(e) {
		e.preventDefault();

		var guruName = $("[name=guruName]").val();
		var transition = $("[name=transition]").val();
		if (transition.length > 4) {
			transition = limiter(transition);
		} else if (transition.length < 4) {
			transition = transpad(transition);
		}

		console.log(transition);

		var timerData = _.map($(".tile"), function(tile) {

			var jqTile = $(tile);
			var tit = $(jqTile.find('[name=title]')).val();
			var dur = $(jqTile.find('[name=duration]')).val();
			dur = padding(dur);
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
	
	}
});

function padding (dur) {
	while (dur.length < 6) {

			dur = "0" + dur;
	}
	return dur
};

function limiter (transition) {
	var limittransArray = transition.split('');
	transition = (limittransArray.splice(0, 4)).join("");
	return transition;
};

function transpad (transition) {
	while (transition.length < 4) {
		transition = "0" + transition;
		console.log(transition);
	}
	return transition;
}
	
