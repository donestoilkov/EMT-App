import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import Header from "../Header/header";
import Books from "../Books/BookList/books";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEd";
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
            authors: [],
            selectedBook: {}
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

    deleteBook = (id) => {
        BookstoreService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    addBook = (name, categoryId, authorId, availableCopies) => {
        BookstoreService.addBook(name, categoryId, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    getBook = (id) => {
        BookstoreService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            });
    }

    editBook = (id, name, categoryId, authorId, availableCopies) => {
        BookstoreService.editBook(id, name, categoryId, authorId, availableCopies)
            .then(() => {
                this.loadBooks()
            });
    }

    markAsTaken = (id) => {
        BookstoreService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }

    render() {
        console.log(this.state.selectedBook);
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/books/add"} exact render={() => <BookAdd
                            categories={this.state.categories}
                            authors={this.state.authors}
                            onAddBook={this.addBook}
                        />}/>

                        <Route path={"/books/edit/:id"} exact render={() => <BookEdit
                            categories={this.state.categories}
                            authors={this.state.authors}
                            onEditBook={this.editBook}
                            book={this.state.selectedBook}
                        />}/>


                        <Route path={"/books"} exact render={() => <Books
                            books={this.state.books}
                            onDelete={this.deleteBook}
                            onEdit={this.getBook}
                            onMarkAsTaken={this.markAsTaken}
                        />}/>

                        <Route path={"/categories"} exact render={() => <Categories
                            categories={this.state.categories}
                        />}/>

                        <Route path={"/authors"} exact render={() => <Authors
                            authors={this.state.authors}
                        />}/>

                        <Redirect to={"/books"}/>
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;