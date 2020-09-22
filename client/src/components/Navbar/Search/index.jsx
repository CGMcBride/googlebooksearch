import React, { Component } from "react";

import API from "../../../utils/API";
import { Jumbotron, Form, FormControl, Button } from "react-bootstrap";
// import { query } from "express";

export default class index extends Component {
	state = {
		search: "",
		books: [],
	};
	handleInput = (event) => {
		// const name = event.target.name;
		const value = event.target.value;
		console.log(value);
		// this.setState({
		// 	[name]: value,
		// });
		this.setState({
			search: value,
		});
	};
	searchBook = (query) => {
		API.getBooks(query)
			.then((res) =>
				this.setState({
					books: res.data.items,
				})
			)
			.catch((err) => console.error(err));
	};
	food = (event) => {
		event.preventDefault();
		// const value = document.getElementById("search").value;
		// console.log(value);
		this.searchBook(this.state.search);
	};
	newBook = (book) => {
		return {
			_id: book.id,
			title: book.volumeInfo.title,
			authors: book.volumeInfo.authors,
			description: book.volumeInfo.description,
			image: book.volumeInfo.imageLinks.thumbnail,
			link: book.volumeInfo.previewLink,
		};
	};

	saveBook = (book) => {
		let bookData = this.newBook(book);
		console.log(bookData);
		API.saveBook(bookData).then(() => {
			console.log(book);
		});
	};
	render() {
		return (
			<div>
				<Jumbotron className="text-center">
					<h1 className="header">React Google Book Search</h1>
					<h5>Search and save your books of intrest</h5>
				</Jumbotron>
				{/* <Form inline className="justify-content-center">
					<FormControl
						type="text"
						placeholder="Search Your Book"
						className="mr-sm-2 w-50"
						// search={this.state.search}
						handleInputChange={this.handleInput}
						// handleFormSubmit={this.food}
					/>
					<Button onClick={this.food} variant="outline-dark">
						Search Your Book
					</Button>
				</Form> */}
				<form>
					<input
						type="text"
						onChange={this.handleInput}
						placeholder="Search a Book"
					/>
					<button onClick={this.food}>Search</button>
				</form>

				<div>
					{this.state.books.map(
						(book) => (
							<div className="p-3 my-5 border border-dark" key={book.id}>
								<h3>{book.volumeInfo.title}</h3>
								<h6>Written by {book.volumeInfo.authors}</h6>
								<div className="row">
									<div className="col-md-3">
										<img src={book.volumeInfo.imageLinks.thumbnail} />
									</div>
									<div className="col-md-8">{book.volumeInfo.description}</div>
								</div>
								<a
									href={book.volumeInfo.previewLink}
									target="_blank"
									className="btn btn-success"
								>
									View
								</a>
								<span
									onClick={() => this.saveBook(book)}
									className="btn btn-info ml-2"
								>
									Save
								</span>
							</div>
						)
						// console.log(book)
					)}
				</div>
			</div>
		);
	}
}
