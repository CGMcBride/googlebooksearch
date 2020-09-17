import React, { Component } from "react";

import API from "../../../utils/API";
import { Jumbotron, Form, FormControl, Button } from "react-bootstrap";

export default class index extends Component {
	state = {
		search: "",
		books: [],
	};
	food = (event) => {
		event.preventDefault();
		const value = document.getElementById("search").value;
		console.log(value);
	};
	render() {
		return (
			<div>
				<Jumbotron className="text-center">
					<h1 className="header">React Google Book Search</h1>
					<h5>Search and save your books of intrest</h5>
				</Jumbotron>
				<Form inline className="justify-content-center">
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2 w-50"
						search={this.state.search}
					/>
					<Button onClick={this.food} variant="outline-dark">
						Search Your Book
					</Button>
				</Form>
			</div>
		);
	}
}
