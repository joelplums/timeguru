Gurus = new Mongo.Collection('gurus');

Gurus.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

TimerData = new SimpleSchema ({
	
	title: {
		type: String
	},
	duration: {
		type: Number
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		}
	}
	// orderpos: {
	// 	autoValue: function() {
	// 		if 
	// 	}
	// }
});


GuruSchema = new SimpleSchema({
	guruName: {
		type: String,
		label: "Guru Name"
	},
	transition: {
		type: Number,
		label: "Transition"
	},
	timerdata: {
		type: [TimerData]
	}
});

Gurus.attachSchema( GuruSchema );
