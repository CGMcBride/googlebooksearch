import React, { Component } from "react";
import API from "../../../utils/API";

export default class index extends Component {
	state = {
		savedBooks: [],
	};
	componentDidMount() {
		this.loadBooks();
	}
	loadBooks = () => {
		API.getBook().then((res) => {
			this.setState({
				savedBooks: res.data,
			});
		});
	};
	deleteBook = (id) => {
		API.deleteBook(id).then(() => this.loadBooks());
	};
	render() {
		return (
			<div>
				{this.state.savedBooks.map(
					(book) => (
						<div className="p-3 my-5 border border-dark" key={book._id}>
							<h3>{book.title}</h3>
							<h6>Written by {book.authors}</h6>
							<div className="row">
								<div className="col-md-3">
									<img src={book.image} />
								</div>
								<div className="col-md-8">{book.description}</div>
							</div>
							<a href={book.link} target="_blank" className="btn btn-success">
								View
							</a>
							<span
								onClick={() => this.deleteBook(book._id)}
								className="btn btn-danger ml-2"
							>
								Delete
							</span>
						</div>
					)
					// console.log(book)
				)}
			</div>
		);
	}
}
