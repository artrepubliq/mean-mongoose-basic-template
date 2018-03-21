var mongoose = require('mongoose');

//schema
var categorySchema = mongoose.Schema({
	name: String,
	email: String
});

var Category = module.exports = mongoose.model('Category', categorySchema);


//get data
module.exports.getCategories = function(query,callback,limit){
	Category.find(query,callback).limit(limit);
}

//create data
module.exports.addCategories = function(category,callback){
	Category.create(category,callback);
}

//edit category
module.exports.getCategoryById = function(id, callback) {
	Category.findById(id,callback);
}

module.exports.updateCategory = function(query, update, options, callback) {
	Category.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeCategory = function(query, callback) {
	Category.remove(query, callback);
}

module.exports.countC = function(query,callback) {
	Category.count(query,callback);
}