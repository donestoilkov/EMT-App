import React, {Component} from "react";
import Books from "../Books/books";

import './App.css';
import BookstoreService from "../../repository/bookstoreRepository";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    loadAuthors = () => {
        BookstoreService.fetchBooks()
            .then((data) => {
                this.setState({
                    books : data.data
                })
            });
    }

    componentDidMount() {
        this.loadAuthors();
    }

    render() {
        return (
            <div>
                <Books books={this.state.books}/>
            </div>
        );
    }
}

export default App;