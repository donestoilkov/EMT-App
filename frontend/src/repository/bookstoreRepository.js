import axios from "../custom-axios/axios";

const BookstoreService = {
    fetchBooks: () => {
        return axios.get(`/books`)
    },

    fetchCategories: () => {
        return axios.get(`/categories`)
    },

    fetchAuthors: () => {
        return axios.get(`/authors`)
    },

    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    },

    addBook: (name, categoryId, authorId, availableCopies) => {
        return axios.post(`/books/add`, {
            "name" : name,
            "categoryId" : categoryId,
            "authorId" : authorId,
            "availableCopies" : availableCopies
        })
    },

    editBook: (id, name, categoryId, authorId, availableCopies) => {
        return axios.put(`books/edit/${id}`, {
            "name" : name,
            "categoryId" : categoryId,
            "authorId" : authorId,
            "availableCopies" : availableCopies
        })
    },

    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },

    markAsTaken: (id) => {
        return axios.post(`/books/marktaken/${id}`);
    }
}

export default BookstoreService;
