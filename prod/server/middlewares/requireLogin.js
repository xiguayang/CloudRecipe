module.exports = (req, res, next) => {
	//next: pass to next middleware or route handler
	if (!req.user) {
		return res.status(401).send({ error: 'You must log in to add credits!' });
	}
	next();
};
