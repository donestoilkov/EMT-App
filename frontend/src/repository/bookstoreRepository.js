import axios from "../custom-axios/axios";

const BookstoreService = {
    fetchBooks: () => {
        return axios.get("/books")
    },

    fetchCategories: () => {
        return axios.get("/categories")
    },

    fetchAuthors: () => {
        return axios.get("/authors")
    }
}

export default BookstoreService;
