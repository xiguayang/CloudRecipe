const mongoose = require('mongoose');
const { Schema } = mongoose;
const ingredientSchema = new Schema({
	name: String,
	amount: Number,
	unit: String,
});
module.exports = ingredientSchema;
