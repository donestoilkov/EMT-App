import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import Header from "../Header/header"
import Books from "../Books/BookList/books";
import Categories from "../Categories/categories";
import Authors from "../Authors/authors";

import './App.css';
import BookstoreService from "../../repository/bookstoreRepository";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: []
        }
    }

    loadBooks = () => {
        BookstoreService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        BookstoreService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadCategories = () => {
        BookstoreService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/books"} exact render={() => <Books books={this.state.books}/>}/>
                        <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>}/>
                        <Route path={"/authors"} exact render={() => <Authors authors={this.state.authors}/>}/>
                        <Redirect to={"/books"}/>
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;