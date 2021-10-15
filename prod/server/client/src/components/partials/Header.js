// import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Portal from '../portal/Portal';
import RecipeNew from '../recipes/recipeForm/RecipeNew';
import Collection from '../recipes/Collection';
class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<a href="/portal">Portal</a>
					</li>,
					<li key="3">
						<a href="/collection">Collection</a>
					</li>,
					<li key="4">
						<a href="/recipe/new">Share Recipe</a>
					</li>,
					<li key="2">
						<a href="/api/logout">Logout</a>
					</li>,
				];
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="left brand-logo">
						Cloud Recipe
					</a>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}
// function mapStateToProps(state) {
// 	return { auth: state.auth };
// }
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Header);
