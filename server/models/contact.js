var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', 
	{
		name: String, 
		email: String, 
		company: String, 
		title: String,
		contacted: Boolean
	});