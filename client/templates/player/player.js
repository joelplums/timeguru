var playTilesInOrder = function(tiles) {
	if (tiles.length === 0) {
		return true;
	}
	var currentTile = tiles[0];
	console.log(currentTile);
	var jqcurrent = $(currentTile);
	var duration = $(jqcurrent.find('[class=durationHidden]')).html();
	var myInterval = setInterval(function() {
		if (duration < 000001) {
			console.log('clearing interval');
			tiles.splice(0, 1);
			playTilesInOrder(tiles);
			clearInterval(myInterval);
		} else {
			duration = timeAnalysis(duration);
			var hours = duration.slice(0,2);
			var minutes = duration.slice(2,4);
			var seconds = duration.slice(4,6);
			$(jqcurrent.find('[class=tileTime]')).html(hours+'h:'+minutes+'m:'+seconds+'s');
		}
	}, 1000);

};

Template.playGuru.events({

	'click .play': function(e) {
		var playerTile = $(".playerTile");
		playTilesInOrder(playerTile);

		// for (i = 0; i < nTiles;) {
		// 	var currentTile = playerTile[i]
		// 	console.log(currentTile);
		// 	var jqcurrent = $(currentTile);
		// 	var duration = $(jqcurrent.find('[class=durationHidden]')).html();
		// 	var myInterval = setInterval(function() {
		// 		if (duration < 000001) {
		// 			console.log('clearing interval');
		// 			i++;
		// 			clearInterval(myInterval);

		// 		} else {
		// 			duration = timeAnalysis(duration);
		// 			var hours = duration.slice(0,2);
		// 			var minutes = duration.slice(2,4);
		// 			var seconds = duration.slice(4,6);
		// 			$(jqcurrent.find('[class=tileTime]')).html(hours+'h:'+minutes+'m:'+seconds+'s');
		// 		}
		// 	}, 1000);



		// }



		


		
	}
});

// function space

function timeAnalysis (duration) {

	// split string to time units
	var durArray = duration.split('');	
	var hours = durArray.slice(0,2).join("");
	var minutes = durArray.slice(2,4).join("");
	var seconds = durArray.slice(4,6).join("");

	// countdown logic
	if (minutes < 01 && seconds < 01) {
		hours -= 1;
		minutes = 59;
		seconds = 59;
	} else if (seconds < 01) {
		minutes -= 1;
		seconds = 59;
	} else if (seconds > 00) {
		seconds -= 1;
	}

	// normalise sec
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	// normalise min
	if (minutes < 10 && seconds === 59) {
		minutes = "0" + minutes;
	}

	// normalise hours
	if (hours < 10 && minutes === 59 && seconds === 59) {
		hours = "0" + hours;
	}

	// regroup units to string
	hours = hours.toString();
	newDur = hours.concat(minutes, seconds);
	return newDur;

}