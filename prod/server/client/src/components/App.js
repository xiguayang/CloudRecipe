import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './partials/Header';
import Footer from './partials/Footer';
import RecipeList from './recipes/RecipeList';
import Portal from './portal/Portal';
import RecipeNew from './recipes/recipeForm/RecipeNew';
import RecipeShow from './recipes/RecipeShow';
class App extends React.Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact={true} path="/" component={RecipeList} />
						<Route exact path="/portal" component={Portal} />
						<Route exact={true} path="/recipe/new" component={RecipeNew} />
						<Route exact={true} path="/recipes/:id" component={RecipeShow} />

						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default connect(null, actions)(App);
