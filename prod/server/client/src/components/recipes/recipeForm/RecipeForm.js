//SurveyForm shows a form for a user to add input
import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import RecipeField from './RecipeField';
import formFields from './formFields';
class RecipeForm extends React.Component {
	renderRecipeThumbFileds() {
		return _.map(formFields, ({ label, name }) => {
			return <Field key={name} component={RecipeField} type="text" label={label} name={name} />;
		});
	}
	render() {
		return (
			<div>
				<h3>Create your Recipe</h3>
				<form onSubmit={this.props.handleSubmit(this.props.onRecipeSubmit)}>
					{this.renderRecipeThumbFileds()}
					<Link to="/" className="red btn-flat white-text">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}
//passing an object called values contains all values from the form
function validate(values) {
	const errors = {};

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}
export default reduxForm({
	// validate: validate,
	validate,
	form: 'recipeForm',
	destroyOnUnmount: false,
})(RecipeForm);
