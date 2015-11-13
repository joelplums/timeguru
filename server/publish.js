Meteor.publish('gurus', function() {
	return Gurus.find({author: this.userId});
});