import React from "react";
import {Link} from "react-router-dom";

const bookTerm = (props) => {

    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.availableCopies}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name}</td>
            <td scope={"col"} className={"text-right"}>
                <Link className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </Link>

                <Link className={"btn btn-info"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}
                >Edit</Link>

                <Link className={"btn btn-success"}
                      onClick={() => props.onMarkAsTaken(props.term.id)}>
                    Mark As Taken
                </Link>

            </td>
        </tr>
    );
}

export default bookTerm;