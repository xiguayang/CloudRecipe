const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: String,
	googleId: String,
	avatar: String,
	_collects: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],

	_recipe: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
	_followWork: [{ type: Schema.Types.ObjectId, ref: 'FollowWork' }],
});
module.exports = mongoose.model('User', userSchema);
