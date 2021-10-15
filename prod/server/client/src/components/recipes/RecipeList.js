import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions';

class RecipeList extends Component {
	componentDidMount() {
		this.props.fetchRecipes();
	}
	renderRecipes() {
		return this.props.recipes.reverse().map((recipe) => {
			return (
				<div className="col s12 m6 l4" key={recipe._id}>
					<div className="card darken-1" key={recipe._id}>
						<div className="card-image waves-effect waves-block waves-light">
							<Link to={`/recipes/${recipe._id}`}>
								<img src={recipe.image} alt="recipe image" />
							</Link>
						</div>

						<div className="card-content ">
							<Link to={`/recipes/${recipe._id}`}>
								<span className="card-title activator grey-text text-darken-4">
									{recipe.title}
									<i className="material-icons right">more_vert</i>
								</span>
							</Link>
							<span>
								<i className="tiny material-icons ">thumb_up</i>
								{recipe.likes}
							</span>
							<span>
								<i className="tiny material-icons ">star</i>
								{recipe.star}
							</span>
						</div>
						<div className="card-reveal">
							<span className="card-title grey-text text-darken-4">
								{recipe.title}
								<i className="material-icons right">close</i>
							</span>
							<p>{recipe.description}</p>
						</div>
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row">{this.renderRecipes()}</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	//Object.values(obj):built-in JS function that takes an object as argument
	//all different values inside the object will be pulled out  and then inserted into an array
	return {
		recipes: Object.values(state.recipes),
	};
};
export default connect(mapStateToProps, { fetchRecipes })(RecipeList);
