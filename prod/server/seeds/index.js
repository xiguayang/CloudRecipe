const mongoose = require('mongoose');
//add seeds model, . up a level from seeds and up one more level to go to models

const { descriptors, foodname } = require('./seedHelpers');
const keys = require('../config/keys');
require('../models/User');
require('../models/Recipe');
mongoose.connect(keys.mongoURI);
const Recipe = mongoose.model('Recipe');

//function: given a array, get random element from the array
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	//before inserting data, clear the db
	await Recipe.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const star = Math.floor(Math.random() * 100);
		const likes = Math.floor(Math.random() * 200) + 10;

		const newRecipe = new Recipe({
			title: `${sample(descriptors)} ${sample(foodname)}`,
			image: 'https://source.unsplash.com/1600x900/?food',
			star,
			likes,
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo saepe reiciendis explicabo quidem, cumque, fugit unde repellat ullam illum rerum? Dolorem nisi fugit numquam voluptatem iusto! Enim, in doloremque.',
		});
		await newRecipe.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
