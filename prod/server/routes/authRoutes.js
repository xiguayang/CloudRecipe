const passport = require('passport');
module.exports = (app) => {
	//scope: ask for google oauth to give us profile and email
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);

	//route handler to handle with google callback
	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		//after user signed in, redirect to the '/surveys'
		res.redirect('/');
	});
	//add logout routes
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
	//add route to show current user
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
