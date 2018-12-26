var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var newsSchema = new Schema({
	'title' : String,
	'description' : String,
	'image' : String,
	'url' : String,
	'content' : String
});

module.exports = mongoose.model('news', newsSchema);
