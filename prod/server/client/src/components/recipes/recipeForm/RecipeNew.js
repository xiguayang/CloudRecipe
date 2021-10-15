import React from 'react';
import { reduxForm } from 'redux-form';
import RecipeForm from './RecipeForm';
import RecipeFormReview from './RecipeFormReview';
class RecipeNew extends React.Component {
	state = { showFormReview: false };
	renderContent() {
		if (this.state.showFormReview) {
			return <RecipeFormReview onCancel={() => this.setState({ showFormReview: false })} />;
		}
		return <RecipeForm onRecipeSubmit={() => this.setState({ showFormReview: true })} />;
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}
export default reduxForm({ form: 'recipeForm' })(RecipeNew);
