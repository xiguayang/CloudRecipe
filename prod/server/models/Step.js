const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stepSchema = new Schema({
	stepNum: Number,
	description: String,
	image: String,
});
module.exports = stepSchema;
