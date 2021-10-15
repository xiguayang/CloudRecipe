// const _ = require('lodash');
const requireLogin = require('../middlewares/requireLogin.js');
const mongoose = require('mongoose');
//the model class: pull out the model of mongoose
const Recipe = mongoose.model('Recipe');

module.exports = (app) => {
	app.get('/api/recipes/:id', async (req, res) => {
		const recipe = await Recipe.findById(req.params.id);
		res.send(recipe);
	});

	app.get('/api/recipes', async (req, res) => {
		const recipes = await Recipe.find({});
		if (!recipes) {
			console.log('no');
		} else {
			res.send(recipes);
		}
	});
	app.post('/api/recipes', requireLogin, async (req, res) => {
		const { title, description, image } = req.body;
		const recipe = new Survey({
			title: title,
			description,
			image,

			_user: req.user.id,
			dateSent: Date.now(),
		});
		await recipe.save();
	});
	//make sure the user is logged in using middleware
	// app.post('/api/recipes', requireLogin, (req, res) => {});
};
