Gurus = new Mongo.Collection('gurus');

Meteor.methods({
	guruCreate: function(guruProperties) {
		check(Meteor.userId(), String);
		check(guruProperties, {
			guruName: String,
			transition: String,
			timerdata: [Object],
		});
		Gurus.insert(guruProperties);
	}
});

Gurus.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return ownsDocument(userId, doc);
	},
	remove: function(userId, doc) {
		return ownsDocument(userId, doc);
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
			return new Date();
		}
	}

});


GuruSchema = new SimpleSchema({
	guruName: {
		type: String,
		label: "Name Your Guru"
	},
	transition: {
		type: Number,
		label: "Transition"
	},
	timerdata: {
		type: [TimerData],
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		}
	}

});

Gurus.attachSchema( GuruSchema );
