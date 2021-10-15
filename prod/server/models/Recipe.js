const mongoose = require('mongoose');
const { Schema } = mongoose;
const IngredientSchema = require('./Ingredient');
const StepSchema = require('./Step');
const FollowWork = require('./FollowWork');
const Comment = require('./Comment');
const User = require('./User');
const recipeSchema = new Schema({
	title: String,
	image: String,
	description: String,
	_user: {
		type: Schema.Types.ObjectId,
		ref: User,
	},

	_comments: [
		{
			type: Schema.Types.ObjectId,
			ref: Comment,
		},
	],
	ingredients: [IngredientSchema],
	likes: Number,
	star: Number,
	steps: [StepSchema],

	_followWork: [
		{
			type: Schema.Types.ObjectId,
			ref: FollowWork,
		},
	],
});
module.exports = mongoose.model('Recipe', recipeSchema);
