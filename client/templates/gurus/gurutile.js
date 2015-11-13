Template.gurutile.events({
	'click .deleteGuru': function(e) {
		e.preventDefault();
		$(e.target).html("Confirm Delete?");
		$(e.target).attr("class", "confirmDelete");
		
	},
	'click .confirmDelete': function(e) {
		e.preventDefault();
		console.log(this._id);
		Gurus.remove(this._id, function(err, result) {
			if (err) {
				console.log(err);
				console.log(err.stack);
			}
		});
	}
});