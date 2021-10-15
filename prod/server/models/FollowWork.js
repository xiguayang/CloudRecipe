const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const followWorkSchema = new Schema({
	description: String,
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	_recipe: {
		type: Schema.Types.ObjectId,
		ref: 'Recipe',
	},
	image: String,
	likes: Number,
});
module.exports = mongoose.model('FollowWork', followWorkSchema);
