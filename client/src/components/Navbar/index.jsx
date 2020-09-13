import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Container,
} from "react-bootstrap";
import Saved from "./Saved";
import Search from "./Search";

export default function index() {
	return (
		<div>
			<Router>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">Google Books Search</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">Search</Nav.Link>
							<Nav.Link href="/saved">Saved</Nav.Link>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<div className="mt-5">
					<Container className="p-3">
						<Switch>
							<Route exact path="/saved" component={Saved} />
							<Route exact path="/" component={Search} />
						</Switch>
					</Container>
				</div>
			</Router>
		</div>
	);
}
