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
			var hours = "0" + duration.slice(0, 1);
		} else if (arrayLength <= 4) {
			var hours = "00"
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
			var minutes = "0" + duration.slice(0, 1);
		} else if (arrayLength <= 2) {
			var minutes = "00"
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
			var seconds = "0" + duration.slice(0, 1);
		} else {
			var seconds = 0
		}
		
		return seconds;
	}
});

// Template.playerTile.events({

// 	'click .tempPlay': function(e) {
// 		var duration = this.duration.toString();
// 		var myInterval = setInterval(function() {
// 			if (duration < 000001) {
// 				console.log('clearing interval');
// 				clearInterval(myInterval);
// 			} else {
// 				duration = timeAnalysis(duration);
// 				var hours = duration.slice(0,2);
// 				var minutes = duration.slice(2,4);
// 				var seconds = duration.slice(4,6);
// 				$(e.target).prev().html(hours+'h:'+minutes+'m:'+seconds+'s');
// 			}
// 		}, 1000);


		
// 	}
// });

// // function space

// function timeAnalysis (duration) {

// 	// split string to time units
// 	var durArray = duration.split('');	
// 	var hours = durArray.slice(0,2).join("");
// 	var minutes = durArray.slice(2,4).join("");
// 	var seconds = durArray.slice(4,6).join("");

// 	// countdown logic
// 	if (minutes < 01 && seconds < 01) {
// 		hours -= 1;
// 		minutes = 59;
// 		seconds = 59;
// 	} else if (seconds < 01) {
// 		minutes -= 1;
// 		seconds = 59;
// 	} else if (seconds > 00) {
// 		seconds -= 1;
// 	}

// 	// normalise sec
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}

// 	// normalise min
// 	if (minutes < 10 && seconds === 59) {
// 		minutes = "0" + minutes;
// 	}

// 	// normalise hours
// 	if (hours < 10 && minutes === 59 && seconds === 59) {
// 		hours = "0" + hours;
// 	}

// 	// regroup units to string
// 	hours = hours.toString();
// 	newDur = hours.concat(minutes, seconds);
// 	return newDur;

// }

