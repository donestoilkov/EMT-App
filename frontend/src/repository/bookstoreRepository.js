import axios from "../custom-axios/axios";

const BookstoreService = {
    fetchBooks: () => {
        return axios.get("/books")
    }
}

export default BookstoreService;
