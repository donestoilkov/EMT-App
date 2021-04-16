import React from "react";
import {useHistory} from "react-router-dom";

const BookEdit = (props) => {

    const history = useHistory();

    const [formData, updateFormData] = React.useState({
        name: "",
        categoryId: 1,
        authorId: 1,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const categoryId = formData.categoryId;
        const authorId = formData.authorId;
        const availableCopies = formData.availableCopies > 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, categoryId, authorId, availableCopies);
        history.push("/books");
    }


    return (
        <div className="row mt-5">
            <div className="col-md-5">

                <form onSubmit={onFormSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Available copies</label>
                        <input type="number"
                               min = "0"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term.id}>{term}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name + ' ' + term.surname}</option>
                            )}
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default BookEdit;