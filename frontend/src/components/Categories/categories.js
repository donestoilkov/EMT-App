import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import BookTerm from "../Books/BookTerms/bookTerm";

const categories = (props) => {

    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Categories</th>
                        </tr>
                        </thead>

                        <tbody>
                        {props.categories.map((term) => {
                            return (
                                <tr>
                                    <td scope={"col"}>{term}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;