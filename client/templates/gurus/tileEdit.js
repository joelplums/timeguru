Template.tileEdit.onCreated(function() {
	this.duration = new ReactiveVar(this.data.duration);
});

Template.tileEdit.helpers({
	getHours: function() {
		var templateInstance = UI._templateInstance();
		var duration = templateInstance.duration.get();
		console.log(duration);
		var durArray = duration.split('');
		if (durArray.length === 5) {
			var hours = [durArray[0]];
		} else if (durArray.length === 6) {
			var hours = [durArray[0], durArray[1]];
		}
		return hours.join("");
	},

	getMinutes: function() {
		var templateInstance = UI._templateInstance();
		var duration = templateInstance.duration.get();
		console.log(duration);
		var durArray = duration.split('');
		if (durArray.length === 3) {
			var minutes = [durArray[0]];
		} else if (durArray.length === 4) {
			var minutes = [durArray[0], durArray[1]];
		} else if (durArray.length === 5) {
			var minutes = [durArray[1], durArray[2]];
		} else if (durArray.length === 6) {
			var minutes = [durArray[2], durArray[3]];
		}

		return minutes.join("");
	},

	getSeconds: function() {
		var templateInstance = UI._templateInstance();
		var duration = templateInstance.duration.get();
		var durArray = duration.split('');
		if (durArray.length < 3) {
			var seconds = [durArray[0], durArray[1]];
		} else if (durArray.length === 3) {
			var seconds = [durArray[1], durArray[2]];
		} else if (durArray.length === 4) {
			var seconds = [durArray[2], durArray[3]];
		} else if (durArray.length === 5) {
			var seconds = [durArray[3], durArray[4]];
		} else if (durArray.length === 6) {
			var seconds = [durArray[4], durArray[5]];
		}
		return seconds.join("");
	},


});

Template.tileEdit.events({
	
	// 'tileEdit.ready()': function(e, template) {
	// 	template.duration.set($(e.target).val());


	// }




});