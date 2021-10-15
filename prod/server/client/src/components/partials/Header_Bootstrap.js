import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Portal from '../portal/Portal';
import RecipeNew from '../recipes/RecipeNew';
import Collection from '../recipes/Collection';

class Header_Bootstrap extends Component {
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
				return (
					<Navbar.Collapse id="responsive-navbar-nav ">
						<Nav className="me-auto">
							<Nav.Link href="/portal">
								<Portal />
							</Nav.Link>
							<Nav.Link href="/collection">
								<Collection />
							</Nav.Link>
							<Nav.Link href="/recipe/new">
								<RecipeNew />
							</Nav.Link>
							<Nav.Link href="/auth/google">Login With Google</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				);
		}
	}
	render() {
		return (
			<Navbar collapseOnSelect bg="light" variant="light" expand="lg">
				<Container>
					<Navbar.Brand href="/">Cloud Recipe</Navbar.Brand>
					<Navbar.Toggle className="justify-content-end" aria-controls="responsive-navbar-nav" />
					{this.renderContent()}
				</Container>
			</Navbar>
		);
	}
}
// function mapStateToProps(state) {
// 	return { auth: state.auth };
// }
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Header_Bootstrap);
