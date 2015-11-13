// Template.playerTile.onCreated(function() {
// 	this.duration = new ReactiveVar();
// });

Template.playerTile.helpers({
	Hours: function() {
		var duration = this.duration.toString();
		var durArray = duration.split('');
		var arrayLength = durArray.length;
		if (arrayLength === 6) {
			var hours = duration.slice(0, 2);
		} else if (arrayLength === 5) {
			var hours = duration.slice(0, 1);
		} else if (arrayLength <= 4) {
			var hours = 0
		}
		return hours;
	},
	Minutes: function() {
		var duration = this.duration.toString();
		var durArray = duration.split('');
		var arrayLength = durArray.length;
		if (arrayLength === 6) {
			var minutes = duration.slice(2, 4);
		} else if (arrayLength === 5) {
			var minutes = duration.slice(1, 3);
		} else if (arrayLength === 4) {
			var minutes = duration.slice(0, 2);
		} else if (arrayLength === 3) {
			var minutes = duration.slice(0, 1);
		} else if (arrayLength <= 2) {
			var minutes = 0
		}
		return minutes;
	},
	Seconds: function() {
		var duration = this.duration.toString();
		var durArray = duration.split('');
		var arrayLength = durArray.length;
		if (arrayLength === 6) {
			var seconds = duration.slice(4, 6);
		} else if (arrayLength === 5) {
			var seconds = duration.slice(3, 5);
		} else if (arrayLength === 4) {
			var seconds = duration.slice(2, 4);
		} else if (arrayLength === 3) {
			var seconds = duration.slice(1, 3);
		} else if (arrayLength === 2) {
			var seconds = duration.slice(0, 2);
		} else if (arrayLength === 1) {
			var seconds = duration.slice(0, 1);
		} else {
			var seconds = 0
		}
		
		return seconds;
	}
});

Template.playerTile.events({
	'click .tempPlay': function() {
		var duration = this.duration.toString();
		console.log(duration);
	}
});

