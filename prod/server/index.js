//import express library
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
require('./models/User');
require('./models/Recipe');
require('./services/passport');
//create a express application
const app = express();
//create a new GoogleStrategy object
app.use(
	cookieSession({
		//set the maximum time the cookie expires automatically
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey], //set the cookieKey inside config/keys.js
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/recipeRoutes')(app);

//tell NodeJS to listen to this port
//using environment variable defined by Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
