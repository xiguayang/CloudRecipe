import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions';

class RecipeShow extends Component {
	componentDidMount() {
		this.props.fetchRecipe(this.props.match.params.id);
	}

	renderRecipeThumb() {
		const recipe = this.props.recipe;
		return (
			<div className="card darken-1" key={recipe._id}>
				<div className="card-image waves-effect waves-block waves-light">
					<img src={recipe.image} alt="recipe image" />
				</div>
				<div className="card-content ">
					<span className="card-title   center">{recipe.title}</span>
					<p>{recipe.description}</p>
					<span className="right ">
						<i className="tiny material-icons ">thumb_up</i>
						{recipe.likes}
					</span>
				</div>
			</div>
		);
	}
	renderIngredient() {
		const { ingredients } = this.props.recipe;
		return ingredients.map((ingredient) => {
			return (
				<tr key={ingredient._id}>
					<td>{ingredient.name}</td>
					<td>
						{ingredient.amount} {ingredient.unit}
					</td>
				</tr>
			);
		});
	}
	renderSteps() {
		const { steps } = this.props.recipe;
		return steps.map((step) => {
			return (
				<div calssName="row" key={step._id}>
					<div className="col s1">{step.stepNum}</div>
					<div className="col s7">{step.description}</div>
					<div className="col s4">{step.image}</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div className="container">
				<div className="divider"></div>
				<div className="section">
					<div>{this.renderRecipeThumb()}</div>
				</div>
				<div className="divider"></div>
				<div className="section">
					<h5 className="grey-text text-darken-4">Ingredients</h5>
					<table className="centered highlight ">
						<tbody>{this.renderIngredient()}</tbody>
					</table>
				</div>
				<div className="divider"></div>
				<div className="section">
					<h5 className="grey-text text-darken-4">Steps</h5>
					<div className="container">{this.renderSteps()}</div>
				</div>

				<div></div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { recipe: state.recipes[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchRecipe })(RecipeShow);
